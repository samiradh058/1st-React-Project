import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 100,
    name: "Pure Ghee",
    description: "Pure ghee from Parbat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 525,
    name: "Wrist Watch",
    description: "Made in Japan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 20,
    name: "Ice Cream",
    description: "100% vegetarian",
  },
];

export function ShoppingItems({ cartItem, setCartItem }) {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  function addToCart(item) {
    setCartItem((cartItem) => [...cartItem, item]);
  }

  return (
    <div className="main-body">
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
      <div className={`${sidebar ? "blur" : ""}`}>
        <Navbar showSidebar={showSidebar} />
        <ul className="shopping-items">
          {items.map((item) => (
            <Item
              item={item}
              key={item.name}
              addToCart={addToCart}
              cartItem={cartItem}
            />
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
}

function Item({ item, addToCart, cartItem }) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(item);
    setAdded(true);
  }

  return (
    <li>
      <img src={item.image} alt={item.name} className="item-img"></img>
      <h4 className="price">${item.price}</h4>
      <div className="description">
        <h1 className="item-name">{item.name}</h1>
        <p>{item.description}</p>
      </div>
      {added || cartItem.includes(item) ? (
        <button className="added" disabled>
          Added
        </button>
      ) : (
        <button className="add-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </li>
  );
}

function Navbar({ showSidebar }) {
  return (
    <div className="navbar">
      <div className="ham" onClick={showSidebar}>
        <h1>--</h1>
        <h1>--</h1>
        <h1>--</h1>
      </div>
      <h1>Buy Anyting</h1>
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search Item" name="search" />
          <button type="submit">Find</button>
        </form>
      </div>
      <Link to="/MyCart" style={{ textDecoration: "none" }}>
        <button className="cart">My Cart</button>
      </Link>
    </div>
  );
}

function Sidebar({ sidebar, showSidebar }) {
  return (
    sidebar && (
      <div className="side_box">
        <div className="side_cut" onClick={showSidebar}>
          &times;
        </div>
        <h1>Buy Anything</h1>
        <ul className="side_options">
          <Link to="/" style={{ textDecoration: "none" }} onClick={showSidebar}>
            <li className="side_opt">Home</li>
          </Link>
          <Link to="/MyCart" style={{ textDecoration: "none" }}>
            <li className="side_opt">My Cart</li>
          </Link>
        </ul>
        <h3>Samir Adhikari</h3>
      </div>
    )
  );
}

function Footer() {
  return (
    <div className="footer">
      <h1>"Happy Shopping"</h1>
      <Link to="/MyCart" style={{ textDecoration: "none" }}>
        <button className="cart">My Cart</button>
      </Link>
    </div>
  );
}
