`.gihub/workflows/${workflow}.yml`를 생성하여 작성 가능

**_example_**

```
name: ${'해당 workflow 이름'}
on: [이벤트 액션 정의] // ex) on: [push]
jobs:
  ${job이름}:
    runs-on: ${사용할 vm 머신}
    strategy: // 같은 job을 다른 환경에서 수행 해야할 경우 정의
    steps: // job의 순서 정의
      - uses: ${job 1}
      - uses: ${job 2}
        with: // 위의 use에 대한 특정 조건 정의
```
