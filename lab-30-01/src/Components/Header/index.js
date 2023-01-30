import Logo from "../../images/ironhack-logo-xs.png";
import Menu from "../../images/menu-top-xs.png";
import style from "./style.module.css";

export function Header() {
  const logo = "Logo Iron Hack";
  const menu = "Menu";

  return (
    <>
      <header>
        <img src={Logo} alt={logo} />
        <img src={Menu} alt={menu} className={style.menu}/>
      </header>
    </>
  );
}
