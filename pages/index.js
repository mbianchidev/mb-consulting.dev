import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import FavouriteProjects from "@custom/ProjectShowcase/FavouriteProjects";
import LatestCode from "@custom/CodeShowcase/LatestCode";

export default function Home({repositories}) {
  // pass the argument { repositories } to Home() function to use it below: Home({ repositories })
  return (
    <ContainerBlock title="Matteo Bianchi - CTO"
      description="Discover my projects, my code and my thoughts."
    >
      <Hero/>
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

// Temporary disabled because my github is too poor 

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};