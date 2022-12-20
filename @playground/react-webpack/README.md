# Babel

```
@babel/preset-env : 최신 ES문법 트랜스파일
@babel/preset-react : JSX -> JS 트랜스파일
```

<hr><br>

# Webpack

```
webpack : 웹팩의 코어
webpack-cli : 웹팩을 커맨드라인에서 사용
webpack-dev-server : 웹팩을 메모리 상에 빌드하여 개발 서버를 구동
```

### 플러그인

- `html-webpack-plugin` : 번들 결과 폴더(파일)의 스크립트를 포함하는 HTML 문서를 폴더 내에 자동으로 생성

- `clean-webpack-plugin` : 번들링 시 이전 번들링 결과 제거

<hr><br>

# Loader

Webpack은 JS와 JSON만 트랜스파일 할 수 있다<br>Loader와 조합하여 다른 타입의 파일들도 트랜스파일 한다

- `babel-loader` : JSX 및 ES6+ 문법을 트랜스파일링
- `file-loader` : 이미지 및 폰트 등의 파일 로딩
- `html-loader` : HTML 로더
- `css-loader` : CSS 파일을 자바스크립트가 이해할 수 있도록 변환
- `style-loader` : 변환된 CSS 파일을 돔에 <style></style> 로 넣어준다<br>이를 통해 import 구문을 이용해 각 js 파일에 불러들여진 스타일 파일이 html 파일안에 style 태그로 존재한다<br>

  (**_style-loader를 css-loader 없이 사용하는 것은 의미가 없기 때문에 style-loader와 css-loader는 함께 묶어 사용한다_**)

<hr><br>

**_use case_**

```
module.exports = {
  mode: 'development', // dev | stage | release 등 서버 환경 설정
  entry: './src/index.js', // index 파일 위치 명시
  output: { // 번들링 파일 명과 저장 위치 지정
  path: path.resolve(\_\_dirname, 'dist'),
  filename: 'output.js',
  clean: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 적용할 파일 확장자 지정
        exclude: '/node_modules/', // 로더 제외 대상
        loader: 'babel-loader', // 로더가 2개 이상일시 use에 배열로 넘겨주어야 한다
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  devServer: { // webpack-dev-server의 개발 서버 설정
    host: 'localhost',
    port: 3000,
    open: true, // 서버 실행 시 브라우저 오픈
  },
};
},
```
