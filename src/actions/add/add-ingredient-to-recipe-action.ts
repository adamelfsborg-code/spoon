"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { revalidatePath } from "next/cache";

type AddIngredientToRecipeActionProps = FormData

const AddIngredientToRecipeAction = async (props: AddIngredientToRecipeActionProps) => {
  const ingredientID = props.get('ingredient') as string
  const recipeID = props.get('recipe') as string
  const weight = Number(props.get('weight'))

  try {
    const addedIngredient = await prisma.ingredientInRecipe.create({
      data: {
        ingredient_id: ingredientID,
        recipe_id: recipeID,
        weight: weight,
      },
    });

    revalidatePath(`recipes/builder/${recipeID}`)

    return {
      data: addedIngredient
    }

  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }
}

export default AddIngredientToRecipeAction;