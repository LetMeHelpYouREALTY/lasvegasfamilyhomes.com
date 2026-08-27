import { agentInfo, officeInfo } from "@/lib/site-config";

export default function MlsDisclaimer() {
  return (
    <p className="mx-auto max-w-6xl px-4 pb-12 text-xs text-slate-500">
      Listing information is provided by RealScout and participating MLS
      systems, including the Greater Las Vegas Association of REALTORS®
      (GLVAR), and is deemed reliable but not guaranteed. Equal Housing
      Opportunity. {agentInfo.name}, License {agentInfo.license},{" "}
      {agentInfo.brokerage}. {officeInfo.address.full}. Call {agentInfo.phone}.
    </p>
  );
}
