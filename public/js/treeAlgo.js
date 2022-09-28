function loaded() {
    
    const canvas = document.getElementById("canvas");
    const c = canvas.getContext('2d');
    
    c.fillRect(100, 100, 100, 100)
}

class Node{

    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


function inOrderWrapper() {

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
            }
            else if (val < node.value) {

                if (!node.left) {
                    node.left = newNode
                }

                else {
                    searchTree(node.left)
                }
            }
            else if (val > node.value) {

                if (!node.right) {
                    node.right = newNode
                }
                else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
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
        // for (i = 0; i < result.length; i ++) {
        //     console.log()
        // }
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
        //const node = document.createElement("div")
        bst.addNode(arr[i])
    }    

    return bst
}
    
function inOrderWrapper() {
    
    let bst = generateTree()
    let tempRoot = bst.root
    console.log("root is", tempRoot)
    let result = inOrder(tempRoot)
    return result
}

//checks left, then root, then right
function inOrder(node) {

    let result = []
    
    console.log("called inOrder")
    console.log("left node is", node.left)
    if (node.left) inOrder(node.left)
    result.push(node.value)
    console.log(node.value, "= node.value inOrder")
    if (node.right) inOrder(node.right) 
    return result   
}

function preOrderWrapper() {
    
    let bst = generateTree()
    let tempRoot = bst.root
    console.log("root is", tempRoot)
    let result = preOrder(tempRoot)
    return result
}

//checks root, then left, then right
function preOrder(node) {

    let result = []
    
    console.log("called preOrder")
    console.log("left node is", node.left)
    result.push(node.value)
    if (node.left) preOrder(node.left)
    console.log(node.value, "= node.value preOrder")
    if (node.right) preOrder(node.right) 
    return result   
}


function postOrderWrapper() {
    
    let bst = generateTree()
    let tempRoot = bst.root
    console.log("root is", tempRoot)
    let result = postOrder(tempRoot)
    return result
}

//checks left, then right, then root
function postOrder(node) {

    let result = []
    
    console.log("called postOrder")
    console.log("left node is", node.left)
    if (node.left) preOrder(node.left)
    if (node.right) preOrder(node.right) 
    result.push(node.value)
    return result   
}


