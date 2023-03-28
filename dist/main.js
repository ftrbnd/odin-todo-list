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

/***/ "./src/class-views/item-view.js":
/*!**************************************!*\
  !*** ./src/class-views/item-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCompletedItemView\": () => (/* binding */ createCompletedItemView),\n/* harmony export */   \"createItemView\": () => (/* binding */ createItemView),\n/* harmony export */   \"toggleWindowOpacity\": () => (/* binding */ toggleWindowOpacity)\n/* harmony export */ });\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dateformat */ \"./node_modules/dateformat/lib/dateformat.js\");\n/* harmony import */ var _ui_completed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/completed */ \"./src/ui/completed.js\");\n/* eslint-disable no-undef */\n\n\nfunction createItemView(item) {\n  const itemDiv = createItemDiv(item);\n  itemDiv.addEventListener('click', () => {\n    // toggle description and priority visibility\n    console.log(`Item \"${item.title}\" was clicked`);\n    localStorage.setItem('current-active-item', item.id);\n    const allItems = document.querySelectorAll('.item');\n    for (const item of allItems) {\n      if (item == itemDiv) continue;\n      item.style.color = '#5e5e5e';\n      item.children[2].style.display = 'none';\n      item.children[4].style.display = 'none';\n    }\n    const description = itemDiv.children[2];\n    description.style.display = description.style.display == 'none' ? 'block' : 'none';\n    description.style.color = '#5e5e5e';\n    const priority = itemDiv.children[4];\n    priority.style.display = priority.style.display == 'none' ? 'block' : 'none';\n    switch (item.priority) {\n      case 1:\n      case '1':\n        priority.style.color = 'green';\n        break;\n      case 2:\n      case '2':\n        priority.style.color = 'yellow';\n        break;\n      case 3:\n      case '3':\n        priority.style.color = 'red';\n        break;\n    }\n  });\n  itemDiv.addEventListener('mouseover', () => {\n    if (item.id == localStorage.getItem('current-active-item')) return;\n    itemDiv.style.color = itemDiv.style.color == 'white' ? '#5e5e5e' : 'white';\n  });\n  itemDiv.addEventListener('mouseout', () => {\n    if (item.id == localStorage.getItem('current-active-item')) return;\n    itemDiv.style.color = itemDiv.style.color == '#5e5e5e' ? 'white' : '#5e5e5e';\n  });\n  return itemDiv;\n}\nfunction createItemDiv(item) {\n  const itemDiv = document.createElement('div');\n  itemDiv.classList.add('item');\n  const uncheckedBox = document.createElement('img');\n  uncheckedBox.src = '../assets/checkbox-blank-outline-custom.png';\n  uncheckedBox.classList.add('unchecked');\n  attachCheckboxListeners(uncheckedBox, item, itemDiv);\n  const title = document.createElement('h3');\n  title.textContent = item.title;\n  title.classList.add('title');\n  title.style.display = 'block';\n  const desc = document.createElement('h4');\n  desc.textContent = item.description;\n  desc.style.fontStyle = 'italic';\n  desc.style.fontWeight = 'normal';\n  desc.classList.add('desc');\n  desc.style.display = 'none';\n  const dueDate = document.createElement('h4');\n  dueDate.textContent = (0,dateformat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(item.dueDate), \"mm/dd/yy, h:MM TT\");\n  dueDate.style.fontWeight = 'normal';\n  dueDate.classList.add('dueDate');\n  dueDate.style.display = 'block';\n  const priority = document.createElement('h4');\n  priority.textContent = `Priority level: ${item.priority}`;\n  priority.style.fontWeight = 'normal';\n  priority.classList.add('priority');\n  priority.style.display = 'none';\n  const editIcon = document.createElement('img');\n  editIcon.src = '../assets/pencil-outline-dark.png';\n  editIcon.classList.add('edit');\n  attachEditListeners(editIcon, item, itemDiv);\n  const removeIcon = document.createElement('img');\n  removeIcon.src = '../assets/trash-can-dark.png';\n  removeIcon.classList.add('remove');\n  attachRemoveListeners(removeIcon, item, itemDiv);\n  itemDiv.appendChild(uncheckedBox);\n  itemDiv.appendChild(title);\n  itemDiv.appendChild(desc);\n  itemDiv.appendChild(dueDate);\n  itemDiv.appendChild(priority);\n  itemDiv.appendChild(editIcon);\n  itemDiv.appendChild(removeIcon);\n  return itemDiv;\n}\nfunction attachCheckboxListeners(checkBox, item, itemDiv) {\n  checkBox.addEventListener('mouseover', () => {\n    if (checkBox.classList.contains('checked')) return;\n    checkBox.src = '../assets/checkbox-intermediate-variant-custom.png';\n  });\n  checkBox.addEventListener('mouseout', () => {\n    if (checkBox.classList.contains('checked')) return;\n    checkBox.src = '../assets/checkbox-blank-outline-custom.png';\n  });\n  checkBox.addEventListener('click', event => {\n    event.stopPropagation();\n    checkBox.src = '../assets/checkbox-marked-custom.png';\n    checkBox.classList.add('checked');\n    console.log(`Marking \"${item.title}\" as completed...`);\n    itemDiv.remove();\n    removeItemFromProject(item);\n    let completedItemIds = localStorage.getItem('completed-items');\n    if (!completedItemIds) {\n      localStorage.setItem('completed-items', `${item.id},`);\n    } else {\n      completedItemIds = completedItemIds += `${item.id},`;\n      localStorage.setItem('completed-items', completedItemIds);\n    }\n    const completedCount = document.querySelector('div#completed > h3');\n    completedItemIds = completedItemIds.split(',');\n    completedCount.textContent = (0,_ui_completed__WEBPACK_IMPORTED_MODULE_1__.updateCompletedCount)(completedItemIds);\n  });\n}\nfunction attachEditListeners(editIcon, item, itemDiv) {\n  editIcon.addEventListener('mouseover', event => {\n    event.stopPropagation();\n    editIcon.src = '../assets/pencil-outline-white.png';\n  });\n  editIcon.addEventListener('mouseout', event => {\n    event.stopPropagation();\n    editIcon.src = '../assets/pencil-outline-dark.png';\n  });\n  editIcon.addEventListener('click', event => {\n    event.stopPropagation();\n    console.log(`Editing item \"${item.title}\"...`);\n    localStorage.setItem('current-active-item', item.id);\n    const editItemForm = document.querySelector('form#edit');\n    populateEditForm(item);\n    toggleWindowOpacity(editItemForm);\n    if (!editItemForm.style.display) {\n      editItemForm.style.display = 'flex';\n    } else {\n      editItemForm.removeAttribute('style');\n    }\n  });\n}\nfunction populateEditForm(item) {\n  const editTitle = document.querySelector('input#new_title');\n  editTitle.value = item.title;\n  const editDescription = document.querySelector('input#new_desc');\n  editDescription.value = item.description;\n  const editDate = document.querySelector('input#new_due');\n  editDate.value = item.dueDate.substring(0, 16); // make this work properly\n  const editPriority = document.querySelector('input#new_priority');\n  editPriority.value = item.priority;\n}\nfunction toggleWindowOpacity() {\n  const toggle = localStorage.getItem('display-edit-form') ?? 'true';\n  const editItemForm = document.querySelector('form#edit');\n  const inputs = document.querySelectorAll('#edit input');\n  const body = document.querySelector('body');\n  body.classList.toggle('darken-body');\n  if (toggle == 'true') {\n    body.style.cursor = 'not-allowed';\n    localStorage.setItem('display-edit-form', 'false');\n  } else {\n    body.style.cursor = 'cursor';\n    localStorage.setItem('display-edit-form', 'true');\n  }\n  editItemForm.style.cursor = 'default';\n  for (const input of inputs) {\n    input.style.cursor = 'text';\n  }\n}\nfunction attachRemoveListeners(removeIcon, item, itemDiv) {\n  removeIcon.addEventListener('mouseover', event => {\n    event.stopPropagation();\n    removeIcon.src = '../assets/trash-can-white.png';\n  });\n  removeIcon.addEventListener('mouseout', event => {\n    event.stopPropagation();\n    removeIcon.src = '../assets/trash-can-dark.png';\n  });\n  removeIcon.addEventListener('click', event => {\n    event.stopPropagation();\n    console.log(`Removing item \"${item.title}\"...`);\n    itemDiv.remove();\n    localStorage.removeItem(item.id);\n    removeItemFromProject(item);\n  });\n}\nfunction removeItemFromProject(item) {\n  const currentProjectId = localStorage.getItem('main-project-id');\n  const currentProject = JSON.parse(localStorage.getItem(currentProjectId));\n  currentProject.items.splice(currentProject.items.indexOf(item.id), 1);\n  localStorage.setItem(currentProjectId, JSON.stringify(currentProject));\n}\nfunction createCompletedItemView(item) {\n  const itemDiv = document.createElement('div');\n  itemDiv.classList.add('completed');\n  const title = document.createElement('h5');\n  title.textContent = item.title;\n  itemDiv.appendChild(title);\n  const date = document.createElement('h5');\n  date.textContent = (0,dateformat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(item.dueDate), \"mm/dd/yy, h:MM TT\");\n  itemDiv.appendChild(date);\n  return itemDiv;\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/class-views/item-view.js?");

