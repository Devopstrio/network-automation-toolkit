export enum NetworkVendor {
  CISCO = "CISCO",
  JUNIPER = "JUNIPER",
  ARISTA = "ARISTA",
  PALO_ALTO = "PALO_ALTO",
  F5 = "F5",
  GENERIC = "GENERIC"
}

export enum DeviceType {
  ROUTER = "ROUTER",
  SWITCH = "SWITCH",
  FIREWALL = "FIREWALL",
  LOAD_BALANCER = "LOAD_BALANCER",
  WIFI_CONTROLLER = "WIFI_CONTROLLER"
}

export interface NetworkDevice {
  id: string;
  name: string;
  ipAddress: string;
  vendor: NetworkVendor;
  type: DeviceType;
  model: string;
  osVersion: string;
  serialNumber: string;
  location: string;
  status: "ONLINE" | "OFFLINE" | "UNREACHABLE";
}

export interface ConfigJob {
  id: string;
  deviceId: string;
  templateId: string;
  status: "PENDING" | "RUNNING" | "SUCCESS" | "FAILED" | "ROLLED_BACK";
  startedAt: string;
  completedAt?: string;
  error?: string;
}

export interface ComplianceViolation {
  id: string;
  deviceId: string;
  ruleId: string;
  description: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  detectedAt: string;
}

export interface NetworkKPIs {
  uptimePercentage: number;
  configComplianceScore: number;
  automationSuccessRate: number;
  avgProvisioningTimeSeconds: number;
  securityEnforcementScore: number;
}
