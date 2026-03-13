import { useState } from 'react';
import { useOrders } from '../context/OrderContext';
import OrderDetail from './OrderDetail';

export default function OrdersPage({ onBack }) {
  const { orders } = useOrders();
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <div className="orders-page">
      <header className="header">
        <button type="button" className="back-btn" onClick={onBack}>
          ← Shop
        </button>
        <h1>My Orders</h1>
        <div className="header-spacer" />
      </header>

      <main className="orders-content">
        {orders.length === 0 ? (
          <p className="no-orders">No orders yet. Add items to cart and place an order!</p>
        ) : (
          <ul className="orders-list">
            {orders.map((order) => (
              <li key={order.id} className="order-card">
                <button
                  type="button"
                  className="order-card-btn"
                  onClick={() => setSelectedOrderId(order.id)}
                >
                  <div className="order-card-header">
                    <span className="order-id">{order.id}</span>
                    <span className={`order-status status-${order.status}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="order-card-date">{formatDate(order.date)}</p>
                  <p className="order-card-total">${order.total.toFixed(2)}</p>
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>

      {selectedOrderId && (
        <OrderDetail
          orderId={selectedOrderId}
          onClose={() => setSelectedOrderId(null)}
        />
      )}
    </div>
  );
}
