import '../src/componets/styles/style.css'
import NavBar from './componets/Navig/NavBar'
import Header from './componets/Head/Header'
import AllGym from './componets/Projects/AllGym'
import FutureFurnitures from './componets/Projects/FutureFurnitures'
import YourPlan from './componets/Projects/YourPlan'
import Footer from './componets/Contacts/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AllGym />
      <FutureFurnitures />
      <YourPlan />
      <Footer />
    </div>
  )
}

export default App
