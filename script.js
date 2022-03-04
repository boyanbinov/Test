var container = document.getElementById("array");
var elements = document.getElementsByClassName("block");
console.log(elements);
// function radioBox() {
// 	// var elements = document.getElementById("block");
// 	// if(document.getElementById('normal').checked == true) {
// 	// 	for (var i = 0; i < elements.length; i++) {
// 	// 		elements.style["backgroundColor"] = "blue";
// 	// 	  }
// 	// } else if(document.getElementById('neon').checked == true) {
// 	// 	document.getElementById("block").style["backgroundColor"] = "white";
// 	// }
// 	document.getElementsByClassName('block').style.backgroundColor = "blue";
// }

// function changeDivs() {
// 	// document.getElementById("btnClick").onclick = function() {
// 	// 	if(document.getElementById("1").style.display != "none"){
// 	// 		document.getElementById("1").style.display = "none"
// 	// 		document.getElementById("static").style.display = "block"
// 	// 	}
// 	// 	else{
// 	// 		document.getElementById("1").style.display = "block"
// 	// 		document.getElementById("static").style.display = "none"
// 	// 	}
// 	// }


// 	// document.getElementById("JSbtnClick").onclick = function(){
// 	// 	document.getElementById("CodeJS").style.display = "block"
// 	// 	document.getElementById("static").style.display = "none"
// 	// }
// 	// document.getElementById("C#btnClick").onclick = function(){
// 	// 	document.getElementById("CodeJS").style.display = "none"
// 	// 	document.getElementById("static").style.display = "block"
// 	// }

// }

function js() {
	var js = document.getElementById("CodeJS")
	if (js.style.display != "none") {
		document.getElementById("CodeJS").style.display = "block"
		// document.getElementById("CodeC#").style.display = "none"
		// document.getElementById("CodePy").style.display = "none"
	}
	else {
		document.getElementById("CodeJS").style.display = "block"
		document.getElementById("CodeC#").style.display = "none"
		document.getElementById("CodePy").style.display = "none"
	}
}

function c() {
	var c = document.getElementById("CodeC#")
	if (c.style.display != "none") {
		document.getElementById("CodeC#").style.display = "block"
		// document.getElementById("CodeJS").style.display = "none"
		// document.getElementById("CodePy").style.display = "none"
	}
	else {
		document.getElementById("CodeJS").style.display = "none"
		document.getElementById("CodeC#").style.display = "block"
		document.getElementById("CodePy").style.display = "none"
	}
}

function python() {
	var py = document.getElementById("CodePy")
	if (py.style.display != "none") {
		document.getElementById("CodePy").style.display = "block"
		// document.getElementById("CodeJS").style.display = "none"
		// document.getElementById("CodeC#").style.display = "none"
	}
	else {
		document.getElementById("CodeJS").style.display = "none"
		document.getElementById("CodeC#").style.display = "none"
		document.getElementById("CodePy").style.display = "block"
	}
}
function colorMode() {
	if (document.getElementById("normal").checked == true) {
		normalMode("block");
	} else {
		neonMode("block");
	}
}
function neonMode(column) {
	var cols = document.getElementsByClassName(column);
	for (i = 0; i < cols.length; i++) {
		cols[i].style.boxShadow =
			"inset 0 0 0.7em 0 var(--clr-neon), 0 0 0.7em 0 var(--clr-neon)";
		cols[i].style.border = "var(--clr-neon) 0.125em solid";
	}
}

