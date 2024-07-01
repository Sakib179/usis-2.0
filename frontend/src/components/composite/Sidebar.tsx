'use client'
import Link from "next/link"
import {
  Flower2,
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Cookie from "js-cookie"

export default function Sidebar() {
  let accountType = Cookie.get('accountType')
  var sidebarItems = []

  if (accountType == 'student') {
    sidebarItems = [
      { name: 'Student Dashboard', icon: Home, route: '/dashboard/student' },
      { name: 'Student Profile', icon: Home, route: '/dashboard/student-profile' },
      { name: 'Student Advising', icon: Home, route: '/dashboard/student-advising' },
      // Add more student-specific items here
    ];
  } else if (accountType == 'faculty'){
    sidebarItems = [
      { name: 'Faculty Dashboard', icon: Home, route: '/dashboard/faculty' },
      { name: 'Faculty Advising', icon: Users, route: '/dashboard/faculty-advising' },

      // Add more items for other account types here
    ];
  }
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col">
          <div className="flex h-14 items-center border-b px-4 lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Flower2 className="h-6 w-6" />
              <span>USIS: Brac University</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {sidebarItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.route}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
