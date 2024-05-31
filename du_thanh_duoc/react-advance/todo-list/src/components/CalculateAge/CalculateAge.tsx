import React, { useReducer, useState } from 'react'

const initialState = {
  age: 0
}

type ActionType = { type: 'increase' } | { type: 'decrease' }

const increaseAgeAction = () => {
  return { type: 'increase' } as { type: 'increase' }
}

const decreaseAgeAction = () => {
  return { type: 'decrease' } as { type: 'decrease' }
}

const reducer = (state: typeof initialState, action: ActionType) => {
  if (action.type === 'increase') {
    return { ...state, age: state.age + 1 }
  }
  if (action.type === 'decrease') {
    return { ...state, age: state.age - 1 }
  }
  throw new Error('Invalid Action', action)
}

export default function CalculateAge() {
  // const [state, setState] = useState<{ age: number }>(() => {
  //   return {
  //     age: 0
  //   }
  // })

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleIncreaseAge = () => {
    // setState((prev) => ({ ...prev, age: prev.age + 1 }))
    dispatch(increaseAgeAction())
  }

  const handleDecreaseAge = () => {
    // setState((prev) => ({ ...prev, age: prev.age - 1 }))
    dispatch(decreaseAgeAction())
  }

  return (
    <div>
      <p>Age: {state.age}</p>
      <button onClick={handleIncreaseAge}>Increase</button>
      <button onClick={handleDecreaseAge}>Decrease</button>
    </div>
  )
}
