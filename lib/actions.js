'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text){
    return (!text||text.trim()==='');
}

export async function shareMeal(prevStat,formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
    };
    if(isInvalidText(meal.title) ||isInvalidText(meal.summary) ||isInvalidText(meal.creator) ||isInvalidText(meal.creator_email)||!meal.creator_email.includes('@') ||isInvalidText(meal.instructions) || !meal.image || meal.image.size === 0){
        // throw new Error('Error in validation!');
        return {
            message: 'Error in validation.'
        };// it's serializable object which shouldn't have any function only simple data
        //  like string , numbers ,nested objects ,array and so on ....
    }
    await saveMeal(meal);
    redirect('/meals');
}