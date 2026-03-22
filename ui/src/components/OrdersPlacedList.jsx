import React from 'react';
import '../styles/OrderList.css';

export default function OrdersPlacedList({ orders }) {
  return (
    <div className="order-list-container">
      <h4 className="order-list-title">Orders Placed</h4>
      <ul className="order-list">
        {orders && orders.length > 0 ? orders.map((order, idx) => (
          <li key={idx} className="order-list-item">
            <span className={`order-type ${order.direction}`}>{order.direction.toUpperCase()}</span>
            <span className="order-qty">Qty: {order.quantity}</span>
            <span className="order-price">@ {order.price}</span>
          </li>
        )) : <li className="order-list-item">No orders placed</li>}
      </ul>
    </div>
  );
}
