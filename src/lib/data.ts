export type Browser = {
  name: string;
  slug: string;
  marketShare: string;
  logo: string;
  coreTechnology: string[];
  specialFeatures: string[];
  architecture: {
    title: string;
    content: string;
    points: string[];
  }[];
  privacyConcerns?: string[];
};

export const browsers: Browser[] = [
  {
    name: 'Google Chrome',
    slug: 'chrome',
    marketShare: '65%',
    logo: 'chrome',
    coreTechnology: [
      'Chromium open-source project base',
      'Blink rendering engine',
      'V8 JavaScript engine',
      'Multi-process architecture',
    ],
    specialFeatures: [
      'Chrome DevTools',
      'Extensions API (Manifest V3)',
      'Progressive Web App (PWA) support',
      'Chrome Sync across devices',
      'Safe Browsing protection',
      'Incognito mode',
      'Task Manager for processes',
      'Chrome Experiments (flags)',
    ],
    architecture: [
      {
        title: 'Browser Process',
        content:
          'The main controller of the application, managing the UI, bookmarks, and history. It coordinates all other processes to ensure smooth operation.',
        points: [
          'Main application controller',
          'Handles UI, bookmarks, history',
          'Manages other processes',
          'Network requests coordination',
        ],
      },
      {
        title: 'Renderer Process',
        content:
          'Each tab runs in its own sandboxed process, handling rendering, JavaScript execution via V8, and DOM manipulation. This isolation is a key security feature.',
        points: [
          'Separate process per tab (sandboxing)',
          'Runs Blink rendering engine',
          'Executes JavaScript via V8',
          'Isolated for security (site isolation)',
        ],
      },
      {
        title: 'GPU Process',
        content:
          'Dedicated process for leveraging hardware acceleration for graphics-intensive tasks like WebGL, video decoding, and CSS animations.',
        points: [
          'Hardware acceleration for graphics',
          'WebGL rendering',
          'Video decoding',
          'CSS animations and transitions',
        ],
      },
      {
        title: 'V8 JavaScript Engine',
        content:
          'V8 is Google\'s open-source high-performance JavaScript and WebAssembly engine. It implements JIT compilation for optimal performance.',
        points: [
          'Just-In-Time (JIT) compilation',
          'Hidden classes for optimization',
          'Inline caching',
          'Generational garbage collection',
          'TurboFan optimizing compiler & Ignition interpreter',
        ]
      },
      {
        title: 'Security Architecture',
        content: 'Chrome employs a multi-layered security strategy, with sandboxing and site isolation as its core pillars to protect users from malicious websites.',
        points: [
          'Sandboxing per tab/process',
          'Site Isolation (separate process per site)',
          'Same-Origin Policy enforcement',
          'Content Security Policy (CSP)',
          'Automatic security updates',
        ]
      },
      {
        title: 'Performance Optimizations',
        content: 'Chrome includes numerous features to speed up web page loading and rendering, from modern network protocols to resource loading hints.',
        points: [
          'Lazy loading of images and iframes',
          'HTTP/3 and QUIC support',
          'Preloading and prefetching resource hints',
          'Brotli compression',
          'Service Workers for offline capability',
        ]
      }
    ],
    privacyConcerns: [
      'Extensive telemetry collection',
      'Google account tracking',
      'FLoC/Topics API (advertising)',
      'No native ad blocking',
      'Data sent to Google servers',
    ],
  },
  {
    name: 'Mozilla Firefox',
    slug: 'firefox',
    marketShare: '3%',
    logo: 'firefox',
    coreTechnology: [
      'Gecko rendering engine',
      'SpiderMonkey JavaScript engine',
      'Quantum project (performance improvements)',
      'Servo components (Rust-based)',
    ],
    specialFeatures: [
      'Enhanced Tracking Protection (built-in)',
      'Total Cookie Protection',
      'Multi-Account Containers',
      'Reader Mode',
      'Picture-in-Picture video',
      'End-to-end encrypted sync',
      'PDF.js (built-in PDF viewer)',
      'Pocket integration'
    ],
    architecture: [
      {
        title: 'Multi-Process Firefox (Electrolysis)',
        content:
          'Firefox uses a multi-process architecture to improve security and stability, separating the parent UI process from content processes where web pages are rendered.',
        points: [
          'Parent process (UI and coordination)',
          'Content processes (web page rendering)',
          'GPU process',
          'Extension process',
          'Socket process (networking)',
        ],
      },
      {
        title: 'Gecko Rendering Engine',
        content:
          'Developed by Mozilla, Gecko is a key component of Firefox, responsible for rendering web content. It includes the WebRender project for GPU-accelerated rendering.',
        points: [
          'HTML5 and CSS3 standards compliance',
          'Progressive rendering',
          'WebRender (GPU-accelerated rendering in Rust)',
          'Quantum CSS (parallel styling)',
        ],
      },
      {
        title: 'SpiderMonkey JavaScript Engine',
        content:
          'The first-ever JavaScript engine, SpiderMonkey powers Firefox with multiple Just-In-Time (JIT) compilation tiers for optimal performance.',
        points: [
          'Baseline Interpreter & JIT compiler',
          'Ion optimizing JIT compiler',
          'Warp (latest optimization tier)',
          'Advanced Garbage collection',
        ],
      },
       {
        title: 'Privacy Focus',
        content: 'Firefox is built with a strong emphasis on user privacy, offering powerful, best-in-class features to block trackers and isolate web activity.',
        points: [
          'Enhanced Tracking Protection (ETP) by default',
          'Total Cookie Protection',
          'DNS over HTTPS (DoH)',
          'Open-source and auditable',
          'HTTPS-Only Mode',
        ]
      },
    ],
  },
  {
    name: 'Apple Safari',
    slug: 'safari',
    marketShare: '20%',
    logo: 'safari',
    coreTechnology: [
      'WebKit rendering engine',
      'JavaScriptCore (Nitro) engine',
      'Apple ecosystem integration',
      'Exclusive to Apple devices',
    ],
    specialFeatures: [
      'iCloud sync (bookmarks, tabs, etc.)',
      'Handoff between Apple devices',
      'Intelligent Tracking Prevention (ITP)',
      'Privacy Report',
      'Tab Groups',
      'Optimized for battery efficiency',
      'Built-in translation',
    ],
    architecture: [
      {
        title: 'WebKit Engine',
        content:
          'The rendering engine developed by Apple, featuring WebCore for rendering/layout and JavaScriptCore for JS execution. WebKit2 introduces a multi-process architecture.',
        points: [
          'WebCore (rendering and layout)',
          'JavaScriptCore (JS execution)',
          'WebKit2 (multi-process architecture)',
          'Web Process per tab',
          'UI Process for browser interface',
        ],
      },
      {
        title: 'JavaScriptCore (Nitro) Engine',
        content:
          "Safari's highly optimized JavaScript engine uses a four-tier compilation system to balance fast startup with powerful optimizations for complex code.",
        points: [
          'LLInt (Low-Level Interpreter)',
          'Baseline JIT compiler',
          'DFG (Data Flow Graph) JIT',
          'FTL (Faster Than Light) JIT',
        ],
      },
      {
        title: 'Privacy Leadership',
        content:
          'Safari has been a pioneer in user privacy with features like Intelligent Tracking Prevention that actively work to block cross-site tracking.',
        points: [
          'Intelligent Tracking Prevention (ITP)',
          'Cross-site tracking prevention',
          'Fingerprinting protection',
          'Private Browsing with iCloud Private Relay',
          'No third-party cookies by default',
        ],
      },
      {
        title: 'Performance',
        content: 'Safari is highly optimized for Apple hardware, focusing on energy efficiency and responsiveness, especially on Apple Silicon Macs.',
        points: [
          'Optimized for Apple Silicon',
          'Energy efficiency focus',
          'GPU acceleration with Metal framework',
          'Fastest JS performance on macOS (Apple claims)',
        ]
      }
    ],
  },
  {
    name: 'Microsoft Edge',
    slug: 'edge',
    marketShare: '5%',
    logo: 'edge',
    coreTechnology: [
      'Chromium-based (since 2020)',
      'Blink rendering engine',
      'V8 JavaScript engine',
      'Microsoft proprietary features',
    ],
    specialFeatures: [
      'Microsoft 365 integration',
      'Collections for organizing research',
      'Vertical tabs',
      'Sleeping tabs for memory saving',
      'Internet Explorer mode',
      'Microsoft Copilot integration',
      'PDF annotation tools',
      'Read Aloud',
    ],
    architecture: [
       {
        title: 'Chromium Core',
        content:
          'Since 2020, Edge is built on the same open-source Chromium project as Google Chrome, sharing its core multi-process architecture, Blink rendering engine, and V8 JavaScript engine.',
        points: [
          'Shared base with Chrome',
          'Microsoft account integration',
          'Windows OS deep integration',
          'Azure cloud services connection',
        ],
      },
       {
        title: 'Performance Features',
        content: 'Edge includes unique performance optimizations like Sleeping Tabs, which reduce memory and CPU usage for inactive tabs, and Startup Boost for faster launch times.',
        points: [
          'Sleeping tabs reduce memory usage',
          'Startup boost',
          'Efficiency mode',
          'Similar to Chrome performance'
        ]
       },
       {
         title: 'Security Features',
         content: 'Edge leverages Microsoft\'s security infrastructure, including SmartScreen for phishing and malware protection, on top of Chromium\'s sandboxing capabilities.',
         points: [
            'Microsoft Defender SmartScreen',
            'Application Guard for enterprise',
            'Windows Hello integration',
            'Chromium-based sandboxing'
         ]
       }
    ]
  },
  {
    name: 'Opera',
    slug: 'opera',
    marketShare: '2%',
    logo: 'opera',
    coreTechnology: [
      'Chromium-based',
      'Blink rendering engine',
      'V8 JavaScript engine',
    ],
    specialFeatures: [
      'Built-in VPN (free)',
      'Built-in ad blocker',
      'Crypto wallet integration',
      'Sidebar with messengers',
      'Video pop-out',
      'Workspaces for tab grouping',
      'Gaming variant (Opera GX)',
    ],
    architecture: [
      {
        title: 'Chromium Foundation',
        content: 'Opera is built upon the Chromium project, giving it a modern and robust foundation with access to Blink and V8 engines.',
        points: [
          'Leverages Blink for rendering',
          'Uses V8 for JavaScript execution',
          'Compatible with Chrome extensions',
        ],
      },
      {
        title: 'Unique Feature Integrations',
        content: 'Opera differentiates itself by building unique features directly into the browser, such as a free VPN and integrated social media messengers.',
        points: [
          'VPN proxy servers for privacy',
          'Native ad and tracker blocker',
          'Workspaces for tab organization',
        ],
      },
    ],
    privacyConcerns: [
      'VPN is a proxy, not a full VPN',
      'Owned by a Chinese consortium (Golden Brick)',
      'Data collection for personalized news',
    ]
  },
  {
    name: 'Brave',
    slug: 'brave',
    marketShare: '0.5%',
    logo: 'brave',
    coreTechnology: [
      'Chromium-based',
      'Blink rendering engine',
      'V8 JavaScript engine',
    ],
    specialFeatures: [
      'Brave Shield (Ad & tracker blocking)',
      'Brave Rewards (BAT cryptocurrency)',
      'Tor integration in private tabs',
      'IPFS support (decentralized web)',
      'Brave Wallet (Web3)',
      'HTTPS Everywhere',
    ],
    architecture: [
      {
        title: 'Privacy-by-Default Core',
        content: 'Brave modifies the Chromium engine to aggressively block ads and trackers by default, which is its central architectural principle.',
        points: [
          'Brave Shield blocks scripts and ads',
          'Fingerprinting randomization',
          'Upgrades connections to HTTPS automatically',
        ],
      },
      {
        title: 'Brave Rewards & Ads',
        content: 'Brave has a unique, privacy-preserving advertising model. It blocks traditional ads and offers users to opt-in to view privacy-respecting ads in exchange for cryptocurrency.',
        points: [
          'Opt-in advertising model',
          'Users earn Basic Attention Tokens (BAT)',
          'Can tip creators with BAT',
        ],
      },
    ],
  },
];

