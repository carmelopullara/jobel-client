import React from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();
  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('locale', lang);
  };

  return (
    <div>
      <h1>{t('title')}</h1>
      <button type="button" onClick={() => setLanguage('en')}>
        en
      </button>
      <button type="button" onClick={() => setLanguage('it')}>
        it
      </button>
    </div>
  );
};

export default Login;
