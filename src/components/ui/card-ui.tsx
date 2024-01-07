import { cn } from "<spoon>/lib/cn";
import { HTMLAttributes } from "react";

type CardUIProps = HTMLAttributes<HTMLDivElement>

import React from 'react'

const CardUI = (props: CardUIProps) => {
  return (
    <div
      {...props}
      className={cn(
        'rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm p-4 flex flex-col gap-y-2',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

export default CardUI