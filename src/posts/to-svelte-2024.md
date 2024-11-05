---
title: 'To Svelte'
date: '2024-7-13'
tags:
  - webdev
---

Recently I rewrote my web app ([LectCheck](https://lectcheck.vercel.app)) and
personal website (yes, this website), transitioning between two different
frontend frameworks, from [NextJS](https://nextjs.org/) to
[SvelteKit](https://kit.svelte.dev/), and I learnt a lot throughout the
process.

Let me be clear; NextJS was such a great fullstack framework to work with.
Amazing documentation as well as a supportive community. It was the first
frontend tech I actually enjoyed creating web apps with.

I still remember, back when I was introduced to Svelte, I gave it a try and it
was so confusing and unattractive. One component per file? load functions?
Totally different from how I approached web apps in NextJS.

But, the more I use it, the more I was falling in love with the simplicity and
organization. Just like its motto, “it’s just like writing HTML”. I don’t have
to think about abstractions, data forms, parsing. It’s as simple as attaching a
`<form action="/login"/>` (not to scale) and we have login! Not to mention the
concept of stores make transferring the form state super easy. “Form submission
failed? Here’s an if block.”

Another feature I didn’t realize was amazing at the time was the separation
between server and nonserver logic into two different files with a clear marker
(`page.server.ts` vs `page.ts`). This was such a relief when implementing all
sorts of backend logic for LectCheck. I knew exactly what happens on the
server, and where a database request should live. It’s so obvious.

The next thing I’m loving is the fact that view-transitions work out of the
box! It’s crazy that something like that needs to be said, but the large
ecosystem of NextJS still [hasn’t figured it
out](https://github.com/vercel/next.js/discussions/46300) yet _smh_. Fade and
morph transitions, all the jazz. I’m still bummed that Firefox (my daily)
hadn’t implemented it yet, so I guess it’s not all sunshine.

I guess that’s the bulk of it. I really loved NextJS but I just adore
SvelteKit; each with their own worlds, systems and logic/approach. And hey, I
might meet another framework and re-rewrite this site into oblivion. ‘Til next
time then.
