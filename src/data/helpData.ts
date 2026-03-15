import { HelpSection, HelpArticle } from "@/types/help";

// ─── SECTIONS ────────────────────────────────────────────────
export const initialSections: HelpSection[] = [
  // Top-level
  { id: "introduction", title: "Introduction", slug: "introduction", icon: "BookOpen", parentId: null, sortOrder: -1, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "getting-started", title: "Getting Started", slug: "getting-started", icon: "Rocket", parentId: null, sortOrder: 0, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "writing-jokes", title: "Writing Jokes", slug: "writing-jokes", icon: "Pencil", parentId: null, sortOrder: 1, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "the-builder", title: "The Builder", slug: "the-builder", icon: "Wrench", parentId: null, sortOrder: 2, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "managing-material", title: "Managing Your Material", slug: "managing-your-material", icon: "FolderOpen", parentId: null, sortOrder: 3, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "voice-profiles", title: "Voice Profiles", slug: "voice-profiles", icon: "Mic", parentId: null, sortOrder: 4, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "account-billing", title: "Account & Billing", slug: "account-billing", icon: "CreditCard", parentId: null, sortOrder: 5, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "settings", title: "Settings", slug: "settings", icon: "Settings", parentId: null, sortOrder: 6, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
  { id: "troubleshooting", title: "Troubleshooting", slug: "troubleshooting", icon: "AlertCircle", parentId: null, sortOrder: 7, isPublished: true, createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z" },
];

// ─── ARTICLES ────────────────────────────────────────────────

export const initialArticles: HelpArticle[] = [

  // ━━━ GETTING STARTED ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "gs-1", title: "What Is Joke Slapper?", slug: "what-is-joke-slapper",
    summary: "A quick overview of what Joke Slapper does and who it's for.",
    sectionId: "introduction", sortOrder: 0, isPublished: true, isFeatured: true, isPopular: true,
    createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## What Is Joke Slapper?

Joke Slapper is a creative tool that helps comedians, writers, and creators generate, refine, and organize comedy material. Think of it as your always-available writing partner — one that never runs out of ideas.

### Who Is It For?

Joke Slapper is built for anyone who writes comedy:

- **Stand-up comedians** looking for fresh angles on topics
- **Content creators** who need punchy one-liners for social media
- **Writers** working on sketches, scripts, or humorous essays
- **Comedy hobbyists** who just want to have fun

### What Can You Do With It?

Here's a quick rundown of the main features:

1. **Generate jokes** from topics and prompts you provide
2. **Refine and edit** results until they feel like yours
3. **Use the Builder** to expand premises into full jokes
4. **Save and organize** your material in folders
5. **Set Voice Profiles** to match your personal comedy style

> **Tip:** You don't need to be a professional comedian to use Joke Slapper. If you've ever thought "that would make a funny joke," this tool is for you.

### How Is It Different From ChatGPT?

Joke Slapper is purpose-built for comedy. Instead of generic AI responses, it uses comedy-specific structures like setups, punchlines, tags, and callbacks. The Builder helps you think like a comedian, not just generate text.

### What's Next?

Ready to jump in? Start with **Creating Your First Joke** to see how it works in under two minutes.`
  },
  {
    id: "gs-2", title: "Creating Your First Joke", slug: "creating-your-first-joke",
    summary: "Step-by-step guide to generating your very first joke.",
    sectionId: "getting-started", sortOrder: 1, isPublished: true, isFeatured: true, isPopular: true,
    createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Creating Your First Joke

Getting your first joke out of Joke Slapper takes about 30 seconds. Here's how.

### Step 1: Open the Dashboard

After signing in, you'll land on your dashboard. Click the **New Joke** button in the top left, or use the shortcut at the center of the screen.

### Step 2: Enter a Topic

Type in a word or phrase that you want to joke about. This can be anything — "airport security," "online dating," "my cat," or even "quantum physics."

> **Tip:** The more specific your topic, the more interesting the results. "Grocery shopping at 11 pm" is better than just "shopping."

### Step 3: Choose a Structure (Optional)

You can pick a joke structure like:

- **One-liner** — short and punchy
- **Setup / Punchline** — classic two-part joke
- **Observational** — "have you ever noticed" style
- **Comparison** — "X is like Y" format

If you're not sure, just leave it on "Any" and let Joke Slapper decide.

### Step 4: Hit Generate

Click **Generate** and wait a moment. You'll see several joke options appear.

### Step 5: Pick, Edit, or Regenerate

- **Like one?** Click the heart icon to save it
- **Almost there?** Click **Edit** to tweak the wording
- **Not feeling it?** Click **Regenerate** for fresh takes

### What Happens Next?

Your saved jokes go straight to your library. From there, you can organize them into folders, refine them in the Builder, or share them.

> **Tip:** Don't worry about getting a perfect joke on the first try. The best comedians generate lots of material and then pick the gems.`
  },
  {
    id: "gs-3", title: "Understanding Topics and Prompts", slug: "understanding-topics-and-prompts",
    summary: "Learn the difference between topics and prompts, and how to use each one effectively.",
    sectionId: "getting-started", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Understanding Topics and Prompts

The words you type into Joke Slapper matter. Here's how to think about them.

### Topics vs. Prompts

- A **topic** is the subject of your joke. It's what the joke is about. Examples: "dogs," "traffic," "working from home."
- A **prompt** is a more detailed instruction. It tells Joke Slapper not just what to joke about, but how. Example: "Write a one-liner about how dogs act when the doorbell rings."

You can use either one. Topics are faster. Prompts give you more control.

### Good Topics

Strong topics are specific and relatable:

- ✅ "First day at a new job"
- ✅ "Trying to eat healthy during the holidays"
- ✅ "The weird things people do in elevators"
- ❌ "Life" (too broad)
- ❌ "Stuff" (too vague)

### Good Prompts

A great prompt tells Joke Slapper what you want:

1. **Be specific** — "Write a joke about forgetting someone's name at a party" is better than "write a joke about parties"
2. **Mention a feeling** — "Make it feel self-deprecating" or "keep it lighthearted"
3. **Set constraints** — "Keep it under 20 words" or "Make it a one-liner"

> **Tip:** Think of prompts like giving directions to a friend. The clearer you are, the better the result.

### Combining Two Topics

One of the most powerful comedy techniques is combining two unrelated topics. Joke Slapper has a "Two Topics" mode specifically for this.

Try combinations like:

- "Yoga" + "Tax season"
- "Dating apps" + "Job interviews"
- "Cats" + "Corporate meetings"

The unexpected connection between two unrelated things is what makes comedy surprising.

### Still Getting Generic Results?

If your results feel too generic, your topic is probably too broad. Try narrowing it down to a specific moment, feeling, or situation within the topic.`
  },
  {
    id: "gs-4", title: "How Joke Generation Works", slug: "how-joke-generation-works",
    summary: "A simple explanation of what happens behind the scenes when you generate jokes.",
    sectionId: "getting-started", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## How Joke Generation Works

You don't need to understand the technology to use Joke Slapper, but knowing the basics can help you get better results.

### The Simple Version

When you type in a topic or prompt:

1. Joke Slapper analyzes your input for key themes and angles
2. It applies comedy structures (setup/punchline, misdirection, exaggeration, etc.)
3. It generates multiple variations so you can pick the best one
4. Each result is scored internally for surprise, timing, and clarity

### Why Results Vary

You'll notice that hitting "Generate" twice on the same topic gives different results. That's by design. Comedy thrives on variety — the first angle you think of isn't always the funniest.

### What Affects Quality

Several things influence how good your results are:

- **Topic specificity** — Narrow topics produce sharper jokes
- **Prompt detail** — More guidance means more relevant output
- **Joke structure** — Picking a structure gives the AI a framework
- **Voice Profile** — Your selected tone and style shape the output

> **Tip:** If you're getting results that feel "meh," try changing just one variable — switch the structure, add more detail to your prompt, or try a different Voice Profile.

### Daily Limits

Free accounts get a set number of generations per day. Premium and Pro plans include more (or unlimited) generations. Check **Account & Billing** for details on your plan.`
  },
  {
    id: "gs-5", title: "How to Improve Joke Results", slug: "how-to-improve-joke-results",
    summary: "Practical tips for getting funnier, sharper jokes from Joke Slapper.",
    sectionId: "getting-started", sortOrder: 4, isPublished: true, isFeatured: true, isPopular: true,
    createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## How to Improve Joke Results

Getting great results from Joke Slapper is a skill, and like any skill, it gets better with practice. Here are proven techniques.

### 1. Be Specific

The single biggest improvement you can make is being more specific.

- Instead of "food" → try "gas station sushi"
- Instead of "relationships" → try "texting your ex at 2 AM"
- Instead of "work" → try "pretending to look busy on a Zoom call"

### 2. Use the Two-Topic Mode

Comedy comes from unexpected connections. The Two-Topic mode forces Joke Slapper to find the funny overlap between two unrelated things. This almost always produces more creative results than a single topic.

### 3. Pick a Structure

If you're getting generic results, choose a specific joke structure. "Observational" produces different results than "One-liner," even on the same topic.

### 4. Iterate, Don't Settle

Professional comedians write dozens of jokes to find one good one. Use Joke Slapper the same way:

1. Generate a batch
2. Save the ones with potential
3. Regenerate with tweaked prompts
4. Edit the best ones in the Builder

### 5. Use Voice Profiles

If results don't sound like "you," set up a Voice Profile. This adjusts the tone, vocabulary, and rhythm to match your personal style.

> **Tip:** Try generating the same topic with three different Voice Profiles. You'll be surprised how different the results feel.

### 6. Edit the Output

Joke Slapper gives you raw material. The best jokes come when you take that material and make it your own — change a word, tighten the setup, add a personal detail.

### Common Mistakes

- **Being too broad** — "Write something funny" won't work well
- **Expecting perfection** — Think of results as first drafts
- **Not editing** — The magic is in the refinement`
  },
  {
    id: "gs-6", title: "Best Practices for Writing Prompts", slug: "best-practices-for-writing-prompts",
    summary: "Learn how to write prompts that consistently produce great joke results.",
    sectionId: "getting-started", sortOrder: 5, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Best Practices for Writing Prompts

Your prompt is the most important input. Here's how to make it count.

### The Prompt Formula

Great prompts usually follow this pattern:

**[Topic] + [Angle or Constraint] + [Tone or Style]**

Examples:

- "Write a one-liner about online dating that feels self-deprecating"
- "Make an observational joke about people who bring their own pillow on flights"
- "Create a comparison joke between being a parent and being a project manager"

### Do This

- **Be specific** about the situation or moment
- **Mention the emotion** you want (sarcastic, wholesome, dark, silly)
- **Set a format** (one-liner, setup/punchline, list)
- **Include a perspective** ("from the point of view of a tired parent")

### Don't Do This

- Don't write essays — keep prompts to 1–2 sentences
- Don't be vague — "write something funny" is too broad
- Don't over-constrain — too many rules makes results stiff
- Don't expect the first result to be the final joke

### Prompt Examples: Good vs. Bad

| Bad Prompt | Good Prompt |
|---|---|
| "Jokes about dogs" | "Write a one-liner about how dogs greet you like you've been gone for years, even if you just went to the mailbox" |
| "Something about work" | "Observational joke about pretending to type when your boss walks by" |
| "Be funny" | "Self-deprecating joke about trying to cook a healthy meal and ending up ordering pizza" |

> **Tip:** If you're stuck on what to write, start with a moment from your own life. Personal experiences make the best prompts because they're specific and relatable.

### Refining Your Prompts

If your first results aren't great, don't give up. Try:

1. Adding more detail about the specific moment
2. Changing the joke structure
3. Switching the emotional tone
4. Trying the Two-Topic mode instead`
  },

  // ━━━ WRITING JOKES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "wj-1", title: "How to Write Strong Prompts", slug: "how-to-write-strong-prompts",
    summary: "Deep dive into writing prompts that get consistently funny results.",
    sectionId: "writing-jokes", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-02-05T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## How to Write Strong Prompts

Writing good prompts is the #1 skill for getting great jokes out of Joke Slapper. Here's a deep dive.

### Think Like a Comedian

Before you type a prompt, ask yourself: "What's the funny part?" Every good joke starts with an observation — something surprising, relatable, or absurd about a topic.

### The Specificity Ladder

Climb the ladder from vague to specific:

1. **Vague:** "Travel"
2. **Better:** "Airports"
3. **Good:** "Airport security"
4. **Great:** "Taking off your shoes at airport security while everyone behind you waits"

The more specific you get, the funnier the results become. Specificity creates vivid images, and vivid images make people laugh.

### Emotional Anchors

Adding an emotion to your prompt dramatically improves results:

- "Frustrated" → produces relatable venting humor
- "Confused" → produces observational "why is this a thing?" humor
- "Proud" → produces ironic or self-deprecating humor
- "Anxious" → produces neurotic, overthinking humor

### Perspective Shifts

Tell Joke Slapper who's telling the joke:

- "From the perspective of a dog"
- "As if explaining it to an alien"
- "Like a nature documentary narrator"

This creates automatic misdirection, which is one of the strongest comedy tools.

> **Tip:** If you're consistently getting results you don't like, the problem is almost always in the prompt. Try changing your angle before blaming the tool.`
  },
  {
    id: "wj-2", title: "Using Two Topics for Incongruity", slug: "using-two-topics-for-incongruity",
    summary: "How combining two unrelated topics creates the surprise that makes jokes funny.",
    sectionId: "writing-jokes", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-05T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Using Two Topics for Incongruity

One of the most reliable comedy formulas is putting two things together that don't belong together. Comedians call this "incongruity" — and Joke Slapper has a feature built specifically for it.

### Why It Works

Humor comes from surprise. When your brain expects one thing and gets another, you laugh. Combining two unrelated topics forces that surprise to happen.

### How to Use Two-Topic Mode

1. Click **New Joke** from your dashboard
2. Toggle on **Two Topics** mode
3. Enter your first topic in the left field
4. Enter your second topic in the right field
5. Click **Generate**

### Great Combinations

The best two-topic pairs are things that share an unexpected similarity:

- "Toddlers" + "Drunk adults" (similar behavior)
- "Dating" + "Job interviews" (same anxiety)
- "Cats" + "CEOs" (same attitude)
- "Grocery shopping" + "The Hunger Games" (same energy)
- "Yoga class" + "Hostage negotiation" (same breathing techniques)

### Bad Combinations

Avoid pairs that are too similar or too random:

- ❌ "Cars" + "Trucks" (too similar — no surprise)
- ❌ "Spoons" + "Neptune" (too random — no connection)

The sweet spot is two topics that seem unrelated but share a hidden connection.

> **Tip:** If you can finish the sentence "X is basically Y because..." then you've found a good pair.

### Examples

- "Working from home is like being in prison because you wear the same clothes every day, you eat whatever's available, and you haven't seen your friends in months."
- "Texting your crush is like defusing a bomb because one wrong move and everything explodes."

### What If Results Are Weak?

Try swapping the order of the two topics, or replace one topic with something more specific.`
  },
  {
    id: "wj-3", title: "Choosing the Right Joke Structure", slug: "choosing-the-right-joke-structure",
    summary: "How different joke formats produce different types of humor.",
    sectionId: "writing-jokes", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-06T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Choosing the Right Joke Structure

Joke structure is the skeleton of your joke. Picking the right one can make the difference between a chuckle and a real laugh.

### Available Structures

Joke Slapper supports these formats:

### One-Liner

Short, punchy, and self-contained. Great for social media, openers, and quick hits.

- Best for: Twitter, Instagram captions, tight five-minute sets
- Example: "I told my therapist I had trust issues. She said she didn't believe me."

### Setup / Punchline

The classic two-part joke. The setup creates an expectation, and the punchline breaks it.

- Best for: Stand-up, speeches, presentations
- Example: "I asked my wife what she wanted for her birthday. She said 'Nothing would make me happier than diamonds.' So I got her nothing."

### Observational

"Have you ever noticed..." humor that points out absurd things about everyday life.

- Best for: Relatable content, casual comedy, warm-up material
- Example: "Why do we press harder on a remote control when we know the batteries are dead?"

### Comparison

"X is like Y" format that draws an unexpected parallel.

- Best for: Two-topic humor, analogies, punchy social media posts
- Example: "Going to IKEA with your partner is like a relationship stress test sponsored by Swedish meatballs."

### List / Rule of Three

Three items where the third breaks the pattern.

- Best for: Sketch comedy, written humor, longer bits
- Example: "Things I learned in my 30s: how to cook, how to budget, and how to pretend I'm fine."

> **Tip:** If you're not sure which structure to use, try "Setup / Punchline" first — it's the most versatile format.`
  },
  {
    id: "wj-4", title: "Editing and Refining Generated Jokes", slug: "editing-and-refining-generated-jokes",
    summary: "How to take a generated joke from good to great with simple edits.",
    sectionId: "writing-jokes", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-06T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Editing and Refining Generated Jokes

The jokes Joke Slapper generates are starting points, not finished products. The best comedians always refine their material. Here's how.

### The 3-Step Editing Process

### Step 1: Cut the Fat

Most generated jokes have extra words. Go through and remove anything that doesn't add to the joke:

- Cut unnecessary adjectives
- Remove filler phrases like "basically" or "you know"
- Shorten the setup as much as possible

The rule: **The shorter the setup, the harder the punchline hits.**

### Step 2: Sharpen the Punchline

The punchline should be the last thing the audience hears. Make sure:

- The funniest word is at the very end of the sentence
- There's a clear "turn" — a moment where the joke shifts direction
- The language is vivid and specific (not vague or generic)

### Step 3: Make It Yours

Add a personal detail, change the wording to sound like you, or set it in a specific situation from your life. The more personal a joke feels, the more the audience connects with it.

### Common Editing Fixes

- **Too long?** Cut the setup in half
- **Not surprising?** Try a different punchline direction
- **Too generic?** Replace general nouns with specific ones ("car" → "2003 Honda Civic")
- **Doesn't sound like you?** Read it out loud and rewrite in your own words

> **Tip:** Read your joke out loud. If you stumble over a word or the rhythm feels off, rewrite that part. Comedy is as much about how it sounds as what it says.`
  },
  {
    id: "wj-5", title: "When to Regenerate vs. Edit", slug: "when-to-regenerate-vs-edit",
    summary: "Know when to keep working with a result and when to start fresh.",
    sectionId: "writing-jokes", sortOrder: 4, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-07T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## When to Regenerate vs. Edit

One of the most common questions: should I fix this joke, or try again? Here's a simple framework.

### Edit When...

- The **angle is funny** but the wording needs work
- The setup is too long but the punchline lands
- It's 80% there and just needs tightening
- You can see a better version in your head

### Regenerate When...

- The **angle itself is wrong** — the joke isn't about the right aspect of the topic
- None of the results make you smile
- The results feel generic or predictable
- You realize your prompt was too vague

### The 5-Second Rule

Read the generated joke. If you don't smile within 5 seconds, regenerate. If you think "that's almost funny," edit.

### Smart Regeneration

Don't just hit "Regenerate" with the exact same input. Change something:

1. Add more specificity to your prompt
2. Try a different joke structure
3. Switch to Two-Topic mode
4. Change your Voice Profile

> **Tip:** Save promising "almost-funny" jokes anyway. Come back to them later with fresh eyes — you might see the edit that makes them work.`
  },
  {
    id: "wj-6", title: "How to Turn Ideas Into Punchlines", slug: "how-to-turn-ideas-into-punchlines",
    summary: "Techniques for finding the funny angle in any topic.",
    sectionId: "writing-jokes", sortOrder: 5, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-08T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## How to Turn Ideas Into Punchlines

You have a funny thought. Now what? Here's how to go from "idea" to "joke."

### The Observation-to-Joke Pipeline

Every joke starts with a true observation. The pipeline looks like this:

1. **Notice something** — "Airport security is weird"
2. **Find the specific moment** — "They make you take off your shoes"
3. **Ask 'What's funny about this?'** — "We all just accept it as normal"
4. **Find the exaggeration or comparison** — "It's like undressing for a first date but in front of 200 strangers"
5. **Write it as a joke** — Setup → Punchline

### Comedy Angles

For any topic, try looking at it through these lenses:

- **Exaggeration** — Take the truth and blow it up to absurd proportions
- **Understatement** — Do the opposite — describe something big as no big deal
- **Comparison** — Connect it to something unexpected
- **Reversal** — Set up one expectation, then flip it
- **Specificity** — Zoom in on a tiny, relatable detail

### Using Joke Slapper for Angles

If you have a topic but can't find the funny angle:

1. Enter the topic into Joke Slapper
2. Look at the generated results for the **angle**, not the exact wording
3. Take the best angle and write your own version
4. Use the Builder to expand it

> **Tip:** Don't try to be funny at first. Start by being true. The funny part usually shows up once you find the honest observation.`
  },

  // ━━━ THE BUILDER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "tb-1", title: "What the Joke Builder Does", slug: "what-the-joke-builder-does",
    summary: "An overview of the Builder tool and how it helps you develop jokes.",
    sectionId: "the-builder", sortOrder: 0, isPublished: true, isFeatured: true, isPopular: false,
    createdAt: "2026-02-10T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## What the Joke Builder Does

The Builder is where you take a raw joke idea and develop it into polished material. Think of it as your comedy workshop.

### Generator vs. Builder

- **The Generator** creates jokes from scratch based on your topics and prompts
- **The Builder** takes an existing joke or premise and helps you improve it

Use the Generator to find funny ideas. Use the Builder to turn those ideas into performance-ready material.

### What You Can Do in the Builder

The Builder offers several tools:

1. **Expand a Premise** — Take a short idea and develop it into a full bit
2. **Improve the Setup** — Make the setup cleaner and more efficient
3. **Strengthen the Punchline** — Find a harder-hitting punchline
4. **Add Tags** — Generate follow-up lines that build on the original joke
5. **Find Callbacks** — Discover ways to reference earlier material

### When to Use the Builder

- When you have a joke that's "almost there"
- When you want to turn a one-liner into a longer bit
- When your setup is too wordy
- When the punchline doesn't land hard enough
- When you want to build a 5-minute chunk from a single premise

> **Tip:** Professional comedians spend most of their time in the editing and refining stage, not the generating stage. The Builder is where the real work happens.`
  },
  {
    id: "tb-2", title: "Sending a Joke to the Builder", slug: "sending-a-joke-to-the-builder",
    summary: "How to move a generated joke into the Builder for further development.",
    sectionId: "the-builder", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-10T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Sending a Joke to the Builder

Once you've generated a joke you like, you can send it to the Builder for further work.

### How to Send a Joke

There are two ways:

### From the Generator

1. Generate jokes as usual
2. Find a result you want to develop
3. Click the **wrench icon** or select **Send to Builder** from the menu
4. The joke will open in the Builder with all tools available

### From Your Library

1. Open your saved jokes
2. Click on any joke to open it
3. Select **Open in Builder** from the actions menu

### What Happens Next

Once in the Builder, your joke appears in the center panel. On the right, you'll see tools for expanding, refining, and restructuring the joke. Each tool gives you options you can apply or dismiss.

> **Tip:** You can also start the Builder from scratch by typing or pasting any text. You don't have to generate first.`
  },
  {
    id: "tb-3", title: "Expanding a Premise", slug: "expanding-a-premise",
    summary: "How to take a simple joke idea and develop it into a longer comedy bit.",
    sectionId: "the-builder", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-10T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Expanding a Premise

A premise is the core idea of your joke. Expanding it means developing that idea into multiple jokes, tags, and observations — enough for a full comedy bit.

### What Is a Premise?

A premise is the observation behind the joke. For example:

- Joke: "I told my doctor I broke my arm in two places. He told me to stop going to those places."
- Premise: "Doctors give advice that's technically correct but completely useless"

### How to Expand

1. Open your joke in the Builder
2. Click **Expand Premise**
3. The Builder will generate:
   - Related observations on the same theme
   - Follow-up jokes (tags) that build on the original
   - Different angles on the same premise

### Building a Bit

A "bit" is a series of jokes on the same topic. To build one:

1. Start with your strongest joke as the opener
2. Use the expanded material to fill out the middle
3. End with your second-strongest joke as the closer
4. Remove anything that doesn't get a reaction

> **Tip:** A good 3-minute bit usually has one premise with 6-10 jokes built around it. Quality over quantity — cut anything that doesn't land.`
  },
  {
    id: "tb-4", title: "Writing Better Setups", slug: "writing-better-setups",
    summary: "How to craft setups that make your punchlines hit harder.",
    sectionId: "the-builder", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-11T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Writing Better Setups

The setup is the unsung hero of any joke. A great setup makes the punchline inevitable. Here's how to craft better ones.

### The Purpose of a Setup

The setup does two things:

1. **Creates an expectation** in the listener's mind
2. **Provides just enough context** for the punchline to make sense

That's it. Everything else is filler.

### The #1 Rule: Keep It Short

Every unnecessary word in your setup weakens the punchline. Cut ruthlessly.

- ❌ "So the other day, I was at the grocery store, and I was walking down the cereal aisle, and I noticed something really funny..."
- ✅ "I'm at the grocery store..."

### Setup Techniques

- **Establish a clear expectation** that the punchline will break
- **Use specific details** that make the scene vivid
- **Plant information** the punchline will recontextualize
- **End the setup as close to the punchline as possible**

### Using the Builder for Setups

In the Builder, click **Improve Setup** to get suggestions for tightening your setup. The tool will:

- Remove unnecessary words
- Suggest more efficient phrasing
- Identify the essential information the audience needs

> **Tip:** Try the "newspaper headline" test. Can you describe your setup in a short headline? If not, it's probably too wordy.`
  },
  {
    id: "tb-5", title: "Punchline Techniques", slug: "punchline-techniques",
    summary: "Methods for writing punchlines that land with impact.",
    sectionId: "the-builder", sortOrder: 4, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-12T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Punchline Techniques

The punchline is the payoff. Here's how to make sure yours lands.

### The Golden Rule

**Put the funniest word at the end of the sentence.** This is the single most important rule in joke writing.

- ❌ "The cake was terrible, I ate it at the wedding"
- ✅ "I ate the wedding cake. It was terrible."

Wait — flip it further:

- ✅✅ "The wedding was beautiful. The cake, however, was a war crime."

### Punchline Techniques

### Misdirection

Lead the audience one direction, then go another:

- "I've been working on my relationship... with pizza. Things are going great."

### Exaggeration

Take something true and blow it way up:

- "My apartment is so small, I have to go outside to change my mind."

### Understatement

Say something dramatic as if it's no big deal:

- "Other than that, Mrs. Lincoln, how was the play?"

### Callback

Reference something from earlier in your set to create a surprise connection.

### Using the Builder

Click **Strengthen Punchline** in the Builder to get alternative punchlines for your existing joke. Review the options, pick the strongest one, then edit it to sound like you.

> **Tip:** If a punchline doesn't feel strong, try the "because" test. Can you explain why it's funny? If the explanation involves surprise or a shift in meaning, the structure is solid — you might just need better word choice.`
  },
  {
    id: "tb-6", title: "Structuring a Full Joke", slug: "structuring-a-full-joke",
    summary: "How to put all the pieces together into a complete, well-structured joke.",
    sectionId: "the-builder", sortOrder: 5, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-12T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Structuring a Full Joke

Now that you understand setups, punchlines, and premises, let's put it all together.

### The Anatomy of a Joke

Every joke has three core parts:

1. **Premise** — The idea or observation driving the joke
2. **Setup** — The context the audience needs
3. **Punchline** — The surprise that gets the laugh

Some jokes also have:

4. **Tags** — Follow-up lines that get additional laughs from the same setup
5. **Callbacks** — References to earlier jokes that create new connections

### The Formula

Here's a reliable structure:

**[Relatable observation] → [Specific detail that creates an expectation] → [Surprise that breaks the expectation]**

### Example Breakdown

"I tried cooking a gourmet meal from YouTube. Three hours later, the fire department gave my dinner a one-star review."

- **Premise:** Trying to cook something fancy from the internet
- **Setup:** "I tried cooking a gourmet meal from YouTube. Three hours later..."
- **Punchline:** "...the fire department gave my dinner a one-star review."
- **Why it works:** Unexpected reviewer + metaphor of "one-star review" for a disaster

### Tags You Could Add

- "The smoke detector was the dinner bell."
- "On the bright side, I now know what happens when you 'flambe' everything."

### Using the Builder for Full Structure

The Builder's **Structure** tool lets you:

1. Input your raw premise
2. Get a complete joke laid out in setup/punchline format
3. Generate tags and callbacks
4. Reorder components for maximum impact

> **Tip:** Write the punchline first, then work backwards to the minimum setup needed for it to land. This prevents your setup from becoming a short story.`
  },

  // ━━━ MANAGING YOUR MATERIAL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "mm-1", title: "Saving Jokes", slug: "saving-jokes",
    summary: "How to save jokes to your library so you never lose a good idea.",
    sectionId: "managing-material", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-02-15T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Saving Jokes

