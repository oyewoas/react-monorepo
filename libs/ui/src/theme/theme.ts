import { createGlobalStyle } from 'styled-components'

export const theme = {
  breakpoints: ['40em', '52em', '64em'] as const,
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ] as const,
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff'
  } as const,
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ] as const,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  } as const,
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  } as const,
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  } as const,
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  } as const,
  variants: {
  },
  text: {
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    }
  } as const
}


export const GlobalStyle = createGlobalStyle`
html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
}
body {
  line-height: 1.15; 
  margin: 0;
  font-size: 14px;
}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
pre {
  font-family: monospace, monospace; 
  font-size: 1em;
}

a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted; 
}

b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
  box-sizing: border-box;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%;
  padding: 0; 
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; 
  padding: 0; 
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background-color: #f2f2f2;
}
h1,
h2,
h3 {
  font-weight: 500;
}
`


export type TTheme = typeof theme