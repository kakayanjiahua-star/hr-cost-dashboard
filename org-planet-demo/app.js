const dataItems = [
  "组织架构",
  "岗位与权责说明",
  "部门 KPI / OKR",
  "核心流程节点",
  "干部梯队",
  "脱敏绩效汇总",
  "离职与晋升汇总",
  "授权组织问卷"
];

const baseDimensions = [
  {
    key: "cadre",
    name: "干部能力",
    score: 56,
    note: "中层干部仍偏执行型，区域复制需要经营型负责人。"
  },
  {
    key: "structure",
    name: "架构适配",
    score: 63,
    note: "当前架构可支撑单区域运营，但跨区域授权关系不足。"
  },
  {
    key: "strategy",
    name: "战略传导",
    score: 54,
    note: "部门目标与增长策略存在断点，销售、交付、供应链协同目标未完全对齐。"
  },
  {
    key: "role",
    name: "权责清晰",
    score: 50,
    note: "区域扩张场景下，客户交接、资源调配和异常处理责任边界不清。"
  },
  {
    key: "process",
    name: "流程成熟",
    score: 59,
    note: "关键流程依赖骨干经验，标准化和复盘机制不足。"
  }
];

const branchDetails = {
  cadre: {
    title: "干部承接能力",
    intro: "看增长任务交下去后，中层干部是否能独立带队、跨部门协调并承担区域结果。",
    evidence: "干部梯队中只有 1 名候选人具备区域管理经验；继任计划未覆盖关键岗位。",
    risk: "如果业务复制速度快于干部成长速度，老板会被迫继续直接管理，组织无法真正扩张。",
    action: "30 天内完成关键岗位盘点，60 天内确定区域负责人候选，90 天内完成经营型干部训练与复盘。",
    department: "区域负责人 / HR",
    rootCauses: {
      people: "候选干部多为执行骨干，缺少独立经营、团队搭建和跨部门协调经历。",
      process: "干部选拔缺少统一标准，继任计划没有覆盖区域复制关键岗位。",
      system: "干部培养机制偏临时安排，缺少经营型干部训练营和复盘机制。",
      target: "干部评价仍以当期执行结果为主，未纳入复制能力和组织建设指标。"
    },
    playbook: "参考企业人才盘点、继任计划和行动学习方法，先建立关键岗位九宫格，再用 90 天经营课题训练候选干部。"
  },
  structure: {
    title: "组织架构与授权",
    intro: "看总部、区域和一线之间有没有清楚的经营单元、授权边界和支持接口。",
    evidence: "当前组织仍以单区域职能线为主，区域负责人角色和授权边界不清晰。",
    risk: "组织架构滞后会导致资源调配慢、客户问题升级慢、业务复制靠个人推动。",
    action: "明确区域经营单元、总部支持接口和授权清单，先做最小组织架构升级。",
    department: "CEO / 组织发展",
    rootCauses: {
      people: "区域负责人角色尚未明确，导致总部和一线之间缺少经营接口。",
      process: "跨区域资源申请、客户交接和异常升级没有标准路径。",
      system: "组织架构仍按单区域职能线运转，缺少区域复制单元。",
      target: "部门目标没有共同承担区域复制结果。"
    },
    playbook: "参考规模化企业的前中后台架构，先做最小组织单元试点，再根据复盘决定是否全面调整。"
  },
  strategy: {
    title: "目标传导",
    intro: "看老板的增长目标是否变成部门共同指标、岗位动作和固定复盘节奏。",
    evidence: "部门 KPI 更偏短期交付，缺少围绕区域复制的共同指标。",
    risk: "战略在传导中变形，组织看似忙碌，但每个部门努力方向不一致。",
    action: "把增长目标拆成销售、交付、供应链共同指标，建立月度目标复盘。",
    department: "销售 / 交付 / 供应链",
    rootCauses: {
      people: "各部门负责人理解增长目标的角度不同，缺少共同语言。",
      process: "目标拆解后没有稳定复盘节奏。",
      system: "KPI/OKR 之间缺少上下游联动。",
      target: "部门目标偏局部最优，没有共同增长指标。"
    },
    playbook: "参考 OKR 对齐和经营复盘机制，把增长目标拆成跨部门共同指标，并固定月度经营复盘。"
  },
  role: {
    title: "团队接口与权责",
    intro: "看销售、运营、供应链、交付之间的接口是否清楚：谁负责、谁协同、谁拍板、谁复盘。",
    evidence: "岗位权责说明缺少跨区域客户交接、资源调配和异常处理的最终责任人。",
    risk: "权责不清会在增长压力下放大，形成扯皮、等待和内部消耗。",
    action: "30 天内梳理 5 条关键流程，明确 RACI 责任矩阵和异常升级机制。",
    department: "运营部",
    rootCauses: {
      people: "运营部承担大量协调工作，但缺少对跨部门事项的拍板权。",
      process: "客户交接、异常处理、资源调配流程没有明确节点和时限。",
      system: "制度里写了部门职责，但没有落到 RACI 责任矩阵。",
      target: "运营部目标偏执行完成率，没有体现协同质量和异常关闭效率。"
    },
    playbook: "参考 RACI 责任矩阵和 SLA 协同机制，先把 5 条高频跨部门流程拆成责任人、协同人、审批人和告知人。"
  },
  process: {
    title: "流程复制能力",
    intro: "看订单履约、客户交接、异常处理能不能脱离个人经验，变成新人和新区域也能执行的流程。",
    evidence: "关键流程依赖骨干经验，流程节点、时限、交付标准和复盘记录不完整。",
    risk: "流程不成熟会让企业在扩张中反复返工，服务质量和管理成本同时失控。",
    action: "先标准化客户交接、订单履约、异常处理三类流程，再做复盘和训练。",
    department: "交付 / 供应链 / 运营",
    rootCauses: {
      people: "流程依赖老员工经验，新人和新区域难以复制。",
      process: "关键流程缺少节点、标准、时限和异常处理规则。",
      system: "制度文件偏原则性，缺少可执行 SOP。",
      target: "流程指标没有和客户体验、成本、准时率联动。"
    },
    playbook: "参考 SOP 标准化和 PDCA 复盘方法，先把客户交接、订单履约、异常处理做成可训练流程。"
  }
};

const guideData = {
  goal: {
    title: "先确认增长目标",
    text: "老板先回答一个问题：18 个月冲 1 亿，主要靠区域复制、交付提效，还是大客户增长？系统才知道该扫描哪条业务流。"
  },
  red: {
    title: "先看哪条组织链路变红",
    text: "红色不是批评某个部门，而是说明这条业务流的接口、负荷或授权可能拖慢增长。先看总分，再点红色节点。"
  },
  evidence: {
    title: "先看证据，不急着下结论",
    text: "每个判断必须回答：依据是什么、缺什么数据、谁需要人工复核。这样 AI 不会把组织诊断做成玄学。"
  },
  why: {
    title: "拆出真正的堵点",
    text: "用四个问题追：目标是否对齐，接口是否清楚，团队是否过载，流程是否可复制。不要停在“人不行”这种表面判断。"
  },
  owner: {
    title: "谁来负责：用 RACI 把责任、拍板、协同说清",
    text: "很多组织问题不是没人干，而是谁负责、谁拍板、谁协同不清。这里把问题转成责任矩阵，避免会后继续扯皮。"
  },
  fix: {
    title: "把堵点转成作战动作",
    text: "最后才给处方。系统把诊断转成责任矩阵、接口约定、流程标准化、干部训练和复盘节奏。"
  },
  report: {
    title: "导出领导能交办的报告",
    text: "报告不是漂亮总结，而是能直接交给中层落地：谁负责、先补什么证据、30/60/90 天怎么做。"
  }
};

