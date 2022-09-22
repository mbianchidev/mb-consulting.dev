const servicesData = {
  /* 
  name => service name
  image => image path
  slug => slug for the service
  shortDescription => one-phrased description of the service
  description => complete description of the service
  active => true/false whether to show the service or not
  startingFromRate => starting from rate for the service (optional)
  */
    services: [
        {
          name: "DevOps Fundamentals Course",
          image: "/images/services/coaching.webp",
          slug: "devops-fundamentals-course",
          shortDescription: "Discover what does DevOps can do for you",
          description: [
              `This course is made for companies willing to know more about DevOps and how it can help them to improve their software lifecycle and developer happyness.`,
              `I offer a 3-day course and workshop about the DevOps culture allowing you and your team to learn the fundamentals and how it can help you as it helped a lot of companies in their growth.`,
              `Your grade of maturity will be assessed before the course and we will plan the right learning path for you to follow.`,
              `There will also be hands-on exercises to apply and see results of what you've learned.`,
              ``,
              `Are you ready to begin your DevOps journey?`,
          ],
          CTA: 'Discover how',
          active: true,
        },
        {
          name: "DevOps Adoption Path",
          image: "/images/services/path.webp",
          slug: "devops-adoption-path",
          shortDescription: "Start the complete automation journey",
          description: [
              `My focus will be enabling your team to automate repetitive and error-prone tasks so your they will have more time to focus on what really matters.`,
              `You will be able to deliver software faster and with higher quality.`,
              `Starting with a 1 week course and workshop about the DevOps culture and then implementing DevOps methods, adopting tools and build good practices & standards across your team.`,
              `You will explore Continuous Integration (CI), Continuous Delivery (CD), Continuous Deployment (CD), Automated Testing (AT), Code Review (CR) and much more!`,
              `Everything will be tailored to your grade of DevOps maturity, after an initial assessment.`,
              `Milestones will be set to track your progress and ensure you are on the right path.`,  
              `Automation will become a keyword for your company along with: security, IaC, data, metrics, logging, documentation and all you need to be a top-notch DevOps adopter.`,
              `After the course, I will be available for a 3-6 months period to help you and your team to start implement everything you've learned.`,
              ``,
              `What are you waiting for? `,
              `The future is now!`,
          ],
          CTA: 'Become a new DevOps adopter today!',
          active: true,
        },
        {
          name: "Cloud Migration & Management",
          image: "/images/services/cloud.webp",
          slug: "cloud-migration-and-management",
          shortDescription: "Scale up your business to the cloud ",
          description: [
              `This service is made for both companies already in the cloud and are willing to know how to best manage and scale up their infrastructure and companies willing to migrate their products to the cloud.`,
              `If you don't have a cloud infrastructure we will create that togheter starting from a zero-penny architecture.`,
              `I'll guide you through choices between SaaS, PaaS and IaaS components.`,
              `Every component will be designed and optimized to be efficient, secure and reliable abd you will be guided to the right cloud provider (AWS, Azure or GCP)`,
              `I'll make sure you pay the cloud provider just the right amount of money and upgrade your service cost only when your product really needs to scale.`,
              `The infrastructure will be easy to manage: scale up and down, adding a new component, setting up an environment and everything you need to do to make your product grow strong.`,
              ``,
              `You don't believe in what I've just said? I will change your mind.`,
          ],
          CTA: 'Schedule a meeting now!',
          active: true,
        },
        {
          name: "SRE & DevSecOps",
          image: "/images/services/security.webp",
          slug: "sre-devsecops",
          shortDescription: "Perform a reliability and security check-up",
          description: [
              `Does your app die without apparent reason? I will fix that for you.`,
              `Are your processes resource-hungry without control? I will save you some!`,
              `Have you reacently had a data breach and you can't find a way to protect your customers data? Let's build that security door and make it bulletproof!`,
              `We will build a solid, secure and reliable foundation for your products.`,
              `Incidents will happen, but you will be ready to face them and to recover fast.`,
              `Having a production-ready alerting and monitoring system will allow you to be notified as soon as something goes wrong while your team will be enabled to react quickly and handle the issue before it becomes a bigger problem.`,
              `Individuation, Analysis, Migitation, Resolution, Communication and Improvement will be their mantra.`,
              `Your product will be secure by design and you will be able to detect vulnerabilities and fix them before it's too late. `,
              ``,
              `Don't procrastinate! Let's talk about your site reliability and security issues.`,              
          ],
          CTA: 'Contact me ASAP.',
          active: true,
        },
        {
          name: "CTO as a Service",
          image: "/images/services/me.webp",
          slug: "cto-as-a-service",
          shortDescription: "Benefit from my fracional CTO services",
          description: [
              `You are a startup and you need a CTO but you can't afford one? I'm here for you!`,
              `Did your organization’s CTO role recently become vacant? I can fill in and help you find a new one meanwhile.`,
              `Is your CTO overloaded with tasks and you need someone to help him? I will be his right hand (or left).`,
              `Are you missing deadlines and you don't know why? Let's figure out what is going on and turn around your situation.`,
              `You will focus on your business and I will take care of the tech side from product roadmaps to strategic choices always overseeing your team's work.`,
              `I can help you to build your product from scratch, from the idea to the MVP and then to the final product.`,
              `I will guide you through the right tech choices and I will help you to hire a team of software engineers.`,
              `Your team will have better guidance, clearer parameters, and a manager who can communicate with your stakeholders.`,
              `As a result, your products will be developed more quickly and with a great attention to marketable qualities. `,
              ``,
              `How does a real CTO (for a fraction of the cost of a full-time CTO) sound like? Good? `,
          ],
          CTA: 'Let\'s talk about it.',
          active: true,
        },
        {
          name: "Software Engineering",
          image: "/images/services/programming.webp",
          slug: "software-engineering",
          shortDescription: "Take care of your software lifecycle",
          description: [
              `Wanna get rid of your technical debt so your developers will have 30% more time for developing amazing stuff?`,
              `Need to optimize your software lifecycle?`,
              `I can guide your team in software solutions design and implementation.`,
              `Your ideas will finally come to life and I'll make your products grow.`,
              `I will always be keeping a high attention to balance new and ready-to-production technologies.`,
              `I'll guide you through everty tech choice helping you to maintain the focus on what really matters.`,
              `You will be enabled to build cutting edge digital products applying good practices of: security, reliability, scalability, performance, maintainability, and flexibility.`,
              ``,
              `Feel intrigued? Let's talk about your software.`,
          ],
          CTA: 'What are you waiting for?',
          active: true,
        },
        {
          name: "Other Services",
          image: "/images/services/service-mock.webp",
          slug: "other-services",
          shortDescription: "For anything else you need",
          description: [
              `I'm available for other services such as:`,
              `- Technical writing`,
              `- Conference talks`,
              `- Podcasting / Streaming`,
              `I'm open to new ideas and challenges you may have. We can talk always about it!`,
          ],
          CTA: 'Let\'s see how we can work together',
          active: true,
        },
    ],
};

export default servicesData;

/*

7. Other services?

  I'm available for other services such as:

  - Technical writing
  - Conference talks (remote)
  - Podcasting / Streaming (remote)

  just <link> contact me <link> and let's see how we can work together.

*/