# Grip Company 개인과제


## 배포 

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2ea978d-2449-4e18-b56d-d618d77e04ce/deploy-status)](https://grip-movie-jy.netlify.app/)

## 진행 과정

1일) 과제 스펙 확인, 레이아웃 구성

2일) 검색바 구현, 즐겨찾기 모달 생성

3일) 즐겨찾기 페이지 구현, 리드미 작성

## 기술 스택 

- React
- TypeScript
- Recoil
- Store
- SCSS
- React-router-dom
- React-intersection-observer

## 구현 내용

- 검색바에서 검색어를 입력해 API의 데이터를 Home route에 보여줍니다.
- 즐겨찾기를 추가/해제 할수 있고 즐겨찾기 route에서 즐겨찾기한 항목을 확인할 수 있습니다.

## 실행 방법

```
git clone https://github.com/wsdx123/Grip_Movie.git
```
```
yarn install && yarn start
```

## 구현 결과 

|검색 기능|즐겨찾기 기능|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/50202150/168461217-28f34768-54f5-44b7-9a15-fd547546a2f6.gif" width="250" />|<img src="https://user-images.githubusercontent.com/50202150/168461178-69a8a05c-e280-427a-b249-22398950eeb5.gif" width="250" />|


## 어려웠던 점

- 아직 즐겨찾기를 하는 부분의 상태관리가 완벽하게 되지 않았습니다. 하나를 체크하면 모든 movieitem의 즐겨찾기가 표시됩니다.
 로직을 새로 짜는것을 고려중입니다.
- 모달에서 로컬 스토리지와 recoil 상태를 연결하는데 어려움을 겪었습니다. 해결은 되었지만 모달은 추후 리팩토링이 필요할 것 같습니다.