
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./header/Header'), { ssr: false });
 const HeaderSimple = dynamic(() => import('./header/HeaderSimple'), { ssr: false }); 
const Footer = dynamic(() => import('./footer/Footer'), { ssr: false });
const FooterSimple = dynamic(() => import('./footer/FooterSimple'), { ssr: false });

export default function Layout({
    children,
    transparentHeader,
    disabledHeader,
    disabledFooter,
    simpleHeader,
    simpleFooter,
  }:any) {
    return (
      <>
        {disabledHeader ? null : (
          <>
            {simpleHeader ? (
              <HeaderSimple   />
            ) : (
              <Header  />
            )}
          </>
        )}
  
        {children}
  
        {disabledFooter ? null : <>{simpleFooter ? <FooterSimple /> : <Footer />}</>}
      </>
    );
  }