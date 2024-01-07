import { cn } from '<spoon>/lib/cn'
import { InputHTMLAttributes } from 'react'

type InputProps = (InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) & {
  label?: string
}

const InputUI = (props: InputProps) => {
  if (props.type === 'hidden') {
    return <input 
      {...props} 
    />
  }
  
  return (
    <div className='grow' >
      <label 
        className="block text-gray-700 text-sm font-bold mb-2" 
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input 
        {...props} 
        className={cn(
          'shadow appearance-none border rounded w-full h-[2.5rem] px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', 
          props.className
        )} 
      />
    </div>
  )
}

export default InputUI