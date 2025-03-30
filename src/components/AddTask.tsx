import { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddTaskProps {
  onAdd: (text: string, day: string, reminder: boolean) => void;
}

export default function AddTask({ onAdd }: AddTaskProps) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    }
    onAdd(text, day, reminder);
    setText('');
    setDay('');
    setReminder(false);
    setShowForm(false);
  };

  return (
    <div className="mb-6">
      {showForm ? (
        <form onSubmit={onSubmit} className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Task</label>
            <input
              type="text"
              placeholder="Add Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Day & Time</label>
            <input
              type="text"
              placeholder="Add Day & Time"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Set Reminder</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Task
          </button>
        </form>
      ) : null}
      <button
        onClick={() => setShowForm(!showForm)}
        className={`flex items-center justify-center w-full py-2 px-4 rounded-md ${showForm ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
      >
        <Plus size={18} className="mr-2" />
        {showForm ? 'Close' : 'Add Task'}
      </button>
    </div>
  );
}
