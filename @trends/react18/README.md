# React 18

## `automatic batching`

> 한 페이지에서 setState 액션이 3개일때 리렌더링이 3번 일어나는 형식 -> 액션이 모두 실행된 후에 리렌더링이 일어난다(한 번)

<br>

## `useTransition`

> 성능 저하가 일어나는 병목 함수에 `useTransition` hook의 `setTransition`으로 감싸서 성능 저하를 완화할 수 있다<br><br>

### setTransition

> 동작 원리: 브라우저는 싱글쓰레드여서 동기로 처리하지만 setTransition안에 함수를 뒤로 미루어서 처리한다. 따라서 병목을 발생 시키는 함수를 감싸면서 사용자 경험에서 성능 저하가 완화된다고 느끼게 할 수 있다

<br>

### isPending

> `setTransition`이 처리중일때 `true` 값을 반환한다

<br>

## `useDeferredValue`

> useTransition과 마찬가지로 성능 저하가 일어나는 병목 함수에 사용. 사용 방법이 다르다 (병목 함수가 아닌 state(값)에 감싸줌)
