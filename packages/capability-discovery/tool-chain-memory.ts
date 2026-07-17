export interface ToolChainExperience {
  objective: string;
  tools: string[];
  outcome: 'success' | 'failure';
  score: number;
  lesson: string;
  createdAt: Date;
}

const history: ToolChainExperience[] = [];

export function rememberToolChain(experience: ToolChainExperience) {
  history.push(experience);
}

export function recallToolChains(objective?: string) {
  if (!objective) return [...history];

  return history.filter((item) =>
    item.objective.toLowerCase().includes(objective.toLowerCase())
  );
}
