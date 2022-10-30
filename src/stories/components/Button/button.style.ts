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

