<h1 align="center">MyStudies</h1>

<p align="center">
  <a href="#-running">Running</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
  <a href="#-license">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=ee964b&labelColor=000000">
  </a>
</p>

<p align="center">
  <img alt="MyStudies" src=".github/images/preview.png" width="100%">
</p>

<p align="center">
MyStudies is a versatile tool designed to assist users in organizing their self-study efforts. It enables users to create custom "paths" or "roadmaps" for achieving specific educational goals. For instance, one might develop a "Back-end Developer" roadmap, detailing ordered topics and resources to master back-end development. This system is adaptable to any field of study, not just IT. Notably, MyStudies is structured as a Monorepo, featuring separate workspaces for its back-end and front-end components.
</p>

## 💻 Running

**Requirements**:

- `docker`
- `node >= 18.x.x`
- `yarn >= 1.22.19` _(Note: `npm` is not supported for this project)_

### 1. Clone the repository

```bash
git clone https://github.com/arthursvpb/study-guide.git
```

### 2. Setup environment

Copy the `.env.example` file to a `.env` in the `packages/api` folder.

### 3. Install dependencies

```bash
yarn # Installs dependencies for the monorepo
```

### 4. Run the application

#### Start the front-end:

```bash
yarn workspace @study-guide/web dev
```

#### Initialize the Postgres instance on Docker:

```bash
yarn workspace @study-guide/api db:start:dev
```

#### Execute database migrations:

```bash
yarn workspace @study-guide/api db:migrate:dev
```

#### Start the Nest.js API:

```bash
yarn workspace @study-guide/api start:dev
```

#### Access the application at:

- Front-end: `http://localhost:3000`
- API: `http://localhost:8080`

## ✨ Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Nest.js](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/)

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
