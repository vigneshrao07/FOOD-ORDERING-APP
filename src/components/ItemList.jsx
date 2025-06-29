import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log("cliccked");
  };

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.default / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 content-center">
            <div className="absolute     ">
              <button
                className="p-2   mx-16 rounded-lg bg-black text-white shadow-lg"
                 onClick={() =>handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// know the difference
// onClick={handleAddItem}
// onClick={() => handleAddItem}
// onClick={handleAddItem(item)}


//  import { CDN_URL } from "../utils/constants";
// const ItemList = ({ items }) => {
//   console.log(items);
//   return (
//     <div>
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//         >
//           <div className="w-9/12">
//             <div className="py-2">
//               <span>{item.card.info.name}</span>

//               <span>
//                 {" "}
//                 -₹
//                 {item.card.info.Price
//                   ? item.card.info.Price / 100
//                   : item.card.info.Price}
//               </span>
//             </div>
//             <p className="text-xs">{item.card.info.description}</p>
//           </div>

//           <div className="w-3/12 p-4">
//             <div className="absolute">
//               <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
//                 Add +{" "}
//               </button>
//             </div>
//             <img src={CDN_URL + item.card.info.imageId} className="w-full" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ItemList;
