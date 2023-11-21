import React from "react";
import { Link } from "react-router-dom";

const RepoCard = ({ repo }) => {
    const { name, description, full_name, url, owner } = repo
    
  return (
    
      <div className="w-[48%] border rounded-md p-2">
        <Link to={`/repos/${owner.login}/${name}`}><h2 className="font-semibold text-blue-500 hover:cursor-pointer hover:underline">{name}</h2></Link>
        <p>
          {description}
        </p>
     
      </div>
    
  );
};

export default RepoCard;
