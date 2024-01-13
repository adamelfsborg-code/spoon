import fetchIngredients from '<spoon>/actions/fetch/fetch-ingredients'
import { PageProps } from '<spoon>/app/page'
import AddIngredientToRecipeForm from '<spoon>/components/form/add-ingredient-to-recipe-form'
import ContainerUI from '<spoon>/components/ui/container-ui'
import SectionUI from '<spoon>/components/ui/section-ui'
import React from 'react'
import fetchRecipeWithIngredients from '<spoon>/actions/fetch/fetch-recipe-with-ingredients-action'
import CardUI from '<spoon>/components/ui/card-ui'
import calculateTotalMacro from '<spoon>/lib/total-macro'
import { type Ingredient } from '@prisma/client'
import MacroDoughnutChart from '<spoon>/components/chart/macro-doughnut-chart'

const Page = async (props: PageProps) => {
  const recipe = await fetchRecipeWithIngredients({ id: String(props.params?.id || '' )})
  const ingredients = await fetchIngredients({ take: 10, skip: 0 })
  
  if (recipe.error) {
    return <div>Error</div>
  }

  const recipeIngredients: Ingredient[] = recipe.data?.ingredients.map((row) => row.ingredient as Ingredient) as Ingredient[]

  return (
    <>
      <ContainerUI className='flex flex-col gap-4' >
        <SectionUI>
          <div>
            <h2 className='text-3xl font-bold text-center'>{recipe.data?.name}</h2>
            <MacroDoughnutChart  {...calculateTotalMacro(recipeIngredients)} />
          </div>
        </SectionUI>

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

        <SectionUI>
          <AddIngredientToRecipeForm ingredients={ingredients?.data!} recipe={recipe.data!} />
        </SectionUI>
      </ContainerUI>
    </>
  )
}

export default Page