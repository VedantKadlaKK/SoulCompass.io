
import { TestResult, CareerRecommendation } from "@/types";

export const getPersonalityInterpretation = (category: string, score: number): TestResult => {
  const interpretations: Record<string, TestResult[]> = {
    extraversion: [
      {
        category: "extraversion",
        score: 0,
        interpretation: "You tend to be more introverted, preferring solitude and quiet environments. You may find social interactions draining and need time alone to recharge.",
        recommendations: ["Schedule alone time to recharge", "Seek out depth in relationships rather than breadth", "Find quiet environments for optimal focus"],
      },
      {
        category: "extraversion",
        score: 6,
        interpretation: "You have a balanced approach to social interaction. You can enjoy social gatherings but also value your alone time. You adapt well to different social contexts.",
        recommendations: ["Balance social activities with quiet time", "Be selective about social engagements", "Nurture both close relationships and broader networks"],
      },
      {
        category: "extraversion",
        score: 8,
        interpretation: "You tend to be extraverted, enjoying social interactions and drawing energy from being around others. You likely prefer active, social environments.",
        recommendations: ["Seek collaborative work environments", "Build a diverse social network", "Find ways to channel your social energy productively"],
      },
    ],
    openness: [
      {
        category: "openness",
        score: 0,
        interpretation: "You tend to prefer the familiar and traditional. You value practical, conventional approaches and may be less interested in abstract or theoretical concepts.",
        recommendations: ["Build on your practical strengths", "Approach change systematically", "Value your stability and reliability"],
      },
      {
        category: "openness",
        score: 6,
        interpretation: "You have a balanced approach to new experiences. While you appreciate routine and stability, you're also willing to explore new ideas when they have practical applications.",
        recommendations: ["Balance innovation with practicality", "Expand your comfort zone gradually", "Blend creative thinking with established methods"],
      },
      {
        category: "openness",
        score: 8,
        interpretation: "You tend to be very open to new experiences and ideas. You value creativity, intellectual curiosity, and may enjoy abstract thinking and unconventional perspectives.",
        recommendations: ["Seek environments that encourage innovation", "Channel creativity into structured outputs", "Connect with others who value intellectual exploration"],
      },
    ],
    agreeableness: [
      {
        category: "agreeableness",
        score: 0,
        interpretation: "You tend to be more skeptical and competitive. You're comfortable challenging others' views and may prioritize logic over emotional concerns.",
        recommendations: ["Leverage your decisiveness", "Balance directness with tact", "Recognize when cooperation is advantageous"],
      },
      {
        category: "agreeableness",
        score: 6,
        interpretation: "You balance cooperation with healthy skepticism. You can collaborate effectively but also stand your ground when needed.",
        recommendations: ["Use your diplomatic skills to resolve conflicts", "Know when to compromise and when to assert yourself", "Value both harmony and honest feedback"],
      },
      {
        category: "agreeableness",
        score: 8,
        interpretation: "You tend to be compassionate, cooperative, and focused on interpersonal harmony. You value getting along with others and are often willing to compromise.",
        recommendations: ["Use your empathetic strengths in collaboration", "Set appropriate boundaries", "Balance concern for others with self-care"],
      },
    ],
    conscientiousness: [
      {
        category: "conscientiousness",
        score: 0,
        interpretation: "You tend to be more flexible and spontaneous. You may prefer to adapt to situations as they arise rather than making detailed plans.",
        recommendations: ["Embrace your adaptability", "Develop simple organizational systems", "Balance spontaneity with some structure"],
      },
      {
        category: "conscientiousness",
        score: 6,
        interpretation: "You balance organization with flexibility. You can follow plans and structures but also adapt when needed.",
        recommendations: ["Leverage your adaptable approach to planning", "Create flexible but effective systems", "Know when to be thorough and when to be agile"],
      },
      {
        category: "conscientiousness",
        score: 8,
        interpretation: "You tend to be organized, detail-oriented, and disciplined. You likely value planning, reliability, and following through on commitments.",
        recommendations: ["Use your organizational strengths for complex projects", "Be mindful of perfectionism", "Help others benefit from your structured approach"],
      },
    ],
    neuroticism: [
      {
        category: "neuroticism",
        score: 0,
        interpretation: "You tend to be emotionally stable and resilient. You're less likely to experience prolonged negative emotions and may recover quickly from stress.",
        recommendations: ["Use your emotional stability as a strength", "Support others during challenging times", "Maintain awareness of emotional subtleties"],
      },
      {
        category: "neuroticism",
        score: 6,
        interpretation: "You have a balanced emotional response. You experience negative emotions but generally manage them effectively.",
        recommendations: ["Continue developing emotional awareness", "Use your emotional range for empathy", "Maintain your stress management practices"],
      },
      {
        category: "neuroticism",
        score: 8,
        interpretation: "You may experience emotions more intensely and be more sensitive to stressors. This sensitivity can provide valuable emotional insights but may also require more active emotional management.",
        recommendations: ["Develop robust stress management techniques", "Practice mindfulness and emotional regulation", "Recognize your emotional sensitivity as a potential strength"],
      },
    ],
  };

  // Find the appropriate interpretation based on score
  const categoryInterpretations = interpretations[category] || [];
  
  // Default to lowest threshold if no match
  let result = categoryInterpretations[0];
  
  for (const interp of categoryInterpretations) {
    if (score >= interp.score) {
      result = interp;
    } else {
      break;
    }
  }
  
  return {
    ...result,
    score: score,
  };
};

