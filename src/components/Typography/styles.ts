import { cva } from "class-variance-authority";

// Define CVA for Typography
export const typographyStyles = cva("text-primary-brown", {
  variants: {
    variant: {
      chopin: "font-chopin",
      birdgo: "font-birdgo",
    },
    size: {
      h1: "text-2xl",
      h2: "text-base",
      base: "text-sm",
      small: "text-xs",
    },
  },
  defaultVariants: {
    variant: "chopin", // Default font
    size: "base", // Default size
  },
});
