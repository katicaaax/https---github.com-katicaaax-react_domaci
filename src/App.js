
import "./App.css";
import NavBar from "./navBar";
import Products from "./products";
import { useState } from "react";


function App() {
  //pravimo niz proizvoda
  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Beauty Blender",
      description: "The Beauty Blender is a revolutionary makeup tool designed to effortlessly achieve a flawless and airbrushed finish. ",
      imageLink: "https://www.instyle.com/thmb/GxwIgSz4fZq-O6LcuJ9OqgYprZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/053023-silicone-sponge-lead-f29ba2a7d2de4638a94f0d808d0ac0b1.jpg",
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
      imageLink: "https://www.hera.com/int/en/products/__icsFiles/afieldfile/2022/12/22/20220718_final_SOFT-FINISH-LOOSE-POWDER_pdp_detail_img03_pc.jpg",
      amount: 0,
    },
  ]);
  const addToCart = (id) => {
    products.map((product) => {
     if(product.id === id){
         product.amount = product.amount + 1; 
         const a = cartNum + 1;
         setCartNum(a);
         console.log("product id=", product.id, "amount=", product.amount);
     }
    });
 };
 const remFromCart = (id) => {
  products.map((product) => {
     if(product.id === id){
         if(product.amount > 0){
             product.amount = product.amount - 1;
             const a = cartNum - 1;
             setCartNum(a);
             console.log("product id=", product.id, "amount=", product.amount);
         }else{
           alert("Amount of product is already 0.");
        }
     }
  });
 };
  return (
    
    <div className="App">
     <NavBar  cartNum ={cartNum}/>
      <Products products={products} onAdd={addToCart} onRemove={remFromCart}/>
    </div>




  );
}

export default App;
