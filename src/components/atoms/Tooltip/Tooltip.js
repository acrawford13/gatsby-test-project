import React from 'react';

const Tooltip = ({ children, tip }) => <span title={tip}>{children}</span>;

export default Tooltip;
