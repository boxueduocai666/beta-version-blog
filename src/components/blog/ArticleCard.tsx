import React from 'react';
import { motion } from 'framer-motion';
import { Article } from '../../types';
import { GlassCard } from '../glass/GlassCard';

interface Props {
  article: Article;
  onSelect: (article: Article) => void;
}

export const ArticleCard: React.FC<Props> = ({ article, onSelect }) => {
  return (
    <motion.div layoutId={`card-container-${article.id}`} onClick={() => onSelect(article)}>
      <GlassCard className="p-6 cursor-pointer group">
        <motion.div layoutId={`card-image-wrapper-${article.id}`} className="overflow-hidden rounded-2xl mb-4 h-48">
          <motion.img
            layoutId={`card-image-${article.id}`}
            src={article.cover}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        
        <div className="flex items-center gap-2 text-xs text-indigo-600 font-medium mb-2">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <motion.h2 layoutId={`card-title-${article.id}`} className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {article.title}
        </motion.h2>

        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </GlassCard>
    </motion.div>
  );
};

