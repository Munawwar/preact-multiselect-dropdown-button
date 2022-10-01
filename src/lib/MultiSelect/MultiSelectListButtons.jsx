/**
 * @param {object} props
 * @param {() => void} props.selectAll
 * @param {() => void} props.resetSelections
 * @param {string} [props.selectAllButtonText = 'Select All']
 * @param {string} [props.resetButtonText = 'Reset']
 */
const MultiSelectListButtons = ({ selectAll, selectAllButtonText, resetSelections, resetButtonText }) => (
  <div className="PreactMultiSelect-listButtonsWrapper">
    <button className="PreactMultiSelect-listButtonsSelectAll" onClick={selectAll}>
      {selectAllButtonText}
    </button>
    <button className="PreactMultiSelect-listButtonsReset" onClick={resetSelections}>
      {resetButtonText}
    </button>
  </div>
);

MultiSelectListButtons.defaultProps = {
  selectAllButtonText: 'Select All',
  resetButtonText: 'Reset',
};

export default MultiSelectListButtons;
