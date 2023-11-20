import React from "react";

const ProfilePage = ({data}) => {
  return (
    <div className="w-[32rem] h-96 p-2 sticky top-0 self-start">
      <img src={data.avatar_url} className="rounded-full h-48 block" />
      <h2 className="font-bold text-2xl">{data.name}</h2>
      <h3 className="text-gray-400">{data.login}</h3>
      <p>{data.bio}</p>
    </div>
  );
};

export default ProfilePage;
