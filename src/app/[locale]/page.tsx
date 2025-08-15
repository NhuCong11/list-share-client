import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight, CheckSquare, Play, Plus, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials, whyChooses } from './constants';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              {t('home.welcome')}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('home.title.01')}
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent animate-pulse-slow">
              {t('home.title.02')}
            </span>{' '}
            {t('home.title.03')}
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">{t('home.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="px-10 py-4 text-lg font-semibold premium-shadow hover:scale-105 transition-all group cursor-pointer"
            >
              <Link href="/editor">
                <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform" />
                {t('home.button.btn1')}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-10 py-4 text-lg font-semibold hover:scale-105 transition-all group cursor-pointer border border-primary/20"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t('home.button.btn2')}
            </Button>
          </div>
          {/* Floating Checklist Animation */}
          <Reveal variant="floating">
            <Card className="premium-shadow-lg border-0 glass-effect mx-auto max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckSquare className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">{t('home.floating.title')}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded border-2 border-primary bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground line-through">{t('home.floating.list1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded border-2 border-primary bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground line-through">{t('home.floating.list2')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded border-2 border-muted"></div>
                    <span className="text-sm text-foreground">{t('home.floating.list3')}</span>
                  </div>
                </div>
                <div className="mt-4 bg-secondary/20 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up-inview">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">{t('home.features.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('home.features.desc')}</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooses.map((item, index) => (
              <Reveal key={item.title} variant="fade-up-delay" custom={index}>
                <Card className="text-center border-0 card-gradient premium-shadow hover-lift group cursor-pointer h-full">
                  <CardContent className="p-8 ">
                    <div
                      className={`w-20 h-20 ${
                        item.color === 'text-primary' ? 'bg-primary/10' : 'bg-secondary/10'
                      } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className={`${item.color} h-10 w-10`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{t(item.title)}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{t(item.description)}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up-inview">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('home.testimonials.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('home.testimonials.desc')}</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} variant="fade-up-delay" custom={index}>
                <Card className="premium-shadow hover-lift border-border/50  cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 leading-relaxed">&quot;{t(testimonial.content)}&quot;</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{t(testimonial.role)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up-inview">
            <h2 className="text-3xl font-bold text-white mb-6">{t('home.cta.title')}</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{t('home.cta.desc')}</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="px-10 py-4 text-lg font-semibold hover:scale-105 transition-all group"
            >
              <Link href="/editor">
                {t('home.cta.btn')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
