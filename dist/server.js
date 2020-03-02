/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./src/server.js\");\n\nObject(_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/libs/db.js":
/*!************************!*\
  !*** ./src/libs/db.js ***!
  \************************/
/*! exports provided: mockDb, get, put, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mockDb\", function() { return mockDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"put\", function() { return put; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\n/* harmony import */ var levelup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! levelup */ \"levelup\");\n/* harmony import */ var levelup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(levelup__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leveldown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leveldown */ \"leveldown\");\n/* harmony import */ var leveldown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leveldown__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar db;\nvar instance = false;\nvar mocking = false;\n\nfunction startDb() {\n  if (!instance && !mocking) db = levelup__WEBPACK_IMPORTED_MODULE_0___default()(leveldown__WEBPACK_IMPORTED_MODULE_1___default()('./.storage'));\n  instance = true;\n}\n\nfunction mockDb(_x) {\n  return _mockDb.apply(this, arguments);\n}\n\nfunction _mockDb() {\n  _mockDb = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mock) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            try {\n              db = mock;\n              mocking = true;\n              instance = true;\n            } catch (e) {}\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _mockDb.apply(this, arguments);\n}\n\nfunction get(key) {\n  startDb();\n  return db.get(key);\n}\nfunction put(key, value) {\n  startDb();\n  return db.put(key, value);\n}\nfunction del(key) {\n  startDb();\n  return db.del(key);\n}\n\n//# sourceURL=webpack:///./src/libs/db.js?");

/***/ }),

/***/ "./src/libs/jwt.js":
/*!*************************!*\
  !*** ./src/libs/jwt.js ***!
  \*************************/
/*! exports provided: secret, saltRounds, sign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secret\", function() { return secret; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saltRounds\", function() { return saltRounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sign\", function() { return sign; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nvar secret = function secret() {\n  return process.env.SECRET || '.`5H+C8ewL~&wat\"z<-A.eHmW2M}./m)w;zbh\\'aBZwshA>!M;h&dyBhnaJK{_\"Y';\n};\nvar saltRounds = function saltRounds() {\n  return +(process.env.SALT_ROUNDS || 10);\n};\nfunction sign(data) {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(data, secret(), {\n    expiresIn: '1d'\n  });\n}\n\nfunction isNotRestricted(url) {\n  return !(url === '/login' || url === '/signup' || url === '/');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  req.user = {\n    id: 0\n  };\n  var notRestricted = isNotRestricted(req.originalUrl);\n\n  if (notRestricted) {\n    if (!req.headers.authorization && !/^Bearer /.test(req.headers.authorization)) {\n      res.status(401).send([]);\n      return;\n    }\n\n    try {\n      var data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(req.headers.authorization.replace('Bearer ', ''), secret());\n\n      if (data) {\n        req.user = data;\n        next();\n        return;\n      }\n    } catch (e) {\n      res.status(401).send([]);\n      next();\n      return;\n    }\n  }\n\n  next();\n});\n\n//# sourceURL=webpack:///./src/libs/jwt.js?");

/***/ }),

/***/ "./src/routes/auth.js":
/*!****************************!*\
  !*** ./src/routes/auth.js ***!
  \****************************/
