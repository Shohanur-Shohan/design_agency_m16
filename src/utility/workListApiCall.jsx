const baseUrl = process.env.BASE_URL;
export async function WorkListApiCall(){
    const response = await fetch(`${baseUrl}/WorkList`);

    if(response.ok === false){
        throw new Error("Fetching BrandList failed");
    }else{
        return response.json();
    }

}