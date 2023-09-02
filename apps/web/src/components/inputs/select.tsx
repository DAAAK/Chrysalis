import { ISelectInput } from '../../types';

const SelectInput = ({ label, options, value, onChange }: ISelectInput) => {
  return (
    <div className="mb-4">
      <label className="mb-1 font-semibold">{label}:</label>
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 py-2 w-full"
      >
        <option value="">Choisissez {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