export const getMentalHealthInterpretation = (category: string, score: number): TestResult => {
  const interpretations: Record<string, TestResult[]> = {
    depression: [
      {
        category: "depression",
        score: 0,
        interpretation: "Your responses suggest minimal or no symptoms of depression.",
        recommendations: ["Continue maintaining your mental well-being", "Practice regular self-care", "Stay connected with supportive people"],
      },
      {
        category: "depression",
        score: 5,
        interpretation: "Your responses suggest mild symptoms that may be associated with depression.",
        recommendations: ["Consider speaking with a mental health professional", "Develop a self-care routine", "Practice stress management techniques"],
      },
      {
        category: "depression",
        score: 10,
        interpretation: "Your responses suggest moderate symptoms that may be associated with depression.",
        recommendations: ["Consult with a mental health professional", "Consider therapy or counseling", "Build a support network", "Practice regular physical activity"],
      },
    ],
    anxiety: [
      {
        category: "anxiety",
        score: 0,
        interpretation: "Your responses suggest minimal or no symptoms of anxiety.",
        recommendations: ["Continue maintaining your mental well-being", "Practice regular relaxation techniques", "Maintain a healthy lifestyle"],
      },
      {
        category: "anxiety",
        score: 5,
        interpretation: "Your responses suggest mild symptoms that may be associated with anxiety.",
        recommendations: ["Consider speaking with a mental health professional", "Learn and practice relaxation techniques", "Minimize caffeine and alcohol"],
      },
      {
        category: "anxiety",
        score: 10,
        interpretation: "Your responses suggest moderate symptoms that may be associated with anxiety.",
        recommendations: ["Consult with a mental health professional", "Consider therapy approaches like CBT", "Practice mindfulness meditation", "Maintain regular exercise"],
      },
    ],
    attention: [
      {
        category: "attention",
        score: 0,
        interpretation: "Your responses suggest minimal or no attention-related concerns.",
        recommendations: ["Continue your effective focus strategies", "Maintain organized work environments", "Practice regular mental exercises"],
      },
      {
        category: "attention",
        score: 6,
        interpretation: "Your responses suggest some challenges with attention and focus.",
        recommendations: ["Consider speaking with a healthcare provider", "Implement organizational strategies", "Break tasks into smaller segments", "Minimize distractions"],
      },
      {
        category: "attention",
        score: 10,
        interpretation: "Your responses suggest significant challenges with attention and focus.",
        recommendations: ["Consult with a healthcare professional", "Consider assessment for attention disorders", "Develop structured routines", "Use tools like timers and reminders"],
      },
    ],
    mood: [
      {
        category: "mood",
        score: 0,
        interpretation: "Your responses suggest stable mood patterns.",
        recommendations: ["Continue your emotional wellness practices", "Maintain regular sleep patterns", "Practice stress management"],
      },
      {
        category: "mood",
        score: 2,
        interpretation: "Your responses suggest some mood fluctuations that may impact daily functioning.",
        recommendations: ["Consider speaking with a mental health professional", "Track mood patterns", "Practice mindfulness", "Maintain consistent routines"],
      },
      {
        category: "mood",
        score: 4,
        interpretation: "Your responses suggest significant mood fluctuations that may impact daily functioning.",
        recommendations: ["Consult with a mental health professional", "Consider therapy approaches", "Develop coping strategies for mood changes", "Maintain supportive relationships"],
      },
    ],
  };

  // Find the appropriate interpretation based on score
  const categoryInterpretations = interpretations[category] || [];
  
  // Default to lowest threshold if no match
  let result = categoryInterpretations[0];
  
  for (const interp of categoryInterpretations) {
    if (score >= interp.score) {
      result = interp;
    } else {
      break;
    }
  }
  
  return {
    ...result,
    score: score,
  };
};

