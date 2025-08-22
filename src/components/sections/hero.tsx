import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PhoneInput } from '@/components/ui/phone-input';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, Award } from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';

export const HeroSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    setPhoneError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    const isValid = phoneNumber.length === 12 && phoneNumber.startsWith('998');
    
    if (!isValid) {
      setPhoneError('Iltimos, to\'g\'ri raqam kiriting');
      return;
    }
    
    // Success handling would go here
    console.log('Registration submitted:', phoneNumber);
  };

  const stats = [
    { icon: Clock, label: '24/7 monitoring', color: 'bg-accent/10 text-accent' },
    { icon: Award, label: '5k+ yetkazib berish', color: 'bg-primary/10 text-primary' },
    { icon: Shield, label: 'Sertifikatlangan tashuvchilar', color: 'bg-warning/10 text-warning' },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional logistics and transportation services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-secondary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-manrope">
                Logistika yechimlari: 
                <span className="text-accent"> tez</span>, 
                <span className="text-primary-light"> ishonchli</span>, 
                <span className="text-warning"> shaffof</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                Biz butun mamlakat bo'ylab yetkazib berish, monitoring va hamkor tashuvchilar 
                tarmog'i orqali sizning biznesingizni yangi bosqichga olib chiqamiz. 
                Professional logistika xizmatlari bilan vaqt va resurslaringizni tejang.
              </p>
            </div>

            {/* Stats Badges */}
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className={`${stat.color} px-4 py-2 text-sm font-medium flex items-center gap-2`}
                >
                  <stat.icon className="h-4 w-4" />
                  {stat.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="lg:ml-8">
            <div id="register" className="bg-card rounded-2xl p-8 shadow-elegant max-w-md mx-auto lg:mx-0">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground font-manrope">
                    Ro'yxatdan o'ting
                  </h3>
                  <p className="text-muted-foreground">
                    Bizning xizmatlarimizdan foydalaning
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <PhoneInput
                    placeholder="Telefon raqamingiz"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    error={!!phoneError}
                    helperText={phoneError || "Raqamingiz faqat aloqa va tasdiqlash uchun ishlatiladi."}
                    className="text-base"
                  />

                  <Button 
                    type="submit" 
                    className="w-full font-medium text-base h-12"
                    size="lg"
                  >
                    Ro'yxatdan o'tish
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Ro'yxatdan o'tish orqali siz{' '}
                  <a href="#" className="text-primary hover:underline">
                    foydalanish shartlari
                  </a>{' '}
                  va{' '}
                  <a href="#" className="text-primary hover:underline">
                    maxfiylik siyosati
                  </a>
                  ga rozilik bildirasiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};