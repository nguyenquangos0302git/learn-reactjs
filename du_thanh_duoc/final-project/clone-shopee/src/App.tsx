import { ToastContainer } from 'react-toastify'
import useRouteElements from './hooks/useRouteElement'

import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const useRouterElement = useRouteElements()

  return (
    <div>
      <ToastContainer />
      {useRouterElement}
    </div>
  )
}
