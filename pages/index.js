import ContainerBlock from "@components/ContainerBlock";
import FavouriteProjects from "@components/FavouriteProjects";
import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import Cookies from "@components/Cookies";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Matteo Bianchi - Developer, DevOps, Coach"
      description="This is my professional website. I am a developer, devops, SRE and coach."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
      <Cookies/>
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
