import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import NewsTicker from '@/components/ui/news-ticker'
import { FileText, Users, AlertCircle, Scale, Ban, CheckCircle, XCircle, Clock } from 'lucide-react'

export default function TermsPage() {
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
              الشروط والأحكام
            </h1>
            <p className="text-lg md:text-xl">
              القواعد والأحكام المنظمة لاستخدام منصة نائبك
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
              <Scale className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              شروط وأحكام الاستخدام
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              مرحباً بك في منصة نائبك. باستخدامك لهذه المنصة، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
              يرجى قراءتها بعناية قبل استخدام خدماتنا.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              آخر تحديث: 22 سبتمبر 2025 | سارية المفعول من: 1 أكتوبر 2025
            </div>
          </div>

          {/* أقسام الشروط والأحكام */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* التعريفات */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <FileText className="h-6 w-6 mr-2" />
                  التعريفات والمصطلحات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">المنصة:</h4>
                      <p className="text-gray-600 text-sm">موقع وتطبيق نائبك الإلكتروني وجميع خدماته</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">المستخدم:</h4>
                      <p className="text-gray-600 text-sm">أي شخص يستخدم المنصة سواء مسجل أو زائر</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">المواطن:</h4>
                      <p className="text-gray-600 text-sm">المستخدم المسجل من عامة الشعب</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">النائب:</h4>
                      <p className="text-gray-600 text-sm">عضو مجلس النواب أو الشيوخ أو المرشح لهما</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">المحتوى:</h4>
                      <p className="text-gray-600 text-sm">جميع النصوص والصور والملفات المنشورة</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">الخدمات:</h4>
                      <p className="text-gray-600 text-sm">جميع الميزات والوظائف المتاحة على المنصة</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* قبول الشروط */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  قبول الشروط والأحكام
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">بموافقتك على هذه الشروط:</h4>
                  <ul className="text-green-700 space-y-1 mr-4">
                    <li>• تؤكد أنك بالغ (18 سنة فأكثر) ومؤهل قانونياً للدخول في هذه الاتفاقية</li>
                    <li>• تتعهد بالالتزام بجميع القوانين المحلية والدولية المعمول بها</li>
                    <li>• توافق على استخدام المنصة للأغراض المشروعة فقط</li>
                    <li>• تقر بأنك قرأت وفهمت سياسة الخصوصية</li>
                  </ul>
                </div>
                
                <p className="text-gray-600">
                  إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام المنصة. 
                  استمرارك في الاستخدام يعتبر موافقة صريحة على جميع الشروط.
                </p>
              </CardContent>
            </Card>

            {/* التسجيل والحسابات */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  التسجيل وإدارة الحسابات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">متطلبات التسجيل:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• تقديم معلومات صحيحة ومحدثة</li>
                    <li>• استخدام بريد إلكتروني صالح وفعال</li>
                    <li>• اختيار كلمة مرور قوية وآمنة</li>
                    <li>• التحقق من الهوية عند الطلب</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">مسؤوليات المستخدم:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• الحفاظ على سرية بيانات الدخول</li>
                    <li>• إبلاغنا فوراً عن أي استخدام غير مصرح به</li>
                    <li>• تحديث المعلومات الشخصية عند تغييرها</li>
                    <li>• عدم مشاركة الحساب مع أشخاص آخرين</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">أنواع الحسابات:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-blue-800">مواطن</h5>
                      <p className="text-blue-700 text-xs">للمواطنين العاديين</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Scale className="h-6 w-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-blue-800">نائب</h5>
                      <p className="text-blue-700 text-xs">للنواب والمرشحين</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-blue-800">إداري</h5>
                      <p className="text-blue-700 text-xs">لإدارة المنصة</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* قواعد الاستخدام */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  قواعد وآداب الاستخدام
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-green-700">✅ الاستخدام المسموح:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• التواصل المهذب والبناء مع النواب</li>
                    <li>• تقديم الشكاوى والاقتراحات المشروعة</li>
                    <li>• تقييم أداء النواب بموضوعية</li>
                    <li>• مشاركة المعلومات الصحيحة والمفيدة</li>
                    <li>• احترام آراء المستخدمين الآخرين</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-red-700">❌ الاستخدام المحظور:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• نشر محتوى مسيء أو تحريضي أو مخل بالآداب</li>
                    <li>• التنمر أو التحرش أو التهديد</li>
                    <li>• نشر معلومات كاذبة أو مضللة</li>
                    <li>• انتهاك حقوق الملكية الفكرية</li>
                    <li>• محاولة اختراق أو تعطيل المنصة</li>
                    <li>• إنشاء حسابات وهمية أو متعددة</li>
                    <li>• استخدام المنصة لأغراض تجارية غير مصرح بها</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* حدود الخدمة */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  حدود وقيود الخدمة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">حدود الرسائل:</h4>
                    <ul className="text-gray-600 space-y-1 mr-4">
                      <li>• حد أقصى 500 حرف للرسالة الواحدة</li>
                      <li>• لا يُسمح بالمرفقات في الرسائل</li>
                      <li>• عدد محدود من الرسائل يومياً</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">حدود الشكاوى:</h4>
                    <ul className="text-gray-600 space-y-1 mr-4">
                      <li>• حد أقصى 1500 حرف للشكوى</li>
                      <li>• حد أقصى 10 مرفقات (صور/PDF/Word)</li>
                      <li>• رابط يوتيوب واحد مسموح</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">تنبيه مهم:</h4>
                  <p className="text-yellow-700">
                    نحتفظ بالحق في تعديل هذه الحدود أو فرض قيود إضافية حسب الحاجة لضمان جودة الخدمة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* الملكية الفكرية */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  الملكية الفكرية وحقوق الطبع
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">حقوق المنصة:</h4>
                  <p className="text-gray-600 mb-3">
                    جميع حقوق الملكية الفكرية في المنصة (التصميم، الشعار، النصوص، البرمجيات) 
                    محفوظة لمنصة نائبك ولا يجوز استخدامها بدون إذن مكتوب.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">حقوق المستخدم:</h4>
                  <p className="text-gray-600 mb-3">
                    تحتفظ بحقوق الملكية في المحتوى الذي تنشره، لكنك تمنحنا ترخيصاً لاستخدامه 
                    وعرضه على المنصة وفقاً لهذه الشروط.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">احترام حقوق الآخرين:</h4>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• لا تنشر محتوى محمي بحقوق طبع بدون إذن</li>
                    <li>• احترم العلامات التجارية للآخرين</li>
                    <li>• أبلغ عن أي انتهاك لحقوق الملكية الفكرية</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* المسؤولية والضمانات */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  المسؤولية وإخلاء الضمان
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">إخلاء المسؤولية:</h4>
                  <ul className="text-red-700 space-y-1 mr-4">
                    <li>• المنصة تُقدم "كما هي" بدون ضمانات صريحة أو ضمنية</li>
                    <li>• لا نضمن دقة أو اكتمال المعلومات المنشورة من المستخدمين</li>
                    <li>• لا نتحمل مسؤولية الأضرار الناتجة عن استخدام المنصة</li>
                    <li>• لا نضمن توفر الخدمة بشكل مستمر أو خالٍ من الأخطاء</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">مسؤولية المستخدم:</h4>
                  <p className="text-gray-600">
                    أنت مسؤول بالكامل عن المحتوى الذي تنشره وعن أي أضرار قد تنتج عن استخدامك للمنصة. 
                    توافق على تعويضنا عن أي مطالبات أو أضرار ناتجة عن انتهاكك لهذه الشروط.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* الإنهاء والتعليق */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  إنهاء وتعليق الحسابات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">حقك في الإنهاء:</h4>
                  <p className="text-gray-600 mb-3">
                    يمكنك إنهاء حسابك في أي وقت من خلال إعدادات الحساب أو التواصل معنا. 
                    سيتم حذف بياناتك وفقاً لسياسة الخصوصية.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">حقنا في الإنهاء:</h4>
                  <p className="text-gray-600 mb-3">
                    نحتفظ بالحق في تعليق أو إنهاء حسابك فوراً في حالة:
                  </p>
                  <ul className="text-gray-600 space-y-1 mr-4">
                    <li>• انتهاك هذه الشروط والأحكام</li>
                    <li>• السلوك المسيء أو المضر بالمستخدمين الآخرين</li>
                    <li>• محاولة الإضرار بأمان المنصة</li>
                    <li>• استخدام المنصة لأنشطة غير قانونية</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">إجراءات التدرج:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="text-center">
                      <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-orange-800">تحذير</h5>
                      <p className="text-orange-700 text-xs">للمخالفات البسيطة</p>
                    </div>
                    
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-orange-800">تعليق مؤقت</h5>
                      <p className="text-orange-700 text-xs">للمخالفات المتكررة</p>
                    </div>
                    
                    <div className="text-center">
                      <Ban className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-orange-800">حظر دائم</h5>
                      <p className="text-orange-700 text-xs">للمخالفات الجسيمة</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* القانون المعمول به */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  القانون المعمول به وحل النزاعات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">القانون المعمول به:</h4>
                  <p className="text-gray-600 mb-3">
                    تخضع هذه الشروط والأحكام للقوانين المصرية، وتُحل أي نزاعات وفقاً للقانون المصري 
                    أمام المحاكم المختصة في جمهورية مصر العربية.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">حل النزاعات:</h4>
                  <p className="text-gray-600 mb-3">
                    نشجع على حل النزاعات ودياً أولاً من خلال التواصل المباشر معنا. 
                    في حالة عدم التوصل لحل، يمكن اللجوء للوسائل القانونية المناسبة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* التعديلات */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  تعديل الشروط والأحكام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سنقوم بإشعارك بالتغييرات الجوهرية من خلال:
                </p>
                
                <ul className="text-gray-600 space-y-1 mr-4 mb-4">
                  <li>• إشعار بارز على المنصة لمدة 30 يوماً على الأقل</li>
                  <li>• رسالة بريد إلكتروني إلى جميع المستخدمين المسجلين</li>
                  <li>• تحديث تاريخ "آخر تحديث" و "سارية المفعول من"</li>
                </ul>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700">
                    <strong>مهم:</strong> استمرارك في استخدام المنصة بعد سريان التعديلات يعني موافقتك عليها. 
                    إذا كنت لا توافق على التعديلات، يمكنك إنهاء حسابك قبل سريانها.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* التواصل */}
            <Card className="shadow-lg border-naebak-green border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-naebak-green">
                  التواصل والاستفسارات القانونية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  لأي استفسارات حول هذه الشروط والأحكام أو المسائل القانونية المتعلقة بالمنصة:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">الشؤون القانونية:</h4>
                    <p className="text-naebak-green">legal@naebak.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">الدعم العام:</h4>
                    <p className="text-naebak-green">support@naebak.com</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    <strong>العنوان البريدي:</strong> شارع التحرير، وسط البلد، القاهرة، جمهورية مصر العربية
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
