import { Capability } from './capability-registry';

export function scoreCapability(capability: Capability, objective: string) {
  const relevance = capability.bestFor.some((item) =>
    objective.toLowerCase().includes(item.toLowerCase())
  );

  return {
    ...capability,
    score: (relevance ? 50 : 0) + capability.confidence * 50,
  };
}

export function rankCapabilities(capabilities: Capability[], objective: string) {
  return capabilities
    .map((capability) => scoreCapability(capability, objective))
    .sort((a, b) => b.score - a.score);
}
