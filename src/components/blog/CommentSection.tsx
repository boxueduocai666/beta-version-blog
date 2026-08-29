import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CommentSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition-all"
        >
          展开评论区
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="p-6 rounded-2xl bg-white/50 border border-white/60 space-y-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-800">文章讨论</h3>
              <button onClick={() => setIsOpen(false)} className="text-xs text-slate-500 hover:text-slate-800">
                收起评论
              </button>
            </div>

            <textarea
              placeholder="写下你的想法..."
              className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/70"
              rows={3}
            />
            <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium">
              发送评论
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

