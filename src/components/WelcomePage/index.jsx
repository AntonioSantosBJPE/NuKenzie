import "./style.css";
import logo from "../../assets/img/logoNuKenzieWhite.svg";
import fakeForm from "../../assets/img/illustrationWelcomePage.svg";

export function WelcomePage({ started, setStarted }) {
  return (
    <div className="WelcomePage">
      <main className="WelcomePage-main container flex items-center">
        <section className="section-infos flex flex-col">
          <img src={logo} alt="Nu Kenzie" />
          <h1 className="font-title-1 text-color-grey-0">
            Centralize o controle das suas finanças
          </h1>
          <span className="font-headline text-color-grey-0">
            de forma rápida e segura
          </span>
          <button
            type="button"
            className="btn-larger-color-primary"
            onClick={(event) => {
              setStarted(true);
            }}
          >
            Iniciar
          </button>
        </section>
        <section className="section-img">
          <img src={fakeForm} alt="Fake Form" />
        </section>
      </main>
    </div>
  );
}
