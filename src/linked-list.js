import "./styles.css";

// class for each node in the list

class node {
    value=null;
    nextNode=null;

    constructor (value, nextNode) {
        this.value=value,
        this.nextNode=nextNode
    }
}

// class for the list builder, with functions append, prepend, size, at(index), pop, contains(value), find(value), toString

class LinkedList {
    
  constructor () {
    this.head=null;
    this.tail=null;
    this.length=0;
  }

    append(data) {
        const node1 = new node (data);
        if (this.length===0) {
            this.head=node1;
            this.tail=node1;
            this.length++;
        }
        else {
            this.tail.nextNode=node1;
            this.tail=node1;
            this.length++;
        }
    }

    prepend(data) {
        const node1 = new node (data);
        if (this.length===0) {
            this.head=node1;
            this.tail=node1;
            this.length++;
        }
          else {
            node1.nextNode=this.head;
            this.head=node1;
            this.length++;
        }
    }

    size() {
        return this.length
    }

    head() {
        return this.head
    }

    tail() {
        return this.tail
    }

    at(index) {
        let nodeIndex = this.head
        for (let i=0;i<index;i++) {
            nodeIndex=nodeIndex.nextNode
        }
        return nodeIndex
    }

    pop() {
        if (this.length===0) {
            return
        } else if (this.length===1) {
        this.head=null;
        this.tail=null;
        this.length=0;
        } else{
        this.tail=null;
        this.length--;
        let secondToLastNode = this.head
        for (let i=0;i<this.length;i++) {
        secondToLastNode=secondToLastNode.nextNode
        }     
        this.tail=secondToLastNode;
        this.tail.nextNode=null;
        }
    }

    contains(searchedValue) {
        let currentIndex = this.head;
        let resultValue=false;
        for (let i=0;i<this.length;i++) {
        if(currentIndex.value===searchedValue) {
            resultValue=true;
        }
        currentIndex=currentIndex.nextNode;
        }
        return resultValue
    }

    find(searchedValue){
        let currentIndex = this.head;
        let resultValue=null;
        for (let i=0;i<this.length;i++) {
        if(currentIndex.value===searchedValue) {
            resultValue=i;
        }
        currentIndex=currentIndex.nextNode;
        }
        return resultValue 
    }

    toString(){
        //( value ) -> ( value ) -> ( value ) -> null
        let currentIndex = this.head;
        let resultingStatement =""
        if (this.head===null) {
            return "null"
        } else {
        for (let i=0;i<this.length-1;i++) {
        resultingStatement+= (`( ${currentIndex.value} ) -> `);
            

        currentIndex=currentIndex.nextNode;
        }
        resultingStatement+="null";
        return resultingStatement  
    }
}
}

export default LinkedList;