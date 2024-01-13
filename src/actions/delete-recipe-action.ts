"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { revalidatePath } from "next/cache";

type deleteRecipeProps = string

const deleteRecipe = async (props: deleteRecipeProps) => {
  try {
    await prisma.ingredientInRecipe.deleteMany({
      where: {
        recipe_id: props
      }
    })

    const deletedRecipe = await prisma.recipe.delete({
      where: {
        id: props
      },
    });

    revalidatePath('recipes/list')

    return {
      data: deletedRecipe
    }

  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }
}

export default deleteRecipe;