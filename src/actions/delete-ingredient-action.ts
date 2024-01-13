"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { revalidatePath } from "next/cache";

type deleteIngredientProps = string

const deleteIngredient = async (props: deleteIngredientProps) => {
  try {
    await prisma.ingredientInRecipe.deleteMany({
      where: {
        ingredient_id: props
      }
    })

    const deletedRecipe = await prisma.ingredient.delete({
      where: {
        id: props
      },
    });

    revalidatePath('ingredients/list')

    return {
      data: deletedRecipe
    }

  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }
}

export default deleteIngredient;