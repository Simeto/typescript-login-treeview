export interface CustomInputInterface {
  type: string,
  value: string | number,
  name: string,
  required?: boolean,
  label: string,
  className?: string | Object,
  onChange: Function,
};

export interface CustomCheckboxInterface {
  checked: boolean,
  name: string,
  required?: boolean,
  label: string,
  className?: string | Object,
  onCheck: Function,
};

export interface CustomButtonInterface {
  type: string,
  checked: boolean,
  name: string,
  required?: boolean,
  className?: string | Object,
  setClick?: Function,
};

export type CheckboxList = [CustomCheckboxInterface]
