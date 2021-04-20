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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/components/Models/File/FileDto.ts":
/*!*******************************************************!*\
  !*** ./src/scripts/components/Models/File/FileDto.ts ***!
  \*******************************************************/
/*! exports provided: FileDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDto", function() { return FileDto; });
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/constant */ "./src/scripts/utilities/constant.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item */ "./src/scripts/components/Models/Item.ts");


class FileDto extends _Item__WEBPACK_IMPORTED_MODULE_1__["Item"] {
  constructor(id, createDate, owner, modifiedAt, modifiedBy, icon, extension = '.xlxs') {
    super(id, createDate, owner, modifiedAt, modifiedBy, icon);
    this.parent = 0;
    this.extension = extension;
    this.icon = _utilities_constant__WEBPACK_IMPORTED_MODULE_0__["properties"].FILE_DEFAULT_URL;
  }

  mapping(input) {
    if (input.id) this.id = input.id;
    if (input.fileName) this.fileName = input.fileName;
    if (input.creator) this.owner = input.owner;
    if (input.createAt) this.createAt = input.createAt;
    if (input.modifiedBy) this.modifiedBy = input.modifiedBy;
    if (input.modifiedAt) this.modifiedAt = input.modifiedAt;
    if (input.extension) this.extension = input.extension;
    if (input.icon) this.icon = input.icon;
    if (input.parent) this.parent = input.parent;
    console.log(input, this); // super.mapping(input);
    // if (input.extension) this.extension = input.extension;
  }

}

/***/ }),

/***/ "./src/scripts/components/Models/File/FileFilter.ts":
/*!**********************************************************!*\
  !*** ./src/scripts/components/Models/File/FileFilter.ts ***!
  \**********************************************************/
/*! exports provided: FileFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFilter", function() { return FileFilter; });
class FileFilter {
  constructor() {
    this.parent = 0;
  }

}

/***/ }),

/***/ "./src/scripts/components/Models/Folder/FolderDto.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/components/Models/Folder/FolderDto.ts ***!
  \***********************************************************/
/*! exports provided: FolderDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderDto", function() { return FolderDto; });
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/constant */ "./src/scripts/utilities/constant.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item */ "./src/scripts/components/Models/Item.ts");


class FolderDto extends _Item__WEBPACK_IMPORTED_MODULE_1__["Item"] {
  constructor(id, createDate, creator, modifiedAt, modifiedBy, icon) {
    super(id, createDate, creator, modifiedAt, modifiedBy, icon);
    this.parentID = 0;
    this.icon = _utilities_constant__WEBPACK_IMPORTED_MODULE_0__["properties"].FOLDER_DEFAULT_URL;
  }

  mapping(input) {
    if (input.id) this.id = input.id;
    if (input.folderName) this.folderName = input.folderName;
    if (input.owner) this.owner = input.owner;
    if (input.createAt) this.createAt = input.createAt;
    if (input.modifiedBy) this.modifiedBy = input.modifiedBy;
    if (input.modifiedAt) this.modifiedAt = input.modifiedAt;
    if (input.icon) this.icon = input.icon; // super.mapping(input);
    // if (input.subItems) this.subItems = input.subItems;
  }

}

/***/ }),

/***/ "./src/scripts/components/Models/Folder/FolderFilter.ts":
/*!**************************************************************!*\
  !*** ./src/scripts/components/Models/Folder/FolderFilter.ts ***!
  \**************************************************************/
/*! exports provided: FolderFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderFilter", function() { return FolderFilter; });
class FolderFilter {
  constructor() {
    this.parentID = 0;
  }

}

/***/ }),

/***/ "./src/scripts/components/Models/Item.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/Models/Item.ts ***!
  \***********************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
  constructor(id, createDate, creator, modifiedAt, modifiedBy, icon) {
    this.createAt = '04/04/2021';
    this.owner = 'An Tran Hoang';
    if (id) this.id = id;
    if (createDate) this.createAt = createDate;
    if (creator) this.owner = creator;
    if (modifiedAt) this.modifiedAt = modifiedAt;
    if (modifiedBy) this.modifiedBy = modifiedBy;
    if (icon) this.icon = icon;
  }

}

/***/ }),

/***/ "./src/scripts/components/Models/RenderTemplate.ts":
/*!*********************************************************!*\
  !*** ./src/scripts/components/Models/RenderTemplate.ts ***!
  \*********************************************************/
