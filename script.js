'use strict';

const SECONDS_PER_QUESTION = 60;
const LETTERS = ['A', 'B', 'C', 'D'];

const topics = {
  HTML: {
    icon: '</>', name: 'HTML', tagline: 'Structure every great web page.',
    description: 'Practice semantic markup, elements, attributes, forms, accessibility and the foundations of the web.',
    short: 'Elements, tags, forms and semantics',
    questions: [
      { q: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HighText Machine Language', 'Hyper Transfer Markup Link', 'Home Tool Markup Language'], answer: 0, explanation: 'HTML stands for HyperText Markup Language. It describes the structure and meaning of web content.' },
      { q: 'Which element is used for the largest standard heading?', options: ['<heading>', '<h6>', '<h1>', '<head>'], answer: 2, explanation: 'The h1 element represents the highest-level heading. The head element holds document metadata, not visible page headings.' },
      { q: 'Which attribute provides alternative text for an image?', options: ['title', 'alt', 'src', 'caption'], answer: 1, explanation: 'The alt attribute provides a text alternative for an image, useful for screen-reader users and when an image cannot load.' },
      { q: 'Which HTML element creates a hyperlink?', options: ['<linkto>', '<href>', '<a>', '<url>'], answer: 2, explanation: 'The anchor element, <a>, creates a hyperlink. Its href attribute specifies the destination.' },
      { q: 'Which element is most appropriate for a self-contained blog post?', options: ['<span>', '<article>', '<footer>', '<b>'], answer: 1, explanation: 'The article element represents a self-contained composition that could be distributed or reused independently.' },
      { q: 'Which input type is designed for an email address?', options: ['type="mailbox"', 'type="text-email"', 'type="email"', 'type="address"'], answer: 2, explanation: 'input type="email" provides email-oriented browser validation and can show a suitable keyboard on mobile devices.' },
      { q: 'Where should page metadata such as the document title normally be placed?', options: ['Inside <body>', 'Inside <meta>', 'Inside <footer>', 'Inside <head>'], answer: 3, explanation: 'The head element contains metadata and linked resources, including the title, stylesheets and many meta elements.' },
      { q: 'What is the purpose of the label element in a form?', options: ['To style every input automatically', 'To associate descriptive text with a form control', 'To submit the form', 'To store the input value'], answer: 1, explanation: 'A label makes a form control easier to identify and can enlarge the clickable area. Use for/id or wrap the control.' },
      { q: 'Which attribute should be unique for a single element in a document?', options: ['class', 'style', 'id', 'name'], answer: 2, explanation: 'An id identifies one element in a document and should be unique. A class can be shared by many elements.' },
      { q: 'Which declaration helps browsers interpret the document using HTML5?', options: ['<doctype html5>', '<!DOCTYPE html>', '<html version="5">', '<meta html="5">'], answer: 1, explanation: '<!DOCTYPE html> is the HTML5 doctype declaration and tells browsers to use standards mode.' }
    ]
  },
  CSS: {
    icon: 'CSS', name: 'CSS', tagline: 'Turn structure into a polished interface.',
    description: 'Test selectors, the box model, flexbox, grid, responsive layouts, specificity and visual styling.',
    short: 'Selectors, layouts, colors and responsive design',
    questions: [
      { q: 'What does CSS stand for?', options: ['Creative Style Syntax', 'Cascading Style Sheets', 'Computer Styling System', 'Colorful Structure Sheets'], answer: 1, explanation: 'CSS stands for Cascading Style Sheets and controls how HTML content is presented.' },
      { q: 'Which selector targets an element with id="main"?', options: ['.main', '#main', '*main', 'main#'], answer: 1, explanation: 'The # symbol selects an element by id. A dot, such as .main, selects a class.' },
      { q: 'Which property changes the text color?', options: ['font-color', 'text-style', 'color', 'foreground'], answer: 2, explanation: 'The color property sets the foreground color of an element’s text and text decorations.' },
      { q: 'In the CSS box model, what lies between content and border?', options: ['Outline', 'Margin', 'Padding', 'Gap'], answer: 2, explanation: 'Padding is inside the border and surrounds the content. Margin sits outside the border.' },
      { q: 'Which declaration creates a flex container?', options: ['position: flex;', 'display: flex;', 'flex: display;', 'layout: flex;'], answer: 1, explanation: 'Setting display: flex on a parent creates a flex formatting context for its direct children.' },
      { q: 'Which unit is relative to the root element’s font size?', options: ['px', 'vh', 'rem', 'cm'], answer: 2, explanation: 'A rem unit is based on the computed font size of the root element, usually html.' },
      { q: 'Which property controls the space outside an element’s border?', options: ['padding', 'margin', 'border-spacing', 'inset'], answer: 1, explanation: 'Margin creates space outside the border. Padding creates space between the content and border.' },
      { q: 'What is a common purpose of a media query?', options: ['To query an SQL database', 'To load fonts only', 'To apply styles based on device or viewport conditions', 'To add JavaScript events'], answer: 2, explanation: 'Media queries apply CSS when conditions such as viewport width, orientation or user preferences match.' },
      { q: 'Which CSS layout system is designed for two-dimensional rows and columns?', options: ['Float', 'Flexbox', 'CSS Grid', 'Inline layout'], answer: 2, explanation: 'CSS Grid is designed for two-dimensional layout across rows and columns. Flexbox is mainly one-dimensional.' },
      { q: 'Which selector usually has the highest specificity among these choices?', options: ['p', '.note', '#notice', '*'], answer: 2, explanation: 'An ID selector generally has greater specificity than a class, type or universal selector.' }
    ]
  },
  JavaScript: {
    icon: 'JS', name: 'JavaScript', tagline: 'Add logic and interactivity to the web.',
    description: 'Revise variables, data types, functions, arrays, promises, DOM events and modern JavaScript concepts.',
    short: 'Variables, functions, arrays and async code',
    questions: [
      { q: 'Which keyword declares a block-scoped variable that can be reassigned?', options: ['const', 'let', 'static', 'define'], answer: 1, explanation: 'let declares a block-scoped variable that may be reassigned. const is also block-scoped but cannot be reassigned.' },
      { q: 'What is the result of typeof [] in JavaScript?', options: ['"array"', '"object"', '"list"', '"undefined"'], answer: 1, explanation: 'Arrays are objects in JavaScript, so typeof [] returns "object". Array.isArray(value) checks specifically for arrays.' },
      { q: 'Which array method returns a new array containing items that pass a test?', options: ['forEach()', 'findAll()', 'filter()', 'push()'], answer: 2, explanation: 'filter() returns a new array containing every element for which the callback returns a truthy value.' },
      { q: 'What does === check?', options: ['Value only after coercion', 'Strict equality without type coercion', 'Whether two variables share a name', 'Whether a value is truthy'], answer: 1, explanation: 'Strict equality compares values without converting their types first. For example, 5 === "5" is false.' },
      { q: 'Which method selects the first element matching a CSS selector?', options: ['document.getAll()', 'document.querySelector()', 'document.selectFirst()', 'window.findElement()'], answer: 1, explanation: 'document.querySelector() returns the first matching element, or null if there is no match.' },
      { q: 'What does a Promise represent?', options: ['A CSS animation', 'A value that may become available asynchronously', 'A loop that runs forever', 'A DOM element'], answer: 1, explanation: 'A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.' },
      { q: 'Which array method adds one or more items to the end of an array?', options: ['pop()', 'shift()', 'push()', 'slice()'], answer: 2, explanation: 'push() adds items to the end of an array and returns the array’s new length.' },
      { q: 'What is the purpose of addEventListener()?', options: ['To attach an event handler to an event target', 'To create a new HTML tag', 'To import a package', 'To start a timer automatically'], answer: 0, explanation: 'addEventListener() registers a function to run when a specified event, such as click, occurs on a target.' },
      { q: 'What does JSON.parse() do?', options: ['Converts a JavaScript value into JSON text', 'Converts JSON text into a JavaScript value', 'Sends a network request', 'Validates HTML'], answer: 1, explanation: 'JSON.parse() parses valid JSON text and produces the corresponding JavaScript value. JSON.stringify() does the reverse.' },
      { q: 'Which syntax is used for an arrow function?', options: ['function => ()', '-> function()', '() => {}', 'lambda() {}'], answer: 2, explanation: 'Arrow functions use the => token, for example const add = (a, b) => a + b.' }
    ]
  },
  React: {
    icon: '⚛', name: 'React', tagline: 'Build user interfaces from components.',
    description: 'Explore JSX, props, state, hooks, component rendering, lists, events and React best practices.',
    short: 'Components, JSX, props, state and hooks',
    questions: [
      { q: 'What is React primarily used for?', options: ['Managing relational databases', 'Building user interfaces', 'Configuring web servers', 'Writing CSS only'], answer: 1, explanation: 'React is a JavaScript library for building user interfaces from reusable components.' },
      { q: 'What is JSX?', options: ['A database query language', 'A syntax extension that lets you write markup-like code in JavaScript', 'A CSS preprocessor', 'A Node.js package manager'], answer: 1, explanation: 'JSX is a syntax extension commonly used with React to describe UI in a markup-like form.' },
      { q: 'How do you pass data from a parent component to a child component?', options: ['Through props', 'Through CSS selectors', 'Through package.json', 'Through the DOM title'], answer: 0, explanation: 'Props are inputs passed from a parent to a child component. A component should treat its props as read-only.' },
      { q: 'Which hook is commonly used to add state to a function component?', options: ['useRoute()', 'useState()', 'useClass()', 'useDataBase()'], answer: 1, explanation: 'useState() declares a state variable and a setter function in a function component.' },
      { q: 'Why should list elements have stable keys?', options: ['To change their font size', 'To help React identify items between renders', 'To encrypt component data', 'To prevent CSS from loading'], answer: 1, explanation: 'Keys help React match list items across renders, especially when items are inserted, removed or reordered.' },
      { q: 'Which hook is designed for synchronizing a component with an external system?', options: ['useEffect()', 'useMarkup()', 'useStyle()', 'useRenderNow()'], answer: 0, explanation: 'useEffect() runs an effect after rendering and is commonly used to synchronize with external systems.' },
      { q: 'In React, how should a controlled text input receive its current value?', options: ['value prop tied to state', 'Only through a CSS class', 'By setting innerHTML on every render', 'Through the React key'], answer: 0, explanation: 'A controlled input gets its value from React state and updates that state in an onChange handler.' },
      { q: 'What should you normally return from a component that renders no UI?', options: ['false as a string', 'null', 'package.json', 'A CSS selector'], answer: 1, explanation: 'Returning null means a component renders nothing.' },
      { q: 'Why should you avoid mutating React state directly?', options: ['State is always a string', 'React expects updates through setters and immutable patterns to detect changes reliably', 'Mutation deletes the component file', 'It turns JSX into HTML comments'], answer: 1, explanation: 'Create a new object or array and use the state setter. Direct mutation can make updates unpredictable and bypass expected rendering behavior.' },
      { q: 'What is the usual purpose of a React Fragment?', options: ['Group elements without adding an extra DOM wrapper', 'Make a REST API', 'Replace useState', 'Style a button automatically'], answer: 0, explanation: 'Fragments let a component return multiple adjacent elements without creating an additional DOM node.' }
    ]
  },
  'Node.js': {
    icon: 'N', name: 'Node.js', tagline: 'Run JavaScript beyond the browser.',
    description: 'Check your knowledge of the runtime, npm, modules, events, asynchronous tasks and server-side JavaScript.',
    short: 'Runtime, npm, modules and asynchronous code',
    questions: [
      { q: 'What is Node.js?', options: ['A JavaScript runtime built on Chrome’s V8 engine', 'A CSS framework', 'A relational database', 'A browser-only UI library'], answer: 0, explanation: 'Node.js lets JavaScript run outside the browser and is commonly used for tools, APIs and server-side applications.' },
      { q: 'Which command initializes a Node.js project with package.json prompts?', options: ['node start', 'npm init', 'npm serve', 'node install'], answer: 1, explanation: 'npm init creates a package.json interactively. npm init -y accepts default values.' },
      { q: 'What is the main purpose of package.json?', options: ['Store only CSS styles', 'Describe project metadata, scripts and package dependencies', 'Replace JavaScript files', 'Store browser cookies'], answer: 1, explanation: 'package.json describes a JavaScript project, including its scripts, metadata and dependency declarations.' },
      { q: 'Which built-in module helps work with file paths in a cross-platform way?', options: ['http', 'path', 'events-only', 'screen'], answer: 1, explanation: 'The path module provides utilities for joining, resolving and parsing file-system paths across operating systems.' },
      { q: 'What does non-blocking I/O generally mean in Node.js?', options: ['Every task runs on a separate CPU thread', 'The process can continue handling work while an I/O operation completes', 'Files cannot be read', 'All functions must be synchronous'], answer: 1, explanation: 'Asynchronous I/O allows the event loop to keep doing other work rather than waiting synchronously for the operation to finish.' },
      { q: 'Which object commonly exposes environment variables?', options: ['window.env', 'process.env', 'document.env', 'npm.config.env'], answer: 1, explanation: 'Node.js exposes environment variables through process.env, often used for configuration and secrets.' },
      { q: 'Which command runs a script named "start" from package.json?', options: ['npm run start', 'node package.json', 'npm build start', 'run node start'], answer: 0, explanation: 'npm run start executes the package script named start. npm start is a common shortcut for this script.' },
      { q: 'What is the purpose of the Node.js event loop?', options: ['To apply CSS styles', 'To coordinate callbacks and asynchronous operations', 'To convert MongoDB into SQL', 'To compile HTML headings'], answer: 1, explanation: 'The event loop coordinates execution of JavaScript callbacks and completion of asynchronous operations.' },
      { q: 'In CommonJS, which syntax imports functionality from a module?', options: ['include()', 'require()', 'using module', 'fetchModule()'], answer: 1, explanation: 'CommonJS modules commonly use require() to load another module. ES modules use import syntax.' },
      { q: 'Which global function can schedule a callback to run after a delay?', options: ['wait()', 'setTimeout()', 'afterDelayOnly()', 'pauseNode()'], answer: 1, explanation: 'setTimeout(callback, delay) schedules a callback after at least the specified delay; it does not block the event loop.' }
    ]
  },
  'Express.js': {
    icon: 'EX', name: 'Express.js', tagline: 'Create APIs with a lightweight web framework.',
    description: 'Practice routing, middleware, request and response objects, error handling, REST APIs and server setup.',
    short: 'Routing, middleware, APIs and requests',
    questions: [
      { q: 'What is Express.js?', options: ['A database engine', 'A web framework for Node.js', 'A browser extension', 'A frontend state hook'], answer: 1, explanation: 'Express is a minimal web framework for Node.js used to create web servers and HTTP APIs.' },
      { q: 'Which method defines a GET route in Express?', options: ['app.fetch()', 'app.get()', 'app.routeGetOnly()', 'app.read()'], answer: 1, explanation: 'app.get(path, handler) registers a route handler for HTTP GET requests at the specified path.' },
      { q: 'What is Express middleware?', options: ['A function that can access request/response objects and continue or end the request-response cycle', 'A MongoDB collection', 'A React component only', 'A package lock file'], answer: 0, explanation: 'Middleware can run code, modify req/res, end a response, or pass control onward by calling next().' },
      { q: 'In a typical JSON API, which middleware parses incoming JSON request bodies?', options: ['express.static()', 'express.json()', 'express.route()', 'express.html()'], answer: 1, explanation: 'express.json() parses incoming requests with JSON payloads and makes the parsed value available on req.body.' },
      { q: 'Where can route parameters from a path such as /users/:id be read?', options: ['req.params.id', 'req.query.id only', 'res.params.id', 'app.id'], answer: 0, explanation: 'Path parameters are available on req.params. Query-string parameters are available on req.query.' },
      { q: 'What does res.status(404).json({ error: "Not found" }) do?', options: ['Redirects to a file', 'Sends a JSON response with status 404', 'Creates a database', 'Changes the request method'], answer: 1, explanation: 'res.status() sets the response status code and res.json() sends a JSON response.' },
      { q: 'Why is middleware order important in Express?', options: ['Express ignores all later middleware', 'Requests generally pass through middleware in the order it is registered', 'It determines CSS specificity', 'It sorts database documents'], answer: 1, explanation: 'Express processes matching middleware in registration order, so parsers, authentication and routes must be arranged thoughtfully.' },
      { q: 'What is the common purpose of express.static("public")?', options: ['Serve static files from the public directory', 'Connect to MongoDB', 'Create an admin user', 'Validate request passwords'], answer: 0, explanation: 'express.static() serves files such as images, CSS and client-side JavaScript from a directory.' },
      { q: 'In Express error-handling middleware, how many parameters are conventionally declared?', options: ['Two', 'Three', 'Four', 'Five'], answer: 2, explanation: 'Error-handling middleware conventionally uses (err, req, res, next), which is four parameters.' },
      { q: 'Which HTTP method is conventionally used to create a new resource in a REST API?', options: ['GET', 'POST', 'HEAD', 'OPTIONS'], answer: 1, explanation: 'POST is commonly used to submit data that creates a resource. Actual semantics depend on the API design.' }
    ]
  },
  MongoDB: {
    icon: 'MDB', name: 'MongoDB', tagline: 'Work with documents and flexible data.',
    description: 'Review documents, collections, CRUD operations, queries, indexes, aggregation and common database concepts.',
    short: 'Documents, collections, queries and CRUD',
    questions: [
      { q: 'What type of database is MongoDB?', options: ['A document-oriented NoSQL database', 'A CSS engine', 'A spreadsheet-only service', 'A JavaScript compiler'], answer: 0, explanation: 'MongoDB stores data as BSON documents in collections rather than requiring every record to follow a relational table schema.' },
      { q: 'In MongoDB, what is a collection most similar to in a relational database?', options: ['A database server', 'A table', 'A SQL query', 'A column value'], answer: 1, explanation: 'A collection groups documents and is loosely comparable to a table, though documents can have different structures.' },
      { q: 'Which method is commonly used to find matching documents?', options: ['db.collection.find()', 'db.collection.selectSQL()', 'db.collection.readAllNow()', 'db.collection.matchHTML()'], answer: 0, explanation: 'find() retrieves documents that match a filter document, for example db.users.find({ active: true }).' },
      { q: 'Which field is automatically created as the default document identifier when not supplied?', options: ['id', 'key', 'ObjectId field _id', 'primary'], answer: 2, explanation: 'MongoDB documents have an _id field. If you do not provide one, the driver or server typically creates an ObjectId.' },
      { q: 'Which operator updates a field without replacing the entire document?', options: ['$change', '$set', '$field', '$replaceOneField'], answer: 1, explanation: '$set changes the specified fields while leaving other fields intact.' },
      { q: 'What is the usual purpose of an index in MongoDB?', options: ['Make every write free', 'Improve query efficiency for supported query patterns', 'Encrypt each document', 'Turn a collection into HTML'], answer: 1, explanation: 'Indexes can make supported queries faster but use storage and can add overhead to inserts and updates.' },
      { q: 'Which CRUD operation does deleteMany() perform?', options: ['Read multiple documents', 'Update multiple documents', 'Delete all documents matching a filter', 'Insert multiple documents'], answer: 2, explanation: 'deleteMany(filter) removes all documents that match the supplied filter. An empty filter matches every document in the collection.' },
      { q: 'What does the MongoDB aggregation pipeline do?', options: ['Processes documents through stages to transform or summarize data', 'Styles a web page', 'Starts a React server', 'Replaces database authentication'], answer: 0, explanation: 'Aggregation stages such as $match, $group and $sort process documents to filter, group, reshape and analyze data.' },
      { q: 'Which query matches documents where age is greater than 18?', options: ['{ age: { $gt: 18 } }', '{ age: greater(18) }', '{ age > 18 }', '{ $age: 18 }'], answer: 0, explanation: '$gt means greater than. The filter { age: { $gt: 18 } } matches documents whose age value exceeds 18.' },
      { q: 'What does insertOne() do?', options: ['Removes one document', 'Adds one document to a collection', 'Returns only an index', 'Creates an Express route'], answer: 1, explanation: 'insertOne(document) inserts a single document and returns information about the insertion.' }
    ]
  },
  'MERN Stack': {
    icon: 'MERN', name: 'MERN Stack', tagline: 'Connect the pieces of a full-stack application.',
    description: 'Bring frontend and backend concepts together: React, Express, Node.js, MongoDB, APIs, authentication and deployment.',
    short: 'Full-stack flow, APIs, auth and integration',
    questions: [
      { q: 'What does MERN stand for?', options: ['MongoDB, Express.js, React, Node.js', 'MySQL, Ember, Redux, Nginx', 'MongoDB, Electron, Ruby, Next.js', 'Markup, Express, React, npm'], answer: 0, explanation: 'MERN stands for MongoDB, Express.js, React and Node.js: a database, backend framework, frontend library and JavaScript runtime.' },
      { q: 'In a typical MERN app, which part renders the user interface in the browser?', options: ['MongoDB', 'Express middleware', 'React', 'Node process manager'], answer: 2, explanation: 'React builds the client-side UI. It sends HTTP requests to the backend when it needs data or actions.' },
      { q: 'What is the common role of Express and Node.js in a MERN application?', options: ['Store all data permanently in CSS', 'Provide the backend server and API logic', 'Render MongoDB collections as buttons automatically', 'Replace the browser'], answer: 1, explanation: 'Node.js runs the server-side JavaScript runtime, while Express helps define routes and middleware for APIs.' },
      { q: 'What is a typical way for a React frontend to request data from an API?', options: ['Use fetch() or a client such as Axios over HTTP', 'Directly read server memory', 'Import the MongoDB data directory into JSX', 'Use a CSS media query'], answer: 0, explanation: 'A browser frontend usually makes HTTP requests using fetch() or a library such as Axios to communicate with the API.' },
      { q: 'Why should database credentials be kept on the server rather than in browser code?', options: ['Browser code cannot display text', 'Client-side code can be inspected by users, so secrets would be exposed', 'MongoDB works only with CSS', 'React automatically removes every secret'], answer: 1, explanation: 'Anything bundled into client-side JavaScript can be inspected. Keep credentials in server environment variables and never expose them to the browser.' },
      { q: 'What is the purpose of CORS in a browser-based frontend/backend setup?', options: ['Control which cross-origin browser requests are allowed by response policy', 'Hash database passwords automatically', 'Create React components', 'Compress every MongoDB collection'], answer: 0, explanation: 'Cross-Origin Resource Sharing is a browser-enforced mechanism that lets servers specify which origins may read responses.' },
      { q: 'Where should a password normally be hashed before storing it in a database?', options: ['In CSS', 'On the server with a suitable password-hashing algorithm', 'Inside a public React component', 'In the URL query string'], answer: 1, explanation: 'The backend should hash passwords with a purpose-built algorithm such as Argon2id or bcrypt before storage; plain-text passwords should not be stored.' },
      { q: 'Why might a MERN app use environment variables?', options: ['To keep configuration such as server ports and database URIs outside source code', 'To style responsive grids', 'To make GET requests synchronous', 'To replace API validation'], answer: 0, explanation: 'Environment variables separate configuration from code. Sensitive values must remain server-side and should not be committed to source control.' },
      { q: 'What is an API route such as GET /api/products generally responsible for?', options: ['Styling the React header', 'Returning product data from the backend', 'Compiling CSS to JSX', 'Creating a browser tab'], answer: 1, explanation: 'An API route handles a request and returns a response, often JSON data retrieved from or written to a database.' },
      { q: 'What should a frontend usually do when an API request fails?', options: ['Assume the request succeeded', 'Handle the error and give the user suitable feedback', 'Print credentials into the page', 'Delete the database connection'], answer: 1, explanation: 'Handle network and server errors, show an understandable message, and optionally provide a retry path rather than assuming success.' }
    ]
  }
};

const topicDescriptions = Object.entries(topics);
const allQuestions = topicDescriptions.flatMap(([topicName, topic]) => topic.questions.map((question, index) => ({ ...question, topicName, topicShort: topic.name.toUpperCase(), topicIndex: index })));
const topicNav = document.getElementById('topic-nav');
const homeScreen = document.getElementById('home-screen');
const topicScreen = document.getElementById('topic-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const toastElement = document.getElementById('toast');
const timerBox = document.getElementById('timer-box');
const timerElement = document.getElementById('timer');
const optionsList = document.getElementById('options-list');
const questionMap = document.getElementById('question-map');
const modal = document.getElementById('confirm-modal');

let selectedTopic = 'HTML';
let currentMode = 'HTML';
let currentQuestions = [];
let answers = [];
let currentIndex = 0;
let quizDurationSeconds = 0;
let remainingSeconds = 0;
let maxUnlockedIndex = 0;
let quizStartedAt = 0;
let deadline = 0;
let timerInterval = null;
let toastTimeout = null;
let pendingSubmit = null;
let lastElapsedSeconds = 0;

function formatTime(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toastElement.classList.remove('show'), 2800);
}

function showScreen(screen) {
  [homeScreen, topicScreen, quizScreen, resultScreen].forEach((item) => item.classList.add('hidden'));
  screen.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setActiveNav(topic) {
  document.querySelectorAll('.nav-topic').forEach((button) => {
    button.classList.toggle('active', button.dataset.topic === topic);
    button.setAttribute('aria-current', button.dataset.topic === topic ? 'page' : 'false');
  });
}

function renderTopicCards() {
  const grid = document.getElementById('topic-grid');
  grid.replaceChildren();
  topicDescriptions.forEach(([name, info], index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'topic-card';
    card.dataset.topic = name;
    card.setAttribute('aria-label', `Open ${name} quiz`);

    const top = document.createElement('div');
    top.className = 'card-top';
    const icon = document.createElement('span');
    icon.className = 'topic-icon';
    icon.textContent = info.icon;
    const arrow = document.createElement('span');
    arrow.className = 'topic-arrow';
    arrow.textContent = '↗';
    top.append(icon, arrow);

    const title = document.createElement('h3');
    title.textContent = info.name;
    const description = document.createElement('p');
    description.textContent = info.short;
    const bottom = document.createElement('div');
    bottom.className = 'card-bottom';
    const count = document.createElement('span');
    count.textContent = `${info.questions.length} questions`;
    const label = document.createElement('b');
    label.textContent = 'Practice →';
    bottom.append(count, label);
    card.append(top, title, description, bottom);
    card.addEventListener('click', () => openTopic(name));
    grid.append(card);
  });
}

function openHome() {
  if (timerInterval) {
    showToast('Finish or submit your current quiz before leaving this session.');
    return;
  }
  setActiveNav('home');
  showScreen(homeScreen);
}

function openTopic(topicName) {
  if (timerInterval) {
    showToast('Your quiz is running. Submit it before switching topics.');
    return;
  }
  const topic = topics[topicName];
  if (!topic) return;
  selectedTopic = topicName;
  setActiveNav(topicName);
  const intro = document.getElementById('topic-intro');
  intro.replaceChildren();
  const copy = document.createElement('div');
  copy.className = 'topic-intro-copy';
  const kicker = document.createElement('div');
  kicker.className = 'topic-kicker';
  kicker.textContent = 'TOPIC-WISE PRACTICE';
  const heading = document.createElement('h1');
  heading.textContent = topic.name;
  const tagline = document.createElement('p');
  tagline.textContent = topic.description;
  copy.append(kicker, heading, tagline);
  const icon = document.createElement('div');
  icon.className = 'topic-large-icon';
  icon.textContent = topic.icon;
  intro.append(copy, icon);
  document.getElementById('topic-question-total').textContent = String(topic.questions.length);
  document.getElementById('start-panel-icon').textContent = topic.icon;
  document.getElementById('start-panel-title').textContent = `Ready to test your ${topic.name} skills?`;
  document.getElementById('start-panel-description').textContent = `You have ${topic.questions.length} questions and ${formatTime(topic.questions.length * SECONDS_PER_QUESTION)} total. Answer each question to unlock the next one. Explanations appear in your results.`;
  document.getElementById('topic-time-limit').textContent = formatTime(topic.questions.length * SECONDS_PER_QUESTION);
  showScreen(topicScreen);
}

function startQuiz(mode) {
  currentMode = mode;
  currentQuestions = mode === 'Full Test' ? allQuestions.slice() : topics[mode].questions.map((item) => ({ ...item, topicName: mode, topicShort: mode.toUpperCase() }));
  answers = Array(currentQuestions.length).fill(null);
  currentIndex = 0;
  maxUnlockedIndex = 0;
  quizDurationSeconds = currentQuestions.length * SECONDS_PER_QUESTION;
  remainingSeconds = quizDurationSeconds;
  quizStartedAt = Date.now();
  deadline = quizStartedAt + quizDurationSeconds * 1000;
  lastElapsedSeconds = 0;
  timerElement.textContent = formatTime(remainingSeconds);
  timerBox.classList.remove('warning');
  document.getElementById('quiz-title').innerHTML = '';
  const title = document.getElementById('quiz-title');
  const strong = document.createElement('span');
  title.textContent = mode === 'Full Test' ? 'Full Stack ' : `${mode} `;
  strong.textContent = 'Practice Quiz';
  title.append(strong);
  document.getElementById('quiz-subtitle').textContent = mode === 'Full Test' ? '80 questions across all eight topics. One minute is allotted per question.' : `${topics[mode].description} One minute is allotted per question.`;
  document.getElementById('submit-btn').innerHTML = 'Submit quiz <span>✓</span>';
  renderQuestionMap();
  renderQuestion();
  showScreen(quizScreen);
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 250);
  updateTimer();
}

function updateTimer() {
  if (!timerInterval) return;
  remainingSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  timerElement.textContent = formatTime(remainingSeconds);
  timerBox.classList.toggle('warning', remainingSeconds <= Math.min(300, Math.ceil(quizDurationSeconds * 0.15)));
  if (remainingSeconds <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    showToast('Time is up. Your quiz is being submitted.');
    submitQuiz(true);
  }
}

function renderQuestionMap() {
  questionMap.replaceChildren();
  currentQuestions.forEach((question, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'map-btn';
    button.textContent = String(index + 1).padStart(2, '0');
    button.setAttribute('aria-label', `Go to question ${index + 1}`);
    button.title = index === 0 ? 'Current question' : 'Answer previous questions to unlock';
    button.disabled = index > maxUnlockedIndex;
    button.addEventListener('click', () => {
      if (index > maxUnlockedIndex) {
        showToast('Answer each question in order to unlock the next one.');
        return;
      }
      currentIndex = index;
      renderQuestion();
    });
    questionMap.append(button);
  });
}

function renderQuestion() {
  const question = currentQuestions[currentIndex];
  if (!question) return;
  document.getElementById('progress-label').textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
  document.getElementById('answered-label').textContent = `${answers.filter((answer) => answer !== null).length} answered`;
  document.getElementById('progress-fill').style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
  document.getElementById('question-tag').textContent = question.topicShort || currentMode.toUpperCase();
  document.getElementById('question-number').textContent = `QUESTION ${String(currentIndex + 1).padStart(2, '0')}`;
  document.getElementById('question-text').textContent = question.q;
  optionsList.replaceChildren();

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `option-btn${answers[currentIndex] === optionIndex ? ' selected' : ''}`;
    button.setAttribute('aria-pressed', String(answers[currentIndex] === optionIndex));
    const letter = document.createElement('span');
    letter.className = 'option-letter';
    letter.textContent = LETTERS[optionIndex];
    const text = document.createElement('span');
    text.className = 'option-copy';
    text.textContent = option;
    const trailing = document.createElement('span');
    trailing.className = 'option-trailing';
    trailing.textContent = '✓';
    trailing.setAttribute('aria-hidden', 'true');
    button.append(letter, text, trailing);
    button.addEventListener('click', () => {
      answers[currentIndex] = optionIndex;
      renderQuestion();
    });
    optionsList.append(button);
  });

  document.querySelectorAll('.map-btn').forEach((button, index) => {
    button.classList.toggle('current', index === currentIndex);
    button.classList.toggle('answered', answers[index] !== null);
    button.classList.toggle('locked', index > maxUnlockedIndex);
    button.disabled = index > maxUnlockedIndex;
    button.title = index > maxUnlockedIndex ? 'Answer the previous question to unlock this one' : `Go to question ${index + 1}`;
    button.setAttribute('aria-current', index === currentIndex ? 'step' : 'false');
  });
  document.getElementById('prev-btn').disabled = currentIndex === 0;
  const nextButton = document.getElementById('next-btn');
  nextButton.disabled = answers[currentIndex] === null;
  nextButton.innerHTML = currentIndex === currentQuestions.length - 1 ? 'Review & submit <span>✓</span>' : 'Next question <span>→</span>';
  const submitButton = document.getElementById('submit-btn');
  submitButton.disabled = answers.some((answer) => answer === null);
  submitButton.title = submitButton.disabled ? 'Answer every question to submit the quiz' : 'Submit your completed quiz';
}

