//함수의 파라미터가 객체라면 그 값을 바로 비 구조화해서 사용 할 수 있다.
const MyComponent = ({name = "기본 이름", children}) => {
  //children = 자식 컴포넌트
  return (
    <div>
      안녕하셍 제 이름은{name}입니다. <br/>
      children 값은{children}입니다
    </div>
  )
}

export default MyComponent