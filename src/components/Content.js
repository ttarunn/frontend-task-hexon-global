import React, { useEffect, useState } from 'react'
import { fetchFolderContent } from '../helpers/config';

const Content = ({content}) => {
    const {url} = content
    

    const [code, setCode] = useState([]);

    async function getRepocontent(params){
        const data = await fetchFolderContent(params);
        const json = await data.json();
        const code = atob(json.content)
        if(code){
            setCode(code)
        }else{
            setCode('No Code to View...')
        }
      };


      useEffect(()=> {
        getRepocontent(url)
      }, [])
  return (
    <div className='box-border w-[95%] border border-black rounded-lg p-2 overflow-auto m-2'>{code}</div>
  )
}

export default Content