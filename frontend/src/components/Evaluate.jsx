import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const skillQuestions = {
  numpy: [
  {
    question: "What is NumPy mainly used for?",
    options: [
      "Web development",
      "Numerical computing in Python",
      "Game development",
      "Database management"
    ],
    correct: "Numerical computing in Python",
  },
  {
    question: "Which function is used to create an array in NumPy?",
    options: ["np.array()", "np.create()", "np.list()", "np.build()"],
    correct: "np.array()",
  },
  {
    question: "What is the main object in NumPy?",
    options: ["List", "Tuple", "ndarray", "Dictionary"],
    correct: "ndarray",
  },
],

pandas: [
  {
    question: "What is Pandas primarily used for?",
    options: [
      "Machine learning",
      "Data analysis and manipulation",
      "Web scraping",
      "Game design"
    ],
    correct: "Data analysis and manipulation",
  },
  {
    question: "Which data structure is used in Pandas?",
    options: ["Array", "DataFrame", "Stack", "Queue"],
    correct: "DataFrame",
  },
  {
    question: "Which function is used to read a CSV file in Pandas?",
    options: ["read_csv()", "load_csv()", "open_csv()", "get_csv()"],
    correct: "read_csv()",
  },
],

matplotlib: [
  {
    question: "What is Matplotlib used for?",
    options: [
      "Web development",
      "Data visualization",
      "Database management",
      "Game programming"
    ],
    correct: "Data visualization",
  },
  {
    question: "Which module is commonly used from Matplotlib?",
    options: ["matplotlib.pyplot", "matplotlib.graph", "matplotlib.plotter", "matplotlib.visual"],
    correct: "matplotlib.pyplot",
  },
  {
    question: "Which function is used to display a plot?",
    options: ["show()", "display()", "render()", "plot_show()"],
    correct: "show()",
  },
],

seaborn: [
  {
    question: "Seaborn is built on top of which library?",
    options: ["NumPy", "Pandas", "Matplotlib", "SciPy"],
    correct: "Matplotlib",
  },
  {
    question: "What is Seaborn mainly used for?",
    options: [
      "Game design",
      "Statistical data visualization",
      "Web development",
      "System programming"
    ],
    correct: "Statistical data visualization",
  },
  {
    question: "Which function is used to create a heatmap in Seaborn?",
    options: ["heatmap()", "map()", "plot_heat()", "heat_plot()"],
    correct: "heatmap()",
  },
],
"machine learning": [
  {
    question: "What is Machine Learning?",
    options: [
      "A method of manually programming computers",
      "A subset of AI that enables systems to learn from data",
      "A database management technique",
      "A web development framework"
    ],
    correct: "A subset of AI that enables systems to learn from data",
  },
  {
    question: "Which type of learning uses labeled data?",
    options: [
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Supervised Learning",
      "Semi-supervised Learning"
    ],
    correct: "Supervised Learning",
  },
  {
    question: "Which algorithm is commonly used for classification?",
    options: [
      "Linear Regression",
      "K-Nearest Neighbors",
      "K-Means",
      "Apriori"
    ],
    correct: "K-Nearest Neighbors",
  },
],

"scikit-learn": [
  {
    question: "What is Scikit-learn used for?",
    options: [
      "Web development",
      "Machine learning in Python",
      "Game development",
      "Database management"
    ],
    correct: "Machine learning in Python",
  },
  {
    question: "Which module is used for splitting datasets in Scikit-learn?",
    options: [
      "sklearn.model_selection",
      "sklearn.preprocessing",
      "sklearn.metrics",
      "sklearn.datasets"
    ],
    correct: "sklearn.model_selection",
  },
  {
    question: "Which function is commonly used to train and test split data?",
    options: [
      "split_data()",
      "train_test_split()",
      "divide_data()",
      "test_train_split()"
    ],
    correct: "train_test_split()",
  },
],


  python: [
  {
    question: "What is Python?",
    options: [
      "A low-level programming language",
      "A high-level, interpreted programming language",
      "A database management system",
      "An operating system"
    ],
    correct: "A high-level, interpreted programming language",
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    correct: "def",
  },
  {
    question: "Which data type is used to store multiple items in a single variable?",
    options: ["int", "float", "list", "char"],
    correct: "list",
  },
],

java: [
  {
    question: "What is Java?",
    options: [
      "A scripting language",
      "A high-level, object-oriented programming language",
      "A database",
      "An operating system"
    ],
    correct: "A high-level, object-oriented programming language",
  },
  {
    question: "Which keyword is used to define a class in Java?",
    options: ["function", "class", "define", "struct"],
    correct: "class",
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: [
      "start()",
      "main()",
      "run()",
      "init()"
    ],
    correct: "main()",
  },
],

datawrangling: [
  {
    question: "What is Data Wrangling?",
    options: [
      "Collecting data from users",
      "Cleaning and transforming raw data into a usable format",
      "Visualizing data",
      "Storing data in databases"
    ],
    correct: "Cleaning and transforming raw data into a usable format",
  },
  {
    question: "Which library is commonly used for data wrangling in Python?",
    options: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "TensorFlow"
    ],
    correct: "Pandas",
  },
  {
    question: "Which operation removes missing or null values from a dataset?",
    options: [
      "fillna()",
      "dropna()",
      "clean()",
      "remove()"
    ],
    correct: "dropna()",
  },
],

seaborn: [
  {
    question: "Seaborn is built on top of which library?",
    options: ["NumPy", "Pandas", "Matplotlib", "SciPy"],
    correct: "Matplotlib",
  },
  {
    question: "What is Seaborn mainly used for?",
    options: ["Game development", "Statistical data visualization", "Web development", "System programming"],
    correct: "Statistical data visualization",
  },
  {
    question: "Which function is used to create a heatmap in Seaborn?",
    options: ["heatmap()", "map()", "plot_heat()", "heat_plot()"],
    correct: "heatmap()",
  },
],

tensorflow: [
  {
    question: "What is TensorFlow primarily used for?",
    options: ["Web design", "Machine learning and deep learning", "Database storage", "Operating systems"],
    correct: "Machine learning and deep learning",
  },
  {
    question: "Who developed TensorFlow?",
    options: ["Microsoft", "Facebook", "Google", "Amazon"],
    correct: "Google",
  },
  {
    question: "Which API in TensorFlow is used for high-level neural networks?",
    options: ["tf.low", "Keras", "tf.net", "NeuralAPI"],
    correct: "Keras",
  },
],

pytorch: [
  {
    question: "What is PyTorch used for?",
    options: ["Game development", "Deep learning", "Database management", "Web scraping"],
    correct: "Deep learning",
  },
  {
    question: "Who developed PyTorch?",
    options: ["Google", "Microsoft", "Facebook (Meta)", "Amazon"],
    correct: "Facebook (Meta)",
  },
  {
    question: "Which feature makes PyTorch popular?",
    options: ["Static graphs only", "Dynamic computation graphs", "No GPU support", "Only for web apps"],
    correct: "Dynamic computation graphs",
  },
],

spark: [
  {
    question: "What is Apache Spark used for?",
    options: ["Web development", "Big data processing", "Game design", "Mobile apps"],
    correct: "Big data processing",
  },
  {
    question: "Which language is NOT supported by Spark?",
    options: ["Python", "Java", "Scala", "HTML"],
    correct: "HTML",
  },
  {
    question: "What is Spark faster than?",
    options: ["Hadoop MapReduce", "SQL", "Excel", "NumPy"],
    correct: "Hadoop MapReduce",
  },
],

hadoop: [
  {
    question: "What is Hadoop mainly used for?",
    options: ["Image editing", "Big data storage and processing", "Web design", "Game development"],
    correct: "Big data storage and processing",
  },
  {
    question: "Which component of Hadoop handles storage?",
    options: ["MapReduce", "YARN", "HDFS", "Hive"],
    correct: "HDFS",
  },
  {
    question: "Which component processes data in Hadoop?",
    options: ["HDFS", "MapReduce", "Hive", "Pig"],
    correct: "MapReduce",
  },
],

"data visualization": [
  {
    question: "What is data visualization?",
    options: [
      "Storing data",
      "Representing data in graphical form",
      "Cleaning data",
      "Deleting data"
    ],
    correct: "Representing data in graphical form",
  },
  {
    question: "Which tool is commonly used for data visualization?",
    options: ["Matplotlib", "NumPy", "TensorFlow", "Flask"],
    correct: "Matplotlib",
  },
  {
    question: "Which chart is best for showing proportions?",
    options: ["Bar chart", "Line chart", "Pie chart", "Histogram"],
    correct: "Pie chart",
  },
],

statistics: [
  {
    question: "What is statistics?",
    options: [
      "Study of data collection and analysis",
      "Web development method",
      "Database design",
      "Machine learning algorithm"
    ],
    correct: "Study of data collection and analysis",
  },
  {
    question: "What is the mean?",
    options: [
      "Middle value",
      "Most frequent value",
      "Average of numbers",
      "Difference between values"
    ],
    correct: "Average of numbers",
  },
  {
    question: "What is the median?",
    options: [
      "Average",
      "Most frequent value",
      "Middle value in sorted data",
      "Sum of values"
    ],
    correct: "Middle value in sorted data",
  },
],

"big data": [
  {
    question: "What is Big Data?",
    options: [
      "Small datasets",
      "Large and complex datasets",
      "Only structured data",
      "Database tables"
    ],
    correct: "Large and complex datasets",
  },
  {
    question: "Which is a characteristic of Big Data?",
    options: ["Volume", "Color", "Shape", "Speed only"],
    correct: "Volume",
  },
  {
    question: "Which tool is used for Big Data processing?",
    options: ["Excel", "Hadoop", "Photoshop", "VS Code"],
    correct: "Hadoop",
  },
],

