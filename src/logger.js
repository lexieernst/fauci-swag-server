const fs = require('fs')
//file system library
const logFileName = 'logger.txt'

module.exports.success = function(textToWrite) {
  const date = new Date().toDateString()
  try { 
    fs.appendFileSync(logFileName, `\n SUCCESS!!! ${textToWrite}\t${date}`);
    return true
  } catch(err) {
   console.log(' Failed to write to log ')
  }
}

module.exports.error = function(textToWrite) {
  const date = new Date().toDateString()
  try { 
    fs.appendFileSync(logFileName, `\n ERROR!!! ${textToWrite}\t${date}`);
    return true
  } catch(err) {
   console.log(' Failed to write to log ')
  }
}

module.exports.warning = function(textToWrite) {
  const date = new Date().toDateString()
  try { 
    fs.appendFileSync(logFileName, `\n WARNIN!!! ${textToWrite}\t${date}`);
    return true
  } catch(err) {
   console.log(' Failed to write to log ')
  }
}