import styles from "./Product.module.css";

import { useState } from "react";

import Card from "./Card";
import ViewList from "./ViewList";
import Total from "./Total";

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);
  const [itemList, setItemList] = useState([]);
  const [sumTotalPrice, setSumTotalPrice] = useState(0);
  const [sumTotalDiscount, setSumTotalDiscount] = useState(0)

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    const newItem = {
      name: name,
      price: price,
      count: count,
      discount: discount,
      totalPrice: parseFloat(price) * parseFloat(count) * (1 - parseFloat(discount) / 100),
      totalDiscount: parseFloat(price) * parseFloat(count) * parseFloat(discount) / 100
    };

    setItemList((prevItemList) => {
      /*
      prevItemList.push(newItem)
      console.log(prevItemList)
      return prevItemList
      */
      const newItemList = [...prevItemList, newItem];

      return newItemList;
    });

    setSumTotalPrice((prevState) => {
      return prevState += newItem.totalPrice
    })

    setSumTotalDiscount((prevState) => {
      return prevState += newItem.totalDiscount
    })


  };

  return (
    <div className={styles.container}>
      <Card
        styles={styles}
        name={name}
        handlerMinus={handlerMinus}
        count={count}
        handlerPlus={handlerPlus}
        price={price}
        discount={discount}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList itemList={itemList} sumTotalPrice={sumTotalPrice}/>
      <Total sumTotalPrice={sumTotalPrice} sumTotalDiscount={sumTotalDiscount}/>
    </div>
  );
}
export default Product;
