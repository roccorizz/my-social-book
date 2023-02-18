import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider getSession={pageProps.getSession}>

      < Component {...pageProps} />
    </SessionProvider>
  );


}
export default MyApp;
