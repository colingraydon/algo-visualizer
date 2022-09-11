

const container = document.querySelector(".tree-container");
console.log("opened script file")

document.addEventListener('DOMContentLoaded', function randomizeInput(num = 10) {

    console.log("entered event listener")
    const  arr = []
    for (let i = 0; i < num; i += 1) {

        console.log("entered for loop")
        var value = Math.floor(Math.random() * 100)
        
        if (arr.includes(value)) {
            console.log("entered include block")
            while (arr.includes(value)) {
                value = Math.floor(Math.random() * 100)
            }
        }
        arr.push(value)


        var myDiv = document.getElementById("tree-values")
        var strong = document.createElement("a")
        myDiv.classList.add("tree-values")
        strong.classList.add("tree-values")
        strong.innerHTML = value
        strong.textContent = value + ' '.repeat(5)
        myDiv.appendChild(strong)
        

    }
    



    let vals = document.querySelectorAll(".tree-values")
    console.log("vals.length is" + vals.length)
    for (var i = 1; i < vals.length; i += 1) {

        console.log("vals[i] is" + vals[i].innerHTML)
        //console.log("tempval is" + tempVal)
    }

});

function randomizeInput(num = 10) {

    console.log("entered function")
    var arr = []
    for (let i = 0; i < num; i += 1) {

        console.log("entered for loop")
        var value = Math.floor(Math.random() * 100)
        
        if (arr.includes(value)) {
            console.log("entered include block")
            while (arr.includes(value)) {
                value = Math.floor(Math.random() * 100)
            }
        }
        arr.push(value)


        var myDiv = document.getElementById("tree-values")
        var strong = document.createElement("a")
        myDiv.classList.add("tree-values")
        strong.classList.add("tree-values")
        strong.innerHTML = value
        strong.textContent = value + ' '.repeat(5)
        myDiv.appendChild(strong)
        

    }
    



    let vals = document.querySelectorAll(".tree-values")
    console.log("vals.length is" + vals.length)
    for (var i = 1; i < vals.length; i += 1) {

        console.log("vals[i] is" + vals[i].innerHTML)
        //console.log("tempval is" + tempVal)
    }

}

    
function testDivFunction() {

    let vals = document.querySelectorAll(".tree-values")
    for (var i = 0; i < vals.length; i += 1) {

        tempVal = parseInt(vals[i].childNodes[0].innerHTML)
        console.log("tempval is" + tempVal)
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


