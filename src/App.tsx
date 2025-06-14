import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import './App.scss';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'success'>('primary');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleButtonClick = () => {
    setMessage(`Ви ввели: "${inputValue}"`);
    setInputValue('');
  };

  const handleVariantChange = (variant: 'primary' | 'secondary' | 'success') => {
    setButtonVariant(variant);
    setMessage(`Стиль кнопки змінено на ${variant}`);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    
    <div className='container'>
      <div className="App">
      <h1>Мій Перший React Додаток з TypeScript</h1>
      
        <Button 
        text={theme === 'light' ? '🌙 Темна тема' : '☀ Світла тема'}
        onClick={toggleTheme}
        variant="secondary"
      />
      
      <Input 
        label="Введіть текст"
        placeholder="Спробуйте щось написати..."
        value={inputValue}
        onChange={setInputValue}
      />
      
      <div className="button-group">
        <Button 
          text="Primary"
          onClick={() => handleVariantChange('primary')}
          variant="primary"
        />
        <Button 
          text="Secondary"
          onClick={() => handleVariantChange('secondary')}
          variant="secondary"
        />
        <Button 
          text="Success"
          onClick={() => handleVariantChange('success')}
          variant="success"
        />
      </div>
      
      <Button 
        text="Надіслати" 
        onClick={handleButtonClick}
        disabled={!inputValue.trim()}
        variant={buttonVariant}
      />
      
      {message && <div className="message">{message}</div>}
    </div>
    </div>
  );
};

export default App;