import '../styles/index.css'
import { Montserrat } from '@next/font/google';
import { Header } from '../components/Header';

const montserrat = Montserrat();

function MyApp({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
  

export default MyApp;
