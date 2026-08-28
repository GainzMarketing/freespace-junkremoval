import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Link from 'next/link'
import { getBusinessConfig, getActiveServices } from '@/utils/businessHelpers'
import {
  createBreadcrumbListStructuredData,
  createCollectionPageStructuredData,
  createItemListStructuredData,
  getServicesMetadata,
} from '@/utils/metadataHelpers'

export const metadata = getServicesMetadata()

export default function ServicesPage() {
  const config = getBusinessConfig()
  const services = getActiveServices()
  const breadcrumbStructuredData = createBreadcrumbListStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ])
  const collectionPageStructuredData = createCollectionPageStructuredData({
    name: `${config.business.name} Services`,
    path: '/services',
    description: `Explore full-service junk removal services from ${config.business.name} throughout ${config.contact.address.serviceArea}.`,
  })
  const itemListStructuredData = createItemListStructuredData(
    '/services',
    services.map((service) => ({
      name: service.name,
      path: `/services/${service.slug}`,
      entityId: `${config.website.url.replace(/\/$/, '')}/services/${service.slug}#service`,
    })),
  )

  return (
    <Layout
      ctaProps={{
        title: `NEED JUNK REMOVAL IN ${config.contact.address.serviceArea.toUpperCase()}?`,
        description: `Book ${config.business.name} for full-service hauling. We lift, load, haul, and dispose responsibly so you do not have to load a dumpster.`,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageStructuredData),
        }}
      />
      {itemListStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListStructuredData),
          }}
        />
      )}
      <Hero
        title="FULL-SERVICE JUNK REMOVAL SERVICES"
        subtitle="Northern Utah hauling with the lifting and loading included"
        description={`${config.business.description} Choose the service that matches your cleanup: single item pickup, large loads, garage cleanouts, appliance removal, estate rooms, land cleanout, or construction cleanup.`}
        buttonText="Schedule Your Removal"
        buttonLink="https://calendar.app.google/S8TaQaP9DRGngVtV7"
        backgroundImage="/images/north-utah-ogden-mountain.jpeg"
      />

      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              JUNK REMOVAL OPTIONS FOR NORTHERN UTAH
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Every service is built around the same promise: our crew does the lifting, carrying,
              loading, hauling, and responsible sorting. Customers do not have to rent a dumpster or
              move bulky items to the curb before we arrive.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 100} direction="up">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.shortDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors mt-auto"
                  >
                    {service.buttonText || 'Learn More'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section background="gray" paddingY="xl">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              WHY FULL-SERVICE HAULING WORKS BETTER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">WE LIFT</h3>
                <p className="text-gray-600">Furniture, appliances, boxes, and bulky items are removed by the crew.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">WE LOAD</h3>
                <p className="text-gray-600">You do not have to load a dumpster, trailer, or truck yourself.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">WE HAUL</h3>
                <p className="text-gray-600">Items are sorted for donation, recycling, or appropriate disposal when practical.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Reference pricing: $50 single item, $95 truck load, $320 half trailer, $490 full
              trailer, and $849 multi-trailer projects.
            </p>
            <Button href="https://calendar.app.google/S8TaQaP9DRGngVtV7" variant="primary" size="lg">
              Get Your Free Quote
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  )
}
