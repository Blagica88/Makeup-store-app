import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../contex";

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  details: {
    marginBottom: "10px",
  },
  cartItems: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    marginBottom: "8px",
  },
  backButton: {
    display: "block",
    margin: "20px 0",
    padding: "10px 20px",
    backgroundColor: "#FFEBD8",
    color: "#000",
    textDecoration: "none",
    borderRadius: "5px",
    textAlign: "center",
  },
};

const ShowOrder = () => {
  const { orders } = useGlobalContext();
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const selectedOrder = orders.find((item) => item.id === id);
    setOrder(selectedOrder);
  }, [id, orders]);

  if (!order) {
    return <div style={styles.container}>Вчитување...</div>;
  }

  const { customer, cart, orderDate, status } = order;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Детали за нарачка</h2>
      <p style={styles.details}>
        <strong>ID на нарачка:</strong> {id}
      </p>
      <p style={styles.details}>
        <strong>Име на клиент:</strong> {customer.name} {customer.lastname}
      </p>
      <p style={styles.details}>
        <strong>Адреса:</strong> {customer.address}, {customer.location}
      </p>
      <p style={styles.details}>
        <strong>Е-пошта:</strong> {customer.email}
      </p>
      <p style={styles.details}>
        <strong>Датум на нарачка:</strong> {orderDate}
      </p>
      <p style={styles.details}>
        <strong>Статус:</strong> {status}
      </p>
      <h3 style={styles.heading}>Ставки во кошничката:</h3>
      <ul style={styles.cartItems}>
        {cart.map((item) => (
          <li key={item.id} style={styles.listItem}>
            {item.name} - Количина: {item.amount}
          </li>
        ))}
      </ul>
      <Link to="/showorders" style={styles.backButton}>
        Назад кон нарачките
      </Link>
    </div>
  );
};

export default ShowOrder;
