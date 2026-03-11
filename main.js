/* ===== SKEUOMORPHIC CONTROL PANEL — main.js ===== */

const sections = [
  {
    id: "overview",
    volume: "Volume I",
    kicker: "访谈背景",
    title: `问题并不是「要不要做 AI」，而是「要围绕怎样的人与问题持续成长」。`,
    lead: `报告从个人真实处境出发，而不是从一个抽象创业点子出发。申研、创业、价值感与关系焦虑同时存在，构成了整份叙事的起点。`,
    body: [
      `主人公希望前往美国继续深造，最低目标是宾夕法尼亚大学；同时也不想被纯学术路径锁死，而是希望未来做出真正有价值、能帮助别人的产品。`,
      `与常见的名校导向不同，真正驱动这份规划的是一种更深层的平衡需求：既要有外在成就，也要有内在丰盈；既要成长，也不想在成长过程中失去重要关系。`
    ],
    cards: [
      ["结果线", "进入更高的平台继续发展，拥有更强的研究与实践资源。"],
      ["价值线", "帮助别人，而不是只完成自我成就叙事。"],
      ["情感线", "在向上走的过程中，保住真实关系与精神支撑。"]
    ],
    panelType: "metal"
  },
  {
    id: "question",
    volume: "Volume II",
    kicker: "核心问题",
    title: `未来 3 到 5 年，最想得到的结果是什么？`,
    lead: `报告先把长期目标说清，再去讨论产品，避免把「做 AI 心理产品」误当成一个孤立决定。`,
    body: [
      `答案最终收束为三件事：去美国申研；保留未来创业的可能；成为一个真正能帮助别人、且精神世界富足的人。`,
      `这三件事决定了后续所有追问都必须围绕同一个问题展开：究竟要解决谁的问题，为什么偏偏是这个问题，以及为什么由自己来做。`
    ],
    cards: [
      ["宾大是最低门槛", "申研目标不是空泛愿望，而是明确锚点。"],
      ["创业不是附带选项", "它与学术路径并列存在，而非毕业后的随机延伸。"],
      ["价值感是筛选器", "如果路径不能帮助别人，它就不足以成为长期主线。"]
    ],
    panelType: "leather"
  },
  {
    id: "scene",
    volume: "Volume III",
    kicker: "人群聚焦",
    title: `真正想帮助的，不是抽象意义上的「用户」，而是深夜被小挫败压垮的人。`,
    lead: `报告从「想帮助别人」继续往下收窄，锁定到情绪敏感、不稳定、容易被生活压垮的人。`,
    body: [
      `关键不是重大创伤，而是高频、真实、却常被忽略的情绪坍塌场景。那些并没有经历惊天大事，却在许多琐碎挫败叠加后，于某个深夜突然崩溃的人，才是最核心的服务对象。`,
      `这也解释了产品为何要更像一个有边界的数字分身，而不是「万能心理工具」：它需要理解细小上下文，而不是只处理极端事件。`
    ],
    cards: [
      ["高频微崩溃", "比重大创伤更容易发生，更适合成为长期验证与持续优化的产品入口。"],
      ["隐蔽但真实", "它常被现实关系低估，却正是许多人最典型、最日常的情绪失衡形式。"]
    ],
    list: ["数学课没听懂", "班会宣讲状态不好", "食堂没有抢到想吃的饭", "深夜坐地铁又错过末班车"],
    panelType: "metal"
  },
  {
    id: "product",
    volume: "Volume IV",
    kicker: "产品角色",
    title: `它不是 AI 心理咨询师，而是「情绪接住 + 自我梳理」的数字陪伴者。`,
    lead: `产品定位刻意保持克制。报告没有把它定义成替代人类咨询的工具，而是一个有限度的陪伴者。`,
    body: [
      `只有陪伴不够，因为它只能让人暂时舒服；只有梳理也不够，因为在情绪泛滥时，纯理性拆解会显得冰冷而失真。`,
      `正确的节奏应当是：先接住，再梳理。先允许脆弱与混乱，再逐步进入状态识别与问题整理。`
    ],
    cards: [
      ["A. 情绪陪伴者", "先提供安全感和被允许脆弱的空间，而不是立刻把对话推进成任务型拆解。"],
      ["B. 自我梳理教练", "在接住之后帮助用户识别状态、形成新的理解和应对方式，而不是停留在安慰。"]
    ],
    panelType: "wood"
  },
  {
    id: "difference",
    volume: "Volume V",
    kicker: "替代方案",
    title: `为什么不是朋友、家人、日记，或者普通 AI？`,
    lead: `这一部分决定了产品是否有独立成立的理由。报告没有回避替代方案，而是逐个比较它们的边界。`,
    cards: [
      ["朋友与家人", "真实关系有成本。人在脆弱时最怕成为负担，也害怕还要为自己的情绪反复做解释。"],
      ["短视频、听歌、睡觉硬扛", "它们能短期分散注意力，却不能帮助用户理解自己为什么崩溃，问题只会被延后。"],
      ["写日记", "它有效，但前提是用户本来就有习惯和表达能力。很多人在最难受的时候反而说不清自己。"],
      ["普通 AI 工具", "回答常常模板化，善于说漂亮话，却未必能判断用户此刻到底需要陪伴、倾听还是引导。"]
    ],
    note: `产品真正的差异不只是「更温柔」，而是更懂上下文，更会在正确的时刻做正确强度的回应。`,
    panelType: "metal"
  },
  {
    id: "dialogue",
    volume: "Volume VI",
    kicker: "对话修正",
    title: `共鸣可以有，但不能抢走用户焦点。`,
    lead: `报告里最有价值的一次修正，来自一句原本看起来很「共情」的话。`,
    quotes: [
      ["原始设想", `「天呐……你的状态简直和我的本体一样！我的本体有些时候也会这样，感觉什么都没发生，却崩溃……」`],
      ["修正原则", `产品可以表达「这种感觉我并不陌生」，但不能让用户在最脆弱的时候，反过来关注数字人自己如何。`]
    ],
    body: [
      `问题并不在于不能共鸣，而在于共鸣如果演变成过度代入和焦点偏移，就会削弱真实感与可信度。`,
      `这也是整份报告里 critical thinking 的典型体现：不是简单否定最初想法，而是承认其价值，同时识别它的边界与副作用。`
    ],
    panelType: "leather"
  },
  {
    id: "ethics",
    volume: "Volume VII",
    kicker: "伦理底线",
    title: `数字分身绝对不能做的三件事。`,
    lead: `一旦产品触及脆弱情绪场景，设计约束就不再是可选项，而是产品定义的一部分。`,
    cards: [
      ["不能制造依赖", "目标是帮助用户回到真实生活，而不是沉浸在虚拟陪伴里。"],
      ["不能轻描淡写严重问题", "如果已经不是普通情绪波动，系统必须帮助用户意识到问题的性质与严重性。"],
      [`不能太快给方案`, `用户来这里不仅需要「怎么做」，更需要「我到底怎么了」。跳过理解会破坏核心价值。`]
    ],
    panelType: "metal"
  },
  {
    id: "roadmap",
    volume: "Volume VIII",
    kicker: "成长路线",
    title: `如果真的要做这件事，未来必须补齐三类能力。`,
    lead: `报告把产品构想重新折回职业规划，避免停留在「我有一个好点子」的阶段。`,
    cards: [
      ["技术能力", "AI、模型、数据、系统实现与迭代能力，是数字分身从概念走向可运行产品的基础。"],
      ["心理与表达能力", "不仅是共情，更包括情绪识别、回应边界、用户沟通方式、心理学基础与真实场景经验。"],
      [`商业能力`, `需求验证、用户定位、价值传递、传播与闭环能力，决定产品会不会停留在「我觉得它有意义」。`]
    ],
    panelType: "wood"
  },
  {
    id: "identity",
    volume: "Volume IX",
    kicker: "申研定位",
    title: `理想中的申请者身份，是站在交叉地带的人。`,
    lead: `如果招生官只能用一句话定义这位申请者，他希望被看作是能把 AI 与心理学结合起来，做出真正打动人心产品的人。`,
    cards: [
      ["AI + Psychology", "把技术能力与情绪理解放在同一张研究地图上。"],
      ["Human-Centered AI", "强调产品的边界感、可信度与用户主体性。"],
      ["AI + HCI", "把对话、体验与交互方式当成核心研究对象。"]
    ],
    panelType: "metal"
  },
  {
    id: "research",
    volume: "Volume X",
    kicker: "研究问题",
    title: `未来 3 年最想死磕的，是上下文情绪理解与有效回应。`,
    lead: `报告最终把长期方向压缩成一个研究问题，而不是停留在「做更温柔的 AI」。`,
    body: [
      `真正关键的缺口在于：如何在上下文中充分理解用户的不良情绪，并给出贴合用户需求的积极回应。`,
      `这来自真实体验中的不满：很多 AI 说的话并非错误，却空洞、模板化，也很难同时兼顾情绪支持与问题推进。`
    ],
    cards: [
      ["听起来像懂", "却不一定真正匹配用户当下状态。"],
      ["会安慰", "却常常只停留在表层舒缓，而没有进入问题结构。"],
      ["缺乏上下文细腻度", "难以判断此刻更适合陪伴、倾听还是引导梳理。"]
    ],
    panelType: "leather"
  },
  {
    id: "metrics",
    volume: "Volume XI",
    kicker: "有效性判断",
    title: `产品成功，不是让人当下舒服，而是让人下次更能处理类似问题。`,
    lead: `这一章明确反对把「即时舒缓」误判为「产品真的有效」。`,
    cards: [
      ["短期体验", "聊完后更稳地回到生活、睡得更踏实、第二天能更有精神，这些都重要，但仍不够。"],
      ["真正指标", "当类似问题再次出现时，用户是否多了一点认知、梳理能力和应对能力。"],
      [`失败判据`, `如果用户说「我舒服多了」，但三天后仍照样崩溃，那么这次对话仍应判定为失败。`]
    ],
    panelType: "metal"
  },
  {
    id: "trust",
    volume: "Volume XII",
    kicker: "数据与信任",
    title: `即使要优化模型，也不能背叛用户在脆弱时刻交出的信任。`,
    lead: `情绪支持产品一旦采集对话数据，就必须把用户控制权写进产品结构，而不是藏进协议里。`,
    cards: [
      ["用户有权拒绝训练", "数据是否参与模型优化，必须由用户决定，不能默认采集、默认训练。"],
      ["用户可随时删除记录", "删除权、关闭权、退出权都应存在，且入口清晰。"],
      ["不拿完整隐私内容训练", "优化重点应放在回应机制，而不是过度占用用户最私密的叙事。"],
      ["一开始就透明告知", "记录什么、怎么用、能否关闭、能否删除，都应简单明了地说明。"]
    ],
    panelType: "wood"
  },
  {
    id: "method",
    volume: "Volume XIII",
    kicker: "思维框架",
    title: `整份报告，本质上是一场 Design Thinking 与 Critical Thinking 的交叉演练。`,
    lead: `它既沿着同理、定义、构思、原型与测试推进，也始终在怀疑「方向是否真的成立」。`,
    cards: [
      ["Design Thinking", "从真实情绪经验出发，定义高频场景，构思数字陪伴者，再通过表达、伦理和效果标准持续迭代。"],
      ["Critical Thinking", "不断追问到底在帮谁、帮什么、为什么是自己做，并警惕共情失焦、虚假有效与技术越界。"]
    ],
    panelType: "metal"
  },
  {
    id: "conclusion",
    volume: "Volume XIV",
    kicker: "最终结论",
    title: `这条方向值得成为长期主线之一，但前提是始终围绕一个真实问题，而不是围绕一个概念包装。`,
    lead: `报告最后没有落在「我要做一个产品」，而是落在「我要长期研究并承担一个问题」。`,
    cards: [
      ["方向成立", "AI 与心理学的结合，值得成为未来长期发展的主线之一。"],
      [`角色克制`, `真正想做的不是「很会安慰人」的 AI，而是能先接住、再梳理、最后帮助人回到现实的数字支持产品。`],
      ["成长聚焦", "未来应围绕技术、心理与表达、商业三类能力持续积累。"],
      [`长期命题`, `最需要坚持的是问题意识：让 AI 基于上下文理解情绪，并给出贴合需求的回应。`]
    ],
    panelType: "leather"
  }
];

