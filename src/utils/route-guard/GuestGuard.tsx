import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
import config from '@fruity/config';
import useAuth from '@fruity/hooks/useAuth';

// types
import { GuardProps } from '@fruity/types/auth';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(config.defaultPath, { replace: true });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
      navigate(config.defaultPath, { replace: true });
    }, [navigate]);

  return children;
};

export default GuestGuard;
