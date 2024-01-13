import { cn } from "<spoon>/lib/cn"
import { HTMLAttributes } from "react"

type IconUIProps = HTMLAttributes<HTMLDivElement>

const IconUI = (props: IconUIProps) => {
  return (
    <div 
      {...props}
      className={
        cn("mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10", props.className)
      }
    >
      {props.children}
    </div>
  )
}

export default IconUI