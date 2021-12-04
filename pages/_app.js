import 'tailwindcss/tailwind.css'
import { NextIntlProvider } from 'next-intl';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function App({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </NextIntlProvider>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}