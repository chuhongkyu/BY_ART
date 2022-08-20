# NFT 홈페이지

- Public 폴더 내부 요소들
  - 정적 폴더, 브라우저에 직접 엑세스 가능
- styles 폴더
  - global.css ) app.tsx에서만 사용 가능
  - home.module.css ) 다른 컴포넌트 등에서 import 해서 사용 (다양하게 생성 가능)
- pages 폴더
  - index.tsx : 홈페이지. 기본 페이지. global.css를 가져옴
  - app.tsx
    - 모든 페이지 컴포넌트를 감싸고 있는 공통 레이아웃 (원하는 레이아웃을 컴포넌트를 import해서 추가하면 모든 페이지적용됨.)
    - 가장 최초로 실행됨
    - 페이지 업데이트 하기 전에 원하는 방식으로 페이지 업데이트 하는 통로
    - 내부의 컴포넌트들 전부 실행하고 html body로 구성
    - 이후 document.tsx가 실행됨
  - document.tsx
    - meta 테그 정의, 전체 페이지에 관여하는 컴포넌트
    - 따로 설정 안하면 디폴트값 적용
    - 이곳의 콘솔은 서버에서만 보이고 클라에서는 안보임
    - componentDidMount 같은 훅도 실행이 안됨. 정말 static한 상황만 부여됨.
