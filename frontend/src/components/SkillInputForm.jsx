import React, { useState, useEffect, useRef } from "react";
import { AiFillAudio } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import Evaluate from "./Evaluate";
import AIAgent from "./AIAgent";

	
const domainOptions = [
  "Data Science","AI & ML","AI engineer","Deep Learning","Natural Language Processing",
"Computer Vision","Robotics","Full Stack Development","Frontend Development",
"Backend Development","DevOps","Cloud Computing","Cybersecurity",
"Digital Marketing","Blockchain","FinTech","EdTech","HealthTech",
"Product Management","UX/UI Design","Data Engineering",
"Business Intelligence","Reinforcement Learning","Generative AI",
"LLM Model Development","AR/VR Development","IoT","Quantum Computing",
"Gaming / Game Dev","Startup Growth & Analytics","AI Ethics & Policy",
"Metaverse Development","Chatbot Development","Voice AI","Edge Computing",
"Embedded Systems","Computer Graphics","Bioinformatics","Social Media Analytics",
"eCommerce Analytics","Mobile App Development","SaaS Product Dev",
"Natural Language Understanding","AI for Healthcare","Sustainable Tech",
"Augmented Analytics","Robotic Process Automation","Data Privacy & Compliance",
"Data Analyst","Agentic AI","AI Agents & Orchestration","Multimodal AI",
"AI Infrastructure","Foundation Model Fine-Tuning","Prompt Engineering",
"RAG Systems","AI Red Teaming","Neuromorphic Computing","Cognitive Computing",
"Federated Learning","AI Observability","Synthetic Data Generation",
"AI-Assisted Coding","Small Language Models","Computational Biology",
"Drug Discovery AI","Genomics & Precision Medicine","Climate Tech & AI",
"Materials Science AI","Computational Chemistry","Space Tech","Nuclear Tech",
"Photonics","Nanotechnology","Platform Engineering",
"FinOps & Cloud Cost Optimization","Site Reliability Engineering","MLOps",
"DataOps","LLMOps","API-First Development","Serverless Architecture",
"WebAssembly","Developer Experience (DX)","Internal Developer Platforms",
"Infrastructure as Code","AI Security","Zero Trust Architecture","Cloud Security",
"Application Security","Threat Intelligence","Deception Technology",
"Secure Enclaves & Confidential Computing","Digital Identity & IAM","Web3 Security",
"Real-Time Analytics","Streaming Data Pipelines","Reverse ETL","Data Mesh",
"Data Lakehouse","Graph Analytics","Geospatial Analytics","Causal AI",
"Decision Intelligence","Feature Stores","Semantic Search","Growth Engineering",
"Revenue Operations (RevOps)","AI Product Management","Developer Relations (DevRel)",
"No-Code / Low-Code Development","Vertical SaaS","B2B Marketplace Platforms",
"Subscription Analytics","Customer Data Platforms","Composable Commerce",
"Generative Design","AI Video Generation","AI Audio & Music","Creative AI",
"Digital Twin Development","Spatial Computing","3D & WebGL","Motion Design Tech",
"Immersive Storytelling","Humanoid Robotics","Autonomous Vehicles","Drone Technology",
"Agricultural Tech","Manufacturing AI","Warehouse Automation","Soft Robotics",
"Legal Tech","InsurTech","PropTech","HRTech","CleanTech","AgriTech","RetailTech",
"SupplyChain Tech","GovTech","Sports Tech","FoodTech","TravelTech","WealthTech",
"RegTech","MediaTech","Software Development","IT Services","Consulting","Education","Healthcare",
"Software Developer","Ai Researcher","java Developer","python Developer","software Engineer",
];

