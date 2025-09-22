'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle login logic here
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-naebak-green.png"
                alt="نائبك.كوم"
                width={180}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">تسجيل الدخول</h2>
            <p className="mt-2 text-gray-600">ادخل إلى حسابك في منصة نائبك</p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">مرحباً بك مرة أخرى</CardTitle>
              <CardDescription className="text-center">
                ادخل بياناتك للوصول إلى حسابك
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ادخل بريدك الإلكتروني"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pr-10"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="ادخل كلمة المرور"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pr-10 pl-10"
                    />
                    <button
                      type="button"
                      className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-700">
                      تذكرني
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-green-600 hover:text-green-500"
                  >
                    نسيت كلمة المرور؟
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                  {!isLoading && <ArrowLeft className="mr-2 h-4 w-4" />}
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">أو</span>
                  </div>
                </div>

                {/* Google Login */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                >
                  <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  تسجيل الدخول بـ Google
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  ليس لديك حساب؟{' '}
                  <Link href="/register" className="font-medium text-green-600 hover:text-green-500">
                    إنشاء حساب جديد
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              تحتاج مساعدة؟{' '}
              <Link href="/help" className="text-green-600 hover:text-green-500">
                تواصل معنا
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
