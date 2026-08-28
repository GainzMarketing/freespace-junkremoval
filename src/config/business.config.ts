// Business Configuration - Generated from Google Sheets data
// Free Space Junk Removal & Cleaning - Professional Junk Removal Services

import { BusinessConfig } from './types'

export const businessConfig: BusinessConfig = {
  clientId: '6',
  business: {
    name: 'Free Space Junk Removal & Cleaning',
    tagline: 'Full-service junk removal for Northern Utah',
    description:
      'Full-service junk removal and cleaning for homes, rentals, farms, and businesses across Northern Utah. Our crew lifts, carries, loads, and hauls items away so customers do not have to load a dumpster.',
    yearEstablished: 2025,
    experience: 'Founded 2025',
    missionStatement:
      'Clear space, not wallets. We make junk removal radically easy, fairly priced, and environmentally responsible—today.',
    ownerNames: ['Free Space Team'],
    countiesServed: ['Cache County', 'Box Elder County', 'Weber County'],
    generalServiceArea: 'Northern Utah',
    mainRole: 'full-service junk removal crew',
    mainService: 'junk removal',
    mainHeroImage: '/images/north-utah-ogden-mountain.jpeg',
  },
  socialMedia: {
    instagram: '',
    facebook: 'https://www.facebook.com/p/Free-Space-Junk-Removal-Cleaning-61580896573000/',
    twitter: '',
    linkedIn: '',
    yelp: 'freespace-junk-removal',
    houzz: '',
    angiesList: '',
  },

  branding: {
    logo: {
      main: '/images/logo-main.svg',
      horizontal: '/images/logo-horizontal.svg',
      icon: '/images/logo-icon.svg',
      white: '/images/logo-white.svg',
    },
    colors: {
      primary: '#008037',
      secondary: '#1c1c1c',
      accent: '#dabb54',
      light: '#f8f9fa',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Montserrat',
    },
  },

  website: {
    url: 'https://www.freespace-junkremoval.com',
    domain: 'freespace-junkremoval.com',
  },

  analytics: {
    googleAnalytics: { id: 'G-J4RW7E152T', enabled: true },
    googleTagManager: {
      id: 'GTM-T3BJJPWH',
      enabled: true,
    },
  },

  navigation: {
    main: [
      { label: 'Home', href: '/', type: 'link', showInMobile: true },
      {
        label: 'Services',
        href: '/services',
        type: 'dropdown',
        showInMobile: true,
        children: [
          { label: 'All Services', href: '/services', type: 'link' },
          { label: 'Single Item Pickup Junk Removal', href: '/services/single-item-pickup', type: 'link' },
          { label: 'Large Load Junk Removal', href: '/services/large-load-junk-removal', type: 'link' },
          { label: 'Small Load Junk Removal', href: '/services/small-load-junk-removal', type: 'link' },
          { label: 'Estate & Room Cleanouts', href: '/services/estate-room-cleanouts', type: 'link' },
          { label: 'Land Cleanout', href: '/services/land-cleanout', type: 'link' },
          { label: 'Appliance Removal', href: '/services/appliance-removal', type: 'link' },
          { label: 'Garage Cleanout', href: '/services/garage-cleanout', type: 'link' },
          { label: 'Construction Cleanup', href: '/services/construction-cleanup', type: 'link' },
        ],
      },
      { label: 'Pricing', href: '/pricing', type: 'link', showInMobile: true },
      {
        label: 'Service Areas',
        type: 'dropdown',
        showInMobile: true,
        children: [
          { label: 'All Service Areas', href: '/service-areas', type: 'link' },
          { label: 'Ogden', href: '/service-areas/ogden-utah', type: 'link' },
          { label: 'Logan', href: '/service-areas/logan-utah', type: 'link' },
          { label: 'Brigham City', href: '/service-areas/brigham-city-utah', type: 'link' },
          { label: 'Hyrum', href: '/service-areas/hyrum-utah', type: 'link' },
          { label: 'North Ogden', href: '/service-areas/north-ogden-utah', type: 'link' },
          { label: 'Willard', href: '/service-areas/willard-utah', type: 'link' },
          { label: 'Plain City', href: '/service-areas/plain-city-utah', type: 'link' },
          { label: 'West Haven', href: '/service-areas/west-haven-utah', type: 'link' },
          { label: 'Liberty', href: '/service-areas/liberty-utah', type: 'link' },
        ],
      },
      { label: 'About', href: '/about', type: 'link', showInMobile: true },
      { label: 'Blog', href: '/blog', type: 'link', showInMobile: true },
    ],
    footer: {
      sections: [
        {
          title: 'Quick Links',
          links: [
            { label: 'About Us', href: '/about' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ],
        },
        {
          title: 'Services',
          links: [
            { label: 'Single Item Pickup Junk Removal', href: '/services/single-item-pickup' },
            { label: 'Large Load Junk Removal', href: '/services/large-load-junk-removal' },
            { label: 'Appliance Removal', href: '/services/appliance-removal' },
            { label: 'Garage Cleanout', href: '/services/garage-cleanout' },
          ],
        },
      ],
      social: [
        {
          platform: 'Facebook',
          href: 'https://www.facebook.com/p/Free-Space-Junk-Removal-Cleaning-61580896573000/',
          icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
        },
      ],
      bottomLinks: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
      showServiceAreas: true,
    },
    cta: {
      text: 'Schedule Your Removal',
      href: 'https://calendar.app.google/S8TaQaP9DRGngVtV7',
      type: 'button',
    },
  },

  contact: {
    phone: {
      display: '(385) 326-8426',
      link: 'tel:+13853268426',
    },
    email: {
      main: 'contact@freespace-junkremoval.com',
      info: 'contact@freespace-junkremoval.com',
    },
    address: {
      street: '375 E 300 S',
      city: 'Hyrum',
      state: 'UT',
      zip: '84319',
      serviceArea: 'Northern Utah',
    },
  },

  services: [
    {
      id: 'single-item-pickup',
      name: 'Single Item Pickup Junk Removal',
      slug: 'single-item-pickup',
      shortDescription:
        'Fast and affordable single item pickup junk removal throughout Northern Utah. Professional furniture removal, appliance disposal, and bulky item hauling with transparent pricing and same-day service.',
      longDescription:
        "Our single item pickup junk removal service eliminates the hassle of bulky item disposal for Northern Utah homeowners and businesses. Whether you need furniture removal, appliance pickup, or exercise equipment hauling, we provide transparent upfront pricing and same-day single item pickup service across Northern Utah. Every single item removal includes professional handling, eco-friendly disposal, and satisfaction guarantee.",
      features: [
        'Transparent single item pickup pricing online',
        'Same-day single item removal available',
        'Eco-friendly single item disposal and recycling',
        'Professional single item pickup documentation',
        'No hidden fees for single item removal',
        'Licensed and insured single item hauling',
      ],
      image: '/images/single-item-pickup.jpg',
      category: 'junk removal',
      buttonText: 'Schedule Single Item Pickup',
      isActive: true,
      seo: {
        title: 'Single Item Pickup in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Full-service single item pickup in Northern Utah. We lift and haul couches, mattresses, appliances, and bulky items with clear pricing and free quotes.',
      },
      content: {
        hero: {
          title: 'SINGLE ITEM PICKUP JUNK REMOVAL - DAVIS COUNTY',
          subtitle: 'Fast, Affordable, and Transparent Single Item Removal',
          description:
            'Need bulky item removal today? Our single item pickup junk removal service offers transparent online pricing, same-day availability, and environmentally responsible disposal throughout Northern Utah, Weber County, Cache County, and Box Elder County. Professional single item hauling with satisfaction guarantee.',
          backgroundImage: '/images/single-item-pickup.jpg',
        },
        sections: {
          mainContent: {
            title: 'Single Item Pickup Junk Removal - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in professional single item pickup junk removal across Northern Utah. Our single item removal service eliminates the frustration of bulky item disposal with transparent pricing, same-day availability, and eco-friendly handling that Northern Utah residents trust.',
              'Unlike traditional junk removal companies that require on-site estimates for single item pickup, we provide transparent single item removal pricing online before we arrive at your location. Our single item pickup service covers everything from furniture removal and appliance disposal to exercise equipment hauling and electronics recycling.',
              'Each single item pickup includes comprehensive photo documentation, proper disposal or recycling coordination, and detailed impact reporting. We serve Northern Utah homeowners, property managers, and businesses throughout Ogden, Logan, Brigham City, Hyrum, and surrounding Northern Utah communities with reliable same-day and next-day single item removal options.',
              'Our single item pickup junk removal service prioritizes environmental responsibility, ensuring every removed item is properly recycled, donated, or disposed of according to Utah environmental standards. Northern Utah residents receive detailed documentation showing exactly how their single item pickup contributed to local recycling and donation efforts.',
              'Professional single item removal requires specialized equipment, proper handling techniques, and environmental knowledge that our licensed team provides with every pickup. From basement furniture removal to attic appliance extraction, we handle single item pickup challenges that Northern Utah properties present with expertise and care.',
              'The single item pickup process includes arrival time coordination, safe removal from any floor or location, cleanup of the removal area, and responsible disposal with photo verification. Our single item removal service maintains the highest standards for Northern Utah customers, ensuring complete satisfaction with every pickup.',
            ],
            benefits: [
              {
                title: 'Transparent Single Item Pickup Pricing',
                description:
                  "Know exactly what you'll pay for single item removal before we arrive. No surprise fees or inflated on-site quotes for your Northern Utah pickup.",
              },
              {
                title: 'Same-Day Single Item Removal',
                description:
                  'Need single item pickup today? We offer same-day removal for bulky items throughout Northern Utah.',
              },
              {
                title: 'Eco-Friendly Single Item Disposal',
                description:
                  'We prioritize recycling and donation for every single item pickup, keeping usable items out of Northern Utah landfills whenever possible.',
              },
              {
                title: 'Professional Single Item Documentation',
                description:
                  'Before and after photos plus disposal/recycling verification provided for every single item pickup and removal.',
              },
              {
                title: 'Single Item Removal Guarantee',
                description:
                  "Our single item pickup work is guaranteed. If you're not satisfied with your removal service, we'll make it right or refund your money.",
              },
              {
                title: 'Northern Utah Impact Reporting',
                description:
                  'See exactly how your single item pickup contributed to local Northern Utah recycling and donation efforts with detailed reporting.',
              },
              {
                title: 'Northern Utah Transparent Pricing',
                description:
                  'Our single item pickup pricing is straightforward and transparent for Northern Utah residents. Small items ($45-75), medium items ($85-125), large items ($135-185), oversized items (custom quote). Get exact pricing online with photos.',
              },
            ],
          },
          processSteps: {
            title: 'OUR SINGLE ITEM PICKUP JUNK REMOVAL PROCESS',
            steps: [
              {
                title: 'Get Instant Single Item Quote Online',
                description:
                  'Upload photos of your item for single item pickup and receive transparent pricing immediately - no waiting for estimates or on-site quotes for your Northern Utah removal.',
              },
              {
                title: 'Schedule Single Item Pickup Time',
                description:
                  'Choose from same-day or next-day single item removal windows that work with your Northern Utah schedule and availability.',
              },
              {
                title: 'Professional Single Item Removal',
                description:
                  'Our insured team arrives on time for single item pickup, handles your item safely, and cleans up the removal area completely.',
              },
              {
                title: 'Responsible Single Item Disposal',
                description:
                  'Your item is recycled, donated, or properly disposed of with photo verification provided for your Northern Utah single item pickup.',
              },
            ],
          },
          serviceTypes: {
            title: 'SINGLE ITEM PICKUP JUNK REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Furniture Single Item Pickup',
                description: 'Professional removal of couches, chairs, tables, dressers, beds, and all household furniture requiring single item pickup service',
                features: [
                  'Safe furniture removal from any floor',
                  'Furniture donation coordination when possible',
                  'No damage to walls or floors during pickup',
                  'Specialty furniture handling expertise',
                ],
              },
              {
                title: 'Appliance Single Item Pickup',
                description:
                  'Expert removal of refrigerators, washers, dryers, dishwashers, and other large appliances requiring specialized single item handling',
                features: [
                  'Proper refrigerant handling and disposal',
                  'Metal recycling for appliance components',
                  'EPA-compliant appliance disposal',
                  'Safe appliance disconnection service',
                ],
              },
              {
                title: 'Exercise Equipment Single Item Removal',
                description: 'Specialized pickup of treadmills, weight benches, ellipticals, home gym equipment, and fitness machines',
                features: [
                  'Heavy equipment single item specialists',
                  'Equipment disassembly if needed',
                  'Metal and plastic parts recycling',
                  'Multi-piece equipment coordination',
                ],
              },
              {
                title: 'Electronics Single Item Disposal',
                description: 'Certified removal of TVs, computers, printers, and electronic equipment requiring proper e-waste handling',
                features: [
                  'Certified e-waste disposal processes',
                  'Data security measures for devices',
                  'Electronic component recycling',
                  'Environmental compliance assurance',
                ],
              },
            ],
          },
          faq: {
            title: 'SINGLE ITEM PICKUP JUNK REMOVAL FAQ',
            subtitle: 'Common questions about our Northern Utah single item removal service',
            items: [
              {
                question: 'How do I get pricing for my single item pickup in Northern Utah?',
                answer:
                  "Simply visit our website and upload photos of your item for single item removal. You'll receive transparent pricing immediately - no waiting for estimates or on-site quotes for your Northern Utah single item pickup.",
              },
              {
                question: 'Do you offer same-day single item pickup in Northern Utah?',
                answer:
                  'Yes! We offer same-day single item removal throughout Northern Utah when you schedule your pickup before noon, subject to availability.',
              },
              {
                question: "What if my item doesn't fit in your single item pickup truck?",
                answer:
                  "We bring the right equipment for every single item removal job. If it's truly oversized for standard pickup, we'll recommend our trailer service and adjust pricing accordingly for your Northern Utah removal.",
              },
              {
                question: 'Do you remove single items from upper floors in Northern Utah?',
                answer:
                  'Absolutely. Our team safely removes single items from any floor, including basements and attics throughout Northern Utah, with proper equipment and techniques for complex single item pickup situations.',
              },
              {
                question: 'What happens to my item after single item pickup?',
                answer:
                  "We prioritize donation and recycling for every single item removal. You'll receive photo documentation showing how your Northern Utah pickup item was responsibly processed and disposed of.",
              },
              {
                question: "Are there any items you won't handle for single item pickup?",
                answer:
                  'We handle most household single item removals. Hazardous materials, chemicals, and certain regulated electronics require special handling - contact us for specific questions about your Northern Utah single item pickup needs.',
              },
              {
                question: 'How much does single item pickup cost in Northern Utah?',
                answer:
                  'Single item pickup pricing ranges from $45-185 depending on size, weight, and access difficulty. Most Northern Utah single item removals cost $85-125. Get exact pricing online with photos of your item.',
              },
              {
                question: 'Do you provide single item pickup documentation?',
                answer:
                  'Yes! Every single item removal includes before/after photos, disposal verification, and environmental impact reporting showing how your Northern Utah pickup contributed to recycling and donation efforts.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'large-load-junk-removal',
      name: 'Large Load Junk Removal',
      slug: 'large-load-junk-removal',
      shortDescription:
        'Professional large load junk removal service for medium-sized cleanouts throughout Northern Utah. Transparent pricing, same-day service, and eco-friendly disposal guaranteed for your large load junk removal needs.',
      longDescription:
        'Free Space Junk Removal & Cleaning specializes in large load junk removal services perfect for medium-sized cleanout projects. Our large load service handles 6-8 cubic yards of junk removal with transparent upfront pricing, same-day availability, and comprehensive recycling programs throughout Northern Utah.',
      features: [
        'Professional large load junk removal team',
        'Transparent large load pricing online',
        'Same-day large load service available', 
        'Eco-friendly large load disposal and recycling',
        'Large load capacity 6-8 cubic yards',
        'Licensed and insured large load specialists',
      ],
      image: '/images/large-load-junk.jpeg',
      category: 'junk removal',
      buttonText: 'Schedule Large Load Removal',
      isActive: true,
      seo: {
        title: 'Large Load Junk Removal in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Full-service large load junk removal in Northern Utah. Trailer hauling for garage, room, estate, property, and business cleanouts with upfront pricing.',
      },
      content: {
        hero: {
          title: 'LARGE LOAD JUNK REMOVAL - NORTHERN UTAH',
          subtitle: 'Professional Medium-Sized Junk Removal Service',
          description:
            'Need large load junk removal today? Free Space Junk Removal & Cleaning provides transparent large load pricing, same-day service, and eco-friendly disposal for your medium-sized cleanout projects throughout Northern Utah. Professional large load junk removal with satisfaction guarantee.',
          backgroundImage: '/images/large-load-junk.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Large Load Junk Removal - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning is Northern Utah\'s trusted large load junk removal specialist, providing transparent pricing and professional service for medium-sized cleanout projects. Our large load junk removal service handles 6-8 cubic yards of materials - perfect for room cleanouts, garage organization, basement clearing, and small renovation debris removal.',
              'Unlike national junk removal companies that provide vague "starting at" estimates for large load service, we offer transparent large load junk removal pricing online before we arrive. Our large load service eliminates the frustration of surprise fees and inflated on-site quotes that plague the junk removal industry.',
              'Each large load junk removal project includes comprehensive photo documentation, professional loading with proper equipment, responsible sorting for maximum recycling potential, and detailed impact reporting showing how your large load contributed to Northern Utah recycling and donation efforts.',
              'Our large load junk removal team arrives with fully equipped trucks and the expertise to handle everything from furniture and appliances to construction debris and household clutter. We serve homeowners, property managers, and businesses throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable large load service.',
              'The large load junk removal process prioritizes environmental responsibility, ensuring every item in your large load is properly recycled, donated, or disposed of according to Utah environmental standards. Northern Utah residents receive detailed documentation showing exactly how their large load pickup contributed to local sustainability efforts.',
              'Professional large load junk removal requires specialized equipment, proper handling techniques, and environmental knowledge that our licensed team provides with every service call. From multi-room cleanouts to garage organization projects, we handle large load challenges that Northern Utah properties present with expertise and care.',
              'Large load junk removal pricing includes all labor, transportation, sorting, and responsible disposal - no hidden fees or surprise charges. Our transparent large load service maintains the highest standards for Northern Utah customers, ensuring complete satisfaction with every project.',
              'Whether you\'re tackling a basement cleanout, garage organization, estate clearing, or small renovation project, our large load junk removal service provides the perfect solution for medium-sized junk removal needs throughout Weber County, Cache County, Ogden County, and Box Elder County.',
            ],
            benefits: [
              {
                title: 'Transparent Large Load Pricing',
                description:
                  "Know exactly what your large load junk removal will cost before we arrive. No surprise fees or inflated on-site quotes for your Northern Utah large load service.",
              },
              {
                title: 'Same-Day Large Load Service',
                description:
                  'Need large load junk removal today? We offer same-day large load service throughout Northern Utah when you schedule before noon.',
              },
              {
                title: 'Eco-Friendly Large Load Disposal',
                description:
                  'We prioritize recycling and donation for every large load pickup, keeping usable items out of Northern Utah landfills whenever possible.',
              },
              {
                title: 'Professional Large Load Documentation',
                description:
                  'Before and after photos plus disposal/recycling verification provided for every large load junk removal project.',
              },
              {
                title: 'Large Load Service Guarantee',
                description:
                  "Our large load junk removal work is guaranteed. If you're not satisfied with your large load service, we'll make it right or refund your money.",
              },
              {
                title: 'Northern Utah Impact Reporting',
                description:
                  'See exactly how your large load pickup contributed to local Northern Utah recycling and donation efforts with detailed impact reporting.',
              },
            ],
          },
          processSteps: {
            title: 'OUR LARGE LOAD JUNK REMOVAL PROCESS',
            steps: [
              {
                title: 'Get Transparent Large Load Quote',
                description:
                  'Upload photos of your large load junk removal project and receive transparent pricing immediately - no waiting for estimates or on-site quotes for your Northern Utah service.',
              },
              {
                title: 'Schedule Large Load Pickup',
                description:
                  'Choose from same-day or next-day large load junk removal windows that work with your Northern Utah schedule and project timeline.',
              },
              {
                title: 'Professional Large Load Removal',
                description:
                  'Our insured team arrives on time for large load pickup with proper equipment, handles your items safely, and cleans up the area completely.',
              },
              {
                title: 'Responsible Large Load Disposal',
                description:
                  'Your large load is sorted, recycled, donated, or properly disposed of with photo verification and environmental impact reporting provided.',
              },
            ],
          },
          serviceTypes: {
            title: 'LARGE LOAD JUNK REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Room Cleanout Large Load Service',
                description: 'Complete room cleaning and junk removal including furniture, personal items, and accumulated clutter requiring large load capacity',
                features: [
                  'Multi-room large load cleanouts',
                  'Furniture and appliance removal',
                  'Personal item sorting and donation',
                  'Complete room transformation service',
                ],
              },
              {
                title: 'Garage Organization Large Load Removal',
                description:
                  'Comprehensive garage cleanout and organization service with large load junk removal for accumulated items, storage cleanup, and space reclamation',
                features: [
                  'Complete garage large load cleanout',
                  'Storage area organization support',
                  'Hazardous material identification',
                  'Before/after documentation included',
                ],
              },
              {
                title: 'Basement Large Load Cleanout',
                description: 'Specialized basement junk removal service handling large loads of stored items, old furniture, and accumulated household goods',
                features: [
                  'Safe basement large load removal',
                  'Moisture damage assessment',
                  'Heavy item extraction expertise',
                  'Mold and debris identification',
                ],
              },
              {
                title: 'Renovation Debris Large Load Service',
                description: 'Construction and renovation waste removal with large load capacity for demo debris, old fixtures, and remodeling materials',
                features: [
                  'Construction debris large load removal',
                  'Fixture and cabinet disposal',
                  'Flooring and drywall waste handling',
                  'Contractor coordination available',
                ],
              },
            ],
          },
          faq: {
            title: 'LARGE LOAD JUNK REMOVAL FAQ',
            subtitle: 'Common questions about our Northern Utah large load junk removal service',
            items: [
              {
                question: 'How much does large load junk removal cost in Northern Utah?',
                answer:
                  "Large load junk removal pricing ranges from $285-385 depending on materials, weight, and access difficulty. Most Northern Utah large load projects cost $325-345. Get exact large load pricing online with photos of your project.",
              },
              {
                question: 'What size is considered a large load junk removal?',
                answer:
                  'Large load junk removal handles 6-8 cubic yards of materials - equivalent to 2-3 pickup truck loads. Perfect for room cleanouts, garage organization, or basement clearing projects throughout Northern Utah.',
              },
              {
                question: 'Do you offer same-day large load junk removal in Northern Utah?',
                answer:
                  'Yes! We offer same-day large load junk removal throughout Northern Utah when you schedule your service before noon, subject to availability in your specific area.',
              },
              {
                question: 'What items are included in large load junk removal service?',
                answer:
                  'Large load service includes furniture, appliances, electronics, household items, yard debris, and small construction materials. We handle most items except hazardous materials and liquids.',
              },
              {
                question: 'How do you handle recycling for large load junk removal?',
                answer:
                  "We prioritize recycling and donation for every large load pickup. You'll receive photo documentation showing how your Northern Utah large load items were responsibly processed and their environmental impact.",
              },
              {
                question: 'Can you provide large load junk removal from upper floors?',
                answer:
                  'Absolutely. Our large load team safely removes items from any floor, including basements and attics throughout Northern Utah, with proper equipment for complex access situations.',
              },
              {
                question: 'Do you provide large load junk removal documentation?',
                answer:
                  'Yes! Every large load removal includes before/after photos, disposal verification, and environmental impact reporting showing how your Northern Utah pickup contributed to local recycling efforts.',
              },
              {
                question: 'What areas do you serve for large load junk removal?',
                answer:
                  'We provide large load junk removal throughout Northern Utah including Ogden, Logan, Brigham City, Hyrum, North Ogden, and surrounding Weber County, Cache County, and Box Elder County communities.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'small-load-junk-removal',
      name: 'Small Load Junk Removal',
      slug: 'small-load-junk-removal',
      shortDescription:
        'Affordable small load junk removal perfect for minor cleanouts and decluttering projects throughout Northern Utah. Professional small load service with transparent pricing and eco-friendly disposal.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides economical small load junk removal services ideal for closet organization, small decluttering projects, and minor household cleanouts. Our small load service offers professional junk removal for smaller volumes with the same quality and environmental responsibility as larger projects.',
      features: [
        'Economical small load junk removal pricing',
        'Professional small load handling and disposal',
        'Transparent small load pricing upfront',
        'Perfect for small load decluttering projects',
        'Eco-friendly small load sorting and recycling',
        'Same-day small load service available',
      ],
      image: '/images/small-cleanup.jpg',
      category: 'junk removal',
      buttonText: 'Schedule Small Load Pickup',
      isActive: true,
      seo: {
        title: 'Small Load Junk Removal in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Full-service small load junk removal in Northern Utah for closets, rooms, storage corners, and light decluttering. We lift, load, and haul.',
      },
      content: {
        hero: {
          title: 'SMALL LOAD JUNK REMOVAL - NORTHERN UTAH',
          subtitle: 'Affordable and Professional Small-Scale Junk Removal',
          description:
            'Need small load junk removal for your decluttering project? Free Space Junk Removal & Cleaning provides affordable small load service with transparent pricing, same-day availability, and eco-friendly disposal for minor cleanout projects throughout Northern Utah.',
          backgroundImage: '/images/small-cleanup.jpg',
        },
        sections: {
          mainContent: {
            title: 'Small Load Junk Removal - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in affordable small load junk removal throughout Northern Utah, providing professional service for minor cleanout and decluttering projects. Our small load junk removal service handles 1-3 cubic yards of materials - perfect for closet organization, small room cleanouts, and accumulated household item removal.',
              'Unlike large junk removal companies that impose minimum fees making small load service unaffordable, we offer economical small load junk removal pricing specifically designed for Northern Utah residents tackling smaller decluttering projects. Our transparent small load pricing eliminates the frustration of being overcharged for minor cleanout needs.',
              'Each small load junk removal project receives the same professional attention as larger jobs, including photo documentation, careful sorting for recycling potential, responsible disposal, and environmental impact reporting. Our small load service maintains high standards regardless of project size.',
              'Our small load junk removal team understands that smaller projects often require the same level of care and professionalism as major cleanouts. We serve homeowners throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable small load service tailored to residential needs.',
              'The small load junk removal process prioritizes efficiency and environmental responsibility, ensuring every item in your small load is properly evaluated for recycling, donation, or responsible disposal. Northern Utah residents receive detailed documentation showing how their small load pickup contributed to local sustainability efforts.',
              'Professional small load junk removal requires attention to detail and customer service excellence that our licensed team provides with every service call. From closet cleanouts to garage corner clearing, we handle small load challenges with the same expertise and care as larger projects.',
              'Small load junk removal pricing includes all labor, transportation, sorting, and responsible disposal with no minimum fees or surprise charges. Our transparent small load service makes professional junk removal accessible for minor projects throughout Weber County, Cache County, and Box Elder County.',
              'Whether you\'re organizing a single room, clearing out a closet, removing accumulated items, or tackling a small decluttering project, our small load junk removal service provides an economical solution for homeowners who need professional service without the expense of larger capacity options.',
            ],
            benefits: [
              {
                title: 'Affordable Small Load Pricing',
                description:
                  "Economical small load junk removal pricing designed for minor projects. No minimum fees or inflated charges for your Northern Utah small load service.",
              },
              {
                title: 'Same-Day Small Load Service',
                description:
                  'Need small load junk removal today? We offer same-day small load service throughout Northern Utah for urgent decluttering needs.',
              },
              {
                title: 'Professional Small Load Handling',
                description:
                  'Your small load receives the same careful attention as larger projects, with professional handling and responsible disposal practices.',
              },
              {
                title: 'Eco-Friendly Small Load Disposal',
                description:
                  'We prioritize recycling and donation for every small load pickup, ensuring even minor cleanouts contribute to environmental sustainability.',
              },
              {
                title: 'Small Load Documentation',
                description:
                  'Before and after photos plus recycling verification provided for every small load junk removal project, regardless of size.',
              },
              {
                title: 'Northern Utah Small Load Impact',
                description:
                  'See how your small load pickup contributed to local Northern Utah recycling and donation efforts with detailed reporting.',
              },
            ],
          },
          processSteps: {
            title: 'OUR SMALL LOAD JUNK REMOVAL PROCESS',
            steps: [
              {
                title: 'Get Small Load Quote Online',
                description:
                  'Upload photos of your small load junk removal project and receive transparent, affordable pricing immediately - no minimum fees or inflated quotes for small projects.',
              },
              {
                title: 'Schedule Small Load Service',
                description:
                  'Choose convenient small load pickup times including same-day service throughout Northern Utah. Flexible scheduling for your decluttering timeline.',
              },
              {
                title: 'Professional Small Load Pickup',
                description:
                  'Our team arrives on time for small load removal with appropriate equipment, handles items carefully, and maintains professionalism regardless of project size.',
              },
              {
                title: 'Responsible Small Load Disposal',
                description:
                  'Your small load is sorted, recycled, donated, or properly disposed of with photo verification and environmental impact documentation provided.',
              },
            ],
          },
          serviceTypes: {
            title: 'SMALL LOAD JUNK REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Closet Organization Small Load Service',
                description: 'Professional closet cleanout and organization with small load junk removal for clothing, accessories, and storage items',
                features: [
                  'Complete closet small load cleanout',
                  'Clothing donation coordination',
                  'Storage optimization support',
                  'Seasonal item organization',
                ],
              },
              {
                title: 'Small Room Decluttering Service',
                description:
                  'Targeted room-by-room small load junk removal for bedrooms, offices, and living spaces requiring minor decluttering',
                features: [
                  'Single room small load focus',
                  'Furniture and decor removal',
                  'Personal item sorting',
                  'Space reclamation service',
                ],
              },
              {
                title: 'Accumulated Items Small Load Removal',
                description: 'Regular maintenance small load service for accumulated household items, expired goods, and clutter buildup',
                features: [
                  'Household clutter small load pickup',
                  'Expired item identification',
                  'Regular maintenance scheduling',
                  'Preventive decluttering service',
                ],
              },
              {
                title: 'Moving Preparation Small Load Service',
                description: 'Pre-move decluttering with small load junk removal for items you don\'t want to pack or transport to your new location',
                features: [
                  'Pre-move small load decluttering',
                  'Packing preparation support',
                  'Unwanted item identification',
                  'Moving cost reduction service',
                ],
              },
            ],
          },
          faq: {
            title: 'SMALL LOAD JUNK REMOVAL FAQ',
            subtitle: 'Common questions about our Northern Utah small load junk removal service',
            items: [
              {
                question: 'How much does small load junk removal cost in Northern Utah?',
                answer:
                  "Small load junk removal pricing ranges from $125-185 depending on materials and access. Most Northern Utah small load projects cost $145-165. Get exact small load pricing online with no minimum fees.",
              },
              {
                question: 'What size is considered a small load junk removal?',
                answer:
                  'Small load junk removal handles 1-3 cubic yards of materials - equivalent to a pickup truck bed or large SUV. Perfect for closet cleanouts, small room decluttering, or minor household projects.',
              },
              {
                question: 'Is there a minimum charge for small load junk removal?',
                answer:
                  'No! Unlike other companies, we don\'t impose minimum fees for small load service. Our small load junk removal pricing is designed specifically for smaller projects throughout Northern Utah.',
              },
              {
                question: 'Do you offer same-day small load junk removal?',
                answer:
                  'Yes! We offer same-day small load junk removal throughout Northern Utah when you schedule before noon, perfect for urgent decluttering needs.',
              },
              {
                question: 'What items are included in small load junk removal service?',
                answer:
                  'Small load service includes household items, clothing, small furniture pieces, electronics, books, and personal belongings. We handle most common household decluttering items.',
              },
              {
                question: 'How do you handle donations for small load pickups?',
                answer:
                  "We prioritize donation for usable items in every small load pickup. You'll receive documentation showing how your Northern Utah small load contributed to local charity organizations.",
              },
              {
                question: 'Can I schedule regular small load junk removal service?',
                answer:
                  'Absolutely! Many Northern Utah residents schedule monthly or quarterly small load service for ongoing decluttering and home organization maintenance.',
              },
              {
                question: 'Do you provide small load junk removal for apartments?',
                answer:
                  'Yes! Our small load service is perfect for apartment living throughout Northern Utah. We coordinate with property management and handle access requirements professionally.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'estate-room-cleanouts',
      name: 'Estate & Room Cleanouts',
      slug: 'estate-room-cleanouts',
      shortDescription:
        'Professional estate cleanout and room cleanout services throughout Northern Utah. Sensitive estate clearing with transparent pricing, donation coordination, and compassionate service for families.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive estate cleanout and room cleanout services with sensitivity and professionalism. Our estate cleanout specialists handle everything from complete property clearing to individual room organization with transparent pricing and extensive donation coordination.',
      features: [
        'Compassionate estate cleanout specialists',
        'Complete room cleanout services',
        'Extensive donation coordination for estate items',
        'Transparent estate cleanout pricing',
        'Same-day estate cleanout availability',
        'Professional estate sorting and documentation',
      ],
      image: '/images/estate-cleanout.jpeg',
      category: 'junk removal',
      buttonText: 'Schedule Estate Cleanout',
      isActive: true,
      seo: {
        title: 'Estate & Room Cleanouts in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Careful estate and room cleanouts in Northern Utah. We lift, load, donate when practical, and haul unwanted items with transparent pricing.',
      },
      content: {
        hero: {
          title: 'ESTATE & ROOM CLEANOUTS - NORTHERN UTAH',
          subtitle: 'Compassionate Estate Clearing and Room Organization',
          description:
            'Facing an estate cleanout or major room clearing project? Free Space Junk Removal & Cleaning provides sensitive, professional estate cleanout services with transparent pricing, extensive donation coordination, and compassionate support for families throughout Northern Utah.',
          backgroundImage: '/images/estate-cleanout.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Estate & Room Cleanouts - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning understands that estate cleanouts and major room clearing projects often occur during emotionally challenging times. Our compassionate estate cleanout specialists provide professional, respectful service for families throughout Northern Utah, handling everything from complete property clearing to individual room organization with sensitivity and care.',
              'Unlike impersonal junk removal companies that treat estate cleanouts as routine jobs, we recognize the emotional significance of estate clearing and provide personalized service that honors your family\'s needs. Our estate cleanout team works closely with families to identify valuable items, coordinate donations, and ensure important belongings receive proper attention.',
              'Each estate cleanout project includes comprehensive documentation, careful sorting for maximum donation potential, respectful handling of personal belongings, and detailed reporting on how estate items contributed to local charities and organizations. Our room cleanout services apply the same level of care and professionalism to individual spaces.',
              'Our estate cleanout specialists serve families throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, compassionate service. We understand the challenges families face during estate clearing and provide flexible scheduling, transparent pricing, and extensive support throughout the process.',
              'The estate cleanout process prioritizes dignity and respect while maintaining environmental responsibility. Every item in your estate clearance is carefully evaluated for donation potential, recycling opportunities, or proper disposal according to Utah environmental standards. Families receive detailed documentation showing how their estate cleanout contributed to local community organizations.',
              'Professional estate cleanout requires emotional sensitivity, organizational expertise, and logistical coordination that our experienced team provides with every project. From multi-generational family homes to individual room clearing, we handle estate challenges with the understanding and professionalism that difficult situations require.',
              'Estate cleanout pricing includes all labor, transportation, sorting, donation coordination, and responsible disposal with transparent costs provided upfront. Our comprehensive estate clearing service ensures families can focus on what matters most while we handle the physical aspects of property clearing with dignity and care.',
              'Whether you\'re dealing with a complete estate clearing, downsizing project, room organization challenge, or family home transition, our estate cleanout service provides the compassionate support and professional expertise that Northern Utah families trust during difficult times.',
            ],
            benefits: [
              {
                title: 'Compassionate Estate Clearing',
                description:
                  "Our estate cleanout team provides sensitive, respectful service during emotionally challenging times, treating your family's belongings with dignity and care.",
              },
              {
                title: 'Extensive Donation Coordination',
                description:
                  'We coordinate with local charities and organizations to ensure valuable estate items find new homes, maximizing the positive impact of your estate cleanout.',
              },
              {
                title: 'Transparent Estate Pricing',
                description:
                  'Know exactly what your estate cleanout will cost upfront with no hidden fees or surprise charges during an already stressful time.',
              },
              {
                title: 'Professional Estate Documentation',
                description:
                  'Comprehensive before/after photos, donation receipts, and disposal verification provided for every estate cleanout project.',
              },
              {
                title: 'Flexible Estate Scheduling',
                description:
                  'We work around your family\'s timeline and needs, offering flexible scheduling for estate cleanouts throughout Northern Utah.',
              },
              {
                title: 'Local Estate Impact Reporting',
                description:
                  'See exactly how your estate cleanout contributed to Northern Utah charities and recycling efforts with detailed community impact reporting.',
              },
            ],
          },
          processSteps: {
            title: 'OUR ESTATE & ROOM CLEANOUT PROCESS',
            steps: [
              {
                title: 'Compassionate Estate Consultation',
                description:
                  'We meet with your family to understand your estate cleanout needs, identify valuable items, and develop a sensitive clearing plan that respects your wishes.',
              },
              {
                title: 'Professional Estate Sorting',
                description:
                  'Our team carefully sorts estate items, identifying donations, valuables, and disposal items while maintaining dignity and respect throughout the process.',
              },
              {
                title: 'Coordinated Estate Clearing',
                description:
                  'We execute the estate cleanout plan with professional efficiency while allowing time for family decisions and final item reviews.',
              },
              {
                title: 'Complete Estate Documentation',
                description:
                  'You receive comprehensive documentation including donation receipts, disposal verification, and community impact reporting for your estate cleanout.',
              },
            ],
          },
          serviceTypes: {
            title: 'ESTATE & ROOM CLEANOUT SERVICES WE PROVIDE',
            types: [
              {
                title: 'Complete Estate Cleanouts',
                description: 'Full property clearing for estate settlements, including all personal belongings, furniture, and household items with family coordination',
                features: [
                  'Whole house estate clearing',
                  'Personal belonging evaluation',
                  'Family heirloom identification',
                  'Estate sale coordination support',
                ],
              },
              {
                title: 'Room-by-Room Estate Clearing',
                description:
                  'Targeted room clearing for estates requiring selective cleanout, allowing families to preserve important areas while clearing others',
                features: [
                  'Selective room estate clearing',
                  'Phased cleanout scheduling',
                  'Important area preservation',
                  'Gradual family adjustment support',
                ],
              },
              {
                title: 'Downsizing Room Cleanouts',
                description: 'Senior living transition support with room cleanouts for families moving elderly parents to smaller living arrangements',
                features: [
                  'Senior transition room clearing',
                  'Downsizing consultation',
                  'Memory preservation support',
                  'Assisted living preparation',
                ],
              },
              {
                title: 'Family Home Room Organization',
                description: 'Major room cleanouts for growing families needing space reclamation, organization, and clutter clearing in occupied homes',
                features: [
                  'Living space room clearing',
                  'Family organization support',
                  'Child-safe sorting processes',
                  'Home functionality improvement',
                ],
              },
            ],
          },
          faq: {
            title: 'ESTATE & ROOM CLEANOUTS FAQ',
            subtitle: 'Common questions about our Northern Utah estate and room cleanout services',
            items: [
              {
                question: 'How much do estate cleanouts cost in Northern Utah?',
                answer:
                  "Estate cleanout pricing varies based on property size and contents, typically ranging from $485-1,285. We provide transparent upfront pricing with no hidden fees during this difficult time.",
              },
              {
                question: 'How long does an estate cleanout take?',
                answer:
                  'Estate cleanouts typically take 1-3 days depending on property size and family needs. We work at a pace that allows for family decisions and proper item evaluation.',
              },
              {
                question: 'Do you help identify valuable items during estate cleanouts?',
                answer:
                  'Yes! Our estate cleanout team is trained to identify potentially valuable items and will set them aside for family evaluation. We recommend professional appraisals for significant items.',
              },
              {
                question: 'How do you handle donation coordination for estates?',
                answer:
                  'We work with multiple local charities and organizations to ensure estate items find appropriate new homes. You receive donation receipts for tax purposes and impact reporting.',
              },
              {
                question: 'Can families be present during estate cleanouts?',
                answer:
                  'Absolutely. Many families prefer to be present during estate clearing, and we accommodate family schedules and emotional needs throughout the process.',
              },
              {
                question: 'Do you provide estate cleanout services for out-of-state families?',
                answer:
                  'Yes! We regularly help out-of-state families with Northern Utah estate cleanouts, providing detailed documentation and remote coordination as needed.',
              },
              {
                question: 'What happens to personal documents found during estate cleanouts?',
                answer:
                  'All personal documents, photos, and important papers are carefully set aside for family review. We never dispose of potentially important personal items without family approval.',
              },
              {
                question: 'Do you offer room cleanout services for occupied homes?',
                answer:
                  'Yes! Our room cleanout services work around occupied homes, focusing on specific areas while maintaining household routines and family privacy.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'land-cleanout',
      name: 'Land Cleanout',
      slug: 'land-cleanout',
      shortDescription:
        'Professional land cleanout services for large-scale property clearing throughout Northern Utah. Comprehensive land clearing, debris removal, and environmental cleanup with transparent pricing.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive land cleanout services for large-scale property clearing projects. Our land cleanout specialists handle everything from overgrown property cleanup to construction debris removal with professional equipment and environmental responsibility.',
      features: [
        'Large-scale land cleanout capability',
        'Professional land clearing equipment',
        'Environmental land cleanup compliance',
        'Transparent land cleanout pricing',
        'Same-day land cleanout availability',
        'Comprehensive land debris handling',
      ],
      image: '/images/land-cleanout.jpeg',
      category: 'junk removal',
      buttonText: 'Schedule Land Cleanout',
      isActive: true,
      seo: {
        title: 'Land Cleanout in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Full-service land cleanout in Northern Utah for yards, sheds, rural properties, and debris piles. Trailer hauling with clear pricing.',
      },
      content: {
        hero: {
          title: 'LAND CLEANOUT - NORTHERN UTAH',
          subtitle: 'Professional Large-Scale Property Clearing Services',
          description:
            'Facing a major land cleanout project? Free Space Junk Removal & Cleaning provides comprehensive land cleanout services with professional equipment, transparent pricing, and environmental compliance for large-scale property clearing throughout Northern Utah.',
          backgroundImage: '/images/land-cleanout.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Land Cleanout - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in comprehensive land cleanout services throughout Northern Utah, providing professional solutions for large-scale property clearing projects. Our land cleanout specialists handle everything from overgrown residential lots to commercial property cleanup with the equipment, expertise, and environmental compliance that major clearing projects require.',
              'Unlike general junk removal companies that lack the capacity for major land cleanout projects, we provide dedicated land clearing services with trailer-load capacity, specialized equipment, and professional crews trained in large-scale debris removal. Our land cleanout service eliminates the complexity of coordinating multiple contractors for your property clearing needs.',
              'Each land cleanout project includes comprehensive planning, professional debris removal, environmental compliance verification, responsible disposal coordination, and detailed documentation. Our land clearing process ensures your property meets local regulations while maximizing recycling and donation opportunities for salvageable materials.',
              'Our land cleanout team serves property owners, developers, and contractors throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, efficient service. We understand the urgency often associated with land clearing projects and provide flexible scheduling including weekend and emergency land cleanout services.',
              'The land cleanout process prioritizes safety and environmental responsibility, ensuring all debris removal complies with Utah environmental regulations and local ordinances. Property owners receive detailed documentation showing how their land cleanout project contributed to local recycling efforts and responsible waste management practices.',
              'Professional land cleanout requires specialized equipment, proper disposal knowledge, and regulatory compliance that our licensed team provides with every project. From residential lot clearing to commercial property cleanup, we handle land challenges throughout Northern Utah with the expertise and professionalism that large-scale projects demand.',
              'Land cleanout pricing includes all equipment, labor, transportation, sorting, and compliant disposal with transparent costs provided upfront. Our comprehensive land clearing service ensures property owners can move forward with development plans while we handle the complex logistics of debris removal and environmental compliance.',
              'Whether you\'re preparing land for development, cleaning inherited property, removing storm debris, or tackling years of accumulated materials, our land cleanout service provides the professional capacity and environmental expertise that Northern Utah property clearing projects require.',
            ],
            benefits: [
              {
                title: 'Professional Land Clearing Equipment',
                description:
                  "Our land cleanout service includes specialized equipment and trailers capable of handling large-scale debris removal that standard junk services can't accommodate.",
              },
              {
                title: 'Environmental Compliance Assurance',
                description:
                  'We ensure your land cleanout project meets all Utah environmental regulations and local ordinances, protecting you from potential compliance issues.',
              },
              {
                title: 'Transparent Land Cleanout Pricing',
                description:
                  'Know exactly what your land clearing project will cost upfront with comprehensive pricing that includes all equipment, labor, and disposal fees.',
              },
              {
                title: 'Comprehensive Land Documentation',
                description:
                  'Before/after photos, compliance verification, disposal documentation, and environmental impact reporting provided for every land cleanout project.',
              },
              {
                title: 'Emergency Land Cleanout Service',
                description:
                  'We provide urgent land clearing services for storm cleanup, property emergencies, and time-sensitive development projects throughout Northern Utah.',
              },
              {
                title: 'Recycling Maximization for Land Debris',
                description:
                  'Our land cleanout process identifies recyclable materials and coordinates with scrap dealers and recyclers to minimize landfill impact from large clearing projects.',
              },
            ],
          },
          processSteps: {
            title: 'OUR LAND CLEANOUT PROCESS',
            steps: [
              {
                title: 'Land Cleanout Assessment',
                description:
                  'We conduct a comprehensive site evaluation to assess debris volume, access requirements, environmental considerations, and develop an efficient land clearing plan.',
              },
              {
                title: 'Equipment and Crew Coordination',
                description:
                  'Our team arrives with appropriate trailers, equipment, and crew size to handle your specific land cleanout requirements efficiently and safely.',
              },
              {
                title: 'Professional Land Clearing Execution',
                description:
                  'We execute the land cleanout plan with systematic debris removal, environmental compliance measures, and ongoing coordination with property stakeholders.',
              },
              {
                title: 'Complete Land Cleanup Documentation',
                description:
                  'You receive comprehensive documentation including compliance verification, disposal receipts, recycling reports, and before/after project photography.',
              },
            ],
          },
          serviceTypes: {
            title: 'LAND CLEANOUT SERVICES WE PROVIDE',
            types: [
              {
                title: 'Residential Land Cleanouts',
                description: 'Complete residential property clearing including overgrown lots, accumulated debris, and preparation for landscaping or construction',
                features: [
                  'Overgrown lot land clearing',
                  'Accumulated debris removal',
                  'Landscaping preparation service',
                  'Property value enhancement',
                ],
              },
              {
                title: 'Commercial Land Clearing',
                description:
                  'Large-scale commercial property cleanup for development projects, business relocations, and industrial site preparation',
                features: [
                  'Development site land clearing',
                  'Industrial debris removal',
                  'Commercial property preparation',
                  'Business relocation cleanup',
                ],
              },
              {
                title: 'Construction Site Land Cleanout',
                description: 'Pre and post-construction land clearing including site preparation, debris removal, and final cleanup for building projects',
                features: [
                  'Pre-construction land clearing',
                  'Construction debris removal',
                  'Site preparation services',
                  'Final cleanup coordination',
                ],
              },
              {
                title: 'Storm Damage Land Cleanup',
                description: 'Emergency land cleanout services for storm debris, fallen trees, and weather-related property damage throughout Northern Utah',
                features: [
                  'Storm debris land clearing',
                  'Emergency cleanup services',
                  'Tree and vegetation removal',
                  'Weather damage restoration',
                ],
              },
            ],
          },
          faq: {
            title: 'LAND CLEANOUT FAQ',
            subtitle: 'Common questions about our Northern Utah land cleanout services',
            items: [
              {
                question: 'How much does land cleanout cost in Northern Utah?',
                answer:
                  "Land cleanout pricing varies significantly based on debris volume, access difficulty, and disposal requirements, typically ranging from $485-2,500+. We provide detailed estimates after site assessment.",
              },
              {
                question: 'What size land cleanout projects can you handle?',
                answer:
                  'We handle land cleanout projects of all sizes from small residential lots to large commercial properties. Our trailer-load capacity and equipment fleet can accommodate major clearing projects.',
              },
              {
                question: 'Do you handle hazardous materials in land cleanouts?',
                answer:
                  'We identify hazardous materials during land cleanouts and coordinate with certified disposal specialists. We cannot directly handle hazardous waste but will guide you through proper disposal processes.',
              },
              {
                question: 'How long do land cleanout projects typically take?',
                answer:
                  'Land cleanout duration depends on project scope, typically ranging from 1-5 days. We provide realistic timelines during initial assessment and work efficiently to minimize project duration.',
              },
              {
                question: 'Do you provide emergency land cleanout services?',
                answer:
                  'Yes! We offer emergency land cleanout services for storm damage, property emergencies, and urgent development deadlines throughout Northern Utah.',
              },
              {
                question: 'What permits are required for land cleanout projects?',
                answer:
                  'Permit requirements vary by location and project scope. We help identify necessary permits and can coordinate with local authorities for compliance verification.',
              },
              {
                question: 'Do you recycle materials from land cleanout projects?',
                answer:
                  'Absolutely! We maximize recycling for metal, concrete, wood, and other materials from land clearing projects, providing detailed recycling documentation and environmental impact reporting.',
              },
              {
                question: 'Can you coordinate with contractors for land cleanout timing?',
                answer:
                  'Yes! We regularly coordinate with contractors, developers, and project managers to ensure land cleanout timing aligns with construction schedules and development timelines.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'appliance-removal',
      name: 'Appliance Removal',
      slug: 'appliance-removal',
      shortDescription:
        'Professional appliance removal and disposal throughout Northern Utah. EPA-compliant refrigerant handling, safe appliance removal, and responsible appliance disposal for all household appliances.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides specialized appliance removal services with proper EPA-compliant handling of refrigerants, metals, and electronic components. Our appliance removal specialists safely remove and responsibly dispose of all types of household appliances throughout Northern Utah.',
      features: [
        'EPA-compliant appliance refrigerant handling',
        'Professional appliance removal from any location',
        'Certified appliance metal recycling',
        'Electronic appliance component disposal',
        'Same-day appliance removal service',
        'Transparent appliance removal pricing',
      ],
      image: '/images/appliance-removal.jpg',
      category: 'specialty',
      buttonText: 'Schedule Appliance Removal',
      isActive: true,
      seo: {
        title: 'Appliance Removal in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Full-service appliance removal in Northern Utah. We lift, carry, load, and haul refrigerators, washers, dryers, freezers, and more.',
      },
      content: {
        hero: {
          title: 'APPLIANCE REMOVAL - NORTHERN UTAH',
          subtitle: 'EPA-Compliant Professional Appliance Disposal',
          description:
            'Need old appliances removed safely? Free Space Junk Removal & Cleaning provides professional appliance removal with EPA-compliant refrigerant handling, certified recycling, and same-day service throughout Northern Utah. Safe appliance disposal guaranteed.',
          backgroundImage: '/images/appliance-removal.jpg',
        },
        sections: {
          mainContent: {
            title: 'Appliance Removal - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in professional appliance removal throughout Northern Utah, providing EPA-compliant disposal services for all types of household appliances. Our certified appliance removal team handles everything from refrigerator disposal to washer and dryer removal with the environmental compliance and safety protocols that appliance disposal requires.',
              'Unlike general junk removal companies that lack proper appliance disposal certifications, our appliance removal service includes EPA-compliant refrigerant recovery, certified metal recycling, and proper electronic component handling. We ensure your appliance removal project meets all federal and Utah environmental regulations while maximizing recycling potential.',
              'Each appliance removal project includes proper disconnection procedures, safe extraction from any location, certified refrigerant recovery when applicable, comprehensive recycling coordination, and detailed documentation of environmental compliance. Our appliance disposal process prioritizes safety and regulatory adherence throughout Northern Utah.',
              'Our appliance removal team serves homeowners, property managers, and businesses throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, compliant service. We understand the urgency often associated with appliance replacement and provide same-day appliance removal when old units need immediate disposal.',
              'The appliance removal process prioritizes environmental responsibility and safety, ensuring proper handling of refrigerants, oils, and electronic components according to EPA regulations and Utah environmental standards. Northern Utah customers receive detailed documentation showing how their appliance disposal contributed to certified recycling programs and environmental protection efforts.',
              'Professional appliance removal requires specialized equipment, proper certification, and environmental knowledge that our licensed team provides with every service call. From kitchen appliance removal to laundry equipment disposal, we handle appliance challenges throughout Northern Utah with the expertise and compliance that responsible disposal demands.',
              'Appliance removal pricing includes all disconnection, labor, transportation, refrigerant recovery, and certified recycling with transparent costs provided upfront. Our comprehensive appliance disposal service ensures customers can upgrade their appliances while we handle the complex logistics of environmentally compliant removal.',
              'Whether you\'re upgrading kitchen appliances, replacing laundry equipment, clearing rental properties, or handling appliance disposal for renovations, our appliance removal service provides the professional expertise and environmental compliance that Northern Utah appliance disposal projects require.',
            ],
            benefits: [
              {
                title: 'EPA-Compliant Appliance Disposal',
                description:
                  "Our appliance removal service meets all EPA regulations for refrigerant recovery, ensuring your appliance disposal is environmentally compliant and legally proper.",
              },
              {
                title: 'Certified Appliance Recycling',
                description:
                  'We coordinate with certified recycling facilities to maximize metal recovery and electronic component recycling from your appliance removal project.',
              },
              {
                title: 'Same-Day Appliance Removal',
                description:
                  'Need appliances removed today? We offer same-day appliance removal throughout Northern Utah for urgent replacement and disposal needs.',
              },
              {
                title: 'Safe Appliance Extraction',
                description:
                  'Our team safely removes appliances from any location including basements, upper floors, and tight spaces without property damage.',
              },
              {
                title: 'Transparent Appliance Pricing',
                description:
                  'Know exactly what your appliance removal will cost upfront with no hidden fees for refrigerant recovery, recycling, or disposal compliance.',
              },
              {
                title: 'Environmental Documentation',
                description:
                  'Receive comprehensive documentation including EPA compliance certificates, recycling receipts, and environmental impact reporting for your appliance disposal.',
              },
            ],
          },
          processSteps: {
            title: 'OUR APPLIANCE REMOVAL PROCESS',
            steps: [
              {
                title: 'Appliance Assessment and Scheduling',
                description:
                  'We evaluate your appliance removal needs, identify any special handling requirements, and schedule convenient removal times throughout Northern Utah.',
              },
              {
                title: 'Professional Appliance Disconnection',
                description:
                  'Our certified team safely disconnects appliances, recovers refrigerants when required, and prepares units for safe removal from your property.',
              },
              {
                title: 'Safe Appliance Extraction',
                description:
                  'We carefully remove appliances from any location using proper equipment and techniques, protecting your property throughout the removal process.',
              },
              {
                title: 'Certified Appliance Disposal',
                description:
                  'Your appliances are transported to certified recycling facilities with full EPA compliance documentation and environmental impact reporting provided.',
              },
            ],
          },
          serviceTypes: {
            title: 'APPLIANCE REMOVAL SERVICES WE PROVIDE',
            types: [
              {
                title: 'Refrigerator and Freezer Removal',
                description: 'EPA-compliant removal and disposal of refrigerators and freezers with proper refrigerant recovery and certified recycling',
                features: [
                  'EPA-certified refrigerant recovery',
                  'Safe refrigerator extraction',
                  'Freezer disposal compliance',
                  'Metal recycling maximization',
                ],
              },
              {
                title: 'Washer and Dryer Removal',
                description:
                  'Professional laundry appliance removal including washers, dryers, and laundry room equipment with proper disconnection and disposal',
                features: [
                  'Washer disconnection and removal',
                  'Dryer extraction and disposal',
                  'Laundry room equipment clearing',
                  'Metal component recycling',
                ],
              },
              {
                title: 'Kitchen Appliance Removal',
                description: 'Complete kitchen appliance disposal including dishwashers, stoves, ovens, and small appliance removal',
                features: [
                  'Dishwasher removal and disposal',
                  'Stove and oven extraction',
                  'Built-in appliance removal',
                  'Small appliance collection',
                ],
              },
              {
                title: 'HVAC and Water Heater Removal',
                description: 'Specialized removal of HVAC equipment, water heaters, and climate control appliances with proper handling protocols',
                features: [
                  'Water heater removal and disposal',
                  'HVAC equipment extraction',
                  'Climate control appliance handling',
                  'Specialized equipment recycling',
                ],
              },
            ],
          },
          faq: {
            title: 'APPLIANCE REMOVAL FAQ',
            subtitle: 'Common questions about our Northern Utah appliance removal services',
            items: [
              {
                question: 'How much does appliance removal cost in Northern Utah?',
                answer:
                  "Appliance removal pricing ranges from $75-185 per appliance depending on type, size, and access difficulty. Most Northern Utah appliance removals cost $95-145 with transparent pricing provided upfront.",
              },
              {
                question: 'Do you handle refrigerator disposal properly?',
                answer:
                  'Yes! We provide EPA-compliant refrigerator removal with certified refrigerant recovery, ensuring your refrigerator disposal meets all environmental regulations.',
              },
              {
                question: 'Can you remove appliances from basements or upper floors?',
                answer:
                  'Absolutely! Our appliance removal team safely extracts appliances from any location including basements, second floors, and tight spaces throughout Northern Utah.',
              },
              {
                question: 'Do you offer same-day appliance removal?',
                answer:
                  'Yes! We provide same-day appliance removal throughout Northern Utah when you schedule before noon, perfect for urgent appliance replacement needs.',
              },
              {
                question: 'What appliances do you remove?',
                answer:
                  'We remove all household appliances including refrigerators, washers, dryers, dishwashers, stoves, ovens, water heaters, and HVAC equipment with proper disposal methods.',
              },
              {
                question: 'How do you handle appliance recycling?',
                answer:
                  'We coordinate with certified recycling facilities to maximize metal recovery and proper component disposal, providing documentation of recycling and environmental compliance.',
              },
              {
                question: 'Do you disconnect appliances before removal?',
                answer:
                  'Yes! Our certified team handles all disconnection procedures including water, gas, and electrical connections safely before appliance removal.',
              },
              {
                question: 'What documentation do you provide for appliance disposal?',
                answer:
                  'We provide EPA compliance certificates, recycling receipts, disposal documentation, and environmental impact reports for every appliance removal project.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'garage-cleanout',
      name: 'Garage Cleanout',
      slug: 'garage-cleanout',
      shortDescription:
        'Professional garage cleanout services throughout Northern Utah. Complete garage organization, junk removal, and space transformation with transparent pricing and eco-friendly disposal.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive garage cleanout services that transform cluttered garages into organized, functional spaces. Our garage cleanout specialists handle everything from accumulated storage items to complete garage organization with professional expertise and environmental responsibility.',
      features: [
        'Complete garage cleanout and organization',
        'Professional garage junk removal',
        'Transparent garage cleanout pricing',
        'Same-day garage cleanout service',
        'Eco-friendly garage disposal methods',
        'Before/after garage documentation',
      ],
      image: '/images/garage-cleaning.jpeg',
      category: 'cleaning',
      buttonText: 'Schedule Garage Cleanout',
      isActive: true,
      seo: {
        title: 'Garage Cleanout in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Full-service garage cleanout in Northern Utah. We clear boxes, furniture, appliances, storage clutter, and bulky items so you do not lift.',
      },
      content: {
        hero: {
          title: 'GARAGE CLEANOUT - NORTHERN UTAH',
          subtitle: 'Transform Your Garage Into Functional Space',
          description:
            'Ready to reclaim your garage? Free Space Junk Removal & Cleaning provides comprehensive garage cleanout services with transparent pricing, professional organization support, and eco-friendly disposal throughout Northern Utah. Transform your cluttered garage into a functional space today.',
          backgroundImage: '/images/garage-cleaning.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Garage Cleanout - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in comprehensive garage cleanout services throughout Northern Utah, transforming cluttered garages into organized, functional spaces that homeowners can actually use. Our garage cleanout specialists understand that garages often become catch-all storage areas, accumulating years of household items, seasonal decorations, sporting equipment, and forgotten belongings.',
              'Unlike basic junk removal companies that simply haul everything away, our garage cleanout service includes professional organization support, donation coordination for usable items, and systematic sorting that helps you reclaim valuable garage space. We work with homeowners to identify items worth keeping, organizing, donating, or disposing of responsibly.',
              'Each garage cleanout project includes comprehensive planning, careful item sorting, professional removal of unwanted materials, organization consultation for remaining items, and detailed documentation of the transformation process. Our garage cleaning approach ensures maximum space utilization while maintaining accessibility to items you choose to keep.',
              'Our garage cleanout team serves homeowners throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with flexible scheduling that accommodates busy family lives. We understand that garage organization can be overwhelming, which is why we provide supportive, non-judgmental service that makes the process manageable and even enjoyable.',
              'The garage cleanout process prioritizes safety and environmental responsibility, ensuring proper disposal of hazardous materials often found in garages, recycling of metals and plastics, and donation of usable items to local charities. Northern Utah homeowners receive detailed documentation showing how their garage cleanout contributed to community sustainability efforts.',
              'Professional garage cleanout requires organizational expertise, proper handling of potentially hazardous materials, and environmental knowledge that our trained team provides with every project. From basic decluttering to complete garage transformation, we handle garage challenges with the systematic approach that creates lasting results.',
              'Garage cleanout pricing includes all labor, transportation, sorting, donation coordination, and responsible disposal with transparent costs provided upfront. Our comprehensive garage organization service ensures homeowners can enjoy their newly functional space without worrying about hidden fees or surprise charges.',
              'Whether your garage has become a storage unit, workshop overflow, seasonal decoration warehouse, or general catch-all space, our garage cleanout service provides the professional expertise and organizational support that transforms cluttered garages into valuable, functional areas throughout Northern Utah homes.',
            ],
            benefits: [
              {
                title: 'Complete Garage Transformation',
                description:
                  "Our garage cleanout service goes beyond simple junk removal, providing organization consultation and systematic sorting that transforms your garage into functional space.",
              },
              {
                title: 'Professional Organization Support',
                description:
                  'We help identify the best organization systems for your garage space, ensuring long-term functionality and accessibility for items you choose to keep.',
              },
              {
                title: 'Hazardous Material Handling',
                description:
                  'Our garage cleanout team safely identifies and handles automotive fluids, paints, and other hazardous materials commonly found in garages.',
              },
              {
                title: 'Donation Maximization',
                description:
                  'We coordinate donations for sporting equipment, tools, seasonal items, and other garage contents, keeping usable items out of landfills.',
              },
              {
                title: 'Same-Day Garage Service',
                description:
                  'Need your garage cleaned out today? We offer same-day garage cleanout service throughout Northern Utah for urgent organization needs.',
              },
              {
                title: 'Transparent Garage Pricing',
                description:
                  'Know exactly what your garage cleanout will cost upfront with no hidden fees for additional sorting, organization, or disposal requirements.',
              },
            ],
          },
          processSteps: {
            title: 'OUR GARAGE CLEANOUT PROCESS',
            steps: [
              {
                title: 'Garage Assessment and Planning',
                description:
                  'We evaluate your garage space, discuss your organization goals, and develop a systematic cleanout plan that maximizes functionality and storage efficiency.',
              },
              {
                title: 'Systematic Garage Sorting',
                description:
                  'Our team works with you to sort garage contents into keep, donate, recycle, and dispose categories, providing organization guidance throughout the process.',
              },
              {
                title: 'Professional Garage Cleanout',
                description:
                  'We remove unwanted items, coordinate donations, handle hazardous materials properly, and prepare your garage space for improved organization.',
              },
              {
                title: 'Organization and Documentation',
                description:
                  'We provide organization suggestions for remaining items and deliver comprehensive documentation including before/after photos and donation receipts.',
              },
            ],
          },
          serviceTypes: {
            title: 'GARAGE CLEANOUT SERVICES WE PROVIDE',
            types: [
              {
                title: 'Complete Garage Overhaul',
                description: 'Full garage cleanout and organization service including removal of all unwanted items and systematic reorganization of remaining belongings',
                features: [
                  'Complete garage emptying and cleaning',
                  'Professional organization consultation',
                  'Storage solution recommendations',
                  'Long-term maintenance planning',
                ],
              },
              {
                title: 'Seasonal Garage Organization',
                description:
                  'Targeted garage cleanout focusing on seasonal item organization, holiday decoration storage, and sporting equipment management',
                features: [
                  'Seasonal item sorting and storage',
                  'Holiday decoration organization',
                  'Sporting equipment management',
                  'Climate-controlled storage guidance',
                ],
              },
              {
                title: 'Workshop Garage Cleanout',
                description: 'Specialized garage cleaning for home workshops including tool organization, material sorting, and workspace optimization',
                features: [
                  'Workshop tool organization',
                  'Material and supply sorting',
                  'Workspace efficiency improvement',
                  'Safety compliance enhancement',
                ],
              },
              {
                title: 'Moving Garage Preparation',
                description: 'Pre-move garage cleanout service including decluttering, donation coordination, and packing preparation for relocation',
                features: [
                  'Pre-move garage decluttering',
                  'Moving cost reduction through disposal',
                  'Packing preparation support',
                  'New home organization planning',
                ],
              },
            ],
          },
          faq: {
            title: 'GARAGE CLEANOUT FAQ',
            subtitle: 'Common questions about our Northern Utah garage cleanout services',
            items: [
              {
                question: 'How much does garage cleanout cost in Northern Utah?',
                answer:
                  "Garage cleanout pricing typically ranges from $285-585 depending on garage size, contents, and organization level needed. Most Northern Utah garage projects cost $385-485 with transparent pricing provided upfront.",
              },
              {
                question: 'How long does a garage cleanout take?',
                answer:
                  'Garage cleanouts typically take 4-8 hours depending on contents and organization goals. We work efficiently while allowing time for decision-making and organization planning.',
              },
              {
                question: 'Do you help organize items we want to keep?',
                answer:
                  'Yes! Our garage cleanout service includes organization consultation and suggestions for optimal storage of items you choose to keep, ensuring long-term functionality.',
              },
              {
                question: 'How do you handle hazardous materials in garages?',
                answer:
                  'We safely identify automotive fluids, paints, chemicals, and other hazardous garage materials, coordinating proper disposal through certified facilities at no additional charge.',
              },
              {
                question: 'Can you help donate usable garage items?',
                answer:
                  'Absolutely! We coordinate donations for tools, sporting equipment, seasonal items, and other usable garage contents, providing donation receipts for tax purposes.',
              },
              {
                question: 'Do you provide garage cleanout for attached garages?',
                answer:
                  'Yes! We provide garage cleanout services for attached, detached, and basement garages throughout Northern Utah, adapting our approach to each space type.',
              },
              {
                question: 'What happens to automotive fluids during garage cleanouts?',
                answer:
                  'We handle automotive fluids, oils, and chemicals according to Utah environmental regulations, coordinating proper disposal through certified facilities with full documentation.',
              },
              {
                question: 'Can I schedule regular garage maintenance cleanouts?',
                answer:
                  'Yes! Many Northern Utah homeowners schedule quarterly or semi-annual garage cleanout maintenance to prevent re-accumulation and maintain organization systems.',
              },
            ],
          },
        },
      },
    },
    {
      id: 'construction-cleanup',
      name: 'Construction Cleanup and Junk Removal',
      slug: 'construction-cleanup',
      shortDescription:
        'Professional construction cleanup and debris removal throughout Northern Utah. Comprehensive job site cleanup, renovation waste disposal, and demolition debris removal for contractors and homeowners.',
      longDescription:
        'Free Space Junk Removal & Cleaning provides comprehensive construction cleanup services handling all types of construction debris, renovation waste, and demolition materials. Our construction cleanup specialists serve contractors, property managers, and homeowners throughout Northern Utah with reliable scheduling and professional disposal.',
      features: [
        'Complete construction debris removal',
        'Professional job site cleanup services',
        'Contractor-friendly construction cleanup scheduling',
        'Proper construction waste disposal and recycling',
        'Commercial construction cleanup invoicing',
        'Same-day construction cleanup service',
      ],
      image: '/images/construction-cleanup.jpeg',
      category: 'construction',
      buttonText: 'Schedule Construction Cleanup',
      isActive: true,
      seo: {
        title: 'Construction Cleanup in Northern Utah | Free Space Junk Removal & Cleaning',
        description:
          'Construction cleanup and debris removal in Northern Utah. We load and haul remodel debris, packaging, fixtures, and job-site clutter.',
      },
      content: {
        hero: {
          title: 'CONSTRUCTION CLEANUP - NORTHERN UTAH',
          subtitle: 'Professional Job Site and Renovation Debris Removal',
          description:
            'Need construction cleanup services? Free Space Junk Removal & Cleaning provides comprehensive construction debris removal, job site cleanup, and renovation waste disposal throughout Northern Utah. Professional construction cleanup with contractor-friendly scheduling.',
          backgroundImage: '/images/construction-cleanup.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Construction Cleanup - Northern Utah',
            content: [
              'Free Space Junk Removal & Cleaning specializes in professional construction cleanup services throughout Northern Utah, providing comprehensive debris removal solutions for contractors, property managers, and homeowners tackling renovation projects. Our construction cleanup specialists handle everything from demolition debris to renovation waste with the expertise and reliability that construction timelines demand.',
              'Unlike general junk removal companies that lack construction industry knowledge, our construction cleanup service includes contractor-friendly scheduling, commercial invoicing, progress cleanup coordination, and specialized handling of construction materials. We understand construction project needs and provide flexible service that keeps your projects on schedule.',
              'Each construction cleanup project includes systematic debris removal, proper material sorting for recycling potential, compliant disposal of construction waste, coordination with project timelines, and detailed documentation for project records. Our construction debris removal process ensures job sites remain clean, safe, and compliant throughout Northern Utah.',
              'Our construction cleanup team serves contractors, developers, and homeowners throughout Ogden, Logan, Brigham City, and surrounding Northern Utah communities with reliable, professional service. We understand the critical importance of maintaining clean, safe job sites and provide responsive construction cleanup that adapts to changing project schedules.',
              'The construction cleanup process prioritizes safety and environmental responsibility, ensuring proper disposal of construction materials, recycling of metals and concrete, and compliant handling of renovation waste according to Utah environmental regulations. Contractors receive detailed documentation supporting their project compliance and environmental stewardship efforts.',
              'Professional construction cleanup requires industry knowledge, proper equipment, and regulatory compliance that our experienced team provides with every service call. From small renovation cleanups to major demolition debris removal, we handle construction challenges throughout Northern Utah with the expertise and professionalism that demanding projects require.',
              'Construction cleanup pricing includes all labor, equipment, transportation, sorting, and compliant disposal with transparent costs and contractor-friendly payment terms. Our comprehensive construction debris removal service ensures projects stay on budget while we handle the complex logistics of waste management and disposal compliance.',
              'Whether you\'re managing residential renovations, commercial construction projects, demolition jobs, or ongoing construction sites, our construction cleanup service provides the professional expertise and reliable scheduling that Northern Utah construction projects require for successful completion.',
            ],
            benefits: [
              {
                title: 'Contractor-Friendly Scheduling',
                description:
                  "Our construction cleanup service adapts to construction timelines with flexible scheduling, same-day response, and coordination with project milestones throughout Northern Utah.",
              },
              {
                title: 'Commercial Construction Invoicing',
                description:
                  'We provide professional invoicing, net payment terms, and business-class documentation designed specifically for contractors and commercial construction projects.',
              },
              {
                title: 'Comprehensive Debris Handling',
                description:
                  'Our construction cleanup service handles all types of construction debris including demolition waste, renovation materials, and job site cleanup throughout Northern Utah.',
              },
              {
                title: 'Safety-First Construction Cleanup',
                description:
                  'We maintain OSHA-compliant safety standards during construction cleanup, protecting workers and property while ensuring efficient debris removal.',
              },
              {
                title: 'Environmental Construction Compliance',
                description:
                  'Our construction debris removal meets all Utah environmental regulations with proper disposal documentation and compliance certificates for project records.',
              },
              {
                title: 'Progress Cleanup Coordination',
                description:
                  'We coordinate ongoing construction cleanup throughout project phases, ensuring job sites remain clean, safe, and inspection-ready.',
              },
            ],
          },
          processSteps: {
            title: 'OUR CONSTRUCTION CLEANUP PROCESS',
            steps: [
              {
                title: 'Construction Project Assessment',
                description:
                  'We evaluate your construction cleanup needs, coordinate with project schedules, and develop efficient debris removal plans that support construction timelines.',
              },
              {
                title: 'Systematic Construction Debris Removal',
                description:
                  'Our team executes construction cleanup with proper safety protocols, efficient debris handling, and coordination with ongoing construction activities.',
              },
              {
                title: 'Professional Job Site Management',
                description:
                  'We maintain clean, organized job sites through systematic construction cleanup, ensuring safety compliance and project efficiency throughout Northern Utah.',
              },
              {
                title: 'Complete Construction Documentation',
                description:
                  'You receive comprehensive project documentation including disposal receipts, compliance certificates, and environmental impact reporting for construction records.',
              },
            ],
          },
          serviceTypes: {
            title: 'CONSTRUCTION CLEANUP SERVICES WE PROVIDE',
            types: [
              {
                title: 'Demolition Debris Removal',
                description: 'Complete demolition cleanup including concrete, drywall, flooring, and structural debris removal with proper disposal and recycling',
                features: [
                  'Concrete and masonry debris removal',
                  'Drywall and insulation cleanup',
                  'Flooring and carpet removal',
                  'Structural demolition cleanup',
                ],
              },
              {
                title: 'Renovation Waste Cleanup',
                description:
                  'Comprehensive renovation cleanup including fixture removal, material disposal, and ongoing job site maintenance throughout project phases',
                features: [
                  'Fixture and cabinet removal',
                  'Renovation material disposal',
                  'Progress cleanup coordination',
                  'Final cleanup services',
                ],
              },
              {
                title: 'New Construction Job Site Cleanup',
                description: 'Ongoing construction cleanup for new builds including material waste removal, packaging disposal, and job site organization',
                features: [
                  'Construction material waste removal',
                  'Packaging and debris cleanup',
                  'Job site organization support',
                  'Phase-completion cleanup',
                ],
              },
              {
                title: 'Commercial Construction Cleanup',
                description: 'Large-scale commercial construction cleanup including industrial debris removal and business-class project coordination',
                features: [
                  'Industrial construction debris removal',
                  'Commercial project coordination',
                  'Business-class documentation',
                  'Multi-phase cleanup scheduling',
                ],
              },
            ],
          },
          faq: {
            title: 'CONSTRUCTION CLEANUP FAQ',
            subtitle: 'Common questions about our Northern Utah construction cleanup services',
            items: [
              {
                question: 'How much does construction cleanup cost in Northern Utah?',
                answer:
                  "Construction cleanup pricing varies based on debris volume and project scope, typically ranging from $285-1,500+ depending on project size. We provide detailed estimates and contractor-friendly pricing.",
              },
              {
                question: 'Do you provide ongoing construction cleanup throughout projects?',
                answer:
                  'Yes! We coordinate ongoing construction cleanup throughout project phases, ensuring job sites remain clean, safe, and compliant with regular scheduled cleanups.',
              },
              {
                question: 'Can you handle large-scale demolition debris?',
                answer:
                  'Absolutely! Our construction cleanup service includes specialized equipment and trailers capable of handling large-scale demolition debris throughout Northern Utah.',
              },
              {
                question: 'Do you work with contractors and provide commercial invoicing?',
                answer:
                  'Yes! We provide contractor-friendly services including commercial invoicing, net payment terms, certificates of insurance, and business-class documentation.',
              },
              {
                question: 'What types of construction debris do you handle?',
                answer:
                  'We handle all construction debris including concrete, drywall, wood, metal, flooring, fixtures, insulation, and renovation waste with proper disposal methods.',
              },
              {
                question: 'Do you provide same-day construction cleanup?',
                answer:
                  'Yes! We offer same-day construction cleanup throughout Northern Utah for urgent project needs, inspection preparations, and schedule changes.',
              },
              {
                question: 'How do you ensure construction site safety during cleanup?',
                answer:
                  'We maintain OSHA-compliant safety standards, coordinate with site safety protocols, and ensure our construction cleanup activities don\'t interfere with ongoing work.',
              },
              {
                question: 'Do you recycle construction materials?',
                answer:
                  'Absolutely! We maximize recycling for concrete, metal, wood, and other construction materials, providing documentation of recycling efforts and environmental compliance.',
              },
            ],
          },
        },
      },
    },
  ],

  serviceAreas: [
    {
      id: 'ogden-utah',
      name: 'Ogden',
      slug: 'ogden-utah',
      state: 'UT',
      county: 'Weber County',
      description:
        'Full-service junk removal in Ogden and Weber County. Our crew lifts, carries, loads, and hauls unwanted items so customers do not have to load a dumpster.',
      specialties: [
        'Historic-home and apartment cleanouts near central Ogden',
        'Furniture and appliance pickup from upper floors and basements',
        'Renovation and construction debris hauling',
        'Retail, office, and property-manager cleanouts',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Ogden, UT | Full-Service Hauling | Free Space',
        description:
          'Full-service junk removal in Ogden and Weber County. We lift, load, and haul the junk for homes, apartments, and businesses. Upfront pricing and free quotes.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL OGDEN UT',
          subtitle: 'Full-service hauling for Weber County homes and businesses',
          description:
            'Free Space Junk Removal & Cleaning serves Ogden with full-service junk removal: our crew lifts items from where they sit, carries them out carefully, loads the trailer, and handles responsible disposal.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Ogden junk removal without dumpster loading',
            content: [
              'Ogden homeowners, renters, landlords, and businesses call Free Space Junk Removal & Cleaning when the job needs more than a bin dropped in the driveway. We do the lifting, carrying, loading, and hauling so you do not have to drag couches, appliances, or renovation debris to a curb or dumpster.',
              'Our crew works across Weber County, including older homes near downtown, apartment turnovers, hillside neighborhoods, and commercial spaces where careful access matters. We quote clearly, arrive ready to load, and sort usable or recyclable material whenever practical.',
              'Common Ogden jobs include basement furniture removal, garage cleanouts, appliance pickup, tenant move-out debris, and light construction cleanup after remodels.',
            ],
            highlights: [
              { title: 'Apartment and rental turnover help', description: 'We clear bulky furniture, mattresses, bagged junk, and leftover tenant items from Ogden rentals and multi-family properties.' },
              { title: 'Full-service furniture and appliance removal', description: 'You point to the item; our crew handles stairs, tight doorways, loading, and haul-away.' },
              { title: 'Construction and renovation debris', description: 'We remove cabinets, flooring, drywall scraps, packaging, and other project debris from Weber County remodels.' },
              { title: 'Responsible sorting', description: 'Usable items are separated for donation or recycling opportunities before landfill disposal is considered.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN OGDEN',
            subtitle: 'Useful hauling options for Weber County cleanouts, move-outs, and projects',
            services: [
              { title: 'Single Item Pickup', description: 'One couch, mattress, appliance, or other bulky item removed from inside the property.', href: '/services/single-item-pickup', backgroundImage: '/images/single-item-pickup.jpg' },
              { title: 'Garage Cleanout', description: 'Reclaim garage space without lifting boxes, old tools, tires, or storage clutter yourself.', href: '/services/garage-cleanout', backgroundImage: '/images/garage-cleaning.jpeg' },
              { title: 'Appliance Removal', description: 'Washer, dryer, refrigerator, freezer, water heater, and kitchen appliance hauling.', href: '/services/appliance-removal', backgroundImage: '/images/appliance-removal.jpg' },
              { title: 'Construction Cleanup', description: 'Trailer hauling for remodel debris, packaging, old fixtures, and job-site clutter.', href: '/services/construction-cleanup', backgroundImage: '/images/construction-cleanup.jpeg' },
            ],
          },
          neighborhoods: {
            title: 'OGDEN AREAS WE SERVE',
            areas: [
              { title: 'Downtown and central Ogden', description: 'Apartment, rental, office, and older-home cleanouts where access and parking need planning.' },
              { title: 'East and North Ogden routes', description: 'Furniture, appliance, and garage cleanouts for hillside and suburban properties.' },
              { title: 'West Ogden and Weber County', description: 'Residential, commercial, and property cleanups throughout the broader Weber County area.' },
            ],
          },
          whyChooseUs: {
            title: 'Why Ogden customers choose a full-service crew',
            content: [
              { title: 'No dumpster loading', description: 'Our crew removes items from the room, garage, yard, or work area and loads everything for you.' },
              { title: 'Clear price references', description: 'Typical starting points include $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer projects.' },
              { title: 'Easy scheduling', description: 'Book online or call (385) 326-8426 for Ogden and Weber County availability.' },
              { title: 'Local disposal awareness', description: 'We sort for donation, recycling, and appropriate disposal based on the material and local options.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for Ogden — reviewer name + text',
            'TODO: paste second real Google review for Ogden if available',
          ],
          contextualLinks: [
            { label: 'appliance removal in Northern Utah', href: '/services/appliance-removal', description: 'Helpful when an Ogden cleanup includes refrigerators, washers, dryers, or other heavy appliances.' },
            { label: 'North Ogden junk removal', href: '/service-areas/north-ogden-utah', description: 'Nearby full-service hauling for homes north of Ogden.' },
          ],
          faq: {
            title: 'OGDEN JUNK REMOVAL FAQ',
            subtitle: 'Practical answers for Weber County junk hauling',
            items: [
              { question: 'Do I need to move items outside before pickup in Ogden?', answer: 'No. Free Space Junk Removal & Cleaning is full-service. Our crew lifts, carries, loads, and hauls items from inside, outside, upstairs, basements, garages, or storage areas.' },
              { question: 'What does junk removal cost in Ogden?', answer: 'Pricing depends on volume and access, with clear reference points: $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer projects. Call (385) 326-8426 or schedule online for a quote.' },
              { question: 'Where does old furniture or appliance junk go in Weber County?', answer: 'We look for donation and recycling options first when items are usable or recyclable, then use appropriate Weber County disposal options for material that cannot be reused.' },
              { question: 'Can you handle Ogden apartment or rental cleanouts?', answer: 'Yes. We help renters, landlords, and property managers clear furniture, mattresses, bagged debris, and bulky items after move-outs.' },
            ],
          },
        },
      },
    },
    {
      id: 'logan-utah',
      name: 'Logan',
      slug: 'logan-utah',
      state: 'UT',
      county: 'Cache County',
      description:
        'Full-service junk removal in Logan and Cache Valley for homes, apartments, student housing, rentals, and rural properties.',
      specialties: [
        'USU student move-out and apartment cleanouts',
        'Cache Valley rural and property cleanups',
        'Furniture, mattress, and appliance hauling',
        'Garage, basement, and storage-unit cleanouts',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Logan & Cache Valley, UT | Free Space Junk Removal & Cleaning',
        description:
          'Full-service junk removal in Logan and Cache Valley. We lift, load, and haul furniture, appliances, move-out junk, and property clutter. Free quotes.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL LOGAN UT',
          subtitle: 'Full-service junk hauling for Logan and Cache Valley',
          description:
            'Free Space Junk Removal & Cleaning helps Logan homes, rentals, student apartments, and Cache Valley properties clear unwanted items without renting or loading a dumpster.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Logan junk removal for move-outs, homes, and rural properties',
            content: [
              'In Logan and Cache Valley, junk removal often means a mix of student move-out furniture, basement storage, yard debris, old appliances, and rural property clutter. Our full-service crew removes items from where they are, carries them out carefully, loads the truck or trailer, and hauls them away.',
              'That full-service model matters. Instead of dropping a bin and leaving you to load it, we do the lifting and loading so apartment tenants, landlords, homeowners, and property owners can get the space cleared quickly.',
              'We serve Logan and nearby Cache County communities with clear pricing references, online scheduling, and disposal practices that prioritize donation and recycling when practical.',
            ],
            highlights: [
              { title: 'USU-area move-out cleanouts', description: 'Furniture, mattresses, desks, shelving, and bagged items removed from apartments and student rentals.' },
              { title: 'Cache Valley property cleanups', description: 'Help with barns, garages, sheds, storage spaces, and rural property piles that need trailer capacity.' },
              { title: 'Appliance and furniture hauling', description: 'Heavy items are carried out by our crew so you do not have to recruit friends or load a bin.' },
              { title: 'Garage and basement cleanouts', description: 'We clear long-stored items from tight spaces, stairs, and storage areas with care.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN LOGAN',
            subtitle: 'Cache Valley hauling services with the lifting included',
            services: [
              { title: 'Single Item Pickup', description: 'One mattress, couch, appliance, dresser, or bulky item removed from the room or curb.', href: '/services/single-item-pickup', backgroundImage: '/images/single-item-pickup.jpg' },
              { title: 'Large Load Junk Removal', description: 'Trailer capacity for apartment turns, garage cleanouts, and multi-room clutter.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
              { title: 'Estate & Room Cleanouts', description: 'Careful room-by-room clearing for family transitions, downsizing, and inherited spaces.', href: '/services/estate-room-cleanouts', backgroundImage: '/images/estate-cleanout.jpeg' },
              { title: 'Land Cleanout', description: 'Useful for rural Cache Valley properties with outdoor debris, old materials, and piled junk.', href: '/services/land-cleanout', backgroundImage: '/images/land-cleanout.jpeg' },
            ],
          },
          neighborhoods: {
            title: 'LOGAN AND CACHE VALLEY AREAS WE SERVE',
            areas: [
              { title: 'USU and central Logan', description: 'Student apartment move-outs, furniture pickup, and tenant cleanout hauling.' },
              { title: 'Residential Logan neighborhoods', description: 'Garage, basement, appliance, and furniture removal for homeowners and renters.' },
              { title: 'Cache Valley rural properties', description: 'Trailer hauling for sheds, barns, yards, storage areas, and property cleanups.' },
            ],
          },
          whyChooseUs: {
            title: 'A better option than loading a dumpster yourself',
            content: [
              { title: 'We do the labor', description: 'Our crew lifts, carries, loads, and hauls so you can clear space without doing the heavy work.' },
              { title: 'Pricing you can understand', description: 'Reference prices include $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer projects.' },
              { title: 'Quick CTA options', description: 'Schedule online at the Google booking link or call (385) 326-8426 for Logan availability.' },
              { title: 'Donation and recycling minded', description: 'When items can be reused or recycled, we sort them before sending anything to disposal.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for Logan — reviewer name + text',
            'TODO: paste second real Google review for Logan if available',
          ],
          contextualLinks: [
            { label: 'estate and room cleanout help', href: '/services/estate-room-cleanouts', description: 'Useful for Cache Valley family transitions and inherited-room projects.' },
            { label: 'Hyrum junk removal', href: '/service-areas/hyrum-utah', description: 'Nearby service from the company’s Hyrum home base.' },
          ],
          faq: {
            title: 'LOGAN JUNK REMOVAL FAQ',
            subtitle: 'Answers for Cache Valley customers',
            items: [
              { question: 'Can you help with USU student move-out junk in Logan?', answer: 'Yes. We remove mattresses, desks, couches, shelving, bagged clutter, and other move-out items from apartments and rentals. Our crew does the lifting and loading.' },
              { question: 'Do I have to load items into a dumpster?', answer: 'No. We are a full-service junk removal crew, not just a dumpster drop-off. We remove items from inside or outside the property and load everything for you.' },
              { question: 'What are the Logan pricing reference points?', answer: 'Common reference prices are $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer projects. Final pricing depends on volume, item type, and access.' },
              { question: 'Where does old appliance or mattress junk go in Cache County?', answer: 'Reusable and recyclable materials are separated when practical. Items that cannot be reused are taken to appropriate Cache County disposal options.' },
            ],
          },
        },
      },
    },
    {
      id: 'brigham-city-utah',
      name: 'Brigham City',
      slug: 'brigham-city-utah',
      state: 'UT',
      county: 'Box Elder County',
      description:
        'Full-service junk removal in Brigham City and Box Elder County for homes, farms, rentals, estates, and business cleanouts.',
      specialties: [
        'Box Elder County home and rental cleanouts',
        'Agricultural and rural property hauling',
        'Estate, garage, and storage cleanouts',
        'Appliance, furniture, and debris removal',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Brigham City, UT | Full-Service Hauling | Free Space',
        description:
          'Full-service junk removal in Brigham City and Box Elder County. We do all lifting and loading for furniture, appliances, estates, farms, and cleanouts.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL BRIGHAM CITY UT',
          subtitle: 'Full-service hauling for Box Elder County',
          description:
            'Free Space Junk Removal & Cleaning clears unwanted items in Brigham City with a crew that lifts, carries, loads, hauls, and sorts material responsibly.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Brigham City junk removal with the loading included',
            content: [
              'Brigham City cleanouts can involve in-town homes, rural properties, rental turnovers, estate spaces, barns, garages, and outdoor piles. Free Space Junk Removal & Cleaning brings the labor and trailer capacity so customers do not have to load a dumpster by hand.',
              'Our crew removes furniture, appliances, household clutter, yard and property debris, and renovation leftovers from where they sit. We load carefully, protect access areas where practical, and keep pricing straightforward.',
              'We serve Brigham City and broader Box Elder County with full-service hauling, online scheduling, and responsible sorting for donation, recycling, or proper disposal.',
            ],
            highlights: [
              { title: 'Rural and agricultural property hauling', description: 'Trailer-friendly removal for accumulated materials around sheds, barns, outbuildings, and acreage.' },
              { title: 'Estate and downsizing cleanouts', description: 'Room-by-room removal for families clearing inherited items or preparing a property for sale.' },
              { title: 'Furniture and appliance removal', description: 'Heavy lifting from inside the home is handled by our crew, including stairs and tight entries.' },
              { title: 'Business and rental cleanouts', description: 'Clear office, retail, storage, or tenant-left items without tying up your own staff.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN BRIGHAM CITY',
            subtitle: 'Box Elder County hauling for homes, farms, rentals, and estates',
            services: [
              { title: 'Large Load Junk Removal', description: 'Trailer-load cleanouts for homes, shops, outbuildings, and multi-room projects.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
              { title: 'Land Cleanout', description: 'Outdoor and rural property debris removal for Box Elder County properties.', href: '/services/land-cleanout', backgroundImage: '/images/land-cleanout.jpeg' },
              { title: 'Estate & Room Cleanouts', description: 'Careful estate, downsizing, and room-clearing support.', href: '/services/estate-room-cleanouts', backgroundImage: '/images/estate-cleanout.jpeg' },
              { title: 'Appliance Removal', description: 'Refrigerators, washers, dryers, freezers, and other heavy appliances hauled away.', href: '/services/appliance-removal', backgroundImage: '/images/appliance-removal.jpg' },
            ],
          },
          neighborhoods: {
            title: 'BRIGHAM CITY AND BOX ELDER COUNTY AREAS WE SERVE',
            areas: [
              { title: 'Brigham City homes', description: 'Garage, basement, appliance, furniture, and move-out hauling.' },
              { title: 'Rural Box Elder properties', description: 'Outdoor piles, outbuildings, storage areas, and agricultural-property cleanups.' },
              { title: 'Business and rental spaces', description: 'Retail, office, storage, and tenant turnover cleanouts.' },
            ],
          },
          whyChooseUs: {
            title: 'Full-service removal for Box Elder County',
            content: [
              { title: 'No self-loading', description: 'We do the lifting, carrying, and loading so you are not stuck filling a dumpster yourself.' },
              { title: 'Published pricing references', description: 'Use $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer as clear starting points.' },
              { title: 'Simple booking', description: 'Use the online schedule link or call (385) 326-8426 for a free Brigham City quote.' },
              { title: 'Sorted disposal', description: 'We separate reusable, recyclable, and disposal-only items whenever practical.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for Brigham City — reviewer name + text',
            'TODO: paste second real Google review for Brigham City if available',
          ],
          contextualLinks: [
            { label: 'land cleanout service', href: '/services/land-cleanout', description: 'A good fit for rural Box Elder County debris and property cleanup projects.' },
            { label: 'Willard junk removal', href: '/service-areas/willard-utah', description: 'Nearby full-service hauling south of Brigham City.' },
          ],
          faq: {
            title: 'BRIGHAM CITY JUNK REMOVAL FAQ',
            subtitle: 'Helpful answers for Box Elder County cleanouts',
            items: [
              { question: 'Do you serve rural properties near Brigham City?', answer: 'Yes. We handle home, garage, outbuilding, barn, and outdoor debris cleanups across Brigham City and nearby Box Elder County areas.' },
              { question: 'Will your crew load everything?', answer: 'Yes. We are full-service: the crew lifts, carries, loads, and hauls the items. You do not have to load a dumpster.' },
              { question: 'How much does junk removal cost in Brigham City?', answer: 'Reference prices include $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer projects. We quote based on volume, access, and item type.' },
              { question: 'Where does old junk go in Box Elder County?', answer: 'We sort usable and recyclable items first when practical, then use appropriate Box Elder County disposal options for material that cannot be reused.' },
            ],
          },
        },
      },
    },
    {
      id: 'hyrum-utah',
      name: 'Hyrum',
      slug: 'hyrum-utah',
      state: 'UT',
      county: 'Cache County',
      description:
        'Local full-service junk removal from Hyrum for Cache County homes, rentals, garages, yards, and small businesses.',
      specialties: [
        'Hyrum home-base response for Cache County jobs',
        'Garage, shed, and storage cleanouts',
        'Furniture and appliance removal',
        'Yard, property, and trailer-load hauling',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Hyrum, UT | Local Full-Service Hauling | Free Space',
        description:
          'Local full-service junk removal in Hyrum and Cache County. We lift, load, and haul furniture, appliances, garage clutter, and property debris.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL HYRUM UT',
          subtitle: 'Local full-service hauling from Hyrum',
          description:
            'Free Space Junk Removal & Cleaning is based in Hyrum and helps Cache County customers clear junk without lifting or loading it themselves.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Hyrum junk removal from a local crew',
            content: [
              'For Hyrum customers, junk removal should be simple: point to what needs to go and let the crew handle the work. Free Space Junk Removal & Cleaning lifts, carries, loads, hauls, and sorts unwanted items for responsible disposal.',
              'We help with garage clutter, old appliances, furniture, room cleanouts, yard debris, shed storage, and trailer-load projects throughout Hyrum and nearby Cache County communities.',
              'Because the business is based in Hyrum, this page is framed honestly around present service and local availability rather than unsupported years-in-business claims.',
            ],
            highlights: [
              { title: 'Local Hyrum service', description: 'Convenient response for hometown cleanouts, garage clutter, and property projects.' },
              { title: 'Garage and shed clearing', description: 'We remove boxes, old tools, shelving, household clutter, and bulky items from storage spaces.' },
              { title: 'Appliance and furniture pickup', description: 'Heavy items are lifted and loaded by our crew, not left for you to drag outside.' },
              { title: 'Property cleanup hauling', description: 'Trailer options for yards, outbuildings, and larger Cache County cleanup projects.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN HYRUM',
            subtitle: 'Local Cache County hauling with the labor included',
            services: [
              { title: 'Garage Cleanout', description: 'Clear boxes, tools, shelves, and old household items from your garage.', href: '/services/garage-cleanout', backgroundImage: '/images/garage-cleaning.jpeg' },
              { title: 'Small Load Junk Removal', description: 'A practical option for closet, room, and smaller home cleanouts.', href: '/services/small-load-junk-removal', backgroundImage: '/images/small-cleanup.jpg' },
              { title: 'Appliance Removal', description: 'Heavy refrigerators, washers, dryers, and freezers removed by our crew.', href: '/services/appliance-removal', backgroundImage: '/images/appliance-removal.jpg' },
              { title: 'Large Load Junk Removal', description: 'Trailer capacity for multi-room, shed, and property cleanups.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
            ],
          },
          neighborhoods: {
            title: 'HYRUM AND CACHE COUNTY AREAS WE SERVE',
            areas: [
              { title: 'Hyrum homes and rentals', description: 'Furniture, appliance, garage, and move-out cleanouts.' },
              { title: 'South Cache Valley', description: 'Nearby communities with small-load and trailer-load junk removal needs.' },
              { title: 'Yards and outbuildings', description: 'Outdoor, shed, garage, and property cleanup hauling.' },
            ],
          },
          whyChooseUs: {
            title: 'Hyrum customers do not have to do the lifting',
            content: [
              { title: 'Full-service labor', description: 'We carry and load everything included in the quoted removal.' },
              { title: 'Clear prices', description: 'Reference points: $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer.' },
              { title: 'Easy schedule link', description: 'Book online or call (385) 326-8426 to discuss a Hyrum pickup.' },
              { title: 'Responsible local disposal', description: 'Reusable and recyclable items are separated when practical.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for Hyrum — reviewer name + text',
            'TODO: paste second real Google review for Hyrum if available',
          ],
          contextualLinks: [
            { label: 'garage cleanout service', href: '/services/garage-cleanout', description: 'A useful option for Hyrum storage and garage clutter.' },
            { label: 'Logan junk removal', href: '/service-areas/logan-utah', description: 'Nearby Cache Valley service north of Hyrum.' },
          ],
          faq: {
            title: 'HYRUM JUNK REMOVAL FAQ',
            subtitle: 'Local answers for Cache County customers',
            items: [
              { question: 'Is Free Space Junk Removal & Cleaning based in Hyrum?', answer: 'Yes. The business address is 375 E 300 S, Hyrum, UT 84319, and the crew serves Hyrum and nearby Northern Utah communities.' },
              { question: 'Do I need to carry junk outside?', answer: 'No. The service is full-service, so the crew does the lifting, carrying, loading, and hauling.' },
              { question: 'What are the Hyrum junk removal prices?', answer: 'Published reference points include $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer. Final quotes depend on the load and access.' },
              { question: 'Can you remove items from a shed or garage?', answer: 'Yes. We handle garage, shed, storage, and yard cleanouts, including bulky items and trailer-load projects.' },
            ],
          },
        },
      },
    },
    {
      id: 'north-ogden-utah',
      name: 'North Ogden',
      slug: 'north-ogden-utah',
      state: 'UT',
      county: 'Weber County',
      description:
        'Full-service junk removal for North Ogden and Weber County homes, garages, hillside properties, rentals, and cleanout projects.',
      specialties: [
        'North Ogden garage and basement cleanouts',
        'Hillside and suburban property hauling',
        'Furniture, appliance, and mattress pickup',
        'Renovation debris and large-load removal',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal North Ogden, UT | Full-Service Hauling | Free Space',
        description:
          'Full-service junk removal in North Ogden and Weber County. We lift, load, and haul furniture, appliances, garage clutter, and project debris.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL NORTH OGDEN UT',
          subtitle: 'Full-service hauling for North Weber County',
          description:
            'Free Space Junk Removal & Cleaning clears North Ogden junk with a crew that lifts, carries, loads, and hauls items from homes, garages, yards, and rentals.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'North Ogden junk removal without the heavy lifting',
            content: [
              'North Ogden homes often have steep drives, basement storage, busy garages, and bulky furniture that is hard to move alone. Our full-service crew handles the carrying and loading so you do not have to rent a dumpster or find helpers.',
              'We remove furniture, appliances, mattresses, yard and garage clutter, construction leftovers, and larger trailer loads throughout North Ogden and nearby Weber County areas.',
              'The process is straightforward: schedule online or by phone, show us what goes, and our team loads and hauls the items while sorting for donation or recycling where practical.',
            ],
            highlights: [
              { title: 'Hillside-home hauling', description: 'Help moving bulky items from homes with stairs, slopes, or tight access points.' },
              { title: 'Garage and basement cleanouts', description: 'Clear long-stored clutter without carrying everything outside first.' },
              { title: 'Appliance and furniture removal', description: 'Our crew carries heavy items out and loads them safely.' },
              { title: 'Large-load project support', description: 'Trailer capacity for remodel debris, multi-room cleanouts, and property clearing.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN NORTH OGDEN',
            subtitle: 'Weber County hauling for homes, garages, and projects',
            services: [
              { title: 'Single Item Pickup', description: 'Bulky item pickup for mattresses, couches, appliances, and heavy furniture.', href: '/services/single-item-pickup', backgroundImage: '/images/single-item-pickup.jpg' },
              { title: 'Garage Cleanout', description: 'Declutter garages and storage spaces without hauling items to the driveway.', href: '/services/garage-cleanout', backgroundImage: '/images/garage-cleaning.jpeg' },
              { title: 'Large Load Junk Removal', description: 'Trailer-load removal for bigger North Ogden cleanouts.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
              { title: 'Construction Cleanup', description: 'Remodel debris and project leftovers hauled from Weber County properties.', href: '/services/construction-cleanup', backgroundImage: '/images/construction-cleanup.jpeg' },
            ],
          },
          neighborhoods: {
            title: 'NORTH OGDEN AREAS WE SERVE',
            areas: [
              { title: 'Residential neighborhoods', description: 'Furniture, appliances, garage clutter, and move-out items.' },
              { title: 'Foothill and hillside homes', description: 'Careful hauling where access, stairs, or grade make self-loading hard.' },
              { title: 'Nearby Weber County routes', description: 'Large-load and project cleanups north of Ogden.' },
            ],
          },
          whyChooseUs: {
            title: 'Full-service hauling for North Ogden',
            content: [
              { title: 'Crew-loaded service', description: 'You do not load a dumpster; we lift, carry, load, and haul.' },
              { title: 'Clear pricing references', description: '$50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer.' },
              { title: 'Simple scheduling', description: 'Use the Google booking link or call (385) 326-8426.' },
              { title: 'Practical disposal sorting', description: 'Donation and recycling are considered before disposal whenever possible.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for North Ogden — reviewer name + text',
            'TODO: paste second real Google review for North Ogden if available',
          ],
          contextualLinks: [
            { label: 'Ogden junk removal', href: '/service-areas/ogden-utah', description: 'Nearby service for central and south Ogden cleanouts.' },
            { label: 'single item pickup', href: '/services/single-item-pickup', description: 'Best for one couch, mattress, refrigerator, or other bulky item.' },
          ],
          faq: {
            title: 'NORTH OGDEN JUNK REMOVAL FAQ',
            subtitle: 'Answers for North Weber County customers',
            items: [
              { question: 'Can you remove items from basements or upstairs rooms?', answer: 'Yes. Our crew handles stairs, tight access, carrying, loading, and haul-away for bulky items.' },
              { question: 'Do you provide dumpster rental in North Ogden?', answer: 'No. Free Space Junk Removal & Cleaning is full-service junk removal, which means we do the loading and hauling for you.' },
              { question: 'What does North Ogden junk removal cost?', answer: 'Reference prices are $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer. Quotes depend on volume, access, and item type.' },
              { question: 'Where do appliances and mattresses go in Weber County?', answer: 'We sort usable or recyclable material when practical and use appropriate local disposal options for items that cannot be reused.' },
            ],
          },
        },
      },
    },
    {
      id: 'willard-utah',
      name: 'Willard',
      slug: 'willard-utah',
      state: 'UT',
      county: 'Box Elder County',
      description:
        'Full-service junk removal for Willard and Box Elder County homes, lake-area properties, yards, outbuildings, and cleanouts.',
      specialties: [
        'Willard home and garage cleanouts',
        'Lake-area and rural property debris hauling',
        'Furniture, appliance, and mattress removal',
        'Outbuilding, shed, and yard cleanup loads',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Willard, UT | Full-Service Hauling | Free Space',
        description:
          'Full-service junk removal in Willard and Box Elder County. We lift, load, and haul appliances, furniture, garage clutter, yard debris, and cleanouts.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL WILLARD UT',
          subtitle: 'Full-service hauling for Willard and Box Elder County',
          description:
            'Free Space Junk Removal & Cleaning helps Willard customers clear unwanted items without loading a dumpster. Our crew lifts, loads, hauls, and sorts the junk.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Willard junk removal for homes, yards, and outbuildings',
            content: [
              'Willard cleanouts often include a blend of household junk, garage storage, lake-area property clutter, yard piles, and outbuilding debris. We bring full-service labor and hauling so customers can clear space without moving heavy items themselves.',
              'Our crew carries items from garages, rooms, sheds, and yards, then loads and hauls them for donation, recycling, or proper disposal when practical.',
              'Whether you need one bulky item gone or a multi-trailer property cleanup, Free Space Junk Removal & Cleaning provides transparent reference pricing and easy scheduling for Willard customers.',
            ],
            highlights: [
              { title: 'Lake-area and rural property cleanup', description: 'Useful for outdoor clutter, sheds, old materials, and seasonal property cleanups.' },
              { title: 'Garage and storage cleanouts', description: 'We lift and load boxes, shelving, furniture, appliances, and long-stored clutter.' },
              { title: 'Appliance and furniture pickup', description: 'Heavy items are removed from where they sit without customer loading.' },
              { title: 'Trailer-load capacity', description: 'Half-trailer, full-trailer, and multi-trailer options for larger Willard projects.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN WILLARD',
            subtitle: 'Box Elder County hauling with the loading handled for you',
            services: [
              { title: 'Small Load Junk Removal', description: 'Good for a room, storage corner, or smaller cleanup pile.', href: '/services/small-load-junk-removal', backgroundImage: '/images/small-cleanup.jpg' },
              { title: 'Large Load Junk Removal', description: 'Trailer capacity for sheds, garages, yards, and multi-room cleanouts.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
              { title: 'Land Cleanout', description: 'Outdoor debris and property cleanup support for rural Willard jobs.', href: '/services/land-cleanout', backgroundImage: '/images/land-cleanout.jpeg' },
              { title: 'Appliance Removal', description: 'Old refrigerators, freezers, washers, dryers, and bulky appliances hauled away.', href: '/services/appliance-removal', backgroundImage: '/images/appliance-removal.jpg' },
            ],
          },
          neighborhoods: {
            title: 'WILLARD AREAS WE SERVE',
            areas: [
              { title: 'Willard homes', description: 'Garage, furniture, appliance, and move-out hauling.' },
              { title: 'Lake-area properties', description: 'Seasonal cleanup, yard clutter, and property debris hauling.' },
              { title: 'Rural Box Elder routes', description: 'Outbuildings, sheds, storage areas, and larger cleanouts.' },
            ],
          },
          whyChooseUs: {
            title: 'No self-loading for Willard cleanouts',
            content: [
              { title: 'Full-service crew', description: 'We lift, carry, load, and haul everything included in the job.' },
              { title: 'Transparent references', description: 'Starting points include $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer.' },
              { title: 'Two ways to book', description: 'Schedule online or call (385) 326-8426 for a free quote.' },
              { title: 'Responsible sorting', description: 'Donation and recycling options are used when practical.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for Willard — reviewer name + text',
            'TODO: paste second real Google review for Willard if available',
          ],
          contextualLinks: [
            { label: 'Brigham City junk removal', href: '/service-areas/brigham-city-utah', description: 'Nearby Box Elder County service for larger cleanouts.' },
            { label: 'large load junk removal', href: '/services/large-load-junk-removal', description: 'Trailer hauling for property, shed, and multi-room cleanups.' },
          ],
          faq: {
            title: 'WILLARD JUNK REMOVAL FAQ',
            subtitle: 'Questions from Box Elder County customers',
            items: [
              { question: 'Do you pick up junk from sheds and yards in Willard?', answer: 'Yes. We remove junk from sheds, garages, yards, storage areas, and homes. Our crew loads the material for you.' },
              { question: 'Can I book a full-trailer cleanup?', answer: 'Yes. Pricing references include $320 half trailer, $490 full trailer, and $849 multi-trailer projects, depending on the load.' },
              { question: 'Where does old appliance junk go near Willard?', answer: 'Reusable and recyclable materials are separated when practical, with remaining items taken to appropriate Box Elder County disposal options.' },
              { question: 'Do I need to rent a dumpster first?', answer: 'No. This is full-service junk removal, so the crew does the lifting, loading, and hauling.' },
            ],
          },
        },
      },
    },
    {
      id: 'plain-city-utah',
      name: 'Plain City',
      slug: 'plain-city-utah',
      state: 'UT',
      county: 'Weber County',
      description:
        'Full-service junk removal in Plain City and Weber County for homes, farms, garages, yards, and cleanout projects.',
      specialties: [
        'Plain City garage and room cleanouts',
        'Rural Weber County property hauling',
        'Furniture, mattress, and appliance pickup',
        'Farm-adjacent yard and outbuilding cleanup',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Plain City, UT | Full-Service Hauling | Free Space',
        description:
          'Full-service junk removal in Plain City and Weber County. We lift, load, and haul furniture, appliances, farm-area clutter, garages, and cleanouts.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL PLAIN CITY UT',
          subtitle: 'Full-service hauling for rural Weber County',
          description:
            'Free Space Junk Removal & Cleaning helps Plain City customers clear unwanted items from homes, garages, yards, and outbuildings with the lifting and loading included.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Plain City junk removal for homes and rural properties',
            content: [
              'Plain City customers often need junk removal that works for both residential spaces and rural-property cleanup: garages, sheds, yards, outbuildings, old appliances, and heavy furniture. Our crew does the lifting, loading, hauling, and sorting.',
              'Instead of loading a dumpster yourself, you can show us the items and let the team handle the physical work. We use clear pricing references and responsible disposal practices for Weber County jobs.',
              'From a single bulky item to a full trailer load, Free Space Junk Removal & Cleaning helps Plain City residents reclaim space without tying up a weekend of heavy labor.',
            ],
            highlights: [
              { title: 'Rural-property hauling', description: 'Useful for farm-adjacent yards, sheds, shops, and outdoor clutter piles.' },
              { title: 'Garage and room cleanouts', description: 'We carry and load old storage, furniture, mattresses, boxes, and household junk.' },
              { title: 'Appliance removal', description: 'Heavy appliances are removed by our crew and sorted for responsible disposal.' },
              { title: 'Large-load trailer options', description: 'Half-trailer and full-trailer hauling for bigger cleanup projects.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN PLAIN CITY',
            subtitle: 'Weber County hauling for homes, yards, garages, and outbuildings',
            services: [
              { title: 'Garage Cleanout', description: 'Declutter garage and storage areas without carrying everything outside yourself.', href: '/services/garage-cleanout', backgroundImage: '/images/garage-cleaning.jpeg' },
              { title: 'Land Cleanout', description: 'Outdoor debris and rural-property cleanup support.', href: '/services/land-cleanout', backgroundImage: '/images/land-cleanout.jpeg' },
              { title: 'Appliance Removal', description: 'Heavy appliance pickup with lifting and loading included.', href: '/services/appliance-removal', backgroundImage: '/images/appliance-removal.jpg' },
              { title: 'Large Load Junk Removal', description: 'Trailer hauling for large room, shed, and property cleanouts.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
            ],
          },
          neighborhoods: {
            title: 'PLAIN CITY AREAS WE SERVE',
            areas: [
              { title: 'Plain City homes', description: 'Garage, furniture, appliance, and room cleanouts.' },
              { title: 'Rural Weber County properties', description: 'Shed, outbuilding, yard, and property debris hauling.' },
              { title: 'Nearby residential routes', description: 'Flexible pickup for surrounding Weber County communities.' },
            ],
          },
          whyChooseUs: {
            title: 'Plain City customers get full-service loading',
            content: [
              { title: 'No loading required', description: 'The crew lifts, carries, loads, and hauls the items included in your quote.' },
              { title: 'Clear price references', description: '$50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer.' },
              { title: 'Schedule quickly', description: 'Book online or call (385) 326-8426 for Plain City availability.' },
              { title: 'Disposal sorting', description: 'Usable and recyclable items are separated when practical.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for Plain City — reviewer name + text',
            'TODO: paste second real Google review for Plain City if available',
          ],
          contextualLinks: [
            { label: 'land cleanout in Northern Utah', href: '/services/land-cleanout', description: 'Helpful for Plain City outdoor and property debris hauling.' },
            { label: 'West Haven junk removal', href: '/service-areas/west-haven-utah', description: 'Nearby Weber County service for suburban cleanouts.' },
          ],
          faq: {
            title: 'PLAIN CITY JUNK REMOVAL FAQ',
            subtitle: 'Useful answers for Weber County customers',
            items: [
              { question: 'Can you remove junk from outbuildings in Plain City?', answer: 'Yes. We remove items from sheds, garages, shops, yards, and outbuildings, then load and haul them away.' },
              { question: 'Is this a dumpster rental?', answer: 'No. Free Space Junk Removal & Cleaning is full-service. We do the lifting and loading instead of leaving that work to you.' },
              { question: 'How is pricing estimated?', answer: 'Pricing is based mainly on load volume and access. Reference points are $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer.' },
              { question: 'Where does old mattress or appliance junk go in Weber County?', answer: 'When practical, reusable and recyclable items are separated first. Remaining material is taken to appropriate local disposal options.' },
            ],
          },
        },
      },
    },
    {
      id: 'west-haven-utah',
      name: 'West Haven',
      slug: 'west-haven-utah',
      state: 'UT',
      county: 'Weber County',
      description:
        'Full-service junk removal in West Haven and Weber County for growing households, garages, rentals, businesses, and cleanout projects.',
      specialties: [
        'West Haven garage and home cleanouts',
        'Furniture, appliance, and mattress removal',
        'Move-out and rental turnover hauling',
        'Large-load cleanouts for busy households',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal West Haven, UT | Full-Service Hauling | Free Space',
        description:
          'Full-service junk removal in West Haven and Weber County. We lift, load, and haul furniture, appliances, garage clutter, move-out junk, and debris.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL WEST HAVEN UT',
          subtitle: 'Full-service hauling for West Haven homes and businesses',
          description:
            'Free Space Junk Removal & Cleaning helps West Haven customers clear clutter quickly by lifting, carrying, loading, hauling, and sorting unwanted items.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'West Haven junk removal for busy households and rentals',
            content: [
              'West Haven is a practical fit for full-service junk removal: growing families, garage overflows, move-out projects, furniture upgrades, rental turns, and business clutter. We do the heavy lifting so you do not have to load a dumpster.',
              'Our crew removes items from inside the home, garage, yard, storage area, or business space, then loads and hauls them for donation, recycling, or disposal when practical.',
              'Use the online scheduling link or call for a free quote; pricing references are straightforward and based mainly on volume and access.',
            ],
            highlights: [
              { title: 'Family garage cleanouts', description: 'Sporting goods, boxes, furniture, and household clutter cleared from storage spaces.' },
              { title: 'Move-out and rental hauling', description: 'Mattresses, couches, bagged debris, and bulky items removed after moves or tenant turnovers.' },
              { title: 'Appliance and furniture pickup', description: 'Heavy items are lifted from where they sit and loaded by our crew.' },
              { title: 'Business cleanout support', description: 'Office, storage, and light commercial junk hauling for West Haven businesses.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN WEST HAVEN',
            subtitle: 'Weber County hauling with the lifting included',
            services: [
              { title: 'Garage Cleanout', description: 'Clear family garage clutter and bulky storage without doing the carrying.', href: '/services/garage-cleanout', backgroundImage: '/images/garage-cleaning.jpeg' },
              { title: 'Single Item Pickup', description: 'One heavy item removed from inside or outside the property.', href: '/services/single-item-pickup', backgroundImage: '/images/single-item-pickup.jpg' },
              { title: 'Large Load Junk Removal', description: 'Trailer-load capacity for whole rooms, move-outs, and major decluttering.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
              { title: 'Estate & Room Cleanouts', description: 'Room-by-room hauling for downsizing, transitions, and inherited spaces.', href: '/services/estate-room-cleanouts', backgroundImage: '/images/estate-cleanout.jpeg' },
            ],
          },
          neighborhoods: {
            title: 'WEST HAVEN AREAS WE SERVE',
            areas: [
              { title: 'Residential West Haven', description: 'Garage, basement, furniture, appliance, and room cleanouts.' },
              { title: 'Rental and move-out projects', description: 'Fast removal of leftover tenant or moving clutter.' },
              { title: 'Business and storage spaces', description: 'Office, storage, retail, and light commercial junk hauling.' },
            ],
          },
          whyChooseUs: {
            title: 'West Haven junk removal with crew loading',
            content: [
              { title: 'No dumpster work for you', description: 'We do the lifting, loading, and hauling.' },
              { title: 'Reference pricing', description: '$50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer.' },
              { title: 'Call or schedule online', description: 'Use the booking link or call (385) 326-8426 for availability.' },
              { title: 'Donation and recycling minded', description: 'We sort items responsibly whenever practical.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for West Haven — reviewer name + text',
            'TODO: paste second real Google review for West Haven if available',
          ],
          contextualLinks: [
            { label: 'garage cleanout service', href: '/services/garage-cleanout', description: 'A strong fit for West Haven household storage projects.' },
            { label: 'Plain City junk removal', href: '/service-areas/plain-city-utah', description: 'Nearby Weber County full-service hauling.' },
          ],
          faq: {
            title: 'WEST HAVEN JUNK REMOVAL FAQ',
            subtitle: 'Answers for Weber County cleanouts',
            items: [
              { question: 'Do you handle move-out junk in West Haven?', answer: 'Yes. We remove leftover furniture, mattresses, bagged debris, boxes, and bulky items from homes and rentals.' },
              { question: 'Will your crew move items from inside the home?', answer: 'Yes. The service is full-service, so our crew lifts, carries, loads, and hauls the items included in the quote.' },
              { question: 'What does junk removal cost in West Haven?', answer: 'Reference prices are $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer projects. Final quotes depend on volume and access.' },
              { question: 'Where do old appliances or mattresses go in Weber County?', answer: 'We sort usable and recyclable material when practical before taking remaining items to appropriate local disposal options.' },
            ],
          },
        },
      },
    },
    {
      id: 'liberty-utah',
      name: 'Liberty',
      slug: 'liberty-utah',
      state: 'UT',
      county: 'Weber County',
      description:
        'Full-service junk removal for Liberty and Ogden Valley properties, including cabins, rural homes, garages, yards, and seasonal cleanouts.',
      specialties: [
        'Ogden Valley cabin and seasonal cleanouts',
        'Mountain-access property hauling',
        'Garage, shed, and yard debris removal',
        'Furniture, appliance, and large-load pickup',
      ],
      isActive: true,
      seo: {
        title: 'Junk Removal Liberty, UT | Ogden Valley Hauling | Free Space',
        description:
          'Full-service junk removal in Liberty and Ogden Valley. We lift, load, and haul cabin clutter, furniture, appliances, garage items, and property debris.',
      },
      content: {
        hero: {
          title: 'JUNK REMOVAL LIBERTY UT',
          subtitle: 'Full-service hauling for Ogden Valley properties',
          description:
            'Free Space Junk Removal & Cleaning helps Liberty customers clear cabin clutter, garages, yards, and rural-property junk without loading a dumpster.',
          backgroundImage: '/images/north-utah-ogden-mountain.jpeg',
        },
        sections: {
          mainContent: {
            title: 'Liberty junk removal for mountain and seasonal properties',
            content: [
              'Liberty and Ogden Valley cleanouts can involve cabins, seasonal homes, mountain-access properties, garages, sheds, and outdoor clutter. Our full-service crew does the carrying, loading, hauling, and sorting so customers do not have to wrestle items into a dumpster.',
              'We remove old furniture, mattresses, appliances, boxes, yard debris, shed contents, renovation leftovers, and trailer-load property clutter. Access is part of the planning, especially where driveways or mountain routes require care.',
              'Free Space Junk Removal & Cleaning provides clear pricing references, online scheduling, and responsible disposal practices for Liberty and nearby Weber County communities.',
            ],
            highlights: [
              { title: 'Cabin and seasonal cleanouts', description: 'Furniture, mattresses, storage items, and clutter removed before or after a seasonal stay.' },
              { title: 'Mountain-access hauling', description: 'We plan for driveways, outbuildings, and rural access that make self-loading difficult.' },
              { title: 'Shed, garage, and yard cleanup', description: 'Outdoor and storage clutter removed with trailer capacity.' },
              { title: 'Appliance and bulky item pickup', description: 'Heavy items are lifted and loaded by our crew.' },
            ],
          },
          localServices: {
            title: 'FULL-SERVICE JUNK REMOVAL IN LIBERTY',
            subtitle: 'Ogden Valley hauling for homes, cabins, yards, and outbuildings',
            services: [
              { title: 'Large Load Junk Removal', description: 'Trailer capacity for cabin, garage, and property cleanouts.', href: '/services/large-load-junk-removal', backgroundImage: '/images/large-load-junk.jpeg' },
              { title: 'Land Cleanout', description: 'Outdoor debris and rural-property clutter hauled away.', href: '/services/land-cleanout', backgroundImage: '/images/land-cleanout.jpeg' },
              { title: 'Estate & Room Cleanouts', description: 'Careful room-by-room clearing for family and seasonal-property transitions.', href: '/services/estate-room-cleanouts', backgroundImage: '/images/estate-cleanout.jpeg' },
              { title: 'Appliance Removal', description: 'Old cabin and household appliances removed with loading included.', href: '/services/appliance-removal', backgroundImage: '/images/appliance-removal.jpg' },
            ],
          },
          neighborhoods: {
            title: 'LIBERTY AND OGDEN VALLEY AREAS WE SERVE',
            areas: [
              { title: 'Liberty homes and cabins', description: 'Room, appliance, furniture, and storage cleanouts.' },
              { title: 'Mountain and rural properties', description: 'Shed, yard, outbuilding, and access-sensitive hauling.' },
              { title: 'Ogden Valley routes', description: 'Seasonal and property cleanouts throughout nearby Weber County communities.' },
            ],
          },
          whyChooseUs: {
            title: 'Liberty cleanouts with the labor handled',
            content: [
              { title: 'Full-service removal', description: 'The crew lifts, carries, loads, and hauls items from the property.' },
              { title: 'Clear pricing references', description: '$50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer.' },
              { title: 'Online or phone booking', description: 'Schedule with the Google link or call (385) 326-8426.' },
              { title: 'Responsible disposal', description: 'Usable and recyclable items are sorted when practical.' },
            ],
          },
          reviewTodos: [
            'TODO: paste real Google review for Liberty — reviewer name + text',
            'TODO: paste second real Google review for Liberty if available',
          ],
          contextualLinks: [
            { label: 'land cleanout service', href: '/services/land-cleanout', description: 'Helpful for Liberty outdoor, shed, and rural-property debris.' },
            { label: 'North Ogden junk removal', href: '/service-areas/north-ogden-utah', description: 'Nearby Weber County service west of Ogden Valley.' },
          ],
          faq: {
            title: 'LIBERTY JUNK REMOVAL FAQ',
            subtitle: 'Answers for Ogden Valley customers',
            items: [
              { question: 'Can you serve cabins or seasonal homes in Liberty?', answer: 'Yes. We help with cabin furniture, mattresses, storage items, appliance removal, and seasonal-property cleanouts.' },
              { question: 'Do I have to move items down to the driveway?', answer: 'No. Our crew does the lifting, carrying, and loading. We plan access for mountain and rural properties before hauling.' },
              { question: 'How much does Liberty junk removal cost?', answer: 'Reference prices include $50 single item, $95 truck load, $320 half trailer, $490 full trailer, and $849 multi-trailer. Final pricing depends on volume and access.' },
              { question: 'Where does old cabin furniture or appliances go?', answer: 'When practical, usable items are separated for donation and recyclable materials are sorted before appropriate Weber County disposal.' },
            ],
          },
        },
      },
    },
  ],

  seo: {
    title: 'Junk Removal in Northern Utah | Free Space Junk Removal & Cleaning',
    description:
      'Full-service junk removal in Northern Utah. We lift, load, haul, and dispose responsibly for homes, rentals, farms, and businesses from Cache Valley to Weber County.',
    keywords: [
      'junk removal near me',
      'junk removal northern utah',
      'junk hauling near me',
      'same day junk removal',
      'junk removal services near me',
      'furniture removal near me',
      'appliance removal near me',
      'junk removal ogden',
      'junk removal logan',
      'junk removal brigham city',
      'junk removal weber county',
      'junk removal cache county',
      'local junk removal',
      'residential junk removal',
      'commercial junk removal',
      'eco friendly junk removal',
      'transparent junk removal pricing',
      'utah junk hauling',
      'garage cleaning utah',
      'estate cleanout utah',
      'construction debris removal',
      'trash removal near me',
      'debris removal near me',
      'cleanout services near me',
    ],
  },

  testimonials: {
    data: [
      {
        name: 'Jennifer Martinez',
        initial: 'J',
        projectType: 'Garage Cleanout',
        review: `Free Space Junk Removal & Cleaning exceeded all expectations! Their online pricing was exactly what I paid - no surprises or hidden fees. The team arrived on time and transformed our cluttered garage in just a few hours. They even provided photos showing how our items were recycled and donated. Professional, reliable, and environmentally conscious. Highly recommend!`,
        rating: 5,
      },
      {
        name: 'Mike Thompson',
        initial: 'M',
        projectType: 'Estate Cleanout',
        review:
          "Dealing with my father's estate was overwhelming, but Free Space made the junk removal portion stress-free. They were respectful, thorough, and helped coordinate donations of usable items. The transparent pricing and detailed documentation was exactly what we needed. Outstanding service during a difficult time.",
        rating: 5,
      },
      {
        name: 'Sarah Chen',
        initial: 'S',
        projectType: 'Appliance Removal',
        review: `Called Free Space for same-day refrigerator removal and they delivered! Professional team, fair pricing, and they handled the refrigerant disposal properly. The before/after photos and recycling documentation was a nice touch. Will definitely use them again for future junk removal needs.`,
        rating: 5,
      },
    ],
    reviewsLink: 'https://www.google.com/search?q=Free+Space+Junk+Removal+reviews',
  },

  faq: [
    {
      question: 'How do I get pricing for my junk removal project?',
      answer:
        "Simply visit our website and upload photos of your items or space. You'll receive transparent, upfront pricing immediately - no waiting for estimates or on-site quotes. This is one of our key differentiators from other junk removal services.",
    },
    {
      question: 'Do you offer same-day junk removal service?',
      answer:
        'Yes! We offer same-day pickup throughout Northern Utah when you schedule before noon, subject to availability. This applies to all our service areas including Ogden, Logan, Brigham City, and surrounding communities.',
    },
    {
      question: 'What makes your service different from other junk removal companies?',
      answer:
        'We provide real, itemized pricing before arrival (beyond "starting at" quotes), guaranteed speed windows with payouts, business-class SLAs with documentation, and proof-of-impact reporting showing local recycling and donation outcomes.',
    },
    {
      question: 'What areas do you serve in Northern Utah?',
      answer:
        'We serve Ogden County, Weber County, Cache County, and Box Elder County, including cities like Ogden, Logan, Brigham City, Hyrum, North Ogden, and surrounding communities throughout Northern Utah.',
    },
    {
      question: 'How do you handle recycling and disposal?',
      answer:
        'We prioritize eco-friendly disposal with documented reuse and recycling. We partner with local charities and recycling centers, providing you with photos and reports showing exactly how your items were processed and their environmental impact.',
    },
    {
      question: 'Do you provide service for businesses and contractors?',
      answer:
        'Absolutely! We offer business-class services including before/after photos, certificates of insurance, net payment terms, and flexible scheduling designed specifically for property managers and contractors.',
    },
    {
      question: 'What types of items do you remove?',
      answer:
        'We handle furniture, appliances, electronics, construction debris, yard waste, and most household items. We provide specialized services for appliances requiring proper refrigerant handling and offer scrap metal hauling with competitive recycling value.',
    },
    {
      question: "Are there any items you won't remove?",
      answer:
        "We cannot remove hazardous materials, chemicals, paint, asbestos, or certain regulated waste. Contact us with specific questions about unusual items - we'll provide guidance on proper disposal alternatives.",
    },
  ],
}

export default businessConfig
