import './globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/logo.png" />
    <title>Hope for Tomorrow</title>

    </head>
      <body className="bg-gray-50 min-h-screen flex flex-col">
       {children}
      </body>
    </html>
  );
}
