import { baseUrl } from '../configs/url';

export interface IResumeExperience {
  title: string;
  when: string;
  company: string;
  usecase: string;
  details: string;
}

export const experienceContents: IResumeExperience[] = [
  {
    title: 'FE Developer',
    when: '2018.5 -',
    company: 'Kakaopay, Pangyo',
    usecase: 'React, mobx, mst, React Context, React Hook...',
    details: `벅스에 입사하면서 받은 오리엔테이션 후반부에 팀을 정하기 위해 면담을 하는 과정이 있었습니다. "프론트 엔드" 팀의 여부와 할 수 있는지 여부를 물어봤으나 벅스에는 웹서비스 팀만이 존재하였고, 서버 개발과 template 엔진을 붙여 사용할 수 밖에 없었습니다. 하지만 계속 원하던 것은 프론트 엔드 개발이었고 이를 적용하기 위해 팀 내에서 수차례 프론트 관련 세미나를 진행하고 토이프로젝트를 진행하였습니다. 하지만 번번히 새로운 기술에 대한 검증이 필요하다거나 미숙하다는 이유로 적용이 좌절되었습니다. 이를 계기로 카카오페이에 이직을 하게 되었고, 현재 원하는 프론트 개발을 마음껏 하고 있으며 기존에 많이 경험해보지 못했던 웹뷰 환경에서 많은 엣지케이스를 경험하며 (ㅠㅠ) 즐겁게 개발하고 있습니다. 투자, 펀드, 혜택 등의 프론트엔드를 담당하고 있습니다.`
  },
  {
    title: 'Web Developer',
    when: '2016.07 - 2018.05 (1년 11개월)',
    company: 'NHN Bugs, Pangyo',
    usecase: 'Spring, Javascript, jQuery, React',
    details: `4학년 1학기 재학 중, 신입 공채 1기로 NHN Bugs에 입사했습니다. 벅스 모바일 웹 개편을 시작으로, 삼성 스마트 티비 웹앱과 여러 장기 프로모션들 (
    <a href="https://ssk.bugs.co.kr" target="_blank">SuperSoundKorea</a>, <a href="http://nabi.bugs.co.kr" target="_blank">nabi</a>...)을 담당하고 있습니다.`
  },
  {
    title: 'Web Developer',
    when: '2014.06 - 2015.06 (1년 1개월)',
    company: 'Tastelab, Seoul',
    usecase: 'Php, Slim, html/css/js, jQuery, Requirejs',
    details: `대학 3학년 때, 전공을 가지고 처음 겪은 사회 생활이었습니다. 웹을 좋아했기 때문에, 기초적인 웹 지식을 가지고 한, 두번 해봤던 웹을 밑바탕으로 시작하여 프론트, 백엔드, 서버에 대한 개념을 배우고 REST, Async, HTTP 구조 등에 대해 학습하였습니다. 인턴 생활을 하며 5개 정도의 홈페이지를 만들고 2개 정도의 메인 웹앱 프로젝트에 참여했는데, 처음에는 아무것도 생각이 나지 않고 나의 길이 아닌가 고민을 많이 했었습니다. 하지만 스스로를 믿고 계속 열심히 하다보니 길이 보였고, 어떤 식으로 코드를 다루고 효율적으로 써야 하는지에 대해 조금은 깨우친 소중한 회사였습니다. (인턴 3개월 후 정직원 전환)`
  }
];

