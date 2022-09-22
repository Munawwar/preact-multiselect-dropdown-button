import { Component } from 'preact';
import ListboxKeyNav from '../react-listbox-keyboard-navigation/ListboxKeyNav';
import MultiSelectDropdown from './MultiSelectDropdown';
import MultiSelectListButtons from './MultiSelectListButtons';
import MultiSelectListItem from './MultiSelectListItem';
import MultiSelectFooter from './MultiSelectFooter';
import getMultiSelectHandlers, { getInitialCheckedItems } from './multiSelectHandler';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.setIsDropdownOpened = this.setIsDropdownOpened.bind(this);
    this.setCheckedItems = this.setCheckedItems.bind(this);

    this.listItems = [];

    this.state = {
      isDropdownOpened: false,
      checkedItems: getInitialCheckedItems(this.props.list || []),
    };
  }

  setIsDropdownOpened(value) {
    this.setState({ isDropdownOpened: value });
  }
  setCheckedItems(value) {
    this.setState({ checkedItems: value });
  }

  onUpdate(prevProps, prevState) {
    const { onOptionChanged } = this.props;
    const { isDropdownOpened, checkedItems } = this.state;

    if (isDropdownOpened && this.listItems[0] && (!prevState || isDropdownOpened !== prevState.isDropdownOpened)) {
      this.listItems[0].focus();
    }

    if (onOptionChanged && (!prevState || checkedItems !== prevState.checkedItems)) {
      onOptionChanged(checkedItems);
    }
  }

  componentDidMount() {
    this.onUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    this.onUpdate(prevProps, prevState);
  }

  render() {
    const {
      list,
      dropdownButtonText,
      isRightAligned,
      selectAllButtonText,
      onSelectionApplied,
      resetButtonText,
      applyButtonText,
    } = this.props;

    const { isDropdownOpened, checkedItems } = this.state;

    const { toggleDropdown, selectAll, resetSelections, handleInputChange } = getMultiSelectHandlers({
      isDropdownOpened,
      setIsDropdownOpened: this.setIsDropdownOpened,
      checkedItems,
      setCheckedItems: this.setCheckedItems,
    });

    this.listItems = [];
    const keyEvents = {
      up: () => {
        const activeElementIndex = this.listItems.findIndex((item) => item === document.activeElement);
        this.listItems[activeElementIndex - 1] && this.listItems[activeElementIndex - 1].focus();
      },
      down: () => {
        const activeElementIndex = this.listItems.findIndex((item) => item === document.activeElement);
        this.listItems[activeElementIndex + 1] && this.listItems[activeElementIndex + 1].focus();
      },
      home: () => {
        this.listItems[0] && this.listItems[0].focus();
      },
      end: () => {
        this.listItems[this.listItems.length - 1] && this.listItems[this.listItems.length - 1].focus();
      },
    };
    const checkedItemsQuantity = Object.keys(checkedItems).filter((itemName) => checkedItems[itemName]).length;

    const handleApplyClick = () => {
      onSelectionApplied(checkedItems);
    };

    return (
      <div className="MultiSelect-wrapper">
        <MultiSelectDropdown
          className="multiselect-button-dropdown"
          text={dropdownButtonText}
          quantity={checkedItemsQuantity}
          toggleDropdown={toggleDropdown}
          isOpened={isDropdownOpened}
        />
        {isDropdownOpened && (
          <div
            className={`MultiSelect-sectionWrapper${isRightAligned ? ' MultiSelect-sectionWrapper--rightAligned' : ''}`}
          >
            <MultiSelectListButtons
              selectAll={selectAll}
              selectAllButtonText={selectAllButtonText}
              resetSelections={resetSelections}
              resetButtonText={resetButtonText}
            />
            <ListboxKeyNav
              role="listbox"
              tag="ul"
              className={`MultiSelect-list${onSelectionApplied ? ' MultiSelect-list--hasFooter' : ''}`}
              keyEvents={{ ...keyEvents }}
            >
              {list.map((listItem, index) => {
                const { label, id, name } = listItem;
                const checked = checkedItems[id];
                const key = `${id}-${index}`;

                return (
                  <MultiSelectListItem
                    className="multiselect-list-item"
                    label={label}
                    key={key}
                    id={id}
                    name={name}
                    handleInputChange={handleInputChange}
                    checked={checked}
                    forwardRef={(el) => {
                      this.listItems[index] = el;
                      return el;
                    }}
                  />
                );
              })}
            </ListboxKeyNav>
            {onSelectionApplied && (
              <MultiSelectFooter applyButtonText={applyButtonText} handleApplyClick={handleApplyClick} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MultiSelect;
