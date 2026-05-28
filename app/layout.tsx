import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { PageTransitionProvider } from '@/components/providers/page-transition-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arieli Foundation | Maternal and Child Health',
  description: 'Arieli Foundation provides evidence and risk-based solutions to improve maternal, infant, and child health outcomes. We work to provide communities with quality maternity care and reduce preventable deaths.',
  keywords: ['maternal health', 'child health', 'NGO', 'Nigeria', 'healthcare', 'community outreach', 'women empowerment'],
  openGraph: {
    title: 'Arieli Foundation | Maternal and Child Health',
    description: 'Creating hope for mothers and children through evidence-based healthcare solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