mysql: [
  {
    question: "Which SQL query is used to fetch all records from a table named 'students'?",
    options: [
      "SELECT * FROM students;",
      "GET ALL FROM students;",
      "FETCH students;",
      "SELECT students;"
    ],
    correct: "SELECT * FROM students;",
  },
  {
    question: "Which query is used to insert data into a table?",
    options: [
      "ADD INTO students VALUES (1, 'John');",
      "INSERT INTO students VALUES (1, 'John');",
      "PUT INTO students VALUES (1, 'John');",
      "CREATE students VALUES (1, 'John');"
    ],
    correct: "INSERT INTO students VALUES (1, 'John');",
  },
  {
    question: "Which SQL query will update a student's name to 'Alex' where id = 1?",
    options: [
      "UPDATE students SET name = 'Alex' WHERE id = 1;",
      "MODIFY students name = 'Alex' WHERE id = 1;",
      "CHANGE students SET name = 'Alex' WHERE id = 1;",
      "SET students name = 'Alex' WHERE id = 1;"
    ],
    correct: "UPDATE students SET name = 'Alex' WHERE id = 1;",
  },
],

  sql: [
    {
      question: "What is a subquery in SQL?",
      options: ["A query stored in a variable", "A query nested inside another query", "A query that joins two tables", "A query that deletes rows"],
      correct: "A query nested inside another query",
    },
    {
      question: "What is the difference between INNER JOIN and LEFT JOIN?",
      options: ["No difference", "INNER JOIN returns only matching rows; LEFT JOIN returns all left rows plus matches", "LEFT JOIN is faster", "INNER JOIN includes NULL rows"],
      correct: "INNER JOIN returns only matching rows; LEFT JOIN returns all left rows plus matches",
    },
    {
      question: "What does the COALESCE function do in SQL?",
      options: ["Concatenates strings", "Returns the first non-NULL value from a list", "Counts non-null rows", "Rounds a number"],
      correct: "Returns the first non-NULL value from a list",
    },
  ],

  gitlab: [
    {
      question: "What is GitLab CI/CD?",
      options: ["A code editor", "A built-in continuous integration and delivery system", "A container registry", "A project wiki tool"],
      correct: "A built-in continuous integration and delivery system",
    },
    {
      question: "What is a .gitlab-ci.yml file?",
      options: ["A Docker config file", "A file that defines GitLab CI/CD pipeline stages and jobs", "A GitLab user settings file", "A merge request template"],
      correct: "A file that defines GitLab CI/CD pipeline stages and jobs",
    },
    {
      question: "What is a GitLab Runner?",
      options: ["A code reviewer", "An agent that executes CI/CD pipeline jobs", "A deployment server", "A merge conflict resolver"],
      correct: "An agent that executes CI/CD pipeline jobs",
    },
  ],

  bitbucket: [
    {
      question: "What is Bitbucket primarily used for?",
      options: ["Project management only", "Git-based source code hosting and collaboration", "Database hosting", "Continuous monitoring"],
      correct: "Git-based source code hosting and collaboration",
    },
    {
      question: "What is a Bitbucket Pipeline?",
      options: ["A branch protection rule", "An integrated CI/CD tool within Bitbucket", "A code review workflow", "A deployment environment"],
      correct: "An integrated CI/CD tool within Bitbucket",
    },
    {
      question: "How does Bitbucket differ from GitHub?",
      options: ["Bitbucket doesn't support Git", "Bitbucket has tighter Jira and Atlassian integration", "GitHub is free, Bitbucket is not", "They are identical"],
      correct: "Bitbucket has tighter Jira and Atlassian integration",
    },
  ],

  jira: [
    {
      question: "What is Jira primarily used for?",
      options: ["Code version control", "Issue tracking and project management", "Cloud infrastructure", "Database management"],
      correct: "Issue tracking and project management",
    },
    {
      question: "What is a Sprint in Jira?",
      options: ["A bug report", "A time-boxed iteration for completing a set of tasks", "A release branch", "A user story type"],
      correct: "A time-boxed iteration for completing a set of tasks",
    },
    {
      question: "What is an Epic in Jira?",
      options: ["A completed sprint", "A large body of work that contains multiple stories or tasks", "A bug priority level", "A team dashboard"],
      correct: "A large body of work that contains multiple stories or tasks",
    },
  ],

  keras: [
    {
      question: "What is Keras?",
      options: ["A data preprocessing library", "A high-level deep learning API running on top of TensorFlow", "A visualization tool", "A model deployment platform"],
      correct: "A high-level deep learning API running on top of TensorFlow",
    },
    {
      question: "What does model.compile() do in Keras?",
      options: ["Saves the model", "Configures the model for training with optimizer and loss function", "Loads weights", "Evaluates the model"],
      correct: "Configures the model for training with optimizer and loss function",
    },
    {
      question: "What is the purpose of model.fit() in Keras?",
      options: ["Predicts outputs", "Trains the model on training data", "Builds the model architecture", "Exports the model"],
      correct: "Trains the model on training data",
    },
  ],

  onnx: [
    {
      question: "What does ONNX stand for?",
      options: ["Open Neural Network Exchange", "Optimized Numeric Network Executor", "Online Neural Node Extension", "Open Numeric Network Export"],
      correct: "Open Neural Network Exchange",
    },
    {
      question: "What is the main purpose of ONNX?",
      options: ["Training models faster", "Enabling interoperability of ML models across different frameworks", "Hosting ML models", "Visualizing model architecture"],
      correct: "Enabling interoperability of ML models across different frameworks",
    },
    {
      question: "Which runtime is used to run ONNX models efficiently?",
      options: ["TensorFlow Serving", "ONNX Runtime", "TorchServe", "MLflow"],
      correct: "ONNX Runtime",
    },
  ],

  mlops: [
    {
      question: "What is MLOps?",
      options: ["A machine learning algorithm", "Practices for deploying and maintaining ML models in production", "A data labeling tool", "A neural network architecture"],
      correct: "Practices for deploying and maintaining ML models in production",
    },
    {
      question: "What is model drift in MLOps?",
      options: ["A model that trains slowly", "Degradation of model performance due to changes in input data over time", "A version control issue", "A GPU memory error"],
      correct: "Degradation of model performance due to changes in input data over time",
    },
    {
      question: "Which tool is commonly used for ML experiment tracking?",
      options: ["Jenkins", "MLflow", "Terraform", "Ansible"],
      correct: "MLflow",
    },
  ],

  matplotlib: [
    {
      question: "What is Matplotlib used for?",
      options: ["Data wrangling", "Creating static, animated, and interactive visualizations in Python", "Training ML models", "Web scraping"],
      correct: "Creating static, animated, and interactive visualizations in Python",
    },
    {
      question: "Which function creates a basic line plot in Matplotlib?",
      options: ["plt.bar()", "plt.scatter()", "plt.plot()", "plt.hist()"],
      correct: "plt.plot()",
    },
    {
      question: "What does plt.show() do in Matplotlib?",
      options: ["Saves the figure", "Displays the current figure", "Clears the plot", "Exports to PDF"],
      correct: "Displays the current figure",
    },
  ],

  seaborn: [
    {
      question: "What is Seaborn built on top of?",
      options: ["Plotly", "Bokeh", "Matplotlib", "D3.js"],
      correct: "Matplotlib",
    },
    {
      question: "What type of plot does sns.heatmap() produce?",
      options: ["A bar chart", "A color-encoded matrix visualization", "A line graph", "A scatter plot"],
      correct: "A color-encoded matrix visualization",
    },
    {
      question: "What is a pairplot in Seaborn?",
      options: ["A plot comparing two datasets", "A grid of scatter plots for all pairs of features", "A correlation bar chart", "A dual-axis line plot"],
      correct: "A grid of scatter plots for all pairs of features",
    },
  ],

  plotly: [
    {
      question: "What makes Plotly different from Matplotlib?",
      options: ["Plotly is faster", "Plotly produces interactive web-based visualizations", "Plotly works only in notebooks", "Plotly has fewer chart types"],
      correct: "Plotly produces interactive web-based visualizations",
    },
    {
      question: "What is Plotly Dash used for?",
      options: ["Styling plots", "Building analytical web applications with Python", "Creating static reports", "Exporting to Excel"],
      correct: "Building analytical web applications with Python",
    },
    {
      question: "Which function creates a bar chart in Plotly Express?",
      options: ["px.line()", "px.scatter()", "px.bar()", "px.pie()"],
      correct: "px.bar()",
    },
  ],

  opencv: [
    {
      question: "What is OpenCV used for?",
      options: ["Natural language processing", "Computer vision and image processing", "Audio synthesis", "3D rendering"],
      correct: "Computer vision and image processing",
    },
    {
      question: "What does cv2.imread() do?",
      options: ["Saves an image", "Reads an image from a file", "Captures from a webcam", "Resizes an image"],
      correct: "Reads an image from a file",
    },
    {
      question: "What color format does OpenCV use by default?",
      options: ["RGB", "HSV", "BGR", "RGBA"],
      correct: "BGR",
    },
  ],

  transformers: [
    {
      question: "What is the Transformers library by Hugging Face used for?",
      options: ["Data augmentation", "Providing pre-trained NLP and multimodal models", "GPU management", "Data visualization"],
      correct: "Providing pre-trained NLP and multimodal models",
    },
    {
      question: "What is a pipeline in the Transformers library?",
      options: ["A training loop", "A high-level API to quickly use models for tasks like classification", "A data loader", "A tokenizer"],
      correct: "A high-level API to quickly use models for tasks like classification",
    },
    {
      question: "What does AutoTokenizer do in the Transformers library?",
      options: ["Trains a new tokenizer", "Automatically loads the correct tokenizer for a given model", "Converts text to speech", "Splits datasets"],
      correct: "Automatically loads the correct tokenizer for a given model",
    },
  ],

  huggingface: [
    {
      question: "What is the Hugging Face Hub?",
      options: ["A GPU rental service", "A platform to share and discover ML models and datasets", "A cloud database", "A Python IDE"],
      correct: "A platform to share and discover ML models and datasets",
    },
    {
      question: "What is the Hugging Face Spaces feature?",
      options: ["A file storage system", "A platform to host and demo ML apps", "A model training environment", "A dataset labeling tool"],
      correct: "A platform to host and demo ML apps",
    },
    {
      question: "What does the datasets library from Hugging Face provide?",
      options: ["Pre-trained models", "Easy access to thousands of public datasets with fast loading", "A model evaluation suite", "A tokenizer builder"],
      correct: "Easy access to thousands of public datasets with fast loading",
    },
  ],

  "feature engineering": [
    {
      question: "What is feature engineering?",
      options: ["Selecting a machine learning algorithm", "Transforming raw data into meaningful input features for ML models", "Deploying ML models", "Evaluating model accuracy"],
      correct: "Transforming raw data into meaningful input features for ML models",
    },
    {
      question: "What is one-hot encoding?",
      options: ["Normalizing numerical features", "Converting categorical variables into binary columns", "Removing missing values", "Scaling features to a range"],
      correct: "Converting categorical variables into binary columns",
    },
    {
      question: "What is feature scaling?",
      options: ["Adding more features", "Adjusting the range of feature values for better model performance", "Removing low-variance features", "Encoding text features"],
      correct: "Adjusting the range of feature values for better model performance",
    },
  ],

  "data visualization": [
    {
      question: "What is the main goal of data visualization?",
      options: ["Training models", "Communicating insights from data using visual representations", "Storing data efficiently", "Preprocessing data"],
      correct: "Communicating insights from data using visual representations",
    },
    {
      question: "Which chart type is best for showing trends over time?",
      options: ["Pie chart", "Bar chart", "Line chart", "Scatter plot"],
      correct: "Line chart",
    },
    {
      question: "What is a histogram used for?",
      options: ["Showing relationships between two variables", "Displaying the distribution of a numerical variable", "Comparing categories", "Tracking changes over time"],
      correct: "Displaying the distribution of a numerical variable",
    },
  ],

  statistics: [
    {
      question: "What is the difference between mean and median?",
      options: ["No difference", "Mean is the average; median is the middle value", "Median is the average; mean is the middle value", "Mean applies only to categorical data"],
      correct: "Mean is the average; median is the middle value",
    },
    {
      question: "What does standard deviation measure?",
      options: ["Central tendency", "The spread or dispersion of data around the mean", "The highest value in a dataset", "The correlation between two variables"],
      correct: "The spread or dispersion of data around the mean",
    },
    {
      question: "What is a p-value in hypothesis testing?",
      options: ["The probability the null hypothesis is true", "The probability of observing results at least as extreme, assuming the null hypothesis", "The sample size needed", "The confidence interval width"],
      correct: "The probability of observing results at least as extreme, assuming the null hypothesis",
    },
  ],

  "data wrangling": [
    {
      question: "What is data wrangling?",
      options: ["Training ML models", "Cleaning and transforming raw data into a usable format", "Visualizing data", "Deploying data pipelines"],
      correct: "Cleaning and transforming raw data into a usable format",
    },
    {
      question: "What is data imputation?",
      options: ["Removing duplicate rows", "Filling in missing values with estimated data", "Normalizing columns", "Merging datasets"],
      correct: "Filling in missing values with estimated data",
    },
    {
      question: "What does reshaping data mean in data wrangling?",
      options: ["Changing column data types", "Converting data between wide and long formats", "Removing outliers", "Scaling numerical values"],
      correct: "Converting data between wide and long formats",
    },
  ],

  "big data": [
    {
      question: "What are the 3 Vs of big data?",
      options: ["Volume, Velocity, Variety", "Value, Validity, Volume", "Velocity, Visibility, Value", "Volume, Visibility, Validity"],
      correct: "Volume, Velocity, Variety",
    },
    {
      question: "What is a distributed computing system in big data?",
      options: ["A single high-powered server", "Multiple computers working together to process large datasets", "A GPU cluster", "A cloud storage service"],
      correct: "Multiple computers working together to process large datasets",
    },
    {
      question: "Which file format is commonly used in big data pipelines?",
      options: ["CSV", "Parquet", "XLSX", "TXT"],
      correct: "Parquet",
    },
  ],

  spark: [
    {
      question: "What is Apache Spark?",
      options: ["A NoSQL database", "A fast distributed data processing engine", "A message broker", "A container runtime"],
      correct: "A fast distributed data processing engine",
    },
    {
      question: "What is an RDD in Apache Spark?",
      options: ["Relational Data Definition", "Resilient Distributed Dataset — Spark's core data abstraction", "Remote Data Driver", "Replicated Data Directory"],
      correct: "Resilient Distributed Dataset — Spark's core data abstraction",
    },
    {
      question: "What is Spark Streaming used for?",
      options: ["Batch data processing", "Real-time processing of data streams", "Storing large datasets", "Visualizing data"],
      correct: "Real-time processing of data streams",
    },
  ],

  hadoop: [
    {
      question: "What is Apache Hadoop?",
      options: ["A real-time stream processor", "A framework for distributed storage and processing of large datasets", "A NoSQL database", "A CI/CD platform"],
      correct: "A framework for distributed storage and processing of large datasets",
    },
    {
      question: "What is HDFS in Hadoop?",
      options: ["Hadoop Data Flow System", "Hadoop Distributed File System for storing large files across clusters", "High Definition File Service", "Hadoop Deployment Framework Spec"],
      correct: "Hadoop Distributed File System for storing large files across clusters",
    },
    {
      question: "What is MapReduce in Hadoop?",
      options: ["A query language", "A programming model for processing large data sets in parallel", "A storage format", "A monitoring tool"],
      correct: "A programming model for processing large data sets in parallel",
    },
  ],

  ros: [
    {
      question: "What does ROS stand for?",
      options: ["Robotic Operating Shell", "Robot Operating System", "Remote Object System", "Real-time OS for Sensors"],
      correct: "Robot Operating System",
    },
    {
      question: "What is a ROS topic?",
      options: ["A configuration file", "A named bus for nodes to publish and subscribe to messages", "A robot joint", "A launch file parameter"],
      correct: "A named bus for nodes to publish and subscribe to messages",
    },
    {
      question: "What is a ROS node?",
      options: ["A network router", "A process that performs computation in a ROS system", "A hardware sensor", "A simulation environment"],
      correct: "A process that performs computation in a ROS system",
    },
  ],

  "robot operating systems": [
    {
      question: "What is the purpose of roslaunch?",
      options: ["To compile ROS packages", "To start multiple ROS nodes simultaneously from a single file", "To simulate robot environments", "To install ROS dependencies"],
      correct: "To start multiple ROS nodes simultaneously from a single file",
    },
    {
      question: "What is a ROS service?",
      options: ["A background OS process", "A request-response communication mechanism between nodes", "A sensor interface", "A robot controller"],
      correct: "A request-response communication mechanism between nodes",
    },
    {
      question: "What is catkin in ROS?",
      options: ["A robot kinematics library", "The official build system for ROS packages", "A sensor driver", "A simulation plugin"],
      correct: "The official build system for ROS packages",
    },
  ],

  sensors: [
    {
      question: "What is a sensor in robotics and IoT?",
      options: ["A processing unit", "A device that detects physical input and converts it to data", "A power supply unit", "A communication protocol"],
      correct: "A device that detects physical input and converts it to data",
    },
    {
      question: "What does an IMU sensor measure?",
      options: ["Temperature", "Acceleration and rotational rate", "Distance", "Humidity"],
      correct: "Acceleration and rotational rate",
    },
    {
      question: "What is sensor fusion?",
      options: ["Combining multiple sensors into one device", "Integrating data from multiple sensors to improve accuracy", "Calibrating a single sensor", "Replacing a faulty sensor"],
      correct: "Integrating data from multiple sensors to improve accuracy",
    },
  ],

  actuators: [
    {
      question: "What is an actuator?",
      options: ["A device that reads data", "A device that converts energy into physical motion or action", "A communication module", "A data storage unit"],
      correct: "A device that converts energy into physical motion or action",
    },
    {
      question: "Which of the following is an example of an actuator?",
      options: ["Thermometer", "Camera", "Servo motor", "GPS module"],
      correct: "Servo motor",
    },
    {
      question: "What is the difference between a sensor and an actuator?",
      options: ["No difference", "Sensors detect input; actuators produce output/action", "Actuators detect input; sensors produce output", "Both only detect input"],
      correct: "Sensors detect input; actuators produce output/action",
    },
  ],

  "path planning": [
    {
      question: "What is path planning in robotics?",
      options: ["Designing robot hardware", "Computing a collision-free path for a robot to reach a goal", "Calibrating sensors", "Programming robot joints"],
      correct: "Computing a collision-free path for a robot to reach a goal",
    },
    {
      question: "What is the A* algorithm used for in path planning?",
      options: ["Training neural networks", "Finding the shortest path in a graph", "Detecting obstacles", "Simulating robot motion"],
      correct: "Finding the shortest path in a graph",
    },
    {
      question: "What is a configuration space in path planning?",
      options: ["A robot's hardware settings", "A space representing all possible robot configurations", "A map of the environment", "A waypoint list"],
      correct: "A space representing all possible robot configurations",
    },
  ],

  "robot kinematics": [
    {
      question: "What is forward kinematics in robotics?",
      options: ["Computing joint angles from end-effector position", "Computing end-effector position from joint angles", "Path planning for robots", "Calibrating robot sensors"],
      correct: "Computing end-effector position from joint angles",
    },
    {
      question: "What is inverse kinematics?",
      options: ["Computing joint angles to achieve a desired end-effector position", "Computing velocity of robot joints", "Mapping the robot's environment", "Detecting collisions"],
      correct: "Computing joint angles to achieve a desired end-effector position",
    },
    {
      question: "What is a Denavit-Hartenberg (DH) parameter?",
      options: ["A sensor calibration value", "A standard convention to define robot joint-link relationships", "A path planning algorithm", "A collision detection method"],
      correct: "A standard convention to define robot joint-link relationships",
    },
  ],

  simulation: [
    {
      question: "What is the purpose of simulation in robotics?",
      options: ["To replace real sensors", "To test algorithms and robot behavior in a virtual environment before deployment", "To increase hardware speed", "To train sensors"],
      correct: "To test algorithms and robot behavior in a virtual environment before deployment",
    },
    {
      question: "What is a physics engine in simulation?",
      options: ["A GPU accelerator", "Software that simulates physical interactions like gravity and collisions", "A rendering library", "A motion planning tool"],
      correct: "Software that simulates physical interactions like gravity and collisions",
    },
    {
      question: "Which simulation tool is commonly used with ROS?",
      options: ["Unity", "Unreal Engine", "Gazebo", "Blender"],
      correct: "Gazebo",
    },
  ],

  gazebo: [
    {
      question: "What is Gazebo used for?",
      options: ["3D game development", "Simulating robots and environments for testing", "CAD modeling", "Data visualization"],
      correct: "Simulating robots and environments for testing",
    },
    {
      question: "What is a Gazebo plugin?",
      options: ["A GUI extension", "A module that adds custom behavior to simulated robots or environments", "A sensor driver", "A ROS bridge"],
      correct: "A module that adds custom behavior to simulated robots or environments",
    },
    {
      question: "How does Gazebo integrate with ROS?",
      options: ["They are unrelated", "Through ros_control and gazebo_ros packages that bridge simulation and ROS", "Via a REST API", "Through shared configuration files"],
      correct: "Through ros_control and gazebo_ros packages that bridge simulation and ROS",
    },
  ],

  gan: [
    {
      question: "What does GAN stand for?",
      options: ["Graph Attention Network", "Generative Adversarial Network", "Gradient Accumulation Node", "Global Attention Normalization"],
      correct: "Generative Adversarial Network",
    },
    {
      question: "What are the two main components of a GAN?",
      options: ["Encoder and Decoder", "Generator and Discriminator", "Actor and Critic", "Classifier and Regressor"],
      correct: "Generator and Discriminator",
    },
    {
      question: "What is mode collapse in GANs?",
      options: ["When the discriminator fails", "When the generator produces limited variety of outputs", "When training loss explodes", "When the model overfits"],
      correct: "When the generator produces limited variety of outputs",
    },
  ],

  autoencoders: [
    {
      question: "What is an autoencoder?",
      options: ["A supervised classification model", "A neural network that learns to compress and reconstruct data", "A reinforcement learning agent", "A decision tree variant"],
      correct: "A neural network that learns to compress and reconstruct data",
    },
    {
      question: "What is the bottleneck in an autoencoder?",
      options: ["A performance issue", "The compressed latent representation of input data", "The output layer", "The loss function"],
      correct: "The compressed latent representation of input data",
    },
    {
      question: "What is a Variational Autoencoder (VAE) used for?",
      options: ["Classification tasks", "Generating new data by sampling from a learned latent distribution", "Object detection", "Time-series forecasting"],
      correct: "Generating new data by sampling from a learned latent distribution",
    },
  ],

  nltk: [
    {
      question: "What does NLTK stand for?",
      options: ["Natural Language Training Kit", "Natural Language Toolkit", "Neural Language Text Kit", "Numeric Language Toolkit"],
      correct: "Natural Language Toolkit",
    },
    {
      question: "What is tokenization in NLTK?",
      options: ["Encrypting text", "Splitting text into individual words or sentences", "Translating text", "Removing numbers from text"],
      correct: "Splitting text into individual words or sentences",
    },
    {
      question: "What is stemming in NLTK?",
      options: ["Converting text to lowercase", "Reducing words to their root form", "Removing stop words", "Tagging parts of speech"],
      correct: "Reducing words to their root form",
    },
  ],

  spacy: [
    {
      question: "What is spaCy used for?",
      options: ["Image classification", "Industrial-strength natural language processing", "Database querying", "Web scraping"],
      correct: "Industrial-strength natural language processing",
    },
    {
      question: "What is Named Entity Recognition (NER) in spaCy?",
      options: ["Classifying sentence sentiment", "Identifying and classifying named entities like persons and locations in text", "Parsing syntax trees", "Tokenizing text"],
      correct: "Identifying and classifying named entities like persons and locations in text",
    },
    {
      question: "What is a Doc object in spaCy?",
      options: ["A file reader", "A container for a processed text sequence with tokens and annotations", "A dataset format", "A model configuration"],
      correct: "A container for a processed text sequence with tokens and annotations",
    },
  ],

  "text preprocessing": [
    {
      question: "What is stop word removal in text preprocessing?",
      options: ["Removing punctuation", "Filtering out common words that carry little meaning like 'the' or 'is'", "Lowercasing text", "Stemming words"],
      correct: "Filtering out common words that carry little meaning like 'the' or 'is'",
    },
    {
      question: "What is TF-IDF?",
      options: ["A neural network layer", "A statistic that reflects how important a word is in a document relative to a corpus", "A tokenization method", "A sentence embedding model"],
      correct: "A statistic that reflects how important a word is in a document relative to a corpus",
    },
    {
      question: "What is lemmatization?",
      options: ["Splitting sentences into tokens", "Reducing words to their base dictionary form", "Removing numbers from text", "Encoding text as vectors"],
      correct: "Reducing words to their base dictionary form",
    },
  ],

  chatbots: [
    {
      question: "What is a rule-based chatbot?",
      options: ["A chatbot that learns from user data", "A chatbot that follows predefined rules and decision trees", "A chatbot using neural networks", "A chatbot with voice recognition"],
      correct: "A chatbot that follows predefined rules and decision trees",
    },
    {
      question: "What is intent recognition in chatbots?",
      options: ["Detecting user emotions", "Identifying the purpose or goal behind a user's message", "Generating responses", "Managing chat history"],
      correct: "Identifying the purpose or goal behind a user's message",
    },
    {
      question: "What is dialogue management in chatbots?",
      options: ["Storing chat logs", "Controlling the flow of conversation to achieve a goal", "Translating messages", "Styling chat interfaces"],
      correct: "Controlling the flow of conversation to achieve a goal",
    },
  ],

  seq2seq: [
    {
      question: "What is a Seq2Seq model?",
      options: ["A model for image classification", "A model that maps an input sequence to an output sequence", "A reinforcement learning policy", "A recommendation engine"],
      correct: "A model that maps an input sequence to an output sequence",
    },
    {
      question: "What is the encoder's role in Seq2Seq?",
      options: ["Generating the output sequence", "Compressing the input sequence into a context vector", "Applying attention weights", "Decoding the final output"],
      correct: "Compressing the input sequence into a context vector",
    },
    {
      question: "What is attention mechanism in Seq2Seq models?",
      options: ["A dropout technique", "Allowing the decoder to focus on relevant parts of the input sequence", "A regularization method", "A positional encoding scheme"],
      correct: "Allowing the decoder to focus on relevant parts of the input sequence",
    },
  ],

  "language modeling": [
    {
      question: "What is a language model?",
      options: ["A grammar correction tool", "A model that predicts the probability of a sequence of words", "A text-to-speech engine", "A translation system"],
      correct: "A model that predicts the probability of a sequence of words",
    },
    {
      question: "What is perplexity in language modeling?",
      options: ["A measure of model size", "A metric evaluating how well a model predicts a sample", "The vocabulary size", "The training loss"],
      correct: "A metric evaluating how well a model predicts a sample",
    },
    {
      question: "What is n-gram language modeling?",
      options: ["Word embedding technique", "Predicting the next word based on the previous n-1 words", "A recurrent architecture", "A transformer variant"],
      correct: "Predicting the next word based on the previous n-1 words",
    },
  ],

  yolo: [
    {
      question: "What does YOLO stand for?",
      options: ["You Only Learn Once", "You Only Look Once", "Your Optimized Learning Output", "Your Object Localization Output"],
      correct: "You Only Look Once",
    },
    {
      question: "What makes YOLO faster than traditional detection methods?",
      options: ["It uses more layers", "It processes the entire image in a single forward pass", "It skips bounding box regression", "It uses smaller images"],
      correct: "It processes the entire image in a single forward pass",
    },
    {
      question: "What does YOLO predict for each grid cell?",
      options: ["Only class labels", "Bounding boxes, confidence scores, and class probabilities", "Only object size", "Feature maps"],
      correct: "Bounding boxes, confidence scores, and class probabilities",
    },
  ],

  "mask r-cnn": [
    {
      question: "What is Mask R-CNN used for?",
      options: ["Text recognition", "Instance segmentation — detecting objects and generating pixel-level masks", "Image classification only", "Video generation"],
      correct: "Instance segmentation — detecting objects and generating pixel-level masks",
    },
    {
      question: "How does Mask R-CNN extend Faster R-CNN?",
      options: ["By adding a faster backbone", "By adding a parallel branch for predicting segmentation masks", "By removing the RPN", "By using a single-stage detector"],
      correct: "By adding a parallel branch for predicting segmentation masks",
    },
    {
      question: "What is RoI Align in Mask R-CNN?",
      options: ["A loss function", "A technique to accurately extract features for each region of interest", "A data augmentation step", "A bounding box regressor"],
      correct: "A technique to accurately extract features for each region of interest",
    },
  ],

  "image segmentation": [
    {
      question: "What is image segmentation?",
      options: ["Classifying an entire image", "Partitioning an image into segments or regions at the pixel level", "Detecting edges only", "Reducing image resolution"],
      correct: "Partitioning an image into segments or regions at the pixel level",
    },
    {
      question: "What is the difference between semantic and instance segmentation?",
      options: ["No difference", "Semantic assigns class labels per pixel; instance differentiates individual objects", "Instance is faster than semantic", "Semantic works only on grayscale images"],
      correct: "Semantic assigns class labels per pixel; instance differentiates individual objects",
    },
    {
      question: "What architecture is commonly used for semantic segmentation?",
      options: ["VGG", "U-Net", "AlexNet", "ResNet only"],
      correct: "U-Net",
    },
  ],

  arduino: [
    {
      question: "What is Arduino?",
      options: ["A programming language", "An open-source electronics platform with hardware and software", "A cloud service", "A robotics simulation tool"],
      correct: "An open-source electronics platform with hardware and software",
    },
    {
      question: "What language is used to program Arduino?",
      options: ["Python", "Java", "A C/C++ based language", "JavaScript"],
      correct: "A C/C++ based language",
    },
    {
      question: "What is the purpose of the loop() function in Arduino?",
      options: ["Initializes the board", "Runs repeatedly to execute main program logic", "Handles interrupts", "Manages memory"],
      correct: "Runs repeatedly to execute main program logic",
    },
  ],

  "raspberry pi": [
    {
      question: "What is Raspberry Pi?",
      options: ["A microcontroller chip", "A small, affordable single-board computer", "A cloud computing service", "A robotics simulation platform"],
      correct: "A small, affordable single-board computer",
    },
    {
      question: "What operating system is commonly used on Raspberry Pi?",
      options: ["Windows 10", "Raspberry Pi OS (formerly Raspbian)", "Ubuntu Server", "Android"],
      correct: "Raspberry Pi OS (formerly Raspbian)",
    },
    {
      question: "What is GPIO on Raspberry Pi?",
      options: ["A display port", "General Purpose Input/Output pins for interfacing with hardware", "A Wi-Fi antenna", "A graphics chip"],
      correct: "General Purpose Input/Output pins for interfacing with hardware",
    },
  ],

  mqtt: [
    {
      question: "What is MQTT?",
      options: ["A database query language", "A lightweight publish-subscribe messaging protocol for IoT", "A security protocol", "A file transfer protocol"],
      correct: "A lightweight publish-subscribe messaging protocol for IoT",
    },
    {
      question: "What is a broker in MQTT?",
      options: ["A data storage node", "A server that routes messages between publishers and subscribers", "A sensor gateway", "An authentication server"],
      correct: "A server that routes messages between publishers and subscribers",
    },
    {
      question: "What does QoS mean in MQTT?",
      options: ["Queue of Services", "Quality of Service — defines message delivery guarantee levels", "Query of Streams", "Queue of Signals"],
      correct: "Quality of Service — defines message delivery guarantee levels",
    },
  ],

  "sensor networks": [
    {
      question: "What is a Wireless Sensor Network (WSN)?",
      options: ["A wired industrial network", "A network of spatially distributed sensors communicating wirelessly", "A cloud monitoring system", "A GPS tracking network"],
      correct: "A network of spatially distributed sensors communicating wirelessly",
    },
    {
      question: "What is a sink node in a sensor network?",
      options: ["A failed sensor", "A central node that collects data from all sensor nodes", "An energy harvesting node", "A relay-only node"],
      correct: "A central node that collects data from all sensor nodes",
    },
    {
      question: "What is energy harvesting in sensor networks?",
      options: ["Reducing sensor power", "Capturing energy from the environment to power sensors", "Disabling idle sensors", "Compressing sensor data"],
      correct: "Capturing energy from the environment to power sensors",
    },
  ],

  "edge computing": [
    {
      question: "What is edge computing?",
      options: ["Processing data in a central cloud", "Processing data closer to the source rather than a remote data center", "A network topology", "A type of database"],
      correct: "Processing data closer to the source rather than a remote data center",
    },
    {
      question: "What is the main advantage of edge computing over cloud computing?",
      options: ["Higher storage capacity", "Reduced latency by processing data locally", "Lower hardware cost", "Better scalability"],
      correct: "Reduced latency by processing data locally",
    },
    {
      question: "Which of the following is an example of an edge device?",
      options: ["AWS Lambda function", "A smart camera that analyzes video locally", "A data warehouse", "A Kubernetes cluster"],
      correct: "A smart camera that analyzes video locally",
    },
  ],

  "cloud ai services": [
    {
      question: "What are Cloud AI services?",
      options: ["On-premise ML frameworks", "Pre-built AI capabilities offered via cloud APIs", "GPU rental services only", "Edge ML platforms"],
      correct: "Pre-built AI capabilities offered via cloud APIs",
    },
    {
      question: "Which of these is a Cloud AI service from Google?",
      options: ["Azure Cognitive Services", "AWS Rekognition", "Google Cloud Vision API", "IBM Watson"],
      correct: "Google Cloud Vision API",
    },
    {
      question: "What is AutoML in cloud AI services?",
      options: ["An automated CI/CD tool", "A service that automates training of ML models without deep ML expertise", "A model deployment monitor", "A feature engineering pipeline"],
      correct: "A service that automates training of ML models without deep ML expertise",
    },
  ],

  qiskit: [
    {
      question: "What is Qiskit?",
      options: ["A Python web framework", "An open-source SDK for quantum computing by IBM", "A cloud storage service", "A neural network library"],
      correct: "An open-source SDK for quantum computing by IBM",
    },
    {
      question: "What is a quantum circuit in Qiskit?",
      options: ["A classical logic circuit", "A sequence of quantum gates applied to qubits", "A neural network layer", "A data pipeline"],
      correct: "A sequence of quantum gates applied to qubits",
    },
    {
      question: "What is a qubit?",
      options: ["A classical binary bit", "The basic unit of quantum information that can exist in superposition", "A quantum memory chip", "A type of quantum sensor"],
      correct: "The basic unit of quantum information that can exist in superposition",
    },
  ],

  "quantum algorithms": [
    {
      question: "What is Shor's algorithm used for?",
      options: ["Searching unsorted databases", "Factoring large integers exponentially faster than classical computers", "Simulating quantum systems", "Solving optimization problems"],
      correct: "Factoring large integers exponentially faster than classical computers",
    },
    {
      question: "What is Grover's algorithm known for?",
      options: ["Quantum encryption", "Providing quadratic speedup for searching unsorted databases", "Simulating molecular chemistry", "Integer factorization"],
      correct: "Providing quadratic speedup for searching unsorted databases",
    },
    {
      question: "What is quantum speedup?",
      options: ["Faster hardware processors", "The advantage quantum algorithms have over classical algorithms for certain problems", "Overclocking a quantum processor", "Parallel classical computing"],
      correct: "The advantage quantum algorithms have over classical algorithms for certain problems",
    },
  ],

  "quantum simulation": [
    {
      question: "What is quantum simulation?",
      options: ["Simulating quantum hardware in software", "Using quantum computers to simulate complex quantum systems like molecules", "A classical approximation of quantum behavior", "Testing quantum gates"],
      correct: "Using quantum computers to simulate complex quantum systems like molecules",
    },
    {
      question: "Why is quantum simulation important for chemistry?",
      options: ["It speeds up classical chemistry calculations", "It can accurately model molecular interactions that are intractable for classical computers", "It replaces laboratory experiments", "It encrypts chemical data"],
      correct: "It can accurately model molecular interactions that are intractable for classical computers",
    },
    {
      question: "Which IBM tool is commonly used for quantum simulation experiments?",
      options: ["TensorFlow Quantum", "Qiskit", "PennyLane", "Cirq"],
      correct: "Qiskit",
    },
  ],

  "quantum gates": [
    {
      question: "What is a quantum gate?",
      options: ["A physical barrier in a quantum chip", "A basic operation that manipulates qubits, analogous to classical logic gates", "A measurement device", "A data bus in quantum hardware"],
      correct: "A basic operation that manipulates qubits, analogous to classical logic gates",
    },
    {
      question: "What does the Hadamard gate do?",
      options: ["Flips a qubit", "Creates a superposition by putting a qubit in an equal mix of 0 and 1", "Entangles two qubits", "Measures a qubit"],
      correct: "Creates a superposition by putting a qubit in an equal mix of 0 and 1",
    },
    {
      question: "What is the CNOT gate used for?",
      options: ["Creating superposition", "A two-qubit gate that flips the target qubit based on the control qubit", "Measuring qubit state", "Resetting a qubit to zero"],
      correct: "A two-qubit gate that flips the target qubit based on the control qubit",
    },
  ],

  entanglement: [
    {
      question: "What is quantum entanglement?",
      options: ["Interference between qubits", "A phenomenon where qubits share correlated states regardless of distance", "A quantum error type", "A superposition collapse"],
      correct: "A phenomenon where qubits share correlated states regardless of distance",
    },
    {
      question: "What is a Bell state?",
      options: ["A qubit error state", "A maximally entangled two-qubit state", "A single qubit superposition", "A measurement outcome"],
      correct: "A maximally entangled two-qubit state",
    },
    {
      question: "How is entanglement useful in quantum computing?",
      options: ["It speeds up classical algorithms", "It enables correlations that allow quantum parallelism and protocols like teleportation", "It reduces qubit noise", "It increases qubit count"],
      correct: "It enables correlations that allow quantum parallelism and protocols like teleportation",
    },
  ],

  "q-learning": [
    {
      question: "What is Q-learning?",
      options: ["A supervised learning algorithm", "A model-free reinforcement learning algorithm that learns action values", "A clustering technique", "A neural architecture search method"],
      correct: "A model-free reinforcement learning algorithm that learns action values",
    },
    {
      question: "What does the Q-value represent in Q-learning?",
      options: ["The quality of the model", "The expected cumulative reward for taking an action in a given state", "The learning rate", "The discount factor"],
      correct: "The expected cumulative reward for taking an action in a given state",
    },
    {
      question: "What is the Bellman equation used for in Q-learning?",
      options: ["Initializing weights", "Updating Q-values by relating current and future rewards", "Computing gradients", "Selecting hyperparameters"],
      correct: "Updating Q-values by relating current and future rewards",
    },
  ],

  "policy gradient": [
    {
      question: "What is a policy gradient method in reinforcement learning?",
      options: ["A value-based method", "A method that directly optimizes the policy by following the gradient of expected reward", "A supervised learning technique", "A Monte Carlo tree search"],
      correct: "A method that directly optimizes the policy by following the gradient of expected reward",
    },
    {
      question: "What is the REINFORCE algorithm?",
      options: ["A deep Q-learning variant", "A Monte Carlo policy gradient algorithm", "A model-based RL method", "A multi-agent RL algorithm"],
      correct: "A Monte Carlo policy gradient algorithm",
    },
    {
      question: "What is an advantage function in policy gradient methods?",
      options: ["A baseline reward", "A measure of how much better an action is compared to the average action in a state", "The total discounted reward", "The entropy of the policy"],
      correct: "A measure of how much better an action is compared to the average action in a state",
    },
  ],

  gym: [
    {
      question: "What is OpenAI Gym?",
      options: ["A fitness tracking app", "A toolkit providing environments for developing and testing RL algorithms", "A neural network library", "A cloud platform for ML"],
      correct: "A toolkit providing environments for developing and testing RL algorithms",
    },
    {
      question: "What does env.step() do in OpenAI Gym?",
      options: ["Resets the environment", "Takes an action and returns observation, reward, done, and info", "Renders the environment", "Initializes the agent"],
      correct: "Takes an action and returns observation, reward, done, and info",
    },
    {
      question: "What does env.reset() do in OpenAI Gym?",
      options: ["Ends the episode", "Resets the environment to its initial state and returns the first observation", "Saves the current state", "Loads a pre-trained agent"],
      correct: "Resets the environment to its initial state and returns the first observation",
    },
  ],

  "diffusion models": [
    {
      question: "What are diffusion models in generative AI?",
      options: ["Models that spread data across nodes", "Models that generate data by learning to reverse a gradual noising process", "Models that compress images", "Models that classify text"],
      correct: "Models that generate data by learning to reverse a gradual noising process",
    },
    {
      question: "What is the forward process in a diffusion model?",
      options: ["Generating clean images", "Gradually adding noise to data until it becomes pure noise", "Training the discriminator", "Decoding latent vectors"],
      correct: "Gradually adding noise to data until it becomes pure noise",
    },
    {
      question: "What is Stable Diffusion?",
      options: ["A stable version of GAN", "A latent diffusion model for high-quality image generation", "A text classification model", "A video synthesis tool"],
      correct: "A latent diffusion model for high-quality image generation",
    },
  ],

  vae: [
    {
      question: "What does VAE stand for?",
      options: ["Variable Autoencoder Extension", "Variational Autoencoder", "Vector Attention Encoder", "Validated Autoencoding Engine"],
      correct: "Variational Autoencoder",
    },
    {
      question: "What is the latent space in a VAE?",
      options: ["A hidden database layer", "A compressed probabilistic representation of input data", "The output layer of the model", "A feature selection step"],
      correct: "A compressed probabilistic representation of input data",
    },
    {
      question: "How does a VAE differ from a standard autoencoder?",
      options: ["No difference", "VAE learns a distribution in latent space enabling data generation, not just compression", "VAE has no encoder", "VAE uses supervised learning"],
      correct: "VAE learns a distribution in latent space enabling data generation, not just compression",
    },
  ],

  openai: [
    {
      question: "What is OpenAI?",
      options: ["An open-source framework", "An AI safety company that develops and researches AI systems including GPT and DALL-E", "A cloud hosting provider", "A data labeling platform"],
      correct: "An AI safety company that develops and researches AI systems including GPT and DALL-E",
    },
    {
      question: "What is GPT in the context of OpenAI?",
      options: ["General Processing Toolkit", "Generative Pre-trained Transformer — a large language model family", "Graphic Processing Tool", "Global Parameter Tuner"],
      correct: "Generative Pre-trained Transformer — a large language model family",
    },
    {
      question: "What is the OpenAI API used for?",
      options: ["Training custom hardware", "Accessing OpenAI models like GPT and DALL-E via HTTP requests", "Managing cloud infrastructure", "Data labeling"],
      correct: "Accessing OpenAI models like GPT and DALL-E via HTTP requests",
    },
  ],

  unity: [
    {
      question: "What is Unity primarily used for?",
      options: ["Web development", "Game development and interactive 3D/2D experiences", "Database management", "CI/CD automation"],
      correct: "Game development and interactive 3D/2D experiences",
    },
    {
      question: "What scripting language does Unity use?",
      options: ["Python", "Java", "C#", "Lua"],
      correct: "C#",
    },
    {
      question: "What is the Unity Asset Store?",
      options: ["A cloud rendering service", "A marketplace for assets, tools, and plugins for Unity projects", "A version control system", "A game publishing platform"],
      correct: "A marketplace for assets, tools, and plugins for Unity projects",
    },
  ],

  "unreal engine": [
    {
      question: "What is Unreal Engine known for?",
      options: ["Mobile app development", "High-fidelity 3D graphics for games, film, and simulations", "Data analytics", "Backend web services"],
      correct: "High-fidelity 3D graphics for games, film, and simulations",
    },
    {
      question: "What is Blueprints in Unreal Engine?",
      options: ["A project planning tool", "A visual scripting system for creating game logic without writing code", "A shader editor", "An asset import pipeline"],
      correct: "A visual scripting system for creating game logic without writing code",
    },
    {
      question: "What is Lumen in Unreal Engine 5?",
      options: ["A scripting API", "A fully dynamic global illumination and reflections system", "A physics engine", "A multiplayer framework"],
      correct: "A fully dynamic global illumination and reflections system",
    },
  ],

  vr: [
    {
      question: "What is Virtual Reality (VR)?",
      options: ["An augmented overlay on the real world", "A fully immersive simulated environment experienced through a headset", "A 2D video experience", "A cloud gaming service"],
      correct: "A fully immersive simulated environment experienced through a headset",
    },
    {
      question: "What is 6DoF in VR?",
      options: ["Six Degrees of Freedom — tracking both rotation and position in 3D space", "Six Display Output Formats", "Six Depth of Field levels", "Six Device Output Features"],
      correct: "Six Degrees of Freedom — tracking both rotation and position in 3D space",
    },
    {
      question: "What causes motion sickness in VR?",
      options: ["High resolution displays", "Mismatch between visual motion and physical motion sensed by the body", "Too many polygons", "Loud audio"],
      correct: "Mismatch between visual motion and physical motion sensed by the body",
    },
  ],

  ar: [
    {
      question: "What is Augmented Reality (AR)?",
      options: ["A fully virtual environment", "An overlay of digital content onto the real world", "A VR variant", "A 3D modeling technique"],
      correct: "An overlay of digital content onto the real world",
    },
    {
      question: "Which Apple framework is used for building AR apps?",
      options: ["RealityKit only", "ARKit", "SceneKit only", "SpriteKit"],
      correct: "ARKit",
    },
    {
      question: "What is marker-based AR?",
      options: ["AR that uses GPS positioning", "AR triggered by recognizing specific visual markers in the real world", "AR without a camera", "AR with voice control"],
      correct: "AR triggered by recognizing specific visual markers in the real world",
    },
  ],

  "3d modeling": [
    {
      question: "What is 3D modeling?",
      options: ["Rendering 2D images", "Creating a mathematical representation of a three-dimensional object", "Writing shaders", "Animating sprites"],
      correct: "Creating a mathematical representation of a three-dimensional object",
    },
    {
      question: "What is polygon mesh in 3D modeling?",
      options: ["A texture map", "A collection of vertices, edges, and faces defining a 3D shape", "A rigging system", "A light map"],
      correct: "A collection of vertices, edges, and faces defining a 3D shape",
    },
    {
      question: "What is UV unwrapping in 3D modeling?",
      options: ["Removing duplicate vertices", "Projecting a 3D mesh surface into 2D for texture mapping", "Adding bones to a model", "Baking lighting into a mesh"],
      correct: "Projecting a 3D mesh surface into 2D for texture mapping",
    },
  ],

  "motion capture": [
    {
      question: "What is motion capture (mocap)?",
      options: ["Capturing screenshots of animations", "Recording real-world movements and transferring them to digital characters", "Rendering 3D animations", "Tracking camera movements only"],
      correct: "Recording real-world movements and transferring them to digital characters",
    },
    {
      question: "What is the difference between optical and inertial mocap?",
      options: ["No difference", "Optical uses cameras and markers; inertial uses body-worn sensors", "Inertial requires more cameras", "Optical works indoors only"],
      correct: "Optical uses cameras and markers; inertial uses body-worn sensors",
    },
    {
      question: "What is retargeting in motion capture?",
      options: ["Re-recording a performance", "Applying captured motion data from one skeleton to another", "Cleaning up noisy motion data", "Exporting animation to a game engine"],
      correct: "Applying captured motion data from one skeleton to another",
    },
  ],

  "shader programming": [
    {
      question: "What is a shader?",
      options: ["A texture file", "A program that runs on the GPU to determine pixel or vertex appearance", "A 3D mesh modifier", "A physics script"],
      correct: "A program that runs on the GPU to determine pixel or vertex appearance",
    },
    {
      question: "What is the difference between vertex and fragment shaders?",
      options: ["No difference", "Vertex shaders process geometry; fragment shaders determine pixel colors", "Fragment shaders run on CPU", "Vertex shaders only handle lighting"],
      correct: "Vertex shaders process geometry; fragment shaders determine pixel colors",
    },
    {
      question: "What language is commonly used for shader programming in OpenGL?",
      options: ["Python", "GLSL (OpenGL Shading Language)", "C#", "Lua"],
      correct: "GLSL (OpenGL Shading Language)",
    },
  ],

  android: [
    {
      question: "What language is primarily used for Android development?",
      options: ["Swift", "Dart", "Kotlin", "Ruby"],
      correct: "Kotlin",
    },
    {
      question: "What is an Activity in Android?",
      options: ["A background service", "A single screen with a user interface", "A database helper class", "A network request handler"],
      correct: "A single screen with a user interface",
    },
    {
      question: "What is the AndroidManifest.xml file?",
      options: ["A Gradle config file", "A file that declares app components, permissions, and metadata", "A layout resource file", "A dependency list"],
      correct: "A file that declares app components, permissions, and metadata",
    },
  ],

  ios: [
    {
      question: "What language is primarily used for iOS development?",
      options: ["Kotlin", "Dart", "Swift", "Java"],
      correct: "Swift",
    },
    {
      question: "What is Xcode?",
      options: ["An Android IDE", "Apple's official IDE for iOS and macOS development", "A cross-platform build tool", "A version control client"],
      correct: "Apple's official IDE for iOS and macOS development",
    },
    {
      question: "What is SwiftUI?",
      options: ["A testing framework", "A declarative UI framework for building Apple platform apps", "A networking library", "A database ORM for iOS"],
      correct: "A declarative UI framework for building Apple platform apps",
    },
  ],

  kotlin: [
    {
      question: "What is Kotlin?",
      options: ["A scripting language for data science", "A statically typed JVM language, also used for Android development", "A CSS framework", "A database query language"],
      correct: "A statically typed JVM language, also used for Android development",
    },
    {
      question: "What is a data class in Kotlin?",
      options: ["A class for database connections", "A class that automatically generates equals, hashCode, and copy functions", "A final immutable class", "A singleton class"],
      correct: "A class that automatically generates equals, hashCode, and copy functions",
    },
    {
      question: "What are Kotlin coroutines used for?",
      options: ["Dependency injection", "Simplifying asynchronous and non-blocking programming", "UI rendering", "Object serialization"],
      correct: "Simplifying asynchronous and non-blocking programming",
    },
  ],

  swift: [
    {
      question: "What is Swift?",
      options: ["A Python web framework", "Apple's modern programming language for iOS and macOS development", "A JavaScript runtime", "A database migration tool"],
      correct: "Apple's modern programming language for iOS and macOS development",
    },
    {
      question: "What is an Optional in Swift?",
      options: ["An optional import statement", "A type that represents either a value or the absence of a value (nil)", "A method modifier", "A closure type"],
      correct: "A type that represents either a value or the absence of a value (nil)",
    },
    {
      question: "What are Swift Protocols?",
      options: ["Network communication rules", "Blueprints defining methods and properties that conforming types must implement", "Access control modifiers", "Compiler directives"],
      correct: "Blueprints defining methods and properties that conforming types must implement",
    },
  ],

  firebase: [
    {
      question: "What is Firebase?",
      options: ["A SQL database", "Google's platform offering backend services like auth, database, and hosting for apps", "A CSS framework", "A mobile testing tool"],
      correct: "Google's platform offering backend services like auth, database, and hosting for apps",
    },
    {
      question: "What is Firestore in Firebase?",
      options: ["A file storage service", "A NoSQL cloud database with real-time sync", "A serverless function service", "An analytics platform"],
      correct: "A NoSQL cloud database with real-time sync",
    },
    {
      question: "What is Firebase Authentication used for?",
      options: ["Storing files", "Managing user sign-in with email, social providers, and more", "Sending push notifications", "Hosting web apps"],
      correct: "Managing user sign-in with email, social providers, and more",
    },
  ],

  "ui/ux": [
    {
      question: "What is the difference between UI and UX?",
      options: ["No difference", "UI focuses on visual design; UX focuses on overall user experience and usability", "UX is only for mobile apps", "UI includes user research"],
      correct: "UI focuses on visual design; UX focuses on overall user experience and usability",
    },
    {
      question: "What is wireframing in UX design?",
      options: ["Writing frontend code", "Creating low-fidelity visual blueprints of interface layouts", "Designing color palettes", "Conducting user interviews"],
      correct: "Creating low-fidelity visual blueprints of interface layouts",
    },
    {
      question: "What is a user persona in UX?",
      options: ["A real test user", "A fictional profile representing a target user type based on research", "A UI component", "A usability score"],
      correct: "A fictional profile representing a target user type based on research",
    },
  ],

  "mobile testing": [
    {
      question: "What is mobile testing?",
      options: ["Testing websites on desktop", "Validating mobile app functionality, performance, and usability across devices", "Writing unit tests for APIs", "Load testing servers"],
      correct: "Validating mobile app functionality, performance, and usability across devices",
    },
    {
      question: "What is Appium used for?",
      options: ["Building mobile apps", "Automated testing of native, hybrid, and mobile web apps", "Designing UI mockups", "Database testing"],
      correct: "Automated testing of native, hybrid, and mobile web apps",
    },
    {
      question: "What is the difference between emulator and real device testing?",
      options: ["No difference", "Emulators simulate hardware in software; real devices test actual hardware behavior", "Real devices are always faster", "Emulators require physical devices"],
      correct: "Emulators simulate hardware in software; real devices test actual hardware behavior",
    },
  ],

  jenkins: [
    {
      question: "What is Jenkins?",
      options: ["A container orchestration tool", "An open-source automation server for CI/CD pipelines", "A cloud monitoring tool", "A version control system"],
      correct: "An open-source automation server for CI/CD pipelines",
    },
    {
      question: "What is a Jenkinsfile?",
      options: ["A Jenkins configuration backup", "A file defining a Jenkins pipeline as code", "A plugin manifest", "A server log file"],
      correct: "A file defining a Jenkins pipeline as code",
    },
    {
      question: "What is a Jenkins agent?",
      options: ["A monitoring plugin", "A machine that executes jobs assigned by the Jenkins controller", "A build artifact", "A deployment environment"],
      correct: "A machine that executes jobs assigned by the Jenkins controller",
    },
  ],

  ansible: [
    {
      question: "What is Ansible?",
      options: ["A container runtime", "An agentless IT automation tool for configuration management and deployment", "A monitoring platform", "A version control system"],
      correct: "An agentless IT automation tool for configuration management and deployment",
    },
    {
      question: "What is an Ansible Playbook?",
      options: ["A server inventory file", "A YAML file defining tasks for Ansible to execute on target hosts", "A plugin manifest", "A deployment script"],
      correct: "A YAML file defining tasks for Ansible to execute on target hosts",
    },
    {
      question: "What makes Ansible agentless?",
      options: ["It runs in the cloud", "It communicates with hosts via SSH without requiring software installed on them", "It uses containers", "It pulls configs from a registry"],
      correct: "It communicates with hosts via SSH without requiring software installed on them",
    },
  ],

  monitoring: [
    {
      question: "What is application monitoring?",
      options: ["Writing unit tests", "Continuously tracking the performance and health of applications in production", "Reviewing code changes", "Managing deployment pipelines"],
      correct: "Continuously tracking the performance and health of applications in production",
    },
    {
      question: "What is an SLO (Service Level Objective)?",
      options: ["A sales target", "A measurable reliability target for a service, like 99.9% uptime", "A security policy", "A cost budget"],
      correct: "A measurable reliability target for a service, like 99.9% uptime",
    },
    {
      question: "What is an alert in monitoring?",
      options: ["A scheduled report", "A notification triggered when a metric crosses a defined threshold", "A log file entry", "A deployment event"],
      correct: "A notification triggered when a metric crosses a defined threshold",
    },
  ],

  prometheus: [
    {
      question: "What is Prometheus used for?",
      options: ["Container orchestration", "Monitoring and alerting with time-series metric collection", "Log aggregation", "Secret management"],
      correct: "Monitoring and alerting with time-series metric collection",
    },
    {
      question: "What is PromQL?",
      options: ["A Python query library", "Prometheus Query Language for querying time-series data", "A pipeline config format", "A SQL dialect"],
      correct: "Prometheus Query Language for querying time-series data",
    },
    {
      question: "What is a Prometheus exporter?",
      options: ["A data export tool", "A component that exposes metrics from a system in a Prometheus-readable format", "A log shipper", "An alert rule file"],
      correct: "A component that exposes metrics from a system in a Prometheus-readable format",
    },
  ],

  grafana: [
    {
      question: "What is Grafana used for?",
      options: ["Writing CI/CD pipelines", "Visualizing metrics and logs through interactive dashboards", "Container management", "API testing"],
      correct: "Visualizing metrics and logs through interactive dashboards",
    },
    {
      question: "What is a Grafana data source?",
      options: ["A dashboard panel", "A connection to a backend like Prometheus, Loki, or Elasticsearch to query data", "A user permission group", "A notification channel"],
      correct: "A connection to a backend like Prometheus, Loki, or Elasticsearch to query data",
    },
    {
      question: "What is Grafana Loki?",
      options: ["A metrics database", "A log aggregation system designed to work with Grafana", "A tracing tool", "An alerting service"],
      correct: "A log aggregation system designed to work with Grafana",
    },
  ],

  sre: [
    {
      question: "What does SRE stand for?",
      options: ["Software Reliability Engineer", "Site Reliability Engineering", "System Runtime Environment", "Service Resource Executor"],
      correct: "Site Reliability Engineering",
    },
    {
      question: "What is an error budget in SRE?",
      options: ["A cost limit for errors", "The allowable amount of unreliability permitted under an SLO", "A test failure threshold", "A log retention limit"],
      correct: "The allowable amount of unreliability permitted under an SLO",
    },
    {
      question: "What is toil in SRE?",
      options: ["Hard design work", "Manual, repetitive operational work that scales with service growth and lacks long-term value", "A deployment failure", "A monitoring alert"],
      correct: "Manual, repetitive operational work that scales with service growth and lacks long-term value",
    },
  ],

  "cloud computing": [
    {
      question: "What are the three main cloud service models?",
      options: ["SaaS, PaaS, IaaS", "FaaS, DBaaS, CaaS", "IaaS, BaaS, XaaS", "Public, Private, Hybrid"],
      correct: "SaaS, PaaS, IaaS",
    },
    {
      question: "What is cloud elasticity?",
      options: ["Data encryption in transit", "The ability to automatically scale resources up or down based on demand", "Multi-region redundancy", "Serverless computing"],
      correct: "The ability to automatically scale resources up or down based on demand",
    },
    {
      question: "What is a hybrid cloud?",
      options: ["A cloud with two providers", "An environment combining private on-premise infrastructure with public cloud services", "A free-tier cloud offering", "A multi-region deployment"],
      correct: "An environment combining private on-premise infrastructure with public cloud services",
    },
  ],

  serverless: [
    {
      question: "What is serverless computing?",
      options: ["Computing with no hardware", "A model where the cloud provider manages servers and you deploy functions", "Running code locally", "A microservices pattern"],
      correct: "A model where the cloud provider manages servers and you deploy functions",
    },
    {
      question: "What is a cold start in serverless?",
      options: ["Starting a server from scratch", "The latency when a serverless function initializes for the first time after being idle", "A deployment failure", "A function timeout"],
      correct: "The latency when a serverless function initializes for the first time after being idle",
    },
    {
      question: "Which of these is a serverless platform?",
      options: ["EC2", "AWS Lambda", "Azure VMs", "Google Compute Engine"],
      correct: "AWS Lambda",
    },
  ],

  containers: [
    {
      question: "What is a container in software?",
      options: ["A virtual machine", "A lightweight, portable package of code and dependencies that runs consistently", "A cloud storage bucket", "A microservice"],
      correct: "A lightweight, portable package of code and dependencies that runs consistently",
    },
    {
      question: "How do containers differ from virtual machines?",
      options: ["No difference", "Containers share the host OS kernel and are lighter; VMs include a full OS", "VMs are faster than containers", "Containers require more memory"],
      correct: "Containers share the host OS kernel and are lighter; VMs include a full OS",
    },
    {
      question: "What is container orchestration?",
      options: ["Writing Dockerfiles", "Automating the deployment, scaling, and management of containers", "Building container images", "Monitoring container logs"],
      correct: "Automating the deployment, scaling, and management of containers",
    },
  ],

  "cloud security": [
    {
      question: "What is the shared responsibility model in cloud security?",
      options: ["Both provider and customer share all security duties equally", "The cloud provider secures the infrastructure; the customer secures their data and apps", "The customer is responsible for all security", "The provider handles all security"],
      correct: "The cloud provider secures the infrastructure; the customer secures their data and apps",
    },
    {
      question: "What is CSPM (Cloud Security Posture Management)?",
      options: ["A cloud storage tool", "A tool that continuously monitors cloud configurations for security risks", "A network firewall", "An identity provider"],
      correct: "A tool that continuously monitors cloud configurations for security risks",
    },
    {
      question: "What is data encryption at rest?",
      options: ["Encrypting data during network transmission", "Encrypting stored data so it cannot be read without the decryption key", "Hashing passwords", "Masking sensitive fields in logs"],
      correct: "Encrypting stored data so it cannot be read without the decryption key",
    },
  ],

  "infrastructure as code": [
    {
      question: "What is Infrastructure as Code (IaC)?",
      options: ["Writing application code for cloud", "Managing and provisioning infrastructure using code and configuration files", "Automating code deployments", "A cloud billing method"],
      correct: "Managing and provisioning infrastructure using code and configuration files",
    },
    {
      question: "What is the main benefit of IaC?",
      options: ["Faster application runtime", "Consistent, repeatable, and version-controlled infrastructure provisioning", "Cheaper cloud costs", "No need for DevOps engineers"],
      correct: "Consistent, repeatable, and version-controlled infrastructure provisioning",
    },
    {
      question: "Which tool is commonly used for IaC?",
      options: ["Jenkins", "Terraform", "Prometheus", "Grafana"],
      correct: "Terraform",
    },
  ],

  finops: [
    {
      question: "What is FinOps?",
      options: ["Financial software development", "A practice combining finance and DevOps to optimize cloud costs", "A fintech framework", "A cloud billing API"],
      correct: "A practice combining finance and DevOps to optimize cloud costs",
    },
    {
      question: "What is cloud cost allocation in FinOps?",
      options: ["Setting a cloud budget", "Attributing cloud spending to specific teams, products, or projects", "Reducing cloud usage", "Negotiating cloud contracts"],
      correct: "Attributing cloud spending to specific teams, products, or projects",
    },
    {
      question: "What is a reserved instance in cloud FinOps?",
      options: ["A dedicated physical server", "A discounted pricing model for committing to cloud resources for a term", "An auto-scaling group", "A spot instance fallback"],
      correct: "A discounted pricing model for committing to cloud resources for a term",
    },
  ],

  "ethical hacking": [
    {
      question: "What is ethical hacking?",
      options: ["Hacking for profit", "Legally testing systems for vulnerabilities with authorization", "Developing malware for research", "Monitoring network traffic"],
      correct: "Legally testing systems for vulnerabilities with authorization",
    },
    {
      question: "What is a white-hat hacker?",
      options: ["A malicious hacker", "An authorized security professional who finds vulnerabilities to improve security", "A script kiddie", "A social engineer"],
      correct: "An authorized security professional who finds vulnerabilities to improve security",
    },
    {
      question: "What is social engineering in hacking?",
      options: ["Writing exploit code", "Manipulating people into revealing confidential information", "Scanning for open ports", "Breaking encryption"],
      correct: "Manipulating people into revealing confidential information",
    },
  ],

  siem: [
    {
      question: "What does SIEM stand for?",
      options: ["Security Infrastructure Event Management", "Security Information and Event Management", "System Intrusion and Error Monitoring", "Security Integration Engine Monitor"],
      correct: "Security Information and Event Management",
    },
    {
      question: "What is the primary function of a SIEM system?",
      options: ["Encrypting data", "Collecting, correlating, and analyzing security events in real time", "Managing user identities", "Deploying security patches"],
      correct: "Collecting, correlating, and analyzing security events in real time",
    },
    {
      question: "What is a SIEM use case?",
      options: ["Load balancing traffic", "Detecting anomalous login patterns that may indicate a breach", "Caching database queries", "Provisioning cloud resources"],
      correct: "Detecting anomalous login patterns that may indicate a breach",
    },
  ],

  "threat intelligence": [
    {
      question: "What is threat intelligence?",
      options: ["Intrusion detection software", "Evidence-based knowledge about existing or emerging threats used to make security decisions", "A firewall configuration", "A penetration test report"],
      correct: "Evidence-based knowledge about existing or emerging threats used to make security decisions",
    },
    {
      question: "What is an Indicator of Compromise (IoC)?",
      options: ["A security policy violation", "An artifact that indicates a system has likely been breached", "A vulnerability score", "A network anomaly threshold"],
      correct: "An artifact that indicates a system has likely been breached",
    },
    {
      question: "What is a threat feed?",
      options: ["A news subscription", "A stream of data providing up-to-date information about known threats and malicious actors", "A vulnerability scanner", "A SIEM dashboard"],
      correct: "A stream of data providing up-to-date information about known threats and malicious actors",
    },
  ],

  "zero trust": [
    {
      question: "What is the Zero Trust security model?",
      options: ["Trusting all internal traffic", "A model that assumes no user or system is trusted by default and requires continuous verification", "A firewall configuration", "A VPN replacement"],
      correct: "A model that assumes no user or system is trusted by default and requires continuous verification",
    },
    {
      question: "What is the principle of least privilege in Zero Trust?",
      options: ["Giving admin access to all users", "Granting users only the minimum access needed to perform their tasks", "Blocking all external traffic", "Disabling all unused services"],
      correct: "Granting users only the minimum access needed to perform their tasks",
    },
    {
      question: "What is micro-segmentation in Zero Trust?",
      options: ["Splitting cloud bills", "Dividing a network into small zones to limit lateral movement of attackers", "Encrypting individual files", "Monitoring traffic per user"],
      correct: "Dividing a network into small zones to limit lateral movement of attackers",
    },
  ],

  "application security": [
    {
      question: "What is application security (AppSec)?",
      options: ["Physical security for servers", "Practices and tools to find, fix, and prevent vulnerabilities in applications", "Network traffic monitoring", "User authentication management"],
      correct: "Practices and tools to find, fix, and prevent vulnerabilities in applications",
    },
    {
      question: "What is OWASP?",
      options: ["A firewall vendor", "An open community that documents and addresses web application security risks", "A cloud security standard", "A penetration testing tool"],
      correct: "An open community that documents and addresses web application security risks",
    },
    {
      question: "What is SAST (Static Application Security Testing)?",
      options: ["Testing an app at runtime", "Analyzing source code for vulnerabilities without executing it", "Load testing an app", "Monitoring app logs"],
      correct: "Analyzing source code for vulnerabilities without executing it",
    },
  ],

  cryptography: [
    {
      question: "What is symmetric encryption?",
      options: ["Using two different keys for encryption and decryption", "Using the same key for both encryption and decryption", "A hashing algorithm", "A public key exchange protocol"],
      correct: "Using the same key for both encryption and decryption",
    },
    {
      question: "What is a hash function in cryptography?",
      options: ["A reversible encryption method", "A one-way function that maps data to a fixed-size digest", "A key exchange algorithm", "A digital signature scheme"],
      correct: "A one-way function that maps data to a fixed-size digest",
    },
    {
      question: "What is public key infrastructure (PKI)?",
      options: ["A private key storage system", "A framework for managing digital certificates and public-key encryption", "A firewall configuration", "A password manager"],
      correct: "A framework for managing digital certificates and public-key encryption",
    },
  ],

  "incident response": [
    {
      question: "What is incident response in cybersecurity?",
      options: ["Scheduling system updates", "A structured approach to detecting, containing, and recovering from security incidents", "Monitoring network traffic", "Performing vulnerability assessments"],
      correct: "A structured approach to detecting, containing, and recovering from security incidents",
    },
    {
      question: "What are the phases of incident response?",
      options: ["Plan, Build, Test, Deploy", "Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned", "Monitor, Alert, Fix, Close", "Identify, Protect, Detect, Respond"],
      correct: "Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned",
    },
    {
      question: "What is a post-incident review?",
      options: ["A legal report", "An analysis after an incident to understand what happened and improve future response", "A system restore process", "A vulnerability patch"],
      correct: "An analysis after an incident to understand what happened and improve future response",
    },
  ],

  seo: [
    {
      question: "What does SEO stand for?",
      options: ["Search Engine Optimization", "Site Engagement Overview", "Social Engagement Operations", "Search Experience Output"],
      correct: "Search Engine Optimization",
    },
    {
      question: "What is on-page SEO?",
      options: ["Building backlinks", "Optimizing content, meta tags, and structure on individual web pages", "Improving server speed", "Running paid ads"],
      correct: "Optimizing content, meta tags, and structure on individual web pages",
    },
    {
      question: "What is a backlink in SEO?",
      options: ["An internal navigation link", "A link from another website pointing to your site", "A broken link redirect", "A meta tag attribute"],
      correct: "A link from another website pointing to your site",
    },
  ],

  sem: [
    {
      question: "What does SEM stand for?",
      options: ["Social Engagement Marketing", "Search Engine Marketing", "Site Engagement Metrics", "Structured Email Marketing"],
      correct: "Search Engine Marketing",
    },
    {
      question: "What is PPC in SEM?",
      options: ["Page Per Click", "Pay-Per-Click advertising where you pay each time an ad is clicked", "Platform Publishing Cost", "Predicted Performance Conversion"],
      correct: "Pay-Per-Click advertising where you pay each time an ad is clicked",
    },
    {
      question: "What is Quality Score in Google Ads?",
      options: ["A content readability score", "A metric rating the relevance of your ads, keywords, and landing pages", "A domain authority score", "A click-through rate benchmark"],
      correct: "A metric rating the relevance of your ads, keywords, and landing pages",
    },
  ],

  "google analytics": [
    {
      question: "What is Google Analytics used for?",
      options: ["Running paid ads", "Tracking and reporting website traffic and user behavior", "Managing SEO keywords", "Hosting websites"],
      correct: "Tracking and reporting website traffic and user behavior",
    },
    {
      question: "What is a session in Google Analytics?",
      options: ["A single page view", "A group of interactions by a user within a given time frame", "A conversion event", "A paid campaign click"],
      correct: "A group of interactions by a user within a given time frame",
    },
    {
      question: "What is bounce rate in Google Analytics?",
      options: ["The percentage of users who return", "The percentage of sessions where users leave after viewing only one page", "The page load time", "The conversion rate"],
      correct: "The percentage of sessions where users leave after viewing only one page",
    },
  ],

  "social media marketing": [
    {
      question: "What is organic reach on social media?",
      options: ["Paid ad impressions", "The number of people who see your content without paid promotion", "Influencer marketing results", "Video view count"],
      correct: "The number of people who see your content without paid promotion",
    },
    {
      question: "What is a social media content calendar?",
      options: ["A posting analytics report", "A scheduled plan for what content to post and when across platforms", "A follower tracking tool", "A hashtag research tool"],
      correct: "A scheduled plan for what content to post and when across platforms",
    },
    {
      question: "What is engagement rate on social media?",
      options: ["The number of followers", "The percentage of an audience that interacts with content through likes, comments, and shares", "The ad spend", "The reach of a post"],
      correct: "The percentage of an audience that interacts with content through likes, comments, and shares",
    },
  ],

  "email marketing": [
    {
      question: "What is email marketing?",
      options: ["Cold calling customers", "Sending targeted emails to prospects and customers to promote products or build relationships", "Managing email servers", "Setting up email authentication"],
      correct: "Sending targeted emails to prospects and customers to promote products or build relationships",
    },
    {
      question: "What is an email open rate?",
      options: ["Percentage of emails delivered", "Percentage of recipients who opened the email", "Number of unsubscribes", "Click-through percentage"],
      correct: "Percentage of recipients who opened the email",
    },
    {
      question: "What is email segmentation?",
      options: ["Splitting an email into sections", "Dividing your email list into groups based on characteristics for targeted messaging", "A/B testing subject lines", "Cleaning inactive subscribers"],
      correct: "Dividing your email list into groups based on characteristics for targeted messaging",
    },
  ],

  "content marketing": [
    {
      question: "What is content marketing?",
      options: ["Buying ad placements", "Creating and distributing valuable content to attract and retain a target audience", "Managing social media profiles", "Writing press releases"],
      correct: "Creating and distributing valuable content to attract and retain a target audience",
    },
    {
      question: "What is a content marketing funnel?",
      options: ["A content scheduling tool", "A framework mapping content to stages of the buyer journey (awareness, consideration, decision)", "A CMS dashboard", "An SEO audit checklist"],
      correct: "A framework mapping content to stages of the buyer journey (awareness, consideration, decision)",
    },
    {
      question: "What is evergreen content?",
      options: ["Seasonal promotional content", "Content that remains relevant and valuable over a long period of time", "Content published daily", "Trending news articles"],
      correct: "Content that remains relevant and valuable over a long period of time",
    },
  ],

  "ad campaigns": [
    {
      question: "What is a digital ad campaign?",
      options: ["A social media profile", "A coordinated series of ads designed to achieve a specific marketing goal", "An email newsletter", "A content calendar"],
      correct: "A coordinated series of ads designed to achieve a specific marketing goal",
    },
    {
      question: "What is retargeting in ad campaigns?",
      options: ["Changing ad creatives", "Showing ads to users who previously visited your site or interacted with your brand", "Targeting competitor keywords", "Increasing ad budget"],
      correct: "Showing ads to users who previously visited your site or interacted with your brand",
    },
    {
      question: "What is CPM in digital advertising?",
      options: ["Cost Per Message", "Cost Per Thousand impressions — the price for 1,000 ad views", "Clicks Per Minute", "Conversion Per Month"],
      correct: "Cost Per Thousand impressions — the price for 1,000 ad views",
    },
  ],

  "conversion rate optimization": [
    {
      question: "What is CRO (Conversion Rate Optimization)?",
      options: ["Reducing ad spend", "Improving the percentage of visitors who complete a desired action on a site", "Increasing web traffic", "A/B testing ad creatives"],
      correct: "Improving the percentage of visitors who complete a desired action on a site",
    },
    {
      question: "What is A/B testing in CRO?",
      options: ["Testing two different websites", "Comparing two versions of a page to see which performs better", "Testing site loading speed", "Comparing two ad platforms"],
      correct: "Comparing two versions of a page to see which performs better",
    },
    {
      question: "What is a conversion funnel?",
      options: ["A marketing email sequence", "The path users take from first contact to completing a conversion goal", "A paid ad structure", "A CMS workflow"],
      correct: "The path users take from first contact to completing a conversion goal",
    },
  ],

  payments: [
    {
      question: "What is a payment gateway?",
      options: ["A bank account", "A service that authorizes and processes online payment transactions", "An invoicing tool", "A currency exchange service"],
      correct: "A service that authorizes and processes online payment transactions",
    },
    {
      question: "What is PCI DSS?",
      options: ["A programming standard", "Payment Card Industry Data Security Standard for protecting card data", "A payment API", "A banking regulation"],
      correct: "Payment Card Industry Data Security Standard for protecting card data",
    },
    {
      question: "What is tokenization in payments?",
      options: ["Cryptocurrency payments", "Replacing sensitive card data with a non-sensitive token for secure transactions", "Splitting payments across users", "Encrypting transaction logs"],
      correct: "Replacing sensitive card data with a non-sensitive token for secure transactions",
    },
  ],

  "risk analysis": [
    {
      question: "What is risk analysis?",
      options: ["Financial auditing", "Identifying and evaluating potential risks and their impact on a project or business", "Writing test cases", "Monitoring system performance"],
      correct: "Identifying and evaluating potential risks and their impact on a project or business",
    },
    {
      question: "What is a risk matrix?",
      options: ["A project timeline", "A tool plotting risks by likelihood and impact to prioritize them", "A financial forecast", "A team responsibility chart"],
      correct: "A tool plotting risks by likelihood and impact to prioritize them",
    },
    {
      question: "What is risk mitigation?",
      options: ["Ignoring low-probability risks", "Taking actions to reduce the probability or impact of identified risks", "Transferring risks to a vendor", "Documenting risks only"],
      correct: "Taking actions to reduce the probability or impact of identified risks",
    },
  ],

  "financial modeling": [
    {
      question: "What is financial modeling?",
      options: ["Designing financial software", "Building a numerical representation of a company's financial performance", "Auditing financial statements", "Processing payments"],
      correct: "Building a numerical representation of a company's financial performance",
    },
    {
      question: "What is DCF (Discounted Cash Flow) analysis?",
      options: ["A debt consolidation method", "A valuation method estimating the value of an investment based on projected future cash flows", "A cost accounting method", "A budget forecasting tool"],
      correct: "A valuation method estimating the value of an investment based on projected future cash flows",
    },
    {
      question: "What is sensitivity analysis in financial modeling?",
      options: ["Analyzing customer sentiment", "Testing how changes in assumptions affect model outputs", "Stress testing a database", "Auditing expense reports"],
      correct: "Testing how changes in assumptions affect model outputs",
    },
  ],

  regtech: [
    {
      question: "What is RegTech?",
      options: ["A regulatory consulting firm", "Technology solutions that help companies comply with regulations efficiently", "A government IT department", "A financial auditing tool"],
      correct: "Technology solutions that help companies comply with regulations efficiently",
    },
    {
      question: "What is KYC in RegTech?",
      options: ["Keep Your Customers", "Know Your Customer — a process to verify client identity for compliance", "Key Year Calculations", "Know Your Competitors"],
      correct: "Know Your Customer — a process to verify client identity for compliance",
    },
    {
      question: "How does RegTech use AI?",
      options: ["For customer service chatbots only", "To automate compliance monitoring, fraud detection, and reporting", "To replace regulators", "To generate financial reports"],
      correct: "To automate compliance monitoring, fraud detection, and reporting",
    },
  ],

  "fraud detection": [
    {
      question: "What is fraud detection in fintech?",
      options: ["Auditing financial statements", "Using technology and ML to identify fraudulent transactions or behavior", "Managing customer accounts", "Processing chargebacks"],
      correct: "Using technology and ML to identify fraudulent transactions or behavior",
    },
    {
      question: "What is anomaly detection in fraud detection?",
      options: ["Detecting software bugs", "Identifying patterns that deviate significantly from normal behavior", "Flagging duplicate transactions", "Monitoring server logs"],
      correct: "Identifying patterns that deviate significantly from normal behavior",
    },
    {
      question: "What is a false positive in fraud detection?",
      options: ["An undetected fraud case", "A legitimate transaction incorrectly flagged as fraudulent", "A detected fraud case", "A fraud pattern match"],
      correct: "A legitimate transaction incorrectly flagged as fraudulent",
    },
  ],

  "edtech tools": [
    {
      question: "What are EdTech tools?",
      options: ["Tools for software engineers", "Technology platforms and applications designed to enhance teaching and learning", "HR management systems", "Business analytics tools"],
      correct: "Technology platforms and applications designed to enhance teaching and learning",
    },
    {
      question: "What is a Learning Management System (LMS)?",
      options: ["A student database", "A platform for delivering, tracking, and managing educational courses", "A grading mobile app", "A classroom scheduling tool"],
      correct: "A platform for delivering, tracking, and managing educational courses",
    },
    {
      question: "What is blended learning?",
      options: ["Multi-language education", "A mix of in-person and online learning experiences", "Only video-based learning", "Peer-to-peer teaching"],
      correct: "A mix of in-person and online learning experiences",
    },
  ],

  gamification: [
    {
      question: "What is gamification?",
      options: ["Building video games", "Applying game design elements like points and rewards to non-game contexts", "Gamified advertising", "AR/VR gaming"],
      correct: "Applying game design elements like points and rewards to non-game contexts",
    },
    {
      question: "What are examples of gamification mechanics?",
      options: ["REST APIs and webhooks", "Points, badges, leaderboards, and challenges", "Microservices and containers", "A/B testing and heatmaps"],
      correct: "Points, badges, leaderboards, and challenges",
    },
    {
      question: "Why is gamification used in EdTech?",
      options: ["To replace teachers", "To increase student engagement and motivation through rewards and challenges", "To automate grading", "To reduce course content"],
      correct: "To increase student engagement and motivation through rewards and challenges",
    },
  ],

  "adaptive learning": [
    {
      question: "What is adaptive learning?",
      options: ["Self-paced video courses", "An educational approach that adjusts content and pace based on individual learner performance", "Group-based collaborative learning", "AI-generated lesson plans"],
      correct: "An educational approach that adjusts content and pace based on individual learner performance",
    },
    {
      question: "How does AI enable adaptive learning?",
      options: ["By generating course certificates", "By analyzing learner responses to personalize content, difficulty, and feedback in real time", "By replacing human instructors", "By automating attendance tracking"],
      correct: "By analyzing learner responses to personalize content, difficulty, and feedback in real time",
    },
    {
      question: "What is mastery-based learning?",
      options: ["Learning only advanced topics", "A model where learners progress only after demonstrating mastery of a concept", "A competitive ranking system", "A timed exam format"],
      correct: "A model where learners progress only after demonstrating mastery of a concept",
    },
  ],

  "ehr systems": [
    {
      question: "What does EHR stand for?",
      options: ["Electronic Health Resource", "Electronic Health Record", "Enhanced Hospital Registry", "Electronic Health Report"],
      correct: "Electronic Health Record",
    },
    {
      question: "What is the main benefit of EHR systems?",
      options: ["Automating billing only", "Centralizing patient health information for better care coordination", "Replacing doctors", "Reducing hospital staff"],
      correct: "Centralizing patient health information for better care coordination",
    },
    {
      question: "What is HL7 FHIR in EHR systems?",
      options: ["A hospital security protocol", "A standard for exchanging healthcare information electronically", "A medical device interface", "An AI diagnosis tool"],
      correct: "A standard for exchanging healthcare information electronically",
    },
  ],

  bioinformatics: [
    {
      question: "What is bioinformatics?",
      options: ["IT support for hospitals", "The use of computational tools to analyze biological data like DNA sequences", "Medical device programming", "Healthcare data visualization"],
      correct: "The use of computational tools to analyze biological data like DNA sequences",
    },
    {
      question: "What is sequence alignment in bioinformatics?",
      options: ["Aligning data tables", "Arranging DNA, RNA, or protein sequences to identify similarities", "Sorting genome data", "Mapping protein structures"],
      correct: "Arranging DNA, RNA, or protein sequences to identify similarities",
    },
    {
      question: "What is BLAST in bioinformatics?",
      options: ["A genome editing tool", "A tool for comparing a query sequence against a database to find similarities", "A protein synthesis simulator", "A gene expression analyzer"],
      correct: "A tool for comparing a query sequence against a database to find similarities",
    },
  ],

  genomics: [
    {
      question: "What is genomics?",
      options: ["The study of brain signals", "The study of an organism's complete set of DNA including all genes", "The study of proteins", "The study of cellular metabolism"],
      correct: "The study of an organism's complete set of DNA including all genes",
    },
    {
      question: "What is whole genome sequencing?",
      options: ["Sequencing a single gene", "Determining the complete DNA sequence of an organism's genome", "Analyzing gene expression", "Editing DNA with CRISPR"],
      correct: "Determining the complete DNA sequence of an organism's genome",
    },
    {
      question: "What is a SNP (Single Nucleotide Polymorphism)?",
      options: ["A gene mutation type that causes disease", "A variation at a single position in DNA among individuals", "A protein coding error", "A chromosome deletion"],
      correct: "A variation at a single position in DNA among individuals",
    },
  ],

  "predictive modeling": [
    {
      question: "What is predictive modeling?",
      options: ["Visualizing historical data", "Using statistical and ML techniques to forecast future outcomes from data", "Cleaning datasets", "Designing dashboards"],
      correct: "Using statistical and ML techniques to forecast future outcomes from data",
    },
    {
      question: "What is overfitting in predictive modeling?",
      options: ["A model with too little data", "When a model performs well on training data but poorly on new data", "Using too many features", "A model that trains too slowly"],
      correct: "When a model performs well on training data but poorly on new data",
    },
    {
      question: "What metric is used to evaluate a classification predictive model?",
      options: ["R-squared", "Mean Absolute Error", "Accuracy / F1 Score", "RMSE"],
      correct: "Accuracy / F1 Score",
    },
  ],

  roadmapping: [
    {
      question: "What is a product roadmap?",
      options: ["A deployment checklist", "A strategic plan showing the vision, direction, and timeline for a product", "A sprint backlog", "A user story list"],
      correct: "A strategic plan showing the vision, direction, and timeline for a product",
    },
    {
      question: "What is a Now-Next-Later roadmap format?",
      options: ["A Gantt chart alternative", "A prioritization framework grouping items by immediacy rather than fixed dates", "A sprint planning tool", "A release schedule"],
      correct: "A prioritization framework grouping items by immediacy rather than fixed dates",
    },
    {
      question: "What is the difference between a roadmap and a backlog?",
      options: ["No difference", "A roadmap shows strategic direction; a backlog is a detailed list of tasks to be done", "A backlog has timelines; a roadmap does not", "A roadmap is for engineering only"],
      correct: "A roadmap shows strategic direction; a backlog is a detailed list of tasks to be done",
    },
  ],

  "product analytics": [
    {
      question: "What is product analytics?",
      options: ["Financial product reporting", "Tracking user behavior in a product to inform decisions and improvements", "A/B testing ad campaigns", "Server performance monitoring"],
      correct: "Tracking user behavior in a product to inform decisions and improvements",
    },
    {
      question: "What is a funnel analysis in product analytics?",
      options: ["Marketing funnel reporting", "Tracking the steps users take toward a goal to identify drop-off points", "Revenue forecasting", "User segmentation"],
      correct: "Tracking the steps users take toward a goal to identify drop-off points",
    },
    {
      question: "What is retention analysis?",
      options: ["Employee retention metrics", "Measuring how many users continue to use a product over time", "Customer support tracking", "Churn rate forecasting"],
      correct: "Measuring how many users continue to use a product over time",
    },
  ],

  "stakeholder management": [
    {
      question: "What is stakeholder management?",
      options: ["Managing shareholders' equity", "Identifying and engaging those affected by or involved in a project to align expectations", "Running team meetings", "Writing project documentation"],
      correct: "Identifying and engaging those affected by or involved in a project to align expectations",
    },
    {
      question: "What is a stakeholder map?",
      options: ["An org chart", "A visual tool showing stakeholders by influence and interest level", "A project schedule", "A risk register"],
      correct: "A visual tool showing stakeholders by influence and interest level",
    },
    {
      question: "Why is stakeholder communication important in product management?",
      options: ["To avoid writing documentation", "To keep key people informed, aligned, and supportive throughout the product lifecycle", "To delegate work", "To replace sprint reviews"],
      correct: "To keep key people informed, aligned, and supportive throughout the product lifecycle",
    },
  ],

  "user research": [
    {
      question: "What is user research?",
      options: ["Customer data analysis", "Gathering insights about users' needs, behaviors, and motivations to guide design", "A/B testing results review", "Analytics dashboard analysis"],
      correct: "Gathering insights about users' needs, behaviors, and motivations to guide design",
    },
    {
      question: "What is the difference between qualitative and quantitative user research?",
      options: ["No difference", "Qualitative explores why users behave a certain way; quantitative measures how many do", "Quantitative uses interviews; qualitative uses surveys", "Both rely on surveys only"],
      correct: "Qualitative explores why users behave a certain way; quantitative measures how many do",
    },
    {
      question: "What is a usability test?",
      options: ["A load test", "Observing real users attempt tasks to identify usability issues in a design", "An accessibility audit", "A heuristic evaluation"],
      correct: "Observing real users attempt tasks to identify usability issues in a design",
    },
  ],

  "market analysis": [
    {
      question: "What is market analysis?",
      options: ["Financial statement review", "Assessing the dynamics, size, and competition in a target market", "Customer service evaluation", "Product pricing calculation"],
      correct: "Assessing the dynamics, size, and competition in a target market",
    },
    {
      question: "What is a TAM (Total Addressable Market)?",
      options: ["The number of paying customers", "The total revenue opportunity if a product captured 100% of the target market", "The current market share", "The annual revenue of competitors"],
      correct: "The total revenue opportunity if a product captured 100% of the target market",
    },
    {
      question: "What is competitive analysis?",
      options: ["Analyzing team performance", "Evaluating competitors' strengths, weaknesses, products, and strategies", "A financial benchmark report", "A pricing audit"],
      correct: "Evaluating competitors' strengths, weaknesses, products, and strategies",
    },
  ],

  "adobe xd": [
    {
      question: "What is Adobe XD used for?",
      options: ["Video editing", "Designing and prototyping user interfaces and experiences", "3D modeling", "Photo retouching"],
      correct: "Designing and prototyping user interfaces and experiences",
    },
    {
      question: "What is a repeat grid in Adobe XD?",
      options: ["A background grid setting", "A feature that duplicates UI elements and lets you populate them with real data quickly", "A layout template", "A responsive design toggle"],
      correct: "A feature that duplicates UI elements and lets you populate them with real data quickly",
    },
    {
      question: "What is the purpose of prototyping in Adobe XD?",
      options: ["Exporting CSS code", "Creating interactive mockups to simulate navigation and user flows", "Managing design assets", "Running usability tests"],
      correct: "Creating interactive mockups to simulate navigation and user flows",
    },
  ],

  sketch: [
    {
      question: "What is Sketch used for?",
      options: ["3D rendering", "UI/UX design for web and mobile interfaces, primarily on macOS", "Motion graphics", "Illustration and painting"],
      correct: "UI/UX design for web and mobile interfaces, primarily on macOS",
    },
    {
      question: "What are Sketch Symbols?",
      options: ["Icon libraries", "Reusable design components that update across all instances when edited", "Color swatches", "Design tokens"],
      correct: "Reusable design components that update across all instances when edited",
    },
    {
      question: "What is a Sketch library?",
      options: ["A plugin marketplace", "A shared file of symbols and styles accessible across multiple projects", "A version history tool", "A font manager"],
      correct: "A shared file of symbols and styles accessible across multiple projects",
    },
  ],

  prototyping: [
    {
      question: "What is prototyping in design?",
      options: ["Writing code for an MVP", "Creating an interactive simulation of a product to test ideas before development", "Designing a database schema", "Building a landing page"],
      correct: "Creating an interactive simulation of a product to test ideas before development",
    },
    {
      question: "What is the difference between low-fidelity and high-fidelity prototypes?",
      options: ["No difference", "Low-fidelity are rough sketches or wireframes; high-fidelity closely resemble the final product", "High-fidelity is built in code", "Low-fidelity requires more time to build"],
      correct: "Low-fidelity are rough sketches or wireframes; high-fidelity closely resemble the final product",
    },
    {
      question: "Why is prototyping valuable in product development?",
      options: ["It replaces development", "It allows teams to test and validate ideas early, reducing costly design errors", "It speeds up coding", "It documents requirements automatically"],
      correct: "It allows teams to test and validate ideas early, reducing costly design errors",
    },
  ],

  "usability testing": [
    {
      question: "What is usability testing?",
      options: ["Load testing a server", "Evaluating a product by observing real users complete tasks to find usability issues", "Automated UI testing", "Reviewing design specs"],
      correct: "Evaluating a product by observing real users complete tasks to find usability issues",
    },
    {
      question: "What is a think-aloud protocol in usability testing?",
      options: ["A structured interview method", "Asking participants to verbalize their thoughts while using a product", "A moderated survey", "A remote testing tool"],
      correct: "Asking participants to verbalize their thoughts while using a product",
    },
    {
      question: "How many participants are typically recommended for qualitative usability testing?",
      options: ["50–100", "1–2", "5–8", "20–30"],
      correct: "5–8",
    },
  ],

  "interaction design": [
    {
      question: "What is interaction design (IxD)?",
      options: ["Graphic design for print", "Designing interactive digital products focusing on how users engage with them", "Backend API design", "Database schema design"],
      correct: "Designing interactive digital products focusing on how users engage with them",
    },
    {
      question: "What are the 5 dimensions of interaction design?",
      options: ["Color, Layout, Motion, Sound, Behavior", "Words, Visuals, Physical objects, Time, Behavior", "Design, Develop, Test, Deploy, Review", "Input, Output, Process, Feedback, Loop"],
      correct: "Words, Visuals, Physical objects, Time, Behavior",
    },
    {
      question: "What is affordance in interaction design?",
      options: ["The cost of a design element", "A design property that signals to users how an element can be interacted with", "A layout constraint", "A color contrast rule"],
      correct: "A design property that signals to users how an element can be interacted with",
    },
  ],

  "design systems": [
    {
      question: "What is a design system?",
      options: ["A file of design templates", "A collection of reusable components, guidelines, and standards for consistent product design", "A color palette tool", "A version control system for design files"],
      correct: "A collection of reusable components, guidelines, and standards for consistent product design",
    },
    {
      question: "What is a design token?",
      options: ["An authentication token for design tools", "A stored design decision like color, spacing, or typography represented as a named variable", "A Figma component", "A UI animation preset"],
      correct: "A stored design decision like color, spacing, or typography represented as a named variable",
    },
    {
      question: "Why are design systems important in large organizations?",
      options: ["They replace UI designers", "They ensure design consistency and speed up development across multiple teams and products", "They auto-generate code", "They reduce the need for user testing"],
      correct: "They ensure design consistency and speed up development across multiple teams and products",
    },
  ],

  airflow: [
    {
      question: "What is Apache Airflow?",
      options: ["A cloud storage service", "A platform to programmatically author, schedule, and monitor data workflows", "A message broker", "A container orchestration tool"],
      correct: "A platform to programmatically author, schedule, and monitor data workflows",
    },
    {
      question: "What is a DAG in Apache Airflow?",
      options: ["Data Aggregation Group", "Directed Acyclic Graph — a workflow defining task dependencies", "Dynamic API Gateway", "Data Audit Generator"],
      correct: "Directed Acyclic Graph — a workflow defining task dependencies",
    },
    {
      question: "What is an Airflow operator?",
      options: ["A server admin role", "A predefined task type defining what action to perform in a DAG", "A monitoring plugin", "A data connector"],
      correct: "A predefined task type defining what action to perform in a DAG",
    },
  ],

  "etl pipelines": [
    {
      question: "What does ETL stand for?",
      options: ["Extract, Transfer, Load", "Extract, Transform, Load", "Export, Transform, Link", "Extract, Test, Launch"],
      correct: "Extract, Transform, Load",
    },
    {
      question: "What is the 'Transform' step in an ETL pipeline?",
      options: ["Moving data between locations", "Cleaning, converting, or enriching data before loading it to the destination", "Validating source data", "Scheduling data jobs"],
      correct: "Cleaning, converting, or enriching data before loading it to the destination",
    },
    {
      question: "What is an ELT pipeline and how does it differ from ETL?",
      options: ["No difference", "ELT loads raw data first then transforms it in the destination; ETL transforms before loading", "ELT is faster always", "ETL is for cloud only"],
      correct: "ELT loads raw data first then transforms it in the destination; ETL transforms before loading",
    },
  ],

  "data lakes": [
    {
      question: "What is a data lake?",
      options: ["A structured relational database", "A centralized repository storing vast amounts of raw data in any format", "A cloud caching service", "A real-time streaming platform"],
      correct: "A centralized repository storing vast amounts of raw data in any format",
    },
    {
      question: "How does a data lake differ from a data warehouse?",
      options: ["No difference", "A data lake stores raw, unstructured data; a data warehouse stores structured, processed data", "Data warehouses are always cheaper", "Data lakes require SQL"],
      correct: "A data lake stores raw, unstructured data; a data warehouse stores structured, processed data",
    },
    {
      question: "What is a data swamp?",
      options: ["A high-volume streaming pipeline", "A poorly managed data lake with no governance, making data hard to find and use", "An unoptimized data warehouse", "A slow ETL pipeline"],
      correct: "A poorly managed data lake with no governance, making data hard to find and use",
    },
  ],

  "data warehouses": [
    {
      question: "What is a data warehouse?",
      options: ["A file storage service", "A centralized repository for structured, historical data optimized for analytics", "A real-time database", "A NoSQL storage system"],
      correct: "A centralized repository for structured, historical data optimized for analytics",
    },
    {
      question: "What is a star schema in data warehousing?",
      options: ["A network topology", "A schema with a central fact table surrounded by dimension tables", "A query optimization technique", "A partitioning strategy"],
      correct: "A schema with a central fact table surrounded by dimension tables",
    },
    {
      question: "What is OLAP in data warehousing?",
      options: ["Online Log Access Processing", "Online Analytical Processing for fast multi-dimensional queries", "Object Level Access Protocol", "Offline Large-scale Analytics Pipeline"],
      correct: "Online Analytical Processing for fast multi-dimensional queries",
    },
  ],

  dbt: [
    {
      question: "What does dbt stand for?",
      options: ["Data Build Transformer", "Data Build Tool", "Database Batch Transfer", "Data Backend Toolkit"],
      correct: "Data Build Tool",
    },
    {
      question: "What is dbt used for?",
      options: ["Ingesting raw data", "Transforming data inside the data warehouse using SQL", "Visualizing data", "Orchestrating ETL pipelines"],
      correct: "Transforming data inside the data warehouse using SQL",
    },
    {
      question: "What is a dbt model?",
      options: ["A machine learning model", "A SQL SELECT statement that defines a transformation and creates a table or view", "A data source connector", "A dashboard template"],
      correct: "A SQL SELECT statement that defines a transformation and creates a table or view",
    },
  ],

  qlik: [
    {
      question: "What is Qlik used for?",
      options: ["ETL pipeline management", "Business intelligence and data visualization", "Cloud infrastructure", "Machine learning modeling"],
      correct: "Business intelligence and data visualization",
    },
    {
      question: "What is Qlik's associative model?",
      options: ["A relational join technique", "A data engine that allows users to explore all associations in data freely, without predefined queries", "A pivot table feature", "A data warehousing method"],
      correct: "A data engine that allows users to explore all associations in data freely, without predefined queries",
    },
    {
      question: "What is QlikView vs Qlik Sense?",
      options: ["They are identical products", "QlikView is developer-driven; Qlik Sense is self-service and modern", "Qlik Sense is the older product", "QlikView is cloud-only"],
      correct: "QlikView is developer-driven; Qlik Sense is self-service and modern",
    },
  ],

  dashboards: [
    {
      question: "What is a data dashboard?",
      options: ["A database admin panel", "A visual display of key metrics and KPIs to monitor performance at a glance", "A data entry interface", "A report scheduling tool"],
      correct: "A visual display of key metrics and KPIs to monitor performance at a glance",
    },
    {
      question: "What is a KPI in the context of dashboards?",
      options: ["A chart type", "A Key Performance Indicator — a measurable value that tracks progress toward a goal", "A data source connection", "A dashboard filter"],
      correct: "A Key Performance Indicator — a measurable value that tracks progress toward a goal",
    },
    {
      question: "What makes a good dashboard design?",
      options: ["Showing as many metrics as possible", "Clear hierarchy, minimal clutter, and surfacing the most important metrics prominently", "Using many colors", "Including raw data tables"],
      correct: "Clear hierarchy, minimal clutter, and surfacing the most important metrics prominently",
    },
  ],

  analytics: [
    {
      question: "What is the difference between descriptive and predictive analytics?",
      options: ["No difference", "Descriptive summarizes past data; predictive forecasts future outcomes", "Predictive uses only historical data", "Descriptive requires ML models"],
      correct: "Descriptive summarizes past data; predictive forecasts future outcomes",
    },
    {
      question: "What is prescriptive analytics?",
      options: ["Describing what happened", "Recommending actions to achieve desired outcomes based on data and models", "Predicting future trends", "Visualizing historical data"],
      correct: "Recommending actions to achieve desired outcomes based on data and models",
    },
    {
      question: "What is a cohort analysis?",
      options: ["Segmenting data by geography", "Analyzing groups of users who share a common characteristic over time", "A/B testing results analysis", "Funnel conversion tracking"],
      correct: "Analyzing groups of users who share a common characteristic over time",
    },
  ],

  excel: [
    {
      question: "What is a VLOOKUP in Excel?",
      options: ["A chart type", "A function that searches for a value in the first column of a range and returns a value in the same row", "A data validation rule", "A pivot table function"],
      correct: "A function that searches for a value in the first column of a range and returns a value in the same row",
    },
    {
      question: "What is a Pivot Table in Excel?",
      options: ["A type of chart", "A tool to summarize, analyze, and reorganize large datasets interactively", "A named range", "A conditional formatting rule"],
      correct: "A tool to summarize, analyze, and reorganize large datasets interactively",
    },
    {
      question: "What does the IF function do in Excel?",
      options: ["Calculates averages", "Returns one value if a condition is true and another if false", "Counts non-empty cells", "Rounds numbers"],
      correct: "Returns one value if a condition is true and another if false",
    },
  ],

  "feature stores": [
    {
      question: "What is a feature store in ML?",
      options: ["A model registry", "A centralized repository for storing, sharing, and serving ML features", "A dataset versioning tool", "A training pipeline scheduler"],
      correct: "A centralized repository for storing, sharing, and serving ML features",
    },
    {
      question: "What problem does a feature store solve?",
      options: ["Slow model training", "Preventing duplicate feature engineering and ensuring consistency between training and serving", "Data lake governance", "Model explainability"],
      correct: "Preventing duplicate feature engineering and ensuring consistency between training and serving",
    },
    {
      question: "What is the difference between online and offline feature stores?",
      options: ["No difference", "Online stores serve low-latency features at inference time; offline stores serve historical features for training", "Offline stores are real-time", "Online stores only hold raw data"],
      correct: "Online stores serve low-latency features at inference time; offline stores serve historical features for training",
    },
  ],

  faiss: [
    {
      question: "What is FAISS?",
      options: ["A NoSQL database", "A library by Meta for efficient similarity search and clustering of dense vectors", "A feature engineering tool", "A model training framework"],
      correct: "A library by Meta for efficient similarity search and clustering of dense vectors",
    },
    {
      question: "What is FAISS commonly used for?",
      options: ["SQL query optimization", "Building fast nearest neighbor search in vector databases and recommendation systems", "Image resizing", "Text preprocessing"],
      correct: "Building fast nearest neighbor search in vector databases and recommendation systems",
    },
    {
      question: "What is an index in FAISS?",
      options: ["A database primary key", "A data structure enabling fast vector similarity search", "A model checkpoint", "A feature matrix"],
      correct: "A data structure enabling fast vector similarity search",
    },
  ],

  opensearch: [
    {
      question: "What is OpenSearch?",
      options: ["A web search engine", "An open-source search and analytics suite forked from Elasticsearch", "A NoSQL database", "A cloud monitoring tool"],
      correct: "An open-source search and analytics suite forked from Elasticsearch",
    },
    {
      question: "What is OpenSearch Dashboards?",
      options: ["A reporting tool", "A visualization interface for exploring and analyzing data in OpenSearch", "A data ingestion pipeline", "An alerting system"],
      correct: "A visualization interface for exploring and analyzing data in OpenSearch",
    },
    {
      question: "Why was OpenSearch created?",
      options: ["As a faster alternative to Solr", "As a community-driven fork of Elasticsearch after licensing changes by Elastic", "To add SQL support to Elasticsearch", "To provide a NoSQL alternative"],
      correct: "As a community-driven fork of Elasticsearch after licensing changes by Elastic",
    },
  ],

  "vector databases": [
    {
      question: "What is a vector database?",
      options: ["A database for storing matrices", "A database optimized for storing and querying high-dimensional vector embeddings", "A time-series database", "A graph database"],
      correct: "A database optimized for storing and querying high-dimensional vector embeddings",
    },
    {
      question: "What is vector similarity search?",
      options: ["Comparing SQL query results", "Finding vectors closest to a query vector using distance metrics like cosine similarity", "Searching documents by keyword", "Sorting data by numerical values"],
      correct: "Finding vectors closest to a query vector using distance metrics like cosine similarity",
    },
    {
      question: "Which of the following is a popular vector database?",
      options: ["PostgreSQL", "Pinecone", "MongoDB", "Cassandra"],
      correct: "Pinecone",
    },
  ],

  "decision modeling": [
    {
      question: "What is decision modeling?",
      options: ["Financial forecasting", "A structured representation of business logic and rules to support automated decision-making", "A UML diagram type", "A product roadmap format"],
      correct: "A structured representation of business logic and rules to support automated decision-making",
    },
    {
      question: "What is DMN (Decision Model and Notation)?",
      options: ["A database migration tool", "A standard for modeling and executing business decision logic in a visual table format", "A DevOps notation system", "A data masking standard"],
      correct: "A standard for modeling and executing business decision logic in a visual table format",
    },
    {
      question: "What is a decision tree in decision modeling?",
      options: ["A visualization of org charts", "A tree-like structure showing possible decisions and their outcomes", "A database index structure", "A neural network layer"],
      correct: "A tree-like structure showing possible decisions and their outcomes",
    },
  ],

  optimization: [
    {
      question: "What is optimization in the context of ML?",
      options: ["Making code run faster", "The process of minimizing a loss function to improve model parameters", "Removing unused features", "Compressing model size"],
      correct: "The process of minimizing a loss function to improve model parameters",
    },
    {
      question: "What is gradient descent?",
      options: ["A data normalization technique", "An iterative optimization algorithm that updates parameters in the direction of steepest loss decrease", "A regularization method", "A neural architecture"],
      correct: "An iterative optimization algorithm that updates parameters in the direction of steepest loss decrease",
    },
    {
      question: "What is hyperparameter tuning?",
      options: ["Adjusting model weights during training", "Finding the best configuration settings for a model before training", "Removing noisy features", "Compressing a trained model"],
      correct: "Finding the best configuration settings for a model before training",
    },
  ],

  "fusion 360": [
    {
      question: "What is Fusion 360?",
      options: ["A game engine", "Autodesk's cloud-based CAD/CAM/CAE tool for product design and manufacturing", "A video editing tool", "A 3D rendering engine"],
      correct: "Autodesk's cloud-based CAD/CAM/CAE tool for product design and manufacturing",
    },
    {
      question: "What is parametric modeling in Fusion 360?",
      options: ["Rendering photo-realistic images", "Design where dimensions are defined by parameters, allowing easy modifications", "Motion simulation", "3D printing setup"],
      correct: "Design where dimensions are defined by parameters, allowing easy modifications",
    },
    {
      question: "What is the CAM workspace in Fusion 360 used for?",
      options: ["Animating 3D models", "Generating toolpaths for CNC machining", "Creating product renders", "Simulating stress tests"],
      correct: "Generating toolpaths for CNC machining",
    },
  ],

  "autodesk generative design": [
    {
      question: "What is Autodesk Generative Design?",
      options: ["A generative AI art tool", "A design tool that uses AI and algorithms to generate optimized design alternatives based on constraints", "A rendering plugin", "A BIM platform"],
      correct: "A design tool that uses AI and algorithms to generate optimized design alternatives based on constraints",
    },
    {
      question: "What inputs does Autodesk Generative Design require?",
      options: ["Only the desired shape", "Design goals, materials, manufacturing methods, and constraints", "A 3D mesh only", "Cost and timeline only"],
      correct: "Design goals, materials, manufacturing methods, and constraints",
    },
    {
      question: "What is a key benefit of generative design?",
      options: ["Fully automated manufacturing", "Exploring thousands of design options quickly to find the most optimized solutions", "Replacing 3D modeling entirely", "Eliminating physical prototyping"],
      correct: "Exploring thousands of design options quickly to find the most optimized solutions",
    },
  ],

  deepfake: [
    {
      question: "What is a deepfake?",
      options: ["A photo filter", "AI-generated synthetic media where a person's likeness is convincingly manipulated", "A deep learning benchmark", "A video compression format"],
      correct: "AI-generated synthetic media where a person's likeness is convincingly manipulated",
    },
    {
      question: "What technology is commonly used to create deepfakes?",
      options: ["Decision trees", "Generative Adversarial Networks (GANs) and autoencoders", "Linear regression", "CNNs for classification only"],
      correct: "Generative Adversarial Networks (GANs) and autoencoders",
    },
    {
      question: "What is deepfake detection?",
      options: ["Finding hidden cameras", "Using AI models to identify whether media has been synthetically manipulated", "Detecting image compression artifacts", "Classifying video formats"],
      correct: "Using AI models to identify whether media has been synthetically manipulated",
    },
  ],

  magenta: [
    {
      question: "What is Google Magenta?",
      options: ["A color design tool", "A research project and library exploring AI's role in music and art creation", "A video generation model", "A speech-to-text API"],
      correct: "A research project and library exploring AI's role in music and art creation",
    },
    {
      question: "What framework is Magenta built on?",
      options: ["PyTorch", "TensorFlow", "JAX", "scikit-learn"],
      correct: "TensorFlow",
    },
    {
      question: "What can Magenta generate?",
      options: ["Text and code only", "Music melodies, drum patterns, and visual art using machine learning", "Deepfakes only", "3D models"],
      correct: "Music melodies, drum patterns, and visual art using machine learning",
    },
  ],

  "stable diffusion": [
    {
      question: "What is Stable Diffusion?",
      options: ["A physics simulation model", "An open-source latent diffusion model for generating images from text prompts", "A video upscaling algorithm", "A GAN-based image classifier"],
      correct: "An open-source latent diffusion model for generating images from text prompts",
    },
    {
      question: "What is a text-to-image model?",
      options: ["A model that extracts text from images", "A model that generates images based on a textual description", "An OCR tool", "A caption generator"],
      correct: "A model that generates images based on a textual description",
    },
    {
      question: "What is img2img in Stable Diffusion?",
      options: ["Converting image formats", "Using an existing image plus a prompt to guide new image generation", "Upscaling images", "Image classification"],
      correct: "Using an existing image plus a prompt to guide new image generation",
    },
  ],

  dalle: [
    {
      question: "What is DALL-E?",
      options: ["A language model", "OpenAI's image generation model that creates images from text descriptions", "A video editing tool", "A speech synthesis model"],
      correct: "OpenAI's image generation model that creates images from text descriptions",
    },
    {
      question: "What is inpainting in DALL-E?",
      options: ["Painting with AI brushes", "Editing specific regions of an image while keeping the rest intact", "Upscaling image resolution", "Generating image captions"],
      correct: "Editing specific regions of an image while keeping the rest intact",
    },
    {
      question: "What model architecture underlies DALL-E 3?",
      options: ["GAN", "VAE", "Diffusion model with CLIP guidance", "Transformer encoder only"],
      correct: "Diffusion model with CLIP guidance",
    },
  ],

  "three.js": [
    {
      question: "What is Three.js?",
      options: ["A CSS animation library", "A JavaScript library for creating 3D graphics in the browser using WebGL", "A game engine", "A physics simulation tool"],
      correct: "A JavaScript library for creating 3D graphics in the browser using WebGL",
    },
    {
      question: "What is a Scene in Three.js?",
      options: ["A camera configuration", "A container holding all objects, lights, and cameras in a 3D world", "A shader program", "A rendering loop"],
      correct: "A container holding all objects, lights, and cameras in a 3D world",
    },
    {
      question: "What is a renderer in Three.js?",
      options: ["A physics engine", "The component responsible for drawing the 3D scene onto the HTML canvas", "A model loader", "An animation controller"],
      correct: "The component responsible for drawing the 3D scene onto the HTML canvas",
    },
  ],
  docker: [
  {
    question: "What is Docker?",
    options: [
      "A programming language",
      "A containerization platform used to package applications and dependencies",
      "A database system",
      "A web server"
    ],
    correct: "A containerization platform used to package applications and dependencies",
  },
  {
    question: "What is a Docker image?",
    options: [
      "A running container",
      "A blueprint used to create containers",
      "A log file",
      "A network configuration"
    ],
    correct: "A blueprint used to create containers",
  },
  {
    question: "Which command is used to run a Docker container?",
    options: [
      "docker build",
      "docker run",
      "docker start-image",
      "docker create-file"
    ],
    correct: "docker run",
  }
],
penetrationtesting: [
  {
    question: "What is penetration testing?",
    options: [
      "A method to design websites",
      "A security practice of testing systems for vulnerabilities by simulating attacks",
      "A database system",
      "A programming language"
    ],
    correct: "A security practice of testing systems for vulnerabilities by simulating attacks",
  },
  {
    question: "What is the main goal of penetration testing?",
    options: [
      "To increase system speed",
      "To find and fix security vulnerabilities before attackers exploit them",
      "To develop applications",
      "To manage networks"
    ],
    correct: "To find and fix security vulnerabilities before attackers exploit them",
  },
  {
    question: "Which of the following is a penetration testing tool?",
    options: [
      "Photoshop",
      "Metasploit",
      "VS Code",
      "Figma"
    ],
    correct: "Metasploit",
  }
],

