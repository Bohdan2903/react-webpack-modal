import styled, { css } from 'styled-components'

interface ButtonStyleI {
  skin: 'white' | 'blue'
}

const MainStyles = css`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 11px 18px;
  color: #fff;
  min-width: 230px;
  height: 50px;
  text-decoration: none;
  transition: all 0.3s;
  justify-content: center;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 1px 6px rgba(99, 103, 246, 0.5);
  }
`

const ButtonWhite = css`
  background: #ffffff;
  color: #000;
  border: 1px solid #edeff1;
`
const ButtonBlue = css`
  background: #6367f6;
  border: 1px solid #6367f6;
`

export const StyledButton = styled.button<ButtonStyleI>(
  ({ skin }) => css`
    ${MainStyles};
    ${skin === 'blue' && ButtonBlue};
    ${skin === 'white' && ButtonWhite};
  `
)
