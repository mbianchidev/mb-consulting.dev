/* 
{
    companyName: "Company name",
    companyType: ["Corporate", "Startup", "Scaleup"...],
    companySector: ["Finance", "Healthcare", "Automotive"...],
    companyLogo: "/images/employers/company.webp",
    companyLogoX: logo width,
    companyLogoY: logo height,
    companyUrl: "https://acme.com",
    role: "What was your role?",
    story: "Details about the role and the company",
    year: "years of employment",
    show: true|false
},
*/

const experiencesData = {
  experiences: [
    {
      code: "OMN",
      companyName: "Omnistrate",
      companyType: "🇺🇸 Startup",
      companySector: "DevTools",
      companyLogo: "/images/employers/omnistrate.webp",
      companyLogoX: 200,
      companyLogoY: 500,
      companyUrl: "https://omnistrate.com/",
      role: "DevRel & Solution Architect",
      story: "Building the DevRel program from ground up, responsible for the overall marketing strategy ‑ close collaboration with Sales and Product. Producing blogs, demo videos, how‑tos ‑ growing the awareness metrics 10x across different media. Contributing to GTM strategy, product growth, and DevEx ‑ drafting and executing strategies reporting directly to the CEO. Supporting Omnistrate customers, translating business requirements into robust architectural designs and successful implementation.",
      year: "2023-now",
      show: true 
    },
    {
      code: "CNCF",
      companyName: "CNCF",
      companyType: "🇺🇸 Foundation",
      companySector: "Cloud Native",
      companyLogo: "/images/projects/CNCF.png",
      companyLogoX: 200,
      companyLogoY: 1000,
      companyUrl: "https://community.cncf.io/events/details/cncf-kcd-netherlands-presents-kcd-utrecht-2023",
      role: "Organizer | Program Committee | Speaker",
      story: "I am co-organizer of the KCD Utrecht 2023, KCD Italy 2024, KubeTrain EU, KCD Netherlands 2024 and continously contributing to Cloud Native events, supported by the CNCF, the KCD, CNCG and open-source communities. I also speak about Cloud Native tech at conferences and meetups around the world.",
      year: "2023-now",
      show: true      
    },
    {
      code: "MNTCRS",
      companyName: "MentorCruise",
      companyType: "🇺🇸 Corporate",
      companySector: "Education Services",
      companyLogo: "/images/employers/mentor-cruise.webp",
      companyLogoX: 200,
      companyLogoY: 1000,
      companyUrl: "https://mb-consulting.dev/mentor",
      role: "Software Engineering & Career Mentor",
      story: "I started mentoring on MentorCruise in 2023 and I can't wait to help more people to achieve their goals.",
      year: "2023-2024",
      show: true
    },
    {
      code: "FREE",
      companyName: "Self-Employed",
      companyType: "Freelancing",
      companySector: "Engineering Services",
      companyLogo: "/images/logo.webp",
      companyLogoX: 187,
      companyLogoY: 62,
      companyUrl: "https://mb-consulting.dev",
      role: "Cloud Native Consultant",
      story: "Offering services and advisory to various companies, ranging from startups to large enterprires, mostly on the DevOps and Cloud Infrastructure side, with a strong focus on Cloud Native tech.",
      year: "2021-now",
      show: true
    },
    {
      code: "ZEF",
      companyName: "Zefi.ai",
      companyType: "🇮🇹 Startup",
      companySector: "Artificial Intelligence",
      companyLogo: "/images/clients/zefi.webp",
      companyLogoX: 200,
      companyLogoY: 500,
      companyUrl: "https://zefi.ai",
      role: "Strategic Advisor | Technical Advisor",
      story: "Infrastructure advisory, product testing, support for their AI platform helping Product Managers to take data-driven decisions.",
      year: "2023-now",
      show: true 
    },
    {
      code: "ABL",
      companyName: "Abila",
      companyType: "🇮🇹 Enterprise",
      companySector: "IT Services",
      companyLogo: "/images/clients/abila.webp",
      companyLogoX: 200,
      companyLogoY: 500,
      companyUrl: "https://abila.it/",
      role: "Lead Cloud Native Consultant",
      story: "As a Lead Cloud Native Consultant for Abila, I helped them to build a new Cloud Native practice and to deliver Cloud Native projects to their customers.",
      year: "2023-2024",
      show: true 
    },
    {
      code: "NKI",
      companyName: "Nederlandse Kanker Instituut (NKI) - Antoni van Leeuwenhoek",
      companyType: "🇳🇱 Research center - Hospital",
      companySector: "Healthcare",
      companyLogo: "/images/clients/NKI.webp",
      companyLogoX: 187,
      companyLogoY: 62,
      companyUrl: "https://www.nki.nl/",
      role: "Lead Cloud Native Consultant | Data Manager",
      story: "Designing and building Azure Cloud Infra for a gamified annotation tool. Support Computational Pathology and ML/AI Workloads to train an image pattern recognition algorithm on biopsy data. Objective of the project is to increase the efficiency of diagnosis in breast cancer.",
      year: "2022-2023",
      show: true
    },
    {
      code: "KBLAB",
      companyName: "KubeLab",
      companyType: "🇳🇱 Startup",
      companySector: "DevTools",
      companyLogo: "/images/clients/kubelab.webp",
      companyLogoX: 187,
      companyLogoY: 62,
      companyUrl: "https://www.kubelab.cloud/",
      role: "Chief Technology Officer",
      story: "Started as fractional CTO then first key employee, I managed a highly distributed engineering team (up to 7 people) applying a mix of Scrum and Kanban, hiring, set up a career framework, built a tech radar to enable adoption of tools, took care of DevEx and took key decisions steering the company strategy. I was also involved in fundraising activities, design and implementation of a Kubernetes management SaaS platform based on kubelab-cli OSS project. We failed to find the PMF and had to step back with lots of lessons learned.",
      year: "2022-2023",
      show: true
    },
    {
      code: "EXT_RDHT",
      companyName: "Extraordy",
      companyType: "🇮🇹 RedHat Partner company",
      companySector: "Training",
      companyLogo: "/images/employers/RedHat.webp",
      companyLogoX: 187,
      companyLogoY: 48,
      companyUrl: "https://www.redhat.com/en",
      role: "RedHat Trainer",
      story: "I was to have taught courses to Extraordy's customers on RedHat technologies (Ansible and Linux SysAdmin).",
      year: "2022",
      show: true
    },
    {
      code: "ROAR",
      companyName: "Roar",
      companyType: "🇺🇸 Corporate",
      companySector: "Customer Experience (CX)",
      companyLogo: "/images/clients/roar.webp",
      companyLogoX: 187,
      companyLogoY: 48,
      companyUrl: "https://roarinc.com/",
      role: "Cloud Native Consultant",
      story: "Collaborated with Roar to enable DevOps culture in all aspects of the company, starting with CI/CD processes on Azure DevOps and evolving their infrastructure. Automated deployment processes on K8S clusters by creating a proper CI/CD process (standardized for the whole company) increasing deployment speed by over 100%.",
      year: "2022",
      show: true
    },
    {
      code: "CPLS",
      companyName: "Coopolis",
      companyType: "🇮🇹 Cooperative",
      companySector: "Facility management and public services",
      companyLogo: "/images/clients/coopolis.webp",
      companyLogoX: 187,
      companyLogoY: 75,
      companyUrl: "https://coopolis.it/",
      role: "Cloud Native Trainer",
      story: "Enabled the company Devs and Managers to understand DevOps culture by teaching classes with in-depth focuses on Gitlab and CI/CD processes. They were able to automate and increment deployment speed by a x4 factor after the course.",
      year: "2022",
      show: true
    },
    {
      code: "GRNC",
      companyName: "GreenChic",
      companyType: "🇮🇹 Scaleup",
      companySector: "Sustainable Fashion",
      companyLogo: "/images/clients/greenchic.webp",
      companyLogoX: 80,
      companyLogoY: 80,
      companyUrl: "https://greenchic.it/",
      role: "Fractional CTO",
      story: "Handling suppliers and the whole IT side of the company, including but not limited to infrastructure and operations. Built from ground up a new cloud infrastructure on AWS for their sustainable fashion e-commerce migration while hardening policies and solving critical security issues on their AWS Lambda deployed APIs.",
      year: "2021-2022",
      show: true
    },
    {
      code: "GDF",
      companyName: "Italian Financial Police",
      companyType: "🇮🇹 Public Administration",
      companySector: "Security and finance",
      companyLogo: "/images/clients/gdf.webp",
      companyLogoX: 125,
      companyLogoY: 75,
      companyUrl: "https://www.gdf.gov.it/",
      role: "Cloud Native Trainer",
      story: "Helped their IT joint command to improve DevOps practices by delivering a DevOps course and an in-depth technical workshop on Azure cloud and Azure DevOps.",
      year: "2021",
      show: true
    },
    {
      code: "MVCTCH",
      companyName: "MVC Technologies S.p.A.",
      companyType: "🇮🇹 Corporate",
      companySector: "IT Consultancy & education",
      companyLogo: "/images/clients/mvc.webp",
      companyLogoX: 190,
      companyLogoY: 49,
      companyUrl: "https://www.mvc-technology.eu/",
      role: "Cloud Native Trainer",
      story: "Delivered DevOps courses to their clients helping them to understand how to implement DevOps culture.",
      year: "2021",
      show: true
    },
    {
      code: "DSHR",
      companyName: "D-Share",
      companyType: "🇮🇹 Corporate",
      companySector: "Digital News and Media",
      companyLogo: "/images/clients/dshare.webp",
      companyLogoX: 190,
      companyLogoY: 48,
      companyUrl: "https://www.dshare.com/",
      role: "Cloud Native Consultant",
      story: "Managed Azure and AWS infrastructures and deployments for their news and media platforms. Solved a critical situation where a DDoS attack coming from Chinese and Russian IPs caused a 100% downtime on one of their managed institutional websites.",
      year: "2021-2022",
      show: true
    },
    {
      companyName: "Infocert",
      companyType: "🇮🇹 Corporate",
      companySector: "Digital Trust Services",
      companyLogo: "/images/employers/infocert.webp",
      companyLogoX: 169,
      companyLogoY: 75,
      companyUrl: "https://gosignweb.infocert.it",
      role: "Senior Software Engineer | Lead DevOps Engineer | SRE",
      story: "I brought DevOps and Site Reliability practices in a digital signature product used by millions of people and thousands of companies all over Europe: GoSign. I managed to improve the reliability and security of the product by developing document management and signature processes in Java. Automated infrastructure provisioning, deployment, delivery and incident management processes while working closely and educating cross-functional teams. I spent 2 years leading the GoSign on-call service with 24/7 availability and solved over 200 critical production incidents saving hundred thousands of euros for the company. Deleted over 50k lines of code, refactored more than 100k, contributed to 50+ internal repositories, built a lot of 0 to 1 libraries, my code still servers 8+ million daily users.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Generali",
      companyType: "🇮🇹 Corporate",
      companySector: "Global Insurance & Asset Management",
      companyLogo: "/images/employers/generali.webp",
      companyLogoX: 100,
      companyLogoY: 100,
      companyUrl: "https://www.generali.it/",
      role: "Digital Signature & DevOps Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for the Italian insurance branch of Generali. I was responsible for the migration of their solution from on-premise monolith to a Docker containerized and Kubernetes-based one. All deployed on an AWS EKS cluster, conducted test and production critical deployments on AWS (off-peak hours, night and weekend included), automated the monitoring of their cloud infra exposing data dashboards, managed day to day operations and high end tech support.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Enel",
      companyType: "🇮🇹 Corporate",
      companySector: "Food",
      companyLogo: "/images/employers/Enel.webp",
      companyLogoX: 250,
      companyLogoY: 50,
      companyUrl: "https://www.enel.it/",
      role: "Digital Signature & DevOps Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for Enel. I was responsible for remote test and production critical deployments on VMWare provided - Foreman provisioned puppet-configured Linux VMs, integration with multiple custom systems including even-driven dispatcher systems, notification queues, massive bulk signature processes, new features development, and high-end tech support to C-level management.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Allianz",
      companyType: "🇮🇹 / 🇫🇷 Corporate",
      companySector: "Global Insurance & Asset Management",
      companyLogo: "/images/employers/Allianz.webp",
      companyLogoX: 350,
      companyLogoY: 50,
      companyUrl: "https://www.allianz.it/",
      role: "Digital Signature & DevOps Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for the Italian and French insurance branch of Allianz. I was responsible for the migration of their old digital signature system, orchestration of multiple 3rd party consultants, remote test and production critical deployments on VMWare provided, Foreman provisioned and puppet-configured Linux VMs, new features development and tech support.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Leonardo",
      companyType: "🇮🇹 Corporate (State controlled)",
      companySector: "Aerospace, Defence and Security",
      companyLogo: "/images/employers/Leonardo.webp",
      companyLogoX: 350,
      companyLogoY: 50,
      companyUrl: "https://www.leonardocompany.com/it/it/",
      role: "Digital Signature & IT Security Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for the Finance deparment of Leonardo. I was responsible for remote test and production critical deployments on their on-premise Windows server environment, integration with their SAP multiple systems, IT security advisory and customer tech support.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Frontex",
      companyType: "🇪🇺 / 🇵🇱 EU Agency",
      companySector: "Border and coast guard",
      companyLogo: "/images/employers/Frontex.webp",
      companyLogoX: 350,
      companyLogoY: 50,
      companyUrl: "https://frontex.europa.eu/",
      role: "Digital Signature & IT Security Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for the IT deparment of Frontex. I was responsible for test and production critical deployments on their on-premise Linux infra in compliance with EU regulations, integration with their Salesforce systems including custom plugins development, technical support and IT security advisory.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Barilla",
      companyType: "🇮🇹 Corporate",
      companySector: "Food",
      companyLogo: "/images/employers/Barilla.webp",
      companyLogoX: 250,
      companyLogoY: 50,
      companyUrl: "https://www.barilla.com/it-it",
      role: "Digital Signature & DevOps Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for the Sales deparment of Barilla. I was responsible for remote test and production critical deployments on VMWare provided - Foreman provisioned puppet-configured Linux VMs, integration with their Salesforce systems and customer support.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "BMW",
      companyType: "🇮🇹 / 🇩🇪 Corporate",
      companySector: "Automotive",
      companyLogo: "/images/employers/BMW.webp",
      companyLogoX: 100,
      companyLogoY: 100,
      companyUrl: "https://www.bmw.it/it/index.html",
      role: "Digital Signature & DevOps Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for the IT deparment of BMW. I was responsible for remote test and production critical deployments on their on-premise Linux and customer support.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Unicredit",
      companyType: "🇮🇹 / 🇷🇸 Corporate",
      companySector: "Global Banking",
      companyLogo: "/images/employers/Unicredit.webp",
      companyLogoX: 300,
      companyLogoY: 75,
      companyUrl: "https://www.unicredit.it/it.html",
      role: "Digital Signature & DevOps Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for the Serbian branch of Unicredit Group. I was responsible for remote test and production critical deployments on their on-premise secured Linux infrastructure.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Reply",
      companyType: "🇮🇹 Corporate",
      companySector: "IT Consulting",
      companyLogo: "/images/employers/reply.webp",
      companyLogoX: 510,
      companyLogoY: 94,
      companyUrl: "https://www.reply.com/it/it/",
      role: "Digital Signature & DevOps Consultant",
      story: "Consultancy offered via InfoCert on digital signature products for Reply. I was responsible for the critical on-site deployments on their on-premise Windows environment serving over 10k users and technical support.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Eco-Mind Software",
      companyType: "🇮🇹 Medium size company",
      companySector: "IT Consulting",
      companyLogo: "/images/employers/ecomind.webp",
      companyLogoX: 250,
      companyLogoY: 81,
      companyUrl: "https://eco-mind.eu/",
      role: "Senior Fullstack Engineer",
      story: "Maximized my Spring and Java skills by working side by side with valuable professionals both internal and external to the company. Here I learnt the true meaning of the word 'teamwork' and how to work in a team with a diverse set of skills.",
      year: "2018-2021",
      show: true
    },
    {
      companyName: "Reply Power",
      companyType: "🇮🇹 Corporate",
      companySector: "IT Consulting",
      companyLogo: "/images/employers/Reply-power.webp",
      companyLogoX: 200,
      companyLogoY: 40,
      companyUrl: "https://www.reply.com/it/content/smart-seller",
      role: "Fullstack Software Developer",
      story: "Got in touch with Typescript and Java frameworks (Spring and Angular) for the first time. I was able to learn how to use them and how to build reusable components. This was also the first time i got in touch with DevOps culture and tools like Jenkins. This propelled my journey torwards my objective to become a DevOps engineer.",
      year: "2018",
      show: true
    },
    {
      companyName: "Vodafone",
      companyType: "🇮🇹 / 🇬🇧 Corporate",
      companySector: "Internet Provider & Telecomunication Services",
      companyLogo: "/images/employers/vodafone.webp",
      companyLogoX: 225,
      companyLogoY: 150,
      companyUrl: "https://www.vodafone.com/",
      role: "Fullstack Software Developer",
      story: "I worked on a product that was used by the financial group of Vodafone. Here I learnt the importance of refactoring, optimization and keeping up to date with techs by migrating Oracle DBs to newer versions and Java from 5 to 8. I also learnt how to work in a team and how to work in a fast-paced environment and how to manage a complex VMWare based IT infrastructure.",
      year: "2017-2018",
      show: true
    },
    {
      companyName: "tenutabene (ex Cambiomarcia)",
      companyType: "🇮🇹 Startup",
      companySector: "Automotive",
      companyLogo: "/images/employers/tenutabene.webp",
      companyLogoX: 289,
      companyLogoY: 36,
      companyUrl: "https://www.tenutabene.it/",
      role: "Fullstack Software Developer",
      story: "I learnt how a startup works and scales up and started my journey in the web development world. Contributed to an (authorized) scraping-powered price estimation engine for second hand cars and a web app for the management of the company's car fleet written in Laravel (PHP).",
      year: "2017",
      show: true
    },
    {
      companyName: "Various",
      companyType: "🇮🇹 IT Companies",
      companySector: "Generic IT",
      companyLogo: "/images/education/ITIS.webp",
      companyLogoX: 200,
      companyLogoY: 200,
      companyUrl: "https://itisravenna.edu.it/",
      role: "Web Developer",
      story: "Some jobs as intern and web developer while I was attending high school. I learnt how to work autonomously in chaotic environments, with little or no guidance. I started using C++, C#, .NET and learnt how to take advantage of the MVC pattern.",
      year: "2015-2017",
      show: true     
    },
    {
      companyName: "ITIS N Baldini",
      companyType: "🇮🇹 School",
      companySector: "Education",
      companyLogo: "/images/education/ITIS.webp",
      companyLogoX: 200,
      companyLogoY: 200,
      companyUrl: "https://itisravenna.edu.it/",
      role: "Student",
      story: "High school diploma in Computer Science. I studied IT (UML, Data Structures, Algorithms, Computer Networks, Operating Systems, Databases, Computer Architecture) and programming languages (Java 5, C++, HTML, CSS, Javascript, PHP, Delphi, MySQL) as well as Economics (macro, micro, project management), English (technical), Italian, History and Geography.",
      year: "2013-2017",
      show: false
    }
  ],
};

export default experiencesData;