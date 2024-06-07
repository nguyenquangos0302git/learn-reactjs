import React, { startTransition, useDeferredValue, useEffect, useState, useTransition } from 'react'

const ProductCards = ({ name }: { name: string }) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log(name)
    const SIZE = 9999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(name)
    }
    setProducts(result)
  }, [name])

  return (
    <div>
      {products.map((product, index) => {
        return <div key={index}>{product}</div>
      })}
    </div>
  )
}

export default function ProductList() {
  const [name, setName] = useState<string>('')
  // const deferredName = useDeferredValue(name)

  const [deferredName, setDeferredName] = useState('')
  const [pending, startTransition] = useTransition()

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
    startTransition(() => {
      setDeferredName(value)
    })
  }

  console.log(pending)

  return (
    <div>
      <h1>Product List</h1>
      <input type='text' placeholder='type to render' autoFocus value={name} onChange={handleChangeName} />
      {pending && <div>loading...</div>}
      {!pending && <ProductCards name={deferredName} />}
    </div>
  )
}
