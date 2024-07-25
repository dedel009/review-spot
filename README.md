# ✏️ 리뷰 서비스앱 Review Spot

![readme_mockup2](https://files.oaiusercontent.com/file-5SFFzE3CKnHvUaB8b3Se7yNx?se=2024-07-25T07%3A52%3A45Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd118c958-3c9b-4352-a788-6be215cef787.webp&sig=3S2Rrf0u2C15IO3E1JS9KX9o/uL7oUDpApfLHcDse58%3D)

- 배포 URL : 
- Test ID : 
- Test PW : 

<br>

## 프로젝트 소개

- Review Spot은 다양한 사람들이 여러 물건을 사용하고 리뷰를 남기는 사이트입니다.
- 다양한 물건을 사용한 경험을 공유해주세요!👍

<br>

## 팀원 구성

<div align="center">

| **김도윤(INFP)** | **김호현(ESFP)** | **김창권(ISFJ)** | **유종철(ISFJ)** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/57212041?v=4" height=150 width=150> <br/> @dedel009](https://github.com/dedel009/) | [<img src="https://avatars.githubusercontent.com/u/122351733?v=4" height=150 width=150> <br/> @Khohyeon](https://github.com/Khohyeon) | [<img src="https://avatars.githubusercontent.com/u/99378862?v=4" height=150 width=150> <br/> @Kevin](https://github.com/oggn) | [<img src="https://avatars.githubusercontent.com/u/51194504?v=4" height=150 width=150> <br/> @Logan](https://github.com/whdcjf96) |

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, Next.js
- Back-end : Django 5.0.7, Python 3.12.3
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Notion, Github Wiki, Google Meet
- IDE : Pycharm, vsCode
- 서비스 배포 환경 : AWS(예정)
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- styled-component
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.
 
### Python, Django

- Python

- Django
    
### 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조

```
├── README.md
└── review_spot_frontend
     ├── ...
└── review_spot_backend
     ├── ...

```

<br>

## 4. 역할 분담

### 🍀김도윤(Backend Developer)

- **기능**
    - 유저 검색, 게시글 등록 및 수정, 게시글 상세 확인, 댓글 등록, 팔로워 게시글 불러오기, 좋아요 기능

<br>
    
### 🥹김호현(Backend Developer)

- **기능**
    - 프로필 설정 및 수정 페이지 유저 아이디 유효성 및 중복 검사, 상품 등록 및 수정

<br>

### 😎김창권(Frontend Developer)

- **기능**
    - splash 페이지, sns로그인 페이지, 로그인 유효성 및 중복 검사, 회원가입 유효성 및 중복 검사, 이메일 검증, 프로필 설정, 접근제한 설정

<br>

### 💪유종철(Frontend Developer)

- **기능**
    - 팔로우 & 언팔로우, 로그아웃, 하단 모달창, 댓글 삭제, 게시글 삭제, 상품 삭제, 사용자 게시글 앨범형 이미지, 탑 배너 뒤로가기 버튼, Alert 모달
    
<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-07-29 ~ 미정
- 주제 회의 : 2024-07-24(수) 22:00
- 기획 회의 : 2024-07-29(월) 22:00
- 기능 구현 : 미정

<br>

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 GitHub Wiki에 회의 내용을 기록했습니다.

<br>

## 6. 신경 쓴 부분

- [접근제한 설정](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_%EC%A0%91%EA%B7%BC%EC%A0%9C%ED%95%9C-%EC%84%A4%EC%A0%95)

- [Recoil을 통한 상태관리 및 유지](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_Recoil%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%B0%8F-%EC%9C%A0%EC%A7%80)

<br>

## 7. 페이지별 기능

<br>

## 8. 트러블 슈팅

<br>

## 9. 개선 목표
    
<br>

## 10. 프로젝트 후기


### 🍀김도윤(Backend Developer)

<br>

### 🥹김호현(Backend Developer)


<br>

### 😎김창권(Frontend Developer)


<br>

### 💪유종철(Frontend Developer)


