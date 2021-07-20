import { Model } from '../model';

// IssueVerifiableCredentialRequest represents a request to issue a verifiable credential
export type IssueVerifiableCredentialRequest = Model & {
	address: string;
	organizationId: string;
	publicKey: string;
	signature: string;
};


// IssueVerifiableCredentialResponse represents a response to a VC issuance request
export type IssueVerifiableCredentialResponse = Model & {
	credential: string;
};
