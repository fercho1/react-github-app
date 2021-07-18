export const getRepoData = async () => {
    const url = `https://api.github.com/users/fercho1/repos`;
    const resp = await fetch(url);
    const data = await resp.json();

    const repositories = data.map(repo => {
        return {
            id: repo.id,
            name: repo.name,
        }
    })
    return repositories;
}