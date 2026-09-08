/* 面試小抄 — 內容檔
   DATA = [ { id, label, section, groups:[ { name, items:[ {q, zh, en, ja} ] } ] } ]
   每題可以有 zh / en / ja 三種語言，有幾種就在題目右邊出現幾個切換鈕。
   只寫 zh 的題目不會出現切換鈕。
   body 用 Markdown（粗體 ** / 表格 | / 小標 #### / 清單 - / 分隔線 --- / 嵌入 HTML ::: html）
   注意：內文裡不要出現反引號。
*/

const DATA = [

/* ═══════════ 自我介紹 ═══════════ */
{
  id: 'intro',
  label: '自我介紹',
  section: 'General',
  groups: [
  {
    name: '完整版',
    items: [
      {
        q: '請你自我介紹（面向日商）',
        zh: `
您好，我是王薇 (Vivian)。

我目前擔任產品經理，擁有四年產品開發經驗，專注於直播平台、區塊鏈及加密貨幣領域。

在 Typus Finance 任職期間，我主導了鏈上金融永續合約產品從零到一的開發全生命週期。我負責市場與競品分析、需求定義、規格撰寫，並協調工程與設計團隊進行時程規劃，同時執行上線後的數據追蹤與產品迭代。Typus 是一家新創公司，加上加密貨幣市場本身的趨勢與漲幅變動特別快，產品的開發節奏也必須跟著壓縮，才能在市場熱度還在的時候把功能推上線。我們的永續合約產品正好趕上了那一波行情，在第一季即累積約 **8,700 萬美元**的交易量。

此前，我於亞洲最大的直播平台 17LIVE 負責平台使用者體驗與用戶成長指標。我帶領一個五人的跨職能小組，成員涵蓋工程師、資料分析師、設計師與客服，透過建立內部使用者回饋分析平台，將零散的客戶投訴與意見轉化為具結構性的產品需求，並以此數據驅動產品路線圖的優先級決策。此舉顯著優化了產品開發流程，使問題處理效率提升 **15%**，留存率亦成長 **10%**。

目前我正於倫敦國王學院攻讀管理與科技變革碩士，預計今年九月畢業。由於科系的關係，我比一般管理學程更早接觸到 AI Agent 這個領域，也逐漸把它變成我的預設工作方式：無論是學業、日常生活或未來的工作，我都會運用 AI Agent 開發產品原型與內部工具，以最低的成本驗證創新的想法。我的碩士論文研究的正是「AI 時代下如何優化產品開發流程」，聚焦於需求文件在產品、設計與工程團隊之間的轉譯機制，並探討 AI 如何降低跨部門的溝通成本；研究過程中，我深入訪談了包含 TikTok 在內的多家大型科技企業，以獲取產業第一線的實務洞察。

過往的職涯經驗主要深耕於亞洲市場，我對該區的使用者行為與迭代節奏有深刻掌握。畢業後，我計畫回歸亞洲市場發展，並將日本視為首選目標。由於具備群馬大學交換經驗及家族背景，我對日本市場有著高度的連結感與文化適應力。

畢業之後，我希望能把這一年的研究成果，以及自己在 AI 驅動開發流程上累積的實作體悟，帶進下一份工作，真正落實在團隊的產品開發流程裡。

以上是我的背景簡介，期待能與您進一步交流。
`,
        en: `
Thank you for making the time today. I'm Wei Wang, and I go by Vivian.

I'm a product manager with four years of experience across live-streaming platforms and the blockchain industry.

Most recently, at Typus Finance, I took an on-chain perpetual futures product from zero to one. The numbers we watched were fairly basic: trading volume, active users, and deposits. The crypto market moves fast, so I ran bi-weekly releases and shipped more than thirty features over the year. The product reached about **87 million US dollars** in trading volume in its first quarter, growing 383% month over month.

Before that, at 17LIVE, I owned platform user experience and growth, working with the Taiwan, Japan and Southeast Asia market teams. My features were measured on conversion and retention. For a 90-second clips feature, I defined D0 to D7 retention as the success metric with the data team at the planning stage, and we A/B tested before full rollout. I also proposed an internal user-feedback dashboard and led a five-person cross-functional team to build it, turning scattered support tickets, store reviews and interviews into a single prioritisation view. **Issue resolution got 15% faster and retention rose 10%.**

What stayed with me is that the same feature did not perform the same way in Taiwan as in Japan, which is where I learned to ask whether a gap is a real market difference or simply a product we did not build well.

Alongside my industry experience, I'm completing a master's degree in London. The programme put me in front of AI agents early, and they have become my default way of working: I build prototypes to test ideas quickly and cheaply. My dissertation explores how AI is changing collaboration within product teams, drawing on interviews with companies including TikTok.

After graduating I plan to return to Asia, with Japan as my first choice, where I previously spent an exchange year at Gunma University and also have family ties in Tokyo. I'm comfortable working in Mandarin, English and Japanese, which is part of why I'm drawn to teams that work across more than one market. In my next role I'd like to bring together my experience in product execution and the AI-driven way of working I've built up this year.
`
      },
      {
        q: '請你自我介紹（面向台灣企業）',
        zh: `
您好，我是王薇 (Vivian)。

我目前擔任產品經理，擁有四年產品開發經驗，專注於直播平台、區塊鏈及加密貨幣領域。

在 Typus Finance 任職期間，我主導了鏈上金融永續合約產品從零到一的開發全生命週期。我負責市場與競品分析、需求定義、規格撰寫，並協調工程與設計團隊進行時程規劃，同時執行上線後的數據追蹤與產品迭代。Typus 是一家新創公司，加上加密貨幣市場本身的趨勢與漲幅變動特別快，產品的開發節奏也必須跟著壓縮，才能在市場熱度還在的時候把功能推上線。我們的永續合約產品正好趕上了那一波行情，在第一季即累積約 **8,700 萬美元**的交易量。

此前，我於亞洲最大的直播平台 17LIVE 負責平台使用者體驗與用戶成長指標。我帶領一個五人的跨職能小組，成員涵蓋工程師、資料分析師、設計師與客服，透過建立內部使用者回饋分析平台，將零散的客戶投訴與意見轉化為具結構性的產品需求，並以此數據驅動產品路線圖的優先級決策。此舉顯著優化了產品開發流程，使問題處理效率提升 **15%**，留存率亦成長 **10%**。

目前我正於倫敦國王學院攻讀管理與科技變革碩士，預計今年九月畢業。由於科系的關係，我比一般管理學程更早接觸到 AI Agent 這個領域，也逐漸把它變成我的預設工作方式：無論是學業、日常生活或未來的工作，我都會運用 AI Agent 開發產品原型與內部工具，以最低的成本驗證創新的想法。我的碩士論文研究的正是「AI 時代下如何優化產品開發流程」，聚焦於需求文件在產品、設計與工程團隊之間的轉譯機制，並探討 AI 如何降低跨部門的溝通成本；研究過程中，我深入訪談了包含 TikTok 在內的多家大型科技企業，以獲取產業第一線的實務洞察。

當初赴倫敦攻讀碩士，是希望以更有系統的方式研究實務上遇到的問題，並補強跨文化協作的經驗。而我過往的職涯經驗主要深耕於亞洲市場，對該區的使用者行為與迭代節奏有深刻掌握，因此畢業後我計畫回到台灣發展，將這一年的研究成果與國際經驗帶回熟悉的市場。

畢業之後，我希望能把這一年的研究成果，以及自己在 AI 驅動開發流程上累積的實作體悟，帶進下一份工作，真正落實在團隊的產品開發流程裡。

以上是我的背景簡介，期待能與您進一步交流。
`,
        en: `
Thank you for making the time today. I'm Wei Wang, and I go by Vivian.

I'm a product manager with four years of experience across live-streaming platforms and the blockchain industry.

Most recently, at Typus Finance, I took an on-chain perpetual futures product from zero to one. I owned market and competitor analysis, requirements, specs, and the delivery schedule with engineering and design, then tracked the numbers after launch and iterated. Typus is a startup, and the crypto market moves and swings very fast, so the development cycle had to be compressed to match it, to ship while the market was still hot. The product caught that wave and reached about **87 million US dollars** in trading volume in its first quarter.

Before that, at 17LIVE, Asia's largest live-streaming platform, I owned platform user experience and growth. I led a five-person cross-functional team of engineers, a data analyst, a designer and support, and we built an internal user-feedback platform that turned scattered complaints and comments into structured product requirements, then used that data to prioritise the roadmap. **Issue resolution got 15% faster and retention rose 10%.**

I'm currently completing an MSc in Management and Technological Change at King's College London, graduating this September. Because of the programme, I came across AI agents earlier than most management students, and they have gradually become my default way of working: in coursework, in daily life and in my work, I use AI agents to build prototypes and internal tools so I can validate ideas at the lowest possible cost. My dissertation is on optimising the product development process in the age of AI, specifically how requirements documents get translated between product, design and engineering, and how AI lowers that cross-functional communication cost. I ran in-depth interviews with large technology companies including TikTok.

I went to London to study the problems I kept running into in a more systematic way, and to strengthen my cross-cultural collaboration experience. My career so far has been built in Asian markets, and I understand this region's user behaviour and iteration pace well, so after graduating I plan to come back to Taiwan and bring this year of research and international experience back to a market I know.

In my next role I'd like to bring together this year's research and what I've learned first-hand about AI-driven development, and actually put it into how a team builds products.

That's my background in short. I'm looking forward to talking further.
`
      }
    ]
  },
  {
    name: '短版',
    items: [
      {
        q: '請你自我介紹（60 秒短版）',
        zh: `
我有大約 4 年的產品經驗，橫跨 B2C 直播平台與金融科技。最近在 Typus Finance 端到端負責鏈上衍生品，雙週節奏交付 30 多項功能，期間 MAU 從約 1,000 成長到 20,000 以上、產品內存入資產從 800 萬成長到 2,000 萬美元。在那之前在 17LIVE 主導台灣、日本與東南亞的產品專案，用訪談加 SQL 把洞察轉成 roadmap 優先級。我目前在倫敦國王學院讀 Management and Technological Change 碩士，論文研究 AI 如何降低產品與工程之間的溝通成本。

**跟多數 PM 不太一樣的地方是：我自己會做 prototype、做儀表板、也自己把 AI agent 接進工作流，所以我從洞察走到實際產出的速度比較快。**
`,
        en: `
I have about four years of product experience, across B2C live-streaming and fintech. Most recently at Typus Finance I owned on-chain derivatives end to end, shipping more than thirty features on a bi-weekly cycle. Over that period monthly active users went from around a thousand to over twenty thousand, and deposits in the product grew from 8 to 20 million US dollars. Before that, at 17LIVE, I led product work across Taiwan, Japan and Southeast Asia, using interviews plus SQL to turn insight into roadmap priorities. I'm currently finishing an MSc in Management and Technological Change at King's College London, with a dissertation on how AI lowers the communication cost between product and engineering.

**What makes me a little different from most PMs is that I build the prototypes, build the dashboards, and wire AI agents into my own workflow, so I get from insight to something real faster.**
`
      }
    ]
  },
  {
    name: '日本語',
    items: [
      {
        q: '自己紹介をお願いします。',
        zh: `
初次見面，我是王薇（Vivian）。今天感謝您撥出時間。

我做產品經理大約四年。主要是直播服務和區塊鏈這兩個領域。兩邊都是看使用者的行為數據，決定下一步要做什麼的工作。

前一家公司是 Typus Finance 這家新創，在那裡我把一個新的交易服務從零開始做起來。工作內容是調查市場、決定需要哪些功能，然後和工程師、設計師一起帶到上線。這個產業變動非常快，所以我建立了每兩週發布一次的節奏，一年推出了 30 個以上的功能。

在那之前，我在 17LIVE 這家直播公司負責使用者體驗和用戶成長。不過客戶的意見雖然收到很多，卻沒有一套機制把它接到接下來要做的東西上，所以我主動提案，帶了一個橫跨台灣、日本、東南亞的五人團隊做了內部的分析工具。

而且不是做完就算了，我主動去推給其他團隊用，一直推到它真的被用在決定優先順序的場合為止。結果對應效率提升了 **15%**，不過比數字更重要的是，從使用者的聲音到實際改善的流程，整個團隊都變快了。

現在我在倫敦的研究所，研究 AI 會如何改變產品團隊的工作方式。因為這個學程，我很早就接觸到 AI agent，現在每天都在用 AI 做 prototype 和 MVP。

九月修完之後，我打算回亞洲，第一志願是日本。原因是我大學畢業後去群馬大學留學了一年，家人也在東京，我自己也持續在學日文，所以我想的不是短期，而是在日本長期累積職涯。我可以用日文、英文、中文工作，也很嚮往有各國同事的環境。下一份工作，我想把過去的產品經驗和把 AI 帶進工作流程的做法，一起帶進團隊裡貢獻。

簡單來說就是這樣。今天請多指教。
`,
        en: `
Nice to meet you. I'm Wei Wang, and I go by Vivian. Thank you for making the time today.

I've worked as a product manager for about four years, mainly in live-streaming services and blockchain. In both, the job was to look at user behaviour data and decide what to build next.

Most recently I was at a startup called Typus Finance, where I built a new trading product from zero. I handled everything: researching the market, deciding which features we needed, working with engineers and designers through to launch, and improving it afterwards. The industry moves very fast, so I set up a release cycle every two weeks and we shipped more than thirty features in a year.

Before that I was at 17LIVE, a live-streaming company, where I owned user experience and growth. What I noticed there was that a lot of user feedback was coming in, but there was no mechanism connecting it to what we built next. So I proposed an internal analytics tool myself and led a five-person team across Taiwan, Japan and Southeast Asia to build it.

I didn't stop at shipping it. I pushed other teams to adopt it until it was actually being used in the meetings where priorities get decided. Issue resolution got **15%** faster, but the bigger win was that the whole path from a user's voice to a shipped improvement got faster for the entire team.

I'm now doing a master's in London, researching how AI is changing the way product teams work. Thanks to the programme I came across AI agents early, and now I build prototypes and MVPs with AI almost every day.

After I finish in September I plan to return to Asia, with Japan as my first choice. I spent a year on exchange at Gunma University after university, my family is in Tokyo, and I've kept studying Japanese, so I'm thinking about Japan as a long-term career, not a short stay. I can work in Japanese, English and Mandarin, and I'm drawn to environments with colleagues from different countries. In my next role I'd like to contribute both my product experience and the way I've learned to bring AI into how work gets done.

That's my background in short. I look forward to speaking with you today.
`,
        ja: `
改めまして、王薇（ヴィヴィアン）と申します。よろしくお願いいたします。

プロダクトマネージャーとして、4年ほど働いてきました。主にライブ配信のサービスと、ブロックチェーンの分野です。どちらも、ユーザーの行動データを見ながら、次に何を作るかを決めていく仕事でした。

直近では、Typus Financeというスタートアップで、オンチェーンの無期限先物をゼロから立ち上げました。市場調査から必要な機能の検討、エンジニアチームと連携した開発、その後の改善まで、全体を一貫して担当していました。この業界は動きがとても速いので、2週間ごとにリリースする体制をつくり、1年間で30以上の機能を出しました。

その前は17LIVEで、プラットフォームのユーザー体験とサービスの成長を担当して、いろいろな機能を企画からリリースまでしました。その仕事を進めるなかで気づいたのが、ユーザーからのご意見はたくさん届いているのに、それを次の改善につなげる仕組みがなかったことです。そこで、社内向けのユーザーフィードバック・ダッシュボードを自分から提案し、台湾・日本・東南アジアにまたがる5人の職種横断型チームをリードして開発しました。

このダッシュボードによって、さまざまな場所に分かれていたユーザーの声を整理し、具体的な要件につなげられるようになりました。ただ、作って終わりではなくて、他のチームにも使ってもらえるように自分から働きかけて、実際に優先順位を決める場で使われる状態まで持っていきました。その結果、問題対応の効率が **15％** 向上したのですが、数字以上に大きかったのは、ユーザーの声を受け取ってから、実際の改善としてリリースするまでの流れが、チーム全体で速くなったことです。

現在はロンドンの大学院で勉強していて、AIがプロダクトチームの働き方をどのように変えているのかを研究しています。このプログラムのおかげで、早い段階からAIエージェントに触れることができて、毎日AIを使ってプロトタイプやMVPをよく作っています。

大学院を修了したあとはアジアに戻る予定で、第一希望は日本です。というのも、以前、群馬大学に1年間留学した経験があり、東京には家族もいるし、自分も日本語の勉強を続けているので、今後は日本で長くキャリアを築いていきたいです。また、日本語、英語、中国語で仕事ができますので、さまざまな国の方と協力できる環境にも魅力を感じています。次の仕事では、これまでのプロダクトマネージャーとしての経験と、AIを取り入れた仕事の進め方を生かし、チームに貢献していきたいと考えています。

簡単ですが、以上です。本日はどうぞよろしくお願いいたします。
`
      }
    ]
  }
  ]
},

/* ═══════════ Behavioral ═══════════ */
{
  id: 'behavioral',
  label: 'Behavioral',
  section: 'General',
  groups: [
  {
    name: '關於你',
    items: [
      {
        q: '你後續的職涯規劃？三五年內想達成什麼？',
        zh: `
未來 3 年，我想在一個真的把 AI 放進產品核心的團隊裡，成為能同時做產品判斷與動手驗證的 PM。5 年後，我希望能負責一整條產品線，並把「AI 如何降低跨職能溝通成本」這件事從我的研究題目變成團隊實際在用的工作方式。

拆得更細一點：短期一年內，我想把既有的產品交付能力放進更大規模、更成熟的組織裡跑一次，補上我目前比較缺的規模化經驗。三年是 Senior PM，負責有明確商業指標的產品線。五年之後帶團隊，並且持續在 AI 產品化這個題目上保持第一手實作能力。
`,
        en: `
Over the next three years I want to be in a team that genuinely puts AI at the core of the product, as a PM who can both make the product judgement and validate it hands-on. In five years I'd like to own a whole product line, and turn "how AI lowers cross-functional communication cost" from my research topic into how a team actually works.

To break that down: in the first year, I want to run my existing delivery skills inside a larger, more mature organisation, which is the scale experience I'm currently missing. At three years, Senior PM, owning a product line with clear commercial metrics. Beyond five years, leading a team, while keeping first-hand building ability on the question of productising AI.
`
      },
      {
        q: '你對什麼有熱情？',
        zh: `
我對「**把 demo 變成真的能用的東西**」有近乎執著的興趣。做 agentic platform 那次讓我很確定：困難的從來不是模型本身，而是框對問題、驗證輸出、然後穩定重複這兩件事。

這也是為什麼我會把自己的租屋痛點做成篩選工具，把 Claude Code 包成給非工程背景同學的實作課程，把求職流程做成一條 pipeline。留學生找房資訊過載，我把自己的搜尋變成一個產品問題，定義 must-have 條件再做成比現成平台更精準的篩選工具；AI agent 的課我和工程師朋友合作，替倫敦帝國學院的非工程背景學生辦過三次。

**看到一個真實的痛點被收斂成一個可以每天使用的東西，是我最有成就感的時刻。**
`,
        en: `
I'm almost obsessive about **turning a demo into something people can actually use**. Building that agentic platform confirmed it for me: the hard part is never the model, it's framing the request correctly, verifying what comes back, and then doing those two things repeatably.

That's why I turned my own flat-hunting pain into a filtering tool, packaged Claude Code into a hands-on course for classmates with no engineering background, and built my job search into a pipeline. International students are drowning in listings, so I treated my own search as a product problem: define the must-haves, do the requirements analysis, then build something more precise than the platforms already out there. For the AI agent course, I worked with an engineer friend and we ran it three times for non-engineering students at Imperial College London.

**Watching a real pain point get narrowed down into something usable every day is the most satisfying part of the job for me.**
`
      },
      {
        q: '你的工作風格是什麼？',
        zh: `
我的工作風格可以濃縮成三件事：**先對齊再開工、用數據結束爭論、能自己做的先做出來給人看**。

開案前我會先把商業目標、技術限制與現場需求對齊成同一套優先順序，因為我在 Typus 重新設計 kickoff 到交付的流程時發現，返工大多來自一開始沒講清楚，那次調整讓返工週期降低 30%。過程中我偏好用 prototype 或數據來收斂討論，而不是靠會議上的說服力。時間分配上我用 80/20，把大部分時間留給真正需要判斷的事，重複性的事情盡量自動化。

#### 你怎麼跟工程師合作？

我盡量把需求寫到工程師不用回頭問我第二次的程度：user story、驗收條件、以及為什麼這件事排在前面。我自己會做 prototype，所以討論的時候可以直接給一個可以點的東西，而不是描述一個想像中的畫面。

#### 遠端、跨時區怎麼工作？

Typus 是完全遠端，17LIVE 是跨台日與東南亞。我的作法是把非同步的東西寫清楚，規格、決策紀錄、優先級理由都寫下來，把同步的時間留給真正需要即時討論的爭議點。
`,
        en: `
My working style comes down to three things: **align before starting, end arguments with data, and if I can build it myself, build it and show people**.

Before a project starts I align the business goal, the technical constraints and what the team on the ground actually needs into one set of priorities. When I redesigned the kickoff-to-delivery process at Typus, I found most rework came from things not being said clearly at the start, and that change cut the rework cycle by 30%. During the work, I prefer to close discussions with a prototype or with data rather than by being persuasive in a meeting. On time, I use 80/20: most of my time goes to the things that genuinely need judgement, and I automate the repetitive parts.

#### How do you work with engineers?

I try to write requirements to the point where an engineer doesn't have to come back and ask me a second time: user stories, acceptance criteria, and why this sits at the top of the list. I build prototypes myself, so in a discussion I can hand over something clickable instead of describing an imaginary screen.

#### How do you work remotely or across time zones?

Typus was fully remote, and 17LIVE spanned Taiwan, Japan and Southeast Asia. My approach is to write the asynchronous things down properly, the spec, the decision log, the reasoning behind priorities, and save synchronous time for the disagreements that genuinely need a live conversation.
`
      },
      {
        q: '你有哪些優點？',
        zh: `
三個。

第一，**AI-augmented building**。我自己做 prototype、儀表板與數據分析，不需要等別人排期就能驗證假設。

第二，**數據導向的優先級判斷**。訪談加 SQL 是我的基本配備，質化告訴我為什麼，量化告訴我有多少人。

第三，**跨文化溝通**。中英日三語，我在 17LIVE 是用日文做跨職能協作的。
`,
        en: `
Three.

First, **AI-augmented building**. I build my own prototypes, dashboards and analysis, so I can test a hypothesis without waiting for someone else's sprint.

Second, **data-led prioritisation**. Interviews plus SQL are my baseline kit: qualitative tells me why, quantitative tells me how many people.

Third, **cross-cultural communication**. I work in Mandarin, English and Japanese, and at 17LIVE I did cross-functional work in Japanese.
`
      },
      {
        q: '你的缺點是什麼？',
        zh: `
我以前太容易自己把事情做掉。因為我會 prototype、會拉數據，遇到卡住的環節我的第一反應是自己動手，短期看很有效率，但會讓團隊少了一次共同理解問題的機會，也讓我變成瓶頸。

我現在的作法是：**先問這件事三個月後應該由誰負責**，如果不該是我，我就把它做成一個示範版本加上文件交出去，而不是長期握在手上。這在 Typus 重新設計交付流程時特別明顯，我把自己的判斷寫成規格與 user story 模板，讓其他人也能照著跑。

---

另一個版本：

我對規模化的產品組織經驗還不夠，過去待的都是小而快的團隊，決策鏈短。我很清楚在大組織裡，**說服與對齊的成本本身就是工作的一部分**，所以我現在會刻意練習把決策理由寫成書面文件，而不是靠一次面對面的溝通解決。
`,
        en: `
I used to be too quick to just do things myself. Because I can prototype and pull data, my first instinct when something is stuck is to build it, which looks efficient in the short term but costs the team a shared understanding of the problem, and turns me into the bottleneck.

What I do now is **ask who should own this in three months' time**. If the answer isn't me, I build a reference version with documentation and hand it over, rather than holding onto it. That was very clear when I redesigned the delivery process at Typus: I wrote my own judgement into a spec and user-story template so other people could run it too.

---

Alternative version:

I don't have enough experience in a product organisation at scale. The teams I've been in were small and fast, with short decision chains. I'm very aware that in a large organisation, **the cost of persuading and aligning is itself part of the job**, so I now deliberately practise writing the reasoning behind a decision down, instead of solving it in one face-to-face conversation.
`
      },
      {
        q: '為什麼做 PM？',
        zh: `
因為我喜歡待在「使用者想要什麼」和「技術能做到什麼」中間那個位置。

我的背景是文化創意產業管理，不是本科出身的產品或工程，所以我很習慣把不同語言的人翻譯給彼此聽。在 17LIVE 我發現，把散落在客服、QA、資料團隊的回饋整合到同一個視圖，比任何一次會議都更能推動決策，那次讓問題處理速度提升了 15%。**那時候我確定，這就是我想長期做的事。**
`,
        en: `
Because I like sitting between what users want and what the technology can do.

My background is in cultural and creative industries management, not product or engineering, so I'm used to translating between people who speak different languages. At 17LIVE I found that pulling feedback scattered across support, QA and the data team into a single view moved decisions further than any meeting did, and it made issue resolution 15% faster. **That was when I knew this was what I wanted to do long term.**
`
      },
      {
        q: '什麼激勵你？',
        zh: `
兩件事。

一是**看到指標真的動了**，尤其是那種可以追溯回某個具體決定的變化。

二是和一群能力比我強的人一起把一個模糊的問題收斂掉的過程，團隊討論本身就是我覺得最有成就感的部分。
`,
        en: `
Two things.

One is **seeing a metric actually move**, especially the kind of change you can trace back to a specific decision.

The other is the process of narrowing down a vague problem with people who are better than me. The discussion itself is the part I find most rewarding.
`
      },
      {
        q: '除了薪水，你最重視什麼？',
        zh: `
三件事，依序是：**能不能學到我現在還沒有的東西**，特別是規模化的產品經驗；**團隊是不是高信任低政治**；以及**產品有沒有真實的使用者**。

錢重要，但我更在意兩年後我會變成什麼樣的 PM。
`,
        en: `
Three things, in order: **whether I'd learn something I don't already have**, particularly product experience at scale; **whether the team is high-trust and low-politics**; and **whether the product has real users**.

Money matters, but I care more about what kind of PM I'll be in two years.
`
      },
      {
        q: '講一個你的失敗經驗',
        zh: `
在 Typus 早期，我把一個功能的規格寫得太粗，覺得團隊夠小、口頭講清楚就好。結果進入開發後對驗收標準的理解不一致，來回改了兩輪，時程延誤。

我從那次得到的結論不是「要寫更多文件」，而是「**要寫對的文件**」。我後來重新設計了從 kickoff 到交付的流程，用競品分析佐證的規格加上 user story，把返工週期降低了 30%。
`,
        en: `
Early on at Typus, I wrote a feature spec too loosely. The team was small and I assumed talking it through would be enough. Once development started, we didn't share the same understanding of the acceptance criteria, we went through two rounds of rework, and the schedule slipped.

What I took from it wasn't "write more documentation", it was "**write the right documentation**". I redesigned the process from kickoff to delivery, using specs backed by competitor analysis plus user stories, and cut the rework cycle by 30%.
`
      }
    ]
  },
  {
    name: '經驗故事',
    items: [
      {
        q: '講一個你主動發起、不在你 KPI 上的事',
        zh: `
17LIVE 的用戶回饋散落在客服工單、QA 紀錄、應用商店評論與數據團隊的報表裡，沒有人擁有全貌，重複的問題會被重複討論。這件事不在我的 KPI 上，但我判斷它是很多產品爭論的根因，所以我主動提案。

我聯合客服、QA、資料與工程團隊，定義要追蹤的回饋分類與欄位，把多個來源整合到同一個共享視圖，並約定每週檢視的節奏。結果是**問題處理速度提升 15%**，團隊可以更早看到浮現中的問題，而不是等它變成大量客訴。

最難的不是做出儀表板，而是說服四個團隊願意用同一套分類。我的作法是先用他們現有的資料做出一個粗版，**讓他們看到價值再談規範**。
`,
        en: `
At 17LIVE, user feedback was scattered across support tickets, QA records, app store reviews and the data team's reports. Nobody had the whole picture, so the same problems kept getting rediscussed. This wasn't on my KPIs, but I judged it to be the root cause of a lot of product arguments, so I proposed it myself.

I brought together support, QA, data and engineering to define the feedback categories and fields we'd track, consolidated multiple sources into one shared view, and agreed a weekly review rhythm. **Issue resolution got 15% faster**, and the team could see problems emerging instead of waiting until they became a wave of complaints.

The hard part wasn't building the dashboard, it was getting four teams to agree on one taxonomy. My approach was to build a rough version out of the data they already had, **so they could see the value before we argued about the standard**.
`
      },
      {
        q: '講一個你用數據做決定的例子',
        zh: `
在 17LIVE，roadmap 上的候選項目多過可交付量，各團隊各有主張，我需要一套能讓大家接受的排序依據。

我與 UX Research 合作訪談一般用戶與頭部主播，同時用 SQL 分析行為數據與留存指標，把質化痛點與量化訊號交叉比對，再轉成有優先級的需求與 roadmap 提案。結果是**正向用戶回饋提升 30%、負向回饋降低 10%**。

**訪談讓你知道「為什麼」，數據讓你知道「有多少人」，兩個缺一個都會排錯優先級。**
`,
        en: `
At 17LIVE we had more roadmap candidates than we could deliver, and every team had its own view, so I needed a basis for ordering them that people would accept.

I worked with UX Research to interview both general users and top streamers, and in parallel used SQL to analyse behavioural data and retention. Cross-referencing the qualitative pain points against the quantitative signals, I turned that into prioritised requirements and a roadmap proposal. **Positive user feedback rose 30% and negative feedback dropped 10%.**

**Interviews tell you why, data tells you how many people. Without either one, you'll get the priority order wrong.**
`
      },
      {
        q: '講一個你從 0 到 1、在陌生領域交付的例子',
        zh: `
我不是金融或財經背景，卻要在 Typus 負責 Sui 鏈上的選擇權與永續合約產品。我必須在短時間內補足鏈上衍生品與交易機制的領域知識，同時把產品推上線。

我從競品分析與產品定義開始，制定 roadmap、管理 backlog、主持 sprint planning，在雙週發布節奏下交付 30 多項功能與優化。期間 **MAU 從約 1,000 成長到 20,000 以上，產品內存入資產價值從 800 萬美元成長到 2,000 萬美元。**

**領域知識可以補，補的方法是把競品拆開來看它們為什麼這樣設計，而不是只讀教學文件。**
`,
        en: `
I don't come from a finance background, but at Typus I owned options and perpetual futures products on the Sui chain. I had to close the domain gap on on-chain derivatives and trading mechanics quickly, while still shipping.

I started from competitor analysis and product definition, then set the roadmap, managed the backlog and ran sprint planning, delivering more than thirty features and improvements on a bi-weekly release cycle. Over that period **monthly active users went from around a thousand to over twenty thousand, and deposits in the product grew from 8 to 20 million US dollars.**

**Domain knowledge is learnable. The way to learn it is to take competitors apart and ask why they designed it that way, not just to read documentation.**
`
      },
      {
        q: '講一個你改善流程、降低返工的例子',
        zh: `
Typus 的 rebranding 專案期間，需求進到開發後常因理解落差而返工，時程受影響。我要找出返工的根因並修掉，而不是靠加班補。

我重新設計從 kickoff 到交付的流程，改用有競品分析佐證的規格加上 user story，並要求在 kickoff 就把取捨攤開來講清楚。**返工週期降低 30%。**

**返工幾乎都不是工程的問題，是決策沒有在最便宜的時間點被做掉。**
`,
        en: `
During a rebranding project at Typus, requirements kept getting reworked after they reached development because of gaps in understanding, and the schedule suffered. I wanted to find the root cause and fix it, rather than absorb it with overtime.

I redesigned the process from kickoff to delivery: specs backed by competitor analysis plus user stories, and a requirement that the trade-offs be put on the table at kickoff. **The rework cycle dropped 30%.**

**Rework is almost never an engineering problem. It's a decision that didn't get made at the point where it was cheapest to make.**
`
      },
      {
        q: '講一個你做 AI 產品的例子',
        zh: `
我和一位工程夥伴合作，做了一個每天處理 200 篇以上文章的 agentic 平台，串接 3 個 LLM，共 33 個模組，從爬取、解析、分類評分、加值、專家審核到 RAG。我負責產品：定義需求、定義評估標準，以及 LLM 的 A/B 測試框架。

我把「什麼叫做好的輸出」寫成可測量的評估標準，再用 A/B 框架比較不同模型組合的成本與品質。結果是**運行成本降低 83%，品質只犧牲 3%**，平台實際上線運行約 1.5 個月。

**困難的從來不是模型，而是把它產品化的工程紀律與評估設計。**
`,
        en: `
I worked with an engineering partner on an agentic platform processing more than 200 articles a day, wiring together three LLMs across 33 modules, from crawling and parsing to classification and scoring, enrichment, expert review and RAG. I owned the product side: the requirements, the evaluation criteria, and the A/B testing framework for the models.

I wrote down what "a good output" actually means as measurable evaluation criteria, then used the A/B framework to compare the cost and quality of different model combinations. We **cut running costs by 83% while giving up only 3% on quality**, and the platform ran in production for about a month and a half.

**The hard part is never the model. It's the engineering discipline and the evaluation design that turn it into a product.**
`
      },
      {
        q: '講一個跨文化、跨時區協作的例子',
        zh: `
在 17LIVE，功能要同時在台灣、日本與東南亞上線，各區市場需求與優先級不同。我負責協調跨區的上線節奏，並在日本市場用日文直接做跨職能溝通。

我在產品、工程、營運與管理層之間扮演轉譯者，把商業目標、技術限制與現場需求對齊成同一套優先順序；也與直播特效團隊合作優化日本市場的 V-Liver 觀看體驗，**有效觀看時長提升 10%**。

**跨文化協作最重要的不是語言，是知道對方需要多少 context 才敢做決定。**
`,
        en: `
At 17LIVE, features had to launch in Taiwan, Japan and Southeast Asia at the same time, and each market had different needs and priorities. I coordinated the release rhythm across regions, and in Japan I did the cross-functional communication directly in Japanese.

I acted as the translator between product, engineering, operations and leadership, aligning business goals, technical constraints and on-the-ground needs into one set of priorities. I also worked with the live-effects team to improve the V-Liver viewing experience for the Japanese market, which **lifted effective watch time by 10%**.

**The most important thing in cross-cultural work isn't the language. It's knowing how much context the other person needs before they're willing to decide.**
`
      },
      {
        q: '講一個你自己動手做的 side project',
        zh: `
來英國念書時，租屋資訊過載且分散；同時我發現碩士班同學對 agentic coding 工具幾乎完全陌生。這兩件都不是別人交辦的事，是我自己判斷值得做。

前者我用產品的方法處理：定義 must-have 條件、做需求分析，再做出比現成平台更精準的篩選工具。後者我把 Claude Code 包成一門實作課程，和工程師朋友合作，替倫敦帝國學院的非工程背景學生辦過三次。

工具解決了我自己的真實問題；課程證明非工程背景的人也能在幾小時內開始用 agent 做事。**這兩件事後來都變成我履歷上最能展現差異化的部分。**
`,
        en: `
When I came to the UK to study, rental information was overwhelming and scattered. At the same time I noticed my classmates on the master's programme had almost no exposure to agentic coding tools. Neither of these was assigned to me. I judged they were worth doing.

For the first, I treated it as a product problem: define the must-haves, do the requirements analysis, then build a filtering tool more precise than the platforms already available. For the second, I packaged Claude Code into a hands-on course and, with an engineer friend, ran it three times for non-engineering students at Imperial College London.

The tool solved a real problem of my own; the course proved that people without an engineering background can start getting work done with agents within a few hours. **Both ended up being the parts of my CV that differentiate me most.**
`
      }
    ]
  },
  {
    name: '動機與條件',
    items: [
      {
        q: '為什麼想加入我們公司？',
        zh: `
> Trip.com 版。換公司時把產品名與作業那段替換掉即可。

**第一層最直接：我自己就是重度使用者。** 我很喜歡旅遊，Trip.com 是我規劃行程時預設會打開的 App，介面怎麼走、搜尋邏輯、哪些資訊藏在第幾層，我都很熟。旅遊 App 其實非常吃使用習慣，一個使用者只要把操作練順了，通常就會一直用下去，我自己就是這樣。所以相對於一般應徵者，**我對這個產品的熟悉度不是查來的，是用出來的**。也因為熟，我做回家作業的時候才能自己走查台北到東京、台北到倫敦兩條航線的完整訂票流程，再加上台灣區 App Store 大約 500 則評論的主題分類，那份作業等於是我以使用者身分累積的判斷第一次被整理出來。

**第二層是舞台。** 我想進的是真正的大型跨國公司，因為這種環境提供的是密集的跨國合作機會：同一個功能在不同市場的表現差異、不同區域的團隊怎麼決策、總部跟在地怎麼分工。這些東西只有在夠大的組織裡才看得到，我想用它把視野打開，建立對全球市場的理解，而不是只熟一個市場。

**第三層是資源與結構。** 這種量級的公司在資源、預算、市場影響力上都有明顯優勢，而這對產品管理跟開發來說非常關鍵：你的假設有足夠的流量可以驗證，你的決定有資源可以真的落地。我過去待的是相對小的團隊，很多想法卡在沒有樣本數、沒有資源，所以我想去一個能把想法做完、也能被數據驗證的地方。

---

#### 通用備用版（換公司時用）

我對 **[公司]** 感興趣的原因是 **[具體的產品、使命，或你實際用過的體驗]**。我是一個會自己動手驗證的 PM，會做 prototype 也會做數據分析，所以我希望能在 **[對他們的具體貢獻]** 這件事上出力。我的背景橫跨金融科技（Typus）與 B2C 社群（17LIVE），跟你們在 **[他們的領域]** 的方向可以直接對上。
`,
        en: `
What draws me to **[company]** is **[the specific product, mission, or your own experience using it]**. I'm a PM who validates things hands-on, building prototypes and doing my own analysis, so where I'd like to contribute is **[specific contribution to them]**. My background spans fintech at Typus and B2C social at 17LIVE, which maps directly onto what you're doing in **[their space]**.
`
      },
      {
        q: '我們為什麼要錄取你？',
        zh: `
因為我把 **PM 的判斷力和動手能力放在同一個人身上**。

我有可被驗證的成果：Typus 的 MAU 從 1K 成長到 20K 以上、存入資產從 $8M 到 $20M；17LIVE 的正向回饋提升 30%。而且我自己做 prototype 和數據分析，**從洞察到交付的距離比較短**。加上中英日三語，我可以直接在跨區團隊裡工作。
`,
        en: `
Because I put **the judgement of a PM and the ability to build in the same person**.

I have results you can check: at Typus, monthly active users went from 1K to over 20K and deposits from $8M to $20M; at 17LIVE, positive feedback rose 30%. And because I build my own prototypes and do my own analysis, **the distance from insight to delivery is shorter**. On top of that I work in Mandarin, English and Japanese, so I can operate inside a cross-regional team directly.
`
      },
      {
        q: '你為什麼去念碩士？為什麼是英國、倫敦？',
        zh: `
說起來其實很單純：我小時候被哈利波特吸引，從那時候起就對英國有一種憧憬。高中的暑假我跟旅行團來過一次，走了不少知名景點，但那是一種「被帶著看」的體驗，看完之後反而更想長大以後自己來，用生活的方式真正待進這個文化裡，而不是隔著遊覽車的窗戶。所以念碩士的時候，我選了倫敦的 King's College London。

真的住下來之後，倫敦給我的東西比我想像的多：這裡的團隊幾乎都是多國籍組成的，一個產品從第一天就要面對不同語言與市場，這跟我在 17LIVE 同時做台灣、日本與東南亞的經驗完全對得上；而倫敦的金融科技聚落又剛好接上我在 Typus 的背景。**所以現在的答案已經不只是童年的憧憬了，是我想在這裡把職涯做起來。**

#### 那你打算待多久？會不會回去？

我是打算長期留下來的。畢業後可以走 Graduate Route，約兩年內不需要雇主擔保，我希望在這段時間內找到一個能一起長期走下去的團隊。
`,
        en: `
It started simply: I was drawn in by Harry Potter as a child, and had a fascination with Britain from then on. I came once on a school-holiday tour in high school and saw a lot of the famous sights, but it was very much a "being shown around" experience, and it left me wanting to come back on my own as an adult and actually live inside the culture rather than see it through a coach window. So when I chose a master's, I chose King's College London.

Once I'd actually lived here, London gave me more than I expected. Teams here are almost all multinational, and a product has to face different languages and markets from day one, which lines up exactly with my experience running Taiwan, Japan and Southeast Asia at 17LIVE. And London's fintech cluster connects straight back to my background at Typus. **So the answer now isn't just a childhood fascination, it's that I want to build my career here.**

#### How long do you plan to stay? Would you go back?

I plan to stay long term. After graduating I can move onto the Graduate Route, which means about two years without needing employer sponsorship, and I'd like to use that time to find a team I can grow with.
`
      },
      {
        q: '你的碩士跟職涯的關係是什麼？',
        zh: `
我在 17LIVE 和 Typus 都反覆遇到同一個問題：**產品和工程之間的翻譯成本非常高，PRD 到 SPEC 之間會流失大量資訊。**

我想把這件事研究清楚，所以去念了 Management and Technological Change，論文題目是 PRD 作為 boundary object，AI 在其中扮演什麼角色。**這不是離開產業，是帶著一個具體的問題去找方法。**
`,
        en: `
At both 17LIVE and Typus I kept hitting the same problem: **the translation cost between product and engineering is very high, and a lot of information is lost between the PRD and the spec.**

I wanted to understand that properly, so I took a master's in Management and Technological Change. My dissertation looks at the PRD as a boundary object and what role AI plays in it. **This wasn't leaving the industry, it was taking a specific problem with me to go find a method.**
`
      },
      {
        q: '為什麼是日本？',
        zh: `
我曾以交換生身分就讀群馬大學一年，具備商務日語能力（JLPT N1），在 17LIVE 也長期用日文做跨職能協作。加上家人在日本，我希望在當地建立長期職涯與生活，**這不是短期選項。**
`,
        en: `
I spent a year at Gunma University as an exchange student, I have business-level Japanese (JLPT N1), and at 17LIVE I did cross-functional work in Japanese over a long period. My family is also in Japan, and I want to build a long-term career and life there. **This isn't a short-term option for me.**
`
      },
      {
        q: '這一年在念書，中間的空檔怎麼解釋？',
        zh: `
這段時間我在念全職碩士，同時把產品實作沒有停下來：做了 agentic AI 平台的產品規劃、租屋篩選工具、辦了三次 AI agent 實作課程，也用 agent pipeline 管理自己的求職流程。這些都在我的 portfolio 上可以看到。
`,
        en: `
I've been on a full-time master's, and I didn't stop building during it: the product planning for the agentic AI platform, the rental filtering tool, three runs of the hands-on AI agent course, and an agent pipeline that manages my own job search. All of it is visible in my portfolio.
`
      },
      {
        q: '簽證、到職時間、地點、期望待遇',
        zh: `
| 問題 | 答案 |
|---|---|
| 需要擔保嗎？ | 表格只有 Yes/No 就選 **Yes**。有補充欄位就加：畢業後可走 Graduate Route，約兩年內不需要雇主擔保，之後才需要。 |
| 何時可到職？ | **2026 年 9 月畢業後**；實習類可即時。 |
| 地點彈性 | 以倫敦為主，可 on-site，也接受 remote 或 hybrid，願意 relocate。 |
| 薪資期望 | 英國主帶 **£50,000–£60,000**；日本主帶 **600〜800 萬円**。 |
`,
        en: `
| Question | Answer |
|---|---|
| Do you need sponsorship? | If the form only allows Yes/No, answer **Yes**. Where there's a free-text field, add: after graduating I can use the Graduate Route, which means no employer sponsorship is needed for about two years, only after that. |
| When can you start? | **After graduating in September 2026**; immediately for internships. |
| Location | London-based, happy to be on-site, also open to remote or hybrid, willing to relocate. |
| Salary expectation | UK: **£50,000–£60,000**. Japan: **¥6,000,000–8,000,000**. |
`
      }
    ]
  },
  {
    name: '反問',
    items: [
      {
        q: '你有什麼想問我們的嗎？',
        zh: `
#### 必問

1. Hiring manager 對這個角色**一年後的期待**是什麼？
2. 產品開發團隊怎麼分工、多少人？依功能分組還是依專案編組？
3. **需求從哪裡來？決策流程是什麼？**
4. 後續流程與時間線是什麼？面試有幾關、各關會是誰？

#### 高價值

5. 這個角色在**前 90 天**，什麼樣的結果會讓你們覺得找對人了？
6. **在你們公司做得好的人通常有什麼特質？**
7. 團隊目前在產品與工程之間，最常卡住的環節是什麼？
8. 這個職位的**產品決策權界線**在哪裡，PM 可以自己決定到什麼程度？
9. 明年你們最大的障礙會是什麼？

#### 看情境挑

| 情境 | 問題 |
|---|---|
| 他們主動來找你 | 想先了解你們在我的背景裡看到的是哪一塊？ |
| AI 導向公司 | AI 這條線目前佔營收多少？PM 要參與到什麼程度？非工程職也用 agent 嗎？ |
| 有海外據點 | 海外團隊負責什麼？跟台灣怎麼協作？ |
| 新開職位 | 這個角色以前是誰在兼？拆出來之後最想先解決的是什麼？ |
| PM 職缺 | 在你們公司，product manager 跟 project manager 差在哪？ |
| 接案公司 | 客戶臨時加需求或壓時程時，範圍與時程的決定權在 PM 還是業務？ |
| 日本線 | 這個角色的日文實際使用比重是多少？ |
| 先簽約聘 | Contractor 期間報酬怎麼計？轉正職時薪資怎麼銜接？有沒有試用期？ |
| 獵頭、HR | 除了語言之外，我還有什麼需要加強的地方？ |
`,
        en: `
#### Always ask

1. What does the hiring manager expect from this role **a year from now**?
2. How is the product team split up, and how many people? Grouped by function or by project?
3. **Where do requirements come from, and what does the decision process look like?**
4. What are the next steps and the timeline? How many rounds, and who would I meet?

#### High value

5. **In the first 90 days**, what result would make you feel you'd hired the right person?
6. **What do the people who do well here usually have in common?**
7. Where does the team most often get stuck between product and engineering?
8. **Where is the boundary of product decision-making** in this role? How much can the PM decide alone?
9. What will be your biggest obstacle next year?

#### Pick by situation

| Situation | Question |
|---|---|
| They approached you | I'd like to understand which part of my background stood out to you? |
| AI-driven company | How much of revenue does the AI line represent today? How involved is the PM? Do non-engineering roles use agents too? |
| Has overseas offices | What do the overseas teams own, and how do they work with Taiwan? |
| Newly created role | Who was covering this before? Once it's split out, what do you most want solved first? |
| PM role | In your company, what's the difference between a product manager and a project manager? |
| Agency or client work | When a client adds scope or compresses the timeline, who decides on scope and schedule, the PM or sales? |
| Japan track | How much of this role is actually conducted in Japanese? |
| Contractor first | How is contractor pay calculated, and how does it carry over when converting to full time? Is there a probation period? |
| Recruiter or HR | Aside from language, what else should I be strengthening? |
`
      }
    ]
  }
  ]
},

/* ═══════════ PM Domain ═══════════ */
{
  id: 'pm',
  label: 'PM Domain',
  section: 'General',
  groups: [
  {
    name: '方法論',
    items: [
      {
        q: '你怎麼決定優先級？你如何排序需求？',
        zh: `
我不相信單一公式，但我有固定的三個問題：**這個問題影響多少人**（量化訊號）、**影響有多痛**（訪談與 VOC）、以及**做了之後我們會不會更靠近這一季的目標**。

在 17LIVE 我就是用訪談加 SQL 交叉比對做這件事，質化告訴我為什麼、量化告訴我有多少人。爭不下來的時候，我會**把取捨明確寫出來讓決策者選**，而不是讓它懸在會議裡。
`,
        en: `
I don't believe in a single formula, but I do have three fixed questions: **how many people does this affect** (the quantitative signal), **how painful is it** (interviews and VOC), and **does doing it move us closer to this quarter's goal**.

At 17LIVE I did exactly this by cross-referencing interviews with SQL: qualitative told me why, quantitative told me how many people. When an argument can't be settled, I **write the trade-off out explicitly and let the decision-maker choose**, rather than leaving it hanging in a meeting.
`
      },
      {
        q: '你怎麼定義一個功能的成功指標？',
        zh: `
**先定義行為，再定義數字。** 我會先問「如果這個功能成功了，使用者會多做哪一件事」，再把那件事變成可以追蹤的指標。

接下來我用三個步驟。

#### 一、先決定主要指標是採用率還是完成率

這取決於我要衡量的是**一個新推出的東西**，還是**一條有起點終點的流程**。

| 主要指標 | 什麼時候用 | 分母 | 分子 |
|---|---|---|---|
| **採用率** | 新推出的功能 | 有機會用到的人（曝光過、符合資格） | 實際用過至少一次的人 |
| **完成率** | 有明確起點與終點的流程 | 開始這個流程的人 | 走到終點的人 |

**這兩個不能互換。** 訂票主流程沒有採用率可言，因為使用者是帶著明確意圖進來的，不存在「要不要採用」這件事；反過來，剛上線的新功能也不該只看完成率，因為完成率再高，沒人進來就沒有意義。我在 17LIVE 踩過這個坑：短影音的剪輯權限預設關閉，幾乎沒有主播會去打開設定頁，**供給端根本沒被打開。**

#### 二、配上診斷指標與護欄指標

| 類型 | 回答什麼 | 常用的 |
|---|---|---|
| **主要指標** | 有沒有達成目標 | 採用率、完成率 |
| **診斷指標** | 為什麼成功或失敗 | 各步驟轉化、點擊、停留時間、錯誤率 |
| **護欄指標** | 有沒有產生副作用 | 留存、客服量、載入時間 |

**主要指標只會告訴你成不成，它不會告訴你為什麼，也不會告訴你代價是什麼。** 診斷指標讓我知道要修哪一段，護欄指標讓我知道這個提升是不是拿別的東西換來的。

舉個例子，如果我把一個必要的說明往流程後面藏，完成率很可能會上升，但客服量會跟著上升。**那不是贏，那是把成本推到別的地方去。**

#### 三、用 A/B 測試驗證

三類定完之後我會用 A/B 去驗證，而不是上線之後看趨勢就下結論。我做 AI 平台的時候也是同一套：先寫清楚什麼叫做好的輸出，才有辦法用 A/B 框架比較成本與品質，最後拿到降本 83%、品質只掉 3% 的結果。

---

#### 套用示範：訂機票流程

| 角色 | 指標 |
|---|---|
| **主要** | 整條流程的完成率：進入訂票流程 → 完成付款（我在作業裡算出來是 6.5%） |
| **診斷** | 各步驟通過率，找出流失集中在哪一段 |
| **護欄** | 客服量、付款失敗率 |

這裡有一個陷阱值得單獨講：**訂票流程中間，使用者會離開去比價，這一步不能用完成率量。**

因為完成率是二元的，走完或沒走完，而**離開去比價的人可能會回來**。用完成率量這一步，等於把「暫時離開」全部記成「流失」，我會去修一個其實沒那麼壞的環節。

所以這一步我會加一個指標：**回流率，離開之後 30 分鐘或 24 小時內回來完成的比例。** 如果離開的人有七成會回來，那比價只是這個市場的正常行為，不是問題；如果只有一成回來，那才是要打的地方。**沒有回流率，我分不出這兩種情況。**

**那採用率什麼時候會回到這題？** 當我為了處理這個離開做了一個新東西，例如價格保證徽章或降價通知。那時候採用率是「看到的人裡有多少用了」，完成率是「用了的人裡有多少完成訂票」，**兩個要一起看**：採用率高但完成率沒動，代表有人用但沒解決問題；採用率低，代表功能藏太深，還沒到能判斷有沒有效的階段。
`,
        en: `
**Define the behaviour first, then the number.** I start by asking: if this feature works, what is the one thing users will do more of? Then I turn that into a trackable metric.

From there I work in three steps.

#### 1. Decide whether the primary metric is adoption or completion

That depends on whether I'm measuring **something newly launched** or **a flow with a defined start and end**.

| Primary metric | When to use it | Denominator | Numerator |
|---|---|---|---|
| **Adoption rate** | A newly launched feature | People who had the chance to use it (exposed, eligible) | People who used it at least once |
| **Completion rate** | A flow with a clear start and end | People who started the flow | People who reached the end |

**These two aren't interchangeable.** A booking flow has no adoption rate, because users arrive with clear intent and there's no question of whether to adopt it. Conversely, a newly launched feature shouldn't be judged on completion rate alone, because however high completion is, it means nothing if nobody arrives. I've been caught by that at 17LIVE: we shipped short-video editing with permissions off by default, almost no streamer ever opened the settings page, and **the supply side never opened up at all.**

#### 2. Add diagnostic and guardrail metrics

| Type | Answers | Typically |
|---|---|---|
| **Primary** | Did we hit the goal | Adoption rate, completion rate |
| **Diagnostic** | Why did it succeed or fail | Step-by-step conversion, clicks, dwell time, error rate |
| **Guardrail** | Did it cause side effects | Retention, support volume, load time |

**The primary metric only tells you whether it worked. It won't tell you why, and it won't tell you what it cost.** Diagnostic metrics tell me which step to fix; guardrails tell me whether the lift was bought with something else.

For example, if I hid a necessary disclosure later in the flow, completion rate would probably go up, and support volume would go up with it. **That isn't a win, it's moving the cost somewhere else.**

#### 3. Validate with an A/B test

Once those three are defined I'd validate with an A/B test, rather than shipping and reading the trend afterwards. I used the same approach on the AI platform: write down clearly what a good output means, and only then can you use an A/B framework to compare cost against quality. That's how we got to 83% lower cost with only a 3% quality drop.

---

#### Worked example: a flight booking flow

| Role | Metric |
|---|---|
| **Primary** | Completion rate for the whole flow: entering the booking flow through to completed payment (6.5% in my exercise) |
| **Diagnostic** | Pass-through rate stage by stage, to find where the drop-off concentrates |
| **Guardrail** | Support volume, payment failure rate |

There's one trap here worth calling out on its own: **partway through the booking flow, users leave to compare prices, and you can't measure that step with completion rate.**

Completion rate is binary, finished or not finished, and **the people who leave to compare prices may come back**. Measuring that step with completion rate records every temporary exit as a loss, and I'd end up fixing a stage that isn't actually that broken.

So for that step I'd add one metric: **return rate, the share of people who come back and complete within 30 minutes or 24 hours.** If 70% of the people who leave come back, comparison shopping is just normal behaviour in this market and isn't the problem. If only 10% come back, that's where the work is. **Without return rate, I can't tell those two situations apart.**

**So when does adoption rate come back into this question?** When I build something new to address that exit, a best-price guarantee badge or a price-drop alert, for example. Then adoption rate is "of the people who saw it, how many used it" and completion rate is "of the people who used it, how many completed the booking". **You need both**: high adoption with flat completion means people are using it but it isn't solving the problem; low adoption means the feature is buried too deep and we're not yet at the point where we can judge whether it works.
`
      },
      {
        q: '你怎麼做 product discovery？產品需求是怎麼產生的？',
        zh: `
質化加量化，兩邊都要。

17LIVE 時我和 UX Research 一起訪談一般用戶與頭部主播，同時追蹤留存與行為數據。另外我很依賴一個習慣：**把散落的回饋集中起來看。** 客服工單、QA 紀錄、商店評論這些通常沒人整理，但它們是**最便宜的洞察來源**，我在 17LIVE 就是把它們整合成儀表板，讓問題處理速度提升 15%。
`,
        en: `
Qualitative plus quantitative. You need both.

At 17LIVE I interviewed general users and top streamers with UX Research, while tracking retention and behavioural data. I also rely on one habit: **pull the scattered feedback into one place and look at it.** Support tickets, QA records, store reviews usually have nobody organising them, but they are **the cheapest source of insight you have**. At 17LIVE I consolidated them into a dashboard and made issue resolution 15% faster.
`
      },
      {
        q: '你跟工程師意見不合的時候怎麼辦？',
        zh: `
我會先分清楚是哪一種不同意，因為這兩種的處理方式完全相反。

**如果是可行性的不同意，那通常他們是對的。** 他們知道系統裡有什麼我不知道的東西。我的工作不是說服他們，是問清楚成本到底卡在哪，然後**改需求，而不是改人**。很多時候我要的那個價值有第二條路可以達成，只是我一開始把需求寫成了一個具體做法。

**如果是優先序的不同意，那是我的責任，不是他們的。** 代表我沒有把「為什麼是這個」講清楚。我的標準是：**要能讓他們自己複述出來這件事為什麼重要。** 講到他們能複述，通常爭議就沒了；講不到，那多半是我自己也還沒想清楚。

在 Typus 我發現大部分衝突其實來自 kickoff 沒講清楚，所以我後來把力氣往前放，重新設計流程之後返工降了 30%。
`,
        en: `
I first work out which kind of disagreement it is, because the two are handled in completely opposite ways.

**If it's a disagreement about feasibility, they're usually right.** They know things about the system that I don't. My job isn't to persuade them, it's to understand exactly where the cost sits, and then **change the requirement rather than change their mind**. Very often the value I want can be reached another way, and the problem was that I wrote the requirement as one specific implementation.

**If it's a disagreement about priority, that's my responsibility, not theirs.** It means I haven't explained why this one comes first. My standard is: **they should be able to repeat back, in their own words, why this matters.** Once they can, the argument usually disappears. If they can't, it usually means I hadn't thought it through either.

At Typus I found most conflict actually came from kickoff not being clear enough, so I moved my effort earlier, and after redesigning the process rework dropped 30%.
`
      },
      {
        q: '你怎麼管理時間、追蹤專案進度？',
        zh: `
80/20。我把 20% 的時間用來完成 80% 的任務，騰出來的時間拿去做 side project 和自動化。重複性的事情我盡量交給自動化處理，專注在真正需要判斷的工作上，我的求職 pipeline 就是這樣做的。
`,
        en: `
80/20. I use 20% of my time to clear 80% of the tasks, and spend what that frees up on side projects and automation. I hand repetitive work to automation and concentrate on the work that genuinely needs judgement. My own job-search pipeline is built exactly that way.
`
      }
    ]
  },
  {
    name: 'AI',
    items: [
      {
        q: '你怎麼用 AI 工具？你有實際動手做過 AI 嗎？',
        zh: `
我的分界點是**從 chatbot 變成 agent**。

一開始我跟大家一樣把 Claude 當查資料和潤稿工具，直到用了 Claude Code，它是在我的檔案裡工作、自己執行步驟，我就從「問問題」變成「交付工作」。現在 AI agent 是我生活、學業與工作的一部分：租屋篩選工具、AI agent 實作課程、我自己的求職 pipeline 都是這樣做出來的。

**模型從來不是難的部分，難的是框對請求、驗證回來的東西，然後穩定重複這兩件事。**
`,
        en: `
The turning point for me was **going from chatbot to agent**.

At first I used Claude like everyone else, for looking things up and polishing writing. Then I used Claude Code, which works inside my own files and executes steps by itself, and I shifted from asking questions to handing over work. AI agents are now part of my life, my studies and my work: the rental filtering tool, the hands-on AI agent course, and my own job-search pipeline were all built this way.

**The model was never the hard part. The hard part is framing the request correctly, verifying what comes back, and then doing those two things repeatably.**
`
      },
      {
        q: '你怎麼衡量 AI 功能的品質？',
        zh: `
用**可測量的評估標準加 A/B**，不能只看 demo 好不好。

在那個 33 模組、3 個 LLM 的平台上，我把「好的輸出」寫成評估標準，再用 A/B 框架比較不同模型組合，最後拿到運行成本降低 83%、品質只犧牲 3% 的結果。

**關鍵是要先接受一定會有品質取捨，然後把取捨的幅度量化，而不是假裝沒有。**
`,
        en: `
With **measurable evaluation criteria plus A/B testing**. You can't judge it on how good the demo looks.

On that platform with 33 modules and three LLMs, I wrote down what "a good output" means as evaluation criteria, then used an A/B framework to compare model combinations. We ended up cutting running cost by 83% with only a 3% drop in quality.

**The key is to accept up front that there will be a quality trade-off, and then quantify how big it is, rather than pretending there isn't one.**
`
      }
    ]
  }
  ]
},

/* ═══════════ Trip.com ═══════════ */
{
  id: 'tripcom',
  label: 'Trip.com',
  section: 'Company',
  groups: [
  {
    name: '作業追問',
    items: [
      {
        q: '你為什麼選台北到東京、台北到倫敦這兩條線？',
        zh: `
一條**短程高頻**、一條**長程高單價**，這兩條線剛好覆蓋兩種完全不同的決策模式。短程線使用者比的是方便和價格，長程線使用者會開始在意退改規則和售後保障。
`,
        en: `
One is **short-haul, high-frequency** and the other is **long-haul, high-value**. Between them they cover two completely different decision modes. On the short-haul route users compare convenience and price; on the long-haul route they start caring about change rules and after-sales protection.
`
      },
      {
        q: '你說我們在比價貨架上最貴。那你建議我們降價嗎？',
        zh: `
不建議。**價格是果，不是因。**

我建議的不是降價，是**讓深度在貨架上可見**。台灣使用者給五星評論主動稱讚的是產品深度：劃位窗口號碼、登機門、行李轉盤號碼在落地前就看得到。那些優勢現在在比價貨架上完全不可見，使用者在選的當下只看得到價格和一行全球通用文案。
`,
        en: `
No. **Price is the effect, not the cause.**

What I'd recommend isn't a price cut, it's **making the depth visible on the comparison shelf**. What Taiwanese users spontaneously praise in five-star reviews is product depth: seat and gate numbers, and the baggage carousel number, all visible before landing. None of that is visible on the comparison shelf today. At the moment of choosing, all the user sees is the price and one line of globally generic copy.
`
      },
      {
        q: '你把離開拆成四種結局，但我們現有埋點可能分不出來，你怎麼落地？',
        zh: `
先用**可代理的訊號**來分，同時把埋點需求提出來。

先用現有資料裡分得出來的訊號做近似分類，讓判斷可以先跑起來；同時把真正需要的事件列成需求排進去，等埋點補齊之後再回頭校正分類的準確度。
`,
        en: `
Start by splitting them with **proxy signals**, and raise the tracking requirement in parallel.

I'd use whatever signals the existing data can already separate to build an approximate classification, so the judgement can start running. At the same time I'd write up the events we actually need as a requirement and get them scheduled, then come back and correct the accuracy of the classification once the tracking is in place.
`
      }
    ]
  },
  {
    name: '跨區與總部協作',
    items: [
      {
        q: '你發現一個台灣專屬的問題，但要總部改全球的東西。你怎麼說服他們？',
        zh: `
我會先接受一個前提：**總部沒有義務為台灣改東西，我的工作是讓他們看到這件事對他們也划算。**

所以我會做三件事。

**第一，先量出這件事值多少錢，而不是先講它有多痛。** 台灣使用者不方便，這不是一個論點；「這一段每個月漏掉多少訂單、換算多少 GMV」才是。我在作業裡就是這樣做的：我沒有說「Trip.com 太貴」，我說的是兩條航線都比最便宜賣家高 5.0%，而且長程線相對航空公司官網只省 1.7%，價格優勢已經被稀釋掉了。**數字讓對話從偏好變成取捨。**

**第二，找出這個問題不只發生在台灣的證據。** 如果我只能說「台灣很特別」，那我在跟總部搶資源；如果我能說「台灣是這個問題最明顯的市場，但日本和韓國大概也有」，那我是在幫總部發現一個他們還沒看到的全球問題。**同一個需求，第二種講法的成功率高很多。**

**第三，把要求縮到最小可行。** 我不會一開始就要求改全球結帳流程。我會問：有沒有一個只影響單一市場的設定開關？能不能先在台灣做一次實驗，用結果去換後面的資源？**先要一個小的並且把它做出成績，比一次要一個大的更容易拿到第二次機會。**
`,
        en: `
I'd start by accepting one premise: **headquarters has no obligation to change something for Taiwan. My job is to show them it's worth it for them too.**

So I'd do three things.

**First, quantify what it's worth before talking about how painful it is.** "Taiwanese users find this inconvenient" is not an argument. "This step loses this many orders a month, which is this much GMV" is. That's what I did in the exercise: I didn't say "Trip.com is too expensive", I said both routes are 5.0% above the cheapest seller, and on the long-haul route we only save 1.7% against the airline's own site, so the price advantage has already been diluted away. **Numbers turn the conversation from preference into trade-off.**

**Second, find evidence that the problem isn't only happening in Taiwan.** If all I can say is "Taiwan is special", I'm competing for resources. If I can say "Taiwan is where this problem is most visible, but Japan and Korea probably have it too", then I'm helping headquarters find a global problem they hadn't seen. **Same request, and the second framing has a much higher success rate.**

**Third, shrink the ask to the smallest viable version.** I wouldn't open by asking to change the global checkout flow. I'd ask: is there a setting that only affects one market? Could we run one experiment in Taiwan and trade the result for the next round of resources? **Asking for something small and getting a result with it is a much better way to earn a second chance than asking for something big once.**
`
      },
      {
        q: '總部說功能全球統一，但台灣用戶明顯不吃。你會怎麼做？',
        zh: `
我會先確認我沒有在跟總部要一個他們給不起的東西。

以我在作業裡看到的例子來說：在 Skyscanner 同一張比價貨架上，排在 Trip.com 前面的賣家全部都主打在地支付，山富旅遊打「可用 LINE Pay 付款」，易遊網打「可分期付款」，而 Trip.com 那一格顯示的是一句全球通用的文案。總部的立場是合理的，結帳流程全球統一才維護得動，每接一個在地支付就是一次串接、一組風控規則、一份對帳邏輯和長期維運成本。

這個案子的關鍵在於**我要的不一定是「接 LINE Pay」**。我要的是「在貨架上讓台灣使用者看到一個他有感的理由」。**這兩件事的成本差了一個量級。**

所以我會把需求拆成三層，由便宜到貴。

**第一層，先改文案，不動系統。** 貨架上那一行字是全球通用的。如果台灣能換成一句講在地權益的話，這幾乎不花工程資源，而且可以直接 A/B 測。**如果連文案都測不出差異，那我對這個問題的判斷本來就是錯的，我應該先知道這件事，而不是先去要一個大功能。**

**第二層，如果文案有效，我才拿著那個結果去要支付整合。** 這時候我手上有的不是一個推測，是「同一批流量，換一行字，轉換率動了多少」。這是總部聽得懂的語言。

**第三層，如果連第二層都要不到，我就承認這一段短期內不會贏，把資源移到我自己能動的地方。** 台灣使用者給五星評論稱讚的是產品深度：劃位窗口號碼、登機門、行李轉盤號碼在落地前就看得到。**那些深度在比價貨架上完全不可見。** 讓這些既有優勢被看見，是我不需要總部點頭就能推的事。

我不會把它處理成「總部不理解台灣」。多數時候總部不是不理解，是**他們手上的成本結構跟我看到的收益不在同一張表上**，我的工作是把那張表補起來。

而且說實話，我猜這件事你比我更熟。你在雪梨、總部在上海，你要推的每一件事應該都會經過這個過程。
`,
        en: `
I'd first make sure I'm not asking headquarters for something they can't afford to give.

Take the example from my exercise. On the same Skyscanner comparison shelf, every seller ranked above Trip.com leads with local payment: one advertises LINE Pay, another advertises instalments, while the Trip.com row shows a line of globally generic copy. Headquarters' position is reasonable: a unified global checkout is the only version you can maintain. Every local payment method you add is an integration, a set of risk rules, reconciliation logic and ongoing maintenance cost.

The key to this case is that **what I want isn't necessarily "integrate LINE Pay"**. What I want is for a Taiwanese user to see a reason that means something to them, on the shelf. **Those two things differ in cost by an order of magnitude.**

So I'd break the request into three layers, cheapest first.

**Layer one: change the copy, don't touch the system.** That line on the shelf is globally generic. If Taiwan can swap it for a line about a local benefit, that costs almost no engineering and can be A/B tested directly. **If even the copy shows no difference, then my read on this problem was wrong to begin with, and I'd rather find that out first than go and ask for a big feature.**

**Layer two: if the copy works, then I take that result and ask for the payment integration.** At that point what I'm holding isn't a hypothesis, it's "same traffic, one line changed, conversion moved by this much". That's a language headquarters understands.

**Layer three: if I can't even get layer two, I accept this segment isn't winnable in the short term and move my resources to what I can control.** What Taiwanese users praise in five-star reviews is product depth: seat and gate numbers and the baggage carousel visible before landing. **None of that depth is visible on the comparison shelf.** Making those existing advantages visible is something I can push without headquarters signing off.

I wouldn't frame this as "headquarters doesn't understand Taiwan". Most of the time they do understand. It's that **the cost structure on their side and the upside I'm seeing aren't on the same spreadsheet**, and my job is to complete that spreadsheet.

And honestly, I suspect you know this better than I do. You're in Sydney and headquarters is in Shanghai, so everything you push probably goes through this same process.
`
      },
      {
        q: '你交給我的東西，我要能快速看懂並且往上帶。你會怎麼設計報告格式？',
        zh: `
我的原則是：**你的時間應該花在做決定，不是花在理解格式。**

所以我會固定三件事。

**第一，骨架固定。** 同一組漏斗階段、同一組指標定義，每個月長得一樣。市場差異放在同一個欄位裡說明，不要每個月自己一套結構。這樣看第三次的時候，你可以直接跳到變動的地方。

**第二，把「需要你拍板」跟「知會你」分開，而且放在最前面。** 我看過太多報告是一路鋪陳到最後才出現要求。我會反過來：最上面就是這次需要你決定什麼、我的建議是什麼、為什麼。中間是證據。最後才是完整數據。**你如果只有兩分鐘，看最上面那一段就夠了。**

**第三，數字口徑寫死並且不隨便改。** 如果我這個月改了某個指標的定義，我會標出來並且同時附上舊口徑，不然趨勢就斷了。

我這樣設計還有一個私心：**如果格式是固定的，你之後要拿去跟其他市場並排看，或是往上帶，都不用我重做一次。**
`,
        en: `
My principle is: **your time should go into making decisions, not into understanding the format.**

So I'd fix three things.

**First, a fixed skeleton.** The same funnel stages, the same metric definitions, looking the same every month. Market differences get explained in the same field rather than restructuring the document each time. By the third month you can jump straight to what changed.

**Second, separate "needs your decision" from "for your awareness", and put it at the top.** I've seen too many reports that build up for pages and only surface the ask at the end. I'd invert it: the top says what you need to decide, what I recommend, and why. The middle is the evidence. The full data comes last. **If you only have two minutes, the top section is enough.**

**Third, lock the metric definitions and don't change them casually.** If I do change a definition in a given month, I flag it and include the old definition alongside, otherwise the trend line breaks.

There's a selfish reason for designing it this way too: **if the format is fixed, when you want to put it side by side with another market or take it upwards, I don't have to redo it.**
`
      },
      {
        q: '你怎麼判斷一個市場差異是「文化差異」還是「單純產品沒做好」？',
        zh: `
我的預設是**先假設是產品沒做好**，因為「這是文化差異」是一個太方便的結論，它一旦被接受，就沒有人要再往下查了。

我會用三個檢查來區分。

**第一，同一個市場裡有沒有人做得比我們好？** 如果台灣使用者「就是不喜歡線上付款」，那所有賣家的轉換率都該一樣差。但我在作業裡看到的是，排在我們前面的賣家在做同一件事而且贏了。**只要有競爭者在同一個文化裡做成了，那就不是文化問題。**

**第二，這個差異在其他市場有沒有同方向的弱訊號？** 如果台灣特別明顯、日韓也有一點，那它比較可能是一個全球性的產品缺陷在台灣被放大，而不是台灣獨有。

**第三，如果真的是文化差異，它應該有一個說得出來的機制。** 「台灣人比較謹慎」不是機制。「台灣信用卡滲透率高、分期是常態消費行為，所以分期選項在高單價品類上是決策點」才是機制。**講不出機制的文化差異，通常是還沒查完。**

分清楚很重要，因為結論完全不同：產品沒做好要修，真的文化差異要在地化，而**把產品缺陷誤判成文化差異，等於決定永遠不修它。**
`,
        en: `
My default is to **assume the product wasn't built well**, because "it's a cultural difference" is far too convenient a conclusion. Once it's accepted, nobody investigates any further.

I use three checks to tell them apart.

**One: is anyone doing better than us in the same market?** If Taiwanese users simply "don't like paying online", every seller's conversion should be equally bad. But what I saw in the exercise is that the sellers ranked above us are doing the same thing and winning. **If a competitor has made it work inside the same culture, it isn't a cultural problem.**

**Two: is there a weak signal in the same direction in other markets?** If it's very pronounced in Taiwan and slightly present in Japan and Korea, it's more likely a global product flaw amplified in Taiwan than something unique to Taiwan.

**Three: if it really is cultural, you should be able to state the mechanism.** "Taiwanese people are more cautious" isn't a mechanism. "Credit card penetration in Taiwan is high and instalments are normal consumer behaviour, so the instalment option becomes a decision point in high-value categories" is a mechanism. **A cultural difference you can't state a mechanism for usually means the investigation isn't finished.**

Getting this right matters because the conclusions are opposite: a product flaw gets fixed, a genuine cultural difference gets localised, and **misreading a product flaw as a cultural difference is a decision never to fix it.**
`
      },
      {
        q: '台灣跟東南亞市場相似度高嗎？哪些經驗可以互相搬，哪些不行？',
        zh: `
表層很像，底層完全不一樣，而這正是我覺得經驗可以搬「方法」但不能搬「答案」的原因。

**相似的地方是：兩邊都是行動優先，而且勝負都在支付這一段決定。** 我在作業裡發現，台灣比價貨架上排在我們前面的賣家全部主打在地支付。東南亞更極端，Traveloka 基本上就是靠在地支付加 mobile-first 打出來的，行動裝置佔 OTA 流量七成五以上。

**但底層機制是相反的。** 台灣是信用卡生態，所以在地支付的答案是 LINE Pay 和分期。東南亞信用卡滲透率低，跑的是政府建的 QR 軌道加電子錢包，泰國是 PromptPay、印尼是 QRIS、越南是 VietQR，而且**錢包還各國分裂互不相通**，菲律賓是 GCash、印尼是 GoPay 和 OVO、越南是 MoMo。**在台灣，「接一個在地支付」是一件事；在東南亞，那是六件事。**

競爭結構也不同。台灣是混戰，東南亞有 Agoda 這種在越南拿到六成線上旅客的主導者。**面對混戰和面對一個主導者，該打的仗根本不一樣。**

所以我的答案是：**可以搬的是「先去比價貨架上看使用者實際看到什麼」這個方法，不能搬的是任何一個具體結論。** 如果有人把台灣的 LINE Pay 結論直接搬到印尼，那個提案第一頁就錯了。

不過我也想誠實說，這個職位是 base 在台灣，東南亞我是從外面看的。我對台灣的判斷是我自己查出來的，對東南亞的判斷來自公開資料，這兩者的可信度我會分開講。
`,
        en: `
They look similar on the surface and are completely different underneath, and that's exactly why I think you can transfer the method but not the answer.

**What's similar: both are mobile-first, and both are decided at the payment step.** In my exercise I found every seller ranked above us on the Taiwan comparison shelf leads with local payment. Southeast Asia is more extreme still. Traveloka essentially built its position on local payment plus mobile-first, and mobile is over 75% of OTA traffic there.

**But the underlying mechanism is the opposite.** Taiwan is a credit card ecosystem, so the local payment answer is LINE Pay and instalments. Southeast Asia has low card penetration and runs on government-built QR rails plus e-wallets: PromptPay in Thailand, QRIS in Indonesia, VietQR in Vietnam. And **the wallets are fragmented country by country and don't interoperate**: GCash in the Philippines, GoPay and OVO in Indonesia, MoMo in Vietnam. **In Taiwan, "add a local payment method" is one piece of work. In Southeast Asia, it's six.**

The competitive structure differs too. Taiwan is a scrap between many players; Southeast Asia has a dominant player in Agoda, which takes around 60% of online travellers in Vietnam. **Fighting in a scrap and fighting a market leader are not the same fight.**

So my answer is: **what transfers is the method, going to the comparison shelf and looking at what the user actually sees. What doesn't transfer is any specific conclusion.** If someone took the Taiwan LINE Pay conclusion straight to Indonesia, that proposal is wrong on page one.

I should also be honest that this role is based in Taiwan and I'm looking at Southeast Asia from the outside. My read on Taiwan is something I researched myself; my read on Southeast Asia comes from public sources, and I'd keep those two levels of confidence separate.
`
      },
      {
        q: '你在 17LIVE 同時做台、日、東南亞，講一個同功能不同市場結果不同的例子',
        zh: `
V-Liver Avatar，也就是虛擬化身。同一個功能在台灣和日本的接受度完全不同。

日本市場對虛擬形象的接受度高很多，我跟直播特效團隊合作優化日本市場的 V-Liver 觀看體驗，**有效觀看時長提升 10%**。同一套東西在其他市場沒有出現同樣的效果。

那次讓我養成一個習慣：看到市場之間的落差，先問這是真的市場差異，還是我們在那個市場根本沒把產品做好。
`,
        en: `
The V-Liver avatar, the virtual persona feature. The same feature was received completely differently in Taiwan and Japan.

Acceptance of virtual personas is far higher in the Japanese market. I worked with the live-effects team to improve the V-Liver viewing experience for Japan, and **effective watch time rose 10%**. The same feature didn't produce that effect in the other markets.

That's where I picked up a habit: when I see a gap between markets, ask first whether it's a genuine market difference, or whether we simply didn't build the product well in that market.
`
      }
    ]
  },
  {
    name: '成長與數據',
    items: [
      {
        q: '台灣訂單轉換率掉 5%，你第一週做什麼？',
        zh: `
**第一天我不會找原因，我會先確認這個下降是真的。** 埋點有沒有壞、發版有沒有換掉事件、指標口徑有沒有被改、資料管線有沒有延遲。同時看同期有沒有發版或實驗。而且我會跟去年同期比，不是只跟上週比，因為旅遊季節性極強。**在確認數字是真的之前，任何原因推測都是浪費時間。**

**第二天到第三天，切維度，看下降是全面還是局部。** 時間、平台與版本、流量來源、新舊用戶、產品線。**斷崖式下跌通常是技術或發版，緩降通常是市場或競品。** 這一步只有一個目的：縮小範圍。

**第四天到第五天，放回漏斗定位到哪一段。** 搜尋、結果頁、詳情、填資料、付款、確認。**轉換率下降不會是「轉換率」出問題，是其中某一段。** 逐段比通過率，找差基準線最多的那一段。

**然後分內因外因。** 內因是我們自己做的：發版、實驗、價格或庫存變動、付款成功率、第三方 API。外因是控制不了的：季節、競品促銷、航班供給、匯率。

**第一週結束時我要交出的不是答案，是一個已經被收斂到一兩個候選的假設，加上驗證它需要什麼。** 如果第一週就給一個很篤定的原因，那多半是我跳過了第一步。
`,
        en: `
**On day one I wouldn't look for causes, I'd confirm the drop is real.** Is the tracking broken, did a release rename an event, was a metric definition changed, is the data pipeline delayed? At the same time, check whether a release or experiment went out in the same window. And I'd compare against the same period last year, not just last week, because travel is intensely seasonal. **Until the number is confirmed real, any theory about causes is wasted time.**

**Days two and three: cut by dimension and see whether the drop is broad or local.** Time, platform and version, traffic source, new versus returning users, product line. **A cliff-edge drop is usually technical or release-related; a gradual decline is usually market or competitor.** This step has one purpose: narrow the range.

**Days four and five: put it back on the funnel and locate the segment.** Search, results page, detail page, passenger details, payment, confirmation. **A conversion drop is never a problem with "conversion", it's a problem in one segment.** Compare pass-through rates stage by stage and find the one furthest from baseline.

**Then separate internal from external causes.** Internal is what we did: releases, experiments, price or inventory changes, payment success rate, third-party APIs. External is what we can't control: seasonality, competitor promotions, flight supply, exchange rates.

**What I'd hand over at the end of week one isn't an answer, it's a hypothesis narrowed to one or two candidates, plus what's needed to verify it.** If I gave you a confident single cause in week one, it would usually mean I skipped the first step.
`
      },
      {
        q: '給你台灣新用戶 +20% 的目標，你從漏斗哪一段下手？',
        zh: `
我不會先列一堆點子，我會先問**哪一段的天花板最高**，因為同樣的工，打在不同段的回報差很多。

而以台灣來說，我做完作業之後的判斷是：**新用戶的漏斗第一段根本不在我們的 App 裡，它在比價貨架上。**

一個台灣的新用戶通常不是先想到 Trip.com，他是在 Skyscanner 這種地方看到一排賣家然後選一個。**在那個當下他能看到的只有價格和一行文案。** 而我實測的結果是，兩條航線我們都是最貴的 OTA，比最便宜賣家高 5.0%，而且排在我們前面的賣家全部都主打在地支付，我們打的是一句全球通用文案。

也就是說，**如果只優化 App 內的註冊流程，我是在優化一群根本沒進來的人。**

所以我的順序會是：**先確認貨架這一段的量體有多大。** 如果新用戶主要從那裡來，那優先打的是「在貨架上給一個非價格的理由」，因為降價不是我能做也不該做的。台灣使用者五星評論主動稱讚的是產品深度，劃位窗口號碼、登機門、行李轉盤在落地前就看得到，**那些優勢現在在貨架上完全不可見，這是我認為最被低估的一段。**

如果資料顯示新用戶其實主要來自別的通路，那我上面這整套判斷就要重來，我會先去看那個數字。
`,
        en: `
I wouldn't start by listing ideas. I'd start by asking **which segment has the highest ceiling**, because the same amount of work returns very differently depending on where you apply it.

For Taiwan specifically, my read after doing the exercise is that **the first segment of the new-user funnel isn't inside our app at all. It's on the comparison shelf.**

A new Taiwanese user usually doesn't think of Trip.com first. They see a row of sellers on something like Skyscanner and pick one. **In that moment, all they can see is a price and one line of copy.** What I found in testing is that we're the most expensive OTA on both routes, 5.0% above the cheapest seller, and every seller ranked above us leads with local payment while we run a line of globally generic copy.

Which means **if I only optimise the in-app signup flow, I'm optimising for a group of people who never arrived.**

So my order would be: **first confirm how much volume that shelf segment actually represents.** If new users mainly come from there, the priority is giving them a non-price reason on the shelf, because cutting price is neither something I can do nor something I should do. What Taiwanese users praise in five-star reviews is product depth, seat and gate numbers and the baggage carousel visible before landing. **None of that is visible on the shelf today, and that's the segment I think is most underrated.**

If the data shows new users actually come mostly from another channel, then this whole read has to be redone, and I'd go look at that number first.
`
      },
      {
        q: 'GMV、轉換率、新用戶只能保一個，你保哪個？',
        zh: `
**我保轉換率。** 但在講理由之前，我想先把 GMV 拿掉，因為它跟另外兩個不是同一種東西。

**GMV ＝ 流量 × 轉換率 × 客單價**

GMV 是平台上成交的機票和飯店總金額，**這不是我們的收入，我們拿的是其中的抽成。** 而它可以完全拆成上面那個公式。**所以 GMV 不是第四個選項，它是另外那些相乘的結果。** 「我保 GMV」等於「我三個都要」，**那是唯一一個等於沒選的答案。**

順帶一提，公式裡有一個常被忘記的槓桿是**客單價**。台北到倫敦的票價基數遠大於台北到東京，**光是訂單結構往長程移動，GMV 就會動，不用碰流量也不用碰轉換率。** 今天我不選它，但它是真實存在的第三條路。

---

**剩下流量和轉換率。但在回答哪個之前，我想先問一件事：這個轉換率是哪一段的轉換率。** 因為同樣叫轉換率，口徑不同，數字差六倍以上。

| 口徑 | 大致水準 |
|---|---|
| **OTA 站內**（Booking、Expedia） | **12% 到 15%**，因為使用者帶著明確意圖進來 |
| 飯店官網 | 1.5% 到 2.5% |
| 一般電商 | 約 2.7% |

**所以「多少算好」這題本身沒有答案，除非先講清楚是從哪裡量到哪裡。** 我作業裡算的 6.5% 是「進入訂票流程到完成」，那又是第三種口徑，不能拿去跟上面任何一個比。

---

定了口徑之後，判斷規則就簡單了：**明顯低於同口徑的水準**，代表有空間，focus 轉換率；**已經接近或高於**，代表天花板不高，再擠也擠不出多少，這時候該去做流量。

**以台灣來說我會保轉換率，有兩個證據。**

**第一，漏斗的形狀不對。** 我算出來有離開線的四個階段吃掉 **96.5%** 的流失。**問題不是分散的，是集中的。集中就代表修得動。**

**第二，這是整個產業的已知弱點。** 旅遊是全電商放棄率最高的品類，大約 **81.7%**，一般電商是 70%。而**其中約 37% 跟付款有關**：付款選項不夠、不信任、卡片被拒。這跟我在台灣比價貨架上看到的完全對得起來，**排在我們前面的賣家全部主打在地支付。** 也就是說，台灣的問題剛好落在**這個產業最會漏、而且已經知道怎麼修**的那一段。

**那什麼時候我會反過來去做新用戶？** 當轉換率已經在合理水準，但根本沒什麼人進來的時候。**那時候再優化漏斗，是在對一小群人做微調，回報有限。**

**我選轉換率不是因為它比較重要，是因為台灣現在的瓶頸在那裡。** 如果數字長得不一樣，我的答案會反過來。
`,
        en: `
**I'd protect conversion rate.** But before the reasoning, I'd set GMV aside, because it isn't the same kind of thing as the other two.

**GMV = traffic × conversion rate × average order value.** GMV is the total value of flights and hotels booked on the platform. It isn't our revenue, we take a commission out of it. And it decomposes completely into that formula.

**So GMV isn't a fourth option, it's the product of the others.** Saying "I'd protect GMV" is saying "I want all three", and **it's the only answer that amounts to choosing nothing.** Worth noting the lever people forget in that formula is **average order value**: Taipei to London has a far larger fare base than Taipei to Tokyo, so **shifting order mix toward long-haul moves GMV without touching traffic or conversion at all.** Not what I'd choose today, but it's a real third path.

---

**That leaves traffic and conversion. Before I pick, I'd want to ask which conversion rate we mean**, because the same word covers numbers that differ by six times or more.

| Definition | Rough level |
|---|---|
| **OTA on-site** (Booking, Expedia) | **12 to 15%**, since users arrive with clear intent |
| Hotel direct sites | 1.5 to 2.5% |
| General ecommerce | About 2.7% |

**So "what's good" has no answer until we agree what's being measured from where to where.** The 6.5% in my exercise was entry-to-completion inside the booking flow, which is a third definition again.

---

Once the definition is fixed, the rule is simple. **Clearly below the comparable benchmark** means there's room, so fix conversion. **At or above it** means the ceiling is low and I should go get traffic instead.

**For Taiwan I'd protect conversion, on two pieces of evidence.**

**First, the shape of the funnel is wrong.** The four stages with exit paths account for **96.5% of drop-off**. The problem isn't diffuse, it's concentrated, and concentrated means fixable.

**Second, this is a known weakness of the whole category.** Travel has the highest cart abandonment in ecommerce at around **81.7%**, against about 70% generally, and **roughly 37% of that is payment related**: too few payment options, lack of trust, declined cards. That lines up exactly with what I saw on the Taiwan comparison shelf, where **every seller ranked above us leads with local payment.** So Taiwan's problem sits precisely where this category leaks most and where the fix is already understood.

**When would I flip to new users?** When conversion is already at a reasonable level but very few people are arriving. Optimising a funnel for a small group is a low-return exercise.

**I'm choosing conversion because that's where Taiwan's bottleneck is, not because it's inherently more important.** If the numbers looked different, my answer would flip.
`
      },
      {
        q: '你怎麼決定實驗要跑多久、要多少樣本？',
        zh: `
統計那一層通常是實驗平台和資料科學的同事在管，樣本量計算、顯著性判定、分流健康度，這些平台多半已經內建。**所以與其說我怎麼算，我想講我在這件事裡實際扛的是什麼。**

**第一件是定義主要指標，還有護欄指標。** 主要指標大家都會定，**護欄常常被忘記，但在旅遊業特別重要。**

舉個例子。如果我把行李費和退改規則往流程後面藏，**轉換率很可能會上升**，因為使用者少看到一個猶豫的理由。**但那不是贏，那是把成本推到客服和退款去。** 所以這種實驗我一定會同時盯客訴率和取消率。**轉換率上升但服務成本跟著上升，那個實驗我不會採納。**

**第二件是決定多小的提升才值得做。** 這是樣本量計算的輸入值，但它是商業判斷不是統計判斷。**如果提升 1% 就要做，需要的樣本會遠大於「要 5% 才做」。** 所以我會先跟團隊把這件事講定：**多小的提升我們才會真的採納？這題沒有答案的話，實驗跑再久都沒用，因為結果出來我們不知道要拿它怎麼辦。**

**第三件是時長，而決定時長的是週期不是樣本。** 就算樣本一週就集滿，我還是會跑完整週，因為平日和週末行為不一樣。旅遊要更小心，**季節性和連假可以整個蓋過實驗效果**，跨到連假的我會特別標註。

**最後，如果流量根本不足以跑出結論，我會直接說這個實驗做不出來。** 改用走查、客服紀錄、使用者訪談去定位，接受我沒辦法精準歸因。**硬跑一個註定達不到顯著的測試然後解讀雜訊，比不做還糟。**

#### 被追問時再展開

**這件事該不該用實驗？** 不是所有東西都值得測。明顯的 bug 修掉就好，法規要求沒得選。而且**實驗流量是稀缺資源**，同時能跑的實驗有限，每一個都在吃流量。所以我會先回答一個問題：這個問題值不值得佔一個實驗位。

**停止規則要事前講好。** 不中途偷看就下結論，**看越多次越容易看到假的顯著**。什麼結果算贏、什麼時候停，我會在開始前就跟團隊寫下來，不然事後很容易變成挑一個好看的時間點收工。

**統計顯著不等於值得上線，這個判斷是我的不是資料科學的。** 一個改動可能顯著，但效果小到撐不起長期維護成本。反過來也可能沒達到顯著，但方向對、成本極低，那我會選擇先上再觀察。**資料科學告訴我「這個差異是不是真的」，要不要做是我的決定。**
`,
        en: `
The statistics layer is usually owned by the experimentation platform and the data science team: sample size calculators, significance thresholds, assignment health checks are typically built in. **So rather than how I'd calculate it, let me say what I'd actually own.**

**First, defining the primary metric and the guardrail metrics.** Everyone sets a primary metric. **Guardrails get forgotten, and they matter a lot in travel.**

For example, if I pushed baggage fees and change rules later in the flow, **conversion would probably go up**, because users see one fewer reason to hesitate. **But that isn't a win, it's shifting cost onto support and refunds.** So I'd watch complaint rate and cancellation rate alongside it. **Conversion up with service cost up is not a result I'd ship.**

**Second, deciding how small a lift is worth acting on.** That's the input to every sample size calculation, but it's a business judgement, not a statistical one. **If a 1% lift is worth shipping, the sample needed is far larger than if we'd only act on 5%.** So I'd settle that with the team first: **how small a lift would we genuinely act on? Without that, no run length helps, because we won't know what to do with the result.**

**Third, run length is set by cycles, not by sample.** Even if the sample fills in a week, I'd run the full week, because weekday and weekend behaviour differ. Travel needs more care: **seasonality and public holidays can swamp the effect entirely**, so I'd flag any test spanning one.

**And if traffic simply can't reach a conclusion, I'd say so.** I'd switch to qualitative work, walking the flow, reading support tickets, talking to users, accepting I can't attribute precisely. **Running a test that can never reach significance and then reading the noise is worse than not running it.**

#### If pushed

**Should this even be an experiment?** Not everything is worth testing. Obvious bugs just get fixed, regulatory changes aren't optional. And **experiment traffic is a scarce resource**, only so many can run at once. So I'd first answer whether this question deserves a slot.

**Stopping rules get agreed up front.** No peeking and calling it early, **the more you look, the more false positives you see**. What counts as a win and when we stop gets written down before we start.

**Statistical significance isn't the same as worth shipping, and that call is mine, not data science's.** A change can be significant but too small to justify long-term maintenance. It can also miss significance while being directionally right and nearly free, in which case I'd ship and keep watching. **Data science tells me whether the difference is real. Whether we do it is my decision.**
`
      }
    ]
  },
  {
    name: '挑戰題',
    items: [
      {
        q: '你沒做過 OTA、旅遊，最大的落差在哪？',
        zh: `
最大的落差是**供給端**。

我在 Typus 和 17LIVE，產品是我們自己的。價格、規則、庫存，我們想改就能改。**OTA 不是這樣，機票的價格、艙等規則、退改條件、庫存，全部來自航空公司和訂位系統，我不能改。我只能決定怎麼呈現它、什麼時候呈現它。**

這件事在我做作業的時候被打到過一次。我發現在台北到倫敦這條線上，阿聯酋官網比 Trip.com 貴了 658 元，使用者還是選官網。一開始我以為那是我們的問題，後來想清楚：**那個差價買的是航空公司自己的售後保障，而那個東西本來就不在我們手上。** 我能做的不是把它變成我們的，是決定要不要在那條線上換一種打法。

這就是我目前最明顯的知識缺口：**我對供給端的規則有多少彈性、哪些是硬約束、哪些其實可以談，完全沒有實務感。** 這種東西看資料補不起來，只能靠進去之後跟供給端和營運的人實際做過幾輪才會有。

我不會說這不影響我，短期它會讓我判斷得比較慢。但我覺得比較危險的是另一種人：**把供給端當成可以改的東西，然後提一堆做不出來的建議。** 至少我現在知道那條線在哪。
`,
        en: `
The biggest gap is **the supply side**.

At Typus and 17LIVE, the product was ours. Price, rules, inventory, we could change them if we wanted to. **An OTA isn't like that. Fare prices, cabin rules, change and refund conditions, inventory, all of it comes from the airlines and the reservation systems, and I can't change any of it. All I can decide is how to present it and when.**

This hit me once while doing the exercise. On the Taipei to London route I found Emirates' own site was 658 dollars more expensive than Trip.com, and users still chose the airline. At first I thought that was our problem. Then it became clear: **what that price difference buys is the airline's own after-sales protection, and that was never something we held.** What I can do isn't to make it ours, it's to decide whether to play a different game on that route.

That's my clearest knowledge gap right now: **I have no practical feel for how much flexibility exists in supply-side rules, which are hard constraints, and which are actually negotiable.** That isn't something you close by reading. You only get it after going through a few rounds with the supply and operations people.

I wouldn't say it won't affect me. In the short term it will make me slower to judge. But I think the more dangerous person is the other kind: **someone who treats the supply side as changeable and brings a pile of proposals that can't be built.** At least I know where that line is.
`
      },
      {
        q: '你待的團隊規模都不大，這裡是幾百人的產品組織，你怎麼適應？',
        zh: `
小團隊訓練出來的是「什麼都要自己來」。在一個一人負責一個市場的編制裡，**這剛好是優勢**：從拉數據、走查流程到寫規格，我不需要等別人排期。

我在 17LIVE 也是同時跨台灣、日本、東南亞三個市場協作，所以跟不同市場的人對齊優先順序這件事我做過。

我需要補的是大組織的推進方式。在小團隊，決策鏈短，講清楚就能動；在大組織，**說服與對齊的成本本身就是工作的一部分**。所以我會把力氣放在「把在地的證據翻譯成總部聽得懂的收益」，而不是靠據理力爭。
`,
        en: `
What a small team trains you to do is everything yourself. In a structure where one person owns one market, **that's an advantage**: pulling data, walking the flow, writing the spec, I don't have to wait for someone else's sprint.

At 17LIVE I was also working across Taiwan, Japan and Southeast Asia at the same time, so aligning priorities with people in different markets is something I've done.

What I need to build is how you move things in a large organisation. In a small team the decision chain is short and being clear is enough. In a large one, **the cost of persuading and aligning is itself part of the job.** So I'd put my effort into translating local evidence into upside that headquarters recognises, rather than arguing my case harder.
`
      },
      {
        q: '這裡每個市場一個人，你大部分時間會是一個人做。你怎麼避免陷在細節裡？',
        zh: `
我靠兩件事。

第一是固定的優先序方法：**這個問題影響多少人、影響有多痛、做了會不會更靠近這一季的目標。** 排不進這三個問題的事情，我不會因為它看起來急就去做。

第二是一個固定的自我檢查節奏：**每週固定回頭問一次「我這週做的事，跟這一季要打的那一段有關嗎」。** 一個人做事最大的風險不是做不完，是花了三週把一件不重要的事做得很好。
`,
        en: `
Two things.

The first is a fixed prioritisation method: **how many people does this affect, how painful is it, and does doing it move us closer to this quarter's goal.** If something can't clear those three questions, I won't do it just because it looks urgent.

The second is a fixed self-check rhythm: **once a week I stop and ask whether what I did this week connects to the segment we're trying to move this quarter.** The biggest risk of working alone isn't running out of time, it's spending three weeks doing an unimportant thing extremely well.
`
      },
      {
        q: '你履歷上很多 AI side project，但這個職位大部分是瑣碎的在地化工作，你會不會覺得無聊？',
        zh: `
不會，因為**AI 正是我處理瑣碎工作的方式**，這兩件事在我身上不衝突。

我交的那份作業本身就是證據。抓 500 則評論做主題分類、跑兩條航線的比價走查、產出流程圖，**這些如果純手工是做不完的，我是用工具做的。** 也就是說，瑣碎的部分我會盡量壓縮掉，把時間留給真正需要判斷的地方。

而且在地化工作瑣碎，不代表它不重要。我在作業裡看到的是，台灣使用者的決策其實發生在比價貨架上，那一段的細節就是勝負。
`,
        en: `
No, because **AI is exactly how I handle the repetitive work**. The two don't conflict for me.

The exercise I submitted is the evidence. Pulling 500 reviews and classifying them by theme, running price walkthroughs on two routes, producing the flow diagram, **none of that finishes by hand. I did it with tools.** Which means I compress the repetitive part as far as I can and keep my time for the parts that need judgement.

And localisation work being detailed doesn't make it unimportant. What I saw in the exercise is that the Taiwanese user's decision actually happens on the comparison shelf, and the detail in that segment is where it's won or lost.
`
      },
      {
        q: '你這一年在念書，離產品實戰有一段距離，怎麼補？',
        zh: `
我這一年沒有停止做產品。論文研究的就是產品開發流程本身，我深入訪談了包含 TikTok 在內的多家科技公司；同時我一直在做實作，agentic AI 平台的產品規劃、租屋篩選工具、AI agent 實作課程，都是這一年做的。

**最近期、最接近實戰的產出就是我交給你們的這份作業**，而且它是為了這個職位做的：比價走查、500 則評論的主題分類、漏斗拆解，用的都是我進去之後會用的同一套方法。
`,
        en: `
I haven't stopped doing product work this year. My dissertation is about the product development process itself, and I ran in-depth interviews with technology companies including TikTok. Alongside that I kept building: the product planning for the agentic AI platform, the rental filtering tool and the hands-on AI agent course were all done this year.

**The most recent and most realistic piece of work is the exercise I submitted to you**, and it was made for this role: the price walkthroughs, the thematic classification of 500 reviews, the funnel breakdown. That's the same method I'd be using once I'm inside.
`
      },
      {
        q: '如果我三個月只能看你一份東西，你希望我看什麼？',
        zh: `
一份「**台灣漏斗現況，加上這一季要打哪一段**」的固定格式文件。

固定格式的意思是：同一組漏斗階段、同一組指標定義，每個月長得一樣，最上面直接寫「這次需要你決定什麼、我的建議是什麼」。**你的時間應該花在做決定，不是花在理解格式。**
`,
        en: `
One fixed-format document: **the current state of the Taiwan funnel, plus which segment we're going after this quarter.**

Fixed format means the same funnel stages and the same metric definitions, looking the same every month, with what you need to decide and what I recommend written at the very top. **Your time should go into making decisions, not into understanding the format.**
`
      }
    ]
  },
  {
    name: '收尾',
    items: [
      {
        q: '你進來第一個月會做什麼？',
        zh: `
**第一週，我要有自己的基準線。** 我會把台灣現在的漏斗數字自己拉一次，不是只看別人整理好的報告。原因很簡單：**如果我不知道這些數字是怎麼算出來的，之後它動了我也不知道是真的動了還是口徑變了。** 同時我會把指標定義寫下來，跟數據的人確認一次。

**第二到第三週，我要有自己的體感。** 完整走查一次台灣的訂票流程，用真實的錢跑到底。這件事我其實已經做過一版，就是這份作業。進去之後我會用內部資料再做一次，因為外面看不到的東西很多。同時我會找客服和在地行銷聊，**客訴是最便宜的使用者研究，而且通常沒有人在系統性地看它。**

**第四週，產出第一份對齊文件。** 內容是台灣現況、我看到的前三個問題、我建議這一季打哪一段、以及我需要什麼。然後跟你對一次。

**然後是我第一個月刻意不做的事：我不會提大改版建議。** 一個月的理解深度不足以支撐那種提案，太早提反而會讓人覺得我沒搞清楚狀況就在給意見。**第一個月的產出應該是「我看懂了什麼」，不是「你們應該改什麼」。**
`,
        en: `
**Week one, I want my own baseline.** I'd pull the current Taiwan funnel numbers myself rather than only reading someone else's summary. The reason is simple: **if I don't know how these numbers were calculated, then when they move later I won't know whether they really moved or the definition changed.** In parallel I'd write the metric definitions down and confirm them with the data team.

**Weeks two and three, I want my own felt sense of the product.** Walk the entire Taiwan booking flow end to end, with real money. I've actually done one version of this already, which is the exercise. Once inside, I'd do it again with internal data, because there's a lot you can't see from outside. At the same time I'd talk to support and local marketing, because **complaints are the cheapest user research there is, and usually nobody is looking at them systematically.**

**Week four, produce the first alignment document.** The state of Taiwan, the top three problems I see, which segment I recommend we go after this quarter, and what I need. Then review it with you.

**And here's what I'd deliberately not do in month one: I wouldn't propose a major redesign.** One month of understanding isn't deep enough to support that kind of proposal, and raising it too early makes it look like I'm giving opinions before I understand the situation. **The output of month one should be what I've understood, not what you should change.**
`
      },
      {
        q: '你需要什麼樣的主管？',
        zh: `
我需要的是**把判準講清楚然後放手**的主管，不是逐項確認的。

具體來說我希望三件事。

**第一，在一季開始的時候我知道你怎麼衡量成功。** 不是 KPI 數字，是判準。同一個數字達標，什麼樣的做法你會覺得做對了，什麼樣的你會覺得只是運氣好。

**第二，把「我可以自己決定」跟「要先問你」的界線畫出來。** 這個界線一開始畫窄一點沒關係，我會用結果去換它變寬。**我最怕的是界線模糊，那會變成每件事都要猜你的意思。**

**第三，願意告訴我壞消息。** 如果我做的東西方向錯了，我希望在第二週就知道，不要等到季末回顧。

我會這樣講，也是因為你在雪梨、我在台北、總部在上海，**我們的同步時間會很貴。** 我不覺得那段時間應該花在進度更新上，那些我可以寫清楚給你。它應該花在真正需要來回討論的判斷上。
`,
        en: `
I need a manager who **makes the criteria clear and then lets go**, rather than checking item by item.

Three things specifically.

**First, at the start of a quarter I want to know how you measure success.** Not the KPI number, the criteria. If the same number is hit, which approach would make you feel we did it right, and which would make you feel we just got lucky.

**Second, draw the line between what I can decide alone and what I should ask you about first.** I'm fine with that line being drawn narrowly at the start, and I'll trade results for widening it. **What I'm most afraid of is a blurry line, because then every decision becomes guessing what you'd want.**

**Third, be willing to tell me bad news.** If what I'm building is pointed the wrong way, I'd rather know in week two than at the end-of-quarter review.

I say this partly because you're in Sydney, I'd be in Taipei and headquarters is in Shanghai, so **our synchronous time is expensive.** I don't think it should be spent on progress updates, which I can write up clearly for you. It should be spent on the judgements that genuinely need a back-and-forth.
`
      },
      {
        q: '你跟工程師意見不合的時候怎麼處理？',
        zh: `
我會先分清楚是哪一種不同意，因為這兩種的處理方式完全相反。

**如果是可行性的不同意，那通常他們是對的。** 他們知道系統裡有什麼我不知道的東西。我的工作不是說服他們，是問清楚成本到底卡在哪，然後**改需求，而不是改人**。很多時候我要的那個價值有第二條路可以達成，只是我一開始把需求寫成了一個具體做法。

**如果是優先序的不同意，那是我的責任，不是他們的。** 代表我沒有把「為什麼是這個」講清楚。我的標準是：**要能讓他們自己複述出來這件事為什麼重要。** 講到他們能複述，通常爭議就沒了；講不到，那多半是我自己也還沒想清楚。

我有一次踩過相關的坑。在 17LIVE 做短影音剪輯功能的時候，我們把剪輯權限預設關閉，那是跟 stakeholder 討論後刻意的決定，為了讓主播對自己的內容有控制權。結果是幾乎沒有主播會去打開設定頁，**供給端根本沒被打開**。

**我學到的是：如果我自己說服不了自己那個取捨划算，我就不該接受它。** 當下我讓步了，因為對方的理由聽起來很合理，但我沒有把「這會不會直接關掉供給」這件事量出來。現在遇到類似的情況，我會把取捨的代價先算出來再決定要不要讓。
`,
        en: `
I first work out which kind of disagreement it is, because the two are handled in completely opposite ways.

**If it's about feasibility, they're usually right.** They know things about the system that I don't. My job isn't to persuade them, it's to understand exactly where the cost sits, and then **change the requirement rather than change their mind**. Very often the value I want can be reached another way, and the problem was that I wrote the requirement as one specific implementation.

**If it's about priority, that's my responsibility, not theirs.** It means I haven't explained why this one comes first. My standard is: **they should be able to repeat back, in their own words, why this matters.** Once they can, the argument usually disappears. If they can't, it usually means I hadn't thought it through either.

I've been caught by a related mistake. When we built the short-video editing feature at 17LIVE, we shipped with editing permissions off by default. That was a deliberate decision after talking to stakeholders, so streamers kept control over their own content. The result was that almost no streamer ever went into the settings page to turn it on, **so the supply side never opened up at all.**

**What I learned is that if I can't convince myself the trade-off is worth it, I shouldn't accept it.** I gave way at the time because their reasoning sounded sensible, but I never quantified whether this would shut off supply outright. Now, in a similar situation, I work out the cost of the trade-off before deciding whether to concede.
`
      },
      {
        q: '你有什麼想問我的嗎？（給 Kathy）',
        zh: `
1. 台灣在編制上是掛在 SEA 底下嗎？我看這個角色的範圍跟一般認知的東南亞不太一樣，想了解實際上怎麼分。

2. 你這一年多把這個區域團隊建起來的過程中，**哪一件事比你原本預期的難**？

3. 台灣這個角色要推動的東西，**有多少比例是總部要點頭的**？我想知道實際上這條線是怎麼跑的。
`,
        en: `
1. Does Taiwan sit under SEA structurally? The scope of this role looks different from how Southeast Asia is usually defined, so I'd like to understand how it's actually split.

2. Over the past year and a half building this regional team, **what turned out to be harder than you expected**?

3. Of the things this Taiwan role needs to push through, **what proportion needs headquarters to sign off**? I'd like to understand how that line actually works in practice.
`
      }
    ]
  }
  ]
},

/* ═══════════ SmartNews ═══════════ */
{
  id: 'smartnews',
  label: 'SmartNews',
  section: 'Company',
  groups: [
  {
    name: '產品研究',
    items: [
      {
        q: 'SmartNews 是什麼？產品全景',
        zh: `
**一句話：只給你當下最重要的 0.01% 的新聞聚合 App。** 不做無限捲動，演算法從全網選出當下最熱的頭條，用自家極速排版讓文章秒開，免費，靠廣告賺錢。

#### 同一個品牌底下其實有三個東西

::: html
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;font-size:13px;line-height:1.6;margin:14px 0">
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff">
    <div style="font-weight:700;margin-bottom:6px">日本版</div>
    <div style="color:#5A5A63">クーポン 優惠券<br>スマニューAIまとめ<br>選舉 / Fact-Check 頻道</div>
  </div>
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff">
    <div style="font-weight:700;margin-bottom:6px">美國版</div>
    <div style="color:#5A5A63">Rewards 讀新聞換點數<br>AI 翻譯（僅 iOS）<br>News From All Sides</div>
  </div>
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff">
    <div style="font-weight:700;margin-bottom:6px">NewsArc</div>
    <div style="color:#5A5A63">獨立 App<br>2025-08 推出<br>AI 驅動的高品質新聞</div>
  </div>
</div>
<div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;margin:0 0 14px">
  <div style="font-weight:700;margin-bottom:6px;font-size:13px">兩版共用的底層</div>
  <div style="color:#5A5A63;font-size:13px;line-height:1.6">演算法選文　·　SmartView 極速排版　·　Channels 頻道　·　在地新聞與天氣　·　離線預載</div>
</div>
:::

#### 內容怎麼流動

::: html
<div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:12.5px;margin:12px 0">
  <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;padding:6px 10px">數千家出版商</span><span style="color:#8C8C95">→</span>
  <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;padding:6px 10px">爬取</span><span style="color:#8C8C95">→</span>
  <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;padding:6px 10px">演算法評估<br>文章＋社群訊號＋互動</span><span style="color:#8C8C95">→</span>
  <span style="border:1.5px solid #C96442;border-radius:10px;padding:6px 10px;background:#F7EDE6;color:#C96442;font-weight:700">選出最重要的 0.01%</span><span style="color:#8C8C95">→</span>
  <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;padding:6px 10px">SmartView<br>剝廣告·重排·預載</span><span style="color:#8C8C95">→</span>
  <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;padding:6px 10px">用戶</span>
</div>
:::

#### 核心功能

| 功能 | 說明 | 市場 |
|---|---|---|
| 演算法選文 | 評估數百萬篇文章＋社群訊號＋互動，**刻意不做無限捲動** | 共用 |
| SmartView | 自家版 AMP，剝掉廣告與肥圖重排，文章秒開 | 共用 |
| 離線預載 | 有網路時先抓，沒訊號也能讀 | 共用 |
| Channels | Breaking、World、Business、Tech、Sports，可自行增減 | 共用 |
| 在地與天氣 | 依定位給市區級新聞、天氣、交通 | 共用 |
| **クーポン** | 便利商店、餐飲折價券，**日本市場的黏著關鍵** | 日本 |
| Rewards | 讀文章換點數，可兌禮物卡或捐款 | 美國 |
| News From All Sides | 同一議題並陳左右立場 | 美國 |
`
      },
      {
        q: 'SmartView：整個產品的技術支點',
        zh: `
**絕大多數文章不是把你送去出版商的網站，而是在 App 內用 SmartView 開啟。**

::: html
<div style="font-size:12.5px;line-height:1.65;margin:12px 0">
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;margin-bottom:8px">出版商提供 <b>SmartFormat feed</b>（RSS 2.0 / Atom 的擴充）</div>
  <div style="color:#8C8C95;margin:0 0 8px 16px">↓ SmartNews 解析</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px">
    <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff">
      <div style="font-weight:700;margin-bottom:4px">剝掉</div>
      <div style="color:#5A5A63">網站廣告腳本<br>肥圖與裝飾<br>追蹤碼與版面雜訊</div>
    </div>
    <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff">
      <div style="font-weight:700;margin-bottom:4px">保留</div>
      <div style="color:#5A5A63">正文與圖說<br>嵌入媒體 YouTube·JW Player<br>Spotify·SoundCloud<br>出版商品牌露出</div>
    </div>
    <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff">
      <div style="font-weight:700;margin-bottom:4px">加上</div>
      <div style="color:#5A5A63">原生排版<br>display / video 廣告位<br>預先下載，離線可讀</div>
    </div>
  </div>
  <div style="color:#8C8C95;margin:0 0 8px 16px">↓</div>
  <div style="border:1.5px solid #C96442;border-radius:10px;padding:8px 11px;background:#F7EDE6;color:#C96442;font-weight:700;display:inline-block">SmartView 文章頁：秒開，不離開 App</div>
</div>
:::

#### 技術面

| 項目 | 內容 |
|---|---|
| **格式** | **SmartFormat**，是 **RSS 2.0 或 Atom 的擴充**。出版商要提供通過驗證的 feed |
| **渲染位置** | **App 內原生**，不是 WebView 開出版商網頁 |
| **對照** | 概念上等同 Google AMP，但只在 SmartNews 生態內 |
| **廣告位** | 內插 display 與 video 廣告，常見尺寸 300×250 |

#### 出版商怎麼加入：SmartView First

opt-in 的授權方案，加入後拿到更完整的**品牌露出**，可以把文章導向自家的**贊助內容**或**訂閱落地頁**。大多數合作出版商都選擇加入。

#### 兩條變現路線

| 路線 | 誰放廣告 | 收益怎麼分 |
|---|---|---|
| **A：出版商自己賣** | 出版商在自己文章的 SmartView 上放自己的廣告 | **100% 歸出版商，不分潤給 SmartNews** |
| **B：SmartNews 賣** | SmartNews 在文章內放廣告 | 付**授權費**＋**廣告分潤**。分潤**階梯式，看的人越多出版商拿越高** |

#### 為什麼它是支點

1. **速度** — 剝掉網站的廣告腳本和肥圖，這是「秒開」的真正來源
2. **離線** — 內容已被結構化並預載，沒訊號也能讀
3. **第一方資料** — **用戶不離開 App，所有閱讀行為都留在 SmartNews 手上**

**同時它也是抱怨的來源。** SmartView 裡的廣告位由 SmartNews 控制，用戶抱怨的「全版廣告關不掉」就發生在這一層。
`
      },
      {
        q: '兩條回饋迴路',
        zh: `
**這是整個商業模式能自我推進的原因。兩條迴路都靠 SmartView 把用戶留在 App 內才成立。**

::: html
<div style="font-size:12.5px;line-height:1.6;margin:12px 0">

  <div style="font-weight:700;margin-bottom:6px">迴路一：資料</div>
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-bottom:4px">
    <span style="border:1.5px solid #C96442;border-radius:10px;padding:8px 11px;background:#F7EDE6;color:#C96442;font-weight:700;padding:6px 10px">用戶閱讀</span><span style="color:#8C8C95">→</span>
    <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;padding:6px 10px">第一方行為資料<br>讀了什麼·停多久·點什麼</span><span style="color:#8C8C95">→</span>
    <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;padding:6px 10px">演算法更準</span><span style="color:#8C8C95">→</span>
    <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;padding:6px 10px">選文更貼近這個人</span>
  </div>
  <div style="color:#C96442;margin:0 0 16px 4px">↺ 回到用戶閱讀</div>

  <div style="font-weight:700;margin-bottom:6px">迴路二：供給</div>
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-bottom:4px">
    <span style="border:1.5px solid #C96442;border-radius:10px;padding:8px 11px;background:#F7EDE6;color:#C96442;font-weight:700;padding:6px 10px">用戶閱讀</span><span style="color:#8C8C95">→</span>
    <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;padding:6px 10px">廣告曝光</span><span style="color:#8C8C95">→</span>
    <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;padding:6px 10px">廣告收益</span><span style="color:#8C8C95">→</span>
    <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;padding:6px 10px">授權費＋階梯分潤<br>給出版商</span><span style="color:#8C8C95">→</span>
    <span style="border:1.5px solid #d8d4cf;border-radius:10px;padding:8px 11px;background:#fff;padding:6px 10px">出版商持續供稿<br>內容更多更好</span>
  </div>
  <div style="color:#C96442;margin:0 0 16px 4px">↺ 回到用戶閱讀</div>

  <div style="border:1.5px dashed #6E7BF7;border-radius:10px;padding:8px 11px;background:#EDF0FF;color:#5A5A63">
    <b style="color:#6E7BF7">SmartView</b> 讓用戶不離開 App，是兩條迴路的共同前提
  </div>
</div>
:::

**如果用戶被導去出版商網站**，行為資料歸出版商、廣告收益歸出版商，**兩條迴路都會斷**。

**面試可以這樣講：** 能講出「兩條迴路都靠 SmartView 把用戶留在 App 內才成立」，顯示你看的是系統不是功能。
`
      },
      {
        q: '商業模式與規模',
        zh: `
::: html
<div style="display:flex;flex-wrap:wrap;gap:10px;font-size:12.5px;margin:12px 0">
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;flex:1;min-width:150px">
    <div style="font-weight:700;margin-bottom:5px">出版商</div>
    <div style="color:#5A5A63">給內容<br>拿授權費＋廣告分潤</div>
  </div>
  <div style="border:1.5px solid #C96442;border-radius:10px;padding:10px 12px;background:#F7EDE6;flex:1;min-width:150px">
    <div style="font-weight:700;margin-bottom:5px;color:#C96442">SmartNews</div>
    <div style="color:#5A5A63">演算法＋SmartView<br>第一方資料</div>
  </div>
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;flex:1;min-width:150px">
    <div style="font-weight:700;margin-bottom:5px">用戶</div>
    <div style="color:#5A5A63">免費看新聞<br>給注意力與行為資料</div>
  </div>
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;flex:1;min-width:150px">
    <div style="font-weight:700;margin-bottom:5px">廣告主</div>
    <div style="color:#5A5A63">付廣告費<br>佔營收約 75%</div>
  </div>
</div>
:::

| 項目 | 數字 | 可信度 |
|---|---|---|
| 累計下載 | 6,000 萬以上（2025 年初） | 確定 |
| MAU | **2,000 萬以上** | 確定 |
| 年營收 | 約 1.045 億美元 | 第三方推估 |
| 估值 | 約 20 億美元 | 第三方推估 |
| 廣告佔營收 | **約 75%** | 推估 |

收入來源：行動廣告（原生＋feed 內程式化聯播）為主，加上資料授權、贊助內容、品牌專屬分頁。

> **待查：** 一個來源說有 SmartNews Plus 訂閱制（$9.99–14.99/月免廣告），另一個 2026 評測說「ad-only，沒有付費去廣告的選項」。**面試前自己開 App 確認。**
`
      },
      {
        q: '用戶評分與抱怨',
        zh: `
| 平台 / 市場 | 分數 | 評論數 |
|---|---|---|
| Google Play 日本 | **4.1** | 646,413 |
| App Store 美國 | **4.6** | 929,000 |

日本的星等分佈：5 星 52%、4 星 25%、3 星 10%、2 星 4%、**1 星 9%**。

**一星比二星多兩倍以上，這是兩極化的形狀，不是平均偏低。** 代表有一群特定情境的用戶被明確惹惱。

> ⚠️ 兩個數字不能直接比較：平台不同、市場不同、日本用戶普遍給分較嚴。

#### 五類抱怨

**1. 廣告，壓倒性第一名**
全版廣告的關閉鈕藏得很隱密，有時要點好幾次；有用戶說關閉鈕貼在螢幕邊緣點不到，而且不會自動關掉。「過去一年變本加厲」。日文評論同樣把「広告の多さ」列為第一缺點。

**2. 導航會把你踢回首頁**
「左スワイプすると、スマニューのトップに戻ってしまい」。英文側同樣抱怨 App 無預警重載回首頁，**看到一半的位置就沒了**。

**3. 內容品質不穩**
「肝心のニュースはまとめサイトと同レベル、情報の鮮度も良くない」「漢字の誤字等が少し多く」。英文側：**clickbait 還是會漏進來**，而且**沒有來源清單可以編輯**。

**4. 無障礙壞掉**
視障用戶反映 **VoiceOver 連續好幾個版本都是壞的**，AppleVis 論壇有專門討論串。

**5. 初次體驗過載**
「初期状態ではデフォルトで非常に沢山のタブが表示されるので使いづらい」。

#### 稱讚的地方

速度與速報性、一個 App 什麼都有（新聞＋優惠券＋市區級天氣）、優惠券真的有用、涵蓋面廣。
`
      },
      {
        q: '如果要你改進我們的產品，你會做什麼？',
        zh: `
**先講結構，再講單點。** 三條主要抱怨線都回推到同一個根因。

::: html
<div style="font-size:12.5px;line-height:1.7;margin:12px 0">
  <div style="border:1.5px solid #C96442;border-radius:10px;padding:8px 12px;background:#F7EDE6;color:#C96442;font-weight:700;display:inline-block">核心矛盾：免費＋廣告佔 75% 營收</div>
  <div style="color:#8C8C95;margin:6px 0 6px 18px">↓</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
    <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff">廣告密度必須夠高<br><span style="color:#8C8C95">→ 全版廣告·關閉鈕難點</span></div>
    <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff">為曝光要頻繁刷新 feed<br><span style="color:#8C8C95">→ 左滑重載回首頁</span></div>
    <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff">流量優先於編輯把關<br><span style="color:#8C8C95">→ clickbait 漏進來</span></div>
  </div>
  <div style="color:#8C8C95;margin:6px 0 6px 18px">↓</div>
  <div style="border:1.5px solid #d8d4cf;border-radius:10px;padding:10px 12px;background:#fff;display:inline-block;border-color:#C96442">日本一星佔 9%</div>
</div>
:::

**所以「少放一點廣告」不是可行建議。** 可行的是在同樣廣告收益下**降低干擾成本**。

#### 我會排的三件事

**第一，關閉鈕的可點區域與時機。** 這是影響最大、原因最確定、成本最低的一件。用戶抱怨的不是有廣告，是**關不掉**。這不需要動營收模型，只動可點區域和倒數邏輯。

**第二，讀到一半的位置保存。** 左滑或重載回首頁，等於把用戶已經投入的注意力歸零。這是純粹的狀態管理問題，不影響任何商業指標。

**第三，無障礙。** VoiceOver 壞掉連續好幾個版本。它同時是產品缺陷、法遵風險、和品牌問題，而且修復範圍明確。**多數候選人不會提這個。**

#### 我不會先做的

重做推薦演算法、加來源黑名單、改內容品質把關。這些**影響大但確定性低、成本高**，而且會直接撞到商業模式。

---

**收尾：** 我面的是 Prototyper，這三件事我都可以在一小時內做出可點擊原型，比講分析更快讓團隊看到差別。
`,
        en: `
**Structure first, then the specific fixes.** Three of the main complaint threads trace back to the same root cause: the product is free and around 75% of revenue comes from advertising. So "show fewer ads" is not an actionable recommendation. The actionable version is **reducing the cost of interruption at the same ad revenue**.

**First, the close button's tap target and timing.** This is the highest impact, the most certain cause, and the cheapest fix. What users complain about is not that ads exist, it is that they cannot close them. This does not touch the revenue model at all, only the tap target and the countdown logic.

**Second, preserving reading position.** A left swipe or a reload sends users back to the home screen, which zeroes out the attention they already invested. This is a pure state management problem with no effect on any business metric.

**Third, accessibility.** VoiceOver has been broken across several releases. It is simultaneously a product defect, a compliance risk, and a brand problem, and the scope of the fix is well defined.

**What I would not start with:** rebuilding the recommendation algorithm, adding a source blocklist, or changing editorial quality control. These are high impact but low certainty and high cost, and they run directly into the business model.

I am interviewing for a prototyper role, and all three of these I could build as a clickable prototype within an hour, which shows the team the difference faster than an analysis would.
`
      },
      {
        q: 'AI 功能在哪裡？（為什麼你在 App 裡找不到）',
        zh: `
**三個 AI 功能分別鎖在三個不同的地方，沒有任何一個用戶能一次看到全部。**

| AI 功能 | 上線 | 在哪裡 | 限制 |
|---|---|---|---|
| **スマニューAIまとめ**<br>生成式 AI 多篇摘要 | 2025-08 | **日本版首頁最上方**的專屬區塊 | **僅日本版**，官方稱「国内ニュースアプリ初」。需 **v6.5.0 以上**，舊版連 UI 都不出現 |
| **AI 翻譯**<br>一鍵翻西班牙文 / 中文 | 2026-07 | 美國版，文章列表或閱讀頁的按鈕 | **僅 iOS、僅美國版**，Android 沒有 |
| **NewsArc** | 2025-08 | **完全獨立的另一個 App** | 不在主 App 裡 |

#### 你會拿到哪個版本

| 你的情況 | 結果 |
|---|---|
| 台灣 / 英國商店，iOS | 美國版，**看得到 AI 翻譯，看不到 AIまとめ** |
| 台灣 / 英國商店，Android | 美國版，**兩個 AI 功能都看不到** |
| 日本帳號，版本 ≥ 6.5.0 | 首頁最上方有 AIまとめ |
| 日本帳號，版本 < 6.5.0 | 看不到，要先更新 |

**想實際體驗 AIまとめ**，要換日本 App Store 帳號下載日本版。

---

#### 這件事本身就是面試素材

一家對外強調「對 AI 非常狂熱」的公司，把三個 AI 功能拆在**日本版、美國版 iOS、和一個獨立 App**，沒有任何一個用戶能一次體驗到全部。

**可以直接問面試官：這是刻意的市場策略，還是組織結構造成的？**
`
      }
    ]
  },
  {
    name: '條件確認',
    items: [
      {
        q: '你能搬到東京嗎？',
        zh: `
可以，我能為這個職位搬到東京。**日本一直是我求職時刻意鎖定的方向，不是臨時起意。**

我沒有需要撫養的家屬，會是我一個人搬過去。

我 2026 年 9 月從倫敦國王學院畢業，之後沒有任何學業上的安排，所以可以立刻開始跑簽證程序。
`,
        en: `
Yes, I'm able to relocate to Tokyo for this role. **Japan has been a deliberate focus of my search rather than an afterthought.**

I have no dependents, so I would be relocating on my own.

I'm completing my MSc at King's College London in September 2026 and have no academic commitments after that, so I can begin the visa process immediately.
`
      },
      {
        q: '你需要簽證擔保嗎？',
        zh: `
需要，我會需要 SmartNews 提供簽證擔保。**我持台灣護照，目前沒有日本工作簽證。**

補充我現在的身分狀態：我持英國學生簽證，2026 年 9 月畢業後會轉為英國的 Graduate Route。**這兩者都不影響我搬到日本，而且我沒有需要服完的離職通知期。**
`,
        en: `
Yes, I would require visa sponsorship from SmartNews. **I hold a Taiwanese passport and do not currently have a Japanese work visa.**

For context on my present status: I'm on a UK Student visa and will move onto the UK Graduate Route after I graduate in September 2026. **Neither affects my ability to relocate to Japan, and I have no notice period to serve.**
`
      },
      {
        q: '你什麼時候可以到職？',
        zh: `
把 3 到 4 個月的簽證時程算進去，實際上我可以在 **2026 年第四季到 2027 年第一季之間**到職。如果團隊有希望的起始日，我也可以從那個日期往回推。
`,
        en: `
Factoring in the 3 to 4 month visa timeline, I would realistically be able to start **between Q4 2026 and Q1 2027**, and I'm happy to work backwards from whatever start date suits the team.
`
      },
      {
        q: '一週三天進辦公室可以嗎？',
        zh: `
可以，一週三天進辦公室沒問題。搬過去的時候我會找**通勤兩小時以內**的住處。

而且我是團隊的新人、也是東京的新人，**初期我反而希望有更多面對面的時間。**
`,
        en: `
Yes, three days a week in the office works for me, and I'll be looking for housing **within a two-hour commute** of your office as part of the relocation.

Given that I'd be new to the team and to Tokyo, **I'd actively prefer the in-person time early on.**
`
      },
      {
        q: '你的期望待遇是多少？',
        zh: `
期望是**年薪 600 萬到 800 萬日圓**，可以依職級和整體待遇再談。

目前的部分：我現在不是全職受僱狀態，因為都在完成碩士學業，所以沒有現行的底薪或獎金可以拆解。
`,
        en: `
Expected: **¥6,000,000 to ¥8,000,000 per year**, negotiable depending on the level and the overall package.

Current: I'm not in full-time employment at the moment, as I've been completing my MSc, so there's no current base or bonus to break down.
`
      },
      {
        q: '你還有在面試其他公司嗎？',
        zh: `
還有兩條線在跑，目前都還沒有 offer。

**Trip.com Group**，台灣的 Associate Product Growth Manager：我已經完成 recruiter 初談和一份案例作業，正在跟他們的 Head of Product Growth, SEA 面試，後面還有兩關。

**TableCheck**，東京的 Product Manager：HR 初面已經完成，正在等 hiring manager 那關的時間安排。

兩邊都還沒有給我決定的期限，所以沒有立即的壓力。**不過三個裡面，SmartNews 是我最想去的。**
`,
        en: `
I have two other processes running, no offers yet.

**Trip.com Group**, Associate Product Growth Manager, Taiwan: I've completed the recruiter screen and a case study, and I'm interviewing with their Head of Product Growth, SEA. Two further rounds would follow.

**TableCheck**, Product Manager, Tokyo: I've completed the HR screen and am waiting on scheduling for the hiring manager round.

Neither has given me a decision deadline yet, so there's no immediate pressure. **That said, SmartNews is the role I'm most excited about of the three.**
`
      },
      {
        q: 'Vibe coding 那一關你準備好了嗎？',
        zh: `
我的環境已經隨時可以開始。**自己做 prototype 本來就是我平常的工作方式**，所以那一關我是真的很期待。
`,
        en: `
My setup is ready to go. **Building my own prototypes is how I already work**, so I'm genuinely looking forward to that session.
`
      }
    ]
  }
  ]
},

/* ═══════════ Rakuten ═══════════ */
{
  id: 'rakuten',
  label: 'Rakuten',
  section: 'Company',
  groups: [
  {
    name: '志望動機',
    items: [
      {
        q: '為什麼想加入 Rakuten？',
        zh: `
我注意到 Rakuten 2026 年把 **AI-nization** 訂為全公司主軸，三木谷會長提到目標是成為世界上最會用 AI 的平台，而且已經有 **255 億日圓的利益來自 AI 應用**。

我自己做過 33 模組、3 個 LLM 的 agentic platform，也建過 AI 品質的評測框架，所以我對「**怎麼把 AI 從 demo 變成每天有人用的產品**」這件事有第一手經驗。
`,
        en: `
I noticed that Rakuten has made **AI-nization** the company-wide theme for 2026. Chairman Mikitani has talked about the goal of becoming the platform that uses AI best in the world, and **25.5 billion yen of profit already comes from AI applications.**

I've built an agentic platform myself with 33 modules and three LLMs, and I've built an evaluation framework for AI quality, so I have first-hand experience of **how you get AI from a demo to a product people use every day.**
`
      },
      {
        q: '期望年収はいくらですか？',
        zh: `
**750〜950 萬円**，依職級與整體待遇可以再談。
`,
        en: `
**¥7.5 to 9.5 million per year**, negotiable depending on the level and the overall package.
`
      }
    ]
  },
  {
    name: '推薦系統',
    items: [
      {
        q: '推薦系統的整體架構是什麼？',
        zh: `
::: html
<figure class="diagram">
<svg viewBox="0 0 730 176" role="img" aria-label="推薦系統整體架構流程圖">
  <defs>
    <marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0 0 L8 4 L0 8 z" fill="#8d8474"/>
    </marker>
    <marker id="ahr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0 0 L8 4 L0 8 z" fill="#ab3a1e"/>
    </marker>
  </defs>

  <rect class="dpill" x="6" y="18" width="104" height="66" rx="6"/>
  <text class="dt" x="58" y="46" text-anchor="middle">後端 DB</text>
  <text class="dt2" x="58" y="65" text-anchor="middle">原始資料</text>
  <path class="dflow" d="M112 51 H124" marker-end="url(#ah)"/>

  <rect class="dbox" x="128" y="18" width="104" height="66" rx="6"/>
  <text class="dn" x="138" y="33">1</text>
  <text class="dt" x="180" y="53" text-anchor="middle">資料清洗與</text>
  <text class="dt" x="180" y="70" text-anchor="middle">Pipeline</text>
  <text class="drole" x="180" y="102" text-anchor="middle">DATA</text>
  <text class="drole" x="180" y="114" text-anchor="middle">ENGINEER</text>
  <path class="dflow" d="M234 51 H246" marker-end="url(#ah)"/>

  <rect class="dbox" x="250" y="18" width="104" height="66" rx="6"/>
  <text class="dn" x="260" y="33">2</text>
  <text class="dt" x="302" y="53" text-anchor="middle">推薦模型</text>
  <text class="dt" x="302" y="70" text-anchor="middle">候選 list</text>
  <text class="drole" x="302" y="102" text-anchor="middle">DATA SCIENTIST</text>
  <text class="drole" x="302" y="114" text-anchor="middle">/ MLE</text>
  <path class="dflow" d="M356 51 H368" marker-end="url(#ah)"/>

  <rect class="dbox key" x="372" y="18" width="104" height="66" rx="6"/>
  <text class="dn key" x="382" y="33">3</text>
  <text class="dt key" x="424" y="53" text-anchor="middle">Business</text>
  <text class="dt key" x="424" y="70" text-anchor="middle">邏輯層</text>
  <text class="drole key" x="424" y="102" text-anchor="middle">PM ×</text>
  <text class="drole key" x="424" y="114" text-anchor="middle">BUSINESS TEAM</text>
  <path class="dflow" d="M478 51 H490" marker-end="url(#ah)"/>

  <rect class="dbox" x="494" y="18" width="104" height="66" rx="6"/>
  <text class="dn" x="504" y="33">4</text>
  <text class="dt" x="546" y="53" text-anchor="middle">最終排序</text>
  <text class="dt" x="546" y="70" text-anchor="middle">與呈現</text>
  <text class="drole" x="546" y="102" text-anchor="middle">FRONTEND</text>
  <text class="drole" x="546" y="114" text-anchor="middle">/ BACKEND</text>
  <path class="dflow" d="M600 51 H612" marker-end="url(#ah)"/>

  <rect class="dpill" x="616" y="18" width="104" height="66" rx="6"/>
  <text class="dt" x="668" y="46" text-anchor="middle">使用者</text>
  <text class="dt2" x="668" y="65" text-anchor="middle">看到的畫面</text>

  <path class="dloop" d="M668 84 V132 Q668 140 660 140 H66 Q58 140 58 132 V90" marker-end="url(#ahr)"/>
  <text class="dlooptext" x="363" y="160" text-anchor="middle">點擊行為回流 · 再跑一次</text>
</svg>
<figcaption>模型只是其中一個節點，不是整個系統</figcaption>
</figure>
:::

我理解的推薦系統不是一個模型，**它是一條 pipeline，模型只是中間的一個節點。**

從頭講的話，起點是使用者行為，這些行為會先進到後端的 DB。**第一站是 data engineer**，他們把資料從後端倒進來、決定怎麼洗、排 pipeline 的排程，下游才有乾淨的資料可以用。

**第二站才是模型。** data scientist 或 MLE 在這裡建推薦模型，產出一份候選 list。但這裡有一件事我覺得最容易被誤解：**這個 list 不是最後顯示出去的東西。** 我一開始的理解也是「DB 進去、模型出來、list 就上去了」，後來才知道模型的前後都還有處理。

**第三站是 business 邏輯層，這是我的位置。** 這個月主打什麼、庫存要銷什麼、有哪些合作案，都是在這一層加進去的。

**第四站是最終排序跟呈現**，前後端把結合之後的結果排出來、顯示到畫面上。

然後這整條是一個閉環。使用者看到畫面之後會點擊，**那些點擊行為又會回流進 DB，再跑一次同樣的流程。**

如果要我指出哪一段最需要 PM，那就是第三站。因為純工程面的排序是照購買機率從高排到低，結果就是**我最近在買電腦，前二十頁推薦全部都是電腦商品**，這對 business team 來說不合理。所以要把熱門商品、其他有興趣類型的 Top 1、Top 2 穿插進去。

結合的方式有兩種。**粗暴一點就是 business 凌駕一切**，直接用商業角度把規則的權重寫死；**比較進階的是再用一個模型專門去做權衡**，學出一個能均衡兩邊的結果。

**我的工作就在這裡：知道 business team 的東西可以怎麼安插進來，達到他們的目的，但同時不會把原本的 conversion rate 拉下來。**
`,
        en: `
::: html
<figure class="diagram">
<svg viewBox="0 0 730 176" role="img" aria-label="Recommendation system architecture">
  <defs>
    <marker id="ahe" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0 0 L8 4 L0 8 z" fill="#8d8474"/>
    </marker>
    <marker id="ahre" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0 0 L8 4 L0 8 z" fill="#ab3a1e"/>
    </marker>
  </defs>

  <rect class="dpill" x="6" y="18" width="104" height="66" rx="6"/>
  <text class="dt" x="58" y="46" text-anchor="middle">Backend DB</text>
  <text class="dt2" x="58" y="65" text-anchor="middle">raw data</text>
  <path class="dflow" d="M112 51 H124" marker-end="url(#ahe)"/>

  <rect class="dbox" x="128" y="18" width="104" height="66" rx="6"/>
  <text class="dn" x="138" y="33">1</text>
  <text class="dt" x="180" y="53" text-anchor="middle">Cleaning &amp;</text>
  <text class="dt" x="180" y="70" text-anchor="middle">pipeline</text>
  <text class="drole" x="180" y="102" text-anchor="middle">DATA</text>
  <text class="drole" x="180" y="114" text-anchor="middle">ENGINEER</text>
  <path class="dflow" d="M234 51 H246" marker-end="url(#ahe)"/>

  <rect class="dbox" x="250" y="18" width="104" height="66" rx="6"/>
  <text class="dn" x="260" y="33">2</text>
  <text class="dt" x="302" y="53" text-anchor="middle">Model</text>
  <text class="dt" x="302" y="70" text-anchor="middle">candidate list</text>
  <text class="drole" x="302" y="102" text-anchor="middle">DATA SCIENTIST</text>
  <text class="drole" x="302" y="114" text-anchor="middle">/ MLE</text>
  <path class="dflow" d="M356 51 H368" marker-end="url(#ahe)"/>

  <rect class="dbox key" x="372" y="18" width="104" height="66" rx="6"/>
  <text class="dn key" x="382" y="33">3</text>
  <text class="dt key" x="424" y="53" text-anchor="middle">Business</text>
  <text class="dt key" x="424" y="70" text-anchor="middle">logic layer</text>
  <text class="drole key" x="424" y="102" text-anchor="middle">PM ×</text>
  <text class="drole key" x="424" y="114" text-anchor="middle">BUSINESS TEAM</text>
  <path class="dflow" d="M478 51 H490" marker-end="url(#ahe)"/>

  <rect class="dbox" x="494" y="18" width="104" height="66" rx="6"/>
  <text class="dn" x="504" y="33">4</text>
  <text class="dt" x="546" y="53" text-anchor="middle">Final ranking</text>
  <text class="dt" x="546" y="70" text-anchor="middle">&amp; display</text>
  <text class="drole" x="546" y="102" text-anchor="middle">FRONTEND</text>
  <text class="drole" x="546" y="114" text-anchor="middle">/ BACKEND</text>
  <path class="dflow" d="M600 51 H612" marker-end="url(#ahe)"/>

  <rect class="dpill" x="616" y="18" width="104" height="66" rx="6"/>
  <text class="dt" x="668" y="46" text-anchor="middle">What the</text>
  <text class="dt2" x="668" y="65" text-anchor="middle">user sees</text>

  <path class="dloop" d="M668 84 V132 Q668 140 660 140 H66 Q58 140 58 132 V90" marker-end="url(#ahre)"/>
  <text class="dlooptext" x="363" y="160" text-anchor="middle">CLICKS FLOW BACK · RUNS AGAIN</text>
</svg>
<figcaption>The model is one node in the system, not the system</figcaption>
</figure>
:::

The way I understand a recommendation system, it isn't a model. **It's a pipeline, and the model is one node in the middle of it.**

Starting from the top: it begins with user behaviour, and that behaviour lands in the backend database. **The first stop is the data engineer**, who pulls the data out of the backend, decides how it gets cleaned, and schedules the pipeline, so that everything downstream has clean data to work with.

**The second stop is where the model comes in.** A data scientist or MLE builds the recommendation model and produces a candidate list. But here's the thing I think is most easily misunderstood: **that list is not what gets displayed.** My own initial understanding was "data goes into the model, a list comes out, the list goes up", and only later did I learn there's processing on both sides of the model.

**The third stop is the business logic layer, and that's where I sit.** What we're pushing this month, what inventory needs to move, which partnerships are running, all of that gets added at this layer.

**The fourth stop is final ranking and display**, where frontend and backend take the combined result, order it and put it on screen.

And the whole thing is a closed loop. Once the user sees the screen they click, and **those clicks flow back into the database and run through the same pipeline again.**

If you asked me which segment needs a PM most, it's the third one. Because a purely engineering ranking sorts by purchase probability from high to low, and the result is that **I've been buying computers lately, so my first twenty pages of recommendations are all computer products**, which doesn't make sense for the business team. So you interleave popular items and the top one or two from other categories the user is interested in.

There are two ways to combine them. **The blunt way is that business overrides everything**, hard-coding rule weights from a commercial point of view. **The more advanced way is to use another model specifically to arbitrate**, learning a result that balances the two.

**That's exactly where my job is: knowing how the business team's items can be slotted in to achieve their goal, without dragging down the conversion rate we started with.**
`
      }
    ]
  },
  {
    name: '反問',
    items: [
      {
        q: '你有什麼想問我們的嗎？',
        zh: `
#### 三題通用

1. 這個 PM 角色的**決策權範圍**到哪裡？roadmap 是我決定還是我執行？
2. 團隊的日常工作語言實際上是日文還是英文？跨 BU 溝通時呢？
3. 這個職位前一任是誰、為什麼離開？團隊過去一年人員流動如何？

#### 依職缺加問

| 職缺 | 必問 |
|---|---|
| AI Office（Travel） | AI Office 成立多久？11 人的職能組成？JD 提到 career pathway toward Product Manager，實際有幾個人走過、花多久？內部與對住宿業者的工作語言各是什麼？ |
| Recommendation | 這個 PM 的決策權到哪？PM 與 ML engineer 的分工邊界？「推廣到各 BU」佔工作比重多少？ |
| AI Agent PM（RMS） | 「AI 店長」構想與現有 RMS AI 的關係？我負責的是既有功能優化還是新形態？同組的 R-Karte PM 與我怎麼分工？ |
| AI PjM（Payment） | 4–6 人的組裡 PM 與資料科學家怎麼分工？ROI 定義的實際流程？公司的職級與調薪機制是怎麼運作的？ |
`,
        en: `
#### Three for any of them

1. **Where is the boundary of decision-making** in this PM role? Do I set the roadmap or execute it?
2. Is the team's day-to-day working language actually Japanese or English? And when communicating across BUs?
3. Who held this role before, and why did they leave? What has turnover looked like over the past year?

#### By specific role

| Role | Ask |
|---|---|
| AI Office (Travel) | How long has the AI Office existed? What functions make up the 11 people? The JD mentions a career pathway toward Product Manager, how many people have actually taken it and how long did it take? What's the working language internally versus with accommodation partners? |
| Recommendation | How far does this PM's decision-making go? Where's the dividing line between PM and ML engineer? How much of the job is rolling features out across BUs? |
| AI Agent PM (RMS) | How does the "AI store manager" concept relate to the existing RMS AI? Would I own optimisation of existing features or something new? How would I split work with the R-Karte PM in the same group? |
| AI PjM (Payment) | In a team of four to six, how do the PM and the data scientists divide the work? What's the actual process for defining ROI? How do the grade and pay review mechanisms work? |
`
      }
    ]
  }
  ]
}

];

if (typeof module !== 'undefined') module.exports = { DATA };