export const comparisonData = {
  headers: ['Feature', 'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Brave'],
  rows: [
    ['Rendering Engine', 'Blink', 'Gecko', 'WebKit', 'Blink', 'Blink', 'Blink'],
    ['JS Engine', 'V8', 'SpiderMonkey', 'JavaScriptCore', 'V8', 'V8', 'V8'],
    ['Process Model', 'Multi-Process', 'Multi-Process', 'Multi-Process', 'Multi-Process', 'Multi-Process', 'Multi-Process'],
    ['Ad Blocker', 'No (Extensions)', 'Built-in (ETP)', 'No (Extensions)', 'No (Extensions)', 'Built-in', 'Built-in (Aggressive)'],
    ['Tracker Protection', 'Privacy Sandbox', 'Enhanced Tracking Protection', 'Intelligent Tracking Prevention', 'Tracking Prevention', 'Built-in', 'Built-in (Aggressive)'],
    ['Container Tabs', 'No', 'Yes (Multi-Account)', 'No', 'No', 'Yes (Workspaces)', 'No'],
    ['Sync', 'Google Account', 'Firefox Sync (E2EE)', 'iCloud (E2EE)', 'Microsoft Account', 'Opera Account', 'Brave Sync'],
    ['Platform', 'Cross-platform', 'Cross-platform', 'Apple only', 'Cross-platform', 'Cross-platform', 'Cross-platform'],
  ],
};

