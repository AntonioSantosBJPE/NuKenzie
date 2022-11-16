import "./style.css";
import logo from "../../assets/img/logoNuKenzieBlack.svg";

export function Header({ setStarted }) {
  return (
    <div className="Header">
      <header className="container flex justify-between items-center">
        <img src={logo} alt="" />
        <button
          type="button"
          className="btn-middle-color-grey-2"
          onClick={(event) => {
            setStarted(false);
          }}
        >
          Inicio
        </button>
      </header>
    </div>
  );
}
