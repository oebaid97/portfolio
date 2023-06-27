import Footer from '@/components/Footer'
import Header from '@/components/Header'
import About from '@/components/About'

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center max-w-7xl m-auto bg-base-100">
      <Header />
      <About />
      <Footer />
    </main >
  )
}
