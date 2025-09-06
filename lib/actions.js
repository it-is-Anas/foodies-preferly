'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text){
    return (!text||text.trim()==='');
}

export async function shareMeal(formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
    };
    // if(isInvalidText(meal.title) ||isInvalidText(meal.summary) ||isInvalidText(meal.creator) ||isInvalidText(meal.creator_email)||!meal.creator_email.includes('@') ||isInvalidText(meal.instructions) || !meal.image || meal.image.size === 0){
    //     // throw new Error('Error in validation!');
    //     return {
    //         message: 'Error in validation.'
    //     };
    // }
    await saveMeal(meal);
    redirect('/meals');
}