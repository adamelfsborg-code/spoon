import fetchRecipes from '<spoon>/actions/fetch-recipes-action';
import { PageProps } from '<spoon>/app/page'
import React, { Suspense } from 'react'
import Pagination from './pagination';
import Search from './search';
import ButtonUI from './ui/button-ui';
import CardUI from './ui/card-ui';
import LinkUI from './ui/link-ui';
import fetchCategories from '<spoon>/actions/fetch-categoris-action';
import GenerateIngredientFromRecipeModal from './generate-ingredient-from-recipe-modal';
import DeleteRecipeModal from './delete-recipe-modal';

const PAGE_SIZE = 10;

const RecipeFeed = async (props: PageProps) => {
  const pageNumber = Math.max(Number(props.searchParams?.page) || 1, 1);  
  const take = PAGE_SIZE;
  const skip = (pageNumber -1) * take;

  const recipes = await fetchRecipes({ take, skip, search: String(props.searchParams?.search || '') })
  const categories = await fetchCategories({ take: 100, skip: 0, search: String(props.searchParams?.search || '') })

  if (recipes.error) {
    return <div>Error</div>
  }

  return (
    <div className='space-y-6' >

      <div className='flex justify-start' >
        <LinkUI href={`/recipes/builder/`} >
          <ButtonUI className='w-full' >
            Add
          </ButtonUI>
        </LinkUI>
      </div>

      <div className='flex justify-center gap-2' >
        <Search baseUrl='/recipes/list' />
        <ButtonUI>
          Search 
        </ButtonUI>
      </div>

      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3' >
          {recipes?.data?.map((recipe) => (
            <CardUI key={recipe.id}>
              <div className='flex justify-between items-start' >
                <h4 className='text-1xl font-bold text-center truncate hover:text-clip hover:text-wrap'>{recipe.name}</h4>
              </div>
              <div className='flex flex-col gap-y-2' >
                <LinkUI key={recipe.id} href={`/recipes/builder/${recipe.id}`} >
                  <ButtonUI className='w-full' >
                    Edit
                  </ButtonUI>
                </LinkUI>
                <LinkUI key={recipe.id} href={`/recipes/${recipe.id}`} >
                  <ButtonUI className='w-full'>
                    View
                  </ButtonUI>
                </LinkUI>
                <GenerateIngredientFromRecipeModal show={false} label='Make Ingredient' categories={categories.data!} recipe={recipe} />
                <DeleteRecipeModal show={false} label='Delete Ingredient' recipe={recipe} />
              </div>
            </CardUI>
          ))}
        </div>
      </Suspense>

      <Pagination {...props.searchParams} {...recipes?.metadata!} />



    </div>
  )
}

export default RecipeFeed