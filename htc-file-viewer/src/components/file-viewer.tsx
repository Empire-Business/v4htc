'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileNode } from '@/components/file-tree';
import { FileText, ExternalLink } from 'lucide-react';

interface FileViewerProps {
  file: FileNode | null;
  content: string;
}

export function FileViewer({ file, content }: FileViewerProps) {
  if (!file) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        <div className="text-center">
          <FileText size={48} className="mx-auto mb-4 opacity-50" />
          <p>Select a file to view its contents</p>
        </div>
      </div>
    );
  }

  const isMarkdown = file.extension === 'md';
  const isText = ['txt', 'json', 'js', 'ts', 'tsx', 'jsx', 'yaml', 'yml', 'html', 'css', 'xml', 'csv'].includes(file.extension || '');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-blue-500" />
          <span className="font-medium truncate">{file.name}</span>
          <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
            {file.extension || 'file'}
          </span>
        </div>
        <a
          href={`/../../HTC/${file.path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600"
        >
          <ExternalLink size={14} />
          Open original
        </a>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 lg:p-8">
          {isMarkdown ? (
            <article className="prose prose-gray dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </article>
          ) : isText ? (
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 dark:text-gray-300">
              {content}
            </pre>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <FileText size={48} className="mx-auto mb-4 opacity-50" />
              <p>Preview not available for this file type</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
