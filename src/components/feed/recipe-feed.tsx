import { Suspense } from 'react'
import fetchRecipes from '<spoon>/actions/fetch/fetch-recipes-action';
import { PageProps } from '<spoon>/app/page'
import ButtonUI from '<spoon>/components/ui/button-ui';
import CardUI from '<spoon>/components/ui/card-ui';
import LinkUI from '<spoon>/components/ui/link-ui';
import Pagination from '<spoon>/components/pagination';
import Search from '<spoon>/components/search';
import fetchCategories from '<spoon>/actions/fetch/fetch-categoris-action';
import GenerateIngredientFromRecipeModal from '../modal/add-ingredient-from-recipe-modal';
import DeleteRecipeModal from '../modal/delete-recipe-modal';
import { MagnifyingGlassPlusIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import IconUI from '../ui/icon-ui';
import GridItem from '../grid/grid-item';
import { formatDate } from '<spoon>/lib/date';

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
        <LinkUI href={`/recipes/builder/`} title='Add Recipe' >
          <IconUI className='bg-green-100' >
            <PlusIcon className="h-6 w-6"   />
          </IconUI>
        </LinkUI>
      </div>

      <div className='flex justify-center gap-2' >
        <Search baseUrl='/recipes/list' />
        <ButtonUI>
          Search 
        </ButtonUI>
      </div>

      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
          {recipes?.data?.map((recipe) => (
            <GridItem id={recipe.id} title={recipe.name} description={formatDate(recipe.timestamp)} >
              <LinkUI key={recipe.id} href={`/recipes/${recipe.id}`} >
                <IconUI className='bg-green-100' >
                  <MagnifyingGlassPlusIcon className="h-6 w-6"   />
                </IconUI>
              </LinkUI>
              <GenerateIngredientFromRecipeModal show={false} label='Make Ingredient' categories={categories.data!} recipe={recipe}/>
              <LinkUI key={recipe.id} href={`/recipes/builder/${recipe.id}`} >
                <IconUI className='bg-orange-100' >
                  <PencilIcon className="h-6 w-6"   />
                </IconUI>
              </LinkUI>
              <DeleteRecipeModal show={false} label='Delete Ingredient' recipe={recipe} />
            </GridItem>
          ))}
        </div>
      </Suspense>

      <Pagination {...props.searchParams} {...recipes?.metadata!} />



    </div>
  )
}

export default RecipeFeed