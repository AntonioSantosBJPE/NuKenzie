import "./style.css";

export function ButtonsFilter({ filterActive, setFilterActive }) {
  const nameButtons = [
    { name: "Todos", filter: "todos" },
    { name: "Entradas", filter: "entrada" },
    { name: "Despesas", filter: "saída" },
  ];

  return (
    <div className="ButtonsFilter flex justify-between ">
      <h3 className="font-title-3 text-color-grey-4">Resumo financeiro</h3>
      <div className="flex justify-between gap-15">
        {nameButtons.map(({ name, filter }, index) => {
          return (
            <button
              key={index}
              className={
                filterActive == filter
                  ? "btn-middle-color-primary"
                  : "btn-middle-color-grey-2"
              }
              onClick={(event) => {
                setFilterActive(filter);
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
