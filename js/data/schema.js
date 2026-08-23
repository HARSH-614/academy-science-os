/**
 * DATA-DRIVEN ARCHITECTURE FOUNDATION
 * Templates for how educational content will be structured.
 * (Actual content will be injected later)
 */

export const ContentSchemas = {
    /** 
     * Class Structure 
     * @typedef {Object} ClassData
     */
    ClassDemo: {
        id: "class-9",
        name: "Class 9 Science",
        description: "Complete NCERT/SEBA syllabus notes",
        chapters: [] // Array of Chapter IDs
    },

    /** 
     * Chapter Structure 
     * @typedef {Object} ChapterData
     */
    ChapterDemo: {
        id: "c9-ch1",
        classId: "class-9",
        number: 1,
        title: "Matter in Our Surroundings",
        slug: "matter-in-our-surroundings",
        estimatedTime: "45 mins",
        importance: "high",
        sections: [] // Array of content sections
    },

    /** 
     * MCQ Structure 
     * @typedef {Object} MCQData
     */
    MCQDemo: {
        id: "mcq-001",
        chapterId: "c9-ch1",
        question: "Which of the following is not matter?",
        options: ["Air", "Water", "Love", "Dust"],
        answer: 2, // Index of correct option
        explanation: "Love is a feeling/emotion, it does not occupy space or have mass."
    }
};
