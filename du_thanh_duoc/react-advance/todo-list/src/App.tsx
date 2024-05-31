import { useCallback, useMemo, useState } from 'react'
import Ads from './components/Ads'
import NewAds from './components/Ads/Ads'
import AutoText from './components/AutoText'
import Manager from './components/Manager'
import MouseTracker, { PositionType } from './components/MouseTracker/MouseTracker'
import ProductList from './components/Product'
import TodoList from './components/TodoList'
import Watch from './components/Watch'
import Welcome from './components/Welcome'
import MainLayout from './layouts/MainLayout'

function App() {
  const [, setForceRender] = useState<{}>({})
  const handleForceRender = () => setForceRender({})
  // const memorizeRenderMouseTracker = useCallback((value: PositionType) => {
  //   return <Ads {...value} />
  // }, [])
  const memorizeRenderMouseTracker = useMemo(() => {
    return (value: PositionType) => <Ads {...value} />
  }, [])
  return (
    <div>
      {/* <Watch />
      <TodoList /> */}
      {/* <Welcome /> */}
      {/* <AutoText /> */}
      {/* <MainLayout>
        <Manager />
      </MainLayout> */}
      <button onClick={handleForceRender}>Click</button>
      <MouseTracker render={memorizeRenderMouseTracker} />
      {/* <NewAds visible /> */}
    </div>
  )
}

export default App
