/* 
{
  category: "Service macro category",
  name: "Service name",
  coverImage: "/images/services/service.webp",
  images: [
    {
      url: "/images/services/data1.webp",
      altText: "Some alt text",
      imageX: 500,
      imageY: 400,
      description: "Some image description",
    },
    ...
  ],
  slug: "slug-for-the-service",
  shortDescription: "one-phrased description of the service",
  description: [
      `Service description`,
      `Multiline`,
      ...
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
      coverImage: "/images/service/course.webp",
      images: [
        {
          url: "/images/service/course.webp",
          altText: "DevOps Fundamental Course service image",
          imageX: 500,
          imageY: 400,
          description: "DevOps Fundamental Course",
        },
      ],
      slug: "devops-fundamentals-course",
      shortDescription: "Discover what does DevOps can do for you",
      description: [
        `I offer a 3-day course about the DevOps culture allowing you and your team to learn the fundamentals and how it can help you as it helped a lot of companies in their growth.`,
        `Your grade of maturity will be assessed before the course and, based on the results, we will plan the right learning path for you to follow.`,
        `The course is designed to be interactive and hands-on, so you will be able to apply the knowledge you will gain during the course in a workshop, during the last day.`,
        `I cannot stress this enough: DevOps is much like martial arts, it cannot be learned through a single 3-day course, but this aims to be a good start to your training, an opportunity to jump-start your DevOps journey.`,
        ``,
        `This course is aimed at both companies and people who want to learn more about DevOps and how it can help them improve the software lifecycle and the lives of developers.`,
        `The program is structured to be suitable for an audience of 5-10 attendants and can be held in English or Italian; the slides and documents require a basic knowledge of professional English`,
        `The course has no specific or mandatory pre-requisites altough it is necessary to have some technical background as software developer, system administrator, product manager or similar.`,
        `I will pass you the knowledge you need to start implementing various DevOps initiatives, without forcing you to use specific tools. An overview of what tools and methods are currently used in the industry will be given.`,
        `After the course there will be a final certificate of completion.`,
        `These are some of the concepts contained in the course:`,
        `Code Review (CR), Feedback Loops, DevOps Toolchain, Continuous Integration / Countinous Delivery (CI/CD), Automated testing (AT), Cloud, Infrastructure as Code (IAC), Monitoring, Security, DevSecOps, etc.`,
        `If you are a company you can ask for a specific technology or toolchain to focus on (e.g. Kubernetes + Docker, Jenkins, New Relic, etc.) it will be covered in a mini-course during the third day, taking the place of some of the exercises included in the workshop (additional costs may apply).`,
      ],
      callout: 'Are you ready to take your first step and begin your DevOps journey?',
      CTA: 'Discover how!',
      type: '3 days course and mini-workshop (remote only), classes can consist of either employees of a company or indipendent individuals (in which case the course will start only when the quota is reached and the cost is shared among the participants).',
      active: false,
      offer: '30% discount on the specific technology mini-course, 100% FREE pitch call to discuss your needs and the course details, pre-course DevOps maturity assessment included.',
      rate: 'Starting from 2999 (in case of individual participants, the cost is to be divided among the participants)',
      // - payment for companies in 2 installments (50% before the beginning of the course, 50% at the end) - payment for individuals before the beginning of the course
    },
    {
      category: "DevOps",
      name: "Adoption Path",
      coverImage: "/images/service/devops-path.webp",
      images: [
        {
          url: "/images/service/devops-path-modules.webp",
          altText: "DevOps Adoption Path learning modules list",
          imageX: 500,
          imageY: 400,
          description: "Course learning core modules",
        },
        {
          url: "/images/service/devops-path-prices.webp",
          altText: "DevOps Adoption Path pricing",
          imageX: 500,
          imageY: 400,
          description: "DevOps Adoption Path packages",
        },
        {
          url: "/images/service/devops-path-support.webp",
          altText: "DevOps Adoption Path support options",
          imageX: 500,
          imageY: 400,
          description: "DevOps Adoption Path support options",
        },
      ],
      slug: "devops-adoption-path",
      shortDescription: "Start the complete DevOps journey",
      description: [
        `The focus of this service is starting a full DevOps adoption to make you able to deliver your software product faster and with a much higher quality and in less time.`,
        `The service will be delivered in three different phases: Assessment, Training, Support`,
        `The assessment phase is aimed at understanding your current situation, in terms of both DevOps maturity and technical maturity`,
        `I will need you to take a comprehensive DevOps Maturity Assessment: a series of questionnaires that will help us understand your current situation.`,
        `The training phase starts with a modular and tailored training course and finishes with a roadmap built to guide you torwards the next steps.`,
        `The support phase is aimed at helping you implement that roadmap and reach your goals.`,
        `DevOps Adoption Path is offered in different packages with different levels of training and support.`,
        `Basic - For small companies or individuals who want to learn about DevOps. Includes: 3-days core course and essential support package.`,
        `Intermediate - For small to medium companies and startups that want to go in depth with DevOps. Includes: 5-days core course and premium support package.`,
        `Advanced - For companies that want to start or consolidate their adoption process and reach a high level of maturity. Includes: 5-days core course, 2-days extra course and enterprise support package.`,
      ],
      callout: 'Are you ready to become the next DevOps star to be?',
      CTA: 'Sign up!',
      type: 'Training (available on-site) and support (remote only)',
      active: true,
      offer: '25% discount off the Enterprise package for the first 3 companies, 100% FREE pitch call to discuss the details.',
      rate: 'See carousel. In case of Basic package, for individual participants, the cost is to be divided among the participants after the quota is reached.',
    },
    {
      category: "Cloud",
      name: "Migration & Management",
      coverImage: "/images/service/cloud-management.webp",
      images: [
        {
          url: "/images/service/cloud-management.webp",
          altText: "Cloud Management service image",
          imageX: 500,
          imageY: 400,
          description: "Cloud Management",
        },
      ],
      slug: "cloud-migration-and-management",
      shortDescription: "Scale up your business to the cloud ",
      description: [
        `Cloud is not easy, it requires a lot of knowledge and experience to be able to manage it properly unless you want your company earnings to be seized by your Cloud Provider.`,
        `You are probably thinking: "I don't need a Cloud Provider, I can do it myself, I have a server in my basement and I can just move my services there".`,
        `Well, you are right, you can do it yourself, but you will have to manage it yourself, and that's the problem.`,
        `Managing a server is also not easy, it requires a team of people who know what they are doing and who are able to manage it 24/7.`,
        `If you are a small company, you probably don't have the resources to manage a server, and if you are a big company, you probably have a team of people who are able to manage it, but you are probably paying them a lot of money.`,
        `The Cloud can be a great solution for both small and big companies, it allows you to scale up and down your services in a matter of minutes, it allows you to pay only for what you use and it allows you to focus on innovation.`,
        `First of all, we will understand what kind of Cloud you need, there are 3 main types of Cloud:`,
        `- Public Cloud`,
        `- Private Cloud`,
        `- Hybrid Cloud`,
        `Then we will design a migration and management plan that fits your needs. This is the most important part of the process, because it will allow you to compare different solution and understand which one is the best for your company.`,
        `The migration plan will be divided in 3 phases:`,
        `1. Assessment`,
        `2. Migration`,
        `3. Management`,
        `The assessment phase is aimed at understanding your current situation, remove any obstacles that could prevent the migration (trust us, there are plenty of them but we will find a way through), design the infrastructure, define strategies and policies and finally a migration roadmap.`,
        `The migration phase is the core of the operation, we will be moving your product to the Cloud, starting with a pilot team and product. I will be monitoring the progress and coordinating the activities in this phase.`,
        `The management phase is aimed at simplifying the management of your Cloud infrastructure by implementing utilities and automation.`,
        `Why didn't I mention any specific cloud providers?`,
        `Because I don't want to be biased, I want to be able to choose the best solution for your company regardless of the provider you choose.`,
        `I will be able to help you with the following Cloud providers (in this order of expertise):`,
        `- AWS`,
        `- Azure`,
        `- Google Cloud`,
      ],
      callout: 'Are you ready to scale up your business?',
      CTA: 'Schedule a meeting!',
      type: '6+ months of support (remote only).',
      active: false,
      offer: null,
      rate: 0,
    },
    {
      category: "SRE & DevSecOps",
      name: "Sec & Reliability Review",
      coverImage: "/images/service/devsecops-sre-2.webp",
      images: [
        {
          url: "/images/service/devsecops-sre-frequency.webp",
          altText: "Frequency of cyber-attacks",
          imageX: 500,
          imageY: 400,
          description: "Frequency of attacks is increasing",
        },
        {
          url: "/images/service/devsecops-sre-cost-percentage.webp",
          altText: "Revenue lost due to security breaches in percentage",
          imageX: 500,
          imageY: 400,
          description: "The cost of attacks isn't limited to the direct damage",
        },
        {
          url: "/images/service/devsecops-sre-distribution.webp",
          altText: "Distribution of attacks in different industries",
          imageX: 500,
          imageY: 400,
          description: "Your reputation is at stake",
        },
        {
          url: "/images/service/devsecops-sre-time.webp",
          altText: "SRE & DevSecOps service image",
          imageX: 500,
          imageY: 400,
          description: "Your clients are at risk",
        },
        {
          url: "/images/service/devsecops-sre-money.webp",
          altText: "SRE & DevSecOps money lost due to security breaches",
          imageX: 500,
          imageY: 400,
          description: "You can't afford to ignore security",
        },
        {
          url: "/images/service/devsecops-sre-chain.webp",
          altText: "SRE & DevSecOps solution chain",
          imageX: 500,
          imageY: 400,
          description: "Your sec is only as strong as the weakest link",
        },
      ],
      slug: "sre-devsecops",
      shortDescription: "Discover how to secure your product and your success",
      description: [
        `DevSecOps and Site Reliability processes will improve the way your team is developing and deploying software, reducing the time to market and at the same time increasing the security of your product`,
        `The focus of this service is to perform a reliability and security review of your product.`,
        `The review will be divided in 2 phases:`,
        `First step being an assessment phase, where I will perform a complete security review to identify the current security issues and vulnerabilities.`,
        `The second step will be the implementation phase, security and reliability fixes will be run.`,
        `Some examples of the most common security issues that I was able to identify:`,
        `- Exposed passwords, secrets, API keys and private keys`,
        `- Insecure encryption and communication protocols`,
        `- Weak authentication and authorization standards`,
        `- Loose network security policies`,
        `- Outdated software and libraries vulnerables to known attacks and exploits (CVE/CWE)`,
        `- Flaws in account management for users and administrators`,
        `- Potential data leaks/breaches`,
        `- Social Engineering and phising attacks`,
        `And these are the most common reliability issues I've encountered:`,
        `- High resource usage and memory leaks`,
        `- Bad infrastructure configuration (VMs, containers, clusters, etc.)`,
        `- Poorly designed APIs and software in general`,
        `- Inefficient database queries`,
        `- Non-redundant data storage`,
        `- Unnecessary long CI/CD pipelines`,
        `- Inefficient caching strategies`,
        `- Insufficient logging, monitoring and alerting`,
        `Your Incident Management processes can be enhanced by improving the way your team is handling incidents and, therefore, reducing the time to recovery.`,
        `Individuation, Analysis, Migitation, Resolution, Communication and Improvement will be your new mantra.`,
        `Provided with production-ready alerting and monitoring system you will be notified as soon as something goes wrong and take action immediately.`,
        `You will be able to learn from mistakes by documenting them and creating playbooks or tools to quickly solve them.`,
        `Your product will become secure by design following the most important privacy and security standards such as GDPR, PCI-DSS, ISO 27001, NIST, etc.`,
        `Security won't be an optional feature no more, it will become a mindset. Do not limit your company at having a security door, make it a fortress.`,
      ],
      callout: 'Is cybersecurity a priority for you?',
      CTA: 'Contact us!',
      type: 'on call support or 3+ months of support (remote only).',
      active: true,
      offer: null,
      rate: 0,
    },
    {
      category: "Management",
      name: "CTO as a Service",
      coverImage: "/images/service/cto-as-a-service.webp",
      images: [
        {
          url: "/images/service/cto-as-a-service.webp",
          altText: "My photo looking at the camera while smiling",
          imageX: 500,
          imageY: 400,
          description: "I run the tech, you run the business",
        },
      ],
      slug: "cto-as-a-service",
      shortDescription: "Benefit from my fracional CTO services",
      description: [
        `Are you a startup in need of a CTO but you can't afford a full-time one? I got you covered.`,
        `Did your current CTO just quit and you need someone to take over for a while? I can help you.`,
        `Is your CTO overloaded with tasks and you need someone to help him? I will be his right hand (or left)`,
        `Are you missing deadlines and you don't know why? Let's figure out what is going on and turn around your situation.`,
        `I have a lot of hands-on experience in the following areas:`,
        `- Cloud`,
        `- DevOps`,
        `- Site Reliability Engineering`,
        `- Agile Methodologies`,
        `I'm willing to take it to the next level and become your fractional CTO. I will take care of the following tasks:`,
        `- Product Roadmap`,
        `- Tech stack selection`,
        `- Technical Interviews`,
        `- Team Management`,
        `- Documentation`,
        `- Budgeting`,
        `- Anything needed to keep your company running smoothly`,
        `You will focus on your business and I will take care of the tech side from product roadmaps to strategic choices while always overseeing your team's work.`,
        `If you are a startup I can also help you to build your product from scratch, from the idea to the MVP and then to the final product ready to be launched.`,
        `I can be conducting technical interviews, helping you to find the right people for the job.`,
        `Your team will have guidance, clear goals, and a manager they can trust. A manager who can also communicate effectively with your stakeholders (internal or external)`,
      ],
      callout: 'How does a CTO (for a fraction of the cost of a full-time one) sound? Good?',
      CTA: 'Let\'s connect!',
      type: '6+ months of support (remote only).',
      active: true,
      offer: "20% discount off the 1st month of support, FREE consulting call included.",
      rate: 0,
    },
    {
      category: "Software",
      name: "Engineering as a Service",
      coverImage: "/images/service/software.webp",
      images: [
        {
          url: "/images/service/software.webp",
          altText: "People working at a table",
          imageX: 500,
          imageY: 400,
          description: "Software Engineering but tailored as you need it",
        },
      ],
      slug: "dev-as-a-service",
      shortDescription: "Engineering made easy",
      description: [
        `No more messy spaghetti code, strange and obscure bug reporting systems, huge codebases and angry developers.`,
        `Did you know that reducing your technical debt can increase your productivity by up to 50%?`,
        `What about software architecture? Do you have a clear idea of how your software is structured?`,
        `If the answer is no, then you are probably wasting a lot of time and money for maintenance, bug fixing and cloud costs.`,
        `I can help you to improve your software architecture, reduce your technical debt and improve your software development processes.`,
        `Your developers? They will be happier, more productive and more motivated.`,
        `Your customers? Happier too, because they will be able to use your product without any issues.`,
        `I'll guide you and your team and help them to build cutting edge digital products while applying good practices and upskilling themselves.`,
        `How will I do that?`,
        `First of all I will perform a complete audit of your current software architecture and I will identify the issues and the bottlenecks.`,
        `Then I will help you to define a new software architecture approach and a roadmap to get there.`,
        `These are some of the software product types I've worked on in the past:`,
        `- Web Applications (SPA, PWA, SSR)`,
        `- Digital Identity Platforms`,
        `- Digital Signature Product`,
        `- Automotive E-commerce`,
        `- Fashion E-commerce`,
        `- News and Media Platform`,
        `- Mobile Applications (iOS, Android)`,
        `- Microservices & APIs`,
        `Your team will set coding standards and create code review routines.`,
        `Testing and refactoring will be priorities and we will also improve the documentation so your new hires will be able to onboard faster.`,
        `Setting up a local development environment will be a breeze, we will use tecnologies such as Docker, devcontainers and Docker Compose to make it easy for everyone.`,
        `Code quality will be enforced in the CI/CD pipelines.`,
        `Code will be well versioned and backupped, we will use Git and a good branching strategy to make sure that it remains manageable.`,
        `All of this at a fraction of the cost of a full-time engineer.`,
      ],
      callout: 'Ready to turn your software into a competitive product?',
      type: '3+ months of support (remote only).',
      CTA: 'Get in touch!',
      active: true,
      offer: null,
      rate: 0,
    },
    {
      category: "Other",
      name: "Services",
      coverImage: "/images/service/other.webp",
      images: [
        {
          url: "/images/service/other.webp",
          altText: "Other services service image",
          imageX: 500,
          imageY: 400,
          description: "Other Services",
        },
      ],
      slug: "other-services",
      shortDescription: "For anything else you need",
      description: [
        `I'm available for additional services such as:`,
        `- Technical writing`,
        `- Tech conference talks and keynotes`,
        `- Podcasting / Streaming`,
        `- Structure a new idea on tech-related topics or finance-related ones (mainly crypto and digital assets)`,
        ``,
        `Every service in this list is offered in both English and Italian.`,
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