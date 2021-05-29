import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import { useCallback, useRef, useState } from "react";
import CounterReducer from "./CounterReducer";
import InfoReducer from "./InfoReducer";
import Average from "./Average";
import produce from "immer";

// var App = () => {
//   const [visible, setVisible] = useState(false);
//
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr/>
//       {visible && <Info />}
//     </div>
//   );
// };

// function App() {
//   return (
//       <InfoReducer/>
//   );
// }

// immer 사용 예시
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  const onSumit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새항목 등록
      setData(
        //   {
        // ...data,
        // array: data.array.concat(info),}

        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    (id) => {
      setData(
        //     {
        //   ...data,
        //   array: data.array.filter((info) => info.id !== id),
        // }
        produce((draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSumit}>
        <input
          name="username"
          onChange={onChange}
          placeholder={"아이디"}
          value={form.username}
        />
        <input
          name="name"
          onChange={onChange}
          placeholder={"이름"}
          value={form.name}
        />
        <button type="submit">등록</button>
      </form>

      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
