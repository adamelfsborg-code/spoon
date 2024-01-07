"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { Prisma } from "@prisma/client";

type AddRecipeProps = FormData

const addRecipe = async (props: AddRecipeProps) => {
  const name = props.get('name') as string

  try {
    const recipe = await prisma.recipe.create({
      data: {
        name: name
      }
    });

    return {
      data: recipe
    }

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return {
          error: 'New recipe cannot be created with this name'
        }
      }
    }
    return {
      error: getErrorMessage(e)
    }
  }
}

export default addRecipe;