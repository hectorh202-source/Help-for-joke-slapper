import { HelpSection, HelpArticle } from "@/types/help";

export const initialSections: HelpSection[] = [
  { id: "s1", title: "Getting Started", slug: "getting-started", icon: "Rocket", parentId: null, sortOrder: 0, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z" },
  { id: "s1a", title: "Quick Start Guide", slug: "quick-start-guide", icon: "Zap", parentId: "s1", sortOrder: 0, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z" },
  { id: "s1b", title: "Your First Project", slug: "your-first-project", icon: "FileText", parentId: "s1", sortOrder: 1, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z" },
  { id: "s2", title: "Account & Billing", slug: "account-billing", icon: "CreditCard", parentId: null, sortOrder: 1, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z" },
  { id: "s2a", title: "Managing Your Account", slug: "managing-your-account", icon: "User", parentId: "s2", sortOrder: 0, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z" },
  { id: "s2b", title: "Plans & Pricing", slug: "plans-pricing", icon: "DollarSign", parentId: "s2", sortOrder: 1, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z" },
  { id: "s3", title: "Joke Generation", slug: "joke-generation", icon: "Smile", parentId: null, sortOrder: 2, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z" },
  { id: "s4", title: "Builder", slug: "builder", icon: "Wrench", parentId: null, sortOrder: 3, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z" },
  { id: "s5", title: "Voice Profiles", slug: "voice-profiles", icon: "Mic", parentId: null, sortOrder: 4, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z" },
  { id: "s6", title: "Folders & Library", slug: "folders-library", icon: "FolderOpen", parentId: null, sortOrder: 5, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z" },
  { id: "s7", title: "Settings", slug: "settings", icon: "Settings", parentId: null, sortOrder: 6, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z" },
  { id: "s8", title: "Troubleshooting", slug: "troubleshooting", icon: "AlertCircle", parentId: null, sortOrder: 7, isPublished: true, createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z" },
];

export const initialArticles: HelpArticle[] = [
  {
    id: "a1", title: "Create Your First Joke", slug: "create-your-first-joke", summary: "Learn how to generate your very first joke using our platform.",
    sectionId: "s1a", sortOrder: 0, isPublished: true, isFeatured: true, isPopular: true,
    createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-13T00:00:00Z",
    body: `## Welcome to Joke Generator\n\nGetting started is easy. Follow these steps to create your first joke in minutes.\n\n### Step 1: Open the Builder\n\nNavigate to the Builder from the main dashboard. You'll see a clean workspace ready for your first creation.\n\n### Step 2: Choose a Style\n\nSelect from our curated list of comedy styles:\n\n- **One-liner** — Short, punchy jokes\n- **Story-based** — Longer narrative jokes\n- **Observational** — Everyday humor\n- **Wordplay** — Puns and clever language\n\n### Step 3: Set Your Topic\n\nEnter a topic or keyword. The more specific you are, the better the results.\n\n> **Tip:** Try combining two unrelated topics for unexpected humor. For example, "cats + quantum physics" often produces great results.\n\n### Step 4: Generate & Refine\n\nClick **Generate** and review the results. You can:\n\n1. Regenerate for new variations\n2. Edit the output directly\n3. Save to your library\n4. Share with your team\n\n> **Note:** Your first 10 generations each day are free. Premium plans include unlimited generations.\n\n### What's Next?\n\nNow that you've created your first joke, explore **Voice Profiles** to customize the delivery style, or check out **Folders & Library** to organize your content.`
  },
  {
    id: "a2", title: "Understanding Your Dashboard", slug: "understanding-your-dashboard", summary: "A tour of the main dashboard and its key features.",
    sectionId: "s1a", sortOrder: 1, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-03-02T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z",
    body: `## Your Dashboard Overview\n\nThe dashboard is your home base. Here's what you'll find.\n\n### Recent Activity\n\nYour latest creations and edits appear at the top, making it easy to pick up where you left off.\n\n### Quick Actions\n\nThe action bar gives you one-click access to:\n\n- Create a new joke\n- Browse your library\n- Access settings\n- View analytics\n\n### Stats at a Glance\n\nSee your usage stats, including:\n\n1. Total jokes created\n2. Jokes shared this week\n3. Remaining daily generations\n4. Library size\n\n> **Tip:** Pin your most-used sections to the sidebar for faster navigation.`
  },
  {
    id: "a3", title: "Setting Up Your Account", slug: "setting-up-your-account", summary: "Complete your account setup to unlock all features.",
    sectionId: "s1b", sortOrder: 0, isPublished: true, isFeatured: true, isPopular: false,
    createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-11T00:00:00Z",
    body: `## Complete Your Profile\n\nA complete profile helps you get the most out of the platform.\n\n### Basic Information\n\nFill in your name, profile photo, and bio. This information is visible to team members if you're on a team plan.\n\n### Preferences\n\nSet your default preferences:\n\n- **Default comedy style** — Choose your go-to style\n- **Language** — Set your preferred language\n- **Notifications** — Control email and in-app alerts\n\n### Connect Your Tools\n\nIntegrate with the tools you already use:\n\n- Slack\n- Google Workspace\n- Microsoft Teams\n\n> **Note:** Some integrations require a Premium or Business plan.`
  },
  {
    id: "a4", title: "How Billing Works", slug: "how-billing-works", summary: "Understand our billing cycles, payment methods, and invoices.",
    sectionId: "s2b", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-03-03T00:00:00Z", updatedAt: "2026-03-13T00:00:00Z",
    body: `## Billing Overview\n\nWe keep billing simple and transparent.\n\n### Billing Cycle\n\nAll plans are billed monthly or annually. Annual plans save you 20% compared to monthly billing.\n\n### Payment Methods\n\nWe accept:\n\n- Credit and debit cards (Visa, Mastercard, Amex)\n- PayPal\n- Wire transfer (Enterprise plans only)\n\n### Invoices\n\nInvoices are generated automatically and sent to your billing email. You can also download them from **Settings → Billing → Invoice History**.\n\n> **Tip:** Add a billing email different from your login email under Settings → Billing to keep your finance team in the loop.\n\n### Upgrading or Downgrading\n\nYou can change your plan at any time. When upgrading, you'll be charged a prorated amount. When downgrading, the change takes effect at the start of your next billing cycle.`
  },
  {
    id: "a5", title: "Changing Your Password", slug: "changing-your-password", summary: "How to update your password and keep your account secure.",
    sectionId: "s2a", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-03-04T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z",
    body: `## Update Your Password\n\nKeeping your password secure is important. Here's how to change it.\n\n### Steps\n\n1. Go to **Settings → Security**\n2. Click **Change Password**\n3. Enter your current password\n4. Enter your new password (must be at least 8 characters)\n5. Confirm your new password\n6. Click **Save**\n\n> **Warning:** If you've forgotten your current password, use the "Forgot Password" link on the login page instead.\n\n### Password Requirements\n\n- At least 8 characters\n- At least one uppercase letter\n- At least one number\n- At least one special character\n\n### Two-Factor Authentication\n\nFor extra security, enable two-factor authentication under **Settings → Security → 2FA**.`
  },
  {
    id: "a6", title: "Using the Joke Builder", slug: "using-the-joke-builder", summary: "Master the Builder tool with this comprehensive guide.",
    sectionId: "s4", sortOrder: 0, isPublished: true, isFeatured: true, isPopular: false,
    createdAt: "2026-03-05T00:00:00Z", updatedAt: "2026-03-13T00:00:00Z",
    body: `## The Builder\n\nThe Builder is your creative workspace for crafting perfect jokes.\n\n### Interface Overview\n\nThe Builder has three main areas:\n\n- **Input Panel** — Where you set your parameters\n- **Preview Panel** — See results in real-time\n- **Controls** — Fine-tune your output\n\n### Advanced Controls\n\nFor more control over your jokes, use:\n\n1. **Tone slider** — Adjust from subtle to over-the-top\n2. **Length control** — Set word count targets\n3. **Audience selector** — Choose age-appropriateness\n4. **Format picker** — One-liner, setup-punchline, or story\n\n> **Tip:** Save your favorite parameter combinations as presets for quick access later.`
  },
  {
    id: "a7", title: "Creating Voice Profiles", slug: "creating-voice-profiles", summary: "Set up and customize voice profiles for consistent comedy styles.",
    sectionId: "s5", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-06T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z",
    body: `## Voice Profiles\n\nVoice Profiles let you save and reuse specific comedy styles.\n\n### Creating a Profile\n\n1. Go to **Voice Profiles** in the sidebar\n2. Click **New Profile**\n3. Name your profile (e.g., "Corporate Humor")\n4. Set the style parameters\n5. Add sample jokes for reference\n6. Save\n\n### Using Profiles\n\nOnce created, select a voice profile in the Builder before generating. The AI will match the tone and style of your profile.\n\n> **Tip:** Create different profiles for different audiences — one for social media, one for presentations, one for casual conversations.`
  },
  {
    id: "a8", title: "Organizing Your Library", slug: "organizing-your-library", summary: "Keep your jokes organized with folders, tags, and smart filters.",
    sectionId: "s6", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-07T00:00:00Z", updatedAt: "2026-03-11T00:00:00Z",
    body: `## Library Management\n\nAs your joke collection grows, organization becomes key.\n\n### Folders\n\nCreate folders to group related jokes:\n\n- By topic (Technology, Food, Travel)\n- By occasion (Presentations, Social Media, Parties)\n- By status (Drafts, Ready, Archive)\n\n### Tags\n\nAdd tags for flexible cross-referencing. A joke can have multiple tags but only live in one folder.\n\n### Smart Filters\n\nUse the filter bar to quickly find jokes by:\n\n1. Date created\n2. Style\n3. Rating\n4. Tags\n5. Folder\n\n> **Tip:** Use the "Favorites" tag to build a quick-access list of your best material.`
  },
  {
    id: "a9", title: "Common Issues & Fixes", slug: "common-issues-fixes", summary: "Solutions to the most common problems users encounter.",
    sectionId: "s8", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: true,
    createdAt: "2026-03-08T00:00:00Z", updatedAt: "2026-03-14T00:00:00Z",
    body: `## Troubleshooting Common Issues\n\nHere are solutions to the most frequently reported problems.\n\n### Generation Not Working\n\nIf the generator isn't producing results:\n\n1. Check your internet connection\n2. Verify you haven't exceeded your daily limit\n3. Try clearing your browser cache\n4. Log out and log back in\n\n### Slow Performance\n\nIf the app feels slow:\n\n- Close other browser tabs\n- Try a different browser\n- Disable browser extensions temporarily\n- Check our status page for any ongoing issues\n\n### Login Problems\n\nCan't log in?\n\n1. Double-check your email address\n2. Use the "Forgot Password" link\n3. Check if Caps Lock is on\n4. Try an incognito/private window\n\n> **Warning:** After 5 failed login attempts, your account will be temporarily locked for 15 minutes.\n\n### Still Need Help?\n\nIf none of these solutions work, contact our support team at support@example.com.`
  },
  {
    id: "a10", title: "Notification Settings", slug: "notification-settings", summary: "Control when and how you receive notifications.",
    sectionId: "s7", sortOrder: 0, isPublished: true, isFeatured: false, isPopular: false,
    createdAt: "2026-03-09T00:00:00Z", updatedAt: "2026-03-12T00:00:00Z",
    body: `## Manage Notifications\n\nStay informed without being overwhelmed.\n\n### Notification Types\n\n- **Email** — Daily digests and important updates\n- **In-App** — Real-time alerts within the platform\n- **Push** — Browser notifications (if enabled)\n\n### Customizing\n\nGo to **Settings → Notifications** to control:\n\n1. Which events trigger notifications\n2. Delivery method for each event type\n3. Quiet hours (no notifications during set times)\n4. Digest frequency (daily, weekly, or off)\n\n> **Tip:** Enable notifications for "Team Activity" if you're collaborating with others.`
  },
];
