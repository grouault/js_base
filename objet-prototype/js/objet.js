/**
 * THIS ans Execution Context.
 */
// this remains at whatever it was ever it was set to when entering the execution context
// this : in browser : window
// node : global
function f1() {
    return this;
}
console.log('f1 = ', f1());
console.log('this', this);
console.log('f1 = ', f1() === global);

// fonction : use strict
function f2() {
    'use strict'
    return this;
}
console.log('f2 = ', f2());

// Context : Call or Apply
// Object can be passed as the first argument to call and this will be bound to it.
var obj = {a: 'Custom'};
a = 'Global'; // mis dans context global
this.a = 'Global 2';
function whatsThis(arg) {
    return this.a;
}
console.log('whatsThis without Context = ', whatsThis()); // Global
console.log('whatThis with call = ', whatsThis.call(obj)); // node : Custom
console.log('whatThis with apply = ', whatsThis.apply(obj)); // node : Custom
console.log('this.a = ', this.a); // node : Global 2
function whatsThat(arg){
    return this;
}
console.log('whatThat with call = ', typeof (whatsThat.call(obj)) === 'object');