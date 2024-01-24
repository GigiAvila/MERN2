import './assets/App.css'
import Header from './components/Header/Header'
import Main from './pages/Main'
import Footer from './components/Footer'

function App() {
  return (
    <main
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <Header />
      <Main />
      <Footer />
    </main>
  )
}

export default App
