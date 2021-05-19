import React, {useEffect, useState} from "react";

var Info = () => {
  // useState
  // name , nickname
  var [name, setName] = useState();
  var [nickname, setNickname] = useState();

  useEffect(() =>{
    console.log("effect");
    console.log({
      name,
      nickname
    })

    // 특정 컴포넌트가 마운트나 언마운트되기 직전에 어떤 작업을 수행하고 싶을시에 useEffect에서 클린업 함수를 셋팅해주어야한다.
    return () => {
      console.log("unmount");
    }

    // 특정 값이 업데이트될 때만 실행하고 싶을 때, 클래스형에서는 componentDidUpdate를 사용하면 되지만 useEffect는?
  }, [name]); // 두번째 파라미터에 빈 배열 []을 넣어주면 초기 렌더링시에만 실행된다.
  // 배열안에 useState를 통해 관리하고있는 상태값을 넣어 주어도 되고, props로 전달받은 값을 넣어 줘도 된다.



  // onChangeName
  var onChangeName = (e) => {
    setName(e.target.value);
  };

  // onChangeNickname
  var onChangeNickname = (e) => {
    setNickname(e.target.value);
  };



  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeName} />
        <input name="nickname" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
