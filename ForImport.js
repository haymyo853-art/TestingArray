import {toSummary} from './smary.js';
import orders from './order.js';
import {formatMMK} from './mmk.js';
import {getPaidOrders} from './paidOrder.js';
import {revenueByCity} from './revenueByCity.js';
import {totalRevenue} from './revenueOrder.js';
import {topCustomers} from './topcust.js'
console.log(topCustomers(orders));
console.log(totalRevenue(orders));
console.log(revenueByCity(orders));
console.log(getPaidOrders(orders));
console.log(formatMMK(totalRevenue(orders)));
console.log(toSummary(orders));