// import { openDB } from 'idb';
// import { openDB } from 'idb/with-async-ittr.js';

// const dbPromise = openDB('keyval-store', 1, {
//   upgrade(db) {
//     db.createObjectStore('keyval');
//   },
// });
// const idbKeyval = {
//   async get(key) {
//     return (await dbPromise).get('keyval', key);
//   },
//   async set(key, val) {
//     return (await dbPromise).put('keyval', val, key);
//   },
//   async delete(key) {
//     return (await dbPromise).delete('keyval', key);
//   },
//   async clear() {
//     return (await dbPromise).clear('keyval');
//   },
//   async keys() {
//     return (await dbPromise).getAllKeys('keyval');
//   },
// };
// export default idbKeyval;



  var db;
//判断浏览器是否支持
// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    export const openDB=(dbName,tableName)=>{
      return new Promise(function (resolve, reject) {
        var request = window.indexedDB.open(dbName, 1);
          request.onerror = function (event) {
            // console.log();
            reject('数据库打开报错');
          };
          //如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
          request.onupgradeneeded   = function(event){
              db = event.target.result;
              var objectStore;
              //判断表是否已经存在
              if (!db.objectStoreNames.contains(tableName)) {
                  objectStore = db.createObjectStore(tableName,  { keyPath: 'id' });
                  //创建索引
                  objectStore.createIndex('name', 'name', { unique: false });
                  resolve('数据库创建成功！')
              }
          };
          request.onsuccess = function (event) {
            db = request.result;
            resolve('数据库打开成功！')
          };  
        });
    };
// 添加数据
    export  const  addDB= (tableName,params)=> {
      return new Promise(function (resolve, reject) {
        var transaction = db.transaction([tableName],"readwrite");
        var objectStore = transaction.objectStore(tableName);
        objectStore.add(params)
        transaction.oncomplete = function(event) {
          resolve("数据添加成功");
        };
        transaction.onerror = function(event) {
          console.log(event)
          reject('数据添加失败');
        }; 
      })
    }
    // 修改数据(未找到时会新增一条)
    export function updateDB(tableName,params) {
      return new Promise(function (resolve, reject) {
        var request = db.transaction([tableName], 'readwrite')
          .objectStore(tableName)
          .put(params);
      
        request.onsuccess = function (event) {
          resolve('数据更新成功')
        };
      
        request.onerror = function (event) {
          console.log(event)
          reject('数据修改失败！')
        }
      })
		}

    //删除数据
    export function removeDB(tableName,id) {
      return new Promise(function (resolve, reject) {
        var request = db.transaction([tableName], 'readwrite')
          .objectStore(tableName)
          .delete(id);
        request.onsuccess = function (event) {
          resolve('数据删除成功！')
        };
        request.onerror = function (event) {
          console.log(event)
          reject('数据删除失败！')
        }
      })
		}

    // 获取所有数据
    export function getAllDB(tableName){
      return new Promise(function (resolve, reject) {
        var request = db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .getAll()
        request.onsuccess = function (event) {
          const result=event.target.result
          
          resolve(result)
        };
        request.onerror = function (event) {
          console.log(event)
          reject('表中全部数据获取失败！')
        }
      })
    }
    // 获取某行
    export function getIdDB(tableName,id){
      return new Promise(function (resolve, reject) {
        var request = db.transaction([tableName], 'readonly')
        .objectStore(tableName)
        .get(id)
        request.onsuccess = function (event) {
          const result=event.target.result
          resolve(result)
        };
        request.onerror = function (event) {
          console.log(event)
          reject( `id为${id}的数据获取失败！`)
        }
      })
    }