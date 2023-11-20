import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../helpers/dataSlice";
import { updateRepos } from "../helpers/repoSlice";
import ProfilePage from "./ProfilePage";
import { getUserInfo, updateRepo } from "../helpers/config";
import NotFound from "./NotFound";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const storeUserData = useSelector((store) => store.dataSlice.userData);
  const storeReposData = useSelector((store) => store.repoSlice.reposData);

  const { username } = useParams();

    async function getUserInfoFun(user) {
        try {
        const data = await getUserInfo(user);
        const json = await data.json();
        setData(json);
        dispatch(updateData(json));
        const repoData = await updateRepo(json.repos_url);
        const repoJson = await repoData.json();
        setRepos(repoJson);
        dispatch(updateRepos(repoJson));
        } catch (error) {
        setError(true);
        }
    }

  useEffect(() => {
    getUserInfoFun(username);
  }, [username]);

//   if(error){
//     return <NotFound />
//   }
  return (
    <div className="flex">
      <ProfilePage data={data} />
      {repos.length ? <><div className="w-full border-2">
        <h1 className="text-xl m-2">Popular repositories</h1>
        <div className="flex flex-wrap gap-5 p-2">
          {repos.map((repo) => <RepoCard repo={repo} key={repo.id} />)}
        </div>
      </div></>:''
        }
    </div>
  );
};

export default MainPage;