html: [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Multi Language"
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    correct: "<a>",
  },
  {
    question: "Which tag is used to insert an image?",
    options: [
      "<img>",
      "<image>",
      "<src>",
      "<pic>"
    ],
    correct: "<img>",
  }
],

css: [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correct: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to change text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "bgcolor"
    ],
    correct: "color",
  },
  {
    question: "Which CSS property controls the layout spacing outside elements?",
    options: [
      "padding",
      "margin",
      "border",
      "spacing"
    ],
    correct: "margin",
  }
],

javascript: [
  {
    question: "Which language is used for web page interactivity?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    correct: "JavaScript",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: [
      "int x = 10",
      "var x = 10",
      "x := 10",
      "declare x = 10"
    ],
    correct: "var x = 10",
  },
  {
    question: "Which function is used to print in console?",
    options: [
      "print()",
      "console.log()",
      "echo()",
      "log.console()"
    ],
    correct: "console.log()",
  }
],

  webgl: [
    {
      question: "What is WebGL?",
      options: ["A CSS 3D property", "A JavaScript API for rendering interactive 2D and 3D graphics in the browser via the GPU", "A web animation library", "A browser storage API"],
      correct: "A JavaScript API for rendering interactive 2D and 3D graphics in the browser via the GPU",
    },
    {
      question: "What is a shader program in WebGL?",
      options: ["A texture file", "A GPU program written in GLSL that processes vertices and pixels", "A WebGL extension", "A rendering buffer"],
      correct: "A GPU program written in GLSL that processes vertices and pixels",
    },
    {
      question: "What is a buffer in WebGL?",
      options: ["A video buffer", "A memory object on the GPU used to store vertex data like positions and colors", "A frame rate limiter", "A texture cache"],
      correct: "A memory object on the GPU used to store vertex data like positions and colors",
    },
  ],

  opengl: [
    {
      question: "What is OpenGL?",
      options: ["An open-source browser", "A cross-platform graphics API for rendering 2D and 3D vector graphics", "A game engine", "A physics library"],
      correct: "A cross-platform graphics API for rendering 2D and 3D vector graphics",
    },
    {
      question: "What is a VAO (Vertex Array Object) in OpenGL?",
      options: ["A texture container", "An object that stores the state of vertex attribute configurations", "A shader program", "A frame buffer"],
      correct: "An object that stores the state of vertex attribute configurations",
    },
    {
      question: "What is the OpenGL rendering pipeline?",
      options: ["A CI/CD pipeline for graphics", "A sequence of stages processing vertex data into final pixel output on screen", "A physics simulation loop", "A texture compression method"],
      correct: "A sequence of stages processing vertex data into final pixel output on screen",
    },
  ],

  "after effects": [
    {
      question: "What is Adobe After Effects used for?",
      options: ["Video editing and cutting", "Creating motion graphics, visual effects, and animations", "3D modeling", "Audio mixing"],
      correct: "Creating motion graphics, visual effects, and animations",
    },
    {
      question: "What is a composition in After Effects?",
      options: ["A video file format", "A container holding layers, settings, and timing for an animation sequence", "A color grading preset", "An export profile"],
      correct: "A container holding layers, settings, and timing for an animation sequence",
    },
    {
      question: "What is keyframing in After Effects?",
      options: ["Cutting video clips", "Setting specific values at certain times to create animations between those points", "Adding audio effects", "Exporting video"],
      correct: "Setting specific values at certain times to create animations between those points",
    },
  ],

  "adobe animate": [
    {
      question: "What is Adobe Animate used for?",
      options: ["Photo editing", "Creating interactive animations, web content, and vector graphics", "3D rendering", "Video compositing"],
      correct: "Creating interactive animations, web content, and vector graphics",
    },
    {
      question: "What is a timeline in Adobe Animate?",
      options: ["A project history log", "A panel controlling the sequence and timing of animation frames and layers", "A color swatch panel", "An audio editor"],
      correct: "A panel controlling the sequence and timing of animation frames and layers",
    },
    {
      question: "What is a tween in Adobe Animate?",
      options: ["A sound effect", "An automated animation between two keyframes that Animate calculates", "A vector brush", "A frame export setting"],
      correct: "An automated animation between two keyframes that Animate calculates",
    },
  ],

  "cinema 4d": [
    {
      question: "What is Cinema 4D used for?",
      options: ["2D illustration", "3D modeling, animation, motion graphics, and rendering", "Web design", "Video editing"],
      correct: "3D modeling, animation, motion graphics, and rendering",
    },
    {
      question: "What is MoGraph in Cinema 4D?",
      options: ["A camera rig tool", "A motion graphics toolset for creating complex animations with procedural cloners and effectors", "A physics simulator", "A UV unwrapping module"],
      correct: "A motion graphics toolset for creating complex animations with procedural cloners and effectors",
    },
    {
      question: "What is a null object in Cinema 4D?",
      options: ["An empty render layer", "An invisible object used as a parent or control point for organizing hierarchies", "A placeholder mesh", "A default light source"],
      correct: "An invisible object used as a parent or control point for organizing hierarchies",
    },
  ],

  lidar: [
    {
      question: "What is LiDAR?",
      options: ["A type of radar", "Light Detection and Ranging — a sensor that measures distances using laser pulses", "A GPS enhancement system", "An infrared camera"],
      correct: "Light Detection and Ranging — a sensor that measures distances using laser pulses",
    },
    {
      question: "What is a point cloud in LiDAR?",
      options: ["A cloud storage format", "A set of data points in 3D space representing the surface of objects captured by LiDAR", "A weather radar output", "A satellite image layer"],
      correct: "A set of data points in 3D space representing the surface of objects captured by LiDAR",
    },
    {
      question: "What is LiDAR used for in autonomous vehicles?",
      options: ["Streaming video", "Creating real-time 3D maps of surroundings for obstacle detection and navigation", "GPS positioning only", "Recording audio for AI"],
      correct: "Creating real-time 3D maps of surroundings for obstacle detection and navigation",
    },
  ],

  "drone programming": [
    {
      question: "What is drone programming?",
      options: ["Writing firmware for printers", "Writing software to control drone flight, navigation, and payload behavior", "Programming FPV cameras", "Building RC helicopter controllers"],
      correct: "Writing software to control drone flight, navigation, and payload behavior",
    },
    {
      question: "What is a flight controller in a drone?",
      options: ["The drone remote", "The onboard computer that stabilizes and controls the drone's flight", "A GPS module", "The drone battery manager"],
      correct: "The onboard computer that stabilizes and controls the drone's flight",
    },
    {
      question: "What is MAVLink?",
      options: ["A drone brand", "A lightweight messaging protocol for communicating with drones and ground stations", "A drone simulation software", "A flight controller firmware"],
      correct: "A lightweight messaging protocol for communicating with drones and ground stations",
    },
  ],

  "gps integration": [
    {
      question: "What is GPS integration in software?",
      options: ["Installing GPS hardware", "Incorporating GPS data into applications for location-based features and navigation", "Satellite maintenance", "Signal encryption"],
      correct: "Incorporating GPS data into applications for location-based features and navigation",
    },
    {
      question: "What is geofencing?",
      options: ["Physical fencing with sensors", "Defining virtual geographic boundaries that trigger actions when a device enters or exits", "GPS signal jamming detection", "A satellite mapping technique"],
      correct: "Defining virtual geographic boundaries that trigger actions when a device enters or exits",
    },
    {
      question: "What is NMEA in GPS integration?",
      options: ["A GPS hardware brand", "A standard data format for GPS receivers to output location and navigation data", "A satellite communication protocol", "A map projection standard"],
      correct: "A standard data format for GPS receivers to output location and navigation data",
    },
  ],

  "precision agriculture": [
    {
      question: "What is precision agriculture?",
      options: ["Manual farming techniques", "Using data, sensors, and technology to optimize crop management at the field level", "Organic farming practices", "Greenhouse automation"],
      correct: "Using data, sensors, and technology to optimize crop management at the field level",
    },
    {
      question: "How is AI used in precision agriculture?",
      options: ["Replacing farmers", "Analyzing satellite and sensor data to predict crop yields, detect disease, and optimize irrigation", "Automating invoicing", "Managing supply chains"],
      correct: "Analyzing satellite and sensor data to predict crop yields, detect disease, and optimize irrigation",
    },
    {
      question: "What role do drones play in precision agriculture?",
      options: ["Delivering seeds only", "Capturing aerial imagery and data for field monitoring, spraying, and mapping", "Providing internet connectivity", "Harvesting crops"],
      correct: "Capturing aerial imagery and data for field monitoring, spraying, and mapping",
    },
  ],

  robotics: [
    {
      question: "What is robotics?",
      options: ["Programming software agents", "The design, construction, and operation of robots to perform tasks autonomously or semi-autonomously", "A simulation framework", "A hardware testing discipline"],
      correct: "The design, construction, and operation of robots to perform tasks autonomously or semi-autonomously",
    },
    {
      question: "What is an end-effector in robotics?",
      options: ["The robot's power source", "The tool at the end of a robotic arm that interacts with the environment", "The robot's sensor array", "The robot's base platform"],
      correct: "The tool at the end of a robotic arm that interacts with the environment",
    },
    {
      question: "What is SLAM in robotics?",
      options: ["Sensor Layer and Movement", "Simultaneous Localization and Mapping — building a map while tracking the robot's location", "Servo Limb Actuation Module", "System Load and Motor control"],
      correct: "Simultaneous Localization and Mapping — building a map while tracking the robot's location",
    },
  ],

  automation: [
    {
      question: "What is process automation?",
      options: ["Writing manual scripts", "Using technology to perform repetitive tasks with minimal human intervention", "Automating hiring processes", "Configuring hardware"],
      correct: "Using technology to perform repetitive tasks with minimal human intervention",
    },
    {
      question: "What is RPA (Robotic Process Automation)?",
      options: ["Programming physical robots", "Software that mimics human actions to automate rule-based digital tasks", "A CI/CD pipeline tool", "A containerization framework"],
      correct: "Software that mimics human actions to automate rule-based digital tasks",
    },
    {
      question: "What is a workflow automation tool?",
      options: ["A project management spreadsheet", "Software that automates multi-step business processes across apps without custom coding", "A CI/CD server", "A database scheduler"],
      correct: "Software that automates multi-step business processes across apps without custom coding",
    },
  ],

  "document automation": [
    {
      question: "What is document automation?",
      options: ["Scanning physical documents", "Using software to automatically generate, populate, and manage documents from templates and data", "Archiving old files", "Converting file formats"],
      correct: "Using software to automatically generate, populate, and manage documents from templates and data",
    },
    {
      question: "What is a document template in automation?",
      options: ["A blank document", "A pre-built document structure with placeholders for dynamic data insertion", "A file naming convention", "A PDF export setting"],
      correct: "A pre-built document structure with placeholders for dynamic data insertion",
    },
    {
      question: "What industries benefit most from document automation?",
      options: ["Gaming and entertainment", "Legal, finance, healthcare, and HR for contracts, reports, and compliance documents", "Social media marketing", "Cloud infrastructure"],
      correct: "Legal, finance, healthcare, and HR for contracts, reports, and compliance documents",
    },
  ],

  "contract analytics": [
    {
      question: "What is contract analytics?",
      options: ["Writing legal contracts", "Using AI to extract, analyze, and gain insights from contract data at scale", "Contract lifecycle management only", "Legal drafting assistance"],
      correct: "Using AI to extract, analyze, and gain insights from contract data at scale",
    },
    {
      question: "What is clause extraction in contract analytics?",
      options: ["Deleting contract clauses", "Automatically identifying and pulling specific clauses from contracts using NLP", "Reformatting contract text", "Translating contracts"],
      correct: "Automatically identifying and pulling specific clauses from contracts using NLP",
    },
    {
      question: "What is contract risk analysis?",
      options: ["Pricing contracts", "Identifying potentially unfavorable or non-standard clauses that may pose legal or business risk", "Tracking contract deadlines", "Summarizing contract terms"],
      correct: "Identifying potentially unfavorable or non-standard clauses that may pose legal or business risk",
    },
  ],

  "case management software": [
    {
      question: "What is case management software?",
      options: ["A project management tool", "A system to manage, track, and resolve cases or service requests across their lifecycle", "A CRM platform", "A ticketing system for IT only"],
      correct: "A system to manage, track, and resolve cases or service requests across their lifecycle",
    },
    {
      question: "What industries use case management software?",
      options: ["Gaming and entertainment only", "Legal, healthcare, social services, insurance, and customer support", "Retail only", "Manufacturing only"],
      correct: "Legal, healthcare, social services, insurance, and customer support",
    },
    {
      question: "What is adaptive case management?",
      options: ["AI-automated case resolution", "A flexible approach where case workers can adjust the process based on the specific situation", "A rules-based workflow engine", "A data analytics add-on"],
      correct: "A flexible approach where case workers can adjust the process based on the specific situation",
    },
  ],

  "risk modeling": [
    {
      question: "What is risk modeling?",
      options: ["Documenting risks in a spreadsheet", "Using quantitative methods to estimate the probability and impact of risks", "Designing risk dashboards", "Writing risk policies"],
      correct: "Using quantitative methods to estimate the probability and impact of risks",
    },
    {
      question: "What is a Monte Carlo simulation in risk modeling?",
      options: ["A casino-based scenario", "A technique using random sampling to model the probability of different outcomes", "A deterministic risk formula", "A sensitivity chart"],
      correct: "A technique using random sampling to model the probability of different outcomes",
    },
    {
      question: "What is Value at Risk (VaR)?",
      options: ["A stock valuation method", "A measure estimating the maximum potential loss over a time period at a given confidence level", "A cash flow projection", "A budget variance metric"],
      correct: "A measure estimating the maximum potential loss over a time period at a given confidence level",
    },
  ],

  "ai for claims": [
    {
      question: "How is AI used in insurance claims processing?",
      options: ["Replacing all human adjusters", "Automating damage assessment, fraud detection, and claims routing to speed up processing", "Writing insurance policies", "Calculating insurance premiums only"],
      correct: "Automating damage assessment, fraud detection, and claims routing to speed up processing",
    },
    {
      question: "What is automated damage assessment in AI for claims?",
      options: ["A manual inspection process", "Using computer vision to analyze images and estimate repair costs without human review", "A chatbot for reporting claims", "A premium recalculation tool"],
      correct: "Using computer vision to analyze images and estimate repair costs without human review",
    },
    {
      question: "What is straight-through processing (STP) in insurance claims?",
      options: ["Processing claims by mail", "Fully automated claims handling from submission to settlement without human intervention", "A manual approval workflow", "A multi-step verification process"],
      correct: "Fully automated claims handling from submission to settlement without human intervention",
    },
  ],

  "pos systems": [
    {
      question: "What is a POS (Point of Sale) system?",
      options: ["An inventory forecasting tool", "A system used to complete retail transactions, process payments, and manage sales data", "A customer loyalty platform", "An e-commerce checkout page"],
      correct: "A system used to complete retail transactions, process payments, and manage sales data",
    },
    {
      question: "What is a cloud-based POS system?",
      options: ["A POS that runs offline only", "A POS system that stores data in the cloud enabling real-time access from anywhere", "A POS with no internet connection", "An on-premise only POS"],
      correct: "A POS system that stores data in the cloud enabling real-time access from anywhere",
    },
    {
      question: "What is inventory management in a POS system?",
      options: ["Manually counting stock", "Automatically tracking product quantities, sales, and reorder levels in real time", "A payment reconciliation feature", "A customer loyalty program"],
      correct: "Automatically tracking product quantities, sales, and reorder levels in real time",
    },
  ],

  "inventory management": [
    {
      question: "What is inventory management?",
      options: ["Managing employee schedules", "The process of ordering, storing, and tracking goods to meet demand efficiently", "A financial accounting method", "A warehouse design practice"],
      correct: "The process of ordering, storing, and tracking goods to meet demand efficiently",
    },
    {
      question: "What is the reorder point in inventory management?",
      options: ["The maximum stock level", "The inventory level at which a new order should be placed to avoid stockouts", "The safety stock quantity", "The end-of-year stock count"],
      correct: "The inventory level at which a new order should be placed to avoid stockouts",
    },
    {
      question: "What is just-in-time (JIT) inventory?",
      options: ["Keeping maximum stock levels", "Ordering inventory only as needed to reduce holding costs", "Bulk purchasing for discounts", "A real-time tracking system"],
      correct: "Ordering inventory only as needed to reduce holding costs",
    },
  ],

  "ai recommendation systems": [
    {
      question: "What is a recommendation system?",
      options: ["A search engine", "A system that predicts and suggests items a user is likely to be interested in", "A content moderation tool", "An ad targeting engine"],
      correct: "A system that predicts and suggests items a user is likely to be interested in",
    },
    {
      question: "What is collaborative filtering?",
      options: ["Filtering duplicate data", "A recommendation technique based on finding similar users and recommending what they liked", "A content-based filter", "A spam detection method"],
      correct: "A recommendation technique based on finding similar users and recommending what they liked",
    },
    {
      question: "What is the cold start problem in recommendation systems?",
      options: ["Slow loading of recommendations", "Difficulty making recommendations for new users or items with little to no data", "A caching issue", "An overfitting problem"],
      correct: "Difficulty making recommendations for new users or items with little to no data",
    },
  ],

  "citizen services": [
    {
      question: "What are digital citizen services?",
      options: ["Social media for citizens", "Government services delivered digitally to improve accessibility and efficiency for citizens", "Online voting platforms", "Tax filing only"],
      correct: "Government services delivered digitally to improve accessibility and efficiency for citizens",
    },
    {
      question: "How is AI used in citizen services?",
      options: ["Replacing government officials", "Automating document processing, chatbot assistance, and fraud detection in public services", "Building smart cities only", "Managing elections"],
      correct: "Automating document processing, chatbot assistance, and fraud detection in public services",
    },
    {
      question: "What is a citizen portal?",
      options: ["A government employee intranet", "A digital platform where citizens can access and manage government services online", "A news aggregation site", "An emergency alert system"],
      correct: "A digital platform where citizens can access and manage government services online",
    },
  ],

  wearables: [
    {
      question: "What are wearable devices?",
      options: ["Smart home appliances", "Electronic devices worn on the body that collect and process data", "AR headsets only", "Health monitors in hospitals"],
      correct: "Electronic devices worn on the body that collect and process data",
    },
    {
      question: "What is biometric data in wearables?",
      options: ["User login credentials", "Physiological measurements like heart rate, steps, and sleep patterns", "Location GPS data", "App usage statistics"],
      correct: "Physiological measurements like heart rate, steps, and sleep patterns",
    },
    {
      question: "What is edge processing in wearables?",
      options: ["Sending all data to the cloud", "Processing sensor data locally on the device to reduce latency and power consumption", "A battery optimization setting", "A Bluetooth pairing protocol"],
      correct: "Processing sensor data locally on the device to reduce latency and power consumption",
    },
  ],

  "food delivery platforms": [
    {
      question: "What technologies power food delivery platforms?",
      options: ["Only payment gateways", "Real-time GPS tracking, matching algorithms, and demand forecasting", "Static websites", "Manual dispatch systems"],
      correct: "Real-time GPS tracking, matching algorithms, and demand forecasting",
    },
    {
      question: "What is dynamic pricing in food delivery?",
      options: ["Fixed menu pricing", "Adjusting delivery fees based on demand, distance, and availability in real time", "Discount promotions only", "Loyalty reward pricing"],
      correct: "Adjusting delivery fees based on demand, distance, and availability in real time",
    },
    {
      question: "What is ETA prediction in food delivery?",
      options: ["Estimating customer wait time using static averages", "Using ML models to predict delivery time based on traffic, distance, and preparation time", "A manual dispatcher estimate", "A GPS route timer"],
      correct: "Using ML models to predict delivery time based on traffic, distance, and preparation time",
    },
  ],

  "booking platforms": [
    {
      question: "What is a booking platform?",
      options: ["A payment processor", "A digital system enabling users to search, reserve, and pay for services like hotels or flights", "An inventory management tool", "A CRM system"],
      correct: "A digital system enabling users to search, reserve, and pay for services like hotels or flights",
    },
    {
      question: "What is dynamic pricing in booking platforms?",
      options: ["Flat rate pricing", "Adjusting prices in real time based on demand, availability, and user behavior", "Loyalty discount pricing", "Seasonal pricing only"],
      correct: "Adjusting prices in real time based on demand, availability, and user behavior",
    },
    {
      question: "What is a booking engine?",
      options: ["A search engine for bookings", "The core system that processes availability checks, reservations, and confirmations", "A payment gateway", "A customer review aggregator"],
      correct: "The core system that processes availability checks, reservations, and confirmations",
    },
  ],

  "robo-advisors": [
    {
      question: "What is a robo-advisor?",
      options: ["A robot that gives medical advice", "An automated digital platform providing algorithm-driven financial planning and investment management", "A customer service chatbot", "A stock trading terminal"],
      correct: "An automated digital platform providing algorithm-driven financial planning and investment management",
    },
    {
      question: "What is portfolio rebalancing in robo-advisors?",
      options: ["Opening a new investment account", "Automatically adjusting asset allocations to maintain a desired risk profile", "Calculating investment returns", "Withdrawing funds from a portfolio"],
      correct: "Automatically adjusting asset allocations to maintain a desired risk profile",
    },
    {
      question: "What is tax-loss harvesting in robo-advisors?",
      options: ["Avoiding paying taxes", "Selling assets at a loss to offset gains and reduce tax liability", "Maximizing dividend income", "Reinvesting interest earnings"],
      correct: "Selling assets at a loss to offset gains and reduce tax liability",
    },
  ],

  "aml monitoring": [
    {
      question: "What does AML stand for in finance?",
      options: ["Asset Management Ledger", "Anti-Money Laundering", "Automated Market Lending", "Account Movement Logging"],
      correct: "Anti-Money Laundering",
    },
    {
      question: "What is transaction monitoring in AML?",
      options: ["Auditing financial statements", "Automatically reviewing transactions to detect suspicious patterns that may indicate money laundering", "Processing international wire transfers", "Generating bank statements"],
      correct: "Automatically reviewing transactions to detect suspicious patterns that may indicate money laundering",
    },
    {
      question: "What is a Suspicious Activity Report (SAR)?",
      options: ["A customer complaint form", "A report filed by financial institutions when suspicious transactions are detected", "An internal audit document", "A credit risk assessment"],
      correct: "A report filed by financial institutions when suspicious transactions are detected",
    },
  ],

  "streaming platforms": [
    {
      question: "What technologies power video streaming platforms?",
      options: ["Only CDN and storage", "Adaptive bitrate streaming, CDNs, recommendation engines, and real-time encoding", "Static file servers", "P2P file sharing"],
      correct: "Adaptive bitrate streaming, CDNs, recommendation engines, and real-time encoding",
    },
    {
      question: "What is adaptive bitrate streaming?",
      options: ["Streaming at a fixed resolution", "Automatically adjusting video quality based on the user's available bandwidth", "Buffering video content in advance", "Compressing video files before upload"],
      correct: "Automatically adjusting video quality based on the user's available bandwidth",
    },
    {
      question: "What is a CDN in streaming platforms?",
      options: ["Content Data Node", "A Content Delivery Network that distributes content from servers close to the user for low latency", "A compression algorithm", "A DRM system"],
      correct: "A Content Delivery Network that distributes content from servers close to the user for low latency",
    },
  ],

  "serverless framework": [
    {
      question: "What is the Serverless Framework?",
      options: ["A cloud provider", "An open-source tool for building and deploying serverless applications across cloud providers", "A container runtime", "A CI/CD platform"],
      correct: "An open-source tool for building and deploying serverless applications across cloud providers",
    },
    {
      question: "What is serverless.yml in the Serverless Framework?",
      options: ["A Docker config file", "The main configuration file defining functions, events, and resources for deployment", "A CI pipeline file", "A dependency manifest"],
      correct: "The main configuration file defining functions, events, and resources for deployment",
    },
    {
      question: "What cloud providers does the Serverless Framework support?",
      options: ["AWS only", "AWS, Azure, Google Cloud, and others", "Azure only", "Only on-premise deployments"],
      correct: "AWS, Azure, Google Cloud, and others",
    },
  ],

  openapi: [
    {
      question: "What is the OpenAPI Specification?",
      options: ["An open-source API gateway", "A standard format for describing RESTful APIs in a machine-readable way", "A GraphQL schema format", "An API testing tool"],
      correct: "A standard format for describing RESTful APIs in a machine-readable way",
    },
    {
      question: "What file formats are used for OpenAPI specs?",
      options: ["XML and CSV", "JSON and YAML", "TOML and INI", "HTML and Markdown"],
      correct: "JSON and YAML",
    },
    {
      question: "What is the benefit of an OpenAPI specification?",
      options: ["Replacing backend code", "Enabling auto-generation of documentation, client SDKs, and test stubs from the API definition", "Encrypting API requests", "Hosting the API automatically"],
      correct: "Enabling auto-generation of documentation, client SDKs, and test stubs from the API definition",
    },
  ],

  postman: [
    {
      question: "What is Postman used for?",
      options: ["Sending physical mail", "Testing, documenting, and collaborating on APIs", "Monitoring server performance", "Managing cloud infrastructure"],
      correct: "Testing, documenting, and collaborating on APIs",
    },
    {
      question: "What is a Postman Collection?",
      options: ["A library of Postman plugins", "A group of saved API requests organized for testing and sharing", "A response format", "An environment variable set"],
      correct: "A group of saved API requests organized for testing and sharing",
    },
    {
      question: "What is environment variables usage in Postman?",
      options: ["OS-level configuration", "Storing values like base URLs and tokens to reuse across requests easily", "Encrypting request data", "Defining test assertions"],
      correct: "Storing values like base URLs and tokens to reuse across requests easily",
    },
  ],

  swagger: [
    {
      question: "What is Swagger?",
      options: ["A backend framework", "A set of tools for designing, building, and documenting RESTful APIs using OpenAPI", "A frontend testing tool", "A database migration tool"],
      correct: "A set of tools for designing, building, and documenting RESTful APIs using OpenAPI",
    },
    {
      question: "What is Swagger UI?",
      options: ["A code editor plugin", "An interactive web interface to visualize and test an API from its OpenAPI specification", "A Postman alternative for load testing", "A code generation CLI"],
      correct: "An interactive web interface to visualize and test an API from its OpenAPI specification",
    },
    {
      question: "What is the relationship between Swagger and OpenAPI?",
      options: ["They are completely different standards", "Swagger was the original name; the spec was donated to the Linux Foundation and renamed OpenAPI", "OpenAPI is a Swagger plugin", "Swagger replaced OpenAPI"],
      correct: "Swagger was the original name; the spec was donated to the Linux Foundation and renamed OpenAPI",
    },
  ],

  redis: [
    {
      question: "What is Redis?",
      options: ["A relational database", "An in-memory data store used as a cache, message broker, and database", "A container orchestration tool", "A full-text search engine"],
      correct: "An in-memory data store used as a cache, message broker, and database",
    },
    {
      question: "What data structures does Redis support?",
      options: ["Tables and views only", "Strings, hashes, lists, sets, sorted sets, and more", "JSON documents only", "Binary blobs only"],
      correct: "Strings, hashes, lists, sets, sorted sets, and more",
    },
    {
      question: "What is Redis Pub/Sub used for?",
      options: ["Persistent data storage", "Implementing publish-subscribe messaging patterns for real-time communication", "Caching database queries", "Managing user sessions"],
      correct: "Implementing publish-subscribe messaging patterns for real-time communication",
    },
  ],

  kafka: [
    {
      question: "What is Apache Kafka?",
      options: ["A NoSQL database", "A distributed event streaming platform for high-throughput, fault-tolerant messaging", "A container runtime", "A monitoring tool"],
      correct: "A distributed event streaming platform for high-throughput, fault-tolerant messaging",
    },
    {
      question: "What is a Kafka topic?",
      options: ["A message schema", "A named stream to which records are published and from which consumers read", "A Kafka cluster node", "A consumer group"],
      correct: "A named stream to which records are published and from which consumers read",
    },
    {
      question: "What is a Kafka consumer group?",
      options: ["A cluster of Kafka brokers", "A group of consumers that jointly consume messages from a topic for parallel processing", "A producer configuration", "A topic partition strategy"],
      correct: "A group of consumers that jointly consume messages from a topic for parallel processing",
    },
  ],

  cassandra: [
    {
      question: "What is Apache Cassandra?",
      options: ["A relational database", "A distributed NoSQL database designed for high availability and linear scalability", "An in-memory cache", "A message broker"],
      correct: "A distributed NoSQL database designed for high availability and linear scalability",
    },
    {
      question: "What is a partition key in Cassandra?",
      options: ["A foreign key", "The part of the primary key that determines which node stores the data", "An auto-increment ID", "A secondary index"],
      correct: "The part of the primary key that determines which node stores the data",
    },
    {
      question: "What is eventual consistency in Cassandra?",
      options: ["Data is always immediately consistent", "Data will become consistent across all nodes over time, not instantly", "Consistency is never guaranteed", "A strict ACID property"],
      correct: "Data will become consistent across all nodes over time, not instantly",
    },
  ],

  "apache kafka": [
    {
      question: "What is Kafka's role in a data pipeline?",
      options: ["Storing processed data", "Acting as a high-throughput message bus connecting data producers and consumers in real time", "Running SQL queries", "Orchestrating batch jobs"],
      correct: "Acting as a high-throughput message bus connecting data producers and consumers in real time",
    },
    {
      question: "What is Kafka Connect?",
      options: ["A Kafka GUI", "A framework for streaming data between Kafka and external systems using connectors", "A Kafka cluster manager", "A schema registry"],
      correct: "A framework for streaming data between Kafka and external systems using connectors",
    },
    {
      question: "What is Kafka Streams?",
      options: ["A Kafka monitoring tool", "A client library for building real-time stream processing applications on top of Kafka", "A message schema validator", "A cluster replication tool"],
      correct: "A client library for building real-time stream processing applications on top of Kafka",
    },
  ],

  "apache spark": [
    {
      question: "What is the advantage of Apache Spark over Hadoop MapReduce?",
      options: ["Spark uses less storage", "Spark performs in-memory processing making it significantly faster for iterative workloads", "Spark supports more file formats", "Spark requires less setup"],
      correct: "Spark performs in-memory processing making it significantly faster for iterative workloads",
    },
    {
      question: "What is a DataFrame in Apache Spark?",
      options: ["A pandas DataFrame wrapper", "A distributed collection of data organized into named columns, similar to a database table", "A static data structure", "A Spark cluster configuration"],
      correct: "A distributed collection of data organized into named columns, similar to a database table",
    },
    {
      question: "What is Spark MLlib?",
      options: ["A Spark monitoring tool", "Spark's built-in machine learning library for scalable ML on distributed data", "A data ingestion plugin", "A SQL query engine"],
      correct: "Spark's built-in machine learning library for scalable ML on distributed data",
    },
  ],

  microservices: [
    {
      question: "What is a microservice architecture?",
      options: ["A monolithic application pattern", "An architectural style where apps are built as small, independently deployable services", "A frontend design pattern", "A cloud storage model"],
      correct: "An architectural style where apps are built as small, independently deployable services",
    },
    {
      question: "What is the circuit breaker pattern in microservices?",
      options: ["Stopping power to a server", "Preventing cascading failures by stopping calls to a failing service temporarily", "A network routing rule", "A database backup strategy"],
      correct: "Preventing cascading failures by stopping calls to a failing service temporarily",
    },
    {
      question: "What is service mesh in microservices?",
      options: ["A microservice framework", "A dedicated infrastructure layer managing service-to-service communication, security, and observability", "A container image format", "A deployment strategy"],
      correct: "A dedicated infrastructure layer managing service-to-service communication, security, and observability",
    },
  ],

  gcp: [
    {
      question: "What does GCP stand for?",
      options: ["Global Cloud Provider", "Google Cloud Platform", "General Compute Processor", "Grid Computing Protocol"],
      correct: "Google Cloud Platform",
    },
    {
      question: "What is Google Cloud Run?",
      options: ["A VM service", "A fully managed platform for running containerized applications in a serverless environment", "A Kubernetes management tool", "A CI/CD pipeline service"],
      correct: "A fully managed platform for running containerized applications in a serverless environment",
    },
    {
      question: "What is Cloud Spanner in GCP?",
      options: ["A NoSQL document store", "A globally distributed, horizontally scalable relational database", "A caching layer", "A managed Kafka service"],
      correct: "A globally distributed, horizontally scalable relational database",
    },
  ],

  communication: [
  {
    question: "What is active listening?",
    options: ["Ignoring the speaker", "Fully focusing and understanding the speaker", "Interrupting often", "Only hearing words"],
    correct: "Fully focusing and understanding the speaker",
  },
  {
    question: "Which is important for effective communication?",
    options: ["Clarity", "Confusion", "Silence always", "Ignoring feedback"],
    correct: "Clarity",
  },
  {
    question: "What does non-verbal communication include?",
    options: ["Emails", "Body language and facial expressions", "Phone calls", "Text messages"],
    correct: "Body language and facial expressions",
  },
],

