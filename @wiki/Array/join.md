### Array.`join`()

```
const arr = ["1", "2", "3"];

배열을 `문자열로 리턴`한다. 요소의 끝마다 인자로 받은 문자로 변환할 수 있다

arr.join(); // '1,2,3'
arr.join(", "); // '1, 2, 3'
arr.join(" + "); // '1 + 2 + 3'
arr.join(""); // '123'
```

역으로 문자열을 배열로 리턴하기 위해서는 `Arr.split('')`을 이용하면 된다

```
const str = 'Hello';
const arr = str.split('');    // ['h', 'e', 'l', 'l', 'o']
```
