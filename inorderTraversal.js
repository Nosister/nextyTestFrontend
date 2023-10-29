function* inorderTraversal(arr) {
    for (let item of arr) {
        if (Array.isArray(item)) {
            yield* inorderTraversal(item);
        } else {
            yield item;
        }
    }
}


let arr1 = [[[6]],[1,3],[]];
let generator1 = inorderTraversal(arr1);
console.log(generator1.next().value); 
console.log(generator1.next().value);
console.log(generator1.next().value); 
console.log(generator1.next().done);   


let arr2 = [];
let generator2 = inorderTraversal(arr2);
console.log(generator2.next().done);   
