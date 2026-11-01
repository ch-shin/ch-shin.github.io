---
layout: post
title: "Industry-ization of the CS PhD"
---

**Caveat:** This essay was heavily bootstrapped with LLM
assistance from my rather fragmented notes and personal reflections. The
underlying observations and opinions are mine. I agree that LLM writing sucks, but it's still better than my raw fragmented thoughts.

Recently, I read two thoughtful essays about pursuing a PhD in the age
of AI: [Phillip Isola's *A PhD in the Age of
AI*](https://web.mit.edu/phillipi/www/writing/PhD-in-age-of-AI.html) and
[Sharon Li's *Time in the
Chaos*](https://pages.cs.wisc.edu/~sharonli/time-in-the-chaos.html?v=13).

Both reflect on the changing nature of research and what it means to pursue an academic career when AI is becoming increasingly capable of doing research itself. I agree with much of what they say, particularly about the importance of developing independent judgment and learning how to think deeply about problems.

Along similar lines, I've been thinking about how the CS PhD itself has changed over the years, and whether we should reconsider what it is actually training students to do.

I finished my PhD in computer science last year, and looking back, the experience was quite different from the traditional picture of doctoral education I had in mind when I started.

Some of these changes predate the recent AI boom. Others may accelerate dramatically because of it.

## Every year felt like another job market

One of the things I disliked most during my PhD was that every year felt
like another job market.

Not the academic job market that comes after graduation, but the annual
competition for industry research internships.

Internships are technically optional. Nobody forces you to apply. But in
machine learning, there are many reasons to do so.

First, resources. Industry labs often have access to substantially more
computing resources than universities. An internship can be an
opportunity to conduct experiments that would otherwise be difficult or
impossible.

Second, future opportunities. Even if you want to pursue an academic
career, it is difficult to know whether you will still want that five
years later. Internships help build professional networks and preserve
the option of joining industry after graduation.

Third, money. This depends heavily on the institution and company, but
in my case, internship compensation was roughly three to four times my
PhD stipend.

And finally, peer pressure. When many of your friends are applying for
internships, receiving offers, and working at prestigious research labs,
it is difficult not to feel that you should be doing the same.

None of these reasons is particularly irrational. In fact, internships
can be excellent experiences. You can meet awesome researchers, learn
how companies operate, and work on interesting problems.

But the cumulative effect is worth considering.

A typical internship lasts around three months. If a student completes
two to four internships during a five-year PhD, that amounts to roughly
10--20% of the entire program. This doesn't even include the time spent preparing applications, interviewing, or planning research around internship schedules.

Of course, internship research can contribute directly to a
dissertation. The time is not necessarily lost.

Still, I sometimes wondered why a program supposedly designed to train
independent researchers had become so closely intertwined with a
recurring industry recruiting cycle.

Each internship decision made sense individually. But was the resulting
system necessarily good for doctoral education?

## From intellectual apprenticeship to research production

My impression of a traditional CS PhD was relatively straightforward.

You would spend the first few years developing a strong foundation in
mathematics, algorithms, systems, or other relevant areas. You would
pass qualifying examinations, identify a research direction, and spend
several years investigating a relatively coherent set of questions.

Eventually, you would write a dissertation that represented a sustained
intellectual contribution.

Of course, this is an idealized picture. PhD students have always
changed research directions, collaborated with industry, and assembled
dissertations from multiple papers.

But I think the incentives have shifted, particularly in machine
learning.

Today, students are often encouraged to begin publishing as early as
possible. Coursework that does not directly contribute to research can
feel like a distraction. Qualifying examinations may consist primarily
of presenting existing research rather than demonstrating broad
foundational knowledge.

Research directions can also change rapidly. A topic that attracts
considerable attention one year may become much less fashionable the
next.

Meanwhile, students have strong incentives to work on problems that can
produce publishable results within relatively short timeframes, attract
attention from the research community, or lead to internship
opportunities.

The dissertation then becomes, in some cases, a retrospective attempt to connect several projects completed over five or six years.

I don't think this necessarily means that today's PhD students are less capable or that their research is less meaningful. In fact, I believe that the average PhD student today is substantially more productive than their counterpart a decade or two ago, however we choose to measure productivity.

Rather, I think this reflects a shift in what doctoral training emphasizes: from developing independent scientists toward producing researchers who can contribute effectively to an increasingly industry-driven research ecosystem.

These goals overlap, but they are not identical. Learning to produce research papers efficiently is valuable, but so is learning to identify important problems and pursue them independently.

The difficulty is that the former is much easier to measure.

## Industry is already shaping academia

I don't believe there should be a strict boundary between industry and
academia.

Industry research has contributed enormously to computer science, and
collaboration between the two can be beneficial. Many important research
questions arise from practical problems, and universities do not have a
monopoly on scientific curiosity.

Still, it seems difficult to deny that industry has gained substantial
influence over the direction of academic AI research.

The most obvious factor is computing resources.

When progress in a research area depends heavily on access to
large-scale compute, organizations that control those resources
naturally gain influence over which questions can be investigated.

But the influence goes beyond compute.

Industry labs shape research agendas through the problems they
prioritize, the benchmarks and models they release, the researchers they
hire, and the compensation they offer.

Students respond to these incentives. Advisors respond to them too.
Departments adapt their hiring priorities, and research communities
gradually reorganize around emerging opportunities.

None of this requires direct intervention from companies.

The incentives are sufficient.

To some extent, the modern machine learning PhD has become a hybrid
institution: formally an academic degree, but increasingly integrated
into the industrial research labor market.

This makes me wonder why students should pursue a PhD rather than simply
join industry.

There are still good reasons. Many industrial research positions require
advanced research experience, and a PhD provides an opportunity to
develop it. Entry-level hiring has also become more challenging in parts
of the technology industry.

But if a substantial portion of doctoral training is already oriented
toward industry research, the distinction between academic education and
professional training becomes less clear.

And AI may make that distinction even more complicated.

## AI is automating what we train students to do

The growing influence of industry on doctoral education began well before the recent
wave of generative AI.

But AI introduces a different challenge.

Much of doctoral training traditionally involves learning how to perform
research tasks: reading literature, implementing methods, designing
experiments, analyzing results, and writing papers.

Increasingly capable AI agents can already assist with many of these
activities. Their reliability varies considerably, and fully autonomous
research remains difficult. Nevertheless, the direction of progress is
hard to ignore.

As AI becomes capable of performing more of the tasks through which students traditionally learn to conduct research, we may need to rethink what doctoral training should emphasize.

One common argument is that students should focus less on execution and more on scientific judgment. I agree to some extent, but I'm not convinced that judgment can be separated so easily from execution.

Consider programming.

If an AI agent can implement an application from a natural-language
description, why should students spend time learning how to program?

One reason is that understanding programming helps us evaluate what the
agent has produced. Without sufficient technical knowledge, it is
difficult to recognize subtle errors, understand architectural
tradeoffs, or determine whether the implementation actually satisfies
the intended requirements.

Another reason is that knowledge changes our understanding of what we can do.

Suppose you ask an AI agent to "build an app that makes money." It might generate a perfectly functional app, but that doesn't mean anyone will actually use it, let alone pay for it. Without some understanding of software engineering, user needs, and technical possibilities, you may not even know what to ask for.

At that point, prompting an AI agent is not so different from making a wish at a wishing well.
Technical knowledge provides a map of the possibility space. It helps us understand what is feasible, formulate better questions, and recognize opportunities that would otherwise remain invisible.

I think the same applies to scientific research.

Understanding how experiments work is important even if an agent can run
them. Understanding statistical inference is important even if an agent
can perform the calculations. And understanding a research field deeply
is important even if an agent can summarize thousands of papers.

But this argument has a limitation.

As AI systems become more capable, they may also become better at
evaluating experiments, identifying promising research directions, and
recognizing methodological weaknesses.

We should not simply assume that human judgment will remain the final
bottleneck.

The more interesting educational question may be how much direct
experience is necessary to develop meaningful understanding when
increasingly sophisticated tools can perform the underlying tasks.

We have encountered versions of this question before with calculators,
compilers, and other technologies.

But AI may force us to revisit it across a much broader range of
intellectual activities.

## What can universities still offer?

If knowledge is increasingly accessible and research execution becomes
cheaper, what is the distinctive value of doctoral education?

One answer, I think, is feedback.

A university is not merely a place where students acquire information.
It is also an institution where researchers are expected to help other
researchers develop.

An advisor is supposed to provide feedback, challenge assumptions,
suggest research directions, and help students become independent.

Of course, the quality of advising varies enormously. Some students
receive excellent mentorship, while others receive very little. The
formal expectation does not guarantee that the relationship works well.

Nevertheless, this kind of sustained intellectual feedback is an
important part of doctoral education.

Can LLMs provide similar feedback?

To some extent, yes. I already find them useful for discussing ideas,
identifying weaknesses in arguments, and improving writing.

But I have also noticed an interesting limitation: LLMs can be
remarkably good at nitpicking.

Ask a model to criticize a paper, and it can often produce a long list
of plausible concerns. Some are important, but many are minor, generic,
or not particularly relevant.

I suspect this partly reflects how these systems are trained and
evaluated. Generating a plausible criticism is easier than determining
whether that criticism deserves attention.

A good advisor does more than identify potential problems.

They help students distinguish important concerns from distractions.
They recognize when an unconventional idea deserves further exploration,
even when the immediate results are disappointing. They provide context
about the research community and help students develop confidence in
their own judgment.

They also have a continuing relationship with the student. They can
observe intellectual growth over several years and adjust their guidance
accordingly.

These are not necessarily capabilities that AI can never acquire.

But they suggest that the value of a university may lie increasingly in
structured feedback, mentorship, research communities, and institutional
accountability rather than simply providing access to knowledge or
technical training.

Whether these functions require the current structure of a five- or
six-year PhD is another question.

## What might the PhD become?

I would not be surprised if the structure of doctoral education changed
substantially over the next decade.

One possibility is that PhD programs become shorter.

If AI tools make literature reviews, implementation, experimentation,
and writing significantly more efficient, students may be able to
develop and demonstrate research competence in less time.

Of course, faster execution does not necessarily mean faster
intellectual development. Learning how to identify important questions,
develop intuition, and exercise independent judgment may still require
years of experience.

But the current duration and structure of doctoral programs are not laws
of nature.

Another possibility is that doctoral education becomes more closely
integrated with industry.

This is already happening through internships, joint research projects,
industry-funded laboratories, and researchers holding positions across
universities and companies.

We may see more formal arrangements in which students move between
academic and industrial environments, or degree programs designed around
sustained collaboration between the two.

A more radical possibility is that the distinction between
undergraduate, master's, and doctoral education changes.

If students can acquire advanced technical skills more quickly with AI
assistance, some forms of research training might become integrated into
earlier stages of education. Other forms of specialized training might
take place outside traditional degree programs entirely.

I am less certain about whether universities themselves will lose their
importance.

Universities do more than produce research. They educate students,
evaluate competence, provide credentials, maintain research communities,
and support intellectual activities that may not have immediate
commercial value.

These functions are not necessarily easy to replace, even if AI becomes
capable of performing much of the underlying intellectual work.

In particular, society still needs institutions that can evaluate
whether someone has genuinely developed expertise, rather than merely
produced convincing outputs with automated tools.

Then again, academia already struggles with its own forms of reward
hacking: publication counts, benchmark optimization, citation
incentives, and prestige-driven evaluation.

AI may make these problems worse.

Perhaps universities will survive not because they are immune to
automation or distorted incentives, but because building a credible
alternative institution for education, evaluation, and research is
harder than automating individual research tasks.
