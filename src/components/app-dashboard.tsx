'use client';

import { useState } from 'react';
import type { AppData, Category, EmailDifference } from '@/lib/types';
import { Hero } from '@/components/hero';
import { AppDetailPanel } from '@/components/app-detail-panel';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TechIcon } from './icons';
import { EmailDetailPanel } from './email-detail-panel';

export default function AppDashboard({ categories, emailData }: { categories: Category[], emailData: EmailDifference }) {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const [isEmailPanelOpen, setIsEmailPanelOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0]?.id ?? null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAppSelect = (app: AppData) => setSelectedApp(app);
  const handlePanelClose = () => setSelectedApp(null);
  const handleEmailPanelClose = () => setIsEmailPanelOpen(false);

  const filteredCategories = categories.map(category => {
    const filteredApps = category.apps.filter(app =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, apps: filteredApps };
  }).filter(category => category.apps.length > 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="container mx-auto px-4 md:px-6 py-12 flex-grow">
        <div className="mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for apps or technologies..."
              className="w-full max-w-2xl mx-auto pl-12 pr-4 py-6 text-base rounded-full bg-slate-900/50 border-border focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ease-in-out transform hover:scale-105",
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card/50 hover:bg-card'
                )}
              >
                {cat.title}
              </button>
            ))}
             <button
                key={emailData.id}
                onClick={() => setIsEmailPanelOpen(true)}
                className="px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 bg-card/50 hover:bg-card"
                style={{color: emailData.color}}
              >
                {emailData.title}
              </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {(searchTerm ? filteredCategories : categories)
              .filter(cat => cat.id === activeCategory && cat.apps.length > 0)
              .map((category) => (
              <section key={category.id} className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  <AnimatePresence>
                    {(searchTerm ? category.apps : category.apps).map((app, index) => (
                      <motion.div
                        key={app.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <AppCard app={app} onSelect={() => handleAppSelect(app)} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>

      </main>

      <AppDetailPanel app={selectedApp} isOpen={!!selectedApp} onClose={handlePanelClose} />
      <EmailDetailPanel data={emailData} isOpen={isEmailPanelOpen} onClose={handleEmailPanelClose} />
    </div>
  );
}

function AppCard({ app, onSelect }: { app: AppData, onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="w-full h-full text-left p-6 rounded-xl transition-all duration-300 group overflow-hidden relative bg-card shadow-lg border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top left, ${app.color}20, transparent 60%)`
        }}
      ></div>
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${app.color}20` }}>
            <TechIcon name={app.icon} className="h-8 w-8" style={{ color: app.color }} />
          </div>
          <h3 className="text-2xl font-headline font-bold text-foreground">{app.name}</h3>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed mb-4">{app.description}</p>
        <div className="flex flex-wrap gap-2">
          {app.protocols.slice(0, 3).map(protocol => (
            <span key={protocol} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {protocol}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
