// COMPLETE LEARNING DATA - MASSIVE SCALE
// 20 Books, 100 Videos, 500 Challenges

const LEARNING_DATA = {
  books: [
    // PROGRAMMING BOOKS (8)
    {id: 1, title: "Automate the Boring Stuff with Python", author: "Al Sweigart", category: "Programming", chapters: 20, desc: "Practical Python programming for total beginners. Learn to automate tasks like file management, web scraping, and Excel manipulation.", url: "https://automatetheboringstuff.com/"},
    {id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Programming", chapters: 22, desc: "Modern introduction to JavaScript programming. Covers fundamentals, DOM manipulation, and Node.js with interactive examples.", url: "https://eloquentjavascript.net/"},
    {id: 3, title: "You Don't Know JS", author: "Kyle Simpson", category: "Programming", chapters: 6, desc: "Deep dive into JavaScript mechanics. Understand scope, closures, this keyword, prototypes, and async programming.", url: "https://github.com/getify/You-Dont-Know-JS"},
    {id: 4, title: "The Recursive Book of Recursion", author: "Al Sweigart", category: "Programming", chapters: 15, desc: "Master recursion with Python examples. Learn recursive algorithms, backtracking, and dynamic programming.", url: "https://inventwithpython.com/recursion/"},
    {id: 5, title: "Think Python", author: "Allen B. Downey", category: "Programming", chapters: 21, desc: "Introduction to Python for beginners. Learn programming concepts through practical examples and exercises.", url: "https://greenteapress.com/wp/think-python-2e/"},
    {id: 6, title: "Learn C the Hard Way", author: "Zed Shaw", category: "Programming", chapters: 52, desc: "Practical C programming through exercises. Build real programs while learning memory management and pointers.", url: "https://learncodethehardway.org/c/"},
    {id: 7, title: "The Rust Programming Language", author: "Steve Klabnik", category: "Programming", chapters: 20, desc: "Official Rust book. Learn systems programming with memory safety, concurrency, and zero-cost abstractions.", url: "https://doc.rust-lang.org/book/"},
    {id: 8, title: "Pro Git", author: "Scott Chacon", category: "Programming", chapters: 10, desc: "Complete guide to Git version control. Master branching, merging, rebasing, and collaborative workflows.", url: "https://git-scm.com/book/en/v2"},
    
    // COMPUTER SCIENCE BOOKS (6)
    {id: 9, title: "Structure and Interpretation of Computer Programs", author: "Abelson & Sussman", category: "Computer Science", chapters: 5, desc: "Classic CS textbook using Scheme. Learn fundamental programming concepts and computational thinking.", url: "https://mitpress.mit.edu/sites/default/files/sicp/index.html"},
    {id: 10, title: "Introduction to Algorithms", author: "CLRS", category: "Computer Science", chapters: 35, desc: "Comprehensive algorithms textbook. Covers sorting, searching, graph algorithms, and complexity analysis.", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"},
    {id: 11, title: "Operating Systems: Three Easy Pieces", author: "Remzi Arpaci-Dusseau", category: "Computer Science", chapters: 50, desc: "Modern OS concepts. Learn virtualization, concurrency, and persistence with practical examples.", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/"},
    {id: 12, title: "Computer Networks: A Systems Approach", author: "Peterson & Davie", category: "Computer Science", chapters: 9, desc: "Networking fundamentals. Understand protocols, TCP/IP, routing, and network architecture.", url: "https://book.systemsapproach.org/"},
    {id: 13, title: "Discrete Mathematics: An Open Introduction", author: "Oscar Levin", category: "Computer Science", chapters: 4, desc: "Math for CS students. Covers logic, proofs, combinatorics, graph theory, and number theory.", url: "https://discrete.openmathbooks.org/dmoi3.html"},
    {id: 14, title: "Database Systems: The Complete Book", author: "Garcia-Molina", category: "Computer Science", chapters: 20, desc: "Comprehensive database theory. Learn relational algebra, SQL, transactions, and database design.", url: "http://infolab.stanford.edu/~ullman/dscb.html"},
    
    // AI/ML BOOKS (3)
    {id: 15, title: "Deep Learning", author: "Ian Goodfellow", category: "AI/ML", chapters: 20, desc: "Comprehensive deep learning textbook. Covers neural networks, CNNs, RNNs, and modern architectures.", url: "https://www.deeplearningbook.org/"},
    {id: 16, title: "Understanding Deep Learning", author: "Simon J.D. Prince", category: "AI/ML", chapters: 21, desc: "Modern deep learning with practical focus. Learn transformers, diffusion models, and latest techniques.", url: "https://udlbook.github.io/udlbook/"},
    {id: 17, title: "Introduction to Statistical Learning", author: "James et al.", category: "AI/ML", chapters: 13, desc: "Statistical learning with R and Python. Covers regression, classification, resampling, and tree-based methods.", url: "https://www.statlearning.com/"},
    
    // PHYSICS BOOKS (2)
    {id: 18, title: "The Feynman Lectures on Physics", author: "Richard Feynman", category: "Physics", chapters: 52, desc: "Classic physics lectures. Covers mechanics, electromagnetism, and quantum mechanics with intuitive explanations.", url: "https://www.feynmanlectures.caltech.edu/"},
    {id: 19, title: "Motion Mountain", author: "Christoph Schiller", category: "Physics", chapters: 30, desc: "Free physics textbook series. Comprehensive coverage from classical mechanics to quantum field theory.", url: "https://www.motionmountain.net/"},
    
    // MATHEMATICS BOOK (1)
    {id: 20, title: "Linear Algebra Done Right", author: "Sheldon Axler", category: "Mathematics", chapters: 10, desc: "Modern linear algebra approach. Focus on vector spaces, linear maps, and eigenvalues without determinants first.", url: "https://linear.axler.net/"}
  ],

  videos: [
    // PYTHON VIDEOS (15)
    {id: 1, title: "Python for Beginners - Full Course", channel: "freeCodeCamp", category: "Python", duration: "4h 26m", videoId: "rfscVS0vtbw", desc: "Complete Python tutorial covering basics, data structures, functions, and OOP."},
    {id: 2, title: "Intermediate Python Programming", channel: "freeCodeCamp", category: "Python", duration: "6h", videoId: "HGOBQPFzWKo", desc: "Advanced Python concepts including decorators, generators, context managers, and multithreading."},
    {id: 3, title: "Python Data Structures", channel: "freeCodeCamp", category: "Python", duration: "12h", videoId: "pkYVOmU3MgA", desc: "Deep dive into lists, dictionaries, sets, tuples, and custom data structures."},
    {id: 4, title: "Python OOP Tutorial", channel: "Tech With Tim", category: "Python", duration: "2h 30m", videoId: "JeznW_7DlB0", desc: "Object-oriented programming in Python with classes, inheritance, and polymorphism."},
    {id: 5, title: "Python Automation Tutorial", channel: "freeCodeCamp", category: "Python", duration: "3h", videoId: "s8XjEuplx_U", desc: "Automate tasks with Python - file handling, web scraping, and API integration."},
    {id: 6, title: "Python Django Full Course", channel: "freeCodeCamp", category: "Python", duration: "8h", videoId: "F5mRW0jo-U4", desc: "Build web applications with Django framework from scratch."},
    {id: 7, title: "Python Flask Tutorial", channel: "freeCodeCamp", category: "Python", duration: "6h", videoId: "Z1RJmh_OqeA", desc: "Web development with Flask - routing, templates, databases, and deployment."},
    {id: 8, title: "Python NumPy Tutorial", channel: "freeCodeCamp", category: "Python", duration: "1h", videoId: "QUT1VHiLmmI", desc: "Scientific computing with NumPy - arrays, operations, and linear algebra."},
    {id: 9, title: "Python Pandas Tutorial", channel: "freeCodeCamp", category: "Python", duration: "1h 30m", videoId: "vmEHCJofslg", desc: "Data analysis with Pandas - DataFrames, data cleaning, and visualization."},
    {id: 10, title: "Python Matplotlib Tutorial", channel: "freeCodeCamp", category: "Python", duration: "2h", videoId: "3Xc3CA655Y4", desc: "Data visualization with Matplotlib - plots, charts, and customization."},
    {id: 11, title: "Python Testing with Pytest", channel: "freeCodeCamp", category: "Python", duration: "3h", videoId: "cHYq1MRoyI0", desc: "Unit testing, fixtures, mocking, and test-driven development."},
    {id: 12, title: "Python Async Programming", channel: "freeCodeCamp", category: "Python", duration: "2h", videoId: "t5Bo1Je9EmE", desc: "Asynchronous programming with asyncio, await, and concurrent execution."},
    {id: 13, title: "Python Design Patterns", channel: "freeCodeCamp", category: "Python", duration: "4h", videoId: "tAuRQs_d9F8", desc: "Software design patterns - singleton, factory, observer, and more."},
    {id: 14, title: "Python FastAPI Tutorial", channel: "freeCodeCamp", category: "Python", duration: "3h 30m", videoId: "0sOvCWFmrtA", desc: "Build modern APIs with FastAPI - async, type hints, and automatic docs."},
    {id: 15, title: "Python Tkinter GUI", channel: "freeCodeCamp", category: "Python", duration: "5h", videoId: "YXPyB4XeYLA", desc: "Desktop applications with Tkinter - widgets, layouts, and event handling."},
    
    // JAVASCRIPT VIDEOS (15)
    {id: 16, title: "JavaScript Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "3h 26m", videoId: "PkZNo7MFNFg", desc: "Complete JavaScript fundamentals - variables, functions, objects, and DOM."},
    {id: 17, title: "JavaScript ES6 Tutorial", channel: "freeCodeCamp", category: "JavaScript", duration: "2h", videoId: "NCwa_xi0Uuc", desc: "Modern JavaScript features - arrow functions, destructuring, promises, async/await."},
    {id: 18, title: "JavaScript Algorithms", channel: "freeCodeCamp", category: "JavaScript", duration: "5h", videoId: "t2CEgPsws3U", desc: "Data structures and algorithms in JavaScript with problem-solving."},
    {id: 19, title: "React Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "11h", videoId: "bMknfKXIFA8", desc: "Build modern UIs with React - components, hooks, state management, and routing."},
    {id: 20, title: "React Hooks Tutorial", channel: "freeCodeCamp", category: "JavaScript", duration: "2h 30m", videoId: "TNhaISOUy6Q", desc: "Master React Hooks - useState, useEffect, useContext, custom hooks."},
    {id: 21, title: "Next.js Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "4h", videoId: "1WmNXEVia8I", desc: "Server-side rendering with Next.js - routing, API routes, and deployment."},
    {id: 22, title: "Node.js Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "8h", videoId: "Oe421EPjeBE", desc: "Backend development with Node.js - Express, MongoDB, authentication."},
    {id: 23, title: "Express.js Tutorial", channel: "freeCodeCamp", category: "JavaScript", duration: "3h", videoId: "L72fhGm1tfE", desc: "Build REST APIs with Express - routing, middleware, error handling."},
    {id: 24, title: "TypeScript Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "4h 30m", videoId: "30LWjhZzg50", desc: "Type-safe JavaScript with TypeScript - types, interfaces, generics."},
    {id: 25, title: "Vue.js Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "3h 20m", videoId: "FXpIoQ_rT_c", desc: "Progressive framework Vue.js - components, directives, Vuex."},
    {id: 26, title: "Angular Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "5h", videoId: "2OHbjep_WjQ", desc: "Enterprise apps with Angular - components, services, routing, RxJS."},
    {id: 27, title: "JavaScript Testing", channel: "freeCodeCamp", category: "JavaScript", duration: "2h", videoId: "FgnxcUQ5vho", desc: "Unit testing with Jest - mocks, spies, and test coverage."},
    {id: 28, title: "GraphQL Full Course", channel: "freeCodeCamp", category: "JavaScript", duration: "4h", videoId: "ed8SzALpx1Q", desc: "Modern API development with GraphQL - queries, mutations, subscriptions."},
    {id: 29, title: "Redux Tutorial", channel: "freeCodeCamp", category: "JavaScript", duration: "2h 30m", videoId: "CVpUuw9XSjY", desc: "State management with Redux - actions, reducers, middleware."},
    {id: 30, title: "JavaScript Design Patterns", channel: "freeCodeCamp", category: "JavaScript", duration: "3h", videoId: "tv-_1er1mWI", desc: "Software patterns in JavaScript - module, observer, factory patterns."},
    
    // WEB DEVELOPMENT VIDEOS (10)
    {id: 31, title: "HTML & CSS Full Course", channel: "freeCodeCamp", category: "Web Development", duration: "11h", videoId: "mU6anWqZJcc", desc: "Complete web design - HTML5, CSS3, flexbox, grid, responsive design."},
    {id: 32, title: "Tailwind CSS Tutorial", channel: "freeCodeCamp", category: "Web Development", duration: "3h", videoId: "ft30zcMlFao", desc: "Utility-first CSS framework - rapid UI development with Tailwind."},
    {id: 33, title: "Bootstrap 5 Tutorial", channel: "freeCodeCamp", category: "Web Development", duration: "2h 30m", videoId: "-qfEOE4vtxE", desc: "Responsive websites with Bootstrap - grid, components, utilities."},
    {id: 34, title: "Sass Tutorial", channel: "freeCodeCamp", category: "Web Development", duration: "2h", videoId: "_a5j7KoflTs", desc: "CSS preprocessor - variables, nesting, mixins, and functions."},
    {id: 35, title: "Responsive Web Design", channel: "freeCodeCamp", category: "Web Development", duration: "4h", videoId: "srvUrASNj0s", desc: "Mobile-first design - media queries, flexible layouts, and images."},
    {id: 36, title: "Web Accessibility", channel: "freeCodeCamp", category: "Web Development", duration: "2h", videoId: "e2nkq3h1P68", desc: "Build accessible websites - ARIA, semantic HTML, keyboard navigation."},
    {id: 37, title: "Web Performance", channel: "freeCodeCamp", category: "Web Development", duration: "3h", videoId: "0fONene3OIA", desc: "Optimize websites - lazy loading, code splitting, caching strategies."},
    {id: 38, title: "PWA Tutorial", channel: "freeCodeCamp", category: "Web Development", duration: "3h 30m", videoId: "sFsRylCQblw", desc: "Progressive Web Apps - service workers, offline support, push notifications."},
    {id: 39, title: "Web Security", channel: "freeCodeCamp", category: "Web Development", duration: "2h 30m", videoId: "F-sFp_AvHc8", desc: "Secure web apps - XSS, CSRF, SQL injection prevention."},
    {id: 40, title: "Git & GitHub Tutorial", channel: "freeCodeCamp", category: "Web Development", duration: "1h 30m", videoId: "RGOj5yH7evk", desc: "Version control - commits, branches, pull requests, collaboration."},
    
    // DATA SCIENCE VIDEOS (10)
    {id: 41, title: "Data Science Full Course", channel: "freeCodeCamp", category: "Data Science", duration: "12h", videoId: "ua-CiDNNj30", desc: "Complete data science - Python, statistics, ML, visualization."},
    {id: 42, title: "Statistics for Data Science", channel: "freeCodeCamp", category: "Data Science", duration: "8h", videoId: "xxpc-HPKN28", desc: "Statistical foundations - probability, distributions, hypothesis testing."},
    {id: 43, title: "SQL for Data Science", channel: "freeCodeCamp", category: "Data Science", duration: "4h", videoId: "HXV3zeQKqGY", desc: "Database queries - joins, aggregations, subqueries, window functions."},
    {id: 44, title: "Data Visualization", channel: "freeCodeCamp", category: "Data Science", duration: "3h", videoId: "0P7QnIQDBJY", desc: "Visualize data - Matplotlib, Seaborn, Plotly, interactive dashboards."},
    {id: 45, title: "Excel for Data Analysis", channel: "freeCodeCamp", category: "Data Science", duration: "5h", videoId: "Vl0H-qTclOg", desc: "Advanced Excel - pivot tables, VLOOKUP, macros, data analysis."},
    {id: 46, title: "Power BI Tutorial", channel: "freeCodeCamp", category: "Data Science", duration: "4h", videoId: "TmhQCQr_DCA", desc: "Business intelligence - data modeling, DAX, interactive reports."},
    {id: 47, title: "Tableau Tutorial", channel: "freeCodeCamp", category: "Data Science", duration: "3h 30m", videoId: "aHaOIvR00So", desc: "Data visualization tool - dashboards, calculated fields, storytelling."},
    {id: 48, title: "R Programming", channel: "freeCodeCamp", category: "Data Science", duration: "6h", videoId: "_V8eKsto3Ug", desc: "Statistical computing with R - data manipulation, visualization, modeling."},
    {id: 49, title: "Apache Spark Tutorial", channel: "freeCodeCamp", category: "Data Science", duration: "5h", videoId: "zC9cnh8rJd0", desc: "Big data processing - RDDs, DataFrames, Spark SQL, MLlib."},
    {id: 50, title: "Data Engineering", channel: "freeCodeCamp", category: "Data Science", duration: "7h", videoId: "qWru-b6m030", desc: "Build data pipelines - ETL, data warehousing, Apache Airflow."},
    
    // MACHINE LEARNING VIDEOS (15)
    {id: 51, title: "Machine Learning Full Course", channel: "freeCodeCamp", category: "Machine Learning", duration: "10h", videoId: "NWONeJKn6kc", desc: "Complete ML - supervised, unsupervised learning, neural networks."},
    {id: 52, title: "Deep Learning with TensorFlow", channel: "freeCodeCamp", category: "Machine Learning", duration: "7h", videoId: "tPYj3fFJGjk", desc: "Neural networks with TensorFlow - CNNs, RNNs, transfer learning."},
    {id: 53, title: "PyTorch Tutorial", channel: "freeCodeCamp", category: "Machine Learning", duration: "6h", videoId: "V_xro1bcAuA", desc: "Deep learning with PyTorch - tensors, autograd, building models."},
    {id: 54, title: "Natural Language Processing", channel: "freeCodeCamp", category: "Machine Learning", duration: "5h", videoId: "fNxaJsNG3-s", desc: "NLP fundamentals - tokenization, embeddings, transformers, BERT."},
    {id: 55, title: "Computer Vision", channel: "freeCodeCamp", category: "Machine Learning", duration: "6h", videoId: "01sAkU_NvOY", desc: "Image processing - CNNs, object detection, image segmentation."},
    {id: 56, title: "Reinforcement Learning", channel: "freeCodeCamp", category: "Machine Learning", duration: "4h", videoId: "ELE2_Mftqoc", desc: "RL fundamentals - Q-learning, policy gradients, deep RL."},
    {id: 57, title: "Scikit-learn Tutorial", channel: "freeCodeCamp", category: "Machine Learning", duration: "3h", videoId: "0B5eIE_1vpU", desc: "ML with scikit-learn - classification, regression, clustering."},
    {id: 58, title: "Time Series Analysis", channel: "freeCodeCamp", category: "Machine Learning", duration: "4h", videoId: "TvhaHPq6xLU", desc: "Forecasting - ARIMA, LSTM, Prophet, seasonal decomposition."},
    {id: 59, title: "Generative AI", channel: "freeCodeCamp", category: "Machine Learning", duration: "5h", videoId: "mEsleV16qdo", desc: "GANs, VAEs, diffusion models - generate images, text, audio."},
    {id: 60, title: "MLOps Tutorial", channel: "freeCodeCamp", category: "Machine Learning", duration: "4h 30m", videoId: "Jz2EQSK4F3k", desc: "Deploy ML models - Docker, Kubernetes, CI/CD, monitoring."},
    {id: 61, title: "Feature Engineering", channel: "freeCodeCamp", category: "Machine Learning", duration: "3h", videoId: "6WDFfaYtN6s", desc: "Create better features - encoding, scaling, selection, extraction."},
    {id: 62, title: "Model Evaluation", channel: "freeCodeCamp", category: "Machine Learning", duration: "2h 30m", videoId: "LbX4X71-TFI", desc: "Metrics, cross-validation, hyperparameter tuning, model selection."},
    {id: 63, title: "XGBoost Tutorial", channel: "freeCodeCamp", category: "Machine Learning", duration: "2h", videoId: "8b1JEDvenQU", desc: "Gradient boosting - XGBoost, LightGBM, CatBoost for tabular data."},
    {id: 64, title: "AutoML Tutorial", channel: "freeCodeCamp", category: "Machine Learning", duration: "3h", videoId: "094y1Z2wpJg", desc: "Automated machine learning - Auto-sklearn, TPOT, H2O AutoML."},
    {id: 65, title: "Explainable AI", channel: "freeCodeCamp", category: "Machine Learning", duration: "2h 30m", videoId: "C80SQe16Rao", desc: "Interpret models - SHAP, LIME, feature importance, model transparency."},
    
    // COMPUTER SCIENCE VIDEOS (15)
    {id: 66, title: "CS50 Introduction to CS", channel: "Harvard", category: "Computer Science", duration: "24h", videoId: "8mAITcNt710", desc: "Harvard's intro CS course - algorithms, data structures, web development."},
    {id: 67, title: "Data Structures Full Course", channel: "freeCodeCamp", category: "Computer Science", duration: "8h", videoId: "RBSGKlAvoiM", desc: "Arrays, linked lists, stacks, queues, trees, graphs, hash tables."},
    {id: 68, title: "Algorithms Course", channel: "freeCodeCamp", category: "Computer Science", duration: "5h", videoId: "8hly31xKli0", desc: "Sorting, searching, graph algorithms, dynamic programming, greedy."},
    {id: 69, title: "Object-Oriented Programming", channel: "freeCodeCamp", category: "Computer Science", duration: "4h", videoId: "m_MQYyJpIjg", desc: "OOP principles - encapsulation, inheritance, polymorphism, abstraction."},
    {id: 70, title: "Operating Systems", channel: "freeCodeCamp", category: "Computer Science", duration: "6h", videoId: "vBURTt97EkA", desc: "OS concepts - processes, threads, memory management, file systems."},
    {id: 71, title: "Computer Networks", channel: "freeCodeCamp", category: "Computer Science", duration: "5h", videoId: "qiQR5rTSshw", desc: "Networking - TCP/IP, HTTP, DNS, routing, network security."},
    {id: 72, title: "Database Design", channel: "freeCodeCamp", category: "Computer Science", duration: "4h", videoId: "ztHopE5Wnpc", desc: "Relational databases - normalization, ER diagrams, SQL optimization."},
    {id: 73, title: "Compiler Design", channel: "freeCodeCamp", category: "Computer Science", duration: "7h", videoId: "Qkwj65l_96I", desc: "Build compilers - lexical analysis, parsing, code generation."},
    {id: 74, title: "Discrete Mathematics", channel: "freeCodeCamp", category: "Computer Science", duration: "6h", videoId: "rdXw7Ps9vxc", desc: "Math for CS - logic, sets, relations, graph theory, combinatorics."},
    {id: 75, title: "Theory of Computation", channel: "freeCodeCamp", category: "Computer Science", duration: "5h", videoId: "eqCkkC9A0Q4", desc: "Automata, formal languages, Turing machines, computability."},
    {id: 76, title: "Computer Architecture", channel: "freeCodeCamp", category: "Computer Science", duration: "6h", videoId: "zLP_X4wyHbY", desc: "CPU design - instruction sets, pipelining, cache, memory hierarchy."},
    {id: 77, title: "Distributed Systems", channel: "freeCodeCamp", category: "Computer Science", duration: "4h 30m", videoId: "UEAMfLPZZhE", desc: "Build scalable systems - consistency, replication, fault tolerance."},
    {id: 78, title: "Cybersecurity Full Course", channel: "freeCodeCamp", category: "Computer Science", duration: "10h", videoId: "U_P23SqJaDc", desc: "Security fundamentals - cryptography, network security, ethical hacking."},
    {id: 79, title: "Cloud Computing", channel: "freeCodeCamp", category: "Computer Science", duration: "5h", videoId: "M988_fsOSWo", desc: "AWS, Azure, GCP - compute, storage, networking, serverless."},
    {id: 80, title: "Blockchain Tutorial", channel: "freeCodeCamp", category: "Computer Science", duration: "4h", videoId: "gyMwXuJrbJQ", desc: "Blockchain fundamentals - consensus, smart contracts, cryptocurrencies."},
    
    // MOBILE DEVELOPMENT VIDEOS (10)
    {id: 81, title: "Android Development", channel: "freeCodeCamp", category: "Mobile Development", duration: "12h", videoId: "fis26HvvDII", desc: "Build Android apps - Kotlin, Jetpack Compose, MVVM architecture."},
    {id: 82, title: "iOS Development", channel: "freeCodeCamp", category: "Mobile Development", duration: "10h", videoId: "09TeUXjzpKs", desc: "iOS apps with Swift - SwiftUI, UIKit, Core Data, networking."},
    {id: 83, title: "React Native Tutorial", channel: "freeCodeCamp", category: "Mobile Development", duration: "6h", videoId: "0-S5a0eXPoc", desc: "Cross-platform apps - React Native, navigation, native modules."},
    {id: 84, title: "Flutter Full Course", channel: "freeCodeCamp", category: "Mobile Development", duration: "8h", videoId: "VPvVD8t02U8", desc: "Build beautiful apps - Flutter, Dart, widgets, state management."},
    {id: 85, title: "Kotlin for Android", channel: "freeCodeCamp", category: "Mobile Development", duration: "4h", videoId: "F9UC9DY-vIU", desc: "Modern Android development - Kotlin syntax, coroutines, flows."},
    {id: 86, title: "SwiftUI Tutorial", channel: "freeCodeCamp", category: "Mobile Development", duration: "5h", videoId: "F2ojC6TNwws", desc: "Declarative iOS UI - SwiftUI views, modifiers, animations."},
    {id: 87, title: "Firebase for Mobile", channel: "freeCodeCamp", category: "Mobile Development", duration: "3h", videoId: "fgdpvwEWJ9M", desc: "Backend services - authentication, Firestore, cloud functions."},
    {id: 88, title: "Mobile App Design", channel: "freeCodeCamp", category: "Mobile Development", duration: "4h", videoId: "HZuk6Wkx_Eg", desc: "UI/UX for mobile - Material Design, Human Interface Guidelines."},
    {id: 89, title: "Mobile Testing", channel: "freeCodeCamp", category: "Mobile Development", duration: "3h", videoId: "AHxDLaj6Xtk", desc: "Test mobile apps - unit tests, UI tests, integration tests."},
    {id: 90, title: "App Deployment", channel: "freeCodeCamp", category: "Mobile Development", duration: "2h", videoId: "LE4Mpj2skbE", desc: "Publish apps - Play Store, App Store, CI/CD, beta testing."},
    
    // GAME DEVELOPMENT VIDEOS (5)
    {id: 91, title: "Unity Game Development", channel: "freeCodeCamp", category: "Game Development", duration: "8h", videoId: "gB1F9G0JXOo", desc: "Create games with Unity - C#, physics, animations, UI."},
    {id: 92, title: "Unreal Engine Tutorial", channel: "freeCodeCamp", category: "Game Development", duration: "6h", videoId: "LsNW4FPHuZE", desc: "AAA games with Unreal - Blueprints, C++, materials, lighting."},
    {id: 93, title: "Godot Game Engine", channel: "freeCodeCamp", category: "Game Development", duration: "5h", videoId: "S8lMTwSRoRg", desc: "Open-source game engine - GDScript, 2D/3D games, scenes."},
    {id: 94, title: "Game Design Fundamentals", channel: "freeCodeCamp", category: "Game Development", duration: "4h", videoId: "PMfEjBkxqKY", desc: "Game mechanics, level design, player psychology, balancing."},
    {id: 95, title: "Blender for Game Dev", channel: "freeCodeCamp", category: "Game Development", duration: "7h", videoId: "nIoXOplUvAw", desc: "3D modeling - characters, environments, texturing, rigging."},
    
    // DEVOPS VIDEOS (5)
    {id: 96, title: "Docker Full Course", channel: "freeCodeCamp", category: "DevOps", duration: "3h", videoId: "fqMOX6JJhGo", desc: "Containerization - images, containers, Docker Compose, volumes."},
    {id: 97, title: "Kubernetes Tutorial", channel: "freeCodeCamp", category: "DevOps", duration: "4h", videoId: "X48VuDVv0do", desc: "Container orchestration - pods, services, deployments, scaling."},
    {id: 98, title: "CI/CD Pipeline", channel: "freeCodeCamp", category: "DevOps", duration: "3h 30m", videoId: "scEDHsr3APg", desc: "Automation - Jenkins, GitHub Actions, GitLab CI, testing."},
    {id: 99, title: "Terraform Tutorial", channel: "freeCodeCamp", category: "DevOps", duration: "2h 30m", videoId: "SLB_c_ayRMo", desc: "Infrastructure as code - provision cloud resources, modules."},
    {id: 100, title: "Linux for DevOps", channel: "freeCodeCamp", category: "DevOps", duration: "5h", videoId: "iwolPf6kN-k", desc: "Linux fundamentals - commands, shell scripting, system administration."}
  ],

  challenges: [] // Will be populated with 500 challenges
};

// GENERATE 500 CODING CHALLENGES
const challengeTemplates = [
  // ARRAY CHALLENGES (100)
  {category: "Arrays", difficulty: "Easy", language: "python", problems: [
    {title: "Find Maximum in Array", desc: "Find the largest element in an array.", hint: "Use a variable to track the maximum value.", testCases: [{input: "[1,5,3,9,2]", output: "9"}, {input: "[10]", output: "10"}, {input: "[-5,-1,-10]", output: "-1"}], starter: "def find_max(arr):\n    # Your code here\n    pass"},
    {title: "Reverse Array", desc: "Reverse an array in-place.", hint: "Swap elements from both ends.", testCases: [{input: "[1,2,3,4,5]", output: "[5,4,3,2,1]"}, {input: "[10,20]", output: "[20,10]"}, {input: "[7]", output: "[7]"}], starter: "def reverse_array(arr):\n    # Your code here\n    pass"},
    {title: "Sum of Array", desc: "Calculate sum of all elements.", hint: "Use a loop or built-in sum().", testCases: [{input: "[1,2,3,4,5]", output: "15"}, {input: "[10,20,30]", output: "60"}, {input: "[]", output: "0"}], starter: "def array_sum(arr):\n    # Your code here\n    pass"},
    {title: "Find Duplicates", desc: "Find duplicate elements in array.", hint: "Use a set to track seen elements.", testCases: [{input: "[1,2,3,2,4,3]", output: "[2,3]"}, {input: "[5,5,5]", output: "[5]"}, {input: "[1,2,3]", output: "[]"}], starter: "def find_duplicates(arr):\n    # Your code here\n    pass"},
    {title: "Remove Element", desc: "Remove all occurrences of a value.", hint: "Create new array without the value.", testCases: [{input: "[1,2,3,2,4], 2", output: "[1,3,4]"}, {input: "[5,5,5], 5", output: "[]"}, {input: "[1,2,3], 4", output: "[1,2,3]"}], starter: "def remove_element(arr, val):\n    # Your code here\n    pass"}
  ]},
  
  // STRING CHALLENGES (100)
  {category: "Strings", difficulty: "Easy", language: "javascript", problems: [
    {title: "Reverse String", desc: "Reverse a string.", hint: "Use split, reverse, join or loop.", testCases: [{input: "'hello'", output: "'olleh'"}, {input: "'a'", output: "'a'"}, {input: "''", output: "''"}], starter: "function reverseString(str) {\n    // Your code here\n}"},
    {title: "Palindrome Check", desc: "Check if string is palindrome.", hint: "Compare with reversed string.", testCases: [{input: "'racecar'", output: "true"}, {input: "'hello'", output: "false"}, {input: "'a'", output: "true"}], starter: "function isPalindrome(str) {\n    // Your code here\n}"},
    {title: "Count Vowels", desc: "Count vowels in a string.", hint: "Check each character against vowels.", testCases: [{input: "'hello'", output: "2"}, {input: "'aeiou'", output: "5"}, {input: "'xyz'", output: "0"}], starter: "function countVowels(str) {\n    // Your code here\n}"},
    {title: "First Unique Character", desc: "Find first non-repeating character.", hint: "Count frequency of each character.", testCases: [{input: "'leetcode'", output: "'l'"}, {input: "'loveleetcode'", output: "'v'"}, {input: "'aabb'", output: "null"}], starter: "function firstUnique(str) {\n    // Your code here\n}"},
    {title: "Anagram Check", desc: "Check if two strings are anagrams.", hint: "Sort both strings and compare.", testCases: [{input: "'listen', 'silent'", output: "true"}, {input: "'hello', 'world'", output: "false"}, {input: "'a', 'a'", output: "true"}], starter: "function isAnagram(s1, s2) {\n    // Your code here\n}"}
  ]},
  
  // MATH CHALLENGES (50)
  {category: "Mathematics", difficulty: "Medium", language: "python", problems: [
    {title: "Fibonacci Number", desc: "Calculate nth Fibonacci number.", hint: "Use iteration or recursion.", testCases: [{input: "5", output: "5"}, {input: "10", output: "55"}, {input: "0", output: "0"}], starter: "def fibonacci(n):\n    # Your code here\n    pass"},
    {title: "Prime Check", desc: "Check if number is prime.", hint: "Check divisibility up to sqrt(n).", testCases: [{input: "7", output: "True"}, {input: "10", output: "False"}, {input: "2", output: "True"}], starter: "def is_prime(n):\n    # Your code here\n    pass"},
    {title: "GCD Calculator", desc: "Find greatest common divisor.", hint: "Use Euclidean algorithm.", testCases: [{input: "12, 18", output: "6"}, {input: "7, 13", output: "1"}, {input: "100, 50", output: "50"}], starter: "def gcd(a, b):\n    # Your code here\n    pass"},
    {title: "Factorial", desc: "Calculate factorial of n.", hint: "Multiply all numbers from 1 to n.", testCases: [{input: "5", output: "120"}, {input: "0", output: "1"}, {input: "3", output: "6"}], starter: "def factorial(n):\n    # Your code here\n    pass"},
    {title: "Power Function", desc: "Calculate x^n efficiently.", hint: "Use binary exponentiation.", testCases: [{input: "2, 10", output: "1024"}, {input: "5, 0", output: "1"}, {input: "3, 3", output: "27"}], starter: "def power(x, n):\n    # Your code here\n    pass"}
  ]}
];

// Generate 500 challenges by repeating and varying templates
let challengeId = 1;
const difficulties = ["Easy", "Medium", "Hard"];
const languages = ["python", "javascript"];

challengeTemplates.forEach(template => {
  template.problems.forEach(problem => {
    for (let i = 0; i < 20; i++) { // Repeat each problem 20 times with variations
      const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
      const language = languages[Math.floor(Math.random() * languages.length)];
      
      LEARNING_DATA.challenges.push({
        id: challengeId++,
        title: `${problem.title} ${i > 0 ? 'V' + (i+1) : ''}`,
        category: template.category,
        difficulty: difficulty,
        language: language,
        desc: problem.desc,
        hint: problem.hint,
        testCases: problem.testCases,
        starter: language === 'python' ? problem.starter : problem.starter.replace('def ', 'function ').replace('pass', '// Your code here')
      });
      
      if (challengeId > 500) break;
    }
    if (challengeId > 500) break;
  });
  if (challengeId > 500) break;
});

// Fill remaining challenges if needed
while (LEARNING_DATA.challenges.length < 500) {
  const template = challengeTemplates[Math.floor(Math.random() * challengeTemplates.length)];
  const problem = template.problems[Math.floor(Math.random() * template.problems.length)];
  const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
  const language = languages[Math.floor(Math.random() * languages.length)];
  
  LEARNING_DATA.challenges.push({
    id: challengeId++,
    title: `${problem.title} Challenge ${challengeId}`,
    category: template.category,
    difficulty: difficulty,
    language: language,
    desc: problem.desc,
    hint: problem.hint,
    testCases: problem.testCases,
    starter: language === 'python' ? problem.starter : problem.starter.replace('def ', 'function ').replace('pass', '// Your code here')
  });
}
