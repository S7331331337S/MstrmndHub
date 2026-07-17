import { Capability } from './capability-registry';

export function selectTools(goal: string, capabilities: Capability[]) {
  return capabilities
    .filter((capability) =>
      capability.bestFor.some((item) => goal.toLowerCase().includes(item.toLowerCase()))
    )
    .sort((a, b) => b.confidence - a.confidence);
}
