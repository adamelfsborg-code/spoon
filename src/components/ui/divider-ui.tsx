import { cn } from '<spoon>/lib/cn'
import React, { HTMLAttributes } from 'react'

type DividerUIProps = HTMLAttributes<HTMLHRElement>

const DividerUI = (props: DividerUIProps) => {
  return (
    <hr 
      {...props} 
      className={cn("h-0.5 border-t-0 bg-neutral-500 opacity-100", props.className)} 
    />
  )
}

export default DividerUI