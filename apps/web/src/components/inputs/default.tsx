import { IDefaultInput } from '../../types/inputs';

const DefaultInput = ({
  label,
  type,
  value,
  handleInputChange,
}: IDefaultInput) => {
  return (
    <div className="mb-4">
      <label className="mb-1 font-semibold">{label}:</label>
      <input
        type={type}
        className="border border-gray-300 rounded px-3 py-2 w-full"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DefaultInput;
