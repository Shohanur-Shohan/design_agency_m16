const baseUrl = process.env.BASE_URL;
export async function FeaturedApiCall(){
    const response = await fetch(`${baseUrl}/FeaturedProject`);

    if(response.ok === false){
        throw new Error("Fetching Featured failed");
    }else{
        return response.json();
    }

}