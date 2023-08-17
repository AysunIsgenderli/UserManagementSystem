import { Routes, Route } from "react-router-dom"
import { CalendarPage, DashboardPage, JobsPage, LoginPage, MembersPage, SettingsPage, TaskPage, RegisterPage } from './pages'
import { CardInfo } from "./components"


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/departments/:departmentId" element={<CardInfo />} />
        <Route path="/dashboard/task" element={<TaskPage />} />
        <Route path="/dashboard/members" element={<MembersPage />} />
        <Route path="/dashboard/calendar" element={<CalendarPage />} />
        <Route path="/dashboard/jobs" element={<JobsPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  )
}

