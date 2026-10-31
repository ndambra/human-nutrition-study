export type Flashcard = {
  front: string;
  back: string;
};

const protein: Flashcard[] = [];
const lipids: Flashcard[] = [];
const digestion: Flashcard[] = [
  { front: "Accessory organs", back: "Salivary glands, Liver, Gallbladder, Pancreas" },
  { front: "Gastrointestinal tract", back: "Oral cavity; Pharynx; Esophagus; Stomach; Small intestine; Large intestine" },
  { front: "Gastrointestinal tract functions", back: "Peristalsis, secretion, digestion, absorption, storage and elimination of solid waste" },
  { front: "Gastrointestinal tract layers", back: "mucosa, submuscoa, muscularis layer, adventitia (serosa)" },
  { front: "Salivary glands", back: "release a mixture of water, mucus, and enzymes" },
  { front: "Liver", back: "produces bile, an important secretion needed for lipid digestion" },
  { front: "Gallbladder", back: "stores and releases bile, needed for lipid digestion" },
  { front: "Pancreas", back: "releases pancreatic juice that neutralizes chyme and contains  enzymes needed for carbohydreate, protein, and lipid digestion" },
  { front: "Oral cavity", back: "mechanical breakdown, moistening, and mixing of food with saliva" },
  { front: "Pharynx", back: "propels  food from the back of the oral cavity into the esophagus" },
  { front: "Esophagus", back: "transports food from the pharynx  to the stomach" },
  { front: "Stomach", back: "muscular contractions mix food with acid and enzymes, causing the chemical and physical breakdown of food into chyme" },
  { front: "Small intestine", back: "major site of enzymatic digestion and nutrient absorption" },
  { front: "Large intestine", back: "receives and prepares undigested food to be eliminated from the body as feces" },
  { front: "T/F: The ingested nutrients are usually digested on microvilli and absorbed by the matured mucosal epithelium (enterocytes)", back: "True" },
  { front: "Regulatory peptides/hormones secreted by endocrine cells", back: "Gastrin, CCK, Secretin, GIP" },
  { front: "Peptic ulcer disease", back: " Ulcerations or erosions in the mucosa and submucosa layers of the stomach. Causes: Helicobacter (H.) pylori; chronic alcohol ingestion; NSAIDS" },
];
const theCell: Flashcard[] = [
  { front: "The Cell", back: "Basic unit of living life" },
  { front: "% of components in lean men", back: "Water=62%; Fat=16%; Protein=16%; Minerals=6%; Carbohydrate=<1%" },
  { front: "% of components in lean women", back: "Water=59%; Fat=22%; Protein=14%; Minerals=5%; Carbohydrate=<1%" },
  { front: "Major element of the human  body", back: "Oxygen" },
  { front: "Integumentary System", back: "Skin, hair, nails, sense receptors, oil glands" },
  { front: "Skeletal System", back: "Bones and Joints" },
  { front: "Muscular System", back: "Muscles" },
  { front: "Nervous System", back: "Brain, spinal cord, nerves" },
  { front: "Circulatory System", back: "Heart, blood vessels" },
  { front: "Lymphatic System", back: "Lympth nodes, lymph vessels, thymus, spleen, tonsils" },
  { front: "Respiratory System", back: "Nose, pharynx, larynx, trachea, bronchi, lungs" },
  { front: "Digestive System", back: "Mouth, teeth, salivary glands, tongue, pharynx, esophagus, stomach, small instestine, large instestine, rectum,  anal canal, liver, gallbladder,  pancreas" },
  { front: "Urinary System", back: "Kidneys, ureters, urinary bladder, urethra" },
  { front: "Reproductive System (male)", back: "Testes, ductus deferens, urethra, prostate, penis, scrotum" },
  { front: "Reproductive System (female)", back: "Ovaries, uterus, uterine (fallopian), tubes, vagina, vulva, breasts" },
  { front: "Eukaryote", back: "cells of multicellular organisms" },
  { front: "Mitosis", back: "cell division" },
  { front: "cell growth", back: "growth in cell size or cell populations" },
  { front: "Proliferation", back: "DNA synthesis" },
  { front: "Differentiation", back: "cells acquire specific 'type'" },
  { front: "Apoptosis", back: "programmed cell death" },
  { front: "P53", back: "almost 90%  of cancers have  P53 mutation" },
  { front: "Lysosome", back: "The organelle that serves as the digestive system in the cell" },
  { front: "Plasma Membrane", back: "Sheet-like structures composed primarily of phospholipids and protein; forming a lipid bilayer to prevent passage of water soluble components" },
  { front: "Nucleus", back: "contains the DNA of the cell" },
];

export function getFlashcards(type: string): Flashcard[] {
  switch (type) {
    case "protein":
      return protein;
    case "lipids":
      return lipids;
    case "digestion":
      return digestion;
    case "the-cell":
      return theCell;
    default:
      return [] as Flashcard[];
  }
}
