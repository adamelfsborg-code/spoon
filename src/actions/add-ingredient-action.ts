"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { Prisma } from "@prisma/client";

type AddIngredientProps = FormData

const addIngredient = async (props: AddIngredientProps) => {
  const name = props.get('name') as string
  const category = props.get('category') as string

  try {
    const ingredient = await prisma.ingredient.create({
      data: {
        name: name,
        category_id: category
      }
    });

    return {
      data: ingredient
    }

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return {
          error: 'New ingredient cannot be created with this name'
        }
      }
    }
    return {
      error: getErrorMessage(e)
    }
  }
}

export default addIngredient;