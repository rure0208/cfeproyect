import '../styles/globals.css'
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationsProvider position="top">
      <Component {...pageProps} />
    </NotificationsProvider>
  )
}

export default MyApp