collaboration: [
  {
    question: "What is collaboration?",
    options: ["Working alone", "Working together to achieve a goal", "Ignoring team members", "Competing only"],
    correct: "Working together to achieve a goal",
  },
  {
    question: "Which tool helps collaboration?",
    options: ["Slack", "Calculator", "Paint", "Notepad"],
    correct: "Slack",
  },
  {
    question: "Key factor in collaboration?",
    options: ["Trust", "Isolation", "Silence", "Delay"],
    correct: "Trust",
  },
],

teamwork: [
  {
    question: "What is teamwork?",
    options: ["Individual work", "Working as a group", "Ignoring others", "Working secretly"],
    correct: "Working as a group",
  },
  {
    question: "Which is essential for teamwork?",
    options: ["Communication", "Silence", "Ego", "Isolation"],
    correct: "Communication",
  },
  {
    question: "Team success depends on?",
    options: ["One person", "Everyone’s effort", "Luck only", "No planning"],
    correct: "Everyone’s effort",
  },
],

leadership: [
  {
    question: "What is leadership?",
    options: ["Controlling people", "Guiding and inspiring others", "Ignoring team", "Working alone"],
    correct: "Guiding and inspiring others",
  },
  {
    question: "A good leader should?",
    options: ["Blame others", "Motivate team", "Ignore feedback", "Avoid responsibility"],
    correct: "Motivate team",
  },
  {
    question: "Leadership involves?",
    options: ["Decision making", "Avoiding decisions", "Silence", "Confusion"],
    correct: "Decision making",
  },
],

