import ScrollToTop from "react-scroll-up"
import { Footer, Header } from "./components"
import { ChevronUpIcon } from "./assets/icons"
import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/routes"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map(route => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>

        <ScrollToTop showUnder={160} duration={800}>
          <span className="fixed bottom-12 right-8 duration-[0.2s] ease-linear delay-0 border rounded-sm p-3 border-solid border-white hover:border-sky-400">
            <ChevronUpIcon />
          </span>
        </ScrollToTop>
      </main>
      <Footer />
    </>
  )
}

export default App
