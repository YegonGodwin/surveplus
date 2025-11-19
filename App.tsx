import React, { useState, useEffect } from 'react';
import { Page } from './types';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/Dashboard';

// Function to decode JWT token
const decodeToken = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

const App: React.FC = () => {
  const [page, setPage] = useState<Page>(Page.LANDING);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && decodedToken.user) {
        setUser({
          id: decodedToken.user.id,
          fullName: decodedToken.user.fullName,
          email: decodedToken.user.email
        });
        setPage(Page.DASHBOARD);
      }
    }
    setLoading(false);
  }, []);

  const handleSignOut = async () => {
    localStorage.removeItem('token');
    setUser(null);
    setPage(Page.LANDING);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen bg-acid-base-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-acid-primary"></div>
        </div>
      );
    }

    if (user) {
      return <DashboardPage user={user} onSignOut={handleSignOut} />;
    }

    switch (page) {
      case Page.SIGNUP:
        return <SignUpPage
          onNavigateToLogin={() => setPage(Page.LOGIN)}
          onNavigateToLanding={() => setPage(Page.LANDING)}
          onRegisterSuccess={(userData) => {
            // Update user state with the data from registration response
            setUser(userData);
            setPage(Page.DASHBOARD);
          }}
        />;
      case Page.LOGIN:
        return <LoginPage
          onNavigateToSignUp={() => setPage(Page.SIGNUP)}
          onNavigateToLanding={() => setPage(Page.LANDING)}
          onLoginSuccess={(userData) => {
            // Update user state with the data from login response
            setUser(userData);
            setPage(Page.DASHBOARD);
          }}
        />;
      case Page.LANDING:
      default:
        return <LandingPage onNavigateToSignUp={() => setPage(Page.SIGNUP)} onNavigateToLogin={() => setPage(Page.LOGIN)} />;
    }
  };

  return <div className="min-h-screen">{renderContent()}</div>;
};

export default App;