"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { revalidatePath } from "next/cache";

type FetchRecipesProps = {
  take: number,
  skip: number,
  search?: string
}

const fetchRecipes = async (props: FetchRecipesProps) => {
  const { take, skip, search } = props
  console.log(take, skip, search)
  try {
    const rows = await prisma.recipe.findMany({
      take,
      skip,
      where: { 
        name: {
          contains: search,
          mode: 'insensitive'
        },
      },
    });
  
    const total = await prisma.recipe.count({
      where: { 
        name: {
          contains: search
        } 
      },
    })
    
    revalidatePath('/recipes/list')
  
    return {
      data: rows,
      metadata: {
        hasNextPage: skip + take < total,
        totalPages: Math.ceil(total / take),
      }
    }
  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }
}

export default fetchRecipes;