// COMPLETE COURSES DATA - 3 Full Courses with Lessons
const COURSES_DATA = {
  courses: [
    {
      id: 1,
      title: "Complete Python Programming",
      category: "Programming",
      desc: "Master Python from basics to advanced - data structures, OOP, file handling, and more",
      lessons: 10,
      duration: "20 hours",
      topics: ["Variables", "Functions", "OOP", "File I/O", "Data Structures", "Modules"],
      content: [
        {
          lesson: 1,
          title: "Python Basics & Setup",
          duration: "1h 30m",
          videoId: "rfscVS0vtbw",
          notes: "Learn Python installation, variables, data types, and basic operations. Understand print statements, input functions, and basic arithmetic.",
          quiz: [
            {q: "What is the correct way to print in Python?", options: ["print('Hello')", "echo 'Hello'", "console.log('Hello')"], answer: 0},
            {q: "Which is a valid variable name?", options: ["2var", "my_var", "my-var"], answer: 1},
            {q: "What data type is 3.14?", options: ["int", "float", "string"], answer: 1}
          ]
        },
        {
          lesson: 2,
          title: "Control Flow - If/Else",
          duration: "1h 45m",
          videoId: "rfscVS0vtbw",
          notes: "Master conditional statements, comparison operators, logical operators (and, or, not), and nested conditions.",
          quiz: [
            {q: "What does == operator do?", options: ["Assignment", "Comparison", "Addition"], answer: 1},
            {q: "Which is a logical operator?", options: ["and", "+", "=="], answer: 0},
            {q: "What is the output of: 5 > 3 and 2 < 1?", options: ["True", "False", "Error"], answer: 1}
          ]
        },
        {
          lesson: 3,
          title: "Loops - For & While",
          duration: "2h",
          videoId: "rfscVS0vtbw",
          notes: "Learn iteration with for loops, while loops, range function, break/continue statements, and nested loops.",
          quiz: [
            {q: "What does range(5) generate?", options: ["1 to 5", "0 to 4", "0 to 5"], answer: 1},
            {q: "Which keyword exits a loop?", options: ["exit", "break", "stop"], answer: 1},
            {q: "What does continue do?", options: ["Exit loop", "Skip iteration", "Restart loop"], answer: 1}
          ]
        },
        {
          lesson: 4,
          title: "Functions & Modules",
          duration: "2h 15m",
          videoId: "rfscVS0vtbw",
          notes: "Create reusable code with functions, parameters, return values, default arguments, and importing modules.",
          quiz: [
            {q: "How to define a function?", options: ["def name():", "function name():", "func name():"], answer: 0},
            {q: "What does return do?", options: ["Print value", "Send value back", "Stop program"], answer: 1},
            {q: "How to import math module?", options: ["include math", "import math", "use math"], answer: 1}
          ]
        },
        {
          lesson: 5,
          title: "Lists & Tuples",
          duration: "2h",
          videoId: "rfscVS0vtbw",
          notes: "Work with lists (mutable) and tuples (immutable). Learn indexing, slicing, methods like append, remove, sort.",
          quiz: [
            {q: "How to create a list?", options: ["list = []", "list = ()", "list = {}"], answer: 0},
            {q: "Can tuples be modified?", options: ["Yes", "No", "Sometimes"], answer: 1},
            {q: "What does list.append(5) do?", options: ["Remove 5", "Add 5 at end", "Insert 5 at start"], answer: 1}
          ]
        },
        {
          lesson: 6,
          title: "Dictionaries & Sets",
          duration: "1h 45m",
          videoId: "rfscVS0vtbw",
          notes: "Master key-value pairs with dictionaries, and unique collections with sets. Learn methods and operations.",
          quiz: [
            {q: "How to create a dictionary?", options: ["dict = []", "dict = {}", "dict = ()"], answer: 1},
            {q: "What are dictionary keys?", options: ["Values", "Unique identifiers", "Indexes"], answer: 1},
            {q: "What does set do?", options: ["Sort items", "Remove duplicates", "Add items"], answer: 1}
          ]
        },
        {
          lesson: 7,
          title: "File Handling",
          duration: "1h 30m",
          videoId: "rfscVS0vtbw",
          notes: "Read and write files using open(), read(), write(), with statement, and handling different file modes.",
          quiz: [
            {q: "Which mode opens file for reading?", options: ["'r'", "'w'", "'a'"], answer: 0},
            {q: "What does 'w' mode do?", options: ["Read", "Write (overwrite)", "Append"], answer: 1},
            {q: "Why use 'with' statement?", options: ["Faster", "Auto-close file", "Better syntax"], answer: 1}
          ]
        },
        {
          lesson: 8,
          title: "Object-Oriented Programming",
          duration: "2h 30m",
          videoId: "rfscVS0vtbw",
          notes: "Learn classes, objects, methods, inheritance, encapsulation, and polymorphism. Build reusable code.",
          quiz: [
            {q: "How to create a class?", options: ["class Name:", "def class Name:", "object Name:"], answer: 0},
            {q: "What is __init__?", options: ["Destructor", "Constructor", "Method"], answer: 1},
            {q: "What is inheritance?", options: ["Copy code", "Reuse parent class", "Delete class"], answer: 1}
          ]
        },
        {
          lesson: 9,
          title: "Exception Handling",
          duration: "1h 15m",
          videoId: "rfscVS0vtbw",
          notes: "Handle errors gracefully with try-except blocks, finally clause, and raising custom exceptions.",
          quiz: [
            {q: "What does try-except do?", options: ["Run code", "Handle errors", "Stop program"], answer: 1},
            {q: "When does finally run?", options: ["On error", "Always", "Never"], answer: 1},
            {q: "How to raise an error?", options: ["raise Error()", "throw Error()", "error()"], answer: 0}
          ]
        },
        {
          lesson: 10,
          title: "Python Libraries & Projects",
          duration: "2h",
          videoId: "rfscVS0vtbw",
          notes: "Explore popular libraries: NumPy, Pandas, Matplotlib. Build real projects combining all concepts learned.",
          quiz: [
            {q: "What is NumPy used for?", options: ["Web dev", "Numerical computing", "Graphics"], answer: 1},
            {q: "What does Pandas handle?", options: ["Images", "Data analysis", "Games"], answer: 1},
            {q: "What is Matplotlib?", options: ["Math library", "Plotting library", "Web framework"], answer: 1}
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      category: "AI/ML",
      desc: "Complete ML course covering algorithms, neural networks, and real-world applications",
      lessons: 10,
      duration: "25 hours",
      topics: ["Supervised Learning", "Neural Networks", "Deep Learning", "Model Evaluation", "Feature Engineering"],
      content: [
        {
          lesson: 1,
          title: "Introduction to Machine Learning",
          duration: "2h",
          videoId: "ukzFI9rgwfU",
          notes: "Understand ML basics, types (supervised, unsupervised, reinforcement), and real-world applications.",
          quiz: [
            {q: "What is supervised learning?", options: ["No labels", "Labeled data", "Reinforcement"], answer: 1},
            {q: "Which is unsupervised?", options: ["Classification", "Clustering", "Regression"], answer: 1},
            {q: "What is a feature?", options: ["Output", "Input variable", "Algorithm"], answer: 1}
          ]
        },
        {
          lesson: 2,
          title: "Linear Regression",
          duration: "2h 30m",
          videoId: "ukzFI9rgwfU",
          notes: "Learn linear regression, cost function, gradient descent, and making predictions with continuous values.",
          quiz: [
            {q: "What does linear regression predict?", options: ["Categories", "Continuous values", "Clusters"], answer: 1},
            {q: "What is cost function?", options: ["Prediction", "Error measure", "Feature"], answer: 1},
            {q: "What is gradient descent?", options: ["Optimization algorithm", "Prediction method", "Data cleaning"], answer: 0}
          ]
        },
        {
          lesson: 3,
          title: "Logistic Regression & Classification",
          duration: "2h 15m",
          videoId: "ukzFI9rgwfU",
          notes: "Master classification problems, sigmoid function, decision boundaries, and binary classification.",
          quiz: [
            {q: "What does logistic regression predict?", options: ["Numbers", "Probabilities", "Clusters"], answer: 1},
            {q: "What is sigmoid function?", options: ["Linear", "S-shaped curve", "Exponential"], answer: 1},
            {q: "What is classification?", options: ["Predict categories", "Predict numbers", "Group data"], answer: 0}
          ]
        },
        {
          lesson: 4,
          title: "Decision Trees & Random Forests",
          duration: "2h 30m",
          videoId: "ukzFI9rgwfU",
          notes: "Build decision trees, understand splitting criteria, ensemble methods, and random forest algorithm.",
          quiz: [
            {q: "What is a decision tree?", options: ["Linear model", "Tree-based model", "Neural network"], answer: 1},
            {q: "What is random forest?", options: ["Single tree", "Multiple trees", "Linear model"], answer: 1},
            {q: "What is ensemble learning?", options: ["One model", "Combine models", "Deep learning"], answer: 1}
          ]
        },
        {
          lesson: 5,
          title: "Support Vector Machines",
          duration: "2h",
          videoId: "ukzFI9rgwfU",
          notes: "Learn SVM for classification, kernel trick, margin maximization, and handling non-linear data.",
          quiz: [
            {q: "What does SVM find?", options: ["Average", "Best boundary", "Clusters"], answer: 1},
            {q: "What is kernel trick?", options: ["Speed up", "Handle non-linear", "Reduce features"], answer: 1},
            {q: "What is margin?", options: ["Error", "Distance to boundary", "Accuracy"], answer: 1}
          ]
        },
        {
          lesson: 6,
          title: "Neural Networks Basics",
          duration: "3h",
          videoId: "ukzFI9rgwfU",
          notes: "Understand neurons, layers, activation functions, forward propagation, and backpropagation.",
          quiz: [
            {q: "What is a neuron?", options: ["Data point", "Processing unit", "Layer"], answer: 1},
            {q: "What is activation function?", options: ["Input", "Non-linearity", "Output"], answer: 1},
            {q: "What is backpropagation?", options: ["Forward pass", "Update weights", "Prediction"], answer: 1}
          ]
        },
        {
          lesson: 7,
          title: "Deep Learning & CNNs",
          duration: "3h 30m",
          videoId: "ukzFI9rgwfU",
          notes: "Master convolutional neural networks for image processing, pooling, filters, and image classification.",
          quiz: [
            {q: "What are CNNs used for?", options: ["Text", "Images", "Audio"], answer: 1},
            {q: "What is convolution?", options: ["Pooling", "Filter operation", "Activation"], answer: 1},
            {q: "What does pooling do?", options: ["Increase size", "Reduce size", "Add layers"], answer: 1}
          ]
        },
        {
          lesson: 8,
          title: "Recurrent Neural Networks",
          duration: "2h 45m",
          videoId: "ukzFI9rgwfU",
          notes: "Learn RNNs for sequential data, LSTM, GRU, and applications in time series and NLP.",
          quiz: [
            {q: "What are RNNs for?", options: ["Images", "Sequential data", "Clustering"], answer: 1},
            {q: "What is LSTM?", options: ["CNN variant", "RNN variant", "SVM variant"], answer: 1},
            {q: "What problem does LSTM solve?", options: ["Overfitting", "Vanishing gradient", "Slow training"], answer: 1}
          ]
        },
        {
          lesson: 9,
          title: "Model Evaluation & Tuning",
          duration: "2h 30m",
          videoId: "ukzFI9rgwfU",
          notes: "Learn accuracy, precision, recall, F1-score, cross-validation, hyperparameter tuning, and avoiding overfitting.",
          quiz: [
            {q: "What is accuracy?", options: ["Correct predictions / Total", "Error rate", "Loss"], answer: 0},
            {q: "What is cross-validation?", options: ["One split", "Multiple splits", "No validation"], answer: 1},
            {q: "What is overfitting?", options: ["Too simple", "Too complex", "Perfect fit"], answer: 1}
          ]
        },
        {
          lesson: 10,
          title: "Real-World ML Projects",
          duration: "3h",
          videoId: "ukzFI9rgwfU",
          notes: "Build complete projects: image classifier, sentiment analysis, recommendation system. Deploy models.",
          quiz: [
            {q: "What is deployment?", options: ["Training", "Making model available", "Testing"], answer: 1},
            {q: "What is feature engineering?", options: ["Model selection", "Creating features", "Evaluation"], answer: 1},
            {q: "What is a pipeline?", options: ["Data only", "End-to-end workflow", "Model only"], answer: 1}
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      category: "Web Development",
      desc: "Build complete web applications with HTML, CSS, JavaScript, React, Node.js, and databases",
      lessons: 12,
      duration: "30 hours",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs"],
      content: [
        {
          lesson: 1,
          title: "HTML Fundamentals",
          duration: "2h",
          videoId: "pQN-pnXPaVg",
          notes: "Learn HTML structure, tags, semantic HTML, forms, tables, and building web page layouts.",
          quiz: [
            {q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], answer: 0},
            {q: "Which tag is for headings?", options: ["<head>", "<h1>", "<header>"], answer: 1},
            {q: "What is semantic HTML?", options: ["Styling", "Meaningful tags", "JavaScript"], answer: 1}
          ]
        },
        {
          lesson: 2,
          title: "CSS Styling & Layouts",
          duration: "2h 30m",
          videoId: "pQN-pnXPaVg",
          notes: "Master CSS selectors, box model, flexbox, grid, responsive design, and modern CSS techniques.",
          quiz: [
            {q: "What is CSS used for?", options: ["Structure", "Styling", "Logic"], answer: 1},
            {q: "What is flexbox?", options: ["Grid system", "Layout model", "Animation"], answer: 1},
            {q: "What is responsive design?", options: ["Fast loading", "Adapt to screen size", "Good colors"], answer: 1}
          ]
        },
        {
          lesson: 3,
          title: "JavaScript Basics",
          duration: "2h 45m",
          videoId: "pQN-pnXPaVg",
          notes: "Learn variables, data types, functions, arrays, objects, and DOM manipulation with JavaScript.",
          quiz: [
            {q: "What is JavaScript?", options: ["Styling language", "Programming language", "Markup language"], answer: 1},
            {q: "How to declare variable?", options: ["var x", "variable x", "x ="], answer: 0},
            {q: "What is DOM?", options: ["Data Object Model", "Document Object Model", "Display Object Model"], answer: 1}
          ]
        },
        {
          lesson: 4,
          title: "Advanced JavaScript & ES6",
          duration: "3h",
          videoId: "pQN-pnXPaVg",
          notes: "Master arrow functions, promises, async/await, destructuring, spread operator, and modern JS features.",
          quiz: [
            {q: "What is arrow function?", options: ["() => {}", "function() {}", "def():"], answer: 0},
            {q: "What is a promise?", options: ["Variable", "Async operation", "Loop"], answer: 1},
            {q: "What does async/await do?", options: ["Speed up", "Handle promises", "Create functions"], answer: 1}
          ]
        },
        {
          lesson: 5,
          title: "React Fundamentals",
          duration: "3h 30m",
          videoId: "pQN-pnXPaVg",
          notes: "Learn React components, JSX, props, state, hooks (useState, useEffect), and building UIs.",
          quiz: [
            {q: "What is React?", options: ["Framework", "Library", "Language"], answer: 1},
            {q: "What is JSX?", options: ["JavaScript XML", "Java Syntax", "JSON Extension"], answer: 0},
            {q: "What is useState?", options: ["Component", "Hook for state", "Function"], answer: 1}
          ]
        },
        {
          lesson: 6,
          title: "React Router & State Management",
          duration: "2h 45m",
          videoId: "pQN-pnXPaVg",
          notes: "Master routing with React Router, context API, and state management patterns for complex apps.",
          quiz: [
            {q: "What is React Router?", options: ["State manager", "Navigation library", "Component"], answer: 1},
            {q: "What is Context API?", options: ["Routing", "Global state", "Styling"], answer: 1},
            {q: "Why use state management?", options: ["Faster", "Share data", "Better UI"], answer: 1}
          ]
        },
        {
          lesson: 7,
          title: "Node.js & Express Basics",
          duration: "2h 30m",
          videoId: "pQN-pnXPaVg",
          notes: "Learn server-side JavaScript with Node.js, Express framework, routing, and middleware.",
          quiz: [
            {q: "What is Node.js?", options: ["Framework", "Runtime environment", "Library"], answer: 1},
            {q: "What is Express?", options: ["Database", "Web framework", "Frontend library"], answer: 1},
            {q: "What is middleware?", options: ["Database", "Function in request cycle", "Frontend"], answer: 1}
          ]
        },
        {
          lesson: 8,
          title: "REST APIs & HTTP Methods",
          duration: "2h 45m",
          videoId: "pQN-pnXPaVg",
          notes: "Build RESTful APIs, understand HTTP methods (GET, POST, PUT, DELETE), and API design principles.",
          quiz: [
            {q: "What is REST?", options: ["Database", "API architecture", "Framework"], answer: 1},
            {q: "What does GET do?", options: ["Create", "Read", "Update"], answer: 1},
            {q: "What does POST do?", options: ["Read", "Create", "Delete"], answer: 1}
          ]
        },
        {
          lesson: 9,
          title: "MongoDB & Database Design",
          duration: "3h",
          videoId: "pQN-pnXPaVg",
          notes: "Learn NoSQL with MongoDB, CRUD operations, schema design, and connecting to Node.js with Mongoose.",
          quiz: [
            {q: "What is MongoDB?", options: ["SQL database", "NoSQL database", "Framework"], answer: 1},
            {q: "What is Mongoose?", options: ["Database", "ODM library", "Server"], answer: 1},
            {q: "What is CRUD?", options: ["Create Read Update Delete", "Code Run Update Deploy", "Connect Route Use Deploy"], answer: 0}
          ]
        },
        {
          lesson: 10,
          title: "Authentication & Security",
          duration: "2h 30m",
          videoId: "pQN-pnXPaVg",
          notes: "Implement user authentication, JWT tokens, password hashing, and security best practices.",
          quiz: [
            {q: "What is JWT?", options: ["Database", "Token standard", "Framework"], answer: 1},
            {q: "Why hash passwords?", options: ["Speed", "Security", "Storage"], answer: 1},
            {q: "What is authentication?", options: ["Styling", "Verify identity", "Database"], answer: 1}
          ]
        },
        {
          lesson: 11,
          title: "Deployment & DevOps",
          duration: "2h 15m",
          videoId: "pQN-pnXPaVg",
          notes: "Deploy applications to cloud platforms, environment variables, CI/CD basics, and production best practices.",
          quiz: [
            {q: "What is deployment?", options: ["Development", "Making app live", "Testing"], answer: 1},
            {q: "What is CI/CD?", options: ["Database", "Continuous Integration/Deployment", "Framework"], answer: 1},
            {q: "What are environment variables?", options: ["Code", "Configuration values", "Functions"], answer: 1}
          ]
        },
        {
          lesson: 12,
          title: "Full Stack Project",
          duration: "4h",
          videoId: "pQN-pnXPaVg",
          notes: "Build a complete full-stack application combining React frontend, Node.js backend, MongoDB database, and deploy it.",
          quiz: [
            {q: "What is full stack?", options: ["Frontend only", "Backend only", "Frontend + Backend"], answer: 2},
            {q: "What connects frontend to backend?", options: ["HTML", "API calls", "CSS"], answer: 1},
            {q: "What is the tech stack?", options: ["One technology", "Combination of technologies", "Framework"], answer: 1}
          ]
        }
      ]
    }
  ]
};
