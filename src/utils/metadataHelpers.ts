import { Metadata } from 'next'
import { getBusinessConfig, getActiveServices, getActiveServiceAreas } from './businessHelpers'

/**
 * Generates dynamic metadata for pages based on business configuration
 */

const config = getBusinessConfig()

// TODO_OG_IMAGE_PATH: supply a confirmed 1200x630 PNG/JPG social share image.
// Existing brand assets include SVG logos and service photos, but no verified share image.
const TODO_OG_IMAGE_PATH: string | null = null

// TODO_OPENING_HOURS: confirm real hours before adding openingHours to LocalBusiness JSON-LD.
const TODO_OPENING_HOURS: string | null = null

// TODO_RATING_CONFIRMATION: task states 27 Google reviews at 5.0 average; confirm before future edits.
const GOOGLE_RATING_VALUE = '5.0'
const GOOGLE_REVIEW_COUNT = '27'

interface FAQStructuredDataItem {
  question: string
  answer: string
}

interface BreadcrumbStructuredDataItem {
  name: string
  path: string
}

interface ServiceStructuredDataInput {
  name: string
  slug: string
  description: string
}

interface PageStructuredDataInput {
  name: string
  path: string
  description: string
}

interface ItemListStructuredDataItem {
  name: string
  path: string
  entityId?: string
}

interface ServiceAreaStructuredDataInput {
  name: string
  slug: string
  state: string
  county?: string
  description: string
  placeType?: 'City' | 'AdministrativeArea'
}

function getCanonicalUrl(path = ''): string {
  const normalizedBaseUrl = config.website.url.replace(/\/$/, '')
  if (!path) return normalizedBaseUrl
  return `${normalizedBaseUrl}/${path.replace(/^\//, '')}`
}

function getShareImageMetadata() {
  if (!TODO_OG_IMAGE_PATH) return undefined

  return [
    {
      url: `${config.website.url}${TODO_OG_IMAGE_PATH}`,
      width: 1200,
      height: 630,
      alt: `${config.business.name} full-service junk removal`,
    },
  ]
}

function createPageMetadata(path: string, metadata: Metadata): Metadata {
  const canonicalUrl = getCanonicalUrl(path)
  const pageTitle = typeof metadata.title === 'string' ? metadata.title : config.seo.title
  const pageDescription = typeof metadata.description === 'string' ? metadata.description : config.seo.description
  const shareImages = getShareImageMetadata()

  return {
    ...metadata,
    title: { absolute: pageTitle },
    alternates: {
      ...metadata.alternates,
      canonical: canonicalUrl,
    },
    openGraph: {
      ...metadata.openGraph,
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: config.business.name,
      type: 'website',
      ...(shareImages ? { images: shareImages } : {}),
    },
    twitter: {
      ...metadata.twitter,
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      ...(shareImages ? { images: shareImages.map((image) => image.url) } : {}),
    },
  }
}

function getLocalBusinessId(): string {
  return `${getCanonicalUrl()}#localbusiness`
}

function getWebSiteId(): string {
  return `${getCanonicalUrl()}#website`
}

function getPageId(path: string): string {
  return `${getCanonicalUrl(path)}#webpage`
}

function getOfficialSameAsUrls(): string[] {
  const urls = new Set<string>()

  if (config.socialMedia.facebook?.startsWith('http')) {
    urls.add(config.socialMedia.facebook)
  }

  for (const socialLink of config.navigation.footer.social ?? []) {
    if (typeof socialLink.href !== 'string') continue
    if (!socialLink.href.startsWith('http')) continue
    urls.add(socialLink.href)
  }

  // TODO_SOCIAL_URLS: add other confirmed official social profiles when available.
  return [...urls]
}

function getAreaServedStructuredData() {
  const countyAreas = config.business.countiesServed.map((county) => ({
    '@type': 'AdministrativeArea',
    name: county,
    containedInPlace: {
      '@type': 'State',
      name: 'Utah',
    },
  }))

  const cityAreas = getActiveServiceAreas().map((area) => ({
    '@type': 'City',
    name: area.name,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: area.county || area.state,
      ...(area.county
        ? {
            containedInPlace: {
              '@type': 'State',
              name: area.state,
            },
          }
        : {}),
    },
  }))

  return [...countyAreas, ...cityAreas]
}

function getAggregateRatingStructuredData() {
  return {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_RATING_VALUE,
    reviewCount: GOOGLE_REVIEW_COUNT,
    bestRating: '5',
    worstRating: '1',
  }
}

