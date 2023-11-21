import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchCommits } from '../helpers/config';
import CommitCard from './CommitCard';

const History = () => {
    const { pathname } = useLocation();
    const url = pathname.split('history')[0];
    const [allCommits, setAllCommits] = useState([]);
    
    async function getAllHistory(url){
        
        try {
            const data = await fetchCommits(url);
            const json = await data.json();
            setAllCommits(json);
            console.log(json);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=> {
        getAllHistory(url)
    }, [])
  return (
    <div>
        {allCommits && allCommits.map(comm=> <CommitCard commits={comm} key={comm.author.id}/>)}
    </div>
  )
}

export default History