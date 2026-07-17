export interface SystemHealth {
  service: string;
  status: "healthy" | "degraded" | "failed";
  checkedAt: Date;
}

export function checkHealth(service: string): SystemHealth {
  return {
    service,
    status: "healthy",
    checkedAt: new Date(),
  };
}
