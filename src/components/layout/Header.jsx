import { LayoutDashboard, User } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Today", path: "/" },
    { name: "Habits", path: "/habits" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
]
export default function Header() {
    return (
        <header className="flex items-center justify-between border-b bg-background px-6 py-3">
            <h1 className="text-2xl font-bold">Habit Tracker</h1>
            <nav className="space-x-5">
                {navItems.map((item) => {
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `text-base px-4 py-2 rounded-lg transition-all duration-200 ${isActive ? "bg-indigo-100 text-indigo-700 font-semibold shadow-sm" : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"}`}
                        >
                            {item.name}
                        </NavLink>
                    )
                })
                }
            </nav>

            <Button variant="ghost" size="icon">
                <User size={50} />
            </Button>
        </header>
    )
}