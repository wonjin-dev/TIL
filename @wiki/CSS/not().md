# not

:not(조건)을 넣어서 예외처리가 가능하다

```
.local-nav-links {
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.local-nav-links .product-name {
  margin-right: auto;
  font-size: 1.4rem;
  font-weight: bold;
}

.local-nav-links a:not(.product-name) {
  margin-left: 2em;
}
```

위의 코드를 예시로 들면 `local-nav-links` 클래스 안에 들어있는 a태그들 중 class name이 `product-name`가 아니라면 모두 margin-left: 2em이 적용되는 것이다