const companyOptions = [
  "Google","TCS","Infosys","Microsoft","Amazon","Facebook","OpenAI", "Cisco",
"Anthropic","Cohere","Stability AI","DeepMind","Byjus","Zerodha",
"Swiggy","Ola","Freshworks","Razorpay","Dream11","Meesho","Unacademy",
"Tesla","IBM","Adobe","Apple","Intel","NVIDIA","Oracle","Paytm",
"Flipkart","Coinbase","Snowflake","UiPath","Palantir","Spotify","Netflix",
"ByteDance","Reddit","Salesforce","Twilio","GitHub","Wipro","HCL Technologies",
"Tech Mahindra","Mindtree","Mphasis","HDFC Bank Tech","Juspay","Cred",
"Groww","Navi Technologies","PhonePe","BharatPe","Slice","Zepto","Blinkit",
"Dunzo","Porter","Urban Company","Lenskart","Nykaa","Mamaearth","Boat",
"Noise","PolicyBazaar","Acko","Digit Insurance","Cleartax","Zoho","Postman",
"BrowserStack","Hasura","Sarvam AI","Krutrim","Agnikul","Skyroot Aerospace",
"Pixxel","Ather Energy","Ola Electric","Revolt Motors","Rapido","IndiaMart",
"TradeIndia","Udaan","Moglix","Zetwerk","Delhivery","Shiprocket","Pickrr",
"Darwinbox","Keka","Leadsquared","Chargebee","Freshdesk","Kissflow",
"Zoho CRM","Vyapar","Tally Solutions","Marg ERP","Busy Accounting",
"Finacus","Setu","M2P Fintech","Hugging Face","Mistral AI","Perplexity AI",
"Character AI","Inflection AI","Adept AI","Runway ML","Pika Labs",
"ElevenLabs","Otter.ai","Notion","Linear","Vercel","Netlify","Supabase",
"PlanetScale","Neon","Railway","Retool","Appsmith","Budibase","Airtable",
"Coda","Roam Research","Obsidian","Readwise","Mem","Replit","CodeSandbox",
"Gitpod","Cursor","Codeium","Tabnine","Sourcegraph","Pieces","Warp",
"Raycast","Arc Browser","Browserbase","Apify","Bardeen","Make","Zapier",
"n8n","Activepieces","Pipedream","Tray.io","Workato","Boomi","MuleSoft",
"Segment","RudderStack","Mixpanel","Amplitude","PostHog","Heap","FullStory",
"LogRocket","Sentry","Datadog","New Relic","Grafana","Prometheus",
"PagerDuty","OpsGenie","Incident.io","FireHydrant","Pulumi","Spacelift",
"Env0","Scalr","Temporal","Conductor","Prefect","Dagster","dbt Labs",
"Monte Carlo","Acceldata","Datafold","Great Expectations","Anomalo",
"Atlan","Alation","Collibra","DataHub","Amundsen","OpenMetadata",
"Databricks","Confluent","Fivetran","Airbyte","Stitch","Matillion",
"Talend","Informatica","MicroStrategy","Tableau","Looker","Sisense",
"ThoughtSpot","Qlik","TIBCO","SAS","Teradata","Cloudera","VMware",
"Citrix","F5 Networks","Palo Alto Networks","CrowdStrike","SentinelOne",
"Darktrace","Tenable","Qualys","Rapid7","Veracode","Checkmarx","Snyk",
"Lacework","Orca Security","Wiz","Aqua Security","Sysdig","Illumio",
"Zscaler","Okta","Auth0","Ping Identity","ForgeRock","CyberArk",
"BeyondTrust","HashiCorp","Wayve","Graphcore","Arm Holdings","Revolut",
"Monzo","Starling Bank","Checkout.com","Wise","Cazoo","Babylon Health",
"Benevolent AI","Exscientia","Healx","Faculty AI","Thought Machine",
"Cleo","Curve","Freetrade","Nutmeg","Octopus Energy","Tractable",
"Improbable","Peak AI","Quantexa","Signal AI","SAP","Celonis","Personio",
"Flixbus","Tier Mobility","Lilium","Volocopter","Scout24","Zalando",
"HelloFresh","Delivery Hero","Auto1 Group","N26","Trade Republic","Raisin",
"Penta","Moss","Billie","Mambu","Solaris Bank","Dataiku","Contentsquare",
"Doctolib","Alan","Qonto","Lydia","Ledger","Sorare","Back Market","Swile",
"Spendesk","Payfit","Kyriba","Shift Technology","Meero","Luko","Shine",
"Wix","Fiverr","monday.com","IronSource","Amdocs","Check Point","Imperva",
"Radware","NICE Systems","Varonis","Cato Networks","Axonius","Datorama",
"WalkMe","Optimove","Namogoo","Riskified","Forter","Grab","Sea Limited",
"Razer","Carousell","PropertyGuru","Ninja Van","Nium","Xfers","Aspire",
"Funding Societies","Validus","Coda Payments","PatSnap","Airwallex",
"StashAway","Syfe","Endowus","Kristal.AI","Nubank","iFood","Rappi",
"Loggi","Loft","QuintoAndar","Creditas","Gympass","Vtex","Totvs","CI&T",
"Movile","Alibaba","Tencent","Baidu","Huawei","Xiaomi","DJI","Meituan",
"Pinduoduo","JD.com","Didi","Kuaishou","SenseTime","Megvii","IFLYTEK",
"Zhipu AI","Moonshot AI","Minimax","01.AI","Manus AI","Samsung","LG",
"SK Telecom","Kakao","Naver","Krafton","Netmarble","Pearl Abyss","Coupang",
"Hyundai Mobis","Hanwha Systems","Sony","Fujitsu","NTT Data","Rakuten",
"Line","SoftBank","Toyota Connected","Preferred Networks","Sakana AI",
"Rinna","Mercari","SmartNews","Atlassian","Canva","Afterpay",
"SafetyCulture","Linktree","Airtasker","Employment Hero","Deputy",
"Dovetail","Culture Amp","Immutable","Shopify","Ada Support","ApplyBoard",
"Wattpad","Hootsuite","Thinkific","Bench","Float","Clearco","League",
"Coveo","Dialogue","Booking.com","Adyen","Mollie","Bunq","Messagebird",
"Picnic","Sendcloud","Mews","WeTransfer","Flutterwave","Paystack",
"Chipper Cash","Andela","Twiga Foods","mPharma","Helium Health","54gene",
"Kuda Bank","OPay","Wave","Paga","GitLab","Automattic","Basecamp","Doist",
"Buffer","Hotjar","Whereby","Loom","Miro","Figma","Pitch","Slite","Guru",
"Tettra","Nuclino","Almanac","Outline","Swimm","Mintlify","GitBook","Archbee",

// 🇮🇳 India — More
"Capgemini India","Cognizant","L&T Infotech","Hexaware","Mphasis",
"KPIT Technologies","Persistent Systems","Sonata Software","Mastek",
"Happiest Minds","Zensar Technologies","Birlasoft","Cyient","Sasken",
"NIIT Technologies","Nucleus Software","Newgen Software","Ramco Systems",
"Subex","Rcom","Tata Elxsi","Tata Communications","Tata Play","BSNL Tech",
"Reliance Jio","Airtel Digital","BPCL Digital","IOC Digital","ONGC Digital",
"BHEL Digital","NTPC Digital","Power Grid Corp","Coal India Digital",
"SBI Tech","HDFC Digital","ICICI Tech","Axis Bank Tech","Kotak Tech",
"Yes Bank Tech","IndusInd Tech","Federal Bank Tech","Karnataka Bank Tech",
"Muthoot Tech","Bajaj Finserv Tech","Shriram Tech","Mahindra Finance Tech",
"Aditya Birla Digital","Godrej Tech","Wockhardt Tech","Sun Pharma Digital",
"Dr Reddys Digital","Cipla Digital","Lupin Digital","Biocon Digital",
"Serum Institute Tech","Mankind Pharma Tech","Zydus Tech","Alkem Tech",
"Apollo Hospitals Tech","Fortis Tech","Manipal Health Tech","Narayana Health Tech",
"Practo","1mg","PharmEasy","Netmeds","Medlife","DocsApp","mFine",
"Healthians","Portea Medical","Cure.fit","Wellversed","Niramai",
"SigTuple","Tricog","Artelus","Qure.ai","Niramai Health Analytix",
"Eka Care","Pristyn Care","Clove Dental","Dentalkart","Lybrate",
"MediBuddy","Bajaj Health","Tata Health","Reliance Health","Vi Health",
"Vedantu","LEAD School","Infinity Learn","Extramarks","Toppr",
"Simplilearn","UpGrad","Emeritus","Great Learning","Jigsaw Academy",
"Imarticus Learning","Henry Harvin","Leverage Edu","Leap Finance",
"iSchoolConnect","AdmitKard","College Vidya","Shiksha","Careers360",
"Collegedunia","CollegeDekho","AglaSem","Buddy4Study","Scholarships.com",
"Classplus","Teachmint","Winuall","Schoolnet","iPrep","Eupheus Learning",
"PlanetSpark","Cuemath","Whitehat Jr","Coding Ninjas","Newton School",
"Scaler Academy","Masai School","Pesto Tech","AlmaBetter","Edureka",
"KnowledgeHut","Intellipaat","Board Infinity","Interview Bit","GeeksforGeeks",
"HackerEarth","HackerRank","CodeChef","LeetCode India","Unstop",
"Internshala","Naukri","Monster India","Shine","TimesJobs","Apna",
"WorkIndia","Rozgar","Hirect","Cutshort","Instahyre","Hirist","Turing",
"Toptal India","Gigstack","Flexiple","Pepper Content","Vokal","ShareChat",
"Moj","Josh","MX TakaTak","Mitron","Chingari","Koo","Clubhouse India",
"Stage","Freo","Jupiter","Fi Money","Niyo","Open","RazorpayX","Cashfree",
"PayU","CCAvenue","EBS","Instamojo","Paytm Money","Groww Mutual",
"INDmoney","Smallcase","Kuvera","Fisdom","Wealthy","Goalwise","Orowealth",
"Scripbox","ET Money","5paisa","Upstox","Angel One","IIFL Securities",
"Motilal Oswal Tech","Kotak Securities Tech","HDFC Securities Tech",
"Edelweiss Tech","Axis Direct Tech","SBI Securities Tech","Yes Securities",
"Tradeplus","Fyers","Dhan","Mstock","Shoonya","Bigul","Tradejini",

// 🇺🇸 USA — More Startups
"Anthropic","xAI","Cohere","AI21 Labs","Together AI","Replicate",
"Modal","Anyscale","BentoML","Weights & Biases","MLflow","Neptune.ai",
"Comet ML","Determined AI","Verta","Algorithmia","Seldon","BentoML",
"Clarifai","Scale AI","Labelbox","Roboflow","SuperAnnotate","Encord",
"Dataloop","V7 Labs","Kili Technology","Appen","iMerit","Sama",
"Lionbridge AI","Toloka","Surge AI","Mechanical Turk","CloudFactory",
"Invisible Technologies","Outlier AI","Remotasks","Defined.ai",
"Landing AI","Landing Zone","Weights & Biases","Hugging Face","LangChain",
"LlamaIndex","Chroma","Pinecone","Weaviate","Qdrant","Milvus","Zilliz",
"Activeloop","Marqo","Vectara","Turbopuffer","LanceDB","Timescale",
"CockroachDB","YugabyteDB","TiDB","Fauna","Edgedb","SurrealDB",
"PocketBase","Convex","Xata","Turso","Nile","Tembo","ParadeDB",
"Hydra","MotherDuck","DuckDB","ClickHouse","Materialize","Imply",
"StarRocks","Doris","Apache Pinot","Druid","Rockset","SingleStore",
"Starburst","Dremio","Ahana","Upsolver","Cribl","Mezmo","Coralogix",
"Logz.io","Sumo Logic","Observe","Honeycomb","Lightstep","Chronosphere",
"Last9","Groundcover","Polar Signals","Parca","Pyroscope","Pixie",
"Groundcover","Robusta","Botkube","Komodor","Pixie Labs","Kubescape",
"Datree","Monokle","Aptakube","Lens","Headlamp","Octant","Seaplane",
"Plural","Porter","Gimlet","Waypoint","Flagger","Argo","Flux","Keptn",
"Testkube","k6","Grafana k6","Artillery","Locust","Gatling","BlazeMeter",
"Flood","LoadRunner Cloud","NeoLoad","StormForge","Speedscale","Steadybit",
"Gremlin","Chaos Monkey","LitmusChaos","Chaos Toolkit","ChaosNative",
"Verica","Reliably","Blameless","Rootly","Statuspage","Atlassian Status",
"Better Uptime","Freshstatus","Instatus","HetrixTools","UptimeRobot",
"Pingdom","Site24x7","Uptrends","AlertSite","Dotcom-Monitor","Catchpoint",
"ThousandEyes","Kentik","Noname Security","Salt Security","Traceable",
"Wallarm","42Crunch","Escape","APIsec","Akamai","Fastly","Cloudflare",
"Imperva CDN","Limelight","Edgio","Verizon Media","Bunny.net","KeyCDN",
"jsDelivr","Statically","Imagekit","Cloudinary","Uploadcare","Filestack",
"Transloadit","Mux","Cloudflare Stream","api.video","Wistia","Vidyard",
"Loom","Descript","Riverside","Squadcast","Zencastr","Podcastle","Alitu",
"Buzzsprout","Transistor","Captivate","Simplecast","Anchor","Spreaker",
"Podbean","Blubrry","Libsyn","Megaphone","Spotify Podcasts","Acast",
"Audioboom","Podimo","Pocket Casts","Overcast","Castro","Breaker",

// 🇺🇸 USA — SaaS & B2B
"HubSpot","Zendesk","Intercom","Drift","Gong","Chorus","Clari",
"Outreach","SalesLoft","Apollo.io","ZoomInfo","Clearbit","Lusha",
"Hunter.io","Snov.io","Lemlist","Mailshake","Woodpecker","Reply.io",
"Instantly","Smartlead","Close","Pipedrive","Copper","Nutshell","Streak",
"Insightly","Agile CRM","Zoho CRM Plus","SugarCRM","Vtiger","Capsule",
"Nimble","Highrise","Contactually","Affinity","Attio","Clay","Warmly",
"Chili Piper","Calendly","Cal.com","Tidycal","SavvyCal","Harmonizely",
"Acuity","SimplyBook","YouCanBook.me","Setmore","Appointlet","Square Appointments",
"Booksy","Fresha","Vagaro","Mindbody","WellnessLiving","Glofox","Gymdesk",
"TeamUp","Pike13","Omnify","Trafft","Bookafy","SuperSaas","Picktime",
"10to8","Booxi","Reservio","Planyo","Checkfront","FareHarbor","Rezdy",
"Bokun","TrekkSoft","Regiondo","Xola","Peek Pro","Bókun","Ventrata",
"TicketingHub","Beyonk","Bookingkit","Palisis","Fareharbor","Tiqets",
"Musement","GetYourGuide","Viator","Klook","Airbnb Experiences","Tripadvisor",
"Expedia Tech","Booking Holdings","Agoda Tech","Hotels.com Tech",
"Airbnb","Vrbo","Hipcamp","Glamping Hub","Tentrr","Hipcamp","Outdoorsy",
"RVshare","Cruise America Tech","Turo","Getaround","HyreCar","Ridecell",
"Autonomic","Moovit","Via","Spare","Remix","UrbanLeap","Transdev Digital",
"Keolis Digital","FirstGroup Tech","Stagecoach Tech","National Express Tech",

// 🇪🇺 Europe — More
"Spotify","King","Mojang","Paradox Interactive","DICE","Massive Entertainment",
"Avalanche Studios","Arrowhead Game Studios","Resolution Games","Fast Travel Games",
"Embark Studios","Fatshark","Starbreeze","10 Chambers","Stunlock Studios",
"Coffee Stain Studios","Ghost Ship Games","Image & Form","Thunderful",
"Goodbye Kansas","Goodbye Kansas Games","Quantic Dream","Ubisoft",
"Gameloft","Voodoo","Homa Games","Ketchapp","Kolibri Games","Wooga",
"Goodgame Studios","InnoGames","Bigpoint","Gameforge","Travian Games",
"Plarium","Belka Games","Social Quantum","Nexters","Azur Games","MY.GAMES",
"Playrix","Game Insight","Melsoft","Playkot","Nevosoft","HeroCraft",
"Pixonic","Glu Mobile","Jam City","SGN","Scopely","Kabam","Gree",
"DeNA","GREE","Mobage","NHN","Com2uS","Netmarble","Nexon","NCSoft",
"Gravity","WeMade","Kakao Games","Pearl Abyss","Smilegate","Webzen",
"4:33","Devsisters","Sundaytoz","Wemade Tree","SundayToz","Gamevil",
"Actoz Soft","Joycity","Action Square","Neowiz","Neowiz Games",
"Bluehole","Krafton","Mintrocket","Unknown Worlds","The Molasses Flood",

// 🇬🇧 UK — More
"Babylon Health","Push Doctor","Echo","Accurx","Sensyne Health",
"iPlato","Cinapsis","DrDoctor","Patients Know Best","Spirit Healthcare",
"Huma","Current Health","Doccla","Inhealthcare","Feebris","Cognetivity",
"Lantum","Patchwork Health","Locum's Nest","Amplifi","RotaCloud","Deputy UK",
"Rotageek","WorkflowMax","Planday","Quinyx","Findmyshift","WhenToWork",
"Humanity","HotSchedules","Fourth","Harri","Sling","7shifts","ZoomShift",
"Homebase","When I Work","Shiftboard","Assembled","Tymeshift","Playvs",
"Strive Gaming","Bayes Esports","Abios","Sportradar","Genius Sports",
"Stats Perform","Deltatre","Hawk-Eye","Hawkeye Innovations","ChyronHego",
"Ross Video","Vizrt","Singular.live","Spalk","Kiswe","Phenix","Grabyo",
"Wildmoka","Massive","Veritone","Veritone One","Veritone Attribute",
"TVSquared","Innovid","Extreme Reach","Comcast Technology Solutions",
"Imagine Communications","Grass Valley","Evertz","Miranda Technologies",

// 🌏 Asia — More
"Gojek","Tokopedia","GoTo","Bukalapak","Traveloka","Tiket.com","OVO",
"Dana","LinkAja","Xendit","Payfazz","Modalku","KoinWorks","Amartha",
"Investree","Funding Societies ID","Akseleran","Alami","Julo","Akulaku",
"Kredivo","Home Credit ID","Adira Finance","BFI Finance","Mandala Finance",
"WOM Finance","Clipan Finance","Tunas Finance","Sunindo Kookmin","MAF",
"MNC Finance","CIMB Niaga Finance","Danamon Finance","BRI Finance",
"BNI Finance","BTN Finance","Bank Jago","Bank Aladin","Bank Seabank",
"Bank Neo Commerce","Bank Raya","Bank Allo","Bank Saqu","Bank Blu",
"Grab Financial","Sea Money","ShopeePay","GoPay","OVO Pay","DANA",
"Line Pay","KakaoPay","NaverPay","TossPay","Kakao Bank","K Bank",
"Toss Bank","Carrot Insurance","Kakao Insurance","Line Insurance",
"Coupang Pay","Baemin","Yogiyo","Shuttle","Tada","Kakao T","KST Mobility",
"Socar","GreenCar","I'M DoDo","PickMe","Pathao","Shohoz","Chalo",
"Cityflo","Move In Sync","NxtGen","Namma Yatri","Ola Money","Ola Play",
"Zoomcar","Drivezy","MyChoize","Revv","Myles Cars","Avis India",
"Hertz India","Eco Rent A Car","Carzonrent","Savaari","Oneway Cab",

// 🌍 Middle East
"Careem","Souq","Noon","Namshi","Fetchr","Aramex Tech","Anghami",
"Anghami Plus","Shahid","OSN+","Starzplay","weyyak","ToYou","Jahez",
"HungerStation","Talabat","Deliveroo MENA","Zomato UAE","Instashop",
"ElGrocer","Kibsons","Washmen","Justmop","Helperplace","ServiceMarket",
"Bayut","Property Finder","Propertyfinder","Dubizzle","Yalla","Yallamotor",
"YallaCompare","Compareit4me","Bayzat","Insured","Aman Insurance","AXA Gulf",
"Liva Insurance","Watania","Dubai Insurance","Abu Dhabi National Insurance",
"Daman","Nextcare","GIG Insurance","Alliance Insurance","Oman Insurance",
"Salama Insurance","Takaful Emarat","Noor Takaful","Dar Al Takaful",
"Wethaq","Beehive","Eureeca","Aflamnah","Zoomaal","Liwwa","Forus",
"Eedama","Reefin","RE/MAX MENA Tech","Realiste","Stake","Huspy",
"Mortgage Finder","Keyper","Smart Crowd","Globaleye","deVere Group",

// 🌎 Latin America — More  
"Mercado Libre","Mercado Pago","OLX Brazil","Locaweb","RD Station",
"VTEX","Linx","TOTVS","Senior Sistemas","Sankhya","Benner","Cigam",
"Alterdata","Softplan","Stefanini","CI&T","Eldorado","Mutant",
"Accenture Brazil","Capgemini Brazil","Wipro Brazil","IBM Brazil",
"Dell Brazil","HP Brazil","Lenovo Brazil","Positivo","Multilaser",
"Intelbras","Elsys","Claro Tech","TIM Tech","Vivo Tech","Oi Tech",
"Copel Telecom","Algar Telecom","Sercomtel","Brisanet","Unifique",
"Desktop","Vogel","Mob Telecom","Conectt","LiquidNet","Winity",
"V.tal","Eletronet","Ligga","Surf Telecom","Telium","ClearSale",
"Konduto","Kount Brazil","Emailage","Unico","Idwall","Serpro",
"Digicert Brazil","Soluti","Certisign","Valid","Boa Compra","Moip",
"PagSeguro","Mercado Pago","Pix","PIX","Cielo","Rede","GetNet",
"Stone","Adyen Brazil","Stripe Brazil","iFood Pay","99Pay","Picpay",

// 🌐 Global Remote & Open Source Companies
"Mozilla","Wikimedia","Linux Foundation","Apache Software Foundation",
"Cloud Native Computing Foundation","OpenJS Foundation","Python Software Foundation",
"NumFOCUS","R Consortium","Julia Computing","Rust Foundation","Go Team",
"Kotlin Foundation","Swift.org","PHP Foundation","Ruby Central",
"Perl Foundation","Haskell Foundation","Erlang Solutions","Elixir Team",
"Clojure Team","Scala Center","OCaml Pro","F# Software Foundation",
"Nim Team","Crystal Team","Zig Software Foundation","V Lang Team",
"Odin Team","Carbon Team","Mojo Team","Move Team","Solidity Team",
"Vyper Team","Ink Team","Cairo Team","Leo Team","Noir Team",
"Circom Team","Halo2 Team","Plonky2 Team","Starky Team","Boojum Team",
"Plonky3 Team","Nova Team","Groth16 Team","PLONK Team","STARKs Team",

// 🇨🇳 China — More
"Ant Group","WeChat Pay","UnionPay Tech","China Mobile Tech",
"China Unicom Tech","China Telecom Tech","CITIC Tech","Ping An Tech",
"China Life Tech","PICC Tech","China Re Tech","Sinosure Tech",
"CNOOC Tech","SINOPEC Tech","CNPC Tech","State Grid Tech","CGN Tech",
"CGNPC Tech","SPIC Tech","Datang Tech","Huaneng Tech","GD Power Tech",
"Three Gorges Tech","Yangtze Power Tech","SDIC Power Tech","CHN Energy",
"CEEC Tech","POWERCHINA Tech","CSEC Tech","CPECC Tech","CCOEC Tech",
"SINOMACH Tech","CNMC Tech","CSCEC Tech","CRCC Tech","CCCC Tech",
"CREC Tech","CRECG Tech","CHEC Tech","CCCI Tech","CSCEC E&C",
"Lenovo","Xiaomi","OPPO","vivo","OnePlus","Realme","iQOO","Meizu",
"ZTE","TCL","Hisense","Haier Smart","Midea IoT","Gree Smart",
"Skyworth AI","Changhong AI","Konka AI","Coocaa","KKTV","Vidaa",
"Toshiba TV","Sharp Smart","Philips TV Tech","Panasonic AI",
"Alibaba Cloud","Tencent Cloud","Huawei Cloud","Baidu Cloud","JD Cloud",
"ByteDance Cloud","NetEase Cloud","Kingsoft Cloud","UCloud","QingCloud",
"CTyun","ChinaNet Cloud","CMCloud","CU Cloud","Ctyun","Wangsu",
"ChinaCache","ChinaNetCloud","SinaCloud","SouFun Cloud","58Cloud",
"Meituan Cloud","Didi Cloud","Kuaishou Cloud","iQIYI Cloud","Youku Cloud",
"Bilibili Cloud","Xunlei Cloud","Thunder Software","Deepin","Kylin OS",
"UOS","NeoKylin","COS","HarmonyOS","LiteOS","AliOS","YunOS","MiOS",
"ColorOS","OriginOS","FuntouchOS","OxygenOS","RealmeUI","MeizuOS",
"Flyme","EMUI","MagicOS","ZUI","MyOS","OriginOS Ocean","HyperOS",

// 🇮🇳 India — Deep Tech & New Age
"Mad Street Den","Haptik","Yellow.ai","Vernacular.ai","Gnani.ai",
"Uniphore","Observe.AI","Mihup","Slang Labs","CoRover","BotPenguin",
"Engati","Gupshup","Kaleyra","Route Mobile","Tanla Platforms","IMImobile",
"ValueFirst","Exotel","Knowlarity","Ozonetel","Servetel","MyOperator",
"Tata Tele Business Services","Airtel Business","Jio Business","Vi Business",
"BSNL Enterprise","Videocon Telecom","Telenor India","Loop Mobile",
"MTNL","Quadrant Televentures","Sistema Shyam","S Tel","Idea Cellular",
"Hutch India","BPL Mobile","Essar Telecom","Reliance Infocomm","Tata Indicom",
"Reliance Communications","MTS India","Uninor","Etisalat DB","S Tel",
"Tikona Digital","YOU Broadband","Hathway","Den Networks","GTPL",
"Siti Networks","Fastway","InCable","ORTEL","Sheetal Group","Asianet",
"SCV","7 Star","Darsh Cable","Datanet","Spectra","ACT Fibernet",
"Excitel","Tikona","DEN Broadband","Hathway Cable","Siti Cable",
"Dish TV Tech","Tata Sky Tech","Airtel DTH Tech","Sun Direct Tech",
"Videocon D2H","DD Free Dish Tech","GTPL Hathway","NXT Digital",
"IN Digital","Hinduja Ventures","Wire and Wireless","Aksh Optifibre",
"CESC Ventures","RP-Sanjiv Goenka Tech","Haldia Petrochemicals Tech",
"Firstsource","WNS Global","Mphasis BFL","EXL Service","NIIT BPO",
"Aegis BPO","Intelenet","Serco India","Concentrix India","Teleperformance",
"Sutherland","IGATE","Patni Computer","Mastech","iGate Mastech",
"Infosonics","Hexaware BPO","Syntel","Atos India","Capgemini BPO",
"Accenture BPO","IBM BPO","HP BPO","Dell BPO","Infosys BPO","Wipro BPO",
"TCS BPO","HCL BPO","Tech Mahindra BPO","Mphasis BPO","Cognizant BPO",

// 🇺🇸 USA — HealthTech & BioTech
"Epic Systems","Cerner","Meditech","Allscripts","athenahealth","eClinicalWorks",
"NextGen Healthcare","GE Healthcare Digital","Philips Healthcare Tech",
"Siemens Healthineers Tech","Roper Technologies","Netsmart","Greenway Health",
"Kareo","DrChrono","ModMed","Modernizing Medicine","Healow","AdvancedMD",
"Clinicient","ChiroTouch","Jane App","SimplePractice","TherapyNotes",
"TheraNest","Luminare Health","Veradigm","Inovalon","Health Catalyst",
"Evolent Health","Cotiviti","Multiplan","Change Healthcare","Optum Tech",
"UnitedHealth Tech","Humana Tech","Aetna Tech","Anthem Tech","Cigna Tech",
"CVS Health Tech","Walgreens Tech","Rite Aid Tech","Express Scripts Tech",
"PBM Tech","Pharmacy Tech","MedImpact","Navitus","Prime Therapeutics",
"Capital Rx","Truveris","RxSS","RxBenefits","Benecard","Elixir",
"Restat","Diplomat","Maxor","Genoa Healthcare","PharMerica","Omnicare",
"PharMerica","BioScrip","Option Care","Coram","Coram CVS","BioPlus",
"Amber Specialty Pharmacy","Avita Pharmacy","Shields Health Solutions",
"Lumicera","AllianceRx Walgreens","CPS Solutions","Apexus","Inmar",
"Vizient","Premier Inc","HealthTrust","Provista","Yankee Alliance",
"Consorta","MedAssets","Broadlane","Novation","University HealthSystem",
"Intellicheck","Verato","Datavant","Arcadia","Arcadia.io","LexisNexis Health",
"Experian Health","TransUnion Health","Equifax Health","IQVIA","ICON",
"Covance","PRA Health Sciences","PPD","PSI CRO","Syneos Health",
"Medpace","Chiltern","Theorem Clinical Trials","Pharm-Olam","INC Research",

// 🇺🇸 USA — EdTech
"Coursera","Udemy","edX","Khan Academy","Duolingo","Chegg","2U",
"Instructure","Blackboard","Moodle","D2L","Schoology","PowerSchool",
"Infinite Campus","Skyward","Follett","Renaissance Learning","Curriculum Associates",
"McGraw-Hill Education","Houghton Mifflin Harcourt","Pearson Digital",
"Cengage","Wiley","Elsevier","Springer Nature","Taylor & Francis",
"Oxford University Press Tech","Cambridge University Press Tech",
"JSTOR","ProQuest","EBSCO","Gale","LexisNexis Education","Westlaw",
"Wolters Kluwer","CCH","BNA","RIA","Tax Analysts","Bloomberg Tax",
"Thomson Reuters Tax","Checkpoint","FastTax","TurboTax","H&R Block Tech",
"TaxAct","TaxSlayer","FreeTaxUSA","Credit Karma Tax","Cash App Taxes",
"Column Tax","Keeper Tax","Taxfyle","April Tax","Trove","Ocho",
"Found","Relay","Mercury","Brex","Ramp","Divvy","Expensify","Airbase",
"Spendesk","Pleo","Soldo","Payhawk","Moss","Yokoy","Circula","Mobilexpense",

// 🇺🇸 Fintech Deep
"Stripe","Square","PayPal","Venmo","Cash App","Zelle","Affirm","Klarna",
"Afterpay","Sezzle","Splitit","Laybuy","Paidy","Atome","Hoolah","Pace",
"Grab PayLater","Kredivo","Akulaku","Home Credit","Kreditas","Addi",
"Kueski","Kueski Pay","Yaydoo","Conekta","Clip","Kushki","Pagali",
"dLocal","EBANX","PayRetailers","Paymentez","PlacetoPay","PayU LATAM",
"Mercado Pago","PicPay","Nupay","Ame Digital","Livelo","Smiles",
"TudoAzul","Multiplus","Catho","InfoJobs Brazil","Vagas","Emprego Web",
"Trampos","Revelo","Talent.com Brazil","LinkedIn Brazil","Glassdoor Brazil",

// More Global
"Stripe Atlas","Stripe Treasury","Stripe Issuing","Stripe Connect",
"Adyen Platforms","Adyen Issuing","Adyen Terminal","Adyen MarketPay",
"Braintree","PayPal Ventures","Venmo Business","Xoom","Hyperwallet",
"PayPal Credit","PayPal Working Capital","PayPal Honey","Zettle",
"iZettle","SumUp","myPOS","Poynt","Dejavoo","PAX Technology","Verifone",
"Ingenico","Worldline","Everi","IGT","Scientific Games","Konami Gaming",
"Aristocrat","Ainsworth","AGS","Everi Holdings","NRT Technology",
"JCM Global","Global Cash Access","Sightline Payments","PayNearMe",
"InComm","Blackhawk Network","SVS","Stored Value Systems","Givex",
"Loyalty One","Points.com","Collinson","Comarch Loyalty","Capillary Tech",
"Annex Cloud","Zinrelo","Yotpo","LoyaltyLion","Smile.io","Stamped.io",
"Marsello","Mention Me","Ambassador","Referral Rock","ReferralCandy",
"Friendbuy","Extole","Buyapowa","Viral Loops","GrowSurf","SparkLoop",
"Rewardful","FirstPromoter","Partnerstack","Impact","CJ Affiliate",
"Rakuten Advertising","Awin","ShareASale","FlexOffers","Commission Junction",
"Pepperjam","Tradedoubler","Webgains","Admitad","Affilinet","Zanox",
"Belboon","Affilinet","TradeTracker","Daisycon","Conversant","Epsilon",
"Publicis Sapient","Merkle","Acxiom","LiveRamp","Throtle","Neustar",
"TransUnion Marketing","Equifax Marketing","Experian Marketing","IRI",
"Nielsen Tech","Kantar Tech","GfK Tech","Ipsos Tech","YouGov Tech",
"SurveyMonkey","Qualtrics","Medallia","InMoment","Reputation.com",
"Birdeye","Podium","Broadly","Grade.us","ReviewTrackers","Yext",
"Uberall","Synup","SOCi","Chatmeter","Rio SEO","BrightLocal","Whitespark",
"Moz","Ahrefs","Semrush","Majestic","Mangools","Serpstat","SpyFu",
"iSpionage","SimilarWeb","Alexa","Quantcast","Comscore","Nielsen Digital",
];


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;


