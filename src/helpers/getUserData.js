export const getUserData = async () => {
    const url = `https://api.github.com/users/fercho1`;
    const resp = await fetch( url );
    const data = await resp.json();
    return data;


    
    
}