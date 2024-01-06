import { Link } from "react-router-dom";

export function MyCart({ cartItem, setCartItem }) {
  const totalPrice = cartItem.reduce((acc, each) => acc + each.price, 0);
  return (
    <div className="cart-main-page">
      <div className="top-of-cart">
        <Link to="/" style={{ textDecoration: "none" }}>
          🔙
        </Link>
        <h2>Back To Items</h2>
      </div>
      <ul className="cart-items">
        {cartItem.map((item) => (
          <CItem item={item} key={item.name} setCartItem={setCartItem} />
        ))}
      </ul>
      {cartItem.length > 0 ? (
        <button className="buy-all">Buy All (${totalPrice})</button>
      ) : (
        ""
      )}
    </div>
  );
}

function CItem({ item, setCartItem }) {
  function handleRemoveItem(itemToRemove) {
    setCartItem((cartItem) => {
      return cartItem.filter((item) => item.name !== itemToRemove.name);
    });
  }

  return (
    <li>
      <div className="img-and-delivery">
        <img src={item.image} alt={item.name} className="cart-img"></img>
      </div>

      <div className="cart-description">
        <h1 className="item-name-cart">{item.name}</h1>
        <p>{item.description}</p>
      </div>
      <button
        className="remove-from-cart"
        onClick={() => handleRemoveItem(item)}
      >
        Remove From Cart
      </button>
      <button className="cart-price">$ {item.price}</button>
    </li>
  );
}
