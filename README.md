# ecommerce-site

一个基于 `Next.js 15`、`React 19` 和 `TypeScript` 搭建的电商首页示例项目，当前实现了品牌导航、主视觉区域、商品分类、热销商品、优惠活动、购物车入口、用户评价和联系表单等核心展示模块。

## 技术栈

- Next.js 15
- React 19
- TypeScript
- CSS

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发环境

```bash
npm run dev
```

默认启动后可在 [http://localhost:3000](http://localhost:3000) 查看页面。

### 3. 构建生产版本

```bash
npm run build
```

### 4. 启动生产服务

```bash
npm run start
```

## 项目结构

```text
ecommerce-site/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ next.config.ts
└─ README.md
```

## 已实现内容

- 响应式头部导航与移动端菜单
- 电商首页 Hero 展示区
- 商品分类卡片
- 热销商品列表
- 购物车数量交互
- 优惠活动展示
- 用户评价区块
- 联系方式与咨询表单

## Git 说明

仓库已配置 `.gitignore`，默认排除以下内容：

- `node_modules/`
- `.next/`
- `dist/`、`build/`、`out/`
- `.env` 及其他环境变量文件
- 日志和常见临时文件

## 后续可扩展方向

- 接入真实商品数据源
- 增加商品详情页与分类页
- 对接购物车和下单流程
- 增加表单提交与数据校验
- 补充自动化测试与部署配置