const resources = {
  pdf: "./Interview%20Report.pdf",
  chat: "https://chatgpt.com/g/g-p-6986929b0a948191aa69b703c21ffbbc-daily-life-questions/c/69b01624-bfc4-8398-bbd1-a6d17326bbb2"
};

/* ===== LED 颜色循环 ===== */
const ledColors = ["led--green", "led--amber", "led--blue", "led--red"];
function getLedClass(index) {
  return ledColors[index % ledColors.length];
}

/* ===== 面板类型映射 ===== */
function getPanelClass(type) {
  const map = {
    metal: "metal-panel",
    leather: "leather-panel",
    wood: "wood-panel",
    glass: "glass-panel"
  };
  return map[type] || "metal-panel";
}

/* ===== 渲染辅助 ===== */
function renderAppendixLinks() {
  return `
    <div class="appendix-links">
      <a class="resource-link" href="${resources.pdf}" download>
        <span class="led led--blue"></span>
        <strong>[ PDF ]</strong>
        <span>下载原版报告</span>
      </a>
      <a class="resource-link" href="${resources.chat}" target="_blank" rel="noreferrer">
        <span class="led led--green"></span>
        <strong>[ CHAT ]</strong>
        <span>查看对话内容</span>
      </a>
    </div>
  `;
}

