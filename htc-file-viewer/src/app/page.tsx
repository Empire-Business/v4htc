'use client';

import { useState, useCallback, useEffect } from 'react';
import { FileTree } from '@/components/file-tree';
import { FileViewer } from '@/components/file-viewer';
import { Breadcrumb } from '@/components/breadcrumb';
import { Menu } from 'lucide-react';

interface FileNode {
  id: string;
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  extension?: string;
}

// This component runs on client to handle interactivity
export default function FileViewerApp() {
  const [structure, setStructure] = useState<FileNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [fileContent, setFileContent] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fetch file structure
  useEffect(() => {
    fetch('/api/files')
      .then(res => res.json())
      .then(data => {
        setStructure(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch structure:', err);
        setLoading(false);
      });
  }, []);

  // Fetch file content when selected file changes
  useEffect(() => {
    if (!selectedFile) {
      setFileContent('');
      return;
    }

    fetch(`/api/file-content?path=${encodeURIComponent(selectedFile.path)}`)
      .then(res => res.json())
      .then(data => {
        setFileContent(data.content || '');
      })
      .catch(err => {
        console.error('Failed to fetch content:', err);
        setFileContent('');
      });
  }, [selectedFile]);

  const handleSelectFile = useCallback((file: FileNode) => {
    setSelectedFile(file);
  }, []);

  const handleNavigate = useCallback((path: string | null) => {
    setSelectedFile(null);
    setFileContent('');
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading files...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-gray-950">
      {/* FileTree */}
      <FileTree
        data={structure}
        onSelect={handleSelectFile}
        selectedFile={selectedFile?.path || null}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Breadcrumb */}
        <Breadcrumb file={selectedFile} onNavigate={handleNavigate} />

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center p-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* File Viewer */}
        <FileViewer file={selectedFile} content={fileContent} />
      </div>
    </div>
  );
}
