'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import NewsTicker from '@/components/ui/news-ticker'
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin } from 'lucide-react'

export default function HomePage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'guest'>('login')
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    governorate: '',
    password: '',
    confirmPassword: ''
  })

  const governorates = [
    'القاهرة', 'الجيزة', 'الإسكندرية', 'الشرقية', 'المنوفية', 'القليوبية', 'البحيرة',
    'الغربية', 'كفر الشيخ', 'الدقهلية', 'دمياط', 'بورسعيد', 'الإسماعيلية', 'السويس',
    'شمال سيناء', 'جنوب سيناء', 'الفيوم', 'بني سويف', 'المنيا', 'أسيوط', 'سوهاج',
    'قنا', 'الأقصر', 'أسوان', 'البحر الأحمر', 'الوادي الجديد', 'مطروح'
  ]

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // معالجة تسجيل الدخول
    console.log('Login:', loginData)
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // معالجة التسجيل
    console.log('Register:', registerData)
  }

  const handleGuestAccess = () => {
    // الدخول كزائر
    console.log('Guest access')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* البانر الرئيسي */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/sisi-banner.jpg"
          alt="فخامة الرئيس عبد الفتاح السيسي"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </section>
      
      {/* الشريط الإخباري */}
      <NewsTicker />
      
      {/* قسم حقول التسجيل والدخول */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* أزرار التبديل */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'login'
                      ? 'bg-naebak-green text-white'
                      : 'text-gray-600 hover:text-naebak-green'
                  }`}
                >
                  تسجيل الدخول
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'register'
                      ? 'bg-naebak-green text-white'
                      : 'text-gray-600 hover:text-naebak-green'
                  }`}
                >
                  حساب جديد
                </button>
                <button
                  onClick={() => setActiveTab('guest')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'guest'
                      ? 'bg-naebak-orange text-white'
                      : 'text-gray-600 hover:text-naebak-orange'
                  }`}
                >
                  دخول كزائر
                </button>
              </div>
            </div>

            {/* محتوى التبويبات */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* النموذج */}
              <div>
                {activeTab === 'login' && (
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center text-naebak-green">
                        تسجيل الدخول
                      </CardTitle>
                      <CardDescription className="text-center">
                        ادخل بياناتك للوصول إلى حسابك
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            البريد الإلكتروني
                          </label>
                          <div className="relative">
                            <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              type="email"
                              placeholder="ادخل بريدك الإلكتروني"
                              value={loginData.email}
                              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                              className="pr-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            كلمة المرور
                          </label>
                          <div className="relative">
                            <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="ادخل كلمة المرور"
                              value={loginData.password}
                              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                              className="pr-10 pl-10"
                              required
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

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember"
                              type="checkbox"
                              className="h-4 w-4 text-naebak-green focus:ring-naebak-green border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="mr-2 block text-sm text-gray-700">
                              تذكرني
                            </label>
                          </div>
                          <Link href="/forgot-password" className="text-sm text-naebak-green hover:underline">
                            نسيت كلمة المرور؟
                          </Link>
                        </div>

                        <Button type="submit" className="w-full bg-naebak-green hover:bg-naebak-green/90">
                          تسجيل الدخول
                        </Button>

                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">أو</span>
                          </div>
                        </div>

                        <Button type="button" variant="outline" className="w-full">
                          <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          تسجيل الدخول بـ Google
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {activeTab === 'register' && (
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center text-naebak-green">
                        إنشاء حساب جديد
                      </CardTitle>
                      <CardDescription className="text-center">
                        املأ البيانات التالية لإنشاء حسابك
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleRegisterSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              الاسم الكامل
                            </label>
                            <div className="relative">
                              <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                              <Input
                                type="text"
                                placeholder="ادخل اسمك الكامل"
                                value={registerData.name}
                                onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                                className="pr-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              رقم الهاتف
                            </label>
                            <div className="relative">
                              <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                              <Input
                                type="tel"
                                placeholder="01xxxxxxxxx"
                                value={registerData.phone}
                                onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                                className="pr-10"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            البريد الإلكتروني
                          </label>
                          <div className="relative">
                            <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              type="email"
                              placeholder="ادخل بريدك الإلكتروني"
                              value={registerData.email}
                              onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                              className="pr-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            المحافظة
                          </label>
                          <div className="relative">
                            <MapPin className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                            <select
                              value={registerData.governorate}
                              onChange={(e) => setRegisterData({...registerData, governorate: e.target.value})}
                              className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-naebak-green focus:border-transparent"
                              required
                            >
                              <option value="">اختر المحافظة</option>
                              {governorates.map((gov) => (
                                <option key={gov} value={gov}>{gov}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              كلمة المرور
                            </label>
                            <div className="relative">
                              <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                              <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="ادخل كلمة المرور"
                                value={registerData.password}
                                onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                                className="pr-10 pl-10"
                                required
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

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              تأكيد كلمة المرور
                            </label>
                            <div className="relative">
                              <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                              <Input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="أعد كتابة كلمة المرور"
                                value={registerData.confirmPassword}
                                onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                                className="pr-10 pl-10"
                                required
                              />
                              <button
                                type="button"
                                className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 text-naebak-green focus:ring-naebak-green border-gray-300 rounded"
                            required
                          />
                          <label htmlFor="terms" className="mr-2 block text-sm text-gray-700">
                            أوافق على{' '}
                            <Link href="/terms" className="text-naebak-green hover:underline">
                              الشروط والأحكام
                            </Link>
                            {' '}و{' '}
                            <Link href="/privacy" className="text-naebak-green hover:underline">
                              سياسة الخصوصية
                            </Link>
                          </label>
                        </div>

                        <Button type="submit" className="w-full bg-naebak-green hover:bg-naebak-green/90">
                          إنشاء الحساب
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {activeTab === 'guest' && (
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center text-naebak-orange">
                        دخول كزائر
                      </CardTitle>
                      <CardDescription className="text-center">
                        تصفح المنصة بدون إنشاء حساب
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-gray-600">
                        يمكنك تصفح المرشحين والاطلاع على المعلومات العامة بدون تسجيل
                      </p>
                      <p className="text-sm text-gray-500">
                        ملاحظة: لن تتمكن من إرسال الرسائل أو تقديم الشكاوى أو التقييم
                      </p>
                      <Button 
                        onClick={handleGuestAccess}
                        className="w-full bg-naebak-orange hover:bg-naebak-orange/90"
                      >
                        متابعة كزائر
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* معلومات إضافية */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-naebak-green">مرحباً بك في منصة نائبك</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      منصة نائبك هي المنصة الرسمية للتواصل مع أعضاء مجلس النواب ومجلس الشيوخ والمرشحين. 
                      من خلال المنصة يمكنك التواصل مع ممثليك، تقديم الشكاوى، ومتابعة الأداء.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-naebak-green">خدماتنا</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• التواصل المباشر مع النواب والمرشحين</li>
                      <li>• تقديم الشكاوى ومتابعة حلها</li>
                      <li>• تقييم أداء النواب</li>
                      <li>• متابعة الإحصائيات والتقارير</li>
                      <li>• الاطلاع على البرامج الانتخابية</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-naebak-green">إحصائيات المنصة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-naebak-green">596</div>
                        <div className="text-sm text-gray-600">عضو برلمان</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-naebak-green">15,000+</div>
                        <div className="text-sm text-gray-600">مواطن مسجل</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-naebak-green">8,500+</div>
                        <div className="text-sm text-gray-600">شكوى مقدمة</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-naebak-green">12,000+</div>
                        <div className="text-sm text-gray-600">رسالة متبادلة</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