export const getCareerRecommendations = (
  personalityResults: TestResult[],
  careerScores: Record<string, number>
): CareerRecommendation[] => {
  // Career options with their ideal personality and skill profiles
  const careerOptions: Record<string, CareerRecommendation & { 
    idealPersonality: Record<string, number>,
    idealSkills: Record<string, number>
  }> = {
    "Software Developer": {
      career: "Software Developer",
      matchScore: 0,
      description: "Designs and builds computer applications and systems.",
      requiredSkills: ["Problem solving", "Logical thinking", "Attention to detail", "Continuous learning"],
      growthPotential: "High demand across industries with opportunities for specialization",
      idealPersonality: {
        openness: 8,
        conscientiousness: 7,
        extraversion: 5,
        agreeableness: 6,
        neuroticism: 4
      },
      idealSkills: {
        analytical: 9,
        creative: 7,
        practical: 6,
        social: 5,
        leadership: 5
      }
    },
    "Marketing Specialist": {
      career: "Marketing Specialist",
      matchScore: 0,
      description: "Develops strategies to promote products and services.",
      requiredSkills: ["Communication", "Creativity", "Strategic thinking", "Social awareness"],
      growthPotential: "Evolving field with opportunities in digital marketing and data analysis",
      idealPersonality: {
        openness: 8,
        extraversion: 8,
        agreeableness: 7,
        conscientiousness: 6,
        neuroticism: 4
      },
      idealSkills: {
        creative: 8,
        social: 9,
        analytical: 6,
        leadership: 7,
        practical: 5
      }
    },
    "Healthcare Provider": {
      career: "Healthcare Provider",
      matchScore: 0,
      description: "Provides medical care and support to patients.",
      requiredSkills: ["Empathy", "Attention to detail", "Communication", "Stress management"],
      growthPotential: "Consistent demand with specialized career paths and advancement opportunities",
      idealPersonality: {
        agreeableness: 9,
        conscientiousness: 8,
        neuroticism: 3,
        extraversion: 6,
        openness: 5
      },
      idealSkills: {
        social: 9,
        practical: 7,
        analytical: 6,
        leadership: 5,
        creative: 4
      }
    },
    "Financial Analyst": {
      career: "Financial Analyst",
      matchScore: 0,
      description: "Analyzes financial data to guide business decisions.",
      requiredSkills: ["Analytical thinking", "Attention to detail", "Mathematical aptitude", "Critical thinking"],
      growthPotential: "Stable field with paths to advisory and management roles",
      idealPersonality: {
        conscientiousness: 9,
        openness: 6,
        neuroticism: 4,
        agreeableness: 5,
        extraversion: 5
      },
      idealSkills: {
        analytical: 9,
        practical: 7,
        leadership: 6,
        creative: 4,
        social: 5
      }
    },
    "Teacher/Educator": {
      career: "Teacher/Educator",
      matchScore: 0,
      description: "Facilitates learning and development in educational settings.",
      requiredSkills: ["Communication", "Patience", "Organization", "Adaptability"],
      growthPotential: "Fundamental profession with specialization and leadership opportunities",
      idealPersonality: {
        agreeableness: 8,
        extraversion: 7,
        openness: 7,
        conscientiousness: 8,
        neuroticism: 4
      },
      idealSkills: {
        social: 9,
        leadership: 7,
        creative: 7,
        analytical: 6,
        practical: 6
      }
    },
    "Creative Professional": {
      career: "Creative Professional",
      matchScore: 0,
      description: "Creates artistic content in fields like design, writing, or multimedia.",
      requiredSkills: ["Creativity", "Technical skills", "Communication", "Self-management"],
      growthPotential: "Diverse opportunities across media, advertising, and digital platforms",
      idealPersonality: {
        openness: 9,
        extraversion: 6,
        neuroticism: 5,
        conscientiousness: 5,
        agreeableness: 6
      },
      idealSkills: {
        creative: 9,
        practical: 7,
        analytical: 5,
        social: 6,
        leadership: 4
      }
    }
  };

  // Convert personality results to a simple map
  const personalityMap: Record<string, number> = {};
  personalityResults.forEach(result => {
    personalityMap[result.category] = result.score;
  });

  // Calculate match scores for each career
  const recommendations: CareerRecommendation[] = [];
  
  for (const career of Object.values(careerOptions)) {
    let personalityMatchScore = 0;
    let skillMatchScore = 0;
    
    // Calculate personality match (60% weight)
    for (const [trait, idealScore] of Object.entries(career.idealPersonality)) {
      const userScore = personalityMap[trait] || 0;
      const traitSimilarity = 10 - Math.abs(userScore - idealScore);
      personalityMatchScore += traitSimilarity;
    }
    
    // Calculate skill match (40% weight)
    for (const [skill, idealScore] of Object.entries(career.idealSkills)) {
      const userScore = careerScores[skill] || 0;
      const skillSimilarity = 10 - Math.abs(userScore - idealScore);
      skillMatchScore += skillSimilarity;
    }
    
    // Weighted average for final match score (0-100)
    const totalPossiblePersonality = Object.keys(career.idealPersonality).length * 10;
    const totalPossibleSkill = Object.keys(career.idealSkills).length * 10;
    
    const normalizedPersonalityScore = (personalityMatchScore / totalPossiblePersonality) * 60;
    const normalizedSkillScore = (skillMatchScore / totalPossibleSkill) * 40;
    
    const finalMatchScore = Math.round(normalizedPersonalityScore + normalizedSkillScore);
    
    recommendations.push({
      ...career,
      matchScore: finalMatchScore
    });
  }
  
  // Sort by match score (highest first) and take top 3
  return recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
};

