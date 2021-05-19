## 초기셋팅 

~~~
Prettier ,ESlint 초기셋팅 

Languages & frameWorks > javascript > prettier ,ESlint

각 프로젝트 모듈에 prettier ,ESlint 셋팅을 해주어야한다.

셋팅을 했는데도 자동 설정이 되지 않는다면 수동으로 셋팅한다. 

인텔리제이 환경설정에 셋팅을해도 해당 프로젝트 모듈에 prettier ,ESlint

모듈이 셋팅이 되어있지 않으면 사용할 수 없다. 

npm i prettier -D -E

~~~

## useEffect

~~~
리액트 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.
*componentDidMount , *componentDidUpdate를 합친 형태
~~~

## Hooks 패턴(함수형 컴포넌트)과 클래스형 컴포넌트 중 어떤걸 주로 써야할까?

~~~
Hooks 패턴(함수형 컴포넌트)은 클래스형 컴포넌트에서 사용하는 대부분의 기능을 구현할 수 있다.
이미 클래스형 컴포넌트로 되어있는 프로젝트의 경우 이를 굳이 Hooks로 전환할 필요는 없다.
다만 , 메뉴얼에서 새로 작성하는 컴포넌트의 경우 함수형 컴포넌트와 Hooks패턴을 권장한다.

~~~