function moveNext() {
  if (answers[currentIndex] === null) {
    showToast('Please select an answer before moving to the next question.');
    return;
  }
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex += 1;
    maxUnlockedIndex = Math.max(maxUnlockedIndex, currentIndex);
    renderQuestion();
  } else {
    openSubmitConfirmation();
  }
}

function openSubmitConfirmation() {
  const unanswered = answers.filter((answer) => answer === null).length;
  if (unanswered > 0) {
    showToast('Please answer every question before submitting the quiz.');
    return;
  }
  document.getElementById('confirm-title').textContent = 'Submit your quiz?';
  document.getElementById('confirm-copy').textContent = unanswered === 0
    ? 'You have answered every question. Submit to view your score and explanations.'
    : `You have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'}. You can submit now or return to keep working.`;
  pendingSubmit = () => submitQuiz(false);
  modal.classList.remove('hidden');
}

function closeSubmitConfirmation() {
  modal.classList.add('hidden');
  pendingSubmit = null;
}

function submitQuiz(isTimeUp) {
  if (!currentQuestions.length) return;
  clearInterval(timerInterval);
  timerInterval = null;
  modal.classList.add('hidden');
  pendingSubmit = null;
  remainingSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  lastElapsedSeconds = Math.min(quizDurationSeconds, Math.max(0, quizDurationSeconds - remainingSeconds));
  const correct = currentQuestions.reduce((sum, question, index) => sum + (answers[index] === question.answer ? 1 : 0), 0);
  const incorrect = answers.reduce((sum, answer, index) => sum + (answer !== null && answer !== currentQuestions[index].answer ? 1 : 0), 0);
  const percent = Math.round((correct / currentQuestions.length) * 100);
  document.getElementById('result-score').textContent = `${correct}/${currentQuestions.length}`;
  document.getElementById('result-percent').textContent = `${percent}%`;
  document.getElementById('result-correct').textContent = String(correct);
  document.getElementById('result-incorrect').textContent = String(currentQuestions.length - correct);
  document.getElementById('result-time').textContent = formatTime(lastElapsedSeconds);
  document.getElementById('result-score-fill').style.width = `${percent}%`;
  const resultTitle = document.getElementById('result-title');
  const resultMessage = document.getElementById('result-message');
  const resultBadge = document.getElementById('result-badge');
  if (isTimeUp) {
    resultTitle.textContent = 'Time is up!';
    resultMessage.textContent = `Your answers have been saved. You completed ${answers.filter((item) => item !== null).length} of ${currentQuestions.length} questions.`;
    resultBadge.textContent = '◷';
  } else if (percent === 100) {
    resultTitle.textContent = 'Perfect score!';
    resultMessage.textContent = 'Excellent work. You answered every question correctly.';
    resultBadge.textContent = '★';
  } else if (percent >= 80) {
    resultTitle.textContent = 'Excellent work!';
    resultMessage.textContent = 'You have a strong grasp of these concepts. Keep building on it.';
    resultBadge.textContent = '✦';
  } else if (percent >= 60) {
    resultTitle.textContent = 'Good progress!';
    resultMessage.textContent = 'You are on the right track. Review a few answers and keep going.';
    resultBadge.textContent = '✓';
  } else {
    resultTitle.textContent = 'Keep practicing!';
    resultMessage.textContent = 'Every attempt helps. Read the explanations and give it another try.';
    resultBadge.textContent = '↗';
  }
  document.getElementById('review-section').classList.add('hidden');
  document.getElementById('review-btn').textContent = 'Review answers ↓';
  renderReview();
  showScreen(resultScreen);
}

