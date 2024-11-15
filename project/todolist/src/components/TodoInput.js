import React, { useState, useCallback } from 'react';
import { MdAdd } from "react-icons/md";
import './TodoInput.scss';


//App컴포넌트에서 onInput함수를 파라미터로 받아서
const TodoInput = ({ onInput }) => {

  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
		  //onInput함수에 현재 useState를 통해 관리하고 있는 value값을 파라미터로 넣어서 호출
      onInput(value);
      setValue(e.target.value); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위하여 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInput, value]
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();//submit이벤트는 브라우저에서 새로고침을 발생ㅎ시킵니다.
  })

  return (
    <form className='TodoInput' onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInput;