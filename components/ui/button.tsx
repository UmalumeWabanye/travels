import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-(--accent-sunset) text-white hover:bg-[#e00b41] focus-visible:ring-(--accent-sunset)",
        outline:
          "border border-(--border-strong) bg-white text-foreground hover:bg-(--surface) focus-visible:ring-(--foreground)",
        ghost: "text-foreground hover:bg-(--surface) focus-visible:ring-(--foreground)",
      },
      size: {
        default: "h-11 px-6 font-(--font-nav) tracking-[0.08em] uppercase",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base font-(--font-nav) tracking-[0.08em] uppercase",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
