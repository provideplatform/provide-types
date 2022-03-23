import { Model } from '../model';
import { Participant } from "./participant"

export type SubjectAccount = Model & {
    credentials: any
    metadata: {
        counterparties: Participant[]
        networkId: string
        organizationAddress: string
        organizationId: string
        organizationMessagingEndpoint: string
        organizationProxyEndpoint: string
        organizationRefreshToken: string
        organizationWebsocketEndpoint: string
        registryContractAddress: string
        registryContract: any
        sor: Object
        workgroupId: string
        vault: any
    }
    recoveryPolicy: any
    role: any
    securityPolicies: any
    subjectId: string
    type: string

    refreshToken: string
    refreshTokenRaw: string
}