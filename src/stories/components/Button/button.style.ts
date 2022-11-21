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
margin: auto;
display: inline-block;
padding: 1rem 4rem;
background: rgba(255, 255, 255, 0.35);
border-radius: 10px;
font: 400 1.2rem sans-serif;
color:#fff;
border: 1px solid rgba(255, 255, 255, 0.35);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
outline: none;
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

