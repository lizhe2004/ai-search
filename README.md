# AI搜索引擎

本文基于https://github.com/code-moss/codemoss-search CodeMoss AI搜索引擎（基于ChatGPT和谷歌搜索）修改。
支持Vercel一键部署以及支持在Vercel上的流式输出(原项目支持流式输出，但在vercel上不能正常生效）。

## 使用说明

```sh
# 第一步 复制 .env.template 文件，改成 .env

# 第二步：在 .env 文件中配置 OpenAI key 和 Serper KEY

# 第三步：安装依赖
pnpm install

# 第四步：启动
npm run dev

# 第五步：访问下面链接进行使用
http://localhost:3000/
```

## 一键安装到Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flizhe2004%2Fai-search&env=CHAT_MODEL,BASE_URL,API_KEY,SERPER_API_KEY&envDescription=CHAT_MODEL%3A%20%E9%BB%98%E8%AE%A4%E4%BD%BF%E7%94%A8%E7%9A%84%E6%A8%A1%E5%9E%8B%20BASE_URL%20%3BOpenAI%E7%9A%84%E5%9C%B0%E5%9D%80%20%E5%B8%A6v1%E8%B7%AF%E5%BE%84%20API_KEY%EF%BC%9AOpenAi%E7%9A%84Key%20SERPER_API_KEY%EF%BC%9ASerper%E7%9A%84key&demo-title=AI%E6%90%9C%E7%B4%A2&demo-url=https%3A%2F%2Fsou.lidaxia.io)