management: [
  {
    question: "What is management?",
    options: ["Organizing and controlling resources", "Ignoring tasks", "Working randomly", "Avoiding planning"],
    correct: "Organizing and controlling resources",
  },
  {
    question: "Key function of management?",
    options: ["Planning", "Sleeping", "Ignoring", "Confusion"],
    correct: "Planning",
  },
  {
    question: "Management ensures?",
    options: ["Chaos", "Goal achievement", "Failure", "No direction"],
    correct: "Goal achievement",
  },
],

project_management: [
  {
    question: "What is project management?",
    options: ["Managing daily tasks only", "Planning and executing projects", "Ignoring deadlines", "Working randomly"],
    correct: "Planning and executing projects",
  },
  {
    question: "What is a project timeline?",
    options: ["Random schedule", "Defined schedule of tasks", "No plan", "Guess work"],
    correct: "Defined schedule of tasks",
  },
  {
    question: "Project success depends on?",
    options: ["Planning and execution", "Luck", "Delay", "No teamwork"],
    correct: "Planning and execution",
  },
],

agile: [
  {
    question: "What is Agile?",
    options: ["Rigid process", "Flexible development methodology", "No planning", "Waterfall method"],
    correct: "Flexible development methodology",
  },
  {
    question: "Agile focuses on?",
    options: ["Customer feedback", "Ignoring users", "Long delays", "No iteration"],
    correct: "Customer feedback",
  },
  {
    question: "Agile uses?",
    options: ["Iterations", "One-time delivery", "No updates", "Random work"],
    correct: "Iterations",
  },
],

