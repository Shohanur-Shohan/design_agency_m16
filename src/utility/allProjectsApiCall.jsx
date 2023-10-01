const baseUrl = process.env.BASE_URL;
export async function AllProjectsApiCall(){
    const response = await fetch(`${baseUrl}/AllProject`);

    if(response.ok === false){
        throw new Error("Fetching Featured failed");
    }else{
        return response.json();
    }

}