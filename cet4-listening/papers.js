/* ============================================================
 *  四级听力真题库数据文件 papers.js
 *  ------------------------------------------------------------
 *  【分工】你只提供两样：
 *    1. 该套听力原文（文字稿）
 *    2. B站视频链接 / BV号（含每段起始时间，若整套一个视频）
 *  剩下的我来：从原文提取题干（录音会念题）→ 生成 A-D 选项
 *  → 根据原文内容推定答案 → 按下面结构填入 papers.js。
 *
 *  【听题方式】音频在 B 站放（每段给链接+起始秒，可一键打开，
 *  也可点"嵌入播放器"）；本网站负责：看题 → 答题 → 对答案 → 展开原文。
 *
 *  【字段说明】
 *    id       唯一标识，如 "2024-06"
 *    year     年份
 *    session  场次 "06" | "12"（2020 特殊场用 "09"/"12b"）
 *    title    显示标题
 *    status   sample=示例 | ready=已录入 | pending=待录入
 *    note     备注（可选）
 *    sections 数组：Section A 新闻 / B 长对话 / C 短文
 *      passages 数组：每段一个对象
 *        media    音频源：{ type:"bilibili", bvid:"BV...", page:1, t:起始秒 }
 *        transcript 听力原文
 *        questions 数组：每题 { no, stem, options:[4个], answer:"A-D" }
 *
 *  录入完毕无需改 index.html，刷新即生效。
 * ============================================================ */

window.PAPERS = [

  /* ---------- 演示样例（自编内容，非真题，展示完整流程） ---------- */
  {
    id: "demo-sample",
    year: 2026,
    session: "00",
    title: "演示样例 · 流程体验（非真题）",
    status: "sample",
    note: "这是自编的演示卷，让你看看“看题 → 答题 → 对答案 → 展开原文”的完整流程。换真题后 status 改 ready。",
    sections: [
      {
        id: "secA",
        name: "Section A · 新闻报道 (News Report)",
        directions: "Directions: In this section, you will hear 3 news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D).",
        passages: [
          {
            id: "p1",
            label: "News Report 1",
            media: { type: "bilibili", bvid: "", page: 1, t: 0 },
            transcript: "A new study shows that people who walk at least thirty minutes a day are less likely to develop heart disease. Researchers followed ten thousand adults for five years. Those who walked regularly had a twenty percent lower risk. Experts say even a short daily walk can make a difference.",
            questions: [
              {
                no: 1,
                stem: "【演示题】What does the new study show?",
                options: [
                  "A) Walking every day helps people sleep better.",
                  "B) Daily walking lowers the risk of heart disease.",
                  "C) Running is better than walking for health.",
                  "D) Heart disease is the most common illness."
                ],
                answer: "B"
              },
              {
                no: 2,
                stem: "【演示题】How many adults did researchers follow?",
                options: [
                  "A) Five thousand.",
                  "B) Ten thousand.",
                  "C) Twenty thousand.",
                  "D) Fifty thousand."
                ],
                answer: "B"
              }
            ]
          }
        ]
      }
    ]
  },

  /* ---------- 真题场次（待录入） ---------- */
  { id: "2024-12", year: 2024, session: "12", title: "2024年12月四级听力", status: "pending", sections: [] },
  { id: "2024-06", year: 2024, session: "06", title: "2024年6月四级听力（第1/2/3套）", status: "pending", sections: [] },
  { id: "2023-12", year: 2023, session: "12", title: "2023年12月四级听力", status: "pending", sections: [] },
  { id: "2023-06", year: 2023, session: "06", title: "2023年6月四级听力（共3套）", status: "pending", sections: [] },
  { id: "2022-12", year: 2022, session: "12", title: "2022年12月四级听力", status: "pending", sections: [] },
  { id: "2022-06", year: 2022, session: "06", title: "2022年6月四级听力（共3套）", status: "pending", sections: [] },
  { id: "2021-12", year: 2021, session: "12", title: "2021年12月四级听力", status: "pending", sections: [] },
  { id: "2021-06", year: 2021, session: "06", title: "2021年6月四级听力（共3套）", status: "pending", sections: [] },
  { id: "2020-12", year: 2020, session: "12", title: "2020年12月四级听力", status: "pending", sections: [] },
  { id: "2020-09", year: 2020, session: "09", title: "2020年9月四级听力（延期考）", status: "pending", sections: [] },
  { id: "2020-12b", year: 2020, session: "12b", title: "2020年12月四级听力（二批）", status: "pending", sections: [] },
  { id: "2019-12", year: 2019, session: "12", title: "2019年12月四级听力", status: "pending", sections: [] },
  { id: "2019-06", year: 2019, session: "06", title: "2019年6月四级听力（共2套）", status: "pending", sections: [] },
  { id: "2018-12", year: 2018, session: "12", title: "2018年12月四级听力", status: "pending", sections: [] },
  { id: "2018-06", year: 2018, session: "06", title: "2018年6月四级听力（共2套）", status: "pending", sections: [] },
  { id: "2017-12", year: 2017, session: "12", title: "2017年12月四级听力", status: "pending", sections: [] },
  { id: "2017-06", year: 2017, session: "06", title: "2017年6月四级听力（共2套）", status: "pending", sections: [] },
  { id: "2016-12", year: 2016, session: "12", title: "2016年12月四级听力", status: "pending", sections: [] },
  { id: "2016-06", year: 2016, session: "06", title: "2016年6月四级听力（改革后首考·新闻题型）", status: "pending", sections: [] },
  { id: "2015-12", year: 2015, session: "12", title: "2015年12月四级听力（旧题型·含短对话/听写）", status: "pending", sections: [] },
  { id: "2015-06", year: 2015, session: "06", title: "2015年6月四级听力（旧题型·含短对话/听写）", status: "pending", sections: [] }
];

/* ---- 工具：根据状态返回中文 ---- */
window.PAPER_STATUS = {
  sample:  { tag: "示例",   cls: "tag-sample"  },
  ready:   { tag: "已录入", cls: "tag-ready"   },
  pending: { tag: "待录入", cls: "tag-pending" }
};
