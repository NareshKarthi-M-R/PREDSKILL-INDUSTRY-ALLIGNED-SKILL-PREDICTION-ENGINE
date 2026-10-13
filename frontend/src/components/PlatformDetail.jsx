import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import AIAgent from "./AIAgent";
/* -----------------------------
   SOUND
----------------------------- */
const clickSound = new Audio(
  "https://www.fesliyanstudios.com/play-mp3/387"
);

/* -----------------------------
   COURSE LINKS
----------------------------- */
const platformLinks = {
  "python": {
    coursera: "https://www.coursera.org/learn/python",
    udemy: "https://www.udemy.com/course/complete-python-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
  },
  "java": {
    coursera: "https://www.coursera.org/learn/java-programming",
    udemy: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
    youtube: "https://www.youtube.com/watch?v=grEKMHGYyns",
  },
  "sql": {
    coursera: "https://www.coursera.org/learn/sql-for-data-science",
    udemy: "https://www.udemy.com/course/the-complete-sql-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
  },
  "c": {
    coursera: "https://www.coursera.org/learn/c-for-everyone",
    udemy: "https://www.udemy.com/course/c-programming-for-beginners-/",
    youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
  },
  "oops": {
    coursera: "https://www.coursera.org/learn/object-oriented-java",
    udemy: "https://www.udemy.com/course/the-complete-java-software-developer-masterclass/",
    youtube: "https://www.youtube.com/watch?v=m_MQYyJpIjg",
  },
  "javascript": {
    coursera: "https://www.coursera.org/learn/javascript-basics",
    udemy: "https://www.udemy.com/course/the-complete-javascript-course/",
    youtube: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
  },
  "typescript": {
    coursera: "https://www.coursera.org/learn/programming-with-javascript",
    udemy: "https://www.udemy.com/course/understanding-typescript/",
    youtube: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
  },
  "cplusplus": {
    coursera: "https://www.coursera.org/learn/c-plus-plus-a",
    udemy: "https://www.udemy.com/course/free-learn-c-tutorial-beginners/",
    youtube: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
  },
  "csharp": {
    coursera: "https://www.coursera.org/specializations/programming-unity-game-development",
    udemy: "https://www.udemy.com/course/csharp-tutorial-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
  },
  "html": {
    coursera: "https://www.coursera.org/learn/html",
    udemy: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
    youtube: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
  },
  "css": {
    coursera: "https://www.coursera.org/learn/introcss",
    udemy: "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
    youtube: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
  },
  "react": {
    coursera: "https://www.coursera.org/learn/front-end-react",
    udemy: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    youtube: "https://www.youtube.com/watch?v=bMknfKXIFA8",
  },
  "nodejs": {
    coursera: "https://www.coursera.org/learn/server-side-nodejs",
    udemy: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
    youtube: "https://www.youtube.com/watch?v=Oe421EPjeBE",
  },
  "django": {
    coursera: "https://www.coursera.org/projects/django-web-framework",
    udemy: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=F5mRW0jo-U4",
  },
  "flask": {
    coursera: "https://www.coursera.org/projects/flask-python",
    udemy: "https://www.udemy.com/course/rest-api-flask-and-python/",
    youtube: "https://www.youtube.com/watch?v=Z1RJmh_OqeA",
  },
  "spring boot": {
    coursera: "https://www.coursera.org/learn/spring-framework",
    udemy: "https://www.udemy.com/course/spring-hibernate-tutorial/",
    youtube: "https://www.youtube.com/watch?v=9SGDpanrc8U",
  },
  "fastapi": {
    coursera: "https://www.coursera.org/projects/fastapi-python",
    udemy: "https://www.udemy.com/course/fastapi-the-complete-course/",
    youtube: "https://www.youtube.com/watch?v=7t2alSnE2-I",
  },
  "express": {
    coursera: "https://www.coursera.org/learn/server-side-nodejs",
    udemy: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
    youtube: "https://www.youtube.com/watch?v=L72fhGm1tfE",
  },
  "aws": {
    coursera: "https://www.coursera.org/learn/aws-cloud-technical-essentials",
    udemy: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
    youtube: "https://www.youtube.com/watch?v=k1RI5locZE4",
  },
  "azure": {
    coursera: "https://www.coursera.org/learn/microsoft-azure-cloud-services",
    udemy: "https://www.udemy.com/course/70533-azure/",
    youtube: "https://www.youtube.com/watch?v=NKEFWyqJ5XA",
  },
  "google cloud": {
    coursera: "https://www.coursera.org/learn/gcp-fundamentals",
    udemy: "https://www.udemy.com/course/google-cloud-platform-gcp-fundamentals-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=IeMYQ-qJeK4",
  },
  "docker": {
    coursera: "https://www.coursera.org/learn/docker-kubernetes-openshift",
    udemy: "https://www.udemy.com/course/docker-mastery/",
    youtube: "https://www.youtube.com/watch?v=3c-iBn73dDE",
  },
  "kubernetes": {
    coursera: "https://www.coursera.org/learn/docker-kubernetes-openshift",
    udemy: "https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/",
    youtube: "https://www.youtube.com/watch?v=X48VuDVv0do",
  },
  "git": {
    coursera: "https://www.coursera.org/learn/version-control-with-git",
    udemy: "https://www.udemy.com/course/git-complete/",
    youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk",
  },
  "github": {
    coursera: "https://www.coursera.org/learn/introduction-git-github",
    udemy: "https://www.udemy.com/course/git-and-github-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk",
  },
  "gitlab": {
    coursera: "https://www.coursera.org/learn/version-control-with-git",
    udemy: "https://www.udemy.com/course/gitlab-ci-pipelines-ci-cd-and-devops-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=l5705U8s_nQ",
  },
  "bitbucket": {
    coursera: "https://www.coursera.org/learn/version-control-with-git",
    udemy: "https://www.udemy.com/course/git-complete/",
    youtube: "https://www.youtube.com/watch?v=oFYyTZwMyAg",
  },
  "jira": {
    coursera: "https://www.coursera.org/learn/agile-atlassian-jira",
    udemy: "https://www.udemy.com/course/the-complete-guide-to-jira-with-real-world-examples/",
    youtube: "https://www.youtube.com/watch?v=GWxMTvRGIpc",
  },
  "nextjs": {
    coursera: "https://www.coursera.org/learn/nextjs",
    udemy: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=mTz0GXj8NN0",
  },
  "tensorflow": {
    coursera: "https://www.coursera.org/learn/introduction-tensorflow",
    udemy: "https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/",
    youtube: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
  },
  "pytorch": {
    coursera: "https://www.coursera.org/learn/deep-neural-networks-with-pytorch",
    udemy: "https://www.udemy.com/course/pytorch-for-deep-learning-with-python-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=c36lUUr864M",
  },
  "keras": {
    coursera: "https://www.coursera.org/learn/introduction-tensorflow",
    udemy: "https://www.udemy.com/course/complete-tensorflow-2-and-keras-deep-learning-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=qFJeN9V1ZsI",
  },
  "onnx": {
    coursera: "https://www.coursera.org/learn/machine-learning-modeling-pipelines-in-production",
    udemy: "https://www.udemy.com/course/deep-learning-with-pytorch/",
    youtube: "https://www.youtube.com/watch?v=3-BVWZ6KXNQ",
  },
  "mlops": {
    coursera: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
    udemy: "https://www.udemy.com/course/mlops-course/",
    youtube: "https://www.youtube.com/watch?v=NgWujOrCZFo",
  },
  "scikit-learn": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=0B5eIE_1vpU",
  },
  "pandas": {
    coursera: "https://www.coursera.org/learn/python-data-analysis",
    udemy: "https://www.udemy.com/course/data-analysis-with-pandas/",
    youtube: "https://www.youtube.com/watch?v=vmEHCJofslg",
  },
  "numpy": {
    coursera: "https://www.coursera.org/learn/python-data-analysis",
    udemy: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
  },
  "matplotlib": {
    coursera: "https://www.coursera.org/learn/python-data-visualization",
    udemy: "https://www.udemy.com/course/matplotlib-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=3Xc3CA655Y4",
  },
  "seaborn": {
    coursera: "https://www.coursera.org/learn/python-data-visualization",
    udemy: "https://www.udemy.com/course/python-data-visualization/",
    youtube: "https://www.youtube.com/watch?v=6GUZXDef2U0",
  },
  "plotly": {
    coursera: "https://www.coursera.org/learn/python-data-visualization",
    udemy: "https://www.udemy.com/course/plotly-dash/",
    youtube: "https://www.youtube.com/watch?v=GGL6U0k8WYA",
  },
  "opencv": {
    coursera: "https://www.coursera.org/learn/computer-vision-basics",
    udemy: "https://www.udemy.com/course/master-computer-vision-with-opencv-in-python/",
    youtube: "https://www.youtube.com/watch?v=oXlwWbU8l2o",
  },
  "transformers": {
    coursera: "https://www.coursera.org/learn/attention-models-in-nlp",
    udemy: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/",
    youtube: "https://www.youtube.com/watch?v=4Bdc55j80l8",
  },
  "huggingface": {
    coursera: "https://www.coursera.org/learn/attention-models-in-nlp",
    udemy: "https://www.udemy.com/course/nlp-with-transformers/",
    youtube: "https://www.youtube.com/watch?v=QEaBAZQCtwE",
  },
  "llms": {
    coursera: "https://www.coursera.org/learn/generative-ai-with-llms",
    udemy: "https://www.udemy.com/course/large-language-models/",
    youtube: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
  },
  "generative ai": {
    coursera: "https://www.coursera.org/learn/generative-ai-with-llms",
    udemy: "https://www.udemy.com/course/generative-ai-the-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=mEsleV16qdo",
  },
  "feature engineering": {
    coursera: "https://www.coursera.org/learn/feature-engineering",
    udemy: "https://www.udemy.com/course/feature-engineering-for-machine-learning/",
    youtube: "https://www.youtube.com/watch?v=6WDFfaYtN6s",
  },
  "data visualization": {
    coursera: "https://www.coursera.org/learn/python-data-visualization",
    udemy: "https://www.udemy.com/course/data-visualization-with-python/",
    youtube: "https://www.youtube.com/watch?v=a9UrKTVEeZA",
  },
  "statistics": {
    coursera: "https://www.coursera.org/learn/stanford-statistics",
    udemy: "https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/",
    youtube: "https://www.youtube.com/watch?v=xxpc-HPKN28",
  },
  "data wrangling": {
    coursera: "https://www.coursera.org/learn/data-analysis-with-python",
    udemy: "https://www.udemy.com/course/data-analysis-with-pandas/",
    youtube: "https://www.youtube.com/watch?v=bDhvCp3_lYw",
  },
  "big data": {
    coursera: "https://www.coursera.org/specializations/big-data",
    udemy: "https://www.udemy.com/course/the-ultimate-hands-on-hadoop/",
    youtube: "https://www.youtube.com/watch?v=zez2Tv-bcXY",
  },
  "spark": {
    coursera: "https://www.coursera.org/learn/big-data-essentials",
    udemy: "https://www.udemy.com/course/apache-spark-with-scala/",
    youtube: "https://www.youtube.com/watch?v=F8pyaR4uQ2g",
  },
  "hadoop": {
    coursera: "https://www.coursera.org/specializations/big-data",
    udemy: "https://www.udemy.com/course/the-ultimate-hands-on-hadoop/",
    youtube: "https://www.youtube.com/watch?v=1vbXmCrkT3Y",
  },
  "ros": {
    coursera: "https://www.coursera.org/learn/modernrobotics",
    udemy: "https://www.udemy.com/course/ros-essentials/",
    youtube: "https://www.youtube.com/watch?v=wfDJAYTMTdk",
  },
  "robot operating systems": {
    coursera: "https://www.coursera.org/learn/modernrobotics",
    udemy: "https://www.udemy.com/course/ros-essentials/",
    youtube: "https://www.youtube.com/watch?v=wfDJAYTMTdk",
  },
  "sensors": {
    coursera: "https://www.coursera.org/learn/iot-wireless",
    udemy: "https://www.udemy.com/course/arduino-sbs-17gs/",
    youtube: "https://www.youtube.com/watch?v=CqrQmQqpHXc",
  },
  "actuators": {
    coursera: "https://www.coursera.org/learn/modernrobotics",
    udemy: "https://www.udemy.com/course/arduino-sbs-17gs/",
    youtube: "https://www.youtube.com/watch?v=J-8Y8KR1kks",
  },
  "path planning": {
    coursera: "https://www.coursera.org/learn/modernrobotics",
    udemy: "https://www.udemy.com/course/ros-navigation-in-5-days/",
    youtube: "https://www.youtube.com/watch?v=ZMilen4f_xc",
  },
  "robot kinematics": {
    coursera: "https://www.coursera.org/learn/modernrobotics",
    udemy: "https://www.udemy.com/course/ros-essentials/",
    youtube: "https://www.youtube.com/watch?v=IL6MCnFbBaA",
  },
  "simulation": {
    coursera: "https://www.coursera.org/learn/modernrobotics",
    udemy: "https://www.udemy.com/course/ros-essentials/",
    youtube: "https://www.youtube.com/watch?v=9U6GDonGFHw",
  },
  "gazebo": {
    coursera: "https://www.coursera.org/learn/modernrobotics",
    udemy: "https://www.udemy.com/course/ros-navigation-in-5-days/",
    youtube: "https://www.youtube.com/watch?v=9tDDPtkhbcI",
  },
  "cnn": {
    coursera: "https://www.coursera.org/learn/convolutional-neural-networks",
    udemy: "https://www.udemy.com/course/deep-learning-convolutional-neural-networks-theano-tensorflow/",
    youtube: "https://www.youtube.com/watch?v=ArPaAX_PhIs",
  },
  "rnn": {
    coursera: "https://www.coursera.org/learn/nlp-sequence-models",
    udemy: "https://www.udemy.com/course/deep-learning-recurrent-neural-networks-in-python/",
    youtube: "https://www.youtube.com/watch?v=LHXXI4-IEns",
  },
  "gan": {
    coursera: "https://www.coursera.org/specializations/generative-adversarial-networks-gans",
    udemy: "https://www.udemy.com/course/generative-adversarial-networks/",
    youtube: "https://www.youtube.com/watch?v=TpMIssRdhco",
  },
  "autoencoders": {
    coursera: "https://www.coursera.org/learn/deep-neural-network",
    udemy: "https://www.udemy.com/course/deep-learning-with-pytorch/",
    youtube: "https://www.youtube.com/watch?v=3jmcHZq3A5s",
  },
  "nltk": {
    coursera: "https://www.coursera.org/learn/python-text-mining",
    udemy: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/",
    youtube: "https://www.youtube.com/watch?v=X2vAabgKiuM",
  },
  "spacy": {
    coursera: "https://www.coursera.org/learn/python-text-mining",
    udemy: "https://www.udemy.com/course/natural-language-processing-with-spacy/",
    youtube: "https://www.youtube.com/watch?v=dIUTsFT2MeQ",
  },
  "text preprocessing": {
    coursera: "https://www.coursera.org/learn/python-text-mining",
    udemy: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/",
    youtube: "https://www.youtube.com/watch?v=8vvUlR8ABYY",
  },
  "sentiment analysis": {
    coursera: "https://www.coursera.org/learn/natural-language-processing-tensorflow",
    udemy: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/",
    youtube: "https://www.youtube.com/watch?v=ujId4ipkBio",
  },
  "chatbots": {
    coursera: "https://www.coursera.org/learn/building-ai-powered-chatbots",
    udemy: "https://www.udemy.com/course/chatbot/",
    youtube: "https://www.youtube.com/watch?v=1lwddP0KUEg",
  },
  "seq2seq": {
    coursera: "https://www.coursera.org/learn/nlp-sequence-models",
    udemy: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/",
    youtube: "https://www.youtube.com/watch?v=1vbXmCrkT3Y",
  },
  "language modeling": {
    coursera: "https://www.coursera.org/learn/language-model",
    udemy: "https://www.udemy.com/course/nlp-with-transformers/",
    youtube: "https://www.youtube.com/watch?v=kCc8FmEb1nY",
  },
  "yolo": {
    coursera: "https://www.coursera.org/learn/convolutional-neural-networks",
    udemy: "https://www.udemy.com/course/master-computer-vision-with-opencv-in-python/",
    youtube: "https://www.youtube.com/watch?v=MPU2HistivI",
  },
  "mask r-cnn": {
    coursera: "https://www.coursera.org/learn/convolutional-neural-networks",
    udemy: "https://www.udemy.com/course/computer-vision-with-deep-learning/",
    youtube: "https://www.youtube.com/watch?v=4tkgOzQ9yyo",
  },
  "image segmentation": {
    coursera: "https://www.coursera.org/learn/convolutional-neural-networks",
    udemy: "https://www.udemy.com/course/master-computer-vision-with-opencv-in-python/",
    youtube: "https://www.youtube.com/watch?v=0VD49W3pqrk",
  },
  "object detection": {
    coursera: "https://www.coursera.org/learn/convolutional-neural-networks",
    udemy: "https://www.udemy.com/course/computer-vision-with-deep-learning/",
    youtube: "https://www.youtube.com/watch?v=yqkISICHH-U",
  },
  "arduino": {
    coursera: "https://www.coursera.org/learn/arduino-platform",
    udemy: "https://www.udemy.com/course/arduino-sbs-17gs/",
    youtube: "https://www.youtube.com/watch?v=nL34zDTPkcs",
  },
  "raspberry pi": {
    coursera: "https://www.coursera.org/learn/iot-wireless",
    udemy: "https://www.udemy.com/course/raspberry-pi-masterclass/",
    youtube: "https://www.youtube.com/watch?v=aI3p7mzgMBg",
  },
  "mqtt": {
    coursera: "https://www.coursera.org/learn/iot-wireless",
    udemy: "https://www.udemy.com/course/mqtt-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=EIxdz-2rhLs",
  },
  "sensor networks": {
    coursera: "https://www.coursera.org/learn/iot-wireless",
    udemy: "https://www.udemy.com/course/iot-internet-of-things/",
    youtube: "https://www.youtube.com/watch?v=h0gWfVCSGQQ",
  },
  "edge computing": {
    coursera: "https://www.coursera.org/learn/iot-wireless",
    udemy: "https://www.udemy.com/course/edge-computing/",
    youtube: "https://www.youtube.com/watch?v=cEOUeItHDdo",
  },
  "cloud ai services": {
    coursera: "https://www.coursera.org/learn/aws-cloud-technical-essentials",
    udemy: "https://www.udemy.com/course/aws-machine-learning/",
    youtube: "https://www.youtube.com/watch?v=3QiCPL6WoMc",
  },
  "qiskit": {
    coursera: "https://www.coursera.org/learn/quantum-computing-algorithms",
    udemy: "https://www.udemy.com/course/qiskit-quantum-computing/",
    youtube: "https://www.youtube.com/watch?v=ltQ9-MNeHrA",
  },
  "quantum algorithms": {
    coursera: "https://www.coursera.org/learn/quantum-computing-algorithms",
    udemy: "https://www.udemy.com/course/qiskit-quantum-computing/",
    youtube: "https://www.youtube.com/watch?v=tsbCSkvHhMo",
  },
  "quantum simulation": {
    coursera: "https://www.coursera.org/learn/quantum-computing-algorithms",
    udemy: "https://www.udemy.com/course/qiskit-quantum-computing/",
    youtube: "https://www.youtube.com/watch?v=F_Riqjdh2oM",
  },
  "quantum gates": {
    coursera: "https://www.coursera.org/learn/quantum-computing-algorithms",
    udemy: "https://www.udemy.com/course/qiskit-quantum-computing/",
    youtube: "https://www.youtube.com/watch?v=F_Riqjdh2oM",
  },
  "entanglement": {
    coursera: "https://www.coursera.org/learn/quantum-mechanics-q-systems",
    udemy: "https://www.udemy.com/course/qiskit-quantum-computing/",
    youtube: "https://www.youtube.com/watch?v=jHyW2E3BNrg",
  },
  "q-learning": {
    coursera: "https://www.coursera.org/learn/practical-rl",
    udemy: "https://www.udemy.com/course/artificial-intelligence-reinforcement-learning-in-python/",
    youtube: "https://www.youtube.com/watch?v=nyjbcRQ-uQ8",
  },
  "policy gradient": {
    coursera: "https://www.coursera.org/learn/practical-rl",
    udemy: "https://www.udemy.com/course/artificial-intelligence-reinforcement-learning-in-python/",
    youtube: "https://www.youtube.com/watch?v=KHZVXao4qXs",
  },
  "gym": {
    coursera: "https://www.coursera.org/learn/practical-rl",
    udemy: "https://www.udemy.com/course/artificial-intelligence-reinforcement-learning-in-python/",
    youtube: "https://www.youtube.com/watch?v=Mut_u40Sqz4",
  },
  "diffusion models": {
    coursera: "https://www.coursera.org/learn/generative-ai-with-llms",
    udemy: "https://www.udemy.com/course/stable-diffusion/",
    youtube: "https://www.youtube.com/watch?v=1CIpzeNxIhU",
  },
  "vae": {
    coursera: "https://www.coursera.org/learn/deep-neural-network",
    udemy: "https://www.udemy.com/course/generative-adversarial-networks/",
    youtube: "https://www.youtube.com/watch?v=fcvYpzHmhvA",
  },
  "openai": {
    coursera: "https://www.coursera.org/learn/generative-ai-with-llms",
    udemy: "https://www.udemy.com/course/openai-api-chatgpt/",
    youtube: "https://www.youtube.com/watch?v=pGOyw_M1mNE",
  },
  "unity": {
    coursera: "https://www.coursera.org/learn/game-design-and-development",
    udemy: "https://www.udemy.com/course/unitycourse/",
    youtube: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
  },
  "unreal engine": {
    coursera: "https://www.coursera.org/learn/game-design-and-development",
    udemy: "https://www.udemy.com/course/unrealcourse/",
    youtube: "https://www.youtube.com/watch?v=k-zMkzmduqI",
  },
  "vr": {
    coursera: "https://www.coursera.org/learn/interaction-design-ar-vr",
    udemy: "https://www.udemy.com/course/vr-development/",
    youtube: "https://www.youtube.com/watch?v=gAme9chyfJ4",
  },
  "ar": {
    coursera: "https://www.coursera.org/learn/interaction-design-ar-vr",
    udemy: "https://www.udemy.com/course/arkit-complete/",
    youtube: "https://www.youtube.com/watch?v=pN5QFxg9cE0",
  },
  "3d modeling": {
    coursera: "https://www.coursera.org/learn/3d-modeling",
    udemy: "https://www.udemy.com/course/blendertutorial/",
    youtube: "https://www.youtube.com/watch?v=nIoXOplUvAw",
  },
  "motion capture": {
    coursera: "https://www.coursera.org/learn/3d-modeling",
    udemy: "https://www.udemy.com/course/motion-capture-in-blender/",
    youtube: "https://www.youtube.com/watch?v=6CmVD5i-gaA",
  },
  "shader programming": {
    coursera: "https://www.coursera.org/learn/game-design-and-development",
    udemy: "https://www.udemy.com/course/unity-shaders/",
    youtube: "https://www.youtube.com/watch?v=T-HXmQAMhG0",
  },
  "flutter": {
    coursera: "https://www.coursera.org/learn/flutter-development",
    udemy: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/",
    youtube: "https://www.youtube.com/watch?v=VPvVD8t02U8",
  },
  "react native": {
    coursera: "https://www.coursera.org/learn/react-native-course",
    udemy: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/",
    youtube: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
  },
  "android": {
    coursera: "https://www.coursera.org/learn/android-development",
    udemy: "https://www.udemy.com/course/the-complete-android-n-developer-course/",
    youtube: "https://www.youtube.com/watch?v=fis26HvvDII",
  },
  "ios": {
    coursera: "https://www.coursera.org/learn/swift-programming",
    udemy: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
  },
  "kotlin": {
    coursera: "https://www.coursera.org/learn/kotlin-for-java-developers",
    udemy: "https://www.udemy.com/course/the-complete-kotlin-developer-course/",
    youtube: "https://www.youtube.com/watch?v=F9UC9DY-vIU",
  },
  "swift": {
    coursera: "https://www.coursera.org/learn/swift-programming",
    udemy: "https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/",
    youtube: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
  },
  "firebase": {
    coursera: "https://www.coursera.org/learn/firebase",
    udemy: "https://www.udemy.com/course/firebase-course/",
    youtube: "https://www.youtube.com/watch?v=9kRgVxULbag",
  },
  "ui/ux": {
    coursera: "https://www.coursera.org/professional-certificates/google-ux-design",
    udemy: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/",
    youtube: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
  },
  "mobile testing": {
    coursera: "https://www.coursera.org/learn/software-testing",
    udemy: "https://www.udemy.com/course/mobile-testing/",
    youtube: "https://www.youtube.com/watch?v=d9GrysWH1Lc",
  },
  "ci/cd": {
    coursera: "https://www.coursera.org/learn/devops-culture-and-mindset",
    udemy: "https://www.udemy.com/course/ci-cd-pipelines/",
    youtube: "https://www.youtube.com/watch?v=R8_veQiYBjI",
  },
  "jenkins": {
    coursera: "https://www.coursera.org/learn/devops-culture-and-mindset",
    udemy: "https://www.udemy.com/course/jenkins-from-zero-to-hero/",
    youtube: "https://www.youtube.com/watch?v=FX322RVNGj4",
  },
  "terraform": {
    coursera: "https://www.coursera.org/learn/deploying-infrastructure-as-code",
    udemy: "https://www.udemy.com/course/terraform-beginner-to-advanced/",
    youtube: "https://www.youtube.com/watch?v=l5k1ai_GBDE",
  },
  "ansible": {
    coursera: "https://www.coursera.org/learn/devops-culture-and-mindset",
    udemy: "https://www.udemy.com/course/ansible-for-the-absolute-beginner/",
    youtube: "https://www.youtube.com/watch?v=1id6ERvfozo",
  },
  "gcp": {
    coursera: "https://www.coursera.org/learn/gcp-fundamentals",
    udemy: "https://www.udemy.com/course/google-cloud-platform-gcp-fundamentals-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=IeMYQ-qJeK4",
  },
  "monitoring": {
    coursera: "https://www.coursera.org/learn/cloud-computing",
    udemy: "https://www.udemy.com/course/prometheus-and-grafana-the-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=h4Sl21AKiDg",
  },
  "prometheus": {
    coursera: "https://www.coursera.org/learn/cloud-computing",
    udemy: "https://www.udemy.com/course/prometheus-and-grafana-the-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=h4Sl21AKiDg",
  },
  "grafana": {
    coursera: "https://www.coursera.org/learn/cloud-computing",
    udemy: "https://www.udemy.com/course/prometheus-and-grafana-the-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=lILY8eSspEo",
  },
  "sre": {
    coursera: "https://www.coursera.org/learn/site-reliability-engineering-slos",
    udemy: "https://www.udemy.com/course/site-reliability-engineering/",
    youtube: "https://www.youtube.com/watch?v=uTEL8Ff1Zvk",
  },
  "cloud computing": {
    coursera: "https://www.coursera.org/learn/cloud-computing",
    udemy: "https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=M988_fsOSWo",
  },
  "serverless": {
    coursera: "https://www.coursera.org/learn/serverless-architecture",
    udemy: "https://www.udemy.com/course/serverless-framework/",
    youtube: "https://www.youtube.com/watch?v=97q30JjEq9Y",
  },
  "containers": {
    coursera: "https://www.coursera.org/learn/docker-kubernetes-openshift",
    udemy: "https://www.udemy.com/course/docker-mastery/",
    youtube: "https://www.youtube.com/watch?v=3c-iBn73dDE",
  },
  "cloud security": {
    coursera: "https://www.coursera.org/learn/cloud-security-basics",
    udemy: "https://www.udemy.com/course/cloud-security/",
    youtube: "https://www.youtube.com/watch?v=2bCKMav0O6A",
  },
  "infrastructure as code": {
    coursera: "https://www.coursera.org/learn/deploying-infrastructure-as-code",
    udemy: "https://www.udemy.com/course/terraform-beginner-to-advanced/",
    youtube: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
  },
  "finops": {
    coursera: "https://www.coursera.org/learn/cloud-computing",
    udemy: "https://www.udemy.com/course/finops-cloud-financial-management/",
    youtube: "https://www.youtube.com/watch?v=VDrcgEne6lU",
  },
  "network security": {
    coursera: "https://www.coursera.org/learn/network-security",
    udemy: "https://www.udemy.com/course/the-complete-network-security-course/",
    youtube: "https://www.youtube.com/watch?v=QiX3BxkAVXg",
  },
  "penetration testing": {
    coursera: "https://www.coursera.org/learn/cybersecurity-in-the-cloud-specialization",
    udemy: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/",
    youtube: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
  },
  "ethical hacking": {
    coursera: "https://www.coursera.org/learn/ibm-cyber-security-analyst",
    udemy: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/",
    youtube: "https://www.youtube.com/watch?v=WnN6dbos5u8",
  },
  "siem": {
    coursera: "https://www.coursera.org/learn/ibm-cyber-security-analyst",
    udemy: "https://www.udemy.com/course/siem-with-elastic-stack/",
    youtube: "https://www.youtube.com/watch?v=dBcy9cFGO-k",
  },
  "threat intelligence": {
    coursera: "https://www.coursera.org/learn/ibm-cyber-security-analyst",
    udemy: "https://www.udemy.com/course/complete-cyber-security-course/",
    youtube: "https://www.youtube.com/watch?v=lp1smFsqypo",
  },
  "zero trust": {
    coursera: "https://www.coursera.org/learn/ibm-cyber-security-analyst",
    udemy: "https://www.udemy.com/course/zero-trust-security/",
    youtube: "https://www.youtube.com/watch?v=FCX0bqHMBpg",
  },
  "application security": {
    coursera: "https://www.coursera.org/learn/software-security",
    udemy: "https://www.udemy.com/course/application-security-the-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=WlmKwIe9z1Q",
  },
  "cryptography": {
    coursera: "https://www.coursera.org/learn/crypto",
    udemy: "https://www.udemy.com/course/cryptography/",
    youtube: "https://www.youtube.com/watch?v=AQDCe585Lnc",
  },
  "incident response": {
    coursera: "https://www.coursera.org/learn/ibm-cyber-security-analyst",
    udemy: "https://www.udemy.com/course/incident-response-lifecycle/",
    youtube: "https://www.youtube.com/watch?v=Xl8OhIRhizI",
  },
  "seo": {
    coursera: "https://www.coursera.org/learn/seo-fundamentals",
    udemy: "https://www.udemy.com/course/seo-2021-complete-seo-training-traffic-with-windows-seo-tools/",
    youtube: "https://www.youtube.com/watch?v=4FEpRIsntg4",
  },
  "sem": {
    coursera: "https://www.coursera.org/learn/search-engine-marketing",
    udemy: "https://www.udemy.com/course/google-ads-masterclass/",
    youtube: "https://www.youtube.com/watch?v=nnF4Y17nYHE",
  },
  "google analytics": {
    coursera: "https://www.coursera.org/learn/google-data-analytics",
    udemy: "https://www.udemy.com/course/google-analytics-course/",
    youtube: "https://www.youtube.com/watch?v=WlmKwIe9z1Q",
  },
  "social media marketing": {
    coursera: "https://www.coursera.org/learn/social-media-marketing",
    udemy: "https://www.udemy.com/course/social-media-marketing-agency/",
    youtube: "https://www.youtube.com/watch?v=cXmJZ78Bk50",
  },
  "email marketing": {
    coursera: "https://www.coursera.org/learn/email-marketing",
    udemy: "https://www.udemy.com/course/email-marketing-subject-line-and-call-to-action/",
    youtube: "https://www.youtube.com/watch?v=cqRxm6anC4M",
  },
  "content marketing": {
    coursera: "https://www.coursera.org/learn/content-marketing",
    udemy: "https://www.udemy.com/course/content-marketing-strategy-and-techniques/",
    youtube: "https://www.youtube.com/watch?v=4-R8vUSMI_E",
  },
  "ad campaigns": {
    coursera: "https://www.coursera.org/learn/search-engine-marketing",
    udemy: "https://www.udemy.com/course/google-ads-masterclass/",
    youtube: "https://www.youtube.com/watch?v=MzD9jVTOCRo",
  },
  "conversion rate optimization": {
    coursera: "https://www.coursera.org/learn/digital-marketing",
    udemy: "https://www.udemy.com/course/conversion-rate-optimization-cro/",
    youtube: "https://www.youtube.com/watch?v=lMpJVBBmhxo",
  },
  "payments": {
    coursera: "https://www.coursera.org/learn/fintech",
    udemy: "https://www.udemy.com/course/stripe-masterclass/",
    youtube: "https://www.youtube.com/watch?v=1r-F3FIONl8",
  },
  "risk analysis": {
    coursera: "https://www.coursera.org/learn/finance-risk-management",
    udemy: "https://www.udemy.com/course/risk-management/",
    youtube: "https://www.youtube.com/watch?v=RNKvBgPqBhQ",
  },
  "financial modeling": {
    coursera: "https://www.coursera.org/learn/financial-valuation",
    udemy: "https://www.udemy.com/course/complete-investment-banking-course-2019/",
    youtube: "https://www.youtube.com/watch?v=HkNZaAMi11s",
  },
  "regtech": {
    coursera: "https://www.coursera.org/learn/fintech",
    udemy: "https://www.udemy.com/course/fintech-regulatory-technology/",
    youtube: "https://www.youtube.com/watch?v=m7MxkMZ47Is",
  },
  "fraud detection": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/fraud-detection-with-machine-learning/",
    youtube: "https://www.youtube.com/watch?v=pKXiIjsKXkg",
  },
  "edtech tools": {
    coursera: "https://www.coursera.org/learn/edtech",
    udemy: "https://www.udemy.com/course/teaching-online/",
    youtube: "https://www.youtube.com/watch?v=9d0xEZZDVvE",
  },
  "gamification": {
    coursera: "https://www.coursera.org/learn/gamification",
    udemy: "https://www.udemy.com/course/gamification-design-practitioner/",
    youtube: "https://www.youtube.com/watch?v=0xzpEQBimKk",
  },
  "adaptive learning": {
    coursera: "https://www.coursera.org/learn/learning-how-to-learn",
    udemy: "https://www.udemy.com/course/instructional-design-course/",
    youtube: "https://www.youtube.com/watch?v=IlU-zDU6aQ0",
  },
  "ehr systems": {
    coursera: "https://www.coursera.org/learn/health-informatics",
    udemy: "https://www.udemy.com/course/health-informatics/",
    youtube: "https://www.youtube.com/watch?v=PJpVREAEhLs",
  },
  "bioinformatics": {
    coursera: "https://www.coursera.org/specializations/bioinformatics",
    udemy: "https://www.udemy.com/course/bioinformatics-python/",
    youtube: "https://www.youtube.com/watch?v=FGdBra41-i4",
  },
  "genomics": {
    coursera: "https://www.coursera.org/learn/genomic-data-science",
    udemy: "https://www.udemy.com/course/bioinformatics-python/",
    youtube: "https://www.youtube.com/watch?v=Rs4w3hMEPgQ",
  },
  "predictive modeling": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/machinelearning/",
    youtube: "https://www.youtube.com/watch?v=7eh4d6sabA0",
  },
  "roadmapping": {
    coursera: "https://www.coursera.org/learn/product-management",
    udemy: "https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/",
    youtube: "https://www.youtube.com/watch?v=Tq9cW3pLMR8",
  },
  "product analytics": {
    coursera: "https://www.coursera.org/learn/product-analytics",
    udemy: "https://www.udemy.com/course/product-analytics/",
    youtube: "https://www.youtube.com/watch?v=UiI4pXPYXzM",
  },
  "stakeholder management": {
    coursera: "https://www.coursera.org/learn/stakeholder-management",
    udemy: "https://www.udemy.com/course/project-management-professional-pmp/",
    youtube: "https://www.youtube.com/watch?v=pJ2MmRKQ4qU",
  },
  "user research": {
    coursera: "https://www.coursera.org/learn/ux-research",
    udemy: "https://www.udemy.com/course/user-experience-design-fundamentals/",
    youtube: "https://www.youtube.com/watch?v=Ovj4hFxko7c",
  },
  "market analysis": {
    coursera: "https://www.coursera.org/learn/marketing-analytics",
    udemy: "https://www.udemy.com/course/market-analysis/",
    youtube: "https://www.youtube.com/watch?v=CXbUEsRE4b8",
  },
  "figma": {
    coursera: "https://www.coursera.org/learn/ui-design-figma",
    udemy: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/",
    youtube: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
  },
  "adobe xd": {
    coursera: "https://www.coursera.org/learn/ui-design",
    udemy: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/",
    youtube: "https://www.youtube.com/watch?v=68w2VwalD5w",
  },
  "sketch": {
    coursera: "https://www.coursera.org/learn/ui-design",
    udemy: "https://www.udemy.com/course/sketch-design/",
    youtube: "https://www.youtube.com/watch?v=crrSm6i-4A8",
  },
  "prototyping": {
    coursera: "https://www.coursera.org/learn/prototyping-design",
    udemy: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/",
    youtube: "https://www.youtube.com/watch?v=A2MJd7a3SIE",
  },
  "usability testing": {
    coursera: "https://www.coursera.org/learn/ux-research",
    udemy: "https://www.udemy.com/course/usability-testing/",
    youtube: "https://www.youtube.com/watch?v=0YL0xoSmyZI",
  },
  "interaction design": {
    coursera: "https://www.coursera.org/specializations/interaction-design",
    udemy: "https://www.udemy.com/course/interaction-design/",
    youtube: "https://www.youtube.com/watch?v=a-8EqQGmLJc",
  },
  "design systems": {
    coursera: "https://www.coursera.org/learn/ui-design-figma",
    udemy: "https://www.udemy.com/course/design-systems-with-figma/",
    youtube: "https://www.youtube.com/watch?v=EK-pHkc5EL4",
  },
  "airflow": {
    coursera: "https://www.coursera.org/learn/data-pipelines-airflow",
    udemy: "https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow/",
    youtube: "https://www.youtube.com/watch?v=AHMm1wfGuHE",
  },
  "etl pipelines": {
    coursera: "https://www.coursera.org/learn/data-pipelines-airflow",
    udemy: "https://www.udemy.com/course/data-engineering-using-databricks/",
    youtube: "https://www.youtube.com/watch?v=uy99pZnVj5s",
  },
  "data lakes": {
    coursera: "https://www.coursera.org/specializations/big-data",
    udemy: "https://www.udemy.com/course/aws-data-lake/",
    youtube: "https://www.youtube.com/watch?v=Rqu-bQlh5Z4",
  },
  "data warehouses": {
    coursera: "https://www.coursera.org/learn/data-warehousing",
    udemy: "https://www.udemy.com/course/data-warehouse-the-ultimate-guide/",
    youtube: "https://www.youtube.com/watch?v=AHR_7jFCMeY",
  },
  "dbt": {
    coursera: "https://www.coursera.org/learn/data-pipelines-airflow",
    udemy: "https://www.udemy.com/course/complete-dbt-data-build-tool-bootcamp-zero-to-hero-learn-dbt/",
    youtube: "https://www.youtube.com/watch?v=toSAAgLUHuk",
  },
  "power bi": {
    coursera: "https://www.coursera.org/learn/data-analysis-visualization-foundations",
    udemy: "https://www.udemy.com/course/microsoft-power-bi-up-running-with-power-bi-desktop/",
    youtube: "https://www.youtube.com/watch?v=TmhQCQr_BIY",
  },
  "tableau": {
    coursera: "https://www.coursera.org/learn/analytics-tableau",
    udemy: "https://www.udemy.com/course/tableau10/",
    youtube: "https://www.youtube.com/watch?v=TPMlZxRRaBQ",
  },
  "qlik": {
    coursera: "https://www.coursera.org/learn/data-analysis-visualization-foundations",
    udemy: "https://www.udemy.com/course/qlikview-training/",
    youtube: "https://www.youtube.com/watch?v=ux3hFDXKnqU",
  },
  "dashboards": {
    coursera: "https://www.coursera.org/learn/data-analysis-visualization-foundations",
    udemy: "https://www.udemy.com/course/microsoft-power-bi-up-running-with-power-bi-desktop/",
    youtube: "https://www.youtube.com/watch?v=ykvAWKML9Gk",
  },
  "analytics": {
    coursera: "https://www.coursera.org/professional-certificates/google-data-analytics",
    udemy: "https://www.udemy.com/course/data-analyst-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=ua-CiDNNj30",
  },
  "excel": {
    coursera: "https://www.coursera.org/learn/excel-basics-data-analysis",
    udemy: "https://www.udemy.com/course/microsoft-excel-2013-from-beginner-to-advanced-and-beyond/",
    youtube: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
  },
  "feature stores": {
    coursera: "https://www.coursera.org/learn/machine-learning-modeling-pipelines-in-production",
    udemy: "https://www.udemy.com/course/mlops-course/",
    youtube: "https://www.youtube.com/watch?v=pVRczgnzAcw",
  },
  "faiss": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/vector-databases-with-pinecone/",
    youtube: "https://www.youtube.com/watch?v=sKyvsdEv6rk",
  },
  "elasticsearch": {
    coursera: "https://www.coursera.org/learn/elastic-cloud-infrastructure",
    udemy: "https://www.udemy.com/course/elasticsearch-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=C3tlMqaNSaI",
  },
  "opensearch": {
    coursera: "https://www.coursera.org/learn/elastic-cloud-infrastructure",
    udemy: "https://www.udemy.com/course/elasticsearch-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=4VBfq_v5qGo",
  },
  "vector databases": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/vector-databases-with-pinecone/",
    youtube: "https://www.youtube.com/watch?v=dN0lsF2cvm4",
  },
  "decision modeling": {
    coursera: "https://www.coursera.org/learn/operations-research",
    udemy: "https://www.udemy.com/course/business-analysis-ba/",
    youtube: "https://www.youtube.com/watch?v=sI6Rn9C3Hk4",
  },
  "optimization": {
    coursera: "https://www.coursera.org/learn/discrete-optimization",
    udemy: "https://www.udemy.com/course/operations-research/",
    youtube: "https://www.youtube.com/watch?v=7naiuE9HFmA",
  },
  "fusion 360": {
    coursera: "https://www.coursera.org/learn/3d-modeling",
    udemy: "https://www.udemy.com/course/fusion-360-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=A5bc9c3S12g",
  },
  "autodesk generative design": {
    coursera: "https://www.coursera.org/learn/3d-modeling",
    udemy: "https://www.udemy.com/course/autodesk-generative-design/",
    youtube: "https://www.youtube.com/watch?v=yVFJJvUqKMs",
  },
  "deepfake": {
    coursera: "https://www.coursera.org/learn/generative-ai-with-llms",
    udemy: "https://www.udemy.com/course/deepfakes-and-ai-generated-media/",
    youtube: "https://www.youtube.com/watch?v=cQ54GDm1eL0",
  },
  "magenta": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/ai-music-generation/",
    youtube: "https://www.youtube.com/watch?v=Nks7JGdNj2I",
  },
  "stable diffusion": {
    coursera: "https://www.coursera.org/learn/generative-ai-with-llms",
    udemy: "https://www.udemy.com/course/stable-diffusion/",
    youtube: "https://www.youtube.com/watch?v=1CIpzeNxIhU",
  },
  "dalle": {
    coursera: "https://www.coursera.org/learn/generative-ai-with-llms",
    udemy: "https://www.udemy.com/course/openai-api-chatgpt/",
    youtube: "https://www.youtube.com/watch?v=yCBEumeXY4A",
  },
  "three.js": {
    coursera: "https://www.coursera.org/learn/webgl-threejs",
    udemy: "https://www.udemy.com/course/threejs-using-react-and-react-three-fiber/",
    youtube: "https://www.youtube.com/watch?v=YK1Sw_hnm58",
  },
  "webgl": {
    coursera: "https://www.coursera.org/learn/webgl-threejs",
    udemy: "https://www.udemy.com/course/webgl-beginner-course/",
    youtube: "https://www.youtube.com/watch?v=kB0ZVUrI4Aw",
  },
  "opengl": {
    coursera: "https://www.coursera.org/learn/computer-graphics",
    udemy: "https://www.udemy.com/course/graphics-with-modern-opengl/",
    youtube: "https://www.youtube.com/watch?v=45MIykWJ-C4",
  },
  "after effects": {
    coursera: "https://www.coursera.org/learn/motion-graphics",
    udemy: "https://www.udemy.com/course/after-effects-cc-the-complete-motion-graphics-course/",
    youtube: "https://www.youtube.com/watch?v=nnCHH_e4zMg",
  },
  "adobe animate": {
    coursera: "https://www.coursera.org/learn/motion-graphics",
    udemy: "https://www.udemy.com/course/adobe-animate-cc/",
    youtube: "https://www.youtube.com/watch?v=zRGSGoCbHbs",
  },
  "cinema 4d": {
    coursera: "https://www.coursera.org/learn/3d-modeling",
    udemy: "https://www.udemy.com/course/cinema-4d-basecamp/",
    youtube: "https://www.youtube.com/watch?v=KMqDMGEQ3b0",
  },
  "lidar": {
    coursera: "https://www.coursera.org/learn/self-driving-cars",
    udemy: "https://www.udemy.com/course/lidar-point-cloud-processing-using-python/",
    youtube: "https://www.youtube.com/watch?v=nXlqv_k4P8Q",
  },
  "drone programming": {
    coursera: "https://www.coursera.org/learn/robotics-flight",
    udemy: "https://www.udemy.com/course/drone-programming/",
    youtube: "https://www.youtube.com/watch?v=LmEcyQnfpDA",
  },
  "gps integration": {
    coursera: "https://www.coursera.org/learn/iot-wireless",
    udemy: "https://www.udemy.com/course/iot-internet-of-things/",
    youtube: "https://www.youtube.com/watch?v=hKyXMXYPH30",
  },
  "precision agriculture": {
    coursera: "https://www.coursera.org/learn/digital-transformation",
    udemy: "https://www.udemy.com/course/agritech-course/",
    youtube: "https://www.youtube.com/watch?v=ALdmXkTFU34",
  },
  "robotics": {
    coursera: "https://www.coursera.org/specializations/robotics",
    udemy: "https://www.udemy.com/course/ros-essentials/",
    youtube: "https://www.youtube.com/watch?v=Ye7Wuh5b2cI",
  },
  "automation": {
    coursera: "https://www.coursera.org/learn/rpa-overview",
    udemy: "https://www.udemy.com/course/uipath-rpa-developer-course/",
    youtube: "https://www.youtube.com/watch?v=9URSbTOE4YI",
  },
  "document automation": {
    coursera: "https://www.coursera.org/learn/rpa-overview",
    udemy: "https://www.udemy.com/course/document-automation-with-python/",
    youtube: "https://www.youtube.com/watch?v=s8XjEuplx_U",
  },
  "contract analytics": {
    coursera: "https://www.coursera.org/learn/legal-tech",
    udemy: "https://www.udemy.com/course/legaltech/",
    youtube: "https://www.youtube.com/watch?v=wYd9GNELFfA",
  },
  "case management software": {
    coursera: "https://www.coursera.org/learn/legal-tech",
    udemy: "https://www.udemy.com/course/legal-project-management/",
    youtube: "https://www.youtube.com/watch?v=pYmyHf_EQLQ",
  },
  "risk modeling": {
    coursera: "https://www.coursera.org/learn/finance-risk-management",
    udemy: "https://www.udemy.com/course/risk-management/",
    youtube: "https://www.youtube.com/watch?v=RNKvBgPqBhQ",
  },
  "ai for claims": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/insurance-and-ai/",
    youtube: "https://www.youtube.com/watch?v=pKXiIjsKXkg",
  },
  "pos systems": {
    coursera: "https://www.coursera.org/learn/retail-management",
    udemy: "https://www.udemy.com/course/pos-system-training/",
    youtube: "https://www.youtube.com/watch?v=xFws4Sy9_PM",
  },
  "inventory management": {
    coursera: "https://www.coursera.org/learn/supply-chain-logistics",
    udemy: "https://www.udemy.com/course/inventory-management-course/",
    youtube: "https://www.youtube.com/watch?v=i3O3Eig8xh4",
  },
  "ai recommendation systems": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/building-recommender-systems/",
    youtube: "https://www.youtube.com/watch?v=9gBC9R-msAk",
  },
  "citizen services": {
    coursera: "https://www.coursera.org/learn/digital-government",
    udemy: "https://www.udemy.com/course/e-government/",
    youtube: "https://www.youtube.com/watch?v=mODNGMmfkYE",
  },
  "wearables": {
    coursera: "https://www.coursera.org/learn/iot-wireless",
    udemy: "https://www.udemy.com/course/iot-internet-of-things/",
    youtube: "https://www.youtube.com/watch?v=fTy5pMD5OWg",
  },
  "food delivery platforms": {
    coursera: "https://www.coursera.org/learn/product-management",
    udemy: "https://www.udemy.com/course/system-design-interview-prep/",
    youtube: "https://www.youtube.com/watch?v=iJLL-KPqBpM",
  },
  "booking platforms": {
    coursera: "https://www.coursera.org/learn/product-management",
    udemy: "https://www.udemy.com/course/system-design-interview-prep/",
    youtube: "https://www.youtube.com/watch?v=lXiiiLhwBI4",
  },
  "robo-advisors": {
    coursera: "https://www.coursera.org/learn/fintech",
    udemy: "https://www.udemy.com/course/fintech-the-complete-fintech-crash-course/",
    youtube: "https://www.youtube.com/watch?v=pJVjCcsMXig",
  },
  "aml monitoring": {
    coursera: "https://www.coursera.org/learn/fintech",
    udemy: "https://www.udemy.com/course/anti-money-laundering-aml/",
    youtube: "https://www.youtube.com/watch?v=N-3bR8dqPgA",
  },
  "streaming platforms": {
    coursera: "https://www.coursera.org/learn/kafka-fundamentals",
    udemy: "https://www.udemy.com/course/apache-kafka/",
    youtube: "https://www.youtube.com/watch?v=B5j3uNBH8X4",
  },
  "microservices": {
    coursera: "https://www.coursera.org/learn/ibm-microservices",
    udemy: "https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/",
    youtube: "https://www.youtube.com/watch?v=DGid-3LhBG4",
  },
  "serverless framework": {
    coursera: "https://www.coursera.org/learn/serverless-architecture",
    udemy: "https://www.udemy.com/course/serverless-framework/",
    youtube: "https://www.youtube.com/watch?v=mRkUnA3mEt4",
  },
  "rest api": {
    coursera: "https://www.coursera.org/learn/api-development",
    udemy: "https://www.udemy.com/course/rest-api-flask-and-python/",
    youtube: "https://www.youtube.com/watch?v=SLwpqD8n3d0",
  },
  "graphql": {
    coursera: "https://www.coursera.org/learn/api-development",
    udemy: "https://www.udemy.com/course/graphql-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=ed8SzALpx1Q",
  },
  "openapi": {
    coursera: "https://www.coursera.org/learn/api-development",
    udemy: "https://www.udemy.com/course/rest-api-design/",
    youtube: "https://www.youtube.com/watch?v=pRS9LRBgjYg",
  },
  "postman": {
    coursera: "https://www.coursera.org/learn/api-development",
    udemy: "https://www.udemy.com/course/postman-the-complete-guide/",
    youtube: "https://www.youtube.com/watch?v=VywxIQ2ZXw4",
  },
  "swagger": {
    coursera: "https://www.coursera.org/learn/api-development",
    udemy: "https://www.udemy.com/course/rest-api-design/",
    youtube: "https://www.youtube.com/watch?v=7MS1Z_1c5CU",
  },
  "mysql": {
    coursera: "https://www.coursera.org/learn/database-management",
    udemy: "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
    youtube: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
  },
  "postgresql": {
    coursera: "https://www.coursera.org/learn/database-management",
    udemy: "https://www.udemy.com/course/the-complete-python-postgresql-developer-course/",
    youtube: "https://www.youtube.com/watch?v=qw--VYLpxG4",
  },
  "mongodb": {
    coursera: "https://www.coursera.org/learn/introduction-mongodb",
    udemy: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/",
    youtube: "https://www.youtube.com/watch?v=-56x56UppqQ",
  },
  "redis": {
    coursera: "https://www.coursera.org/learn/database-management",
    udemy: "https://www.udemy.com/course/learn-redis/",
    youtube: "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
  },
  "kafka": {
    coursera: "https://www.coursera.org/learn/kafka-fundamentals",
    udemy: "https://www.udemy.com/course/apache-kafka/",
    youtube: "https://www.youtube.com/watch?v=B5j3uNBH8X4",
  },
  "cassandra": {
    coursera: "https://www.coursera.org/learn/database-management",
    udemy: "https://www.udemy.com/course/cassandra/",
    youtube: "https://www.youtube.com/watch?v=s1xc1HVsRk0",
  },
  "apache kafka": {
    coursera: "https://www.coursera.org/learn/kafka-fundamentals",
    udemy: "https://www.udemy.com/course/apache-kafka/",
    youtube: "https://www.youtube.com/watch?v=B5j3uNBH8X4",
  },
  "apache spark": {
    coursera: "https://www.coursera.org/learn/big-data-essentials",
    udemy: "https://www.udemy.com/course/apache-spark-with-scala/",
    youtube: "https://www.youtube.com/watch?v=F8pyaR4uQ2g",
  },
  "sklearn": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    youtube: "https://www.youtube.com/watch?v=0B5eIE_1vpU",
  },
  "machine learning": {
    coursera: "https://www.coursera.org/learn/machine-learning",
    udemy: "https://www.udemy.com/course/machinelearning/",
    youtube: "https://www.youtube.com/watch?v=NWONeJKn6kc",
  },
  "deep learning": {
    coursera: "https://www.coursera.org/specializations/deep-learning",
    udemy: "https://www.udemy.com/course/deeplearning/",
    youtube: "https://www.youtube.com/watch?v=VyWAvY2CF9c",
  },
  "computer vision": {
    coursera: "https://www.coursera.org/learn/computer-vision-basics",
    udemy: "https://www.udemy.com/course/master-computer-vision-with-opencv-in-python/",
    youtube: "https://www.youtube.com/watch?v=oXlwWbU8l2o",
  },
  "artificial intelligence": {
    coursera: "https://www.coursera.org/learn/ai-for-everyone",
    udemy: "https://www.udemy.com/course/artificial-intelligence-az/",
    youtube: "https://www.youtube.com/watch?v=JMUxmLyrhSk",
  },
  "natural language processing": {
    coursera: "https://www.coursera.org/learn/language-processing",
    udemy: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/",
    youtube: "https://www.youtube.com/watch?v=fOvTtapxa9c",
  },
  "communication": {
    coursera: "https://www.coursera.org/learn/wharton-communication-skills",
    udemy: "https://www.udemy.com/course/communication-skills-for-beginners/",
    youtube: "https://www.youtube.com/watch?v=HAnw168huqA",
  },
  "collaboration": {
    coursera: "https://www.coursera.org/learn/teamwork-skills",
    udemy: "https://www.udemy.com/course/teamwork-and-collaboration/",
    youtube: "https://www.youtube.com/watch?v=9iRKJjJR8oo",
  },
  "teamwork": {
    coursera: "https://www.coursera.org/learn/teamwork-skills",
    udemy: "https://www.udemy.com/course/teamwork-and-collaboration/",
    youtube: "https://www.youtube.com/watch?v=8Qi3MG0DJZM",
  },
  "leadership": {
    coursera: "https://www.coursera.org/learn/everyday-leadership",
    udemy: "https://www.udemy.com/course/leadership-executive-leadership/",
    youtube: "https://www.youtube.com/watch?v=nVOf_MHCeAM",
  },
  "management": {
    coursera: "https://www.coursera.org/learn/management-fundamentals",
    udemy: "https://www.udemy.com/course/management-leadership-development/",
    youtube: "https://www.youtube.com/watch?v=8Qi3MG0DJZM",
  },
  "project management": {
    coursera: "https://www.coursera.org/professional-certificates/google-project-management",
    udemy: "https://www.udemy.com/course/project-management-professional-pmp/",
    youtube: "https://www.youtube.com/watch?v=ZKOL-rZ79gs",
  },
  "agile": {
    coursera: "https://www.coursera.org/learn/agile-development",
    udemy: "https://www.udemy.com/course/agile-fundamentals-including-scrum-and-kanban/",
    youtube: "https://www.youtube.com/watch?v=Z9QbYZh1YXY",
  },
  "scrum": {
    coursera: "https://www.coursera.org/learn/agile-development",
    udemy: "https://www.udemy.com/course/scrum-advanced/",
    youtube: "https://www.youtube.com/watch?v=2Vt7Ik8Ublw",
  },
  "kanban": {
    coursera: "https://www.coursera.org/learn/agile-development",
    udemy: "https://www.udemy.com/course/lean-kanban-fundamentals/",
    youtube: "https://www.youtube.com/watch?v=jf0tlbt9lx0",
  },
  "waterfall": {
    coursera: "https://www.coursera.org/learn/project-management",
    udemy: "https://www.udemy.com/course/project-management-professional-pmp/",
    youtube: "https://www.youtube.com/watch?v=LxEmGNgqYJA",
  },
  "devops": {
    coursera: "https://www.coursera.org/learn/devops-culture-and-mindset",
    udemy: "https://www.udemy.com/course/devops-projects/",
    youtube: "https://www.youtube.com/watch?v=UbtB4sMaaNM",
  },
  "problem solving": {
    coursera: "https://www.coursera.org/learn/problem-solving-skills",
    udemy: "https://www.udemy.com/course/problem-solving-for-professionals/",
    youtube: "https://www.youtube.com/watch?v=YOiSPA1qhG0",
  },
  "critical thinking": {
    coursera: "https://www.coursera.org/learn/critical-thinking-skills",
    udemy: "https://www.udemy.com/course/critical-thinking/",
    youtube: "https://www.youtube.com/watch?v=Cum3k-Wglfw",
  },
  "creativity": {
    coursera: "https://www.coursera.org/learn/creative-thinking-techniques",
    udemy: "https://www.udemy.com/course/creative-thinking-and-innovation/",
    youtube: "https://www.youtube.com/watch?v=YnHkNE0JFVk",
  }
};

