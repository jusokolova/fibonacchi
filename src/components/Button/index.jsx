export const Button = ({ onClick, disabled, children }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
