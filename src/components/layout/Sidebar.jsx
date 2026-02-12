import { NavLink } from "react-router-dom"
import { Home, ListChecks, BarChart3, Settings } from "lucide-react"
 
const navItems = [
  { name: "Today", path: "/", icon: Home },
  { name: "Habits", path: "/habits", icon: ListChecks },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
]
 
export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card p-4">
      <h1 className="mb-6 text-xl font-bold">Habit Tracker</h1>
 
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
 