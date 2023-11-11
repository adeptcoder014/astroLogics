import '../styles/globals.css'
import { AuthProvider } from '../context/token';

function MyApp({ Component, pageProps }) {
  return (
    < AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
