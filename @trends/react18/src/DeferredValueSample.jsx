import {useState, useDeferredValue} from 'react';

const DUMMY_DATA = new Array(10000).fill(0); // '0'으로 이루어진 10000개의 배열 생성

const DeferredValueSample = () => {
  const [text, setText] = useState('');
  const lazyText = useDeferredValue(text);

  return (
    <>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      {DUMMY_DATA.map(() => {
        return <>{lazyText}</>;
      })}
    </>
  );
};

export default DeferredValueSample;
