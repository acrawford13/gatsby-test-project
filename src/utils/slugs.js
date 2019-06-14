export const stringifyChildren = children =>
  typeof children === 'string'
    ? children
    : children.map(val => (typeof val === 'string' ? val : val.props.children)).join('');
