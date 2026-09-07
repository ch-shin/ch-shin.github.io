---
layout: post
title: My Random Walk Through Research
tags:
  - research
  - reflection
---

It has been more than half a year since I started my postdoc, at the intersection of ML and cogsci. Since it’s another transition (or return to psych?) in my random walk through my research journey, and somehow it’s a week when I have to introduce myself three times—and I came to my office without realizing it was a holiday—I leave a short retrospective.

- I got interested in cognitive psychology in middle school because I wanted to figure out how I could study better. Korea has a culture that emphasizes the importance of education and considers it a standard path to success, and I spent most of my time playing online games, so I found study techniques from cognitive psychology—which I had to read about in some books for homework (yeah, I had to do my homework)—fascinating. I think I first learned about the Ebbinghaus forgetting curve and chunking method around that time. Getting better scores with the same amount of time sounded like a hack.

- Since I was interested in cogsci-adjacent fields but my portfolio for university entrance was not good enough for psychology, I applied to the philosophy department through early admissions track (수시). Unfortunately (?), the interview question was about political philosophy—if I remember correctly, it was about cosmopolitanism. (The interview was something like discussing the topic after reading a short article at the interview location.) I got rejected at light speed. Luckily, I got a good score on the CSAT (수능) and applied to the social science department, where SNU has its psychology major.

    In retrospect, it was lucky, since I found myself easily getting lost when I tried to find meaning in non-practical matters.

- More than half of the social science students majored in economics—we were supposed to choose our major in our second year—and many of them grew up in highly competitive environments, so I could absorb a tiny bit of their practicality. (I understood economics as a practical choice because it opens doors to diverse paths, not merely because it makes finding a job easier. But I was arrogant enough not to really think about why they chose economics, and majored in psychology in the end.)

- At some point, I felt disappointed with psychology, since most of the big experiments that capture intuition seemed to have already been done, while more modern experiments felt like they were being done with brittle methodologies. And while taking a philosophy of science course, I realized there had long been a discussion about whether psychology is a science or not.

- Regardless, I wanted to do alternative military service, so I needed to get a master’s degree in STEM, which was a requirement at the time. I spent some time (mainly taking courses) deciding between neuroscience and computer science, both of which are related to psychology, and I liked the clarity and practicality of computer science. So I double-majored in CS and think I took more computer science courses than psychology courses in the end.

- For my master’s degree, I contacted several AI labs at SNU and ended up joining Connected-X (the lab name was later changed to Applied Data Science Lab, then Deep Representation Learning Group, and recently my master’s advisor left SNU and now I am sad). At that point, I wanted to do something like AI + IoT because:
    - I liked the idea that intelligence could be embedded in everyday items.
    - Machine/sensor data was much simpler than vision/language, and model outputs could be easily translated into actionable items.
    - I thought language modeling would never be solved in my lifetime.

- During my master’s degree, I worked on NILM (Non-intrusive Load Monitoring), which was quite far from my previous interests. It is the problem of disaggregating household electricity usage (time series) into individual appliance electricity usage—they are summed up, but each appliance has a different electricity usage pattern, which can be used for disaggregation.

    The company we collaborated with was developing it as a product, along with electricity-measuring devices and smart meters, to help people manage their electricity use. I thought NILM was an interesting ML problem (because of the properties of the data) and could create some practical value—but perhaps as vision/language/human-modality AI problems started making breakthroughs with deep learning, it became far from AI researchers’ interests. (I guess people in the energy domain are still working on it.)

- I’m still curious about how the AI + IoT industry will evolve. Even if we can embed ChatGPT into a refrigerator, we probably wouldn’t do that because it’s not worth it. What would be an appropriate intelligence for each item?

- Of my three years of alternative military service, I worked at a national research institute for national defense for one year. I worked on AI policy a bit. I am not sure how much I can say here—it was actually a pretty good job, but I wanted to work on more technical things rather than national defense policy. So I moved to the startup I had collaborated with during my master’s and spent the remaining two years there.

- The company was pivoting from a smart-meter/NILM company to solar energy management, and honestly I am not sure how much I contributed to that company. I mostly just published my NILM work there, and I appreciate the company.

- I thought NILM was a problem that could largely be solved by collecting more labeled data (collecting total electricity usage and individual appliance data measured at the same time)—which was what one of my papers is about. This led me to think that many AI problems are actually about data (maybe scaling data?), which became the main theme I wanted to work on during my PhD.

- During my PhD, I mainly worked on the data side of AI: synthetic data generation (weak supervision), data curation, and inference-time adaptation to deal with distribution shifts. The main issue with data-centric AI as a PhD research area is that it’s unclear what exactly the academic contribution (i.e., finding new scientific facts) is. Everything is kind of case-by-case, and it’s hard to develop general principles.

    If I introduce my research area as data-centric AI, the other person typically responds with something like:

    - “What’s that?”
    - “What specific problem?”
    - “What isn’t data-centric AI? You are an idiot.”

    Well, I still think data-centric AI is cool, since it offers a larger search space with interpretable knobs for problem solving, especially in an era when synthetic data generation is not that hard. But the boundary of data-centric AI is somewhat unclear, and the domain is probably too broad—so putting “data-centric AI” as my research area is probably a bad idea (and I still do that).

- Meanwhile, in retrospect, my PhD did not go that smoothly:
    - COVID happened in the year I entered, and my first semester was entirely remote, while my second semester was almost entirely remote. I moved to the US during my second semester. Thanks to that, I barely know many of my cohort students.
    - The professor I wanted to work with at the beginning of my PhD left the university during my first semester, and I spent most of my first PhD year without an advisor.
    - I wanted to study more math, mainly because of my intellectual vanity, and spent too much time studying math unrelated to my research. I think it at least taught me that I am not smart enough to study math.
    - It became an era when access to GPU resources was heavily correlated with research productivity, while our school/group didn’t have many GPUs. (I think the situation is getting better.)

    But I appreciate that I was able to graduate without any major trouble. Five and a half years is a good amount of time for something to go seriously wrong. I just appreciate my PhD advisor, group members, and friends.

- Now I am back on the more cogsci side (though I think I am already heavily contaminated by the cargo-cult culture of AI research), and actually I’ve found that it’s a good time to come back:
    - Many cogsci questions can be studied in AI models as well, as simulations of humans (of course, the gap is huge), and now they also have practical value, since LLMs are increasingly acting as agents and involved in decisions and actions in the world.
    - LLMs are also black boxes, like the human mind, and psychologists have always struggled to evaluate and interpret specific aspects of the human mind. They have developed some muscles (or perspectives) for that, and those may be useful for frontier AI models as well.
    - Cognitive model development and hypothesis validation are getting much faster with the help of AI.

- Still, I am not sure how I should brand myself on the job market, since my research trajectory has wandered widely, though I believe it was at least a continuous path. So, for now, I am trying to boost my ego (back) as a researcher by writing blog posts as the first step.
