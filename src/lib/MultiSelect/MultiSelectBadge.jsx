/**
 * @param {object} props
 * @param {string} props.text
 * @param {number} props.quantity
 */
const MultiSelectBadge = ({ text, quantity }) => (
  <>
    {text} <span className="MultiSelect-badge">{quantity}</span>
  </>
);

export default MultiSelectBadge;
