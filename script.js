var container = document.getElementById("array");

function js() {
	var js = document.getElementById("CodeJS");
	if (js.style.display != "none") {
		document.getElementById("CodeJS").style.display = "block";
	}
	else {
		document.getElementById("CodeJS").style.display = "block";
		document.getElementById("CodeC#").style.display = "none";
		document.getElementById("CodePy").style.display = "none";
		document.getElementById("CodeC++").style.display = "none";
	}
}

function c() {
	var c = document.getElementById("CodeC#");
	if (c.style.display != "none") {
		document.getElementById("CodeC#").style.display = "block";
	}
	else {
		document.getElementById("CodeJS").style.display = "none";
		document.getElementById("CodeC#").style.display = "block";
		document.getElementById("CodePy").style.display = "none";
		document.getElementById("CodeC++").style.display = "none";
	}
}

function python() {
	var py = document.getElementById("CodePy");
	if (py.style.display != "none") {
		document.getElementById("CodePy").style.display = "block";
	}
	else {
		document.getElementById("CodeJS").style.display = "none";
		document.getElementById("CodeC#").style.display = "none";
		document.getElementById("CodePy").style.display = "block";
		document.getElementById("CodeC++").style.display = "none";
	}
}

function cPlus() {
	var js = document.getElementById("CodeC++");
	if (js.style.display != "none") {
		document.getElementById("CodeC++").style.display = "block";
	}
	else {
		document.getElementById("CodeJS").style.display = "none";
		document.getElementById("CodeC#").style.display = "none";
		document.getElementById("CodePy").style.display = "none";
		document.getElementById("CodeC++").style.display = "block";
	}
}

function start() {
	generatearray();
	generate_indx();
}

function start_counting() {
	generatearray_counting();
	generate_freq();
}

function start_sorted() {
	generatearraySorted();
	generate_indx();
}

function rangeFunction() {
	generatearray();
	generate_indx();
}

function rangeFunction_Counting() {
	generatearray_counting();
	generate_freq();
}

function rangeFunction_Sorted() {
	generatearraySorted();
	generate_indx();
}

function sliderSpeed() {
	return document.getElementById("sliderRange").value;
}

function generatearraySorted() {
	Clear("array");
	var arrSize = document.getElementById("range").value;
	let width = window.innerWidth;
	var arr = [];

	for (var i = 0; i < arrSize; i++) {
		var val = Number(Math.ceil(Math.random() * 100));
		arr.push(val);
	}
	arr.sort(function (a, b) {
		return a - b;
	});

	if (width <= 600) {
		document.getElementById("range").defaultValue = "15";
		document.getElementById("range").max = "19";
		for (var i = 0; i < arrSize; i++) {
			var value = arr[i];
	
			var array_ele = document.createElement("div");
			array_ele.classList.add("block");
			array_ele.style.height = `${value * 3}px`;
			array_ele.style.transform = `translate(${i * 20}px)`;
			container.style.width = `${arrSize * 20}px`; // tui kato edin bar e pochti 30px; pravim go za da izchislim width na class array (css)
	
			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_number");
			array_ele_label.innerText = value;
			
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
		}
	}
	else{
		for (var i = 0; i < arrSize; i++) {
			var value = arr[i];
	
			var array_ele = document.createElement("div");
			array_ele.classList.add("block");
			array_ele.style.height = `${value * 3}px`;
			array_ele.style.transform = `translate(${i * 30}px)`;
			container.style.width = `${arrSize * 30}px`;
	
			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_number");
			array_ele_label.innerText = value;
			
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
		}
	}
}

function generatearray() {
	Clear("array");
	var arrSize = document.getElementById("range").value;
	let width = window.innerWidth;
	console.log(width);

	// for mobile
	if (width <= 600) {
		document.getElementById("range").defaultValue = "15";
		document.getElementById("range").max = "19";
		for (var i = 0; i < arrSize; i++) {
			value = Math.ceil(Math.random() * 100);

			var array_ele = document.createElement("div");
			array_ele.classList.add("block");

			array_ele.style.height = `${value * 3}px`;
			array_ele.style.transform = `translate(${i * 20}px)`;
			container.style.width = `${arrSize * 20}px`;

			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_number");
			array_ele_label.innerText = value;

			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
		}
	}
	//pc
	else {
		for (var i = 0; i < arrSize; i++) {
			var value = Math.ceil(Math.random() * 100);

			var array_ele = document.createElement("div");
			array_ele.classList.add("block");

			array_ele.style.height = `${value * 2.5}px`;
			array_ele.style.transform = `translate(${i * 30}px)`;
			container.style.width = `${arrSize * 30}px`;
		
			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_number");
			array_ele_label.innerText = value;
			
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
		}
	}
}