/*! exports provided: RenderTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTemplate", function() { return RenderTemplate; });
class RenderTemplate {
  constructor(table, ordering) {
    this.table = table;
    this.ordering = ordering;
  }

  render(item) {
    const row = this.table.getElementsByTagName('tbody')[0].insertRow(-1);
    const map = new Map(Object.entries(item));

    for (let i = 0; i <= this.ordering.length; i += 1) {
      // Render content
      if (map.get(this.ordering[i]) !== undefined) {
        const cell = row.insertCell(-1);

        if (this.ordering[i] === 'icon') {
          cell.className = 'pl-md-5';
          const imgNode = document.createElement('img');
          imgNode.className = 'icon';
          imgNode.src = map.get('icon');
          cell.appendChild(imgNode);
          continue;
        } // Hide ID col


        if (this.ordering[i] === 'id') {
          cell.className = 'd-none';
        }

        cell.innerHTML = map.get(this.ordering[i]);
      } // Ultility button


      if (i === this.ordering.length) {
        const cell = row.insertCell(-1);
        const editBtn = document.createElement('button');
        editBtn.className = 'edit';
        const editText = document.createElement('span');
        editText.innerHTML = 'edit';
        editBtn.appendChild(editText);
        cell.appendChild(editBtn);
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close';
        const closeIco = document.createElement('span');
        closeIco.innerHTML = '&times;';
        closeBtn.appendChild(closeIco);
        cell.appendChild(closeBtn);
      }
    }

    return row;
  }

}

/***/ }),

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderGrid = () => {// TODO: implement code to Render grid
};

/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* harmony import */ var _components_Models_File_FileDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Models/File/FileDto */ "./src/scripts/components/Models/File/FileDto.ts");
/* harmony import */ var _components_Models_RenderTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Models/RenderTemplate */ "./src/scripts/components/Models/RenderTemplate.ts");
/* harmony import */ var _utilities_utilities_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/utilities-function */ "./src/scripts/utilities/utilities-function.ts");
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/constant */ "./src/scripts/utilities/constant.ts");
/* harmony import */ var _utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/API-fetch */ "./src/scripts/utilities/API-fetch.ts");
/* harmony import */ var _components_Models_File_FileFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Models/File/FileFilter */ "./src/scripts/components/Models/File/FileFilter.ts");
/* harmony import */ var _components_Models_Folder_FolderFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Models/Folder/FolderFilter */ "./src/scripts/components/Models/Folder/FolderFilter.ts");
/* harmony import */ var _components_Models_Folder_FolderDto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Models/Folder/FolderDto */ "./src/scripts/components/Models/Folder/FolderDto.ts");

 //import { FolderDto } from '../components/Models/Folder/FolderDto';









let currentDir = '';
let template = new _components_Models_RenderTemplate__WEBPACK_IMPORTED_MODULE_3__["RenderTemplate"](document.getElementById("content-table"), _utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].ORDERING);
let clickedRow = '0';
let hoverRow = '';
let editMode = false;
Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  currentDir = _utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_DIRECTORY;
  forwardCurrentDirectory();
  renderData();
  let submitButton = document.getElementsByClassName('btn-add')[0];
  addItemEvent(submitButton); //checkboxEvent();

  /*    backEvent();*/
});
/**
 * Render all data with given array of Folder or Files.
 * @param {Array<Item>} input - Array of folders or files.
*/

function generateData(input, type) {
  for (let i = 0; i < input.length; i += 1) {
    let item = null;
    if (type === _utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].FOLDER_TYPE) item = new _components_Models_Folder_FolderDto__WEBPACK_IMPORTED_MODULE_9__["FolderDto"]();else item = new _components_Models_File_FileDto__WEBPACK_IMPORTED_MODULE_2__["FileDto"]();
    item.mapping(input[i]);
    let row = template.render(item);
    let id = row.cells[row.cells.length - 2].textContent;
    attachOnclickFolder(id, row);
    getRowIdOnHover(id, row);
    attachRemoveItemEvent(row);
    attachEditEvent(row);
  }
}

; //Render all items in local storage

function renderData() {
  console.log(clickedRow);
  let filter = new _components_Models_File_FileFilter__WEBPACK_IMPORTED_MODULE_7__["FileFilter"]();
  filter.parent = parseInt(clickedRow);
  Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["getData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'File/GetFiles?', filter).then(data => {
    generateData(data, _utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].FILE_TYPE);
  });
  let folderFilter = new _components_Models_Folder_FolderFilter__WEBPACK_IMPORTED_MODULE_8__["FolderFilter"]();
  folderFilter.parentID = parseInt(clickedRow);
  Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["getData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'Folder/GetFolders?', folderFilter).then(data => {
    generateData(data, _utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].FOLDER_TYPE);
  });
} //Clear current page data excluding header


function clearCurrentData() {
  let tr = document.getElementsByTagName('tr');

  while (tr.length != 1) {
    tr[1].remove();
  }
}

