# SEW — 삼국무쌍 Empires W

삼국지 엠파이어스 웹게임. W = Web. 비공식 팬 프로젝트이며 공식 제휴를 의미하지 않습니다.

- 게임: https://p0emkite.github.io/SEW/
- 개발 기준: main 브랜치
- 현재 배포 대상: v0.8.2 / STEP 05-G++

월간 진행, 정략, 산책, 신분, 전투, NPC AI, 천하통일 및 엔딩을 포함한 개발용 프로토타입입니다.
역사 시나리오와 실제 모바일 호환성, 저장 지속성, 장기 밸런스 검증은 아직 완료되지 않았습니다.

## 배포 구조

index.html은 game/v0.8 아래의 18개 UTF-8 조각을 순서대로 로드하여 기존 단일 HTML 실행본을 복원합니다.
deployment.json은 파일 순서와 해시를 기록합니다.
`python scripts/assemble.py`로 로컬 실행본을 복원할 수 있습니다.
다음 버전은 새 버전 경로를 사용하고 로더/매니페스트를 같은 커밋에서 갱신합니다.
정식 소스 모듈 분리는 다음 개발 작업에 포함합니다.
원작 기반 데이터의 재배포 권리 검토는 완료되지 않았으며, 공개 배포는 검토 대상입니다.

## v0.8.2 개선 사항

- 기존 분할 원본의 무결성 검사를 유지하고, index.html에서 0.8.1/0.8.2 패치를 순차 적용합니다.
- Freesentation UI 글꼴, 타이틀 문구, 상반신 중심 초상, 개성 툴팁, 징 합성음 및 화면 암전 연출, 동일 산책 내 대상별 교류 1회 제한.
- [무쌍 무장 공식 이미지 진단 (94명)](https://p0emkite.github.io/SEW/game/tools/portrait-audit.html). 공식 이미지 주소는 외부 서버에 의존하며 저작권 이용 허락은 아직 확인되지 않았습니다.
- 산책 배경: [Hengdian World Studios 001.jpg](https://commons.wikimedia.org/wiki/File:Hengdian_World_Studios_001.jpg), kanegen, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), 화면에 맞춰 크롭 및 어두운 색조 오버레이 적용. 실제 삼국시대 유적 사진이 아닌 후대 도시 재현 세트장입니다. 평정은 기존 고해상도 궁궐 이미지 재활용.
- 글꼴: [Freesentation](https://github.com/Freesentation/freesentation), SIL OFL.
