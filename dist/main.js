/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/generate-unique-id/index.js":
/*!**************************************************!*\
  !*** ./node_modules/generate-unique-id/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("function getRandomNumber(limit) {\n  return Math.floor(Math.random() * limit).toString();\n}\n\nfunction filterSymbols(excludeSymbols, group) {\n  let newGroup = group;\n  excludeSymbols.forEach((symbol) => {\n    newGroup = newGroup.replace(symbol, '');\n  });\n\n  return newGroup;\n}\n\nfunction createId(availableChars, idLength) {\n  let id = '';\n\n  for (let i = 0; i < idLength; i += 1) {\n    id += availableChars[getRandomNumber(availableChars.length)];\n  }\n\n  return id;\n}\n\nfunction generateUniqueId({\n  length = 20,\n  useLetters = true,\n  useNumbers = true,\n  includeSymbols = [],\n  excludeSymbols = [],\n} = {}) {\n  let letters = 'abcdefghijklmnopqrstuvwxyz';\n  let numbers = '0123456789';\n  let availableChars = [];\n  let lettersArr = [];\n  let numbersArr = [];\n\n  if (useLetters) {\n    if (excludeSymbols.length) letters = filterSymbols(excludeSymbols, letters);\n    lettersArr = letters.split('');\n  }\n\n  if (useNumbers) {\n    if (excludeSymbols.length) numbers = filterSymbols(excludeSymbols, numbers);\n    numbersArr = numbers.split('');\n  }\n\n  availableChars = [...lettersArr, ...numbersArr, ...includeSymbols];\n\n  return createId(availableChars, length);\n}\n\nmodule.exports = generateUniqueId;\n\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/generate-unique-id/index.js?");

/***/ }),

