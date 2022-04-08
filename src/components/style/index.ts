import { createGlobalStyle } from 'styled-components'
// import { Fonts } from 'components/styles/fonts'

export const GlobalStyle = createGlobalStyle`
  //fonts
  //smooth those fonts
  body,
  input,
  button,
  select,
  textarea {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  // HTML5 display-role reset for older browsers
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body,
  html {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  b,
  strong {
    font-weight: bold;
  }

  input,
  select,
  textarea,
  button {
    -webkit-appearance: none;
    border-radius: 0;

    &:disabled {
      opacity: 0.7;
    }
  }

  button {
    cursor: pointer;

    &:disabled {
      pointer-events: none;
    }
  }

  select {
    -webkit-appearance: menulist-button;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    resize: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    line-height: inherit;
    font: inherit;
    color: inherit;
    vertical-align: baseline;
    outline: none;
  }

  img,
  picture {
    display: block;
    height: auto;
  }

  button,
  input,
  textarea {
    background: transparent;
    border: 0;
    outline: 0;
    font: inherit;
    color: inherit;
  }

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
    transition: .5s;
  }

  iframe {
    display: block;
    max-width: 100%;
  }

  html,
  body,
  #app {
    height: 100%;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    background: #fff;
    min-height: 100vh;
    letter-spacing: 0.01em;
  }

  
  video::-webkit-media-controls {
    visibility: hidden;
  }
  video::-webkit-media-controls-enclosure {
    visibility: visible;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const CustomSelectStyles = {
  menu: (styles: any) => ({
    ...styles,
    color: '#000',
  }),
  control: (styles: any, state: any) => ({
    ...styles,
    maxWidth: '100%',
    padding: '6px 8px',
    borderRadius: '10px',
    background: '#fff',
    color: '#000',
    cursor: 'pointer',
    textTransform: 'capitalize',
    borderColor: '#cfd6de',
    transition: 'all 0.3s',
    fontWeight: 400,
    fontSize: '14px',
    boxShadow: null,
    '&:focus': {
      borderColor: '#6367f6',
    },
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: '#CFD6DE',
  }),
  option: (styles: any, { isSelected }: any) => ({
    ...styles,
    cursor: 'pointer',
    textTransform: 'capitalize',
    '&:hover': {
      opacity: 0.9,
    },
  }),
}