/**
 * Base metadata that can be extended by specific pages
 */
export function getBaseMetadata(): Metadata {
  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: config.website.url,
      siteName: config.business.name,
      type: 'website',
      ...(getShareImageMetadata() ? { images: getShareImageMetadata() } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seo.title,
      description: config.seo.description,
      ...(getShareImageMetadata()
        ? { images: getShareImageMetadata()!.map((image) => image.url) }
        : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

/**
 * Home page metadata
 */
export function getHomeMetadata(): Metadata {
  return createPageMetadata('/', {
    ...getBaseMetadata(),
    title: 'Junk Removal in Northern Utah | Free Space Junk Removal & Cleaning',
    description: 'Full-service junk removal across Northern Utah. We lift, load, haul, and dispose responsibly for homes, rentals, farms, and businesses. Free quotes.',
    keywords: 'junk removal northern utah, full-service junk removal, junk hauling near me, furniture removal, appliance removal, ogden junk removal, logan junk removal, brigham city junk removal, local junk removal, residential junk removal, commercial junk removal'
  })
}

/**
 * About page metadata
 */
export function getAboutMetadata(): Metadata {
  return createPageMetadata('/about', {
    ...getBaseMetadata(),
    title: `About ${config.business.name} | Northern Utah Junk Removal`,
    description: `Learn about ${config.business.name}, a Hyrum-based full-service junk removal crew serving Northern Utah with upfront pricing and responsible disposal.`,
    keywords: `about ${config.business.name.toLowerCase()}, full-service junk removal, northern utah junk removal`,
  })
}

/**
 * Contact page metadata
 */
export function getContactMetadata(): Metadata {
  return createPageMetadata('/contact', {
    ...getBaseMetadata(),
    title: `Contact ${config.business.name} | Free Junk Removal Quotes`,
    description: `Contact ${config.business.name} for a free junk removal quote. Call ${config.contact.phone.display} or email ${config.contact.email.main}. Serving Northern Utah.`,
    keywords: `contact ${config.business.name.toLowerCase()}, free estimate, ${config.contact.address.serviceArea.toLowerCase()}, ${config.contact.phone.display}`,
  })
}

/**
 * Services page metadata
 */
export function getServicesMetadata(): Metadata {
  const services = getActiveServices()
  const serviceNames = services.map((service) => service.name.toLowerCase()).join(', ')

  return createPageMetadata('/services', {
    ...getBaseMetadata(),
    title: `Junk Removal Services in Northern Utah | Free Space`,
    description: `Full-service junk removal services throughout Northern Utah, including ${serviceNames}. Our crew lifts, loads, hauls, and sorts items responsibly.`,
    keywords: `junk removal services ${config.contact.address.serviceArea.toLowerCase()}, ${serviceNames}, full-service junk removal`,
  })
}

/**
 * Service areas page metadata
 */
export function getServiceAreasMetadata(): Metadata {
  const serviceAreas = getActiveServiceAreas()
  const areaNames = serviceAreas.map((area) => area.name).join(', ')

  return createPageMetadata('/service-areas', {
    ...getBaseMetadata(),
    title: `Service Areas | Full-Service Junk Removal in Northern Utah`,
    description: `${config.business.name} serves ${areaNames} and nearby communities with full-service junk removal, upfront pricing, and responsible disposal.`,
    keywords: `junk removal service areas, ${areaNames.toLowerCase()}, ${config.contact.address.serviceArea.toLowerCase()}`,
  })
}

/**
 * Blog page metadata
 */
export function getBlogMetadata(): Metadata {
  return createPageMetadata('/blog', {
    ...getBaseMetadata(),
    title: `${config.business.name} Blog | Junk Removal Tips`,
    description: `Junk removal, cleanout, pricing, and responsible disposal tips from ${config.business.name} for Northern Utah homes and businesses.`,
    keywords: `${config.business.name.toLowerCase()} blog, tips, industry news, ${config.contact.address.serviceArea.toLowerCase()}`,
  })
}

/**
 * Gallery page metadata
 */
export function getGalleryMetadata(): Metadata {
  return createPageMetadata('/gallery', {
    ...getBaseMetadata(),
    title: `${config.business.name} Gallery | Junk Removal Projects`,
    description: `View junk removal and cleanout project examples from ${config.business.name} across Northern Utah.`,
    keywords: `${config.business.name.toLowerCase()} gallery, work examples, before and after, ${config.contact.address.serviceArea.toLowerCase()}`,
  })
}

/**
 * Dynamic metadata for individual service pages
 */
export function getServiceMetadata(serviceSlug: string): Metadata {
  const services = getActiveServices()
  const service = services.find((s) => s.slug === serviceSlug)

  if (!service) {
    return getServicesMetadata() // Fallback to services page metadata
  }

  const title = service.seo?.title || `${service.name} Services | ${config.business.name}`
  const description = service.seo?.description || service.shortDescription

  return createPageMetadata(`/services/${service.slug}`, {
    ...getBaseMetadata(),
    title,
    description,
    keywords: `${service.name.toLowerCase()}, ${service.name.toLowerCase()} ${config.contact.address.serviceArea.toLowerCase()}, ${service.category}, full-service junk removal`,
  })
}

/**
 * Dynamic metadata for individual service area pages
 */
export function getServiceAreaMetadata(areaSlug: string): Metadata {
  const serviceAreas = getActiveServiceAreas()
  const area = serviceAreas.find((a) => a.slug === areaSlug)

  if (!area) {
    return getServiceAreasMetadata() // Fallback to service areas page metadata
  }

  const title = area.seo?.title || `${area.name} ${area.state} Services | ${config.business.name}`
  const description =
    area.seo?.description ||
    `${config.business.name} serves ${area.name}, ${area.state}. ${area.description} Contact us for junk removal in ${area.name}.`

  return createPageMetadata(`/service-areas/${area.slug}`, {
    ...getBaseMetadata(),
    title,
    description,
    keywords: `${area.name.toLowerCase()}, ${area.state.toLowerCase()}, ${config.business.name.toLowerCase()}, local junk removal ${area.name.toLowerCase()}`,
  })
}

/**
 * Generate structured data for the organization
 */
export function getOrganizationStructuredData() {
  const openingHours = TODO_OPENING_HOURS ? { openingHours: TODO_OPENING_HOURS } : {}

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': getLocalBusinessId(),
    name: config.business.name,
    alternateName: 'Free Space Junk Removal & Cleaning',
    description:
      'Full-service junk removal and cleaning in Northern Utah. The crew lifts, carries, loads, hauls, and sorts unwanted items for responsible disposal.',
    url: getCanonicalUrl(),
    telephone: config.contact.phone.display,
    email: config.contact.email.main,
    sameAs: getOfficialSameAsUrls(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address.street,
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.state,
      postalCode: config.contact.address.zip,
      addressCountry: 'US',
    },
    areaServed: getAreaServedStructuredData(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.7323',
      longitude: '-111.8766',
    },
    logo: `${getCanonicalUrl()}${config.branding.logo.main}`,
    foundingDate: config.business.yearEstablished.toString(),
    slogan: config.business.tagline,
    priceRange: '$50-$849+',
    paymentAccepted: ['Cash', 'Credit Card', 'Check'],
    aggregateRating: getAggregateRatingStructuredData(),
    ...openingHours,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Junk Removal Services',
      itemListElement: getActiveServices().map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDescription,
          url: getCanonicalUrl(`/services/${service.slug}`),
        },
      })),
    },
  }
}

