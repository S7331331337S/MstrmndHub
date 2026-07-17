export type MutationStatus = "proposed" | "testing" | "accepted" | "rejected";

export interface MutationProposal {
  id: string;
  description: string;
  status: MutationStatus;
  createdAt: Date;
}

export function proposeMutation(description: string): MutationProposal {
  return {
    id: crypto.randomUUID(),
    description,
    status: "proposed",
    createdAt: new Date(),
  };
}

export function evaluateMutation(proposal: MutationProposal, passed: boolean) {
  return {
    ...proposal,
    status: passed ? "accepted" : "rejected",
  };
}
