import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as IoIcons from "react-icons/io";
import AIAgent from "./AIAgent";

/* -----------------------------
   SOUND EFFECT
----------------------------- */
const clickSound = new Audio(
  "https://www.fesliyanstudios.com/play-mp3/387"
);

/* -----------------------------
   Curated Links
----------------------------- */
const curatedLinks = {
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


const platformColors = {
  coursera: "from-blue-500 to-indigo-600",
  udemy: "from-purple-500 to-pink-500",
  youtube: "from-red-500 to-orange-500",
  google: "from-green-400 to-blue-500",
  docs: "from-gray-500 to-gray-700",
  mdn: "from-yellow-500 to-orange-500",
};

/* -----------------------------
   Generate Links
----------------------------- */
const generateLinks = (skill) => {
  const key = skill.toLowerCase();
  const curated = curatedLinks[key];

  return [
    {
      name: "Coursera",
      icon: "SiCoursera",
      link: curated?.coursera || `https://www.coursera.org/search?query=${key}`,
    },
    {
      name: "Udemy",
      icon: "SiUdemy",
      link: curated?.udemy || `https://www.udemy.com/courses/search/?q=${key}`,
    },
    {
      name: "YouTube",
      icon: "FaYoutube",
      link:
        curated?.youtube ||
        `https://www.youtube.com/results?search_query=${key}+course`,
    },
    {
      name: "Google",
      icon: "FaGoogle",
      link: `https://www.google.com/search?q=${key}+best+course`,
    },
  ];
};

const platformMap = {
  python: [
    ...generateLinks("python"),
    { name: "Docs", icon: "SiPython", link: "https://docs.python.org/3/" },
  ],
  react: [
    ...generateLinks("react"),
    { name: "Docs", icon: "FaReact", link: "https://react.dev/" },
  ],
};

/* -----------------------------
   Get Platforms
----------------------------- */
const getPlatformsForSkill = (skill) => {
  const normalized = skill.toLowerCase();
  return platformMap[normalized] || generateLinks(normalized);
};

/* -----------------------------
   Animations ⚡
----------------------------- */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

/* -----------------------------
   MAIN COMPONENT
----------------------------- */
const Platforms = () => {
  const { skill } = useParams();
  const navigate = useNavigate();
  const platforms = getPlatformsForSkill(skill || "skill");

  const handleClick = (path) => {
    clickSound.currentTime = 0;
    clickSound.play();
    navigate(path);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white flex flex-col items-center p-6">

      <AIAgent page="platforms" userData={{ skill }} />
      {/* 🌌 Animated Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      <AIAgent page="platforms" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 z-10"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text capitalize">
          Master {skill}
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Choose your learning platform
        </p>
      </motion.div>

      {/* PLATFORM CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl z-10"
      >
        {platforms.map((p, index) => {
          const IconComponent =
            FaIcons[p.icon] ||
            SiIcons[p.icon] ||
            IoIcons[p.icon] ||
            FaIcons.FaBook;

          const color =
            platformColors[p.name.toLowerCase()] ||
            "from-violet-500 to-purple-600";

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                rotateX: 8,
                rotateY: -8,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() =>
                handleClick(`/platforms/${skill}/${p.name.toLowerCase()}`)
              }
              className={`group relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl cursor-pointer overflow-hidden`}
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${color} transition duration-500`}
              ></div>

              {/* Light Sweep */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

              <div className="relative flex flex-col items-center gap-5">
                {/* ICON FLOAT */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <IconComponent className="text-5xl text-violet-400 group-hover:text-pink-400 transition" />
                </motion.div>

                {/* NAME */}
                <span className="text-xl font-semibold tracking-wide">
                  {p.name}
                </span>

                {/* TOOLTIP */}
                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  Click to explore →
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate(-1)}
        className="mt-16 flex items-center gap-3 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 px-10 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-purple-500/50 transition z-10"
      >
        <IoMdArrowBack size={20} />
        Go Back
      </motion.button>
    </div>
  );
};

export default Platforms;