import { useState, useEffect } from 'react';
import cryptoJs from 'crypto-js';

// ==============================|| LOCAL STORAGE ||============================== //

const encryptKey = "BtWVvTEjuU1BcrOaoGlh9N5wBf1KWvRj";

export default function useLocalStorage<ValueType>(key: string, defaultValue: ValueType) {
  const [value, setValue] = useState(() => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    return storedValue === null ? defaultValue : JSON.parse(cryptoJs.AES.decrypt(storedValue, encryptKey).toString(cryptoJs.enc.Utf8));
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (typeof window !== 'undefined' && e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(cryptoJs.AES.decrypt(e.newValue, encryptKey).toString()) : e.newValue);
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: ValueType) => {
    setValue((currentValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      if (typeof window !== 'undefined') localStorage.setItem(key, cryptoJs.AES.encrypt(JSON.stringify(result), encryptKey).toString());
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}