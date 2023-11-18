import '../styles/globals.css'
import { AuthProvider } from '../context/token';
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    < AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
