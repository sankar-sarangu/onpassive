export interface ComponentModel {
  label?: string;
  options?: string[];
  mandatory?: boolean;
  formCtrl?: string;
  min?: number;
  max?: number;
  rows?: number;
  cols?: number;
  numberMode?: string;
  minDigit?: string;
}