function renderReview() {
  const reviewList = document.getElementById('review-list');
  reviewList.replaceChildren();
  currentQuestions.forEach((question, index) => {
    const chosen = answers[index];
    const isCorrect = chosen === question.answer;
    const item = document.createElement('article');
    item.className = 'review-item';
    const top = document.createElement('div');
    top.className = 'review-item-top';
    const status = document.createElement('span');
    status.className = `review-status${isCorrect ? '' : ' wrong'}`;
    status.textContent = isCorrect ? '✓' : '×';
    const title = document.createElement('span');
    title.className = 'review-question';
    title.textContent = `${String(index + 1).padStart(2, '0')}. ${currentMode === 'Full Test' ? `[${question.topicName}] ` : ''}${question.q}`;
    top.append(status, title);

    const answersLine = document.createElement('div');
    answersLine.className = 'review-answers';
    const your = document.createElement('div');
    your.append(document.createTextNode('Your answer: '));
    const yourValue = document.createElement('strong');
    yourValue.textContent = chosen === null ? 'Not answered' : question.options[chosen];
    if (isCorrect) yourValue.className = 'answer-correct';
    else if (chosen !== null) yourValue.className = 'answer-wrong';
    your.append(yourValue);
    const correctLine = document.createElement('div');
    correctLine.append(document.createTextNode('Correct answer: '));
    const correctValue = document.createElement('strong');
    correctValue.className = 'answer-correct';
    correctValue.textContent = question.options[question.answer];
    correctLine.append(correctValue);
    answersLine.append(your, correctLine);

    const explanation = document.createElement('div');
    explanation.className = 'review-explanation';
    explanation.textContent = question.explanation;
    item.append(top, answersLine, explanation);
    reviewList.append(item);
  });
}

