---
layout: post
math: true
title: "Writing as Sampling [WIP]"
tags:
  - WIP
---

These days, one of the biggest changes brought about by AI is in the writing process. Getting help from LLMs has become common practice for many people. But strong researchers I know mostly object to using LLMs in the writing process—at least until you have an initial draft—since writing is often interleaved with thinking. Beyond the fact that LLM writing is often pretty bad, they say it can get in the way of shaping and clarifying your thoughts. I know there has been a long-standing discussion in linguistics about whether language and thought are the same thing, but unfortunately, linguistics has remained elusive to me. So here are some more naive thoughts—linguists probably have a better perspective on this than I do.

I personally use LLMs heavily for writing and often think they write better than I do in some cases (and often not). I like viewing writing as a sampling process, so I wanted to write this down to clarify my thoughts.

Assuming you have some thoughts to begin with

Suppose you have an intention $$z$$ for what you want to write and want to encode it as a piece of writing, $$x$$. You could just sit down and write, producing $$x_1$$. I like to think of this as sampling one possible expression of $$z$$: even with the same intention, you could end up writing something different each time.

You might accept it if, for some distance metric $$d$$, $$d(x_1,z)\leq\epsilon$$. You know those times when you write something and actually hate it, or feel like you missed something? You can rewrite it as $$x_2$$, check how close it is to what you meant, and repeat until you get an $$x_k$$ such that $$d(x_k,z)\leq\epsilon$$. These samples aren’t independent, of course—each attempt builds on the previous ones and what you didn’t like about them. And perhaps for practical purposes, let’s define $$C_x=\sum_{i=1}^{k}c_i$$ as the total cost of writing it yourself, where $$c_i$$ is the cost of each attempt (mainly time).

(So I guess the main assumptions here are:

We have some intention for what we want to write—a meaning we want to represent—but it’s latent.
Writing is an iterative process that stops when the text is close enough to that latent intention.)

Now, we modern boys, instead of trying to write directly, write a prompt $$p_1$$ and sample a draft $$y_1\sim P_{\mathrm{LLM}}(\cdot\mid p_1)$$. We check whether $$d(y_1,z)\leq\epsilon$$, revise the prompt or ask for another version, and repeat until we get a satisfactory $$y_{k'}$$. Here, too, later attempts can build on earlier drafts and feedback. We’re still sampling possible expressions of what we mean, but now we steer the sampling through prompts. Then we can define $$C_y=\sum_{i=1}^{k'}c'_i$$, where $$c'_i$$ is the cost of each round of prompting, reading, and editing.

In this dumb model, a reasonable choice is to just use an LLM if $$C_y\leq C_x$$.

I think as LLMs progress and personalization gets better, $$C_y$$ will decrease significantly, and writing things yourself will probably become rare, like doing laundry without a washing machine—you might wash your clothes better yourself, but people are often satisfied with a washing machine’s results.

But this model neglects many things. I guess the strong researchers would raise the following criticisms:

The first assumption is clearly wrong—chains of thought generate new thoughts.
It neglects what you learn through writing and how writing helps you organize your thoughts, reducing the cost of writing in the future.

To deal with the first criticism, let’s consider a sequential model of latent intention $$z$$. We have some thought $$z_1$$ at the beginning and write $$x_1$$ to represent $$z_1$$. Then $$x_1$$ leads to $$z_2$$, and so on. To demonstrate this idea, I’ll stop here to generate $$z_2$$.