function normalMode(column) {
	var cols = document.getElementsByClassName(column);
	for (i = 0; i < cols.length; i++) {
		cols[i].style.boxShadow = "";
		cols[i].style.border = "";
	}
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function start() {
	// generatearraySorted();
	generatearray();
	generate_freq();
	aa();
}

function aa() {
	var block = document.querySelectorAll(".slideInFromLeft");
	//var block1 = document.querySelectorAll(".slideInFromTop");
	for (var c = 0; c < block.length; c++) {
		// block[c].style.transform = `translate(${i * 30}px)`;
		block[c].style.height = `${value * 3}px`;

		// block[c].style.animation = "1s ease-out " + (c * 0.1) + "s 1 slideInFromLeft";
		// block[c].style.animation = "1s ease-out " + (c * 0.1) + "s 1 slideInFromLeft"; //1s ease-out 0s 1 slideInFromLeft
	}
}

// function rangeFunction() {
// 	var x = document.getElementById("range").value; //get current range value
//     document.getElementById("result").innerHTML = x;
// }
function rangeFunction() {
	// generatearraySorted();
	generatearray();
	generate_freq();
}

function sliderSpeed() {
	console.log(document.getElementById("sliderRange").value)
	return document.getElementById("sliderRange").value;
	
}

function generatearraySorted() {
	Clear("array");
	var biggerScreenRange = document.getElementById("range").value;
	var smallScreenRange = document.getElementById("range").value;
	let width = window.innerWidth;
	var arr = [];

	for (var i = 0; i < biggerScreenRange; i++) {
		var val = Number(Math.ceil(Math.random() * 100));
		arr.push(val);
	}
	arr.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < biggerScreenRange; i++) {
		var value = arr[i];

		var array_ele = document.createElement("div");
		array_ele.classList.add("block");
		// array_ele.classList.add($`block{i}`);
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
		
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
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
			//value from 1 to 100
			value = Math.ceil(Math.random() * 100);

			// creating div
			var array_ele = document.createElement("div");

			// adding class 'block' to div
			array_ele.classList.add("block");

			array_ele.style.height = `${value * 3}px`;
			array_ele.style.transform = `translate(${i * 17}px)`;
			container.style.width = `${smallScreenRange * 17}px`; // tui kato edin bar e pochti 30px; pravim go za da izchislim width na class array (css)
			// array_ele.style.boxShadow = "inset 0 0 0.7em 0 var(--clr-neon), 0 0 0.7em 0 var(--clr-neon)"

			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_id");

			// var side_top = document.createElement("div");
			// side_top.classList.add("side top");
			array_ele_label.innerText = value;

			// appending created elements to index.html
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
			// colorMode();
		}
	}
	//pc
	else {
		for (var i = 0; i < biggerScreenRange; i++) {
			var value = Math.ceil(Math.random() * biggerScreenRange);

			var array_ele = document.createElement("div");
			array_ele.classList.add("block");
			// array_ele.classList.add($`block{i}`);
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
			
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
			// colorMode();
		}
	}
}

// generate the frequency array
var count_container = document.getElementById("count");
function generate_freq() {
	Clear("count");
	document.getElementsByClassName("block_id3").innerHTML = "";
	// Clear("block_id3");
	// Clear("array");
	var biggerScreenRange = document.getElementById("range").value;
    for (var i = 0; i < biggerScreenRange; i++) {
        var array_ele2 = document.createElement("div");

    	array_ele2.classList.add("block2");
		array_ele2.style.height = `${20}px`;
		array_ele2.style.transform = `translate(${i * 30}px)`;
		count_container.style.width = `${biggerScreenRange * 30}px`;

		var array_ele_idx = document.createElement("label");
		array_ele_idx.classList.add("block_id2");
		array_ele_idx.innerText = i + 1;
		
		var array_ele_label2 = document.createElement("label");
		array_ele_label2.classList.add("block_id3");
		array_ele_label2.innerText = 0;
		
		array_ele2.appendChild(array_ele_label2);
		array_ele2.appendChild(array_ele_idx);
		count_container.appendChild(array_ele2);
    }
}
function Clear(elementID) {
	document.getElementById(elementID).innerHTML = "";
}


function swap(el1, el2) {
	return new Promise((resolve) => {
		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		//To Check
		window.requestAnimationFrame(function () {
			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, sliderSpeed()); // moje da se promenq skorostta
		});
	});
}

async function BubbleSort(delay = 100) {
	disable_on_start();	
	let blocks = document.querySelectorAll(".block");

	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) => {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						resolve();
					}, sliderSpeed())
				})
			})
			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
			// compare value of two blocks
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}

			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}
		blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
	}
	enable_on_end();
}

async function InsertionSort(delay = 600) {
	disable_on_start();

	let bars = document.querySelectorAll(".block");

	bars[0].style.backgroundColor = " rgb(49, 226, 13)";
	for (var i = 1; i < bars.length; i += 1) {
		var j = i - 1;

		// store the integer value of i-th bar to key
		var key = parseInt(bars[i].childNodes[0].innerHTML);
		var height = bars[i].style.height;
		bars[i].style.backgroundColor = "darkblue";

		await new Promise((resolve) => {
			window.requestAnimationFrame(function () {
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
			})
		})

		while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
			bars[j].style.backgroundColor = "darkblue";

			bars[j + 1].style.height = bars[j].style.height;
			bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

			j = j - 1;
			await new Promise((resolve) => {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						resolve();
					}, sliderSpeed())
				})
			})

			// adds color to the sorted part
			for (var k = i; k >= 0; k--) {
				bars[k].style.backgroundColor = " rgb(49, 226, 13)";
			}
		}

		// placing the selected element to its correct position
		bars[j + 1].style.height = height;
		bars[j + 1].childNodes[0].innerHTML = key;

		await new Promise((resolve) => {
			window.requestAnimationFrame(function () {
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
			})
		})
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
	enable_on_end();
}

