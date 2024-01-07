"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";

type FetchRecipeWithIngredientsProps = {
  id: string
}

const fetchRecipeWithIngredients = async (props: FetchRecipeWithIngredientsProps) => {
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

export default fetchRecipeWithIngredients;