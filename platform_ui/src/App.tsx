import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Deal from './pages/Deal'
import Contacts from './pages/Contacts'
import Report from './pages/Report'
import Files from './pages/Files'
import Users from './pages/Users'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="deal" element={<Deal />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="report" element={<Report />} />
          <Route path="files" element={<Files />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
