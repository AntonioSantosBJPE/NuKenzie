import "./style.css";
import imgNoCard from "../../assets/img/NoCard.svg";

export function NoCard() {
  return (
    <div className="NoCard flex flex-col gap-25">
      <h2 className="font-title-2 text-color-grey-4">
        Você ainda não possui nenhum lançamento
      </h2>
      <img src={imgNoCard} alt="" />
    </div>
  );
}