/*! exports provided: loginPath, signupPath, login, signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginPath\", function() { return loginPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signupPath\", function() { return signupPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return signup; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/db */ \"./src/libs/db.js\");\n/* harmony import */ var _libs_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/jwt */ \"./src/libs/jwt.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar compare = bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare,\n    hash = bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash;\nvar loginPath = '/login';\nvar signupPath = '/signup';\nfunction login(_x, _x2) {\n  return _login.apply(this, arguments);\n}\n\nfunction _login() {\n  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, user, pass, current;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, user = _req$body.user, pass = _req$body.pass;\n\n            if (!(user && pass)) {\n              _context.next = 24;\n              break;\n            }\n\n            _context.prev = 2;\n            _context.t0 = JSON;\n            _context.next = 6;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(\"User-\".concat(user));\n\n          case 6:\n            _context.t1 = _context.sent;\n            current = _context.t0.parse.call(_context.t0, _context.t1);\n            _context.t2 = Number.isInteger(current.id) && current.pass;\n\n            if (!_context.t2) {\n              _context.next = 13;\n              break;\n            }\n\n            _context.next = 12;\n            return compare(pass, current.pass);\n\n          case 12:\n            _context.t2 = _context.sent;\n\n          case 13:\n            if (!_context.t2) {\n              _context.next = 17;\n              break;\n            }\n\n            current.now = Date.now();\n            res.status(200).send(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(current, Object(_libs_jwt__WEBPACK_IMPORTED_MODULE_3__[\"secret\"])(), {\n              expiresIn: '1d'\n            }));\n            return _context.abrupt(\"return\");\n\n          case 17:\n            _context.next = 21;\n            break;\n\n          case 19:\n            _context.prev = 19;\n            _context.t3 = _context[\"catch\"](2);\n\n          case 21:\n            res.status(401).send('');\n            _context.next = 25;\n            break;\n\n          case 24:\n            res.status(500).send('');\n\n          case 25:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 19]]);\n  }));\n  return _login.apply(this, arguments);\n}\n\nfunction strongPassword(pass) {\n  return /\\d/.test(pass) && /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /\\W/.test(pass) && pass.length > 7;\n}\n\nfunction signup(_x3, _x4) {\n  return _signup.apply(this, arguments);\n}\n\nfunction _signup() {\n  _signup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var _req$body2, user, pass, status, response, currentUser, id, data;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body2 = req.body, user = _req$body2.user, pass = _req$body2.pass;\n            status = 401;\n            response = '';\n\n            if (!(user && pass && strongPassword(pass))) {\n              _context2.next = 43;\n              break;\n            }\n\n            _context2.prev = 4;\n            _context2.next = 7;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(\"User-\".concat(user));\n\n          case 7:\n            currentUser = _context2.sent.toString();\n            _context2.next = 13;\n            break;\n\n          case 10:\n            _context2.prev = 10;\n            _context2.t0 = _context2[\"catch\"](4);\n            currentUser = false;\n\n          case 13:\n            _context2.prev = 13;\n            _context2.next = 16;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_2__[\"get\"])('UserId');\n\n          case 16:\n            _context2.t1 = +_context2.sent.toString();\n            id = _context2.t1 + 1;\n            _context2.next = 23;\n            break;\n\n          case 20:\n            _context2.prev = 20;\n            _context2.t2 = _context2[\"catch\"](13);\n            id = 0;\n\n          case 23:\n            if (currentUser) {\n              _context2.next = 43;\n              break;\n            }\n\n            _context2.prev = 24;\n            _context2.t3 = id;\n            _context2.t4 = user;\n            _context2.next = 29;\n            return hash(pass, Object(_libs_jwt__WEBPACK_IMPORTED_MODULE_3__[\"saltRounds\"])());\n\n          case 29:\n            _context2.t5 = _context2.sent;\n            data = {\n              id: _context2.t3,\n              user: _context2.t4,\n              pass: _context2.t5\n            };\n            _context2.next = 33;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_2__[\"put\"])('UserId', id.toString());\n\n          case 33:\n            _context2.next = 35;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_2__[\"put\"])(\"User-\".concat(user), JSON.stringify(data));\n\n          case 35:\n            data.now = Date.now();\n            status = 200;\n            response = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(data, Object(_libs_jwt__WEBPACK_IMPORTED_MODULE_3__[\"secret\"])(), {\n              expiresIn: '1d'\n            });\n            _context2.next = 43;\n            break;\n\n          case 40:\n            _context2.prev = 40;\n            _context2.t6 = _context2[\"catch\"](24);\n            status = 500;\n\n          case 43:\n            res.status(status).send(response);\n\n          case 44:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[4, 10], [13, 20], [24, 40]]);\n  }));\n  return _signup.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/routes/auth.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: index, indexPath, todoPath, listTodo, addTodo, removeTodo, loginPath, signupPath, login, signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexPath\", function() { return indexPath; });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/routes/todo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"todoPath\", function() { return _todo__WEBPACK_IMPORTED_MODULE_0__[\"todoPath\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listTodo\", function() { return _todo__WEBPACK_IMPORTED_MODULE_0__[\"listTodo\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return _todo__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return _todo__WEBPACK_IMPORTED_MODULE_0__[\"removeTodo\"]; });\n\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/routes/auth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loginPath\", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__[\"loginPath\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"signupPath\", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__[\"signupPath\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__[\"login\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__[\"signup\"]; });\n\nfunction index(req, res) {\n  res.json({\n    '/': ['GET'],\n    '/todo': ['GET', 'POST', 'DELETE'],\n    '/login': ['POST'],\n    '/signup': ['POST']\n  });\n}\nvar indexPath = '/';\n\n\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/todo.js":
/*!****************************!*\
  !*** ./src/routes/todo.js ***!
  \****************************/
