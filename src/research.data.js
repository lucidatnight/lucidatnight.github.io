/* ── research: what people are actually finding out about dreams ──────────
   Issues, newest first. The view renders whichever one is open and lists the
   rest, so adding issue 02 means adding an object here and nothing else.

   FOUR RULES FOR EDITING THIS FILE.

   1. Every number comes from a named, linked source. Not from memory, not
      from another site that didn't cite anyone. If there is no link, the
      number does not go in.

   2. Every study gets a "what it does not show". That paragraph is the
      reason anyone will believe the next issue, and no one else writing
      about dreams online bothers with it. It is the product.

   3. No interpretation. Nothing about what a dream "means". Same rule as
      dreams.data.js and for the same reason.

   4. Nothing here may touch a detail Lucid is testing blind. This page is
      published to everyone at once, so one sentence about the inside of the
      mall ends that evidence line permanently. If you are unsure whether
      something counts as place material, it does. Write about something else.

   The strings carry deliberate markup (<b>, <em>, <a>) and are author-written,
   never user input, so the view inserts them without escaping. Do not put
   anything from the database in here. */

var ISSUES = [
  {
    n: 1,
    month: 'September 2026',
    lead: 'What people are actually finding out about dreams. One study explained '
        + 'plainly, one fact worth knowing, and the places to go and read for '
        + 'yourself.',
    blocks: [
      { k: 'h', t: 'They cued people to dream about puzzles, and the puzzles got solved' },

      { k: 'p', t: 'In February this year a team led by Karen Konkoly, with Ken Paller, '
        + 'published something in <em>Neuroscience of Consciousness</em> that I have not '
        + 'stopped thinking about.' },

      { k: 'p', t: 'Twenty people with lucid dreaming experience were given brain-teasers '
        + 'to work on, three minutes each. Every puzzle had its own soundtrack playing in '
        + 'the background. Most went unsolved, which was the point.' },

      { k: 'p', t: 'Then they slept. Once they were in REM sleep, the researchers quietly '
        + 'played back the soundtracks from half of the puzzles nobody had cracked. The '
        + 'technique is called targeted memory reactivation &mdash; you use a sound to '
        + 'nudge one specific memory while a person is asleep.' },

      { k: 'p', t: 'Three quarters of them then had dreams with pieces of those puzzles in '
        + 'them. And here is the part that matters: the puzzles that made it into someone’s '
        + 'dream were solved <b>42% of the time</b> the next morning, against <b>17%</b> for '
        + 'the ones that did not. For the sound-cued puzzles specifically, solving went from '
        + '<b>20% to 40%</b>.' },

      { k: 'fact', t: '<b>What it does not show.</b> The researchers say this themselves and '
        + 'I would rather repeat it than skip it: people may simply have been more curious '
        + 'about certain puzzles, and that curiosity could be what made them both dream about '
        + 'it <em>and</em> solve it. The study does not prove that dreaming about a problem is '
        + 'what solves it. It shows the two travel together, and that you can steer which '
        + 'problems turn up.' },

      { k: 'p', t: 'That is still remarkable. Somebody played a sound at a sleeping person '
        + 'and changed what they dreamed about.' },

      { k: 'src', links: [
        { label: 'The paper', url: 'https://academic.oup.com/nc/article/2026/1/niaf067/8456489' },
        { label: 'Northwestern’s write-up', url: 'https://news.northwestern.edu/stories/2026/02/dream-engineering-can-help-solve-puzzling-questions' }
      ] },

      { k: 'h', t: 'The one that started it' },

      { k: 'p', t: 'If that sounds impossible, it follows from something stranger. In 2021 '
        + 'the same lead researcher published a study in <em>Current Biology</em> where '
        + 'experimenters held a conversation with people who were asleep and dreaming.' },

      { k: 'p', t: 'Thirty-six participants across four labs in four countries &mdash; '
        + 'Northwestern in the US, Sorbonne in France, Osnabr&uuml;ck in Germany, Radboud in '
        + 'the Netherlands. Lucid dreamers answered questions from inside the dream by moving '
        + 'their eyes or twitching facial muscles. They followed instructions. They answered '
        + 'yes-or-no questions. They did simple arithmetic.' },

      { k: 'p', t: '<b>Four separate labs, working independently, got a reply out of a '
        + 'sleeping person.</b>' },

      { k: 'p', t: 'I will say plainly why this one matters to me. Lucid has a key you can '
        + 'trade inside a dream, and I have no idea whether it will ever produce anything. '
        + 'But the idea that something can be carried across that boundary is not mine and '
        + 'it is not mystical. It is a research line with four labs on it.' },

      { k: 'src', links: [
        { label: 'The paper', url: 'https://www.cell.com/current-biology/fulltext/S0960-9822(21)00059-2' },
        { label: 'Plain-English version', url: 'https://www.sciencedaily.com/releases/2021/02/210218114018.htm' }
      ] },

      { k: 'h', t: 'Fact of the month' },

      { k: 'p', t: '<b>People who grew up with black-and-white television report more '
        + 'black-and-white dreams.</b>' },

      { k: 'p', t: 'Eva Murzyn at the University of Dundee published this in '
        + '<em>Consciousness and Cognition</em> in 2008. Sixty people &mdash; thirty with a '
        + 'mean age of 64, thirty with a mean age of 21 &mdash; kept dream diaries and filled '
        + 'in questionnaires about the colour of their dreams over ten days.' },

      { k: 'p', t: 'The older group reported monochrome dreams <b>22%</b> of the time. The '
        + 'younger group, <b>4%</b>. The explanation offered is early media exposure: the '
        + 'screens you watched while your brain was forming leave a mark on what your dreams '
        + 'look like decades later.' },

      { k: 'fact', t: '<b>And here is the bit I like.</b> Murzyn is careful to say what the '
        + 'study cannot settle &mdash; whether those older participants genuinely dreamed in '
        + 'greyscale, or whether black-and-white media shaped what they <em>believed and '
        + 'remembered</em> about their own dreams. Nobody can get inside someone else’s '
        + 'dream to check. All you ever have is the report.' },

      { k: 'p', t: 'Which is the same problem this whole site runs into. When two strangers '
        + 'describe the same place, you cannot tell from the outside whether they saw the same '
        + 'thing or learned to describe it the same way. That is not a reason to stop looking. '
        + 'It is just the honest shape of the thing.' },

      { k: 'src', links: [
        { label: 'Research summary', url: 'https://www.bps.org.uk/research-digest/older-people-have-more-black-and-white-dreams' },
        { label: 'PubMed record', url: 'https://pubmed.ncbi.nlm.nih.gov/18845457/' }
      ] },

      { k: 'h', t: 'Where to go looking' },

      { k: 'p', t: '<b>The Sleep and Dream Database.</b> Directed by Kelly Bulkeley. Over '
        + '44,500 dream reports from more than 16,000 people, drawn from journals, surveys, '
        + 'historical records and psychological studies &mdash; free to search. You can look '
        + 'up a word across tens of thousands of dreams and see how often it appears, broken '
        + 'down by age and sex and more. If you have ever wondered whether your dream is '
        + 'unusual, this is a place that can genuinely tell you.' },

      { k: 'src', links: [
        { label: 'sleepanddreamdatabase.org', url: 'https://sleepanddreamdatabase.org/' }
      ] },

      { k: 'p', t: '<b>The International Association for the Study of Dreams.</b> A '
        + 'non-profit, international, multidisciplinary body that publishes the academic '
        + 'journal <em>Dreaming</em> &mdash; and unusually, it is open to the general public, '
        + 'not only academics. If you want to be in the room where this gets argued about, '
        + 'you can be.' },

      { k: 'src', links: [
        { label: 'asdreams.org', url: 'https://asdreams.org/' }
      ] },

      { k: 'h', t: 'Also happening' },

      { k: 'p', t: 'Ken Paller’s group has been recording brain activity from Buddhist '
        + 'practitioners in Bhutan who use lucid dreaming as a spiritual practice &mdash; '
        + 'people who have trained at this for a very long time without any of the equipment. '
        + 'Karen Konkoly has since moved to Cambridge. And Michelle Carr at Swansea has worked '
        + 'on a shortened induction protocol that compresses lucid dream training into the '
        + 'time it takes to fit the electrodes.' }
    ],
    footer: 'Every figure on this page is from the linked source. If I have got something '
          + 'wrong, tell me and I will correct it here rather than quietly delete it.'
  }
];
