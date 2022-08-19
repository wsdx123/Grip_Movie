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
- Storejs
- SCSS
- React-router-dom
- React-intersection-observer
- react-beautiful-dnd

## 구현 내용

- 검색바에서 검색어를 입력해 API의 데이터를 Home route에 보여줍니다.
- 즐겨찾기를 추가/해제 할수 있고 즐겨찾기 route에서 즐겨찾기한 항목을 확인할 수 있습니다.
- 즐겨찾기를 로컬 스토리지에 저장해 페이지를 다시 로드해도 남아있습니다.
- 즐겨찾기 항목들에 drag&drop을 적용하여 마우스로 드래그하여 원하는 자리에 드랍할수 있습니다. 
순서 역시 페이지를 다시 로드해도 그 순서 그대로 유지됩니다.

## 실행 방법

```
git clone https://github.com/wsdx123/Grip_Movie.git
```
```
yarn install && yarn start
```

## 구현 결과 

|검색 기능|즐겨찾기 기능|드래그&드랍|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/50202150/185654843-4c6682c7-d772-4d26-81f1-0fd502dc0632.gif" width="250" />|<img src="https://user-images.githubusercontent.com/50202150/185655119-0aa4f65b-8a7f-4ded-8433-fe4e170a73bc.gif" width="250" />|<img src="https://user-images.githubusercontent.com/50202150/185655201-8492e006-db84-4c90-af4b-58217cfb9592.gif" width="250" />|


## 어려웠던 점

- 아직 즐겨찾기를 하는 부분의 상태관리가 완벽하게 되지 않았습니다. 하나를 체크하면 모든 movieitem의 즐겨찾기가 표시됩니다.
 로직을 새로 짜는것을 고려중입니다.
- 모달에서 로컬 스토리지와 recoil 상태를 연결하는데 어려움을 겪었습니다. 해결은 되었지만 모달은 추후 리팩토링이 필요할 것 같습니다.

 ---> 22.08.20 일자로 리팩토링 완료. 즐겨찾기 파트 완벽하게 구현완료했습니다.