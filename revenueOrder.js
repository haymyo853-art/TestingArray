export function totalRevenue(orders) {
	return orders.reduce((acc, order) => acc + order.total, 0);
}