function goHomeFromResult() {
  document.getElementById('review-section').classList.add('hidden');
  setActiveNav('home');
  showScreen(homeScreen);
}

function retryCurrentQuiz() {
  document.getElementById('review-section').classList.add('hidden');
  startQuiz(currentMode);
}

// Topic navigation behaves like a learning-site topic bar.
topicNav.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-topic]');
  if (!button) return;
  const topicName = button.dataset.topic;
  if (topicName === 'home') openHome();
  else openTopic(topicName);
});

document.getElementById('nav-full-test').addEventListener('click', () => {
  if (timerInterval) {
    showToast('Finish or submit your current quiz before starting the full test.');
    return;
  }
  setActiveNav('');
  startQuiz('Full Test');
});
document.getElementById('hero-full-test').addEventListener('click', () => startQuiz('Full Test'));
document.getElementById('banner-full-test').addEventListener('click', () => startQuiz('Full Test'));
document.getElementById('start-topic-btn').addEventListener('click', () => startQuiz(selectedTopic));
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});
document.getElementById('next-btn').addEventListener('click', moveNext);
document.getElementById('submit-btn').addEventListener('click', openSubmitConfirmation);
document.getElementById('cancel-submit').addEventListener('click', closeSubmitConfirmation);
document.getElementById('confirm-submit').addEventListener('click', () => {
  const submit = pendingSubmit;
  closeSubmitConfirmation();
  if (submit) submit();
});
document.getElementById('retry-btn').addEventListener('click', retryCurrentQuiz);
document.getElementById('review-retry-btn').addEventListener('click', retryCurrentQuiz);
document.getElementById('back-topics-btn').addEventListener('click', goHomeFromResult);
document.getElementById('review-btn').addEventListener('click', () => {
  const section = document.getElementById('review-section');
  section.classList.toggle('hidden');
  const visible = !section.classList.contains('hidden');
  document.getElementById('review-btn').innerHTML = visible ? 'Hide review ↑' : 'Review answers ↓';
  if (visible) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Keyboard controls: 1–4 selects an answer; arrows and Enter obey the same answer-before-next rule.
document.addEventListener('keydown', (event) => {
  if (modal && !modal.classList.contains('hidden')) {
    if (event.key === 'Escape') closeSubmitConfirmation();
    return;
  }
  if (!timerInterval || quizScreen.classList.contains('hidden')) return;
  if (['1', '2', '3', '4'].includes(event.key)) {
    answers[currentIndex] = Number(event.key) - 1;
    renderQuestion();
  } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  } else if (event.key === 'ArrowRight') {
    moveNext();
  } else if (event.key === 'Enter') {
    moveNext();
  }
});

renderTopicCards();
