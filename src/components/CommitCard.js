import React from 'react'

const CommitCard = ({ commits }) => {

    const { author, committer, commit } = commits;

  return (
    <div className='w-[98%] border-2 m-2 rounded-lg p-2 pl-7'>
        Commits on : {commit.author.date.split('T')[0]}
        <div>{commit.message}</div>
        <img src={author.avatar_url} className='rounded-full w-8 h-8 inline m-1'/>
        <span >commited by {committer.login}</span>
        
    </div>
  )
}

export default CommitCard