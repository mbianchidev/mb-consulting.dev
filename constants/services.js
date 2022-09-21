const servicesData = {
  /* 
  name => service name
  image => image path
  slug => slug for the service
  shortDescription => one-phrased description of the service
  description => complete description of the service
  show => true/false whether to show the service or not
  startingFromRate => starting from rate for the service (optional)
  */
    services: [
        {
          name: "DevOps Fundamentals Course",
          image: "/images/services/coaching.webp",
          slug: "devops-fundamentals-course",
          shortDescription: "Discover what does DevOps can do for you",
          description: [
              `This is a mock text 1`,
              `x`,
              `x`,
              `x`,
              `x`,
          ],
          show: true,
        },
        {
          name: "DevOps Adoption Path",
          image: "/images/services/path.webp",
          slug: "devops-adoption-path",
          shortDescription: "Start the complete automation journey",
          description: [
              `This is a mock text 2`,
              ``,
              ``,
              ``,
              ``,
          ],
          show: true,
        },
        {
          name: "Cloud Migration & Management",
          image: "/images/services/cloud.webp",
          slug: "cloud-migration-and-management",
          shortDescription: "Scale up your business to the cloud ",
          description: [
              `This is a mock text 3`,
              ``,
              ``,
              ``,
              ``,
          ],
          show: true,
        },
        {
          name: "SRE & DevSecOps",
          image: "/images/services/security.webp",
          slug: "sre-devsecops",
          shortDescription: "Perform a reliability and security check-up",
          description: [
              `This is a mock text 4`,
              ``,
              ``,
              ``,
              ``,
          ],
          show: true,
        },
        {
          name: "CTO as a Service",
          image: "/images/services/me.webp",
          slug: "cto-as-a-service",
          shortDescription: "Benefit from my fracional CTO services",
          description: [
              `This is a mock text 5`,
              ``,
              ``,
              ``,
              ``,
          ],
          show: true,
        },
        {
          name: "Software Engineering",
          image: "/images/services/programming.webp",
          slug: "software-engineering",
          shortDescription: "Take care of your software lifecycle",
          description: [
              `This is a mock text 6`,
              ``,
              ``,
              ``,
              ``,
          ],
          show: true,
        },
        {
          name: "Other Services",
          image: "/images/services/service-mock.webp",
          slug: "other-services",
          shortDescription: "I'm available for other services, see the details",
          description: [
              `This is a mock text 7`,
              ``,
              ``,
              ``,
              ``,
          ],
          show: true,
        },
    ],
};

export default servicesData;

/*

1. What does DevOps can do for me? (DevOps Fundamentals Course)

  This course is made for companies willing to know more about DevOps and how it can help them to improve their software lifecycle and developer happyness.
  I offer a 3-day course and workshop about the DevOps culture allowing you and your team to learn the fundamentals and how it can help you as it helped a lot of companies in their growth.
  Your grade of maturity will be assessed before the course and we will plan the right learning path for you to follow.
  There will also be hands-on exercises to apply and see results of what you've learned.

  Are you ready to begin your DevOps journey? <link> Discover how <link>.

2. Start the complete automation journey (DevOps Adoption Path)

  My focus will be enabling your team to automate repetitive and error-prone tasks so your they will have more time to focus on what really matters.
  You will be able to deliver software faster and with higher quality.
  Starting with a 1 week course and workshop about the DevOps culture and then implementing DevOps methods, adopting tools and build good practices & standards across your team.
  You will explore Continuous Integration (CI), Continuous Delivery (CD), Continuous Deployment (CD), Automated Testing (AT), Code Review (CR) and much more! 
  Everything will be tailored to your grade of DevOps maturity, after an initial assessment.
  Automation will become a keyword for your company along with: security, IaC, data, metrics, logging, documentation and all you need to be a top-notch DevOps adopter.
  After the course, I will be available for a 3-6 months period to help you and your team to start implement everything you've learned.

  What are you waiting for? 
  The future is now! 
  <link> Let's talk <link> about your needs and become a new DevOps adopter today!

3. Scale up your business to the cloud (Cloud Migration & Management)

  This service is made for both companies already in the cloud and are willing to know how to best manage and scale up their infrastructure 
  and companies willing to migrate their products to the cloud. If you don't have a cloud infrastructure we will create that togheter starting from a zero penny architecture.
  Every component will be designed and optimized to be efficient, secure and reliable. I'll make sure you start to pay a cloud provider only when your product really needs to scale.
  You will be guided to the right cloud provider (AWS, Azure or GCP) and I will make it easy for you and your team to manage the infrastructure.
  
  You don't believe in what I've just said? <link> Schedule a meeting <link> and I will change your mind!

4. Reliability and security check-up (SRE & DevSecOps)

  Your app dies without apparent reason? 
  I will fix that for you.
  Your resources are consumed without control and you have to pay too much to your infrastucture providers? 
  I will save you some money!
  You recently had a data breach and you can't find a way to protect your customers data? 
  Let's build that security door and make it bulletproof!
  
  We will build a solid, secure and reliable foundation for your products. 

  Incidents will happen, but you will be ready to face them and to recover quickly.
  Having a production-ready alerting and monitoring system will allow you to be notified as soon as something goes wrong
  while your team will be enabled to react quickly and handle the issue before it becomes a bigger problem.
  Individuation, Analysis, Migitation, Resolution, Communication and Improvement will be their mantra.

  Your product will be secure by design and you will be able to detect vulnerabilities and fix them before it's too late. 

  Don't procrastinate! <link> Contact me <link> and let's talk about your site reliability and security issues.
  
5. Fracional CTO for startups (CTO as a Service)

  You are a startup and you need a CTO but you can't afford one? I'm here for you!
  I will help you to build your product from scratch, from the idea to the MVP and then to the final product.
  I will guide you through the right tech choices and I will help you to build a team of developers.
  I will be your CTO as a service, I will be your technical partner and whenever you decide I will help you find the right CTO for your company.

  How does a CTO (for a fraction of the cost of a full-time CTO) sound like? Good? <link> Let's talk <link> about it.

6. Software Power-Up (Software Engineering)

  Wanna get rid of your technical debt so your developers will have 30% more time for developing amazing stuff?
  Wanna optimize your software lifecycle?
  I can guide your team in the solution design and implementation.

  Your ideas will finally come to life and I'll make your products grow.
  I will always be keeping a high attention to balance new and ready-to-production technologies. 
  I'll guide you through everty tech choice helping you to maintain the focus on what really matters. 
  You will be enabled to build cutting edge digital products applying good practices of:
  security, reliability, scalability, performance, maintainability, and flexibility.

  Feel intrigued?
  I'm always up for a call! 
  <link>Contact me<link> and let's talk about your software.

7. Other services?

  I'm available for other services such as:

  - Technical writing
  - Conference talks (remote)
  - Podcasting / Streaming (remote)

  just <link> contact me <link> and let's see how we can work together.

*/