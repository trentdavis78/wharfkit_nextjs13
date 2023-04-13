import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import { WebUIRenderer } from '@wharfkit/web-ui-renderer';
 import { SessionProvider} from '../context/session'
 
 interface MyAppProps extends AppProps {
   Component: NextComponentType & {
     getLayout?: (page: JSX.Element) => JSX.Element;
   };
 }
 
 export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    if(typeof window !== undefined) {
      const ui = new WebUIRenderer({ id: 'wrui'  }) 
      ui.appendDialogElement() 
    }
    document.body.setAttribute('data-theme', 'dark')
    document.documentElement.setAttribute('lang', 'en')
 
  }, [])
  
  return (
    <SessionProvider>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  )
}