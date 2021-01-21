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

const createCounter = function(start, step) {
    let counter = start;
   
        return function(reset) { 
            if (reset === 'resetCounter') {
                counter = start;
            }

            return counter = counter + step;
        };
    
};

const fbLikes = createCounter(0, 1);
const instLikes = createCounter(0, 2);

console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes('resetCounter'));
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('fb: ',fbLikes());
console.log('inst: ',instLikes());
console.log('inst: ',instLikes());
console.log('inst: ',instLikes());
console.log('inst: ',instLikes());
console.log('inst: ',instLikes());