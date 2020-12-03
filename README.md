### 개발 프로세스
#### 컴포넌트들, 라우팅페이지 로 폴더 구분 후 폴더 다 만들기
#### fBase파일로 파이어베이스 가져오고 export
#### 상태를 이용하여 init(파이어베이스에서 로그인하는데 체크하는데 시간이 걸림, useEffect를 활용하여 계정에 변화를 감지하는 Api에 콜백으로 유저를 받아서 init에 계정을 업데이트함) > AppRouter > isLoggedIn > Navigation > Switch > Route
