import { from, map, partition } from "rxjs";
const studentScore = [
  {
    name: "小名",
    project: "國文",
    score: 60,
    isPass: true,
  },
  {
    name: "小華",
    project: "國文",
    score: 50,
    isPass: false,
  },
  {
    name: "小量",
    project: "國文",
    score: 10,
    isPass: false,
  },
];
const changeScore$ = from(studentScore).pipe(
  map((data) => ({
    ...data,
    score: Math.floor(Math.sqrt(data.score) * 10),
  })),
  map((data) => ({
    ...data,
    isPass: data.score >= 60 ? true : false,
  }))
);

const [pass$, fail$] = partition(changeScore$, (data) => data.score >= 60);
pass$.subscribe((data) =>
  console.log(`${data.name}${data.project}${data.score}及格`)
);
fail$.subscribe((data) =>
  console.log(`${data.name}${data.project}${data.score}不及格`)
);
