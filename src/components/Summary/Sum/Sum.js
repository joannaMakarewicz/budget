import '../Sum/Sum.css';

const Sum = ({expensesItem}) => {

  return (
    <div className="sum m-2">
      <span>{expensesItem.fields.name.toLowerCase()}</span>
      <span>{expensesItem.fields.category}</span>
      <span>{expensesItem.fields.price}$</span>
      <span></span>
    </div>
  );
};

export default Sum;
