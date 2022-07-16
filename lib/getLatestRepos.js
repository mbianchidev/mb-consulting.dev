import axios from "axios";

const getLatestRepos = async (data, token) => {

  try {
    const username = data.githubUsername;
    const repo_num = 6;
    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, repo_num);
      return latestSixRepos;
    }
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
    );
    let repos = res.data.items;
    let latestSixRepos = repos.splice(0, repo_num);
    return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