const riskCards = [
  {
    title: "权责边界会拖慢扩张",
    level: "high",
    summary: "区域扩张需要快速决策和跨部门协同，但样例数据中没有明确区域负责人、客户交接规则和资源调配机制。",
    evidence: "岗位权责说明缺少跨区域授权；流程节点未标注最终责任人。",
    confidence: "中等偏高",
    unknown: "缺少真实客户投诉、订单延迟和利润归因数据。",
    review: "请 HRD、销售负责人、供应链负责人共同确认关键流程责任人。"
  },
  {
    title: "干部梯队不足会限制复制",
    level: "high",
    summary: "当前干部更擅长执行当下业务，缺少能独立承担区域经营、团队搭建和跨部门协调的人选。",
    evidence: "干部梯队中只有 1 名候选人具备区域管理经验；继任计划未覆盖关键岗位。",
    confidence: "中等",
    unknown: "缺少干部 360 反馈和实际带队绩效证据。",
    review: "请补充关键岗位继任名单、干部盘点结果和近 12 个月绩效。"
  },
  {
    title: "战略传导存在信息失真",
    level: "medium",
    summary: "增长目标在高层清楚，但部门 KPI 更偏短期交付，缺少围绕区域复制的共同指标。",
    evidence: "销售关注新增客户，交付关注履约成本，供应链关注采购稳定，三者缺少共同增长指标。",
    confidence: "中等",
    unknown: "缺少月度经营会纪要和目标复盘记录。",
    review: "请复核部门目标是否真正服务于区域复制和渠道增长。"
  }
];

const trainingPlan = [
  {
    period: "30 天",
    title: "先做组织体检复核",
    text: "明确增长目标对应的关键岗位、关键流程和跨部门接口；完成权责清单、干部盘点和证据缺口补充。"
  },
  {
    period: "60 天",
    title: "建立增长责任机制",
    text: "设立区域复制负责人，明确销售、交付、供应链的共同指标；建立异常升级和复盘机制。"
  },
  {
    period: "90 天",
    title: "形成组织训练闭环",
    text: "对中层干部进行经营能力训练，启动关键岗位继任计划，并用复测报告比较组织承接风险变化。"
  }
];

const answers = {
  "如果要 18 个月做到 1 亿，组织最先补什么？":
    "建议最先补“区域经营型干部”和“跨部门权责机制”。证据是当前干部梯队覆盖不足，且区域扩张相关流程没有明确最终责任人。置信度为中等，因为仍缺少干部 360 反馈和真实区域经营数据。人工复核点是：由 CEO、HRD 和业务负责人共同确认关键岗位是否有人能独立承担区域复制。",
  "哪个组织风险最可能拖慢增长？":
    "最可能拖慢增长的是权责边界不清。它会让销售、交付、供应链在客户交接、资源调配和异常处理上反复等待。风险边界是：目前判断基于样例组织材料，不能替代真实经营数据。建议 30 天内完成关键流程责任人确认。",
  "哪些结论证据不足，需要人工复核？":
    "干部能力与战略传导两类结论需要重点复核。干部能力缺少 360 反馈、真实带队绩效和继任评估；战略传导缺少经营会纪要和目标复盘记录。系统建议把这些列为未知项，避免 AI 在证据不足时做过度判断。"
};

const dataChecklist = document.querySelector("#dataChecklist");
const dimensionList = document.querySelector("#dimensionList");
const riskCardContainer = document.querySelector("#riskCardGrid");
const trainingPlanContainer = document.querySelector("#trainingPlan");
const radarShape = document.querySelector("#radarShape");
const heroShape = document.querySelector("#heroShape");
const scoreValue = document.querySelector("#scoreValue");
const scoreRing = document.querySelector("#scoreRing");
const scorePanel = document.querySelector(".score-panel");
const overviewScore = document.querySelector("#overviewScore");
const reportStatus = document.querySelector("#reportStatus");
const answerBox = document.querySelector("#answerBox");
const branchPanel = document.querySelector("#branchPanel");
const heroReadout = document.querySelector("#heroReadout");
const selectedNodeName = document.querySelector("#selectedNodeName");
const selectedNodeRisk = document.querySelector("#selectedNodeRisk");
const selectedNodeEvidence = document.querySelector("#selectedNodeEvidence");
const selectedNodeImpact = document.querySelector("#selectedNodeImpact");
const selectedNodeNext = document.querySelector("#selectedNodeNext");
const reportPreviewContent = document.querySelector("#reportPreviewContent");
const toast = document.querySelector("#toast");
const orgPlanet = document.querySelector("#orgPlanet");
const orgPlanetCanvas = document.querySelector("#orgPlanetCanvas");
const planetContext = orgPlanetCanvas?.getContext("2d");
const introScreen = document.querySelector("#introScreen");
const introLine = document.querySelector("#introLine");
const introFlash = document.querySelector("#introFlash");
const tourCard = document.querySelector("#tourCard");
const tourStepLabel = document.querySelector("#tourStepLabel");
const tourTitle = document.querySelector("#tourTitle");
const tourText = document.querySelector("#tourText");
const tourNextButton = document.querySelector("#tourNextButton");
const tourSkipButton = document.querySelector("#tourSkipButton");
const scenarioGrid = document.querySelector("#scenarioGrid");
const scenarioOutput = document.querySelector("#scenarioOutput");
const importModal = document.querySelector("#importModal");
const importBackdrop = document.querySelector("#importBackdrop");
const importCloseButton = document.querySelector("#importCloseButton");
const downloadTemplateButton = document.querySelector("#downloadTemplateButton");
const uploadTemplateButton = document.querySelector("#uploadTemplateButton");
const templateFileInput = document.querySelector("#templateFileInput");
const useSampleButton = document.querySelector("#useSampleButton");
let currentBranchKey = "role";
let currentRootCause = "process";
let currentDepartmentKey = "ops";
let planetRotation = { x: -6, y: 0 };
let planetAutoSpin = true;
let tourIndex = 0;
let tourLocked = false;
let introHasStarted = false;

const planetDepartments = [
  { selector: ".org-node.ceo", lat: 36, lon: 0 },
  { selector: ".org-node.sales", lat: 8, lon: -52 },
  { selector: ".org-node.ops", lat: -2, lon: 0 },
  { selector: ".org-node.supply", lat: 12, lon: 54 },
  { selector: ".org-node.region", lat: -34, lon: -68 },
  { selector: ".org-node.finance", lat: -44, lon: -20 },
  { selector: ".org-node.hr", lat: -36, lon: 34 },
  { selector: ".org-node.service", lat: -20, lon: 76 },
  { selector: ".org-node.procurement", lat: 30, lon: 118 },
  { selector: ".org-node.warehouse", lat: 2, lon: 142 },
  { selector: ".org-node.logistics", lat: -26, lon: 118 },
  { selector: ".org-node.quality", lat: -48, lon: -138 },
  { selector: ".org-node.it", lat: 44, lon: 162 },
  { selector: ".org-node.settlement", lat: -18, lon: 170 },
  { selector: ".org-node.keyaccount", lat: 4, lon: -150 },
  { selector: ".org-node.aftersales", lat: 24, lon: -124 }
];

const introScript = [
  "为什么机会很多\n结果却变慢？",
  "为什么人都很忙\n责任却不清？",
  "为什么老板一放手\n事情就卡住？",
  "欢迎进入组织星球。"
];

