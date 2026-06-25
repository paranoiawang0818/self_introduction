export type Language = 'zh' | 'en';

export type Stat = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  detail: string;
};

export type CardItem = {
  title: string;
  meta: string;
  description: string;
  points: string[];
  tags: string[];
  href?: string;
  status?: string;
};

export type SimpleItem = {
  title: string;
  description: string;
  meta?: string;
  tags?: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  kind: 'phone' | 'mail' | 'github' | 'youtube' | 'x' | 'wechat';
};

export type SiteContent = {
  localeName: string;
  nav: {
    brand: string;
    status: string;
    links: Array<{ label: string; href: string }>;
    languageToggle: string;
  };
  hero: {
    kicker: string;
    name: string;
    alias: string;
    role: string;
    headline: string;
    description: string;
    keywords: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  snapshot: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: Stat[];
  };
  research: {
    eyebrow: string;
    title: string;
    intro: string;
    items: CardItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    featuredLabel: string;
    labLabel: string;
    featured: CardItem[];
    experiments: SimpleItem[];
  };
  communication: {
    eyebrow: string;
    title: string;
    intro: string;
    items: SimpleItem[];
  };
  photoWall: {
    eyebrow: string;
    title: string;
    intro: string;
    photos: Array<{ src: string; alt: string }>;
  };
  help: {
    eyebrow: string;
    title: string;
    intro: string;
    items: SimpleItem[];
  };
  connect: {
    eyebrow: string;
    title: string;
    intro: string;
    targets: string[];
    promise: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    qrHint: string;
    items: ContactItem[];
  };
  footer: {
    line: string;
  };
};

const sharedPhotos = [
  { src: 'assets/photo1.jpg', alt: '生活照片 1' },
  { src: 'assets/photo2.jpg', alt: '生活照片 2' },
  { src: 'assets/photo3.jpg', alt: '生活照片 3' },
  { src: 'assets/photo4.jpg', alt: '生活照片 4' },
  { src: 'assets/photo5.jpg', alt: '生活照片 5' },
  { src: 'assets/photo6.jpg', alt: '生活照片 6' },
  { src: 'assets/photo7.jpg', alt: '生活照片 7' },
  { src: 'assets/photo8.jpg', alt: '生活照片 8' },
  { src: 'assets/photo9.jpg', alt: '生活照片 9' }
];

