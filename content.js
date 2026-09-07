/* 面試小抄 — 內容檔
   DATA = [ { id, label, section, groups:[ { name, items:[ {q, body} ] } ] } ]
   section 是左側索引的分區標題（相同的會被歸在同一區）
   body 用 Markdown（粗體 ** / 表格 | / 小標 #### / 清單 - / 分隔線 ---）
   注意：body 裡不要出現反引號。
*/

const DATA = [

/* ═══════════ 自我介紹 ═══════════ */
{
  id: 'intro',
  label: '自我介紹',
  section: 'General',
  groups: [
  {
    name: '中文',
    items: [
      {
        q: '請你自我介紹（面向日商）',
        body: `
您好，我是王薇 (Vivian)。

我目前擔任產品經理，擁有四年產品開發經驗，專注於直播平台、區塊鏈及加密貨幣領域。

在 Typus Finance 任職期間，我主導了鏈上金融永續合約產品從零到一的開發全生命週期。我負責市場與競品分析、需求定義、規格撰寫，並協調工程與設計團隊進行時程規劃，同時執行上線後的數據追蹤與產品迭代。Typus 是一家新創公司，加上加密貨幣市場本身的趨勢與漲幅變動特別快，產品的開發節奏也必須跟著壓縮，才能在市場熱度還在的時候把功能推上線。我們的永續合約產品正好趕上了那一波行情，在第一季即累積約 **8,700 萬美元**的交易量。

此前，我於亞洲最大的直播平台 17LIVE 負責平台使用者體驗與用戶成長指標。我帶領一個五人的跨職能小組，成員涵蓋工程師、資料分析師、設計師與客服，透過建立內部使用者回饋分析平台，將零散的客戶投訴與意見轉化為具結構性的產品需求，並以此數據驅動產品路線圖的優先級決策。此舉顯著優化了產品開發流程，使問題處理效率提升 **15%**，留存率亦成長 **10%**。

目前我正於倫敦國王學院攻讀管理與科技變革碩士，預計今年九月畢業。由於科系的關係，我比一般管理學程更早接觸到 AI Agent 這個領域，也逐漸把它變成我的預設工作方式：無論是學業、日常生活或未來的工作，我都會運用 AI Agent 開發產品原型與內部工具，以最低的成本驗證創新的想法。我的碩士論文研究的正是「AI 時代下如何優化產品開發流程」，聚焦於需求文件在產品、設計與工程團隊之間的轉譯機制，並探討 AI 如何降低跨部門的溝通成本；研究過程中，我深入訪談了包含 TikTok 在內的多家大型科技企業，以獲取產業第一線的實務洞察。

過往的職涯經驗主要深耕於亞洲市場，我對該區的使用者行為與迭代節奏有深刻掌握。畢業後，我計畫回歸亞洲市場發展，並將日本視為首選目標。由於具備群馬大學交換經驗及家族背景，我對日本市場有著高度的連結感與文化適應力。

畢業之後，我希望能把這一年的研究成果，以及自己在 AI 驅動開發流程上累積的實作體悟，帶進下一份工作，真正落實在團隊的產品開發流程裡。

以上是我的背景簡介，期待能與您進一步交流。
`
      },
      {
        q: '請你自我介紹（面向台灣企業）',
        body: `
您好，我是王薇 (Vivian)。

我目前擔任產品經理，擁有四年產品開發經驗，專注於直播平台、區塊鏈及加密貨幣領域。

在 Typus Finance 任職期間，我主導了鏈上金融永續合約產品從零到一的開發全生命週期。我負責市場與競品分析、需求定義、規格撰寫，並協調工程與設計團隊進行時程規劃，同時執行上線後的數據追蹤與產品迭代。Typus 是一家新創公司，加上加密貨幣市場本身的趨勢與漲幅變動特別快，產品的開發節奏也必須跟著壓縮，才能在市場熱度還在的時候把功能推上線。我們的永續合約產品正好趕上了那一波行情，在第一季即累積約 **8,700 萬美元**的交易量。

此前，我於亞洲最大的直播平台 17LIVE 負責平台使用者體驗與用戶成長指標。我帶領一個五人的跨職能小組，成員涵蓋工程師、資料分析師、設計師與客服，透過建立內部使用者回饋分析平台，將零散的客戶投訴與意見轉化為具結構性的產品需求，並以此數據驅動產品路線圖的優先級決策。此舉顯著優化了產品開發流程，使問題處理效率提升 **15%**，留存率亦成長 **10%**。

目前我正於倫敦國王學院攻讀管理與科技變革碩士，預計今年九月畢業。由於科系的關係，我比一般管理學程更早接觸到 AI Agent 這個領域，也逐漸把它變成我的預設工作方式：無論是學業、日常生活或未來的工作，我都會運用 AI Agent 開發產品原型與內部工具，以最低的成本驗證創新的想法。我的碩士論文研究的正是「AI 時代下如何優化產品開發流程」，聚焦於需求文件在產品、設計與工程團隊之間的轉譯機制，並探討 AI 如何降低跨部門的溝通成本；研究過程中，我深入訪談了包含 TikTok 在內的多家大型科技企業，以獲取產業第一線的實務洞察。

當初赴倫敦攻讀碩士，是希望以更有系統的方式研究實務上遇到的問題，並補強跨文化協作的經驗。而我過往的職涯經驗主要深耕於亞洲市場，對該區的使用者行為與迭代節奏有深刻掌握，因此畢業後我計畫回到台灣發展，將這一年的研究成果與國際經驗帶回熟悉的市場。

畢業之後，我希望能把這一年的研究成果，以及自己在 AI 驅動開發流程上累積的實作體悟，帶進下一份工作，真正落實在團隊的產品開發流程裡。

以上是我的背景簡介，期待能與您進一步交流。
`
      },
      {
        q: '請你自我介紹（60 秒短版）',
        body: `
我有大約 4 年的產品經驗，橫跨 B2C 直播平台與金融科技。最近在 Typus Finance 端到端負責鏈上衍生品，雙週節奏交付 30 多項功能，期間 MAU 從約 1,000 成長到 20,000 以上、產品內存入資產從 800 萬成長到 2,000 萬美元。在那之前在 17LIVE 主導台灣、日本與東南亞的產品專案，用訪談加 SQL 把洞察轉成 roadmap 優先級。我目前在倫敦國王學院讀 Management and Technological Change 碩士，論文研究 AI 如何降低產品與工程之間的溝通成本。

**跟多數 PM 不太一樣的地方是：我自己會做 prototype、做儀表板、也自己把 AI agent 接進工作流，所以我從洞察走到實際產出的速度比較快。**
`
      }
    ]
  },
  {
    name: 'English',
    items: [
      {
        q: 'Tell me about yourself.',
        body: `
> 約 2 分 30 秒。收尾有兩版，日商用 A，非日商用 B。

Thank you for making the time today. I'm Wei Wang, and I go by Vivian.

I'm a product manager with four years of experience across live-streaming platforms and the blockchain industry.

Most recently, at Typus Finance, I took an on-chain perpetual futures product from zero to one. The numbers we watched were fairly basic: **trading volume, active users, and deposits**. The crypto market moves fast, to keep pace with the market, I ran **bi-weekly releases** and shipped **more than thirty features** over the year. The product reached about **87 million US dollars** in trading volume in its first quarter, this experience taught me how to **prioritize under uncertainty, move quickly, and stay focused on the metrics that matter**.

Before that, at 17LIVE, I owned platform user experience and growth, **working with the Taiwan, Japan and Southeast Asia market teams**. My features were measured on conversion and retention. For a 90-second clips feature, I defined **D0 to D7 retention** as the success metric with the data team at the planning stage, and we **A/B tested before full rollout**. I also proposed an internal user-feedback dashboard and led a **five-person cross-functional team** to build it, we brought together customer-support tickets, app-store reviews, and creator interviews into one view for prioritization. It improved issue-resolution speed by **15%** and contributed to a **10% improvement in retention**.

I also learned that **the same feature can perform differently across markets**. So I learned to use both data and user research to understand whether the problem came from **local behavior, local needs, or the product itself**.

Alongside my industry experience, I'm completing a master's degree in London. The programme put me in front of AI agents early, and they have become my default way of working: I build prototypes to test ideas quickly and cheaply. My dissertation explores how AI is changing collaboration within product teams, drawing on interviews with companies including TikTok.

---

#### 收尾 A：日商

After graduating I plan to return to Asia, with **Japan as my first choice**, where I previously spent an exchange year at Gunma University and also have family ties in Tokyo. I'm comfortable working in **Mandarin, English and Japanese**, which is part of why I'm drawn to teams that work across more than one market. In my next role I'd like to bring together my experience in product execution and the AI-driven way of working I've built up this year.

#### 收尾 B：非日商

I am comfortable working in **Mandarin and English**, which is part of why I am drawn to teams that work across more than one market. I am interested in roles with **cross-cultural collaboration**, where I can bring together my experience in product execution and the AI-driven way of working I have built up this year.
`
      }
    ]
  },
  {
    name: '日本語',
    items: [
      {
        q: '自己紹介をお願いします。',
        body: `
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
        body: `
未來 3 年，我想在一個真的把 AI 放進產品核心的團隊裡，成為能同時做產品判斷與動手驗證的 PM。5 年後，我希望能負責一整條產品線，並把「AI 如何降低跨職能溝通成本」這件事從我的研究題目變成團隊實際在用的工作方式。

拆得更細一點：短期一年內，我想把既有的產品交付能力放進更大規模、更成熟的組織裡跑一次，補上我目前比較缺的規模化經驗。三年是 Senior PM，負責有明確商業指標的產品線。五年之後帶團隊，並且持續在 AI 產品化這個題目上保持第一手實作能力。
`
      },
      {
        q: '你有哪些優點？',
        body: `
三個。

第一，**AI-augmented building**。我自己做 prototype、儀表板與數據分析，不需要等別人排期就能驗證假設。

第二，**數據導向的優先級判斷**。訪談加 SQL 是我的基本配備，質化告訴我為什麼，量化告訴我有多少人。

第三，**跨文化溝通**。中英日三語，我在 17LIVE 是用日文做跨職能協作的。
`
      },
      {
        q: '你的缺點是什麼？',
        body: `
我以前太容易自己把事情做掉。因為我會 prototype、會拉數據，遇到卡住的環節我的第一反應是自己動手，短期看很有效率，但會讓團隊少了一次共同理解問題的機會，也讓我變成瓶頸。

我現在的作法是：**先問這件事三個月後應該由誰負責**，如果不該是我，我就把它做成一個示範版本加上文件交出去，而不是長期握在手上。這在 Typus 重新設計交付流程時特別明顯，我把自己的判斷寫成規格與 user story 模板，讓其他人也能照著跑。

---

另一個版本：

我對規模化的產品組織經驗還不夠，過去待的都是小而快的團隊，決策鏈短。我很清楚在大組織裡，**說服與對齊的成本本身就是工作的一部分**，所以我現在會刻意練習把決策理由寫成書面文件，而不是靠一次面對面的溝通解決。
`
      },
      {
        q: '你的缺點是什麼？（更多備選）',
        body: `
挑**一個**講，不要全講。每個都要有「我怎麼處理」的下半段。

| 缺點 | 一句話說法 |
|---|---|
| **同理心過頭** | 有時會讓我過於關注細節、在乎團隊氣氛，導致在決策時較為謹慎，需要花更多時間權衡各方利弊 |
| **好奇心不夠** | 有時候好奇心不夠，導致有些潛在問題來不及發現 |
| **抗壓太強** | 有時可能讓我過於承擔壓力，不夠及時地向團隊或上級反映困難，因而錯過了尋求幫助的機會 |
| **掌控力不足** | 見下方三個備選 |

---

#### 掌控力：備選 A（關係太好而不夠果斷）

因為我與團隊成員之間關係密切，有時候在分配任務或提出具體需求時，我發現自己**因為不想破壞這份像朋友一般的關係，而變得猶豫，可能不夠果斷**。這讓我意識到，即便溝通技巧良好，也需要學會如何在保持良好關係的同時，確保團隊能夠有效率地完成任務。我需要在這兩者之間找到平衡，以提升團隊效能。

#### 掌控力：備選 B（全攬在自己身上）

有看過公司 PM 因為想確保產品在各階段的完整性，要**親自測試過後再 deliver 給下一階段的技術端**，但這種把所有事情全攬在自己身上的做法，一旦身兼多專案，反而會耽誤到產品的時程。

#### 掌控力：備選 C（容易對重複性工作厭煩）

**容易對單調重複性質的事物感到厭煩。** 例如在過去的學習經驗中，我不擅長需要反覆背誦的課程，而對需要探索問題核心、掌握理論框架的課程較有興趣。在工作上，我也希望能每天面對新的挑戰，在工作中探索能夠革新的地方。

> 注意：備選 C 對在地化這種偏日常維運的職缺是地雷，那種場合改用備選 A。
`
      },
      {
        q: '為什麼做 PM？',
        body: `
因為我喜歡待在「使用者想要什麼」和「技術能做到什麼」中間那個位置。

我的背景是文化創意產業管理，不是本科出身的產品或工程，所以我很習慣把不同語言的人翻譯給彼此聽。在 17LIVE 我發現，把散落在客服、QA、資料團隊的回饋整合到同一個視圖，比任何一次會議都更能推動決策，那次讓問題處理速度提升了 15%。**那時候我確定，這就是我想長期做的事。**
`
      },
      {
        q: '除了薪水，你最重視什麼？',
        body: `
三件事，依序是：**能不能學到我現在還沒有的東西**，特別是規模化的產品經驗；**團隊是不是高信任低政治**；以及**產品有沒有真實的使用者**。

錢重要，但我更在意兩年後我會變成什麼樣的 PM。
`
      }
    ]
  },
  {
    name: '經驗故事',
    items: [
      {
        q: '講一個你主動發起、不在你 KPI 上的事',
        body: `
17LIVE 的用戶回饋散落在客服工單、QA 紀錄、應用商店評論與數據團隊的報表裡，沒有人擁有全貌，重複的問題會被重複討論。這件事不在我的 KPI 上，但我判斷它是很多產品爭論的根因，所以我主動提案。

我聯合客服、QA、資料與工程團隊，定義要追蹤的回饋分類與欄位，把多個來源整合到同一個共享視圖，並約定每週檢視的節奏。結果是**問題處理速度提升 15%**，團隊可以更早看到浮現中的問題，而不是等它變成大量客訴。

最難的不是做出儀表板，而是說服四個團隊願意用同一套分類。我的作法是先用他們現有的資料做出一個粗版，**讓他們看到價值再談規範**。
`
      },
      {
        q: '說一個你直接用數據做功能決策的例子',
        body: `
#### 中文

我負責**短影音功能**。我們發現**觀看有提升，但沒有有效帶動註冊轉化**。

我先把**路徑拆開看**，看各入口到註冊的**轉化率和流失點**，發現用戶在**關鍵步驟前猶豫最多**。

所以我們優先**簡化註冊路徑、調整引導**，並用 **A/B 測試**驗證。最後**註冊轉化有提升**。

我學到的是：**先用數據找出卡點、設驗證指標、再快速迭代。**

---

#### English

I owned a short-video feature. We saw viewing go up, but it was not translating into sign-ups.

I broke the path down first, looking at conversion rate and drop-off from each entry point through to registration, and found that users hesitated most right before the key step.

So we prioritised simplifying the registration path and adjusting the prompts, and validated it with an A/B test. Sign-up conversion improved.

What I learned is to use data to locate the blocker first, define the metric that will validate the fix, and then iterate quickly.
`
      },
      {
        q: '講一個你從 0 到 1、在陌生領域交付的例子',
        body: `
我不是金融或財經背景，卻要在 Typus 負責 Sui 鏈上的選擇權與永續合約產品。我必須在短時間內補足鏈上衍生品與交易機制的領域知識，同時把產品推上線。

我從競品分析與產品定義開始，制定 roadmap、管理 backlog、主持 sprint planning，在雙週發布節奏下交付 30 多項功能與優化。期間 **MAU 從約 1,000 成長到 20,000 以上，產品內存入資產價值從 800 萬美元成長到 2,000 萬美元。**

**領域知識可以補，補的方法是把競品拆開來看它們為什麼這樣設計，而不是只讀教學文件。**
`
      },
      {
        q: '講一個你改善流程、降低返工的例子',
        body: `
Typus 的 rebranding 專案期間，需求進到開發後常因理解落差而返工，時程受影響。我要找出返工的根因並修掉，而不是靠加班補。

我重新設計從 kickoff 到交付的流程，改用有競品分析佐證的規格加上 user story，並要求在 kickoff 就把取捨攤開來講清楚。**返工週期降低 30%。**

**返工幾乎都不是工程的問題，是決策沒有在最便宜的時間點被做掉。**
`
      },
      {
        q: '講一個你做 AI 產品的例子',
        body: `
我和一位工程夥伴合作，做了一個每天處理 200 篇以上文章的 agentic 平台，串接 3 個 LLM，共 33 個模組，從爬取、解析、分類評分、加值、專家審核到 RAG。我負責產品：定義需求、定義評估標準，以及 LLM 的 A/B 測試框架。

我把「什麼叫做好的輸出」寫成可測量的評估標準，再用 A/B 框架比較不同模型組合的成本與品質。結果是**運行成本降低 83%，品質只犧牲 3%**，平台實際上線運行約 1.5 個月。

**困難的從來不是模型，而是把它產品化的工程紀律與評估設計。**
`
      },
      {
        q: '講一個跨文化、跨時區協作的例子',
        body: `
在 17LIVE，功能要同時在台灣、日本與東南亞上線，各區市場需求與優先級不同。我負責協調跨區的上線節奏，並在日本市場用日文直接做跨職能溝通。

我在產品、工程、營運與管理層之間扮演轉譯者，把商業目標、技術限制與現場需求對齊成同一套優先順序；也與直播特效團隊合作優化日本市場的 V-Liver 觀看體驗，**有效觀看時長提升 10%**。

**跨文化協作最重要的不是語言，是知道對方需要多少 context 才敢做決定。**
`
      },
      {
        q: '講一個你自己動手做的 side project',
        body: `
來英國念書時，租屋資訊過載且分散；同時我發現碩士班同學對 agentic coding 工具幾乎完全陌生。這兩件都不是別人交辦的事，是我自己判斷值得做。

前者我用產品的方法處理：定義 must-have 條件、做需求分析，再做出比現成平台更精準的篩選工具。後者我把 Claude Code 包成一門實作課程，和工程師朋友合作，替倫敦帝國學院的非工程背景學生辦過三次。

工具解決了我自己的真實問題；課程證明非工程背景的人也能在幾小時內開始用 agent 做事。**這兩件事後來都變成我履歷上最能展現差異化的部分。**
`
      },
      {
        q: '用數據說服不同意見相關方的經歷',
        body: `
#### 中文

在 17LIVE，我遇過不同團隊對「應該先解決哪一個用戶問題」有不同看法的情況。**客服團隊通常關注出現頻率最高的問題**；**產品和營運團隊**則會從商店評論、創作者回饋，或其他用戶研究看到不同的優先事項。

當時的困難是，這些資訊分散在不同來源，所以討論很容易變成**各自根據經驗或個人意見做判斷**，而不是用同一套標準決策。

因此，我提出建立**用戶回饋儀表板**，把客服工單、商店評論與創作者訪談整合到同一個優先級視圖裡。我們用**問題量、嚴重度、受影響用戶數，以及對留存可能造成的影響**來排序。

這讓團隊可以基於同一份證據討論，而不是**由聲音最大的人決定優先順序**。最後，這個做法讓問題處理速度提升了 **15%**，而我們優先處理的改善也促成留存率提升 **10%**。

我從中學到，**數據不是取代不同團隊的意見，而是建立共同的判斷基礎**，讓大家更快對齊並做出決策。

---

#### English

At 17LIVE, different teams often had different views on which user issues we should prioritize. Customer support focused on the most frequent complaints, while product and operations teams also had input from app reviews and creator interviews. The challenge was that the evidence was scattered, so discussions could become driven by individual opinions.

I proposed building a **user-feedback dashboard** that combined support tickets, app-store reviews, and creator feedback into one prioritization view. We looked at factors such as **issue volume, severity, affected user segments, and the impact on retention**.

This gave the teams a shared way to decide priorities **based on evidence rather than the loudest opinion**. As a result, we improved issue-resolution speed by **15%**, and the changes we prioritized contributed to a **10% improvement in retention**.

What I learned is that **data does not replace stakeholder input, but it gives everyone a common starting point** for making decisions.
`
      },
      {
        q: '講一次你在資源有限的情況下，選擇不做某個功能或砍掉一個需求的經歷',
        body: `
#### 中文

在 17LIVE，我們曾經有一個**虛擬 Avatar 功能**，讓直播主可以自訂外觀，也能為平台帶來一些營收。但上線後有部分觀眾覺得 Avatar 影響觀看體驗，希望直接取消。

資源有限的情況下，我們評估了三個方向：**直接下架、全面重做、或給用戶選擇**。

我決定當下**不做全面改版也不直接下架**，而是和工程團隊合作加了一個**關閉 Avatar 的選項**，用比較低的成本回應用戶，也保留營收機會。

我們**先對部分用戶發布**，觀察四件事：**關閉率、用戶回饋、觀看時長和營收變化**。

我學到的是，**取捨不只是做或不做，而是找到平衡體驗、商業價值和成本的最小解法。**

---

#### English

At 17LIVE, we had a virtual avatar feature that let streamers customize their appearance and it generated revenue, but some viewers disliked the visuals and asked us to remove it.

With limited resources, I decided **not to do a full redesign or remove the feature entirely**. Instead, I worked with engineering to add **a simple option for viewers to hide avatars**, which addressed the concern while keeping the revenue opportunity.

We released it to part of the user base first, monitored feedback and viewing time, and the key lesson for me was **finding the smallest solution that balances user experience, business value, and delivery cost**.
`
      },
      {
        q: '講一個你的失敗經驗',
        body: `
17LIVE 客訴追蹤。**S / T / A / R**。

#### 中文

**S**：在剛開始追蹤客訴時，每天接收到的客訴種類繁多，我**漸漸麻痺**，認為並不是每個客訴都值得特別關注。然而，某天我發現一個問題開始逐漸擴大，**從一天只有一位用戶回報，到第三天就增加到十多個用戶抱怨**。這個狀況其實就不正常了。

**T**：我的任務是確保客戶的需求得到妥善解決，並且項目能夠按時交付。但由於我對客戶的關注程度不夠，我可能會錯過一些潛在的問題或客戶的不滿意。

**A**：為了解決這個問題，首先我先**回報給主管**，同時主動與其他更了解產品功能的同事合作，例如 **QA 團隊**成員。我們針對**可能會對產品功能或營收產生影響**的問題優先進行內部測試，並持續留意追蹤問題是否有惡化。

**R**：這些行動帶來了明顯的改善。透過與其他同事的合作和測試，我們能夠更及時地發現潛在的問題並加以解決，從而確保使用者體驗。這次教訓讓我了解，我在關注客訴和意識到潛在問題上存在不足，**對於這個工作應該要隨時保持好奇心、深入思考、主動行動**。這也提高了我的團隊合作能力和對產品功能的理解，使我能夠更好地應對類似的挑戰。

---

#### English

**S**: At the beginning of tracking customer complaints, I received a big amount of them every day, and I gradually became numb and thought that not every complaint was worth special attention. However, one day a problem went from one user report a day to more than ten user complaints on the third day. At that moment, I realised that this situation had gone uncontrollable.

**A**: To solve this problem, I first actively cooperated with the QA team to prioritise internal testing for issues that may affect product functionality or revenue. At the same time I reported to the stakeholders and my supervisor, to keep them up to date by continuing to monitor whether the problem was worsening or getting better.

**R**: These actions finally solved the issue. Through collaboration and testing with other colleagues, we were able to fix the problem in a more timely manner, ensuring user experience. This lesson made me realise to always keep curiosity and think deeply, to better cope with similar challenges afterwards.
`
      }
    ]
  },
  {
    name: '動機與條件',
    items: [
      {
        q: '為什麼想加入我們公司？',
        body: `
我對 **[公司]** 感興趣的原因是 **[具體的產品、使命，或你實際用過的體驗]**。我是一個會自己動手驗證的 PM，會做 prototype 也會做數據分析，所以我希望能在 **[對他們的具體貢獻]** 這件事上出力。我的背景橫跨金融科技（Typus）與 B2C 社群（17LIVE），跟你們在 **[他們的領域]** 的方向可以直接對上。
`
      },
      {
        q: '我們為什麼要錄取你？',
        body: `
因為我把 **PM 的判斷力和動手能力放在同一個人身上**。

我有可被驗證的成果：Typus 的 MAU 從 1K 成長到 20K 以上、存入資產從 $8M 到 $20M；17LIVE 的正向回饋提升 30%。而且我自己做 prototype 和數據分析，**從洞察到交付的距離比較短**。加上中英日三語，我可以直接在跨區團隊裡工作。
`
      },
      {
        q: '你為什麼去念碩士？為什麼是英國、倫敦？',
        body: `
說起來其實很單純：我小時候被哈利波特吸引，從那時候起就對英國有一種憧憬。高中的暑假我跟旅行團來過一次，走了不少知名景點，但那是一種「被帶著看」的體驗，看完之後反而更想長大以後自己來，用生活的方式真正待進這個文化裡，而不是隔著遊覽車的窗戶。所以念碩士的時候，我選了倫敦的 King's College London。

真的住下來之後，倫敦給我的東西比我想像的多：這裡的團隊幾乎都是多國籍組成的，一個產品從第一天就要面對不同語言與市場，這跟我在 17LIVE 同時做台灣、日本與東南亞的經驗完全對得上；而倫敦的金融科技聚落又剛好接上我在 Typus 的背景。**所以現在的答案已經不只是童年的憧憬了，是我想在這裡把職涯做起來。**

#### 那你打算待多久？會不會回去？

我是打算長期留下來的。畢業後可以走 Graduate Route，約兩年內不需要雇主擔保，我希望在這段時間內找到一個能一起長期走下去的團隊。
`
      },
      {
        q: '你的碩士跟職涯的關係是什麼？',
        body: `
我在 17LIVE 和 Typus 都反覆遇到同一個問題：**產品和工程之間的翻譯成本非常高，PRD 到 SPEC 之間會流失大量資訊。**

我想把這件事研究清楚，所以去念了 Management and Technological Change，論文題目是 PRD 作為 boundary object，AI 在其中扮演什麼角色。**這不是離開產業，是帶著一個具體的問題去找方法。**
`
      },
      {
        q: '為什麼是日本？',
        body: `
我曾以交換生身分就讀群馬大學一年，具備商務日語能力（JLPT N1），在 17LIVE 也長期用日文做跨職能協作。加上家人在日本，我希望在當地建立長期職涯與生活，**這不是短期選項。**
`
      },
      {
        q: '這一年在念書，中間的空檔怎麼解釋？',
        body: `
這段時間我在念全職碩士，同時把產品實作沒有停下來：做了 agentic AI 平台的產品規劃、租屋篩選工具、辦了三次 AI agent 實作課程，也用 agent pipeline 管理自己的求職流程。這些都在我的 portfolio 上可以看到。
`
      },
      {
        q: '簽證、到職時間、地點、期望待遇',
        body: `
| 問題 | 答案 |
|---|---|
| 需要擔保嗎？ | 表格只有 Yes/No 就選 **Yes**。有補充欄位就加：畢業後可走 Graduate Route，約兩年內不需要雇主擔保，之後才需要。 |
| 何時可到職？ | **2026 年 9 月畢業後**；實習類可即時。 |
| 地點彈性 | 以倫敦為主，可 on-site，也接受 remote 或 hybrid，願意 relocate。 |
| 薪資期望 | 英國主帶 **£50,000–£60,000**；日本主帶 **600〜800 萬円**。 |
`
      }
    ]
  },
  {
    name: '反問',
    items: [
      {
        q: '你有什麼想問我們的嗎？',
        body: `
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
        body: `
我不相信單一公式，但我有固定的三個問題：**這個問題影響多少人**（量化訊號）、**影響有多痛**（訪談與 VOC）、以及**做了之後我們會不會更靠近這一季的目標**。

在 17LIVE 我就是用訪談加 SQL 交叉比對做這件事，質化告訴我為什麼、量化告訴我有多少人。爭不下來的時候，我會**把取捨明確寫出來讓決策者選**，而不是讓它懸在會議裡。
`
      },
      {
        q: '時間緊急的情況下如何排序需求？',
        body: `
用 **ICE 三格**，而且每一格我都會先去要資料，不自己猜。

#### 第一格 Impact：影響範圍有多大

我會先確認三件事：**這個需求是誰提的、要解決的問題是什麼、預期的目標跟成效是什麼**。這三件事沒講清楚之前我不會估工時。

確認完我會去要數字：受影響的用戶量、這一段目前的轉換或客訴量，如果是營收類就直接看金額。**在還沒有數字之前，「急」只是一種情緒。**

#### 第二格 Confidence：我對這個估計有多少信心

這個影響是量出來的還是推測的？有沒有實驗或歷史資料撐得住？**如果信心低，我會傾向先做一個小的驗證版本**，而不是一次投入全部資源。

#### 第三格 Ease：要付出多少成本

這一格我不會自己猜，我會去問：

- 問**工程師**技術上實際要多久、有沒有依賴
- 問**資料團隊**指標拿不拿得到
- 問**客服跟營運**，上線之後誰要承接

---

#### 兩個補充

**已經 ready 的項目有沒有期程壓力？** 新需求可不可以接受下次 release 再發布？沒上會產生什麼負面影響，Plan B 是什麼？

**產品永遠可以再排序。** 即使同樣是 P1，也可以再細分。
`
      },
      {
        q: '你怎麼定義一個功能的成功指標？',
        body: `
**先定義行為，再定義數字。**

我會先問「如果這個功能成功了，使用者會多做哪一件事」，再把那件事變成可以追蹤的指標，**同時配一個護欄指標避免局部最佳化**。

做 AI 平台的時候我也是這樣定義評估標準的：先寫清楚什麼叫做好的輸出，才有辦法用 A/B 框架比較成本與品質，最後拿到降本 83%、品質只掉 3% 的結果。
`
      },
      {
        q: '你怎麼做 product discovery？產品需求是怎麼產生的？',
        body: `
質化加量化，兩邊都要。

17LIVE 時我和 UX Research 一起訪談一般用戶與頭部主播，同時追蹤留存與行為數據。另外我很依賴一個習慣：**把散落的回饋集中起來看。** 客服工單、QA 紀錄、商店評論這些通常沒人整理，但它們是**最便宜的洞察來源**，我在 17LIVE 就是把它們整合成儀表板，讓問題處理速度提升 15%。
`
      },
      {
        q: '你跟工程師意見不合的時候怎麼辦？',
        body: `
我會先分清楚是哪一種不同意，因為這兩種的處理方式完全相反。

**如果是可行性的不同意，那通常他們是對的。** 他們知道系統裡有什麼我不知道的東西。我的工作不是說服他們，是問清楚成本到底卡在哪，然後**改需求，而不是改人**。很多時候我要的那個價值有第二條路可以達成，只是我一開始把需求寫成了一個具體做法。

**如果是優先序的不同意，那是我的責任，不是他們的。** 代表我沒有把「為什麼是這個」講清楚。我的標準是：**要能讓他們自己複述出來這件事為什麼重要。** 講到他們能複述，通常爭議就沒了；講不到，那多半是我自己也還沒想清楚。

在 Typus 我發現大部分衝突其實來自 kickoff 沒講清楚，所以我後來把力氣往前放，重新設計流程之後返工降了 30%。
`
      },
      {
        q: '你怎麼管理時間、追蹤專案進度？',
        body: `
80/20。我把 20% 的時間用來完成 80% 的任務，騰出來的時間拿去做 side project 和自動化。重複性的事情我盡量交給自動化處理，專注在真正需要判斷的工作上，我的求職 pipeline 就是這樣做的。
`
      }
    ]
  },
  {
    name: 'AI',
    items: [
      {
        q: '你怎麼用 AI 工具？你有實際動手做過 AI 嗎？',
        body: `
我的分界點是**從 chatbot 變成 agent**。

一開始我跟大家一樣把 Claude 當查資料和潤稿工具，直到用了 Claude Code，它是在我的檔案裡工作、自己執行步驟，我就從「問問題」變成「交付工作」。現在 AI agent 是我生活、學業與工作的一部分：租屋篩選工具、AI agent 實作課程、我自己的求職 pipeline 都是這樣做出來的。

**模型從來不是難的部分，難的是框對請求、驗證回來的東西，然後穩定重複這兩件事。**
`
      },
      {
        q: '你怎麼衡量 AI 功能的品質？',
        body: `
用**可測量的評估標準加 A/B**，不能只看 demo 好不好。

在那個 33 模組、3 個 LLM 的平台上，我把「好的輸出」寫成評估標準，再用 A/B 框架比較不同模型組合，最後拿到運行成本降低 83%、品質只犧牲 3% 的結果。

**關鍵是要先接受一定會有品質取捨，然後把取捨的幅度量化，而不是假裝沒有。**
`
      }
    ]
  }
  ]
},

/* ═══════════ 專案深挖 ═══════════ */
{
  id: 'projects',
  label: '專案深挖',
  section: 'General',
  groups: [
  {
    name: '回饋儀表板',
    items: [
      {
        q: '過去帶給你強烈成就感的項目？',
        body: `
#### 中文
是我在 17LIVE 主動提案並主導的**用戶回饋分析平台**。時間點其實很早，那是我第一個真正掛名 Owner、從頭到尾自己負責的專案，所以印象特別深刻。

**當時的狀況**：用戶的聲音其實很多，散在客服工單、App Store 與 Google Play 評論、還有我們對頭部主播的訪談裡，但我們要用的時候得手動從資料庫撈出來、各自貼在不同的試算表，整個流程是被動的。結果就是我們**知道用戶在抱怨，卻說不出哪一個抱怨最值得先修**。

**我做了什麼**：我把自己當成這個內部工具的 PM，從使用者，也就是客服與 PM 的角度去寫 PRD、定 spec，帶一個五人的跨職能小組，成員有工程師、資料分析師、設計師跟客服，用 Scrum 推到上線。過程中最花時間的其實不是開發，是**跟資料工程師和資料科學家一起把指標定義出來並驗證**，因為同一個「客訴數」在客服眼中和在產品眼中根本不是同一個東西。

**結果**：問題處理效率提升 **15%**、留存成長 **10%**、正向回饋成長 **30%**。

**但真正讓我有成就感的不是這三個數字，是團隊決策的依據換掉了。** 在那之前，roadmap 的優先序很大一部分靠誰講話比較大聲；之後我們是打開同一個看板，指著同一份資料排順序。因為這是我第一次自己扛下一個專案的頭尾，那種「我做的決定真的改變了團隊怎麼工作」的感覺特別具體，也是我確定自己想做 PM 的那一次。

---

#### English
I will share the dashboard project which I was in charge of.

The background of the project was that initially, we had to manually extract data from our database and compile them individually in different spreadsheets, resulting in a rather passive workflow. So, we aimed to establish a system for real-time user feedback, allowing the development team to continuously monitor and conduct iteration and improvements after feature launches.

As a project owner, I worked closely with Data Engineers and Data Scientists, and was involved in everything from writing the PRD and designing the specifications, holding meetings, driving the development process, and ultimately releasing the project.

This process gave me a profound understanding of the entire product development lifecycle. Despite facing some challenges along the way, the final outcome, **increasing good user feedback by 30%**, was actually impressive. The customer service team can promptly track user complaints and quickly resolve issues. Simultaneously, product managers can easily capture user feedback related to various projects, allowing for continuous improvement of the product. In sum, this dashboard is not just a tool but a solution that significantly enhances user experience and operational efficiency.
`
      },
      {
        q: '當中有沒有遇到什麼挑戰？',
        body: `
#### English

My thinking was not comprehensive enough, as I was too eager to find a solution without fully aligning ideas in meetings, which led me to overlook some potential corner cases. As a result, there were some issues that required modifications during the internal testing. Although it did not cause significant schedule delays, it did consume the team's resources and time.

---

#### 中文（S / R）

**S**：曾經在工作中犯過一個錯誤。在擔任某專案的 owner 時，當時我的思考比較不全面，可能過於急於尋求解決方案，而沒有充分地約會議 align 雙方的想法，因而忽略了一些潛在的 corner case。導致在專案發佈後，仍有許多需要進行修改的部分，雖然沒有造成嚴重的時程延誤，但確實消耗了團隊的資源與時間。

**R**：這次經驗讓我意識到，對於專案管理者來說，**思考全面和考慮到所有可能性的重要性**。我學習到開發一個專案需要更加細心和周密地規劃與執行。作為專案負責人需要事先把所有 use case 列清楚，但團隊之所以重要與可貴，就在互相幫助、發揮每個人領域擅長的知識，共同確保專案的成功。
`
      }
    ]
  },
  {
    name: '90 秒短影音',
    items: [
      {
        q: '90s clip 專案完整說明',
        body: `
#### 中文
因應短影音的流行趨勢，我們基於**典藏直播功能**開發了一個短影片剪輯功能，允許用戶隨時剪輯主播直播間的精彩片段，並分享至社群平台，以幫助主播吸引更多粉絲。

**典藏直播功能**是一個讓主播錄下並儲存直播內容的功能，即使觀眾錯過了直播，他們也可以稍後利用這個功能觀看和享受主播的精彩內容。

#### 專案目標

1. 提高新用戶 D0-D7 的**第七天留存率**（目標提升 5%）
2. 增加透過分享功能的**新用戶註冊數量**（目標從 0 增加到 1,500）
3. 提高短影片剪輯和**離線內容的創建量**（目標提升 10%，與平均每日典藏創作量一致）

#### 遇到的挑戰

是否預設所有人（包含主播與所有用戶）都可以直接剪輯直播內容。後來跟 stakeholders 討論後決定**預設關閉**，兩個原因：

1. 主播希望對自己的內容有更多的控制權
2. 擔心剪輯的片段未必能夠代表其直播的整體品質，導致觀眾對其內容產生誤解

但這也導致進入權限設定頁面的主播數量太少，無法發揮該功能的效益。

#### 專案成果

我們成功地透過這個 90 秒影片剪輯功能吸引用戶創建更多的離線內容，也就是非直播時創建的內容，數據顯示**增加了 0.4%**，而且有 **10% 的新創作者是首次進行離線內容創作**。這表明該功能確實在某種程度上推動了平台的內容多樣性。

此外，90 秒影片剪輯的**分享次數明顯高於一般貼文和普通影片剪輯**，且在類別頁面和探索頁面的點擊率也相當高，顯示用戶對這類短影片內容有強烈興趣。

**然而，這項功能並未如預期顯著提升新用戶註冊率，對留存率的影響也不大。** 原因之一是創建率高，但使用它來分享所帶來的轉化率仍然較低；另外這些 90 秒影片大多只是日常直播的片段，並無特別精彩或引人注目的部分。

為了提升轉化率，我的建議是**鼓勵主播在直播時進行當下流行的短影音表演**，這不僅能吸引直播中的觀眾，還能透過剪輯和分享這些 90 秒影片來吸引更多新用戶註冊。

---

#### English
#### Background

In response to the growing trend of short videos, we developed a 90s clip feature based on the existing Archive function. This feature allows users to clip highlights from streamers' live sessions at any time and share them on social media, helping streamers attract more fans.

**Archive Function** is a feature that allows streamers to record and save their streamings. Even if viewers miss the live stream, they can still watch and enjoy later using this archive function.

#### Project Goals

1. Increase the D0-D7 day 7 retention rate for new users (target increase of 5%).
2. Increase the number of new user registrations via sharing (target increase from 0 to 1,500).
3. Increase the creation of clip content and offline content by 5%, aligning with the average daily creation of archived content.

#### Challenge

There was a discussion with stakeholders on whether the default setting should allow everyone, including streamers and all users, to directly clip live stream content. Eventually, it was decided to have this feature **disabled by default** for several reasons: streamers wanted more control over their content, and there was a concern that the clipped content might not accurately represent the overall quality of the live stream, potentially leading to misunderstandings among viewers. However, this led to a low number of streamers accessing the permission settings page, which in turn limited the effectiveness of this feature.

#### Project Outcomes

We successfully attracted users to publish more offline content through the 90-second clip feature, resulting in a **0.4% increase of daily creation**. Additionally, 10% of the new content creators were first-time offline content creators. Also, the share count of the 90-second clips was significantly higher than regular posts and videos. Besides, the click rate in the genre and explore pages for this clip section was also high, indicating that users have a strong preference for this type of short video content.

However, this feature did not lead to a significant increase in new user registrations, nor did it impact retention rates. One reason should be the default permission to make a clip. Secondly, while the creation rate is high, the conversion rate from sharing remains relatively low. Furthermore, these 90-second clips were mostly cut from the live stream contents, which is not particularly exciting or unique moments.

To improve conversion rates, I suggest encouraging streamers to perform trending short video content during live streams. This would not only engage the live audience but also make the resulting 90-second clips more likely to attract new user registrations when shared.
`
      },
      {
        q: '專案的指標怎麼訂的？上線後怎麼驗證？A/B testing 怎麼做？',
        body: `
放量人數太低的時候，**很容易出現偽陰性或偽陽性**。如果出現這樣的狀況，基本上實驗還可以照常繼續做，等放量到一定 % 之後再看是否真的轉正或轉陽。

這裡要看的是**置信區間**：指標落在置信區間以內還是以外，決定這個結果是不是真的。

等到這些指標都穩定了，最後才會做全量的 release。
`
      }
    ]
  },
  {
    name: '在地化：虛擬頭像',
    items: [
      {
        q: '虛擬頭像的在地化例子',
        body: `
#### 中文
最清楚的例子，是我在 17LIVE 負責的**虛擬頭像專案**。

日本有很強的 V-Liver，也就是虛擬直播主文化。許多直播主會刻意選擇不露臉，而是透過虛擬頭像來表達自己。因此，如果產品設計把虛擬頭像當成裝飾，卻把真人臉孔當成使用者真正的身分，其實就會和整個日本市場實際使用產品的方式產生衝突。

為了解決這個問題，我和直播特效團隊合作，改善 V-Liver 的虛擬頭像體驗。在個人頁面上，我也把虛擬頭像的顯示方式，**從原本由系統決定，改成由使用者自己控制**，讓使用者自行選擇是否顯示。我們並沒有只根據自己的假設直接上線，而是在正式推出前先進行 A/B 測試。

最後有兩個很明確的成果。第一，日本市場的**有效觀看時間提升了約 10%**。第二，個人頁面的頭像顯示功能原本每個月會產生約 **30 件客訴，修改後降到了零**。

這個經驗讓我學到，**在地化不只是翻譯**。有時候，我們需要重新思考產品中的哪一個部分代表了使用者的身分，因為不同市場對這件事可能有完全不同的答案。

---

#### English
The clearest example is the **virtual avatar work I did at 17LIVE**.

Japan has a strong V-Liver, or virtual streamer, culture. Many streamers deliberately choose not to show their faces and instead express themselves through virtual avatars. This meant that a product design that treated the avatar as decoration and the face as the user's real identity was quietly working against how an entire market actually used the product.

To address this, I worked with the livestream effects team to optimise the V-Liver avatar experience. On the profile side, I also changed the avatar display from something decided by the system into something controlled by the user, so users could choose whether to display it. Rather than releasing the change based only on our assumptions, we ran an A/B test before the full rollout.

We saw two clear results. First, **effective viewing time in the Japanese market increased by around 10%**. Second, the profile display had previously generated **around thirty complaints per month, and after the change that number dropped to zero**.

What I took from this experience is that **localisation is not simply translation**. Sometimes it means reconsidering which part of the product represents the user's identity, because the answer can be very different from one market to another.
`
      }
    ]
  },
  {
    name: '指標與變現',
    items: [
      {
        q: 'GMV：你怎麼影響一個商業數字？',
        body: `
On the GMV side, at Typus, I owned the perpetual futures product end to end, and **trading volume was effectively our GMV**. In the first quarter after launch, the product accumulated around **87 million US dollars** in trading volume. During the same period, total assets deposited grew from 8 million to 20 million dollars, while monthly active users increased from around 1,000 to more than 20,000.

The important point, however, is that **I could not move trading volume directly**. The way I worked with metrics was to break the overall business number down into each step of the user journey, identify where the largest drop-off was happening, and then build improvements around that specific problem.
`
      },
      {
        q: 'Conversion rate：講一個你拆漏斗的例子',
        body: `
On the conversion side, the clearest example was a **short-video feature I led at 17LIVE**. We allowed users to create a 90-second clip from a streamer's archived livestream and share it on social media. Our targets were to bring in 1,500 new sign-ups through those shared clips and improve day-seven retention by 5%.

Clip creation performed well, and sharing also performed well. The clips were shared much more often than regular posts, and they ranked first among homepage content in both click-through rate and share rate. However, **the conversion from sharing to sign-up was below our target**, and that was the part I found most interesting.

When I broke the funnel down, I found **three separate points of leakage**.

1. We had set the clipping permission to **off by default**. This was a deliberate decision made with stakeholders because we wanted streamers to have control over their own content. However, very few streamers visited the settings page to turn the feature on, which meant that the supply side was never fully activated.
2. **Creating a clip and sharing a clip were two separate actions**, but we had assumed that creating one would naturally lead users to share it.
3. Most importantly, many of the clips were simply **ordinary moments** from a livestream. They were meaningful to existing fans, but they were not necessarily interesting enough to make someone unfamiliar with the streamer create an account.

Based on this analysis, my recommendation was to **move further upstream**. The main problem was not the sharing flow itself, but the content being clipped. Instead of only optimising the sharing experience, we needed to encourage streamers to create moments based on trending short-form content during their livestreams, so that the resulting clips would be valuable enough to convert new users.

What I learned is that **a conversion number is never just one number**. It represents an entire chain of user actions, and most of the time, the broken link is not where you initially expect it to be.
`
      },
      {
        q: '你負責的產品怎麼變現？（Monetization）',
        body: `
#### English

The two products had different monetization models.

At **Typus**, the product generated revenue through fees from trading activity, so trading volume was closely connected to revenue. My role was to improve the journey from depositing assets to making the first trade and becoming a repeat trader.

At **17LIVE**, the 90-second clip feature was not designed to generate revenue directly. It was a growth feature intended to attract new users and improve retention. Once those users became active viewers, they could later contribute to revenue through the platform's core monetization features, such as virtual gifts.

So I would **separate direct monetization from growth features that support monetization further down the funnel**.

---

#### 中文

這兩個產品的變現方式不太一樣。

在 **Typus**，產品主要透過交易活動產生的手續費獲得收入，因此交易量與營收有直接關係。我的工作是改善使用者從存入資產、完成第一次交易，到成為重複交易者的整段流程。

**17LIVE** 的 90 秒短影音則不是直接變現的功能，而是一個使用者成長功能，目標是吸引新使用者並提升留存。當這些使用者成為活躍觀眾後，才可能進一步透過虛擬禮物等平台的核心功能帶來收入。

因此，我會把產品分成**直接產生收入的功能**，以及**在漏斗前端協助獲客和留存、最終支持變現的功能**。
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
    name: '動機',
    items: [
      {
        q: '為什麼想加入 Trip.com？',
        body: `
開場先講**契合**，不要先講你有多喜歡這家公司。

我想加入 Trip.com，最主要的原因是**這個職位和我想持續累積的能力非常契合**：一方面是**消費型產品的成長**，另一方面是**跨市場協作與在地化**。

#### 一、我做過的事，就是這個職位要做的事

我過去在 17LIVE 做過**台灣、日本和東南亞市場**的使用者體驗與成長。我很熟悉同一個功能在不同市場，可能因為**用戶習慣、內容環境或使用情境不同，而需要不同的做法**。

Trip.com 這個職位正好需要把**台灣市場的洞察，和總部的產品、設計及技術團隊對齊，再轉成實際的產品改善**，這是我很想繼續深耕的工作。

#### 二、我自己就是重度使用者

因為我常旅行，所以在規劃行程時很熟悉**從搜尋、比較、選擇方案到完成訂房**的流程。

這讓我不只把它當成一個工作機會，也會自然從使用者角度去觀察：**資訊是否清楚、哪一步容易猶豫、什麼因素會影響最後的預訂決定。**

#### 三、我期待的是跨國的產品規模

我也期待在一個真正跨國、產品規模大的環境裡工作。**對我來說，重點不是資源本身，而是可以把在地洞察放到更大的產品系統中驗證**，並和不同市場及總部團隊合作，產生更大的影響。

---

**收尾（我能帶來什麼）：**

> 我相信我能帶來的價值，是把過去在台灣、日本與東南亞做產品成長的經驗，加上**數據分析與用戶回饋**的做法，幫助 Trip.com 更理解台灣用戶，並把洞察轉成**可落地的產品改善**。
`
      }
    ]
  },
  {
    name: '作業追問',
    items: [
      {
        q: '你為什麼選台北到東京、台北到倫敦這兩條線？',
        body: `
一條**短程高頻**、一條**長程高單價**，這兩條線剛好覆蓋兩種完全不同的決策模式。短程線使用者比的是方便和價格，長程線使用者會開始在意退改規則和售後保障。
`
      },
      {
        q: '你說我們在比價貨架上最貴。那你建議我們降價嗎？',
        body: `
不建議。**價格是果，不是因。**

我建議的不是降價，是**讓深度在貨架上可見**。台灣使用者給五星評論主動稱讚的是產品深度：劃位窗口號碼、登機門、行李轉盤號碼在落地前就看得到。那些優勢現在在比價貨架上完全不可見，使用者在選的當下只看得到價格和一行全球通用文案。
`
      },
      {
        q: '你把離開拆成四種結局，但我們現有埋點可能分不出來，你怎麼落地？',
        body: `
先用**可代理的訊號**來分，同時把埋點需求提出來。

先用現有資料裡分得出來的訊號做近似分類，讓判斷可以先跑起來；同時把真正需要的事件列成需求排進去，等埋點補齊之後再回頭校正分類的準確度。
`
      }
    ]
  },
  {
    name: '跨區與總部協作',
    items: [
      {
        q: '你發現一個台灣專屬的問題，但要總部改全球的東西。你怎麼說服他們？',
        body: `
我會先接受一個前提：**總部沒有義務為台灣改東西，我的工作是讓他們看到這件事對他們也划算。**

所以我會做三件事。

**第一，先量出這件事值多少錢，而不是先講它有多痛。** 台灣使用者不方便，這不是一個論點；「這一段每個月漏掉多少訂單、換算多少 GMV」才是。我在作業裡就是這樣做的：我沒有說「Trip.com 太貴」，我說的是兩條航線都比最便宜賣家高 5.0%，而且長程線相對航空公司官網只省 1.7%，價格優勢已經被稀釋掉了。**數字讓對話從偏好變成取捨。**

**第二，找出這個問題不只發生在台灣的證據。** 如果我只能說「台灣很特別」，那我在跟總部搶資源；如果我能說「台灣是這個問題最明顯的市場，但日本和韓國大概也有」，那我是在幫總部發現一個他們還沒看到的全球問題。**同一個需求，第二種講法的成功率高很多。**

**第三，把要求縮到最小可行。** 我不會一開始就要求改全球結帳流程。我會問：有沒有一個只影響單一市場的設定開關？能不能先在台灣做一次實驗，用結果去換後面的資源？**先要一個小的並且把它做出成績，比一次要一個大的更容易拿到第二次機會。**
`
      },
      {
        q: '總部說功能全球統一，但台灣用戶明顯不吃。你會怎麼做？',
        body: `
我會先確認我沒有在跟總部要一個他們給不起的東西。

以我在作業裡看到的例子來說：在 Skyscanner 同一張比價貨架上，排在 Trip.com 前面的賣家全部都主打在地支付，山富旅遊打「可用 LINE Pay 付款」，易遊網打「可分期付款」，而 Trip.com 那一格顯示的是一句全球通用的文案。總部的立場是合理的，結帳流程全球統一才維護得動，每接一個在地支付就是一次串接、一組風控規則、一份對帳邏輯和長期維運成本。

這個案子的關鍵在於**我要的不一定是「接 LINE Pay」**。我要的是「在貨架上讓台灣使用者看到一個他有感的理由」。**這兩件事的成本差了一個量級。**

所以我會把需求拆成三層，由便宜到貴。

**第一層，先改文案，不動系統。** 貨架上那一行字是全球通用的。如果台灣能換成一句講在地權益的話，這幾乎不花工程資源，而且可以直接 A/B 測。**如果連文案都測不出差異，那我對這個問題的判斷本來就是錯的，我應該先知道這件事，而不是先去要一個大功能。**

**第二層，如果文案有效，我才拿著那個結果去要支付整合。** 這時候我手上有的不是一個推測，是「同一批流量，換一行字，轉換率動了多少」。這是總部聽得懂的語言。

**第三層，如果連第二層都要不到，我就承認這一段短期內不會贏，把資源移到我自己能動的地方。** 台灣使用者給五星評論稱讚的是產品深度：劃位窗口號碼、登機門、行李轉盤號碼在落地前就看得到。**那些深度在比價貨架上完全不可見。** 讓這些既有優勢被看見，是我不需要總部點頭就能推的事。

我不會把它處理成「總部不理解台灣」。多數時候總部不是不理解，是**他們手上的成本結構跟我看到的收益不在同一張表上**，我的工作是把那張表補起來。

而且說實話，我猜這件事你比我更熟。你在雪梨、總部在上海，你要推的每一件事應該都會經過這個過程。
`
      },
      {
        q: '總部想把東南亞通用的飯店功能不改設計直接上線台灣，但你的調研顯示台灣用戶需要不同做法。你怎麼說服總部？',
        body: `
#### 中文
**我不會直接要求總部做一套完全不同的產品。** 我會先把問題轉成：

> 我們怎麼在**維持全球核心流程一致**的前提下，用**最小成本**驗證台灣的在地需求。

#### 一、先整理證據

- 台灣用戶**在哪一步流失**
- **偏好哪些付款方式**
- **客服常見問題**是什麼

再用**台灣競品**和**過往跨市場案例**作輔助。

#### 二、把需求分兩類

| 類別 | 處理方式 |
|---|---|
| **核心訂房邏輯** | **保持一致**，不動 |
| 付款方式、文案、價格與稅費說明 | 做**輕量在地化** |

#### 三、提可配置的方案，不是獨立版本

我會提出**可配置的方案**，而不是做一套獨立版本。先**小流量或 A/B 測試**，看三個指標：

**付款完成率、取消率、客服詢問量**

有效再全面上線。

---

**收尾這句一定要講：**

> 這樣不是讓台灣變成例外，而是用在地證據找到**兼顧全球一致和本地效果**的做法。

---

#### English
**I would not ask headquarters to build a completely different product for Taiwan.** I would first reframe the question as: how do we validate Taiwan's local needs at the lowest cost, while keeping the global core flow consistent?

#### 1. Assemble the evidence first

Where Taiwanese users drop off, which payment methods they prefer, and what the most common customer service questions are. I would support that with **Taiwanese competitors** and **previous cross-market cases**.

#### 2. Split the requirements into two categories

**The core booking logic stays consistent.** Payment methods, copy, and price and tax presentation get **lightweight localisation**.

#### 3. Propose a configurable solution, not a separate version

I would propose making it **configurable** rather than building a standalone Taiwan version. We would start with a small traffic rollout or an A/B test, and look at **payment completion rate, cancellation rate, and customer service enquiry volume**. If it works, then we roll it out fully.

---

**Close with this:**

> This is not about making Taiwan an exception. It is about using local evidence to find an approach that serves **both global consistency and local performance**.
`
      },
      {
        q: '你怎麼判斷一個市場差異是「文化差異」還是「單純產品沒做好」？',
        body: `
我的預設是**先假設是產品沒做好**，因為「這是文化差異」是一個太方便的結論，它一旦被接受，就沒有人要再往下查了。

我會用三個檢查來區分。

**第一，同一個市場裡有沒有人做得比我們好？** 如果台灣使用者「就是不喜歡線上付款」，那所有賣家的轉換率都該一樣差。但我在作業裡看到的是，排在我們前面的賣家在做同一件事而且贏了。**只要有競爭者在同一個文化裡做成了，那就不是文化問題。**

**第二，這個差異在其他市場有沒有同方向的弱訊號？** 如果台灣特別明顯、日韓也有一點，那它比較可能是一個全球性的產品缺陷在台灣被放大，而不是台灣獨有。

**第三，如果真的是文化差異，它應該有一個說得出來的機制。** 「台灣人比較謹慎」不是機制。「台灣信用卡滲透率高、分期是常態消費行為，所以分期選項在高單價品類上是決策點」才是機制。**講不出機制的文化差異，通常是還沒查完。**

分清楚很重要，因為結論完全不同：產品沒做好要修，真的文化差異要在地化，而**把產品缺陷誤判成文化差異，等於決定永遠不修它。**
`
      },
      {
        q: '台灣跟東南亞市場相似度高嗎？哪些經驗可以互相搬，哪些不行？',
        body: `
表層很像，底層完全不一樣，而這正是我覺得經驗可以搬「方法」但不能搬「答案」的原因。

**相似的地方是：兩邊都是行動優先，而且勝負都在支付這一段決定。** 我在作業裡發現，台灣比價貨架上排在我們前面的賣家全部主打在地支付。東南亞更極端，Traveloka 基本上就是靠在地支付加 mobile-first 打出來的，行動裝置佔 OTA 流量七成五以上。

**但底層機制是相反的。** 台灣是信用卡生態，所以在地支付的答案是 LINE Pay 和分期。東南亞信用卡滲透率低，跑的是政府建的 QR 軌道加電子錢包，泰國是 PromptPay、印尼是 QRIS、越南是 VietQR，而且**錢包還各國分裂互不相通**，菲律賓是 GCash、印尼是 GoPay 和 OVO、越南是 MoMo。**在台灣，「接一個在地支付」是一件事；在東南亞，那是六件事。**

競爭結構也不同。台灣是混戰，東南亞有 Agoda 這種在越南拿到六成線上旅客的主導者。**面對混戰和面對一個主導者，該打的仗根本不一樣。**

所以我的答案是：**可以搬的是「先去比價貨架上看使用者實際看到什麼」這個方法，不能搬的是任何一個具體結論。** 如果有人把台灣的 LINE Pay 結論直接搬到印尼，那個提案第一頁就錯了。

不過我也想誠實說，這個職位是 base 在台灣，東南亞我是從外面看的。我對台灣的判斷是我自己查出來的，對東南亞的判斷來自公開資料，這兩者的可信度我會分開講。
`
      },
      {
        q: '你在 17LIVE 同時做台、日、東南亞，講一個同功能不同市場結果不同的例子',
        body: `
V-Liver Avatar，也就是虛擬化身。同一個功能在台灣和日本的接受度完全不同。

日本市場對虛擬形象的接受度高很多，我跟直播特效團隊合作優化日本市場的 V-Liver 觀看體驗，**有效觀看時長提升 10%**。同一套東西在其他市場沒有出現同樣的效果。

那次讓我養成一個習慣：看到市場之間的落差，先問這是真的市場差異，還是我們在那個市場根本沒把產品做好。
`
      }
    ]
  },
  {
    name: '成長與數據',
    items: [
      {
        q: '台灣訂單轉換率掉 5%，你第一週做什麼？',
        body: `
**第一天我不會找原因，我會先確認這個下降是真的。** 埋點有沒有壞、發版有沒有換掉事件、指標口徑有沒有被改、資料管線有沒有延遲。同時看同期有沒有發版或實驗。而且我會跟去年同期比，不是只跟上週比，因為旅遊季節性極強。**在確認數字是真的之前，任何原因推測都是浪費時間。**

**第二天到第三天，切維度，看下降是全面還是局部。** 時間、平台與版本、流量來源、新舊用戶、產品線。**斷崖式下跌通常是技術或發版，緩降通常是市場或競品。** 這一步只有一個目的：縮小範圍。

**第四天到第五天，放回漏斗定位到哪一段。** 搜尋、結果頁、詳情、填資料、付款、確認。**轉換率下降不會是「轉換率」出問題，是其中某一段。** 逐段比通過率，找差基準線最多的那一段。

**然後分內因外因。** 內因是我們自己做的：發版、實驗、價格或庫存變動、付款成功率、第三方 API。外因是控制不了的：季節、競品促銷、航班供給、匯率。

**第一週結束時我要交出的不是答案，是一個已經被收斂到一兩個候選的假設，加上驗證它需要什麼。** 如果第一週就給一個很篤定的原因，那多半是我跳過了第一步。
`
      },
      {
        q: '台灣站飯店預訂頁流量穩定，但支付完成率掉了 8%，你怎麼找原因、定優先級、驗證方案？',
        body: `
#### 中文
**我不會先假設是價格或產品設計問題**，而是先確認這個下降是否真實，以及它發生在訂房漏斗的哪一個環節。

#### 一、拆漏斗，找出流失突然增加的節點

我會先把用戶流程拆成幾個步驟：

> 瀏覽飯店 → 選擇房型 → 填寫旅客資料 → 選擇付款方式 → 完成付款

接著**比較下滑前後每一段的轉換率**，找出流失突然增加的節點。

#### 二、分群分析，同時排除明確異常

找到節點後，我會再做分群分析：

| 維度 | 看什麼 |
|---|---|
| 平台 | App 或網頁 |
| 系統 | iOS 或 Android |
| 付款 | 特定付款方式 |
| 用戶 | 新用戶或舊用戶 |
| 商品 | 特定飯店類型、某些入住日期 |

同時，我會先排除明確的異常：**付款失敗率上升、頁面載入變慢、價格在結帳時改變、房間庫存不足，或最近上線的版本造成問題。**

#### 三、定優先級：影響、確定性、成本

接下來，我會根據三件事排優先順序：**影響有多大、我們對原因有多確定、以及修復需要多少成本。**

**該優先做的例子**：如果資料顯示某個信用卡付款通道的失敗率突然升高，後台紀錄也出現錯誤，而且影響大量用戶，這就是高影響、高確定性的問題，應該優先處理。

**不該急的例子**：如果我們只是猜測用戶因為覺得價格太高而離開，但還沒有價格比較、跳出行為或用戶回饋支持，我不會立刻投入大量資源重做價格頁面。我會先用**小規模研究或測試**來驗證這個假設。

#### 四、先上最小可行的修復，再驗證

我會和工程、數據及營運團隊一起先上線**最小但有效的修復方案**，例如修正付款通道、讓價格資訊更清楚，或改善結帳流程。

之後透過**灰度發布或 A/B 測試**，確認付款完成率是否回升，同時監控**付款失敗率、取消率與客服詢問量**，確保我們在提升轉換率時，沒有造成新的用戶體驗問題。

---

#### English
**I would not start by assuming it is a pricing or design problem.** First I would confirm the drop is real, and pinpoint where in the booking funnel it happens.

#### 1. Break the funnel down and find where the leak appeared

I would split the user flow into browsing hotels, selecting a room type, entering guest details, choosing a payment method, and completing payment. Then I would **compare the conversion rate of each step before and after the drop**, to find the stage where drop-off suddenly increased.

#### 2. Segment, and rule out the obvious anomalies

Once I have the stage, I would segment: **App versus web, iOS versus Android, specific payment methods, new versus returning users, particular hotel types, and particular check-in dates.**

At the same time I would rule out the clear anomalies: a rise in payment failure rate, slower page loading, prices changing at checkout, room inventory running out, or a recent release causing the issue.

#### 3. Prioritise on impact, certainty and cost

I would prioritise on three things: **how large the impact is, how certain we are about the cause, and how much the fix costs.**

For example, if the data shows the failure rate of one credit card channel has suddenly risen, the backend logs show errors, and it affects a large number of users, that is high impact and high certainty, so it should be fixed first.

Conversely, if we are only guessing that users leave because they think the price is too high, without price comparison data, exit behaviour or user feedback to support it, **I would not immediately commit heavy resources to rebuilding the pricing page.** I would validate that hypothesis with a small study or test first.

#### 4. Ship the smallest effective fix, then verify

I would work with engineering, data and operations to ship **the smallest effective fix**, such as repairing the payment channel, making price information clearer, or improving the checkout flow.

Then I would verify through **a staged rollout or an A/B test**, checking whether payment completion recovers, while monitoring **payment failure rate, cancellation rate and customer service enquiry volume**, so that we are not creating a new user experience problem while improving conversion.
`
      },
      {
        q: '給你台灣新用戶 +20% 的目標，你從漏斗哪一段下手？',
        body: `
我不會先列一堆點子，我會先問**哪一段的天花板最高**，因為同樣的工，打在不同段的回報差很多。

而以台灣來說，我做完作業之後的判斷是：**新用戶的漏斗第一段根本不在我們的 App 裡，它在比價貨架上。**

一個台灣的新用戶通常不是先想到 Trip.com，他是在 Skyscanner 這種地方看到一排賣家然後選一個。**在那個當下他能看到的只有價格和一行文案。** 而我實測的結果是，兩條航線我們都是最貴的 OTA，比最便宜賣家高 5.0%，而且排在我們前面的賣家全部都主打在地支付，我們打的是一句全球通用文案。

也就是說，**如果只優化 App 內的註冊流程，我是在優化一群根本沒進來的人。**

所以我的順序會是：**先確認貨架這一段的量體有多大。** 如果新用戶主要從那裡來，那優先打的是「在貨架上給一個非價格的理由」，因為降價不是我能做也不該做的。台灣使用者五星評論主動稱讚的是產品深度，劃位窗口號碼、登機門、行李轉盤在落地前就看得到，**那些優勢現在在貨架上完全不可見，這是我認為最被低估的一段。**

如果資料顯示新用戶其實主要來自別的通路，那我上面這整套判斷就要重來，我會先去看那個數字。
`
      },
      {
        q: 'GMV、轉換率、新用戶只能保一個，你保哪個？',
        body: `
#### 中文
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

---

#### English
**I'd protect conversion rate.** But before the reasoning, I'd set GMV aside, because it isn't the same kind of thing as the other two.

**GMV = traffic × conversion rate × average order value.** GMV is the total value of flights and hotels booked on the platform. It isn't our revenue, we take a commission out of it. And it decomposes completely into that formula.

**So GMV isn't a fourth option, it's the product of the others.** Saying "I'd protect GMV" is saying "I want all three", and **it's the only answer that amounts to choosing nothing.** Worth noting the lever people forget in that formula is **average order value**: Taipei to London has a far larger fare base than Taipei to Tokyo, so **shifting order mix toward long-haul moves GMV without touching traffic or conversion at all.** Not what I'd choose today, but it's a real third path.

**That leaves traffic and conversion. Before I pick, I'd want to ask which conversion rate we mean**, because the same word covers numbers that differ by six times or more. **OTAs like Booking and Expedia sit around 12 to 15%**, since users arrive with clear intent. Hotel direct sites are around 1.5 to 2.5%. General ecommerce is about 2.7%. **So "what's good" has no answer until we agree what's being measured from where to where.** The 6.5% in my exercise was entry-to-completion inside the booking flow, which is a third definition again.

**Once the definition is fixed, the rule is simple.** Clearly below the comparable benchmark means there's room, so fix conversion. At or above it means the ceiling is low and I should go get traffic instead.

**For Taiwan I'd protect conversion, on two pieces of evidence.**

**First, the shape of the funnel is wrong.** The four stages with exit paths account for **96.5% of drop-off**. The problem isn't diffuse, it's concentrated, and concentrated means fixable.

**Second, this is a known weakness of the whole category.** Travel has the highest cart abandonment in ecommerce at around **81.7%**, against about 70% generally, and **roughly 37% of that is payment related**: too few payment options, lack of trust, declined cards. That lines up exactly with what I saw on the Taiwan comparison shelf, where **every seller ranked above us leads with local payment.** So Taiwan's problem sits precisely where this category leaks most and where the fix is already understood.

**When would I flip to new users?** When conversion is already at a reasonable level but very few people are arriving. Optimising a funnel for a small group is a low-return exercise. **I'm choosing conversion because that's where Taiwan's bottleneck is, not because it's inherently more important.**
`
      },
      {
        q: '你怎麼決定實驗要跑多久、要多少樣本？',
        body: `
#### 中文
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

---

#### English
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
        body: `
最大的落差是**供給端**。

我在 Typus 和 17LIVE，產品是我們自己的。價格、規則、庫存，我們想改就能改。**OTA 不是這樣，機票的價格、艙等規則、退改條件、庫存，全部來自航空公司和訂位系統，我不能改。我只能決定怎麼呈現它、什麼時候呈現它。**

這件事在我做作業的時候被打到過一次。我發現在台北到倫敦這條線上，阿聯酋官網比 Trip.com 貴了 658 元，使用者還是選官網。一開始我以為那是我們的問題，後來想清楚：**那個差價買的是航空公司自己的售後保障，而那個東西本來就不在我們手上。** 我能做的不是把它變成我們的，是決定要不要在那條線上換一種打法。

這就是我目前最明顯的知識缺口：**我對供給端的規則有多少彈性、哪些是硬約束、哪些其實可以談，完全沒有實務感。** 這種東西看資料補不起來，只能靠進去之後跟供給端和營運的人實際做過幾輪才會有。

我不會說這不影響我，短期它會讓我判斷得比較慢。但我覺得比較危險的是另一種人：**把供給端當成可以改的東西，然後提一堆做不出來的建議。** 至少我現在知道那條線在哪。
`
      },
      {
        q: '你待的團隊規模都不大，這裡是幾百人的產品組織，你怎麼適應？',
        body: `
小團隊訓練出來的是「什麼都要自己來」。在一個一人負責一個市場的編制裡，**這剛好是優勢**：從拉數據、走查流程到寫規格，我不需要等別人排期。

我在 17LIVE 也是同時跨台灣、日本、東南亞三個市場協作，所以跟不同市場的人對齊優先順序這件事我做過。

我需要補的是大組織的推進方式。在小團隊，決策鏈短，講清楚就能動；在大組織，**說服與對齊的成本本身就是工作的一部分**。所以我會把力氣放在「把在地的證據翻譯成總部聽得懂的收益」，而不是靠據理力爭。
`
      },
      {
        q: '這裡每個市場一個人，你大部分時間會是一個人做。你怎麼避免陷在細節裡？',
        body: `
我靠兩件事。

第一是固定的優先序方法：**這個問題影響多少人、影響有多痛、做了會不會更靠近這一季的目標。** 排不進這三個問題的事情，我不會因為它看起來急就去做。

第二是一個固定的自我檢查節奏：**每週固定回頭問一次「我這週做的事，跟這一季要打的那一段有關嗎」。** 一個人做事最大的風險不是做不完，是花了三週把一件不重要的事做得很好。
`
      },
      {
        q: '你履歷上很多 AI side project，但這個職位大部分是瑣碎的在地化工作，你會不會覺得無聊？',
        body: `
不會，因為**AI 正是我處理瑣碎工作的方式**，這兩件事在我身上不衝突。

我交的那份作業本身就是證據。抓 500 則評論做主題分類、跑兩條航線的比價走查、產出流程圖，**這些如果純手工是做不完的，我是用工具做的。** 也就是說，瑣碎的部分我會盡量壓縮掉，把時間留給真正需要判斷的地方。

而且在地化工作瑣碎，不代表它不重要。我在作業裡看到的是，台灣使用者的決策其實發生在比價貨架上，那一段的細節就是勝負。
`
      },
      {
        q: '你這一年在念書，離產品實戰有一段距離，怎麼補？',
        body: `
我這一年沒有停止做產品。論文研究的就是產品開發流程本身，我深入訪談了包含 TikTok 在內的多家科技公司；同時我一直在做實作，agentic AI 平台的產品規劃、租屋篩選工具、AI agent 實作課程，都是這一年做的。

**最近期、最接近實戰的產出就是我交給你們的這份作業**，而且它是為了這個職位做的：比價走查、500 則評論的主題分類、漏斗拆解，用的都是我進去之後會用的同一套方法。
`
      },
      {
        q: '如果我三個月只能看你一份東西，你希望我看什麼？',
        body: `
一份「**台灣漏斗現況，加上這一季要打哪一段**」的固定格式文件。

固定格式的意思是：同一組漏斗階段、同一組指標定義，每個月長得一樣，最上面直接寫「這次需要你決定什麼、我的建議是什麼」。**你的時間應該花在做決定，不是花在理解格式。**
`
      }
    ]
  },
  {
    name: '收尾',
    items: [
      {
        q: '你進來第一個月會做什麼？',
        body: `
**第一週，我要有自己的基準線。** 我會把台灣現在的漏斗數字自己拉一次，不是只看別人整理好的報告。原因很簡單：**如果我不知道這些數字是怎麼算出來的，之後它動了我也不知道是真的動了還是口徑變了。** 同時我會把指標定義寫下來，跟數據的人確認一次。

**第二到第三週，我要有自己的體感。** 完整走查一次台灣的訂票流程，用真實的錢跑到底。這件事我其實已經做過一版，就是這份作業。進去之後我會用內部資料再做一次，因為外面看不到的東西很多。同時我會找客服和在地行銷聊，**客訴是最便宜的使用者研究，而且通常沒有人在系統性地看它。**

**第四週，產出第一份對齊文件。** 內容是台灣現況、我看到的前三個問題、我建議這一季打哪一段、以及我需要什麼。然後跟你對一次。

**然後是我第一個月刻意不做的事：我不會提大改版建議。** 一個月的理解深度不足以支撐那種提案，太早提反而會讓人覺得我沒搞清楚狀況就在給意見。**第一個月的產出應該是「我看懂了什麼」，不是「你們應該改什麼」。**
`
      },
      {
        q: '你需要什麼樣的主管？',
        body: `
我需要的是**把判準講清楚然後放手**的主管，不是逐項確認的。

具體來說我希望三件事。

**第一，在一季開始的時候我知道你怎麼衡量成功。** 不是 KPI 數字，是判準。同一個數字達標，什麼樣的做法你會覺得做對了，什麼樣的你會覺得只是運氣好。

**第二，把「我可以自己決定」跟「要先問你」的界線畫出來。** 這個界線一開始畫窄一點沒關係，我會用結果去換它變寬。**我最怕的是界線模糊，那會變成每件事都要猜你的意思。**

**第三，願意告訴我壞消息。** 如果我做的東西方向錯了，我希望在第二週就知道，不要等到季末回顧。

我會這樣講，也是因為你在雪梨、我在台北、總部在上海，**我們的同步時間會很貴。** 我不覺得那段時間應該花在進度更新上，那些我可以寫清楚給你。它應該花在真正需要來回討論的判斷上。
`
      },
      {
        q: '你跟工程師意見不合的時候怎麼處理？',
        body: `
我會先分清楚是哪一種不同意，因為這兩種的處理方式完全相反。

**如果是可行性的不同意，那通常他們是對的。** 他們知道系統裡有什麼我不知道的東西。我的工作不是說服他們，是問清楚成本到底卡在哪，然後**改需求，而不是改人**。很多時候我要的那個價值有第二條路可以達成，只是我一開始把需求寫成了一個具體做法。

**如果是優先序的不同意，那是我的責任，不是他們的。** 代表我沒有把「為什麼是這個」講清楚。我的標準是：**要能讓他們自己複述出來這件事為什麼重要。** 講到他們能複述，通常爭議就沒了；講不到，那多半是我自己也還沒想清楚。

我有一次踩過相關的坑。在 17LIVE 做短影音剪輯功能的時候，我們把剪輯權限預設關閉，那是跟 stakeholder 討論後刻意的決定，為了讓主播對自己的內容有控制權。結果是幾乎沒有主播會去打開設定頁，**供給端根本沒被打開**。

**我學到的是：如果我自己說服不了自己那個取捨划算，我就不該接受它。** 當下我讓步了，因為對方的理由聽起來很合理，但我沒有把「這會不會直接關掉供給」這件事量出來。現在遇到類似的情況，我會把取捨的代價先算出來再決定要不要讓。
`
      },
      {
        q: '你有什麼想問我的嗎？（給 Kathy）',
        body: `
1. 台灣在編制上是掛在 SEA 底下嗎？我看這個角色的範圍跟一般認知的東南亞不太一樣，想了解實際上怎麼分。

2. 你這一年多把這個區域團隊建起來的過程中，**哪一件事比你原本預期的難**？

3. 台灣這個角色要推動的東西，**有多少比例是總部要點頭的**？我想知道實際上這條線是怎麼跑的。
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
    name: '條件確認',
    items: [
      {
        q: 'Are you able to relocate to Tokyo?',
        body: `
Yes, I'm able to relocate to Tokyo for this role. **Japan has been a deliberate focus of my search rather than an afterthought.**

I have no dependents, so I would be relocating on my own.

I'm completing my MSc at King's College London in September 2026 and have no academic commitments after that, so I can begin the visa process immediately.
`
      },
      {
        q: 'Do you require visa sponsorship?',
        body: `
Yes, I would require visa sponsorship from SmartNews. **I hold a Taiwanese passport and do not currently have a Japanese work visa.**

For context on my present status: I'm on a UK Student visa and will move onto the UK Graduate Route after I graduate in September 2026. **Neither affects my ability to relocate to Japan, and I have no notice period to serve.**
`
      },
      {
        q: 'When could you start?',
        body: `
Factoring in the 3 to 4 month visa timeline, I would realistically be able to start **between Q4 2026 and Q1 2027**, and I'm happy to work backwards from whatever start date suits the team.
`
      },
      {
        q: 'Are you comfortable with three days a week in the office?',
        body: `
Yes, three days a week in the office works for me, and I'll be looking for housing **within a two-hour commute** of your office as part of the relocation.

Given that I'd be new to the team and to Tokyo, **I'd actively prefer the in-person time early on.**
`
      },
      {
        q: 'What are your compensation expectations?',
        body: `
Expected: **¥6,000,000 to ¥8,000,000 per year**, negotiable depending on the level and the overall package.

Current: I'm not in full-time employment at the moment, as I've been completing my MSc, so there's no current base or bonus to break down.
`
      },
      {
        q: 'Where else are you interviewing?',
        body: `
I have two other processes running, no offers yet.

**Trip.com Group**, Associate Product Growth Manager, Taiwan: I've completed the recruiter screen and a case study, and I'm interviewing with their Head of Product Growth, SEA. Two further rounds would follow.

**TableCheck**, Product Manager, Tokyo: I've completed the HR screen and am waiting on scheduling for the hiring manager round.

Neither has given me a decision deadline yet, so there's no immediate pressure. **That said, SmartNews is the role I'm most excited about of the three.**
`
      },
      {
        q: 'How do you feel about the vibe coding round?',
        body: `
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
        body: `
我注意到 Rakuten 2026 年把 **AI-nization** 訂為全公司主軸，三木谷會長提到目標是成為世界上最會用 AI 的平台，而且已經有 **255 億日圓的利益來自 AI 應用**。

我自己做過 33 模組、3 個 LLM 的 agentic platform，也建過 AI 品質的評測框架，所以我對「**怎麼把 AI 從 demo 變成每天有人用的產品**」這件事有第一手經驗。
`
      },
      {
        q: '期望年収はいくらですか？',
        body: `
**750〜950 萬円**，依職級與整體待遇可以再談。
`
      }
    ]
  },
  {
    name: '推薦系統',
    items: [
      {
        q: '推薦系統的整體架構是什麼？',
        body: `
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
`
      }
    ]
  },
  {
    name: '反問',
    items: [
      {
        q: '你有什麼想問我們的嗎？',
        body: `
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
`
      }
    ]
  }
  ]
}

];

if (typeof module !== 'undefined') module.exports = { DATA };
