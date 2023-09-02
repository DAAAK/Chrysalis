import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ToggleButton({
  action,
  isLoggedIn,
}: {
  action: () => void;
  isLoggedIn: boolean;
}) {
  const navigate = useNavigate();

  const [isOn, setIsOn] = useState(isLoggedIn);

  const handleClick = () => {
    setIsOn(!isOn);
    action();
    if (!isOn) {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className={`${
          isOn
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-red-500 hover:bg-red-600'
        } text-white font-bold py-2 px-4 rounded`}
        onClick={handleClick}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;