const SkillInputForm = ({ onSubmit }) => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [domain, setDomain] = useState("");
  const [company, setCompany] = useState("");
  const [filteredDomain, setFilteredDomain] = useState(domainOptions);
  const [filteredCompany, setFilteredCompany] = useState(companyOptions);
  const [studyHours, setStudyHours] = useState(2);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showEvaluation, setShowEvaluation] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [allMissingSkills, setAllMissingSkills] = useState([]);

  // Allowed Skills
  const allowedSkills = [
    "python", "java", "sql", "c", "oops", "javascript", "typescript",
    "cplusplus", "csharp", "html", "css", "react", "nodejs", "django",
    "flask", "spring boot", "fastapi", "express", "aws", "azure",
    "google cloud", "docker", "kubernetes", "git", "github", "gitlab",
    "bitbucket", "jira", "nextjs", "tensorflow", "pytorch", "keras",
    "onnx", "mlops", "scikit-learn", "pandas", "numpy", "matplotlib",
    "seaborn", "plotly", "opencv", "transformers", "huggingface",
    "llms", "generative ai", "feature engineering", "data visualization",
    "statistics", "data wrangling", "big data", "spark", "hadoop",
    "ros", "robot operating systems", "sensors", "actuators",
    "path planning", "robot kinematics", "simulation", "gazebo",
    "cnn", "rnn", "gan", "autoencoders", "nltk", "spacy",
    "text preprocessing", "sentiment analysis", "chatbots",
    "seq2seq", "language modeling", "yolo", "mask r-cnn",
    "image segmentation", "object detection", "arduino",
    "raspberry pi", "mqtt", "sensor networks", "edge computing",
    "cloud ai services", "qiskit", "quantum algorithms",
    "quantum simulation", "quantum gates", "entanglement",
    "q-learning", "policy gradient", "gym", "diffusion models",
    "vae", "openai", "unity", "unreal engine", "vr", "ar",
    "3d modeling", "motion capture", "shader programming",
    "flutter", "react native", "android", "ios", "kotlin",
    "swift", "firebase", "ui/ux", "mobile testing", "ci/cd",
    "jenkins", "terraform", "ansible", "gcp", "monitoring",
    "prometheus", "grafana", "sre", "cloud computing",
    "serverless", "containers", "cloud security",
    "infrastructure as code", "finops", "network security",
    "penetration testing", "ethical hacking", "siem",
    "threat intelligence", "zero trust", "application security",
    "cryptography", "incident response", "seo", "sem",
    "google analytics", "social media marketing",
    "email marketing", "content marketing", "ad campaigns",
    "conversion rate optimization", "payments", "risk analysis",
    "financial modeling", "regtech", "fraud detection",
    "edtech tools", "gamification", "adaptive learning",
    "ehr systems", "bioinformatics", "genomics",
    "predictive modeling", "roadmapping", "product analytics",
    "stakeholder management", "user research", "market analysis",
    "figma", "adobe xd", "sketch", "prototyping",
    "usability testing", "interaction design", "design systems",
    "airflow", "etl pipelines", "data lakes", "data warehouses",
    "dbt", "power bi", "tableau", "qlik", "dashboards",
    "analytics", "excel", "feature stores", "faiss",
    "elasticsearch", "opensearch", "vector databases",
    "decision modeling", "optimization", "simulation",
    "fusion 360", "autodesk generative design", "deepfake",
    "magenta", "stable diffusion", "dalle", "three.js",
    "webgl", "opengl", "after effects", "adobe animate",
    "cinema 4d", "lidar", "drone programming", "gps integration",
    "precision agriculture", "robotics", "automation",
    "document automation", "contract analytics",
    "case management software", "risk modeling",
    "ai for claims", "pos systems", "inventory management",
    "ai recommendation systems", "citizen services",
    "wearables", "food delivery platforms", "booking platforms",
    "robo-advisors", "aml monitoring", "streaming platforms",
    "microservices", "serverless framework", "rest api",
    "graphql", "openapi", "postman", "swagger", "mysql",
    "postgresql", "mongodb", "redis", "kafka", "cassandra",
    "apache kafka", "apache spark", "sklearn",
    "machine learning", "deep learning", "computer vision",
    "artificial intelligence", "natural language processing",
    "communication", "collaboration", "teamwork",
    "leadership", "management", "project management",
    "agile", "scrum", "kanban", "waterfall", "devops",
    "problem solving", "critical thinking", "creativity",

  ];

  

  // Sanitize
  const sanitizeSkill = (input) =>
    input.replace(/[^a-zA-Z\s]/g, "").trim();

  // Normalize
  const normalizeSkill = (skill) => {
    const s = skill.toLowerCase().trim();
    const corrections = {
      pthon: "python",
      pytrch: "pytorch",
      sl: "sql",
      js: "javascript",
      ts: "typescript",
      ml: "machine learning",
      ai: "artificial intelligence",
      dl: "deep learning",
      sklearn: "scikit-learn",
      cv: "computer vision",
      nlp: "natural language processing",
      reactjs: "react",
      nodejs: "node.js",
      html5: "html",
      css3: "css",
      cpp: "c++",
      csharp: "c#",
      k8s: "kubernetes",
      aws: "amazon web services",
      gcp: "google cloud",
      azure: "microsoft azure",
      kafka: "apache kafka",
      spark: "apache spark",
      rest: "rest api",
      jaa: "java",
      penetrationtesting: "penetration testing",
    };
    return corrections[s] || s;
  };
  
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
  if (activeIndex >= 0 && listRef.current) {
    const activeItem = listRef.current.children[activeIndex];
    if (activeItem) {
      activeItem.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }
}, [activeIndex]);
const handleKeyDown = (e) => {
  if (!filteredDomain.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    setActiveIndex((prev) =>
      prev < filteredDomain.length - 1 ? prev + 1 : 0
    );
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : filteredDomain.length - 1
    );
  }

  if (e.key === "Enter" && activeIndex >= 0) {
    e.preventDefault();
    selectDomain(filteredDomain[activeIndex]);
    setActiveIndex(-1);
  }
};

  const handleResult = async (formData) => {
    const cleanedSkills = formData.skills.map(normalizeSkill);


    try {
      setLoading(true);

      const response = await axios.post("http://127.0.0.1:5000/predict", {
        skills: cleanedSkills,
        domain: formData.domain,
        description: `I have experience in ${cleanedSkills.join(", ")} and want to build projects`,
        company: formData.company,
        studyHours: formData.studyHours,
      });

      setResult(response.data);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong with the prediction API.", {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const addSkill = (e) => {
    e.preventDefault();

    let sanitized = sanitizeSkill(skillInput);

    if (!sanitized) {
      toast.error("Skill cannot be empty or contain numbers/special characters");
      return;
    }

    sanitized = normalizeSkill(sanitized);

    if (!allowedSkills.includes(sanitized)) {
      toast.error(`"${sanitized}" is not a recognized skill`);
      return;
    }

    if (!skills.includes(sanitized)) {
      setSkills([...skills, sanitized]);
      setSkillInput("");
    } else {
      toast("Skill already added");
    }
  };

  const removeSkill = (skill) =>
    setSkills(skills.filter((s) => s !== skill));

  const handleDomainChange = (e) => {
    const val = e.target.value;
    setDomain(val);

    const filtered = domainOptions.filter((d) =>
      d.toLowerCase().includes(val.toLowerCase())
    );

    setFilteredDomain(filtered);
  };

  const selectDomain = (d) => {
    setDomain(d);
    setFilteredDomain([]);
  };

  const handleCompanyChange = (e) => {
    const val = e.target.value;
    setCompany(val);

    const filtered = companyOptions.filter((c) =>
      c.toLowerCase().includes(val.toLowerCase())
    );

    setFilteredCompany(filtered);
  };

  const selectCompany = (c) => {
    setCompany(c);
    setFilteredCompany([]);
  };

  const startVoiceInput = (setter) => {
    if (!SpeechRecognition) {
      toast.error("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setter((prev) => (prev ? prev + " " + spokenText : spokenText));
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => recognition.stop();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!domain || skills.length === 0) {
      toast("Please select a domain and add at least one skill. So that I can Predict");
      return;
    }

    toast("Please evaluate your skills to test whether you are strong enough.");
    setShowEvaluation(true);
  };

  const handleEvaluationComplete = (missingFromEval) => {
  const formData = {
    skills,
    domain,
    company: company || null,
    studyHours: Number(studyHours),
    missingSkills: missingFromEval || [],
    failed_skills: missingFromEval || [],
  };

  setAllMissingSkills(missingFromEval || []);

  setResult(formData);
  setEvaluationResult(formData);
  setShowEvaluation(false);

  // 🔥 PASS evaluation data ALSO
  onSubmit({
    ...formData,
    evaluation_missing: missingFromEval || [],
  });

  handleResult(formData);
};

  return (
  <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-violet-900 via-black to-white p-6 text-white relative overflow-hidden">

    {/* 🌌 Background Glow (soft, same color theme) */}
    <div className="absolute w-[350px] h-[350px] bg-violet-600 opacity-20 blur-3xl rounded-full top-[-80px] left-[-80px] animate-pulse"></div>
    <div className="absolute w-[250px] h-[250px] bg-violet-500 opacity-20 blur-3xl rounded-full bottom-[-80px] right-[-80px] animate-pulse"></div>

    {!showEvaluation ? (
      <>
        <AIAgent page="skill" />

        {/* HEADER */}
        <h2 className="text-3xl font-bold mb-6 mt-6 text-center tracking-wide">
          Enter Your Details
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-black bg-opacity-60 backdrop-blur-md p-6 rounded-xl shadow-2xl space-y-6 border border-white/10 transition"
        >
          {/* Skills Input */}
          <div>
            <label className="block mb-2 font-semibold">
              Current Skills
            </label>

            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-violet-700 px-3 py-1 rounded-full flex items-center gap-2 transition transform hover:scale-105 hover:shadow-lg"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    className="font-bold hover:text-red-300"
                    onClick={() => removeSkill(skill)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add a skill"
                className="flex-1 px-3 py-2 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-200 focus:scale-[1.02]"
              />

              <button
                onClick={addSkill}
                className="bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-500 transition transform hover:scale-105 active:scale-95"
              >
                Add
              </button>

              <button
                type="button"
                onClick={() => startVoiceInput(setSkillInput)}
                className="bg-white cursor-pointer text-black px-4 py-4 rounded-full hover:bg-violet-500 hover:text-white transition transform hover:scale-110 active:scale-95"
                title="Speak Skill"
              >
                <AiFillAudio />
              </button>
            </div>

            {/* UX Hint */}
            <p className="text-xs text-gray-400 mt-1">
              Example: React, Python, Machine Learning
            </p>
          </div>

          {/* Domain Input */}
          <div className="relative">
            <label className="block mb-2 font-semibold">
              Target Domain
            </label>

            <input
              type="text"
              value={domain}
              onChange={handleDomainChange}
              onKeyDown={handleKeyDown}
              placeholder="Type to search domain"
              className="w-full px-3 py-2 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition focus:scale-[1.02]"
            />

            <button
              type="button"
              onClick={() => startVoiceInput(setDomain)}
              className="absolute right-2 top-2 text-white"
              title="Speak Domain"
            >
              <AiFillAudio className="relative top-9 cursor-pointer hover:text-violet-400 transition transform hover:scale-110" />
            </button>

            {filteredDomain.length > 0 && domain && (
              <ul className="absolute z-10 w-full bg-black bg-opacity-90 mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto border border-violet-700 animate-fadeIn">
                {filteredDomain.map((d, index) => (
                  <li
                    key={d}
                    onClick={() => selectDomain(d)}
                    className={`px-4 py-2 cursor-pointer transition ${
                      index === activeIndex
                        ? "bg-violet-700"
                        : "hover:bg-violet-700"
                    }`}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Company Input */}
          <div className="relative">
            <label className="block mb-2 font-semibold">
              Target Company (Optional)
            </label>

            <input
              type="text"
              value={company}
              onChange={handleCompanyChange}
              onKeyDown={handleKeyDown}
              placeholder="Type to search company"
              className="w-full px-3 py-2 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition focus:scale-[1.02]"
            />

            <button
              type="button"
              onClick={() => startVoiceInput(setCompany)}
              className="absolute right-2 top-2 text-white"
              title="Speak Company"
            >
              <AiFillAudio className="relative top-9 cursor-pointer hover:text-violet-400 transition transform hover:scale-110" />
            </button>

            {filteredCompany.length > 0 && company && (
              <ul className="absolute z-10 w-full bg-black bg-opacity-90 mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto border border-violet-700 animate-fadeIn">
                {filteredCompany.map((c, index) => (
                  <li
                    key={c}
                    onClick={() => selectCompany(c)}
                    className={`px-4 py-2 cursor-pointer transition ${
                      index === activeIndex
                        ? "bg-violet-700"
                        : "hover:bg-violet-700"
                    }`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Study Hours */}
          <div>
            <label className="block mb-2 font-semibold">
              Daily Study Hours
            </label>

            <input
              type="number"
              min={1}
              max={24}
              value={studyHours}
              onChange={(e) => setStudyHours(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition focus:scale-[1.02]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full bg-violet-600 py-3 rounded-lg text-white font-bold cursor-pointer transition transform hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">
              {loading ? "Predicting..." : "Submit"}
            </span>

            {/* Subtle Glow */}
            <span className="absolute inset-0 bg-white opacity-10 blur-xl animate-pulse"></span>
          </button>

          {/* Result Display */}
          {evaluationResult && (
            <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-violet-700 animate-fadeIn">
              <pre className="text-sm whitespace-pre-wrap">
                {JSON.stringify(evaluationResult, null, 2)}
              </pre>
            </div>
          )}
        </form>
      </>
    ) : (
      <>
        <AIAgent page="evaluate" />

        <Evaluate
          enteredSkills={skills}
          onComplete={handleEvaluationComplete}
        />
      </>
    )}
  </div>
);
};

export default SkillInputForm;