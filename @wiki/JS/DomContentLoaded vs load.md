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

<hr>

위의 발생 시점을 정리하면<br>
**_js(\<script>) &rarr; DOMContentLoaded &rarr; load 순으로 호출_**

<br>

`load`의 경우 이미지 등의 리소스가 다 불러와진 후에 이벤트가 실행되기 때문에 `리소스가 많을 경우 속도 저하`가 발생한다<br>
하지만 `리소스 관련 이벤트`를 호출할 때에는 속도 저하와 상관없이 `load를 사용`해야 된다<br>
`DOMContentLoaded 이벤트가 발생 시점`은 리소스와 상관없이 DOM이 그려진 시점에서 호출하기 때문에 정상적인 동작이 이루어지지 않을 수 있다<br><br>
따라서 이미지 리소스가 많은 document의 경우 `defer`옵션을 사용하자
