import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Link from 'next/link'
import { getBusinessConfig, getActiveServiceAreas } from '@/utils/businessHelpers'
import {
  createBreadcrumbListStructuredData,
  createCollectionPageStructuredData,
  createItemListStructuredData,
  getServiceAreasMetadata,
} from '@/utils/metadataHelpers'

export const metadata = getServiceAreasMetadata()

export default function ServiceAreasPage() {
  const config = getBusinessConfig()
  const serviceAreas = getActiveServiceAreas()
  const breadcrumbStructuredData = createBreadcrumbListStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
  ])
  const collectionPageStructuredData = createCollectionPageStructuredData({
    name: `${config.business.name} Service Areas`,
    path: '/service-areas',
    description: `Browse the cities and communities where ${config.business.name} provides full-service junk removal throughout ${config.contact.address.serviceArea}.`,
  })
  const itemListStructuredData = createItemListStructuredData(
    '/service-areas',
    serviceAreas.map((area) => ({
      name: `${area.name}, ${area.state}`,
      path: `/service-areas/${area.slug}`,
      entityId: `${config.website.url.replace(/\/$/, '')}/service-areas/${area.slug}#webpage`,
    })),
  )

  return (
    <Layout
      ctaProps={{
        title: `NEED JUNK REMOVAL IN ${config.contact.address.serviceArea.toUpperCase()}?`,
        description: `Book a full-service junk removal crew. We lift, load, haul, and sort unwanted items throughout ${config.contact.address.serviceArea}.`,
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
        title="NORTHERN UTAH SERVICE AREAS"
        subtitle="Full-service junk removal in Cache, Box Elder, and Weber County"
        description={`${config.business.name} serves ${serviceAreas.map((area) => area.name).join(', ')} and nearby communities. Our crew does the lifting and loading, so customers do not have to rent or load a dumpster.`}
        buttonText="Schedule Your Removal"
        buttonLink="https://calendar.app.google/S8TaQaP9DRGngVtV7"
        backgroundImage="/images/north-utah-ogden-mountain.jpeg"
      />

      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              CITY-SPECIFIC JUNK REMOVAL PAGES
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each local page now has unique copy, metadata, FAQs, service links, pricing references,
              and review placeholders for real Google reviews. Choose your city to see the details.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <AnimatedSection key={area.slug} delay={index * 100} direction="up">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${area.image || area.content?.hero?.backgroundImage || '/images/north-utah-ogden-mountain.jpeg'})`,
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    {area.name}, {area.state}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-dark mb-2">Helpful for:</h4>
                    <ul className="space-y-1">
                      {area.specialties.map((specialty) => (
                        <li key={specialty} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary mr-2">•</span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-white border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors rounded"
                    >
                      Junk Removal in {area.name}
                    </Link>
                    <Button href="https://calendar.app.google/S8TaQaP9DRGngVtV7" variant="primary" size="sm" className="w-full">
                      Schedule Removal in {area.name}
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section background="gray" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
                FULL-SERVICE MEANS WE DO THE LIFTING
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    No dumpster loading
                  </h3>
                  <p className="text-gray-600">
                    Our crew removes junk from the room, garage, yard, shed, rental, or business space,
                    then loads the truck or trailer for you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    Clear local pricing references
                  </h3>
                  <p className="text-gray-600">
                    Published reference points include $50 single item, $95 truck load, $320 half trailer,
                    $490 full trailer, and $849 multi-trailer projects.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                    Responsible disposal mindset
                  </h3>
                  <p className="text-gray-600">
                    Usable and recyclable items are separated when practical before remaining material is
                    sent to appropriate local disposal options.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
              <div
                className="bg-cover bg-center rounded-lg h-96 shadow-lg"
                style={{
                  backgroundImage: "url('/images/north-utah-ogden-mountain.jpeg')",
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-brand-dark">
                    {serviceAreas.length}
                  </div>
                  <div className="text-sm font-semibold text-brand-dark">CITY PAGES</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section paddingY="xl">
        <FAQ
          title="SERVICE AREA QUESTIONS"
          subtitle="Common questions about full-service junk removal across Northern Utah."
          items={[
            {
              question: 'Do you serve every city listed on this page?',
              answer:
                'Yes. These are the active service-area pages currently represented in the website data. Nearby communities may also be available by quote.',
            },
            {
              question: 'Do customers need to move items outside first?',
              answer:
                'No. Free Space Junk Removal & Cleaning is full-service. Our crew lifts, carries, loads, and hauls the items included in your quote.',
            },
            {
              question: 'How much does junk removal cost?',
              answer:
                'Pricing depends on volume, item type, and access. Reference points are $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer projects.',
            },
            {
              question: 'How do I schedule service?',
              answer:
                'Use the online scheduling link or call (385) 326-8426 for a free quote and availability in your city.',
            },
          ]}
        />
      </Section>
    </Layout>
  )
}