export function createServiceAreaLocalBusinessStructuredData(input: ServiceAreaStructuredDataInput) {
  const openingHours = TODO_OPENING_HOURS ? { openingHours: TODO_OPENING_HOURS } : {}

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${getCanonicalUrl(`/service-areas/${input.slug}`)}#localbusiness`,
    name: config.business.name,
    description: input.description,
    url: getCanonicalUrl(`/service-areas/${input.slug}`),
    telephone: config.contact.phone.display,
    email: config.contact.email.main,
    sameAs: getOfficialSameAsUrls(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address.street,
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.state,
      postalCode: config.contact.address.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': input.placeType ?? 'City',
      name: input.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: input.county || input.state,
      },
    },
    logo: `${getCanonicalUrl()}${config.branding.logo.main}`,
    foundingDate: config.business.yearEstablished.toString(),
    priceRange: '$50-$849+',
    aggregateRating: getAggregateRatingStructuredData(),
    ...openingHours,
  }
}

export function getWebSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': getWebSiteId(),
    url: getCanonicalUrl(),
    name: config.business.name,
    publisher: {
      '@id': getLocalBusinessId(),
    },
  }
}

export function createFaqPageStructuredData(items: FAQStructuredDataItem[]) {
  if (!items.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function createBreadcrumbListStructuredData(items: BreadcrumbStructuredDataItem[]) {
  if (!items.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  }
}

export function createServiceStructuredData(input: ServiceStructuredDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${getCanonicalUrl(`/services/${input.slug}`)}#service`,
    name: input.name,
    serviceType: input.name,
    description: input.description,
    url: getCanonicalUrl(`/services/${input.slug}`),
    mainEntityOfPage: {
      '@id': getPageId(`/services/${input.slug}`),
    },
    provider: {
      '@id': getLocalBusinessId(),
    },
    areaServed: config.business.countiesServed.map((county) => ({
      '@type': 'AdministrativeArea',
      name: county,
    })),
  }
}

export function createServiceAreaPageStructuredData(input: ServiceAreaStructuredDataInput) {
  const path = `/service-areas/${input.slug}`
  const placeId = `${getCanonicalUrl(path)}#place`
  const serviceId = `${getCanonicalUrl(path)}#service`

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': getPageId(path),
    name: `${config.business.mainService} in ${input.name}, ${input.state}`,
    url: getCanonicalUrl(path),
    description: input.description,
    isPartOf: {
      '@id': getWebSiteId(),
    },
    about: [
      {
        '@id': getLocalBusinessId(),
      },
      {
        '@id': placeId,
      },
    ],
    mainEntity: {
      '@id': serviceId,
    },
  }
}