async function SelectionSort() {
	disable_on_start();

	let bars = document.querySelectorAll(".block");
	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {
		min_idx = i;
		bars[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < bars.length; j += 1) {
			bars[j].style.backgroundColor = "pink";
			await new Promise((resolve) => {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						resolve();
					}, sliderSpeed())
				})
			})
			var val1 = parseInt(bars[j].childNodes[0].innerHTML);
			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

			if (val1 < val2) {
				if (min_idx !== i) {
					bars[min_idx].style.backgroundColor = "#6b5b95";
				}
				min_idx = j;
			}
			else {
				bars[j].style.backgroundColor = "#6b5b95";
			}
		}

		// to swap
		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;

		await new Promise((resolve) => {
			window.requestAnimationFrame(function () {
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
			})
		});
		bars[min_idx].style.backgroundColor = "#6b5b95";
		bars[i].style.backgroundColor = "#13CE66";
	}
	enable_on_end();
}


async function lometo_partition(l, r, delay = 50) {
	var biggerScreenRange = document.getElementById("range").value;
	var blocks = document.querySelectorAll(".block");

	// value of the pivot element
	let pivot = Number(blocks[r].childNodes[0].innerHTML);
	console.log(pivot)
	var i = l - 1;
	blocks[r].style.backgroundColor = "red";

	for (var j = l; j <= r - 1; j++) {
		blocks[j].style.backgroundColor = "yellow";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, sliderSpeed()));
		var value = Number(blocks[j].childNodes[0].innerHTML);

		// compare value of two blocks
		if (value < pivot) {
			i++;
			var temp1 = blocks[i].style.height;
			var temp2 = blocks[i].childNodes[0].innerText;
			
			blocks[i].style.height = blocks[j].style.height;
			blocks[j].style.height = temp1;
			blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
			blocks[j].childNodes[0].innerText = temp2;
			blocks[i].style.backgroundColor = "orange";
			if (i != j) blocks[j].style.backgroundColor = "pink";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed()));
		} 
		else blocks[j].style.backgroundColor = "pink";
	}
	// swapping the ith with the pivot element
	i++;
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[r].style.height;
	blocks[r].style.height = temp1;
	blocks[i].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
	blocks[r].childNodes[0].innerText = temp2;
	blocks[r].style.backgroundColor = "pink";
	blocks[i].style.backgroundColor = "green";

	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed() * 3)
	);
	// document.getElementsByClassName("range")[0].innerText = "";
	for (var k = 0; k < biggerScreenRange; k++)
		blocks[k].style.backgroundColor = "#6b5b95";
	return i;
}

async function QuickSort(l, r, delay = 100) {
	disable_on_start();
	if (l < r) {
		// index of pivot element after partition
		var pivot_idx = await lometo_partition(l, r);
		console.log(pivot_idx)
		// left partition
		await QuickSort(l, pivot_idx - 1);
		// right partition
		await QuickSort(pivot_idx + 1, r);
	}
	enable_on_end();
}

function q() {
	var biggerScreenRange = document.getElementById("range").value;
	QuickSort(0, biggerScreenRange - 1);
}

