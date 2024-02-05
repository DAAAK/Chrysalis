import { ReactElement, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './authContext';

//FIXME: Protected Route doesn't update the values of the authContext
function ProtectedRoute({
  element,
  requiredRoles,
}: {
  element: ReactElement;
  requiredRoles: string[];
}) {
  const { isLoggedIn, userRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const [renderedElement, setRenderedElement] = useState<ReactElement | null>(
    null
  );

  console.log('role = ' + userRole);

  useEffect(() => {
    if (isLoggedIn) {
      if (requiredRoles.includes(userRole)) {
        setRenderedElement(element);
      }
    } else {
      navigate('/unauthorized');
    }
  }, [isLoggedIn, userRole, requiredRoles, navigate, element]);

  return renderedElement;
}

export default ProtectedRoute;