export function createServiceAreaPlaceStructuredData(input: ServiceAreaStructuredDataInput) {
  const path = `/service-areas/${input.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': input.placeType ?? 'City',
    '@id': `${getCanonicalUrl(path)}#place`,
    name: input.name,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: input.county || input.state,
      ...(input.county
        ? {
            containedInPlace: {
              '@type': 'State',
              name: input.state,
            },
          }
        : {}),
    },
  }
}

export function createAreaServiceStructuredData(input: ServiceAreaStructuredDataInput) {
  const path = `/service-areas/${input.slug}`
  const placeId = `${getCanonicalUrl(path)}#place`
  const pageId = getPageId(path)
  const localizedServiceName = `${config.business.mainService} in ${input.name}, ${input.state}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${getCanonicalUrl(path)}#service`,
    name: localizedServiceName,
    serviceType: config.business.mainService,
    description: input.description,
    url: getCanonicalUrl(path),
    provider: {
      '@id': getLocalBusinessId(),
    },
    areaServed: {
      '@id': placeId,
    },
    mainEntityOfPage: {
      '@id': pageId,
    },
  }
}

export function createAboutPageStructuredData(input: PageStructuredDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': getPageId(input.path),
    name: input.name,
    url: getCanonicalUrl(input.path),
    description: input.description,
    isPartOf: {
      '@id': getWebSiteId(),
    },
    about: {
      '@id': getLocalBusinessId(),
    },
    mainEntity: {
      '@id': getLocalBusinessId(),
    },
  }
}

export function createContactPageStructuredData(input: PageStructuredDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': getPageId(input.path),
    name: input.name,
    url: getCanonicalUrl(input.path),
    description: input.description,
    isPartOf: {
      '@id': getWebSiteId(),
    },
    about: {
      '@id': getLocalBusinessId(),
    },
    mainEntity: {
      '@id': getLocalBusinessId(),
    },
  }
}

export function createCollectionPageStructuredData(input: PageStructuredDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': getPageId(input.path),
    name: input.name,
    url: getCanonicalUrl(input.path),
    description: input.description,
    isPartOf: {
      '@id': getWebSiteId(),
    },
    about: {
      '@id': getLocalBusinessId(),
    },
  }
}

export function createBlogPageStructuredData(input: PageStructuredDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': ['CollectionPage', 'Blog'],
    '@id': getPageId(input.path),
    name: input.name,
    url: getCanonicalUrl(input.path),
    description: input.description,
    isPartOf: {
      '@id': getWebSiteId(),
    },
    publisher: {
      '@id': getLocalBusinessId(),
    },
    about: {
      '@id': getLocalBusinessId(),
    },
  }
}

export function createItemListStructuredData(path: string, items: ItemListStructuredDataItem[]) {
  if (!items.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${getCanonicalUrl(path)}#itemlist`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: item.entityId
        ? {
            '@id': item.entityId,
          }
        : getCanonicalUrl(item.path),
      name: item.name,
    })),
  }
}
