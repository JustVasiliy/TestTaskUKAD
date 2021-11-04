let GetData = async(url) => {
    let res = await fetch(url);
    let body = await res.json();
    if(!res.ok){
        throw new Error(`Could not fetch, error # ${res.status}`)
    }
    
    return body;
    };

export default GetData;    
    