const tourSteps = [
  {
    selector: "#overview",
    title: "首页总览：先看组织健康总分",
    text: "先看 52 分、红黄绿节点和组织星球。用户第一眼要知道：增长机会有，但组织承接已经有风险。"
  },
  {
    selector: "#report",
    title: "风险扫描：看红黄绿节点",
    text: "先看总分、红黄绿节点和五维雷达，判断增长承接风险到底卡在哪里。"
  },
  {
    selector: "#riskCards",
    title: "证据追踪：先看依据",
    text: "不要急着相信结论。先看依据、未知项和人工复核点，让 AI 判断有边界。"
  },
  {
    selector: "#rootCause",
    title: "根因穿透：拆到可行动",
    text: "系统会把问题拆成目标、接口、负荷、复制四层，帮助你知道到底该补人、补流程还是补机制。"
  },
  {
    selector: "#exportReportButton",
    title: "策略生成：导出交办报告",
    text: "当你认可诊断后，生成一份可交办的多维分析报告，给中层直接落地。"
  },
  {
    selector: "#package",
    title: "提交包：整理比赛材料",
    text: "最后把 Demo 地址、项目说明、配置说明、合规声明和演示视频放进同一个交付包，方便评委快速审核。"
  }
];

const scenarioPresets = {
  regional: {
    output: "供应链服务企业，准备从单一区域复制到多区域。",
    strategy: "区域扩张 + 渠道复制",
    bottleneck: "业务机会不少，但中层干部、跨部门协同、权责边界和流程标准化跟不上扩张节奏。"
  },
  delivery: {
    output: "订单增长后，仓储、物流、售后开始反复救火。",
    strategy: "区域扩张 + 渠道复制",
    bottleneck: "订单增长后交付压力上升，仓储积压、物流准时率、售后闭环和异常升级机制开始拖慢客户体验。"
  },
  keyaccount: {
    output: "大客户机会增加，但销售承诺、供应链能力和交付标准没有完全对齐。",
    strategy: "新业务线孵化",
    bottleneck: "大客户增长速度快，但目标传导、供应链承诺、交付标准和跨部门复盘机制没有完全对齐。"
  }
};

const nodeFeedback = {
  strategy: {
    name: "当前点击：目标传导",
    risk: "风险：目标没有变成共同指标",
    evidence: "证据：3 个关键部门 KPI 没有共同交付指标；月度经营会缺少跨部门复盘记录。",
    impact: "影响：销售、交付、供应链各自努力，增长动作不能合成一股力。",
    next: "建议下一步：查看目标证据"
  },
  role: {
    name: "当前点击：运营部",
    risk: "风险：权责不清",
    evidence: "证据：5 条跨部门流程中，3 条没有最终拍板人；异常处理平均等待 2.6 天。",
    impact: "影响：拖慢客户交接、异常处理、资源调配。",
    next: "建议下一步：查看根因"
  },
  process: {
    name: "当前点击：流程链路",
    risk: "风险：流程不能复制",
    evidence: "证据：订单履约 SOP 只覆盖 42% 场景；新员工独立处理异常平均需要 21 天。",
    impact: "影响：新区域、新客户、新员工都要靠老经验救火。",
    next: "建议下一步：查看 SOP 与复盘"
  },
  cadre: {
    name: "当前点击：干部梯队",
    risk: "风险：中层扛不住区域复制",
    evidence: "证据：区域负责人候选仅 1 人；继任计划未覆盖仓储、交付、人力资源关键岗。",
    impact: "影响：老板被迫继续亲自盯人、盯事、盯结果。",
    next: "建议下一步：查看继任计划"
  },
  structure: {
    name: "当前点击：组织架构",
    risk: "风险：授权边界不清",
    evidence: "证据：跨区域授权清单缺 4 个关键事项；总部与一线支持接口没有 SLA。",
    impact: "影响：总部、一线和区域负责人之间缺少稳定接口。",
    next: "建议下一步：查看授权清单"
  }
};

