'use client';

import { useState, useCallback } from 'react';
import { Folder, FileText, ChevronRight, ChevronDown, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FileNode {
  id: string;
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  extension?: string;
}

interface FileTreeProps {
  data: FileNode[];
  onSelect: (file: FileNode) => void;
  selectedFile: string | null;
  isOpen: boolean;
  onToggle: () => void;
}

function TreeNode({
  node,
  onSelect,
  selectedFile,
  depth = 0
}: {
  node: FileNode;
  onSelect: (file: FileNode) => void;
  selectedFile: string | null;
  depth?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="select-none">
      <div
        className={cn(
          'flex items-center gap-1.5 py-1.5 px-2 rounded-md cursor-pointer transition-colors',
          selectedFile === node.path
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        )}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={() => {
          if (hasChildren) {
            setIsExpanded(!isExpanded);
          } else if (node.type === 'file') {
            onSelect(node);
          }
        }}
      >
        {hasChildren && (
          <span className="text-gray-400">
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
        {!hasChildren && <span className="w-3.5" />}

        {node.type === 'folder' ? (
          <Folder size={16} className="text-yellow-500" fill="currentColor" fillOpacity={0.3} />
        ) : (
          <FileText size={16} className="text-gray-400" />
        )}

        <span className="text-sm truncate">{node.name}</span>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              onSelect={onSelect}
              selectedFile={selectedFile}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ data, onSelect, selectedFile, isOpen, onToggle }: FileTreeProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        'fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-200 lg:transform-none flex flex-col',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="font-semibold text-lg">HTC Files</h2>
          <button onClick={onToggle} className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
            <X size={20} />
          </button>
        </div>

        {/* Search placeholder */}
        <div className="p-3 border-b border-gray-200 dark:border-gray-800">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Tree */}
        <div className="flex-1 overflow-y-auto p-2">
          {data.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">No files found</p>
          ) : (
            data.map((node) => (
              <TreeNode
                key={node.id}
                node={node}
                onSelect={onSelect}
                selectedFile={selectedFile}
              />
            ))
          )}
        </div>
      </aside>
    </>
  );
}