/***/ }),

/***/ "./src/class-views/project-view.js":
/*!*****************************************!*\
  !*** ./src/class-views/project-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjectView)\n/* harmony export */ });\n/* harmony import */ var _item_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-view */ \"./src/class-views/item-view.js\");\n\nfunction createProjectView(project) {\n  const projectDiv = createProjectDiv(project);\n  projectDiv.addEventListener('click', () => {\n    if (localStorage.getItem('main-project-id') == project.id) {\n      // project is already being displayed\n      return console.log(`The same project was selected. (${project.title})`);\n    }\n    console.log(`Project \"${project.title}\" was selected`);\n    localStorage.setItem('main-project-id', project.id);\n    const allProjects = document.querySelectorAll('.project');\n    for (const project of allProjects) {\n      if (project == projectDiv) continue;\n      project.style.color = '#5e5e5e';\n    }\n    projectDiv.style.color = 'white';\n    const mainProjectHeader = document.querySelector('#main-project > h2');\n    mainProjectHeader.textContent = project.title;\n    const mainProjectDescription = document.querySelector('#main-project > p');\n    mainProjectDescription.textContent = project.description;\n    const projectItemsDiv = document.querySelector('div#todo-items');\n    while (projectItemsDiv.firstChild) {\n      projectItemsDiv.removeChild(projectItemsDiv.firstChild);\n    }\n    const projectItems = JSON.parse(localStorage.getItem(project.id)).items;\n    for (const itemId of projectItems) {\n      console.log('current item: ', itemId);\n      if (!itemId) continue;\n      const item = JSON.parse(localStorage.getItem(itemId));\n      console.log(item);\n      projectItemsDiv.appendChild((0,_item_view__WEBPACK_IMPORTED_MODULE_0__.createItemView)(item));\n    }\n  });\n  projectDiv.addEventListener('mouseover', () => {\n    if (localStorage.getItem('main-project-id') == project.id) return;\n    projectDiv.style.color = projectDiv.style.color == 'white' ? '#5e5e5e' : 'white';\n  });\n  projectDiv.addEventListener('mouseout', () => {\n    if (localStorage.getItem('main-project-id') == project.id) return;\n    projectDiv.style.color = projectDiv.style.color == '#5e5e5e' ? 'white' : '#5e5e5e';\n  });\n  return projectDiv;\n}\nfunction createProjectDiv(project) {\n  const projectDiv = document.createElement('div');\n  projectDiv.classList.add('project');\n  const h3 = document.createElement('h3');\n  h3.textContent = project.title;\n  h3.classList.add('title');\n  projectDiv.appendChild(h3);\n  if (project.id == localStorage.getItem('main-project-id')) projectDiv.style.color = 'white';\n  return projectDiv;\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/class-views/project-view.js?");

