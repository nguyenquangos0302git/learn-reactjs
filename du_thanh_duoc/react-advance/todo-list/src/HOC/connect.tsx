export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}

// export default function connect<T>(Component: React.ComponentType<T & ExtraInfoType>) {
//   return function (props: Omit<T, keyof ExtraInfoType>) {
//     return <Component {...(props as T)} debug={debug} log={log} />
//   }
// }

// const connect =
//   <P extends object>(injectedProps: P) =>
//   <T extends ExtraInfoType>(Component: React.ComponentType<T>) =>
//   (props: Omit<T, keyof ExtraInfoType>) => {
//     return <Component {...(props as T & {})} {...injectedProps} />
//   }
// export default connect

export default function connect<P>(injectedProps: P) {
  return function <T>(Component: React.ComponentType<T & P>) {
    return function (props: Omit<T, keyof P>) {
      return <Component {...(props as T & {})} {...injectedProps} />
    }
  }
}
