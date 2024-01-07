import { cn } from '<spoon>/lib/cn'
import { HTMLAttributes } from 'react'

type SectionUIProps = HTMLAttributes<HTMLDivElement>

const SectionUI = (props: SectionUIProps) => {
  return (
    <section 
      {...props} 
      className={cn(
        'bg-slate-100 p-2 rounded-2xl', 
        props.className
      )}
    >
      {props.children}
    </section>
  )
}

export default SectionUI