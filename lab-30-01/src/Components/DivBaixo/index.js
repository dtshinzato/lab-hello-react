import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import style from "./style.module.css";

export function DivBaixo() {
  const AltText = "Icones";

  return (
    <>
      <div className={style.container}>
        <div className={style.item}>
          <img src={icon1} alt={AltText} />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className={style.item}>
          <img src={icon2} alt={AltText} />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className={style.item}>
          <img src={icon3} alt={AltText} />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className={style.item}>
          <img src={icon4} alt={AltText} />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </>
  );
}
