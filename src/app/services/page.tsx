import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Services from '@/components/Services'
import Form from '@/components/Form'

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center max-w-7xl m-auto bg-base-100">
      <Header />
      <Services />
      <Form />
      <Footer />
    </main >
  )
}
