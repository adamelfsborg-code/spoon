import fetchRecipeWithIngredients from '<spoon>/actions/fetch-recipe-with-ingredients-action';
import { PageProps } from '<spoon>/app/page';
import MacroDoughnutChart from '<spoon>/components/macro-doughnut-chart';
import CardUI from '<spoon>/components/ui/card-ui';
import ContainerUI from '<spoon>/components/ui/container-ui';
import SectionUI from '<spoon>/components/ui/section-ui';
import calculateTotalMacro from '<spoon>/lib/total-macro';
import { Ingredient } from '@prisma/client';
import React from 'react'

const Page = async (props: PageProps) => {
  const recipe = await fetchRecipeWithIngredients({ id: String(props.params?.id || '' )})
  const recipeIngredients: Ingredient[] = recipe.data?.ingredients.map((row) => row.ingredient as Ingredient) as Ingredient[]

  return (
    <ContainerUI className='flex flex-col gap-4' >
      <SectionUI>
        <div>
          <h2 className='text-3xl font-bold text-center'>{recipe.data?.name}</h2>
          <MacroDoughnutChart  {...calculateTotalMacro(recipeIngredients)} />
        </div>
      </SectionUI>

      {recipe.data?.ingredients.length ? (
        <SectionUI className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {recipe.data?.ingredients.map((row) => (
            <CardUI key={row.ingredient.id} className='px-4 py-2 self-top flex flex-col divide-y'>
              <div className='flex justify-between items-start' >
                <h4 className='text-1xl font-bold text-center truncate hover:text-clip hover:text-wrap' >{row.ingredient.name}</h4>
                <p className='w-[3rem] text-end' >{row.weight}g</p>
              </div>
              <div>
              </div>
            </CardUI>
          ))}
        </SectionUI>
      ) : null }

    </ContainerUI>
  )
}

export default Page;