const departmentEvidence = {
  ceo: {
    name: "当前点击：CEO 办公室",
    risk: "状态：方向清楚",
    evidence: "数据：18 个月冲 1 亿目标已明确；但部门共同指标只覆盖 2/5 个关键部门。",
    impact: "影响：高层方向清楚，但传导到部门动作仍需继续补齐。",
    next: "建议下一步：锁定跨部门共同指标"
  },
  sales: {
    name: "当前点击：销售部",
    risk: "问题：目标断点",
    evidence: "数据：新增客户目标明确，但交付准时率、供应链保障率未纳入销售共同指标。",
    impact: "影响：销售承诺可能超过交付和供应链实际承接能力。",
    next: "建议下一步：建立销售-交付-供应链共同指标"
  },
  ops: {
    name: "当前点击：运营部",
    risk: "问题：权责不清",
    evidence: "数据：5 条跨部门流程中，3 条没有最终拍板人；异常处理平均等待 2.6 天。",
    impact: "影响：客户交接、异常处理、资源调配会反复等待。",
    next: "建议下一步：查看权责根因"
  },
  supply: {
    name: "当前点击：供应链部",
    risk: "问题：复制不足",
    evidence: "数据：供应商分级规则覆盖 61%；新区域采购替代方案缺 2 类关键品项。",
    impact: "影响：业务复制到新区域后，采购稳定性和交付成本会波动。",
    next: "建议下一步：补供应商分级和替代方案"
  },
  region: {
    name: "当前点击：区域管理部",
    risk: "问题：干部断层",
    evidence: "数据：可独立负责区域经营的候选人仅 1 名；目标岗位至少需要 3 名后备。",
    impact: "影响：区域复制速度会被干部承接能力限制。",
    next: "建议下一步：启动区域负责人继任计划"
  },
  finance: {
    name: "当前点击：财务部",
    risk: "状态：规则稳定",
    evidence: "数据：结算准确率 98.6%；月度成本归因能覆盖 4/5 条主要业务线。",
    impact: "影响：当前能支撑增长，但跨区域授权审批还需前置明确。",
    next: "建议下一步：补跨区域授权边界"
  },
  hr: {
    name: "当前点击：人力资源部",
    risk: "问题：梯队待补",
    evidence: "数据：缺少 1 名绩效考核专家；干部继任计划覆盖率 38%；关键岗盘点缺 6 个岗位。",
    impact: "影响：中层训练、绩效复盘和继任计划难以稳定推进。",
    next: "建议下一步：补绩效专家和关键岗盘点"
  },
  service: {
    name: "当前点击：交付部",
    risk: "问题：复盘缺失",
    evidence: "数据：近 30 天异常订单 17 单，其中 11 单没有复盘记录；交付 SOP 覆盖 42%。",
    impact: "影响：同类异常会重复发生，新区域难以复制稳定交付。",
    next: "建议下一步：补交付复盘闭环"
  },
  procurement: {
    name: "当前点击：采购部",
    risk: "问题：标准待齐",
    evidence: "数据：供应商账期标准覆盖 64%；价格异常审批缺少统一阈值。",
    impact: "影响：扩张后采购成本和质量稳定性容易波动。",
    next: "建议下一步：统一供应商分级和审批阈值"
  },
  warehouse: {
    name: "当前点击：仓储部",
    risk: "问题：库存积压",
    evidence: "数据：当前冻品库存 128 吨，超过常态安全库存 22%；拣配异常率 7.8%。",
    impact: "影响：库存占用现金流，且会拖慢交付响应。",
    next: "建议下一步：查看仓储流程复制问题"
  },
  logistics: {
    name: "当前点击：物流部",
    risk: "问题：准时波动",
    evidence: "数据：近 14 天准时率 89%，低于目标 95%；异常线路主要集中在 3 个新区域。",
    impact: "影响：客户体验不稳定，会倒逼售后和运营救火。",
    next: "建议下一步：梳理异常线路升级机制"
  },
  quality: {
    name: "当前点击：质控部",
    risk: "状态：标准正常",
    evidence: "数据：抽检合格率 97.4%；关键品项质检标准覆盖 92%。",
    impact: "影响：质控当前可支撑增长，是可复制能力的稳定模块。",
    next: "建议下一步：把质控标准同步到新区域"
  },
  it: {
    name: "当前点击：信息化部",
    risk: "问题：数据孤岛",
    evidence: "数据：订单、库存、售后数据分散在 3 套表；异常预警无法自动推送负责人。",
    impact: "影响：管理层看到问题时已经滞后，AI 难以自动追踪责任。",
    next: "建议下一步：打通订单-库存-售后数据"
  },
  settlement: {
    name: "当前点击：结算部",
    risk: "状态：结算正常",
    evidence: "数据：结算准时率 96%；争议单占比 1.9%，低于警戒线 3%。",
    impact: "影响：当前不是主要风险，但跨区域审批权限要提前设定。",
    next: "建议下一步：固化跨区域结算授权"
  },
  keyaccount: {
    name: "当前点击：大客户部",
    risk: "问题：承诺偏满",
    evidence: "数据：大客户交付承诺 9 项，其中 4 项没有供应链保障人；毛利测算缺 2 项成本。",
    impact: "影响：客户越大，承诺和组织能力不匹配的风险越高。",
    next: "建议下一步：重做大客户承诺校验"
  },
  aftersales: {
    name: "当前点击：售后部",
    risk: "问题：闭环缺失",
    evidence: "数据：近 30 天售后工单 43 单，闭环超时 12 单；复发问题占比 28%。",
    impact: "影响：客户问题会反复回流到运营和老板层面。",
    next: "建议下一步：建立售后复盘与责任闭环"
  }
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

let introAudioContext;

function playKeyClick() {
  try {
    introAudioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (introAudioContext.state === "suspended") introAudioContext.resume();
    const oscillator = introAudioContext.createOscillator();
    const gain = introAudioContext.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = 130 + Math.random() * 70;
    gain.gain.setValueAtTime(0.018, introAudioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, introAudioContext.currentTime + 0.028);
    oscillator.connect(gain);
    gain.connect(introAudioContext.destination);
    oscillator.start();
    oscillator.stop(introAudioContext.currentTime + 0.032);
  } catch (error) {
    // Browsers may block audio before user interaction; the intro still works silently.
  }
}

function typeIntroText(text, holdMs = 1900) {
  return new Promise((resolve) => {
    if (!introLine) {
      resolve();
      return;
    }
    introLine.textContent = "";
    let index = 0;
    const timer = window.setInterval(() => {
      introLine.textContent = text.slice(0, index + 1);
      const currentChar = text[index];
      if (currentChar && currentChar !== "\n" && currentChar !== " ") playKeyClick();
      index += 1;
      if (index >= text.length) {
        window.clearInterval(timer);
        window.setTimeout(resolve, holdMs);
      }
    }, 168);
  });
}

function hideIntro() {
  if (!introScreen) return;
  introScreen.classList.add("hidden");
  document.body.classList.remove("intro-active");
  if (window.location.hash) window.history.replaceState(null, "", window.location.pathname);
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.setTimeout(startTour, 520);
}

function startFlashCountdown() {
  if (!introFlash) return;
  let count = 3;
  introFlash.textContent = String(count);
  const timer = window.setInterval(() => {
    count -= 1;
    introFlash.textContent = count > 0 ? String(count) : "";
    if (count <= 0) window.clearInterval(timer);
  }, 620);
}

async function startIntroSequence() {
  if (!introScreen || !introLine) return;
  if (introHasStarted) return;
  introHasStarted = true;
  for (const line of introScript) {
    await typeIntroText(line, line.length > 10 ? 2100 : 1800);
  }
  startFlashCountdown();
  introScreen.classList.add("flash");
  window.setTimeout(hideIntro, 2500);
}

function clearTourHighlight() {
  document.querySelectorAll(".tour-highlight").forEach((node) => node.classList.remove("tour-highlight"));
}

function renderTourStep() {
  if (!tourCard) return;
  tourLocked = true;
  if (tourNextButton) tourNextButton.disabled = true;
  const step = tourSteps[tourIndex];
  if (!step) {
    endTour();
    return;
  }
  clearTourHighlight();
  const target = document.querySelector(step.selector);
  if (target) {
    target.classList.add("tour-highlight");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => positionTourCard(target), 240);
  }
  tourStepLabel.textContent = `第 ${tourIndex + 1} 步 / 共 ${tourSteps.length} 步`;
  tourTitle.textContent = step.title;
  tourText.textContent = step.text;
  tourNextButton.textContent = tourIndex === tourSteps.length - 1 ? "完成" : "下一步";
  tourCard.classList.remove("hidden");
  if (!target) positionTourCard();
  window.setTimeout(() => {
    tourLocked = false;
    if (tourNextButton) tourNextButton.disabled = false;
  }, 620);
}

function positionTourCard(target) {
  if (!tourCard) return;
  const fallback = {
    left: Math.max(20, window.innerWidth - 420),
    top: Math.max(20, window.innerHeight - 260)
  };
  if (!target) {
    tourCard.style.setProperty("--tour-left", `${fallback.left}px`);
    tourCard.style.setProperty("--tour-top", `${fallback.top}px`);
    return;
  }
  const rect = target.getBoundingClientRect();
  const width = Math.min(380, window.innerWidth - 40);
  const cardHeight = 230;
  let left = rect.left;
  let top = rect.bottom + 16;
  if (left + width > window.innerWidth - 20) left = window.innerWidth - width - 20;
  if (left < 20) left = 20;
  if (top + cardHeight > window.innerHeight - 20) top = Math.max(20, rect.top - cardHeight - 16);
  tourCard.style.setProperty("--tour-left", `${Math.round(left)}px`);
  tourCard.style.setProperty("--tour-top", `${Math.round(top)}px`);
}

function startTour() {
  tourIndex = 0;
  renderTourStep();
}

function endTour() {
  clearTourHighlight();
  tourCard?.classList.add("hidden");
}

function rotatePlanetPoint(lat, lon) {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = ((lon + planetRotation.y) * Math.PI) / 180;
  const x = Math.cos(latRad) * Math.sin(lonRad);
  const y = Math.sin(latRad);
  const z = Math.cos(latRad) * Math.cos(lonRad);
  const xRot = (planetRotation.x * Math.PI) / 180;
  const y2 = y * Math.cos(xRot) - z * Math.sin(xRot);
  const z2 = y * Math.sin(xRot) + z * Math.cos(xRot);
  return { x, y: y2, z: z2 };
}