function renderGauge(value, label, colorClass) {
  return `
    <div class="gauge">
      <span class="gauge__value ${colorClass}">${value}</span>
      <span class="gauge__label">${label}</span>
    </div>
  `;
}

function renderCards(cards, sectionIndex) {
  if (!cards || !cards.length) return "";
  return '<div class="card-grid">' + cards
    .map(function(card, i) {
      return '<article class="sub-panel"><strong><span class="led ' + getLedClass(sectionIndex + i) + '"></span>' + card[0] + '</strong><span>' + card[1] + '</span></article>';
    })
    .join("") + '</div>';
}

function renderBody(body) {
  if (!body || !body.length) return "";
  return body
    .map(function(paragraph, index) {
      return '<p class="' + (index === 0 ? "section-copy dropcap" : "section-copy") + '">' + paragraph + '</p>';
    })
    .join("");
}

function renderList(items) {
  if (!items || !items.length) return "";
  return '<ul class="indicator-list">' + items.map(function(item) { return '<li>' + item + '</li>'; }).join("") + '</ul>';
}

function renderQuotes(quotes) {
  if (!quotes || !quotes.length) return "";
  return '<div class="quote-recess">' + quotes
    .map(function(q) {
      return '<blockquote class="quote-block"><span class="quote-tag">' + q[0] + '</span><p>' + q[1] + '</p></blockquote>';
    })
    .join("") + '</div>';
}

