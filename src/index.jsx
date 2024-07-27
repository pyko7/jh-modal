import Button from "./button/Button";
import CloseIcon from "./closeIcon/CloseIcon";
import "./index.css";

/**
 * @description Modal component
 * @param {string} title Title of the modal
 * @param {string} [subtitle] Subtitle of the modal
 * @param {string} [buttonName] Name of the button
 * @param {Function} onClose Callback function to close the modal
 * @param {Function} onClick Callback function on save button click
 * @param {string} backgroundColor Overlay background color
 * @param {string} modalBackgroundColor Modal window background color
 * @param {ReactNode} customCloseIcon Customizable close Icon
 *
 * @returns
 */
const Modal = ({
  title,
  subtitle,
  buttonName,
  onClose,
  onClick,
  backgroundColor,
  modalBackgroundColor,
  customCloseIcon,
}) => {
  return (
    <div className="jh-modal-modal-container">
      <div
        className="jh-modal-modal-background"
        style={{ backgroundColor }}
        onClick={onClose}
      ></div>
      <div
        className="jh-modal-modal"
        style={{ backgroundColor: modalBackgroundColor }}
      >
        <div className="jh-modal-modal-header">
          <span className="jh-modal-modal-text jh-modal-modal-title">
            {title}
          </span>
          <div className="jh-modal-modal-button">
            <Button
              ariaLabel="close modal"
              handleClick={onClose}
              variant="standard"
            >
              {customCloseIcon ? (
                customCloseIcon
              ) : (
                <CloseIcon
                  className="jh-modal-modal-close-icon"
                  ariaHidden={true}
                />
              )}
            </Button>
          </div>
        </div>
        <span className="jh-modal-modal-text jh-modal-modal-subtitle">
          {subtitle}
        </span>
        {buttonName && (
          <Button ariaLabel={buttonName} handleClick={onClick}>
            {buttonName}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Modal;
