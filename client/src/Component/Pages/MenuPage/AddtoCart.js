///need cartItem state//
const AddToCart = (e, cur, cartItem, setcartItem) => {
	e.preventDefault();
	let match = false;
	let newArray = cartItem;
	newArray.forEach((curr) => {
		if (curr._id === cur._id) {
			curr.count++;
			match = true;
		}
	});
	if (match) {
		setcartItem(newArray);
	}
	if (!match) {
		cur.count = 1;
		setcartItem([...cartItem, cur]);
	}
};

export default AddToCart;
