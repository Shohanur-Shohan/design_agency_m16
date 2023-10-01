const baseUrl = process.env.BASE_URL;
export async function BrandApiCall(){
    const response = await fetch(`${baseUrl}/BrandList`);

    if(response.ok === false){
        throw new Error("Fetching BrandList failed");
    }else{
        return response.json();
    }

}