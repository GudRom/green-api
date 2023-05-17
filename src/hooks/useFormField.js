import { useCallback, useState } from "react";

export const useFormField = (initialValue) => {
  const [isFault, setIsFault] = useState(false);
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onBlur = () => {
    if (!value) {
      setIsFault(true);
    } else {
      setIsFault(false);
    }
  };
  return { value, onChange, onBlur, isFault, setValue };
};
