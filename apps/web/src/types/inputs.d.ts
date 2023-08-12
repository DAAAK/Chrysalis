interface Option {
  value: string;
  label: string;
}

export interface IDefaultInput {
  label: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  handleInputChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISelectInput {
  label: string;
  options: Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
