import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './authContext';

function ProtectedRoute({
  element,
  requiredRoles,
}: {
  element: React.ReactElement;
  requiredRoles: string[];
}) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (authContext) {
    const { isLoggedIn, userRole } = authContext;

    if (isLoggedIn) {
      if (requiredRoles.includes(userRole)) {
        return element;
      } else {
        navigate('/unauthorized');
      }
    } else {
      navigate('/login');
    }
  }

  return null;
}

export default ProtectedRoute;
