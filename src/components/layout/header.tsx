'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import VisitorCounter from '@/components/ui/visitor-counter'
import NotificationsBell from '@/components/ui/notifications-bell'
import { Menu, X, LogOut } from 'lucide-react'

interface HeaderProps {
  isLoggedIn?: boolean
  userName?: string
}

export default function Header({ isLoggedIn = false, userName }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* اللوجو */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-naebak-green.png"
                alt="نائبك.كوم"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* القائمة الرئيسية - سطح المكتب */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-naebak-green font-medium transition-colors">
              الرئيسية
            </Link>
            <Link href="/representatives" className="text-gray-700 hover:text-naebak-green font-medium transition-colors">
              المرشحين
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-naebak-green font-medium transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-naebak-green font-medium transition-colors">
              اتصل بنا
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-naebak-green font-medium transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-naebak-green font-medium transition-colors">
              أسئلة وأجوبة
            </Link>
          </nav>

          {/* جرس الإشعارات + عداد الزوار + تسجيل الدخول */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <NotificationsBell />
            <VisitorCounter />
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-gray-700 font-medium">{userName}</span>
                <Button variant="ghost" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button asChild className="bg-naebak-green hover:bg-naebak-green/90">
                <Link href="/login">دخول</Link>
              </Button>
            )}
          </div>

          {/* زر القائمة - الجوال */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <NotificationsBell />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* القائمة المنسدلة - الجوال */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-naebak-green font-medium"
                onClick={toggleMenu}
              >
                الرئيسية
              </Link>
              <Link
                href="/representatives"
                className="block px-3 py-2 text-gray-700 hover:text-naebak-green font-medium"
                onClick={toggleMenu}
              >
                المرشحين
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-naebak-green font-medium"
                onClick={toggleMenu}
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-naebak-green font-medium"
                onClick={toggleMenu}
              >
                اتصل بنا
              </Link>
              <Link
                href="/privacy"
                className="block px-3 py-2 text-gray-700 hover:text-naebak-green font-medium"
                onClick={toggleMenu}
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-gray-700 hover:text-naebak-green font-medium"
                onClick={toggleMenu}
              >
                أسئلة وأجوبة
              </Link>
              
              <div className="border-t pt-4 mt-4">
                <div className="mb-3">
                  <VisitorCounter />
                </div>
                {isLoggedIn ? (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{userName}</span>
                    <Button variant="ghost" size="sm">
                      <LogOut className="h-4 w-4 mr-2" />
                      خروج
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full bg-naebak-green hover:bg-naebak-green/90" asChild>
                    <Link href="/login">دخول</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
