'use client'

import { useState, useEffect } from 'react'
import { Users } from 'lucide-react'

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [baseCount, setBaseCount] = useState(1450) // رقم عشوائي افتراضي

  useEffect(() => {
    // محاكاة الحصول على الرقم العشوائي من الخادم
    const fetchBaseCount = () => {
      // في التطبيق الحقيقي، سيتم جلب هذا من API
      const min = 1000
      const max = 1500
      const randomBase = Math.floor(Math.random() * (max - min + 1)) + min
      setBaseCount(randomBase)
    }

    // محاكاة عدد الزوار الحقيقي
    const fetchRealVisitors = () => {
      // في التطبيق الحقيقي، سيتم جلب هذا من API
      const realVisitors = Math.floor(Math.random() * 50) + 1
      setVisitorCount(baseCount + realVisitors)
    }

    // تحديث الرقم العشوائي كل 30 ثانية
    fetchBaseCount()
    const baseInterval = setInterval(fetchBaseCount, 30000)

    // تحديث عدد الزوار كل 5 ثوان
    fetchRealVisitors()
    const visitorInterval = setInterval(fetchRealVisitors, 5000)

    return () => {
      clearInterval(baseInterval)
      clearInterval(visitorInterval)
    }
  }, [baseCount])

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white px-3 py-1 rounded-md border">
      <Users className="h-4 w-4 text-naebak-green" />
      <span className="text-sm font-medium text-gray-700">
        {visitorCount.toLocaleString('ar-EG')}
      </span>
      <span className="text-xs text-gray-500">زائر</span>
    </div>
  )
}
