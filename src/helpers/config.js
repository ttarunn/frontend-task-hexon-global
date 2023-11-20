export async function fetchRepoContent(param){
    try {
        const data = await fetch(`${process.env.REACT_APP_FOLDER_API}${param}/contents`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        return data;
        
    } catch (error) {
        return error
    }
};

export async function fetchFolderContent(param){
    try {
        const data = await fetch(param, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        return data;
        
    } catch (error) {
        return error
    }
};


export  async function getUserInfo(username){
    try {
        const gitData = await fetch(`${process.env.REACT_APP_GITHUB_API}${username}`,{
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        
        return gitData;
        
    } catch (error) {
        console.log(error)
        return error
    }
    
};


export async function updateRepo(url){
    try {
        const repoData = await fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        return repoData
        
    } catch (error) {
        return error
    }
}