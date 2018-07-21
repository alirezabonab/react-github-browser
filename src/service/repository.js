


const getPublicRepositoriesUrl = (username) =>{
    return `https://api.github.com/users/${username}/repos`
}

export const getRepositories = (username) => {
    
    return fetch(getPublicRepositoriesUrl(username))
        .then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
} 