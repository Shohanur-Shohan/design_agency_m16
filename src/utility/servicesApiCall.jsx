const baseUrl = process.env.BASE_URL;
export async function ServicesApiCall(){
    const response = await fetch(`${baseUrl}/AllService`);

    if(response.ok === false){
        throw new Error("Fetching TeamList failed");
    }else{
        return response.json();
    }

}