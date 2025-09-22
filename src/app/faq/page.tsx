'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import NewsTicker from '@/components/ui/news-ticker'
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageSquare, FileText, Star, Users, Settings, Shield } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  tags: string[]
}

const faqData: FAQItem[] = [
  // أسئلة عامة
  {
    id: 1,
    question: "ما هي منصة نائبك وما الهدف منها؟",
    answer: "منصة نائبك هي منصة إلكترونية تهدف إلى تعزيز التواصل بين المواطنين وأعضاء مجلسي النواب والشيوخ والمرشحين لهما. تتيح المنصة للمواطنين إرسال الرسائل، تقديم الشكاوى، تقييم أداء النواب، ومتابعة البرامج الانتخابية والإنجازات.",
    category: "عام",
    tags: ["منصة", "هدف", "تواصل"]
  },
  {
    id: 2,
    question: "من يمكنه استخدام منصة نائبك؟",
    answer: "يمكن لجميع المواطنين المصريين البالغين (18 سنة فأكثر) استخدام المنصة. كما يمكن لأعضاء مجلسي النواب والشيوخ والمرشحين التسجيل للتواصل مع المواطنين وإدارة صفحاتهم الشخصية.",
    category: "عام",
    tags: ["مستخدمين", "عمر", "مواطنين"]
  },
  {
    id: 3,
    question: "هل استخدام المنصة مجاني؟",
    answer: "نعم، جميع خدمات منصة نائبك مجانية بالكامل للمواطنين والنواب. لا توجد أي رسوم للتسجيل أو استخدام أي من الميزات المتاحة.",
    category: "عام",
    tags: ["مجاني", "رسوم", "تكلفة"]
  },

  // التسجيل والحساب
  {
    id: 4,
    question: "كيف يمكنني إنشاء حساب جديد؟",
    answer: "يمكنك إنشاء حساب جديد من خلال الضغط على زر 'تسجيل جديد' في الصفحة الرئيسية، ثم ملء البيانات المطلوبة (الاسم، البريد الإلكتروني، رقم الهاتف، المحافظة). يمكنك أيضاً التسجيل باستخدام حساب Google الخاص بك.",
    category: "الحساب",
    tags: ["تسجيل", "حساب جديد", "google"]
  },
  {
    id: 5,
    question: "ماذا أفعل إذا نسيت كلمة المرور؟",
    answer: "اضغط على رابط 'نسيت كلمة المرور؟' في صفحة تسجيل الدخول، ثم أدخل بريدك الإلكتروني. ستصلك رسالة تحتوي على رابط لإعادة تعيين كلمة المرور. اتبع التعليمات في الرسالة لإنشاء كلمة مرور جديدة.",
    category: "الحساب",
    tags: ["كلمة مرور", "نسيان", "استرجاع"]
  },
  {
    id: 6,
    question: "كيف يمكنني تحديث بياناتي الشخصية؟",
    answer: "بعد تسجيل الدخول، اذهب إلى 'إعدادات الحساب' من القائمة الرئيسية. يمكنك تحديث جميع بياناتك الشخصية مثل الاسم، رقم الهاتف، المحافظة، والصورة الشخصية. لا تنس الضغط على 'حفظ التغييرات' بعد التحديث.",
    category: "الحساب",
    tags: ["تحديث", "بيانات شخصية", "إعدادات"]
  },

  // الرسائل
  {
    id: 7,
    question: "كيف يمكنني إرسال رسالة إلى نائب؟",
    answer: "اذهب إلى صفحة المرشحين، اختر النائب المطلوب، ثم اضغط على 'إرسال رسالة'. اكتب رسالتك (حد أقصى 500 حرف) واضغط 'إرسال'. ستظهر الرسالة في صندوق رسائلك وسيتم إشعار النائب بها.",
    category: "الرسائل",
    tags: ["إرسال رسالة", "نائب", "500 حرف"]
  },
  {
    id: 8,
    question: "لماذا يوجد حد أقصى 500 حرف للرسائل؟",
    answer: "تم وضع حد 500 حرف لضمان أن تكون الرسائل مختصرة ومركزة، مما يساعد النواب على قراءة والرد على أكبر عدد ممكن من الرسائل. هذا يضمن تواصل فعال وسريع بين المواطنين والنواب.",
    category: "الرسائل",
    tags: ["حد أقصى", "500 حرف", "سبب"]
  },
  {
    id: 9,
    question: "هل يمكنني إرفاق ملفات مع الرسائل؟",
    answer: "لا، لا يُسمح بإرفاق ملفات مع الرسائل. إذا كنت تحتاج لإرسال مستندات أو صور، يمكنك استخدام نظام الشكاوى الذي يسمح بإرفاق حتى 10 ملفات.",
    category: "الرسائل",
    tags: ["مرفقات", "ملفات", "شكاوى"]
  },

  // الشكاوى
  {
    id: 10,
    question: "ما الفرق بين الرسالة والشكوى؟",
    answer: "الرسالة هي تواصل مباشر مع النائب (500 حرف، بدون مرفقات). الشكوى تُرسل للإدارة أولاً (1500 حرف، مع إمكانية إرفاق 10 ملفات ورابط يوتيوب)، ثم يقوم الأدمن بتوجيهها للنائب المناسب للمساعدة في حلها.",
    category: "الشكاوى",
    tags: ["فرق", "رسالة", "شكوى"]
  },
  {
    id: 11,
    question: "كيف أتابع حالة شكواي؟",
    answer: "اذهب إلى 'إدارة الشكاوى' في حسابك لمتابعة جميع الشكاوى التي قدمتها. ستجد حالة كل شكوى (قيد المراجعة، تم التوجيه، قيد الحل، تم الحل) مع تفاصيل المتابعة والردود.",
    category: "الشكاوى",
    tags: ["متابعة", "حالة", "إدارة شكاوى"]
  },
  {
    id: 12,
    question: "ما أنواع الملفات المسموح إرفاقها مع الشكوى؟",
    answer: "يمكنك إرفاق الصور (JPG, PNG)، ملفات PDF، وملفات Word (DOC, DOCX). الحد الأقصى 10 ملفات لكل شكوى. كما يمكنك إضافة رابط فيديو يوتيوب واحد إذا كان ذا صلة بالشكوى.",
    category: "الشكاوى",
    tags: ["مرفقات", "أنواع ملفات", "يوتيوب"]
  },

  // التقييمات
  {
    id: 13,
    question: "كيف يعمل نظام تقييم النواب؟",
    answer: "يمكنك تقييم أي نائب من 1 إلى 5 نجوم. التقييم يظهر في صفحة النائب وفي كارت المرشح في صفحة المرشحين. التقييمات تساعد المواطنين الآخرين في معرفة آراء الناس حول أداء النواب.",
    category: "التقييمات",
    tags: ["تقييم", "نجوم", "أداء"]
  },
  {
    id: 14,
    question: "هل يمكنني تغيير تقييمي لنائب معين؟",
    answer: "نعم، يمكنك تعديل تقييمك في أي وقت. اذهب إلى صفحة النائب واضغط على النجوم لتحديث تقييمك. التقييم الجديد سيحل محل التقييم السابق.",
    category: "التقييمات",
    tags: ["تغيير تقييم", "تعديل", "تحديث"]
  },
  {
    id: 15,
    question: "ما معنى 'مرشح مميز'؟",
    answer: "المرشح المميز هو من حصل على تقييم 4.5 نجوم أو أكثر من 5000 مقيم على الأقل. هؤلاء المرشحون يظهرون بعلامة مميزة ويتم عرضهم في أوائل نتائج البحث في صفحة المرشحين.",
    category: "التقييمات",
    tags: ["مرشح مميز", "4.5 نجوم", "5000 مقيم"]
  },

  // الأمان والخصوصية
  {
    id: 16,
    question: "هل بياناتي آمنة على المنصة؟",
    answer: "نعم، نحن نستخدم أحدث تقنيات الأمان لحماية بياناتك. جميع البيانات مشفرة، ونستخدم بروتوكولات SSL آمنة. لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات المحددة في سياسة الخصوصية.",
    category: "الأمان",
    tags: ["أمان", "تشفير", "خصوصية"]
  },
  {
    id: 17,
    question: "من يمكنه رؤية رسائلي وشكاواي؟",
    answer: "الرسائل يراها النائب المرسل إليه والإدارة للمراقبة. الشكاوى يراها الأدمن والنائب المُوجهة إليه الشكوى. جميع المحادثات سرية ولا تُنشر علناً. اسمك ومحافظتك فقط يظهران للنائب، باقي البيانات محمية.",
    category: "الأمان",
    tags: ["خصوصية", "من يرى", "سرية"]
  },

  // المشاكل التقنية
  {
    id: 18,
    question: "المنصة لا تعمل بشكل صحيح، ماذا أفعل؟",
    answer: "جرب الخطوات التالية: 1) تحديث الصفحة (F5)، 2) مسح ذاكرة التخزين المؤقت للمتصفح، 3) تجربة متصفح آخر، 4) التأكد من اتصال الإنترنت. إذا استمرت المشكلة، تواصل معنا عبر صفحة 'اتصل بنا'.",
    category: "تقني",
    tags: ["مشاكل تقنية", "لا تعمل", "حلول"]
  },
  {
    id: 19,
    question: "لا أستطيع تسجيل الدخول، ما الحل؟",
    answer: "تأكد من صحة البريد الإلكتروني وكلمة المرور. جرب إعادة تعيين كلمة المرور. تأكد من تفعيل حسابك عبر الرسالة المرسلة لبريدك الإلكتروني عند التسجيل. إذا استمرت المشكلة، تواصل مع الدعم التقني.",
    category: "تقني",
    tags: ["تسجيل دخول", "مشكلة", "حل"]
  },

  // النواب والمرشحين
  {
    id: 20,
    question: "كيف يمكن للنائب إنشاء حساب؟",
    answer: "النواب والمرشحون يمكنهم التسجيل كمستخدم عادي ثم طلب ترقية الحساب لحساب نائب من خلال تقديم الوثائق المطلوبة. سيقوم الأدمن بمراجعة الطلب والموافقة عليه بعد التحقق من صحة البيانات.",
    category: "النواب",
    tags: ["نائب", "تسجيل", "ترقية حساب"]
  },
  {
    id: 21,
    question: "ماذا يعني 'Score' النائب؟",
    answer: "Score النائب هو عدد المشاكل والشكاوى التي ساعد في حلها. كلما حل النائب شكوى أو مشكلة، يزيد الـ Score بنقطة واحدة. هذا يساعد المواطنين في معرفة مدى نشاط النائب في حل مشاكل الناس.",
    category: "النواب",
    tags: ["score", "نقاط", "حل مشاكل"]
  }
]