async function CountingSort(delay = 250) {
	disable_on_start();
	var blocks = document.querySelectorAll(".block");
	
	// To store frequency of every block
	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#FF4949";

		var value = Number(blocks[i].childNodes[0].innerHTML);
	
		var freq_array = document.getElementsByClassName("block_id3");
		// freq_array[i].style.backgroundColor = "cyan"
		freq_array[value - 1].innerText++ ;
		freq_array[value - 1].style.backgroundColor = "red"
		
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed()));
		freq_array[value - 1].style.backgroundColor = "darkgrey"
		blocks[i].style.backgroundColor = "#6b5b95";
	}
	
	//sorting with freq array
	var idx = 0;
	for (var i = 0; i < blocks.length; i += 1) {
		var freq = document.getElementsByClassName("block_id3");
		var temp = Number(freq[i].innerText);
		var freq_block = document.getElementsByClassName("block2");
	
	    //changing color of freq block
		if (temp == 0) {
			freq[i].style.backgroundColor = "red";
		}
		else{
			freq[i].style.backgroundColor = "cyan";
		}

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, 2 * sliderSpeed())
		);
	
		if (temp == 0) {
			freq_block[i].style.backgroundColor = "darkgray";
			freq[i].style.backgroundColor = "darkgray";
			continue;
		}
		var block_label = document.getElementsByClassName("block_id");
		
		//sorting the block array
		for (var j = 0; j < temp; j++) {
			blocks[idx].style.height = `${(i + 1) * 8}px`;
			block_label[idx].innerText = i + 1;
			blocks[idx].style.backgroundColor = "#13CE66";
			idx++;
		}
		
		freq_block[i].style.backgroundColor = "darkgray";
		freq[i].style.backgroundColor = "darkgray";
		
		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, 2 * sliderSpeed()
		));
	}
	enable_on_end();
}

// async function mergeSort(array, delay=250) {
// 	if (array == null) {
// 		return;
// 	}

// 	if (array.length > 1) {
// 		var blocks = document.querySelectorAll(".block");
// 		var mid = parseInt(array.length / 2);

// 		// Split left part
// 		var left = Array(mid).fill(0);
// 		for (i = 0; i < mid; i++) {
// 			// blocks[left[i]].style.backgroundColor = "blue"
// 			// await new Promise((resolve) =>
// 			// 	setTimeout(() => {
// 			// 		resolve();
// 			// 	}, delay));
// 			// blocks[array[i]].style.backgroundColor = "red"
// 			left[i] = array[i];
// 			blocks[i].childNodes[0].innerHTML = left[i]
// 			blocks[i].style.backgroundColor ="red"
			
// 			// blocks[left[i]].style.backgroundColor = "cyan"
// 		}
// 		// for (let i = 0; i < left.length; i++) {

// 		// }
// 		var right = Array(array.length - mid).fill(0);
// 		for (i = mid; i < array.length; i++) {
// 			// blocks[right[i]].style.backgroundColor = "red"
// 			// await new Promise((resolve) =>
// 			// 	setTimeout(() => {
// 			// 		resolve();
// 			// 	}, delay));
// 			// blocks[array[i]].style.backgroundColor = "red"
// 			right[i - mid] = array[i];
// 			blocks[i].childNodes[0].innerHTML = right[i - mid]
// 			blocks[i].style.backgroundColor ="blue"
// 			// blocks[right[i - mid]].style.backgroundColor = "blue"
// 		}
		
// 		// for (i = mid; i < right.length; i++) {
			
// 		// }
		
// 		await mergeSort(left);
// 		await mergeSort(right);

// 		var i = 0;
// 		var j = 0;
// 		var k = 0;

// 		while (i < left.length && j < right.length) {
// 			if (left[i] < right[j]) {
// 				// blocks[i].style.backgroundColor = "red"
// 				array[k] = left[i];
// 				blocks[k].childNodes[0].innerHTML = array[k];

// 				await new Promise((resolve) =>
// 					setTimeout(() => {
// 						resolve();
// 					}, delay));
// 				blocks[i].style.backgroundColor = "#red";
// 				i++;
				
// 			} else {
// 				// blocks[j].style.backgroundColor = "cyan"
// 				array[k] = right[j];
// 				blocks[k].childNodes[0].innerHTML = array[k];
// 				await new Promise((resolve) =>
// 					setTimeout(() => {
// 						resolve();
// 					}, delay));
// 				j++;
// 			}
// 			k++;
// 		}

// 		while (i < left.length) {
// 			array[k] = left[i];
// 			blocks[k].childNodes[0].innerHTML = array[k];

// 			await new Promise((resolve) =>
// 					setTimeout(() => {
// 						resolve();
// 					}, delay));
// 			i++;
// 			k++;
// 		}
// 		while (j < right.length) {
// 			array[k] = right[j];
// 			blocks[k].childNodes[0].innerHTML = array[k];
// 			await new Promise((resolve) =>
// 					setTimeout(() => {
// 						resolve();
// 					}, delay));
// 			j++;
// 			k++;
// 		}
// 		for (let i = 0; i < mid; i++) {
// 			var value = Number(blocks[i].childNodes[0].innerHTML);
// 			// block_label[idx].innerText = i + 1;
// 			blocks[i].style.height = `${value * 8}px`;
// 			blocks[i].style.backgroundColor = "#13CE66";
			
