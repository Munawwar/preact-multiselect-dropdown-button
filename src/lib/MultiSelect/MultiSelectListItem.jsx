/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
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
    <li className="PreactMultiSelect-listItem" role="option">
      <label
        role="checkbox"
        aria-checked={checked}
        tabIndex="0"
        htmlFor={id}
        onKeyPress={handleInputChange}
        ref={forwardRef}
        className={`PreactMultiSelect-listItemLabel${checked ? ' PreactMultiSelect-listItemLabel--checked' : ''}`}
      >
        {label}
        <input
          className="PreactMultiSelect-listItemCheckbox"
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
