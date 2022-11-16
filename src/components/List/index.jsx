import "./style.css";
import { Card } from "../Card";

export function List({ deleteTransaction, arrayFilter }) {
  return (
    <ul className="List flex flex-col gap-30">
      {arrayFilter.map((element, index) => {
        return (
          <Card
            key={index}
            element={element}
            deleteTransaction={deleteTransaction}
          />
        );
      })}
    </ul>
  );
}
