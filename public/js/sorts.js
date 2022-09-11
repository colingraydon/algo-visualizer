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

async function MergeSort(delay = 100) {}

async function BubbleSort(delay = 100) {}

async function QuickSort(delay = 100) {}

async function StrandSort(delay = 100) {}

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