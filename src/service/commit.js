


const getCommitsUrl = (username, repoName) =>{
    return `https://api.github.com/repos/${username}/${repoName}/commits`
}

export const getCommits = (username , repoName) => {
    
    return fetch(getCommitsUrl(username , repoName))
        .then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
} 