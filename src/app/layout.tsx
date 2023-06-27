import './globals.css'

export const metadata = {
  title: 'Omar Ebaid\'s Portfolio',
  description: 'An online presence to showcase my work, skills, and experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-base-200'>{children}</body>
    </html>
  )
}
