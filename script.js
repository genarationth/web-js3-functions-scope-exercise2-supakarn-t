// Exercise 2.1 create a expression function for checking if a number is even
const is_even_expression = function (num) {
	return num % 2 === 0 ? "even" : "odd";
};
console.log(is_even_expression(1));
console.log(is_even_expression(2));

// Exercise 2.2 converts the function from Exercise 2.1 into an arrow function
const is_even_arrow = (num) => (num % 2 === 0 ? "even" : "odd");
console.log(is_even_arrow(1));
console.log(is_even_arrow(2));
