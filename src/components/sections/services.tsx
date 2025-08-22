import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Truck, 
  Warehouse, 
  Package, 
  MapPin, 
  FileText, 
  BarChart3 
} from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Yuk tashish (Ichki va Xalqaro)',
    description: 'Ichki va xalqaro yuk tashish xizmatlari. Barcha turdagi yuklar uchun professional tashuvchilar tarmog\'i va xavfsiz yetkazib berish.'
  },
  {
    icon: Warehouse,
    title: 'Ombor logistika',
    description: 'Zamonaviy ombor xizmatlari: saqlash, qadoqlash, inventarizatsiya. Avtomatlashtirilgan tizim va professional ombor boshqaruvi.'
  },
  {
    icon: Package,
    title: 'Kuryer va so\'nggi mil',
    description: 'Tezkor kuryer xizmatlari va so\'nggi mil yetkazib berish. Shahar bo\'ylab bir kun ichida va express yetkazib berish imkoniyatlari.'
  },
  {
    icon: MapPin,
    title: 'Monitoring va tracking',
    description: 'Real vaqt rejimida yuk kuzatuvi. GPS tracking, holat yangilanishlari va to\'liq shaffof yetkazib berish jarayoni.'
  },
  {
    icon: FileText,
    title: 'Hujjatlar bilan ishlash',
    description: 'Bojxona rasmiylashtiruvi, transport hujjatlari tayyorlash va yuridik qo\'llab-quvvatlash. To\'liq hujjatlar tayyorlash xizmati.'
  },
  {
    icon: BarChart3,
    title: 'Logistika konsaltingi',
    description: 'Biznes jarayonlarini optimallashtirish, logistika zanjirini tahlil qilish va xarajatlarni kamaytirish bo\'yicha maslahatlar.'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-manrope">
            Bizning xizmatlarimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional logistika yechimlari va transport xizmatlari. 
            Sizning biznesingiz uchun eng qulay va ishonchli yechimlar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 shadow-card"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground font-manrope">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};