scrum: [
  {
    question: "What is Scrum?",
    options: ["A programming language", "Agile framework", "Database", "Testing tool"],
    correct: "Agile framework",
  },
  {
    question: "Who leads Scrum team?",
    options: ["Manager", "Scrum Master", "CEO", "Tester"],
    correct: "Scrum Master",
  },
  {
    question: "Scrum works in?",
    options: ["Sprints", "Years", "Random time", "No time"],
    correct: "Sprints",
  },
],

kanban: [
  {
    question: "What is Kanban?",
    options: ["A coding language", "Visual workflow management system", "Database tool", "Testing tool"],
    correct: "Visual workflow management system",
  },
  {
    question: "Kanban uses?",
    options: ["Boards", "Servers", "Compilers", "Editors"],
    correct: "Boards",
  },
  {
    question: "Kanban helps in?",
    options: ["Tracking tasks", "Ignoring work", "Deleting tasks", "No workflow"],
    correct: "Tracking tasks",
  },
],

waterfall: [
  {
    question: "What is Waterfall model?",
    options: ["Iterative model", "Sequential development model", "Random model", "Agile model"],
    correct: "Sequential development model",
  },
  {
    question: "Waterfall follows?",
    options: ["Steps in order", "Random steps", "No steps", "Parallel work only"],
    correct: "Steps in order",
  },
  {
    question: "Waterfall is best for?",
    options: ["Fixed requirements", "Changing requirements", "No planning", "Agile teams"],
    correct: "Fixed requirements",
  },
],

