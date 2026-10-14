export function totalRevenue(orders) {
	return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}