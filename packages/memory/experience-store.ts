export interface Experience {
  mission: string;
  outcome: "success" | "failure";
  lesson: string;
  timestamp: Date;
}

const experiences: Experience[] = [];

export function remember(experience: Experience) {
  experiences.push(experience);
}

export function recall(): Experience[] {
  return [...experiences];
}
