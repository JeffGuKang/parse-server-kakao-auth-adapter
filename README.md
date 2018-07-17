# Parse-server-kakao-auth-adapter
Authenticate to parse server with your Kakao account

## How to use it?
### 1) Install the module
```js
npm i -S parse-server-kakao-auth-adapter
```

### 2) Add this module when creating `ParseServer`
```js
import { ParseServer } from 'parse-server'
import kakaoAuthAdapter from 'parse-server-kakao-auth-adapter'
...
const parserServer = new ParseServer({
  ...
  auth: {
    kakao: kakaoAuthAdapter
  }
})
```