import React from 'react';

export default ({ title, content }) => (

    <div className="activity-content-wrapper">
      <div className="content-title">{title}：</div>
      <div className="content-value">{content}</div>
    </div>
);
