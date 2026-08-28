import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import {
  createAboutPageStructuredData,
  createBreadcrumbListStructuredData,
  getAboutMetadata,
} from '@/utils/metadataHelpers'
import { getBusinessConfig } from '@/utils/businessHelpers'

export const metadata = getAboutMetadata()

export default function About() {
  const config = getBusinessConfig()
  const breadcrumbStructuredData = createBreadcrumbListStructuredData([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ])
  const aboutPageStructuredData = createAboutPageStructuredData({
    name: `About ${config.business.name}`,
    path: '/about',
    description: `${config.business.name} is a Hyrum-based full-service junk removal company serving Northern Utah with transparent pricing and responsible disposal.`,
  })

  return (
    <Layout
      ctaProps={{
        title: 'READY TO CLEAR SPACE?',
        description: `Contact ${config.business.name} for a free junk removal quote. Our crew lifts, loads, hauls, and sorts items responsibly throughout Northern Utah.`,
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
          __html: JSON.stringify(aboutPageStructuredData),
        }}
      />
      <Hero
        title={`ABOUT ${config.business.name.toUpperCase()}`}
        subtitle="Hyrum-based full-service junk removal for Northern Utah"
        description={`${config.business.missionStatement} Established in ${config.business.yearEstablished}, with honest present-tense service for homes, rentals, farms, and businesses.`}
        buttonText="Schedule Junk Removal"
        buttonLink="https://calendar.app.google/S8TaQaP9DRGngVtV7"
        backgroundImage="/images/north-utah-ogden-mountain.jpeg"
      />

      <Section paddingY="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">OUR STORY</h2>
          <div className="bg-accent p-6 rounded-lg shadow-lg inline-block mb-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-brand-dark">
                {config.business.yearEstablished}
              </div>
              <div className="text-sm font-semibold text-brand-dark">ESTABLISHED</div>
            </div>
          </div>
          <div className="text-left space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              {config.business.name} is based at {config.contact.address.street},{' '}
              {config.contact.address.city}, {config.contact.address.state} {config.contact.address.zip}
              and serves Northern Utah communities including Ogden, Logan, Brigham City, Hyrum,
              North Ogden, Willard, Plain City, West Haven, and Liberty.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The service is full-service junk removal: customers point to what needs to go, and the
              crew lifts, carries, loads, hauls, and sorts the items for donation, recycling, or
              appropriate disposal when practical. That means customers do not have to rent a
              dumpster or load heavy items themselves.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We keep the site copy honest for a business established in 2025. The focus is on clear
              pricing, careful work, easy scheduling, and responsible disposal rather than unsupported
              years-in-business, award, or certification claims.
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">OUR VALUES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical principles that guide every pickup and cleanout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">SAFETY</h3>
            <p className="text-gray-600">Careful lifting, loading, and property-aware removal practices.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">TRANSPARENCY</h3>
            <p className="text-gray-600">Straightforward quote conversations and published pricing references.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">SERVICE</h3>
            <p className="text-gray-600">Full-service hauling so customers do not load dumpsters or trucks.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">RESPONSIBILITY</h3>
            <p className="text-gray-600">Donation and recycling considered before disposal whenever practical.</p>
          </div>
        </div>
      </Section>

      <Section paddingY="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
            FULL-SERVICE, CLEARLY PRICED
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Published reference pricing includes $50 single item, $95 truck load, $320 half trailer,
            $490 full trailer, and $849 multi-trailer projects. Final quotes depend on volume, item
            type, and access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://calendar.app.google/S8TaQaP9DRGngVtV7" variant="primary" size="lg">
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
