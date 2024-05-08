import { Footer, Header } from "./components"
import { Banner, Card, Product, RecommendedList } from "./pages/home"

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Banner />
        <RecommendedList />
        <Card />
        <Product />
      </main>
      <Footer />
    </div>
  )
}

export default App
