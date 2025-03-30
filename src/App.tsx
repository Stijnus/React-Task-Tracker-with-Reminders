import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskComponent from './components/Task';
import { Task as TaskType } from './types';

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 12:30pm',
      reminder: false,
    },
  ]);

  const addTask = (text: string, day: string, reminder: boolean) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, text, day, reminder };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskComponent
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">No tasks to show</p>
        )}
      </div>
    </div>
  );
}
