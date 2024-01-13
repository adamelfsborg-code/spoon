import fetchIngredients from '<spoon>/actions/fetch-ingredients';
import { PageProps } from '<spoon>/app/page';
import React, { Suspense } from 'react'
import CardUI from './ui/card-ui';
import Pagination from './pagination';
import Search from './search';
import ButtonUI from './ui/button-ui';
import LinkUI from './ui/link-ui';
import DeleteIngredientModal from './delete-ingredient-modal';

const PAGE_SIZE = 10;
const IngredientFeed = async (props: PageProps) => {
  const pageNumber = Math.max(Number(props.searchParams?.page) || 1, 1);  
  const take = PAGE_SIZE;
  const skip = (pageNumber -1) * take;
  
  const { data, metadata } = await fetchIngredients({ take, skip, search: String(props.searchParams?.search || '') })

  return (
    <div className='space-y-6' >

      <div className='flex justify-start' >
        <LinkUI href={`/ingredients/builder/`} >
          <ButtonUI className='w-full' >
            Add
          </ButtonUI>
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
            <CardUI key={ingredient.id}>
              <div className='flex justify-between items-start' >
                <h4 className='text-1xl font-bold text-center truncate hover:text-clip hover:text-wrap'>{ingredient.name}</h4>
              </div>
              <div className='flex flex-col gap-y-2' >
                <LinkUI key={ingredient.id} href={`/ingredients/builder/${ingredient.id}`} >
                  <ButtonUI className='w-full' >
                    Edit
                  </ButtonUI>
                </LinkUI>
                <LinkUI key={ingredient.id} href={`/ingredients/${ingredient.id}`} >
                  <ButtonUI className='w-full'>
                    View
                  </ButtonUI>
                </LinkUI>
                <DeleteIngredientModal label='Delete' ingredient={ingredient} />
              </div>
            </CardUI>
          ))}
        </div>
      </Suspense>

      <Pagination {...props.searchParams} {...metadata!} />

    </div>
  )
}

export default IngredientFeed;