/***/ "./src/class-views/item-view.js":
/*!**************************************!*\
  !*** ./src/class-views/item-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createItemView)\n/* harmony export */ });\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dateformat */ \"./node_modules/dateformat/lib/dateformat.js\");\n/* harmony import */ var _ui_completed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/completed */ \"./src/ui/completed.js\");\n/* eslint-disable no-undef */\r\n\r\n\r\n\r\nfunction createItemView(item) {\r\n    const itemDiv = createItemDiv(item);\r\n    \r\n    itemDiv.addEventListener('click', () => { // toggle description and priority visibility\r\n        console.log(`Item \"${item.title}\" was clicked`);\r\n        localStorage.setItem('current-active-item', item.id);\r\n\r\n        const allItems = document.querySelectorAll('.item');\r\n        for (const item of allItems) {\r\n            if (item == itemDiv) continue;\r\n\r\n            item.style.color = '#5e5e5e';\r\n            item.children[2].style.display = 'none';\r\n            item.children[4].style.display = 'none';\r\n        }\r\n        const description = itemDiv.children[2];\r\n        description.style.display = description.style.display == 'none' ? 'block' : 'none';\r\n        description.style.color = '#5e5e5e';\r\n\r\n        const priority = itemDiv.children[4];\r\n        priority.style.display = priority.style.display == 'none' ? 'block' : 'none';\r\n\r\n        switch (item.priority) {\r\n            case 1:\r\n            case '1':\r\n                priority.style.color = 'green';\r\n                break;\r\n            case 2:\r\n            case '2':\r\n                priority.style.color = 'yellow';\r\n                break;\r\n            case 3:\r\n            case '3':\r\n                priority.style.color = 'red';\r\n                break;\r\n        }\r\n    });\r\n\r\n    itemDiv.addEventListener('mouseover', () => {    \r\n        if (item.id == localStorage.getItem('current-active-item')) return;\r\n\r\n        itemDiv.style.color = itemDiv.style.color == 'white' ? '#5e5e5e' : 'white';\r\n    });\r\n\r\n    itemDiv.addEventListener('mouseout', () => {\r\n        if (item.id == localStorage.getItem('current-active-item')) return;\r\n\r\n        itemDiv.style.color = itemDiv.style.color == '#5e5e5e' ? 'white' : '#5e5e5e';\r\n    });\r\n\r\n    return itemDiv;\r\n}\r\n\r\nfunction createItemDiv(item) {\r\n    const itemDiv = document.createElement('div');\r\n    itemDiv.classList.add('item');\r\n\r\n    const uncheckedBox = document.createElement('img');\r\n    uncheckedBox.src = '../assets/checkbox-blank-outline-custom.png'\r\n    uncheckedBox.classList.add('unchecked');\r\n    attachCheckboxListeners(uncheckedBox, item, itemDiv);\r\n\r\n    const title = document.createElement('h3');\r\n    title.textContent = item.title;\r\n    title.classList.add('title');\r\n    title.style.display = 'block';\r\n\r\n    const desc = document.createElement('h4');\r\n    desc.textContent = item.description;\r\n    desc.style.fontStyle = 'italic'\r\n    desc.style.fontWeight = 'normal';\r\n    desc.classList.add('desc');\r\n    desc.style.display = 'none';\r\n\r\n    const dueDate = document.createElement('h4');\r\n    dueDate.textContent = (0,dateformat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(item.dueDate), \"mm/dd/yy, h:MM TT\");\r\n    dueDate.style.fontWeight = 'normal';\r\n    dueDate.classList.add('dueDate');\r\n    dueDate.style.display = 'block';\r\n\r\n    const priority = document.createElement('h4');\r\n    priority.textContent = `Priority level: ${item.priority}`\r\n    priority.style.fontWeight = 'normal';\r\n    priority.classList.add('priority');\r\n    priority.style.display = 'none';\r\n\r\n    const editIcon = document.createElement('img');\r\n    editIcon.src = '../assets/pencil-outline-dark.png';\r\n    editIcon.classList.add('edit');\r\n    attachEditListeners(editIcon, item, itemDiv);\r\n\r\n    const removeIcon = document.createElement('img');\r\n    removeIcon.src = '../assets/trash-can-dark.png';\r\n    removeIcon.classList.add('remove');\r\n    attachRemoveListeners(removeIcon, item, itemDiv);\r\n\r\n    itemDiv.appendChild(uncheckedBox);\r\n    itemDiv.appendChild(title);\r\n    itemDiv.appendChild(desc);\r\n    itemDiv.appendChild(dueDate);\r\n    itemDiv.appendChild(priority);\r\n    itemDiv.appendChild(editIcon);\r\n    itemDiv.appendChild(removeIcon);\r\n\r\n    return itemDiv;\r\n}\r\n\r\nfunction attachCheckboxListeners(checkBox, item, itemDiv) {\r\n    checkBox.addEventListener('mouseover', () => {\r\n        if (checkBox.classList.contains('checked')) return;\r\n        checkBox.src = '../assets/checkbox-intermediate-variant-custom.png'\r\n    });\r\n\r\n    checkBox.addEventListener('mouseout', () => {\r\n        if (checkBox.classList.contains('checked')) return;\r\n        checkBox.src = '../assets/checkbox-blank-outline-custom.png'\r\n    });\r\n\r\n    checkBox.addEventListener('click', event => {\r\n        event.stopPropagation();\r\n        checkBox.src = '../assets/checkbox-marked-custom.png';\r\n        checkBox.classList.add('checked');\r\n        console.log(`Marking \"${item.title}\" as completed...`);\r\n    \r\n        itemDiv.remove();\r\n        removeItemFromProject(item);\r\n\r\n        let completedItemIds = localStorage.getItem('completed-items');\r\n        if (!completedItemIds) {\r\n            localStorage.setItem('completed-items', `${item.id},`);\r\n        } else {\r\n            completedItemIds = completedItemIds += `${item.id},`;\r\n            localStorage.setItem('completed-items', completedItemIds);\r\n        }\r\n\r\n        const completedCount = document.querySelector('div#completed > h3');\r\n        completedItemIds = completedItemIds.split(',');\r\n        completedCount.textContent = (0,_ui_completed__WEBPACK_IMPORTED_MODULE_1__.updateCompletedCount)(completedItemIds);\r\n    });\r\n}\r\n\r\nfunction attachEditListeners(editIcon, item, itemDiv) {\r\n    editIcon.addEventListener('mouseover', event => {\r\n        event.stopPropagation();\r\n\r\n        editIcon.src = '../assets/pencil-outline-white.png';\r\n    });\r\n\r\n    editIcon.addEventListener('mouseout', event => {\r\n        event.stopPropagation();\r\n\r\n        editIcon.src = '../assets/pencil-outline-dark.png';\r\n    });\r\n\r\n    editIcon.addEventListener('click', event => {\r\n        event.stopPropagation();\r\n        console.log(`Editing item \"${item.title}\"...`);\r\n\r\n        localStorage.setItem('current-active-item', item.id);\r\n        const editItemForm = document.querySelector('form#edit');\r\n\r\n        const editTitle = document.querySelector('input#new_title');\r\n        editTitle.value = item.title;\r\n        const editDescription = document.querySelector('input#new_desc');\r\n        editDescription.value = item.description;\r\n        const editDate = document.querySelector('input#new_due');\r\n        editDate.value = item.dueDate.substring(0, 16); // make this work properly\r\n        const editPriority = document.querySelector('input#new_priority');\r\n        editPriority.value = item.priority;\r\n\r\n        if (!editItemForm.style.display) {\r\n            editItemForm.style.display = 'flex';\r\n        } else {\r\n            editItemForm.removeAttribute('style');\r\n        }\r\n    });\r\n}\r\n\r\nfunction attachRemoveListeners(removeIcon, item, itemDiv) {\r\n    removeIcon.addEventListener('mouseover', event => {\r\n        event.stopPropagation();\r\n\r\n        removeIcon.src = '../assets/trash-can-white.png';\r\n    });\r\n\r\n    removeIcon.addEventListener('mouseout', event => {\r\n        event.stopPropagation();\r\n        \r\n        removeIcon.src = '../assets/trash-can-dark.png';\r\n    });\r\n\r\n    removeIcon.addEventListener('click', event => {\r\n        event.stopPropagation();\r\n        console.log(`Removing item \"${item.title}\"...`);\r\n\r\n        itemDiv.remove();\r\n        localStorage.removeItem(item.id);\r\n        removeItemFromProject(item);\r\n    });\r\n}\r\n\r\nfunction removeItemFromProject(item) {\r\n    const currentProjectId = localStorage.getItem('main-project-id');\r\n    const currentProject = JSON.parse(localStorage.getItem(currentProjectId));\r\n    currentProject.items.splice(currentProject.items.indexOf(item.id), 1);\r\n    localStorage.setItem(currentProjectId, JSON.stringify(currentProject));\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/class-views/item-view.js?");

