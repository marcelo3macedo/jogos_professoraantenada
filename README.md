# Educational Games Section for Preschool Teachers

This project is a microfrontend section for an educational blog designed for preschool teachers, offering a variety of interactive games aimed at young students. The games focus on foundational skills such as math, language, and visual identification to enhance early childhood education.

## Code Techs

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## SonarCloud Analysis

![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=alert_status)
![Bugs](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=bugs)
![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=code_smells)
![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=vulnerabilities)
![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=sqale_index)
![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=reliability_rating)
![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=security_rating)
![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=sqale_rating)
![Duplicated Lines](https://sonarcloud.io/api/project_badges/measure?project=marcelo3macedo_jogos_professoraantenada&metric=duplicated_lines_density)

## Features

- **Math Games**: Counting fingers, number matching, and more.
- **Language Games**: Syllable selection, word formation.
- **Visual Identification**: Match and identify images.
- **Internationalization**: Multilingual support using `next-intl`.


## Installation

1. Clone the repository:
```bash
    git clone https://github.com/marcelo3macedo/jogos_professoraantenada.git
    cd jogos_professoraantenada
```

2. Install dependencies:

```bash
    npm install
```

3. Run the development server:
```bash
    npm run dev
```

## Run with Docker Image:

```bash
    docker run -p 3000:3000 marcelo3macedo/jogos_professoraantenada:latest
```