export type UserRole = "company" | "developer";

export interface SignUpRequest {
  email: string;
  password: string;
  confPassword: string;
  name?: string | null;

  role: UserRole;

  companyName?: string | null;
  address?: string | null;
  website?: string | null;

  skills?: string[] | null;
}

export interface CompanyProfile {
  name: string;
  address?: string | null;
  website?: string | null;
}

export interface CandidateProfile {
  stacks: string[];
}

export interface GetUserDataResponse {
  id: string;
  email: string;
  name: string;
  roles: string[];

  companyProfile?: CompanyProfile | null;
  candidateProfile?: CandidateProfile | null;
}