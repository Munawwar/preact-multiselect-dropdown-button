import MultiSelectBadge from './MultiSelectBadge';

/**
 * @param {object} props
 * @param {string} props.text
 * @param {() => void} props.toggleDropdown
 * @param {number} props.quantity
 * @param {boolean} props.isOpened
 */
const MultiSelectDropdown = ({ text, toggleDropdown, quantity, isOpened }) => (
  <button
    className={`MultiSelect-dropdownButton${isOpened ? ' MultiSelect-dropdownButton--opened' : ''}`}
    onClick={toggleDropdown}
    aria-haspopup="true"
  >
    <MultiSelectBadge className="MultiSelect-badge" text={text} quantity={quantity} />
  </button>
);

export default MultiSelectDropdown;
