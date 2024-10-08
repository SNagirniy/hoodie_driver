import { montserrat } from '../globalStyles/fonts';
import '../globalStyles/main.scss';
import "react-toastify/dist/ReactToastify.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import PageLayout from '@/components/layouts/PageLayout';
import { CartProvider } from '@/contexts/cartContext';
import { ToastContainer } from 'react-toastify';
import { Slide } from 'react-toastify';









export const metadata = {
  title: "Hoodie Driver",
  description: "Hoodie Driver - auto accessories store",
};

export default async function RootLayout({ children, params:{locale} }) {
const messages = await getMessages();



 
  return (
    <html lang={locale}>
      <body className={`${montserrat.className}`}>
        
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            <PageLayout>
              <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="colored"
              transition={Slide}
              />
              {children}
              <div id='modal-root'></div>
            </PageLayout>
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