function generatearray_counting() {
	Clear("array");
	var arrSize = document.getElementById("range").value;
	let width = window.innerWidth;
	console.log(width);

	// for mobile
	if (width <= 600) {
		document.getElementById("range").defaultValue = "15";
		document.getElementById("range").max = "19";
		for (var i = 0; i < arrSize; i++) {
			value = Math.ceil(Math.random() * arrSize);

			var array_ele = document.createElement("div");
			array_ele.classList.add("block");

			array_ele.style.height = `${value * 9}px`;
			array_ele.style.transform = `translate(${i * 20}px)`;
			container.style.width = `${arrSize * 20}px`;

			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_number");

			array_ele_label.innerText = value;

			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
		}
	}
	//pc
	else {
		for (var i = 0; i < arrSize; i++) {
			var value = Math.ceil(Math.random() * arrSize);

			var array_ele = document.createElement("div");
			array_ele.classList.add("block");
			array_ele.style.height = `${value * 9}px`;
			array_ele.style.transform = `translate(${i * 30}px)`;
			container.style.width = `${arrSize * 30}px`;
			
			var array_ele_label = document.createElement("label");
			array_ele_label.classList.add("block_number");
			array_ele_label.innerText = value;
			
			array_ele.appendChild(array_ele_label);
			container.appendChild(array_ele);
		}
	}
}

// frequency array
var count_container = document.getElementById("count");
function generate_freq() {
	Clear("count");
	document.getElementsByClassName("block_count").innerHTML = "";
	var arrSize = document.getElementById("range").value;
	let width = window.innerWidth;
	if (width <= 600) {
		document.getElementById("range").defaultValue = "15";
		document.getElementById("range").max = "19";

		for (var i = 0; i < arrSize; i++) {
			var array_ele2 = document.createElement("div");
	
			array_ele2.classList.add("block2");
			array_ele2.style.height = `${20}px`;
			array_ele2.style.transform = `translate(${i * 20}px)`;
			count_container.style.width = `${arrSize * 20}px`;
	
			var array_ele_idx = document.createElement("label");
			array_ele_idx.classList.add("block_indx");
			array_ele_idx.innerText = i + 1;
			
			var array_ele_label2 = document.createElement("label");
			array_ele_label2.classList.add("block_count");
			array_ele_label2.innerText = 0;
			
			array_ele2.appendChild(array_ele_label2);
			array_ele2.appendChild(array_ele_idx);
			count_container.appendChild(array_ele2);
		}
	}
	else{
		for (var i = 0; i < arrSize; i++) {
			var array_ele2 = document.createElement("div");
	
			array_ele2.classList.add("block2");
			array_ele2.style.height = `${20}px`;
			array_ele2.style.transform = `translate(${i * 30}px)`;
			count_container.style.width = `${arrSize * 30}px`;
	
			var array_ele_idx = document.createElement("label");
			array_ele_idx.classList.add("block_indx");
			array_ele_idx.innerText = i + 1;
			
			var array_ele_label2 = document.createElement("label");
			array_ele_label2.classList.add("block_count");
			array_ele_label2.innerText = 0;
			
			array_ele2.appendChild(array_ele_label2);
			array_ele2.appendChild(array_ele_idx);
			count_container.appendChild(array_ele2);
		}
	}
}

function generate_indx() {
	Clear("count");
	document.getElementsByClassName("block_count").innerHTML = "";
	var arrSize = document.getElementById("range").value;
	let width = window.innerWidth;
	if (width <= 600) {
		document.getElementById("range").defaultValue = "15";
		document.getElementById("range").max = "19";

		for (var i = 0; i < arrSize; i++) {
			var array_ele2 = document.createElement("div");
	
			array_ele2.classList.add("block2");
			array_ele2.style.height = `${20}px`;
			array_ele2.style.transform = `translate(${i * 20}px)`;
			count_container.style.width = `${arrSize * 20}px`;
			
			var array_ele_label2 = document.createElement("label");
			array_ele_label2.classList.add("block_count");
			array_ele_label2.innerText = i + 1;
			
			array_ele2.appendChild(array_ele_label2);
			count_container.appendChild(array_ele2);
		}
	}
	else{
		for (var i = 0; i < arrSize; i++) {
			var array_ele2 = document.createElement("div");
	
			array_ele2.classList.add("block2");
			array_ele2.style.height = `${20}px`;
			array_ele2.style.transform = `translate(${i * 30}px)`;
			count_container.style.width = `${arrSize * 30}px`;

			var array_ele_label2 = document.createElement("label");
			array_ele_label2.classList.add("block_count");
			array_ele_label2.innerText = i + 1;
			
			array_ele2.appendChild(array_ele_label2);
			count_container.appendChild(array_ele2);
		}
	}
}

