import "./Button.css";
/**
 * @description Button component
 * @param handleClick handle click function
 * @param children React children props
 * @param {string} [name] button name
 * @param {string} [ariaLabel] aria label attribute
 * @param {string} [variant] button variants (contained or standard)
 * @param {string} [type] button type
 * @returns
 */
const Button = ({
  handleClick,
  children,
  name = "",
  variant = "contained",
  type = "button",
  disabled = false,
  ariaLabel = "",
}) => {
  const buttonStyle =
    variant === "standard"
      ? "jh-modal-button jh-modal-button-standard"
      : "jh-modal-button jh-modal-button-contained";
  return (
    <button
      name={name}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={buttonStyle}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
