import ContainerBlock from "@components/ContainerBlock";
// import FavouriteProjects from "@components/FavouriteProjects";
// import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import Cookies from "@components/Cookies";
//import getLatestRepos from "@lib/getLatestRepos";
//import userData from "@constants/data";

export default function Home() {
  // pass the argument { repositories } to Home() function to use it below: Home({ repositories })
  return (
    <ContainerBlock
      title="Matteo Bianchi - DevOps, SRE, Coach, Developer"
      description="This is my professional website. I am a DevOps, SRE, coach and software engineer."
    >
      <Hero />
      {/* 
      // Temporary disabled because my github is too poor 
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
      */}
      <Cookies/>
    </ContainerBlock>
  );
}

// Temporary disabled because my github is too poor 

//export const getServerSideProps = async () => {
//  let token = process.env.GITHUB_AUTH_TOKEN;
//
//  const repositories = await getLatestRepos(userData, token);
//
//  return {
//    props: {
//      repositories,
//    },
//  };
//};
