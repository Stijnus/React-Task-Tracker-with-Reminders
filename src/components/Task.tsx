import { Bell, BellOff, Trash2 } from 'lucide-react';
import { Task as TaskType } from '../types';

interface TaskProps {
  task: TaskType;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TaskComponent({ task, onDelete, onToggle }: TaskProps) {
  return (
    <div className={`group flex items-center justify-between p-4 mb-3 rounded-lg transition-all ${task.reminder ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-white shadow-sm'}`}>
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onToggle(task.id)}
          className={`p-2 rounded-full ${task.reminder ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}
        >
          {task.reminder ? <Bell size={18} /> : <BellOff size={18} />}
        </button>
        <div>
          <h3 className="font-medium text-gray-900">{task.text}</h3>
          <p className="text-sm text-gray-500">{task.day}</p>
        </div>
      </div>
      <button 
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