// 		}
// 		for (let i = mid; i < array.length; i++) {
// 			var value = Number(blocks[i].childNodes[0].innerHTML);
// 			blocks[i].style.height = `${value * 8}px`;
// 			// block_label[idx].innerText = i + 1;
// 			blocks[i].style.backgroundColor = "#13CE66";
// 		}
// 	}
// }

// function m() {
// 	var arr = []
// 	var blocks = document.querySelectorAll(".block");
// 	for (let i = 0; i < blocks.length; i++) {
// 		arr.push(Number(blocks[i].childNodes[0].innerHTML))
		
// 		// for (let j = 0; j < blocks.length; j++) {
// 		// 	const elelement = blocks[j];
// 		// 	// blocks[i].style.backgroundColor = "red"
			
// 		// }
// 	}
// 	mergeSort(arr)
// 	// for (let i = 0; i < arr.length; i++) {
// 	// 	console.log(arr[i]);
		
// 	// 	for (let j = 0; j < blocks.length; j++) {
// 	// 		const element = blocks[j];
			
// 	// 	}
// 	// }
// }


async function mergeSort(array, start, end) {
	//console.log(speed);
	if (start < end) {
		// disable_on_start();
		let childs = document.querySelectorAll(".block");
		let mid = Math.floor((start + end) / 2);
		await mergeSort(array, start, mid);
		await mergeSort(array, mid + 1, end);
		merge(array, start, mid, end);
		//console.log(speed);
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, sliderSpeed()));
		childs[start].style.backgroundColor = "#6b5b95";
		childs[end].style.backgroundColor = "#6b5b95";
	}
	enable_on_end();
}

async function merge(array, start, mid, end) {
	disable_on_start()
	let p = start;
	let q = mid + 1;
	let arr = [];
	let childs = document.querySelectorAll(".block");
	childs[start].style.backgroundColor = "yellow";
	childs[end].style.backgroundColor = "green";
	while (p <= mid && q <= end) {
		if (array[p] <= array[q]) {
			arr.push(array[p]);
			p++
		} 
		else {
			arr.push(array[q]);
			q++
		}
	}

	while (p <= mid) {
		arr.push(array[p]);
		p++;
	}

	while (q <= end) {
		arr.push(array[q]);
		q++;
	}
	
	let k = 0;
	for (let i = start; i <= end; i++) {
		array[i] = arr[k++];
		childs[i].childNodes[0].innerText = array[i];
	}
	
	for (let i = start; i <= end; i++) {
		childs[i].style.height = array[i] * 5 + "px";
	}
	
}

function m() {
	// disable_on_start()
	var arr = [];
	var size = document.getElementById("range").value;
	var blocks = document.querySelectorAll(".block");
	for (let i = 0; i < blocks.length; i++) {
		arr.push(Number(blocks[i].childNodes[0].innerHTML));
	}
	mergeSort(arr, 0, size - 1);
	// enable_on_end()
}

