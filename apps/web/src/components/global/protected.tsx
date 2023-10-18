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
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [renderedElement, setRenderedElement] =
    useState<React.ReactElement | null>(null);

  console.log(authContext);

  useEffect(() => {
    if (authContext) {
      if (authContext.isLoggedIn) {
        if (requiredRoles.includes(authContext.userRole)) {
          setRenderedElement(element);
        }
      } else {
        navigate('/unauthorized');
      }
    }
  }, [authContext, requiredRoles, navigate, element]);

  return renderedElement;
}

export default ProtectedRoute;
