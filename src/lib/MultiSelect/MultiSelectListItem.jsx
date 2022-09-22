/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.name]
 * @param {string} props.id
 * @param {() => void} props.handleInputChange
 * @param {boolean} props.checked
 */
const MultiSelectListItem = (props) => {
  const { label, name, id, handleInputChange, checked, forwardRef } = props;

  return (
    <li className="MultiSelect-listItem" role="option">
      <label
        role="checkbox"
        aria-checked={checked}
        tabIndex="0"
        htmlFor={id}
        onKeyPress={handleInputChange}
        ref={forwardRef}
        className={`MultiSelect-lisItemLabel${checked ? ' MultiSelect-lisItemLabel--checked' : ''}`}
      >
        {label}
        <input
          className="Multiselect-listItemCheckbox"
          type="checkbox"
          name={name}
          id={id}
          onChange={handleInputChange}
          checked={checked}
        />
      </label>
    </li>
  );
};

export default MultiSelectListItem;
