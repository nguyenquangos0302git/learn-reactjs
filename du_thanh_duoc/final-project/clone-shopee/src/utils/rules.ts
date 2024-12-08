import { NoUndefinedField } from './../types/utils.type'
import * as yup from 'yup'

// export type Rules = { [key in keyof FormData]?: RegisterOptions<FormData> }

// export const getRules = (getValues?: UseFormGetValues<FormData>): Rules => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Email là bắt buộc'
//     },
//     pattern: {
//       value: /^\S+@\S+\.\S+$/,
//       message: 'Email không đúng định dạng'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5 - 160 ký tự'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 5 - 160 ký tự'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Password là bắt buộc'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     }
//   },
//   confirm_password: {
//     required: {
//       value: true,
//       message: 'Confirm Password là bắt buộc'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => {
//             return value === getValues('password') || 'Nhập lại password không khớp'
//           }
//         : undefined
//   }
// })

function testPriceMinAndPriceMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_min, price_max } = this.parent as { price_min: string; price_max: string }
  if (price_min !== '' && price_max !== '') {
    return Number(price_max) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Confirm Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  price_min: yup.string().test({
    name: 'price_not_allowed',
    message: 'Giá không phù hợp',
    test: testPriceMinAndPriceMax
  }),
  price_max: yup.string().test({
    name: 'price_not_allowed',
    message: 'Giá không phù hợp',
    test: testPriceMinAndPriceMax
  }),
  name: yup.string().trim().required('Tên sản phẩm là bắt buộc')
})

export const registerSchema = schema.omit(['price_min', 'price_max', 'name'])
export const loginSchema = schema.omit(['confirm_password', 'price_min', 'price_max', 'name'])
export const priceSchema = schema.pick(['price_min', 'price_max'])

export type RegisterSchemaType = yup.InferType<typeof registerSchema>
// export type LoginSchemaType = Pick<RegisterSchemaType, 'email' | 'password'>
export type LoginSchemaType = yup.InferType<typeof loginSchema>
export type PriceSchemaType = NoUndefinedField<yup.InferType<typeof priceSchema>>
export type Schema = yup.InferType<typeof schema>
