import React, { useRef } from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const clickH1 = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'red'
    }
  }

  return (
    <h1 className={styles.ttle} ref={h1Ref} onClick={clickH1}>
      Todo list typescript
    </h1>
  )
}

// function equal(prevProp: TitleProps, nextProps: TitleProps) {
//   return prevProp.address.street === nextProps.address.street
// }

// export default React.memo(Title, equal)
export default React.memo(Title)
