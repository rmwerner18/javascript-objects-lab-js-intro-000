var updateObjectWithKeyAndValue = (object, key, value) => {return Object.assign({}, object, { [key]: value})}
var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {object[key] = value; return object}
var deleteFromObjectByKey = (object, key) => {Object.assign({}, object); delete deleteFromObjectByKey.key; return object}
var destructivelyDeleteFromObjectByKey = (object, key) => {delete object.key; return object}
