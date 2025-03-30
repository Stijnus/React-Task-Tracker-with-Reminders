import { ListChecks } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm mb-8">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center">
        <ListChecks size={28} className="text-blue-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">Task Tracker</h1>
      </div>
    </header>
  );
}
