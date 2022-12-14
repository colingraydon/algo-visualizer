window.onload = () => {

    const container = document.querySelector(".data-container");
  
    function generatebars(num = 20) {
    
        //for loop to generate 20 bars
        for (let i = 0; i < num; i += 1) {
      
            // generates random values from 15 - 100
            const value = Math.floor(Math.random() * 85) + 15; 
            
            // makes div element
            const bar = document.createElement("div");
        
            // adds bar class to div
            bar.classList.add("bar");
        
            // sets hight based on value
            bar.style.height = `${value * 3}px`;
        
            // transforms bar on x axis
            bar.style.transform = `translateX(${i * 30}px)`;
            
            // makes a label
            const barLabel = document.createElement("label");
        
            // adds bar_id to label
            barLabel.classList.add("bar_id");
        
            // sets the value of the height to inner html
            barLabel.innerHTML = value;
            
            // adds label to div
            bar.appendChild(barLabel);
        
            // adds div to container
            container.appendChild(bar);
        }
    }
    
    //generates the bars when page is loaded
    generatebars();
}
  
  
//sets the container of the bars
const container = document.querySelector(".data-container");

//same function as earlier, but will be used when new array button is clicked, not on initial page load
function generatebars(num = 20) {

    for (let i = 0; i < num; i += 1) {

        const value = Math.floor(Math.random() * 85) + 15; 
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}


async function SelectionSort(delay = 100) {

    // uses the css styling for the bars
    let bars = document.querySelectorAll(".bar");

    var min = 0;
    for (var i = 0; i < bars.length; i += 1) { 

        //sets min element to i
        min = i;

        // white color for ith bar
        bars[i].style.backgroundColor = "#EEEEEE";
        for (var j = i + 1; j < bars.length; j += 1) {

            // purple color for j bar
            bars[j].style.backgroundColor = "#6A348F";
                
            // waits for 100 ms
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 100)
            );

            // int value of j bar stored to var1
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);

            //console logs the value, not a ncessary line
            //console.log("val1 is", val1);

            // int value of min bar stored to var2 
            var val2 = parseInt(bars[min].childNodes[0].innerHTML);
                
            // compares val1 & val2
            if (val1 < val2) {
                if (min !== i) {

                // light gray color for min bar
                bars[min].style.backgroundColor = "#393E46";
                }
                min = j;
            } else {

                // light gray color for jth bar
                bars[j].style.backgroundColor = "#393E46";
            }
        }

        // swaps the min bar with the ith bar
        var temp1 = bars[min].style.height;
        var temp2 = bars[min].childNodes[0].innerText;
        bars[min].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        
        // waits for 200 ms
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 200)
        );

        // purple color for min bar
        bars[min].style.backgroundColor = "#6A348F";

        // teal color for ith bar, now that it has been sorted
        bars[i].style.backgroundColor = "#00ADB5";
    }

    //turns the buttons back on now that the sort has concluded
    enableButtons();
}

async function MergeSort(delay = 100) {

    let bars = document.querySelectorAll(".bar")
    var arr = []
    var itmd = []
    var visited = []

    l_index = 9
    r_index = 10

    for (var i = 0; i < bars.length; i += 1) {
        itmd.push(0)
        visited.push(0)
    }
}

function merge(arr, l, m, r) {
    
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

async function BubbleSort(delay = 100) {

    let bars = document.querySelectorAll(".bar")
    var i,j
    for (i = 0; i < (bars.length -1); i ++) {

        // white color for ith bar
        bars[bars.length - 1 - i].style.backgroundColor = "#EEEEEE";
        for (j = 0; j < (bars.length - i -1); j ++) {

            //purple color for j bar
            if (j != i) {
                bars[j].style.backgroundColor = "#6A348F";
            }

            // waits for 100 ms
            await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 100)
            );

            var val1 = parseInt(bars[j].childNodes[0].innerHTML)
            var val2 = parseInt(bars[j+1].childNodes[0].innerHTML)

            if (val1 > val2) {

                var temp1 = bars[j].style.height
                var temp2 = bars[j].childNodes[0].innerText
                bars[j].style.height = bars[j+1].style.height
                bars[j+1].style.height = temp1
                bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText
                bars[j+1].childNodes[0].innerText = temp2

            }

            // light gray color for jth bar
            if (j != i) {
                bars[j].style.backgroundColor = "#393E46";
            }
        }

        // waits for 200 ms
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 200)
        );

        // purple color for min bar
        //bars[j].style.backgroundColor = "#6A348F";

        // teal color for ith bar, now that it has been sorted
        // bars[i].style.backgroundColor = "#00ADB5";

        //bars[i].style.backgroundColor = "#393E46"
        // white color for ith bar
        bars[bars.length - 1 - i].style.backgroundColor = "#00ADB5";
    }

    bars[0].style.backgroundColor = "#00ADB5"


    //turns the buttons back on now that the sort has concluded
    enableButtons();
}

async function QuickSort(delay = 100) {

    let bars = document.querySelectorAll(".bar");
}

async function InsertionSort(delay = 100) {

    let bars = document.querySelectorAll(".bar");

    let i, j, k
    for (i = 1; i < bars.length; i ++) {
        // white color for ith bar
        bars[i].style.backgroundColor = "#EEEEEE";
        k = parseInt(bars[i].childNodes[0].innerHTML)
        k_height = bars[i].style.height
        //console.log(k, "=k")
        j = i - 1

        while (j >= 0 && (bars[j].childNodes[0].innerHTML > k)) {
            
            bars[j].style.backgroundColor = "#6A348F"
            temp1 = bars[j].childNodes[0].innerText
            temp2 = bars[j].style.height
            bars[j+1].childNodes[0].innerText = temp1
            bars[j+1].style.height = temp2
            j = j-1

            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 200)
            );

            bars[j+1].style.backgroundColor =  "#393E46"

        }


        for(let r = 0; r< (j+1); r++) {
            bars[r].style.backgroundColor = "#00ADB5";           
        }

        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 600)
        );
        
        bars[j+1].childNodes[0].innerHTML = k
        bars[j+1].style.height = k_height

        // light gray color for jth bar
        bars[i].style.backgroundColor = "#393E46";
    }

    for(let l = 0; l< bars.length; l++) {
        bars[l].style.backgroundColor = "#00ADB5";           
    }
    enableButtons()
}

//turns the buttons back on
function enableButtons()
{
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#00ADB5";

    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#00ADB5";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#00ADB5";  

    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "#00ADB5";

    document.getElementById("Button5").disabled = false;
    document.getElementById("Button5").style.backgroundColor = "#00ADB5";

    document.getElementById("Button6").disabled = false;
    document.getElementById("Button6").style.backgroundColor = "#00ADB5";  
}

// function to generate new random array 
function generate()
{
    window.location.reload();
    generatebars();
}

//  function to disable the button
function disable()
{
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#393E46";

    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#393E46"; 

    document.getElementById("Button3").disabled = true;
    document.getElementById("Button3").style.backgroundColor = "#393E46"; 

    document.getElementById("Button4").disabled = true;
    document.getElementById("Button4").style.backgroundColor = "#393E46";

    document.getElementById("Button5").disabled = true;
    document.getElementById("Button5").style.backgroundColor = "#393E46"; 

    document.getElementById("Button6").disabled = true;
    document.getElementById("Button6").style.backgroundColor = "#393E46"; 
}