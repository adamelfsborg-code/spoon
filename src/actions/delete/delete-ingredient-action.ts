"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { revalidatePath } from "next/cache";

type DeleteIngredientActionProps = string

const DeleteIngredientAction = async (props: DeleteIngredientActionProps) => {
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

export default DeleteIngredientAction;