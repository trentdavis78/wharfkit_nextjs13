import React, { createContext, useState, useEffect } from 'react';
import { Session, SessionKit, BrowserLocalStorage } from '@wharfkit/session';
import { WebUIRenderer } from '@wharfkit/web-ui-renderer';
import { WalletPluginAnchor } from '@wharfkit/wallet-plugin-anchor';
import { WalletPluginCloudWallet } from '@wharfkit/wallet-plugin-cloudwallet';

 const SessionContext = createContext({} as any);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<any>(null);
  const [sessionkit, setSessionkit] = useState<any>(null);
  const [account, setAccount] = useState<any>(null);

  async function getSessionStorage() {
    if (typeof window !== undefined) {
      let sessionstorage: any = localStorage.getItem('wharf-wharf-wax-sessions-session');
      if (sessionstorage) { sessionstorage = JSON.parse(sessionstorage) }
      setAccount(sessionstorage);
    }
  }
  useEffect(() => {
    const ui = new WebUIRenderer();
    const browserLocalStorage = new BrowserLocalStorage("wharf-wax-sessions");
    const sessionKit = new SessionKit({
      appName: 'your_app_name',
      chains: [
        {
          id: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
          url: 'https://wax.greymass.com',
        },
      ],
      storage: browserLocalStorage,
      ui,
      walletPlugins: [
        new WalletPluginAnchor(),
        new WalletPluginCloudWallet(),
      ],
    });
    setSessionkit(sessionKit);
    getSessionStorage();

    // Cleanup function to remove the dialog element from the DOM
    return () => {
      const dialogElement = ui.shadow.host;
      if (dialogElement && dialogElement.parentNode) {
        dialogElement.parentNode.removeChild(dialogElement);
      }
    };
  }, []);


  async function login(options:any) {
 
    try {
      if (sessionkit.login) {
        console.log(sessionkit)
       await sessionkit
          .login(options)
          .then((result: any) => {
            console.log(result.session)
            setSession(result.session)    
            return      
          })
          getSessionStorage();
      } else {
        console.log('sessionkit.login not found')
      }
    } catch (error) {

      console.log(error)

    }
    
  }

  const logout = async () => {
    await sessionkit?.logout();
    setSession(null);
  }

  return (
    <SessionContext.Provider value={{ session, login, logout, account, setAccount }}>
      {children}
    </SessionContext.Provider>
  );
};


export default SessionContext;