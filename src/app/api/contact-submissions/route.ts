import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import type { Where } from 'payload'
import config from '@payload-config'

const LEADS_ALLOWED_SORTS = new Set(['createdAt', '-createdAt', 'name', '-name', 'status', '-status'])
const LEADS_ALLOWED_STATUSES = new Set(['new', 'in-progress', 'responded', 'resolved', 'archived'])

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const data = await request.json()

    // Honeypot: hidden "website" field real visitors never see. Bots that
    // fill it get a fake success and nothing is stored.
    if (typeof data.website === 'string' && data.website.trim() !== '') {
      return NextResponse.json(
        { success: true, message: 'Contact submission received successfully' },
        { status: 201 },
      )
    }

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    // Create the contact submission in Payload
    const contactSubmission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        service: data.service || 'general',
        propertyType: data.propertyType || 'residential',
        urgency: data.urgency || 'standard',
        message: data.message || '',
        address: data.address || '',
        preferredContact: data.preferredContact || 'email',
        bestTimeToCall: data.bestTimeToCall || '',
        status: 'new',
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submission received successfully',
        id: contactSubmission.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error creating contact submission:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * GET /api/contact-submissions — the list endpoint behind the client portal's
 * Leads page. The CRM authenticates as a site user and passes flat query
 * params (page, limit, sort, search, from, to, status, excludeStatus).
 */
export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const { user } = await payload.auth({ headers: request.headers })
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const sp = request.nextUrl.searchParams
    const page = Math.max(1, Number.parseInt(sp.get('page') ?? '1', 10) || 1)
    const limit = Math.min(100, Math.max(1, Number.parseInt(sp.get('limit') ?? '25', 10) || 25))
    const sortRaw = sp.get('sort') ?? '-createdAt'
    const sort = LEADS_ALLOWED_SORTS.has(sortRaw) ? sortRaw : '-createdAt'

    const and: Where[] = []

    const search = sp.get('search')?.trim().slice(0, 200)
    if (search) {
      and.push({
        or: [
          { name: { like: search } },
          { email: { like: search } },
          { phone: { like: search } },
          { subject: { like: search } },
          { message: { like: search } },
        ],
      })
    }

    const from = sp.get('from')
    if (from && !Number.isNaN(Date.parse(from))) {
      and.push({ createdAt: { greater_than_equal: from } })
    }
    const to = sp.get('to')
    if (to && !Number.isNaN(Date.parse(to))) {
      and.push({ createdAt: { less_than_equal: to } })
    }

    const status = sp.get('status')
    if (status && LEADS_ALLOWED_STATUSES.has(status)) {
      and.push({ status: { equals: status } })
    }
    const excludeStatus = sp.get('excludeStatus')
    if (excludeStatus && LEADS_ALLOWED_STATUSES.has(excludeStatus)) {
      and.push({
        or: [{ status: { not_equals: excludeStatus } }, { status: { exists: false } }],
      })
    }

    const result = await payload.find({
      collection: 'contact-submissions',
      where: and.length ? { and } : undefined,
      page,
      limit,
      sort,
      depth: 0,
      overrideAccess: false,
      user,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error listing contact submissions:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
