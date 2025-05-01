import "./styles.css";
import LinkedList from "./linked-list.js"

// creat a  class with set(key, value), get(key), has(key), remove(key) ...

class HashMap {
    constructor(loadFactor=0.75, capacity=16) {
    this.loadFactor=loadFactor;
    this.capacity=capacity;
    this.buckets=new Array(capacity).fill(null);
    this.size=0;
    }

    errorBucket(index) {
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }
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

// to create an index within my hashmap I need remainder of the hashkey from capacity

      const index= this.hash(key) % this.capacity;
      this.errorBucket(index);

// check if the key already exists. If so write over the value, otherwise create

    if (this.buckets[index]===null){
      const list = new LinkedList();
      this.buckets[index]=list;
      this.buckets[index].append([key, value]);
      this.size++;
    } else {
      let keyAlreadyExist = false
      for (let i=0; i<this.buckets[index].size();i++) {
        if (this.buckets[index].at(i).value[0]===key) {
          this.buckets[index].at(i).value[1] = value;
          keyAlreadyExist=true
        }
      }
      if (keyAlreadyExist===false) {
      this.buckets[index].append([key, value]);
      this.size++;
      }
      }
    }

/*    } else if (this.buckets[index].contains(key)) {
      console.log(this.buckets[index].find(key));
    } else {
      this.buckets[index].append([key, value]);
      this.size++;
    }*/

    get (key) {
      const index=this.hash(key) % this.capacity;
      this.errorBucket(index);
      let result=null;
      this.buckets.forEach((el)=>{
      if (el===this.buckets[index]) {
          result = this.buckets[index][0][1];
        }   
      });
      return result;
    }

    has (key) {
      const index=this.hash(key) % this.capacity;
      this.errorBucket(index);
      let result=false;
      this.buckets.forEach((el)=>{
      if (el===this.buckets[index]) {
          result = true;
        }                  
      });
      return result;
    }

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

console.log(test)