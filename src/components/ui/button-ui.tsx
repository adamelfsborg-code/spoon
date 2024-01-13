"use client";

import { cn } from '<spoon>/lib/cn'
import { ButtonHTMLAttributes } from 'react'
import { useFormStatus } from 'react-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const ButtonUI = (props: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={cn(
        'self-end shadow appearance-none border rounded h-[2.5rem] cursor-pointer px-4 py-2 text-sm font-medium hover:bg-gray-50',
        props.className, 
        {
          'cursor-progress': pending
        },
      )}
    >
      {props.children}
    </button>
  )
}

export default ButtonUI
