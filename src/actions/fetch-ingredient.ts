"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";

type FetchIngredientProps = {
  id: string
}

const fetchIngredient = async (props: FetchIngredientProps) => {
  const { id } = props;

  try {
    const ingredient = await prisma.ingredient.findUnique({
      where: { 
        id: id
      },
    });
    
    if (!ingredient) {
      throw new Error('Ingredient not found')
    }

    return {
      data: ingredient,
    }
  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }
}

export default fetchIngredient;