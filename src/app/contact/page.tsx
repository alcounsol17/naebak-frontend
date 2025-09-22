'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import NewsTicker from '@/components/ui/news-ticker'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // معالجة إرسال النموذج
    console.log('Contact form submitted:', formData)
    // هنا سيتم إرسال البيانات إلى الخادم
  }

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* البانر */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/sisi-banner.jpg"
          alt="فخامة الرئيس عبد الفتاح السيسي"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              اتصل بنا
            </h1>
            <p className="text-lg md:text-xl">
              نحن هنا للمساعدة والإجابة على استفساراتك
            </p>
          </div>
        </div>
      </section>
      
      {/* الشريط الإخباري */}
      <NewsTicker />
      
      {/* المحتوى الرئيسي */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* نموذج الاتصال */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-naebak-green">
                    أرسل لنا رسالة
                  </CardTitle>
                  <CardDescription>
                    املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          الاسم الكامل *
                        </label>
                        <Input
                          type="text"
                          placeholder="ادخل اسمك الكامل"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          رقم الهاتف
                        </label>
                        <Input
                          type="tel"
                          placeholder="01xxxxxxxxx"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        البريد الإلكتروني *
                      </label>
                      <Input
                        type="email"
                        placeholder="ادخل بريدك الإلكتروني"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        موضوع الرسالة *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-naebak-green focus:border-transparent"
                        required
                      >
                        <option value="">اختر موضوع الرسالة</option>
                        <option value="technical">مشكلة تقنية</option>
                        <option value="account">مشكلة في الحساب</option>
                        <option value="suggestion">اقتراح أو تحسين</option>
                        <option value="complaint">شكوى</option>
                        <option value="general">استفسار عام</option>
                        <option value="partnership">شراكة أو تعاون</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        الرسالة *
                      </label>
                      <textarea
                        placeholder="اكتب رسالتك هنا..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-naebak-green focus:border-transparent resize-none"
                        required
                      />
                      <div className="text-xs text-gray-500 text-left">
                        {formData.message.length}/1000 حرف
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-naebak-green hover:bg-naebak-green/90"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* معلومات الاتصال */}
            <div className="space-y-6">
              
              {/* معلومات الاتصال */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-naebak-green">
                    معلومات الاتصال
                  </CardTitle>
                  <CardDescription>
                    يمكنك التواصل معنا من خلال الوسائل التالية
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-naebak-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@naebak.com</p>
                      <p className="text-gray-600">support@naebak.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-naebak-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">الهاتف</h3>
                      <p className="text-gray-600">+20 2 1234 5678</p>
                      <p className="text-gray-600">+20 10 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-naebak-green rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">العنوان</h3>
                      <p className="text-gray-600">
                        شارع التحرير، وسط البلد<br />
                        القاهرة، جمهورية مصر العربية
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-naebak-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">ساعات العمل</h3>
                      <p className="text-gray-600">
                        الأحد - الخميس: 9:00 ص - 5:00 م<br />
                        الجمعة - السبت: مغلق
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* الأسئلة الشائعة */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-naebak-green">
                    الأسئلة الشائعة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        كيف يمكنني التسجيل في المنصة؟
                      </h4>
                      <p className="text-gray-600 text-sm">
                        يمكنك التسجيل من خلال الصفحة الرئيسية باستخدام بريدك الإلكتروني أو حساب Google.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        هل يمكنني تقديم شكوى بدون تسجيل؟
                      </h4>
                      <p className="text-gray-600 text-sm">
                        لا، يجب التسجيل أولاً لضمان الأمان ومتابعة الشكاوى.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        كم يستغرق الرد على الرسائل؟
                      </h4>
                      <p className="text-gray-600 text-sm">
                        نحاول الرد خلال 24-48 ساعة من استلام الرسالة.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <p className="text-sm text-gray-600 text-center">
                      لمزيد من الأسئلة، راجع صفحة{' '}
                      <a href="/faq" className="text-naebak-green hover:underline">
                        الأسئلة والأجوبة
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* وسائل التواصل الاجتماعي */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-naebak-green">
                    تابعنا على وسائل التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="فيسبوك"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label="تويتر"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                      aria-label="إنستجرام"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                      aria-label="يوتيوب"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
