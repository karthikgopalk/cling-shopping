import React from 'react';
import './Collection-Preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <div key={items.id}>{item.name}</div>
        ))}
    </div>
  </div>
);
export default CollectionPreview;
