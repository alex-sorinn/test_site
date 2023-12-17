document.addEventListener("DOMContentLoaded", (event) => {
  console.log("loaded")
  lotto();
});

function lotto() {
	const element540 = document.querySelector("#lotto_540");
  const element649 = document.querySelector("#lotto_649");
  const button649 = element649.children[1];
	const button540 = element540.children[1];
	const p540 = element540.children[2];
	const p649 = element649.children[2];

	function newNumber_function(min, max) {
		return Math.floor(Math.random() * (max + 1 - min) + min);
	};

  function random(number, min, max) {
    let randomARR = [];
    for(let e = 0; e < number; e++) {
      let newNumber = newNumber_function(min, max);
			while (randomARR.includes(newNumber)) {
				newNumber = newNumber_function(min, max);
			}
			randomARR.push(newNumber);
    };
    return randomARR;
  };

	
	function writeHTML(lotto_type) {
		let numbers; 
		if(lotto_type == p649) {
			numbers = random(6, 1, 49);
		} else {
			numbers = random(5, 1, 40);
		};

		for (let e = 0; e < numbers.length; e++) {
            let num_to_string = numbers[e].toString();
            if (num_to_string.length < 2) {
                num_to_string = "0" + num_to_string;
            }
			lotto_type.children[e].innerHTML = num_to_string;
		};
	};


  button649.addEventListener('click', function() {
		writeHTML(p649);
  });
	button540.addEventListener('click', function() {
		writeHTML(p540);
	});
}