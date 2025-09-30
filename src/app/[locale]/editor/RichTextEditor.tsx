'use client';
interface RichTextEditorProps {
  content: string;
  onUpdate: (content: string) => void;
  placeholder?: string;
}

function RichTextEditor({ content, onUpdate, placeholder }: RichTextEditorProps) {

  return (
    <div className="rich-text-editor">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .rich-text-editor .ProseMirror {
          outline: none;
          padding: 1rem 0;
          min-height: 400px;
        }
        
        .rich-text-editor .ProseMirror p.is-editor-empty:first-child::before {
          content: '${placeholder || 'Start writing...'}';
          float: left;
          color: hsl(var(--muted-foreground));
          pointer-events: none;
          height: 0;
        }

        .rich-text-editor .ProseMirror h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 1.5rem 0 1rem 0;
          color: hsl(var(--foreground));
        }

        .rich-text-editor .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 1.25rem 0 0.75rem 0;
          color: hsl(var(--foreground));
        }

        .rich-text-editor .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 1rem 0 0.5rem 0;
          color: hsl(var(--foreground));
        }

        .rich-text-editor .ProseMirror p {
          margin: 0.75rem 0;
          line-height: 1.6;
          color: hsl(var(--foreground));
        }

        .rich-text-editor .ProseMirror ul, .rich-text-editor .ProseMirror ol {
          margin: 0.75rem 0;
          padding-left: 1.5rem;
        }

        .rich-text-editor .ProseMirror ul[data-type="taskList"] {
          list-style: none;
          padding-left: 0;
        }

        .rich-text-editor .ProseMirror ul[data-type="taskList"] li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin: 0.5rem 0;
        }

        .rich-text-editor .ProseMirror ul[data-type="taskList"] li input[type="checkbox"] {
          margin: 0.25rem 0;
        }

        .rich-text-editor .ProseMirror strong {
          font-weight: bold;
        }

        .rich-text-editor .ProseMirror em {
          font-style: italic;
        }

        .rich-text-editor .ProseMirror a {
          color: hsl(var(--primary));
          text-decoration: underline;
        }

        .rich-text-editor .ProseMirror mark {
          background-color: hsl(var(--secondary));
          padding: 0.1rem 0.2rem;
          border-radius: 0.25rem;
        }

        .rich-text-editor .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }

        .rich-text-editor .ProseMirror blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: hsl(var(--muted-foreground));
        }

        .rich-text-editor .ProseMirror code {
          background-color: hsl(var(--muted));
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.9em;
        }

        .rich-text-editor .ProseMirror pre {
          background-color: hsl(var(--muted));
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }

        .rich-text-editor .ProseMirror pre code {
          background: none;
          padding: 0;
        }
        `,
        }}
      />
      
    </div>
  );
}

export default RichTextEditor;
