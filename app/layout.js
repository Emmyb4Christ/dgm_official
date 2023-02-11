import NavBar from './components/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
