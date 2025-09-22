'use client'

import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotificationsBell() {
  const [hasNotifications, setHasNotifications] = useState(true)
  const [notificationCount, setNotificationCount] = useState(3)

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5 text-gray-600" />
        {hasNotifications && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-naebak-orange text-white text-xs rounded-full flex items-center justify-center">
            {notificationCount > 9 ? '9+' : notificationCount}
          </span>
        )}
      </Button>
    </div>
  )
}
