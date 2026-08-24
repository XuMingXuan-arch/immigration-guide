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


  /* ---------- 2025年12月 第一套（已录入） ---------- */
{
  "id": "2025-12-1",
  "year": 2025,
  "session": "12",
  "title": "2025年12月四级听力（第一套）",
  "sections": [
    {
      "id": "secA",
      "name": "Section A · 新闻报道 (News Report)",
      "directions": "Directions: In this section, you will hear three news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
      "passages": [
        {
          "label": "News Report 1",
          "questions": [
            {
              "no": 1,
              "stem": "Where was the black cat found?",
              "options": [
                "A) At the gate of a grade school in Kent.",
                "B) Under the engine cover of a man's car.",
                "C) Inside the car of David King's neighbour.",
                "D) Outside the office of a charity foundation."
              ],
              "answer": "B"
            },
            {
              "no": 2,
              "stem": "What do we learn about the cat at the end of the news report?",
              "options": [
                "A) It got reunited with its owner.",
                "B) It was injured during the rescue.",
                "C) It was placed in the care of a U K charity.",
                "D) It became a pet of Mr. King's grandson."
              ],
              "answer": "A"
            }
          ],
          "transcript": "News report one. A terrified cat has survived a 5-mile round trip under the engine cover of a car on a school run. The black cat was found curled up under the engine cover of David King's car when he decided to do an oil check after dropping his grandson off at school in Kent. Mr. King's wife said her husband had come running in and was shouting for me to come have a look. We weren't even sure it was alive, so I gently pushed it with a stick to check it was breathing, and saw it was a terrified little cat. It reversed even further into the engine and was stuck. I tried to reach it, but it was too far down and there wasn't any way I could get it out. Following a rescue by U K charity Cats Protection, the four-year-old cat was later reunited with its owner, Mr. King's neighbor."
        },
        {
          "label": "News Report 2",
          "questions": [
            {
              "no": 3,
              "stem": "What will Fayetville witness in less than a month?",
              "options": [
                "A) The reunion of this year's Olympic gold medallists.",
                "B) The opening of the Special Olympics Spring Games.",
                "C) The first important political event in the next five years.",
                "D) The 100th anniversary celebration of Methodist University."
              ],
              "answer": "B"
            },
            {
              "no": 4,
              "stem": "What did Benjamin Kozik say is rewarding to see?",
              "options": [
                "A) Volunteers visit the Games' website to sign up.",
                "B) Children play in a fun tent and enjoy themselves fully.",
                "C) Organizers devote their time and energy to the Games.",
                "D) Athletes with special needs triumph in the Games."
              ],
              "answer": "D"
            }
          ],
          "transcript": "News report two. In less than a month, the Special Olympics spring games will make a return to Fayetville. The games are coming back for the first time in five years. The event will take place at Methodist University. Event organizer Benjamin Kozik says he's excited that athletes will get a chance to come back and demonstrate their abilities. Organizers expect about 100 athletes will come out to compete in Fayetville. They will have a variety of events to choose from, including running, throwing and jumping. There will also be a fun tent for children. Kozik said it's rewarding to see athletes with special needs triumph in the games. For anyone who wants to help make this year's games a massive success, there are still opportunities to volunteer for Fayetville's special Olympics. Sign up"
        },
        {
          "label": "News Report 3",
          "questions": [
            {
              "no": 5,
              "stem": "What has the German supermarket been ordered to do?",
              "options": [
                "A) Compensate for the Swiss manufacturer's loss.",
                "B) Change the wrapping of its commodities.",
                "C) Destroy its imitation chocolate rabbits.",
                "D) Defend itself in the country's commercial court."
              ],
              "answer": "C"
            },
            {
              "no": 6,
              "stem": "What did Switzerland's highest court suggest about the chocolate in question?",
              "options": [
                "A) It could be reused in other products.",
                "B) It could be resold cheaper to avoid waste.",
                "C) It could be reshaped into animals other than rabbits.",
                "D) It could be rewrapped and sold by the budget supermarket."
              ],
              "answer": "A"
            },
            {
              "no": 7,
              "stem": "Why did Switzerland's highest court overturn the commercial court's ruling?",
              "options": [
                "A) To be fair to the German supermarkets.",
                "B) To protect chocolate retailers' interests.",
                "C) To prevent consumers' possible confusion.",
                "D) To boost the growth of the chocolate industry."
              ],
              "answer": "D"
            }
          ],
          "transcript": "News report three. A German supermarket has been ordered to destroy its chocolate rabbits after it lost a court battle with a Swiss chocolate manufacturer. The Swiss firm had argued its gold wrapped chocolate rabbit deserved copyright protection from a similar product sold by the budget supermarket. Switzerland's highest court agreed and overturned a ruling last year by the country's commercial court that had sided with the supermarket. It ordered that all the imitation rabbits be destroyed, but suggested the chocolate needn't be wasted. It could be melted for use in other products. It said even though there are some differences between the two products, there was still the possibility of confusion for consumers. It said even though there are some differences between the two products, there was still the possibility of confusion for consumers. The Swiss manufacturer's rabbit has a red bow and bell while the German supermarket has a green bow and bell. The color of the wrapper is similar, as are the illustrations of the features. The chocolate company has been to court before to protect its popular chocolate treat. Last year, a German federal court said the shade of the gold wrapping was also protected."
        }
      ]
    },
    {
      "id": "secB",
      "name": "Section B · 长对话 (Long Conversation)",
      "directions": "Directions: In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
      "passages": [
        {
          "label": "Conversation 1",
          "questions": [
            {
              "no": 8,
              "stem": "What does the man request the woman to do?",
              "options": [
                "A) Pass a book to him.",
                "B) Make a vegetable dish.",
                "C) Return the handbook to him.",
                "D) Meet his sister's boyfriend."
              ],
              "answer": "A"
            },
            {
              "no": 9,
              "stem": "What does the woman say about eating vegetables only?",
              "options": [
                "A) It doesn't sound practical for her.",
                "B) It would do harm to one's muscles.",
                "C) It would reduce one's protein intake.",
                "D) It doesn't seem to be a balanced diet."
              ],
              "answer": "D"
            },
            {
              "no": 10,
              "stem": "Why does the boyfriend of the man's sister choose to be a vegetarian?",
              "options": [
                "A) To improve his health.",
                "B) To protect animal rights.",
                "C) To stick to his religious belief.",
                "D) To follow a trendy lifestyle."
              ],
              "answer": "B"
            },
            {
              "no": 11,
              "stem": "On what point does the man agree with the woman at the end of the conversation?",
              "options": [
                "A) The torture and distress dolphins suffer in parks.",
                "B) The urgency of joining an animal rights group.",
                "C) The gloomy environments animals are kept in.",
                "D) The necessity of having zoos and eating meat."
              ],
              "answer": "A"
            }
          ],
          "transcript": "Conversation 1. Can you please hand me that book over there? It has instructions for making a winter bean salad. My sister's boyfriend is coming over for dinner He's vegetarian, so I need to make a lot of vegetable dishes. He only eats vegetables, no meat? That doesn't sound like a very balanced diet. How can he get enough protein? What does he do to strengthen his muscles and all that? Apparently, that's no problem. He's explained this to me when we first met. He eats a variety of different vegetables and nuts, especially those with high amounts of protein. It sounds a bit difficult, but he's done his research, suppose What's his reasoning for being vegetarian? Is it his religion, health condition, or lifestyle? He's an animal activist. animals. He's always been very sensitive and sympathizes with animals. He's even written to his state senator about the torture of dolphins in sea parks. He says keeping animals in zoos and parks causes them great distress. That's a little gloomy, but I can understand that to a point. Not all zoos and animal parks have the most favorable conditions But without them, it just wouldn't be feasible to learn about animals and their environments. Besides, I don't think I could ever give up a good hot dog at a baseball game. Honestly, I agree, but just don't let him hear you say that. He's the spokesperson for his local animal rights group"
        },
        {
          "label": "Conversation 2",
          "questions": [
            {
              "no": 12,
              "stem": "What part of the T V program does the man say was interesting?",
              "options": [
                "A) The part about not eating on board the plane.",
                "B) The part about air travel in the past.",
                "C) The part about getting over jetlag.",
                "D) The part about avoiding sleeping on the plane."
              ],
              "answer": "D"
            },
            {
              "no": 13,
              "stem": "What does the man say he will do next time he flies a long distance?",
              "options": [
                "A) Try following the advice given by the expert on the show.",
                "B) Concentrate on reading articles recommended by experts.",
                "C) Have meals as usual to stay away from hunger.",
                "D) Take a nap to adjust to a new time zone."
              ],
              "answer": "C"
            },
            {
              "no": 14,
              "stem": "Why does the woman think she is lucky?",
              "options": [
                "A) She has been well treated when traveling.",
                "B) She does not have to worry about jetlag.",
                "C) She can spend a lot of time vacationing.",
                "D) She does not have any problem flying."
              ],
              "answer": "A"
            },
            {
              "no": 15,
              "stem": "Why does the woman think the problem of being afraid to fly deserves attention?",
              "options": [
                "A) It affects twenty-five percent of people.",
                "B) It has long been ignored by many experts.",
                "C) It impacts female travelers more seriously.",
                "D) It has caused heavy losses to many airlines."
              ],
              "answer": "B"
            }
          ],
          "transcript": "Conversation 2. Did you see that television program on air travel last night? Yes. The part about overcoming jet lag y was interesting I was surprised that the expert recommended not eating for the entire journey and avoiding sleeping on the plane. I was too, as I read an article on the subject in the past that suggested the opposite. It claimed that it was important not to miss meals, and that taking a nap on the plane was the best way to adjust to a new time zone. Well, the expert on the show did cite research supporting her recommendations, so I guess I'll give it a try next time+ fly a long distance. Jet lag is a big problem for me, and has been for the last few years, even though I never suffered from it before. Well, she did say that jet lag often becomes more of a problem after 40 So, I guess I'm lucky that I can still adjust to different time zones well. My problem is, I'm afraid to fly. I didn't know that. Actually, my mother is terrified of airplanes to the point where she can't even fly, so our family vacations were always by car or train I'm not as bad as that. I just get anxious before I fly and feel nervous the whole time we're in the air. Which is why I was hoping the television program would cover that topic more than it did. Yeah. That segment was too brief, especially as so many people have that problem She said 20% of people are afraid to fly. Actually, it was a quarter of people. So the problem really is widespread and deserves attention."
        }
      ]
    },
    {
      "id": "secC",
      "name": "Section C · 短文篇章 (Passage)",
      "directions": "Directions: In this section, you will hear three passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.",
      "passages": [
        {
          "label": "Passage 1",
          "questions": [
            {
              "no": 16,
              "stem": "What does the speaker think is the best way to get started in user experience design?",
              "options": [
                "A) Learning from skilled designers.",
                "B) Joining a 6-month training camp.",
                "C) Obtaining real-world experience.",
                "D) Anticipating actual challenges."
              ],
              "answer": "C"
            },
            {
              "no": 17,
              "stem": "What does the speaker say being effective requires?",
              "options": [
                "A) Core skills.",
                "B) Higher education.",
                "C) Capability.",
                "D) Adaptability."
              ],
              "answer": "D"
            },
            {
              "no": 18,
              "stem": "What can people do as long as they know their end goal and strive for it?",
              "options": [
                "A) Face challenges.",
                "B) Start anywhere.",
                "C) Pursue roles in teams.",
                "D) Follow their own path."
              ],
              "answer": "B"
            }
          ],
          "transcript": "Passage one to which my response is always that nothing can substitute real worldexperience Building the skills required of a user experience designer takes time, patience, and commitment. Higher education is a great way to equip yourself with some core skills, but it will not prepare you for actual challenges you'll face withclient work. In other words, being proficient with a design tool and a few methods doesn't make you a user experience designer. There simply isn't a one-size-fits-all process. Being effective requires adaptability, something you don't really learn in school, much less in a six-month training camp. It's gained through experience on the job and learning what's appropriate given the needs of the project. I found my way to user experience through graphic design and slowly over many different roles and experiences, that led me to become a user experience designer. It took time and commitment to continue to pursue roles within teams that I knew could teach and challenge me. That's not to say that I think my path is the only one. But once again, nothing can substitute real-world experience You can start anywhere. As long as you know your end goal and grow along the way. and you commit to actively pursuing opportunities to learn and grow along the way. and grow along the way. requires?"
        },
        {
          "label": "Passage 2",
          "questions": [
            {
              "no": 19,
              "stem": "Why did the school principal ask what needed to change?",
              "options": [
                "A) To allow students more freedom in their academic work.",
                "B) To enable teachers to interact more with their students.",
                "C) To engage students more in their learning.",
                "D) To respond actively to students' requests."
              ],
              "answer": "C"
            },
            {
              "no": 20,
              "stem": "What has flexible seating meant at the speaker's school?",
              "options": [
                "A) Rearranging most traditional chairs and desks.",
                "B) Adopting a variety of different seating options.",
                "C) Shifting from traditional teaching to task-based learning.",
                "D) Using new furniture to create a comfortable environment."
              ],
              "answer": "B"
            },
            {
              "no": 21,
              "stem": "What has flexible seating brought about at the speaker's school?",
              "options": [
                "A) A change to teachers' opinion of their students.",
                "B) A harmonious relationship among its students.",
                "C) A strengthened effect of its discipline.",
                "D) A win for all people involved."
              ],
              "answer": "C"
            }
          ],
          "transcript": "Passage two. When planning for this year, our principal asked what needed to change to engage students more in their learning. I responded in a whisper, flexible seating, thinking about our then current classroom It had rows of desks with blue chairs and name plates, reminding each student where they should be sitting. This began a journey to transform our practice and challenge the ways of learning for a group of year six students used to sitting in desks and rows for years. Flexible seating has been defined as movable furniture to create an engaging learning environment. It is a shift in practice from being teacher focused to student focused learning. For us, flexible seating has meant removing most of the traditional chairs and desks promote student engagement. The use of rows and their minimal adaptations to U-shape were traditionally intended to maximize on-task behavior and reduce distraction from the teacher. Teachers tend to still use this format because of eitherthe needtocontrol students or the belief that the teacher is the most important person in the room. Now, our students have a range of different seating options, including a floor desk, couches, stools, bean bags, and the traditional desk and chair. From our experience so far, flexible seating enhances student ownership of space and engagement in learning while reducing rates of student disengagement and disciplinary actions. It is a win for all concerned."
        },
        {
          "label": "Passage 3",
          "questions": [
            {
              "no": 22,
              "stem": "Why were dozens of British students sent home on Tuesday?",
              "options": [
                "A) They arrived late for their first day of school.",
                "B) They weren't informed of the school's updated rules.",
                "C) They answered their headteacher's email in an impolite way.",
                "D) They didn't wear the shoes required by the school's new policy."
              ],
              "answer": "D"
            },
            {
              "no": 23,
              "stem": "What can the price of school uniforms spark among families in financial difficulty?",
              "options": [
                "A) Panic.",
                "B) Anger.",
                "C) Disputes.",
                "D) Riots."
              ],
              "answer": "D"
            },
            {
              "no": 24,
              "stem": "What did the headteacher thinkof the school's newuniformrules?",
              "options": [
                "A) They rendered the school unique in the district.",
                "B) They enhanced the positive image of the school.",
                "C) They improved student behavior and performance.",
                "D) They strengthened the school's discipline and order."
              ],
              "answer": "C"
            },
            {
              "no": 25,
              "stem": "What did Lucinda May have to do to buy her child the correct pair of shoes?",
              "options": [
                "A) Tighten her monthly budget.",
                "B) Turn to her parents for help.",
                "C) Borrow £65 from her friend.",
                "D) Postpone paying her other bills."
              ],
              "answer": "B"
            }
          ],
          "transcript": "Passage three. Dozens of British students arriving for their first day of school on Tuesday were sent home over their shoes. About 30 students were turned away from Taverham High School in Norfolk, England. Head teacher, Dr. Roger Harris, confirmed that this was due to a change in the school's uniform policy. Harris, who became head teacher this year, said he notified parents of the updated rules in an email in June. The price of school uniforms can spark panic among families struggling with the high cost of living. Nearly all British schools have uniforms. They cost parents an average of 337 pounds per year for each secondary school child. According to the new rules, students of Taverham are required to wear smart blackshoes appropriate for the workplace. Harris held that strengthened rules around school uniforms improved student outcomes and behavior. But for some parents, the school's restrictions are an unnecessary burden As annual inflation climbs over 10%, many households are on tight budgets Private rental prices in Britain rose 3. 2% over the 12 months to July 2022. The largest jump since 2016. Soaring energy bills have made things worse. Lucinda May, mom of a Taverham student, said that she had to ask her parents for 65 pounds to buy her child the correct pair of shoes. May said that the school's uniform policy showed a lack of regard for parents dealing with the high cost of living"
        }
      ]
    }
  ],
  "status": "ready",
  "note": "题目选项来自 BV1JEREBsEQE，答案来自该视频描述，原文来自 BV1oP411X7gX 第5P。"
},

  /* ---------- 2025年场次（待录入） ---------- */
  { id: "2025-12-2", year: 2025, session: "12", title: "2025年12月四级听力（第二套）", status: "pending", sections: [] },
  { id: "2025-06-1", year: 2025, session: "06", title: "2025年6月四级听力（第一套）", status: "pending", sections: [] },
  { id: "2025-06-2", year: 2025, session: "06", title: "2025年6月四级听力（第二套）", status: "pending", sections: [] },

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
