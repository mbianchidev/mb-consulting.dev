import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components
const FavouriteProjects = dynamic(() => import("@custom/ProjectShowcase/FavouriteProjects"));
const LatestCode = dynamic(() => import("@custom/CodeShowcase/LatestCode"));
const Badges = dynamic(() => import("@custom/Badges/Badges"));

export default function Home({repositories}) {
  // pass the argument { repositories } to Home() function to use it below: Home({ repositories })
  return (
    <ContainerBlock title="Matteo Bianchi"
      description="Discover my projects, my code and my thoughts."
    >
      <Hero/>
      <FavouriteProjects/>
      <LatestCode repositories={repositories}/>
      <Badges/>
    </ContainerBlock>
  );
}

export const getStaticProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
    revalidate: 3600, // Revalidate every hour
  };
};