'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import NewsTicker from '@/components/ui/news-ticker'
import { Star, Award, CheckCircle, MessageSquare, FileText, Search, Filter } from 'lucide-react'

interface Representative {
  id: number
  name: string
  party: string
  district: string
  governorate: string
  gender: 'male' | 'female'
  electoralNumber?: string
  electoralSymbol?: string
  rating: number
  ratingCount: number
  solvedComplaints: number
  receivedComplaints: number
  isDistinguished: boolean
  profileImage: string
  bannerImage?: string
}

export default function RepresentativesPage() {
  const [representatives, setRepresentatives] = useState<Representative[]>([])
  const [filteredReps, setFilteredReps] = useState<Representative[]>([])
  const [loading, setLoading] = useState(true)
  
  // الفلاتر
  const [filters, setFilters] = useState({
    governorate: '',
    gender: '',
    party: '',
    name: ''
  })

  const governorates = [
    'القاهرة', 'الجيزة', 'الإسكندرية', 'الشرقية', 'المنوفية', 'القليوبية', 'البحيرة',
    'الغربية', 'كفر الشيخ', 'الدقهلية', 'دمياط', 'بورسعيد', 'الإسماعيلية', 'السويس',
    'شمال سيناء', 'جنوب سيناء', 'الفيوم', 'بني سويف', 'المنيا', 'أسيوط', 'سوهاج',
    'قنا', 'الأقصر', 'أسوان', 'البحر الأحمر', 'الوادي الجديد', 'مطروح'
  ]

  const parties = [
    'مستقبل وطن', 'الوفد', 'المصريين الأحرار', 'حماة الوطن', 'الجمهوري الشعبي',
    'المؤتمر', 'التجمع', 'الناصري', 'الإصلاح والتنمية', 'مستقل'
  ]

  // محاكاة جلب البيانات من قاعدة البيانات
  useEffect(() => {
    const fetchRepresentatives = async () => {
      setLoading(true)
      
      // محاكاة API call - في التطبيق الحقيقي سيتم جلب البيانات من الخادم
      const mockData: Representative[] = [
        {
          id: 1,
          name: 'د. أحمد محمد علي',
          party: 'مستقبل وطن',
          district: 'الدائرة الأولى',
          governorate: 'القاهرة',
          gender: 'male',
          electoralNumber: '1',
          electoralSymbol: '🏛️',
          rating: 4.8,
          ratingCount: 5550,
          solvedComplaints: 45,
          receivedComplaints: 52,
          isDistinguished: true,
          profileImage: '/placeholder-avatar.jpg'
        },
        {
          id: 2,
          name: 'د. فاطمة حسن محمود',
          party: 'الوفد',
          district: 'الدائرة الثانية',
          governorate: 'الجيزة',
          gender: 'female',
          electoralNumber: '2',
          electoralSymbol: '⚖️',
          rating: 4.6,
          ratingCount: 4200,
          solvedComplaints: 38,
          receivedComplaints: 41,
          isDistinguished: false,
          profileImage: '/placeholder-avatar.jpg'
        },
        {
          id: 3,
          name: 'المهندس محمود عبد الرحمن',
          party: 'المصريين الأحرار',
          district: 'الدائرة الثالثة',
          governorate: 'الإسكندرية',
          gender: 'male',
          electoralNumber: '3',
          electoralSymbol: '🔧',
          rating: 4.9,
          ratingCount: 6800,
          solvedComplaints: 62,
          receivedComplaints: 68,
          isDistinguished: true,
          profileImage: '/placeholder-avatar.jpg'
        },
        {
          id: 4,
          name: 'أ. سارة أحمد إبراهيم',
          party: 'حماة الوطن',
          district: 'الدائرة الرابعة',
          governorate: 'الشرقية',
          gender: 'female',
          electoralNumber: '4',
          electoralSymbol: '📚',
          rating: 4.3,
          ratingCount: 3900,
          solvedComplaints: 28,
          receivedComplaints: 35,
          isDistinguished: false,
          profileImage: '/placeholder-avatar.jpg'
        },
        {
          id: 5,
          name: 'د. خالد محمد سعد',
          party: 'مستقل',
          district: 'الدائرة الخامسة',
          governorate: 'المنوفية',
          gender: 'male',
          electoralNumber: '5',
          electoralSymbol: '🌟',
          rating: 4.7,
          ratingCount: 5200,
          solvedComplaints: 41,
          receivedComplaints: 47,
          isDistinguished: true,
          profileImage: '/placeholder-avatar.jpg'
        }
      ]

      // محاكاة تأخير الشبكة
      setTimeout(() => {
        setRepresentatives(mockData)
        setFilteredReps(mockData)
        setLoading(false)
      }, 1000)
    }

    fetchRepresentatives()
  }, [])

  // تطبيق الفلاتر
  useEffect(() => {
    let filtered = representatives

    if (filters.governorate) {
      filtered = filtered.filter(rep => rep.governorate === filters.governorate)
    }

    if (filters.gender) {
      filtered = filtered.filter(rep => rep.gender === filters.gender)
    }

    if (filters.party) {
      filtered = filtered.filter(rep => rep.party === filters.party)
    }

    if (filters.name) {
      filtered = filtered.filter(rep => 
        rep.name.toLowerCase().includes(filters.name.toLowerCase())
      )
    }

    // ترتيب المرشحين المميزين أولاً
    filtered.sort((a, b) => {
      if (a.isDistinguished && !b.isDistinguished) return -1
      if (!a.isDistinguished && b.isDistinguished) return 1
      return b.rating - a.rating
    })

    setFilteredReps(filtered)
  }, [filters, representatives])

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      governorate: '',
      gender: '',
      party: '',
      name: ''
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
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
              المرشحين والنواب
            </h1>
            <p className="text-lg md:text-xl">
              تعرف على ممثليك في البرلمان
            </p>
          </div>
        </div>
      </section>
      
      {/* الشريط الإخباري */}
      <NewsTicker />
      
      {/* قسم الفلاتر */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                البحث والتصفية
              </h2>
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="text-naebak-orange border-naebak-orange hover:bg-naebak-orange hover:text-white"
              >
                مسح الفلاتر
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* فلتر المحافظة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المحافظة
                </label>
                <select
                  value={filters.governorate}
                  onChange={(e) => handleFilterChange('governorate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-naebak-green focus:border-transparent"
                >
                  <option value="">جميع المحافظات</option>
                  {governorates.map((gov) => (
                    <option key={gov} value={gov}>{gov}</option>
                  ))}
                </select>
              </div>

              {/* فلتر النوع */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  النوع
                </label>
                <select
                  value={filters.gender}
                  onChange={(e) => handleFilterChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-naebak-green focus:border-transparent"
                >
                  <option value="">ذكر وأنثى</option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>

              {/* فلتر الحزب */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الحزب
                </label>
                <select
                  value={filters.party}
                  onChange={(e) => handleFilterChange('party', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-naebak-green focus:border-transparent"
                >
                  <option value="">جميع الأحزاب</option>
                  {parties.map((party) => (
                    <option key={party} value={party}>{party}</option>
                  ))}
                </select>
              </div>

              {/* فلتر الاسم */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  البحث بالاسم
                </label>
                <div className="relative">
                  <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="ابحث بالاسم..."
                    value={filters.name}
                    onChange={(e) => handleFilterChange('name', e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المرشحين */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-naebak-green mx-auto"></div>
              <p className="mt-4 text-gray-600">جاري تحميل المرشحين...</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  المرشحين والنواب ({filteredReps.length})
                </h2>
                <div className="text-sm text-gray-600">
                  {filteredReps.filter(rep => rep.isDistinguished).length} مرشح مميز
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredReps.map((rep) => (
                  <Card key={rep.id} className={`hover:shadow-lg transition-shadow duration-300 ${
                    rep.isDistinguished ? 'ring-2 ring-naebak-orange' : ''
                  }`}>
                    {rep.isDistinguished && (
                      <div className="bg-naebak-orange text-white text-xs font-medium px-3 py-1 rounded-t-lg flex items-center justify-center">
                        <Award className="h-3 w-3 mr-1" />
                        مرشح مميز
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-2">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                        <div className="w-full h-full bg-naebak-green flex items-center justify-center text-white text-2xl font-bold">
                          {rep.name.charAt(0)}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{rep.name}</CardTitle>
                      <CardDescription>
                        <div className="space-y-1">
                          <div className="text-naebak-green font-medium">{rep.party}</div>
                          <div className="text-sm">{rep.district} - {rep.governorate}</div>
                          {rep.electoralNumber && (
                            <div className="text-xs text-gray-500">
                              رقم انتخابي: {rep.electoralNumber} {rep.electoralSymbol}
                            </div>
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* التقييم */}
                      <div className="flex items-center justify-center mb-3">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          {renderStars(rep.rating)}
                        </div>
                        <span className="mr-2 text-sm font-medium">{rep.rating}</span>
                        <span className="text-xs text-gray-500">({rep.ratingCount.toLocaleString('ar-EG')})</span>
                      </div>

                      {/* إحصائيات الشكاوى */}
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="bg-green-50 p-2 rounded text-center">
                          <div className="font-semibold text-naebak-green">{rep.solvedComplaints}</div>
                          <div className="text-gray-600">شكوى محلولة</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="font-semibold text-gray-700">{rep.receivedComplaints}</div>
                          <div className="text-gray-600">شكوى مستلمة</div>
                        </div>
                      </div>

                      {/* أزرار التفاعل */}
                      <div className="space-y-2">
                        <Button 
                          asChild 
                          className="w-full bg-naebak-green hover:bg-naebak-green/90"
                        >
                          <Link href={`/${rep.name.replace(/\s+/g, '-')}`}>
                            عرض الصفحة الشخصية
                          </Link>
                        </Button>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-xs"
                          >
                            <MessageSquare className="h-3 w-3 mr-1" />
                            رسالة
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-xs"
                          >
                            <FileText className="h-3 w-3 mr-1" />
                            شكوى
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredReps.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    لا توجد نتائج
                  </h3>
                  <p className="text-gray-600 mb-4">
                    لم يتم العثور على مرشحين يطابقون معايير البحث
                  </p>
                  <Button 
                    onClick={clearFilters}
                    className="bg-naebak-green hover:bg-naebak-green/90"
                  >
                    مسح الفلاتر
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
