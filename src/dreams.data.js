/* ── the common dreams ───────────────────────────────────
   Twelve cards. Each one is a real finding or an honest admission that there
   is no finding, because the second kind is what makes the first kind worth
   reading. Every percentage here comes from a named study — none is rounded
   up, guessed at, or carried over from another site.

   Almost all of the prevalence numbers are from the Typical Dreams
   Questionnaire, which asks "have you ever dreamed of this". That is lifetime
   recognition, not how often it happens, and the page says so once at the top
   rather than hedging in every card.

   TWO RULES FOR EDITING THIS FILE.

   1. No dream interpretation. Not one line about what a dream "means". The
      entire internet already does that and does it badly, and the moment
      Lucid does it too there is no reason to come here instead of anywhere
      else.

   2. Nothing here may describe a detail Lucid is testing blind. The bathroom
      card in particular reports only what outside sources have published. If
      this page tells people what they are supposed to remember, every answer
      collected afterwards is worthless — and those answers are the only thing
      this site has that nobody else does.
*/
var DREAMS = [
  {
    id: 'chased',
    title: 'Being chased',
    img: 'chased',
    alt: 'An empty street at night, one streetlight, a long shadow cast from outside the frame.',
    stat: '81.5%',
    statNote: 'the most commonly reported dream of all',
    body: [
      'Of fifty-five dream themes put to 1,181 students, this one came top. Slightly more women than men report it — 83.1% against 77.7%.',
      'The best-known theory is that dreaming evolved as a rehearsal for danger, so the brain practises being hunted while it is safe to do so. It is a real theory, and it is contested rather than settled.',
      'Here is the odd part. When researchers stopped asking people what they remembered and started reading 9,796 logged dream reports, being chased made up only 11.1% of nightmares. Physical aggression came first at 48.6%. So being chased is the dream almost everyone has had at least once, and almost nobody is having tonight.'
    ],
    source: { label: 'Robert & Zadra, Sleep (2014)', url: 'https://academic.oup.com/sleep/article-abstract/37/2/409/2558975' }
  },
  {
    id: 'falling',
    title: 'Falling',
    img: 'falling',
    alt: 'Looking straight down a deep concrete stairwell into darkness.',
    stat: '73.8%',
    statNote: 'third most common, and no difference between men and women',
    body: [
      'You have probably been told this is the hypnic jerk — the twitch as you drop off. That explanation is repeated everywhere and has never actually been demonstrated. The Sleep Foundation says plainly that nobody knows for certain what causes hypnic jerks, and that the twitch may be a reaction to the falling image rather than its cause.',
      'Falling is also one of the themes people most overstate. Ranked by questionnaire it is near the top; counted in real dream diaries it turns up far less often than that suggests.',
      'It does track distress, weakly but measurably — unlike the teeth dream, which does not.'
    ],
    source: { label: 'Sleep Foundation on hypnic jerks', url: 'https://www.sleepfoundation.org/parasomnias/hypnic-jerks' }
  },
  {
    id: 'exam',
    title: 'The exam you did not study for',
    img: 'exam',
    alt: 'An empty examination hall, rows of desks, one blank sheet on each.',
    stat: '45.0%',
    statNote: 'women 48.1%, men 37.2%',
    body: [
      'The best study on this followed around 700 French medical students the night before the national entrance exam. Just under half dreamed about it, and the dreams were almost all disasters — arriving late, not understanding the questions, a pen that would not write.',
      'The students who dreamed about the exam scored higher. More exam dreams, better grades, in proportion. All five of the top scorers had dreamed about exam problems.',
      'Whether the dream went well or badly made no difference to the result. Only whether it happened at all.'
    ],
    source: { label: 'Arnulf et al., Consciousness and Cognition (2014)', url: 'https://pubmed.ncbi.nlm.nih.gov/25108280/' }
  },
  {
    id: 'flying',
    title: 'Flying',
    img: 'flying',
    alt: 'An aerial view at night over a sleeping town, streetlights glowing through thin cloud.',
    stat: '48.3%',
    statNote: 'men 58.1%, women 44.4% — one of the largest gaps of any theme',
    body: [
      'This is one of very few dreams anyone has managed to cause on purpose. Give people fifteen minutes of immersive flying in virtual reality before a nap, and flying dreams jump from 1.7% to 7.1%, peaking above 10% the following night.',
      'That points at vection — the illusion of moving when you are not — rather than at anything symbolic. Participants reported the sound of engines and the feel of wind in their dreams, not just the picture.',
      'Unusually for this list, it goes with good things. People who fly in their dreams tend to score lower on neuroticism and higher on openness.'
    ],
    source: { label: 'Picard-Deland et al. (2020), via Psychology Today', url: 'https://www.psychologytoday.com/us/blog/dream-factory/202009/flying-dreams-induced-virtual-reality' }
  },
  {
    id: 'paralysis',
    title: 'Unable to move or scream',
    img: 'paralysis',
    alt: 'A dark bedroom seen from the pillow, a blade of light under a partly open door.',
    stat: '7.6%',
    statNote: 'of the general population have had real sleep paralysis; 28.3% of students',
    body: [
      'Two different things get called this, and it is worth keeping them apart. Being frozen with fright in a dream is reported by 40.7% of people. Actual sleep paralysis — awake, aware, unable to move — is rarer, and it has something almost nothing else on this page has: a solid explanation.',
      'During REM sleep your body is paralysed so you do not act out your dreams. Sometimes waking arrives before the paralysis lifts, and for a few seconds or minutes you are conscious in a body that will not answer. The crushing weight on the chest that so many people describe is thought to come from REM breathing, which runs about 40% shallower than waking.',
      'More than a hundred cultures have their own name for it. In one study Egyptians reported it roughly twice as often as Danes, and averaged about nineteen episodes in a lifetime against six. Believing the cause was supernatural predicted more fear and longer episodes — the belief shapes the experience, not only the word for it.'
    ],
    source: { label: 'Sharpless & Barber, review of 36,533 participants', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11344621/' }
  },
  {
    id: 'teeth',
    title: 'Teeth falling out',
    img: 'teeth',
    alt: 'A single white tooth on the edge of a dark porcelain sink.',
    stat: '18.8%',
    statNote: 'but 39% in a Hong Kong sample — the gap is itself unexplained',
    body: [
      'Everyone will tell you this one is about anxiety. It has been tested, and it is not.',
      'In a study of 210 people, teeth dreams correlated with tension in the teeth and jaw on waking. They did not correlate with psychological distress at all. In the same dataset, falling and smothering dreams did.',
      'So the most famous "anxiety dream" of them all was the one theme in the study with no anxiety link, and the likeliest explanation is dull: something is going on in your jaw while you sleep, and your brain builds a picture out of it.'
    ],
    source: { label: 'Rozen & Soffer-Dudek, Frontiers in Psychology (2018)', url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2018.01812/full' }
  },
  {
    id: 'dead',
    title: 'Someone who died, alive again',
    img: 'dead',
    alt: 'A kitchen table in morning light, two cups set out, one chair pushed back.',
    stat: '38.4%',
    statNote: 'and 58% among people who have recently lost someone',
    body: [
      'Among 278 bereaved carers, well over half dreamed of the person they had lost. Around 60% said those dreams changed how their grief went.',
      'What they described most often was not a message or a warning. It was an ordinary memory, and the person appearing healthy — free of the illness that killed them.',
      'The reported effects were acceptance, comfort, and also sadness. The research treats these dreams as part of mourning. It does not treat them as contact, and neither does this page.'
    ],
    source: { label: 'Wright et al., Am J Hospice & Palliative Medicine (2014)', url: 'https://journals.sagepub.com/doi/10.1177/1049909113479201' }
  },
  {
    id: 'naked',
    title: 'Naked, or wrongly dressed, in public',
    img: 'naked',
    alt: 'An empty auditorium seen from the stage, one spotlight on bare boards.',
    stat: '32.6%',
    statNote: 'men 37.5%, women 30.6% — one of the few dreams men report more',
    body: [
      'Being nude and being inappropriately dressed are counted as two separate themes, and they come out almost exactly level at around a third of people each.',
      'They behave differently, though. Men report the nude version significantly more often, which runs against the usual pattern — women report more chase dreams, more fright, more exam failure.',
      'And that is all anyone can tell you. There is no mechanism, no experiment, no credible account of why this happens. It is one of the best-documented dreams in the world and one of the least explained.'
    ],
    source: { label: 'Nielsen et al., Dreaming 13(4) — the full questionnaire', url: 'https://dreamscience.ca/en/documents/publications/_2003_Nielsen_Reprint_D_13_211-235_TDQ.pdf' }
  },
  {
    id: 'room',
    title: 'A room in your house that should not exist',
    img: 'room',
    alt: 'A domestic hallway with a door standing open onto complete darkness.',
    stat: '32.3%',
    statNote: 'more common than dreaming your teeth fall out',
    body: [
      'A third of people have found a new room in a house they know. No gender difference, no age pattern anyone has established, and — like the last card — no explanation whatsoever. Search for research on it and you will find nothing but interpretation sites.',
      'What can be said is where dreams tend to be set. In the standard reference sample, well over half of women\'s dreams take place indoors, and around a third in familiar places. Only about one in ten happens somewhere unfamiliar.',
      'So the ordinary house is the normal setting for a dream. The extra room is what nobody can account for.'
    ],
    source: { label: 'Hall & Van de Castle setting norms, UC Santa Cruz', url: 'https://dreams.ucsc.edu/Norms/settings.html' }
  },
  {
    id: 'bathrooms',
    title: 'Bathrooms you cannot use',
    img: 'bathrooms',
    alt: 'A long, dim public bathroom, doors hanging broken off the stalls, water across the floor.',
    stat: '19.2%',
    statNote: 'women 21.4%, men 13.8%',
    body: [
      'The questionnaire wording is "unable to find, or embarrassed about using, a toilet", and about one person in five says yes.',
      'That is very nearly everything anyone can tell you. There is a single dedicated study of the theme, published in a dream research journal in 2011, and no established mechanism at all. The bodily-signal explanation that has been tested for teeth dreams has never been tested for this one — a full bladder is a reasonable guess, not a finding.',
      'Lucid asked about this one directly for a while. Everyone who made an account was asked what they remembered, before they had read a word of the site or seen anyone else\'s answer, and none of those answers were ever published. That question is closed now, and closed on purpose: the picture at the top of this card is a description, and a better one than any sentence, so anyone answering after today would only be describing our own image back to us. The answers that were given blind are the answers there are. Asking on past that point would produce numbers, not evidence.'
    ],
    source: { label: 'Nielsen et al., Dreaming 13(4)', url: 'https://dreamscience.ca/en/documents/publications/_2003_Nielsen_Reprint_D_13_211-235_TDQ.pdf' }
  },
  {
    id: 'corridors',
    title: 'Stairs and corridors that keep going',
    img: 'corridors',
    alt: 'An escalator rising out of frame into total darkness.',
    stat: 'no data',
    statNote: 'nobody has ever measured this one',
    body: [
      'The fifty-five item questionnaire behind almost every number on this page contains no item for stairs, lifts, escalators, corridors or hallways. There is no dream-science study of the theme. If you find a percentage quoted for it somewhere, it did not come from research.',
      'The nearest measured things are adjacent rather than the same: trying again and again to do something (53.5%), and arriving too late (59.5%).',
      'The looping-architecture version of this overlaps heavily with the liminal space and Backrooms imagery that has circulated online since about 2019 — which makes it very hard to tell an old dream from a recently learned way of describing one.'
    ],
    source: { label: 'The questionnaire itself, as evidence of the absence', url: 'https://dreamscience.ca/en/documents/publications/_2003_Nielsen_Reprint_D_13_211-235_TDQ.pdf' }
  },
  {
    id: 'mall',
    title: 'Mall World',
    img: 'mall',
    alt: 'A large dark building at night seen across an empty wet parking lot, every light inside off.',
    stat: 'not science',
    statNote: 'an internet phenomenon, and worth reading carefully',
    body: [
      'There is no peer-reviewed research on Mall World. A dream researcher at Johns Hopkins, Dylan Selterman, has said on the record that no scientific research backs any of the Mall World theories. That is the honest starting point.',
      'What is documented: a subreddit for it has existed since 2021. In October 2025 a Texas artist posted a hand-drawn map of her recurring mall dream to TikTok, it passed a million views, and the New York Times covered it within a fortnight.',
      'The explanations that do not require anything strange are strong. Once a description circulates, people incorporate it — into their dreams, and more importantly into how they remember and retell older ones. Malls are ordinary places almost everyone has been. American mall design was heavily standardised for thirty years, so a shared architectural memory is real without anything shared about the dreaming. And there is precedent: "This Man", the face thousands of people were sure they recognised from their dreams in 2008, turned out to be the deliberate invention of an Italian marketer.',
      'Which is exactly why Lucid asks before it tells. Agreement between people who were never given the description is the only kind that means anything, and it is the only kind this site counts.'
    ],
    source: { label: 'Association for Psychological Science', url: 'https://www.psychologicalscience.org/news/are-you-dreaming-of-a-mall-world-youre-not-alone.html' }
  }
];
