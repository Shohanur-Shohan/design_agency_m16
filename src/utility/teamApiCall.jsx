const baseUrl = process.env.BASE_URL;
export async function TeamApiCall(){
    const response = await fetch(`${baseUrl}/TeamList`);

    if(response.ok === false){
        throw new Error("Fetching TeamList failed");
    }else{
        return response.json();
    }

}