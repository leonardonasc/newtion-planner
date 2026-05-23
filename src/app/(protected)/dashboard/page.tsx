'use client'

import Sidebar from "@/components/sidebar/sidebar"

export default function Page() {
  return (

    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <span>content</span>
      </div>
    </div>
  )
}
