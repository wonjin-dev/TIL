import {useState, useTransition} from 'react';

const DUMMY_DATA = new Array(10000).fill(0); // '0'으로 이루어진 10000개의 배열 생성

const TransitionSample = () => {
  const [text, setText] = useState('');
  const [isPending, setTransition] = useTransition();

  return (
    <>
      <input
        onChange={(e) => {
          // setTransition으로 병목을 발생 시키는 부분을 감싸준다
          setTransition(() => {
            setText(e.target.value);
          });
        }}
      />

      {/* 병목 함수 부분 */}
      {DUMMY_DATA.map(() => {
        return <>{text}</>;
      })}
    </>
  );
};

export default TransitionSample;
