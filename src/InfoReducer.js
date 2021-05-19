import React, {useEffect, useReducer, useState} from "react";
import useInputs from "./useInputs";

// useInputs 생성 후 주석함
// function reducer(state, action) {
//     console.log("=====reducer=======")
//     console.log(state);
//     console.log(action); // input tag
//     console.log("===================")
//   return {
//       ...state,
//       [action.name] : action.value
//   };
// }

var InfoReducer = () => {
  const [state, onChange] = useInputs({
      name: '',
      nickname : ''
  });

  const {name, nickname} = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
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

export default InfoReducer;