/***/ }),

/***/ "./src/class-views/project-view.js":
/*!*****************************************!*\
  !*** ./src/class-views/project-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjectView)\n/* harmony export */ });\n/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-view */ \"./src/class-views/item-view.js\");\n\r\n\r\nfunction createProjectView(project) {\r\n    const projectDiv = createProjectDiv(project);\r\n\r\n    projectDiv.addEventListener('click', () => {\r\n        if (localStorage.getItem('main-project-id') == project.id) { // project is already being displayed\r\n            return console.log(`The same project was selected. (${project.title})`);\r\n        }\r\n        console.log(`Project \"${project.title}\" was selected`);\r\n        localStorage.setItem('main-project-id', project.id);\r\n\r\n        const allProjects = document.querySelectorAll('.project');\r\n        for (const project of allProjects) {\r\n            if (project == projectDiv) continue;\r\n\r\n            project.style.color = '#5e5e5e';\r\n        }\r\n        projectDiv.style.color = 'white';\r\n\r\n        const mainProjectHeader = document.querySelector('#main-project > h2');\r\n        mainProjectHeader.textContent = project.title;\r\n        const mainProjectDescription = document.querySelector('#main-project > p');\r\n        mainProjectDescription.textContent = project.description;\r\n\r\n        const projectItemsDiv = document.querySelector('div#todo-items');\r\n        while (projectItemsDiv.firstChild) {\r\n            projectItemsDiv.removeChild(projectItemsDiv.firstChild);\r\n        }\r\n        \r\n        const projectItems = JSON.parse(localStorage.getItem(project.id)).items;\r\n        for (const itemId of projectItems) {\r\n            console.log('current item: ', itemId);\r\n            if (!itemId) continue;\r\n        \r\n            const item = JSON.parse(localStorage.getItem(itemId));\r\n            console.log(item);\r\n            projectItemsDiv.appendChild((0,_item_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item));\r\n        }\r\n    });\r\n\r\n    projectDiv.addEventListener('mouseover', () => {    \r\n        if (localStorage.getItem('main-project-id') == project.id) return;\r\n\r\n        projectDiv.style.color = projectDiv.style.color == 'white' ? '#5e5e5e' : 'white';\r\n    });\r\n\r\n    projectDiv.addEventListener('mouseout', () => {\r\n        if (localStorage.getItem('main-project-id') == project.id) return;\r\n\r\n        projectDiv.style.color = projectDiv.style.color == '#5e5e5e' ? 'white' : '#5e5e5e';\r\n    });\r\n\r\n    return projectDiv;\r\n}\r\n\r\nfunction createProjectDiv(project) {\r\n    const projectDiv = document.createElement('div');\r\n    projectDiv.classList.add('project');\r\n\r\n    const h3 = document.createElement('h3');\r\n    h3.textContent = project.title;\r\n    h3.classList.add('title');\r\n    projectDiv.appendChild(h3);\r\n\r\n    if (project.id == localStorage.getItem('main-project-id'))\r\n        projectDiv.style.color = 'white';\r\n    \r\n    return projectDiv;\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/class-views/project-view.js?");

