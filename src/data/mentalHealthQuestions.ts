
import { Question } from "@/types";

export const mentalHealthQuestions: Question[] = [
  {
    id: 101,
    text: "Over the past two weeks, how often have you felt little interest or pleasure in doing things?",
    category: "depression",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Several days", value: 1 },
      { id: 3, text: "More than half the days", value: 2 },
      { id: 4, text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 102,
    text: "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
    category: "depression",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Several days", value: 1 },
      { id: 3, text: "More than half the days", value: 2 },
      { id: 4, text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 103,
    text: "Over the past two weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    category: "depression",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Several days", value: 1 },
      { id: 3, text: "More than half the days", value: 2 },
      { id: 4, text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 104,
    text: "Over the past two weeks, how often have you felt nervous, anxious, or on edge?",
    category: "anxiety",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Several days", value: 1 },
      { id: 3, text: "More than half the days", value: 2 },
      { id: 4, text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 105,
    text: "Over the past two weeks, how often have you been unable to stop or control worrying?",
    category: "anxiety",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Several days", value: 1 },
      { id: 3, text: "More than half the days", value: 2 },
      { id: 4, text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 106,
    text: "Over the past two weeks, how often have you worried too much about different things?",
    category: "anxiety",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Several days", value: 1 },
      { id: 3, text: "More than half the days", value: 2 },
      { id: 4, text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 107,
    text: "Do you find it difficult to concentrate on one task for extended periods?",
    category: "attention",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Rarely", value: 1 },
      { id: 3, text: "Sometimes", value: 2 },
      { id: 4, text: "Often", value: 3 },
      { id: 5, text: "Very often", value: 4 },
    ],
  },
  {
    id: 108,
    text: "How frequently do you experience racing thoughts that are difficult to control?",
    category: "attention",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Rarely", value: 1 },
      { id: 3, text: "Sometimes", value: 2 },
      { id: 4, text: "Often", value: 3 },
      { id: 5, text: "Very often", value: 4 },
    ],
  },
  {
    id: 109,
    text: "How often do you have difficulty staying organized in daily tasks?",
    category: "attention",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Rarely", value: 1 },
      { id: 3, text: "Sometimes", value: 2 },
      { id: 4, text: "Often", value: 3 },
      { id: 5, text: "Very often", value: 4 },
    ],
  },
  {
    id: 110,
    text: "How often do you experience sudden mood changes that feel out of your control?",
    category: "mood",
    options: [
      { id: 1, text: "Not at all", value: 0 },
      { id: 2, text: "Rarely", value: 1 },
      { id: 3, text: "Sometimes", value: 2 },
      { id: 4, text: "Often", value: 3 },
      { id: 5, text: "Very often", value: 4 },
    ],
  },
];
