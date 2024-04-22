import Link from "next/link";

export default function Home() {
  return (
    <><h1>Hoodie Driver</h1>
      <ul>
        <li><Link href={'/product'}>Product</Link></li>
        <li><Link href={'/store'}>Store</Link></li>
      </ul></>
      
    
  );
}
