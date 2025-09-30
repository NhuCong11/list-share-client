'use client';
import { useEffect, useState } from 'react';
import { GripVertical, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { Checkbox } from '@/components/ui/checkbox';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

interface ChecklistEditorProps {
  content: string;
  onUpdate: (content: string) => void;
  placeholder?: string;
}

function ChecklistEditor({ content, onUpdate, placeholder }: ChecklistEditorProps) {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItemText, setNewItemText] = useState('');

  const completedCount = items.filter((item) => item.completed).length;
  const progressPercentage = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  const addItem = () => {
    if (!newItemText.trim()) return;

    const newItem: ChecklistItem = {
      id: `item-${Date.now()}`,
      text: newItemText.trim(),
      completed: false,
    };

    setItems([...items, newItem]);
    setNewItemText('');
  };

  const updateItem = (id: string, updates: Partial<ChecklistItem>) => {
    setItems(items.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  useEffect(() => {
    if (content) {
      try {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      } catch {
        // If content is not JSON, create items from text
        const lines = content.split('\n').filter((line) => line.trim());
        const newItems: ChecklistItem[] = lines.map((line, index) => ({
          id: `item-${Date.now()}-${index}`,
          text: line.replace(/^[✓✗\[\]✓x]\s*/, '').trim(),
          completed: /^[✓✗\[x\]]/i.test(line.trim()),
        }));
        setItems(newItems);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onUpdate(JSON.stringify(items));
  }, [items, onUpdate]);

  return (
    <div className="checklist-editor">
      {/* Progress Bar */}
      {items.length > 0 && (
        <div className="mb-4 p-4 bg-muted/30 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Progress: {completedCount} of {items.length} completed
            </span>
            <span className="text-sm font-bold text-primary">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-secondary/20 rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Add Item Input */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <Input
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 h-12 text-lg rounded-xl border-1 border-border/50 transition-colors"
            placeholder={placeholder || 'Add a new checklist item and press Enter...'}
          />
          <Button
            onClick={addItem}
            size="lg"
            className="h-12 rounded-xl hover:scale-105 transition-all premium-shadow cursor-pointer"
          >
            <Plus className="h-8 w-8" />
          </Button>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-muted-foreground/50" />
            </div>
            <p className="text-muted-foreground text-md">Start by adding your first checklist item above</p>
          </div>
        ) : (
          <AnimatePresence>
            {items.map((item, index) => (
              <Reveal key={item.id} variant="list-item" custom={index}>
                <div className="group flex items-center gap-4 p-3 bg-card/50 backdrop-blur-sm rounded-xl hover:bg-card/80 transition-all duration-500 border border-border/50 hover:border-border hover:scale-[1.01] hover:shadow-md">
                  <button className="cursor-pointer drag-handle text-muted-foreground/40 hover:text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                    <GripVertical className="h-5 w-5" />
                  </button>

                  <Checkbox
                    checked={item.completed}
                    onCheckedChange={(checked) => updateItem(item.id, { completed: !!checked })}
                    className="w-5 h-5 border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary cursor-pointer"
                  />

                  <Input
                    value={item.text}
                    onChange={(e) => updateItem(item.id, { text: e.target.value })}
                    className={`flex-1 border-none bg-transparent px-4 focus-visible:ring-0 text-lg font-medium ${
                      item.completed ? 'text-muted-foreground line-through opacity-60' : 'text-foreground'
                    }`}
                  />

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteItem(item.id)}
                    className="cursor-pointer text-muted-foreground/40 hover:text-destructive opacity-0 group-hover:opacity-100 transition-all p-2 h-auto hover:scale-110 rounded-sm"
                  >
                    <Trash2 className="h-14 w-14" />
                  </Button>
                </div>
              </Reveal>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export default ChecklistEditor;
