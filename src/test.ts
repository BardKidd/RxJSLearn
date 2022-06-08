import {
  take,
  EMPTY,
  iif,
  map,
  of,
  range,
  throwError,
  catchError,
  from,
  asyncScheduler,
  fromEvent,
  fromEventPattern,
  interval,
  timer,
  defer,
  concat,
  merge,
  zip,
  partition,
  combineLatest,
  race,
  forkJoin,
  scan,
  pairwise,
  switchMap,
  concatMap,
  mergeMap,
  exhaustMap,
  Subject,
  switchAll,
  tap,
  concatAll,
  mergeAll,
  combineLatestAll,
  filter,
  first,
  last,
  single,
  takeLast,
  takeUntil,
  takeWhile,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
} from "rxjs";
import { ajax } from "rxjs/ajax";

// EMPTY.subscribe({
//   complete: () => {
//     console.log("これで終わりだ！");
//   },
// });

// const arr = ["one", "two", "three"];
// console.log("開始");
// const result = from([1, 2, 3]);
// result.subscribe((x) => console.log(x));
// console.log("結束");
// from(range(1, 4)).subscribe((data) => {
//   console.log(`from 示範 (2): ${data}`);
// });

// from(ajax("https://api.github.com/users?per_page=5")).subscribe((data) => {
//   console.log(data.response);
// });

// const myPromise = (num: number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num) {
//         resolve(num);
//       } else {
//         reject(num);
//       }
//     }, 2000);
//   });
// };

// from(myPromise(1)).subscribe((data) => console.log("成功了", data));

// function addHandler(handler: any) {
//   console.log("add", handler);
//   document.addEventListener("click", handler);
// }
// function removeHandler(handler: any) {
//   console.log("remove", handler);
//   document.removeEventListener("click", handler);
// }

// const pattern$ = fromEventPattern(addHandler, removeHandler);

// const test = pattern$.subscribe((x) => console.log("觸發自定義事件", x));

// setTimeout(() => {
//   test.unsubscribe();
// }, 5000);

// const Interval$ = interval(1000).subscribe((data) =>
//   console.log("每秒都加1", data)
// );

// setTimeout(() => {
//   Interval$.unsubscribe();
// }, 5000);

// const Timer$ = timer(0, 1000).subscribe((data) =>
//   console.log("我一開始就會執行", data)
// );

// setTimeout(() => {
//   Timer$.unsubscribe();
// }, 5000);

// const nonDefer = new Promise((resolve) => {
//   console.log("我沒有 defer");
//   setTimeout(() => {
//     resolve("1秒後被執行");
//   }, 1000);
// });
// nonDefer.then((result) => {
//   console.log("Promise 的結果", result);
// });

// const myPromise3 = () =>
//   new Promise((resolve) => {
//     console.log("Promise3 內被執行了");
//     setTimeout(() => {
//       resolve("$20000");
//     }, 0);
//   });

// const defer$ = defer(myPromise3);
// console.log("Promise3 還沒被執行");
// defer$.subscribe((result) => console.log(`Promise3 ${result}`));

// const hasDefer = () =>
//   new Promise((resolve) => {
//     console.log("我有 defer");
//     setTimeout(() => {
//       resolve("1秒後執行");
//     }, 1000);
//   });
// const defer$ = defer(hasDefer);
// console.log("Promise 還沒訂閱");
// defer$.subscribe((result) => {
//   console.log("Promise 的結果", result);
// });

// const sourceA$ = interval(1000).pipe(map((data) => `A${data}`));

// const sourceB$ = interval(3000).pipe(map((data) => `B${data}`));

// const sourceC$ = interval(5000).pipe(map((data) => `C${data}`));

// zip(sourceA$, sourceB$, sourceC$)
//   .pipe(map(([A, B, C]) => [A, B, C]))
//   .subscribe((data) => {
//     console.log(`zip 範例： ${data}`);
//   });

// const age$ = of(27, 25, 29);
// const name$ = of("Foo", "Bar", "Beer");
// const isDev$ = of(true, true, false);

// zip(age$, name$, isDev$)
//   .pipe(
//     map(([age, name, isDev]) => ({
//       age,
//       name,
//       isDev,
//     }))
//   )
//   .subscribe((x) => console.log(x));

