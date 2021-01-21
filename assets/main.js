const calcSum = function() {
    let result = 0;
    
    return function(param){

        return result = result + param;
    };
};
const calc = calcSum();
console.log(calc(3))
console.log(calc(7))
console.log(calc(5))
console.log(calc(10))

const createCounter = function(start = 0, step = 1) {
    let counter = start;
   
        return function(reset) { 
            if (reset !== undefined) {
                counter = start;
            }

            return counter = counter + step;
        };
    
};

const fbLikes = createCounter();
const instLikes = createCounter();

console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes(0));
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('inst: ',instLikes());
console.log('inst: ',instLikes());