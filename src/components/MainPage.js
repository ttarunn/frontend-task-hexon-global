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
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const storeUserData = useSelector((store) => store.dataSlice.userData);
  const storeReposData = useSelector((store) => store.repoSlice.reposData);
  const [click, setClick] = useState(false)
  const { username } = useParams();

    async function getUserInfoFun(user, page) {
        try {
        const data = await getUserInfo(user);
        const json = await data.json();
        setData(json);
        dispatch(updateData(json));
        const repoData = await updateRepo(json.repos_url, page);
        const repoJson = await repoData.json();
        setRepos(repoJson);
        dispatch(updateRepos(repoJson));

          if(repos.length % 20 === 0){
            setTotalPage(repos.length / 20)
          }else if(repos.length % 20 < 0){
            setTotalPage(1)
          }else{
            setTotalPage(parseInt(repos.length / 20)+1)
          }
        } catch (error) {
        setError(true);
        }
    };

    function pageNext(){
      if(repos.length === 20){
        setPage(prev => prev + 1)
      }
      
    }
    function pagePrev(){
      if(page > 1){
        setPage(prev => prev - 1)
      }
      
    }
    async function handlePages(data, page){
      const repoData = await updateRepo(data.repos_url, page);
      const repoJson = await repoData.json();
      setRepos(repoJson);
      dispatch(updateRepos(repoJson))
    }

  useEffect(() => {
    getUserInfoFun(username, page);
    
  }, [username]);
  useEffect(() => {
    handlePages(data, page);
    
  }, [page]);

  if(error){
    return <NotFound />
  }
  return (
    <div>
    <div className="flex">
      <ProfilePage data={data} />
      {repos.length ? <><div className="w-full border-2 rounded-lg">
        <h1 className="text-xl m-2">Popular repositories</h1>
        <div className="flex flex-wrap gap-5 p-2">
          {repos.map((repo) => <RepoCard repo={repo} key={repo.id} />)}
        </div>
      </div></>:''
        }
        
    </div>
    <div className="w-full flex gap-5 justify-center my-5 text-2xl">
      <button type="button" className="border rounded-lg px-5 bg-slate-200" onClick={()=> pagePrev()}>Prev</button>
      <button className="border rounded-lg px-5 bg-slate-200" onClick={()=> pageNext()}>Next</button>
    </div>
    </div>
  );
};

export default MainPage;
