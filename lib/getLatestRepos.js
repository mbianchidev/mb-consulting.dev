import axios from "axios";

const getLatestRepos = async (data, token) => {

  try {
    const username = data.githubUsername;
    const repo_num = 6;
    // if (token) {
    // const res = await axios.get(
    //     `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
    //     {
    //       headers: {
    //         Authorization: `token ${token}`,
    //       },
    //     }
    //   );
    //   let repos = res.data.items;
    //   let latestSixRepos = repos.splice(0, repo_num);
    //   return latestSixRepos;
    // }
    const res = await axios.get(
      `https://gh-pinned-repos.egoist.dev/?username=${username}`
    );
    let repos = res.data;
    let latestSixRepos = repos.splice(0, repo_num);
    return latestSixRepos;
  } catch (err) {
    // Return empty array on error to allow build to continue
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to fetch repositories:', err.message);
    }
    return [];
  }
};

export default getLatestRepos;