export const content: Record<Language, SiteContent> = {
  zh: {
    localeName: '中文',
    nav: {
      brand: 'Paranoia.wang',
      status: 'ONLINE',
      links: [
        { label: '研究', href: '#research' },
        { label: '项目', href: '#projects' },
        { label: '表达', href: '#communication' },
        { label: '联系', href: '#contact' }
      ],
      languageToggle: 'EN'
    },
    hero: {
      kicker: 'PERSONAL INTERFACE / XJTLU',
      name: '王高',
      alias: 'Paranoia小妄',
      role: 'XJTLU 信息与计算科学本科在读',
      headline: '用 AI、数学和自动化，把学习与研究变成可复用的系统。',
      description:
        '关注 AI 工具、模型行为评测、自动化工作流与个人知识系统。正在从高效学习者，成长为 AI + 科研 + 项目实践者。',
      keywords: ['AI Automation', 'Research Exploration', 'Learning Systems', 'Public Communication'],
      primaryCta: '查看项目',
      secondaryCta: '联系我'
    },
    snapshot: {
      eyebrow: 'CORE SIGNALS',
      title: '一些可信的成长证据',
      intro: '',
      stats: [
        { value: 3.93, decimals: 2, label: 'GPA', detail: '西交利物浦大学信息与计算科学' },
        { value: 1, label: '一等奖', detail: '2026 抖音 AI 创变者计划·济南站' },
        { value: 2, label: 'AI 板块第 2 名', detail: 'LPT 大学预备营 2.0' },
        { value: 11, label: '微积分讲义撰写', detail: '约 46 页，覆盖 18 个课程小节' },
        { value: 6.0, decimals: 1, label: '雅思裸考', detail: 'IELTS 首次裸考成绩' },
        { value: 2700, suffix: '+', label: '视频号粉丝', detail: '公开内容组织与知识分享' },
        { value: 4, label: '公开分享', detail: '校内 AI 使用经验、LPT 分享与公开表达' },
        { value: 7, label: '组织活动', detail: '校内活动策划、推进与复盘' }
      ]
    },
    research: {
      eyebrow: 'RESEARCH MODE',
      title: '我参与的问题场',
      intro: '',
      items: [
        {
          title: '南京大学苏州校区 2052 实验室实习：数据采集工作',
          meta: '2026.1 - 2026.2',
          status: 'Lab Practice',
          description:
            '参与实验室项目中的数据采集和初步整理，理解科研项目里基础数据工作的协作方式。',
          points: ['按任务要求完成数据收集与初步整理', '配合实验室成员推进数据准备流程', '积累科研协作与流程规范经验'],
          tags: ['Data Collection', 'Research Workflow', 'Collaboration']
        },
        {
          title: '金融量化与中美跨市场收益预测',
          meta: '2026.5 - 至今 / 进行中',
          status: 'Ongoing',
          description:
            '复现并扩展跨市场收益预测框架，围绕 directed bipartite graph 与 rolling-window screening 构建预测流程。',
          points: [
            '使用 t-statistic 阈值筛选跨市场预测关系',
            '将筛选后特征输入 OLS、LASSO、Ridge、XGBoost、LightGBM 等模型',
            '搭建滚动回测流程，记录预测结果与绩效指标'
          ],
          tags: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'LightGBM']
        },
        {
          title: '大模型行为评测与 MLLM 可靠性研究',
          meta: '2026.6 - 至今 / 方向讨论中',
          status: 'Exploration',
          description:
            '围绕后训练对模型行为的影响，以及模糊图文指令下 MLLM 输出稳定性与澄清行为开展选题准备。',
          points: [
            '初步设计 prompt 数据集、评价维度、人工标注与结果分析流程',
            '关注输出一致性、幻觉、过度拒绝、澄清行为与图文 grounding',
            '以研究探索方式推进，不提前包装为完成成果'
          ],
          tags: ['LLM Evaluation', 'MLLM', 'Prompt Dataset', 'Grounding']
        }
      ]
    },
    projects: {
      eyebrow: 'BUILD LOG',
      title: '把想法做成能运行的东西',
      intro: '',
      featuredLabel: '重点项目',
      labLabel: '实验项目',
      featured: [
        {
          title: 'AI 资讯自动推送系统',
          meta: '2026.1 / 独立开发',
          status: 'Live Script',
          description:
            '基于 Python 构建自动化采集脚本，整合 15+ 个国内外 AI RSS 信息源，生成适配邮件阅读的结构化内容。',
          points: ['抓取、过滤、整合 AI 资讯', '输出标题、摘要、详细内容与启示', '通过 GitHub Actions + SMTP 定时推送'],
          tags: ['Python', 'GitHub Actions', 'RSS', 'SMTP', 'HTML'],
          href: 'https://github.com/paranoiawang0818/ai-news-collector'
        },
        {
          title: '晦明·Deeptalk',
          meta: '2026.3 / 独立开发',
          status: 'Mini Program',
          description: '对话类微信小程序，包含多页面结构、核心交互流程、云函数和模块化工具函数。',
          points: ['设计页面路由与应用入口', '使用 WXML / WXSS / JavaScript 实现界面和交互', '接入云函数支持数据处理与接口调用'],
          tags: ['WXML', 'WXSS', 'JavaScript', 'Cloud Functions']
        },
        {
          title: '复盘 Agent 与 Notion 自动化工作流',
          meta: '2026.5 / 个人系统',
          status: 'Workflow',
          description: '把固定复盘流程拆成结构化输入、总结输出与归档规则，让学习和项目复盘更容易持续。',
          points: ['自动总结复盘内容', '同步归档到 Notion 页面', '用大模型工具减少重复整理成本'],
          tags: ['Claude Code', 'LLM API', 'Notion', 'Automation']
        },
        {
          title: '计算机视觉视频分析预活动项目',
          meta: '2026.6 / 指导老师 Yushan Pan',
          status: 'Prototype',
          description: '基于 YOLO11n 与 ByteTrack 实现视频中行人检测、跟踪、进出计数与行为分析。',
          points: ['统计区域占用人数、最大占用人数、平均占用人数', '生成热力图、停留时间、事件日志', '导出 CSV 与可视化预览视频'],
          tags: ['Python', 'OpenCV', 'YOLO11n', 'ByteTrack', 'CSV']
        }
      ],
      experiments: [
        {
          title: '和 GPT 的一次对话',
          meta: 'Interface Experiment',
          description: '把一次真实访谈报告重新构想成拟物化控制面板。',
          tags: ['HTML', 'CSS', 'Narrative UI']
        },
        {
          title: '2026 新年倒计时',
          meta: 'Visual Experiment',
          description: '极客风新年倒计时网页，强调动态视觉效果。',
          tags: ['Web', 'Motion']
        },
        {
          title: '极简时间计算器',
          meta: 'Utility',
          description: '简单实用的时间计算工具。',
          tags: ['JavaScript', 'Tool']
        },
        {
          title: '颜色转盘',
          meta: 'Color Walk Tool',
          description: '为 color walk 设计的颜色选择工具。',
          tags: ['Interaction', 'Color']
        }
      ]
    },
    communication: {
      eyebrow: 'PUBLIC CHANNEL',
      title: '把经验讲出来，也是一种能力',
      intro: '',
      items: [
        {
          title: '校内 AI 使用经验分享',
          meta: '2025.11',
          description: '作为学生代表分享 AI 工具使用经历，覆盖学习辅助、信息整理与项目实践。'
        },
        {
          title: '2050 大会 WaytoAGI 志愿者',
          meta: '2026.5',
          description: '参与现场支持，负责摄影记录与主持协助，接触 AI 社群现场协作。'
        },
        {
          title: 'LPT 成长故事分享',
          meta: '2026.6',
          description: '受 LPT 邀请进行个人成长经历分享，围绕学习方法、AI 工具应用与阶段性成长经验。'
        },
        {
          title: '微信视频号内容展示',
          meta: '持续运营 / 2700+ 粉丝',
          description: '持续组织内容、分享知识，并积累用户触达经验。'
        }
      ]
    },
    photoWall: {
      eyebrow: 'LIFE FRAGMENTS',
      title: '生活碎片仍然保留',
      intro: '',
      photos: sharedPhotos
    },
    help: {
      eyebrow: 'HELP MENU',
      title: '或许可以提供给你的',
      intro: '',
      items: [
        { title: 'AI 工具与 Prompt 工作流', description: '效率类 AI 工具搭配、提示词设计和自动化流程整理。' },
        { title: '学科学习交流', description: '微积分、线性代数、英语口语，尽量用通透的方式讲清楚。' },
        { title: '知识管理系统搭建', description: 'Notion / Obsidian / ima 的个人知识库、复盘系统和资料沉淀。' },
        { title: '学习压力与焦虑拆解', description: '把压力拆成可描述、可排序、可执行的下一步。' },
        { title: '成长型伙伴连接', description: '链接校内外资源，也分享与行业嘉宾和 AI 社群交流的经验。' }
      ]
    },
    connect: {
      eyebrow: 'CONNECT REQUEST',
      title: '我想遇见这样的人',
      intro: '',
      targets: ['对 AI 实战应用、终身成长感兴趣的人', '对模型预训练、后训练感兴趣的小伙伴', '对于个人表达有经验和独到看法的人', '愿意互相反馈、互相指出问题、一起成长的朋友'],
      promise: '欢迎直接指出我的问题，我会认真听，也会认真改。'
    },
    contact: {
      eyebrow: 'CONTACT NODE',
      title: '可以从这里找到我',
      intro: '',
      qrHint: 'WeChat QR / 扫码添加',
      items: [
        { label: 'Phone', value: '15162452007', href: 'tel:15162452007', kind: 'phone' },
        { label: 'Gmail', value: 'paranoiawang0818@gmail.com', href: 'mailto:paranoiawang0818@gmail.com', kind: 'mail' },
        { label: 'School Email', value: 'Gao.Wang2502@student.xjtlu.edu.cn', href: 'mailto:Gao.Wang2502@student.xjtlu.edu.cn', kind: 'mail' },
        { label: 'GitHub', value: 'paranoiawang0818', href: 'https://github.com/paranoiawang0818', kind: 'github' },
        { label: 'YouTube', value: '@cowardP', href: 'https://www.youtube.com/@cowardP', kind: 'youtube' },
        { label: 'X', value: '@wnggo18915', href: 'https://x.com/wnggo18915', kind: 'x' },
        { label: 'WeChat', value: 'QR Code', kind: 'wechat' }
      ]
    },
    footer: {
      line: 'Designed and rebuilt with controlled voltage by Paranoia小妄.'
    }
  },
  en: {
    localeName: 'English',
    nav: {
      brand: 'Paranoia.wang',
      status: 'ONLINE',
      links: [
        { label: 'Research', href: '#research' },
        { label: 'Projects', href: '#projects' },
        { label: 'Speaking', href: '#communication' },
        { label: 'Contact', href: '#contact' }
      ],
      languageToggle: 'CN'
    },
    hero: {
      kicker: 'PERSONAL INTERFACE / XJTLU',
      name: 'Gao Wang',
      alias: 'Paranoia Xiaowang',
      role: 'BSc Information and Computing Science student at XJTLU',
      headline: 'Turning learning, research, and information work into reusable systems.',
      description:
        'I work around AI tools, model behavior evaluation, automation workflows, and personal knowledge systems. I am growing from an efficient learner into an AI, research, and product-minded builder.',
      keywords: ['AI Automation', 'Research Exploration', 'Learning Systems', 'Public Communication'],
      primaryCta: 'View Projects',
      secondaryCta: 'Contact'
    },
    snapshot: {
      eyebrow: 'CORE SIGNALS',
      title: 'Proof of steady momentum',
      intro: '',
      stats: [
        { value: 3.93, decimals: 2, label: 'GPA', detail: 'Information and Computing Science at XJTLU' },
        { value: 1, label: 'First Prize', detail: '2026 Douyin AI Changemaker Program, Jinan' },
        { value: 2, label: '2nd Place in AI Track', detail: 'LPT University Prep Camp 2.0' },
        { value: 11, label: 'Calculus Handout Writing', detail: 'Around 46 pages across 18 course units' },
        { value: 6.0, decimals: 1, label: 'IELTS First Attempt', detail: 'Score achieved without formal test prep' },
        { value: 2700, suffix: '+', label: 'Video Channel Followers', detail: 'Public content and knowledge sharing' },
        { value: 4, label: 'Public Talks', detail: 'Campus AI sharing, LPT talk, and public communication' },
        { value: 7, label: 'Campus Events', detail: 'Planning, coordination, and follow-up' }
      ]
    },
    research: {
      eyebrow: 'RESEARCH MODE',
      title: 'Problem fields I participate in',
      intro: '',
      items: [
        {
          title: 'Nanjing University Suzhou Campus 2052 Lab Internship: Data Collection',
          meta: 'Jan 2026 - Feb 2026',
          status: 'Lab Practice',
          description:
            'Participated in data collection and preliminary organization work, learning the practical workflow behind research projects.',
          points: ['Complete data collection and initial sorting tasks', 'Support lab members in data preparation', 'Learn research collaboration norms and workflows'],
          tags: ['Data Collection', 'Research Workflow', 'Collaboration']
        },
        {
          title: 'Quantitative Finance and Cross-Market Return Prediction',
          meta: 'Since May 2026 / Ongoing',
          status: 'Ongoing',
          description:
            'Reproducing and extending a cross-market return prediction framework with directed bipartite graphs and rolling-window screening.',
          points: [
            'Use t-statistic thresholds to screen predictive cross-market relations',
            'Feed selected features into OLS, LASSO, Ridge, XGBoost, LightGBM, and related models',
            'Build rolling backtests and track prediction results and performance metrics'
          ],
          tags: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'LightGBM']
        },
        {
          title: 'LLM Behavior Evaluation and MLLM Reliability',
          meta: 'Since Jun 2026 / Topic exploration',
          status: 'Exploration',
          description:
            'Preparing research directions around post-training effects on model behavior and MLLM stability under ambiguous image-text instructions.',
          points: [
            'Draft prompt datasets, evaluation dimensions, annotation flow, and analysis plans',
            'Focus on consistency, hallucination, over-refusal, clarification behavior, and visual grounding',
            'Presented as research exploration, not as completed publication work'
          ],
          tags: ['LLM Evaluation', 'MLLM', 'Prompt Dataset', 'Grounding']
        }
      ]
    },
    projects: {
      eyebrow: 'BUILD LOG',
      title: 'Making ideas runnable',
      intro: '',
      featuredLabel: 'Featured Projects',
      labLabel: 'Experimental Builds',
      featured: [
        {
          title: 'AI News Auto-Delivery System',
          meta: 'Jan 2026 / Solo project',
          status: 'Live Script',
          description:
            'A Python automation workflow that aggregates 15+ Chinese and international AI RSS sources and turns them into email-friendly structured briefings.',
          points: ['Fetch, filter, and organize AI news', 'Output titles, summaries, detailed content, and takeaways', 'Schedule delivery with GitHub Actions and SMTP'],
          tags: ['Python', 'GitHub Actions', 'RSS', 'SMTP', 'HTML'],
          href: 'https://github.com/paranoiawang0818/ai-news-collector'
        },
        {
          title: 'Huiming Deeptalk',
          meta: 'Mar 2026 / Solo project',
          status: 'Mini Program',
          description: 'A conversational WeChat mini program with multi-page structure, core interaction flows, cloud functions, and modular utilities.',
          points: ['Design page routing and app entry points', 'Build UI and interaction with WXML, WXSS, and JavaScript', 'Use cloud functions for data processing and API calls'],
          tags: ['WXML', 'WXSS', 'JavaScript', 'Cloud Functions']
        },
        {
          title: 'Review Agent and Notion Automation Workflow',
          meta: 'May 2026 / Personal system',
          status: 'Workflow',
          description: 'A structured reflection workflow that converts repeated review routines into inputs, generated summaries, and Notion archiving rules.',
          points: ['Summarize review notes automatically', 'Archive outputs into Notion pages', 'Use LLM tools to reduce repetitive organization work'],
          tags: ['Claude Code', 'LLM API', 'Notion', 'Automation']
        },
        {
          title: 'Computer Vision Video Analysis Prototype',
          meta: 'Jun 2026 / Supervised by Yushan Pan',
          status: 'Prototype',
          description: 'A YOLO11n and ByteTrack based prototype for pedestrian detection, tracking, entrance counting, and behavior analysis.',
          points: ['Measure current, maximum, and average area occupancy', 'Generate heatmaps, dwell time, and event logs', 'Export CSV logs and visual preview videos'],
          tags: ['Python', 'OpenCV', 'YOLO11n', 'ByteTrack', 'CSV']
        }
      ],
      experiments: [
        {
          title: 'An Interview with GPT',
          meta: 'Interface Experiment',
          description: 'Reimagining a real GPT interview report as a skeuomorphic control panel.',
          tags: ['HTML', 'CSS', 'Narrative UI']
        },
        {
          title: '2026 New Year Countdown',
          meta: 'Visual Experiment',
          description: 'A geek-styled countdown webpage with dynamic visual effects.',
          tags: ['Web', 'Motion']
        },
        {
          title: 'Minimal Time Calculator',
          meta: 'Utility',
          description: 'A simple and practical time calculation tool.',
          tags: ['JavaScript', 'Tool']
        },
        {
          title: 'Color Selection Dial',
          meta: 'Color Walk Tool',
          description: 'A color selection tool designed for color walk decisions.',
          tags: ['Interaction', 'Color']
        }
      ]
    },
    communication: {
      eyebrow: 'PUBLIC CHANNEL',
      title: 'Explaining the process is also a skill',
      intro: '',
      items: [
        {
          title: 'Campus AI Usage Sharing',
          meta: 'Nov 2025',
          description: 'Shared AI tool usage as a student representative, covering learning support, information organization, and project practice.'
        },
        {
          title: '2050 Conference WaytoAGI Volunteer',
          meta: 'May 2026',
          description: 'Supported onsite work, photography, and hosting assistance while participating in an AI community environment.'
        },
        {
          title: 'LPT Growth Story Sharing',
          meta: 'Jun 2026',
          description: 'Invited by LPT to share personal growth experience around learning methods, AI tool usage, and staged progress.'
        },
        {
          title: 'WeChat Video Channel',
          meta: 'Ongoing / 2700+ followers',
          description: 'Organizing public content, sharing knowledge, and learning how to reach an audience.'
        }
      ]
    },
    photoWall: {
      eyebrow: 'LIFE FRAGMENTS',
      title: 'Life fragments stay here',
      intro: '',
      photos: sharedPhotos.map((photo, index) => ({ ...photo, alt: `Life photo ${index + 1}` }))
    },
    help: {
      eyebrow: 'HELP MENU',
      title: 'Ways I may be useful',
      intro: '',
      items: [
        { title: 'AI tools and prompt workflows', description: 'Tool combinations, prompt design, and automation workflow thinking.' },
        { title: 'Course learning support', description: 'Calculus, linear algebra, and spoken English explained in a clear, practical way.' },
        { title: 'Knowledge management systems', description: 'Notion, Obsidian, and ima setups for knowledge bases, review systems, and long-term notes.' },
        { title: 'Learning pressure breakdown', description: 'Turning pressure into describable, sortable, and executable next steps.' },
        { title: 'Growth-minded connections', description: 'Connecting campus and external resources, plus sharing experience from AI communities and industry conversations.' }
      ]
    },
    connect: {
      eyebrow: 'CONNECT REQUEST',
      title: 'People I hope to meet',
      intro: '',
      targets: [
        'People interested in practical AI applications and lifelong growth',
        'Friends interested in model pre-training and post-training',
        'People with experience and distinctive views on personal expression',
        'Friends willing to exchange feedback and grow together'
      ],
      promise: 'You are welcome to point out my problems directly. I will listen carefully, and I will improve.'
    },
    contact: {
      eyebrow: 'CONTACT NODE',
      title: 'Where to find me',
      intro: '',
      qrHint: 'WeChat QR / Scan to add',
      items: [
        { label: 'Phone', value: '15162452007', href: 'tel:15162452007', kind: 'phone' },
        { label: 'Gmail', value: 'paranoiawang0818@gmail.com', href: 'mailto:paranoiawang0818@gmail.com', kind: 'mail' },
        { label: 'School Email', value: 'Gao.Wang2502@student.xjtlu.edu.cn', href: 'mailto:Gao.Wang2502@student.xjtlu.edu.cn', kind: 'mail' },
        { label: 'GitHub', value: 'paranoiawang0818', href: 'https://github.com/paranoiawang0818', kind: 'github' },
        { label: 'YouTube', value: '@cowardP', href: 'https://www.youtube.com/@cowardP', kind: 'youtube' },
        { label: 'X', value: '@wnggo18915', href: 'https://x.com/wnggo18915', kind: 'x' },
        { label: 'WeChat', value: 'QR Code', kind: 'wechat' }
      ]
    },
    footer: {
      line: 'Designed and rebuilt with controlled voltage by Paranoia Xiaowang.'
    }
  }
};
