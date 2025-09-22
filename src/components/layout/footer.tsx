import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-naebak-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* اللوجو الأبيض */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/logo-naebak-white.png"
              alt="نائبك.كوم"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          {/* حقوق الطبع */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-white font-medium">
              © 2024 نائبك.كوم - جميع الحقوق محفوظة
            </p>
          </div>

          {/* أيقونات السوشيال ميديا */}
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a 
              href="#" 
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="فيسبوك"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="تويتر"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="إنستجرام"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="يوتيوب"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="لينكد إن"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
