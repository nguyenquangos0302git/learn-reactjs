import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import AuthLayout from 'src/layouts/AuthLayout'
import MainLayout from 'src/layouts/MainLayout'

import Login from 'src/pages/Login'
import ProductList from 'src/pages/ProductList'
import Profile from 'src/pages/Profile'
import Register from 'src/pages/Register'

const isAuthenticated = true
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )
        },
        {
          path: '/register',
          element: (
            <AuthLayout>
              <Register />
            </AuthLayout>
          )
        }
      ]
    }
  ])

  return routeElements
}