async function CocktailSort() {
	disable_on_start();
	let blocks = document.querySelectorAll(".block");
	let swapped = true;
	let start = 0;
	let end = blocks.length;
	
	while (swapped == true) {
		swapped = false;
		for (var i = start; i < end - 1; i++) {
			var value1 = parseInt(blocks[i].childNodes[0].innerHTML);
			var value2 = parseInt(blocks[i + 1].childNodes[0].innerHTML);

			blocks[i].style.backgroundColor = "red";
			blocks[i + 1].style.backgroundColor = "red";
			if (value1 > value2) {
				var temp1 = blocks[i].style.height;
				var temp2 = blocks[i].childNodes[0].innerText;
				
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed()));
				
				blocks[i].style.height = blocks[i + 1].style.height;
				blocks[i].childNodes[0].innerText = blocks[i + 1].childNodes[0].innerText;
				blocks[i + 1].style.height = temp1;
				blocks[i + 1].childNodes[0].innerText = temp2;
				swapped = true;
			}	

			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, sliderSpeed())
			);

			blocks[i].style.backgroundColor = "#6b5b95";
			blocks[i + 1].style.backgroundColor = "#6b5b95";
		}
		
		// if nothing moved, then array is sorted.
		if (swapped == false) {
			break;
		}
		swapped = false;

		end = end - 1;
		for (var i = end - 1; i >= start; i--) {
			var value1 = parseInt(blocks[i].childNodes[0].innerHTML);
			var value2 = parseInt(blocks[i + 1].childNodes[0].innerHTML);
		
			blocks[i].style.backgroundColor = "red";
			blocks[i + 1].style.backgroundColor = "red";

			if (value1 > value2) {
				var temp1 = blocks[i].style.height;
				var temp2 = blocks[i].childNodes[0].innerText;

				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
				);

				blocks[i].style.height = blocks[i + 1].style.height;
				blocks[i].childNodes[0].innerText = blocks[i + 1].childNodes[0].innerText;
				blocks[i + 1].style.height = temp1;
				blocks[i + 1].childNodes[0].innerText = temp2;

				swapped = true;
			}

			await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, sliderSpeed()));

			blocks[i].style.backgroundColor = "#6b5b95";
			blocks[i + 1].style.backgroundColor = "#6b5b95";
		}
		start = start + 1;
	}
	
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = "#13CE66";
	}
	enable_on_end();
}

async function Heapify(n, i) {
	disable_on_start();
	var blocks = document.querySelectorAll(".block");
	var largest = i; // Initialize largest as root
	var l = 2 * i + 1; // left = 2*i + 1
	var r = 2 * i + 2; // right = 2*i + 2

	if (l < n && Number(blocks[l].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))
    largest = l;

	if (r < n && Number(blocks[r].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))
    largest = r;

	if (largest != i) {
		var temp1 = blocks[i].style.height;
		var temp2 = blocks[i].childNodes[0].innerText;
		blocks[i].style.height = blocks[largest].style.height;
		blocks[largest].style.height = temp1;
		blocks[i].childNodes[0].innerText =
		blocks[largest].childNodes[0].innerText;
		blocks[largest].childNodes[0].innerText = temp2;

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, sliderSpeed())
		);

		await Heapify(n, largest);
	}
	// enable_on_end();
}

async function HeapSort() {

	var blocks = document.querySelectorAll(".block");

	for (var i = Math.floor(blocks.length / 2 - 1); i >= 0; i--) {
		await Heapify(blocks.length, i);
	}

	for (var i = blocks.length - 1; i > 0; i--) {
		var temp1 = blocks[i].style.height;
		var temp2 = blocks[i].childNodes[0].innerText;
		blocks[i].style.height = blocks[0].style.height;
		blocks[0].style.height = temp1;
		blocks[i].childNodes[0].innerText = 
		blocks[0].childNodes[0].innerText;
		blocks[0].childNodes[0].innerText = temp2;

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, sliderSpeed())
		);
		await Heapify(i, 0);
	}

	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = "#13CE66";
	}
	enable_on_end();
}

async function ShellSort(delay = 250) {
	disable_on_start();

    let blocks = document.querySelectorAll(".block");
    for (var i = Math.floor(blocks.length / 2); i > 0; i = Math.floor(i / 2)) {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, sliderSpeed())
        );

        for (var j = i; j < blocks.length; j++) {
            var temp = parseInt(blocks[j].childNodes[0].innerHTML);
            var k;

            var temp1 = blocks[j].style.height;
            var temp2 = blocks[j].childNodes[0].innerText;

            for (k = j; k >= i && parseInt(blocks[k - i].childNodes[0].innerHTML) > temp; k -= i) {
                blocks[k].style.height = blocks[k - i].style.height;
                blocks[k].childNodes[0].innerText = blocks[k - i].childNodes[0].innerText;
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, sliderSpeed())
                );
            }

            blocks[j].style.backgroundColor = "orange";
            blocks[k].style.backgroundColor = "orange";
            blocks[k].style.height = temp1;
            blocks[k].childNodes[0].innerText = temp2;

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, sliderSpeed())
            );

            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[k].style.backgroundColor = "#6b5b95";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, sliderSpeed())
            );
        }
    }
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#13CE66";
    }

    enable_on_end();
}

function enable_on_end() {
	document.getElementById("generate").disabled = false;
    document.getElementById("generate").style.backgroundColor = "white";
	document.getElementById("start").disabled = false;
    document.getElementById("start").style.backgroundColor = "white";

	document.getElementById("range").disabled = false;
}

