# 스택 구성
## 네스트
### 네스트의 장점
- 자바스크립트 진영에 속하는 스택
  - 개인적으로 자바스크립트에 애착이 있기 때문에 자바스크립트 기반의 기술을 사용하는 것 자체가 의미가 있음
- 현업에서 바로 사용할 수 있는 실전 레벨의 스택
  - 두번째 프로젝트에서 장고를 사용하려다가 러닝커브가 심해서 플라스크로 전환해서 아쉬웠음.
  - 이제 수료가 얼마 안 남았기 때문에 풀스택 프레임워크와 ORM을 다뤄볼 필요가 있다고 판단함
- 타입스크립트를 기반으로 하기 때문에 학습측면에서 코틀린과 시너지 효과가 있음

### 네스트의 단점
- deno의 출시로 인해 자바스크립트 진영의 트랜드가 어떻게 흘러갈지 불확실해짐
  - npm 생태계가 워낙 탄탄하기 때문에 향후 최소 몇년간은 node가 우세할 것으로 보임
  - deno는 이런 것도 있다는 정도로만 인지하고 일단은 node 위주로 학습해야겠다고 판단함
  - *deno도 node의 창시자인 라이언 달이 만든 만큼, node와 완전히 단절하지 말고 연장선상에서 접근해줬으면 하는 바람이 있음*
- 장고에 비해 네스트의 커뮤니티는 아직 작음
  - 원래 장고를 생각했다가 네스트로 변경함
  - 다수의 팀원이 있다면 학습의 용이성 때문에 어쩔 수 없이 장고를 선택했겠지만 팀원이 한명밖에 없기 때문에 부담없이 네스트를 선택할 수 있었음

## 네이버 지도 API
### 네이버 지도 API의 장점
- 네이버 지도 서비스의 높은 퀄리티를 가져올 수 있음
- 지도API는 단순히 사용 가능 유무로 끝나는 게 아니라 원본 서비스의 디자인이나 UX등 퀄리티도 중요하다고 판단함
### 네이버 지도 API의 단점
- 네이버지도가 앱은 무료이고 웹은 유료로 바뀜. 23년부터 1월 1일부터라서 시기도 애매함.
  - 이번 프로젝트에는 어차피 모바일이 적합하기 때문에 단점이 크지 않음

<br>
<br>

## PWA
### 플랫폼을 안드로이드에서 웹으로 변경한 이유
- 코틀린 자체는 타입스크립트와 똑같기 때문에 문제가 아닌데 안드로이드스튜디오에 대한 학습비용이 너무 큼
- 직업으로써의 주력 분야는 네트워크<!-- (백엔드, 서버) -->이고 앱은 <!-- 하드웨어도 좋아하기 때문에 그와 관련해서 --> 흥미 위주로 생각했는데, 겪어보니까 흥미만으로 하기엔 너무 비용이 큰 것 같다
- 마침 PWA라는 개념을 알게 되어 웹앱으로 하드웨어를 최대한 제어하는 것에 도전해보기로 함

<!-- ## 코틀린
### 코틀린의 장점
- 네이티브 환경을 능동적으로 제어
  - 첫번째 프로젝트에서 리액트 네이티브를 사용해봤는데 자바스크립트를 네이티브 언어로 트랜스파일링 하기 때문에 문제가 생기면 능동적으로 대처할 수 없어서 답답했음

- 타입스크립트와 비슷하기 때문에 학습 측면에서 시너지 효과가 있음

### 코틀린의 단점
- 단기간에 새로운 언어를 익혀야 한다는 부담
  - 타입스크립트와 거의 비슷해서 단점이 크지 않음

- 다수의 팀원이 있다면 학습의 용이성 때문에 어쩔 수 없이 리액트 네이티브를 선택했겠지만 팀원이 한명밖에 없기 때문에 부담없이 코틀린을 선택할 수 있었음 -->