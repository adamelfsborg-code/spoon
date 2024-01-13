import { Suspense } from 'react'
import fetchIngredients from '<spoon>/actions/fetch/fetch-ingredients';
import { PageProps } from '<spoon>/app/page';
import ButtonUI from '<spoon>/components/ui/button-ui';
import LinkUI from '<spoon>/components/ui/link-ui';
import Pagination from '<spoon>/components/pagination';
import Search from '<spoon>/components/search';
import DeleteIngredientModal from '../modal/delete-ingredient-modal';
import { MagnifyingGlassPlusIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import IconUI from '../ui/icon-ui';
import GridItem from '../grid/grid-item';

const PAGE_SIZE = 10;
const IngredientFeed = async (props: PageProps) => {
  const pageNumber = Math.max(Number(props.searchParams?.page) || 1, 1);  
  const take = PAGE_SIZE;
  const skip = (pageNumber -1) * take;
  
  const { data, metadata } = await fetchIngredients({ take, skip, search: String(props.searchParams?.search || '') })

  return (
    <div className='space-y-6' >

      <div className='flex justify-start' >
        <LinkUI href={`/ingredients/builder/`} title='Add Ingredient' >
          <IconUI className='bg-green-100' >
            <PlusIcon className="h-6 w-6"   />
          </IconUI>
        </LinkUI>
      </div>

      <div className='flex justify-center gap-4' >
        <Search baseUrl='/ingredients/list' />
        <ButtonUI>
          Search 
        </ButtonUI>
      </div>

      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
          {data?.map((ingredient) => (
            <GridItem id={ingredient.id} title={ingredient.name} description={ingredient.category.name}>
              <LinkUI key={ingredient.id} href={`/ingredients/builder/${ingredient.id}`} >
                <IconUI className='bg-orange-100' >
                  <PencilIcon className="h-6 w-6"   />
                </IconUI>
              </LinkUI>
              <LinkUI key={ingredient.id} href={`/ingredients/${ingredient.id}`} >
                <IconUI className='bg-green-100' >
                  <MagnifyingGlassPlusIcon className="h-6 w-6"   />
                </IconUI>
              </LinkUI>
              <DeleteIngredientModal label='Delete' ingredient={ingredient} />
            </GridItem>
          ))}
        </div>
      </Suspense>

      <Pagination {...props.searchParams} {...metadata!} />

    </div>
  )
}

export default IngredientFeed;