import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export const ContactCTASection: React.FC = () => {
  const handleContactClick = () => {
    // In a real application, this would navigate to the contact page
    console.log('Navigate to contact page');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-manrope">
              Savollaringiz bormi?
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Bizning mutaxassislar jamoasi sizga yordam berishga tayyor. 
              Logistika yechimlari, narxlar va xizmatlar haqida batafsil ma'lumot oling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={handleContactClick}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium text-base px-8 py-4 h-auto"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Murojaat qoldirish
            </Button>
            
            <div className="hidden sm:block text-primary-foreground/60">
              yoki
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+998712345678" 
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +998 (71) 234-56-78
              </a>
              <a 
                href="mailto:info@logist.uz" 
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@logist.uz
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary-foreground mb-2">Ish vaqti</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Dushanba - Juma: 9:00 - 18:00<br />
                  Shanba: 9:00 - 14:00
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-foreground mb-2">Manzil</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Toshkent sh., Yunusobod tumani<br />
                  Logistika markazi, 1-bino
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-foreground mb-2">Javob vaqti</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Oddiy kunlarda: 24 soat ichida<br />
                  Shoshilinch: 2 soat ichida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};