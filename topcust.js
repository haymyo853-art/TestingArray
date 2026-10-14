export function topCustomers(orders, n = 3) {
  const totals = orders.reduce((acc, order) => {
    acc[order.customer] = (acc[order.customer] || 0) + order.total;
    return acc;
  }, {});

  return Object.entries(totals)
    .map(([customer, total]) => ({ customer, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, n);
}