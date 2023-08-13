# 🏠 홈페이지 고객 관리 시스템 - 2팀

<br>

<div align="center">
  <a href="https://sniperfactory1.notion.site/2-10120989da964f00bf66f2c10a076a2f?pvs=4" target="_blank" rel="noopener noreferrer" >팀 노션</a> |
  <a href="https://sniperfactory1.notion.site/1f4a705c6abe4f89951738368fc2ce89?v=a8ea05c40f1b4745b42224b1dd650539&pvs=4" target="_blank" rel="noopener noreferrer" >개발 일지</a>
</div>

<br>

<div align="center">홈페이지 시스템에 많은 분들이 접속하고 이용하고 있습니다.</div>
<br>
<div align="center">고객분들에게 새로운 정보를 즉각적으로 제공하고 이를 홈페이지에 반영하려면 여러 과정을 거쳐야 합니다.</div>
<br>
<div align="center">하지만 그런 과정을 개발자가 아닌 관리자가 원하는대로 선택하거나 입력하여 홈페이지를 다룰 수 있는 환경을 제공합니다.</div>

<br>

## 실행 방법

```
npm install

npm start

```

<br>

## 📁 폴더 구조

```
src
 ┣ components // 컴포넌트
 ┣ hooks // 커스텀 훅
 ┣ libs // 변수 관리
 ┣ pages // 페이지 관리
 ┣ store // 전역 상태 관리 
 ┃ ┣ menu
 ┃ ┣ slices // 리덕스 툴킷 slices
 ┃ ┣ index.js // 리덕스 스토어
 ┃ ┗ rootReducer.js
 ┣ styles // 전역 CSS
 ┃ ┣ GlobalStyle.jsx
 ┃ ┣ StyledProvider.jsx
 ┃ ┗ theme.js
 ┣ App.jsx // 라우터 관리
 ┗ index.js
```

<br>

## 🛠️ 기술 스택
<div align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=HTML5&logoColor=E34F26" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=CSS3&logoColor=1572B6" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=F7DF1E" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=plastic&logo=React&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/React Router-6.14.2-CA4245?style=plastic&logo=React Router&logoColor=CA4245" />
<img src="https://img.shields.io/badge/styled components-6.0.6-DB7093?style=plastic&logo=styled-components&logoColor=DB7093" />
<img src="https://img.shields.io/badge/Redux Toolkit-1.9.5-764ABC?style=plastic&logo=Redux&logoColor=764ABC" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/Eslint-8.45.0-4B32C3?style=plastic&logo=Eslint&logoColor=4B32C3" />
<img src="https://img.shields.io/badge/Prettier-3.0.0-F7B93E?style=plastic&logo=Prettier&logoColor=#F7B93E" />
<img src="https://img.shields.io/badge/Font Awesome-6.4.0-528DD7?style=plastic&logo=Font Awesome&logoColor=528DD7" />
</div>

<br>

## 🚀 프로젝트 소개
1. 개발자가 아니더라도 원하는대로 페이지를 꾸밀 수 있어요!
2. 홈페이지의 메뉴와 페이지들을 관리할 수 있어요!
3. 이용자의 피드백을 따로 개발자를 거치지 않고 반영시킬 수 있어요!

<br>

## 🎆 주요 기능
<table>
  <tr>
    <td> 
    <p align="center">메인</p>
    </td>
    <td>
    <p align="center">로그인</p>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/udemy-project-camp-team2/homepage-system-team-2/assets/99642719/38166758-1620-450d-8ff3-7bbc44770f1d" />
    </td>
    <td><img src="https://github.com/udemy-project-camp-team2/homepage-system-team-2/assets/99642719/8a80cacd-6fae-412f-884c-e63b0a0aa738" /></td>
  </tr>
 <tr>
    <td> 
    <p align="center">메뉴 관리</p>
    </td>
    <td>
    <p align="center">메뉴 수정</p>
    </td>
  </tr>
   <tr>
    <td>
      <img src="https://github.com/udemy-project-camp-team2/homepage-system-team-2/assets/99642719/0b32239d-aad4-464d-aaef-a41199036257" />
    </td>
    <td><img src="https://github.com/udemy-project-camp-team2/homepage-system-team-2/assets/99642719/a1e17e15-b7fe-4799-99d6-0aabb12bddbd" /></td>
  </tr>
  <tr>
    <td> 
    <p align="center">페이지 관리</p>
    </td>
    <td>
    <p align="center">페이지 복제</p>
    </td>
  </tr>
  <tr>
    <td><img src="https://github.com/udemy-project-camp-team2/homepage-system-team-2/assets/99642719/38f2d1fd-eefe-4f59-87fd-1d0727c706ac" /></td>
    <td><img src="https://github.com/udemy-project-camp-team2/homepage-system-team-2/assets/99642719/1946d79d-12a7-4e43-882f-3ba958b29651" /></td>
  </tr>
</table>

<br>

- 메인
  - 페이지 별 메뉴 네비게이션 바
  - 캐러셀

- 로그인
  - localStorage에 저장하여 로그인 상태를 유지
  - 알맞지 않은 정보를 입력시 로그인 실패에 대한 알림
  - 로그인 성공 시 메뉴 관리로 이동

- 메뉴 관리
  - Redux Toolkit을 활용하여 메뉴들을 로컬스토리지에 저장하고 불러오는 방식으로 전역적으로 상태 관리
  - Redux Toolkit의 slice를 활용하여 로직을 바깥으로 분리하고 데이터를 다룸
  - 상위 메뉴와 하위 메뉴의 CRUD 기능을 직접적으로 구현
 
- 페이지 관리
  - 하위 메뉴만을 모아 관리할 수 있는 영역
  - useDebounce훅을 활용하여 검색 시 입력시 마다 리렌더링이 일어나 화면이 변하는 현상을 늦춤
  - 복제 기능을 통해 해당 페이지를 다른 이름과 url로 변경하여 복제할 수 있음 

<br>

## 👷 팀원

<table>
  <tr>
  </td>
      <td align="center">
      <a href="https://github.com/junseokoh-hub">
      <img src="https://avatars.githubusercontent.com/u/99642719?v=4" width="100px;" alt="junseok_oh"/>
      <br />
      <sub><b>오준석</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/definitely92">
      <img src="https://avatars.githubusercontent.com/u/132203871?v=4" width="100px;" alt="suhyeon_hwang"/>
      <br />
      <sub><b>황수현</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Ji-Yoon98">
      <img src="https://avatars.githubusercontent.com/u/97427387?v=4" width="100px;" alt="jiyoon_park"/>
      <br />
      <sub><b>박지윤</b></sub>
      </a>
    </td>
  </tr>
</table>

<br>

## Git Commit Message Convention

|   Type   |                                        설명                                        |
| :------: | :--------------------------------------------------------------------------------: |
|   Feat   |                                  새로운 기능 추가                                  |
|   Fix    |                                버그 수정 또는 typo                                 |
| Refactor |                                      리팩토링                                      |
|  Design  |                            CSS 등 사용자 UI 디자인 변경                            |
| Comment  |                              필요한 주석 추가 및 변경                              |
|  Style   |                 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                  |
|  Chore   | 위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 등) |
|  Rename  |                      파일 혹은 폴더명 수정하거나 옮기는 경우                       |
|  Remove  |                        파일을 삭제하는 작업만 수행하는 경우                        |
|   Docs   |                                      문서수정                                      |
|   Test   |       테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)       |

<br>
