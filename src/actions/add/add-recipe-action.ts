"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { Prisma } from "@prisma/client";

type AddRecipeActionProps = FormData

const AddRecipeAction = async (props: AddRecipeActionProps) => {
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

export default AddRecipeAction;