/* -----------------------------
   SKILLS
----------------------------- */
const skillSets = {

  // ===== PROGRAMMING LANGUAGES =====
  python: ["python", "oops", "pandas", "numpy", "matplotlib"],
  javascript: ["html", "css", "javascript", "typescript", "nodejs"],
  java: ["java", "oops", "spring boot", "sql", "git"],
  c: ["c", "cplusplus", "oops", "git"],
  csharp: ["csharp", "oops", "unity", "git"],
  typescript: ["typescript", "javascript", "react", "nodejs", "rest api"],
  kotlin: ["kotlin", "android", "oops", "firebase", "git"],
  swift: ["swift", "ios", "oops", "firebase", "git"],
  rust: ["c", "cplusplus", "systems programming", "git"],
  go: ["nodejs", "rest api", "docker", "microservices", "git"],
  scala: ["scala", "apache spark", "kafka", "big data", "functional programming"],
  r_language: ["statistics", "pandas", "data visualization", "matplotlib", "machine learning"],

  // ===== FRONTEND DEVELOPMENT =====
  react: ["html", "css", "javascript", "react", "nextjs"],
  frontend: ["html", "css", "javascript", "typescript", "react", "figma", "ui/ux"],
  nextjs: ["javascript", "react", "nextjs", "nodejs", "rest api", "css"],
  vue: ["html", "css", "javascript", "typescript", "nodejs", "rest api"],
  angular: ["html", "css", "javascript", "typescript", "rest api", "nodejs"],
  svelte: ["html", "css", "javascript", "typescript", "nodejs"],
  web_fundamentals: ["html", "css", "javascript", "git", "ui/ux", "figma"],
  frontend_advanced: ["react", "nextjs", "typescript", "graphql", "rest api", "three.js", "webgl", "css"],
  jamstack: ["html", "css", "javascript", "nextjs", "react", "graphql", "git"],
  web_animations: ["css", "javascript", "three.js", "webgl", "after effects", "adobe animate"],
  pwa: ["html", "css", "javascript", "react", "nodejs", "rest api", "firebase"],
  web_accessibility: ["html", "css", "javascript", "ui/ux", "usability testing"],
  web_performance: ["html", "css", "javascript", "react", "nodejs", "docker"],
  web3_frontend: ["javascript", "react", "nextjs", "typescript", "rest api"],

  // ===== BACKEND DEVELOPMENT =====
  nodejs: ["javascript", "nodejs", "express", "mongodb", "rest api"],
  django: ["python", "django", "sql", "rest api", "docker"],
  flask: ["python", "flask", "rest api", "sql", "docker"],
  fastapi: ["python", "fastapi", "rest api", "docker", "postgresql"],
  springboot: ["java", "spring boot", "sql", "rest api", "docker"],
  backend_python: ["python", "django", "fastapi", "flask", "postgresql", "redis", "rest api", "docker"],
  backend_java: ["java", "spring boot", "sql", "rest api", "docker", "kafka", "redis"],
  backend_js: ["javascript", "nodejs", "express", "mongodb", "rest api", "redis", "kafka"],
  backend_advanced: ["microservices", "kafka", "redis", "docker", "kubernetes", "rest api", "graphql", "postgresql"],
  grpc: ["rest api", "docker", "microservices", "nodejs", "python"],
  websockets: ["javascript", "nodejs", "express", "rest api", "redis"],
  serverless_backend: ["aws", "serverless", "serverless framework", "nodejs", "python", "rest api"],
  event_driven: ["kafka", "apache kafka", "nodejs", "docker", "microservices", "redis"],

  // ===== FULL STACK =====
  fullstack_js: ["html", "css", "javascript", "react", "nodejs", "express", "mongodb", "rest api", "git"],
  fullstack_python: ["python", "django", "react", "postgresql", "rest api", "docker", "git"],
  fullstack_java: ["java", "spring boot", "react", "sql", "rest api", "docker", "git"],
  fullstack_mobile: ["react native", "nodejs", "firebase", "rest api", "mongodb", "git"],
  mern: ["mongodb", "express", "react", "nodejs", "rest api", "javascript", "git"],
  mean: ["mongodb", "express", "angular", "nodejs", "rest api", "javascript", "git"],
  lamp: ["html", "css", "javascript", "sql", "python", "rest api", "docker"],
  t3_stack: ["typescript", "react", "nextjs", "nodejs", "postgresql", "rest api", "graphql"],

  // ===== API DEVELOPMENT =====
  api: ["rest api", "graphql", "openapi", "postman", "swagger", "nodejs"],
  api_design: ["rest api", "graphql", "openapi", "swagger", "postman", "nodejs", "python"],
  api_gateway: ["rest api", "aws", "docker", "kubernetes", "microservices", "nodejs"],
  api_security: ["rest api", "openapi", "application security", "cryptography", "docker"],
  api_testing: ["postman", "swagger", "rest api", "nodejs", "python"],

  // ===== DATABASES =====
  sql_databases: ["sql", "mysql", "postgresql", "redis", "git"],
  nosql_databases: ["mongodb", "redis", "cassandra", "elasticsearch"],
  databases: ["sql", "mysql", "postgresql", "mongodb", "redis", "cassandra"],
  database_admin: ["sql", "mysql", "postgresql", "mongodb", "redis", "cassandra", "elasticsearch", "data warehouses"],
  database_optimization: ["sql", "postgresql", "mysql", "redis", "elasticsearch", "data warehouses"],
  graph_databases: ["sql", "elasticsearch", "mongodb", "python", "data wrangling"],
  timeseries_db: ["sql", "postgresql", "redis", "kafka", "monitoring", "prometheus"],
  search_engines: ["elasticsearch", "opensearch", "vector databases", "faiss", "python"],
  vector_search: ["vector databases", "faiss", "elasticsearch", "opensearch", "python", "machine learning"],
  caching: ["redis", "nodejs", "docker", "microservices", "postgresql"],

  // ===== DEVOPS & CLOUD =====
  docker: ["docker", "kubernetes", "ci/cd", "devops"],
  devops: ["docker", "kubernetes", "ci/cd", "jenkins", "git", "ansible", "terraform", "devops"],
  aws: ["aws", "docker", "kubernetes", "terraform", "ci/cd", "cloud computing"],
  azure: ["azure", "docker", "kubernetes", "terraform", "ci/cd", "cloud computing"],
  gcp: ["google cloud", "docker", "kubernetes", "terraform", "ci/cd", "cloud computing"],
  cloud: ["aws", "azure", "google cloud", "docker", "kubernetes", "serverless", "cloud computing", "cloud security"],
  infrastructure: ["terraform", "ansible", "docker", "kubernetes", "infrastructure as code", "monitoring", "prometheus", "grafana"],
  platform_engineering: ["kubernetes", "terraform", "docker", "ci/cd", "prometheus", "grafana", "ansible", "git"],
  sre: ["sre", "prometheus", "grafana", "monitoring", "docker", "kubernetes", "incident response", "ci/cd"],
  devsecops: ["docker", "kubernetes", "ci/cd", "application security", "cloud security", "zero trust", "terraform"],
  gitops: ["git", "github", "kubernetes", "docker", "terraform", "ci/cd", "ansible"],
  cloud_native: ["docker", "kubernetes", "microservices", "kafka", "serverless", "cloud computing", "ci/cd"],
  cloud_migration: ["aws", "azure", "google cloud", "terraform", "docker", "kubernetes", "cloud computing"],
  finops_cloud: ["aws", "azure", "google cloud", "finops", "terraform", "cloud computing"],
  observability: ["prometheus", "grafana", "monitoring", "sre", "docker", "kubernetes", "elasticsearch"],
  chaos_engineering: ["kubernetes", "docker", "sre", "monitoring", "ci/cd", "microservices"],
  multicloud: ["aws", "azure", "google cloud", "terraform", "kubernetes", "docker", "cloud security"],
  edge_cloud: ["edge computing", "docker", "kubernetes", "iot", "aws", "cloud computing"],

  // ===== DATA SCIENCE & ANALYTICS =====
  data_science: ["python", "pandas", "numpy", "matplotlib", "seaborn", "scikit-learn", "statistics", "sql"],
  data_analytics: ["python", "sql", "pandas", "tableau", "power bi", "statistics", "data visualization", "excel"],
  data_engineering: ["python", "sql", "airflow", "kafka", "spark", "etl pipelines", "data warehouses", "data lakes", "dbt"],
  big_data: ["spark", "hadoop", "kafka", "big data", "data lakes", "data warehouses", "sql"],
  business_intelligence: ["power bi", "tableau", "qlik", "excel", "dashboards", "analytics", "sql"],
  data_analyst: ["sql", "excel", "python", "pandas", "tableau", "power bi", "statistics", "data visualization"],
  data_architect: ["data warehouses", "data lakes", "etl pipelines", "airflow", "spark", "sql", "kafka", "dbt"],
  analytics_engineer: ["sql", "dbt", "airflow", "python", "data warehouses", "tableau", "power bi"],
  data_wrangling: ["python", "pandas", "numpy", "data wrangling", "sql", "excel"],
  statistical_analysis: ["statistics", "python", "pandas", "numpy", "matplotlib", "seaborn", "scikit-learn"],
  reporting: ["power bi", "tableau", "qlik", "excel", "dashboards", "sql", "analytics"],
  etl: ["etl pipelines", "airflow", "python", "sql", "spark", "kafka", "dbt"],
  realtime_analytics: ["kafka", "spark", "apache kafka", "apache spark", "python", "elasticsearch", "dashboards"],
  streaming_data: ["kafka", "apache kafka", "spark", "apache spark", "python", "airflow", "elasticsearch"],
  data_governance: ["sql", "data warehouses", "data lakes", "python", "airflow", "analytics"],
  master_data: ["sql", "data warehouses", "etl pipelines", "dbt", "python", "airflow"],

  // ===== MACHINE LEARNING =====
  machine_learning: ["python", "scikit-learn", "pandas", "numpy", "statistics", "feature engineering", "machine learning"],
  deep_learning: ["python", "tensorflow", "pytorch", "keras", "deep learning", "numpy"],
  mlops: ["python", "docker", "mlops", "airflow", "feature stores", "git", "kubernetes"],
  ml_engineering: ["python", "scikit-learn", "tensorflow", "pytorch", "mlops", "docker", "feature stores", "airflow"],
  feature_engineering: ["python", "pandas", "numpy", "feature engineering", "scikit-learn", "sql"],
  model_deployment: ["python", "docker", "kubernetes", "mlops", "fastapi", "flask", "aws"],
  model_monitoring: ["python", "mlops", "prometheus", "grafana", "airflow", "docker"],
  automl: ["python", "scikit-learn", "machine learning", "pandas", "numpy", "feature engineering"],
  xgboost: ["python", "scikit-learn", "pandas", "numpy", "machine learning", "feature engineering"],
  time_series: ["python", "pandas", "numpy", "statistics", "matplotlib", "machine learning"],
  anomaly_detection: ["python", "scikit-learn", "machine learning", "pandas", "numpy", "statistics"],
  recommendation_systems: ["python", "machine learning", "pandas", "numpy", "sql", "ai recommendation systems"],
  ranking_models: ["python", "machine learning", "scikit-learn", "pandas", "elasticsearch"],
  tabular_ml: ["python", "scikit-learn", "pandas", "numpy", "feature engineering", "statistics"],
  causal_inference: ["python", "statistics", "pandas", "scikit-learn", "data visualization"],
  bayesian_ml: ["python", "statistics", "numpy", "pandas", "scikit-learn", "machine learning"],
  ml_interpretability: ["python", "scikit-learn", "machine learning", "pandas", "matplotlib", "statistics"],
  federated_learning: ["python", "machine learning", "tensorflow", "pytorch", "docker"],
  edge_ml: ["python", "tensorflow", "pytorch", "onnx", "edge computing", "docker"],

  // ===== AI SPECIALIZATIONS =====
  nlp: ["python", "nltk", "spacy", "transformers", "huggingface", "natural language processing", "text preprocessing"],
  computer_vision: ["python", "opencv", "cnn", "tensorflow", "pytorch", "yolo", "object detection", "computer vision"],
  generative_ai: ["python", "llms", "generative ai", "huggingface", "transformers", "openai", "diffusion models"],
  reinforcement_learning: ["python", "q-learning", "policy gradient", "gym", "tensorflow", "pytorch"],
  speech_ai: ["python", "tensorflow", "pytorch", "numpy", "natural language processing", "transformers"],
  multimodal_ai: ["python", "tensorflow", "pytorch", "transformers", "huggingface", "computer vision", "natural language processing"],
  llm_engineering: ["python", "llms", "openai", "huggingface", "transformers", "vector databases", "langchain"],
  rag: ["python", "llms", "vector databases", "faiss", "elasticsearch", "openai", "huggingface", "transformers"],
  ai_agents: ["python", "llms", "openai", "huggingface", "rest api", "docker", "fastapi"],
  prompt_engineering: ["python", "llms", "openai", "generative ai", "huggingface", "natural language processing"],
  fine_tuning: ["python", "pytorch", "tensorflow", "huggingface", "transformers", "llms", "mlops"],
  diffusion_ai: ["python", "stable diffusion", "diffusion models", "pytorch", "dalle", "generative ai"],
  vision_language: ["python", "transformers", "huggingface", "computer vision", "natural language processing", "pytorch"],
  knowledge_graphs: ["python", "elasticsearch", "vector databases", "natural language processing", "sql"],
  ai_ethics: ["machine learning", "python", "statistics", "ml interpretability", "data science"],
  neural_architecture: ["python", "pytorch", "tensorflow", "deep learning", "cnn", "rnn", "transformers"],
  object_detection: ["python", "opencv", "yolo", "cnn", "pytorch", "tensorflow", "object detection"],
  image_segmentation: ["python", "opencv", "mask r-cnn", "pytorch", "tensorflow", "image segmentation"],
  gan_generation: ["python", "pytorch", "tensorflow", "gan", "generative ai", "diffusion models"],
  autoencoders_vae: ["python", "pytorch", "tensorflow", "autoencoders", "vae", "deep learning"],

  // ===== MOBILE DEVELOPMENT =====
  flutter: ["flutter", "dart", "firebase", "mobile testing", "ui/ux"],
  react_native: ["javascript", "react", "react native", "firebase", "mobile testing"],
  android: ["kotlin", "android", "java", "firebase", "mobile testing"],
  ios: ["swift", "ios", "firebase", "mobile testing"],
  mobile: ["flutter", "react native", "firebase", "ui/ux", "mobile testing"],
  cross_platform_mobile: ["flutter", "react native", "firebase", "rest api", "mobile testing", "ui/ux"],
  mobile_backend: ["firebase", "nodejs", "rest api", "mongodb", "docker"],
  mobile_design: ["figma", "ui/ux", "flutter", "react native", "prototyping", "usability testing"],
  mobile_devops: ["ci/cd", "git", "docker", "firebase", "mobile testing"],
  wearable_dev: ["wearables", "sensors", "iot", "arduino", "raspberry pi", "edge computing"],
  ar_mobile: ["ar", "swift", "kotlin", "unity", "3d modeling"],

  // ===== CYBERSECURITY =====
  cybersecurity: ["network security", "ethical hacking", "penetration testing", "cryptography", "application security", "siem"],
  cloud_security: ["cloud security", "network security", "zero trust", "aws", "docker", "kubernetes"],
  soc_analyst: ["siem", "threat intelligence", "network security", "incident response", "ethical hacking"],
  pentester: ["penetration testing", "ethical hacking", "network security", "cryptography", "application security"],
  appsec: ["application security", "cryptography", "penetration testing", "docker", "rest api"],
  devsecops_track: ["devsecops", "application security", "docker", "kubernetes", "ci/cd", "cloud security"],
  zero_trust_security: ["zero trust", "network security", "cloud security", "cryptography", "siem"],
  threat_hunting: ["siem", "threat intelligence", "network security", "incident response", "python"],
  malware_analysis: ["python", "c", "network security", "ethical hacking", "cryptography"],
  digital_forensics: ["python", "network security", "incident response", "siem", "ethical hacking"],
  red_team: ["penetration testing", "ethical hacking", "network security", "cryptography", "python"],
  blue_team: ["siem", "incident response", "threat intelligence", "network security", "cloud security"],
  iam_security: ["zero trust", "cloud security", "cryptography", "aws", "docker"],
  data_privacy: ["cryptography", "cloud security", "application security", "python", "sql"],

  // ===== UI/UX DESIGN =====
  ux_design: ["figma", "adobe xd", "sketch", "ui/ux", "prototyping", "usability testing", "user research", "interaction design"],
  design_systems: ["figma", "design systems", "css", "react", "prototyping"],
  ui_design: ["figma", "adobe xd", "sketch", "css", "html", "prototyping", "design systems"],
  product_design: ["figma", "ui/ux", "user research", "prototyping", "usability testing", "interaction design", "design systems"],
  ux_research: ["user research", "usability testing", "statistics", "data visualization", "figma"],
  motion_design: ["after effects", "adobe animate", "figma", "css", "three.js"],
  design_ops: ["figma", "design systems", "ui/ux", "collaboration", "git"],
  accessibility_design: ["figma", "html", "css", "ui/ux", "usability testing"],
  information_architecture: ["figma", "ui/ux", "user research", "prototyping", "interaction design"],
  visual_design: ["figma", "adobe xd", "sketch", "css", "design systems"],
  brand_design: ["figma", "adobe xd", "after effects", "3d modeling", "cinema 4d"],

  // ===== ROBOTICS & EMBEDDED SYSTEMS =====
  robotics: ["robotics", "ros", "robot kinematics", "path planning", "sensors", "actuators", "simulation", "gazebo"],
  iot: ["arduino", "raspberry pi", "mqtt", "sensors", "sensor networks", "edge computing"],
  embedded: ["c", "cplusplus", "arduino", "sensors", "actuators", "ros"],
  autonomous_systems: ["robotics", "ros", "path planning", "lidar", "computer vision", "python", "simulation"],
  drone_dev: ["drone programming", "ros", "python", "sensors", "gps integration", "simulation"],
  industrial_iot: ["arduino", "raspberry pi", "mqtt", "sensors", "edge computing", "python", "docker"],
  embedded_ml: ["python", "tensorflow", "onnx", "arduino", "raspberry pi", "edge computing", "edge ml"],
  smart_home: ["arduino", "raspberry pi", "mqtt", "sensor networks", "python", "nodejs"],
  precision_ag: ["precision agriculture", "sensors", "gps integration", "drone programming", "python", "machine learning"],
  autonomous_vehicles: ["lidar", "ros", "computer vision", "path planning", "sensors", "python", "simulation"],
  robot_vision: ["computer vision", "opencv", "ros", "python", "sensors", "simulation"],
  firmware: ["c", "cplusplus", "arduino", "sensors", "actuators"],

  // ===== GAME DEVELOPMENT =====
  game_dev: ["unity", "csharp", "3d modeling", "shader programming", "vr", "ar"],
  unreal_dev: ["unreal engine", "cplusplus", "3d modeling", "shader programming"],
  indie_game: ["unity", "csharp", "3d modeling", "after effects", "shader programming"],
  game_ai: ["python", "unity", "reinforcement learning", "machine learning", "q-learning"],
  vr_dev: ["vr", "unity", "csharp", "3d modeling", "shader programming"],
  ar_dev: ["ar", "unity", "csharp", "3d modeling", "swift", "kotlin"],
  multiplayer_game: ["unity", "csharp", "nodejs", "websockets", "docker", "redis"],
  game_backend: ["nodejs", "redis", "mongodb", "docker", "websockets", "rest api"],
  procedural_gen: ["unity", "csharp", "python", "machine learning", "3d modeling"],
  narrative_game: ["unity", "csharp", "3d modeling", "after effects", "figma"],

  // ===== QUANTUM COMPUTING =====
  quantum: ["qiskit", "quantum algorithms", "quantum gates", "quantum simulation", "entanglement"],
  quantum_ml: ["qiskit", "quantum algorithms", "python", "machine learning", "tensorflow"],
  quantum_cryptography: ["qiskit", "quantum algorithms", "cryptography", "python", "entanglement"],
  quantum_simulation: ["qiskit", "quantum simulation", "quantum gates", "python", "simulation"],
  quantum_software: ["qiskit", "quantum algorithms", "python", "quantum gates", "entanglement"],

  // ===== DIGITAL MARKETING =====
  digital_marketing: ["seo", "sem", "google analytics", "social media marketing", "content marketing", "email marketing", "ad campaigns"],
  seo_specialist: ["seo", "google analytics", "content marketing", "sem", "data visualization"],
  paid_media: ["sem", "ad campaigns", "google analytics", "social media marketing", "conversion rate optimization"],
  growth_hacking: ["seo", "sem", "google analytics", "social media marketing", "conversion rate optimization", "product analytics"],
  content_marketing: ["content marketing", "seo", "social media marketing", "email marketing", "google analytics"],
  email_marketing: ["email marketing", "content marketing", "google analytics", "conversion rate optimization"],
  social_media: ["social media marketing", "content marketing", "google analytics", "ad campaigns"],
  marketing_analytics: ["google analytics", "python", "sql", "data visualization", "tableau", "statistics"],
  cro_specialist: ["conversion rate optimization", "google analytics", "seo", "usability testing", "data visualization"],
  performance_marketing: ["sem", "ad campaigns", "google analytics", "conversion rate optimization", "social media marketing"],
  affiliate_marketing: ["seo", "content marketing", "google analytics", "email marketing", "ad campaigns"],

  // ===== FINTECH =====
  fintech: ["python", "sql", "financial modeling", "risk analysis", "fraud detection", "payments", "regtech"],
  aml_compliance: ["aml monitoring", "fraud detection", "risk modeling", "siem", "python"],
  blockchain_fintech: ["python", "cryptography", "rest api", "docker", "financial modeling"],
  payments_engineering: ["payments", "rest api", "nodejs", "python", "docker", "postgresql"],
  risk_management: ["risk analysis", "risk modeling", "python", "statistics", "machine learning", "financial modeling"],
  quant_finance: ["python", "statistics", "numpy", "pandas", "financial modeling", "machine learning"],
  open_banking: ["rest api", "nodejs", "python", "docker", "postgresql", "payments"],
  insurtech: ["python", "machine learning", "risk modeling", "ai for claims", "sql"],
  robo_advisor: ["python", "machine learning", "financial modeling", "rest api", "docker", "robo-advisors"],
  fraud_prevention: ["python", "machine learning", "fraud detection", "sql", "kafka", "siem"],
  credit_scoring: ["python", "machine learning", "statistics", "pandas", "sql", "scikit-learn"],

  // ===== PRODUCT MANAGEMENT =====
  product_management: ["roadmapping", "product analytics", "stakeholder management", "user research", "market analysis", "agile", "jira"],
  technical_pm: ["roadmapping", "product analytics", "agile", "jira", "rest api", "sql", "user research"],
  growth_pm: ["product analytics", "conversion rate optimization", "google analytics", "market analysis", "user research"],
  data_pm: ["product analytics", "sql", "python", "data visualization", "tableau", "statistics"],
  platform_pm: ["roadmapping", "microservices", "rest api", "docker", "agile", "stakeholder management"],
  ux_pm: ["figma", "user research", "usability testing", "prototyping", "roadmapping", "agile"],

  // ===== PROJECT & TEAM MANAGEMENT =====
  agile_pm: ["agile", "scrum", "kanban", "jira", "project management", "stakeholder management"],
  leadership: ["leadership", "management", "communication", "collaboration", "teamwork", "project management"],
  scrum_master: ["scrum", "agile", "jira", "kanban", "stakeholder management", "collaboration"],
  pmo: ["project management", "waterfall", "agile", "jira", "stakeholder management", "roadmapping"],
  team_lead: ["leadership", "management", "agile", "jira", "communication", "collaboration", "git"],
  engineering_manager: ["leadership", "management", "agile", "jira", "devops", "git", "stakeholder management"],
  delivery_manager: ["project management", "agile", "scrum", "jira", "stakeholder management", "risk analysis"],

  // ===== VERSION CONTROL & COLLABORATION =====
  version_control: ["git", "github", "gitlab", "bitbucket", "jira"],
  open_source: ["git", "github", "documentation", "ci/cd", "collaboration"],
  code_review: ["git", "github", "gitlab", "jira", "agile", "collaboration"],

  // ===== SOFT SKILLS =====
  soft_skills: ["communication", "collaboration", "teamwork", "leadership", "problem solving", "critical thinking", "creativity"],
  communication_skills: ["communication", "leadership", "collaboration", "stakeholder management"],
  creative_skills: ["creativity", "critical thinking", "problem solving", "communication", "design systems"],
  analytical_skills: ["critical thinking", "problem solving", "statistics", "data visualization", "python"],

  // ===== 3D, GRAPHICS & ANIMATION =====
  animation: ["after effects", "adobe animate", "cinema 4d", "3d modeling", "motion capture"],
  graphics_programming: ["opengl", "webgl", "three.js", "shader programming"],
  vfx: ["after effects", "cinema 4d", "3d modeling", "motion capture", "shader programming"],
  realtime_3d: ["three.js", "webgl", "opengl", "shader programming", "unity"],
  blender_3d: ["3d modeling", "cinema 4d", "motion capture", "shader programming", "after effects"],
  cgi_pipeline: ["3d modeling", "cinema 4d", "after effects", "motion capture", "opengl"],
  technical_artist: ["shader programming", "unity", "three.js", "webgl", "3d modeling", "opengl"],
  generative_art: ["three.js", "webgl", "opengl", "python", "stable diffusion", "dalle"],

  // ===== HEALTHCARE TECH =====
  healthtech: ["python", "ehr systems", "bioinformatics", "genomics", "predictive modeling", "machine learning"],
  clinical_ai: ["python", "machine learning", "deep learning", "bioinformatics", "statistics", "ehr systems"],
  genomics_bioinformatics: ["python", "genomics", "bioinformatics", "pandas", "numpy", "statistics"],
  medical_imaging: ["python", "computer vision", "opencv", "deep learning", "pytorch", "tensorflow"],
  health_analytics: ["python", "sql", "statistics", "ehr systems", "pandas", "data visualization"],
  telemedicine_tech: ["nodejs", "rest api", "react", "firebase", "docker", "ehr systems"],
  drug_discovery_ai: ["python", "machine learning", "deep learning", "bioinformatics", "genomics"],
  wearable_health: ["wearables", "iot", "sensors", "python", "machine learning", "edge computing"],

  // ===== EDTECH =====
  edtech: ["edtech tools", "gamification", "adaptive learning", "python", "ui/ux"],
  lms_development: ["nodejs", "react", "mongodb", "rest api", "docker", "edtech tools"],
  learning_design: ["adaptive learning", "gamification", "edtech tools", "figma", "ui/ux"],
  edtech_analytics: ["python", "sql", "analytics", "data visualization", "tableau", "statistics"],

  // ===== BLOCKCHAIN & WEB3 =====
  blockchain: ["python", "javascript", "cryptography", "rest api", "docker"],
  smart_contracts: ["javascript", "python", "cryptography", "rest api", "docker"],
  defi: ["python", "javascript", "cryptography", "financial modeling", "rest api"],
  nft_dev: ["javascript", "react", "nodejs", "rest api", "mongodb"],
  web3_dev: ["javascript", "typescript", "react", "nodejs", "rest api", "cryptography", "docker"],
  crypto_analytics: ["python", "pandas", "statistics", "data visualization", "sql", "machine learning"],

  // ===== LEGAL TECH =====
  legaltech: ["document automation", "contract analytics", "case management software", "python", "rest api"],
  contract_ai: ["python", "nlp", "natural language processing", "contract analytics", "document automation"],
  legal_analytics: ["python", "sql", "statistics", "data visualization", "natural language processing"],
  legal_ops: ["document automation", "case management software", "automation", "jira", "project management"],

  // ===== RETAIL TECH =====
  retailtech: ["pos systems", "inventory management", "ai recommendation systems", "python", "sql"],
  ecommerce_backend: ["nodejs", "python", "postgresql", "redis", "docker", "rest api", "kafka"],
  ecommerce_frontend: ["react", "nextjs", "html", "css", "javascript", "figma", "ui/ux"],
  supply_chain_tech: ["python", "sql", "inventory management", "machine learning", "airflow"],
  retail_analytics: ["python", "sql", "tableau", "power bi", "analytics", "machine learning"],

  // ===== GOVTECH =====
  govtech: ["citizen services", "python", "rest api", "docker", "sql"],
  public_data: ["python", "sql", "data visualization", "tableau", "analytics", "statistics"],
  smart_city: ["iot", "sensors", "python", "machine learning", "edge computing", "citizen services"],

  // ===== AGRITECH =====
  agritech: ["precision agriculture", "sensors", "iot", "python", "machine learning", "drone programming"],
  agri_analytics: ["python", "sql", "statistics", "data visualization", "machine learning"],
  agri_robotics: ["robotics", "ros", "sensors", "drone programming", "python", "computer vision"],

  // ===== MEDIA & ENTERTAINMENT =====
  streaming_tech: ["nodejs", "kafka", "streaming platforms", "redis", "docker", "kubernetes"],
  content_delivery: ["aws", "docker", "kubernetes", "nodejs", "rest api"],
  media_analytics: ["python", "sql", "analytics", "tableau", "machine learning"],
  ai_content: ["python", "generative ai", "stable diffusion", "dalle", "llms", "openai"],
  podcast_tech: ["nodejs", "rest api", "python", "aws", "docker"],

  // ===== LOGISTICS TECH =====
  logistics_tech: ["python", "sql", "machine learning", "optimization", "inventory management"],
  route_optimization: ["python", "optimization", "machine learning", "path planning", "sql"],
  fleet_management: ["python", "iot", "sensors", "gps integration", "machine learning", "sql"],
  warehouse_automation: ["robotics", "ros", "python", "sensors", "machine learning", "automation"],

  // ===== PROPTECH =====
  proptech: ["python", "sql", "machine learning", "rest api", "react", "financial modeling"],
  real_estate_analytics: ["python", "sql", "statistics", "data visualization", "tableau", "machine learning"],
  smart_building: ["iot", "sensors", "edge computing", "python", "mqtt", "arduino"],

  // ===== FOOD TECH =====
  foodtech: ["food delivery platforms", "nodejs", "react", "mongodb", "rest api", "docker"],
  food_analytics: ["python", "sql", "analytics", "data visualization", "machine learning"],

  // ===== TRAVEL TECH =====
  traveltech: ["booking platforms", "nodejs", "react", "mongodb", "rest api", "docker"],
  travel_analytics: ["python", "sql", "analytics", "data visualization", "machine learning"],

  // ===== SYSTEMS PROGRAMMING =====
  systems_programming: ["c", "cplusplus", "rust", "git", "linux"],
  compiler_design: ["c", "cplusplus", "python", "oops", "git"],
  os_development: ["c", "cplusplus", "git", "linux"],
  network_programming: ["c", "cplusplus", "python", "nodejs", "rest api", "docker"],
  hpc: ["c", "cplusplus", "python", "spark", "docker", "numpy"],

  // ===== OPEN SOURCE & COMMUNITY =====
  open_source_contributor: ["git", "github", "python", "javascript", "docker", "ci/cd", "documentation"],
  technical_writing: ["documentation", "markdown", "git", "communication", "api design"],
  developer_advocacy: ["communication", "python", "javascript", "rest api", "docker", "git", "public speaking"],

  // ===== EMERGING TECH =====
  spatial_computing: ["vr", "ar", "unity", "3d modeling", "shader programming", "swift", "kotlin"],
  neuromorphic: ["python", "deep learning", "tensorflow", "edge computing", "edge ml"],
  synthetic_data: ["python", "generative ai", "stable diffusion", "machine learning", "pandas"],
  digital_twin: ["simulation", "iot", "sensors", "python", "machine learning", "docker"],
  humanoid_robotics: ["robotics", "ros", "actuators", "sensors", "python", "deep learning", "computer vision"],
};

