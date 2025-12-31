"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <>
     <header>
      <div className="main-container inner">
        <Link href="/">
        <Image
        src="/assets/logo.svg"
        alt="Header logo"
        width={150}
        height={50}
        />
        
        </Link>
        <nav className="gap-4">
          <Link href="/"
          className="{cn('nav-link',{ 'is-active': pathname === '/' })}">
            
            Home</Link>
           <p>Search Model</p>

           <Link href="/coins" className="{cn('nav-link',{ 'is-active': pathname === '/coins' })}">Coins</Link>
           
           
        </nav>

      </div>
     </header>
    </>
  );
};

export default Header;