;
/**
 * Attach on click event to view items in folder for <tr> tag
 */

/**
 * Attach on click event to view items in folder for <tr> tag
 * @param {string} id - folder id.
 * @param {HTMLTableRowElement}  tr - <tr> element.
 */

function attachOnclickFolder(id, tr) {
  tr.addEventListener("click", function () {
    clearCurrentData(); //Check if data is in local storage and render

    let filter = new _components_Models_File_FileFilter__WEBPACK_IMPORTED_MODULE_7__["FileFilter"]();
    filter.parent = parseInt(id);
    console.log(filter.parent);
    Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["getData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'File/GetFiles?', filter).then(data => {
      generateData(data, _utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].FILE_TYPE);
    });
    let foldFilter = new _components_Models_Folder_FolderFilter__WEBPACK_IMPORTED_MODULE_8__["FolderFilter"]();
    foldFilter.parentID = parseInt(id);
    Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["getData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'Folder/GetFolders?', foldFilter).then(data => {
      generateData(data, _utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].FOLDER_TYPE);
    });
    clickedRow = id; // forwardCurrentDirectory(fold.name);
    // if (fold) {
    //    fold.subItems.forEach(element => {
    //        if (Array.isArray(element)) {
    //            generateData(element);
    //        }
    //        else generateData([element]);
    //    });
    // }
  });
}
/**
 * Passing Item id to global variable for a later use.
 */


function getRowIdOnHover(id, tr) {
  tr.onmouseover = function () {
    hoverRow = id;
  };
}
/**
 * Attach add folder event to provided <button>.
 * @param {HTMLButtonElement}  btn - <tr> element.
 */


function addItemEvent(btn) {
  btn.onclick = function () {
    console.log(clickedRow); //Get Name field

    let nameField = document.getElementById("name");
    let name = nameField.value; //Check if in put is a file

    let inputElem = document.getElementById("file");
    let isFile = inputElem.checked;

    if (!editMode) {
      if (isFile) {
        let file = new _components_Models_File_FileDto__WEBPACK_IMPORTED_MODULE_2__["FileDto"]();
        file.createAt = Object(_utilities_utilities_function__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])();
        file.extension = '.xlxs';
        file.parent = parseInt(clickedRow);
        file.owner = 'An Tran Hoang';
        file.fileName = name;
        console.log(file.fileName);
        Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["putData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'File/CreateOrEditFile?', file).finally(() => refresh());
      } else {
        let folder = new _components_Models_Folder_FolderDto__WEBPACK_IMPORTED_MODULE_9__["FolderDto"]();
        folder.createAt = Object(_utilities_utilities_function__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])();
        folder.parentID = parseInt(clickedRow);
        folder.owner = 'An Tran Hoang';
        folder.folderName = name;
        console.log(folder.folderName);
        Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["putData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'Folder/CreateOrEditFolder?', folder).finally(() => refresh());
      }
    } else {
      if (isFile) {
        Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["getData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'File/GetFileById/' + hoverRow, {}).then(data => {
          data.fileName = name;
          data.modifiedAt = Object(_utilities_utilities_function__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])();
          data.modifiedBy = "Thinh tre trau";
          Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["putData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'File/CreateOrEditFile?', data).then(() => refresh());
        }).finally(() => refresh());
      } else {
        Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["getData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'Folder/GetFolderById/' + hoverRow, {}).then(data => {
          console.log(data);
          data.folderName = name;
          data.modifiedAt = Object(_utilities_utilities_function__WEBPACK_IMPORTED_MODULE_4__["getCurrentDate"])();
          data.modifiedBy = "Thinh tre trau";
          Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["putData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'Folder/CreateOrEditFolder?', data).then(() => refresh());
        }).finally(() => refresh());
      }

      editMode = false;
    }
  };
}
/**
 * Attach event "Remove item" to provided <tr>.
 * @param {HTMLTableRowElement}  row - <tr> element.
 */


function attachRemoveItemEvent(row) {
  let btn = row.getElementsByClassName('close');
  let src = row.cells[0].getElementsByTagName('img')[0].src;
  let type = src.split('/');

  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', function () {
      if (type[type.length - 1] != 'folder.png') {
        Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["deleteData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'File/DeleteFile/', hoverRow).finally(() => {
          refresh();
        });
      } else {
        Object(_utilities_API_fetch__WEBPACK_IMPORTED_MODULE_6__["deleteData"])(_utilities_constant__WEBPACK_IMPORTED_MODULE_5__["properties"].BASE_API_URL + 'Folder/DeleteFolder/', hoverRow).finally(() => {
          refresh();
        });
      }

      event.stopImmediatePropagation();
    });
  }
}

