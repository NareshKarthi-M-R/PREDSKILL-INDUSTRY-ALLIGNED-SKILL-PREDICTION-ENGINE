from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os

app = Flask(__name__)
CORS(app)

MODEL_PATH = "model"

career_model = pickle.load(open(os.path.join(MODEL_PATH, "career_model.pkl"), "rb"))
domain_model = pickle.load(open(os.path.join(MODEL_PATH, "domain_model.pkl"), "rb"))
vectorizer = pickle.load(open(os.path.join(MODEL_PATH, "vectorizer.pkl"), "rb"))
role_skills = pickle.load(open(os.path.join(MODEL_PATH, "role_skills.pkl"), "rb"))

# -----------------------------
# DOMAIN → SKILLS
# -----------------------------
DOMAIN_SKILLS = {
    "data science": ["python","mysql","pandas","numpy","seaborn","scikit-learn","tensorflow","pytorch","apache spark","hadoop","data visualization","statistics","big data"],
    "ai & ml": ["python","tensorflow","pytorch","scikit-learn","keras","opencv","nlp","machine learning","deep learning","reinforcement learning","transformers","huggingface","llms","generative ai","mlops","model deployment"],
    "ai engineer": ["python","tensorflow","pytorch","keras","onnx","model optimization","mlops","cloud ai services","llms","deep learning","reinforcement learning"],
    "deep learning": ["tensorflow","pytorch","keras","cnn","rnn","transformers","huggingface","gan","autoencoders","computer vision","nlp"],
    "natural language processing": ["python","nltk","spacy","huggingface","transformers","text preprocessing","sentiment analysis","chatbots","llms","seq2seq","language modeling"],
    "computer vision": ["opencv","python","pytorch","tensorflow","cnn","yolo","mask r-cnn","image segmentation","object detection","generative models","gan","image augmentation"],
    "robotics": ["ros","python","c++","robot operating systems","sensors","actuators","path planning","robot kinematics","reinforcement learning","simulation","gazebo"],
    "full stack development": ["html","css","javascript","react","node.js","express","django","flask","mongodb","sql","rest api","graphql","typescript","next.js","redux","docker","kubernetes"],
    "frontend development": ["html","css","javascript","react","vue","angular","typescript","tailwindcss","responsive design","web accessibility","next.js","redux"],
    "backend development": ["node.js","django","flask","java","spring boot","python","c#","c++","sql","rest api","graphql","microservices","docker","kubernetes","serverless"],
    "devops": ["docker","kubernetes","ci/cd","jenkins","git","terraform","ansible","aws","azure","gcp","monitoring","prometheus","grafana","sre","mlops"],
    "cloud computing": ["aws","azure","gcp","cloud architecture","serverless","containers","kubernetes","cloud security","devops","infrastructure as code","finops"],
    "cybersecurity": ["network security","penetration testing","ethical hacking","cloud security","siem","threat intelligence","zero trust","application security","cryptography","incident response"],
    "digital marketing": ["seo","sem","google analytics","social media marketing","email marketing","content marketing","ad campaigns","conversion rate optimization","data analytics"],
    "blockchain": ["solidity","web3","ethereum","smart contracts","dapps","defi","nft","cryptography","hyperledger","consensus algorithms"],
    "fintech": ["python","sql","blockchain","payments","risk analysis","financial modeling","regtech","data analytics","fraud detection","ai in finance"],
    "edtech": ["python","react","django","ml for learning analytics","gamification","adaptive learning","data visualization","ai tutors"],
    "healthtech": ["python","r","ml for healthcare","bioinformatics","genomics","predictive modeling","data visualization","ehr systems","computer vision for medical imaging"],
    "product management": ["roadmapping","agile","jira","product analytics","stakeholder management","user research","market analysis","data-driven decision making"],
    "ux/ui design": ["figma","adobe xd","sketch","prototyping","user research","usability testing","interaction design","design systems","responsive design"],
    "data engineering": ["python","sql","spark","hadoop","airflow","etl pipelines","data lakes","data warehouses","dbt","cloud data platforms"],
    "business intelligence": ["power bi","tableau","qlik","sql","data visualization","dashboards","analytics","excel","data storytelling"],
    "reinforcement learning": ["python","tensorflow","pytorch","gym","rl algorithms","policy gradient","q-learning","deep rl","multi-agent rl"],
    "generative ai": ["python","pytorch","tensorflow","transformers","gpt","diffusion models","vae","gan","huggingface","llms","prompt engineering"],
    "llm model development": ["transformers","huggingface","pytorch","tensorflow","fine-tuning","prompt engineering","tokenization","text generation","mlops"],
    "ar/vr development": ["unity","unreal engine","c#","c++","3d modeling","vr/ar sdk","oculus","motion capture","shader programming"],
    "iot": ["arduino","raspberry pi","mqtt","python","c","sensor networks","edge computing","embedded systems","cloud integration"],
    "quantum computing": ["qiskit","python","quantum algorithms","quantum simulation","quantum gates","entanglement","quantum machine learning"],
    "mobile app development": ["flutter","react native","android","ios","kotlin","swift","firebase","ui/ux","mobile testing"],
    "gaming / game dev": ["unity","unreal engine","c#","c++","game physics","ai for games","3d modeling","shader programming"],
    "mlops": ["docker","kubernetes","airflow","mlflow","seldon","model deployment","monitoring","ci/cd","cloud ai services"],
    "dataops": ["airflow","dbt","etl pipelines","data quality","monitoring","kubernetes","ci/cd","cloud platforms"],
    "llmops": ["llms","fine-tuning","prompt engineering","huggingface","deployment","model optimization","mlops","evaluation metrics"],
    "api-first development": ["rest api","graphql","openapi","postman","swagger","fastapi","express","security","versioning"],
    "serverless architecture": ["aws lambda","azure functions","google cloud functions","serverless framework","event-driven architecture"],
    "webassembly": ["rust","c++","assemblyscript","performance optimization","browser integration"],
    "developer experience (dx)": ["tooling","documentation","sdk design","api usability","devrel","automation"],
    "internal developer platforms": ["self-service ci/cd","microservices management","cloud automation","devops tooling"],
    "infrastructure as code": ["terraform","ansible","pulumi","cloudformation","ci/cd integration"],
    "ai security": ["model hardening","adversarial attacks","privacy","security audits","ml security","federated learning security"],
    "zero trust architecture": ["network segmentation","identity access management","authentication","authorization","policy enforcement"],
    "cloud security": ["aws security","azure security","gcp security","encryption","iam","network security"],
    "application security": ["secure coding","penetration testing","vulnerability scanning","owasp","devsecops"],
    "threat intelligence": ["siem","logs","attack detection","cyber threat hunting","malware analysis"],
    "deception technology": ["honeypots","decoy networks","threat monitoring","attack analysis"],
    "secure enclaves & confidential computing": ["trusted execution","secure enclaves","confidential data processing","intel sgx","amd sevs"],
    "digital identity & iam": ["oauth2","saml","openid connect","identity management","single sign-on","multi-factor authentication"],
    "web3 security": ["smart contract auditing","reentrancy attacks","security best practices","openzeppelin","defi security"],
    "real-time analytics": ["kafka","spark streaming","flink","stream processing","clickstream analytics"],
    "streaming data pipelines": ["kafka","flink","spark streaming","kinesis","airflow","data quality","etl automation"],
    "reverse etl": ["census","hightouch","rudderstack","etl","data sync","analytics pipelines"],
    "data mesh": ["domain-driven design","data governance","data catalog","decentralized data architecture"],
    "data lakehouse": ["delta lake","hudi","iceberg","spark","etl pipelines","cloud storage"],
    "graph analytics": ["neo4j","networkx","graph algorithms","graph databases","cypher","visualization"],
    "geospatial analytics": ["gis","qgis","postgis","spatial databases","mapbox","geopandas"],
    "causal ai": ["do-calculus","structural causal models","python","data analysis","causal inference","econml"],
    "decision intelligence": ["decision modeling","optimization","simulation","ai-driven decision making"],
    "feature stores": ["feast","tfx","mlflow","feature engineering","data versioning","mlops"],
    "semantic search": ["elasticsearch","opensearch","faiss","vector databases","nlp","embedding"],
    "growth engineering": ["analytics","a/b testing","conversion optimization","full stack","data pipelines"],
    "revenue operations (revops)": ["crm","hubspot","salesforce","analytics","automation","reporting"],
    "ai product management": ["roadmapping","metrics","ml product lifecycle","ai strategy","stakeholder mgmt"],
    "developer relations (devrel)": ["community building","documentation","sdk tutorials","technical advocacy","events"],
    "no-code / low-code development": ["bubble","webflow","appgyver","zapier","automation","integrations"],
    "vertical saas": ["industry-specific saas","workflow automation","analytics","integration","cloud platforms"],
    "b2b marketplace platforms": ["marketplace design","payments","api integration","analytics","web development"],
    "subscription analytics": ["revenue analytics","churn analysis","cohort analysis","saas metrics"],
    "customer data platforms": ["segment","mparticle","data unification","customer analytics","data privacy"],
    "composable commerce": ["headless cms","api-first ecommerce","shopify","bigcommerce","integration"],
    "generative design": ["fusion 360","autodesk generative design","optimization","cad modeling"],
    "ai video generation": ["deepfake","tensorflow","pytorch","video synthesis","generative ai"],
    "ai audio & music": ["magenta","openai jukebox","tensorflow","pytorch","music generation","sound synthesis"],
    "creative ai": ["stable diffusion","dalle","midjourney","generative ai","python"],
    "digital twin development": ["simulation","IoT","digital twin platforms","sensor data","analytics"],
    "spatial computing": ["unity","unreal","arkit","arcore","vr","3d modeling"],
    "3d & webgl": ["three.js","webgl","opengl","shader programming","javascript","c++"],
    "motion design tech": ["after effects","adobe animate","cinema 4d","motion graphics","animation scripting"],
    "immersive storytelling": ["unity","unreal","vr","ar","interactive narrative","game engines"],
    "humanoid robotics": ["ros","python","actuators","sensors","control systems","kinematics","simulation"],
    "autonomous vehicles": ["ros","python","lidar","computer vision","sensor fusion","path planning"],
    "drone technology": ["arduino","raspberry pi","python","drone programming","flight control","gps integration"],
    "agricultural tech": ["iot","precision agriculture","drones","python","ml for crops","sensor networks"],
    "manufacturing ai": ["predictive maintenance","robotics","automation","ml for manufacturing","iiot","quality inspection"],
    "warehouse automation": ["robotics","iot","automation","logistics optimization","python","ai for robotics"],
    "soft robotics": ["actuators","sensors","control systems","bio-inspired robotics","simulation"],
    "legal tech": ["document automation","nlp","contract analytics","case management software"],
    "insurtech": ["risk modeling","data analytics","ai for claims","blockchain","fraud detection"],
    "proptech": ["iot","automation","data analytics","real estate platforms","virtual tours"],
    "hrtech": ["hr analytics","recruitment automation","nlp","employee engagement software"],
    "cleantech": ["renewable energy","energy optimization","carbon tracking","ai for sustainability"],
    "agritech": ["precision farming","iot","drones","ml for crops","automation","sensors"],
    "retailtech": ["pos systems","inventory management","analytics","ai recommendation systems","ecommerce platforms"],
    "supplychain tech": ["logistics optimization","ai demand forecasting","iot","blockchain","analytics"],
    "govtech": ["citizen services","data analytics","automation","blockchain","ai for public services"],
    "sports tech": ["wearables","performance analytics","data visualization","ai coaching","sensor tech"],
    "foodtech": ["food delivery platforms","ai for logistics","recipe analytics","automation"],
    "traveltech": ["booking platforms","ai recommendation","logistics optimization","data analytics"],
    "wealthtech": ["robo-advisors","portfolio optimization","ai for finance","blockchain"],
    "regtech": ["compliance automation","data privacy","aml monitoring","ai for regulation"],
    "mediatech": ["streaming platforms","content recommendation","analytics","ai video/audio"],
    "software development": ["python","javascript","java","c++","react","node.js","django","flask","git","ci/cd"],
    "it services": ["cloud platforms","managed services","automation","devops","data analytics"],
    "consulting": ["business analysis","data analytics","strategy","process optimization","ai advisory"],
    "education": ["edtech tools","ml for learning","data analytics","elearning platforms","adaptive learning"],
    "healthcare": ["ehr systems","ml for healthcare","predictive modeling","bioinformatics","data analysis"],
    "software developer": ["python","javascript","java","c++","react","node.js","django","flask","git","oops"],
    "ai researcher": ["python","tensorflow","pytorch","research papers","ml experiments","deep learning","reinforcement learning","generative ai"],
    "software engineer": ["python","java","c++","react","node.js","django","flask","git","ci/cd","cloud platforms","microservices","devops","mongodb", "oops"],
    "it consultant": ["business analysis","data analytics","strategy","process optimization","ai advisory","cloud platforms","managed services","automation","devops"],
    "java developer": ["java","spring boot","hibernate","maven","git","ci/cd","cloud platforms", "oops"],
    "python developer": ["python","django","flask","fastapi","git","ci/cd","cloud platforms"],
    "data analyst": ["python","mysql","excel","tableau","power bi","data visualization","statistics","data cleaning","data storytelling"],

}

