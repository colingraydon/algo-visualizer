function loaded() {
    
    const canvas = document.getElementById("canvas");
    const c = canvas.getContext('2d');
    
    c.fillRect(100, 100, 100, 100)
}

class Node{

    constructor(value, x, y) {
        this.value = value
        this.left = null
        this.right = null
        this.x = x
        this.y = y
    }
}

class Tree{

    constructor() {
        this.root = null
    }

    addNode(val) {
        
        let newNode = new Node(val)

        const searchTree = node => {

            if (this.root === null) {
                this.root = newNode
                this.root.x = width / 2
                this.root.y = 20
            }
            else if (val < node.value) {

                if (!node.left) {
                    node.left = newNode
                    this.left.x = this.x - 50
                    this.left.y = this.y + 20
                }

                else {
                    searchTree(node.left)
                }
            }
            else if (val > node.value) {

                if (!node.right) {
                    node.right = newNode
                    this.right.x = this.x + 50
                    this.rigth.y = this.y + 20
                }
                else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
    }

    getSize() {
        return this.count
    }
    //checks left, then root, then right
    inOrder() {
        let result = []
        const traverse = node => {
            if (node.left) traverse (node.left)
            result.push(node.value)
            console.log(node.value, "= node.value inOrder")
            if (node.right) traverse (node.right)
        }
        return result
    }
    //checks root, then left, then right
    preOrder() {
        let result = []
        const traverse = node => {
            result.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse (node.right)
        }
        return result
    }

    //checks left, then right, then root
    postOrder() {
        let result = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse (node.right)
            result.push(node.value)
        }
        return result
    }

    // 
}


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



function generateTree() {

    let val = document.querySelectorAll(".tree-values")
    arr = []
    for (let i = 1; i < val.length; i += 1) {

        arr.push(val[i].innerHTML)
    }

    const bst = new Tree()

    for (let i = 0; i < arr.length; i += 1) {
        const node = document.createElement("div")
        bst.addNode(arr[i])
    }    
}
    
