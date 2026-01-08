
import { cn } from "@/lib/utils"


export type ContainerProps =
  React.HTMLAttributes<HTMLDivElement>;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