function drawPlanet3D() {
  if (!orgPlanet || !orgPlanetCanvas || !planetContext) return;
  const rect = orgPlanet.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const size = Math.max(1, Math.floor(Math.min(rect.width, rect.height)));
  orgPlanetCanvas.width = Math.floor(size * scale);
  orgPlanetCanvas.height = Math.floor(size * scale);
  orgPlanetCanvas.style.width = `${size}px`;
  orgPlanetCanvas.style.height = `${size}px`;
  planetContext.setTransform(scale, 0, 0, scale, 0, 0);
  planetContext.clearRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.38;

  const glow = planetContext.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.36);
  glow.addColorStop(0, "rgba(52,245,187,0.18)");
  glow.addColorStop(0.52, "rgba(52,245,187,0.08)");
  glow.addColorStop(1, "rgba(52,245,187,0)");
  planetContext.fillStyle = glow;
  planetContext.beginPath();
  planetContext.arc(cx, cy, radius * 1.38, 0, Math.PI * 2);
  planetContext.fill();

  const sphere = planetContext.createRadialGradient(cx - radius * 0.28, cy - radius * 0.35, radius * 0.08, cx, cy, radius);
  sphere.addColorStop(0, "rgba(230,255,248,0.22)");
  sphere.addColorStop(0.18, "rgba(42,178,151,0.34)");
  sphere.addColorStop(0.62, "rgba(4,42,35,0.92)");
  sphere.addColorStop(1, "rgba(0,0,0,0.96)");
  planetContext.fillStyle = sphere;
  planetContext.beginPath();
  planetContext.arc(cx, cy, radius, 0, Math.PI * 2);
  planetContext.fill();

  planetContext.save();
  planetContext.beginPath();
  planetContext.arc(cx, cy, radius, 0, Math.PI * 2);
  planetContext.clip();

  planetContext.strokeStyle = "rgba(52,245,187,0.18)";
  planetContext.lineWidth = 1;
  for (let lat = -60; lat <= 60; lat += 20) {
    planetContext.beginPath();
    for (let lon = -180; lon <= 180; lon += 4) {
      const point = rotatePlanetPoint(lat, lon);
      const px = cx + point.x * radius;
      const py = cy - point.y * radius;
      if (lon === -180) planetContext.moveTo(px, py);
      else planetContext.lineTo(px, py);
    }
    planetContext.stroke();
  }

  for (let lon = -150; lon <= 180; lon += 30) {
    planetContext.beginPath();
    for (let lat = -88; lat <= 88; lat += 4) {
      const point = rotatePlanetPoint(lat, lon);
      const px = cx + point.x * radius;
      const py = cy - point.y * radius;
      if (lat === -88) planetContext.moveTo(px, py);
      else planetContext.lineTo(px, py);
    }
    planetContext.stroke();
  }
  planetContext.restore();

  planetContext.strokeStyle = "rgba(240,163,58,0.36)";
  planetContext.lineWidth = 1;
  planetContext.beginPath();
  planetContext.ellipse(cx, cy + radius * 0.05, radius * 1.28, radius * 0.23, -0.2, 0, Math.PI * 2);
  planetContext.stroke();

  planetDepartments.forEach((department) => {
    const node = document.querySelector(department.selector);
    if (!node) return;
    const point = rotatePlanetPoint(department.lat, department.lon);
    const depth = (point.z + 1) / 2;
    const px = cx + point.x * radius * 0.92;
    const py = cy - point.y * radius * 0.92;
    const opacity = point.z < -0.2 ? 0.18 : 0.68 + depth * 0.32;
    node.style.setProperty("--node-x", `${(px / size) * 100}%`);
    node.style.setProperty("--node-y", `${(py / size) * 100}%`);
    node.style.setProperty("--node-scale", `${0.74 + depth * 0.24}`);
    node.style.setProperty("--node-opacity", `${opacity}`);
    node.style.zIndex = String(Math.round(20 + depth * 30));
  });
}

function renderChecklist() {
  dataChecklist.innerHTML = dataItems
    .map((item, index) => {
      const checked = index < 6 ? "checked" : "";
      return `
        <label class="check-item">
          <input type="checkbox" ${checked} />
          <span>${item}</span>
        </label>
      `;
    })
    .join("");
}

function getAdjustedDimensions() {
  const strategy = document.querySelector("#strategy").value;
  const bottleneck = document.querySelector("#bottleneck").value;
  return baseDimensions.map((dimension) => {
    let score = dimension.score;
    if (strategy.includes("区域") && ["cadre", "role", "process"].includes(dimension.key)) {
      score -= 3;
    }
    if (bottleneck.includes("权责") && dimension.key === "role") {
      score -= 4;
    }
    if (bottleneck.includes("流程") && dimension.key === "process") {
      score -= 3;
    }
    if (bottleneck.includes("干部") && dimension.key === "cadre") {
      score -= 4;
    }
    return { ...dimension, score: Math.max(35, Math.min(82, score)) };
  });
}

function radarPoint(index, score) {
  const center = 160;
  const maxRadius = 126;
  const angle = -Math.PI / 2 + index * ((Math.PI * 2) / 5);
  const radius = (score / 100) * maxRadius;
  const x = center + Math.cos(angle) * radius;
  const y = center + Math.sin(angle) * radius;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

function heroPoint(index, score) {
  const center = 210;
  const maxRadius = 168;
  const angle = -Math.PI / 2 + index * ((Math.PI * 2) / 5);
  const radius = (score / 100) * maxRadius;
  const x = center + Math.cos(angle) * radius;
  const y = center + Math.sin(angle) * radius;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

function renderDimensions(dimensions) {
  dimensionList.innerHTML = dimensions
    .map((dimension) => {
      const tone = dimension.score < 55 ? "#b54b43" : dimension.score < 64 ? "#c9792d" : "#23745f";
      return `
        <div class="dimension-row" data-dimension="${dimension.key}" role="button" tabindex="0" data-tooltip="${dimension.note}">
          <strong>${dimension.name}</strong>
          <div class="bar-track">
            <div class="bar-fill" style="width:${dimension.score}%; background:${tone}"></div>
          </div>
          <span>${dimension.score}</span>
        </div>
      `;
    })
    .join("");
  dimensionList.querySelectorAll(".dimension-row").forEach((row) => {
    row.addEventListener("click", () => renderBranch(row.dataset.dimension, ""));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        renderBranch(row.dataset.dimension, "");
      }
    });
  });
}

function renderRadar(dimensions) {
  radarShape.setAttribute(
    "points",
    dimensions.map((dimension, index) => radarPoint(index, dimension.score)).join(" ")
  );
  heroShape.setAttribute(
    "points",
    dimensions.map((dimension, index) => heroPoint(index, dimension.score)).join(" ")
  );
  dimensions.forEach((dimension) => {
    document.querySelectorAll(`[data-dimension="${dimension.key}"] strong`).forEach((node) => {
      if (node.closest(".holo-node")) node.textContent = dimension.score;
    });
  });
}

function renderRisks() {
  riskCardContainer.innerHTML = riskCards
    .map(
      (risk) => `
        <article class="risk-card ${risk.level}">
          <h4>${risk.title}</h4>
          <p>${risk.summary}</p>
          <ul class="meta-list">
            <li data-tooltip="${risk.evidence}"><span>证据</span>${risk.confidence}</li>
            <li data-tooltip="${risk.unknown}"><span>未知项</span>需补充</li>
            <li data-tooltip="${risk.review}"><span>复核点</span>人工确认</li>
          </ul>
        </article>
      `
    )
    .join("");
}

