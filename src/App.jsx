import './assets/App.css'
import Header from './components/Header/Header'
import Main from './pages/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