export const generateOverallSummary = (
  personalityResults: TestResult[],
  mentalHealthResults: TestResult[],
  careerRecommendations: CareerRecommendation[]
): string => {
  // Get the top personality traits
  const personalityTraits = personalityResults
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(result => {
      const traits: Record<string, string> = {
        extraversion: "extraverted",
        openness: "open to new experiences",
        agreeableness: "agreeable and cooperative",
        conscientiousness: "conscientious and organized",
        neuroticism: "emotionally sensitive"
      };
      return traits[result.category] || result.category;
    });

  // Get mental health insights
  const mentalHealthInsights = mentalHealthResults
    .filter(result => result.score > 5)
    .map(result => result.category);

  const hasMentalHealthConcerns = mentalHealthInsights.length > 0;

  // Get top career match
  const topCareer = careerRecommendations[0];

  // Construct summary
  let summary = `Your assessment indicates that you tend to be ${personalityTraits.join(" and ")}. `;
  
  if (hasMentalHealthConcerns) {
    summary += `Your responses suggest some challenges related to ${mentalHealthInsights.join(" and ")}, which may benefit from professional support. `;
  } else {
    summary += `Your mental health responses suggest overall stability, though everyone benefits from ongoing self-care. `;
  }
  
  summary += `Based on your personality profile and skills, you show strong potential for careers like ${topCareer.career} (${topCareer.matchScore}% match), which aligns with your natural strengths. `;
  
  summary += `Consider exploring these career paths while continuing to develop your self-awareness and well-being practices.`;
  
  return summary;
};
