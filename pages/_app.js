import '../styles/globals.css'
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <div>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </div>
  );
}

export default MyApp;


