export interface ToolLearningSignal {
  toolChain: string[];
  successRate: number;
  averageScore: number;
}

export function shouldPreferChain(signal: ToolLearningSignal) {
  return signal.successRate >= 0.8 && signal.averageScore >= 85;
}

export const learningRules = {
  promoteSuccessfulChains: true,
  demoteRepeatedFailures: true,
  requireEvaluation: true,
};
