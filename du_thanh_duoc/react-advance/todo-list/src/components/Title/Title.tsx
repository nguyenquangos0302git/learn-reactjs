import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  return <h1 className={styles.ttle}>Todo list typescript</h1>
}

// function equal(prevProp: TitleProps, nextProps: TitleProps) {
//   return prevProp.address.street === nextProps.address.street
// }

// export default React.memo(Title, equal)
export default React.memo(Title)
