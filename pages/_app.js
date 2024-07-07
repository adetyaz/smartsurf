import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</NextUIProvider>
	)
}