# -----------------------------
def normalize_skill(skill):
    skill = skill.lower().strip()
    mapping = {
        "datascience": "data science",
        "ml": "machine learning"
    }
    return mapping.get(skill, skill)

# -----------------------------
def get_domain_key(user_domain):
    for key in DOMAIN_SKILLS:
        if key in user_domain:
            return key
    return None

# -----------------------------
@app.route("/")
def home():
    return jsonify({"message": "PredSkill AI Backend Running"})

# -----------------------------
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        skills = data.get("skills", [])
        if isinstance(skills, str):
            skills = [skills]

        user_domain = (data.get("domain") or "").lower().strip()
        company = (data.get("company") or "").lower().strip()

        skills = [normalize_skill(s) for s in skills]

        # -----------------------------
        # ML INPUT
        # -----------------------------
        text_input = " ".join(skills) + " " + user_domain

        if not text_input.strip():
            return jsonify({"error": "No input provided"}), 400

        vector = vectorizer.transform([text_input])

        probs = career_model.predict_proba(vector)[0]
        classes = career_model.classes_

        top_index = probs.argmax()
        ml_predicted_role = classes[top_index]

        # -----------------------------
        # DOMAIN PRIORITY
        # -----------------------------
        domain_key = get_domain_key(user_domain)

        if domain_key:
            predicted_role = domain_key.title()
            combined_skills = set(DOMAIN_SKILLS[domain_key])
        else:
            predicted_role = ml_predicted_role
            combined_skills = set(role_skills.get(predicted_role, []))

        # -----------------------------
        # SKILL MATCH SCORE
        # -----------------------------
        user_set = set(skills)
        matched_skills = 0
        for s in combined_skills:
            if any(s in us or us in s for us in user_set):
                matched_skills += 1

        total_skills = len(combined_skills)
        confidence = round((matched_skills / total_skills) * 100, 2) if total_skills > 0 else 0

        if confidence == 100:
            confidence = 95.66  # realism cap

        # -----------------------------
        # Missing Skills
        # -----------------------------
        missing_skills = [
            s for s in combined_skills
            if not any(s in us or us in s for us in user_set)
        ]

        is_ready = len(missing_skills) == 0

        # -----------------------------
        # COMPANY SUGGESTIONS
        # -----------------------------
        project_suggestions = []
        if company:
            if any(c in company for c in ["google","amazon","aws","alphabet"]):
                project_suggestions += [
                    "Build scalable system design project",
                    "Create ML-based real-world application"
                ]
            elif any(c in company for c in ["tcs","infosys","wipro","tata"]):
                project_suggestions += [
                    "Build CRUD enterprise application",
                    "Practice coding interview problems"
                ]

        # -----------------------------
        # LEARNING RESOURCES
        # -----------------------------
        LEARNING_RESOURCES = {
    # 🔹 Programming
    "python": "https://www.learnpython.org/",
    "java": "https://www.geeksforgeeks.org/java/",
    "c": "https://www.learn-c.org/",
    "cplusplus": "https://www.learncpp.com/",
    "csharp": "https://learn.microsoft.com/en-us/dotnet/csharp/",
    "javascript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "typescript": "https://www.typescriptlang.org/docs/",

    # 🔹 Web Dev
    "html": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "css": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "react": "https://react.dev/",
    "nodejs": "https://nodejs.org/en/docs",
    "express": "https://expressjs.com/",
    "nextjs": "https://nextjs.org/docs",

    # 🔹 Backend
    "django": "https://docs.djangoproject.com/en/stable/",
    "flask": "https://flask.palletsprojects.com/",
    "fastapi": "https://fastapi.tiangolo.com/",
    "spring boot": "https://spring.io/projects/spring-boot",

    # 🔹 Databases
    "sql": "https://www.w3schools.com/sql/",
    "mysql": "https://dev.mysql.com/doc/",
    "postgresql": "https://www.postgresql.org/docs/",
    "mongodb": "https://www.mongodb.com/docs/",
    "redis": "https://redis.io/docs/",
    "cassandra": "https://cassandra.apache.org/doc/latest/",

    # 🔹 Data Science
    "pandas": "https://pandas.pydata.org/docs/",
    "numpy": "https://numpy.org/learn/",
    "matplotlib": "https://matplotlib.org/stable/tutorials/index.html",
    "seaborn": "https://seaborn.pydata.org/tutorial.html",
    "plotly": "https://plotly.com/python/",
    "scikit-learn": "https://scikit-learn.org/stable/tutorial/index.html",
    "statistics": "https://www.khanacademy.org/math/statistics-probability",

    # 🔹 AI / ML
    "machine learning": "https://www.coursera.org/learn/machine-learning",
    "deep learning": "https://www.deeplearning.ai/",
    "tensorflow": "https://www.tensorflow.org/tutorials",
    "pytorch": "https://pytorch.org/tutorials/",
    "keras": "https://keras.io/guides/",
    "opencv": "https://docs.opencv.org/",
    "computer vision": "https://www.pyimagesearch.com/",
    "natural language processing": "https://huggingface.co/learn",
    "transformers": "https://huggingface.co/docs/transformers/index",
    "huggingface": "https://huggingface.co/learn",
    "nltk": "https://www.nltk.org/",
    "spacy": "https://spacy.io/usage",
    "llms": "https://platform.openai.com/docs",
    "generative ai": "https://www.deeplearning.ai/short-courses/",
    "diffusion models": "https://huggingface.co/learn/diffusion-course",

    # 🔹 Data Engineering
    "apache spark": "https://spark.apache.org/docs/latest/",
    "spark": "https://spark.apache.org/docs/latest/",
    "hadoop": "https://hadoop.apache.org/docs/",
    "etl pipelines": "https://airflow.apache.org/docs/",
    "airflow": "https://airflow.apache.org/docs/",
    "data lakes": "https://aws.amazon.com/data-lakes/",
    "data warehouses": "https://cloud.google.com/data-warehouse",

    # 🔹 DevOps / Cloud
    "aws": "https://docs.aws.amazon.com/",
    "azure": "https://learn.microsoft.com/en-us/azure/",
    "google cloud": "https://cloud.google.com/docs",
    "docker": "https://docs.docker.com/",
    "kubernetes": "https://kubernetes.io/docs/",
    "terraform": "https://developer.hashicorp.com/terraform/docs",
    "ansible": "https://docs.ansible.com/",
    "jenkins": "https://www.jenkins.io/doc/",
    "ci/cd": "https://www.redhat.com/en/topics/devops/what-is-ci-cd",

    # 🔹 Tools
    "git": "https://git-scm.com/doc",
    "github": "https://docs.github.com/",
    "gitlab": "https://docs.gitlab.com/",
    "bitbucket": "https://support.atlassian.com/bitbucket-cloud/",
    "jira": "https://www.atlassian.com/software/jira/guides",

    # 🔹 APIs
    "rest api": "https://restfulapi.net/",
    "graphql": "https://graphql.org/learn/",
    "postman": "https://learning.postman.com/",
    "swagger": "https://swagger.io/docs/",

    # 🔹 Mobile Dev
    "flutter": "https://docs.flutter.dev/",
    "react native": "https://reactnative.dev/docs/getting-started",
    "android": "https://developer.android.com/docs",
    "ios": "https://developer.apple.com/documentation",
    "kotlin": "https://kotlinlang.org/docs/home.html",
    "swift": "https://docs.swift.org/swift-book/",

    # 🔹 UI/UX
    "figma": "https://help.figma.com/",
    "adobe xd": "https://helpx.adobe.com/xd.html",
    "ui/ux": "https://www.interaction-design.org/",
    "prototyping": "https://www.interaction-design.org/literature/topics/prototyping",

    # 🔹 Cybersecurity
    "network security": "https://www.cisco.com/c/en/us/products/security/index.html",
    "ethical hacking": "https://www.eccouncil.org/",
    "penetration testing": "https://owasp.org/",
    "cryptography": "https://cryptobook.nakov.com/",
    "zero trust": "https://www.microsoft.com/en-us/security/business/zero-trust",

    # 🔹 Robotics / IoT
    "arduino": "https://docs.arduino.cc/",
    "raspberry pi": "https://www.raspberrypi.org/documentation/",
    "iot": "https://aws.amazon.com/iot/",
    "robotics": "https://www.ros.org/learn/",
    "ros": "https://docs.ros.org/",

    # 🔹 Business / Analytics
    "excel": "https://support.microsoft.com/excel",
    "power bi": "https://learn.microsoft.com/en-us/power-bi/",
    "tableau": "https://www.tableau.com/learn",
    "analytics": "https://www.google.com/analytics/learn/",
    "product analytics": "https://mixpanel.com/resources/",

    # 🔹 Soft Skills
    "communication": "https://www.coursera.org/learn/communication-skills",
    "leadership": "https://www.coursera.org/learn/leadership-skills",
    "project management": "https://www.coursera.org/professional-certificates/google-project-management",
    "agile": "https://www.scrum.org/resources/what-is-agile",
    "scrum": "https://www.scrum.org/resources/what-is-scrum",

}

        # -----------------------------
        # ROADMAP WITH LINKS
        # -----------------------------
        roadmap_with_links = []

        if is_ready:
            for item in ["Congratulations! You are job ready!", "Start applying for jobs", "Revise core concepts", "Practice mock interviews"]:
                roadmap_with_links.append({"skill": item, "url": None})
        else:
            for skill in missing_skills[:5]:
                link = LEARNING_RESOURCES.get(skill.lower(), "https://www.google.com/search?q=learn+" + skill.replace(" ", "+"))
                roadmap_with_links.append({"skill": skill, "url": link})

            for proj in project_suggestions:
                roadmap_with_links.append({"skill": proj, "url": "https://www.google.com/search?q=" + proj.replace(" ", "+")})

            for tip in ["Build real-world projects", "Create portfolio", "Prepare for interviews"]:
                roadmap_with_links.append({"skill": tip, "url": "https://www.google.com/search?q=" + tip.replace(" ", "+")})

        # -----------------------------
        return jsonify({
            "predicted_role": predicted_role,
            "confidence": confidence,
            "final_domain": user_domain,
            "missing_skills": missing_skills[:5],
            "is_ready": is_ready,
            "roadmap": roadmap_with_links[:6]
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -----------------------------
if __name__ == "__main__":
    app.run(debug=True, port=5000)