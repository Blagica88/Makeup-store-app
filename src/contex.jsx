import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import { products } from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([...products]);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    setOrders(orders);
    console.log("Orders updated:", orders);
  }, [orders]);

  const createOrder = () => {
    const newOrder = {
      id: uuidv4(),
      customer: {
        name,
        lastname,
        address,
        location,
        email,
      },
      cart,
      orderDate: new Date().toLocaleDateString(),
      status: "Pending",
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
    console.log(name, lastname, address, location, email);

    // Clear the cart immediately
    setCart([]);
    setName("");
    setLastname("");
    setAddress("");
    setLocation("");
    setEmail("");

    // Call the function to create the order after clearing the cart
    createOrder();
    console.log(orders);
  };

  const addItemToCart = (item) => {
    let newItem = { ...item };
    newItem.amount = item?.amount || 1;

    const items = [...cart];
    const index = cart.findIndex((cartItem) => cartItem?.id === item?.id);
    if (index >= 0) {
      items[index].amount += newItem.amount;
    } else {
      items.push(newItem);
    }
    setCart(items);
  };

  const decreaseItemFromCart = (id) => {
    let items = [...cart];
    const index = cart.findIndex((cartItem) => cartItem?.id === id);
    if (index >= 0) {
      items[index].amount -= 1;
      if (items[index].amount <= 0) {
        items = items.filter((item) => item.id !== id);
      }
    }
    setCart(items);
  };

  const removeItemFromCart = (id) => {
    const newItems = cart.filter((item) => item.id !== id);
    setCart(newItems);
  };

  const getTotals = () => {
    let totalAmount = 0;
    let totalCost = 0;

    for (let { amount, price } of cart) {
      console.log(amount, price);
      totalAmount += amount;
      totalCost += amount * price;
    }
    return { totalAmount, totalCost };
  };

  return (
    <AppContext.Provider
      value={{
        productsList,
        setProductsList,
        cart,
        addItemToCart,
        removeItemFromCart,
        decreaseItemFromCart,
        getTotals,
        name,
        lastname,
        address,
        email,
        location,
        handleNameChange,
        handleLastnameChange,
        handleAddressChange,
        handleEmailChange,
        handleLocationChange,
        handleSubmit,
        orders,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
