import { render } from 'preact';
import { mount } from 'enzyme';
import { act } from 'preact/test-utils';
import MultiSelect from '../lib/MultiSelect/MultiSelect';

describe('<MultiSelect />', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  const multiSelectProps = {
    list: [
      {
        label: 'First option',
        name: 'first-option',
        id: 'first-option-1',
        checked: false,
      },
      {
        label: 'Second option',
        name: 'second-option',
        id: 'second-option-2',
        checked: false,
      },
      {
        label: 'Third option',
        name: 'third-option',
        id: 'third-option-3',
        checked: false,
      },
    ],
    onSelectionApplied: (/* selection */) => {
      // console.log('Selected : ', selection);
    },
    onOptionChanged: (/* optionState */) => {
      // console.log('optionState : ', optionState);
    },
    dropdownButtonText: 'Selected',
    resetButtonText: 'Reset',
    applyButtonText: 'Apply',
  };

  test('should match snapshot - dropdown closed', () => {
    const wrapper = mount(<MultiSelect {...multiSelectProps} />);

    expect(wrapper.getDOMNode()).toMatchSnapshot();
  });

  test('should match snapshot - dropdown opened', () => {
    const wrapper = mount(<MultiSelect {...multiSelectProps} />);
    wrapper.find('button.MultiSelect-dropdownButton').simulate('click');

    expect(wrapper.getDOMNode()).toMatchSnapshot();
  });

  test('should open dropdown when button is clicked', () => {
    const wrapper = mount(<MultiSelect {...multiSelectProps} />);

    expect(wrapper.find('button.MultiSelect-dropdownButton')).toBeDefined();
    expect(wrapper.find('.MultiSelect-sectionWrapper').get(0)).toBeUndefined();

    wrapper.find('button.MultiSelect-dropdownButton').simulate('click');

    expect(wrapper.find('.MultiSelect-sectionWrapper')).toBeDefined();
  });

  test('should select the first item clicking on its input checkbox', () => {
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const firstOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[0];
    const firstOptionCheckbox = firstOptionLabel.querySelector('input.MultiSelect-listItemCheckbox');

    act(() => {
      firstOptionCheckbox.dispatchEvent(new MouseEvent('click'));
    });

    expect(firstOptionCheckbox.checked).toBeTruthy();
  });

  test('should select the first item clicking on its label', async () => {
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const firstOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[0];
    const firstOptionCheckbox = firstOptionLabel.querySelector('input.MultiSelect-listItemCheckbox');

    act(() => {
      // firstOptionLabel.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      firstOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    expect(firstOptionCheckbox.checked).toBeTruthy();
  });

  test('should unselect the first item', () => {
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const firstOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[0];
    const firstOptionCheckbox = firstOptionLabel.querySelector('input.MultiSelect-listItemCheckbox');

    act(() => {
      firstOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    expect(firstOptionCheckbox.checked).toBeTruthy();

    act(() => {
      firstOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    expect(firstOptionCheckbox.checked).toBeFalsy();
  });

  test('should apply selections', () => {
    const spyApply = jest.spyOn(multiSelectProps, 'onSelectionApplied');
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const firstOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[0];
    act(() => {
      firstOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    const applyButton = container.querySelector('button.MultiSelect-footerApplyButton');
    act(() => {
      applyButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(spyApply).toHaveBeenCalledWith({
      'first-option-1': true,
      'second-option-2': false,
      'third-option-3': false,
    });
  });

  test('should badge have the right quantity', () => {
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const firstOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[0];
    act(() => {
      firstOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    const badge = container.querySelector('span.MultiSelect-badge');
    expect(badge.textContent).toBe('1');

    const lastOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[2];
    act(() => {
      lastOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    expect(badge.textContent).toBe('2');
  });

  test('should select all items', () => {
    const spyOptionChanged = jest.spyOn(multiSelectProps, 'onOptionChanged');
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const buttonSelectAll = container.querySelector('button.MultiSelect-listButtonsSelectAll');
    act(() => {
      buttonSelectAll.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(spyOptionChanged).toHaveBeenCalledWith({
      'first-option-1': true,
      'second-option-2': true,
      'third-option-3': true,
    });
  });

  test('should reset selection', () => {
    const spyOptionChanged = jest.spyOn(multiSelectProps, 'onOptionChanged');
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const buttonSelectAll = container.querySelector('button.MultiSelect-listButtonsSelectAll');
    act(() => {
      buttonSelectAll.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(spyOptionChanged).toHaveBeenCalledWith({
      'first-option-1': true,
      'second-option-2': true,
      'third-option-3': true,
    });

    act(() => {
      buttonSelectAll.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(spyOptionChanged).toHaveBeenCalledWith({
      'first-option-1': false,
      'second-option-2': false,
      'third-option-3': false,
    });
  });

  test('should trigger option changed', () => {
    const spyOptionChanged = jest.spyOn(multiSelectProps, 'onOptionChanged');
    act(() => {
      render(<MultiSelect {...multiSelectProps} />, container);
    });

    const buttonDropdown = container.querySelector('button.MultiSelect-dropdownButton');
    act(() => {
      buttonDropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const firstOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[0];
    act(() => {
      firstOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    expect(spyOptionChanged).toHaveBeenCalledWith({
      'first-option-1': true,
      'second-option-2': false,
      'third-option-3': false,
    });

    const lastOptionLabel = container.querySelectorAll('label.MultiSelect-listItemLabel')[2];
    act(() => {
      lastOptionLabel.dispatchEvent(new KeyboardEvent('keypress'));
    });

    expect(spyOptionChanged).toHaveBeenCalledWith({
      'first-option-1': true,
      'second-option-2': false,
      'third-option-3': true,
    });
  });
});