Every joke you like can be saved to your personal library with one click.

### How to Save

From the Generator or the Builder, click the **heart icon** or **Save** button on any joke. The joke is immediately added to your library.

### What Gets Saved

When you save a joke, Joke Slapper stores:

- The full joke text
- The topic and prompt that generated it
- The date it was created
- The Voice Profile that was active
- Any edits you've made

### Saving Drafts

Not sure if a joke is good yet? Save it anyway. You can mark jokes as "Draft" to separate rough ideas from polished material.

### Auto-Save

If you're working in the Builder, your progress is auto-saved every 30 seconds. You won't lose work if you close the tab accidentally.

> **Tip:** Save generously. It's easier to delete a mediocre joke later than to remember a great one you forgot to save. Professional comedians keep notebooks full of ideas — your library is that notebook.`
  },
  {
    id: "mm-2", title: "Using Folders", slug: "using-folders",
    summary: "Organize your jokes into folders for easy access and set planning.",
    sectionId: "managing-material", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-15T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Using Folders

Folders help you organize your jokes by topic, occasion, or any system that works for you.

### Creating a Folder

1. Go to your **Library**
2. Click **New Folder** in the sidebar
3. Name your folder
4. Start dragging jokes into it

### Suggested Folder Systems

Here are some ways comedians organize their material:

### By Topic

- "Dating"
- "Work"
- "Family"
- "Current Events"

### By Use

- "Open Mic Ready"
- "Needs Work"
- "Social Media Posts"
- "Show Closer"

### By Status

- "Drafts"
- "Testing"
- "Proven"
- "Retired"

### Moving Jokes Between Folders

Click and drag a joke from one folder to another, or use the **Move to...** option in the joke's menu.

> **Tip:** Don't create too many folders at first. Start with 3-5 and add more as your library grows. Over-organizing early is a form of procrastination.`
  },
  {
    id: "mm-3", title: "Tagging Jokes", slug: "tagging-jokes",
    summary: "How tags help you find and filter jokes across your entire library.",
    sectionId: "managing-material", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-15T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Tagging Jokes

Tags are flexible labels you can add to any joke. Unlike folders, a joke can have multiple tags, making them great for cross-referencing.

### Adding Tags

1. Open a saved joke
2. Click the **tag icon** or the **Tags** field
3. Type a tag name and press Enter
4. Add as many as you want

### Useful Tags

- **#one-liner** — Quick format identification
- **#crowd-work** — Jokes that work well with audience interaction
- **#self-deprecating** — Tone marker
- **#topical** — Time-sensitive material
- **#callback** — Jokes that reference other material
- **#favorite** — Your best stuff

### Filtering by Tag

In your library, click the **Filter** button and select one or more tags. This shows only jokes matching those tags, regardless of which folder they're in.

### Tags vs. Folders

- **Folders** are for primary organization (a joke lives in one folder)
- **Tags** are for cross-referencing (a joke can have many tags)

Use both together for maximum organization power.

> **Tip:** Create a #stage-ready tag for jokes that have been tested and proven to get laughs. This makes setlist building much easier.`
  },
  {
    id: "mm-4", title: "Finding Old Material", slug: "finding-old-material",
    summary: "Quick ways to search and browse your saved jokes.",
    sectionId: "managing-material", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-16T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Finding Old Material

As your library grows, you'll need fast ways to find specific jokes.

### Search

The search bar in your library searches across:

- Joke text
- Tags
- Folder names
- Topics and prompts

Just start typing and results update in real time.

### Sort Options

Sort your library by:

- **Date created** (newest or oldest first)
- **Date modified** (recently edited)
- **Alphabetical** (by joke title or first line)

### Filter Options

Combine filters to narrow down your view:

- By folder
- By tag
- By status (draft, ready, archived)
- By date range

### Quick Access

Pin your most-used folders to the top of the sidebar for instant access.

> **Tip:** Once a week, spend 10 minutes reviewing your saved jokes. You'll often find material that's better than you remembered — sometimes a joke just needs time to marinate.`
  },
  {
    id: "mm-5", title: "Building a Joke Library", slug: "building-a-joke-library",
    summary: "How to grow and maintain a comedy library that works for you.",
    sectionId: "managing-material", sortOrder: 4, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-16T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Building a Joke Library

Your library is your comedy vault. Here's how to build one that actually helps you perform and create better.

### Start With Quantity

In the beginning, save everything. Don't be picky. You need raw material to work with. The editing and curating comes later.

### Review Regularly

Set a weekly time to review your saved jokes. During review:

1. Delete jokes that no longer feel funny
2. Move promising drafts to a "Needs Work" folder
3. Tag your strongest material as #stage-ready
4. Look for themes — multiple jokes on the same topic could become a bit

### Build Sets

As your library grows, start grouping jokes into sets:

- **5-minute set** — Your tightest, most reliable material
- **10-minute set** — Expanded with B+ material
- **Theme sets** — Jokes grouped by topic for specific audiences

### Track What Works

After performing, note which jokes got laughs and which didn't. Over time, this data is invaluable.

> **Tip:** Your library is a living document. The best comedians constantly cycle material — adding new jokes, refining existing ones, and retiring material that no longer works.`
  },
  {
    id: "mm-6", title: "Exporting or Copying Jokes", slug: "exporting-or-copying-jokes",
    summary: "How to export jokes for use outside of Joke Slapper.",
    sectionId: "managing-material", sortOrder: 5, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-17T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Exporting or Copying Jokes

Your jokes are yours. Here's how to take them outside of Joke Slapper.

### Copy a Single Joke

Click the **copy icon** on any joke to copy the text to your clipboard. Paste it anywhere — notes app, document, text message.

### Export a Folder

1. Open the folder you want to export
2. Click the **three-dot menu** at the top
3. Select **Export**
4. Choose your format: **Plain Text**, **Markdown**, or **PDF**

### Export Your Entire Library

Go to **Settings → Data → Export Library** to download everything as a single file.

### Sharing Jokes

You can share individual jokes via a link. The recipient doesn't need a Joke Slapper account to view it.

> **Tip:** Export your best material to a separate document before big shows. Having a clean, distraction-free version of your setlist helps with rehearsal.`
  },

  // ━━━ VOICE PROFILES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "vp-1", title: "What Voice Profiles Are", slug: "what-voice-profiles-are",
    summary: "Understand how Voice Profiles shape the tone and style of your generated jokes.",
    sectionId: "voice-profiles", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-02-20T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## What Voice Profiles Are

Voice Profiles tell Joke Slapper how you want your jokes to sound. They control the tone, vocabulary, and comedic style of generated results.

### Why They Matter

Without a Voice Profile, Joke Slapper uses a general comedy style. That's fine for exploring, but if you want results that sound like you, a Voice Profile makes a huge difference.

### What a Voice Profile Controls

- **Tone** — Dry, energetic, deadpan, warm, sarcastic
- **Vocabulary** — Simple and conversational vs. clever and wordy
- **Comedy style** — Self-deprecating, observational, absurdist, dark humor
- **Rhythm** — Short punchy sentences vs. longer narrative style
- **Audience** — Family-friendly vs. adults-only

### Default Profiles

Joke Slapper comes with several built-in profiles to get you started:

- **Conversational** — Casual, everyday humor
- **Dry Wit** — Understated, deadpan delivery
- **High Energy** — Excitable, over-the-top humor
- **Storyteller** — Longer narrative-style jokes
- **Clean** — Family-friendly, no edgy material

### Custom Profiles

You can create your own profile to match your personal comedy style. See **Matching Your Own Comedy Style** for details.

> **Tip:** Try the same prompt with different Voice Profiles. It's like hearing the same story told by different comedians — the material changes dramatically.`
  },
  {
    id: "vp-2", title: "Choosing a Comedy Style", slug: "choosing-a-comedy-style",
    summary: "How to pick the right comedy style for your voice and audience.",
    sectionId: "voice-profiles", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-20T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Choosing a Comedy Style

Your comedy style is how you naturally tell jokes. Choosing the right one in Joke Slapper helps you get results that actually feel like something you'd say.

### Self-Deprecating

You're the butt of your own jokes. Works great for:

- Building rapport with audiences
- Making relatable observations
- Disarming tense topics

### Observational

"Have you ever noticed..." humor. Works for:

- Everyday situations everyone relates to
- Pointing out absurdity in normal things
- Clean, broad humor

### Dry / Deadpan

Understated delivery, matter-of-fact absurdity. Works for:

- One-liners and short jokes
- Intellectual or subtle humor
- Twitter and written comedy

### Absurdist

Weird, surreal, and unexpected. Works for:

- Creative and original material
- Standing out from the crowd
- Audiences who like the unexpected

### Dark Humor

Edgy, boundary-pushing material. Works for:

- Late-night audiences
- Comedy clubs
- Mature content platforms

> **Tip:** You don't have to pick just one. Most comedians have a primary style with secondary influences. Set your main style as your default profile and switch for specific projects.`
  },
  {
    id: "vp-3", title: "Writing in Different Voices", slug: "writing-in-different-voices",
    summary: "How to switch between comedy styles for different audiences and platforms.",
    sectionId: "voice-profiles", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-21T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Writing in Different Voices

Different situations call for different comedy styles. Here's how to adapt.

### Why Switch Voices?

- A corporate event needs different humor than a comedy club
- Social media humor is different from stage humor
- Different audiences respond to different styles

### Creating Multiple Profiles

Set up Voice Profiles for your common use cases:

1. **Stage** — Your natural performing style
2. **Social Media** — Punchier, more visual, emoji-friendly
3. **Corporate** — Clean, professional, relatable-to-everyone
4. **Writing** — Longer form, more narrative, essay-style

### Switching Profiles

Click the **Voice Profile** dropdown at the top of the Generator or Builder to switch. The change takes effect on your next generation.

### Tips for Adapting

- When writing for a specific audience, think about what they find relatable
- Match the complexity of your language to the audience
- Adjust your topics — not everyone relates to the same things

> **Tip:** If you perform in multiple venues, create a Voice Profile for each one. "Monday open mic" material is different from "Saturday headliner" material.`
  },
  {
    id: "vp-4", title: "When to Switch Voices", slug: "when-to-switch-voices",
    summary: "Know when changing your Voice Profile will improve your results.",
    sectionId: "voice-profiles", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-22T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## When to Switch Voices

Your Voice Profile has a big impact on results. Here's when switching profiles helps.

### Switch When...

- **Results don't sound like you** — Your default profile might not match this particular topic
- **You're writing for a different platform** — Instagram needs a different voice than a stage set
- **The topic calls for a different tone** — Serious topics might work better with dry wit; silly topics might work with high energy
- **You're in a creative rut** — A different voice can unlock new angles

### Don't Switch When...

- You're in the middle of building a themed set (consistency matters)
- You've found a profile that works well for the current session
- You're just avoiding the editing process (switching profiles isn't a shortcut)

### Experiment

Sometimes the best thing you can do is run the same prompt through 3 different Voice Profiles and see which result surprises you the most.

> **Tip:** Surprise is a sign of good comedy. If even you are surprised by the result, your audience probably will be too.`
  },
  {
    id: "vp-5", title: "Matching Your Own Comedy Style", slug: "matching-your-own-comedy-style",
    summary: "Create a custom Voice Profile that sounds like you.",
    sectionId: "voice-profiles", sortOrder: 4, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-22T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Matching Your Own Comedy Style

The most powerful Voice Profile is one that matches how you actually talk and write. Here's how to create it.

### Step 1: Gather Your Best Material

Collect 5-10 of your favorite jokes — ones that got real laughs and feel authentically "you."

### Step 2: Create a Custom Profile

1. Go to **Voice Profiles**
2. Click **Create Custom Profile**
3. Name it (e.g., "My Stage Voice")
4. Paste your example jokes into the **Reference Material** field
5. Adjust the sliders for tone, energy, and complexity
6. Save

### Step 3: Test and Refine

Generate a few jokes with your custom profile. Do they sound like you? If not:

- Add more reference jokes (especially ones that represent your style well)
- Adjust the tone sliders
- Try adding a description of your comedy style in the notes field

### What the Profile Learns From

Your custom profile analyzes your reference material for:

- **Sentence length** — Do you use short punchy sentences or longer narratives?
- **Vocabulary** — Is your language simple and conversational or more complex?
- **Joke structure** — Do you prefer one-liners, stories, or observations?
- **Tone** — Are you sarcastic, warm, dark, or silly?

> **Tip:** Update your custom profile every few months as your style evolves. The comedian you are today isn't the same one you'll be in six months — and that's a good thing.`
  },

  // ━━━ ACCOUNT & BILLING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "ab-1", title: "Creating an Account", slug: "creating-an-account",
    summary: "How to sign up for Joke Slapper and get started.",
    sectionId: "account-billing", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-25T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Creating an Account