;
/**
 * Add current folder to directory if folder name is provided
 * else return current directory
 * @param {string}  folder - folder name.
 * @return {string} - result current directory.
 */

function forwardCurrentDirectory(folder = '') {
  if (folder != '') currentDir += '/' + folder;
  document.getElementById('directory').innerHTML = currentDir;
  return currentDir;
}
/**
 * Remove current folder from directory
 * @return {string} - result prefix & length.
 */


function backwardCurrentDirectory() {
  let arr = currentDir.split('/');
  arr.pop();
  currentDir = arr.join("/");
  document.getElementById('directory').innerHTML = currentDir;
  return currentDir;
} // Checkbox event
//function checkboxEvent() {
//    let inputElem = <HTMLInputElement>document.getElementById("file");
//    let idField: HTMLInputElement = <HTMLInputElement>document.getElementById("id");
//    idField.value = generateKey(properties.FOLDER_PREFIX, randomLength);
//    inputElem.onclick = function () {
//        let isFile: boolean = inputElem.checked;
//        const prefix: string = isFile ? properties.FILE_PREFIX : properties.FOLDER_PREFIX;
//        let result = generateKey(prefix, randomLength);
//        idField.value = result;
//    }
//}

/**
 * Edit item
 */


function attachEditEvent(tr) {
  let btn = tr.getElementsByClassName('edit');

  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', function () {
      let btn = document.getElementById('toggle-button');
      btn.click();
      editMode = true;
      event.stopImmediatePropagation();
    });
  }
}
/**
 * Event for back button
 */
//function backEvent() {
//    document.getElementById('back-btn').onclick = function () {
//        backwardCurrentDirectory();
//        if (clickedRow !== properties.BASE_DIRECTORY) {
//            let currentFold: Folder = new Folder();
//            currentFold.mapping(getItemById(clickedRow));
//            if (currentFold.parent !== properties.BASE_DIRECTORY) {
//                let parentFolder: Folder = new Folder();
//                parentFolder.mapping(getItemById(currentFold.parent));
//            }
//            clickedRow = currentFold.parent;
//        }
//        refresh();
//    }
//}


function refresh() {
  clearCurrentData();
  renderData();
}

/***/ }),

/***/ "./src/scripts/utilities/API-fetch.ts":
/*!********************************************!*\
  !*** ./src/scripts/utilities/API-fetch.ts ***!
  \********************************************/
/*! exports provided: putData, getData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}; // Example POST method implementation:


function putData(url, data) {
  return __awaiter(this, void 0, void 0, function* () {
    // Default options are marked with *
    const response = yield fetch(url, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
  });
}

function serialize(obj) {
  const str = [];

  for (const p in obj) if (obj.hasOwnProperty(p)) {
    str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
  }

  return str.join('&');
}

function getData(url, data) {
  return __awaiter(this, void 0, void 0, function* () {
    // Default options are marked with *
    const response = yield fetch(url + serialize(data));
    return response.json(); // parses JSON response into native JavaScript objects
  });
}
function deleteData(url, data) {
  return __awaiter(this, void 0, void 0, function* () {
    // Default options are marked with *
    const response = yield fetch(url + data, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin'
    });
    return response.json(); // parses JSON response into native JavaScript objects
  });
}

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/scripts/utilities/constant.ts":
/*!*******************************************!*\
  !*** ./src/scripts/utilities/constant.ts ***!
  \*******************************************/
/*! exports provided: properties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properties", function() { return properties; });
const properties = {
  CREATE_MODE: 'create',
  EDIT_MODE: 'edit',
  ORDERING: ['icon', 'folderName', 'fileName', 'createAt', 'owner', 'id'],
  BASE_DIRECTORY: null,
  FILE_TYPE: 'file',
  FOLDER_TYPE: 'folder',
  FILE_DEFAULT_URL: './dist/image/excel.png',
  FOLDER_DEFAULT_URL: './dist/image/folder.png',
  BASE_API_URL: 'http://localhost:64557/api/'
};

/***/ }),

/***/ "./src/scripts/utilities/utilities-function.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/utilities/utilities-function.ts ***!
  \*****************************************************/
/*! exports provided: generateKey, getCurrentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateKey", function() { return generateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDate", function() { return getCurrentDate; });
/**
 * Key generator
 * @param {string}  prefix - prefix for file and folder.
 * @param {number} length - random string length.
 * @return {string} - result prefix & length.
 */
function generateKey(prefix, length) {
  const randomStr = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    randomStr.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  const result = prefix.concat(randomStr.join(''));
  return result;
} // Get current date

function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map