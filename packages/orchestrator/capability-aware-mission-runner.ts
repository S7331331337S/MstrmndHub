import { scanCapabilities } from '../capability-discovery/capability-scan';
import { selectTools } from '../capability-discovery/tool-selector';

export interface MissionRequest {
  objective: string;
}

export function prepareMission(mission: MissionRequest) {
  const capabilities = scanCapabilities();
  const selectedTools = selectTools(mission.objective, capabilities);

  return {
    mission,
    capabilitiesChecked: capabilities.length,
    selectedTools,
    status: 'ready',
  };
}
