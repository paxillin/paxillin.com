import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-button text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/92",
        /** Editorial CTA — charcoal surface, soft corners (not pill), pairs with → icon */
        cta:
          "border border-black/10 bg-[#3c3c3c] font-montserrat font-medium tracking-tight text-white shadow-sm transition-colors duration-200 hover:bg-[#484848] active:bg-[#353535] focus-visible:ring-2 focus-visible:ring-paxillin-ink/30 focus-visible:ring-offset-2 disabled:hover:bg-[#3c3c3c] [&_svg]:size-[1.05rem] [&_svg]:shrink-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-paxillin-mist/80 bg-white text-paxillin-ink hover:border-paxillin-mist hover:bg-paxillin-mist/15",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "select-text text-paxillin-teal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 min-h-11 px-6 py-2.5",
        sm: "h-9 min-h-9 rounded-button px-4",
        lg: "h-12 min-h-12 rounded-button px-8 text-base",
        icon: "h-11 w-11 rounded-button",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
