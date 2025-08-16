import { useTranslations } from 'next-intl';

export const STARTED_LENGTH = 4;
export const SHARING_LENGTH = 4;
export const QA_LENGTH = 6;

export const getKeys = (t: ReturnType<typeof useTranslations>, count: number) => {
  return Array.from({ length: count }, (_, i) => t(String(i + 1).padStart(2, '0')));
};

export const getQA = (t: ReturnType<typeof useTranslations>, count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const key = String(i + 1).padStart(2, '0');
    return {
      question: t(`${key}.question`),
      answer: t(`${key}.answer`),
    };
  });
};
