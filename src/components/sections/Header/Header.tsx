import React from "react";
import styles from "./Header.module.css";
import Wrapper from "../../common/Wrapper/Wrapper";
import Link from "../../common/Link/Link";
import Image from "../../common/Image/Image";

interface LinkProps {
  text: string;
  to: string;
}

interface HeaderProps {
  links: LinkProps[];
  logoSrc: string;
}

function Header({ links, logoSrc }: HeaderProps) {
  return (
    <header className={`col-12 ${styles.header}`}>
      <Wrapper>
        <div className="flex-row justify-content-space-between align-items-center">
          <Image
            src={logoSrc}
            alt="Logo"
            width="48px"
            height="48px"
            className="logo-header"
          />
          <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="d-inline-block mediumf">
                  <Link text={link.text} to={link.to} className="link-header" colorBeforeHover="white" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
