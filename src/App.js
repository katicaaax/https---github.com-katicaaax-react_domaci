
import "./App.css";
import NavBar from "./navBar";
import Products from "./products";

function App() {
  //pravimo niz proizvoda
  const products = [
    {
      id: 1,
      title: "Beauty Blender",
      description: "The Beauty Blender is a revolutionary makeup tool designed to effortlessly achieve a flawless and airbrushed finish. ",
      imageLink: "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/b/e/beautyblender-original_1.jpg",
      amount: 0,
    },
    {
      id: 2,
      title: "Foundation",
      description: " Discover the ultimate foundation for a radiant and flawless complexion with our premium Foundation product.",
      imageLink: "https://media.allure.com/photos/63ead77ebb96a575e80b11c6/3:2/w_3000,h_2000,c_limit/2-13-mature-skin-foundations.jpg",
      amount: 0,
    },
    {
      id: 3,
      title: "Setting Powder",
      description: "Elevate your makeup game with our Setting Powder product, the ultimate finishing touch for a long-lasting and flawless look.",
      imageLink: "https://focallure.com/cdn/shop/files/focallure-face-setting-powder-01-lvory-32453354619018.jpg?v=1691490268&width=1000",
      amount: 0,
    },
  ]
  
  return (
    <div className="App">

      <NavBar />
      <Products products={products}/>
    </div>




  );
}

export default App;
