import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AuthProvider } from '@/context/AuthContext'
import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function General_Layout({children}) {
  return (
      <AuthProvider>
          <Navbar />
          <main className="grid content-start gap-10">{children}</main>
          <Footer />
          <Toaster />
      </AuthProvider>
  );
}
