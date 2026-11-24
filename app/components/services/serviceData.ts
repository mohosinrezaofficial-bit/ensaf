export type LegalService = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  overviewHeading: string;
  overview: string;
  areas: { title: string; description: string }[];
  approach: { title: string; description: string }[];
};

export const legalServices: LegalService[] = [
  {
    slug: "criminal-law",
    title: "Criminal Law",
    description:
      "Defense representations for various criminal charges. Investigations, evidence analysis, and bail applications.",
    eyebrow: "Strategic Criminal Defense",
    lead:
      "Clear guidance and focused representation when a criminal charge puts your rights, reputation, or future at stake.",
    overviewHeading: "Understand your options. Plan your next steps.",
    overview:
      "Criminal allegations can move quickly and feel overwhelming. We help clients understand the process, review the circumstances of a case, and make informed decisions at each stage.",
    areas: [
      {
        title: "Case review and defense planning",
        description:
          "A careful review of the allegations and available information to identify practical next steps.",
      },
      {
        title: "Investigations and evidence",
        description:
          "Thoughtful assessment of evidence, witness accounts, and investigative procedures.",
      },
      {
        title: "Bail and court proceedings",
        description:
          "Guidance through bail applications, hearings, and related court appearances.",
      },
    ],
    approach: [
      {
        title: "Prompt attention",
        description:
          "We help you understand important deadlines and the immediate decisions in front of you.",
      },
      {
        title: "Clear communication",
        description:
          "You receive straightforward explanations of the process and your available options.",
      },
      {
        title: "Focused advocacy",
        description:
          "Your representation is shaped around the facts and circumstances of your case.",
      },
    ],
  },
  {
    slug: "corporate-law",
    title: "Corporate Law",
    description:
      "Professional legal guidance for businesses, corporate governance, contracts, and commercial disputes.",
    eyebrow: "Practical Business Counsel",
    lead:
      "Legal support for businesses navigating important decisions, agreements, and commercial challenges.",
    overviewHeading: "Build with clarity. Move forward with confidence.",
    overview:
      "Business decisions often carry legal and operational consequences. We help organizations understand their obligations, document key relationships, and address disputes with a practical perspective.",
    areas: [
      {
        title: "Business formation and governance",
        description:
          "Guidance on business structures, governance documents, and ongoing organizational matters.",
      },
      {
        title: "Contracts and transactions",
        description:
          "Review and preparation of commercial agreements to clarify responsibilities and expectations.",
      },
      {
        title: "Commercial disputes",
        description:
          "Counsel for businesses working through contract disagreements and other commercial conflicts.",
      },
    ],
    approach: [
      {
        title: "Business-minded advice",
        description:
          "We consider your legal needs alongside your business goals and practical constraints.",
      },
      {
        title: "Careful documentation",
        description:
          "Clear agreements help set expectations and support sound working relationships.",
      },
      {
        title: "Responsive counsel",
        description:
          "We work to make complex legal issues easier to understand and act on.",
      },
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    description:
      "Experienced legal assistance with family disputes, divorce proceedings, child custody, and family matters.",
    eyebrow: "Compassionate Family Counsel",
    lead:
      "Thoughtful guidance and steady representation for the personal decisions that shape your family's future.",
    overviewHeading: "Protect what matters most.",
    overview:
      "Family matters can be emotionally challenging as well as legally complex. We help clients understand their options and make informed decisions with care, discretion, and respect.",
    areas: [
      {
        title: "Divorce and separation",
        description:
          "Guidance through separation, divorce proceedings, and related agreements.",
      },
      {
        title: "Child custody and support",
        description:
          "Representation in parenting, custody, and child-support matters with children's wellbeing in mind.",
      },
      {
        title: "Family planning matters",
        description:
          "Legal assistance with adoption, guardianship, and agreements for families.",
      },
    ],
    approach: [
      {
        title: "Personal attention",
        description:
          "We listen carefully to understand your priorities and circumstances.",
      },
      {
        title: "Respectful guidance",
        description:
          "Sensitive family matters are handled with discretion and consideration.",
      },
      {
        title: "Practical next steps",
        description:
          "We explain the process and help you focus on decisions that matter now.",
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Law",
    description:
      "Legal representation for property transactions, ownership disputes, real estate contracts, and property rights.",
    eyebrow: "Property and Real Estate Counsel",
    lead:
      "Steady legal support for property transactions, contract questions, and ownership concerns.",
    overviewHeading: "Protect your interests in every property matter.",
    overview:
      "Real estate transactions and disputes can involve significant commitments. We help clients review their legal position, understand agreements, and work through property-related concerns.",
    areas: [
      {
        title: "Property transactions",
        description:
          "Legal guidance for buyers and sellers through key stages of property transactions.",
      },
      {
        title: "Real estate contracts",
        description:
          "Review and advice on the terms, obligations, and risks in property agreements.",
      },
      {
        title: "Ownership and property disputes",
        description:
          "Representation in disagreements involving ownership, boundaries, and property rights.",
      },
    ],
    approach: [
      {
        title: "Thorough review",
        description:
          "We take care to understand the documents, timeline, and issues in your matter.",
      },
      {
        title: "Clear explanations",
        description:
          "We make contract terms and legal options easier to understand.",
      },
      {
        title: "Practical resolution",
        description:
          "We help you evaluate available paths and the potential impact of each.",
      },
    ],
  },
  {
    slug: "personal-injury",
    title: "Personal Injury Law",
    description:
      "Dedicated legal representation for personal injury claims, accident cases, compensation, and liability disputes.",
    eyebrow: "Personal Injury Representation",
    lead:
      "Support and legal guidance as you navigate the impact of an injury and consider your options.",
    overviewHeading: "Put your recovery and rights in focus.",
    overview:
      "An unexpected injury can affect many parts of daily life. We help clients understand the claims process, organize relevant information, and evaluate potential paths forward.",
    areas: [
      {
        title: "Accident claims",
        description:
          "Guidance for people assessing legal options after an accident or injury.",
      },
      {
        title: "Liability and documentation",
        description:
          "Review of available records and information relevant to responsibility and damages.",
      },
      {
        title: "Negotiation and disputes",
        description:
          "Representation in discussions and disputes related to injury claims.",
      },
    ],
    approach: [
      {
        title: "Individual attention",
        description:
          "We take time to understand how the injury has affected your circumstances.",
      },
      {
        title: "Organized case review",
        description:
          "We help identify relevant records, timelines, and questions for your claim.",
      },
      {
        title: "Honest guidance",
        description:
          "We explain the process and discuss options without promising a particular outcome.",
      },
    ],
  },
  {
    slug: "health-care",
    title: "Health Care Policy",
    description:
      "Legal support for healthcare regulations, medical compliance, patient rights, and healthcare policy matters.",
    eyebrow: "Health Care Policy and Compliance",
    lead:
      "Legal guidance for healthcare organizations and individuals facing policy, regulatory, and patient-rights questions.",
    overviewHeading: "Navigate health care rules with greater clarity.",
    overview:
      "Health care requirements can be complex and change over time. We help clients understand relevant obligations, assess policy concerns, and address legal questions with care.",
    areas: [
      {
        title: "Regulatory guidance",
        description:
          "Support in understanding rules and requirements that affect healthcare services.",
      },
      {
        title: "Compliance and policy",
        description:
          "Review of policies and processes to help identify legal questions and areas for attention.",
      },
      {
        title: "Patient rights",
        description:
          "Guidance on legal concerns involving patient rights and healthcare decisions.",
      },
    ],
    approach: [
      {
        title: "Context first",
        description:
          "We learn how the legal question relates to your organization or personal situation.",
      },
      {
        title: "Careful analysis",
        description:
          "We help break down complex requirements into clear issues and options.",
      },
      {
        title: "Practical support",
        description:
          "Our guidance is focused on informed decision-making and next steps.",
      },
    ],
  },
];
