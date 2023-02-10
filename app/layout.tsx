import './globals.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Head from './head';
import { AppModeProvider } from '../context/AppContext';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <AppModeProvider>{children}</AppModeProvider>
      </body>
    </html>
  )
}
