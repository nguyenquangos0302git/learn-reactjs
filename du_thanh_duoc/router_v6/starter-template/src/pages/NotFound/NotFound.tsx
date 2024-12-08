import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // navigate(-1)
      navigate('/', {
        state: 'redirect from not found'
      })
      return () => {
        clearTimeout(timeOut)
      }
    }, 2000)
  }, [])

  return <div>not found</div>
}