function Clear(elementID) {
	document.getElementById(elementID).innerHTML = "";
}

function swap(el1, el2){
	var blocks = document.querySelectorAll(".block");
	var temp1 = blocks[el1].style.height;
	var temp2 = blocks[el1].childNodes[0].innerText;
	
	blocks[el1].style.height = blocks[el2].style.height;
	blocks[el2].style.height = temp1;
	blocks[el1].childNodes[0].innerText = blocks[el2].childNodes[0].innerText;
	blocks[el2].childNodes[0].innerText = temp2;
}

async function BubbleSort() {
	disable_on_start();	
	let blocks = document.querySelectorAll(".block");

	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {
			blocks[j].style.backgroundColor = "red";
			blocks[j + 1].style.backgroundColor = "red";

			await new Promise((resolve) => {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						resolve();
					}, sliderSpeed())
				})
			});
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
			// compare 2 blocks
			if (value1 > value2) {
				await swap(j, j + 1);
				blocks = document.querySelectorAll(".block");
			}
			await new Promise((resolve) => {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						resolve();
					}, sliderSpeed())
				})
			});
			// change color of previous blocks
			blocks[j].style.backgroundColor = "#add8e6";
			blocks[j + 1].style.backgroundColor = "#add8e6";
		}
		// adding color to sorted element
		blocks[blocks.length - i - 1].style.backgroundColor = "#0bdb67";
	}
	enable_on_end();
}

async function InsertionSort() {
	disable_on_start();

	let blocks = document.querySelectorAll(".block");
	blocks[0].style.backgroundColor = "#0bdb67";
	for (var i = 1; i < blocks.length; i += 1) {
		var j = i - 1;

		var key = parseInt(blocks[i].childNodes[0].innerHTML);
		// store ith block height
		var height = blocks[i].style.height;
		blocks[i].style.backgroundColor = "darkblue";

		await new Promise((resolve) => {
			window.requestAnimationFrame(function () {
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
			})
		});
		// place selected block to its correct position
		while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {
			blocks[j].style.backgroundColor = "darkblue";
			// place j-th block over (j+1)th block
			blocks[j + 1].style.height = blocks[j].style.height;
			blocks[j + 1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;

			j = j - 1;
			await new Promise((resolve) => {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						resolve();
					}, sliderSpeed())
				})
			})

			for (var k = i; k >= 0; k--) {
				blocks[k].style.backgroundColor = "#0bdb67";
			}
		}
		// Placing the selected element to its correct position
		blocks[j + 1].style.height = height;
		blocks[j + 1].childNodes[0].innerHTML = key;

		await new Promise((resolve) => {
			window.requestAnimationFrame(function () {
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
			})
		})
		blocks[i].style.backgroundColor = "#0bdb67";
	}
	enable_on_end();
}

async function SelectionSort() {
	disable_on_start();

	let blocks = document.querySelectorAll(".block");
	var min_idx = 0;
	for (var i = 0; i < blocks.length; i += 1) {
		min_idx = i;
		blocks[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < blocks.length; j += 1) {
			blocks[j].style.backgroundColor = "yellow";
			await new Promise((resolve) => {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						resolve();
					}, sliderSpeed())
				})
			})
			var val1 = parseInt(blocks[j].childNodes[0].innerHTML);
			var val2 = parseInt(blocks[min_idx].childNodes[0].innerHTML);

			if (val1 < val2) {
				if (min_idx !== i) {
					blocks[min_idx].style.backgroundColor = "#add8e6";
				}
				min_idx = j;
			}
			else {
				blocks[j].style.backgroundColor = "#add8e6";
			}
		}

		// to swap
		swap(min_idx, i);

		await new Promise((resolve) => {
			window.requestAnimationFrame(function () {
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
			})
		});
		blocks[min_idx].style.backgroundColor = "#add8e6";
		blocks[i].style.backgroundColor = "#0bdb67";
	}
	enable_on_end();
}

