const baseUrl = process.env.BASE_URL;
export async function TestimonialApiCall(){
    const response = await fetch(`${baseUrl}/TestimonialList`);

    if(response.ok === false){
        throw new Error("Fetching Testimonial failed");
    }else{
        return response.json();
    }

}