/***/ }),

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(id, title, description = '') {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.description = description;\r\n        this.items = [];\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/classes/project.js?");

/***/ }),

/***/ "./src/classes/todo-item.js":
/*!**********************************!*\
  !*** ./src/classes/todo-item.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nclass TodoItem {\r\n    constructor(id, title, description = '', dueDate =  new Date(), priority = 1) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate ? dueDate : new Date();\r\n        this.priority = priority ? priority : 1;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/classes/todo-item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/header */ \"./src/ui/header.js\");\n/* harmony import */ var _ui_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/projects */ \"./src/ui/projects.js\");\n/* harmony import */ var _ui_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/default */ \"./src/ui/default.js\");\n/* harmony import */ var _ui_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/forms */ \"./src/ui/forms.js\");\n/* harmony import */ var _ui_completed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/completed */ \"./src/ui/completed.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadUI() {\r\n    (0,_ui_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_ui_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_ui_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_ui_completed__WEBPACK_IMPORTED_MODULE_4__.displayCompleted)();\r\n\r\n    (0,_ui_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n}\r\n\r\nloadUI();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/ui/completed.js":
/*!*****************************!*\
  !*** ./src/ui/completed.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCompleted\": () => (/* binding */ displayCompleted),\n/* harmony export */   \"updateCompletedCount\": () => (/* binding */ updateCompletedCount)\n/* harmony export */ });\nfunction displayCompleted() {\r\n    const completedDiv = document.querySelector('div#completed');\r\n\r\n    const h2 = document.createElement('h2');\r\n    h2.textContent = 'Completed';\r\n    completedDiv.appendChild(h2);\r\n\r\n    let completedItemIds = localStorage.getItem('completed-items');\r\n    if (completedItemIds.length > 0)\r\n        completedItemIds = completedItemIds.split(',');\r\n\r\n    const countDescription = document.createElement('h3');\r\n    countDescription.textContent = updateCompletedCount(completedItemIds);\r\n    countDescription.style.paddingLeft = '8px';\r\n\r\n    countDescription.addEventListener('click', () => {\r\n        console.log('Showing completed items...', completedItemIds);\r\n        for (const itemId of completedItemIds) {\r\n            if (!itemId) continue;\r\n            \r\n            const item = JSON.parse(localStorage.getItem(itemId));\r\n            console.log('Found an item: ', item);\r\n\r\n            // create item view for a completed item\r\n            // add it to completed tab - on default div?\r\n        }\r\n    });\r\n\r\n    completedDiv.appendChild(countDescription);\r\n}\r\n\r\nfunction updateCompletedCount(completedItemIds) {\r\n    let description, completedCount = 0;\r\n    if (completedItemIds.length == 1) {\r\n        description = '0 items';\r\n    } else {\r\n        for (const itemId of completedItemIds) {\r\n            if (!itemId) continue;\r\n            completedCount += 1;\r\n        }\r\n        description = `${completedCount} items`;\r\n    }\r\n\r\n    return description;\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/completed.js?");

/***/ }),

