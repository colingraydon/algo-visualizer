window.onload = () => {

    const container = document.querySelector(".data-container");
  
    function generatebars(num = 20) {
      
      //for loop to generate 20 bars
      for (let i = 0; i < num; i += 1) {
      
        // To generate random values from 15 - 100
        const value = Math.floor(Math.random() * 85) + 15; 
          
        // To create element "div"
        const bar = document.createElement("div");
      
        // To add class "bar" to "div"
        bar.classList.add("bar");
      
        // Provide height to the bar
        bar.style.height = `${value * 3}px`;
      
        // Translate the bar towards positive X axis 
        bar.style.transform = `translateX(${i * 30}px)`;
          
        // To create element "label"
        const barLabel = document.createElement("label");
      
        // To add class "bar_id" to "label"
        barLabel.classList.add("bar_id");
      
        // Assign value to "label"
        barLabel.innerHTML = value;
        
        // Append "Label" to "div"
        bar.appendChild(barLabel);
      
        // Append "div" to "data-container div"
        container.appendChild(bar);
      }
    }
  
    generatebars();
}
  
  
const container = document.querySelector(".data-container");

function generatebars(num = 20) {

    //for loop to generate 20 bars
    for (let i = 0; i < num; i += 1) {

        // numbers are generated for bars 15 - 100
        const value = Math.floor(Math.random() * 85) + 15; 
        
        // To create element "div"
        const bar = document.createElement("div");

        // To add class "bar" to "div"
        bar.classList.add("bar");

        // Provide height to the bar
        bar.style.height = `${value * 3}px`;

        // Translate the bar towards positive X axis 
        bar.style.transform = `translateX(${i * 30}px)`;
        
        // To create element "label"
        const barLabel = document.createElement("label");

        // To add class "bar_id" to "label"
        barLabel.classList.add("bar_id");

        // Assign value to "label"
        barLabel.innerHTML = value;

        // Append "Label" to "div"
        bar.appendChild(barLabel);

        // Append "div" to "data-container div"
        container.appendChild(bar);
    }
}


async function SelectionSort(delay = 100) {

    let bars = document.querySelectorAll(".bar");

    var min = 0;
    for (var i = 0; i < bars.length; i += 1) {

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
            console.log("val1 is", val1);
            // int value of min bar stored to var2 
            var val2 = parseInt(bars[min].childNodes[0].innerHTML);
                
            // Compare val1 & val2
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

//turns the buttons back on
function enableButtons()
{
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#00ADB5";

    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#00ADB5";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#00ADB5";  
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
}