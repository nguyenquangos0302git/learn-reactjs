import React, { useState } from 'react'
import Ads from '../Ads'

export interface PositionType {
  x: number
  y: number
}

function MouseTracker({ render }: { render: (value: PositionType) => JSX.Element }) {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })
  console.log('render')
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <p style={{ color: 'red' }}>Mouse Trakcer</p>
      {render(position)}
    </div>
  )
}

export default React.memo(MouseTracker)

// export function withMouseTrakcer<T>(Component: React.ComponentType<T & PositionType>) {
//   return function (props: Omit<T, keyof PositionType>) {
//     const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY
//       })
//     }

//     return (
//       <div onMouseMove={handleMouseMove}>
//         <p style={{ color: 'red' }}>Mouse Trakcer</p>
//         <Component {...(props as T)} {...position} />
//       </div>
//     )
//   }
// }
