import React, { HTMLAttributes } from 'react'
import CardUI from '../ui/card-ui'

type GridItemProps = {
  id: string
  title: string
  description: string
} & HTMLAttributes<HTMLDivElement>

const GridItem = (props: GridItemProps) => {
  return (
    <CardUI key={props.id} className='justify-between min-h-[12rem]' >
      <div>
        <div className='flex justify-between items-start mb-1' >
          <h4 className='text-xl font-semibold text-center truncate hover:text-clip hover:text-wrap'>{props.title}</h4>
        </div>
        <p>{props.description}</p>
      </div>
      <div className='flex items-end gap-x-2' >
        {props.children}
      </div>
    </CardUI>
  )
}

export default GridItem;