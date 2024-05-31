import React, { createContext, useCallback, useContext, useDebugValue, useId, useMemo, useState } from 'react'
import './welcome.css'

interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
})

const doSomething = (value: any) => {
  console.log(value)
  return value
}

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color: color }))
  }, [])
  useDebugValue(theme?.color, doSomething)
  return {
    theme,
    onChangeTheme
  }
}

export default function Welcome() {
  const { theme, onChangeTheme } = useTheme()
  const [, forceRender] = useState({})

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme }
  }, [theme, onChangeTheme])

  const reRender = () => forceRender({})

  return (
    <div className='welcome'>
      <ThemeContext.Provider value={valueContext}>
        <Form />
        <Label />
      </ThemeContext.Provider>
      <button onClick={reRender}>Re-render</button>
    </div>
  )
}

// const Label = ({ theme, onChangeTheme }: { theme: ThemeType; onChangeTheme: (color: 'light' | 'dark') => void }) => {
//   return (
//     <label>
//       <input
//         type='checkbox'
//         checked={theme.color === 'dark'}
//         onChange={(e) => {
//           onChangeTheme(e.target.checked ? 'dark' : 'light')
//         }}
//       />
//       use {theme.color} mode
//     </label>
//   )
// }

const Label = React.memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext)
  const id = useId()
  return (
    <div>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
        id={id}
      />
      <label htmlFor={id}>use {theme.color} mode</label>
    </div>
  )
})

const Form = () => {
  return (
    <Panel title='Welcome'>
      <Button>Signup</Button>
      <Button>SignIn</Button>
    </Panel>
  )
}

const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'panel-' + theme?.color
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'button-' + theme?.color
  return <button className={className}>{children}</button>
}
