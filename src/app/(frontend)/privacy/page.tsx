import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { createBreadcrumbListStructuredData, getPrivacyMetadata } from '@/utils/metadataHelpers'
import { getBusinessConfig } from '@/utils/businessHelpers'

export const metadata = getPrivacyMetadata()

export default function PrivacyPage() {
  const config = getBusinessConfig()
  const breadcrumbStructuredData = createBreadcrumbListStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
  ])

  return (
    <Layout
      ctaProps={{
        title: 'HAVE QUESTIONS BEFORE YOU BOOK?',
        description: `Contact ${config.business.name} for straightforward answers about junk removal scheduling, quotes, and service details.`,
        primaryButtonText: 'Contact Us',
        primaryButtonLink: '/contact',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Hero
        title="PRIVACY POLICY"
        subtitle={`${config.business.name} website and contact privacy information`}
        description="This page explains the basic information customers may share when contacting or scheduling with us and how to reach us with privacy questions."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="/images/north-utah-ogden-mountain.jpeg"
      />

      <Section paddingY="xl">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              Information Customers Share
            </h2>
            <p>
              Customers may share contact and project details with {config.business.name} when they
              call, email, submit a contact form, or use the scheduling link. This can include a
              name, phone number, email address, service address, preferred appointment time, and
              details about the items or cleanup that need junk removal service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              How Information Is Used
            </h2>
            <p>
              Information shared with us is used to respond to questions, schedule service, prepare
              accurate junk removal quotes, coordinate crews, and follow up about requested
              services. We keep this page intentionally limited to the site and customer-contact
              information used for normal service communication.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              Website Analytics
            </h2>
            <p>
              The website may use analytics tools to understand visits, page performance, and
              service interest so the site can be improved for Northern Utah customers. Analytics
              information is reviewed in aggregate and is separate from direct service scheduling
              conversations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              Privacy Questions
            </h2>
            <p>
              For privacy questions or to update information shared during a service inquiry,
              contact us at{' '}
              <a
                className="text-primary font-semibold hover:text-accent"
                href={`mailto:${config.contact.email.main}`}
              >
                {config.contact.email.main}
              </a>{' '}
              or call{' '}
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
            <p className="font-semibold text-brand-dark mb-4">
              Need help with a junk removal request?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="md">
                Contact Us
              </Button>
              <Button
                href="https://calendar.app.google/S8TaQaP9DRGngVtV7"
                variant="accent"
                size="md"
              >
                Schedule Online
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