function renderTrainingPlan() {
  trainingPlanContainer.innerHTML = trainingPlan
    .map(
      (item) => `
        <div class="timeline-item">
          <strong>${item.period}</strong>
          <div>
            <h4>${item.title}</h4>
            <p>${item.text}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function updateScore(dimensions) {
  const average = Math.round(dimensions.reduce((sum, item) => sum + item.score, 0) / dimensions.length);
  scoreValue.textContent = average;
  overviewScore.textContent = average;
  const degrees = Math.round((average / 100) * 360);
  const level = average < 55 ? "危险" : average < 65 ? "需训练" : "健康";
  const color = average < 55 ? "#ff6b5f" : average < 65 ? "#f0a33a" : "#34f5bb";
  scoreRing.style.background = `radial-gradient(circle at center, var(--panel-2) 58%, transparent 59%), conic-gradient(${color} 0deg, ${color} ${degrees}deg, #263c35 ${degrees}deg 360deg)`;
  scorePanel?.classList.toggle("danger", average < 55);
  document.querySelector("#confidenceBadge").textContent = `健康级别：${level}｜整体置信度：${average < 58 ? "中等" : "中等偏高"}`;
  document.querySelector("#riskHeadline").textContent =
    average < 60 ? "组织具备增长基础，但权责、干部和流程必须先训练" : "组织具备增长基础，建议先补关键岗位与流程机制";
}

function getActiveFeedback() {
  return departmentEvidence[currentDepartmentKey] || nodeFeedback[currentBranchKey] || nodeFeedback.role;
}

function updateHeroFeedback() {
  const feedback = getActiveFeedback();
  if (selectedNodeName) selectedNodeName.textContent = feedback.name;
  if (selectedNodeRisk) selectedNodeRisk.textContent = feedback.risk;
  if (selectedNodeEvidence) selectedNodeEvidence.textContent = feedback.evidence;
  if (selectedNodeImpact) selectedNodeImpact.textContent = feedback.impact;
  if (selectedNodeNext) selectedNodeNext.textContent = feedback.next;
}

function updateReportPreview() {
  const detail = branchDetails[currentBranchKey] || branchDetails.role;
  const feedback = getActiveFeedback();
  if (!reportPreviewContent) return;
  reportPreviewContent.innerHTML = `
    <strong>核心结论：增长承接风险 52 分，危险。</strong>
    <span>当前节点：${feedback.name.replace("当前点击：", "")}｜${feedback.risk.replace("问题：", "").replace("状态：", "")}</span>
    <span>优先交办：${detail.department}｜${detail.action}</span>
  `;
}

function renderBranch(key = "role", departmentKey = "") {
  currentBranchKey = key;
  currentDepartmentKey = departmentKey;
  const detail = branchDetails[key] || branchDetails.role;
  const feedback = getActiveFeedback();
  document.querySelectorAll(".holo-node, .org-node").forEach((button) => {
    const isDepartment = Boolean(button.dataset.department);
    button.classList.toggle("active", isDepartment ? button.dataset.department === currentDepartmentKey : button.dataset.dimension === key);
  });
  document.querySelectorAll(".dimension-row").forEach((row) => {
    row.classList.toggle("active", row.dataset.dimension === key);
  });
  branchPanel.innerHTML = `
    <h4>${detail.title}</h4>
    <p>${detail.department}</p>
    <div class="branch-grid">
      <div data-tooltip="${detail.intro}"><strong>当前节点</strong><span>${feedback.name.replace("当前点击：", "")}</span></div>
      <div data-tooltip="${detail.evidence}"><strong>具体数据</strong><span>${feedback.evidence.replace("数据：", "").replace("证据：", "")}</span></div>
      <div data-tooltip="${detail.risk}"><strong>风险影响</strong><span>${feedback.impact.replace("影响：", "")}</span></div>
      <div data-tooltip="由 CEO、HRD 与对应业务负责人共同确认，不由 AI 单独定性。"><strong>复核</strong><span>人工确认</span></div>
    </div>
    <div class="root-cause-ladder">
      <button type="button" data-cause="target">目标</button>
      <button type="button" data-cause="system">接口</button>
      <button type="button" data-cause="people">负荷</button>
      <button type="button" data-cause="process">复制</button>
    </div>
    <div class="playbook-box" id="playbookBox"></div>
  `;
  if (heroReadout) {
    heroReadout.innerHTML = `
      <span>当前展开</span>
      <strong>${detail.title}</strong>
      <p>${detail.intro}</p>
    `;
  }
  updateHeroFeedback();
  updateReportPreview();
  renderRootCause(currentRootCause);
}

function renderRootCause(cause = "process") {
  currentRootCause = cause;
  const detail = branchDetails[currentBranchKey] || branchDetails.role;
  const labels = { target: "目标没有对齐", system: "团队接口不清", people: "关键团队过载", process: "流程难以复制" };
  document.querySelectorAll(".root-cause-ladder button").forEach((button) => {
    button.classList.toggle("active", button.dataset.cause === cause);
  });
  const box = document.querySelector("#playbookBox");
  if (!box) return;
  box.innerHTML = `
    <strong>${labels[cause]}层根因</strong>
    <p>${detail.rootCauses[cause]}</p>
    <div class="action-pill" data-tooltip="${detail.playbook}">查看成熟方法</div>
    <div class="action-pill" data-tooltip="${detail.action}">查看落地动作</div>
  `;
}

function renderGuide(key = "health") {
  const data = guideData[key] || guideData.goal;
  document.querySelectorAll(".guide-step").forEach((button) => {
    button.classList.toggle("active", button.dataset.guide === key);
  });
  document.querySelector("#guideTitle").textContent = data.title;
  document.querySelector("#guideText").textContent = data.text;
  if (key === "red" || key === "why" || key === "owner") renderBranch("role", "ops");
  if (key === "red") {
    document.querySelector("#report").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (key === "evidence") {
    renderBranch(currentBranchKey, currentDepartmentKey);
    document.querySelector("#riskCards").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  if (key === "why" || key === "owner") {
    document.querySelector("#rootCause").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (key === "owner") renderRootCause("system");
  if (key === "fix") {
    renderBranch(currentBranchKey, currentDepartmentKey);
    document.querySelector("#prescription").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (key === "report") {
    document.querySelector("#package").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function runAssessment() {
  const dimensions = getAdjustedDimensions();
  renderDimensions(dimensions);
  renderRadar(dimensions);
  updateScore(dimensions);
  renderRisks();
  renderTrainingPlan();
  renderBranch("role", "ops");
  reportStatus.textContent = "已生成最新体检报告";
  showToast("组织体检报告已更新");
}

function loadSample() {
  document.querySelector("#currentRevenue").value = "5000 万年营收";
  document.querySelector("#targetRevenue").value = "18 个月做到年营收 1 亿";
  document.querySelector("#strategy").value = "区域扩张 + 渠道复制";
  document.querySelector("#bottleneck").value =
    "业务机会不少，但中层干部、跨部门协同、权责边界和流程标准化跟不上扩张节奏。";
  runAssessment();
}

function openImportModal() {
  importModal?.classList.remove("hidden");
  importModal?.setAttribute("aria-hidden", "false");
}

function closeImportModal() {
  importModal?.classList.add("hidden");
  importModal?.setAttribute("aria-hidden", "true");
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function downloadTemplate() {
  const rows = [
    ["字段", "内容"],
    ["当前业务规模", "5000 万年营收"],
    ["目标业务规模", "18 个月做到年营收 1 亿"],
    ["增长策略", "区域扩张 + 渠道复制"],
    ["最大经营卡点", "业务机会不少，但中层干部、跨部门协同、权责边界和流程标准化跟不上扩张节奏。"],
    ["关键部门", "运营部、供应链部、人力资源部、仓储部、交付部"],
    ["已知风险", "权责不清、库存积压、干部梯队不足、流程复盘缺失"],
    ["需复核数据", "岗位权责说明、部门 KPI、关键流程节点、干部梯队、脱敏绩效汇总"]
  ];
  const csv = `\ufeff${rows.map((row) => row.map(csvCell).join(",")).join("\n")}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "组织星球_企业诊断导入模板_v1.csv";
  link.click();
  URL.revokeObjectURL(url);
  showToast("企业诊断模板已下载");
}

function parseCsvLine(line) {
  const cells = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(cell.trim());
      cell = "";
    } else {
      cell += char;
    }
  }
  cells.push(cell.trim());
  return cells;
}

function setStrategyValue(value) {
  const select = document.querySelector("#strategy");
  if (!value) return;
  const existing = [...select.options].find((option) => option.value === value);
  if (!existing) select.add(new Option(value, value));
  select.value = value;
}

function applyImportedTemplate(text) {
  const rows = text
    .replace(/^\ufeff/, "")
    .split(/\r?\n/)
    .map((line) => parseCsvLine(line))
    .filter((row) => row[0] && row[1]);
  const data = Object.fromEntries(rows.slice(rows[0]?.[0] === "字段" ? 1 : 0).map((row) => [row[0], row[1]]));
  document.querySelector("#currentRevenue").value = data["当前业务规模"] || document.querySelector("#currentRevenue").value;
  document.querySelector("#targetRevenue").value = data["目标业务规模"] || document.querySelector("#targetRevenue").value;
  setStrategyValue(data["增长策略"]);
  document.querySelector("#bottleneck").value = data["最大经营卡点"] || document.querySelector("#bottleneck").value;
  runAssessment();
  closeImportModal();
  showToast("企业模板已导入，组织体检已刷新");
}

function buildCoachAnswer(question) {
  const detail = branchDetails[currentBranchKey] || branchDetails.role;
  const ask = question || "当前组织最应该先处理什么？";
  let focus = "权责、干部和流程";
  let firstAction = "先把跨部门责任人、拍板人和复盘人确认下来";

  if (/干部|人|能力|团队|中层|继任/.test(ask)) {
    focus = "干部能力和继任梯队";
    firstAction = "先做关键岗位九宫格盘点，确认谁能独立承担区域复制";
  } else if (/流程|交付|仓储|物流|SOP|复盘/.test(ask)) {
    focus = "流程标准化和异常闭环";
    firstAction = "先把客户交接、订单履约、异常处理三条流程拆成节点、时限和责任人";
  } else if (/目标|战略|增长|1 亿|营收|OKR|KPI/.test(ask)) {
    focus = "增长目标传导";
    firstAction = "先把增长目标拆成销售、交付、供应链共同承担的指标";
  } else if (/制度|机制|授权|权责|责任|拍板/.test(ask)) {
    focus = "权责边界和授权机制";
    firstAction = "先用 RACI 明确谁负责、谁协同、谁审批、谁知会";
  }

  return `
    <div class="coach-answer">
      <p><strong>结论：</strong>这个问题先落到“${focus}”。当前不是不能增长，而是组织承接增长的关键条件还不稳。</p>
      <p><strong>证据：</strong>${detail.evidence}</p>
      <p><strong>根因公式：</strong>目标是否清楚 → 流程是否可复制 → 权责是否有人认 → 干部是否扛得住 → 制度是否能复盘。</p>
      <p><strong>下一步：</strong>${firstAction}；30 天内完成证据复核，60 天建立责任机制，90 天形成训练闭环。</p>
      <p><strong>边界：</strong>这是基于样例数据的 AI 辅助判断，不能替代 CEO、HRD 和业务负责人复核。</p>
    </div>
  `;
}

function answerQuestion(question) {
  const answer = answers[question] || buildCoachAnswer(question);
  answerBox.innerHTML = `
    <p><strong>追问：</strong>${question || "未填写具体问题"}</p>
    ${answers[question] ? `<p><strong>回答：</strong>${answer}</p>` : answer}
  `;
}

function reportSummary() {
  const current = document.querySelector("#currentRevenue").value;
  const target = document.querySelector("#targetRevenue").value;
  const strategy = document.querySelector("#strategy").value;
  return `组织星球 Demo 摘要

增长目标：${current} -> ${target}
增长策略：${strategy}
核心判断：增长承接风险 52 分，危险。组织具备增长机会，但权责、干部和流程必须先训练。
关键风险：权责边界拖慢扩张；干部梯队限制复制；战略传导存在信息失真。
输出机制：每条结论包含证据、置信度、未知项、风险边界和人工复核点。
训练计划：30 天复核组织证据，60 天建立增长责任机制，90 天形成组织训练闭环。`;
}

function exportLeadershipReport() {
  const current = document.querySelector("#currentRevenue").value;
  const target = document.querySelector("#targetRevenue").value;
  const strategy = document.querySelector("#strategy").value;
  const detail = branchDetails[currentBranchKey] || branchDetails.role;
  const dimensions = getAdjustedDimensions();
  const average = Math.round(dimensions.reduce((sum, item) => sum + item.score, 0) / dimensions.length);
  const rows = dimensions
    .map((item) => {
      const level = item.score < 55 ? "危险" : item.score < 65 ? "需训练" : "健康";
      return `<tr><td>${item.name}</td><td>${item.score}</td><td>${level}</td><td>${item.note}</td></tr>`;
    })
    .join("");
  const report = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>组织星球多维组织分析报告 v1</title>
  <style>
    body{margin:0;background:#f4f7f5;color:#15201c;font-family:"Microsoft YaHei","PingFang SC",Arial,sans-serif;line-height:1.75}
    .page{max-width:1080px;margin:0 auto;padding:44px}
    .cover{padding:42px;border-radius:18px;color:#fff;background:linear-gradient(135deg,#06110f,#104b3e);box-shadow:0 24px 60px rgba(0,0,0,.16)}
    .eyebrow{margin:0 0 8px;color:#62ffd0;font-weight:900;text-transform:uppercase}
    h1{margin:0;font-size:42px;line-height:1.18}
    h2{margin:34px 0 14px;font-size:24px}
    .summary{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}
    .summary div,.card{padding:18px;border:1px solid #d9e4df;border-radius:14px;background:#fff}
    .summary strong{display:block;font-size:28px;color:#cf4338}
    table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden}
    th,td{padding:14px;border-bottom:1px solid #e3ebe7;text-align:left;vertical-align:top}
    th{background:#10241f;color:#fff}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .danger{color:#cf4338;font-weight:900}
    .timeline{display:grid;gap:12px}
    .timeline div{padding:16px 18px;border-left:5px solid #1abf91;border-radius:12px;background:#fff}
    .footer{margin-top:32px;padding-top:18px;border-top:1px solid #d9e4df;color:#5c6d66;font-size:13px}
  </style>
</head>
<body>
  <main class="page">
    <section class="cover">
      <h1>组织星球多维组织分析报告</h1>
      <p class="eyebrow">Organization Planet Report · v1</p>
      <p>面向 CEO / HRD / 业务负责人的组织承接风险诊断与 30/60/90 天行动建议。</p>
      <div class="summary">
        <div><span>增长承接风险</span><strong>${average} 分</strong><small class="danger">危险</small></div>
        <div><span>增长目标</span><strong>${target}</strong><small>${current}</small></div>
        <div><span>优先风险</span><strong>${detail.department}</strong><small>${strategy}</small></div>
      </div>
    </section>

    <h2>一、管理层结论</h2>
    <div class="card">
      18 个月冲 1 亿存在明确增长机会，但当前组织承接风险为危险。最应优先处理的是 <strong>${detail.title}</strong>：${detail.intro}
    </div>

    <h2>二、五维组织体检</h2>
    <table>
      <thead><tr><th>维度</th><th>得分</th><th>级别</th><th>判断依据</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>

    <h2>三、根因穿透</h2>
    <div class="grid">
      <div class="card"><strong>流程层</strong><p>${detail.rootCauses.process}</p></div>
      <div class="card"><strong>人层</strong><p>${detail.rootCauses.people}</p></div>
      <div class="card"><strong>制度层</strong><p>${detail.rootCauses.system}</p></div>
      <div class="card"><strong>目标层</strong><p>${detail.rootCauses.target}</p></div>
    </div>

    <h2>四、经验证的整改处方</h2>
    <div class="card">${detail.playbook}</div>

    <h2>五、30/60/90 天作战指令</h2>
    <div class="timeline">
      ${trainingPlan.map((item) => `<div><strong>${item.period}｜${item.title}</strong><br />${item.text}</div>`).join("")}
    </div>

    <h2>六、合规与复核边界</h2>
    <div class="card">
      本报告基于模拟与脱敏样例数据生成。系统只做组织承接风险辅助评估，不预测营收结果，不替代管理层判断。所有关键结论需由 CEO、HRD 与对应业务负责人进行人工复核。
    </div>
    <p class="footer">参赛项目：组织星球｜个人组：卡叔｜大厨管家（上海）供应链有限公司｜v1</p>
  </main>
</body>
</html>`;
  const blob = new Blob([report], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "组织星球_多维组织分析报告_v1.html";
  link.click();
  URL.revokeObjectURL(url);
  showToast("专业分析报告已生成");
}

async function copySummary() {
  try {
    await navigator.clipboard.writeText(reportSummary());
    showToast("报告摘要已复制");
  } catch {
    showToast("浏览器不支持自动复制，可手动选择页面摘要");
  }
}

document.querySelector("#runButton").addEventListener("click", runAssessment);
document.querySelector("#loadSampleButton").addEventListener("click", openImportModal);
document.querySelector("#askButton").addEventListener("click", () => {
  answerQuestion(document.querySelector("#customQuestion").value.trim());
});
document.querySelector("#copySummaryButton").addEventListener("click", copySummary);
document.querySelector("#exportReportButton").addEventListener("click", exportLeadershipReport);
document.querySelector("#jumpToFixButton").addEventListener("click", () => {
  renderGuide("fix");
});
document.querySelector("#startDiagnosisButton").addEventListener("click", () => {
  renderGuide("red");
  document.querySelector("#report").scrollIntoView({ behavior: "smooth", block: "start" });
});

tourNextButton?.addEventListener("click", () => {
  if (tourLocked) return;
  tourIndex += 1;
  renderTourStep();
});
tourSkipButton?.addEventListener("click", endTour);
importCloseButton?.addEventListener("click", closeImportModal);
importBackdrop?.addEventListener("click", closeImportModal);
downloadTemplateButton?.addEventListener("click", downloadTemplate);
uploadTemplateButton?.addEventListener("click", () => templateFileInput?.click());
useSampleButton?.addEventListener("click", () => {
  loadSample();
  closeImportModal();
  showToast("样例企业已导入");
});
templateFileInput?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  applyImportedTemplate(text);
  event.target.value = "";
});

scenarioGrid?.querySelectorAll(".scenario-card").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = scenarioPresets[button.dataset.scenario] || scenarioPresets.regional;
    scenarioGrid.querySelectorAll(".scenario-card").forEach((card) => card.classList.toggle("active", card === button));
    document.querySelector("#strategy").value = preset.strategy;
    document.querySelector("#bottleneck").value = preset.bottleneck;
    scenarioOutput.innerHTML = `<span>当前扫描</span><strong>${preset.output}</strong>`;
    runAssessment();
    showToast("企业场景已切换，体检结果已刷新");
  });
});

document.querySelectorAll(".question-bank button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#customQuestion").value = button.dataset.question;
    answerQuestion(button.dataset.question);
  });
});