/***/ }),

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(id, title) {\n    let description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n    this.id = id;\n    this.title = title;\n    this.description = description;\n    this.items = [];\n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/classes/project.js?");

/***/ }),

/***/ "./src/classes/todo-item.js":
/*!**********************************!*\
  !*** ./src/classes/todo-item.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nclass TodoItem {\n  constructor(id, title) {\n    let description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n    let dueDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date();\n    let priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;\n    this.id = id;\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate ? dueDate : new Date();\n    this.priority = priority ? priority : 1;\n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/classes/todo-item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/header */ \"./src/ui/header.js\");\n/* harmony import */ var _ui_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/projects */ \"./src/ui/projects.js\");\n/* harmony import */ var _ui_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/default */ \"./src/ui/default.js\");\n/* harmony import */ var _ui_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/forms */ \"./src/ui/forms.js\");\n/* harmony import */ var _ui_completed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/completed */ \"./src/ui/completed.js\");\n\n\n\n\n\nfunction loadUI() {\n  (0,_ui_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_ui_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_ui_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_ui_completed__WEBPACK_IMPORTED_MODULE_4__.displayCompleted)();\n  (0,_ui_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\nloadUI();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/ui/completed.js":
/*!*****************************!*\
  !*** ./src/ui/completed.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCompleted\": () => (/* binding */ displayCompleted),\n/* harmony export */   \"updateCompletedCount\": () => (/* binding */ updateCompletedCount)\n/* harmony export */ });\n/* harmony import */ var _class_views_item_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class-views/item-view */ \"./src/class-views/item-view.js\");\n\nfunction displayCompleted() {\n  const completedDiv = document.querySelector('div#completed');\n  const h2 = document.createElement('h2');\n  h2.textContent = 'Completed';\n  completedDiv.appendChild(h2);\n  let completedItemIds = localStorage.getItem('completed-items');\n  if (completedItemIds) completedItemIds = completedItemIds.split(',');\n  const countDescription = document.createElement('h3');\n  countDescription.textContent = updateCompletedCount(completedItemIds);\n  countDescription.style.paddingLeft = '8px';\n  countDescription.addEventListener('click', () => {\n    console.log('Showing completed items...', completedItemIds);\n    const completedHidden = localStorage.getItem('completed-hidden') ?? 'true';\n    toggleCompletedItems(completedHidden, completedItemIds, completedDiv);\n  });\n  completedDiv.appendChild(countDescription);\n}\nfunction toggleCompletedItems(completedHidden, completedItemIds, completedDiv) {\n  if (completedHidden == 'true') {\n    for (const itemId of completedItemIds) {\n      if (!itemId) continue;\n      const item = JSON.parse(localStorage.getItem(itemId));\n      console.log('Found an item: ', item);\n      const completedItemDiv = (0,_class_views_item_view__WEBPACK_IMPORTED_MODULE_0__.createCompletedItemView)(item);\n      completedDiv.appendChild(completedItemDiv);\n      localStorage.setItem('completed-hidden', 'false');\n    }\n  } else {\n    const completedItems = document.querySelectorAll('div.completed');\n    for (const item of completedItems) {\n      item.remove();\n    }\n    localStorage.setItem('completed-hidden', 'true');\n  }\n}\nfunction updateCompletedCount(completedItemIds) {\n  let description,\n    completedCount = 0;\n  if (!completedItemIds) {\n    description = '0 items';\n  } else {\n    for (const itemId of completedItemIds) {\n      if (!itemId) continue;\n      completedCount += 1;\n    }\n    description = `${completedCount} items`;\n  }\n  return description;\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/completed.js?");

