import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton, ModalComponent, GlobalStyle } from 'components'
import { ModalForm } from './components/Modal/form'

const App = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')
  const handleOpenModal = (status: string) => {
    setIsOpen(true)
    setStatus(status)
  }
  return (
    <Wrapper>
      <GlobalStyle />
      <ModalComponent open={modalIsOpen} setOpen={setIsOpen}>
        <ModalForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} status={status} />
      </ModalComponent>
      <StyledButton skin={'white'} onClick={() => handleOpenModal('edit')}>
        Edit
      </StyledButton>
      <StyledButton skin={'blue'} onClick={() => handleOpenModal('open')}>
        Open
      </StyledButton>
    </Wrapper>
  )
}
export default App

const Wrapper = styled.div`
  background: #e5e5e5;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${StyledButton} {
    margin: 0 10px;
  }
`
