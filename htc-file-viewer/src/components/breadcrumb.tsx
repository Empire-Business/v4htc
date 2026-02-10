'use client';

import { FileNode } from '@/components/file-tree';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  file: FileNode | null;
  onNavigate: (path: string | null) => void;
}

export function Breadcrumb({ file, onNavigate }: BreadcrumbProps) {
  if (!file) {
    return (
      <nav className="px-4 py-2 text-sm text-gray-500 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        HTC File Viewer
      </nav>
    );
  }

  const parts = file.path.split('/');
  const pathParts = parts.map((part, index) => ({
    name: part,
    path: index === parts.length - 1 ? file.path : parts.slice(0, index + 1).join('/'),
    isLast: index === parts.length - 1
  }));

  return (
    <nav className="flex items-center gap-1 px-4 py-2 text-sm bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
      <button
        onClick={() => onNavigate(null)}
        className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors"
      >
        <Home size={14} />
      </button>

      {pathParts.map((part, index) => (
        <div key={part.path} className="flex items-center gap-1">
          <ChevronRight size={14} className="text-gray-400" />
          <button
            onClick={() => {
              if (!part.isLast) {
                onNavigate(part.path);
              }
            }}
            className={cn(
              'truncate max-w-48 transition-colors',
              part.isLast
                ? 'text-gray-900 dark:text-gray-100 font-medium'
                : 'text-gray-500 hover:text-blue-500'
            )}
          >
            {part.name}
          </button>
        </div>
      ))}
    </nav>
  );
}
