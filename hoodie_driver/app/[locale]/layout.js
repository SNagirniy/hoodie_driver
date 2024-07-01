import { montserrat } from '../globalStyles/fonts';
import '../globalStyles/main.scss';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import PageLayout from '@/components/layouts/PageLayout';







export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params:{locale} }) {
const messages = await getMessages();



 
  return (
    <html lang={locale}>
      <body className={`${montserrat.className}`}>
        <NextIntlClientProvider messages={messages}>
          <PageLayout>
            {children}
            <div id='modal-root'></div>
          </PageLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
