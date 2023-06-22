import React, { FC } from "react";
import NextLink from "next/link";

import { ActiveLink } from "./ActiveLink";


const menuItems = [ 
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
]

export const NavBar: FC = () => {
  return (
    <div>
      <nav >
        {menuItems.map(({text, href}) => (
           <ActiveLink texto={text} href={href} key={href}></ActiveLink>
        ))}
        {/* <ActiveLink  texto='About'href="/about"></ActiveLink>
        <ActiveLink  texto='Contact' href="/contact"></ActiveLink> */}
      </nav>
    </div>
  );
};
