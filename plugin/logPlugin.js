const babel = require('@babel/core');

let counter = 0;

function plugin() {
  return {
    visitor: {
      Program(path) {
        const mapDeclaration = babel.template.statement(`let functionCalls = new Map()`)();
        path.node.body.unshift(mapDeclaration);
      },
      FunctionDeclaration(path) {
        const logId = counter++;
        path.node.body.body.unshift(mapSetStatement(logId), logStatement(logId));
      },
      FunctionExpression(path) {
        const logId = counter++;
        path.node.body.body.unshift(mapSetStatement(logId), logStatement(logId));
      },
    }
  }
}

function mapSetStatement(logId) {
  return babel.template.statement(`functionCalls.set(${logId}, (functionCalls.get(${logId}) || 0) + 1)`)();
}

function logStatement(logId) {
  return babel.template.statement(`console.log("method:"+${logId})`)();
}



module.exports = plugin;
