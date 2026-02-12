import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import { Outlet } from "react-router-dom"
 
export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      
      {/* Sidebar */}
      {/* <Sidebar /> */}
 
      {/* Right Section */}
      <div className="flex flex-1 flex-col">
        
        {/* Header */}
        <Header />
 
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
 
      </div>
    </div>
  )
}
 