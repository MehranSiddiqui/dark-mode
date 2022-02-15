import { useState,useEffect} from "react";

const storedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  }
  if (initialValue instanceof Function) {
    return initialValue();
  } else {
    return initialValue;
  }
};
const useLocalStorage = (key, initialValue) => {
  const [theme, setTheme] = useState(()=>{
    return storedValue(key, initialValue);
  });
    useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(theme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[theme]);
  return [theme, setTheme];
};

export default useLocalStorage;
