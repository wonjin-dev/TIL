# type of

체크하고자 하는 값의 타입을 확인하는 `연산자`이다 (괄호가 필요 없다)

## return

> primitive 타입을 스트링으로 리턴한다<br>

**_리턴 타입_**

- 'undefined'
- 'boolean'
- 'number'
- 'string'
- 'object'
- 'function'

### 유의점

> 값이 null이라면 결과가 object로 반환한다

<br>

# instance of

생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별하는 연산자

**_example_**

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true

console.log(auto instanceof Object); // true
```
