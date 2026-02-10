import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface FileNode {
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

  return nodes.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === 'folder' ? -1 : 1;
  });
}

export async function GET() {
  try {
    const htcPath = path.join(process.cwd(), '..', 'HTC');
    const structure = scanDirectory(htcPath, '');
    return NextResponse.json(structure);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to scan directory' }, { status: 500 });
  }
}
