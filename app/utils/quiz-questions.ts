export type QuizQuestion = {
  question: string;
  opts: string[];
  answer: string;
};

const proteins: QuizQuestion[] = [
  {
    question:
      "About _____ of the dry weight of a typical human cell is protein.",
    opts: ["one-tenth", "one-fifth", "one-third", "one-half"],
    answer: "one-half",
  },
  {
    question: "Enzymes",
    opts: [
      "decrease the free energy change of a reaction",
      "increase the activation energy of a reaction",
      "decrease transition energy",
      "increase the equilibrium constant of a reaction",
      "None of the above",
    ],
    answer: "decrease transition energy",
  },
  {
    question: "Which of the following statements concerning collagen is not true?",
    opts: [
      "Collagen is a major connective tissue protein",
      "Collagen is made up of tropocollagen",
      "Tropocollagen consists of three peptide chains that are cross-linked  triple helix",
      "Collagen has a large amount of glycine and proline",
      "Collagen contains unique hydroxyglycine and hydroxyproline",
    ],
    answer: "Collagen contains unique hydroxyglycine and hydroxyproline",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Nonspecific transport protein for fatty acids",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "Albumin",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Inhibitor of elastase to protect against smoke-induced obstructive lung disease",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "alpha1-globulins",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Antibodies",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "gamma-globulins",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Major transport protein for copper",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "alpha2-globulins",
  },
  {
    question: "A deficiency in which of the following amino acids will result in Kwashiorkor, even though the diet may contain a large amount of protein.",
    opts: ["Serine", "Glutamate", "Tryptophan", "Alanine", "Asparagine"],
    answer: "Tryptophan",
  },
  {
    question: "Which of the following immunity functions is associated with a significant uptake of intact protein occurred in small intestine?",
    opts: [
      "Passive immunity during infancy",
      "IgG protects against infectionn in uteri during neonatal period",
      "IgA secrets in milk",
      "IgM responds first to a new antigen",
      "IgE is responsible for allergy",
    ],
    answer: "Passive immunity during infancy",
  },
  {
    question: "A patient  came to the emergency room complaining of severe abdominal pain. Laboratory analysis revealed high concentrations of dibasic amino acids in the urine. The patient's pain subsided a few hours later after he passed a kidney stone. The most likely diagnosis for this patient is:",
    opts: [
      "Hartnup",
      "Cystinuria",
      "Kwashiorkor",
      "Hyperammonemia",
      "Scurvy",
    ],
    answer: "Cystinuria",
  },
  {
    question: "What percent of the circulating amino acids is contributed to protein synthesis?",
    opts: ["9", "10-25", "30-40", "45-55", "75"],
    answer: "75",
  },
  {
    question: "In humans, the major route of nitrogen transfer from amino acids into ammonia involves which of the following pairs of enzymes?",
    opts: ["Glutamine synthetase and urease", "Transaminases and glutaminase", "Glutamate dehydrogenase and transaminases", "Amino acid oxidases and arginase", "Glutaminase and amino acid oxidases"],
    answer: "Glutamate dehydrogenase and transaminases",
  },
  {
    question: "Where is urea synthesized?",
    opts: ["brain and pancreas", "bones and joints", "stomach and duodenum", "liver and kidneys"],
    answer: "liver and kidneys",
  },
  {
    question: "The most branched-chain amino acids (i.g. valine, isoleucine, and leucine) are metabolized in the liver but not in the skeletal muscle.",
    opts: ["True", "False"],
    answer: "False",
  },
  {
    question: "Human body turns over the total body protein at about 10-20% (300-400 g) each day.",
    opts: ["True", "False"],
    answer: "False",
  },
  {
    question: "A deficiency in which of the following amino acids will result in negatice nitrogen balance, even though the diet may contain a large amount of protein.",
    opts: ["Serine", "Glutamate", "Tryptophan", "Alanine", "Asparagine"],
    answer: "Tryptophan",
  },
  {
    question: "Pellagra-like symptom may be induced by which of the following conditions:",
    opts: ["Incomeplete dietary protein such as corn protein", "Inherited defects in neutral amino acid transporter", "Niacin Deficiency", "All of the above", "None of the above"],
    answer: "All of the above",
  },
];

