# DING (Dev-ing Blog) 🚀

개발 공부를 하면서 배우고 느낀 것들을 기록하고 공유하는 개인 블로그 프로젝트입니다.

## 🔗 링크
- **블로그 주소**: [https://dingblog.vercel.app](https://dingblog.vercel.app)

## 🛠 Tech Stack

### Frontend
- **Framework**: [Gatsby v5](https://www.gatsbyjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Styled-components](https://styled-components.com/)
- **Content**: [MDX](https://mdxjs.com/) (Markdown + React Components)

### Infrastructure & Tools
- **Deployment**: [Vercel](https://vercel.com/)
- **CMS**: [Netlify CMS](https://www.netlifycms.org/) (콘텐츠 관리용)
- **Comments**: [Giscus](https://giscus.app/ko) (GitHub Discussions 기반)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Search**: [Fuse.js](https://fusejs.io/) (클라이언트 사이드 검색)

## ✨ Key Features

- **MDX Support**: 마크다운 내에서 직접 React 컴포넌트를 사용하여 역동적인 콘텐츠를 구성할 수 있습니다.
- **Responsive Design**: 모바일, 태블릿, 데스크탑 등 다양한 기기에서 최적화된 화면을 제공합니다.
- **SEO Optimized**: `gatsby-plugin-sitemap`, `gatsby-plugin-robots-txt`, 메타 태그 등을 통해 검색 엔진 최적화가 되어 있습니다.
- **Code Highlighting**: `PrismJS`를 통해 가독성 높은 코드 블록을 제공합니다.
- **Dark Mode**: 사용자 경험을 위한 다크 모드/라이트 모드를 지원합니다.
- **Type Safety**: TypeScript를 적용하여 안정적인 개발 환경을 구축했습니다.

## 📂 Project Structure

```text
src/
├── assets/          # 정적 자산 (폰트, 아이콘 등)
├── components/      # 재사용 가능한 UI 컴포넌트
├── content/
│   └── blog/        # 블로그 포스트 데이터 (MDX)
├── context/         # 전역 상태 관리 (React Context)
├── hooks/           # 커스텀 훅
├── images/          # 이미지 파일
├── pages/           # 개별 페이지 (index, 404 등)
├── styles/          # 글로벌 스타일 및 테마 정의
└── templates/       # 블로그 포스트 및 리스트 템플릿
```

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Installation
```bash
git clone https://github.com/rsl150101/my-blog.git
cd my-blog
npm install
```

### Local Development
```bash
npm run develop
```
브라우저에서 `http://localhost:8000`으로 접속하여 확인하실 수 있습니다.

### Build
```bash
npm run build
```
운영 환경 배포를 위한 빌드 결과물이 `public/` 디렉토리에 생성됩니다.

---
Created by [rsl150101](https://github.com/rsl150101)
