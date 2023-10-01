
const baseUrl = process.env.BASE_URL;
export async function SocialApiCall(){
    const response = await fetch(`${baseUrl}/SocialLink`);

    if(response.ok === false){
        throw new Error("Fetching Stats failed");
    }else{
        return response.json();
    }

}