import styled from 'styled-components';
import { Button as _Button, ButtonProps as _ButtonProps } from 'rebass/styled-components';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends _ButtonProps {
  shape?: 'standard' | 'square' | 'circle'
  css?: string
}

const StyledButton = styled(_Button)<ButtonProps>`
  background-color: blue;
  color: white;
  font-size: ${({ theme }) => `${theme.fontSizes[4]}px`}; 
  ${({ shape }) => {
    if (shape === 'circle') {
      return `
      border-radius: 100px;
      `
    } else {
      return `
      border-radius: 2px;
      `
    }
  }}
`

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
