import { useEffect, useState } from "react";

function Mycomponent() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((Response) => Response.json())
      .then((e) => {
        setItems(e);
      });
  }, []);
  console.log("second");
  console.log(items);
  return (
    <>
      <h1>TEstiing</h1>
      <ul>
        {items.map((el, id) => {
          return <li key={id}> {el.title}</li>;
        })}
      </ul>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Rating</th>
        </tr>
        {items.map((el, id) => {
          return (
            <tr key={id}>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.price}</td>
              <td>{el.description}</td>
              <td>{el.category}</td>
              <td>
                Rate: {el.rating.rate} <br></br>
                Count: {el.rating.count}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Mycomponent;
