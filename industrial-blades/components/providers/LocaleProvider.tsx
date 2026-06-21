/**
 * Locale Provider
 * Client component'lere locale ve dictionary sağlar
 */

'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { Locale, Dictionary } from '@/lib/i18n';

interface LocaleContextType {
  locale: Locale;
  dictionary: Dictionary;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  children,
  locale,
  dictionary,
}: {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <LocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

export function useTranslation() {
  const { dictionary } = useLocale();
  return dictionary;
}
