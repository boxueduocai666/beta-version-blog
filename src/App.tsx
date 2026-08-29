import React, { useState } from 'react';
import { LiquidBackground } from './components/glass/LiquidBackground';
import { GlassControls } from './components/glass/GlassControls';
import { ArticleCard } from './components/blog/ArticleCard';
import { ArticleOverlay } from './components/blog/ArticleOverlay';
import { MusicPlayer } from './components/widgets/MusicPlayer';
import { useGlassSettings } from './hooks/useGlassSettings';
import { Article } from './types';

const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: '液态玻璃态设计在现代 Web 的应用',
    date: '2026-08-28',
    category: '前端设计',
    readTime: '5 min',
    cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    excerpt: '探索 Glassmorphism 结合物理折射率与高光在 Web 交互界面的创新设计。',
    content: '这里是文章的详细内容，支持完整排版与交互效果...'
  }
];

export const App: React.FC = () => {
  const { settings, setSettings } = useGlassSettings();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen text-slate-800 p-4 sm:p-8">
      <LiquidBackground />

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 主要内容区域 */}
        <section className="lg:col-span-2 space-y-6">
          {MOCK_ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={(art) => setSelectedArticle(art)}
            />
          ))}
        </section>

        {/* 侧边栏 */}
        <aside className="space-y-6">
          <MusicPlayer />
          <GlassControls settings={settings} setSettings={setSettings} />
        </aside>
      </main>

      {/* 文章展开 Overlay */}
      <ArticleOverlay
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
};

export default App;

