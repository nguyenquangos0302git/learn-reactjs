import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { error } from 'console'
import { omit } from 'lodash'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import authApi from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import { ErrorResponse } from 'src/types/utils.type'
import { registerSchema, RegisterSchemaType } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

export default function Register() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm<RegisterSchemaType>({
    resolver: yupResolver(registerSchema)
  })

  // const rules = getRules(getValues)

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<RegisterSchemaType, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const handleFormSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate(path.home)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<RegisterSchemaType, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<RegisterSchemaType, 'confirm_password'>, {
                type: 'Server',
                message: formError[key as keyof Omit<RegisterSchemaType, 'confirm_password'>]
              })
            })
          }
          if (formError?.email) {
            setError('email', {
              type: 'Server',
              message: formError.email
            })
          }
          if (formError?.password) {
            setError('password', {
              type: 'Server',
              message: formError.password
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={handleFormSubmit} noValidate>
              <div className='text-2-xl'>Đăng ký Shopee Mix</div>
              <Input
                className='mt-8'
                type='email'
                placeholder='Email'
                register={register}
                name='email'
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='password'
                placeholder='Password'
                register={register}
                name='password'
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                type='password'
                placeholder='Confirm Password'
                register={register}
                name='confirm_password'
                errorMessage={errors.confirm_password?.message}
              />

              <div className='mt-2'>
                <Button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                  isLoading={registerAccountMutation.isPending}
                  disabled={registerAccountMutation.isPending}
                >
                  Đăng ký
                </Button>
              </div>
              <div className='flex items-center justify-center'>
                <span className='text-gray-300'>Bạn đã có tài khoản chưa?</span>
                <Link to={path.login} className='text-red-400 ml-1'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