document.querySelectorAll(".holo-node, .org-node").forEach((button) => {
  button.addEventListener("click", () => renderBranch(button.dataset.dimension, button.dataset.department || ""));
});

document.querySelectorAll(".guide-step").forEach((button) => {
  button.addEventListener("click", () => renderGuide(button.dataset.guide));
});

document.addEventListener("click", (event) => {
  const causeButton = event.target.closest(".root-cause-ladder button");
  if (causeButton) renderRootCause(causeButton.dataset.cause);
});

function setPlanetRotation(x, y) {
  planetRotation = { x, y };
  drawPlanet3D();
}

function enablePlanetDrag() {
  if (!orgPlanet) return;
  let dragging = false;
  let start = { x: 0, y: 0 };
  let base = { ...planetRotation };

  function beginDrag(event) {
    planetAutoSpin = false;
    dragging = true;
    start = { x: event.clientX, y: event.clientY };
    base = { ...planetRotation };
    orgPlanet.classList.add("is-dragging");
  }

  function moveDrag(event) {
    if (!dragging) return;
    const nextY = base.y + (event.clientX - start.x) * 0.35;
    const nextX = Math.max(-48, Math.min(28, base.x - (event.clientY - start.y) * 0.22));
    setPlanetRotation(nextX, nextY);
  }

  function endDrag() {
    dragging = false;
    orgPlanet.classList.remove("is-dragging");
    window.setTimeout(() => {
      planetAutoSpin = true;
    }, 1400);
  }

  orgPlanet.addEventListener("pointerdown", (event) => {
    beginDrag(event);
    orgPlanet.setPointerCapture(event.pointerId);
  });

  orgPlanet.addEventListener("pointermove", moveDrag);

  orgPlanet.addEventListener("pointerup", (event) => {
    endDrag();
    orgPlanet.releasePointerCapture(event.pointerId);
  });

  orgPlanet.addEventListener("mousedown", beginDrag);
  window.addEventListener("mousemove", moveDrag);
  window.addEventListener("mouseup", endDrag);

  orgPlanet.addEventListener("pointerleave", () => {
    dragging = false;
    orgPlanet.classList.remove("is-dragging");
  });
}

