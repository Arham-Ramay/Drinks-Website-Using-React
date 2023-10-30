import Header from "./Header"
import Footer from "./Footer"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className="content">{children}</div>
    <Footer/>
    </>
  )
}

export default Layout