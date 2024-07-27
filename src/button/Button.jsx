import "./Button.css";
/**
 * @description Button component
 * @param handleClick handle click function
 * @param children React children props
 * @param {string} [name] button name
 * @param {string} [ariaLabel] aria label attribute
 * @param {string} [type] button type
 * @returns
 */
const Button = ({
  handleClick,
  children,
  name = "",
  type = "button",
  disabled = false,
  ariaLabel = "",
}) => {
  return (
    <button
      name={name}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className="button button-contained"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
