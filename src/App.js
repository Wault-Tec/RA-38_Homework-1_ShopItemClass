import ShopItemClass from "./components/ShopItemClass";
import "./App.css";
import React from 'react';
import ItemModel from "./models/ItemModel";

class App extends React.Component {
  render() {
    const itemValue = {
      brand: "Tiger of Sweden",
      title: "Leonard coat",
      description: "Minimalistic coat in cotton-blend",
      descriptionFull:
        "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
      price: 399,
      currency: "£"
    };

    const item = new ItemModel(
      itemValue.brand,
      itemValue.title,
      itemValue.description,
      itemValue.descriptionFull,
      itemValue.price,
      itemValue.currency
    )
  
    return (
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="window">
          <ShopItemClass item={item}/>
        </div>
      </div>
    );
  }
}

export default App;