devops: [
  {
    question: "What is DevOps?",
    options: ["Development only", "Development and Operations collaboration", "Testing only", "Design only"],
    correct: "Development and Operations collaboration",
  },
  {
    question: "DevOps improves?",
    options: ["Speed and reliability", "Delays", "Errors", "Manual work"],
    correct: "Speed and reliability",
  },
  {
    question: "DevOps uses?",
    options: ["CI/CD", "No automation", "Manual processes", "Delays"],
    correct: "CI/CD",
  },
],

problem_solving: [
  {
    question: "What is problem solving?",
    options: ["Ignoring problems", "Finding solutions", "Avoiding issues", "Complaining"],
    correct: "Finding solutions",
  },
  {
    question: "First step in problem solving?",
    options: ["Identify problem", "Ignore", "Delay", "Guess"],
    correct: "Identify problem",
  },
  {
    question: "Problem solving requires?",
    options: ["Analysis", "Confusion", "Random thinking", "No thinking"],
    correct: "Analysis",
  },
],

critical_thinking: [
  {
    question: "What is critical thinking?",
    options: ["Blind belief", "Analyzing logically", "Ignoring facts", "Guessing"],
    correct: "Analyzing logically",
  },
  {
    question: "Critical thinking involves?",
    options: ["Evaluation", "Ignoring", "Bias", "Assumption"],
    correct: "Evaluation",
  },
  {
    question: "Critical thinkers?",
    options: ["Ask questions", "Believe everything", "Ignore logic", "Avoid thinking"],
    correct: "Ask questions",
  },
],

