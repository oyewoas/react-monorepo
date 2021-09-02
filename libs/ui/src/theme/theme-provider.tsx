import { PropsWithChildren, useState, createContext } from 'react'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'
import { TTheme, theme as defultTheme, GlobalStyle } from './theme'

const SetThemeContext = createContext<any>({})

interface IThemePoviderProps extends PropsWithChildren<any> {
  theme?: TTheme
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends TTheme {}
}

const ThemeProvider = (props: IThemePoviderProps) => {
  const [theme, setTheme] = useState(props.theme)
  return (
    <BaseThemeProvider theme={theme || defultTheme}>
      <SetThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyle />
        {props.children}
      </SetThemeContext.Provider>
    </BaseThemeProvider>
  )
}

export { SetThemeContext, ThemeProvider }
