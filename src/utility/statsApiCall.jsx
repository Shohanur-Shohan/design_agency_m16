const baseUrl = process.env.BASE_URL;
export async function StatsApiCall(){
    const response = await fetch(`${baseUrl}/StatList`);

    if(response.ok === false){
        throw new Error("Fetching Stats failed");
    }else{
        return response.json();
    }

}