// const source$ = of(1, 2, 3, 4, 5, 6, 7, 8);
// const [even$, odd$] = partition(source$, (data) => data % 2 === 0);

// even$.subscribe((data) => console.log("偶數", data));
// odd$.subscribe((data) => console.log("奇數", data));

// const sourceA$ = interval(1000).pipe(map((data) => `A${data + 1}`));
// const sourceB$ = interval(2000).pipe(map((data) => `B${data + 1}`));
// const sourceC$ = interval(3000).pipe(map((data) => `C${data + 1}`));

// const subscription = combineLatest([sourceA$, sourceB$, sourceC$]).subscribe(
//   (data) => console.log(`combineLatest 範例: ${data}`)
// );

// const sourceA = interval(1000).pipe(
//   map((data) => `A${data}`),
//   take(5)
// );
// const sourceB = interval(1000).pipe(
//   map((data) => `B${data}`),
//   take(4)
// );
// const sourceC = interval(1000).pipe(
//   map((data) => `C${data}`),
//   take(3)
// );
// forkJoin([sourceA, sourceB, sourceC]).subscribe((data) =>
//   console.log(`forkJoin: ${data}`)
// );

// const sourceA$ = interval(1000).pipe(map((data) => `A${data + 1}`));
// const sourceB$ = interval(2000).pipe(map((data) => `B${data + 1}`));
// const sourceC$ = interval(3000).pipe(map((data) => `C${data + 1}`));

// const subscription = race([sourceA$, sourceB$, sourceC$]).subscribe((data) =>
//   console.log(`race 範例: ${data}`)
// );
// A1
// A2
// A3

// const studentScore = [
//   {
//     name: "小名",
//     project: "國文",
//     score: 60,
//     isPass: true,
//   },
//   {
//     name: "小華",
//     project: "國文",
//     score: 50,
//     isPass: false,
//   },
//   {
//     name: "小量",
//     project: "國文",
//     score: 10,
//     isPass: false,
//   },
// ];
// const changeScore$ = from(studentScore).pipe(
//   map((data) => ({
//     ...data,
//     score: Math.floor(Math.sqrt(data.score) * 10),
//   })),
//   map((data) => ({
//     ...data,
//     isPass: data.score >= 60 ? true : false,
//   }))
// );

// const [pass$, fail$] = partition(changeScore$, (data) => data.score >= 60);
// pass$.subscribe((data) =>
//   console.log(`${data.name}${data.project}${data.score}及格`)
// );
// fail$.subscribe((data) =>
//   console.log(`${data.name}${data.project}${data.score}不及格`)
// );

// const total$ = from(studentScore).pipe(
//   scan((acc: any, value: any) => {
//     return acc + value.score;
//   }, 0)
// );

// total$.subscribe((data) => console.log("總分為", data));

// range(1, 6)
//   .pipe(pairwise())
//   .subscribe((data) => console.log(data));

// const baseOfPrice = 40;
// const stockOfPrice = [
//   {
//     stock: "TQQQ",
//     price: 40,
//   },
//   {
//     stock: "TQQQ",
//     price: 43,
//   },
//   {
//     stock: "TQQQ",
//     price: 39,
//   },
//   {
//     stock: "TQQQ",
//     price: 41,
//   },
// ];

// const pairwiseStock$ = from(stockOfPrice).pipe(pairwise());
// const stock$ = from(pairwiseStock$).pipe(
//   map(([yesterday, today], index) => ({
//     day: index + 2,
//     price: today.price,
//     isRise: today.price - yesterday.price > 0 ? "上漲" : "下跌",
//     priceBelowBase: 0,
//   })),
//   scan(
//     (acc, value) => ({
//       ...value,
//       priceBelowBase: acc.priceBelowBase + (value.price < baseOfPrice ? 1 : 0),
//     }),
//     {
//       day: 1,
//       price: 0,
//       isRise: "",
//       priceBelowBase: 0,
//     }
//   )
// );
// stock$.subscribe((data) => {
//   console.log(`第${data.day}天`);
//   console.log(`本日股價: ${data.price}`);
//   console.log(`狀態: ${data.isRise}`);
//   console.log(`至今為止有${data.priceBelowBase}天的價格低於目標價`);
// });

