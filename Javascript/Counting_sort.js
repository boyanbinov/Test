
var container = document.getElementById("array");
var elements = document.getElementsByClassName("block");

function start() {
	generatearray();
	generate_freq();
	aa();
}
function generatearray() {
	Clear("array");
	var biggerScreenRange = document.getElementById("range").value;
	var smallScreenRange = document.getElementById("range").value;

	//var element = document.getElementById('array');
	// var positionInfo = window.innerWidth();
	// var height = positionInfo.height;
	let width = window.innerWidth;
	console.log(width);

	// for mobile
	if (width <= 600) {
		for (var i = 0; i < smallScreenRange; i++) {
			// Return a value from 1 to 100 (both inclusive)
			value = Math.ceil(Math.random() * 100);

			// Creating element div
			var array_ele = document.createElement("div");

			// Adding class 'block' to div
			array_ele.classList.add("block");

			// Adding style to div
			array_ele.style.height = `${value * 3}px`;
			array_ele.style.transform = `translate(${i * 17}px)`;
			container.style.width = `${smallScreenRange * 17}px`; // tui kato edin bar e pochti 30px; pravim go za da izchislim width na class array (css)
			// array_ele.style.boxShadow = "inset 0 0 0.7em 0 var(--clr-neon), 0 0 0.7em 0 var(--clr-neon)"

			// Creating label element for displaying
			// size of particular block
			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_id");

			// var side_top = document.createElement("div");
			// side_top.classList.add("side top");
			array_ele_label.innerText = value;

			// Appending created elements to index.html
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
			colorMode();
		}
	}
	//pc
	else {
		for (var i = 0; i < biggerScreenRange; i++) {
			// Return a value from 1 to 100 (both inclusive)
			var value = Math.ceil(Math.random() * 100);

			// Creating element div
			var array_ele = document.createElement("div");

			// Adding class 'block' to div
			array_ele.classList.add("block");
			// array_ele.classList.add($`block{i}`);

			// Adding style to div
			array_ele.style.height = `${value * 3}px`;
			// array_ele.style.width = `${(10 + 60 - biggerScreenRange) / 2}px`;
			array_ele.style.transform = `translate(${i * 30}px)`;
			container.style.width = `${biggerScreenRange * 30}px`; // tui kato edin bar e pochti 30px; pravim go za da izchislim width na class array (css)

			// array_ele.style.boxShadow = "inset 0 0 0.7em 0 var(--clr-neon), 0 0 0.7em 0 var(--clr-neon)"
			// Creating label element for displaying
			// size of particular block
			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_id");
			array_ele_label.innerText = value;

			// Appending created elements to index.html
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
			colorMode();
		}
	}
}

// Function to generate the frequency array
var count_container = document.getElementById("count");
function generate_freq() {
	// Clear("array");
	var biggerScreenRange = document.getElementById("range").value;
    for (var i = 0; i < biggerScreenRange; i++) {
    	// Creating element div
        var array_ele2 = document.createElement("div");
    	// Adding class 'block2' to div
    	array_ele2.classList.add("block2");
    	// Adding style to div
		array_ele2.style.height = `${20}px`;
		array_ele2.style.transform = `translate(${i * 30}px)`;
		count_container.style.width = `${biggerScreenRange * 30}px`;

		// index of freq array
		var array_ele_idx = document.createElement("label");
		array_ele_idx.classList.add("block_id2");
		array_ele_idx.innerText = i + 1;
	
		//giving initial freq to all blocks as 0
		var array_ele_label2 = document.createElement("label");
		array_ele_label2.classList.add("block_id3");
		array_ele_label2.innerText = 0;
	
		// Appending created elements to index.html
		array_ele2.appendChild(array_ele_label2);
		array_ele2.appendChild(array_ele_idx);
		count_container.appendChild(array_ele2);
    }
}
function Clear(elementID) {
	document.getElementById(elementID).innerHTML = "";
}

async function CountingSort(delay = 250) {
	var blocks = document.querySelectorAll(".block");
	
	// To store frequency of every block
	for (var i = 0; i < blocks.length; i += 1) {
	  //To highlight the current traversed block
	  blocks[i].style.backgroundColor = "#FF4949";
	
	  //Extracting the value of current block
	  var value = Number(blocks[i].childNodes[0].innerHTML);
	
	  var freq_array = document.getElementsByClassName("block_id3");
	
	  freq_array[value - 1].innerText =1 ;
	
	  // To wait for .1 sec
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, delay)
	  );
	
	  //Changing to previous color
	  blocks[i].style.backgroundColor = "#6b5b95";
	}
	
	//Sorting by using frequency array
	var idx = 0;
	for (var i = 0; i < blocks.length; i += 1) {
	  var freq = document.getElementsByClassName("block_id3");
	
	  var temp = Number(freq[i].innerText);
	
	  var freq_block = document.getElementsByClassName("block2");
	
	  //changing color of freq block
	  freq_block[i].style.backgroundColor = "#FF4949";
	
	  // To wait for .1 sec
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, 2 * delay)
	  );
	
	  if (temp == 0) {
		//changing color of freq block to previous one
		freq_block[i].style.backgroundColor = "darkgray";
		continue;
	  }
	
	  var block_label = document.getElementsByClassName("block_id");
	
	  //sorting the block array
	  for (var j = 0; j < temp; j++) {
		blocks[idx].style.height = `${(i + 1) * 13}px`;
		block_label[idx].innerText = i + 1;
		idx++;
	  }
	
	  //changing color of freq block to previous one
	  freq_block[i].style.backgroundColor = "darkgray";
	
	  // To wait for .1 sec
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, 2 * delay)
	  );
	}
  }