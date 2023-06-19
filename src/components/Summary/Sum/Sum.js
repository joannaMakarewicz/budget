import '../Sum/Sum.css';

const Sum = ({expensesItem}) => {
  console.log(expensesItem)
  return (
    <div className="sum m-2">
      <span>{expensesItem.fields.name}</span>
      <span>{expensesItem.fields.category}</span>
      <span>{expensesItem.fields.price}$</span>
      <span></span>
    </div>
  );
};

export default Sum;
