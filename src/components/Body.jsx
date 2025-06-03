import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
const Body = () => {
  return (
    <>
      <div className="body">
        <div className="filter">
          
          <button className="filter-btn" onClick={()=>{
            console.log("button clicked");
          }}>top rated resturant</button>
        </div>
        <div className="res-container">
          {resList.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