export const historyEvents = [
  {
    year: '1995',
    title: 'Netscape Navigator Launch',
    description: 'Netscape Navigator becomes the first widely popular commercial web browser, dominating the early web with over 90% market share. It introduced key technologies like JavaScript and SSL.',
    tags: ['Netscape', 'First War'],
  },
  {
    year: '1995',
    title: 'Internet Explorer 1.0',
    description: 'Microsoft launches Internet Explorer 1.0, bundled with Windows 95 Plus! Pack. This marks the beginning of the First Browser War.',
    tags: ['Microsoft', 'First War'],
  },
  {
    year: '1997',
    title: 'Gecko Engine Development Begins',
    description: 'Development starts on what would become the Gecko rendering engine, the core of Netscape 6 and later, Mozilla Firefox.',
    tags: ['Netscape', 'Gecko'],
  },
  {
    year: '2001',
    title: 'IE6 Dominance',
    description: 'Internet Explorer 6 is released and achieves a peak market share of 95%, effectively winning the First Browser War. This leads to a period of web stagnation.',
    tags: ['Microsoft', 'First War'],
  },
    {
    year: '2004',
    title: 'Firefox 1.0 Challenges IE',
    description: 'The Mozilla Foundation releases Firefox 1.0, an open-source browser focused on speed, security, and web standards. This marks the start of the Second Browser War.',
    tags: ['Firefox', 'Second War'],
  },
    {
    year: '2008',
    title: 'Google Chrome Arrives',
    description: 'Google enters the browser market with Chrome, emphasizing speed, simplicity, and a multi-process architecture for stability. Its launch intensifies the Second Browser War.',
    tags: ['Google', 'Chrome', 'Second War'],
  },
    {
    year: '2013',
    title: 'Blink Engine Fork',
    description: 'Google forks WebKit to create the Blink rendering engine, aiming for faster development and a different process architecture. This engine now powers Chrome, Edge, Opera, and Brave.',
    tags: ['Google', 'Blink', 'Chromium'],
  },
    {
    year: '2020',
    title: 'Microsoft Edge switches to Chromium',
    description: 'Microsoft reboots its Edge browser, abandoning its own EdgeHTML engine in favor of the open-source Chromium project. This consolidates Blink\'s dominance in the engine market.',
    tags: ['Microsoft', 'Edge', 'Chromium'],
  },
];

export const sections = [
    { name: "Major Browsers", path: "/browsers", icon: "Globe" },
    { name: "Browser Engines", path: "/engines", icon: "Cog" },
    { name: "JavaScript Engines", path: "/javascript-engines", icon: "Code" },
    { name: "Browser Wars", path: "/history", icon: "Swords" },
    { name: "Components Deep Dive", path: "/components-deep-dive", icon: "Layers" },
    { name: "Performance", path: "/performance", icon: "Zap" },
];
