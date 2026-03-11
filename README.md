# 🎛️ Interview Atlas — Skeuomorphic Control Panel

> 把一份真实的访谈报告，重构成一台你想动手操作的拟物化控制面板。

<br>

## ✨ 这是什么？

这不是又一个"把文字贴到网页上"的项目。

它的原始素材是一份深度访谈报告——关于一个人如何在申研、创业和自我价值之间做选择，以及 **用 AI 理解情绪** 是否值得成为长期主线。

我们把这份报告的完整推理链条拆解为 **14 个叙事卷册**，然后用拟物化（Skeuomorphism）设计语言重新组装：金属面板、皮革质感、木纹底座、LED 指示灯、凹槽分割线、螺丝铭牌……每一个视觉元素都在模拟真实设备的触感。

**📖 [在线阅读 → GitHub Pages](https://paranoiawang0818.github.io/interview_with_GPT/)**

<br>

## 🖥️ 预览

| 区域 | 描述 |
|------|------|
| 🟢 **Hero 仪表盘** | 主标题 + 四组数据仪表 + 三枚操作按钮 |
| 🟠 **卷册目录** | 14 卷完整索引，点击即跳转 |
| 🔵 **内容面板** | 金属 / 皮革 / 木纹三种材质交替呈现 |
| 🔴 **附录资源** | 一键下载原版 PDF / 跳转完整对话记录 |

<br>

## 📂 项目结构

```
interview_with_GPT/
├── index.html          # 页面骨架（拟物化控制面板布局）
├── styles.css          # 全部样式（材质纹理 / LED / 按钮 / 面板）
├── main.js             # 数据 + 渲染逻辑（14 卷内容动态生成）
├── Interview Report.pdf  # 原版访谈报告
└── .gitignore
```

<br>

## 🎨 设计亮点

🔩 **真实材质感** — 金属拉丝、皮革压纹、木纹底板，三种面板材质交替出现，避免视觉疲劳

💡 **LED 指示灯系统** — 绿 / 琥珀 / 蓝 / 红四色循环，每个章节和卡片都有独立状态灯

⚙️ **机架式布局** — 顶部金属导航条 + 底部螺丝铭牌，整体模拟 19 英寸设备机架

🎚️ **按钮物理反馈** — 鼠标按下时按钮下沉 2px，松开回弹，模拟实体开关手感

📐 **凹槽分割线** — 用 inset shadow 模拟金属面板上的铣削凹槽

🌫️ **全局噪点纹理** — SVG 噪点叠加 + 暗角渐变，营造真实设备表面的颗粒感

<br>

## 📚 内容结构（14 卷）

| 卷 | 主题 | 核心问题 |
|----|------|----------|
| I | 访谈背景 | 为什么不是从一个创业点子出发？ |
| II | 核心问题 | 未来 3–5 年最想得到什么？ |
| III | 人群聚焦 | 谁是真正要帮助的人？ |
| IV | 产品角色 | 它应该是什么，不应该是什么？ |
| V | 替代方案 | 为什么不是朋友、日记或普通 AI？ |
| VI | 对话修正 | 共鸣的边界在哪里？ |
| VII | 伦理底线 | 数字分身绝对不能做的三件事 |
| VIII | 成长路线 | 必须补齐哪三类能力？ |
| IX | 申研定位 | 理想的申请者身份是什么？ |
| X | 研究问题 | 未来 3 年最想死磕什么？ |
| XI | 有效性判断 | 怎样才算「真的有效」？ |
| XII | 数据与信任 | 如何不背叛用户的信任？ |
| XIII | 思维框架 | Design Thinking × Critical Thinking |
| XIV | 最终结论 | 这条路值不值得走？ |

<br>

## 🚀 本地运行

无需安装任何依赖，直接用浏览器打开即可：

```bash
# 克隆仓库
git clone https://github.com/paranoiawang0818/interview_with_GPT.git

# 打开页面
open interview_with_GPT/index.html
# Windows 用户：
start interview_with_GPT/index.html
```

<br>

## 🛠️ 技术栈

- **HTML / CSS / Vanilla JS** — 零框架，零构建工具，打开即用
- **Google Fonts** — Orbitron（仪表盘数字）+ Share Tech Mono（标签）+ Inter（正文）
- **纯 CSS 材质模拟** — 所有纹理、光影、凹凸效果均由 CSS 渐变与阴影实现，无图片依赖

<br>

## 📄 License

本项目内容基于真实访谈报告整理，仅供学习与展示用途。

---

<p align="center">
  <sub>🔧 Built with care · Designed as a skeuomorphic control panel · 2026</sub>
</p>
