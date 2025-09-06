'use server';

import { saveMeal } from "./meals";


export async function shareMeal(formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
    };
    await saveMeal(meal);
    // console.log(meal);
}