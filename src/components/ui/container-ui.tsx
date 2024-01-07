import { cn } from "<spoon>/lib/cn";
import { HTMLAttributes } from "react";

type ContainerUIProps = HTMLAttributes<HTMLDivElement>

const ContainerUI = (props: ContainerUIProps) => {
  return (
    <div
      {...props}
      className={cn(
        'mx-auto max-w-7xl bg-white mt-4',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

export default ContainerUI;