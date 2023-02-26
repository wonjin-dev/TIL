```
블록 레벨 테그에서만 적용

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; // 공백문자가 있는 경우 줄바꿈하지 않고 한줄로 나오게 처리함 (\A로 줄바꿈가능)
}

.multi-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 라인 수
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  /* line-height 가 1이고 3 라인을 자르기 때문에 height는 3 */
  line-height: 1em;
  height: 3em;
}
```
