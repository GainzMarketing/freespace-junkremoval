import nextConfig from '../../next.config.mjs'
import {
  getContactMetadata,
  getHomeMetadata,
  getServiceAreaMetadata,
  getServiceAreasMetadata,
  getServiceMetadata,
  getServicesMetadata,
} from '@/utils/metadataHelpers'
import { describe, expect, it } from 'vitest'

const preferredOrigin = 'https://www.freespace-junkremoval.com'
const apexHost = 'freespace-junkremoval.com'

async function getRedirects() {
  if (typeof nextConfig.redirects !== 'function') {
    throw new Error('next.config.mjs must expose redirects()')
  }

  return nextConfig.redirects()
}

describe('canonical domain configuration', () => {
  it('permanently redirects apex host requests to the matching www URL', async () => {
    const redirects = await getRedirects()

    expect(redirects).toContainEqual({
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: apexHost,
        },
      ],
      destination: `${preferredOrigin}/:path*`,
      permanent: true,
    })
  })

  it.each([
    ['home', getHomeMetadata(), `${preferredOrigin}/`],
    ['contact', getContactMetadata(), `${preferredOrigin}/contact`],
    ['services index', getServicesMetadata(), `${preferredOrigin}/services`],
    [
      'service detail',
      getServiceMetadata('single-item-pickup'),
      `${preferredOrigin}/services/single-item-pickup`,
    ],
    ['service areas index', getServiceAreasMetadata(), `${preferredOrigin}/service-areas`],
    [
      'service area detail',
      getServiceAreaMetadata('ogden-utah'),
      `${preferredOrigin}/service-areas/ogden-utah`,
    ],
  ])('uses a www canonical for %s metadata', (_label, metadata, canonicalUrl) => {
    expect(metadata.alternates?.canonical).toBe(canonicalUrl)
    expect(metadata.openGraph?.url).toBe(canonicalUrl)
    expect(metadata.title).toBeDefined()
    expect(metadata.description).toBeDefined()
  })
})
