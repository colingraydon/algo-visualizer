
//sets the container for the nodes
const container = document.querySelector(".tree-container");

//randomizes the 10 vals used to construct the string, called on page load
function randomizeInput(num = 10) {
    
    var arr = []
    for (let i = 0; i < num; i += 1) {

        var value = Math.floor(Math.random() * 100)
        
        if (arr.includes(value)) {
            while (arr.includes(value)) {
                value = Math.floor(Math.random() * 100)
            }
        }
        arr.push(value)

        //gets all elements from tree values. creates an element, adds it to the calss list, sets values, appends it
        var myDiv = document.getElementById("tree-values")
        var strong = document.createElement("a")
        myDiv.classList.add("tree-values")
        strong.classList.add("tree-values")
        strong.innerHTML = value
        strong.textContent = value + ' '.repeat(5)
        myDiv.appendChild(strong)
    }
}

//used to get the tree vals and then randomize them again
function refreshInput(num = 10) {


    //creates an arr to make sure that no values are repeated
    var arr = []
    for (let i = 0; i < num; i += 1) {
        
        var value = Math.floor(Math.random() * 100)
        
        if (arr.includes(value)) {
            while (arr.includes(value)) {
                value = Math.floor(Math.random() * 100)
            }
        }
        arr.push(value)
    }
    

    //uses arr values to modify the innerhtlm and text content of the elements
    let vals = document.querySelectorAll(".tree-values")

    for (let i = 0; i < arr.length; i += 1) {

        tempValue = arr[i]
        vals[i+1].innerHTML = tempValue
        vals[i+1].textContent = tempValue + ' '
    }

}
    
//sets constants for accessing child value in the children array, to keep it easy to remember
var l = 0
var r = 1

class Node {

    //constructs a node, passes in the value
    constructor(value){
        
        this.value = value
        this.childen = []
        this.parent = null

    }

    getLeft() {
        return this.children[l]
    }

    getRight() {
        return this.children[r]
    }

    setLeft(val) {
        val.parent = this
        this.children[l] = val
    }

    setRight(val) {
        val.parent = this
        this.children[r] = val
    }


}


