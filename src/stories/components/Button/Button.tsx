
import React from "react"
import { StyledButton } from "./button.style"

interface ButtonProps {

  /**
   * Is this the principal call to action on the page?
   */
  variant?: "primary" | "secondary" | "glass"
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button contents
   */
  title: string
  /**
   * Optional click handler
   */
  onClick?: () => void

  // * Optional background-color
  backgroundColor? :string

}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
 
  size = "medium",
  variant= "primary",
  title,
  backgroundColor,
  
}: ButtonProps) => {
 
  return (
 
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      style={{backgroundColor}}
    >
      {title}
    </StyledButton>

  )
}
