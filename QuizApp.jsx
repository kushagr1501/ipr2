import React, { useState } from 'react';

const QuizApp = () => {
    // Sample quiz data based on your JSON structure
    const quizData = [
        {
            "question_no": 1,
            "question": "What is the origin of the word \"Patent\"?",
            "options": ["Latin word \"Patene\"", "French word \"Patente\"", "Old English word \"Pætent\"", "Greek word \"Patentas\""],
            "answer": "A"
        },
        {
            "question_no": 2,
            "question": "What does the word \"Patene\" mean in Latin?",
            "options": ["To open", "To protect", "To invent", "To disclose"],
            "answer": "A"
        },
        {
            "question_no": 3,
            "question": "What is the primary purpose of Patent System?",
            "options": ["To promote technological innovation and transfer", "To keep inventions secret", "To limit the use of inventions", "To grant exclusive rights to the inventor"],
            "answer": "A"
        },
        {
            "question_no": 4,
            "question": "What type of right is a patent?",
            "options": ["Territorial", "Global", "International", "Universal"],
            "answer": "A"
        },
        {
            "question_no": 5,
            "question": "Which of the following is NOT a feature of a patent right?",
            "options": ["It is granted for an unlimited period", "It is territorial in nature", "It can be enforced only in the country where it is granted.", "It provides exclusivity to the patent holder."],
            "answer": "A"
        },
        {
            "question_no": 6,
            "question": "What happens to a patented invention after the patent expires?",
            "options": ["It becomes open to the public for free use", "It remains the property of the patent holder", "It can only be used with the government's permission", "It is automatically renewed for another 20 years"],
            "answer": "A"
        },
        {
            "question_no": 7,
            "question": "Which of the following cannot be patented?",
            "options": ["Aesthetic creations", "A new and useful machine", "A new substance produced by manufacture", "A process to improve a known apparatus"],
            "answer": "A"
        },
        {
            "question_no": 8,
            "question": "In which of the following cases is a patent not advisable?",
            "options": ["When the invention is easy to reverse engineer", "When there is a high market potential", "When investors are interested in the invention", "When the invention aligns with business strategy"],
            "answer": "A"
        },
        {
            "question_no": 9,
            "question": "Who typically owns the rights to a patent in the case of an employee invention?",
            "options": ["The employer", "Both the employee and employer jointly", "The employee", "The government"],
            "answer": "A"
        },
        {
            "question_no": 10,
            "question": "What does \"non-obviousness\" in a patent requirement mean?",
            "options": ["The invention is not easily deduced by someone skilled in the field", "The invention is simple to understand", "The invention is legally protected", "The invention is hidden from public view"],
            "answer": "A"
        },

        {
            "question_no": 11,
            "question": "What is the significance of the Paris Convention for the Protection of Industrial Property?",
            "options": ["It allows priority filing in member countries", "It grants automatic patent rights worldwide", "It creates a global patent office", "It eliminates the need to file in multiple countries"],
            "answer": "A"
        },
        {
            "question_no": 12,
            "question": "Which of the following is a requirement for an invention to be patentable?",
            "options": ["Novelty, Inventive step, and Industrial applicability", "Utility, Simplicity, and Affordability", "Commercialization, Registration, and Exportability", "Design, Functionality, and Uniqueness"],
            "answer": "A"
        },
        {
            "question_no": 13,
            "question": "How long does a patent typically last from the date of filing?",
            "options": ["20 years", "10 years", "15 years", "25 years"],
            "answer": "A"
        },
        {
            "question_no": 14,
            "question": "What is the role of the Indian Patent Office?",
            "options": ["To examine and grant patents", "To promote trade fairs", "To fund inventions", "To sell inventions"],
            "answer": "A"
        },
        {
            "question_no": 15,
            "question": "Which international agreement established the TRIPS standards for intellectual property rights?",
            "options": ["WTO Agreement", "Paris Convention", "Berne Convention", "Madrid Agreement"],
            "answer": "A"
        },
        {
            "question_no": 16,
            "question": "Which is not a criterion of patentability?",
            "options": ["Public interest", "Novelty", "Inventive Step", "Industrial applicability"],
            "answer": "A"
        },
        {
            "question_no": 17,
            "question": "What does the term 'Patent Specification' refer to?",
            "options": ["A document describing the invention and how it works", "The manufacturing manual of an invention", "The legal contract between inventor and government", "The pricing strategy of the patented product"],
            "answer": "A"
        },
        {
            "question_no": 18,
            "question": "When should an inventor file a patent application?",
            "options": ["Before disclosing it to the public", "After publishing in a journal", "After launching the product", "After selling the invention"],
            "answer": "A"
        },
        {
            "question_no": 19,
            "question": "Which of these inventions is most likely patentable?",
            "options": ["A novel pharmaceutical drug", "A discovery of a natural law", "A mathematical formula", "A literary work"],
            "answer": "A"
        },
        {
            "question_no": 20,
            "question": "Why is prior art search important before filing a patent?",
            "options": ["To check if the invention is new", "To promote the invention", "To apply for copyright", "To find investors"],
            "answer": "A"
        },
        {
            "question_no": 21,
            "question": "Which of the following is a possible alternative to filing a patent application?",
            "options": ["Keeping the invention as a trade secret", "Filing a copyright application instead", "Assigning the invention to another inventor", "Publicly disclosing the invention"],
            "answer": "A"
        },



        {
            "question_no": 22,
            "question": "What is the significance of the \"disclosure requirement\" in a patent application?",
            "options": [
                "It provides enough detail for someone skilled in the field to carry out the invention",
                "It ensures the invention is kept secret",
                "It limits the scope of the patent",
                "It allows others to replicate the invention"
            ],
            "answer": "A"
        },
        {
            "question_no": 23,
            "question": "What is the effect of joint ownership on a patent?",
            "options": [
                "Each co-owner must consent to any licensing or enforcement of the patent",
                "One co-owner can license the patent without the consent of others",
                "The patent is automatically revoked",
                "The government takes over ownership"
            ],
            "answer": "A"
        },
        {
            "question_no": 24,
            "question": "Which of the following is NOT typically covered under patent law?",
            "options": [
                "A method of performing a mental act",
                "A machine used in agriculture",
                "A process for manufacturing a new product",
                "A novel chemical composition"
            ],
            "answer": "A"
        },
        {
            "question_no": 25,
            "question": "In most countries, patents are granted to which of the following?",
            "options": [
                "The first person to file a patent application",
                "The company funding the research",
                "The government",
                "The first inventor"
            ],
            "answer": "A"
        },
        {
            "question_no": 26,
            "question": "What is an Ordinary Application?",
            "options": [
                "A patent application without claiming priority from any other application",
                "A patent application claiming priority from another country",
                "A patent application with multiple inventions",
                "A patent application for a provisional patent"
            ],
            "answer": "A"
        },
        {
            "question_no": 27,
            "question": "What is a Convention Application?",
            "options": [
                "An application claiming priority from a previously filed application in a convention country",
                "An application claiming priority from a previously filed application in a non-convention country",
                "An application for a new invention without priority",
                "An application for minor modifications of an existing patent"
            ],
            "answer": "A"
        },
        {
            "question_no": 28,
            "question": "What is required when filing a Convention Application in India?",
            "options": [
                "A priority document and its English translation, if required",
                "Only a complete specification",
                "A detailed technical report",
                "Only a provisional specification"
            ],
            "answer": "A"
        },
        {
            "question_no": 29,
            "question": "What does PCT stand for?",
            "options": [
                "Patent Cooperation Treaty",
                "Patent Convention Treaty",
                "Priority Country Treaty",
                "Patent Cooperation Transaction"
            ],
            "answer": "A"
        },
        {
            "question_no": 30,
            "question": "How many countries can a PCT International Application be validated in?",
            "options": [
                "Up to 142 countries",
                "Up to 100 countries",
                "Up to 120 countries",
                "Up to 160 countries"
            ],
            "answer": "A"
        },
        {
            "question_no": 31,
            "question": "What is the main advantage of filing a PCT International Application?",
            "options": [
                "Single international application seeking protection in multiple countries",
                "Faster patent processing",
                "Immediate grant of a global patent",
                "Exemption from national phase entry"
            ],
            "answer": "A"
        },
        {
            "question_no": 32,
            "question": "What is provided by a PCT International Search Report?",
            "options": [
                "Prior art citations and assessment of novelty",
                "Final grant of the patent",
                "Legal status of the invention",
                "Commercial viability of the invention"
            ],
            "answer": "A"
        },
        {
            "question_no": 33,
            "question": "What happens if the applicant does not enter the national phase within the prescribed time limit?",
            "options": [
                "The international application becomes void",
                "The patent is granted automatically",
                "The application is transferred to another country",
                "The application is put on hold indefinitely"
            ],
            "answer": "A"
        },
        {
            "question_no": 34,
            "question": "What is a Patent of Addition?",
            "options": [
                "A patent for an improvement or modification of an existing patent",
                "A patent for a completely new invention",
                "A patent for a similar invention filed in another country",
                "A patent for a group of related inventions"
            ],
            "answer": "A"
        },
        {
            "question_no": 35,
            "question": "When does a Patent of Addition expire?",
            "options": [
                "When the main patent expires",
                "10 years after filing",
                "20 years after filing",
                "After the inventor's death"
            ],
            "answer": "A"
        },
        {
            "question_no": 36,
            "question": "What is a Divisional Application?",
            "options": [
                "An application divided out of an existing application claiming more than one invention",
                "An application for patent protection in a specific industry",
                "An application for the same invention in multiple countries",
                "An application for a completely new invention"
            ],
            "answer": "A"
        },
        {
            "question_no": 37,
            "question": "What is the priority date for Divisional Applications?",
            "options": [
                "The same as the parent application's priority date",
                "The date of filing of the divisional application",
                "The date of publication of the main patent",
                "The date of grant of the main patent"
            ],
            "answer": "A"
        },
        {
            "question_no": 38,
            "question": "What is a Patent Specification?",
            "options": [
                "A document describing the invention and setting out the scope of protection",
                "A legal contract between the inventor and the patent office",
                "A document listing the countries where the patent is valid",
                "A summary of patent laws"
            ],
            "answer": "A"
        },
        {
            "question_no": 39,
            "question": "Which document is filed to establish only the earliest ownership of an invention?",
            "options": [
                "Provisional Specification",
                "National Phase Application",
                "Complete Specification",
                "Patent Cooperation Treaty"
            ],
            "answer": "A"
        },
        {
            "question_no": 40,
            "question": "What must be filed within 12 months of a Provisional Specification to obtain a patent?",
            "options": [
                "A Complete Specification",
                "Another Provisional Specification",
                "A Convention Application",
                "A Patent of Addition"
            ],
            "answer": "A"
        },
        {
            "question_no": 41,
            "question": "What is the significance of the Complete Specification?",
            "options": [
                "It describes the invention in detail, enabling others to replicate it",
                "It grants the patent automatically",
                "It provides an abstract of the invention",
                "It is used only in international patent applications"
            ],
            "answer": "A"
        },
        {
            "question_no": 42,
            "question": "What part of the Complete Specification defines the monopoly right of the patentee?",
            "options": [
                "Claim",
                "Title",
                "Abstract",
                "Background of the Invention"
            ],
            "answer": "A"
        },
        {
            "question_no": 43,
            "question": "Which section of the Indian Patents Act deals with Provisional and Complete Specification?",
            "options": [
                "Section 9",
                "Section 11",
                "Section 8",
                "Section 10"
            ],
            "answer": "A"
        },
        {
            "question_no": 44,
            "question": "What is an Abstract in a Complete Specification?",
            "options": [
                "A brief summary of the invention within 150 words",
                "A legal clause defining the scope of the patent",
                "A detailed description of the invention",
                "A list of prior art references"
            ],
            "answer": "A"
        },
        {
            "question_no": 45,
            "question": "Who is entitled to apply for a patent in the National Filing Procedure?",
            "options": [
                "Any person who is a true and first inventor or their assignee or legal representative",
                "Any person who works in the Patent Office",
                "Any person who is an inventor",
                "Any person who purchases the invention"
            ],
            "answer": "A"
        },
        {
            "question_no": 46,
            "question": "What is the maximum period allowed for filing the complete specification after the provisional specification?",
            "options": [
                "12 months",
                "6 months",
                "18 months",
                "24 months"
            ],
            "answer": "A"
        },
        {
            "question_no": 47,
            "question": "When is a patent application published under the National Filing Procedure?",
            "options": [
                "After 18 months from the filing date or priority date, whichever is earlier",
                "Immediately after filing",
                "After 24 months from the filing date",
                "After 12 months from the filing date"
            ],
            "answer": "A"
        },
        {
            "question_no": 48,
            "question": "What happens if the Request for Examination is not made within the prescribed period?",
            "options": [
                "The application is treated as withdrawn",
                "The patent is automatically granted",
                "The applicant is fined",
                "The application is published without examination"
            ],
            "answer": "A"
        },
        {
            "question_no": 49,
            "question": "What is the purpose of the International Search Report (ISR) in the PCT filing procedure?",
            "options": [
                "To provide a list of prior art documents relevant to the invention",
                "To determine the renewal fee for the patent",
                "To grant the patent in all PCT member countries",
                "To translate the patent application into different languages"
            ],
            "answer": "A"
        },
        {
            "question_no": 50,
            "question": "Which of the following documents analyzes the potential patentability of an invention in the PCT filing procedure?",
            "options": [
                "Written Opinion of the International Searching Authority (ISA)",
                "International Preliminary Examination Report (IPER)",
                "PCT Filing Certificate",
                "Patent Grant Report (PGR)"
            ],
            "answer": "A"
        },
        {
            "question_no": 51,
            "question": "How long is the additional period provided by the PCT on top of the 12 months priority period?",
            "options": [
                "18 months",
                "12 months",
                "24 months",
                "6 months"
            ],
            "answer": "A"
        },
        {
            "question_no": 52,
            "question": "What does a single PCT application provide in terms of legal effect?",
            "options": [
                "Legal effect in all PCT member countries",
                "No legal effect until the patent is granted",
                "Legal effect in the country of filing only",
                "Legal effect in a single country of the applicant's choice"
            ],
            "answer": "A"
        },
        {
            "question_no": 53,
            "question": "What is the first major step in the patent procedure?",
            "options": [
                "Application for the patent",
                "Examination of the patent",
                "Grant and sealing of the patent",
                "Opposition to the patent"
            ],
            "answer": "A"
        },
        {
            "question_no": 54,
            "question": "Who can file an application for a patent under the Indian Patent Act, 1970?",
            "options": [
                "The true and first inventor or their legal representative",
                "Any person with an idea",
                "Only legal entities",
                "Any employee of a company"
            ],
            "answer": "A"
        },
        {
            "question_no": 55,
            "question": "Where is the publication of a patent application notified?",
            "options": [
                "In the Official Gazette or Patent Office Journals",
                "In a local newspaper",
                "On the company's website",
                "In a scientific journal"
            ],
            "answer": "A"
        },
        {
            "question_no": 56,
            "question": "What happens if no request for examination is made within the prescribed period?",
            "options": [
                "The application is treated as withdrawn",
                "The patent is automatically granted",
                "The patent is published without examination",
                "The applicant is fined"
            ],
            "answer": "A"
        },
        {
            "question_no": 57,
            "question": "Within how many months must the First Examination Report (FER) be responded to by the applicant?",
            "options": [
                "6 months",
                "3 months",
                "9 months",
                "12 months"
            ],
            "answer": "A"
        },
        {
            "question_no": 58,
            "question": "What is the maximum period within which a request for examination must be filed from the date of priority or filing?",
            "options": [
                "48 months",
                "24 months",
                "36 months",
                "60 months"
            ],
            "answer": "A"
        },
        {
            "question_no": 59,
            "question": "Who can file a pre-grant opposition to a patent?",
            "options": [
                "Any interested person",
                "Only the inventor",
                "Only the government",
                "Only the patent examiner"
            ],
            "answer": "A"
        },
        {
            "question_no": 60,
            "question": "Within how many months from the advertisement date can a pre-grant opposition be filed?",
            "options": [
                "4 months",
                "2 months",
                "6 months",
                "3 months"
            ],
            "answer": "A"
        },
        {
            "question_no": 61,
            "question": "What must be included in a post-grant opposition notice?",
            "options": [
                "Written statement and evidence",
                "A simple objection",
                "Only the applicant's name",
                "Only the patent number"
            ],
            "answer": "A"
        },
        {
            "question_no": 62,
            "question": "Under which section of the Act is the grant and sealing of a patent handled?",
            "options": [
                "Section 43",
                "Section 11A",
                "Section 25",
                "Section 9"
            ],
            "answer": "A"
        },
        {
            "question_no": 63,
            "question": "When is the renewal fee payable after the grant of patent?",
            "options": [
                "Third year",
                "First year",
                "Second year",
                "Fifth year"
            ],
            "answer": "A"
        },
        {
            "question_no": 64,
            "question": "What is the maximum period for applying to restore a lapsed patent due to non-payment of renewal fees?",
            "options": [
                "18 months",
                "24 months",
                "6 months",
                "12 months"
            ],
            "answer": "A"
        },
        {
            "question_no": 65,
            "question": "Which system is employed in patent law that prioritizes the first person to file a patent application?",
            "options": [
                "First to file",
                "First to invent",
                "First to publish",
                "First to market"
            ],
            "answer": "A"
        },
        {
            "question_no": 66,
            "question": "What could jeopardize the chance of obtaining a patent?",
            "options": [
                "Publishing the invention before applying for a patent",
                "Consulting a patent agent",
                "Filing the application early",
                "Keeping the invention secret"
            ],
            "answer": "A"
        },
        {
            "question_no": 67,
            "question": "What is advisable for inventors to file as soon as their idea takes a definite shape?",
            "options": [
                "Provisional Specification",
                "Complete Specification",
                "Final Examination Report",
                "Renewal Application"
            ],
            "answer": "A"
        },
        {
            "question_no": 68,
            "question": "Which form is used for requesting early publication of a patent application?",
            "options": [
                "Form 9",
                "Form 1",
                "Form 5",
                "Form 18"
            ],
            "answer": "A"
        },
        {
            "question_no": 69,
            "question": "Which document must be submitted if the priority date is claimed in a convention application?",
            "options": [
                "Priority document",
                "Declaration of inventorship",
                "Abstract of the invention",
                "Power of attorney"
            ],
            "answer": "A"
        },
        {
            "question_no": 70,
            "question": "How many copies of the application form are required for filing a patent application?",
            "options": [
                "Three",
                "Four",
                "One",
                "Two"
            ],
            "answer": "A"
        },
        {
            "question_no": 71,
            "question": "What is the penalty for not meeting the objections in the First Examination Report (FER) within 12 months?",
            "options": [
                "The application is deemed abandoned",
                "Fine is imposed",
                "Patent is granted automatically",
                "The application is sent for re-examination"
            ],
            "answer": "A"
        },
        {
            "question_no": 72,
            "question": "What section of the Patent Act outlines the grounds for opposition?",
            "options": [
                "Section 25",
                "Section 43",
                "Section 7",
                "Section 9"
            ],
            "answer": "A"
        },
        {
            "question_no": 73,
            "question": "Which form is required for filing a post-grant opposition?",
            "options": [
                "Form 7",
                "Form 18",
                "Form 5",
                "Form 9"
            ],
            "answer": "A"
        },
        {
            "question_no": 74,
            "question": "What is one common mistake made by inventors that could harm their patent application?",
            "options": [
                "Publicly disclosing the invention before filing for a patent",
                "Hiring a patent agent",
                "Filing the patent too early",
                "Filing without a power of attorney"
            ],
            "answer": "A"
        },
        {
            "question_no": 75,
            "question": "What is a key consideration when deciding where to patent an invention?",
            "options": [
                "Where the product is likely to be commercialized",
                "Where the inventor's family lives",
                "Where the inventor vacations",
                "Where the inventor's competitors are located"
            ],
            "answer": "A"
        },
        {
            "question_no": 76,
            "question": "Which route involves filing a patent application in each country individually?",
            "options": [
                "National route",
                "International route",
                "Regional route",
                "Global route"
            ],
            "answer": "A"
        },







        {
            "question_no": 77,
            "question": "What does licensing a patent involve?",
            "options": ["Granting permission to another party to use the patented invention", "Filing a patent in multiple countries", "Selling the patent outright", "Manufacturing the product yourself"],
            "answer": "A"
        },
        {
            "question_no": 78,
            "question": "What is an advantage of licensing a patent?",
            "options": ["It provides an additional source of revenue", "It reduces legal costs", "It simplifies the patent process", "It limits the market reach of the invention"],
            "answer": "A"
        },
        {
            "question_no": 79,
            "question": "What is an exclusive license?",
            "options": ["A single licensee has the right to use the patented technology", "Multiple licensees share the rights", "The patent owner retains full rights", "The patent owner cannot use the technology"],
            "answer": "A"
        },
        {
            "question_no": 80,
            "question": "What is cross-licensing?",
            "options": ["Two competitors exchange rights to each other’s patents", "Selling the patent to the highest bidder", "Licensing to multiple companies", "Licensing without any fees"],
            "answer": "A"
        },
        {
            "question_no": 81,
            "question": "What is a compulsory license?",
            "options": ["A government-mandated license when public interest is involved", "A license that is automatically granted after three years", "A license that is required in every country", "A license granted by the patent owner under pressure"],
            "answer": "A"
        },
        {
            "question_no": 82,
            "question": "When can a compulsory license be terminated under Indian law?",
            "options": ["If the circumstances that led to its grant no longer exist", "Only after the patent expires", "When the patent owner demands it", "After five years of the license being in effect"],
            "answer": "A"
        },
        {
            "question_no": 83,
            "question": "What is considered an infringement of a patent?",
            "options": ["Unauthorized use of the patented invention", "Improving upon the patented invention", "Filing a patent in another country", "Using the invention with the owner’s consent"],
            "answer": "A"
        },
        {
            "question_no": 84,
            "question": "What must an inventor provide to a patent attorney for effective patent drafting?",
            "options": ["Complete details of the invention, including failures", "Only the successful parts of the invention", "Only the final product", "A summary of the invention"],
            "answer": "A"
        },
        {
            "question_no": 85,
            "question": "What does Section 107A of the Indian Patent Act state?",
            "options": ["Certain acts related to development and submission of information are not considered infringement", "All uses of a patented invention are considered infringement", "Infringement can only occur in the country of the patent holder", "Importing patented products is illegal"],
            "answer": "A"
        },
        {
            "question_no": 86,
            "question": "What relief can a patentee seek in case of infringement under Indian law?",
            "options": ["Injunction and damages", "License cancellation", "Public apology from the infringer", "Patent revocation"],
            "answer": "A"
        },
        {
            "question_no": 87,
            "question": "What is one advantage of arbitration in patent disputes?",
            "options": ["It is less formal and shorter than court proceedings", "It allows public scrutiny", "It is always free of charge", "It guarantees a favourable outcome for the patentee"],
            "answer": "A"
        },
        {
            "question_no": 88,
            "question": "Why might a company choose to send a ‘cease and desist letter’?",
            "options": ["To inform the alleged infringer of a potential patent conflict", "To revoke the infringer’s patent", "To license the patent to the infringer", "To initiate a criminal case"],
            "answer": "A"
        },
        {
            "question_no": 89,
            "question": "What is the purpose of a ‘cease and desist letter’?",
            "options": ["To stop infringing activities", "To terminate a patent", "To grant a license", "To enforce a compulsory license"],
            "answer": "A"
        },
        {
            "question_no": 90,
            "question": "Which organization provides services for alternative dispute resolution?",
            "options": ["World Intellectual Property Organization (WIPO)", "World Trade Organization (WTO)", "European Patent Office (EPO)", "International Monetary Fund (IMF)"],
            "answer": "A"
        },
        {
            "question_no": 91,
            "question": "What is the role of the WIPO Arbitration and Mediation Centre?",
            "options": ["To provide alternative dispute resolution services", "To file patents internationally", "To enforce patent laws", "To draft patent agreements"],
            "answer": "A"
        },
        {
            "question_no": 92,
            "question": "Which article of the TRIPS agreement provides for the right to information in infringement cases?",
            "options": ["Article 47", "Article 45", "Article 46", "Article 44"],
            "answer": "A"
        },
        {
            "question_no": 93,
            "question": "What is the primary function of a trademark?",
            "options": ["To identify the source of goods or services", "To increase product prices", "To protect intellectual property", "To advertise a company"],
            "answer": "A"
        },
        {
            "question_no": 94,
            "question": "Which of the following can be registered as a trademark in some countries?",
            "options": ["Shapes of products", "Generic terms", "Flags of nations", "Personal names"],
            "answer": "A"
        },
        {
            "question_no": 95,
            "question": "Which of the following is NOT a characteristic of a trademark?",
            "options": ["It should be descriptive of the product and its basic component/ingredients", "It must be distinctive", "It should be easy to spell and pronounce", "It should be easy to register"],
            "answer": "A"
        },
        {
            "question_no": 96,
            "question": "What is a service mark?",
            "options": ["A mark used to distinguish services", "A trademark used for products", "A certification mark", "A well-known mark"],
            "answer": "A"
        },
        {
            "question_no": 97,
            "question": "What is the validity period of a registered trademark?",
            "options": ["10 years and renewable", "5 years and renewable", "15 years and non-renewable", "20 years and then expires"],
            "answer": "A"
        },
        {
            "question_no": 98,
            "question": "Which type of mark is a coined or invented word with no intrinsic meaning?",
            "options": ["Fanciful mark", "Descriptive mark", "Suggestive mark", "Arbitrary mark"],
            "answer": "A"
        },
        {
            "question_no": 99,
            "question": "Which of the following is NOT allowed for trademark registration in most jurisdictions?",
            "options": ["A generic term", "A suggestive word", "A coined word", "A three-dimensional shape"],
            "answer": "A"
        },
        {
            "question_no": 100,
            "question": "Which of the following is an example of an arbitrary mark?",
            "options": ["\"Apple\" for computers", "\"Kodak\" for cameras", "\"Sunny\" for heaters", "\"Sweet\" for chocolates"],
            "answer": "A"
        },
        {
            "question_no": 101,
            "question": "What is a certification mark?",
            "options": ["A mark indicating compliance with standards", "A mark used to distinguish services", "A mark used by a specific group of enterprises", "A well-known mark"],
            "answer": "A"
        },
        {
            "question_no": 102,
            "question": "Which of the following can be considered a non-traditional trademark?",
            "options": ["A sound", "A word", "A logo", "A phrase"],
            "answer": "A"
        },
        {
            "question_no": 103,
            "question": "Which of the following is NOT a function of a trademark?",
            "options": ["Reducing the cost of production", "Advertising the product", "Identifying the product’s origin", "Guaranteeing the product’s quality"],
            "answer": "A"
        },
        {
            "question_no": 104,
            "question": "Which of the following is NOT a reason for rejecting a trademark application?",
            "options": ["The mark is fanciful", "The mark is descriptive", "The mark is generic", "The mark is deceptive"],
            "answer": "A"
        },
        {
            "question_no": 105,
            "question": "What is an example of a suggestive mark?",
            "options": ["\"Sunny\" for heaters", "\"Sweet\" for chocolates", "\"Kodak\" for cameras", "\"Apple\" for computers"],
            "answer": "A"
        },
        {
            "question_no": 106,
            "question": "Which of the following is true about the registration of non-traditional trademarks?",
            "options": ["They are often difficult to register", "They are easy to graphically represent", "They are more valuable than traditional trademarks", "They are not recognized by most countries"],
            "answer": "A"
        },
        {
            "question_no": 107,
            "question": "What must be authorized under Form TM-48 in the trademark registration process?",
            "options": ["The appointment of an attorney or agent", "The registration of the trademark", "The use of the trademark", "The payment of the registration fee"],
            "answer": "A"
        },
        {
            "question_no": 108,
            "question": "What is copyright primarily available for?",
            "options": ["Original literary, dramatic, musical, artistic work", "Unpublished works", "Scientific discoveries", "Ideas"],
            "answer": "A"
        },
        {
            "question_no": 109,
            "question": "Under the Indian Copyright Act, how long is the term of protection for literary works?",
            "options": ["The author’s life plus 60 years", "100 years after the author’s death", "50 years from the date of publication", "The author’s life plus 70 years"],
            "answer": "A"
        },
        {
            "question_no": 110,
            "question": "What does copyright protect?",
            "options": ["The expression of an idea", "The idea itself", "Methods and processes", "Scientific principles"],
            "answer": "A"
        },
        {
            "question_no": 111,
            "question": "Which of the following is included under the definition of a computer program in the Copyright Act?",
            "options": ["Source codes and object codes", "Hardware configurations", "Software installation manuals", "User interface designs"],
            "answer": "A"
        },
        {
            "question_no": 112,
            "question": "Which of the following is an example of moral rights under copyright?",
            "options": ["Right to claim authorship", "Right to sell the work", "Right to license the work", "Right to modify the work"],
            "answer": "A"
        },
        {
            "question_no": 113,
            "question": "Which of the following categories is not protected by copyright?",
            "options": ["Titles and short phrases", "Dramatic works", "Musical works", "Pantomimes"],
            "answer": "A"
        },
        {
            "question_no": 114,
            "question": "What is true about Public Domain software?",
            "options": ["It allows free modification and distribution", "It has strict copyright restrictions", "It requires a license for use", "It cannot be used commercially"],
            "answer": "A"
        },
        {
            "question_no": 115,
            "question": "What is the primary difference between Freeware and Public Domain software?",
            "options": ["Public Domain software has no copyright protection", "Public Domain software requires payment for use", "Freeware allows modification only with restrictions", "Freeware is not protected by copyright"],
            "answer": "A"
        },
        {
            "question_no": 116,
            "question": "Which software category explicitly allows reverse engineering (decompiling) without permission?",
            "options": ["Freeware", "Public Domain", "Commercial Software", "Shareware"],
            "answer": "A"
        },
        {
            "question_no": 117,
            "question": "Under copyright law, what is an author’s \"right of integrity\"?",
            "options": ["The right to prevent alteration of the work", "The right to sell the work", "The right to modify the work", "The right to publish the work"],
            "answer": "A"
        },
        {
            "question_no": 118,
            "question": "What does industrial design primarily refer to?",
            "options": ["The ornamental or aesthetic aspects of a product", "The technical aspects of a product", "The functional features of a product", "The marketing strategy of a product"],
            "answer": "A"
        },
        {
            "question_no": 119,
            "question": "Which of the following is not typically included in industrial design protection?",
            "options": ["The technical function of a product", "The colour of a product", "The shape of a product", "The pattern of a product"],
            "answer": "A"
        },
        {
            "question_no": 120,
            "question": "Industrial design can be applied to which of the following products?",
            "options": ["All of these", "Medical instruments", "Jewelry", "Furniture"],
            "answer": "A"
        },
        {
            "question_no": 121,
            "question": "Which feature of a design is considered a three-dimensional feature?",
            "options": ["Shape", "Colour", "Pattern", "Ornamentation"],
            "answer": "A"
        },
        {
            "question_no": 122,
            "question": "What is required for a design to be considered ’new’?",
            "options": ["It must not have been made available to the public before the filing date", "It must have been published in a magazine", "It must be a copy of an existing design", "It must be patented"],
            "answer": "A"
        },
        {
            "question_no": 123,
            "question": "Which of the following is a reason businesses invest in new and original designs?",
            "options": ["To customize products for specific market segments", "To reduce the cost of production", "To increase the number of employees", "To simplify the manufacturing process"],
            "answer": "A"
        },
        {
            "question_no": 124,
            "question": "Which of the following cannot be protected as an industrial design?",
            "options": ["A technical drawing of a machine", "A new shape for a chair", "A pattern on fabric", "A book cover design"],
            "answer": "A"
        },
        {
            "question_no": 125,
            "question": "How long does industrial design protection typically last?",
            "options": ["10 years", "5 years", "15 years", "20 years"],
            "answer": "A"
        },
        {
            "question_no": 126,
            "question": "What is a common grace period for registering an industrial design after it has been made public?",
            "options": ["6 months", "12 months", "3 months", "18 months"],
            "answer": "A"
        },
        {
            "question_no": 127,
            "question": "What does ’industrial design’ not typically include?",
            "options": ["Architectural structures", "Product packaging", "Buildings and structures", "Furniture design"],
            "answer": "A"
        },
        {
            "question_no": 128,
            "question": "What does the term ’get-up’ of products refer to in industrial design?",
            "options": ["The ornamental or aesthetic design of the product", "The technical features of a product", "The packaging of the product", "The functionality of the product"],
            "answer": "A"
        },
        {
            "question_no": 129,
            "question": "Which approach to protecting traditional knowledge emphasizes cultural heritage?",
            "options": ["Cultural heritage protection", "Collective human rights", "Use of existing intellectual property laws", "Commercial rights"],
            "answer": "A"
        },
        {
            "question_no": 130,
            "question": "What does ’design protection’ primarily allow a holder to do?",
            "options": ["Control the aesthetic aspects of a product and prevent copying", "Develop new technological features", "Obtain patents for scientific processes", "License or sell trademarks"],
            "answer": "A"
        }



    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [optionStates, setOptionStates] = useState(Array(4).fill(null));

    const handleOptionClick = (index) => {
        if (selectedOption !== null) return; // Prevent changing answer after selection

        setSelectedOption(index);

        const correctAnswerIndex = "ABCD".indexOf(quizData[currentQuestion].answer);
        const isCorrect = index === correctAnswerIndex;

        // Update option states (null = not selected, true = correct, false = incorrect)
        const newOptionStates = Array(4).fill(null);
        newOptionStates[index] = isCorrect;
        newOptionStates[correctAnswerIndex] = true; // Always show correct answer
        setOptionStates(newOptionStates);

        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setOptionStates(Array(4).fill(null));
        } else {
            setQuizCompleted(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setQuizCompleted(false);
        setOptionStates(Array(4).fill(null));
    };

    const getOptionStyles = (index) => {
        const baseStyle = "p-4 rounded-lg mb-3 border border-gray-700 text-left cursor-pointer transition-colors";

        if (optionStates[index] === null) {
            return `${baseStyle} bg-gray-800 hover:bg-gray-700`;
        } else if (optionStates[index] === true) {
            return `${baseStyle} bg-green-600 text-white`;
        } else {
            return `${baseStyle} bg-red-600 text-white`;
        }
    };

    if (quizCompleted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
                <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-xl p-6 text-white">
                    <h1 className="text-2xl font-bold mb-6 text-center">Quiz Completed!</h1>
                    <p className="text-xl text-center mb-8">
                        Your score: {score} out of {quizData.length}
                        <span className="block mt-2 text-lg">
                            ({Math.round((score / quizData.length) * 100)}%)
                        </span>
                    </p>
                    <button
                        onClick={resetQuiz}
                        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    const currentQuizData = quizData[currentQuestion];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-xl p-6 text-white">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium bg-gray-700 px-3 py-1 rounded-full">
                        Question {currentQuestion + 1}/{quizData.length}
                    </span>
                    <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                        Score: {score}
                    </span>
                </div>

                <h2 className="text-xl font-semibold mb-6">{currentQuizData.question}</h2>

                <div className="mb-6">
                    {currentQuizData.options.map((option, index) => (
                        <div
                            key={index}
                            className={getOptionStyles(index)}
                            onClick={() => handleOptionClick(index)}
                        >
                            <span className="inline-block w-6 h-6 text-center mr-3 bg-gray-700 rounded-full">
                                {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${selectedOption === null
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
                </button>
            </div>
        </div>
    );
};

export default QuizApp;
