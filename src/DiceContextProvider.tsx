import { createContext, useContext } from 'react'

const DiceContext = createContext<React.SVGProps<SVGSVGElement> | undefined>(undefined)

interface DiceThemeProviderProps {
  children: React.JSX.Element | React.JSX.Element[]
  values: React.SVGProps<SVGSVGElement>
}

export function DiceThemeProvider(props: DiceThemeProviderProps) {
  return <DiceContext.Provider value={props.values}>{props.children}</DiceContext.Provider>
}

export function useDiceTheme() {
  return useContext(DiceContext)
}