/***/ }),

/***/ "./src/ui/default.js":
/*!***************************!*\
  !*** ./src/ui/default.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadDefaultProject)\n/* harmony export */ });\n/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generate-unique-id */ \"./node_modules/generate-unique-id/index.js\");\n/* harmony import */ var generate_unique_id__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(generate_unique_id__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _class_views_item_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-views/item-view */ \"./src/class-views/item-view.js\");\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _classes_todo_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/todo-item */ \"./src/classes/todo-item.js\");\n\n\n\n\nconst defaultProjectDiv = document.querySelector('div#default');\nfunction loadDefaultProject() {\n  resetDiv();\n  const mainProject = loadMainProject();\n  displayHeader();\n  displayItems(mainProject);\n}\nfunction resetDiv() {\n  for (const child of defaultProjectDiv.children) {\n    console.log(child);\n    if (child != document.querySelector('form#new-item')) child.remove();\n  }\n}\nfunction loadMainProject() {\n  let MAIN_PROJECT_ID = localStorage.getItem('main-project-id');\n  if (!MAIN_PROJECT_ID) {\n    // generate default project id\n    MAIN_PROJECT_ID = `project-${generate_unique_id__WEBPACK_IMPORTED_MODULE_0___default()()}`;\n    localStorage.setItem('main-project-id', MAIN_PROJECT_ID);\n    const newProject = new _classes_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](MAIN_PROJECT_ID, 'Default Project', 'This is your default project');\n    localStorage.setItem(MAIN_PROJECT_ID, JSON.stringify(newProject));\n    let userProjects = localStorage.getItem('user-projects') || '';\n    userProjects += `${MAIN_PROJECT_ID},`;\n    localStorage.setItem('user-projects', userProjects);\n  }\n  console.log(`Main project id: ${MAIN_PROJECT_ID}`);\n  localStorage.setItem('display-edit-form', 'true');\n  return JSON.parse(localStorage.getItem(MAIN_PROJECT_ID));\n}\nfunction displayHeader() {\n  const newItemForm = document.querySelector('form#new-item');\n  const MAIN_PROJECT_ID = localStorage.getItem('main-project-id');\n  const mainProject = JSON.parse(localStorage.getItem(MAIN_PROJECT_ID));\n  const projectHeader = document.createElement('div');\n  projectHeader.setAttribute('id', 'main-project');\n  const projectName = document.createElement('h2');\n  projectName.textContent = mainProject.title;\n  projectHeader.appendChild(projectName);\n  const projectDescription = document.createElement('p');\n  projectDescription.textContent = mainProject.description;\n  const newItemButton = document.createElement('button');\n  newItemButton.id = 'new-item';\n  newItemButton.textContent = 'New';\n  newItemButton.addEventListener('click', revealNewItemForm);\n  projectHeader.appendChild(projectDescription);\n  projectHeader.appendChild(newItemButton);\n  defaultProjectDiv.insertBefore(projectHeader, newItemForm);\n}\nfunction displayItems(project) {\n  const projectItems = document.createElement('div');\n  projectItems.setAttribute('id', 'todo-items');\n  defaultProjectDiv.appendChild(projectItems);\n  for (const itemId of project.items) {\n    const item = JSON.parse(localStorage.getItem(itemId));\n    // create a div for this item and add it to projectItems div\n    projectItems.appendChild((0,_class_views_item_view__WEBPACK_IMPORTED_MODULE_1__.createItemView)(new _classes_todo_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"](item.id, item.title, item.description, item.dueDate, item.priority)));\n  }\n}\nfunction revealNewItemForm() {\n  console.log('newItemButton click');\n  const newItemForm = document.querySelector('form#new-item');\n  if (!newItemForm.style.display) {\n    newItemForm.style.display = 'flex';\n  } else {\n    newItemForm.removeAttribute('style');\n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/default.js?");

/***/ }),

