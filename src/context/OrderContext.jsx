import { createContext, useContext, useState } from 'react';

const OrderContext = createContext(null);

const STATUSES = ['pending', 'shipped', 'delivered'];

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const createOrder = (items, total) => {
    const order = {
      id: `ORD-${Date.now()}`,
      items,
      total,
      status: 'pending',
      date: new Date().toISOString(),
    };
    setOrders((prev) => [order, ...prev]);
    return order.id;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    if (!STATUSES.includes(newStatus)) return;
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const getOrder = (orderId) => orders.find((o) => o.id === orderId);

  return (
    <OrderContext.Provider value={{ orders, createOrder, updateOrderStatus, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrders must be used within OrderProvider');
  return ctx;
}
