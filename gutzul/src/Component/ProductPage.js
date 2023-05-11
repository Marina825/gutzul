import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Button from "./Button";

// import BuyModal from "./Component/BuyModal";
// import productsBurley from "./productBurley.json";
// import productsOriental from "./Component/productOriental.json";
// const ProductPage = () => {
//   const [toggleStateModal, setToggleStateModal] = useState(false);
const ProductPage = () => {
  const [products, setProducts] = useState([]);

  //  const toggleFirstModal = () => {
  //   setToggleStateModal(!toggleStateModal);
  //  };
  useEffect(() => {
    axios
      .get("/productBurley.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  //   fetch("productBurley.json")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // });
  return (
    <div>
      {/* {products.map((product) => (
        <div key={product.id}>
       <h1> {product.name} </h1>  
        <h3> price:   {product.price}</h3>
        <img src={product.image} alt={product.name} />
        </div>
      ))} */}
      {products.map((product) => (
        <div key={product.id}>
          <Card
            image={
              <img src={product.image} className="img-cards" alt="#"></img>
            }
            name={product.name}
            // star={<Star id={product.id} />}
            price={product.price}
            button={
              <Button
                className="button-card"
                // onClick={toggleFirstModal}
                text="Buy"
              />
            }
          >
            {" "}
          </Card>
        </div>
      ))}
    </div>
  );
};
// <div>
//   <div className="cards">

//     {productsBurley.ProductsBurley.map((product) => (
//       <div key={product.id}>
//         <Card
//           image={
//             <img src={product.image} className="img-cards"></img>
//           }
//           name={product.name}
//           price={product.price}
//           button={
//             <Button
//               className="button-card"
//               onClick={toggleFirstModal}
//               text="Buy"
//             />
//           }
//         ></Card>
//       </div>
//     ))}
//   </div>
//   <div className="cards">
//     {productsOriental.ProductsOriental.map((product) => (
//       <div key={product.id}>
//         <Card
//           image={
//             <img src={product.image} className="img-cards"></img>
//           }
//           name={product.name}
//           price={product.price}
//           button={
//             <Button
//               className="button-card"
//               onClick={toggleFirstModal}
//               text="Buy"
//             />
//           }
//         ></Card>
//       </div>
//     ))}
//   </div>

//   {toggleStateModal && (
//     <div>
//       <BuyModal
//         header="Вікно"
//         closeButton={true}
//         text="Додати до кошика?"
//         actions={
//           <div>
//             <Button
//               className="button-modal"
//               backgroundColor="#b63421"
//               onClick={toggleFirstModal}
//               text="Так"
//             />
//             <Button
//               className="button-modal"
//               backgroundColor="#b63421"
//               onClick={toggleFirstModal}
//               text="Ні"
//             />
//           </div>
//         }
//         onClose={toggleFirstModal}
//       />
//     </div>
//   )}
// </div>
//   );
//           }
// };
export default ProductPage;