/***/ "./src/ui/forms.js":
/*!*************************!*\
  !*** ./src/ui/forms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ attachFormListeners)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _class_views_project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-views/project-view */ \"./src/class-views/project-view.js\");\n/* harmony import */ var _classes_todo_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/todo-item */ \"./src/classes/todo-item.js\");\n/* harmony import */ var _class_views_item_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class-views/item-view */ \"./src/class-views/item-view.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default */ \"./src/ui/default.js\");\nconst generateUniqueId = __webpack_require__(/*! generate-unique-id */ \"./node_modules/generate-unique-id/index.js\");\n\n\n\n\n\nfunction attachFormListeners() {\n  newProjectForm();\n  newTodoItemForm();\n  editItemForm();\n}\nfunction newProjectForm() {\n  const projectsList = document.querySelector('div#projects-list');\n  const newProjectForm = document.querySelector('form#new-project');\n  newProjectForm.addEventListener('submit', e => {\n    e.preventDefault();\n    const data = new FormData(e.target);\n    const projectData = [...data.entries()];\n    const projectId = `project-${generateUniqueId()}`;\n    const newProject = new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectId, projectData[0][1], projectData[1][1]);\n    console.log('Created a new project: ', newProject);\n    localStorage.setItem(projectId, JSON.stringify(newProject));\n    const userProjects = localStorage.getItem('user-projects') + `${projectId},`;\n    localStorage.setItem('user-projects', userProjects);\n    const projectView = (0,_class_views_project_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newProject);\n    projectsList.appendChild(projectView);\n    projectView.click();\n    console.log('Local storage after adding project: ', localStorage);\n    newProjectForm.reset();\n    newProjectForm.removeAttribute('style');\n  });\n}\nfunction newTodoItemForm() {\n  const mainProjectItems = document.querySelector('div#todo-items');\n  const newItemForm = document.querySelector('form#new-item');\n  newItemForm.addEventListener('submit', e => {\n    e.preventDefault();\n    const data = new FormData(e.target);\n    const itemData = [...data.entries()];\n    const itemId = `item-${generateUniqueId()}`;\n    const newItem = new _classes_todo_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"](itemId, itemData[0][1], itemData[1][1], itemData[2][1], itemData[3][1]);\n    console.log('Created a new todo item: ', newItem);\n    const currentProjectId = localStorage.getItem('main-project-id');\n    const currentProject = JSON.parse(localStorage.getItem(currentProjectId));\n    currentProject.items.push(itemId);\n    localStorage.setItem(currentProjectId, JSON.stringify(currentProject));\n    localStorage.setItem(itemId, JSON.stringify(newItem));\n    const itemView = (0,_class_views_item_view__WEBPACK_IMPORTED_MODULE_3__.createItemView)(newItem);\n    mainProjectItems.appendChild(itemView);\n    itemView.click();\n    console.log('Local storage after adding item: ', localStorage);\n    newItemForm.reset();\n    newItemForm.removeAttribute('style');\n  });\n}\nfunction editItemForm() {\n  const editItemForm = document.querySelector('form#edit');\n  editItemForm.addEventListener('submit', e => {\n    e.preventDefault();\n    const data = new FormData(e.target);\n    const itemData = [...data.entries()];\n    const itemId = localStorage.getItem('current-active-item');\n    // const currentItem = JSON.parse(localStorage.getItem(itemId));\n    const editedItem = new _classes_todo_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"](itemId, itemData[0][1], itemData[1][1], itemData[2][1], itemData[3][1]);\n    console.log('Edited item: ', editedItem);\n    localStorage.setItem(itemId, JSON.stringify(editedItem));\n    (0,_default__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_class_views_item_view__WEBPACK_IMPORTED_MODULE_3__.toggleWindowOpacity)();\n    editItemForm.reset();\n    editItemForm.removeAttribute('style');\n  });\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/forms.js?");

/***/ }),

/***/ "./src/ui/header.js":
/*!**************************!*\
  !*** ./src/ui/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHeader)\n/* harmony export */ });\nfunction loadHeader() {\n  const header = document.querySelector('div#header');\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Todo List';\n  header.appendChild(h1);\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/header.js?");

/***/ }),

