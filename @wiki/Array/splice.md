### Array.`splice`()

배열의 인덱스를 이용해 변환한 배열을 리턴한다

Array.splice(시작, 끝)

시작<br>
배열의 변경을 시작할 인덱스<br>
배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정<br>
음수인 경우 배열의 끝에서부터 요소를 센다<br>
값의 절대값이 배열의 길이 보다 크면 0으로 설정<br>

끝<br>
배열에서 제거할 요소의 수<br>
생략하거나 값이 array.length - start보다 크면 start부터의 모든 요소를 제거<br>

```
const arr = [1,2,3,4,5,6,7]

arr.splice(2,1) // [1,2,4,5,6,7]
arr.splice(2,4) // [1,2,7]
```
