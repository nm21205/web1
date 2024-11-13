import './PersonTable.css';

const PersonTable = (props) => {//부모컴포넌트에서 전달한 속성을 props로 받음
  return (
    <table className='PersonTable'>
      <tbody>
        <tr><td>이름</td><td>나이</td></tr>
{props.persons.map(person => (
  <tr key={person.id}><td>{person.name}</td><td>{person.age}</td></tr>
))}
      </tbody>
    </table>
  )
}

export default PersonTable;