const baseUrl = process.env.BASE_URL;
export async function HeroApiCall(){
    const response = await fetch(`${baseUrl}/HeroList`);

    if(response.ok === false){
        throw new Error("Fetching BrandList failed");
    }else{
        return response.json();
    }

}