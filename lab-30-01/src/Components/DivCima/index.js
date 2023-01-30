import style from "./style.module.css";
import { Button } from "../Button";
import { Header } from "../Header";
import { Textos } from "../Textos";

export function DivCima() {
  return (
    <div className={style.divCima}>
      <Header></Header>
      <Textos></Textos>
      <Button></Button>
    </div>
  );
}
