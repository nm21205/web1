//컴포넌트 생성
const MultiplicationTable = () => {
  //구구단 데이터 생성
  const generateTableData = () => {
    const data = [];//구구단을 담을 배열
    for(let i=1; i<=9; i++){//1부터 9까지 반복
      const row = [];
      for(let j=1; j<=9; j++){//1부터 9까지 반복
        row.push(i*j);//1단부터 9단까지 곱한값을 row배열에 넣어줍니다.
      }
      data.push(row);//data배열에 row배열을 넣어줍니다.
    }
    return data//리턴으로 data를 반환
  }

  //generateTableData함수를 호출하여 구구단 데이터를 tableData변수에 할당
  const tableData = generateTableData();
  //버츄얼DOM을 리턴하여 렌더링
  return (
    <table cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th></th>
          {/*배열요소가 9개인 빈배열을 사용하여 1부터9까지 숫자를 th태그로 넣어줌 */}
          {Array.from({length:9}, (_, index) => (
            <th key={index + 1}>{index+1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
         //rowindex가 짝수면 whiteBg클래스를 적용하고 홀수면 grayBg클래스를 적ㅇㅇ
          <tr
            key={rowIndex + 1}
            className={rowIndex % 2 === 0 ?'whiteBg':"grayBg"}
          >            <td>{rowIndex+1}</td>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

//내보내기
export default MultiplicationTable;