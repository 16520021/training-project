import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
//import { FolderDto } from '../components/Models/Folder/FolderDto';
import { FileDto } from '../components/Models/File/FileDto';
import { RenderTemplate } from '../components/Models/RenderTemplate';
import { getCurrentDate } from '../utilities/utilities-function';
import { properties } from '../utilities/constant';
import { deleteData, getData, putData } from '../utilities/API-fetch';
import { FileFilter } from '../components/Models/File/FileFilter';
import { FolderFilter } from '../components/Models/Folder/FolderFilter';
import { FolderDto } from '../components/Models/Folder/FolderDto';

let currentDir = '';
let template = new RenderTemplate(<HTMLTableElement>document.getElementById("content-table"), properties.ORDERING);
let clickedRow: string = '0';
let hoverRow: string = '';
let editMode: boolean = false;


ready(() => {
    renderGrid();
    currentDir = properties.BASE_DIRECTORY;
    forwardCurrentDirectory();
    renderData();
    let submitButton: HTMLButtonElement = <HTMLButtonElement>document.getElementsByClassName('btn-add')[0];
    addItemEvent(submitButton);
    //checkboxEvent();
/*    backEvent();*/
});

/**
 * Render all data with given array of Folder or Files.
 * @param {Array<Item>} input - Array of folders or files.
*/
function generateData(input: Array<any>, type: string) {
    for (let i = 0; i < input.length; i += 1) {
        let item = null;
        if (type === properties.FOLDER_TYPE) item = new FolderDto();
        else item = new FileDto();
        item.mapping(input[i]);
        let row = template.render(item);
        let id = row.cells[row.cells.length - 2].textContent;
        attachOnclickFolder(id, row);
        getRowIdOnHover(id, row);
        attachRemoveItemEvent(row);
        attachEditEvent(row);
    }

};

//Render all items in local storage
function renderData() {
    console.log(clickedRow);
    let filter: FileFilter = new FileFilter();
    filter.parent = parseInt(clickedRow);
    getData(properties.BASE_API_URL + 'File/GetFiles?', filter).then(data => {
        generateData(data, properties.FILE_TYPE);
    });

    let folderFilter: FolderFilter = new FolderFilter();
    folderFilter.parentID = parseInt(clickedRow);
    getData(properties.BASE_API_URL + 'Folder/GetFolders?', folderFilter).then(data => {
        generateData(data, properties.FOLDER_TYPE);
    });
}

//Clear current page data excluding header
function clearCurrentData() {
    let tr = document.getElementsByTagName('tr');
    while (tr.length != 1) {
        tr[1].remove();
    }
};

/**
 * Attach on click event to view items in folder for <tr> tag
 */

/**
 * Attach on click event to view items in folder for <tr> tag
 * @param {string} id - folder id.
 * @param {HTMLTableRowElement}  tr - <tr> element.
 */
function attachOnclickFolder(id: string, tr: HTMLTableRowElement) {
    tr.addEventListener("click", function () {
        clearCurrentData();
        //Check if data is in local storage and render
        let filter: FileFilter = new FileFilter();
        filter.parent = parseInt(id);
        console.log(filter.parent);
        getData(properties.BASE_API_URL + 'File/GetFiles?', filter).then(data => {
           generateData(data, properties.FILE_TYPE);
        });

        let foldFilter: FolderFilter = new FolderFilter();
        foldFilter.parentID = parseInt(id);
        getData(properties.BASE_API_URL + 'Folder/GetFolders?', foldFilter).then(data => {
           generateData(data, properties.FOLDER_TYPE);
        });
        clickedRow = id;
        // forwardCurrentDirectory(fold.name);
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
function getRowIdOnHover(id: string, tr: HTMLTableRowElement) {
    tr.onmouseover = function () {
        hoverRow = id;
    }
}

/**
 * Attach add folder event to provided <button>.
 * @param {HTMLButtonElement}  btn - <tr> element.
 */
function addItemEvent(btn: HTMLButtonElement) {
    btn.onclick = function () {
        console.log(clickedRow);
       //Get Name field
       let nameField: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
       let name: string = nameField.value;
       //Check if in put is a file
       let inputElem = <HTMLInputElement>document.getElementById("file");
        let isFile: boolean = inputElem.checked;
        if (!editMode) {
            if (isFile) {
                let file: FileDto = new FileDto();
                file.createAt = getCurrentDate();
                file.extension = '.xlxs';
                file.parent = parseInt(clickedRow);
                file.owner = 'An Tran Hoang';
                file.fileName = name;
                console.log(file.fileName);
                putData(properties.BASE_API_URL + 'File/CreateOrEditFile?', file).finally(() => refresh());
            } else {
                let folder: FolderDto = new FolderDto();
                folder.createAt = getCurrentDate();
                folder.parentID = parseInt(clickedRow);
                folder.owner = 'An Tran Hoang';
                folder.folderName = name;
                console.log(folder.folderName);
                putData(properties.BASE_API_URL + 'Folder/CreateOrEditFolder?', folder).finally(() => refresh());
            }
        } else {
            if (isFile) {
                getData(properties.BASE_API_URL + 'File/GetFileById/' + hoverRow, {}).then(data => {
                    data.fileName = name;
                    data.modifiedAt = getCurrentDate();
                    data.modifiedBy = "Thinh tre trau";
                    putData(properties.BASE_API_URL + 'File/CreateOrEditFile?', data).then(() => refresh());
                }).finally(() => refresh());
            } else {
                getData(properties.BASE_API_URL + 'Folder/GetFolderById/' + hoverRow, {}).then(data => {
                    console.log(data);
                    data.folderName = name;
                    data.modifiedAt = getCurrentDate();
                    data.modifiedBy = "Thinh tre trau";
                    putData(properties.BASE_API_URL + 'Folder/CreateOrEditFolder?', data).then(() => refresh());
                }).finally(() => refresh());
            }

            editMode = false;
        }
   }
}

/**
 * Attach event "Remove item" to provided <tr>.
 * @param {HTMLTableRowElement}  row - <tr> element.
 */
function attachRemoveItemEvent(row: HTMLTableRowElement) {
    let btn = row.getElementsByClassName('close');
    let src = row.cells[0].getElementsByTagName('img')[0].src;
    let type = src.split('/'); 
    for (let i = 0; i < btn.length; i += 1) {
        btn[i].addEventListener('click', function () {
            if (type[type.length - 1] != 'folder.png') {
                deleteData(properties.BASE_API_URL + 'File/DeleteFile/',hoverRow).finally(() => {
                    refresh();
                });
            } else {
                deleteData(properties.BASE_API_URL + 'Folder/DeleteFolder/', hoverRow).finally(() => {
                    refresh();
                });
            }
            event.stopImmediatePropagation();
        })
    }
};

/**
 * Add current folder to directory if folder name is provided 
 * else return current directory
 * @param {string}  folder - folder name.
 * @return {string} - result current directory.
 */
function forwardCurrentDirectory(folder: string = ''): string {
    if (folder != '')
        currentDir += '/' + folder;
    document.getElementById('directory').innerHTML = currentDir;
    return currentDir;
}

/**
 * Remove current folder from directory 
 * @return {string} - result prefix & length.
 */
function backwardCurrentDirectory(): string {
    let arr: Array<string> = currentDir.split('/');
    arr.pop();
    currentDir = arr.join("/");
    document.getElementById('directory').innerHTML = currentDir;
    return currentDir;
}

// Checkbox event
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
function attachEditEvent(tr: HTMLTableRowElement) {
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
