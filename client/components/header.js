import React from 'react';
import Link from 'next/link';

function Header({ currentUser }) {
  let links = [
    !currentUser && { link: '/user/signup', text: 'Sign Up' },
    !currentUser && { link: '/user/signin', text: 'Sign in' },
    currentUser && { link: '/user/signout', text: 'Sign Out' },
  ]
    .filter((link) => link)
    .map((link) => (
      <li className="nav-item">
        <Link href={link.link} passHref>
          <a className="nav-link">{link.text}</a>
        </Link>
      </li>
    ));
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link href="/" passHref>
          <a className="nav-link">Tickets.com</a>
        </Link>
        <ul className="navbar-nav ms-auto">{links}</ul>
      </nav>
    </div>
  );
}

export default Header;
