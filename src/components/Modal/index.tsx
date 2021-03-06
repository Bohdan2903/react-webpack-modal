import React, { FC } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

const customStyles = {
  overlay: {
    background: 'rgba(7,15,24,0.4)',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

interface OwnProps {
  open: boolean
  setOpen: (status: boolean) => void
  styles?: Record<string, any>
}

Modal.setAppElement('#app')

const ModalComponent: FC<OwnProps> = ({ open, setOpen, children, styles }) => {
  return (
    <StyledModal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={{ ...customStyles, ...styles }}
      className="modal"
    >
      <svg
        width={24}
        height={24}
        onClick={() => setOpen(false)}
        viewBox="0 0 24 24"
        className={'close-icon'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
          fill="#EDEFF1"
        />
        <path
          d="M15.6881 14.179C16.104 14.5945 16.104 15.2667 15.6881 15.681C15.4801 15.8888 15.211 16 14.9297 16C14.6606 16 14.3914 15.9022 14.1835 15.681L12.0061 13.519L9.82875 15.681C9.6208 15.8888 9.35168 16 9.07034 16C8.80122 16 8.51988 15.8888 8.31193 15.681C7.89602 15.2667 7.89602 14.5945 8.31193 14.1667L10.4893 12.0035L8.31193 9.82683C7.89602 9.41252 7.89602 8.72811 8.31193 8.31257C8.72783 7.89581 9.40061 7.89581 9.82875 8.31257L12.0061 10.4868L14.1713 8.31257C14.5994 7.89581 15.2722 7.89581 15.6881 8.31257C16.104 8.72811 16.104 9.41252 15.6881 9.82683L13.5107 12.0035L15.6881 14.179Z"
          fill="black"
        />
      </svg>
      <>{children}</>
    </StyledModal>
  )
}

export default ModalComponent

const StyledModal = styled(Modal)`
  position: relative;
  width: 80%;
  background: none;
  border: none;
  background: #ffffff;
  border-radius: 20px;
  max-width: 924px;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;

  .close-icon {
    position: absolute;
    right: 20px;
    color: #000000;
    cursor: pointer;
    transition: opacity 0.3s;
    top: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`
