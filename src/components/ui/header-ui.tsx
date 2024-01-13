import { cn } from '<spoon>/lib/cn'
import { HTMLAttributes } from 'react'
import LinkUI from './link-ui'

type HeaderProps = HTMLAttributes<HTMLDivElement>

const HeaderUI = (props: HeaderProps) => {
  return (
    <header {...props} className={cn('flex justify-between items-center rounded-2xl shadow-lg p-2 bg-slate-100', props.className)} >
      <LinkUI href='/' className='text-2xl font-bold text-green-400'>Spoon</LinkUI>

      <nav className='' >
        <ul className='flex gap-x-4'>
          <LinkUI href='/ingredients/list' className='hover:underline' >Ingredients</LinkUI>
          <LinkUI href='/recipes/list' className='hover:underline' >Recipes</LinkUI>
        </ul>
      </nav>

    </header>
  )
}

export default HeaderUI