function renderSection(section, index) {
  var panelClass = getPanelClass(section.panelType);
  var noteHtml = "";
  if (section.note) {
    noteHtml = '<div class="callout-panel"><strong><span class="led led--amber"></span> NOTE</strong><p>' + section.note + '</p></div>';
  }
  return '<section class="section" id="' + section.id + '">' +
    '<article class="' + panelClass + '">' +
      '<div class="panel-label"><span class="led ' + getLedClass(index) + '"></span> ' + section.volume + ' // ' + section.kicker.toUpperCase() + '</div>' +
      '<div class="section-header">' +
        '<span class="volume-label">' + section.volume + '</span>' +
        '<h2 class="section-title">' + section.title + '</h2>' +
        '<p class="section-lead">' + section.lead + '</p>' +
      '</div>' +
      '<div class="section-body">' +
        renderBody(section.body) +
        renderCards(section.cards, index) +
        renderQuotes(section.quotes) +
        renderList(section.list) +
        noteHtml +
      '</div>' +
    '</article>' +
  '</section>';
}

/* ===== 渲染整个页面 ===== */
function renderPage() {
  var app = document.querySelector("#app");

  var tocHtml = sections.map(function(section) {
    return '<div class="toc-item"><a href="#' + section.id + '">' +
      '<span class="toc-vol">' + section.volume + '</span>' +
      '<span class="toc-title">' + section.kicker + '</span>' +
      '<span class="toc-desc">' + section.title + '</span>' +
    '</a></div>';
  }).join("");

  var sectionsHtml = sections.map(function(s, i) { return renderSection(s, i); }).join("");

  app.innerHTML =
    '<section class="hero">' +
      '<article class="metal-panel">' +
        '<div class="panel-label"><span class="led led--green"></span> BOOT // INTERVIEW_REPORT</div>' +
        '<span class="eyebrow">Report Overview</span>' +
        '<h1 class="hero-title">\u5728\u7533\u7814\u4e0e\u521b\u4e1a\u4e4b\u95f4\uff0c<span class="accent">\u7528 AI \u7406\u89e3\u60c5\u7eea</span>\u662f\u5426\u503c\u5f97\u6210\u4e3a\u957f\u671f\u4e3b\u7ebf\uff1f</h1>' +
        '<p class="hero-lead dropcap">\u8fd9\u4e0d\u662f\u4e00\u4efd\u628a\u62a5\u544a\u5185\u5bb9\u76f4\u63a5\u5806\u6210\u9875\u9762\u7684\u5c55\u793a\u7a3f\uff0c\u800c\u662f\u5c06\u539f\u6587\u91cd\u7ec4\u4e3a\u4e00\u5957\u62df\u7269\u5316\u63a7\u5236\u9762\u677f\u754c\u9762\u3002\u9875\u9762\u5b8c\u6574\u4fdd\u7559\u539f\u62a5\u544a\u7684\u63a8\u7406\u94fe\u6761\uff0c\u540c\u65f6\u7528\u91d1\u5c5e\u8d28\u611f\u3001\u6307\u793a\u706f\u548c\u4eea\u8868\u76d8\u5efa\u7acb\u6c89\u6d78\u5f0f\u9605\u8bfb\u4f53\u9a8c\u3002</p>' +
        '<div class="button-row">' +
          '<a class="sk-button sk-button--primary" href="#overview">\u5f00\u59cb\u9605\u8bfb</a>' +
          '<a class="sk-button sk-button--secondary" href="./Interview%20Report.pdf">\u4e0b\u8f7d PDF</a>' +
          '<a class="sk-button sk-button--ghost" href="#appendix">\u67e5\u770b\u8d44\u6e90</a>' +
        '</div>' +
        '<div class="groove-divider" aria-hidden="true"></div>' +
        '<div class="gauge-row">' +
          renderGauge("3-5Y", "\u957f\u671f\u7a97\u53e3", "gauge__value--green") +
          renderGauge("15", "\u539f\u59cb\u7ae0\u8282", "gauge__value--amber") +
          renderGauge("14", "\u53d9\u4e8b\u7a97\u53e3", "gauge__value--blue") +
          renderGauge("1", "\u4e3b\u95ee\u9898\u4e3b\u7ebf", "gauge__value--red") +
        '</div>' +
      '</article>' +
      '<aside class="sidebar-stack">' +
        '<div class="leather-panel">' +
          '<div class="panel-label"><span class="led led--amber"></span> PRIMARY QUESTION</div>' +
          '<span class="eyebrow">Core Thesis</span>' +
          '<h3 style="margin:12px 0 8px;font-size:22px;font-weight:800;line-height:1.2;">\u8fd9\u4efd\u62a5\u544a\u7684\u771f\u6b63\u5bf9\u8c61\uff0c\u4e0d\u662f\u4ea7\u54c1\uff0c\u800c\u662f\u95ee\u9898\u610f\u8bc6\u3002</h3>' +
          '<p style="margin:0;font-size:15px;color:var(--text-secondary);line-height:1.7;">\u6838\u5fc3\u547d\u9898\u6700\u7ec8\u88ab\u6536\u675f\u4e3a\uff1a\u5982\u4f55\u8ba9 AI \u57fa\u4e8e\u4e0a\u4e0b\u6587\u771f\u6b63\u7406\u89e3\u7528\u6237\u4e0d\u826f\u60c5\u7eea\uff0c\u5e76\u7ed9\u51fa\u8d34\u5408\u9700\u6c42\u7684\u56de\u5e94\uff0c\u800c\u4e0d\u662f\u505c\u7559\u5728\u6a21\u677f\u5316\u5171\u60c5\u4e0e\u8868\u5c42\u5b89\u6170\u3002</p>' +
        '</div>' +
        '<div class="wood-panel">' +
          '<div class="panel-label"><span class="led led--blue"></span> PROJECT SCOPE</div>' +
          '<span class="eyebrow">Project Summary</span>' +
          '<p style="margin:8px 0 4px;font-size:14px;color:var(--text-secondary);">\u5185\u5bb9\u6765\u6e90\uff1aInterview Report.pdf</p>' +
          '<p style="margin:4px 0;font-size:14px;color:var(--text-secondary);">\u8bbe\u8ba1\u98ce\u683c\uff1aSkeuomorphism</p>' +
          '<p style="margin:4px 0;font-size:14px;color:var(--text-secondary);">\u8986\u76d6\u8303\u56f4\uff1a\u5168\u90e8\u7ae0\u8282\u4e0e\u8d44\u6e90\u5165\u53e3</p>' +
          '<p style="margin:4px 0;font-size:14px;color:var(--text-secondary);">\u4ea4\u4ed8\u65b9\u5f0f\uff1a\u5355\u9875\u63a7\u5236\u9762\u677f\u754c\u9762</p>' +
        '</div>' +
      '</aside>' +
    '</section>' +

    '<section class="proclamation">' +
      '<div class="leather-panel" style="text-align:left;">' +
        '<div class="panel-label"><span class="led led--green"></span> REASONING ORDER</div>' +
        '<span class="eyebrow">Structure</span>' +
        '<h2 class="proclamation-title">\u8fd9\u4efd\u7f51\u7ad9\u7684\u7ed3\u6784\uff0c\u9075\u5faa\u62a5\u544a\u7684\u601d\u8003\u987a\u5e8f\uff0c\u800c\u4e0d\u662f\u5e38\u89c4\u4ea7\u54c1\u5ba3\u4f20\u987a\u5e8f\u3002</h2>' +
        '<div class="groove-divider" aria-hidden="true"></div>' +
        '<p class="proclamation-copy dropcap">\u9875\u9762\u5148\u8ffd\u95ee\u300c\u4e3a\u4ec0\u4e48\u662f\u8fd9\u4e2a\u65b9\u5411\u300d\uff0c\u518d\u56de\u7b54\u300c\u4e3a\u4ec0\u4e48\u662f\u8fd9\u7c7b\u4eba\u300d\uff0c\u63a5\u7740\u624d\u8fdb\u5165\u4ea7\u54c1\u89d2\u8272\u3001\u4f26\u7406\u8fb9\u754c\u3001\u80fd\u529b\u8def\u7ebf\u3001\u7814\u7a76\u95ee\u9898\u3001\u4fe1\u4efb\u673a\u5236\u4e0e\u6700\u7ec8\u7ed3\u8bba\u3002\u8fd9\u6837\u5904\u7406\u662f\u4e3a\u4e86\u5fe0\u5b9e\u4fdd\u7559\u62a5\u544a\u7684\u63a8\u7406\u903b\u8f91\uff0c\u4e5f\u8ba9\u6574\u7ad9\u4e0d\u81f3\u4e8e\u53d8\u6210\u8131\u79bb\u539f\u6587\u7684\u6982\u5ff5\u5305\u88c5\u3002</p>' +
      '</div>' +
    '</section>' +

    '<section class="two-col">' +
      '<div class="metal-panel">' +
        '<div class="panel-label"><span class="led led--amber"></span> SECTION MAP</div>' +
        '<span class="volume-label">Volume I</span>' +
        '<h2 class="section-title" style="margin-top:10px;">\u5377\u518c\u76ee\u5f55</h2>' +
        '<p class="section-lead">\u6bcf\u4e00\u5377\u90fd\u5bf9\u5e94\u62a5\u544a\u4e2d\u7684\u4e00\u4e2a\u5173\u952e\u8f6c\u6298\u70b9\u3002\u524d\u534a\u90e8\u56de\u7b54\u300c\u4e3a\u4ec0\u4e48\u503c\u5f97\u505a\u300d\uff0c\u540e\u534a\u90e8\u56de\u7b54\u300c\u600e\u6837\u624d\u914d\u505a\u3001\u600e\u6837\u624d\u4e0d\u8d8a\u754c\u300d\u3002</p>' +
      '</div>' +
      '<aside class="glass-panel toc-panel">' +
        '<div class="panel-label"><span class="led led--blue"></span> SECTION LIST</div>' +
        '<span class="toc-label">Table of Sections</span>' +
        '<div class="toc-list">' + tocHtml + '</div>' +
      '</aside>' +
    '</section>' +

    sectionsHtml +

    '<section class="section" id="appendix">' +
      '<div class="wood-panel">' +
        '<div class="panel-label"><span class="led led--amber"></span> APPENDIX RESOURCES</div>' +
        '<span class="eyebrow">Resources</span>' +
        '<h3 style="margin:12px 0 8px;font-size:24px;font-weight:800;">\u5b8c\u6574\u9644\u5f55</h3>' +
        '<p style="margin:0 0 4px;font-size:15px;color:var(--text-secondary);">\u9644\u5f55\u533a\u73b0\u5728\u4ec5\u4fdd\u7559\u8d44\u6e90\u5165\u53e3\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u539f\u7248\u62a5\u544a PDF\uff0c\u6216\u8df3\u8f6c\u67e5\u770b\u5b8c\u6574\u5bf9\u8bdd\u5185\u5bb9\u3002</p>' +
        renderAppendixLinks() +
      '</div>' +
    '</section>';
}

renderPage();

/* ===== 交互增强：按钮按压反馈 ===== */
document.addEventListener("mousedown", function(e) {
  var btn = e.target.closest(".sk-button") || e.target.closest(".knob-link");
  if (btn) { btn.style.transform = "translateY(2px)"; }
});

document.addEventListener("mouseup", function(e) {
  var btn = e.target.closest(".sk-button") || e.target.closest(".knob-link");
  if (btn) { btn.style.transform = ""; }
});
