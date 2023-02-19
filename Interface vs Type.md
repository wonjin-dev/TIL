타입스크립트에서 타입을 선언하는 방법에는 `interface`와 `type` 두 가지가 있다

# 차이점

Interface에서 할 수 있는 대부분의 기능들은 type에서 가능하지만, 둘의 차이점은 분명히 존재한다<br>

**_1. 선언적 확장_**
`type`은 새로운 속성을 추가하기 위해서 같은 이름으로 재선언할 수 없지만,
`interface`는 선언적 확장이 가능하다

> interface는 컴파일 단계에서 동일한 이름은 합쳐져서 컴파일된다

**_2. computed value의 사용_**
type은 가능하지만 interface는 불가능하다.

```
type names = 'firstName' | 'lastName';

type NameTypes = {
  [key in names]: string;
}

const wj: NameTypes = { firstName: 'wonjin', lastName: 'jang' };

interface NameInterface {
  [key in names]: string; // error
}
```

**_3. interface는 합성 시 캐시가 되지만, 타입의 경우에는 캐시되지 못 한다_**

**_4. 선언 병합 (Declaration Merging)_**

> interface는 선언 병합으로 확장할 수 있기 때문에, 외부에 노출해야 하는 public API에 사용되는 타입은 항상 interface를 사용해야 한다<br>
> type은 비교적 선언 병합이 제한적이기 때문에 private API같이 외부에 노출할 필요가 없는 경우에 사용한다

# 결론

공식 DOCS에서도 불변 구조 타입 선언이 아니면 Interface를 권장하고 있다<br> 또한 성능적으로도 Interface가 더 우세하다는 주장이 많기 때문에 대부분의 상황에서 Interface를 이용한 타입선언이 유리하다

### Interface가 성능적으로 더 우세하다

병합된 타입 선언시에 interface는 객체만 오기 때문에 오류 없이 병합할 수 있다<br>
그러나 type은 interface와 다르게 원시 타입이 올 수 있기 때문에 never가 떨어져서 병합에 오류가 발생할 수 있다<br>또 합성에 자체에 대한 유효성을 판단하기 전에, 모든 구성요소에 대한 타입을 체크하므로 컴파일 시에 상대적으로 성능이 좋지 않다
