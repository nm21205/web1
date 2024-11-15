import cn from 'classname';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";
import './TodoListItem.scss';



//받아온 todo객체를 비구조화 할당으로 각각 text변수와 checked변수에 나눠서 할당
const TodoListItem = ({todo}) => {
  const {text, checked} = todo;
  
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox',{checked})}>

        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem;