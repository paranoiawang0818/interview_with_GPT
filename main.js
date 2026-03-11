const sections = [
  {
    id: "overview",
    volume: "Volume I",
    kicker: "访谈背景",
    title: "问题并不是“要不要做 AI”，而是“要围绕怎样的人与问题持续成长”。",
    lead:
      "报告从个人真实处境出发，而不是从一个抽象创业点子出发。申研、创业、价值感与关系焦虑同时存在，构成了整份叙事的起点。",
    body: [
      "主人公希望前往美国继续深造，最低目标是宾夕法尼亚大学；同时也不想被纯学术路径锁死，而是希望未来做出真正有价值、能帮助别人的产品。",
      "与常见的名校导向不同，真正驱动这份规划的是一种更深层的平衡需求：既要有外在成就，也要有内在丰盈；既要成长，也不想在成长过程中失去重要关系。"
    ],
    cards: [
      ["结果线", "进入更高的平台继续发展，拥有更强的研究与实践资源。"],
      ["价值线", "帮助别人，而不是只完成自我成就叙事。"],
      ["情感线", "在向上走的过程中，保住真实关系与精神支撑。"]
    ]
  },
  {
    id: "question",
    volume: "Volume II",
    kicker: "核心问题",
    title: "未来 3 到 5 年，最想得到的结果是什么？",
    lead: "报告先把长期目标说清，再去讨论产品，避免把“做 AI 心理产品”误当成一个孤立决定。",
    body: [
      "答案最终收束为三件事：去美国申研；保留未来创业的可能；成为一个真正能帮助别人、且精神世界富足的人。",
      "这三件事决定了后续所有追问都必须围绕同一个问题展开：究竟要解决谁的问题，为什么偏偏是这个问题，以及为什么由自己来做。"
    ],
    cards: [
      ["宾大是最低门槛", "申研目标不是空泛愿望，而是明确锚点。"],
      ["创业不是附带选项", "它与学术路径并列存在，而非毕业后的随机延伸。"],
      ["价值感是筛选器", "如果路径不能帮助别人，它就不足以成为长期主线。"]
    ]
  },
  {
    id: "scene",
    volume: "Volume III",
    kicker: "人群聚焦",
    title: "真正想帮助的，不是抽象意义上的“用户”，而是深夜被小挫败压垮的人。",
    lead: "报告从“想帮助别人”继续往下收窄，锁定到情绪敏感、不稳定、容易被生活压垮的人。",
    body: [
      "关键不是重大创伤，而是高频、真实、却常被忽略的情绪坍塌场景。那些并没有经历惊天大事，却在许多琐碎挫败叠加后，于某个深夜突然崩溃的人，才是最核心的服务对象。",
      "这也解释了产品为何要更像一个有边界的数字分身，而不是“万能心理工具”：它需要理解细小上下文，而不是只处理极端事件。"
    ],
    cards: [
      ["高频微崩溃", "比重大创伤更容易发生，更适合成为长期验证与持续优化的产品入口。"],
      ["隐蔽但真实", "它常被现实关系低估，却正是许多人最典型、最日常的情绪失衡形式。"]
    ],
    list: ["数学课没听懂", "班会宣讲状态不好", "食堂没有抢到想吃的饭", "深夜坐地铁又错过末班车"],
    art: "scene"
  },
  {
    id: "product",
    volume: "Volume IV",
    kicker: "产品角色",
    title: "它不是 AI 心理咨询师，而是“情绪接住 + 自我梳理”的数字陪伴者。",
    lead: "产品定位刻意保持克制。报告没有把它定义成替代人类咨询的工具，而是一个有限度的陪伴者。",
    body: [
      "只有陪伴不够，因为它只能让人暂时舒服；只有梳理也不够，因为在情绪泛滥时，纯理性拆解会显得冰冷而失真。",
      "正确的节奏应当是：先接住，再梳理。先允许脆弱与混乱，再逐步进入状态识别与问题整理。"
    ],
    cards: [
      ["A. 情绪陪伴者", "先提供安全感和被允许脆弱的空间，而不是立刻把对话推进成任务型拆解。"],
      ["B. 自我梳理教练", "在接住之后帮助用户识别状态、形成新的理解和应对方式，而不是停留在安慰。"]
    ]
  },
  {
    id: "difference",
    volume: "Volume V",
    kicker: "替代方案",
    title: "为什么不是朋友、家人、日记，或者普通 AI？",
    lead: "这一部分决定了产品是否有独立成立的理由。报告没有回避替代方案，而是逐个比较它们的边界。",
    cards: [
      ["朋友与家人", "真实关系有成本。人在脆弱时最怕成为负担，也害怕还要为自己的情绪反复做解释。"],
      ["短视频、听歌、睡觉硬扛", "它们能短期分散注意力，却不能帮助用户理解自己为什么崩溃，问题只会被延后。"],
      ["写日记", "它有效，但前提是用户本来就有习惯和表达能力。很多人在最难受的时候反而说不清自己。"],
      ["普通 AI 工具", "回答常常模板化，善于说漂亮话，却未必能判断用户此刻到底需要陪伴、倾听还是引导。"]
    ],
    note: "产品真正的差异不只是“更温柔”，而是更懂上下文，更会在正确的时刻做正确强度的回应。"
  },
  {
    id: "dialogue",
    volume: "Volume VI",
    kicker: "对话修正",
    title: "共鸣可以有，但不能抢走用户焦点。",
    lead: "报告里最有价值的一次修正，来自一句原本看起来很“共情”的话。",
    quotes: [
      ["原始设想", "“天呐……你的状态简直和我的本体一样！我的本体有些时候也会这样，感觉什么都没发生，却崩溃……”"],
      ["修正原则", "产品可以表达“这种感觉我并不陌生”，但不能让用户在最脆弱的时候，反过来关注数字人自己如何。"]
    ],
    body: [
      "问题并不在于不能共鸣，而在于共鸣如果演变成过度代入和焦点偏移，就会削弱真实感与可信度。",
      "这也是整份报告里 critical thinking 的典型体现：不是简单否定最初想法，而是承认其价值，同时识别它的边界与副作用。"
    ]
  },
  {
    id: "ethics",
    volume: "Volume VII",
    kicker: "伦理底线",
    title: "数字分身绝对不能做的三件事。",
    lead: "一旦产品触及脆弱情绪场景，设计约束就不再是可选项，而是产品定义的一部分。",
    cards: [
      ["不能制造依赖", "目标是帮助用户回到真实生活，而不是沉浸在虚拟陪伴里。"],
      ["不能轻描淡写严重问题", "如果已经不是普通情绪波动，系统必须帮助用户意识到问题的性质与严重性。"],
      ["不能太快给方案", "用户来这里不仅需要“怎么做”，更需要“我到底怎么了”。跳过理解会破坏核心价值。"]
    ]
  },
  {
    id: "roadmap",
    volume: "Volume VIII",
    kicker: "成长路线",
    title: "如果真的要做这件事，未来必须补齐三类能力。",
    lead: "报告把产品构想重新折回职业规划，避免停留在“我有一个好点子”的阶段。",
    cards: [
      ["技术能力", "AI、模型、数据、系统实现与迭代能力，是数字分身从概念走向可运行产品的基础。"],
      ["心理与表达能力", "不仅是共情，更包括情绪识别、回应边界、用户沟通方式、心理学基础与真实场景经验。"],
      ["商业能力", "需求验证、用户定位、价值传递、传播与闭环能力，决定产品会不会停留在“我觉得它有意义”。"]
    ]
  },
  {
    id: "identity",
    volume: "Volume IX",
    kicker: "申研定位",
    title: "理想中的申请者身份，是站在交叉地带的人。",
    lead: "如果招生官只能用一句话定义这位申请者，他希望被看作是能把 AI 与心理学结合起来，做出真正打动人心产品的人。",
    cards: [
      ["AI + Psychology", "把技术能力与情绪理解放在同一张研究地图上。"],
      ["Human-Centered AI", "强调产品的边界感、可信度与用户主体性。"],
      ["AI + HCI", "把对话、体验与交互方式当成核心研究对象。"]
    ]
  },
  {
    id: "research",
    volume: "Volume X",
    kicker: "研究问题",
    title: "未来 3 年最想死磕的，是上下文情绪理解与有效回应。",
    lead: "报告最终把长期方向压缩成一个研究问题，而不是停留在“做更温柔的 AI”。",
    body: [
      "真正关键的缺口在于：如何在上下文中充分理解用户的不良情绪，并给出贴合用户需求的积极回应。",
      "这来自真实体验中的不满：很多 AI 说的话并非错误，却空洞、模板化，也很难同时兼顾情绪支持与问题推进。"
    ],
    cards: [
      ["听起来像懂", "却不一定真正匹配用户当下状态。"],
      ["会安慰", "却常常只停留在表层舒缓，而没有进入问题结构。"],
      ["缺乏上下文细腻度", "难以判断此刻更适合陪伴、倾听还是引导梳理。"]
    ]
  },
  {
    id: "metrics",
    volume: "Volume XI",
    kicker: "有效性判断",
    title: "产品成功，不是让人当下舒服，而是让人下次更能处理类似问题。",
    lead: "这一章明确反对把“即时舒缓”误判为“产品真的有效”。",
    cards: [
      ["短期体验", "聊完后更稳地回到生活、睡得更踏实、第二天能更有精神，这些都重要，但仍不够。"],
      ["真正指标", "当类似问题再次出现时，用户是否多了一点认知、梳理能力和应对能力。"],
      ["失败判据", "如果用户说“我舒服多了”，但三天后仍照样崩溃，那么这次对话仍应判定为失败。"]
    ]
  },
  {
    id: "trust",
    volume: "Volume XII",
    kicker: "数据与信任",
    title: "即使要优化模型，也不能背叛用户在脆弱时刻交出的信任。",
    lead: "情绪支持产品一旦采集对话数据，就必须把用户控制权写进产品结构，而不是藏进协议里。",
    cards: [
      ["用户有权拒绝训练", "数据是否参与模型优化，必须由用户决定，不能默认采集、默认训练。"],
      ["用户可随时删除记录", "删除权、关闭权、退出权都应存在，且入口清晰。"],
      ["不拿完整隐私内容训练", "优化重点应放在回应机制，而不是过度占用用户最私密的叙事。"],
      ["一开始就透明告知", "记录什么、怎么用、能否关闭、能否删除，都应简单明了地说明。"]
    ],
    art: "trust"
  },
  {
    id: "method",
    volume: "Volume XIII",
    kicker: "思维框架",
    title: "整份报告，本质上是一场 Design Thinking 与 Critical Thinking 的交叉演练。",
    lead: "它既沿着同理、定义、构思、原型与测试推进，也始终在怀疑“方向是否真的成立”。",
    cards: [
      ["Design Thinking", "从真实情绪经验出发，定义高频场景，构思数字陪伴者，再通过表达、伦理和效果标准持续迭代。"],
      ["Critical Thinking", "不断追问到底在帮谁、帮什么、为什么是自己做，并警惕共情失焦、虚假有效与技术越界。"]
    ]
  },
  {
    id: "conclusion",
    volume: "Volume XIV",
    kicker: "最终结论",
    title: "这条方向值得成为长期主线之一，但前提是始终围绕一个真实问题，而不是围绕一个概念包装。",
    lead: "报告最后没有落在“我要做一个产品”，而是落在“我要长期研究并承担一个问题”。",
    cards: [
      ["方向成立", "AI 与心理学的结合，值得成为未来长期发展的主线之一。"],
      ["角色克制", "真正想做的不是“很会安慰人”的 AI，而是能先接住、再梳理、最后帮助人回到现实的数字支持产品。"],
      ["成长聚焦", "未来应围绕技术、心理与表达、商业三类能力持续积累。"],
      ["长期命题", "最需要坚持的是问题意识：让 AI 基于上下文理解情绪，并给出贴合需求的回应。"]
    ]
  }
];

const resources = {
  pdf: "./Interview%20Report.pdf",
  chat: "https://chatgpt.com/g/g-p-6986929b0a948191aa69b703c21ffbbc-daily-life-questions/c/69b01624-bfc4-8398-bbd1-a6d17326bbb2"
};

function renderAppendixLinks() {
  return `
    <div class="appendix-links">
      <a class="resource-link" href="${resources.pdf}" download>
        <strong>[ PDF ]</strong>
        <span>下载原版报告</span>
      </a>
      <a class="resource-link" href="${resources.chat}" target="_blank" rel="noreferrer">
        <strong>[ CHAT ]</strong>
        <span>查看对话内容</span>
      </a>
    </div>
  `;
}

function renderStat(value, label) {
  return `<div class="stat"><span class="stat-value">[${"|".repeat(10)}] ${value}</span><span class="stat-label">${label}</span></div>`;
}

function renderCards(cards = []) {
  if (!cards.length) return "";
  return `<div class="compare-grid">${cards
    .map(([title, text]) => `<article class="compare-cell"><strong>${title}</strong><span>${text}</span></article>`)
    .join("")}</div>`;
}

function renderBody(body = []) {
  if (!body.length) return "";
  return body
    .map((paragraph, index) => `<p class="${index === 0 ? "section-copy dropcap" : "section-copy"}">${paragraph}</p>`)
    .join("");
}

function renderList(items = []) {
  if (!items.length) return "";
  return `<ul class="detail-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderQuotes(quotes = []) {
  if (!quotes.length) return "";
  return `<div class="quote-panel">${quotes
    .map(
      ([label, text]) =>
        `<blockquote class="quote-block"><span class="quote-label">${label}</span><p>${text}</p></blockquote>`
    )
    .join("")}</div>`;
}

function renderArt(section) {
  return "";
}

function renderSection(section) {
  return `
    <section class="section" id="${section.id}">
      <article class="section-card" data-pane="[ ${section.volume} // ${section.kicker.toUpperCase()} ]">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="volume-label">${section.volume}</span>
          </div>
          <h2 class="section-title">${section.title}</h2>
          <p class="section-lead">${section.lead}</p>
        </div>
        <div class="section-layout">
          ${renderBody(section.body)}
          ${renderCards(section.cards)}
          ${renderQuotes(section.quotes)}
          ${renderList(section.list)}
          ${renderArt(section)}
          ${section.note ? `<div class="callout"><strong>Scholarly Note</strong><p>${section.note}</p></div>` : ""}
        </div>
      </article>
    </section>
  `;
}

function renderPage() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <section class="hero">
      <article class="hero-copy ornate-frame" data-pane="[ BOOT // INTERVIEW_REPORT ]">
        <span class="eyebrow">Report Overview</span>
        <h1 class="hero-title">在申研与创业之间，<span class="accent">用 AI 理解情绪</span>是否值得成为长期主线？</h1>
        <p class="hero-lead dropcap">这不是一份把报告内容直接堆成页面的展示稿，而是将原文重组为一套更清晰、更现代的平面叙事界面。页面完整保留原报告的推理链条，同时用色块、网格和字体层级来建立阅读节奏。</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#overview">开始阅读</a>
          <a class="button button-secondary" href="./Interview%20Report.pdf">下载 PDF</a>
          <a class="button button-ghost" href="#appendix">查看资源</a>
        </div>
        <div class="ornate-divider" aria-hidden="true"></div>
        <div class="stats">
          ${renderStat("3-5Y", "长期窗口")}
          ${renderStat("15", "原始章节")}
          ${renderStat("14", "叙事窗口")}
          ${renderStat("1", "主问题主线")}
        </div>
      </article>
      <aside class="hero-rail">
        <div class="rail-card panel" data-pane="PRIMARY QUESTION">
          <div class="wax-seal" aria-hidden="true">AI</div>
          <span class="card-kicker">Core Thesis</span>
          <h3>这份报告的真正对象，不是产品，而是问题意识。</h3>
          <p>核心命题最终被收束为：如何让 AI 基于上下文真正理解用户不良情绪，并给出贴合需求的回应，而不是停留在模板化共情与表层安慰。</p>
        </div>
        <div class="rail-card panel" data-pane="PROJECT SCOPE">
          <span class="card-kicker">Project Summary</span>
          <p>内容来源：Interview Report.pdf</p>
          <p>设计风格：Flat Design</p>
          <p>覆盖范围：全部章节与资源入口</p>
          <p>交付方式：单页叙事网站</p>
        </div>
      </aside>
    </section>

    <section class="proclamation">
      <div class="panel panel-center ornate-frame" data-pane="REASONING ORDER">
        <span class="eyebrow">Structure</span>
        <h2 class="proclamation-title">这份网站的结构，遵循报告的思考顺序，而不是常规产品宣传顺序。</h2>
        <div class="ornate-divider" aria-hidden="true"></div>
        <p class="proclamation-copy dropcap">页面先追问“为什么是这个方向”，再回答“为什么是这类人”，接着才进入产品角色、伦理边界、能力路线、研究问题、信任机制与最终结论。这样处理是为了忠实保留报告的推理逻辑，也让整站不至于变成脱离原文的概念包装。</p>
      </div>
    </section>

    <section class="section">
      <div class="two-col">
        <div class="section-card" data-pane="SECTION MAP">
          <div class="section-title-wrap">
            <span class="volume-label">Volume I</span>
          </div>
          <h2 class="section-title">卷册目录</h2>
          <p class="section-lead">每一卷都对应报告中的一个关键转折点。前半部回答“为什么值得做”，后半部回答“怎样才配做、怎样才不越界”。</p>
        </div>
        <aside class="toc-card" data-pane="SECTION LIST">
          <span class="summary-label">Table of Sections</span>
          <div class="toc-list">
            ${sections
              .map(
                (section) => `
                  <div class="toc-item">
                    <a href="#${section.id}">
                      <span class="toc-label">${section.volume}</span>
                      <span class="toc-title">${section.kicker}</span>
                      <span class="toc-copy">${section.title}</span>
                    </a>
                  </div>
                `
              )
              .join("")}
          </div>
        </aside>
      </div>
    </section>

    ${sections.map(renderSection).join("")}

    <section class="section" id="appendix">
      <div class="archive-layout">
        <aside class="meta-card" data-pane="APPENDIX RESOURCES">
          <span class="meta-label">Resources</span>
          <h3>完整附录</h3>
          <p class="meta-copy">附录区现在仅保留资源入口。你可以直接下载原版报告 PDF，或跳转查看完整对话内容。</p>
          ${renderAppendixLinks()}
        </aside>
      </div>
    </section>
  `;
}

renderPage();
