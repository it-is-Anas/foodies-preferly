'use server';


export async function shareMeal(formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
    };
    console.log(meal);
}