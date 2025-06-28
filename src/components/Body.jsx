import { Link } from "react-router-dom";
import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.424339&lng=78.644624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    

    //optional chaining
    setListofRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! please check your internet connection</h1>
    );

  // conditional rendring
  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  //   if (!listofRestaurants || listofRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <>
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border m-4 p-4 border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-xl"
              onClick={() => {
                console.log(searchText);
                const filteredRestaurant = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                // setListRestaurant(filteredRestaurant);
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <div className="m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-300 rounded-xl"
              onClick={() => {
                const filteredList = listofRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setListofRestaurant(filteredList);
              }}
            >
              Top rated resturants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/restaurants/" + resturant.info.id}
            >
              {" "}
              <ResturantCard resData={resturant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
