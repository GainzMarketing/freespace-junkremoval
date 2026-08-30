import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Image from 'next/image'
import {
  createBreadcrumbListStructuredData,
  createCollectionPageStructuredData,
  createItemListStructuredData,
  getGalleryMetadata,
} from '@/utils/metadataHelpers'
import { getBusinessConfig } from '@/utils/businessHelpers'

export const metadata = getGalleryMetadata()

const galleryItems = [
  {
    title: 'Appliance Removal',
    image: '/images/appliance-removal.jpg',
    description: 'Bulky appliance hauling for homes, rentals, and property cleanouts.',
  },
  {
    title: 'Garage Cleanout',
    image: '/images/garage-cleaning.jpeg',
    description: 'Garage and storage-space cleanouts with lifting, loading, and hauling included.',
  },
  {
    title: 'Estate Cleanout',
    image: '/images/estate-cleanout.jpeg',
    description: 'Room and estate cleanout support for families, landlords, and property managers.',
  },
  {
    title: 'Construction Cleanup',
    image: '/images/construction-cleanup.jpeg',
    description: 'Construction debris and renovation cleanup for Northern Utah projects.',
  },
  {
    title: 'Land Cleanout',
    image: '/images/land-cleanout.jpeg',
    description: 'Outdoor junk, property debris, and land cleanout hauling.',
  },
  {
    title: 'Large Load Junk Removal',
    image: '/images/large-load-junk.jpeg',
    description: 'Large junk removal loads handled by a full-service hauling crew.',
  },
]

export default function GalleryPage() {
  const config = getBusinessConfig()
  const breadcrumbStructuredData = createBreadcrumbListStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
  ])
  const collectionPageStructuredData = createCollectionPageStructuredData({
    name: `${config.business.name} Gallery`,
    path: '/gallery',
    description: `Junk removal and cleanout project examples from ${config.business.name} across Northern Utah.`,
  })
  const itemListStructuredData = createItemListStructuredData(
    '/gallery',
    galleryItems.map((item, index) => ({
      name: item.title,
      path: `/gallery#project-${index + 1}`,
    })),
  )

  return (
    <Layout
      ctaProps={{
        title: 'LIKE WHAT YOU SEE?',
        description: `Schedule ${config.business.name} for full-service junk removal, cleanouts, appliance removal, and property hauling across Northern Utah.`,
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
        title="JUNK REMOVAL GALLERY"
        subtitle="Project examples from Northern Utah cleanouts and hauling jobs"
        description="See examples of appliance removal, garage cleanouts, construction cleanup, land cleanout, estate cleanout, and large-load junk removal services."
        buttonText="Schedule Your Removal"
        buttonLink="https://calendar.app.google/S8TaQaP9DRGngVtV7"
        backgroundImage="/images/clean-garage.jpeg"
      />

      <Section paddingY="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">
            FULL-SERVICE JUNK REMOVAL PROJECT EXAMPLES
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Every project includes the same core service: our crew lifts, loads, hauls, and sorts
            items for donation, recycling, or appropriate disposal when practical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <article
              id={`project-${index + 1}`}
              key={item.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={`${item.title} project example`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <Button href="/services" variant="secondary" size="sm" className="mt-auto">
                  View Services
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="gray" paddingY="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">
            READY TO CLEAR SPACE?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {config.business.name} serves Ogden, Logan, Brigham City, Hyrum, North Ogden, Willard,
            Plain City, West Haven, Liberty, and nearby Northern Utah communities.
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
      </Section>
    </Layout>
  )
}
