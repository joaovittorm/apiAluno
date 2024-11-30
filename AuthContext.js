import React, { createContext, useState, useContext, useEffect } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Cria o provider para compartilhar o estado
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Função para fazer login (simulando)
  const login = (userData) => {
    setUser(userData); // Salva os dados do usuário no estado
    localStorage.setItem('user', JSON.stringify(userData)); // Armazena no localStorage
  };

  // Função para fazer logout
  const logout = () => {
    setUser(null); // Limpa os dados do usuário
    localStorage.removeItem('user'); // Remove o usuário do localStorage
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Recupera os dados do usuário, se existirem
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Função para acessar o contexto facilmente
export const useAuth = () => useContext(AuthContext);
