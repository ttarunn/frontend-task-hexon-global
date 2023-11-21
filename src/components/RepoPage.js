import React, { useEffect, useState } from 'react'
import ProfilePage from './ProfilePage'
import { useDispatch, useSelector } from 'react-redux';
import { updateReposContent } from '../helpers/repoSlice';
import AllFiles from './AllFiles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchRepoContent } from '../helpers/config';

const RepoPage = () => {
    const [content, setContent] = useState([]);

    const storeReposContent = useSelector(store => store.repoSlice.reposContent);
    // http://localhost:3000/repo/ttarunn/assignment-2
    const storeUserData = useSelector(store => store.dataSlice.userData);

    const dispatch = useDispatch();

    const params = useLocation().pathname.split('repos')[1];
  console.log(params)
    async function getRepocontent(params){
      const data = await fetchRepoContent(params);
      const json = await data.json()
      dispatch(updateReposContent(json));
      setContent(json);
      console.log(content)
    }

    useEffect(()=> {
      getRepocontent(params)
    }, [])
  return (
    <div className='flex'>
        <ProfilePage data={storeUserData}/>
        <div className='w-full'>
            <table className="w-full">
                <div className='flex justify-around'>
                  <h1 className='text-xl m-2 font-semibold'>Repo Name : {params}</h1>
                  <Link to={`/repos${params}/history`} className='text-xl m-2 cursor-pointer'>History</Link>
                </div>
            {content.length && content.map((repo)=> <tr key={repo.id} className='border-2'><td><AllFiles repo={repo} /></td></tr>)}
            </table>
        </div>
        <Outlet/>
    </div>
  )
}

export default RepoPage