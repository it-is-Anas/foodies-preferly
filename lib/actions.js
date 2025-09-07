'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

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
    revalidatePath('/meals'); // it will only update the page of this path only
    // this is another alternative for this line of code to be applieed on this page only( revalidatePath('/meals',page); )
    // bydefault it only cached the not daynamic pages when the dynamic page is not cached it reload every single day
    // revalidatePath('/meals','layout'); // this will make sure that each nested page also be recached 
    // revalidatePath('/','layout'); // this will lead to reload or recach each single page in this project 
    redirect('/meals');
}