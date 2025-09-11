"use client"
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { LoginForm } from './components/auth/login-form'
import { SignUpForm } from './components/auth/sign-up-form'
import { ForgotPasswordForm } from './components/auth/forgot-password-form'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import Dashboard from './pages/dashboard/dashboard'


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/update-password" element={<SignUpForm />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Redirect to dashboard for any other route */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>

      </Routes>
    </AuthProvider>
  );
}

export default App
