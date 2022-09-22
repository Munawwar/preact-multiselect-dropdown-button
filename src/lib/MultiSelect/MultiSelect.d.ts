import { Component } from 'preact';

export type ListItem = {
  label: string,
  id: string,
  name?: string,
  checked: boolean
};

export type Props = {
  /**
   * List of items to be shown in the dropdown
   */
  list: ListItem[],
  dropdownButtonText: string,
  isRightAligned?: boolean,
  selectAllButtonText?: string,
  /**
   * Triggered immediately when items are checked (before clicking the 'apply' button)
   */
  onOptionChanged?: (list: ListItem[]) => void,
  /**
   * Triggered after selections are applied (by clicking the 'apply' button)
   */
  onSelectionApplied?: (list: ListItem[]) => void,
  resetButtonText?: string,
  applyButtonText?: string,
}

export type State = {
  isDropdownOpened: boolean,
  checkedItems: ListItem[],
};

export default class MultiSelect extends Component<Props, State> {}

