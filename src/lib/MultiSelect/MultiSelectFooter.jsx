/**
 * @param {object} props
 * @param {string} [props.applyButtonText = 'Apply']
 * @param {() => void} [props.handleApplyClick]
 */
const MultiSelectFooter = ({ applyButtonText = 'Apply', handleApplyClick }) => (
  <div className="PreactMultiSelect-footer">
    <button className="PreactMultiSelect-footerApplyButton" onClick={handleApplyClick}>
      {applyButtonText}
    </button>
  </div>
);

export default MultiSelectFooter;
