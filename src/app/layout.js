import './globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';
import { Suspense } from 'react';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/logo.png" />
    <title>Hope for Tomorrow</title>

    </head>
      <body className="bg-gray-50 min-h-screen flex flex-col">
       <Suspense fallback={<div className='bg-red-700 h-screen'>Loading page...</div>}>
       {/* <div className='bg-red-700 h-screen'>Loading page...</div> */}
          <AuthProvider>
          {children}
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
