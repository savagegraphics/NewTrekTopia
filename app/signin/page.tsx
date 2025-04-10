'use client'

import type React from 'react'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/components/ui/use-toast'

export default function SignInPage () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast({
      title: 'Signed in successfully!',
      description: 'Welcome back to TrekTopia.'
    })

    router.push('/')
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Left Side - Image */}
      <div className='hidden md:block md:w-1/2 relative'>
        <Image
          src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop'
          alt='Beautiful travel destination'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <div className='text-center text-white p-8'>
            <Globe className='h-12 w-12 mx-auto mb-4' />
            <h1 className='text-3xl font-bold mb-2'>TrekTopia</h1>
            <p className='text-xl'>Discover extraordinary destinations</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className='md:w-1/2 flex items-center justify-center p-8'>
        <div className='max-w-md w-full'>
          <div className='text-center mb-8'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 text-2xl font-bold'
            >
              <Globe className='h-6 w-6 text-primary' />
              <span>TrekTopia</span>
            </Link>
            <h1 className='text-2xl font-bold mt-6 mb-2'>Welcome back</h1>
            <p className='text-muted-foreground'>
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium'>
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='name@example.com'
                required
              />
            </div>

            <div className='space-y-2'>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm font-medium'>
                  Password
                </label>
                <Link
                  href='/forgot-password'
                  className='text-sm text-primary hover:underline'
                >
                  Forgot password?
                </Link>
              </div>
              <div className='relative'>
                <Input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='••••••••'
                  required
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className='h-4 w-4' />
                  ) : (
                    <Eye className='h-4 w-4' />
                  )}
                </button>
              </div>
            </div>

            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <Separator />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-4'>
              <Button variant='outline' type='button' className='w-full'>
                <svg
                  className='mr-2 h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  />
                  <path
                    fill='currentColor'
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  />
                </svg>
                Google
              </Button>
              <Button variant='outline' type='button' className='w-full'>
                <svg
                  className='mr-2 h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'
                  />
                </svg>
                Facebook
              </Button>
            </div>
          </div>

          <p className='text-center text-sm text-muted-foreground mt-6'>
            Don&apos;t have an account?{' '}
            <Link href='/signup' className='text-primary hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
