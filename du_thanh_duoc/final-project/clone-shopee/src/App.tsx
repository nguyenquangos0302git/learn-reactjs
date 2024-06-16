import useRouteElements from './hooks/useRouteElement'

export default function App() {
  const useRouterElement = useRouteElements()

  return <div>{useRouterElement}</div>
}
