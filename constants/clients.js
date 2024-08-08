/* // DEPRECATED, USE EXPERIENCES INSTEAD! //
{   
    code: "internal field"
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

// DEPRECATED, USE EXPERIENCES INSTEAD! //
const clientsData = {
  clients: [
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
      show: false 
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
      story: "As a Lead Cloud Native Consultant for Abila, I helped them to build a new Cloud Native practice and to deliver Cloud Native to their customers.",
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
      story: "Supporting computational pathology and ML/AI workloads to train image pattern recognition models on biopsy data, plus annotate and label such data. I was responsible for the whole Azure infrastructure.Objective of the project is to increase the efficiency of diagnosis in breast cancer.",
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
      story: "Started as fractional CTO then first key employee, I managed a highly distributed engineering team (7 people peak) applying a mix of Scrum and Kanban, hiring, set up a career framework, built a tech radar to enable adoption of tools, took care of DevEx and took key decisions steering the company strategy. I was also involved in fundraising activities (200k pre-seed). I designed and built a SaaS platform with the aim of simplyfing Kubernetes management across clouds and tenants. We released our klab-cli OSS project as part of our open-core strategy. In the end we failed to find the PMF before running out of cash and so we had to step back with lots of lessons learned.",
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
      story: "I collaborated with Roar to enable DevOps culture in all aspects of the company, starting with CI/CD processes on Azure DevOps and evolving their infrastructure. Automated deployment processes on K8S clusters by creating a GitOps workflow (standardized and later adopted by the whole company) increasing deployment speed by over 100%.",
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
      story: "Enabled the company Engineers and Managers to understand DevOps culture by teaching classes with in-depth focuses on Gitlab and CI/CD processes. They were able to automate and increment deployment speed by a x4 factor after the course.",
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
      story: "Handling multiple suppliers and steering the whole IT strategy of the company, including but not limited to infrastructure and operations. Built a new AWS cloud infrastructure from ground up for their sustainable fashion e-commerce. I migrated their solution to a performant cloud architecture while hardening policies and solving critical security issues on their AWS Lambda APIs.",
      year: "2021-2022",
      show: true
    },
    {
      code: "GDF",
      companyName: "Italian Ministery of Economics and Finance",
      companyType: "🇮🇹 Public Administration",
      companySector: "Security and finance",
      companyLogo: "/images/clients/gdf.webp",
      companyLogoX: 125,
      companyLogoY: 75,
      companyUrl: "https://www.gdf.gov.it/",
      role: "Cloud Native Trainer",
      story: "Helped their IT joint command in Rome to improve DevOps practices by delivering a tailored DevOps course and an in-depth technical workshop on Azure cloud and Azure DevOps.",
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
      story: "Delivered tailored DevOps courses to MVC customers, helping them to understand how to implement DevOps culture.",
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
      story: "Managed Azure and AWS infrastructures and deployments for D-Share's news and media SaaS solution. Solved a critical incident where a DDoS attack coming from Chinese and Russian IPs caused a 100% downtime on one of their managed institutional applications.",
      year: "2021-2022",
      show: true
    },
  ],
}
// DEPRECATED, USE EXPERIENCES INSTEAD! //

export default clientsData;