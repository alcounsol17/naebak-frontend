import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import NewsTicker from '@/components/ui/news-ticker'
import { Shield, Eye, Lock, UserCheck, Database, Globe, AlertTriangle, Mail } from 'lucide-react'

export default function PrivacyPage() {
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
              سياسات الخصوصية
            </h1>
            <p className="text-lg md:text-xl">
              حماية بياناتك وخصوصيتك أولويتنا القصوى
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
            <div className="w-16 h-16 bg-naebak-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              التزامنا بحماية خصوصيتك
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              في منصة نائبك، نحن ملتزمون بحماية خصوصية مستخدمينا وضمان أمان بياناتهم الشخصية. 
              هذه السياسة توضح كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              آخر تحديث: 22 سبتمبر 2025
            </div>
          </div>

          {/* أقسام السياسة */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* المعلومات التي نجمعها */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Database className="h-6 w-6 mr-2" />
                  المعلومات التي نجمعها
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">المعلومات الشخصية:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• الاسم الكامل ورقم الهاتف</li>
                    <li>• عنوان البريد الإلكتروني</li>
                    <li>• المحافظة والدائرة الانتخابية</li>
                    <li>• الرقم القومي (للتحقق من الهوية)</li>
                    <li>• الصورة الشخصية (اختيارية)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">معلومات الاستخدام:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• عنوان IP وموقع الجهاز</li>
                    <li>• نوع المتصفح ونظام التشغيل</li>
                    <li>• أوقات الزيارة والصفحات المُشاهدة</li>
                    <li>• التفاعلات مع المحتوى والميزات</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">المحتوى المُنشأ:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• الرسائل المرسلة للنواب (حد أقصى 500 حرف)</li>
                    <li>• الشكاوى المقدمة (حد أقصى 1500 حرف)</li>
                    <li>• المرفقات (صور، مستندات PDF/Word)</li>
                    <li>• التقييمات والتعليقات</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* كيفية استخدام المعلومات */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <UserCheck className="h-6 w-6 mr-2" />
                  كيفية استخدام المعلومات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">الأغراض الأساسية:</h4>
                    <ul className="text-gray-600 space-y-1 mr-4">
                      <li>• تسجيل الدخول وإدارة الحساب</li>
                      <li>• تسهيل التواصل مع النواب</li>
                      <li>• معالجة الشكاوى والاقتراحات</li>
                      <li>• عرض المحتوى المخصص</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">التحسينات:</h4>
                    <ul className="text-gray-600 space-y-1 mr-4">
                      <li>• تحسين تجربة المستخدم</li>
                      <li>• تطوير ميزات جديدة</li>
                      <li>• إنشاء إحصائيات مجهولة</li>
                      <li>• ضمان أمان المنصة</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* مشاركة المعلومات */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Globe className="h-6 w-6 mr-2" />
                  مشاركة المعلومات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">التزامنا:</h4>
                  <p className="text-green-700">
                    نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تجارية.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">الحالات الاستثنائية للمشاركة:</h4>
                  <ul className="text-gray-600 space-y-2 mr-4">
                    <li>• <strong>مع النواب:</strong> عند إرسال رسائل أو شكاوى (الاسم والمحافظة فقط)</li>
                    <li>• <strong>الالتزام القانوني:</strong> عند طلب السلطات المختصة بموجب القانون</li>
                    <li>• <strong>حماية الحقوق:</strong> لحماية حقوقنا أو حقوق المستخدمين الآخرين</li>
                    <li>• <strong>مقدمو الخدمات:</strong> شركات الاستضافة والدعم التقني (بموجب اتفاقيات سرية)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* أمان البيانات */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Lock className="h-6 w-6 mr-2" />
                  أمان وحماية البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">التدابير التقنية:</h4>
                    <ul className="text-gray-600 space-y-1 mr-4">
                      <li>• تشفير SSL/TLS لجميع البيانات</li>
                      <li>• قواعد بيانات محمية ومشفرة</li>
                      <li>• مراقبة أمنية على مدار الساعة</li>
                      <li>• نسخ احتياطية منتظمة</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">التدابير الإدارية:</h4>
                    <ul className="text-gray-600 space-y-1 mr-4">
                      <li>• وصول محدود للموظفين المخولين</li>
                      <li>• تدريب منتظم على الأمان</li>
                      <li>• مراجعات أمنية دورية</li>
                      <li>• سياسات صارمة لحماية البيانات</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* حقوق المستخدم */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Eye className="h-6 w-6 mr-2" />
                  حقوقك في البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  لديك الحق في التحكم في بياناتك الشخصية، ويمكنك ممارسة الحقوق التالية:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">الوصول والاطلاع</h4>
                    <p className="text-gray-600 text-sm">
                      طلب نسخة من جميع البيانات الشخصية المحفوظة لديك
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">التصحيح والتحديث</h4>
                    <p className="text-gray-600 text-sm">
                      تعديل أو تصحيح أي معلومات غير صحيحة أو قديمة
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">الحذف</h4>
                    <p className="text-gray-600 text-sm">
                      طلب حذف حسابك وجميع البيانات المرتبطة به
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">تقييد المعالجة</h4>
                    <p className="text-gray-600 text-sm">
                      طلب تقييد استخدام بياناتك في حالات معينة
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ملفات تعريف الارتباط */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  ملفات تعريف الارتباط (Cookies)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على المنصة:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">ملفات ضرورية:</h4>
                    <p className="text-gray-600 text-sm">لضمان عمل المنصة بشكل صحيح وآمن</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">ملفات الأداء:</h4>
                    <p className="text-gray-600 text-sm">لتحليل استخدام المنصة وتحسين الأداء</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">ملفات التفضيلات:</h4>
                    <p className="text-gray-600 text-sm">لحفظ إعداداتك وتفضيلاتك الشخصية</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700 text-sm">
                    يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك، 
                    لكن تعطيلها قد يؤثر على وظائف المنصة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* الأطفال والقُصر */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  حماية الأطفال والقُصر
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-semibold mb-2">
                    تنبيه مهم:
                  </p>
                  <p className="text-yellow-700">
                    منصة نائبك مخصصة للمواطنين البالغين (18 سنة فأكثر) فقط. 
                    نحن لا نجمع عمداً معلومات شخصية من الأطفال دون سن 18 عاماً. 
                    إذا علمنا بجمع معلومات من طفل، سنقوم بحذفها فوراً.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* التغييرات على السياسة */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  التغييرات على هذه السياسة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  قد نقوم بتحديث سياسة الخصوصية من وقت لآخر لتعكس التغييرات في ممارساتنا أو القوانين المعمول بها. 
                  سنقوم بإشعارك بأي تغييرات جوهرية من خلال:
                </p>
                
                <ul className="text-gray-600 space-y-1 mr-4 mb-4">
                  <li>• إشعار بارز على المنصة</li>
                  <li>• رسالة بريد إلكتروني إلى عنوانك المسجل</li>
                  <li>• تحديث تاريخ "آخر تحديث" أعلى هذه الصفحة</li>
                </ul>
                
                <p className="text-gray-600">
                  استمرارك في استخدام المنصة بعد التغييرات يعني موافقتك على السياسة المحدثة.
                </p>
              </CardContent>
            </Card>

            {/* التواصل معنا */}
            <Card className="shadow-lg border-naebak-green border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Mail className="h-6 w-6 mr-2" />
                  تواصل معنا بخصوص الخصوصية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية أو معالجة بياناتك الشخصية، 
                  يرجى التواصل معنا:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">البريد الإلكتروني:</h4>
                    <p className="text-naebak-green">privacy@naebak.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">الهاتف:</h4>
                    <p className="text-naebak-green">+20 2 1234 5678</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    <strong>مسؤول حماية البيانات:</strong> فريق الأمان والخصوصية - منصة نائبك
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
