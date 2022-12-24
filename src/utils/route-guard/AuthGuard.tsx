import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
import useAuth from '@fruity/hooks/useAuth';

// types
import { GuardProps } from '@fruity/types/auth';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default AuthGuard;