// interval(3000)
//   .pipe(switchMap(() => timer(0, 1000)))
//   .subscribe((data) => console.log(data));

// const click$ = fromEvent(document, "click");
// const stream2$ = interval(1000).pipe(take(5));
// const result = click$
//   .pipe(concatMap(() => stream2$))
//   .subscribe((data) => console.log(data));

// const stream1$ = timer(0, 3000);
// const getStream1$ = (streamNum: number) =>
//   timer(0, 1000).pipe(map((data) => `資料流${streamNum}目前為: ${data}`));

// stream1$
//   .pipe(mergeMap((data) => getStream1$(data)))
//   .subscribe((data) => console.log(data));

// const clicks = fromEvent(document, "click");
// const result = clicks.pipe(exhaustMap(() => interval(1000).pipe(take(5))));
// result.subscribe((x) => console.log(x));

// const generateStream = (index: any) =>
//   timer(0, 1000).pipe(
//     map((data) => `資料流${index}目前值為: ${data}`),
//     take(3)
//   );
// const source$ = new Subject();
// const stream$ = source$.pipe(map((index) => generateStream(index)));
// stream$.pipe(switchAll()).subscribe((result) => console.log(result));

// source$.next(1);

// const click$ = fromEvent(document, "click");
// const source$ = click$.pipe(map(() => interval(1000)));

// source$.pipe(switchAll()).subscribe((x) => console.log(x));

// const click$ = fromEvent(document, "click");
// const stream$ = click$.pipe(map(() => interval(1000).pipe(take(5))));
// stream$.pipe(concatAll()).subscribe((x) => console.log(x));

// const click$ = fromEvent(document, "click");
// const result$ = click$.pipe(map(() => interval(1000).pipe(take(5))));
// result$.pipe(mergeAll()).subscribe((x) => console.log(x));

// const click$ = fromEvent(document, "click");
// const higherOrder$ = click$.pipe(
//   map(() => interval(1000).pipe(take(3))),
//   take(2)
// );
// higherOrder$.pipe(combineLatestAll()).subscribe((x) => console.log(x));

// const source$ = timer(0, 1000).pipe(take(10));
// source$
//   .pipe(filter((data) => data > 3))
//   .subscribe((data) => console.log("比3大的數字", data));

// const source$ = timer(0, 1000).pipe(take(10));

// source$.pipe(first()).subscribe((x) => console.log(x));

// const source$ = timer(0, 1000).pipe(take(10));

// source$.pipe(last((data) => data < 11)).subscribe((x) => console.log(x));

// const source$ = timer(0, 1000).pipe(single());

// source$.subscribe((x) => console.log(x));

// range(1, 10)
//   .pipe(takeLast(3))
//   .subscribe((x) => console.log(x));

// const click$ = fromEvent(document, "click");
// const source$ = interval(1000)
//   .pipe(
//     map((data) => data + 1),
//     takeUntil(click$)
//   )
//   .subscribe({
//     next: (data) => console.log("現在值為", data),
//     complete: () => console.log("結束"),
//   });

// const source$ = interval(1000).pipe(map((data) => data + 1));

// source$.pipe(takeWhile((data) => data < 5, true)).subscribe({
//   next: (data) => console.log("目前值", data),
//   complete: () => console.log("結束"),
// });

// const source$ = interval(1000)
//   .pipe(skip(3), take(3))
//   .subscribe((data) => console.log(data));

// interval(1000)
//   .pipe(skipLast(9))
//   .subscribe((data) => console.log(data));

// const click$ = fromEvent(document, "click");
// const source$ = interval(1000);

// source$.pipe(skipUntil(click$)).subscribe((data) => console.log(data));

// interval(1000)
//   .pipe(skipWhile((data) => data < 5))
//   .subscribe((data) => console.log(data));

//   {
//   next: (data: any) => {
//     console.log(data);
//   },
//   error: (err: any) => {
//     console.log(err);
//   },
//   complete: () => {
//     console.log();
//   },
// }
