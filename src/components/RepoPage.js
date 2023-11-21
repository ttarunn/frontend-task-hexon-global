import React, { useEffect, useState } from 'react'
import ProfilePage from './ProfilePage'
import { useDispatch, useSelector } from 'react-redux';
import { updateReposContent } from '../helpers/repoSlice';
import AllFiles from './AllFiles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchRepoContent } from '../helpers/config';

const RepoPage = () => {
    const [content, setContent] = useState([]);

    const storeUserData = useSelector(store => store.dataSlice.userData);

    const dispatch = useDispatch();

    const params = useLocation().pathname.split('repos')[1];
  
    async function getRepocontent(params){
      const data = await fetchRepoContent(params);
      const json = await data.json()
      dispatch(updateReposContent(json));
      setContent(json);
      
    }

    useEffect(()=> {
      getRepocontent(params)
    }, [])
  return (
    <div className='flex'>
        <ProfilePage data={storeUserData}/>
        <div className='w-full border-collapse'>
            <table className="w-full">
                <tr className='flex justify-around border-4'>
                  <td className='text-xl m-2 font-semibold'>Repo Name : {params}</td>
                  <Link to={`/repos${params}/history`} className='text-xl m-2 cursor-pointer border rounded-lg px-5 py-1 bg-gray-400 text-white'>All History</Link>
                </tr>
            {content?.map((repo)=> <tr key={repo.id} className='border-2'><td><AllFiles repo={repo} /></td></tr>)}
            </table>
        </div>
        <Outlet/>
    </div>
  )
}

export default RepoPage