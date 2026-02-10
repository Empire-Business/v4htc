import fs from 'fs';
import path from 'path';

export interface FileNode {
  id: string;
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  extension?: string;
}

function getExtension(filename: string): string {
  const ext = path.extname(filename);
  return ext ? ext.slice(1) : '';
}

function scanDirectory(dir: string, basePath: string = ''): FileNode[] {
  const items = fs.readdirSync(dir);
  const nodes: FileNode[] = [];

  for (const item of items) {
    // Skip hidden files and .DS_Store
    if (item.startsWith('.') || item === '.DS_Store') continue;

    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      nodes.push({
        id: relativePath,
        name: item,
        path: relativePath,
        type: 'folder',
        children: scanDirectory(fullPath, relativePath),
      });
    } else {
      // Only include text files
      const ext = getExtension(item);
      const textExtensions = ['md', 'txt', 'json', 'js', 'ts', 'tsx', 'jsx', 'yaml', 'yml', 'html', 'css', 'xml', 'csv'];
      if (textExtensions.includes(ext) || ext === '') {
        nodes.push({
          id: relativePath,
          name: item,
          path: relativePath,
          type: 'file',
          extension: ext,
        });
      }
    }
  }

  // Sort: folders first, then files alphabetically
  return nodes.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === 'folder' ? -1 : 1;
  });
}

export function getHTCStructure(): FileNode[] {
  const htcPath = path.join(process.cwd(), '..', 'HTC');
  return scanDirectory(htcPath, '');
}

export function getFileContent(filePath: string): string {
  const htcPath = path.join(process.cwd(), '..', 'HTC');
  const fullPath = path.join(htcPath, filePath);

  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath, 'utf-8');
  }
  return '';
}

export function searchFiles(query: string): FileNode[] {
  const structure = getHTCStructure();
  const results: FileNode[] = [];
  const lowerQuery = query.toLowerCase();

  function searchInNode(node: FileNode) {
    if (node.name.toLowerCase().includes(lowerQuery)) {
      results.push(node);
    }
    if (node.children) {
      node.children.forEach(searchInNode);
    }
  }

  structure.forEach(searchInNode);
  return results;
}
