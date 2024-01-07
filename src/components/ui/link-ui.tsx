import { cn } from '<spoon>/lib/cn'
import Link from 'next/link'
import { ComponentProps } from 'react'

type LinkUIProps = ComponentProps<typeof Link>

const LinkUI = (props: LinkUIProps) => {
  return (
    <Link 
      {...props}
      className={cn('font-medium text-black transition-all duration-200 rounded', props.className)}
      href={props.href}
      title={props.title}
    >
      {props.children}
    </Link>
  )
}

export default LinkUI