export interface IResumeProjectContent {
  link?: string;
  title: string;
  content: string;
}
export interface IResumeProject {
  company: string;
  contents: IResumeProjectContent[];
}
export const projectContents: IResumeProject[] = [
  {
    company: 'Kakaopay',
    contents: [
      {
        title: '혜택 서비스',
        content: `쿠폰과 이벤트 서비스를 통합한 서비스 입니다. 기존 서비스들과 다르게 타 팀과의 협업을 통해 만든 서비스 입니다. (모놀리틱 서비스에서 마이크로 서비스로의 전환)
        개발적 성장 보다는 팀간의 커뮤니케이션 방식에 대한 많은 생각을 하게 해준 서비스 입니다.`
      },
      {
        link: 'https://www.kakaopay.com/paystory/services/investment',
        title: '투자 서비스',
        content: `메인으로 담당하고 있는 프로젝트로, 입사 후 부터 현재까지 담당을 하고 있는 프로젝트 입니다. 처음 개발부터 3번 이상의 개편이 진행되었으며 (UI + Refactoring)
        처음에는 SSR로 제작, 현재는 CSR로 serving되고 있습니다. CSR에서의 static serving 서버 등등 프론트 환경 위에서의 서버에 대한 경험도 함께 쌓고 있습니다. (이전 SSR에서의 노드서버경험 또한 가지고 있습니다.) 현재까지도 많은 업데이트가 진행되고 있으며 회사에서 주목받는 프로젝트 입니다.`
      },
      {
        link: 'https://www.kakaopay.com/paystory/services/bill',
        title: '청구서',
        content: `입사 당시 청구서 개편 담당 FE 개발자로 채용이 되었으나, 내부 사정으로 개편에 많은 참여를 하진 못했습니다.`
      },
      {
        link: 'https://www.kakaopay.com/shoplist/#/',
        title: '제휴사 안내 페이지',
        content: `첫 프로젝트를 시작하기 전, 간단하게 만들었던 제휴사 안내 페이지 입니다. React & Redux를 사용한 프로젝트 입니다. 기존에 Vue를 위주로 사용하였으나, 팀 내 기술 스펙협의가
        이루어지면서 React를 사용하게 되었습니다. 입사 이래로 일주일 즈음의 기간이 주어진 프로젝트였고, 빠른 협의 및 배포 사이클을 배울 수 있었습니다.`
      }
    ]
  },
  {
    company: 'NHN Bugs',
    contents: [
      {
        link: 'https://m.bugs.co.kr',
        title: '모바일 웹 개편',
        content: `Bugs에서 교육 기간을 거치고 처음으로 진행한 작업입니다. 곡, 앨범, 뮤직PD 등등의 상세 페이지들을 미리 만들어진 Track, Album의 공통 리스트를 이용해 만드는 작업과 이벤트 및 프로모션 페이지들을 이관 작업 위주로 진행하였습니다.(복면가왕, 슈퍼사운드...) 기존에 Spring과 SVN을 이용해 프로젝트를 해본 경험이 없었기 때문에 적응할 수 있게 도와준 프로젝트 였습니다. 공통 리스트를 미리 담당자 분께서 작성해 주시고, 사용하는게 데이터를 이용하는 주된 일이었기 때문에 기본적인 mvc 구조에 대해 익힐 수 있었습니다.`
      },
      {
        link: 'https://music.bugs.co.kr/samsung/smarttv',
        title: 'Bugs in Samsung SmartTV',
        content: `Bugs에서의 애증의 대상인 듯 합니다. 모바일 웹 개편 이후부터 시작했던 프로젝트인데, 퇴사할 때 까지 저를 괴롭혔습니다. 개발에 대한 내용은 사실 복잡한게 없(?)었으나 Tizen을 이용해 웹앱을 배포하는 부분에서 문제들이 많았습니다. (GPU를 이용해야 하기 때문에 시스템 단에 라이브러리를 설치 / Android SDK 설치 / Tizen Studio 업데이트 후, 인증서로 Tizen TV 에뮬레이터 사용 불가 등등...) 담당했던 부분은 리모콘의 마우스 부분을 사용하지 않았기 때문에 리모콘의 키맵과 이벤트를 매핑하는 부분과 앱을 켜기 전에 TV에서 앱의 Preview를 보고, 빅스비의 음성인식과 연동하는 DeepLink 였습니다.`
      },
      {
        link: 'https://music.bugs.co.kr/nabi',
        title: 'Nabi project',
        content: `2017년 4월동안 진행한 프로젝트입니다. 자주 작업하던 프로모션과는 다르게 느낀 부분이 많은 프로젝트입니다. 가장 중요했던 부분은 SNS 공유 작업이었습니다. 기존에 쓰던 공유 프로세스가 존재했지만, 기획상에서 SNS 공유 후 성공과 실패에 대한 구분이 필요했습니다. 기본적으로 facebook, twitter, naverblog, kakaostory 모두가 기본 공유 라이브러리를 제공하지만 callback이 존재하는 라이브러리는 facebook과 twitter, 두 라이브러리 밖에 되지 않았습니다. 게다가 twitter에서는 콜백 이벤트가 공유 성공이 아닌, 공유 창을 띄우기만 하면 호출되는 문제가 존재해서 사실상 facebook을 제외하고는 모두 다시 만들어야 했습니다. twitter, naverblog는 사용자 인증 프로세스를 넣고 인증 후 생성된 토큰값을 이용해 사용자 대신 게시물을 게시하는 방법을 선택했고, kakaostory는 동일한 과정이지만 kakaotalk 혹은 kakao 간편인증을 이용한 로그인으로 조금은 쉽게 공유를 할 수 있었습니다. 처음 만드는 SNS 라이브러리였는데 local 환경에서 동작하지만 배포환경에서 동작하지 않는 이슈도 존재했습니다. session을 통한 데이터를 서버에서 계속 찾지 못하는 이슈였는데, 실서버에서는 서버 대수가 한대가 아니기 때문에 사용자가 새로고침을 할 때마다 각기 다른 서버 프로세스로 들어가는 것이 원인이었습니다. 그렇기 때문에 session을 모두 걷어내고 전 서버에 공유가 되는 memcache로 대체를 하였고, 사용자마다 정확한 값을 가질 수 있게 되었습니다.`
      },
      {
        link: 'https://mlounge.bugs.co.kr',
        title: 'Music Lounge',
        content: `서브 담당을 맡고 있었던 프로젝트로, 보통 수정사항들이 들어오면 주로 담당을 맡아 개발하는 일을 하였습니다. 이벤트 템플릿을 추가하는 일이 제일 큰 프로젝트였는데, 정책 사항이 몇번 씩 바뀌었고, 촉박한 기한 때문에 기획자와의 커뮤니케이션 중요성을 많이 깨닫게 된 프로젝트 였습니다. 복잡한 기획 사항 덕분에 인수인계 당시에도 메인 담당자 분께서 많이 복잡하다는 말씀을 하셨었습니다.`
      },
      {
        link: 'https://music.bugs.co.kr/panel',
        title: 'Panel',
        content: `Bugscorp와 함께 가장 최근까지 진행하던 프로젝트입니다. 일반인 패널들이 Bugs의 가사를 관리하는 시스템 (벅스 담당자들이 관리하는 부분은 따로 존재) 입니다. 오래된 프로젝트이므로 오류를 수정하는 일이 주가 되었습니다. dblink 이슈로 프로시져를 사용하는 부분이 많았고, 여러 DB를 동시에 작업할 때의 인코딩 문제들이 기억에 남았던
        이슈입니다.`
      },
      {
        link: 'http://bugscorp.co.kr',
        title: 'Bugscorp',
        content: `담당자가 바뀌게 되면서 제가 맡게 된 프로젝트입니다. 회사 홈페이지 (PR, IR, Recruit) 관리였으며, 크게 작업을 하였던 부분은 IDC 센터 이전으로 변경된 서버를 교체한 것과 Git을 통한 버저닝 적용, Bugs 서비스를 MVVM 모델로 변경하기 위한 테스트베드로 Bugscorp를 SSR이 적용된 Node + React로 변경한 것입니다. 제가 담당한 백엔드인 Node의 개발과 서버(Apach Nginx) 세팅 및 개발된 내용까지의 배포 테스트는 모두 완료하였습니다. (퇴사 전 서버와 백엔드작업은 완료하였으나, 프론트 코드에 대한 부분은 완료되지 않아서 배포되지 않음)`
      }
    ]
  },
  {
    company: 'Seminar',
    contents: [
      {
        link: `${baseUrl}/slides/vue-apollo-graphql`,
        title: 'Vuetiful Korea 4th',
        content: `GraphQL 팀 세미나를 진행하면서 Seoul Drinker에서 사용했던 API를 GraphQL로 포팅 후, 발표를 했었습니다. 그 때에는 백엔드 코드만 완성이 되어있었고, 추가적으로 Vue에 GraphQL 데이터를 불러오는 부분까지 만들어 발표를 진행했습니다.`
      },
      {
        link: `${baseUrl}/slides/graphql-start-server`,
        title: 'GraphQL',
        content: `RxJS와 같이 서비스에 이용하면 괜찮다는 생각이 뿜어져 나온 GraphQL을 이용해 네 번째 팀 세미나를 진행했습니다. Browser와 같은 제약이 없었기 때문에 내용에 대한 설명을 잘 하면 적용이 가능할 것 같다는 생각을 하였으나, 기존 서비스를 바꾸는 것에는 반대가 많았으므로 다시한 번 좌절된 발표였습니다.`
      },
      {
        link: `${baseUrl}/slides/vue-pwa-start`,
        title: 'Vuetiful Korea 3rd',
        content: `Vue 한국 커뮤니티인 Vuetiful Korea에서 두 번째 외부 세미나를 진행했습니다. 공모전에 나갔던 Seoul Drinker 프로젝트는 시간과 클라이언트 개발자 이슈로 급하게 React Native를 (처음으로)이용해 개발을 진행하였고, 이후 Vue로 웹앱으로 전환을 했습니다. 그 과정에서 Cordova/Phongap를 이용한 코드 포팅 후 클라이언트 코드를 건드리는 것에 자신이 없었기 때문에(IOS/Android 경험이 없었기에) PWA를 사용하였고, 이를 바탕으로 Vue에 PWA를 적용하는 세미나를 진행했습니다.`
      },
      {
        link: `${baseUrl}/slides/how-to-use-rxjs`,
        title: 'RxJS',
        content: `회사에서 진행한 세 번째 세미나 입니다. 조금 부끄럽지만, RxJS에 대해선 사용 할 기회가 없었기 때문에 간단히 작성된 RxJS 사이트의 예제를 쉽게 설명하는 방식으로 발표를 진행했습니다. 스트리밍 서비스를 제공하는 회사로써 RxJS를 사용한다면 많은 도움이 될 것이라 생각하고 진행한 세미나지만, IE9부터 지원하는 RxJS를 당장 사용할 수 없었습니다.`
      },
      {
        link: `${baseUrl}/slides/developer-life`,
        title: 'OSS 개발자 포럼',
        content: `첫 외부 세미나였습니다. 정말 개발을 하고 싶다는 생각이 들었을 때 도움을 받게 된 커뮤니티로, 커뮤니티 장 님의 요청으로 고등학생 ~ 대학생 개발자 분들께 어떠한 방식으로 내가 개발을 해왔으며 나와 같은, 비슷한 길을 가고자 한다면 생각해 보아야 할 부분들을 알려주고, 나 자신 또한 다른 선택을 했다면 더 좋았을 지에 대해 돌이켜 볼 수 있게 된 발표였습니다.`
      },
      {
        link: `${baseUrl}/slides/vue-basic-presentation`,
        title: 'Vue',
        content: `벅스에서의 두 번째 사내 세미나로, 목록에는 작성하지 않은 NHN 사내 메신저 bot을 관리하는 툴을 만들고, 그 내용을 설명하는 세미나였습니다.`
      },
      {
        link: `${baseUrl}/slides/react-basic`,
        title: 'React',
        content: `벅스 입사 후 진행했던 첫 사내 세미나 입니다. 회사에서는 리액트를 사용하지 않기 때문에 개인적으로 진행한 프로젝트(Mclang)를 설명하는 형식으로 진행하였습니다.`
      }
    ]
  },
  {
    company: 'Toy Projects',
    contents: [
      {
        link: 'http://github.com/seouldrinker',
        title: 'Seoul drinker',
        content: `
        2017년 7월 중순부터 10월 31일까지 서울시 앱 공모전에 참여했습니다. 설레발이라는 서울의 산책로를 소개해주는 앱을 디자이너, 안드로이드 개발자와 함께 만들고자 했지만 안드로이드 개발자가 취직을 함과 동시에 서울시에서 제공해주는 API에 이슈가 있다는 것을 알았습니다. 결국 8월말 즈음 아이디어를 변경하게 되었고, 기획자 한분과 함께 세명이서 seoul drinker라는 서울시의 수제 브루어리 펍과 맥주를 소개해주는 앱을 만들었습니다. 기술 스펙으로는 react-native, redux를 이용해 안드로이드 버전을 만들었으며 구글과 페이스북 로그인을 지원하였고, 백엔드는 node와 express, mongoDB를 이용하였습니다. 이 프로젝트는 혼자 단기간 (총 개발 기간 3~4주)에 백엔드와 처음 해보는 클라이언트 (이전에 안드로이드 또는 ios를 경험해본 적이 없었습니다)를 경험했다는 점이 가장 크게 배운 부분입니다. react-native는 이전에 했던 Mclang 프로젝트와 데이터의 흐름 자체가 비슷했기 때문에 조금은 쉽게 다가갈 수 있었고, 다시한 번 react를 하면서 Mclang에 대한 반성까지 할 수 있었습니다. 가장 큰 이슈는 시간의 부족과 데이터 구축, 라이브러리 등이 있었습니다. 중간에 아이디어를 바꿈으로써 시간이 부족한 상황에, 정제된 데이터가 Mclang 프로젝트에서 구축되었지만, 서울시에 맞는 데이터로의 정제가 필요하였습니다. 또한, react-native의 라이브러리들이 아직은 미성숙한 모습을 보였기 때문에 중간중간 넣었던 라이브러리를 빼고 필요한 부분들을 직접 만들기도 했습니다. 12월 초 즈음하여 <a href="${baseUrl}/post/life" target="_blank"> 최종 결과 </a> 가 나왔습니다. 좋은 결과를 얻지는 못하였고 억울한 점(?)도 있지만, 최선을 다했으며 직접 앱까지 돌아가는 결과물을 만든 것은 처음이기에 뿌듯함이 많이 남았고 후회는 되지 않는 결과를 얻었습니다.`
      },
      {
        link: 'https://www.instagram.com/mclang_saloon',
        title: 'Mclang',
        content: `2016년 11월부터 12월까지 약 한달 정도 진행한 프로젝트입니다. 디자이너의 졸업프로젝트를 돕는 개인 프로젝트였습니다. (디자이너의 디자인 소유권으로 github 공개를 하지 못하였습니다.) 간단한 사이트로 시간이 한 달 정도가 걸린 이유는 퇴근 이후의 짬을 내서 진행한 것과, 처음으로 React&Redux를 적용하여 진행하였기 때문입니다. 백엔드는 간단하게 Django로 API 형태의 데이터와 이미지들을 보내주고 React로 데이터를 받아 화면에 뿌려주는 간단한 사이트입니다.`
      },
      {
        link: 'https://github.com/ShanghaiDeluxe/guideMatching',
        title: 'GuideMatching',
        content: `2015년 9월 경 진행했던 서울시 공공API 공모전 프로젝트입니다. 가입하는 인원은 모두 가이드, 여행객이 될 수 있으며, 지하철 기준으로 자신이 가이드를 해 줄 역을 고르면, 여행객들이 역 별로 가이드를 골라 여행을 함께할 수 있도록 도와주는 프로그램 입니다. REST라는 것에 대한 개념은 있으나 구현이 미숙해 빈 웹뷰에 프로젝트를 불러오는 방식을 통해 구현했습니다. 비록 수상은 하지 못했지만, 많은것을 배울 수 있는 프로젝트 였습니다.`
      }
    ]
  },
  {
    company: 'Tastelab & Graduation Work',
    contents: [
      {
        link: 'https://github.com/sosanara',
        title: 'Sosanara',
        content: `2016년 1월~6월에 진행한 졸업 프로젝트 입니다. 탈모 관리 프로그램으로 python과 django을 사용했습니다. opencv로 이미지 전처리를 통해 촬영한 사진을 이진화 하고, 흰색 검은색으로 머리상태를 보여주며 살색 비율을 통해 탈모 진행율을 알려줍니다. 그리고 이진화한 데이터와 머신러닝된 데이터를 비교함으로써 타입을 알 수 있습니다. 머신러닝으로 학습한 데이터(SVM -> 가장 정확도가 높았던 SVM, KNN, NeuralNetwork 중 제일 정확도가 높았음.)와 사용자가 핸드폰으로 촬영한 사진을 비교해 미리 정한 두발 타입(Normal, Forward, Backward, Karma, Bald)중 가장 유사한 타입 대해 알려줍니다. 히스토리, 통계, 사진첩 등의 기록으로 관리를 할 수 있습니다. REST에 대한 것을 확실히 익힐 수 있는 기회였고, 이미지 더미 데이터를 만드는 자동화 라이브러리를 직접 작성해보는 경험을 하였습니다. 34팀 중 우수상을 차지하였습니다.`
      },
      {
        link: 'http://patio42.co.kr',
        title: 'Patio42',
        content: `2015년 6월 경 진행했던 스타트업 내의 웹사이트 입니다. php와 사내 프레임워크인 publ을 이용하여 만든 웹사이트 입니다. 팝업과 sorting, caching에 대해 배울 수 있었습니다.`
      },
      {
        link: 'http://soobul.com',
        title: 'Soobul',
        content: `2014년 10월 경 진행했던 프로젝트 입니다. 회사에서 메뉴판과 포스기 연동 App을 만들면서 함께 진행한 클라이언트의 홈페이지로 처음으로 혼자 백엔드 및 클라이언트를 모두 맡아서 진행한 프로젝트입니다. 처음으로 API를 이용한 프로젝트입니다.`
      },
      {
        link: 'http://theflyingpan.co.kr',
        title: 'Theflyingpan',
        content: `2014년 8월 경 진행했던 프로젝트 입니다. 도중에 한번 stop이 되었던 프로젝트 였지만 첫 프로젝트로 백엔드에 대한 모든 것을 처음으로 배웠던 프로젝트이며, pagination과 관리자 페이지에 대해 직접 구현했던 프로젝트입니다.`
      }
    ]
  }
];

export interface IResumeSkill {
  title: string;
  level: number;
}
export const skillContents: IResumeSkill[] = [
  { title: 'React & Mobx & ...', level: 90 },
  { title: 'Javascript & jQuery', level: 80 },
  { title: 'HTML5 & CSS', level: 75 },
  { title: 'Vue & Vuex', level: 70 },
  { title: 'Spring', level: 60 },
  { title: 'Python & Django', level: 40 },
  { title: 'Php & slim', level: 20 },
  { title: 'Photoshop', level: 20 }
];
