export const stringifyChildren = children => {
  if (typeof children === 'string') return children;
  if (children.map) return children.map(val => (typeof val === 'string' ? val : val.props.children)).join('');
  return children.props.children;
};
