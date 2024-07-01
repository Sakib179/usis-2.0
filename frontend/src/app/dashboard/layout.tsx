import Sidebar from "@/components/composite/Sidebar"
import Header from "@/components/composite/Header"

export default function Dashboard({children}: {children: React.ReactNode}) {
  return (
  <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr] ">
    <Sidebar />
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  </div>
  )
}