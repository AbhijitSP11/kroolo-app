import ProjectsOverview from "@/components/Projects/ProjectsOverview";
import WorkspaceAlert from "@/components/Workspace/WorkspaceAlert";

export default function Home() {
  return (
    <main className="h-screen bg-gray-50 flex flex-col">
      <WorkspaceAlert />
      <ProjectsOverview />
    </main>
  );
}
