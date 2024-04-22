
import './globalStyles/main.scss';
import Layout from "@/components/layouts/Layout";






export const metadata = {
  title: "Hoodie Driver",
  description: "Hoodie Driver Shop",
};

export default function RootLayout({ children }) {
  return (
    <Layout>{children}</Layout>
  );
}
