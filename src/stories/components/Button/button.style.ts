import styled, { css } from "styled-components";
import { ButtonVariants, ButtonSizes} from "../../../types/index"

interface WrapperProps {
  variant: ButtonVariants
  size: ButtonSizes
}


export const StyledButton = styled.button<WrapperProps>`

font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;

${({variant}) => 
variant === "primary" &&
css`
color:white;
background-color:#1ea7fd;

`}

${({variant}) => 
variant === "secondary" &&
css`
color: #333;
background-color:transparent;
`}

${({variant}) => 
variant === "glass" &&
css`
  padding: 24px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(30px);
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  cursor: pointer;
`}

${({size}) => 
size === "small" &&
css`
font-size: 12px;
padding: 10px 16px;
`}

${({size}) => 
size === "medium" &&
css`
font-size: 14px;
padding: 11px 20px;
`}

${({size}) => 
size === "large" &&
css`
font-size: 16px;
padding: 12px 24px;
`}

`

