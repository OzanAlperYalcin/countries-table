import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({ children }) {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout