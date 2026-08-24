/* ============================================================
 *  四级听力真题库数据文件 papers.js
 *  ------------------------------------------------------------
 *  录入新真题：复制一份 paper 对象，改字段即可。
 *  字段说明见每项注释；"示例" 那套为占位演示，可删。
 *  录入完毕无需改 index.html，刷新即生效。
 * ============================================================ */

window.PAPERS = [

  /* ---------- 示例（占位演示，非真题，确认流程后可删） ---------- */
  {
    id: "demo-2024-06",
    year: 2024,
    session: "06",
    title: "2024年6月 · 大学英语四级听力（示例）",
    status: "sample",                       // sample=示例 | ready=已录入 | pending=待录入
    note: "这是占位演示，展示答题流程。换成真题后把 status 改 ready 即可。",
    media: {                                // 全卷音频源（可选，仅做总入口）
      type: "bilibili",
      bvid: "",                            // 填 BV 号，如 "BV1xx411x7xx"
      page: 1
    },
    sections: [
      {
        id: "secA",
        name: "Section A · 新闻报道 (News Report)",
        directions: "Directions: In this section, you will hear 3 news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D).",
        passages: [
          {
            id: "p1",
            label: "News Report 1",
            media: { type: "bilibili", bvid: "", page: 1, t: 0 },   // t=开始秒数
            transcript: "（此处粘贴该段听力原文，答题后展开。）",
            questions: [
              {
                no: 1,
                stem: "【示例题】What is the news report mainly about?",
                options: ["A) 占位选项一", "B) 占位选项二", "C) 占位选项三", "D) 占位选项四"],
                answer: "B"
              },
              {
                no: 2,
                stem: "【示例题】According to the report, what happened next?",
                options: ["A) 占位选项一", "B) 占位选项二", "C) 占位选项三", "D) 占位选项四"],
                answer: "C"
              }
            ]
          }
        ]
      },
      {
        id: "secB",
        name: "Section B · 长对话 (Long Conversation)",
        directions: "Directions: In this section, you will hear 2 long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once.",
        passages: [
          {
            id: "p1",
            label: "Conversation 1",
            media: { type: "bilibili", bvid: "", page: 1, t: 0 },
            transcript: "（原文待录入）",
            questions: [
              { no: 3, stem: "【示例题】题干占位", options: ["A) 占位","B) 占位","C) 占位","D) 占位"], answer: "A" }
            ]
          }
        ]
      },
      {
        id: "secC",
        name: "Section C · 短文篇章 (Passage)",
        directions: "Directions: In this section, you will hear 3 passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once.",
        passages: [
          {
            id: "p1",
            label: "Passage 1",
            media: { type: "bilibili", bvid: "", page: 1, t: 0 },
            transcript: "（原文待录入）",
            questions: [
              { no: 4, stem: "【示例题】题干占位", options: ["A) 占位","B) 占位","C) 占位","D) 占位"], answer: "D" }
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
