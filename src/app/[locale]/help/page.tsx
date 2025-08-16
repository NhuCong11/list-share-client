import { useTranslations } from 'next-intl';
import { Check, HelpCircle, Share2, Zap } from 'lucide-react';
import { NAME_BRAND } from '@/constants';
import Reveal from '@/components/Reveal';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getKeys, getQA, SHARING_LENGTH, STARTED_LENGTH } from './constants';

function Help() {
  const t = useTranslations();
  const startedTranslations = useTranslations('help.started');
  const sharingTranslations = useTranslations('help.sharing');
  const qaTranslations = useTranslations('help.qa');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal variant="fade-up-inview">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t('help.title.01')}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent ml-3">
                {NAME_BRAND}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('help.desc')}</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Getting Started */}
          <Reveal variant="fade-left-delay">
            <Card className="premium-shadow hover-lift border-border/50 card-gradient cursor-pointer h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="text-primary h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('help.title.02')}</h2>
                </div>
                <ol className="space-y-4 text-muted-foreground">
                  {getKeys(startedTranslations, STARTED_LENGTH).map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary text-sm font-bold rounded-full flex items-center justify-center mr-4 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-lg">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </Reveal>
          {/* Sharing & Collaboration */}
          <Reveal variant="fade-right-delay">
            <Card className="premium-shadow hover-lift border-border/50 card-gradient cursor-pointer h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
                    <Share2 className="text-secondary h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('help.title.03')}</h2>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  {getKeys(sharingTranslations, SHARING_LENGTH).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                        <Check className="text-green-500 h-4 w-4" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* FAQ Section */}
        <Reveal variant="fade-up-delay" custom={3}>
          <Card className="premium-shadow-lg border-border/50 card-gradient">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('help.title.04')}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {getQA(qaTranslations, 6).map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border/50 rounded-xl px-6 hover:border-border transition-colors"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground py-6 hover:no-underline cursor-pointer">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-semibold italic text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}

export default Help;
