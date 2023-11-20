import React, { useEffect, useState } from 'react'
import { CiFileOn } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { fetchFolderContent, fetchRepoContent } from '../helpers/config';
import Content from './Content';

const AllFiles = ({ repo }) => {
    const [view, setView] = useState(false);
    const [viewCode, setViewCode] = useState(false);
  
    const { name, url} = repo;

    const [folderUrl, setFolderUrl] = useState(url);

    const [content, setContent] = useState({});

    const [subRepo, setSubRepo] = useState([]);


    const len = name.split('.').length;

    async function getRepocontent(params){
      const data = await fetchFolderContent(params);
      const json = await data.json();

      if(len === 1){
        setSubRepo(json);
        // console.log(subRepo)
      }else{
        setContent(json);
        console.log(content)
      }
    };

    useEffect(()=> {
      getRepocontent(folderUrl);
    },[]);
    function handleOnclick(){
      ;
      if(len === 1){
        setView(!view)
      }else{
        setViewCode(!viewCode)
      }
    }
  return (
    <div className='p-2 w-full'>
      <div className='flex gap-2 justify-between'>
      <h1 className='cursor-pointer flex gap-2' onClick={handleOnclick}>{len > 1 ? <CiFileOn size={"1.5rem"}/> : <FaFolder size={"1.5rem"} color='#0096FF' />}{name}</h1>
      <a href={content.download_url} className='float-left' >Download File<IoMdDownload className='inline-block m-2'/></a>
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