/***/ "./src/ui/projects.js":
/*!****************************!*\
  !*** ./src/ui/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadProjectsList)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _class_views_project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-views/project-view */ \"./src/class-views/project-view.js\");\n\n\nconst projectsSidebar = document.querySelector('div#projects');\nconst newProjectForm = document.querySelector('form#new-project');\nfunction loadProjectsList() {\n  createHeader();\n  const projectsListDiv = document.createElement('div');\n  projectsListDiv.id = 'projects-list';\n  projectsSidebar.appendChild(projectsListDiv);\n  const projectIds = localStorage.getItem('user-projects').split(',');\n  for (const projectId of projectIds) {\n    if (!projectId) continue;\n    const project = JSON.parse(localStorage.getItem(projectId));\n    projectsListDiv.appendChild((0,_class_views_project_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](project.id, project.title, project.description)));\n  }\n}\nfunction createHeader() {\n  const projectsHeader = document.createElement('div');\n  projectsHeader.setAttribute('id', 'projects-header');\n  const h2 = document.createElement('h2');\n  h2.textContent = 'My Projects';\n  projectsHeader.appendChild(h2);\n  const newProjectButton = document.createElement('button');\n  newProjectButton.id = 'new-project';\n  newProjectButton.textContent = 'New';\n  newProjectButton.addEventListener('click', revealNewProjectForm);\n  projectsHeader.appendChild(newProjectButton);\n  projectsSidebar.insertBefore(projectsHeader, newProjectForm);\n}\nfunction revealNewProjectForm() {\n  console.log('newProjectButton click');\n  if (!newProjectForm.style.display) {\n    newProjectForm.style.display = 'flex';\n  } else {\n    newProjectForm.removeAttribute('style');\n  }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/ui/projects.js?");