async function lometo_partition(l, r) {
	var blocks = document.querySelectorAll(".block");

	let pivot = Number(blocks[r].childNodes[0].innerHTML);
	console.log(pivot)
	// pointer for greater element
	var i = l - 1;
	blocks[r].style.backgroundColor = "red";

	for (var j = l; j <= r - 1; j++) {
		blocks[j].style.backgroundColor = "yellow";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, sliderSpeed()));
		var value = Number(blocks[j].childNodes[0].innerHTML);
		if (value < pivot) {
			// if element smaller than pivot is found
      		// swap it with the greater element pointed by i
			i++;
			// swapping element at i with element at j
			swap(i, j);
			blocks[i].style.backgroundColor = "orange";
			if (i != j) blocks[j].style.backgroundColor = "pink";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed()));
		} 
		else blocks[j].style.backgroundColor = "pink";
	}
	i++;
	// swap the pivot element with the greater element specified by i
	swap(i, r);

	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed() * 3));
	for (var k = 0; k < blocks.length; k++)
		blocks[k].style.backgroundColor = "#add8e6";
	return i;
}

async function QuickSort(l, r) {
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

async function CountingSort() {
	disable_on_start();
	var blocks = document.querySelectorAll(".block");
	
	// store frequency of block
	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "red";

		var value = Number(blocks[i].childNodes[0].innerHTML);
	
		var freq_array = document.getElementsByClassName("block_count");
		freq_array[value - 1].innerText++ ;
		freq_array[value - 1].style.backgroundColor = "red"
		
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed()));
		freq_array[value - 1].style.backgroundColor = "lightgray"
		blocks[i].style.backgroundColor = "#add8e6";
	}
	
	var idx = 0;
	for (var i = 0; i < blocks.length; i += 1) {
		var freq = document.getElementsByClassName("block_count");
		var temp = Number(freq[i].innerText);
		var freq_block = document.getElementsByClassName("block2");
		
		if (temp == 0) {
			freq[i].style.backgroundColor = "red";
		}
		else{
			freq[i].style.backgroundColor = "cyan";
		}

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, 2 * sliderSpeed()));
	
		if (temp == 0) {
			freq_block[i].style.backgroundColor = "lightgray";
			freq[i].style.backgroundColor = "lightgray";
			continue;
		}
		var block_label = document.getElementsByClassName("block_number");
		
		for (var j = 0; j < temp; j++) {
			blocks[idx].style.height = `${(i + 1) * 9}px`;
			block_label[idx].innerText = i + 1;
			blocks[idx].style.backgroundColor = "#0bdb67";
			idx++;
		}
		
		freq_block[i].style.backgroundColor = "lightgray";
		freq[i].style.backgroundColor = "lightgray";
		
		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, 2 * sliderSpeed()));
	}
	enable_on_end();
}

async function mergeSort(array, start, end) {
	if (start < end) {
		let blocks = document.querySelectorAll(".block");
		let mid = Math.floor((start + end) / 2);
		await mergeSort(array, start, mid);
		await mergeSort(array, mid + 1, end);
		merge(array, start, mid, end);
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, sliderSpeed()));
		blocks[start].style.backgroundColor = "#add8e6";
		blocks[end].style.backgroundColor = "#add8e6";
	}
	enable_on_end();
}

async function merge(array, start, mid, end) {
	disable_on_start()
	let p = start;
	let q = mid + 1;
	let arr = [];
	let blocks = document.querySelectorAll(".block");
	blocks[start].style.backgroundColor = "yellow";
	blocks[end].style.backgroundColor = "green";
	// until we reach either end of either array[p] or array[q] pick larger among
    // elements array[p] and array[q] and place them in the correct position
	while (p <= mid && q <= end) {
		if (array[p] <= array[q]) {
			arr.push(array[p]);
			p++;
		} 
		else {
			arr.push(array[q]);
			q++;
		}
	}
	// whhen we run out of elements in subarray pick up the remaining elements
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
		array[i] = arr[k];
		blocks[i].childNodes[0].innerText = array[i];
		k++;
	}
	
	for (let i = start; i <= end; i++) {
		blocks[i].style.height = array[i] * 2.5 + "px";
	}
}

