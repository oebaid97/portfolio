import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center max-w-7xl m-auto bg-base-100">
      <Header />
      <Projects />
      <Footer />
    </main >
  )
}
