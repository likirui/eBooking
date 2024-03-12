import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpg';
import hotel3 from '../../images/hotel3.jpg';
import hotel4 from '../../images/hotel4.jpg';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  const images = [
    hotel1,
    hotel2,
    hotel3,
    hotel4
  ];

  // Function to get a unique image for each item
 const getImage = (index) => {
  // If the item has a photo, use it
  if (data[index] && data[index].photos && data[index].photos.length > 0) {
    return data[index].photos[0];
  }
  // If the item doesn't have a photo, use a default image from the array
  // Ensure we don't repeat images by using the modulus operator
  return images[index % images.length];
};
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item, index) => (
            <div className="fpItem" key={item._id}>
              <img
                src={getImage(index)}
                alt={item.name}
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
