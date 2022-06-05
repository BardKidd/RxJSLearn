import { from, pairwise, map, scan } from "rxjs";
const baseOfPrice = 40;
const stockOfPrice = [
  {
    stock: "TQQQ",
    price: 40,
  },
  {
    stock: "TQQQ",
    price: 43,
  },
  {
    stock: "TQQQ",
    price: 39,
  },
  {
    stock: "TQQQ",
    price: 41,
  },
];

const pairwiseStock$ = from(stockOfPrice).pipe(pairwise());
const stock$ = from(pairwiseStock$).pipe(
  map(([yesterday, today], index) => ({
    day: index + 2,
    price: today.price,
    isRise: today.price - yesterday.price > 0 ? "上漲" : "下跌",
    priceBelowBase: 0,
  })),
  scan(
    (acc, value) => ({
      ...value,
      priceBelowBase: acc.priceBelowBase + (value.price < baseOfPrice ? 1 : 0),
    }),
    {
      day: 1,
      price: 0,
      isRise: "",
      priceBelowBase: 0,
    }
  )
);
stock$.subscribe((data) => {
  console.log(`第${data.day}天`);
  console.log(`本日股價: ${data.price}`);
  console.log(`狀態: ${data.isRise}`);
  console.log(`至今為止有${data.priceBelowBase}天的價格低於目標價`);
});