function disable_on_start() {
	document.getElementById("generate").disabled = true;
    document.getElementById("generate").style.backgroundColor = "#ff0000";
	document.getElementById("start").disabled = true;
    document.getElementById("start").style.backgroundColor = "#ff0000";
	document.getElementById("range").disabled = true;
}

async function LinearSearch() {
	var num = document.getElementById("num_value").value;
	if(!num || num <= 0 || num > 100)
	{
		alert("Number must be between 1 and 100.");
		document.querySelector('#num_value').focus();
		return;
	}
	disable_on_start();
	
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
	output.innerText = "";
	

	var flag = 0;

	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = '#6b5b95';
	}

	for (var i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = "#FF4949";
		
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed())
		);
		var value = Number(blocks[i].childNodes[0].innerHTML);
		
		if (value == num) {
			flag = 1;
			output.innerText = "Element Found";
			blocks[i].style.backgroundColor = "#13CE66";
			break;
		} 
		else {
			blocks[i].style.backgroundColor = "#6b5b95";
		}
	}
	if (flag == 0) {
		output.innerText = "Element Not Found";
	}
	toggle(flag);
	enable_on_end();
}

async function BinarySearch(delay = 300) {
	var num = document.getElementById("num_value").value;
	if(!num || num <= 0 || num > 100)
	{
		alert("Number must be between 1 and 100.");
		document.querySelector('#num_value').focus();
		return;
	}
	disable_on_start();
	
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");


	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#6b5b95";
	}

	output.innerText = "";
	var start = 0;
	var end = blocks.length - 1;
	var flag = 0;

	while (start <= end) {
		var mid = Math.floor((start + end) / 2);
		blocks[mid].style.backgroundColor = "#FF4949";
		var value = Number(blocks[mid].childNodes[0].innerHTML);

		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, delay));

		if (value == num) {
			output.innerText = "Element Found";
			blocks[mid].style.backgroundColor = "#13CE66";
			flag = 1;
			break;
		}

		if (value > num) {
			end = mid - 1;
			blocks[mid].style.backgroundColor = "#6b5b95";
		} else {
			start = mid + 1;
			blocks[mid].style.backgroundColor = "#6b5b95";
		}
	}
	if (flag === 0) {
		output.innerText = "Element Not Found";
	}
	toggle(flag);
	enable_on_end();
}

async function JumpSearch(delay=300) {
	var num = document.getElementById("num_value").value;
	if(!num || num <= 0 || num > 100)
	{
		alert("Number must be between 1 and 100.");
		document.querySelector('#num_value').focus();
		return;
	}
	disable_on_start();
	
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
	
	output.innerText = "";
	
	var arr = []

	var blocks = document.querySelectorAll(".block");
	for (let i = 0; i < blocks.length; i++) {
		arr.push(Number(blocks[i].childNodes[0].innerHTML))
	}
	let step = Math.round(Math.sqrt(arr.length));
	var flag = 0;

	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = '#6b5b95';
	}

	var i = 0
	for (i = step; Math.min(step + i, blocks.length)-1 <= blocks.length; i+=step) {
		if(i >= blocks.length){
			i = blocks.length;
			for (var k = i - 1; k <= blocks.length; k--) {
				blocks[k].style.backgroundColor = "#FF4949";
				
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
				);
				var value = Number(blocks[k].childNodes[0].innerHTML);
				
				if (value == num) {
					flag = 1;
					output.innerText = "Element Found";
					blocks[k].style.backgroundColor = "#13CE66";
					break;
				} 
				else {
					blocks[k].style.backgroundColor = "#6b5b95";
				}
				if (k == 0 && flag == 0) {
					output.innerText = "Element Not Found";
					break;
				}
			}
			break;
		}
		blocks[i].style.backgroundColor = "#FF4949";
		
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, delay)
		);
		var value = Number(blocks[i].childNodes[0].innerHTML);
		var j = i;
		if (value > num) {
			for (j = i; j < blocks.length; j--) {
				blocks[j].style.backgroundColor = "#FF4949";
				
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
				);
				var value = Number(blocks[j].childNodes[0].innerHTML);
				
				if (value == num) {
					flag = 1;
					output.innerText = "Element Found";
					blocks[j].style.backgroundColor = "#13CE66";
					break;
				} 
				else {
					blocks[j].style.backgroundColor = "#6b5b95";
				}
				if (j == 0 && flag == 0) {
					output.innerText = "Element Not Found";
					break;
				}
			}
		}
		else {
			blocks[i].style.backgroundColor = "#6b5b95";
		}
		// za posleden element
		if (value == num) {
			flag = 1;
			output.innerText = "Element Found";
			blocks[j].style.backgroundColor = "#13CE66";//vajno
			break;
		} 
		if (j == 0 && flag == 0) {
			output.innerText = "Element Not Found";
			break;
		}
	}
	toggle(flag);
	enable_on_end();
}

