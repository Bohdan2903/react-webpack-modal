import styled from 'styled-components'

export const StyledInput = styled.input`
  background: #f9f9fa;
  border: 1px solid #cfd6de;
  box-sizing: border-box;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #000;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 0;
  height: 100%;
  width: 100%;
  max-width: 450px;
  min-height: 50px;
  transition: all 0.3s;
  &:focus {
    border: 1px solid #6367f6;
  }
  &::placeholder {
    color: #cfd6de;
  }

  &.error {
    border: 1px solid #fd2d2d;
  }
`