function m() {
	var arr = [];
	var blocks = document.querySelectorAll(".block");
	for (let i = 0; i < blocks.length; i++) {
		arr.push(Number(blocks[i].childNodes[0].innerHTML));
	}
	mergeSort(arr, 0, blocks.length - 1);
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
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed()));
				
				swap(i, i + 1);
				swapped = true;
			}	

			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, sliderSpeed())
			);

			blocks[i].style.backgroundColor = "#add8e6";
			blocks[i + 1].style.backgroundColor = "#add8e6";
		}
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
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed()));

				swap(i, i + 1);

				swapped = true;
			}

			await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, sliderSpeed()));

			blocks[i].style.backgroundColor = "#add8e6";
			blocks[i + 1].style.backgroundColor = "#add8e6";
		}
		start = start + 1;
	}
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = "#0bdb67";
	}
	enable_on_end();
}

async function Heapify(n, i) {
	disable_on_start();
	var blocks = document.querySelectorAll(".block");
	var largest = i;
	var l = 2 * i + 1; // left = 2*i + 1
	var r = 2 * i + 2; // right = 2*i + 2
	// if left child is larger than root
	if (l < n && Number(blocks[l].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))
    largest = l;
	// if right child is larger than largest
	if (r < n && Number(blocks[r].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))
    largest = r;
	// if largest is not root
	if (largest != i) {
		swap(i, largest);

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, sliderSpeed())
		);
		// recursively heapify the affected sub tree
		await Heapify(n, largest);
	}
}

async function HeapSort() {
	var blocks = document.querySelectorAll(".block");
	// build heap
	for (var i = Math.floor(blocks.length / 2 - 1); i >= 0; i--) {
		await Heapify(blocks.length, i);
	}
	// extract an element from heap
	for (var i = blocks.length - 1; i > 0; i--) {
		swap(i, 0);

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, sliderSpeed()));
		// call max heapify on the reduced heap
		await Heapify(i, 0);
	}

	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = "#0bdb67";
	}
	enable_on_end();
}

async function ShellSort() {
	disable_on_start();

    let blocks = document.querySelectorAll(".block");
    for (var i = Math.floor(blocks.length / 2); i > 0; i = Math.floor(i / 2)) {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, sliderSpeed()));
        for (var j = i; j < blocks.length; j++) {
            var k;
            var temp = parseInt(blocks[j].childNodes[0].innerHTML);
            var temp1 = blocks[j].style.height;
            var temp2 = blocks[j].childNodes[0].innerText;

            for (k = j; k >= i && parseInt(blocks[k - i].childNodes[0].innerHTML) > temp; k -= i) {
                swap(k, k-i);
				blocks[k - i].style.backgroundColor = "orange";
            }
			
            blocks[j].style.backgroundColor = "orange";
            blocks[k].style.backgroundColor = "orange";
			
            blocks[k].style.height = temp1;
            blocks[k].childNodes[0].innerText = temp2;
			
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, sliderSpeed()));

			for (let z = 0; z < blocks.length; z++) {
				blocks[z].style.backgroundColor = "#add8e6";
			}
            
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, sliderSpeed()));
        }
    }
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#0bdb67";
    }
    enable_on_end();
}

function enable_on_end() {
	document.getElementById("generate").disabled = false;
    document.getElementById("generate").style.backgroundColor = "transparent";
	document.getElementById("generate").style.color = "black";
	document.getElementById("start").disabled = false;
    document.getElementById("start").style.backgroundColor = "transparent";
	document.getElementById("start").style.color = "black";
	document.getElementById("range").disabled = false;
	document.getElementById("range").style.backgroundColor = "#111";
}

function disable_on_start() {
	document.getElementById("generate").disabled = true;
    document.getElementById("generate").style.backgroundColor = "red";
	document.getElementById("generate").style.color = "white";
	document.getElementById("start").disabled = true;
    document.getElementById("start").style.backgroundColor = "red";
	document.getElementById("start").style.color = "white";
	document.getElementById("range").disabled = true;
	document.getElementById("range").style.backgroundColor = "red";
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
	var flag = 0;

	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = '#add8e6';
	}

	for (var i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = "wheat";
		
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed()));
		var value = Number(blocks[i].childNodes[0].innerHTML);
		
		if (value == num) {
			flag = 1;
			blocks[i].style.backgroundColor = "#0bdb67";
			break;
		} 
		else {
			blocks[i].style.backgroundColor = "#add8e6";
		}
	}
	toggle(flag);
	enable_on_end();
}