async function TernarySearch(delay = 500) {
	var num = document.getElementById("num_value").value;
	if(!num || num <= 0 || num > 100)
	{
		alert("Number must be between 1 and 100.");
		document.querySelector('#num_value').focus();
		return;
	}
	disable_on_start();
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#6b5b95";
    }

    output.innerText = "";
    var start = 0;
    var end = blocks.length - 1;
    var flag = 0;

    while (start <= end) {
        var mid1 = Math.floor(start + (end - start) / 3);
        var mid2 = Math.floor(end - (end - start) / 3);

        var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
        var value2 = Number(blocks[mid2].childNodes[0].innerHTML);

        blocks[mid1].style.backgroundColor = "#FF4949";
        blocks[mid2].style.backgroundColor = "#FF4949";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        if (value1 == num) {
            output.innerText = "Element Found";
            blocks[mid1].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }

        if (value2 == num) {
            output.innerText = "Element Found";
            blocks[mid2].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }

        if (num < value1) {
            end = mid1 - 1;
        } else if (num > value2) {
            start = mid2 + 1;
        } else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }

    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
	toggle(flag);
	enable_on_end();
}

function toggle(flag) {
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById('myBtn');

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName('close')[0];

	// When the user clicks the button, open the modal

	modal.style.display = 'block';

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = 'none';
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};

	if (flag == 1) {
		success();
	} else {
		fail();
	}
}

function success() {
	var s = document.getElementById('container-success');
	s.style.display = 'block';
	var f = document.getElementById('container-fail');
	f.style.display = 'none';
}
function fail() {
	var f = document.getElementById('container-fail');
	f.style.display = 'block';
	var s = document.getElementById('container-success');
	s.style.display = 'none';
}


// var english = document.getElementById("en"),
// 	bulgarian = document.getElementById("bg"),
// 	change_text = document.getElementById("translate");
// 	// btn = document.getElementById("bubble");

// // declare some variables to catch the various HTML elements

// english.addEventListener("click", function() {
//     change(english, bulgarian);
// }, false
// );
// // add an event listener to listen to when the user clicks on one of the language span tags
// // this triggers our custom "change" function, which we will define later


// bulgarian.addEventListener("click", function() {
//     change(bulgarian, english);
//   }, false
// );

// function change(lang_on, lang_off1) {
// 	if (!lang_on.classList.contains("current_lang")) {
// 		// if the span that the user clicks on does not have the "current_lang" class
// 		lang_on.classList.add("current_lang");
// 		// add the "current_lang" class to it
// 		lang_off1.classList.remove("current_lang");
// 		// remove the "current_lang" class from the other span
// 	}

// 	if (lang_on.innerHTML == "English") {
// 		change_text.classList.add("english");
// 		change_text.classList.remove("bulgarian");
// 		change_text.innerHTML = "The text here will change";
// 		document.getElementById("generate").innerText = "Generate"
// 		document.getElementById("array_size").innerHTML = "Array size:"
// 		document.getElementById("speed").innerHTML = "Speed"
// 		document.getElementById("bubble").innerText = "Bubble Sort"
// 	}
  
// 	else if (lang_on.innerHTML == "Български") {
// 		change_text.classList.add("bulgarian");
// 		// first line adds the corrent language class to the text
// 		change_text.classList.remove("english");
// 		// second and third line removes the other language classes
// 		// this allows you to apply CSS that is specific to each language
// 		change_text.innerHTML = "Текстът ще се промени";
// 		document.getElementById("generate").innerText = "Генерирай"
// 		document.getElementById("array_size").innerHTML = "Размер на масив:"
// 		document.getElementById("speed").innerHTML = "Скорост"
// 		document.getElementById("bubble").innerText = "Метод на мехурчето"
// 		// fourth line is where you key in the text that will replace what is currently on-screen
// 	}
// }