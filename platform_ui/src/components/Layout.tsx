import { NavLink, Outlet } from 'react-router-dom'
import {
  HomeIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  FolderIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const menus = [
  { name: 'Dashboard', to: '/dashboard', icon: HomeIcon },
  { name: 'Deal', to: '/deal', icon: CurrencyDollarIcon },
  { name: 'Contacts', to: '/contacts', icon: UserGroupIcon },
  { name: 'Report', to: '/report', icon: ChartBarIcon },
  { name: 'Files', to: '/files', icon: FolderIcon },
  { name: 'Users', to: '/users', icon: UserIcon },
]

export default function Layout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col">
        <div className="p-4 text-2xl font-bold">Menu</div>
        <nav className="flex-1">
          {menus.map(({ name, to, icon: Icon }) => (
            <NavLink
              key={name}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 pb-16">
          <Outlet />
        </main>
        <footer className="fixed bottom-0 left-64 right-0 bg-gray-100 text-center p-2 border-t">
          Footer
        </footer>
      </div>
    </div>
  )
}
