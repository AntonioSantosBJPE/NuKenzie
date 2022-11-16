import "./style.css";

export function Card({ element, deleteTransaction }) {
  const { description, type, value } = element;

  return (
    <li className="Card flex">
      {type == "entrada" ? (
        <span className="bg-color-secondary"></span>
      ) : (
        <span className="bg-color-grey-2"></span>
      )}

      <div className="card-box-left">
        <h3 className="card-title-description font-title-3 text-color-grey-4">
          {description}
        </h3>
        <h4 className="card-title-type font-body text-color-grey-3">{type}</h4>
      </div>
      <div className="card-box-right flex justify-between">
        <h4 className="card-title-value font-body text-color-grey-3">{`R$ ${
          type != "saída" ? value : value * -1
        }`}</h4>
        <button
          onClick={(event) => {
            deleteTransaction(element);
          }}
        >
          <span></span>
        </button>
      </div>
    </li>
  );
}