/*! exports provided: todoPath, listTodo, addTodo, removeTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoPath\", function() { return todoPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listTodo\", function() { return listTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return removeTodo; });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/db */ \"./src/libs/db.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar todoPath = '/todo';\nfunction listTodo(_x, _x2) {\n  return _listTodo.apply(this, arguments);\n}\n\nfunction _listTodo() {\n  _listTodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.t0 = res;\n            _context.t1 = JSON;\n            _context.next = 5;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(\"ToDo\".concat(req.user.id));\n\n          case 5:\n            _context.t2 = _context.sent.toString();\n            _context.t3 = _context.t1.parse.call(_context.t1, _context.t2);\n\n            _context.t0.json.call(_context.t0, _context.t3);\n\n            _context.next = 13;\n            break;\n\n          case 10:\n            _context.prev = 10;\n            _context.t4 = _context[\"catch\"](0);\n            res.json([]);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n  return _listTodo.apply(this, arguments);\n}\n\nfunction addTodo(_x3, _x4) {\n  return _addTodo.apply(this, arguments);\n}\n\nfunction _addTodo() {\n  _addTodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var name, storage, id;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            name = req.body.name;\n\n            if (!name) {\n              _context2.next = 36;\n              break;\n            }\n\n            _context2.prev = 2;\n            _context2.t0 = JSON;\n            _context2.next = 6;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(\"ToDo\".concat(req.user.id));\n\n          case 6:\n            _context2.t1 = _context2.sent.toString();\n            storage = _context2.t0.parse.call(_context2.t0, _context2.t1);\n            _context2.next = 13;\n            break;\n\n          case 10:\n            _context2.prev = 10;\n            _context2.t2 = _context2[\"catch\"](2);\n            storage = [];\n\n          case 13:\n            _context2.prev = 13;\n            _context2.next = 16;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('ToDoId');\n\n          case 16:\n            _context2.t3 = +_context2.sent.toString();\n            id = _context2.t3 + 1;\n            _context2.next = 23;\n            break;\n\n          case 20:\n            _context2.prev = 20;\n            _context2.t4 = _context2[\"catch\"](13);\n            id = 0;\n\n          case 23:\n            _context2.prev = 23;\n            _context2.next = 26;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"put\"])('ToDoId', id.toString());\n\n          case 26:\n            _context2.next = 28;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(\"ToDo\".concat(req.user.id), JSON.stringify([].concat(storage, {\n              id: id,\n              name: name\n            })));\n\n          case 28:\n            res.status(201).send(id.toString());\n            _context2.next = 34;\n            break;\n\n          case 31:\n            _context2.prev = 31;\n            _context2.t5 = _context2[\"catch\"](23);\n            res.status(500).send('');\n\n          case 34:\n            _context2.next = 37;\n            break;\n\n          case 36:\n            res.status(401).send('');\n\n          case 37:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 10], [13, 20], [23, 31]]);\n  }));\n  return _addTodo.apply(this, arguments);\n}\n\nfunction removeTodo(_x5, _x6) {\n  return _removeTodo.apply(this, arguments);\n}\n\nfunction _removeTodo() {\n  _removeTodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var id, storage;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            id = req.params.id;\n\n            if (!(id && typeof +id === 'number')) {\n              _context3.next = 24;\n              break;\n            }\n\n            _context3.prev = 2;\n            _context3.t0 = JSON;\n            _context3.next = 6;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(\"ToDo\".concat(req.user.id));\n\n          case 6:\n            _context3.t1 = _context3.sent.toString();\n            storage = _context3.t0.parse.call(_context3.t0, _context3.t1);\n            _context3.next = 13;\n            break;\n\n          case 10:\n            _context3.prev = 10;\n            _context3.t2 = _context3[\"catch\"](2);\n            storage = [];\n\n          case 13:\n            _context3.prev = 13;\n            _context3.next = 16;\n            return Object(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(\"ToDo\".concat(req.user.id), JSON.stringify(storage.filter(function (v) {\n              return v.id !== +id;\n            })));\n\n          case 16:\n            res.status(204).send('');\n            _context3.next = 22;\n            break;\n\n          case 19:\n            _context3.prev = 19;\n            _context3.t3 = _context3[\"catch\"](13);\n            res.status(500).send('');\n\n          case 22:\n            _context3.next = 25;\n            break;\n\n          case 24:\n            res.status(401).send('');\n\n          case 25:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[2, 10], [13, 19]]);\n  }));\n  return _removeTodo.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/routes/todo.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _libs_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./libs/jwt */ \"./src/libs/jwt.js\");\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar port = process__WEBPACK_IMPORTED_MODULE_6___default.a.env.PORT || 5000; // prevent EADDRINUSE in integration testing\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var run = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n  if (run) app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()()).use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('combined')).use(helmet__WEBPACK_IMPORTED_MODULE_3___default()()) // .use(express.json())\n  .use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json()).use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n    extended: false\n  })).use(_libs_jwt__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).get(_routes__WEBPACK_IMPORTED_MODULE_7__[\"todoPath\"], _routes__WEBPACK_IMPORTED_MODULE_7__[\"listTodo\"]).post(_routes__WEBPACK_IMPORTED_MODULE_7__[\"todoPath\"], _routes__WEBPACK_IMPORTED_MODULE_7__[\"addTodo\"])[\"delete\"](\"\".concat(_routes__WEBPACK_IMPORTED_MODULE_7__[\"todoPath\"], \"/:id\"), _routes__WEBPACK_IMPORTED_MODULE_7__[\"removeTodo\"]).post(_routes__WEBPACK_IMPORTED_MODULE_7__[\"loginPath\"], _routes__WEBPACK_IMPORTED_MODULE_7__[\"login\"]).post(_routes__WEBPACK_IMPORTED_MODULE_7__[\"signupPath\"], _routes__WEBPACK_IMPORTED_MODULE_7__[\"signup\"]).get(_routes__WEBPACK_IMPORTED_MODULE_7__[\"indexPath\"], _routes__WEBPACK_IMPORTED_MODULE_7__[\"index\"]).listen(port);\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "leveldown":
/*!****************************!*\
  !*** external "leveldown" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"leveldown\");\n\n//# sourceURL=webpack:///external_%22leveldown%22?");

/***/ }),

/***/ "levelup":
/*!**************************!*\
  !*** external "levelup" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"levelup\");\n\n//# sourceURL=webpack:///external_%22levelup%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"process\");\n\n//# sourceURL=webpack:///external_%22process%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ })

/******/ });