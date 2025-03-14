import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './authProvider';

const useProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('Login');
    }
  }, [isAuthenticated, navigation]);
};

export default useProtectedRoute;
