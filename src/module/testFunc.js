import logger from './logger';
import * as constaint from './constaint';
function testFunc() {

  const sum = (a, b) => a+b;
  console.log(sum(1,3))

  const object = (a, b) => ({a:a, b:b})
  console.log(object(3,4))

  const course = {
    name:"ngoclh",
    getName: function(){
      return this.name;
    }
  }
  console.log(course.getName());
  const course1 = {
    name:"ngoclh",
    getName: function() {
      return this;//context
    }
  }
  console.log(course1.getName());

  const contructor = function(name, age) {
    this.name = name;
    this.age = age;
  }
  const jsCon = new contructor("ngoc", 23);
  console.log(jsCon)

  logger("warning message...", constaint.TYPE_WARN)
  logger("error message...", constaint.TYPE_ERROR)
  logger("log message...", constaint.TYPE_LOG)

  var array = ['Ngoc', 'Tu', 'Dung'];
  var [a,,c] = array;
  var [a1, ...rest] = array;
  console.log(a,c);
  console.log(a1,rest);

}
export default testFunc;