'use client'

import { useState, useEffect } from 'react'

interface NewsTickerProps {
  news?: string
}

export default function NewsTicker({ news }: NewsTickerProps) {
  const [currentNews, setCurrentNews] = useState(
    news || "أهلاً وسهلاً بكم في منصة نائبك - المنصة الرسمية للتواصل مع أعضاء مجلس النواب ومجلس الشيوخ - تواصل مع نائبك واعرض مشاكلك وقدم اقتراحاتك"
  )

  useEffect(() => {
    // في التطبيق الحقيقي، سيتم جلب الأخبار من API
    // هنا محاكاة لتحديث الأخبار
  }, [])

  return (
    <div className="news-ticker w-full py-2 relative">
      <div className="news-ticker-content text-white font-medium">
        {currentNews}
      </div>
      {/* الشريط السفلي الإضافي */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-naebak-gray-dark"></div>
    </div>
  )
}
