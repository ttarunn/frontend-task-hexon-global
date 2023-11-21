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


export async function updateRepo(url, page){
    console.log(url)
    try {
        const repoData = await fetch(`${url}?page=${page}&per_page=20`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        return repoData
        
    } catch (error) {
        return error
    }
};


export async function fetchCommits(param){
    
    try {
        const data = await fetch(`https://api.github.com${param}commits`, {
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

export async function fetchSingleCommit(param, name){
    
    try {
        const data = await fetch(`https://api.github.com${param}/commits?path=${name}`, {
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



export async function downloadFile(fileUrl) {
    const split = fileUrl.split('/');
    const fileName = split[split.length-1]
    console.log(fileName)
    try {
      const response = await fetch(fileUrl, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    });
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;

      // Append the link to the document body
      document.body.appendChild(link);

      // Trigger the click event on the link
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

