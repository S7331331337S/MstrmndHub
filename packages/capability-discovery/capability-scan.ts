import { listCapabilities, Capability } from './capability-registry';

export function scanCapabilities(): Capability[] {
  return listCapabilities().filter((capability) => capability.available);
}
