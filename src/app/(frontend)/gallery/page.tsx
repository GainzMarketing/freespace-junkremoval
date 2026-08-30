import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import {
  getActiveServiceAreas,
  getActiveServices,
  getBusinessConfig,
} from '@/utils/businessHelpers'
import {
  createBreadcrumbListStructuredData,
  createCollectionPageStructuredData,
  getGalleryMetadata,
} from '@/utils/metadataHelpers'
import Link from 'next/link'

export const metadata = getGalleryMetadata()

export default function GalleryPage() {
  const config = getBusinessConfig()
  const services = getActiveServices()
  const serviceAreas = getActiveServiceAreas()
  const breadcrumbStructuredData = createBreadcrumbListStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
  ])
  const galleryStructuredData = createCollectionPageStructuredData({
    name: `${config.business.name} Gallery`,
    path: '/gallery',
    description: `Browse service photos and project examples for ${config.business.name} junk removal across ${config.contact.address.serviceArea}.`,
  })
  const galleryItems = [
    ...services.map((service) => ({
      title: service.name,
      description: service.shortDescription,
      image: service.image,
      href: `/services/${service.slug}`,
      cta: 'View Service',
    })),
    ...serviceAreas.slice(0, 6).map((area) => ({
      title: `${area.name}, ${area.state}`,
      description: area.description,
      image:
        area.image ||
        area.content?.hero?.backgroundImage ||
        '/images/north-utah-ogden-mountain.jpeg',
      href: `/service-areas/${area.slug}`,
      cta: 'View Area',
    })),
  ]

  return (
    <Layout
      ctaProps={{
        title: 'READY TO CLEAR SPACE?',
        description: `Schedule full-service junk removal with ${config.business.name}. Our crew lifts, loads, hauls, and sorts items responsibly throughout ${config.contact.address.serviceArea}.`,
        primaryButtonText: 'Schedule Junk Removal',
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
          __html: JSON.stringify(galleryStructuredData),
        }}
      />
      <Hero
        title="JUNK REMOVAL GALLERY"
        subtitle="Service photos and Northern Utah project examples"
        description={`See examples of the junk removal, cleanout, hauling, and service-area work represented on ${config.business.name}'s website.`}
        buttonText="Schedule Your Removal"
        buttonLink="https://calendar.app.google/S8TaQaP9DRGngVtV7"
        backgroundImage="/images/north-utah-ogden-mountain.jpeg"
      />

      <Section paddingY="xl">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              SERVICE AND CLEANOUT PHOTOS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Browse the site photos used for Free Space Junk Removal & Cleaning services, including
              item pickup, load-based junk removal, garage cleanouts, appliance removal,
              construction cleanup, and Northern Utah service-area pages.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <AnimatedSection
              key={`${item.href}-${item.title}`}
              delay={(index % 6) * 100}
              direction="up"
            >
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  aria-label={`${item.title} photo`}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed flex-1">{item.description}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                  >
                    {item.cta}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section background="gray" paddingY="xl">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
              NEED HELP WITH A SIMILAR CLEANOUT?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell us what needs to go and where it is located. We will quote based on item type,
              volume, and access, then handle the lifting, loading, hauling, and responsible
              sorting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://calendar.app.google/S8TaQaP9DRGngVtV7"
                variant="primary"
                size="lg"
              >
                Schedule Online
              </Button>
              <Button href={config.contact.phone.link} variant="secondary" size="lg">
                Call {config.contact.phone.display}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  )
}
