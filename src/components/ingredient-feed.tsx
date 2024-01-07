import fetchIngredients from '<spoon>/actions/fetch-ingredients';
import { PageProps } from '<spoon>/app/page';
import React, { Suspense } from 'react'
import CardUI from './ui/card-ui';
import Pagination from './pagination';
import Search from './search';
import ButtonUI from './ui/button-ui';

const PAGE_SIZE = 10;
const IngredientFeed = async (props: PageProps) => {
  const pageNumber = Math.max(Number(props.searchParams?.page) || 1, 1);  
  const take = PAGE_SIZE;
  const skip = (pageNumber -1) * take;
  
  const { data, metadata } = await fetchIngredients({ take, skip, search: String(props.searchParams?.search || '') })

  return (
    <div className='space-y-6 p-6' >

      <div className='flex justify-center gap-4' >
        <Search baseUrl='/ingredients' />
        <ButtonUI>
          Search 
        </ButtonUI>
      </div>

      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
          {data?.map((ingredient) => (
            <CardUI key={ingredient.id}>
              {ingredient.name}
            </CardUI>
          ))}
        </div>
      </Suspense>

      <Pagination {...props.searchParams} {...metadata!} />

    </div>
  )
}

export default IngredientFeed;