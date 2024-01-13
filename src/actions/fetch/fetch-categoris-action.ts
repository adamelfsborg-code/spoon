"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";

type FetchCategoriesActionProps = {
  take: number,
  skip: number,
  search?: string
}

const FetchCategoriesAction = async (props: FetchCategoriesActionProps) => {
  const { take, skip, search } = props;

  try {
    const rows = await prisma.category.findMany({
      take,
      skip,
      where: { 
        name: {
          contains: search,
          mode: 'insensitive'
        },
      },
    });
  
    const total = await prisma.category.count({
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

export default FetchCategoriesAction;