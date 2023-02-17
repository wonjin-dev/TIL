# Set을 활용한 배열 내 같은 요소 제거

```
const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];

const uniqueNamesWithArrayFrom = Array.from(new Set(names));

const uniqueNamesWithSpread = [...new Set(names)]
```
