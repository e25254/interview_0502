# Interview_0502

## Link

**[Deploy on GCP](https://interview0505.jerryjie.site/)**

## How to start in local

1. change to `v18.17.0` node version

   ```shell
   nvm use
   # or
   nvm use v18.17.0
   ```

2. install packages

   ```shell
   npm install
   ```

3. add `.env` file in project root

   ```env
   FINMIND_API_TOKEN=your finmind token
   ```

4. run dev script

   ```shell
   npm run dev
   ```

## Skill

- 使用 **[NextJS](https://nextjs.org/)** + **[Typescript](https://www.typescriptlang.org/)** + **[sass](https://sass-lang.com/)** 的 `App route` 進行開發
- 使用 [HighCharts](https://www.highcharts.com/)產生圖表
- **[MUI](https://mui.com/)** 作為 UI library，並設定好主題
- 使用 **[axios](https://github.com/axios/axios)** 發出 api 請求
- 使用 **[react query v5](https://tanstack.com/query/v5/docs/framework/react/overview)** 進行 api 狀態管理
- 使用 **[zustand](https://github.com/pmndrs/zustand)** 來進行 react 狀態管理

## 佈署策略

- 架設 **[Nginx](https://github.com/pmndrs/zustand)** 作為請求導向
- 使用 **[Certbot](https://certbot.eff.org/)** 申請 SSL 憑證
- 使用 **[pm2](https://pm2.keymetrics.io/)** 作為 `NextJS` 啟動的服務
- 將進到 `Nginx` 的請求導向到由 `pm2` 起的服務
