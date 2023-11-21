import React, { useEffect, useState } from 'react'
import { CiFileOn } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { downloadFile, fetchCommits, fetchFolderContent, fetchRepoContent, fetchSingleCommit } from '../helpers/config';
import Content from './Content';
import { useLocation } from 'react-router-dom';

const AllFiles = ({ repo }) => {
    const [view, setView] = useState(false);
    const [viewCode, setViewCode] = useState(false);
  
    const { name, url, _links} = repo;
    //https://api.github.com/repos/ttarunn/my-protfolio/git/commits/5148577d03f52e937462fdedec51826497bf56e2

    const { pathname } = useLocation();
    

    const [folderUrl, setFolderUrl] = useState(url);

    const [content, setContent] = useState({});

    const [subRepo, setSubRepo] = useState([]);
    const [commitData, setCommitData] = useState({})

    const len = name.split('.').length;

    async function getRepocontent(folderUrl, name, path){
      
      const data = await fetchFolderContent(folderUrl);
      const json = await data.json();
      const singleCommit = await fetchSingleCommit(path, name);
      const singleCommitJson = await singleCommit.json();
      setCommitData(singleCommitJson);
      
      if(len === 1){
        setSubRepo(json);
        // console.log(subRepo)
      }else{
        setContent(json);
        // console.log(content);
        
      }
    };

    useEffect(()=> {
      getRepocontent(folderUrl, name, pathname);
    },[]);

    function handleOnclick(){
      
      if(len === 1){
        setView(!view)
      }else{
        setViewCode(!viewCode)
      }
    };

    // content.download_url
  return (
    <div className='p-2 w-full'>
      <div className='flex gap-2 justify-between'>

      <h1 className='cursor-pointer flex gap-2' onClick={handleOnclick}>{len > 1 ? <CiFileOn size={"1.5rem"}/> : <FaFolder size={"1.5rem"} color='#0096FF' />}{name}</h1>

      <div>{commitData[0]?.commit?.message} {commitData[0]?.commit?.committer?.date?.split('T')[0]}</div>

      {len > 1 ? <a href={content.download_url} target='_blank' className='float-left cursor-pointer'>Download File<IoMdDownload className='inline-block m-2'/></a>:<div className='w-36'></div>}

      </div>
      <div className=''>
      {len > 1 ? viewCode && <Content content={content}/> : view && <table className="w-full">
                
            {subRepo.length && subRepo.map((repo)=> <tr key={repo.id} className='border-1'><td><AllFiles repo={repo} /></td></tr>)}
            </table>}
      </div>
    </div>
  )
}

export default AllFiles