/***/ "./src/ui/default.js":
/*!***************************!*\
  !*** ./src/ui/default.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadDefaultProject)\n/* harmony export */ });\n/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generate-unique-id */ \"./node_modules/generate-unique-id/index.js\");\n/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _class_views_item_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-views/item-view */ \"./src/class-views/item-view.js\");\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _classes_todo_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/todo-item */ \"./src/classes/todo-item.js\");\n\r\n\r\n\r\n\r\n   \r\nconst defaultProjectDiv = document.querySelector('div#default');\r\n\r\nfunction loadDefaultProject() {\r\n    const mainProject = loadMainProject();\r\n    displayHeader();\r\n    displayItems(mainProject);\r\n}\r\n\r\nfunction loadMainProject() {\r\n    let MAIN_PROJECT_ID = localStorage.getItem('main-project-id');\r\n    if (!MAIN_PROJECT_ID) { // generate default project id\r\n        MAIN_PROJECT_ID = `project-${generate_unique_id__WEBPACK_IMPORTED_MODULE_0___default()()}`;\r\n        localStorage.setItem('main-project-id', MAIN_PROJECT_ID);\r\n\r\n        const newProject = new _classes_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](MAIN_PROJECT_ID, 'Default Project', 'This is your default project');\r\n        localStorage.setItem(MAIN_PROJECT_ID, JSON.stringify(newProject));\r\n\r\n        let userProjects = localStorage.getItem('user-projects') || '';\r\n        userProjects += `${MAIN_PROJECT_ID},`;\r\n        localStorage.setItem('user-projects', userProjects);\r\n    }\r\n    console.log(`Main project id: ${MAIN_PROJECT_ID}`);\r\n    \r\n    return JSON.parse(localStorage.getItem(MAIN_PROJECT_ID));\r\n}\r\n\r\nfunction displayHeader() {\r\n    const newItemForm = document.querySelector('form#new-item');\r\n    \r\n    const MAIN_PROJECT_ID = localStorage.getItem('main-project-id');\r\n    const mainProject = JSON.parse(localStorage.getItem(MAIN_PROJECT_ID));\r\n\r\n    const projectHeader = document.createElement('div');\r\n    projectHeader.setAttribute('id', 'main-project');\r\n\r\n    const projectName = document.createElement('h2');\r\n    projectName.textContent = mainProject.title;\r\n    projectHeader.appendChild(projectName);\r\n\r\n    const projectDescription = document.createElement('p');\r\n    projectDescription.textContent = mainProject.description;\r\n\r\n    const newItemButton = document.createElement('button');\r\n    newItemButton.id = 'new-item';\r\n    newItemButton.textContent = 'New';\r\n    newItemButton.addEventListener('click', revealNewItemForm);\r\n\r\n    projectHeader.appendChild(projectDescription);\r\n    projectHeader.appendChild(newItemButton);\r\n    defaultProjectDiv.insertBefore(projectHeader, newItemForm);\r\n}\r\n\r\nfunction displayItems(project) {\r\n    const projectItems = document.createElement('div');\r\n    projectItems.setAttribute('id', 'todo-items');\r\n    defaultProjectDiv.appendChild(projectItems);\r\n\r\n    for (const itemId of project.items) {\r\n        const item = JSON.parse(localStorage.getItem(itemId));\r\n        // create a div for this item and add it to projectItems div\r\n        projectItems.appendChild((0,_class_views_item_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new _classes_todo_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n            item.id,\r\n            item.title,\r\n            item.description,\r\n            item.dueDate,\r\n            item.priority,\r\n        )));\r\n    }\r\n}\r\n\r\nfunction revealNewItemForm() {\r\n    console.log('newItemButton click');\r\n\r\n    const newItemForm = document.querySelector('form#new-item');\r\n    if (!newItemForm.style.display) {\r\n        newItemForm.style.display = 'flex';\r\n    } else {\r\n        newItemForm.removeAttribute('style');\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/default.js?");

/***/ }),

