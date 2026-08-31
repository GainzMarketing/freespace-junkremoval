import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { createBreadcrumbListStructuredData, getTermsMetadata } from '@/utils/metadataHelpers'
import { getBusinessConfig } from '@/utils/businessHelpers'

export const metadata = getTermsMetadata()

export default function TermsPage() {
  const config = getBusinessConfig()
  const breadcrumbStructuredData = createBreadcrumbListStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Terms of Service', path: '/terms' },
  ])

  return (
    <Layout
      ctaProps={{
        title: 'READY TO CLEAR SPACE?',
        description: `Schedule ${config.business.name} for full-service junk removal with clear quote conversations and responsible disposal whenever practical.`,
        primaryButtonText: 'Schedule Junk Removal',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Hero
        title="TERMS OF SERVICE"
        subtitle="Service information for scheduling junk removal"
        description="This page summarizes basic website and service expectations for customers contacting Free Space Junk Removal & Cleaning."
        buttonText="Schedule Junk Removal"
        buttonLink="https://calendar.app.google/S8TaQaP9DRGngVtV7"
        backgroundImage="/images/north-utah-ogden-mountain.jpeg"
      />

      <Section paddingY="xl">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              Website Information
            </h2>
            <p>
              This website provides general information about {config.business.name}, our junk
              removal services, service areas, pricing references, and ways to request scheduling.
              Website content is meant to help customers understand available services before
              contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              Quotes and Scheduling
            </h2>
            <p>
              Published prices are reference points for common load sizes and item types. Final
              quotes can depend on volume, access, item type, distance, disposal requirements, and
              crew availability. Appointment times are coordinated through direct communication or
              the scheduling link.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              Customer Preparation
            </h2>
            <p>
              Customers should identify the items that need removal, provide safe access to the work
              area, and tell the crew about any access, parking, property, or item-specific concerns
              before service begins. We handle lifting, loading, hauling, and sorting for donation,
              recycling, or appropriate disposal when practical.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Contact</h2>
            <p>
              Questions about service expectations, quotes, or scheduling can be directed to{' '}
              <a
                className="text-primary font-semibold hover:text-accent"
                href={`mailto:${config.contact.email.main}`}
              >
                {config.contact.email.main}
              </a>{' '}
              or{' '}
              <a
                className="text-primary font-semibold hover:text-accent"
                href={config.contact.phone.link}
              >
                {config.contact.phone.display}
              </a>
              .
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="font-semibold text-brand-dark mb-4">Need a junk removal quote?</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="https://calendar.app.google/S8TaQaP9DRGngVtV7"
                variant="primary"
                size="md"
              >
                Schedule Online
              </Button>
              <Button href="/pricing" variant="secondary" size="md">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
