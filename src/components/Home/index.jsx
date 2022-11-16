import "./style.css";
import { useState } from "react";
import { Header } from "../Header";
import { Form } from "../Form";
import { TotalMoney } from "../TotalMoney";
import { List } from "../List";
import { NoCard } from "../NoCard";
import { ButtonsFilter } from "../ButtonsFilter";

export function Home({
  started,
  setStarted,
  listTransactions,
  setListTransactions,
}) {
  const [filterActive, setFilterActive] = useState("todos");

  const arrayFilter =
    filterActive == "todos"
      ? [...listTransactions]
      : listTransactions.filter(({ type }) => {
          return type == filterActive;
        });

  function deleteTransaction(item) {
    const arr = listTransactions.filter((element) => {
      return element !== item;
    });
    setListTransactions(arr);
  }

  function addTransaction(transaction) {
    setListTransactions([...listTransactions, transaction]);
  }

  return (
    <div className="Home">
      <Header started={started} setStarted={setStarted} />
      <main className="Home-main container flex">
        <section className="Home-section-left flex flex-col gap-15">
          <Form addTransaction={addTransaction} />
          {listTransactions.length != 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </section>

        <section className="Home-section-right">
          <ButtonsFilter
            filterActive={filterActive}
            setFilterActive={setFilterActive}
          />
          {listTransactions.length != 0 ? (
            <List
              arrayFilter={arrayFilter}
              deleteTransaction={deleteTransaction}
            />
          ) : (
            <NoCard />
          )}
        </section>
      </main>
    </div>
  );
}
