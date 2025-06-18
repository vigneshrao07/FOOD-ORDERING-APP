import { Link } from "react-router-dom";
import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.424339&lng=78.644624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     
    );

    const json = await data.json();

    console.log(json);

    //optional chaining
    setListofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendring
  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
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
          <button
            className="filter-btn"
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
        <div className="res-container">
          {filteredRestaurant.map((resturant) => (
            <Link key={resturant.info.id} to={"/restaurants/"+resturant.info.id}> <ResturantCard   resData={resturant} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
