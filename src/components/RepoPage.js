import React, { useEffect, useState } from 'react'
import ProfilePage from './ProfilePage'
import { useDispatch, useSelector } from 'react-redux';
import { updateReposContent } from '../helpers/repoSlice';
import AllFiles from './AllFiles';
import { useLocation } from 'react-router-dom';
import { fetchRepoContent } from '../helpers/config';

const RepoPage = () => {
    const [content, setContent] = useState([]);

    const storeReposContent = useSelector(store => store.repoSlice.reposContent);
    // http://localhost:3000/repo/ttarunn/assignment-2
    const storeUserData = useSelector(store => store.dataSlice.userData);

    const dispatch = useDispatch();

    const params = useLocation().pathname.split('repo')[1];

    async function getRepocontent(params){
      const data = await fetchRepoContent(params);
      const json = await data.json()
      dispatch(updateReposContent(json));
      setContent(json)
    }

    useEffect(()=> {
      getRepocontent(params)
    }, [])
  return (
    <div className='flex'>
        <ProfilePage data={storeUserData}/>
        <div className='w-full'>
            <table className="w-full">
                <tr className='text-xl m-2'><th>Files</th></tr>
            {content.length && content.map((repo)=> <tr key={repo.id} className='border-2'><td><AllFiles repo={repo} /></td></tr>)}
            </table>
        </div>
    </div>
  )
}

export default RepoPage