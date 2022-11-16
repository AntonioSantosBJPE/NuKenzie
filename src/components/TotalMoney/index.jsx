import "./style.css";

export function TotalMoney({ listTransactions }) {
  const totalMoney = listTransactions.reduce(
    (previousValue, currentvalue) => currentvalue.value + previousValue,
    0
  );

  return (
    <div className="TotalMoney">
      <div className="flex justify-between items-center">
        <h3 className="font-title-3 text-color-grey-4">Valor Total</h3>
        <span className="font-title-3 text-color-primary-1">{`R$ ${totalMoney}`}</span>
      </div>
      <p className="font-body text-color-grey-3">O valor se refere ao saldo</p>
    </div>
  );
}
