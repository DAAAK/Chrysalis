import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        navigate("/");
    }, 3000); // 3 seconds

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center">
      <p className="text-2xl font-bold text-gray-700">Please wait...</p>
    </div>
  );
};

export default Loading;
