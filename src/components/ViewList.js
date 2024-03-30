// ViewList.js

import styles from "./ViewList.module.css";

function ViewList({ itemList}) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Discount %</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{item.discount}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewList;
