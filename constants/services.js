/* 
{
  category: "Service macro category",
  name: "Service name",
  image: "/images/services/service.webp",
  slug: "slug-for-the-service",
  shortDescription: "one-phrased description of the service",
  description: [
      `Service description`,
      `Multiline`,
  ],
  CTA: 'call to action text',
  type: 'brief service description',
  active: true|false,
  offer: 'special offers for the service' | null | default: 'Free introductory call, first activity analysis and first activity estimate are billed at a discounted rate',
  rate: 'starting from X €' | 'X-Y €' | 0 | default: 'To be discussed',
},
*/

const servicesData = {
    basePath: '/service',
    services: [
        {
          category: "DevOps",
          name: "Fundamentals Course",
          image: "/images/services/coaching.webp",
          slug: "devops-fundamentals-course",
          shortDescription: "Discover what does DevOps can do for you",
          description: [
              `I offer a 3-day course about the DevOps culture allowing you and your team to learn the fundamentals and how it can help you as it helped a lot of companies in their growth. Your grade of maturity will be assessed before the course and, based on the results, we will plan the right learning path for you to follow.`,
              `DevOps is a lot like martial arts (seems a lot like MMA at the beginning), it cannot be learnt through a single 3-day course but see this as a good start of your training journey. I will give you the tools to learn by yourself and advices on what to focus on afterwards.`,
              ``,
              `This course is meant for both companies and people willing to know more about DevOps and how it can help them to improve their software lifecycle and developer life. The program is structured to be suitable for an audience of 5-10 people and it can be held in English or in Italian, slides and documents require a basic proficency in professional English.`,
              `The course has no specific or mandatory pre-requisites altough it is necessary to have some technical background as software developer, system administrator, product manager or similar. There will be hands-on exercises to apply and see results of what you've learned as well as a second maturity assessment to measure your progress, and a final certificate of completion.`,
              `My training is interactive, you'll be asked questions and be provided with answers to your doubts to better understand the concepts contained in the course such as:`,
              `Code Review (CR), Feedback Loops, DevOps Toolchain, Continuous Integration / Countinous Delivery (CI/CD), Automated testing (AT), Cloud, Infrastructure as Code (IAC), Monitoring, Security, DevSecOps etc.`,
              `If you are a company you can ask for a specific technology or tool to focus on (e.g. Kubernetes, Azure, GitLab, etc.) it will be covered in a mini-course during the third day of the course, taking the place of some of the mini-workshop exercises (additional costs may apply).`,
          ],
          callout: 'Are you ready to take your first step and begin your DevOps journey?',
          CTA: 'Discover how!',
          type: '3 days course and mini-workshop (remote only), classes can consist of either employees of a company or indipendent individuals (in which case the course will start only when the quota is reached and the cost is shared among the participants).',
          active: true,
          offer: '30% discount on the specific technology mini-course, 100% FREE pitch call to discuss your needs and the course details, pre-course DevOps maturity assessment included.',
          rate: 'Starting from 2999', // - payment for companies in 2 installments (50% before the beginning of the course, 50% at the end) - payment for individuals at the beginning of the course
        },
        {
          category: "DevOps",
          name: "Adoption Path",
          image: "/images/services/path.webp",
          slug: "devops-adoption-path",
          shortDescription: "Start the complete automation journey",
          description: [
              `The focus of this service is guiding your company in a full DevOps adoption to make you able to deliver your software product faster and with a much higher quality and in less time. Everything about this service is tailored to your grade of DevOps maturity that is evalutated after an initial assessment.`,
              `Keep in mind that adopting DevOps in a company is like training a full team of martial artists, you cannot expect your people to implement it in one week but this is the opportunity to jump-start your adoption process with me as your guide through this process.`,
              `Starting with a 1 week interactive course and workshop about the DevOps culture we will then implementing DevOps methods, choose a DevOps toolchain and create good practices & standards across your team. You will learn in depth concepts such as: `,
              `Code Review (CR), Feedback Loops, DevOps Toolchain, Continuous Integration / Countinous Delivery (CI/CD), Automated testing (AT), Cloud, Infrastructure as Code (IAC), Monitoring, Logging, Observability, Telemetry, Security, DevSecOps, GitOps, DevOps to Scale etc. and much more!`,
              `I will be there to track your progress and ensure you are on the right path to become a top-notch DevOps adopter. After the course, I will be available for a 3-6 months period to help you and your team to start implement everything you've learned, choose the right technology to adopt, manage the most complex issues and monitor your progress.`,
              ``,
              `This service is meant for companies willing to know more about DevOps and how it can help them to improve their software lifecycle and developer happyness. Service's structure is made to work even for multiple teams, it can be provided in English or in Italian, course's slides and further interactions require a basic proficency in professional English.`, 
              `The course has no specific or mandatory pre-requisites altough it is necessary to have some technical background as software developer, system administrator, product manager or similar. There will be hands-on exercises to apply and see results of what you've learned as well as a second maturity assessment to measure your progress, and a final certificate of completion.`,
              `You can ask for a specific technology to structure an in depth-analysis on (e.g. Kubernetes, Azure, GitLab, etc.) it will be covered in a workshop during the last day instead of some workshop exercises (additional costs may apply).`,              
            ],
          callout: 'Are you ready to become a new DevOps company?',
          CTA: 'Sign up!',
          type: '1 week course and workshop (remote or on-site) and 3+ months of support (remote only)',
          active: true,
          offer: '50% discount on the specific technology workshop, 100% FREE pitch call to discuss your needs and the course details, FREE Full DevOps maturity assessment and evalutation.',
          rate: 'Course starting from 4999, additional support is to be discussed.',
        },
        {
          category: "Cloud",
          name: "Migration & Management",
          image: "/images/services/cloud.webp",
          slug: "cloud-migration-and-management",
          shortDescription: "Scale up your business to the cloud ",
          description: [
              `This service is made for both companies already in the cloud and are willing to know how to best manage and scale up their infrastructure and companies willing to migrate their products to the cloud. If you don't have a cloud infrastructure we will create that togheter starting from a zero-penny architecture. I'll guide you through choices between SaaS, PaaS and IaaS components.`,
              `Every component will be designed and optimized to be efficient, secure and reliable abd you will be guided to the right cloud provider (AWS, Azure or GCP) and its services. I'll make sure you pay the cloud provider just the right amount of money and upgrade your service cost only when your product really needs to scale. `,
              `Everything will become automated, flexible, easy to migrate, painless to manage. Scaling up and down, adding a new component, setting up an environment and everything you need to do to make your product grow strong and fast will require no time. Infrastructure Management cost will be reduced so you can invest more on your product and marketing to increase your customer base.`,
              `You'll be able to construct or improve your own CI/CD pipeline to deploy your product to the cloud and I'll help you to choose the right tools to do that. I'll also help you to choose the right monitoring and logging tools to keep track of your software and build an Application Performance Management (APM) structure to measure your product effectiveness.`,
              `We will set up a good security policy to protect both your product and your users from cyber attacks and data breaches. Security is a key component of any cloud infrastructure, too often neglected.`,
          ],
          callout: 'Are you ready to scale up your business?',
          CTA: 'Schedule a meeting!',
          type: '6+ months of support (remote only).',
          active: true,
          offer: null,
          rate: 0,
        },
        {
          category: "SRE & DevSecOps",
          name: "Sec & Reliability Review",
          image: "/images/services/security.webp",
          slug: "sre-devsecops",
          shortDescription: "Perform a reliability and security review of your product",
          description: [
              `Does your app die without apparent reason? I can tell you how to fix it. Are your processes resource-hungry without control? I can save some! Have you reacently had a data breach and you can't find a way to protect your customers data? Let's build that security door and make it bulletproof!`,
              `We will build a solid, secure and reliable foundation for your products. Incidents will happen, but you will be ready to face them and to recover fast. Having a production-ready alerting and monitoring system will allow you to be notified as soon as something goes wrong while your team will be enabled to react quickly and handle the issue before it becomes a bigger problem.`,
              `Individuation, Analysis, Migitation, Resolution, Communication and Improvement will be their mantra. Your product will be secure by design and you will be able to detect vulnerabilities and bugs before it's too late. I'll help you to choose the right tools to do that and we'll make sure you are compliant with the most important security standards such as GDPR, PCI-DSS, ISO 27001, NIST, etc.`,
              `Security will be introduced in every step of your software lifecycle and you will be able to build a DevSecOps culture in your company, supported by Site Reliability Engineering (SRE) principles and good practices. This combination will allow you to build a solid and reliable product that will be perceived as secure by your customers.`,
              `The synchronicity between your product and security/reliability will be the key to your success. Security won't be an optional feature no more, it will become a mindset.`,
              //`Don't procrastinate! Let's talk about your reliability and security issues.`,              
          ],
          callout: 'Is IT security a priority for you?',
          CTA: 'Contact me!',
          type: 'on call support or 3+ months of support (remote only).',
          active: true,
          offer: null,
          rate: 0,
        },
        {
          category: "Management",
          name: "CTO as a Service",
          image: "/images/services/me.webp",
          slug: "cto-as-a-service",
          shortDescription: "Benefit from my fracional CTO services",
          description: [
              `You are a startup and you need a CTO but you can't afford one? I'm here for you! Did your organization’s CTO role recently become vacant? I can fill in and help you find a new one meanwhile. Is your CTO overloaded with tasks and you need someone to help him? I will be his right hand (or left). Are you missing deadlines and you don't know why? Let's figure out what is going on and turn around your situation.`,
              `You will focus on your business and I will take care of the tech side from product roadmaps to strategic choices always overseeing your team's work. I can help you to build your product from scratch, from the idea to the MVP and then to the final product.`,
              `I will guide you through the right tech choices and I will help you to hire a team of software engineers. Your team will have better guidance, clearer parameters, and a manager who can communicate with your stakeholders.`,
              `As a result, your products will be developed more quickly and with a great attention to marketable qualities. I will help you to build a solid and reliable product and I will make sure your team is working in the right direction.`,
          ],
          callout: 'How does a CTO (for a fraction of the cost of a full-time one) sound? Good?',
          CTA: 'Let\'s talk!',
          type: '6+ months of support (remote only).',
          active: true,
          offer: "20% discount off the 1st month of support, FREE consulting call included.",
          rate: 0,
        },
        {
          category: "Software",
          name: "Engineering and Architecture",
          image: "/images/services/programming.webp",
          slug: "software-engineering",
          shortDescription: "Take care of your software lifecycle",
          description: [
              `Wanna get rid of your technical debt so your developers will have 30% more time for developing amazing stuff? Need to optimize your software lifecycle? I can guide your team in software solutions design and implementation.`,
              `I'll guide you through a complete restyling of your software development lifecycle helping your developers to maintain the focus on what really matters. They will be enabled to build cutting edge digital products while applying good practices of: security, reliability, scalability, performance, maintainability, and flexibility.`,
              `No more messy spaghetti code, strange and obscure bug reporting systems, huge codebases and angry developers. There is no need of micro-management, your team can already manage itself if you trust them, they may just needs a little help to get started.`,
              `My expertise includes working in various industries (secure services, digital identity, automotive, news & media), with a wide range of techologies, in different roles and with a lot of different people.`,
              `I can make sure your developers write code that will last long or at least will be easy to maintain and evolve.`,
          ],
          callout: 'Ready to turn your software into a real product?',
          type: '3+ months of support (remote only).',
          CTA: 'Get in touch!',
          active: true,
          offer: null,
          rate: 0,
        },
        {
          category: "Other",
          name: "Services",
          image: "/images/services/service-mock.webp",
          slug: "other-services",
          shortDescription: "For anything else you need",
          description: [
              `I'm available for services such as:`,
              `- Technical writing`,
              `- Tech conference talks and keynotes`,
              `- Podcasting / Streaming`,
              `- Structure a new course on tech-related topics or finance-related ones (manily crypto and blockchain)`,
              ``,
              `Every service in the list is offered in both English and Italian.`,
          ],
          callout: 'I\'m open to new ideas and challenges you may have. We can talk always about it!',
          type: null,
          CTA: 'Let\'s work it out.',
          active: true,
          offer: null,
          rate: 0,
        },
    ],
};

export default servicesData;