creativity: [
  {
    question: "What is creativity?",
    options: ["Copying ideas", "Generating new ideas", "Ignoring ideas", "Repeating tasks"],
    correct: "Generating new ideas",
  },
  {
    question: "Creativity helps in?",
    options: ["Innovation", "Stagnation", "Confusion", "Repetition"],
    correct: "Innovation",
  },
  {
    question: "Creative thinking involves?",
    options: ["Imagination", "No thinking", "Copying", "Routine work"],
    correct: "Imagination",
  },
 ],

};

const Evaluate = ({ enteredSkills = [], onComplete }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [missingSkills, setMissingSkills] = useState([]);
  const [evaluationDone, setEvaluationDone] = useState(false);

  if (!enteredSkills.length) {
    return (
      <p className="text-white text-center mt-6">
        No skills provided for evaluation.
      </p>
    );
  }

  const currentSkill = enteredSkills[currentSkillIndex];
  const questions = skillQuestions[currentSkill] || [];

  const handleAnswer = (answer) => {
    const isCorrect =
      answer.trim().toLowerCase() ===
      questions[currentQuestionIndex].correct.toLowerCase();

    const newScore = isCorrect ? score + 1 : score;

    // Move to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setScore(newScore);
    } else {
      let updatedMissingSkills = [...missingSkills];

      if (newScore <= 1) {
        // Weak skill → add to missing
        updatedMissingSkills.push(currentSkill);
      }

      // Move to next skill
      if (currentSkillIndex < enteredSkills.length - 1) {
        setCurrentSkillIndex(currentSkillIndex + 1);
        setCurrentQuestionIndex(0);
        setScore(0);
        setMissingSkills(updatedMissingSkills);
      } else {
        setEvaluationDone(true);
        setMissingSkills(updatedMissingSkills);
      }
    }
  };

  if (evaluationDone) {
    return (
      <div className="fixed inset-0 bg-gray-900 overflow-y-auto flex flex-col items-center justify-center p-6 text-white">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Evaluation Complete!</h2>

          <p className="text-lg mb-4">Skills you need to improve:</p>

          {missingSkills.length > 0 ? (
            <ul className="list-disc list-inside text-red-400 mb-6">
              {missingSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="text-green-400 mb-6">
               You have passed the evaluation of skills you entered
            </p>
          )}

          <button
            onClick={() => onComplete(missingSkills)}
            className="bg-violet-600 hover:bg-violet-500 text-white py-2 px-6 rounded-lg font-semibold transition"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-auto flex flex-col items-center justify-center p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Evaluate your skill:{" "}
        <span className="text-violet-400">{currentSkill}</span>
      </h2>
      {questions.length > 0 ? (
        <div className="bg-gray-800 p-6 rounded-xl w-full max-w-lg shadow-lg">
          <p className="mb-6 text-lg">
            {questions[currentQuestionIndex].question}
          </p>

          <div className="flex flex-col gap-3">
            {questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-violet-600 hover:bg-violet-500 transition text-white py-2 px-4 rounded-lg shadow-md font-semibold"
              >
                {option}
              </button>
            ))}
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Question {currentQuestionIndex + 1} of {questions.length} | Skill{" "}
            {currentSkillIndex + 1} of {enteredSkills.length}
          </p>
        </div>
      ) : (
        <p className="text-gray-400">
          No questions available for this skill.
        </p>
      )}
    </div>
  );
};

export default Evaluate;