function animatePlanet() {
  if (planetAutoSpin && orgPlanet) {
    setPlanetRotation(planetRotation.x, planetRotation.y + 0.045);
  }
  window.requestAnimationFrame(animatePlanet);
}

function enableScrollSpy() {
  const links = [...document.querySelectorAll(".step-nav a")];
  const sections = links
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((item) => item.section);

  function syncActiveNav() {
    const marker = window.scrollY + window.innerHeight * 0.36;
    let current = sections[0];
    sections.forEach((item) => {
      const top = item.section.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) current = item;
    });
    links.forEach((link) => link.classList.toggle("active", link === current.link));
  }

  window.addEventListener("scroll", syncActiveNav, { passive: true });
  window.addEventListener("resize", syncActiveNav);
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.classList.toggle("active", item === link));
    });
  });
  syncActiveNav();
}

introScreen?.remove();
document.body.classList.remove("intro-active");

renderChecklist();
runAssessment();
renderGuide("goal");
setPlanetRotation(planetRotation.x, planetRotation.y);
enablePlanetDrag();
enableScrollSpy();
window.addEventListener("resize", drawPlanet3D);
window.addEventListener("resize", () => {
  const step = tourSteps[tourIndex];
  if (!tourCard?.classList.contains("hidden") && step) positionTourCard(document.querySelector(step.selector));
});
animatePlanet();
window.setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" }), 1500);
