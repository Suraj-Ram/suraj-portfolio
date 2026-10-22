import RenderMarkdown from "@/components/RenderMarkdown";

export default function Projects({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  void params;
  return (
    <div className="py-10">
      <h6 className="text-sm uppercase text-gray-400">Project</h6>
      <RenderMarkdown source="src/content/project-pages/faculty-activity-tracker.mdx" />
    </div>
  );
}
