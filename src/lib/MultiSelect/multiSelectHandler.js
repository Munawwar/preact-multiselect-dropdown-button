export const getInitialCheckedItems = (list) =>
  list.reduce((acc, listItem) => {
    acc[listItem.id] = listItem.checked;
    return acc;
  }, {});

const getMultiSelectHandlers = ({ isDropdownOpened, setIsDropdownOpened, checkedItems, setCheckedItems }) => {
  const toggleDropdown = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const selectAll = () => {
    setCheckedItems(
      Object.keys(checkedItems).reduce((acc, listItemId) => {
        acc[listItemId] = true;
        return acc;
      }, {})
    );
  };

  const resetSelections = () => {
    setCheckedItems(
      Object.keys(checkedItems).reduce((acc, listItemName) => {
        acc[listItemName] = false;
        return acc;
      }, {})
    );
  };

  const handleInputChange = (event) => {
    const tag = event.target.tagName;
    const target = tag === 'LABEL' ? event.target.children[0] : event.target;
    // If user used the keyboard to select the label, we need to programatically check the checkbox child.
    // Also needed to work with screen readers
    if (tag === 'LABEL') {
      target.checked = !target.checked;
      // preventing just after toggle checked property in order to prevent the space scroll behavior on a list
      event.preventDefault();
    }
    const { id, checked } = target;

    setCheckedItems({ ...checkedItems, [id]: checked });
  };

  return {
    // isDropdownOpened,
    // checkedItems,
    toggleDropdown,
    selectAll,
    resetSelections,
    handleInputChange,
  };
};

export default getMultiSelectHandlers;
