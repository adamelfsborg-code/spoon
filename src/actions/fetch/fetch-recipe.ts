"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";

type FetchRecipeActionProps = {
  id: string
}

const FetchRecipeAction = async (props: FetchRecipeActionProps) => {
  const { id } = props;

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { 
        id: id
      },
    });
    
    if (!recipe) {
      throw new Error('Recipe not found')
    }

    return {
      data: recipe,
    }
  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }
}

export default FetchRecipeAction;