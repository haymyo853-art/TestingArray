const orders = [
  { id: 1, customer: "Aung", city: "Yangon", total: 25000, status: "paid" },
  { id: 2, customer: "Su", city: "Mandalay", total: 12000, status: "pending" },
  { id: 3, customer: "Kyaw", city: "Yangon", total: 40000, status: "paid" },
  {
    id: 4,
    customer: "Mya",
    city: "Mandalay",
    total: 8000,
    status: "cancelled",
  },
];
console.log(orders.map(order=>order.customer));
console.log(orders.filter(order=>order.status==="paid"));
console.log(orders.filter(order=>order.status==="pending"));
console.log(orders.find(order=>order.id===3));
console.log(orders.reduce((acc,order)=>acc+order.total,0));
const result = orders.reduce((acc, order) => {
  acc[order.city] = (acc[order.city] || 0) + order.total;
  return acc;
}, {});

console.log(result);
console.log(orders.sort((a,b)=>a.total-b.total));

