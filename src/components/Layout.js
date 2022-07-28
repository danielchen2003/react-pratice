import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function Layout(props) {
  return (
    <div>
      <Header />
      <Main cities={props.cities} />
      <Footer />
    </div>
  )
}
export default Layout
