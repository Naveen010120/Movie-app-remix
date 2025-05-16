import {

  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {Header} from './Component/Header'
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { useState } from "react";
import {UserSearch} from './UseContext/UserSearch'

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];
export const meta:MetaFunction=()=>[
  {title:'ImDb app'}
]
 import {UseCart} from './UseContext/cartCount'

export function Layout({ children }: { children: React.ReactNode }) {
 const [carts,setCarts]=useState([]);
 let [search,setSearch]=useState('')
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body >
      <UseCart.Provider value={{carts,setCarts}}>
        <UserSearch.Provider value={{search,setSearch}}>

       
      <Header />
    <div className="absolute top-16">

        {children}
    </div>
        <ScrollRestoration />
        <Scripts />
        </UserSearch.Provider>
      </UseCart.Provider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet  />;
}
