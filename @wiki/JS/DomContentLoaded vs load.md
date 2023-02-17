# DomContentLoaded vs load

## 빠른 요약

load는 모든 리소스가 로드 되었을 때 실행<br>(이미지, 스타일시트 같은 외부 자원도 모두 불러오는 것이 끝났을 때)<br><br>
DomContentLoaded는 Dom이 준비되면 실행

<hr>

## DomContentLoaded

DOM이 준비된 것을 확인한 후 원하는 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화할 때 사용

## load

이미지 사이즈를 확인하거나 외부 자원이 로드된 후이기 때문에 스타일이 적용된 상태이다<br>즉, 화면에 뿌려지는 요소의 실제 크기를 확인할 수 있음

<hr>

### `beforeunload`, `unload`

> 사용자가 페이지를 떠날 때 실행
