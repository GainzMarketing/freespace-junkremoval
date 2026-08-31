import { describe, expect, it } from 'vitest'
import sitemap from '../../src/app/sitemap'
import { getActiveServiceAreas, getActiveServices } from '../../src/utils/businessHelpers'
import {
  getAboutMetadata,
  getBlogMetadata,
  getContactMetadata,
  getHomeMetadata,
  getPricingMetadata,
  getServiceAreaMetadata,
  getServiceAreasMetadata,
  getServiceMetadata,
  getServicesMetadata,
} from '../../src/utils/metadataHelpers'

function titleValue(title: unknown): string {
  if (typeof title === 'string') return title
  if (title && typeof title === 'object' && 'absolute' in title) {
    return String((title as { absolute: unknown }).absolute)
  }
  return ''
}

describe('frontend metadata', () => {
  it('uses unique titles for indexable frontend routes', () => {
    const routes = [
      ['/', getHomeMetadata()],
      ['/about', getAboutMetadata()],
      ['/contact', getContactMetadata()],
      ['/pricing', getPricingMetadata()],
      ['/services', getServicesMetadata()],
      ['/service-areas', getServiceAreasMetadata()],
      ['/blog', getBlogMetadata()],
      ...getActiveServices().map(
        (service) => [`/services/${service.slug}`, getServiceMetadata(service.slug)] as const,
      ),
      ...getActiveServiceAreas().map(
        (area) => [`/service-areas/${area.slug}`, getServiceAreaMetadata(area.slug)] as const,
      ),
    ] as const

    const titlesByRoute = routes.map(
      ([route, metadata]) => [route, titleValue(metadata.title)] as const,
    )
    const duplicates = titlesByRoute.filter(
      ([, title], index) =>
        titlesByRoute.findIndex(([, otherTitle]) => otherTitle === title) !== index,
    )

    expect(titlesByRoute).toHaveLength(
      7 + getActiveServices().length + getActiveServiceAreas().length,
    )
    expect(titlesByRoute.every(([, title]) => title.length > 0)).toBe(true)
    expect(duplicates).toEqual([])
  })

  it('keeps the sitemap aligned to real indexable pages', () => {
    const urls = sitemap().map((entry) => entry.url.toString())

    expect(urls.some((url) => url.endsWith('/pricing'))).toBe(true)
    expect(urls.some((url) => url.endsWith('/gallery'))).toBe(true)
  })
})
