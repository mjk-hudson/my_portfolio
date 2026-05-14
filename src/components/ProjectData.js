



export const Project = {
    p1:{
        intro:
        {
            title: 'Bledger',
            technologies: 'Figma, TensorFlow Lite, iOS/Android,',
            StudyDescription: 'Designed and prototyped Bledger, a mobile Agentic budgeting app for gig workers using AI and gamification to prevent overspending. Led full UX cycle: user research (10+ interviews), Figma prototypes with micro-interactions, WCAG 2.1 AA compliance, and on-device AI (TensorFlow Lite). Simulated testing projected 25% engagement increase; created ethical-AI-focused portfolio case study.',
            image: 'https://via.placeholder.com/150',
            ProductDescription: 'Bledger is an Agentic budgeting app designed to help gig workers manage their finances effciently. It uses AI and gamification to encourage savings, budgeting and investing. Bledger offers features to prevent overspending and encourage better financial habits. The app provides personalized budgeting advice based on user behavior, expenses and financial goals, making it easier for people to stay on top of their finances.'
        },
        empathy:
        {
            title: 'Empathy',
            methods: 'User Interviews, User Research, Empathy Maps, User Journey Mapping and Insights',
            StudyDescription: 'Conducted 10+ user interviews with gig workers to understand their financial challenges and needs. Developed detailed user personas and journey maps to identify pain points and opportunities for Bledger\'s design.',
            image: 'https://via.placeholder.com/150',
            userResearch: 'Target audience: Everyday people who simply want an easy, clean, non-technical way to track their personal budget and spending — no spreadsheets, no financial jargon, just calm, consumable clarity.',
            personaIntro: 'Created user personas representing different types of gig workers, such as a rideshare driver, a freelance designer, and a delivery worker. Each persona included insights into their financial habits, challenges, and goals.',
            persona1:' Maya Rodriguez Age: 28 Occupation: Freelance Graphic Designer Location: Brooklyn, NY Background: Maya is a creative freelancer with irregular income from client projects. She juggles multiple gigs but often feels anxious about unexpected expenses like software subscriptions or equipment upgrades. Goals: Build an emergency fund and track spending proactively without manual effort. Pain Points: Forgets to categorize transactions; surprised by low balances mid-month. Behaviors: Checks her phone multiple times a day; appreciates gamified nudges and simple visuals. Quote: "I need something that feels like a friend reminding me to save, not a boring spreadsheet."',
            personaImage1: 'https://via.placeholder.com/150',
            persona2:' Jamal Thompson Age: 35 Occupation: Rideshare Driver Location: Atlanta, GA Background: Jamal relies on rideshare driving for income but faces unpredictable earnings due to fluctuating demand and expenses like car maintenance. He struggles to save consistently and often feels overwhelmed by financial management. Goals: Create a stable budget that adapts to his variable income and helps him save for future expenses. Pain Points: Difficulty tracking irregular income; stressed about unexpected costs. Behaviors: Uses budgeting apps but finds them too rigid; values real-time insights and actionable advice. Quote: "I need a budget that understands my hustle and helps me stay ahead of the game."',
            personaImage2: 'https://via.placeholder.com/150',
            journeyMapping: 'Mapped the user journey for a typical gig worker, highlighting key touchpoints where Bledger could provide value, such as during income fluctuations, bill payments, and savings goals.',
            journeyMapImage:'https://via.placeholder.com/150',
            painGains: 'Identified common pain points such as irregular income, difficulty tracking expenses, and lack of financial planning tools and practical advice. These insights informed the design of Bledger\'s features to address these specific challenges and benefits that include...Fragmented Tracking, Multiple accounts and cards make it impossible to see the "big picture", but a Unified Snapshot Plaid integration and minimal UI provide one "source of truth." Income Volatility, traditional budgets don\'t work when you don\'t have a fixed salary. Predictive AI, predicting overspending based on historical averages and current trends. "Ghost" Subscriptions, forgetting about recurring bills and rent.(Bledger detects and reminds users about these "ghost" expenses). Agentic Oversight AI ensures funds are present or alerts the user before a transaction hits. Analysis Paralysis Knowing they should invest but not knowing where to start. Automated Action, Agentic AI can buy stocks/crypto or automatically move funds between eligable accounts on the user\'s behalf based on their goals and permissions.',
            empathyMapImage: 'https://via.placeholder.com/150',
            insights:'I gained insights into the emotional and psychological aspects of gig workers relationship with money, including stress, uncertainty, and the desire for control and autonomy.Given the target audience (Gen Z/Millennials) and the complexity of agentic AI, the "glanceable" design you mentioned is your most critical asset. Users in this demographic value transparency. While they want the AI to do the work, they need to feel they can "intervene" or "veto" an AI-suggested purchase at a glance.',
            summary: 'Through extensive user research, I gained deep insights into the financial struggles of gig workers. This empathy-driven approach allowed me to design Bledger in a way that truly addresses their unique needs and challenges, ensuring the app is both useful and user-friendly.'
        },
        define:
        {
            problemStatement: 'Jamal is a freelance gig worker with a fluctuating income who needs a predictive, automated way to manage volatile cash flow because manual tracking is too time-consuming and often fails to prevent overdrafts before they happen.',
            HypothesisStatement:'If we provide Majik with a glanceable, agentic AI dashboard that predicts overspending and autonomously safeguards bill payments, then he will experience reduced financial anxiety and fewer late fees, regardless of his weekly income volatility.',
            designPrinciples: '1. Simplicity: The app should be easy to use and understand, with a clean and intuitive interface that minimizes cognitive load. 2. Transparency: Users should feel in control of the AI features, with clear explanations of how recommendations are generated and the ability to intervene or veto suggestions. 3. Personalization: The app should provide tailored advice and insights based on individual user behavior, preferences, and financial goals. 4. Proactivity: The app should anticipate user needs and provide timely notifications and recommendations to help prevent financial issues before they arise. 5. Inclusivity: The design should be accessible to a diverse range of users, including those with varying levels of financial literacy and different types of gig work.',
            valueProposition: 'This defines why a user would choose Bledger over a traditional competitor like Mint or Rocket Money. Predictive Foresight, Unlike apps that tell you what you already spent, Bledger uses AI to warn you about spending "thresholds" before you cross them.Agentic Automation, The "Co-Pilot" mode goes beyond alerts by autonomously ensuring rent is covered and executing micro-investments in stocks or crypto based on your goals.Minimalist Clarity, A "glanceable" UI designed for high-speed decision-making, removing the "financial fog" of complex banking spreadsheets.Gamified Discipline, Micro-challenges and reward points turn the chore of saving into a feedback loop that encourages long-term financial health.',
            competitiveAudit: 'Compared to traditional budgeting apps like Mint or Rocket Money, Bledger offers a unique value proposition with its predictive AI capabilities and agentic automation features. While Mint provides comprehensive budgeting tools and financial tracking, it lacks proactive insights and automation that can help users manage volatile income effectively. Rocket Money focuses on subscription management and expense tracking but does not offer the same level of predictive foresight or personalized financial advice. Bledger stands out by providing a more dynamic and user-centric approach to financial management, specifically tailored for gig workers with fluctuating incomes.',
            competitiveAuditImage: 'https://via.placeholder.com/150',
            informationArchitecture:'https://via.placeholder.com/150',
            userFlows:'https://via.placeholder.com/150',
            wireframes:'https://via.placeholder.com/150',
            defineSummary: 'By clearly defining the problem statement, hypothesis, design principles, and value proposition, I was able to establish a strong foundation for the design of Bledger. This structured approach ensured that every design decision was aligned with the core needs of the target users and the unique challenges they face in managing their finances as gig workers.'

        },
        Ideate:
        {
            IdeationMethods: 'Brainstorming, "How Might We?" Questions, Concept Development and Crazy 8s Sketching',  
            designChallenge: 'How might we create an intuitive budgeting app that uses AI to help gig workers manage their finances effectively, providing real-time insights and proactive recommendations to prevent overspending and encourage savings?',
            crazy8s: 'I generated a wide range of ideas for features and design elements, such as predictive spending alerts, automated bill payments, gamified savings challenges, and a minimalist dashboard for quick insights.',
            earlySketches:'https://via.placeholder.com/150',
            conceptDevelopment: 'Selected the most promising ideas from the how might we session and developed them into more detailed concepts, including user flows, wireframes, and interactive prototypes.',
            crazy8Images1: 'https://via.placeholder.com/150',
            crazy8Images2: 'https://via.placeholder.com/150',
            crazy8Images3: 'https://via.placeholder.com/150',
            ideationSummary: 'Through a structured ideation process, I was able to generate and refine innovative ideas for Bledger that directly address the needs and challenges of gig workers. This phase was crucial in shaping the overall design and functionality of the app, ensuring it provides real value to its users.'

        },
        Prototype:
        {

        },
        Test:
        { 

        }
    },
    p2:{

    },
    p3:{

    }
};