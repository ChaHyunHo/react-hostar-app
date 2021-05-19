import React, { useRef} from "react";


/**
 * useRef로 만든 로컬변수는 값이 변하여도 렌더링되지 않는다는 점을 주의하여야 한다.
 * 렌더링과 관려되지 않을경우에만 이런식으로 작성한다.
 * @returns {JSX.Element}
 * @constructor
 */
var RefSample = () => {

    const id = useRef(1);

    var setId = n => {
        id.current = n;
    }

    var printId = n => {
        console.log(id.current);
    }

    return (

        <div>
            refSample...
        </div>
    )
}

export default RefSample;