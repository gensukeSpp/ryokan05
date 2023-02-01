import React, { FC } from "react";
import { header, wrapper, title, link } from './header.css';

export const Header: FC = () => {
  return (
    <header className={header}>
      <div className={wrapper}>
        <h1 className={title}>Title</h1>
        <nav>
          <a className={link} href="#">Link</a>
        </nav>
      </div>
    </header>
  );
};