const lipids: QuizQuestion[] = [
  {
    question: "What are the most prevalent saturated fatty acids in average US diet?",
    opts: ["palmitic and stearic acid", "oleic and linoleic", "linoleic and linolenic", "acetic and butyric"],
    answer: "palmitic and stearic acid",
  },
  {
    question: "What is formed when fatty acids are oxidized in the mitochondria?",
    opts: ["glycerol", "pyruvate", "triacylglyceride", "acetyl CoA"],
    answer: "acetyl CoA",
  },
  {
    question: "What is the normal product of the fatty acid synthase?",
    opts: ["Triacylglyceride", "Palmitate", "n-3 fatty acid", "n-6 fatty acid"],
    answer: "Palmitate",
  },
  {
    question: "Which fatty acid is considered essential and must be supplied by the diet?",
    opts: ["alpha-linolenic acid", "linoleic acid", "gamma-linolenic acid", "arachidonic acid", "Both alpha-linolenic acid and linoleic acid"],
    answer: "Both alpha-linolenic acid and linoleic acid",
  },
  {
    question: "Humans build about _____mg of cholesterol each day.",
    opts: ["100", "300", "700", "2000"],
    answer: "700",
  },
  {
    question: "Cholesterol is the precursor of the following except:",
    opts: ["estrogens and androgens", "glucocorticoids", "bile acids", "vitamin D", "phospholipids"],
    answer: "phospholipids",
  },
  {
    question: "What is the most active site of lipid digestion?",
    opts: ["stomach", "upper jejunum", "duodenum", "ileum"],
    answer: "upper jejunum",
  },
  {
    question: "The main function of lipoproteins is to",
    opts: ["facilitate lipid digestion", "protect against CVD", "act as the carrier of lipids", "provide energy", "all of the above"],
    answer: "act as the carrier of lipids",
  },
  {
    question: "The main component of an HDL molecule is protein.",
    opts: ["True", "False"],
    answer: "True",
  },
  {
    question: "LDL-cholesterol is often termed \"bad cholesterol\" because it has been linked to atherogenic fatty plaque formation.",
    opts: ["true", "false"],
    answer: "true",
  },
  {
    question: "Trans unsaturated fatty acids are now considered more atherogenic than saturated fatty acids because they",
    opts: ["are unnatural and only formed during fat processing", "cause excess blood clotting", "elevate serum LDL while decreasing HDL", "are saturated completely"],
    answer: "elevate serum LDL while decreasing HDL",
  },
  {
    question: "The mechanism of action of Orlistat is to",
    opts: ["inhibit pancreatic lipase activity", "destroy bile acids in the small intestine", "decrease appetite", "none of the above", "all of the above"],
    answer: "inhibit pancreatic lipase activity",
  },
  {
    question: "Which hormone is considered to be an antagonist of lipolysis?",
    opts: ["insulin", "epinephrine", "glucagon", "adrenocorticotropic hormone", "none of the above"],
    answer: "insulin",
  },
  {
    question: "Excessive ketone bodies may be accumulated due to reduced supply of cellular glucose and a concomitant _____ in fatty acid oxidation.",
    opts: ["increase", "decrease", "no change"],
    answer: "increase",
  },
  {
    question: "What is the legally intoxicated amount of alcohol in the bloodstream?",
    opts: ["less than 10 mg%", "11-24 mg%", "25-45 mg%", "50-100 mg%", "none of the above"],
    answer: "less than 10 mg%",
  },
];

export function getQuestions(type: string): QuizQuestion[] {
  switch (type) {
    case "protein":
      return proteins;
    case "lipids":
      return lipids;
    default:
      return [] as QuizQuestion[];
  }
}
