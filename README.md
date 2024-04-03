# CodeMoss AI搜索引擎

CodeMoss AI搜索引擎（基于ChatGPT和谷歌搜索）

项目初衷：我认为，未来的搜索，不应该在一堆信息里面找答案，应该让AI帮你汇总答案；这个项目就是做这个的，不过目前功能太少，得到的答案不完全对，还需要设计权重算法才行；

<img width='600' src="https://luomacode-1253302184.cos.ap-beijing.myqcloud.com/codemoss-search.png" />

<img width='600' src="https://luomacode-1253302184.cos.ap-beijing.myqcloud.com/codemoss-search2.png" />

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
