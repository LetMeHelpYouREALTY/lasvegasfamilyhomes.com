"use client";

type RealScoutAdvancedSearchProps = {
  agentId: string;
};

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

export default function RealScoutAdvancedSearch({
  agentId,
}: RealScoutAdvancedSearchProps) {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: `<realscout-advanced-search agent-encoded-id="${escapeAttr(agentId)}"></realscout-advanced-search>`,
      }}
    />
  );
}