/***/ "./src/ui/forms.js":
/*!*************************!*\
  !*** ./src/ui/forms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ attachFormListeners)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _class_views_project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-views/project-view */ \"./src/class-views/project-view.js\");\n/* harmony import */ var _classes_todo_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/todo-item */ \"./src/classes/todo-item.js\");\n/* harmony import */ var _class_views_item_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class-views/item-view */ \"./src/class-views/item-view.js\");\nconst generateUniqueId = __webpack_require__(/*! generate-unique-id */ \"./node_modules/generate-unique-id/index.js\");\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction attachFormListeners() {\r\n    newProjectForm();\r\n    newTodoItemForm();\r\n    editItemForm();\r\n}\r\n\r\nfunction newProjectForm() {\r\n    const projectsList = document.querySelector('div#projects-list');\r\n    const newProjectForm = document.querySelector('form#new-project');\r\n\r\n    newProjectForm.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        const data = new FormData(e.target);\r\n        const projectData = [...data.entries()];\r\n\r\n        const projectId = `project-${generateUniqueId()}`;\r\n        const newProject = new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectId, projectData[0][1], projectData[1][1]);\r\n        console.log('Created a new project: ', newProject);\r\n        \r\n        localStorage.setItem(projectId, JSON.stringify(newProject));\r\n\r\n        const userProjects = localStorage.getItem('user-projects') + `${projectId},`;\r\n        localStorage.setItem('user-projects', userProjects);\r\n\r\n        const projectView = (0,_class_views_project_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newProject);\r\n        projectsList.appendChild(projectView);\r\n        projectView.click();\r\n        console.log('Local storage after adding project: ', localStorage);\r\n        \r\n        newProjectForm.reset();\r\n        newProjectForm.removeAttribute('style');\r\n    });\r\n}\r\n\r\nfunction newTodoItemForm() {\r\n    const mainProjectItems = document.querySelector('div#todo-items');\r\n    const newItemForm = document.querySelector('form#new-item');\r\n\r\n    newItemForm.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        const data = new FormData(e.target);\r\n        const itemData = [...data.entries()];\r\n\r\n        const itemId = `item-${generateUniqueId()}`;\r\n        const newItem = new _classes_todo_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"](itemId, itemData[0][1], itemData[1][1], itemData[2][1], itemData[3][1]);\r\n        console.log('Created a new todo item: ', newItem);\r\n\r\n        const currentProjectId = localStorage.getItem('main-project-id');\r\n        const currentProject = JSON.parse(localStorage.getItem(currentProjectId));\r\n\r\n        currentProject.items.push(itemId);\r\n        localStorage.setItem(currentProjectId, JSON.stringify(currentProject));\r\n        localStorage.setItem(itemId, JSON.stringify(newItem));\r\n\r\n        const itemView = (0,_class_views_item_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newItem);\r\n        mainProjectItems.appendChild(itemView);\r\n        itemView.click();\r\n        console.log('Local storage after adding item: ', localStorage);        \r\n\r\n        newItemForm.reset();\r\n        newItemForm.removeAttribute('style');\r\n    });\r\n}\r\n\r\nfunction editItemForm() {\r\n    const editDiv = document.querySelector('div#edit-item');\r\n    const editItemForm = document.querySelector('form#edit');\r\n\r\n    editItemForm.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        const data = new FormData(e.target);\r\n        const itemData = [...data.entries()];\r\n\r\n        const itemId = localStorage.getItem('current-active-item');\r\n        const currentItem = JSON.parse(itemId);\r\n        const editedItem = new _classes_todo_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"](itemId, itemData[0][1], itemData[1][1], itemData[2][1], itemData[3][1]);\r\n\r\n        editItemForm.reset();\r\n        editItemForm.removeAttribute('style');\r\n    });\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/forms.js?");

/***/ }),

/***/ "./src/ui/header.js":
/*!**************************!*\
  !*** ./src/ui/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHeader)\n/* harmony export */ });\nfunction loadHeader() {\r\n    const header = document.querySelector('div#header');\r\n\r\n    const h1 = document.createElement('h1');\r\n    h1.textContent = 'Todo List';\r\n\r\n    header.appendChild(h1);\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/header.js?");

/***/ }),

/***/ "./src/ui/projects.js":
/*!****************************!*\
  !*** ./src/ui/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadProjectsList)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _class_views_project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-views/project-view */ \"./src/class-views/project-view.js\");\n\r\n\r\n\r\nconst projectsSidebar = document.querySelector('div#projects');\r\nconst newProjectForm = document.querySelector('form#new-project');\r\n\r\nfunction loadProjectsList() {\r\n    createHeader();\r\n\r\n    const projectsListDiv = document.createElement('div');\r\n    projectsListDiv.id = 'projects-list';\r\n    projectsSidebar.appendChild(projectsListDiv);\r\n\r\n    const projectIds = localStorage.getItem('user-projects').split(',');\r\n    for (const projectId of projectIds) {\r\n        if (!projectId) continue;\r\n        \r\n        const project = JSON.parse(localStorage.getItem(projectId));\r\n        projectsListDiv.appendChild((0,_class_views_project_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n            project.id,\r\n            project.title,\r\n            project.description\r\n        )));\r\n    }\r\n}\r\n\r\nfunction createHeader() {\r\n    const projectsHeader = document.createElement('div');\r\n    projectsHeader.setAttribute('id', 'projects-header');\r\n\r\n    const h2 = document.createElement('h2');\r\n    h2.textContent = 'My Projects';\r\n    projectsHeader.appendChild(h2);\r\n\r\n    const newProjectButton = document.createElement('button');\r\n    newProjectButton.id = 'new-project';\r\n    newProjectButton.textContent = 'New';\r\n    newProjectButton.addEventListener('click', revealNewProjectForm);\r\n    projectsHeader.appendChild(newProjectButton);\r\n\r\n    projectsSidebar.insertBefore(projectsHeader, newProjectForm);\r\n}\r\n\r\nfunction revealNewProjectForm() {\r\n    console.log('newProjectButton click');\r\n\r\n    if (!newProjectForm.style.display) {\r\n        newProjectForm.style.display = 'flex';\r\n    } else {\r\n        newProjectForm.removeAttribute('style');\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/projects.js?");

