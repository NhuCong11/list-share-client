'use client';
import { useState } from 'react';
import { CheckSquare, Copy, Download, FileText, Save, Share2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { showToast, ToastType } from '@/utils/toastUtils';
import { useTranslations } from 'next-intl';
import EditorToolbar from './EditorToolbar';
import { AnimatePresence } from 'framer-motion';
import RichTextEditor from './RichTextEditor';
import ChecklistEditor from './ChecklistEditor';

type EditorMode = 'document' | 'checklist';

function Editor() {
  const t = useTranslations();

  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<EditorMode>('document');
  const [content, setContent] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  const [createdDocumentId, setCreatedDocumentId] = useState<string | null>(null);

  const handleCopyContent = () => {
    navigator.clipboard.writeText(content);
    showToast(t('editor.toast.copy'), ToastType.SUCCESS);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Reveal variant="fade-up-inview">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-2xl font-bold border-none bg-transparent py-0 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground/50"
                placeholder={t('editor.place01')}
              />
            </div>

            {/* Mode Toggle */}
            <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-xl">
              <Toggle
                pressed={mode === 'document'}
                onPressedChange={() => setMode('document')}
                className={`data-[state=on]:bg-primary data-[state=on]:text-primary-foreground ${
                  mode !== 'document' && 'cursor-pointer'
                }`}
              >
                <FileText className="h-4 w-4 mr-2" />
                {t('editor.btns.docs')}
              </Toggle>
              <Toggle
                pressed={mode === 'checklist'}
                onPressedChange={() => setMode('checklist')}
                className={`data-[state=on]:bg-primary data-[state=on]:text-primary-foreground ${
                  mode !== 'checklist' && 'cursor-pointer'
                }`}
              >
                <CheckSquare className="h-4 w-4 mr-2" />
                {t('editor.btns.checklist')}
              </Toggle>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="ghost" className="cursor-pointer" onClick={handleCopyContent}>
                <Copy className="mr-2 h-4 w-4" />
                {t('editor.btns.copy')}
              </Button>
              <Button variant="ghost" className="cursor-pointer">
                <Download className="mr-2 h-4 w-4" />
                {t('editor.btns.export')}
              </Button>
              <Button variant="ghost" className="cursor-pointer">
                <Save className="mr-2 h-4 w-4" />
                {t('editor.btns.save')}
              </Button>
              <Button className="premium-shadow hover:scale-105 cursor-pointer">
                <Share2 className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Editor */}
        <Reveal variant="fade-up-delay" custom={1}>
          <Card className="premium-shadow-lg border-0 mt-3 card-gradient backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <EditorToolbar mode={mode} />
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {mode === 'document' ? (
                    <Reveal variant="slide-horizontal">
                      <RichTextEditor
                        content={content}
                        onUpdate={setContent}
                        placeholder="Start writing your document..."
                      />
                    </Reveal>
                  ) : (
                    <Reveal variant="slide-horizontal-reverse">
                      <ChecklistEditor
                        content={content}
                        onUpdate={setContent}
                        placeholder="Add your checklist items..."
                      />
                    </Reveal>
                  )}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}

export default Editor;
