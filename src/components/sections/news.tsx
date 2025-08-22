import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  snippet: string;
  imageUrl: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Yangi marshrutlar ishga tushdi',
    date: '22.08.2025',
    snippet: 'Toshkent-Samarqand va Andijon-Farg\'ona yo\'nalishlarida yangi tezkor yetkazib berish marshrutlari ochildi. Endi yuklar 2 baravar tezroq yetkazib beriladi.',
    imageUrl: '/api/placeholder/400/240',
    slug: 'yangi-marshrutlar-ishga-tushdi'
  },
  {
    id: 2,
    title: 'Ombor zanjiri kengaydi',
    date: '15.08.2025',
    snippet: 'Respublikaning 5 ta yangi shahrida zamonaviy ombor majmualari qurildi. Umumiy sig\'im 50% ga oshirildi va avtomatlashtirilgan saqlash tizimlari joriy etildi.',
    imageUrl: '/api/placeholder/400/240',
    slug: 'ombor-zanjiri-kengaydi'
  },
  {
    id: 3,
    title: 'Sifat standarti yangilandi',
    date: '01.08.2025',
    snippet: 'ISO 9001:2015 standartiga muvofiq yangi sifat nazorati tizimlari joriy etildi. Barcha jarayonlar digital monitoring ostida kechirila boshlanadi.',
    imageUrl: '/api/placeholder/400/240',
    slug: 'sifat-standarti-yangilandi'
  }
];

export const NewsSection: React.FC = () => {
  const handleReadMore = (slug: string) => {
    // In a real application, this would navigate to the news detail page
    console.log(`Navigate to news detail: ${slug}`);
  };

  return (
    <section id="news" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-manrope">
            Yangiliklar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Logistika sohasidagi so'nggi yangiliklar va kompaniya faoliyati haqida eng muhim ma'lumotlar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card 
              key={item.id}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden border-0 shadow-card"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground font-manrope group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {item.snippet}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium text-primary hover:text-primary-hover group/btn"
                  onClick={() => handleReadMore(item.slug)}
                >
                  Batafsil
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="font-medium"
          >
            Barcha yangiliklar
          </Button>
        </div>
      </div>
    </section>
  );
};