async function BinarySearch() {
	var num = document.getElementById("num_value").value;
	if(!num || num <= 0 || num > 100)
	{
		alert("Number must be between 1 and 100.");
		document.querySelector('#num_value').focus();
		return;
	}
	disable_on_start();
	
	var blocks = document.querySelectorAll(".block");

	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#add8e6";
	}

	var start = 0;
	var end = blocks.length - 1;
	var flag = 0;

	while (start <= end) {
		var mid = Math.floor((start + end) / 2);
		blocks[mid].style.backgroundColor = "wheat";
		var value = Number(blocks[mid].childNodes[0].innerHTML);

		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed()));

		if (value == num) {
			blocks[mid].style.backgroundColor = "#0bdb67";
			flag = 1;
			break;
		}

		if (value > num) {
			end = mid - 1;
			blocks[mid].style.backgroundColor = "#add8e6";
		} else {
			start = mid + 1;
			blocks[mid].style.backgroundColor = "#add8e6";
		}
	}
	toggle(flag);
	enable_on_end();
}

async function JumpSearch() {
	var num = document.getElementById("num_value").value;
	if(!num || num <= 0 || num > 100)
	{
		alert("Number must be between 1 and 100.");
		document.querySelector('#num_value').focus();
		return;
	}
	disable_on_start();
	
	var blocks = document.querySelectorAll(".block");
	let step = Math.round(Math.sqrt(blocks.length));
	var flag = 0;

	for (let i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = '#add8e6';
	}

	var i = 0;
	for (i = step; Math.min(step + i, blocks.length)-1 <= blocks.length; i+=step) {
		// to stop loop exceeding array size
		// start linear search if at end of array
		if(i >= blocks.length){
			i = blocks.length;
			for (var k = i - 1; k <= blocks.length; k--) {
				blocks[k].style.backgroundColor = "wheat";
				
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed())
				);
				var value = Number(blocks[k].childNodes[0].innerHTML);
				
				if (value == num) {
					flag = 1;
					blocks[k].style.backgroundColor = "#0bdb67";
					break;
				} 
				else {
					blocks[k].style.backgroundColor = "#add8e6";
				}
				// if element is not present
				if (k == 0 && flag == 0) {
					break;
				}
			}
			// to break if element is found
			break;
		}

		blocks[i].style.backgroundColor = "wheat";
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, sliderSpeed()));

		var value = Number(blocks[i].childNodes[0].innerHTML);
		var j = i;
		if (value > num) {
			// linear search if value is bigger than searched
			for (j = i; j < blocks.length; j--) {
				blocks[j].style.backgroundColor = "wheat";
				
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, sliderSpeed()));
				var value = Number(blocks[j].childNodes[0].innerHTML);
				
				if (value == num) {
					flag = 1;
					blocks[j].style.backgroundColor = "#0bdb67";
					break;
				} 
				else {
					blocks[j].style.backgroundColor = "#add8e6";
				}
				// if element is not present
				if (j == 0 && flag == 0) {
					break;
				}
			}
		}
		else {
			blocks[i].style.backgroundColor = "#add8e6";
		}
		if (value == num) {
			flag = 1;
			blocks[j].style.backgroundColor = "#0bdb67";
			break;
		} 
		// if element is not present
		if (j == 0 && flag == 0) {
			break;
		}
	}
	toggle(flag);
	enable_on_end();
}

async function TernarySearch() {
	var num = document.getElementById("num_value").value;
	if(!num || num <= 0 || num > 100)
	{
		alert("Number must be between 1 and 100.");
		document.querySelector('#num_value').focus();
		return;
	}
	disable_on_start();
    var blocks = document.querySelectorAll(".block");

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#add8e6";
    }

    var start = 0;
    var end = blocks.length - 1;
    var flag = 0;

    while (start <= end) {
        var mid1 = Math.floor(start + (end - start) / 3);
        var mid2 = Math.floor(end - (end - start) / 3);

        var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
        var value2 = Number(blocks[mid2].childNodes[0].innerHTML);

        blocks[mid1].style.backgroundColor = "wheat";
        blocks[mid2].style.backgroundColor = "wheat";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, sliderSpeed()));

        if (value1 == num) {
            blocks[mid1].style.backgroundColor = "#0bdb67";
            flag = 1;
            break;
        }

        if (value2 == num) {
            blocks[mid2].style.backgroundColor = "#0bdb67";
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
	toggle(flag);
	enable_on_end();
}

function toggle(flag) {
	var modal = document.getElementById('myModal');

	// Get the span element that closes the modal
	var span = document.getElementsByClassName('close')[0];

	modal.style.display = 'block';

	// (x) element = close the modal
	span.onclick = function () {
		modal.style.display = 'none';
	};

	// outside click close
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
