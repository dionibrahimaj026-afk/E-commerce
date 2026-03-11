import { useState } from 'react';

const info = {
  desc: 'Premium quality product crafted with attention to detail. Perfect for everyday wear. Made from sustainable materials with a focus on comfort and durability.',
  specs: 'Material: 100% Cotton | Weight: 250g | Dimensions: Standard fit | Care: Machine wash cold',
  shipping: 'Free shipping on orders over $50. Standard delivery: 3-5 business days. Express shipping available.',
};

const tabs = [
  { id: 'desc', label: 'Description', content: info.desc },
  { id: 'specs', label: 'Specs', content: info.specs },
  { id: 'shipping', label: 'Shipping', content: info.shipping },
];

export default function TabbedDetails() {
  const [activeTab, setActiveTab] = useState('desc');

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className="tabbed-details">
      <div className="tab-headers">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{activeContent}</p>
      </div>
    </div>
  );
}
