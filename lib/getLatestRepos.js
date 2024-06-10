import axios from "axios";

const getLatestRepos = async (data, token) => {

  try {
    const username = data.githubUsername;
    const res = await axios.get(
      `https://github-pinned-repositories.vercel.app/${username}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