/***/ }),

/***/ "./node_modules/generate-unique-id/index.js":
/*!**************************************************!*\
  !*** ./node_modules/generate-unique-id/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("function getRandomNumber(limit) {\n  return Math.floor(Math.random() * limit).toString();\n}\n\nfunction filterSymbols(excludeSymbols, group) {\n  let newGroup = group;\n  excludeSymbols.forEach((symbol) => {\n    newGroup = newGroup.replace(symbol, '');\n  });\n\n  return newGroup;\n}\n\nfunction createId(availableChars, idLength) {\n  let id = '';\n\n  for (let i = 0; i < idLength; i += 1) {\n    id += availableChars[getRandomNumber(availableChars.length)];\n  }\n\n  return id;\n}\n\nfunction generateUniqueId({\n  length = 20,\n  useLetters = true,\n  useNumbers = true,\n  includeSymbols = [],\n  excludeSymbols = [],\n} = {}) {\n  let letters = 'abcdefghijklmnopqrstuvwxyz';\n  let numbers = '0123456789';\n  let availableChars = [];\n  let lettersArr = [];\n  let numbersArr = [];\n\n  if (useLetters) {\n    if (excludeSymbols.length) letters = filterSymbols(excludeSymbols, letters);\n    lettersArr = letters.split('');\n  }\n\n  if (useNumbers) {\n    if (excludeSymbols.length) numbers = filterSymbols(excludeSymbols, numbers);\n    numbersArr = numbers.split('');\n  }\n\n  availableChars = [...lettersArr, ...numbersArr, ...includeSymbols];\n\n  return createId(availableChars, length);\n}\n\nmodule.exports = generateUniqueId;\n\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/generate-unique-id/index.js?");

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