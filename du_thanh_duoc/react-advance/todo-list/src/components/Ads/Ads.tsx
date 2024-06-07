import React, { useState } from 'react'
// import { PositionType, withMouseTrakcer } from '../MouseTracker/MouseTracker'

// export default function Ads({ x, y, visible }: { x: number; y: number; visible: boolean }) {
//   return (
//     <div>
//       <img src='https://picsum.photos/200/300' />
//       <p>Position Mouse</p>
//       <ul>
//         <li>x: {x}</li>
//         <li>y: {y}</li>
//       </ul>
//     </div>
//   )
// }

// const NewAds = withMouseTrakcer(Ads)

// export default NewAds

export default function Ads({ x, y }: { x: number; y: number }) {
  return (
    <div>
      <img src='https://picsum.photos/200/300' />
      <p>Position Mouse</p>
      <ul>
        <li>x: {x}</li>
        <li>y: {y}</li>
      </ul>
    </div>
  )
}
