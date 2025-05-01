import "./styles.css";

// creat a  class with set(key, value), get(key), has(key), remove(key) ...

class HashMap {
    constructor(loadFactor=0.75, capacity=16) {
    this.loadFactor=loadFactor;
    this.capacity=capacity;
    this.array=new Array(capacity);
    this.size=0;
    }

    hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode;
    } 

    set(key, value) {

      const index=this.hash(key)
      console.log(index)
      console.log(value)
      if (!this.array[index]){
      this.array[index]=[]
      this.array[index].push([key, value])
      this.size++
      console.log(this.array)
    } else {
      this.array[index][0][1]=value;

    }}
}

let test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.has("appl");

console.log(test)