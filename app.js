// จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const summary = sales.map((item) => {
    if (item.discount === undefined) {
      return (netprice = item.price);
    } else {
      return (netprice = item.price * (1 - item.discount));
    }
});

console.log(summary);
// const summary = [
//   {netPrice: 900},
//   {netPrice: 475},
//   {netPrice: 100}
// ];
