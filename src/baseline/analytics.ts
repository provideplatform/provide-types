// WorkgroupDashboardAPIResponse is a general response containing data related to the current workgroup and organization context
export interface WorkgroupAnyliticsAPIResponse {
    activity: ActivityAPIResponseItem[]
    analytics: AnalyticsAPIResponse
    participants: ParticipantAnalyticsAPIResponse
    workflows: WorkflowAnalyticsAPIResponse
  }
  
// ActivityAPIResponseItem is a single activity item for inclusion in the `WorkgroupDashboardAPIResponse`
export interface ActivityAPIResponseItem {
    metadata: object
    subtitle: string
    timestamp: string
    title: string
  
    workflowId: string
    workstepId: string
}
  
// AnalyticsAPIResponse is the analytics item for inclusion in the `WorkgroupDashboardAPIResponse`
export interface AnalyticsAPIResponse {
    metadata: Object
    tree: TreeAnalyticsAPIResponse
}
  
// TreeAnalyticsAPIResponse is the tree analtics time-series item for inclusion in the `AnalyticsAPIResponse`
export interface TreeAnalyticsAPIResponse {
    startAt: string
    endAt: string
  
    items: TreeAnalyticsAPIResponseItem[]
    metadata: Object
}
  
// TreeAnalyticsAPIResponseItem is the tree analtics time-series item for inclusion in the `AnalyticsAPIResponse`
export interface TreeAnalyticsAPIResponseItem {
    date: string
    metadata: Object
    size: number
    subtitle: string
    title: string
}

// ParticipantsAPIResponse is the participants item for inclusion in the `WorkgroupDashboardAPIResponse`
export interface ParticipantAnalyticsAPIResponse {
    actionItemsCount: number
    usersCount: number
    organizationsCount: number
}

// WorkflowsAPIResponse is the workflows item for inclusion in the `WorkgroupDashboardAPIResponse`
export interface WorkflowAnalyticsAPIResponse {
    delayedCount: number
    draftCount: number
    publishedCount: number
}
  