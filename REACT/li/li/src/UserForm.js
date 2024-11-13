import { useState } from 'react';

const UserForm = () => {
  // 상태 변수 및 설정 함수 정의
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [language, setLanguage] = useState('React');

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nAge: ${age}\nLanguage: ${language}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: 'auto', outline: '1px solid red' }}
    >
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="language">Programming Language: </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)} // setLanguage로 수정
        >
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>
      {/* 전송 버튼(submit)을 누르면 handleSubmit 함수가 호출됨 */}
      <button type="submit">전송</button> {/* "전솔" -> "전송"으로 수정 */}
    </form>
  );
};

export default UserForm;