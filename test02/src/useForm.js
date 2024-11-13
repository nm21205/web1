import { useState } from "react";

function useForm(initValue) {

  const [value, setValue] = useState(initValue)

  const onChangeHandler = (e) => {
    e.target.type === "checkbox" ?
    setValue({ ...value, [e.target.name]: e.target.checked }) :
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  return [value, onChangeHandler, setValue];
}

export default useForm 
