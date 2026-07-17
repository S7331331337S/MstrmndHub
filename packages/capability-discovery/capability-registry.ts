export interface Capability {
  name: string;
  category: string;
  available: boolean;
  confidence: number;
  bestFor: string[];
}

const registry: Capability[] = [];

export function registerCapability(capability: Capability) {
  registry.push(capability);
}

export function listCapabilities() {
  return [...registry];
}
