import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  
  } = resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src= {CDN_URL+
           cloudinaryImageId}
            
        
        alt="res-logo"
      />
      <h3> {name}</h3>
      <h4> {cuisines.join(" ,")} </h4>
      <h4> {avgRating}</h4>
      <h4>{costForTwo} </h4>
      <h4>{resData.info.sla.deliveryTime + " "}minutes</h4>
    </div>
  );
};
export default ResturantCard;