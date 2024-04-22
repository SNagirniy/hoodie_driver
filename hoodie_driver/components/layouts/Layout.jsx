import { montserrat } from "@/app/globalStyles/fonts";
import PageLayout from "./PageLayout";

const Layout = ({children})=>{

return (
    <html lang="en">
    <body className={`${montserrat.className}`}>
      <PageLayout>{children}</PageLayout>
    </body>
  </html>
)
}

export default Layout;