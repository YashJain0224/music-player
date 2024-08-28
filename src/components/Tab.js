import React from 'react';
import '../styles/Tab.css';

const Tab = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    <button
      className={activeTab === 'for-you' ? 'active' : ''}
      onClick={() => setActiveTab('for-you')}
    >
      For You
    </button>
    <button
      className={activeTab === 'top-tracks' ? 'active' : ''}
      onClick={() => setActiveTab('top-tracks')}
    >
      Top Tracks
    </button>
  </div>
);

export default Tab;
