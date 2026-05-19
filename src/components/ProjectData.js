



export const Project = {
    p1:{
        intro:
        {
            title: 'Bledger',
            technologies: 'Figma, TensorFlow Lite, iOS/Android,',
            studyDescription: 'Designed and prototyped Bledger, a mobile Agentic budgeting app for gig workers using AI and gamification to prevent overspending. Led full UX cycle: user research (10+ interviews), Figma prototypes with micro-interactions, WCAG 2.1 AA compliance, and on-device AI (TensorFlow Lite). Simulated testing projected 25% engagement increase; created ethical-AI-focused portfolio case study.',
            image: 'https://via.placeholder.com/150',
            productDescription: 'Bledger is an Agentic budgeting app designed to help gig workers manage their finances effciently. It uses AI and gamification to encourage savings, budgeting and investing. Bledger offers features to prevent overspending and encourage better financial habits. The app provides personalized budgeting advice based on user behavior, expenses and financial goals, making it easier for people to stay on top of their finances.'
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
            ideationSummary: 'Through a structured ideation process, I was able to generate and refine innovative ideas for Bledger that directly address the needs and challenges of gig workers. This phase was crucial in shaping the overall design and functionality of the app, ensuring it provides real value to its users.',
            iterationImages:'https://via.placeholder.com/150',
            iterationDescription: 'Based on feedback from initial prototypes, I iterated on the design to enhance usability and address any identified issues. This iterative process involved refining the user interface, improving the AI recommendations, and ensuring that the gamification elements were engaging and effective in encouraging better financial habits.'

        },
        Prototype:
        {
            prototypeIntro:'',
            iterationImages: '',
            rationale:'',
            finalImages: '',
        },
        Test:
        { 
            testMethod:'Simulated Usability Testing',
            testDescription:'Conducted simulated usability testing of the Bledger prototype with a group of gig workers to evaluate its usability, effectiveness, and impact on financial management. The testing involved scenarios that mimicked real-life financial situations, allowing me to gather feedback on the app\'s features and user experience.',
            testResults:'- Users found the AI predictions on overspending to be accurate and helpful in preventing financial mistakes. 1.Integration with bank APIs was seamless, making it convenient for users to track their finances in one place. 2.The gamified micro-challenges effectively encouraged users to stay within their budget. 3.Notifications warning about approaching spending thresholds were appreciated by users as they helped in staying mindful of their expenses. 4.Users enjoyed the insights provided by AI on spending habits and budgetary actions, finding them insightful and actionable. 5.The option of allowing AI to make purchases on behalf was received with caution by some users, expressing concerns about security and privacy. 6.Syncing account balances using Plaid ensured that the recommendations provided by AI were accurate and relevant.',
            dataInsights: 'from the data collected: 1.Millennials and Gen Z users in gig economies value convenience and simplicity in financial tracking apps. 2.AI-driven insights and recommendations play a crucial role in guiding users towards meeting their financial goals. 3.Gamification elements can significantly enhance user engagement and motivation in sticking to their budget. 4.Security and privacy concerns are paramount when it comes to authorizing AI to make purchases on behalf of users. 5.Real-time notifications about spending thresholds are effective in helping users manage their finances proactively. 6.Integration with bank APIs is essential for providing a seamless user experience and accurate financial tracking.',
            resultInsights:'- AI predictions on overspending were found accurate and helpful. 1.Integration with bank APIs was seamless and convenient for users. 2.Gamified micro-challenges effectively encouraged users to stay within their budget. 3.Notifications about approaching spending thresholds were appreciated. 4.Users valued insights provided by AI on spending habits and budgetary actions. 5.Some users expressed caution regarding allowing AI to make purchases on their behalf. 6.Syncing account balances using Plaid ensured accurate recommendations from AI. 7.Millennials and Gen Z users in gig economies prioritize convenience and simplicity in financial apps. 8.AI-driven insights guide users towards meeting financial goals. 9.Gamification elements enhance user engagement and motivation for budget adherence. 10.Security and privacy concerns are significant when authorizing AI for purchases.',
            testSummary: 'The simulated usability testing provided valuable insights into how users interact with Bledger and the effectiveness of its features. The feedback highlighted the importance of AI-driven insights, gamification, and real-time notifications in enhancing user engagement and financial management. Additionally, it underscored the need to address security concerns when implementing agentic AI features.',
            conclusion:'Through the design and testing of Bledger, I was able to create a budgeting app that effectively addresses the unique financial challenges faced by gig workers. The app\'s predictive AI capabilities, agentic automation features, and user-centric design have the potential to significantly improve financial management for its users, helping them to save money, avoid overspending, and achieve their financial goals with greater ease and confidence.'
        },
    },
    p2:{
        intro:
        {
            title: 'Vibe Space',
            technologies: 'Figma,web,',
            studyDescription: 'Designed and prototyped "Vibe Space", a responsive web event matching platform. I executed a full UX cycle: user research, Figma prototypes and React JS development.',
            image: 'https://via.placeholder.com/150',
            productDescription: 'Vibe Space is an event matching platform that connects users with local events based on their interests and social vibes. The platform uses a unique algorithm to match users with events and people that align with their preferences, creating a personalized event and peer discovery experience. Vibe Space aims to foster community engagement and help users find events and people that resonate with their social and or professional vibe, making it easier for them to connect with like-minded individuals and explore new experiences in their area.'
        },
        empathy:
        {
            title: 'Empathy',
            methods: 'User Research, Empathy Maps, Insights',
            studyDescription: 'Conducted 10+ user interviews with gig workers to understand their financial challenges and needs. Developed detailed user personas and journey maps to identify pain points and opportunities for Bledger\'s design.',
            image: 'https://via.placeholder.com/150',
            personaIntro: 'Personas were created to represent and to understand exactly how this platform shifts the market. So I looked at  three distinct archetypes who feel the pain of traditional networking apps and platforms and find immediate relief in a self-healing, dynamic ecosystem.',
            persona1:'The High-Stakes Career Transition:"If I get ghosted one more time after spending an hour preparing for a portfolio review, I\'m just going back to cold-messaging people on LinkedIn".Name: Maya Chen Role: Aspiring Product Designer / Front-End Developer Age: 21 Tech Stack/Tools: Figma, React, Tailwind CSS. The Context Maya is a self-taught designer building out her first major portfolio. She attends virtual industry matchmaking events specifically to find high-quality portfolio feedback, mentorship, and potential junior roles. She is highly motivated but has a limited amount of time outside of her current job. Her Pain Points: The Empty Room: She prepares tailored questions for a specific match, only for the partner to no-show. She sits staring at her own webcam for 10 minutes, feeling rejected and anxious.The "Black Box" Match: When a match does connect, she has no idea why they were paired. The first 4 minutes of a 10-minute session are wasted on awkward, generic small talk ("So... what do you do?"). Onboarding Fatigue: She abandons platforms that require her to fill out long, tedious 30-question surveys just to get a basic match. How the JIT Platform Saves Her Day If her mentor no-shows, the Pivot Transition seamlessly routes her to an active, verified fallback match within 45 seconds—no dead time. The Context Card populates on her screen instantly, showing that her match also works with React and fine arts. The system gives her an instant icebreaker question, maximizing her 10 minutes.',
            personaImage1: 'https://via.placeholder.com/150',
            empathyMapImage1: 'https://via.placeholder.com/150',
            persona2:' The Time-Poor Industry Mentor: "My calendar is budgeted down to the minute. If I dedicate two hours to scouting talent or mentoring, every single session needs to be active and relevant." Name: Marcus Vance Role: Cybersecurity Engineering Manager & Scholarship Board Member Age: 34 Tech Stack/Tools: Cloud Architecture, Threat Intelligence, Enterprise CRMs. The Context Marcus is deeply passionate about bringing fresh, diverse talent into the cybersecurity and engineering space. He participates in elite networking events to scout potential scholarship candidates and junior talent. His time is incredibly expensive. His Pain Points, Disrespect of Time: Traditional apps lock him into a rigid schedule. If an attendee drops out, Marcus is trapped in a useless block of time where he could be answering critical security tickets. Identity vs. Intent: He gets matched with people who just want a general chat, rather than candidates whose specific skill gaps align with his precise engineering expertise. Post-Event Amnesia: After meeting 15 people in two hours, their names and faces blur together. He loses track of the standout candidates because there’s no easy way to export their info. How the JIT Platform Saves His Day: The platform\'s Pre-Flight Lounge filters out inactive users before the round starts, ensuring Marcus is only paired with attendees who have actively checked in. The Vector-Based Match Logic pairs him with candidates whose trajectory specifically targets cybersecurity and technical design, making the conversations immediately impactful. Post-event, he receives a structured Digital Goodie Bag with one-click CRM integration to instantly advance top talent to the interview pipeline.',
            personaImage2: 'https://via.placeholder.com/150',
            empathyMapImage2: 'https://via.placeholder.com/150',
            persona3: 'The Stressed Event Organizer" I’m tired of paying for \'premium\' networking software only to spend the entire night manually fixing broken schedules on a backup spreadsheet." Name: Elena Rostova Role: VP of Operations at TechSummit Global Age: 41 Tech Stack/Tools: Eventbrite, Hubspot, Notion, Excel (Too much Excel) The Context: Elena designs and executes large-scale virtual and hybrid conferences for thousands of tech professionals. The high-fidelity networking track is her event’s primary selling point and major revenue driver. Her Pain Points: The Spreadsheet Nightmare: When attendees ghost, she gets flooded with angry customer support messages from people who were left waiting. She has to manually re-stitch schedules in real-time mid-event. Tanking Retention Rates: If the networking segment feels clunky or broken, attendees don’t return the following year, which directly impacts ticket sales and sponsor renewals. Data Silos: She can’t easily prove ROI to her corporate sponsors because traditional platform metrics only show "Logins," not actual successful connection rates. How the JIT Platform Saves Her Day. The Self-Healing State Machine automates crisis management. The system self-corrects and reshuffles broken matches instantly without Elena or her team ever lifting a finger. She gains access to a clean analytics dashboard showing Active Engagement Metrics (e.g., 94% session completion rate, zero orphaned users), which she can hand directly to sponsors to secure next year\'s funding.',
            personaImage3: 'https://via.placeholder.com/150',
            empathyMapImage3: 'https://via.placeholder.com/150',
            insights:'',
            summary: ''
        },
        define:
        {
            problemStatement: '',
            HypothesisStatement:'',
            designPrinciples: ' ',
            valueProposition: '',
            competitiveAudit: '',
            competitiveAuditImage: 'https://via.placeholder.com/150',
            informationArchitecture:'https://via.placeholder.com/150',
            userFlows:'https://via.placeholder.com/150',
            wireframes:'https://via.placeholder.com/150',
            defineSummary: ''

        },
        Ideate:
        {
            IdeationMethods: 'Brainstorming, "How Might We?" Questions, Concept Development and Crazy 8s Sketching',  
            designChallenge: '',
            crazy8s: '',
            earlySketches:'https://via.placeholder.com/150',
            conceptDevelopment: 'Selected the most promising ideas from the how might we session and developed them into more detailed concepts, including user flows, wireframes, and interactive prototypes.',
            crazy8Images1: 'https://via.placeholder.com/150',
            crazy8Images2: 'https://via.placeholder.com/150',
            crazy8Images3: 'https://via.placeholder.com/150',
            ideationSummary: '',
            iterationImages: 'https://via.placeholder.com/150',
            iterationDescription: ''

        },
        Prototype:
        {
            prototypeIntro:'',
            iterationImages: '',
            rationale:'',
            finalImages: '',
        },
        Test:
        { 
            testMethod:'Simulated Usability Testing',
            testDescription:' ',
            testResults:'',
            dataInsights: ' ',
            resultInsights:'',
            testSummary: ' ',
            conclusion:''
        },
    },
};