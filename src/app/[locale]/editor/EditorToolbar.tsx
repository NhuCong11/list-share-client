import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Palette,
  Quote,
  Redo,
  Strikethrough,
  Underline,
  Undo,
} from 'lucide-react';

interface EditorToolbarProps {
  mode: 'document' | 'checklist';
}

function EditorToolbar({ mode }: EditorToolbarProps) {
  if (mode === 'checklist') {
    return null; // Checklist mode doesn't need a toolbar
  }

  return (
    <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/50 p-4 py-0">
      <div className="flex items-center gap-1 flex-wrap mb-2">
        {/* Undo/Redo */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Redo className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-2" />

        {/* Text Formatting */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Underline className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Strikethrough className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-2" />

        {/* Headings */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Heading3 className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-2" />

        {/* Lists */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <ListOrdered className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-2" />

        {/* Additional Formatting */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Quote className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Code className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-2" />

        {/* Media & Links */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Image className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-2 cursor-pointer" />

        {/* Colors */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Palette className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
          <Highlighter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default EditorToolbar;
