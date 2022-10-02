/*
    {
        name: "Name",
        image: "/images/techs/tech.webp",
        url: "https://awesome-product.com",
        x: icon width,
        y: icon height,
        level: "expertise level 1 to 100", //future use?
        show: true|false,
    },
*/

const techsData = {
    techs: [
        {
            name: "Git",
            image: "/images/techs/git.webp",
            url: "https://git-scm.com",
            x: 80,
            y: 80,
            level: "85",
            show: true,
        },
        {
            name: "GitHub",
            image: "/images/techs/github.webp",
            url: "https://github.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "GitLab",
            image: "/images/techs/gitlab.webp",
            url: "https://about.gitlab.com",
            x: 100,
            y: 100,
            level: "90",
            show: true,
        },
        {
            name: "BitBucket",
            image: "/images/techs/bitbucket.webp",
            url: "https://bitbucket.org",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "Amazon Web Services",
            image: "/images/techs/aws.webp",
            url: "https://aws.amazon.com",
            x: 80,
            y: 50,
            level: "70",
            show: true,
        },
        {
            name: "Microsoft Azure",
            image: "/images/techs/azure.webp",
            url: "https://azure.microsoft.com",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "Google Cloud Platform",
            image: "/images/techs/gcp.webp",
            url: "https://cloud.google.com",
            x: 80,
            y: 80,
            level: "65",
            show: true,
        },
        {
            name: "Docker",
            image: "/images/techs/docker.webp",
            url: "https://www.docker.com",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "Kubernetes",
            image: "/images/techs/kubernetes.webp",
            url: "https://kubernetes.io",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "Helm",
            image: "/images/techs/helm.webp",
            url: "https://helm.sh",
            x: 80,
            y: 80,
            level: "65",
            show: true,
        },
        {
            name: "Terraform",
            image: "/images/techs/terraform.webp",
            url: "https://www.terraform.io",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "Puppet",
            image: "/images/techs/puppet.webp",
            url: "https://puppet.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "AWS CloudFormation",
            image: "/images/techs/aws-cloudformation.webp",
            url: "https://aws.amazon.com/cloudformation",
            x: 80,
            y: 80,
            level: "65",
            show: true,
        },
        {
            name: "New Relic",
            image: "/images/techs/newrelic.webp",
            url: "https://newrelic.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "Fluentd",
            image: "/images/techs/fluentd.webp",
            url: "https://www.fluentd.org",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "SumoLogic",
            image: "/images/techs/sumologic.webp",
            url: "https://www.sumologic.com",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "Atlassian OpsGenie",
            image: "/images/techs/opsgenie.webp",
            url: "https://www.atlassian.com/software/opsgenie",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "Atlassian StatusPage",
            image: "/images/techs/statuspage.webp",
            url: "https://www.atlassian.com/software/statuspage",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "Jenkins",
            image: "/images/techs/jenkins.webp",
            url: "https://www.jenkins.io",
            x: 80,
            y: 80,
            level: "85",
            show: true,
        },
        {
            name: "Azure DevOps",
            image: "/images/techs/azure-devops.webp",
            url: "https://azure.microsoft.com/en-us/services/devops",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "GitHub Actions",
            image: "/images/techs/github-actions.webp",
            url: "https://github.com/features/actions",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "BitBucket Pipelines",
            image: "/images/techs/bitbucket-pipelines.webp",
            url: "https://bitbucket.org/product/features/pipelines",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "AWS CodePipeline",
            image: "/images/techs/aws-codepipeline.webp",
            url: "https://aws.amazon.com/codepipeline",
            x: 80,
            y: 80,
            level: "65",
            show: true,
        },
        {
            name: "Apache Tomcat",
            image: "/images/techs/tomcat.webp",
            url: "https://tomcat.apache.org",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "JBoss",
            image: "/images/techs/jboss.webp",
            url: "https://www.redhat.com/en/technologies/jboss-middleware/application-platform",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "NGINX",
            image: "/images/techs/nginx.webp",
            url: "https://www.nginx.com",
            x: 80,
            y: 80,
            level: "65",
            show: true,
        },
        {
            name: "Bash scripting",
            image: "/images/techs/bash.webp",
            url: "https://www.gnu.org/software/bash",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "SonarQube",
            image: "/images/techs/sonarqube.webp",
            url: "https://www.sonarqube.org",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "JFrog Artifactory",
            image: "/images/techs/artifactory.webp",
            url: "https://jfrog.com/artifactory",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "MYSQL",
            image: "/images/techs/mysql.webp",
            url: "https://www.mysql.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "PostgreSQL",
            image: "/images/techs/postgresql.webp",
            url: "https://www.postgresql.org",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "Oracle",
            image: "/images/techs/oracle.webp",
            url: "https://www.oracle.com",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "Java",
            image: "/images/techs/java.webp",
            url: "https://www.java.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "Spring Framework",
            image: "/images/techs/spring.webp",
            url: "https://spring.io",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "Python",
            image: "/images/techs/python.webp",
            url: "https://www.python.org",
            x: 80,
            y: 80,
            level: "60",
            show: true,
        },
        {
            name: "NextJS",
            image: "/images/techs/nextjs.webp",
            url: "https://nextjs.org",
            x: 80,
            y: 80,
            level: "60",
            show: true,
        },
        {
            name: "Vercel",
            image: "/images/techs/vercel.webp",
            url: "https://vercel.com/features/infrastructure ",
            x: 80,
            y: 80,
            level: "75",
            show: true,
        },
        {
            name: "Postman",
            image: "/images/techs/postman.webp",
            url: "https://www.postman.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "OpenAPI",
            image: "/images/techs/openapi.webp",
            url: "https://www.openapis.org",
            x: 80,
            y: 80,
            level: "70",
            show: true,
        },
        {
            name: "Slack",
            image: "/images/techs/slack.webp",
            url: "https://slack.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "Atlassian Jira",
            image: "/images/techs/jira.webp",
            url: "https://www.atlassian.com/software/jira",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
        {
            name: "Atlassian Confluence",
            image: "/images/techs/confluence.webp",
            url: "https://www.atlassian.com/software/confluence",
            x: 80,
            y: 80,
            level: "85",
            show: true,
        },
        {
            name: "Atlassian Trello",
            image: "/images/techs/trello.webp",
            url: "https://trello.com",
            x: 80,
            y: 80,
            level: "80",
            show: true,
        },
    ],
};

export default techsData;