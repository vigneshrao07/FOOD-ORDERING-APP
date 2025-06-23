const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}
        className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div>
            <span>{item.card.info.name}</span>
            <span>{item.card.info.Price}</span>
          </div>
          <p>{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
