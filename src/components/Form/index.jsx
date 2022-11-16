import "./style.css";
import { useState } from "react";

export function Form({ addTransaction }) {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState(0);
  const [typeSelect, setTypeSelect] = useState("entrada");

  return (
    <div className="Form">
      <form className="flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <span className="font-body text-color-grey-4">Descrição</span>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Digite aqui sua descrição"
              className="Form-input"
              onChange={(event) => {
                setDescriptionInput(event.target.value);
              }}
            />
            <span className="font-body text-color-grey-3">
              Ex: Compra de roupas
            </span>
          </div>
        </div>

        <div className="box-input flex gap-35">
          <div className="box-input-valueNumber flex flex-col gap-10">
            <span className="font-body text-color-grey-4">Valor</span>
            <div className="flex gap-0">
              <input
                type="number"
                className="input-valueNumber"
                onChange={(event) => {
                  setValueInput(Number(event.target.value));
                }}
              />
              <span>R$</span>
            </div>
          </div>

          <div className="box-input-select flex flex-col gap-10">
            <span className="font-body text-color-grey-4">Tipo do valor</span>
            <select
              onChange={(event) => {
                setTypeSelect(event.target.value);
              }}
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn-larger-color-primary"
          onClick={(event) => {
            event.preventDefault();
            const transaction = {
              description: descriptionInput,
              type: typeSelect,
              value: typeSelect != "saída" ? valueInput : valueInput * -1,
            };
            addTransaction(transaction);
          }}
        >
          Inserir valor
        </button>
      </form>
    </div>
  );
}
