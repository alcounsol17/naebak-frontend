import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import NewsTicker from '@/components/ui/news-ticker'
import { Users, MessageSquare, FileText, Star, Award, Target } from 'lucide-react'

export default function AboutPage() {
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
              من نحن
            </h1>
            <p className="text-lg md:text-xl">
              تعرف على منصة نائبك ورسالتنا
            </p>
          </div>
        </div>
      </section>
      
      {/* الشريط الإخباري */}
      <NewsTicker />
      
      {/* المحتوى الرئيسي */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* مقدمة */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              منصة نائبك - جسر التواصل بين المواطن والبرلمان
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              منصة نائبك هي المنصة الرسمية للتواصل بين المواطنين وأعضاء مجلس النواب ومجلس الشيوخ والمرشحين. 
              نهدف إلى تعزيز المشاركة السياسية وتحسين التواصل بين الشعب وممثليه في البرلمان.
            </p>
          </div>

          {/* الرؤية والرسالة */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Target className="h-6 w-6 mr-2" />
                  رؤيتنا
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون المنصة الرائدة في مصر والمنطقة العربية لتعزيز التواصل الديمقراطي بين المواطنين 
                  وممثليهم في البرلمان، وبناء جسور الثقة والشفافية في العملية السياسية والتشريعية.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  رسالتنا
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  تمكين المواطنين من التواصل الفعال مع نوابهم، وتقديم منصة آمنة وشفافة لعرض المشاكل والاقتراحات، 
                  ومتابعة الأداء البرلماني، مما يساهم في تطوير المناخ التشريعي وتحسين أداء الحكومة.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* خدماتنا */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              خدماتنا
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-naebak-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">التواصل المباشر</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    إرسال واستقبال الرسائل مع النواب والمرشحين بحد أقصى 500 حرف
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-naebak-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">تقديم الشكاوى</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    تقديم الشكاوى مع المرفقات ومتابعة حلها من خلال النواب المختصين
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-naebak-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">تقييم الأداء</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    تقييم أداء النواب بالنجوم ومتابعة إحصائيات حل الشكاوى
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-naebak-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">معلومات شاملة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    الاطلاع على البرامج الانتخابية والإنجازات والفعاليات
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* إحصائيات المنصة */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              إحصائيات المنصة
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">596</div>
                <div className="text-gray-600">عضو برلمان</div>
                <div className="text-sm text-gray-500">مجلس النواب والشيوخ</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">15,000+</div>
                <div className="text-gray-600">مواطن مسجل</div>
                <div className="text-sm text-gray-500">مستخدم نشط</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">8,500+</div>
                <div className="text-gray-600">شكوى مقدمة</div>
                <div className="text-sm text-gray-500">تم حل 75% منها</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">12,000+</div>
                <div className="text-gray-600">رسالة متبادلة</div>
                <div className="text-sm text-gray-500">تواصل فعال</div>
              </div>
            </div>
          </div>

          {/* أهدافنا */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              أهدافنا
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-naebak-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-900 mb-2">تعزيز المشاركة السياسية</h4>
                    <p className="text-gray-600 text-sm">
                      تمكين المواطنين من المشاركة الفعالة في العملية السياسية والتشريعية
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-naebak-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-900 mb-2">تحسين التواصل</h4>
                    <p className="text-gray-600 text-sm">
                      بناء جسور تواصل قوية بين المواطنين وممثليهم في البرلمان
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-naebak-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-900 mb-2">الشفافية والمساءلة</h4>
                    <p className="text-gray-600 text-sm">
                      توفير منصة شفافة لمتابعة أداء النواب ومساءلتهم
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-naebak-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-900 mb-2">حل المشاكل</h4>
                    <p className="text-gray-600 text-sm">
                      توفير آلية فعالة لعرض مشاكل المواطنين ومتابعة حلها
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-naebak-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-900 mb-2">التطوير المستمر</h4>
                    <p className="text-gray-600 text-sm">
                      تطوير المناخ التشريعي وتحسين أداء الحكومة بالتبعية
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-naebak-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-900 mb-2">نقل نبض الشارع</h4>
                    <p className="text-gray-600 text-sm">
                      نقل آراء ومطالب المواطنين بقوة إلى ممثليهم في البرلمان
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* دعوة للعمل */}
          <div className="bg-naebak-green rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              انضم إلى منصة نائبك اليوم
            </h3>
            <p className="text-lg mb-6">
              كن جزءاً من التغيير وساهم في تطوير مجتمعك من خلال التواصل الفعال مع نوابك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/login" 
                className="bg-white text-naebak-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                سجل الآن
              </a>
              <a 
                href="/representatives" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-naebak-green transition-colors"
              >
                تصفح المرشحين
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
