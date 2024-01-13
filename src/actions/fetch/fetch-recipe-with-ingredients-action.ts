"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";

type FetchRecipeWithIngredientsActionProps = {
  id: string
}

const FetchRecipeWithIngredientsAction = async (props: FetchRecipeWithIngredientsActionProps) => {
  const { id } = props;

  try {
    const ingredients = await prisma.recipe.findUnique({
      where: {
        id: id,
      },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  
    return {
      data: ingredients
    }
  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }
}

export default FetchRecipeWithIngredientsAction;