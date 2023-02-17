# Memoization ?

> 컴퓨터가 동일한 계산을 반복할 때 이전 계산한 값을 메모리에 저장함으로서 동일한 계산을 하지 않도록 하여 속도를 높이는 기술

## 사용하는 이유

**_최적화를 위해 사용한다_**<br>
최적화를 진행할 때, 기준과 목표를 가지고 진행한다<br>일반적으로 렌더링 횟수를 줄이고 API 호출 횟수를 줄이는 것도 포함된다

즉, Memoization은 React의 렌더링 발생 조건을 고려하여 렌더링 횟수를 줄이는 방식으로 최적화 하기 위해 사용한다

<br>

### React의 렌더링 발생 조건

**_1. state 변경시_**<br>
**_2. props 변경시_**<br>
**_3. 부모 컴포넌트 렌더링시_**<br>
**_4-1. [class] 강제 업데이트시_**
this.forceUpdate()

**_4-2. [class] shouldComponentUpdate => true_**

리액트 생명주기에 따라 각각의 컴포넌트는 shouldComponentUpdate에 따라 리렌더링이 발생한다<br>
리렌더링의 조건이 충족되면 return 값은 true 가 되어 리렌더링 하지만, 리렌더링이 필요하지 않은 부분이라면 개발자가 false로 return하게 지정하여 리렌더링을 막을 수 있다

> 따라서 Memoization은 계산된 state값이 동일하게 변동되거나 새로운 props값이 기존 값과 동일할때 리렌더링을 막음으로서 최적화를 할 수 있는 것이다

<br>

## useMemo vs useCallback

React에서는 memoization을 활용한 대표적인 hooks가 두 가지 있다
**_`useCallback`_** 그리고 **_`useMemo`_** 모두 memoization 관련 hooks다<br>
**_`useCallback`_**은 memoization된 콜백을 반환한다
컴포넌트 내부에 위치한 함수를 deps에 걸려 있는 값이 변하지 않는다면 재생성하지 않는다<br>
**_`useMemo`_**는 memoization된 값을 반환한다
deps에 걸려 있는 값이 변했을 때만 계산을 재실행하고 기본적으로 이전에 계산한 값을 재사용한다

<br>

## `React.Memo` vs `useMemo`

`React.memo`는 useMemo와 마찬가지로 최적화를 위해 사용하지만, useMemo와 다르게 Higher-Order Components(HOC)라는 차이점이 있다<br>
즉, 컴포넌트를 인자로 받아 새로운 컴포넌트를 return한다. 일반적으로 컴포넌트는 인자로 받은 props를 UI에 활용하지만 HOC는 인자로 받은 컴포넌트를 새로운 별도의 컴포넌트로 만든다
즉, 같은 props를 받아서 같은 컴포넌트를 렌더링한다면 React.memo를 사용하여 불필요한 리렌더링을 방지할 수 있다<br>
React.memo와 useMemo 모두 props가 변하지 않으면 재실행 되지 않고, 이전 결과를 반환한다는 점에서 공통점이있다 하지만 `React.memo`는 HOC이기 때문에 클래스형 컴포넌트, 함수형 컴포넌트 모두 사용 가능하지만, useMemo는 hooks기 때문에 오직 함수형 컴포넌트 안에서만 사용 가능하다