const categories = ["الكل", "عام", "الحساب", "الرسائل", "الشكاوى", "التقييمات", "الأمان", "تقني", "النواب"]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "الكل" || faq.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "عام": return <HelpCircle className="h-4 w-4" />
      case "الحساب": return <Users className="h-4 w-4" />
      case "الرسائل": return <MessageSquare className="h-4 w-4" />
      case "الشكاوى": return <FileText className="h-4 w-4" />
      case "التقييمات": return <Star className="h-4 w-4" />
      case "الأمان": return <Shield className="h-4 w-4" />
      case "تقني": return <Settings className="h-4 w-4" />
      case "النواب": return <Users className="h-4 w-4" />
      default: return <HelpCircle className="h-4 w-4" />
    }
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
              الأسئلة والأجوبة
            </h1>
            <p className="text-lg md:text-xl">
              إجابات شاملة لجميع استفساراتك حول منصة نائبك
            </p>
          </div>
        </div>
      </section>
      
      {/* الشريط الإخباري */}
      <NewsTicker />
      
      {/* المحتوى الرئيسي */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* مقدمة وبحث */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="w-16 h-16 bg-naebak-green rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              كيف يمكننا مساعدتك؟
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              ابحث في قاعدة الأسئلة الشائعة أو تصفح الفئات للعثور على إجابات لاستفساراتك
            </p>
            
            {/* شريط البحث */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="ابحث في الأسئلة والأجوبة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 py-3 text-lg"
              />
            </div>
            
            {/* فلاتر الفئات */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-naebak-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category !== "الكل" && getCategoryIcon(category)}
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* النتائج */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    لم نجد نتائج مطابقة
                  </h3>
                  <p className="text-gray-600 mb-4">
                    جرب البحث بكلمات مختلفة أو تصفح الفئات المختلفة
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("الكل")
                    }}
                    className="bg-naebak-green text-white px-6 py-2 rounded-lg hover:bg-naebak-green/90 transition-colors"
                  >
                    عرض جميع الأسئلة
                  </button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <p className="text-gray-600">
                    عُثر على <span className="font-semibold text-naebak-green">{filteredFAQs.length}</span> سؤال
                    {selectedCategory !== "الكل" && (
                      <span> في فئة <span className="font-semibold text-naebak-green">{selectedCategory}</span></span>
                    )}
                  </p>
                </div>
                
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => toggleExpanded(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-8 h-8 bg-naebak-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            {getCategoryIcon(faq.category)}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-900 text-right">
                              {faq.question}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs bg-naebak-green/10 text-naebak-green px-2 py-1 rounded-full">
                                {faq.category}
                              </span>
                              {faq.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 mr-4">
                          {expandedItems.includes(faq.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    {expandedItems.includes(faq.id) && (
                      <CardContent className="pt-0">
                        <div className="border-t pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                          
                          {faq.tags.length > 2 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              <span className="text-sm text-gray-500">الكلمات المفتاحية:</span>
                              {faq.tags.slice(2).map((tag, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* قسم المساعدة الإضافية */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-r from-naebak-green to-naebak-green/80 text-white">
              <CardContent className="text-center py-12">
                <MessageSquare className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">
                  لم تجد إجابة لسؤالك؟
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  فريق الدعم لدينا جاهز لمساعدتك في أي وقت
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-white text-naebak-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    تواصل معنا
                  </a>
                  <a 
                    href="mailto:support@naebak.com" 
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-naebak-green transition-colors"
                  >
                    إرسال بريد إلكتروني
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* إحصائيات سريعة */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">{faqData.length}</div>
                <div className="text-gray-600 text-sm">سؤال وجواب</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">{categories.length - 1}</div>
                <div className="text-gray-600 text-sm">فئة مختلفة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">24/7</div>
                <div className="text-gray-600 text-sm">دعم متاح</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-naebak-green mb-2">95%</div>
                <div className="text-gray-600 text-sm">معدل الحل</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
