"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";

type FetchIngredientsActionProps = {
  take: number,
  skip: number,
  search?: string
}

const FetchIngredientsAction = async (props: FetchIngredientsActionProps) => {
  const { take, skip, search } = props

  try {
    const rows = await prisma.ingredient.findMany({
      take,
      skip,
      where: { 
        name: {
          contains: search,
          mode: 'insensitive'
        },
      },
      include: {
        category: {
          select: {
            id: true, // Include the necessary fields from the category
            timestamp: true,
            name: true,
          }
        }
      },
      orderBy: {
        timestamp: 'desc'
      }
    });
  
    const total = await prisma.ingredient.count({
      where: { 
        name: {
          contains: search,
          mode: 'insensitive'
        } 
      },
    })
  
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

export default FetchIngredientsAction;