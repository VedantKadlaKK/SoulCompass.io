
import { Question } from "@/types";

export const personalityQuestions: Question[] = [
  {
    id: 1,
    text: "I enjoy being the center of attention at social gatherings.",
    category: "extraversion",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 2,
    text: "I prefer to spend time in quiet, solitary activities.",
    category: "extraversion",
    options: [
      { id: 1, text: "Strongly Disagree", value: 5 },
      { id: 2, text: "Disagree", value: 4 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 2 },
      { id: 5, text: "Strongly Agree", value: 1 },
    ],
  },
  {
    id: 3,
    text: "I often notice small details that others miss.",
    category: "openness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 4,
    text: "I tend to follow established routines and prefer familiar experiences.",
    category: "openness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 5 },
      { id: 2, text: "Disagree", value: 4 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 2 },
      { id: 5, text: "Strongly Agree", value: 1 },
    ],
  },
  {
    id: 5,
    text: "I feel strong empathy for people who are suffering.",
    category: "agreeableness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 6,
    text: "I find it easy to criticize others when they make mistakes.",
    category: "agreeableness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 5 },
      { id: 2, text: "Disagree", value: 4 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 2 },
      { id: 5, text: "Strongly Agree", value: 1 },
    ],
  },
  {
    id: 7,
    text: "I am organized and always prepare in advance.",
    category: "conscientiousness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 8,
    text: "I often leave tasks until the last minute.",
    category: "conscientiousness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 5 },
      { id: 2, text: "Disagree", value: 4 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 2 },
      { id: 5, text: "Strongly Agree", value: 1 },
    ],
  },
  {
    id: 9,
    text: "I remain calm under pressure.",
    category: "neuroticism",
    options: [
      { id: 1, text: "Strongly Disagree", value: 5 },
      { id: 2, text: "Disagree", value: 4 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 2 },
      { id: 5, text: "Strongly Agree", value: 1 },
    ],
  },
  {
    id: 10,
    text: "I often worry about things that might go wrong.",
    category: "neuroticism",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
];
