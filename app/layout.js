import './globals.css'
import localFont from 'next/font/local'


const tittleFont = localFont({ 
      src: '../public/font/acorn.woff',
      weight: '700',
      variable: '--font-acorn'
});

const textFont = localFont({ 
      src: '../public/font/gt.woff',
      weight: '200',
      variable: '--font-gt'
});

export const metadata = {
  title: 'Marco | Full Stack Developer',
  description: 'Portafolio Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tittleFont.variable} ${textFont.variable}` }>
        {children}
      </body>
    </html>
  )
}
