import React, {useMemo, useState} from "react";

// 평균구하는 함수
const getAverage = (number) => {
    console.log('평균값 계산중 ...');
    if(number.length === 0) return 0;
    const sum = number.reduce((a,b) => a + b);
    return sum / number.length;
}

var Average = () => {

    const [list, setList] = useState([]);
    const [number,setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    };
    const onInsert = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    // useMemo Hook을 사용하면 인풋값이 바뀌면서 다시 렌더링 되어 getAverage함수가 다시 호출되는 연산 과정을 막을수 있다.
    const avg = useMemo(() => getAverage(list), [list]);

    return(

        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균:</b> {avg}
            </div>
        </div>
    );
};


export default Average;