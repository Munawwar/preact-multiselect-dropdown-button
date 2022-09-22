/**
 * @param {object} props
 * @param {string} [props.applyButtonText = 'Apply']
 * @param {() => void} [props.handleApplyClick]
 */
const MultiSelectFooter = ({ applyButtonText = 'Apply', handleApplyClick }) => (
  <div className="MultiSelect-footer">
    <button className="MultiSelect-footerApplyButton" onClick={handleApplyClick}>
      {applyButtonText}
    </button>
  </div>
);

export default MultiSelectFooter;
