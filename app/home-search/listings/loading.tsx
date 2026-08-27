export default function HomeSearchLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-white pt-16">
      <div className="h-16 border-b border-slate-200 bg-slate-50" />
      <div className="grid flex-1 lg:grid-cols-2">
        <div className="space-y-4 p-8">
          <div className="h-8 w-2/3 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-100" />
          <div className="h-4 w-5/6 rounded bg-slate-100" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="h-48 rounded-lg bg-slate-100" />
            <div className="h-48 rounded-lg bg-slate-100" />
          </div>
        </div>
        <div className="hidden bg-slate-200 lg:block" />
      </div>
    </div>
  );
}
