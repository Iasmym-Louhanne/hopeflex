import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">Hopeflex</Link>
          <nav>
            <Link href="/cart" className="mr-4">Carrinho</Link>
            <Link href="/checkout" className="mr-4">Checkout</Link>
            <Link href="/minha-conta">Minha Conta</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 Hopeflex Store</p>
      </footer>
    </>
  );
};

export default Layout;
