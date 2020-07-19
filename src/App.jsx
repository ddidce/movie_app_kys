import React from "react";
import PropType from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt="" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.6,
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = (dish) => {
//   return <Food name={dish.name} picture={dish.image} />;
// };
function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food
          name={dish.name}
          picture={dish.image}
          key={dish.id}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.prototype = {
  name: PropType.string.isRequired,
  picture: PropType.string.isRequired,
  rating: PropType.number.isRequired,
};
export default App;
