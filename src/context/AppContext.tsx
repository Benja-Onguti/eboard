import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  isLoading: boolean;
  isMobileMenuOpen: boolean;
  notifications: Notification[];
  user: User | null;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

type AppAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'TOGGLE_MOBILE_MENU'; payload?: boolean }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'SET_USER'; payload: User | null };

const initialState: AppState = {
  isLoading: false,
  isMobileMenuOpen: false,
  notifications: [],
  user: null,
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        isMobileMenuOpen: action.payload ?? !state.isMobileMenuOpen,
      };

    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };

    case 'SET_USER':
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

interface AppContextType extends AppState {
  setLoading: (loading: boolean) => void;
  toggleMobileMenu: (open?: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  setUser: (user: User | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const toggleMobileMenu = (open?: boolean) => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU', payload: open });
  };

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(7);
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { ...notification, id },
    });

    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
    }
  };

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const setUser = (user: User | null) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        toggleMobileMenu,
        addNotification,
        removeNotification,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