Getting started with Joke Slapper takes less than a minute.

### Sign Up

1. Go to **jokeslapper.com**
2. Click **Get Started** or **Sign Up**
3. Enter your email address and create a password
4. Verify your email by clicking the link we send you
5. You're in!

### Sign Up With Google

Click **Continue with Google** on the sign-up page to use your Google account. No password needed.

### What You Get

Free accounts include:

- Access to the Generator and Builder
- 10 joke generations per day
- Library with up to 100 saved jokes
- 1 Voice Profile

### Upgrading

Want more? Check out our paid plans under **Managing Your Subscription** for details on Premium and Pro features.

> **Tip:** You don't need to upgrade right away. Try the free plan for a week to see if Joke Slapper fits your creative process.`
  },
  {
    id: "ab-2", title: "Managing Your Subscription", slug: "managing-your-subscription",
    summary: "How to view, change, or manage your subscription plan.",
    sectionId: "account-billing", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-02-25T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Managing Your Subscription

You can view and manage your subscription at any time.

### View Your Current Plan

Go to **Settings → Subscription** to see:

- Your current plan (Free, Premium, or Pro)
- Billing cycle (monthly or annual)
- Next billing date
- Usage this period

### Available Plans

### Free

- 10 generations per day
- 100 saved jokes
- 1 Voice Profile
- Basic Builder access

### Premium

- Unlimited generations
- Unlimited saved jokes
- 5 Voice Profiles
- Full Builder access
- Priority support

### Pro

- Everything in Premium
- Custom Voice Profiles
- Collaboration features
- API access
- Advanced analytics

### Switching Plans

1. Go to **Settings → Subscription**
2. Click **Change Plan**
3. Select your new plan
4. Confirm the change

Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.

> **Tip:** Annual plans save you 20% compared to monthly billing. If you know you'll use Joke Slapper regularly, the annual plan is the better value.`
  },
  {
    id: "ab-3", title: "Updating Billing Information", slug: "updating-billing-information",
    summary: "How to update your payment method and billing details.",
    sectionId: "account-billing", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-26T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Updating Billing Information

Keep your payment information up to date to avoid service interruptions.

### Update Payment Method

1. Go to **Settings → Billing**
2. Click **Update Payment Method**
3. Enter your new card details
4. Click **Save**

### Accepted Payment Methods

- Visa, Mastercard, American Express
- PayPal
- Apple Pay and Google Pay

### Billing Email

To send invoices to a different email:

1. Go to **Settings → Billing**
2. Click **Billing Email**
3. Enter the new email address
4. Save

### Downloading Invoices

All invoices are available under **Settings → Billing → Invoice History**. Click any invoice to download it as a PDF.

> **Tip:** If your card is about to expire, update it before your next billing date to avoid any interruption in service.`
  },
  {
    id: "ab-4", title: "Canceling Your Subscription", slug: "canceling-your-subscription",
    summary: "How to cancel your paid plan and what happens to your data.",
    sectionId: "account-billing", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-02-26T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Canceling Your Subscription

We're sorry to see you go. Here's how cancellation works.

### How to Cancel

1. Go to **Settings → Subscription**
2. Click **Cancel Subscription**
3. Tell us why you're leaving (optional but helpful)
4. Confirm the cancellation

### What Happens After Canceling

- You keep access to your paid features until the end of your current billing period
- After that, your account reverts to the Free plan
- Your saved jokes and data are preserved — nothing is deleted
- You can resubscribe at any time

### Reactivating

Changed your mind? Just go to **Settings → Subscription** and select a plan. Your data and preferences are still there.

> **Tip:** If you're canceling because something isn't working right, reach out to support first. We might be able to fix the issue or offer a solution.`
  },
  {
    id: "ab-5", title: "Credit Usage and Limits", slug: "credit-usage-and-limits",
    summary: "Understand how generation credits work and how to check your usage.",
    sectionId: "account-billing", sortOrder: 4, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-02-27T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Credit Usage and Limits

Each joke generation uses credits. Here's how the system works.

### How Credits Work

- Each time you click **Generate**, it uses 1 credit
- **Regenerate** also uses 1 credit
- **Editing** a joke in the Builder does not use credits
- **Saving, tagging, and organizing** does not use credits

### Credit Allowances

| Plan | Daily Credits | Monthly Credits |
|---|---|---|
| Free | 10 | — |
| Premium | Unlimited | Unlimited |
| Pro | Unlimited | Unlimited |

### Checking Your Usage

Go to **Settings → Usage** to see:

- Credits used today
- Credits remaining
- Usage history by day and week

### When Credits Reset

Free plan credits reset every day at midnight (your local time).

### Running Out of Credits

If you hit your daily limit on the Free plan:

- Your saved jokes and library remain fully accessible
- The Builder editing tools still work
- You just can't generate new jokes until tomorrow

> **Tip:** If you frequently hit your daily limit, it might be worth upgrading. The Premium plan removes all generation limits.`
  },

  // ━━━ SETTINGS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "st-1", title: "Profile Settings", slug: "profile-settings",
    summary: "How to update your profile information and preferences.",
    sectionId: "settings", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Profile Settings

Customize your profile to make Joke Slapper work better for you.

### Update Your Profile

Go to **Settings → Profile** to change:

- **Display name** — How your name appears in shared jokes
- **Profile photo** — Upload an image or connect your Gravatar
- **Bio** — A short description (visible if you share jokes publicly)
- **Time zone** — Used for daily credit resets and timestamps

### Email Settings

- **Primary email** — Your login and notification email
- **Billing email** — Where invoices are sent (can be different)

### Password

To change your password:

1. Go to **Settings → Security**
2. Click **Change Password**
3. Enter your current password
4. Set your new password
5. Save

> **Tip:** Use a unique password for your Joke Slapper account, especially if you have premium content saved.`
  },
  {
    id: "st-2", title: "Notification Preferences", slug: "notification-preferences",
    summary: "Control what notifications you receive and how.",
    sectionId: "settings", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Notification Preferences

Stay informed without the noise.

### Notification Types

- **Email** — Weekly digests, billing reminders, product updates
- **In-App** — Tips, feature announcements, usage alerts
- **Push** — Browser notifications for real-time updates (if enabled)

### What You Can Control

Go to **Settings → Notifications** to toggle:

- Weekly comedy tip emails
- Credit usage alerts (when you're close to daily limit)
- Product update announcements
- Billing reminders
- Community highlights

### Quiet Hours

Set times when you don't want to receive any notifications:

1. Go to **Settings → Notifications → Quiet Hours**
2. Set your start and end times
3. Save

> **Tip:** Keep "Credit usage alerts" turned on if you're on the Free plan. It helps you pace your generations throughout the day.`
  },
  {
    id: "st-3", title: "Display Options", slug: "display-options",
    summary: "Customize how Joke Slapper looks and feels.",
    sectionId: "settings", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-02T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Display Options

Make Joke Slapper comfortable for long writing sessions.

### Available Options

Go to **Settings → Display** to customize:

- **Font size** — Adjust the text size in the Generator and Builder
- **Compact mode** — Reduce spacing for more content on screen
- **Default view** — Choose whether your library opens in list or grid view

### Accessibility

We're committed to making Joke Slapper accessible to everyone:

- Full keyboard navigation support
- Screen reader compatibility
- High contrast mode option
- Reduced motion option for users sensitive to animations

> **Tip:** If you write jokes for long stretches, increase the font size and take breaks. Your eyes (and your comedy) will thank you.`
  },
  {
    id: "st-4", title: "Content Preferences", slug: "content-preferences",
    summary: "Set default behaviors for joke generation and content handling.",
    sectionId: "settings", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-02T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Content Preferences

Set defaults that match how you like to work.

### Default Generation Settings

Under **Settings → Content**, you can set:

- **Default joke structure** — Your preferred format (one-liner, setup/punchline, etc.)
- **Default Voice Profile** — Which profile is selected by default
- **Results per generation** — How many joke options to show (3, 5, or 8)
- **Auto-save** — Whether jokes are automatically saved when you like them

### Content Filters

Control the type of content generated:

- **Family-friendly mode** — Restricts results to clean humor
- **Topic exclusions** — Add topics you don't want included in results

### Language

Set your preferred language for generated jokes. Joke Slapper currently supports English with more languages coming soon.

> **Tip:** Set your most common preferences as defaults so you don't have to adjust them every session. You can always override defaults on a per-generation basis.`
  },

  // ━━━ TROUBLESHOOTING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "ts-1", title: "Joke Generation Not Working", slug: "joke-generation-not-working",
    summary: "What to do when the generator isn't producing results.",
    sectionId: "troubleshooting", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-03-05T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Joke Generation Not Working

If you click Generate and nothing happens (or you get an error), try these steps in order.

### Quick Fixes

1. **Check your internet connection** — The generator requires an active connection
2. **Check your credit balance** — Go to **Settings → Usage** to see if you've used your daily credits
3. **Refresh the page** — A simple refresh fixes most temporary issues
4. **Try a different browser** — If the issue persists, switch browsers to rule out compatibility problems

### Still Not Working?

Try these additional steps:

1. **Clear your browser cache** — Old cached data can cause issues
2. **Disable browser extensions** — Ad blockers or privacy extensions sometimes interfere
3. **Log out and log back in** — This refreshes your session
4. **Check our status page** — Visit status.jokeslapper.com for any known outages

### Error Messages

- **"Generation limit reached"** — You've used all your daily credits. Wait until tomorrow or upgrade your plan.
- **"Something went wrong"** — A temporary server issue. Wait 30 seconds and try again.
- **"Content filtered"** — Your prompt triggered our content filter. Try rephrasing.

> **Warning:** If you see "Account suspended," contact support immediately at support@jokeslapper.com.

### Contact Support

If none of these steps work, reach out to our support team with:

- What browser you're using
- What you typed as your prompt
- Any error messages you see
- A screenshot if possible`
  },
  {
    id: "ts-2", title: "Results Are Repeating", slug: "results-are-repeating",
    summary: "What to do when you keep getting the same or similar jokes.",
    sectionId: "troubleshooting", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-05T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Results Are Repeating

If you're getting the same jokes over and over, here's what's likely happening and how to fix it.

### Why It Happens

Repetition usually means your prompt is too narrow or too vague. The system finds the "obvious" joke for that input and keeps returning to it.

### How to Fix It

### 1. Change Your Prompt

Even a small change can produce completely different results:

- Add more specificity
- Change the angle or perspective
- Try different wording

### 2. Switch the Joke Structure

If you're using "One-liner" every time, try "Observational" or "Setup/Punchline." Different structures force different creative paths.

### 3. Use Two-Topic Mode

Adding a second topic breaks the repetition pattern by forcing unexpected connections.

### 4. Change Your Voice Profile

A different profile produces different vocabulary, tone, and rhythm — which means different jokes.

### 5. Clear Your Session

Sometimes starting a completely fresh session (close and reopen the Generator) resets the creative context.

> **Tip:** If the same joke keeps appearing, it might actually be good — the system thinks it's the strongest match for your input. Try saving it and moving on to a different angle.`
  },
  {
    id: "ts-3", title: "Why Some Prompts Work Better Than Others", slug: "why-some-prompts-work-better",
    summary: "Understanding why prompt quality directly affects joke quality.",
    sectionId: "troubleshooting", sortOrder: 2, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-06T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Why Some Prompts Work Better Than Others

Not all prompts are created equal. Here's why some produce amazing results while others fall flat.

### The Specificity Factor

This is the #1 reason for quality differences. Compare:

- **Weak:** "Write a joke about food" → Generic, overused angles
- **Strong:** "Write a joke about ordering a salad at a pizza restaurant and feeling judged" → Specific, vivid, relatable

### The Relatability Factor

Jokes about experiences everyone has had tend to generate better results because there are more angles to explore:

- ✅ "Pretending to know what you're doing at a new gym"
- ✅ "The anxiety of someone watching you parallel park"
- ❌ "Advanced microfluidics" (too niche for comedy)

### The Surprise Factor

Prompts that contain built-in surprise or contrast tend to produce funnier jokes:

- ✅ "The difference between what people say in meetings and what they're actually thinking"
- ✅ "Things that are socially acceptable at 3 AM but not at 3 PM"

### What to Do About Weak Results

1. Make your topic more specific
2. Add an emotional angle
3. Include a contrast or comparison
4. Try Two-Topic mode
5. Switch your Voice Profile

> **Tip:** Before blaming the tool, try rewriting your prompt three different ways. If all three produce weak results, the topic itself might not have strong comedy potential — move on to something else.`
  },
  {
    id: "ts-4", title: "Login Problems", slug: "login-problems",
    summary: "Solutions for common sign-in issues.",
    sectionId: "troubleshooting", sortOrder: 3, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-03-07T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Login Problems

Can't get into your account? Try these steps.

### Forgot Your Password

1. Go to the login page
2. Click **Forgot Password**
3. Enter your email address
4. Check your inbox for the reset link
5. Create a new password

> **Note:** The reset link expires after 24 hours. If it's expired, request a new one.

### Email Not Recognized

If the system says your email isn't found:

- Double-check for typos
- Try any other email addresses you might have used
- Check if you signed up with Google instead of email

### Account Locked

After 5 failed login attempts, your account is temporarily locked for 15 minutes. This is a security feature. Wait 15 minutes and try again.

### Google Sign-In Issues

If "Continue with Google" isn't working:

1. Make sure pop-ups are allowed for jokeslapper.com
2. Clear your browser cookies
3. Try an incognito/private window
4. Make sure you're using the same Google account you signed up with

### Still Can't Log In?

Contact support at support@jokeslapper.com with:

- The email address you're trying to use
- What happens when you try to log in
- Any error messages you see`
  },
  {
    id: "ts-5", title: "Clearing Cache and Refreshing the App", slug: "clearing-cache-and-refreshing",
    summary: "How to clear your browser cache to fix display and performance issues.",
    sectionId: "troubleshooting", sortOrder: 4, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-07T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Clearing Cache and Refreshing the App

If Joke Slapper is behaving strangely — showing old content, loading slowly, or displaying things incorrectly — clearing your browser cache usually fixes it.

### Quick Fix: Hard Refresh

Before clearing your entire cache, try a hard refresh:

- **Mac:** Cmd + Shift + R
- **Windows:** Ctrl + Shift + R

This forces the browser to reload the page without using cached files.

### Clearing Cache in Chrome

1. Click the three-dot menu in the top right
2. Go to **Settings → Privacy and Security → Clear browsing data**
3. Set time range to "Last hour" or "Last 24 hours"
4. Check "Cached images and files"
5. Click **Clear data**

### Clearing Cache in Safari

1. Go to **Safari → Settings → Privacy**
2. Click **Manage Website Data**
3. Find jokeslapper.com
4. Click **Remove**

### Clearing Cache in Firefox

1. Click the hamburger menu
2. Go to **Settings → Privacy & Security**
3. Under "Cookies and Site Data," click **Clear Data**
4. Check "Cached Web Content"
5. Click **Clear**

### After Clearing Cache

Log back into Joke Slapper. Your data (jokes, folders, settings) is stored on our servers, so nothing is lost when you clear your cache.

> **Tip:** If problems persist after clearing cache, try a different browser entirely. This helps determine if the issue is browser-specific.`
  },
];