/* -----------------------------
   ANIMATIONS
----------------------------- */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

/* -----------------------------
   MAIN
----------------------------- */
const PlatformDetail = () => {
  const { skill, platform } = useParams();

  const normalizedSkill = skill?.toLowerCase();
  const normalizedPlatform = platform?.toLowerCase();

  const courseLink =
    platformLinks?.[normalizedSkill]?.[normalizedPlatform];

  const skills = skillSets?.[normalizedSkill] || [normalizedSkill];

  const handleClick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white flex flex-col items-center p-6">
       <AIAgent
  page="platformDetail"
  userData={{ skill, platform }}
/>
      {/* 🌌 Animated Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 opacity-20 blur-3xl rounded-full top-[-120px] left-[-120px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 z-10"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent capitalize">
          {skill}
        </h1>

        <p className="text-gray-400 mt-3 text-lg capitalize">
          Learn via{" "}
          <span className="text-violet-300 font-semibold">
            {platform}
          </span>
        </p>
      </motion.div>

      {/* 🚀 PREMIUM START BUTTON */}
      {courseLink && (
        <motion.a
          href={courseLink}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 35px rgba(168,85,247,0.9)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative mb-12 px-12 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
           Start Learning Now <FaExternalLinkAlt />
          </span>

          {/* Glow Pulse */}
          <div className="absolute inset-0 bg-white opacity-10 blur-xl animate-pulse" />

          {/* Shine Sweep */}
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2s_linear_infinite]" />
        </motion.a>
      )}

      {/* 🧠 SKILLS GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-5xl w-full z-10"
      >
        {skills.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              scale: 1.1,
              rotateX: 8,
              rotateY: -8,
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-center cursor-pointer overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-violet-500 to-pink-500 transition duration-500"></div>

            {/* Light Sweep */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

            <div className="relative">
              <h3 className="capitalize font-semibold text-lg text-violet-300">
                {s}
              </h3>

              <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition">
                Skill you'll master 💡
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 💡 TIP */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-16 text-gray-400 text-sm text-center max-w-md z-10"
      >
        Follow the structured course to master these skills step-by-step
      </motion.p>
    </div>
  );
};

export default PlatformDetail;