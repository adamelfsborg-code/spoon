"use client"

import { cn } from '<spoon>/lib/cn'
import { HTMLAttributes } from 'react'
import LinkUI from './link-ui'
import { useRouter } from 'next/navigation'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { ArrowUturnRightIcon } from '@heroicons/react/24/outline'

type FooterUIProps = HTMLAttributes<HTMLDivElement>

const FooterUI = (props: FooterUIProps) => {
  const router = useRouter()

  return (
    <footer {...props} className={cn('flex justify-between items-center rounded-2xl shadow-md p-2 border border-black border-opacity-30', props.className)} >
      <nav className='w-full' >
        <ul className='flex justify-between'>
          <LinkUI href={''} onClick={(e) => router.back()} className='hover:underline' title='Go Back' >
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ArrowUturnLeftIcon className="h-6 w-6"   />
            </div>
          </LinkUI>
          <LinkUI href={''} onClick={(e) => router.forward()} className='hover:underline' title='Go Forward' >
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
              <ArrowUturnRightIcon className="h-6 w-6"   />
            </div>
          </LinkUI>
        </ul>
      </nav>

    </footer>
  )
}

export default FooterUI