/***/ }),

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dateFormat),\n/* harmony export */   \"formatTimezone\": () => (/* binding */ formatTimezone),\n/* harmony export */   \"i18n\": () => (/* binding */ i18n),\n/* harmony export */   \"masks\": () => (/* binding */ masks)\n/* harmony export */ });\nvar token=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\\1?|W{1,2}|[LlopSZN]|\"[^\"]*\"|'[^']*'/g;var timezone=/\\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\\b/g;var timezoneClip=/[^-+\\dA-Z]/g;function dateFormat(date,mask,utc,gmt){if(arguments.length===1&&typeof date===\"string\"&&!/\\d/.test(date)){mask=date;date=undefined}date=date||date===0?date:new Date;if(!(date instanceof Date)){date=new Date(date)}if(isNaN(date)){throw TypeError(\"Invalid date\")}mask=String(masks[mask]||mask||masks[\"default\"]);var maskSlice=mask.slice(0,4);if(maskSlice===\"UTC:\"||maskSlice===\"GMT:\"){mask=mask.slice(4);utc=true;if(maskSlice===\"GMT:\"){gmt=true}}var _=function _(){return utc?\"getUTC\":\"get\"};var _d=function d(){return date[_()+\"Date\"]()};var D=function D(){return date[_()+\"Day\"]()};var _m=function m(){return date[_()+\"Month\"]()};var y=function y(){return date[_()+\"FullYear\"]()};var _H=function H(){return date[_()+\"Hours\"]()};var _M=function M(){return date[_()+\"Minutes\"]()};var _s=function s(){return date[_()+\"Seconds\"]()};var _L=function L(){return date[_()+\"Milliseconds\"]()};var _o=function o(){return utc?0:date.getTimezoneOffset()};var _W=function W(){return getWeek(date)};var _N=function N(){return getDayOfWeek(date)};var flags={d:function d(){return _d()},dd:function dd(){return pad(_d())},ddd:function ddd(){return i18n.dayNames[D()]},DDD:function DDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()],short:true})},dddd:function dddd(){return i18n.dayNames[D()+7]},DDDD:function DDDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()+7]})},m:function m(){return _m()+1},mm:function mm(){return pad(_m()+1)},mmm:function mmm(){return i18n.monthNames[_m()]},mmmm:function mmmm(){return i18n.monthNames[_m()+12]},yy:function yy(){return String(y()).slice(2)},yyyy:function yyyy(){return pad(y(),4)},h:function h(){return _H()%12||12},hh:function hh(){return pad(_H()%12||12)},H:function H(){return _H()},HH:function HH(){return pad(_H())},M:function M(){return _M()},MM:function MM(){return pad(_M())},s:function s(){return _s()},ss:function ss(){return pad(_s())},l:function l(){return pad(_L(),3)},L:function L(){return pad(Math.floor(_L()/10))},t:function t(){return _H()<12?i18n.timeNames[0]:i18n.timeNames[1]},tt:function tt(){return _H()<12?i18n.timeNames[2]:i18n.timeNames[3]},T:function T(){return _H()<12?i18n.timeNames[4]:i18n.timeNames[5]},TT:function TT(){return _H()<12?i18n.timeNames[6]:i18n.timeNames[7]},Z:function Z(){return gmt?\"GMT\":utc?\"UTC\":formatTimezone(date)},o:function o(){return(_o()>0?\"-\":\"+\")+pad(Math.floor(Math.abs(_o())/60)*100+Math.abs(_o())%60,4)},p:function p(){return(_o()>0?\"-\":\"+\")+pad(Math.floor(Math.abs(_o())/60),2)+\":\"+pad(Math.floor(Math.abs(_o())%60),2)},S:function S(){return[\"th\",\"st\",\"nd\",\"rd\"][_d()%10>3?0:(_d()%100-_d()%10!=10)*_d()%10]},W:function W(){return _W()},WW:function WW(){return pad(_W())},N:function N(){return _N()}};return mask.replace(token,function(match){if(match in flags){return flags[match]()}return match.slice(1,match.length-1)})}var masks={default:\"ddd mmm dd yyyy HH:MM:ss\",shortDate:\"m/d/yy\",paddedShortDate:\"mm/dd/yyyy\",mediumDate:\"mmm d, yyyy\",longDate:\"mmmm d, yyyy\",fullDate:\"dddd, mmmm d, yyyy\",shortTime:\"h:MM TT\",mediumTime:\"h:MM:ss TT\",longTime:\"h:MM:ss TT Z\",isoDate:\"yyyy-mm-dd\",isoTime:\"HH:MM:ss\",isoDateTime:\"yyyy-mm-dd'T'HH:MM:sso\",isoUtcDateTime:\"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'\",expiresHeaderFormat:\"ddd, dd mmm yyyy HH:MM:ss Z\"};var i18n={dayNames:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],monthNames:[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\",\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],timeNames:[\"a\",\"p\",\"am\",\"pm\",\"A\",\"P\",\"AM\",\"PM\"]};var pad=function pad(val){var len=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;return String(val).padStart(len,\"0\")};var getDayName=function getDayName(_ref){var y=_ref.y,m=_ref.m,d=_ref.d,_=_ref._,dayName=_ref.dayName,_ref$short=_ref[\"short\"],_short=_ref$short===void 0?false:_ref$short;var today=new Date;var yesterday=new Date;yesterday.setDate(yesterday[_+\"Date\"]()-1);var tomorrow=new Date;tomorrow.setDate(tomorrow[_+\"Date\"]()+1);var today_d=function today_d(){return today[_+\"Date\"]()};var today_m=function today_m(){return today[_+\"Month\"]()};var today_y=function today_y(){return today[_+\"FullYear\"]()};var yesterday_d=function yesterday_d(){return yesterday[_+\"Date\"]()};var yesterday_m=function yesterday_m(){return yesterday[_+\"Month\"]()};var yesterday_y=function yesterday_y(){return yesterday[_+\"FullYear\"]()};var tomorrow_d=function tomorrow_d(){return tomorrow[_+\"Date\"]()};var tomorrow_m=function tomorrow_m(){return tomorrow[_+\"Month\"]()};var tomorrow_y=function tomorrow_y(){return tomorrow[_+\"FullYear\"]()};if(today_y()===y&&today_m()===m&&today_d()===d){return _short?\"Tdy\":\"Today\"}else if(yesterday_y()===y&&yesterday_m()===m&&yesterday_d()===d){return _short?\"Ysd\":\"Yesterday\"}else if(tomorrow_y()===y&&tomorrow_m()===m&&tomorrow_d()===d){return _short?\"Tmw\":\"Tomorrow\"}return dayName};var getWeek=function getWeek(date){var targetThursday=new Date(date.getFullYear(),date.getMonth(),date.getDate());targetThursday.setDate(targetThursday.getDate()-(targetThursday.getDay()+6)%7+3);var firstThursday=new Date(targetThursday.getFullYear(),0,4);firstThursday.setDate(firstThursday.getDate()-(firstThursday.getDay()+6)%7+3);var ds=targetThursday.getTimezoneOffset()-firstThursday.getTimezoneOffset();targetThursday.setHours(targetThursday.getHours()-ds);var weekDiff=(targetThursday-firstThursday)/(864e5*7);return 1+Math.floor(weekDiff)};var getDayOfWeek=function getDayOfWeek(date){var dow=date.getDay();if(dow===0){dow=7}return dow};var formatTimezone=function formatTimezone(date){return(String(date).match(timezone)||[\"\"]).pop().replace(timezoneClip,\"\").replace(/GMT\\+0000/g,\"UTC\")};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/dateformat/lib/dateformat.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;