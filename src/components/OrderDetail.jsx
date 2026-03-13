import { useOrders } from '../context/OrderContext';

const STATUS_ORDER = ['pending', 'shipped', 'delivered'];

export default function OrderDetail({ orderId, onClose }) {
  const { getOrder, updateOrderStatus } = useOrders();
  const order = getOrder(orderId);

  if (!order) return null;

  const statusIndex = STATUS_ORDER.indexOf(order.status);
  const nextStatus = statusIndex < STATUS_ORDER.length - 1 ? STATUS_ORDER[statusIndex + 1] : null;

  const formatDate = (iso) => new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="order-detail-overlay" onClick={onClose}>
      <div className="order-detail" onClick={(e) => e.stopPropagation()}>
        <div className="order-detail-header">
          <h3>Order {order.id}</h3>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="order-status-flow">
          {STATUS_ORDER.map((status, i) => (
            <div
              key={status}
              className={`status-step ${i <= statusIndex ? 'done' : ''} ${order.status === status ? 'current' : ''}`}
            >
              <span className="status-dot" />
              <span className="status-label">{status}</span>
              {i < STATUS_ORDER.length - 1 && <span className="status-line" />}
            </div>
          ))}
        </div>

        <div className="order-detail-body">
          <p className="order-date">Placed on {formatDate(order.date)}</p>

          <ul className="order-items-list">
            {order.items.map((item, i) => (
              <li key={i}>
                <span>{item.product}</span>
                <span>× {item.quantity}</span>
                <span>${(item.quantity * item.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <p className="order-total">Total: ${order.total.toFixed(2)}</p>

          {nextStatus && (
            <button
              type="button"
              className="update-status-btn"
              onClick={() => updateOrderStatus(order.id, nextStatus)}
            >
              Mark as {nextStatus}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
