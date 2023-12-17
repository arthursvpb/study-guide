# MyStudies

copy .env from .env.example

```sh
yarn # will install all dependencies from monorepo
yarn workspace @study-guide/web dev # run front-end
yarn workspace @study-guide/api db:start:dev # run postgres instance
yarn workspace @study-guide/api db:migrate:dev # run migrations
yarn workspace @study-guide/api start:dev # run nest js api
```
