import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const footerNavigation = [
  {
    title: 'Kompaniya',
    links: [
      { label: 'Biz haqimizda', href: '#about' },
      { label: 'Xizmatlar', href: '#services' },
      { label: 'Yangiliklar', href: '#news' },
      { label: 'Murojaatlar', href: '#contact' }
    ]
  },
  {
    title: 'Xizmatlar',
    links: [
      { label: 'Yuk tashish', href: '#services' },
      { label: 'Ombor logistika', href: '#services' },
      { label: 'Kuryer xizmati', href: '#services' },
      { label: 'Monitoring', href: '#services' }
    ]
  },
  {
    title: 'Ma\'lumotlar',
    links: [
      { label: 'Uyushma a\'zolari', href: '#members' },
      { label: 'Normativ hujjatlar', href: '#documents' },
      { label: 'Sertifikatlar', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

const contactInfo = [
  { icon: Phone, text: '+998 (71) 234-56-78', href: 'tel:+998712345678' },
  { icon: Mail, text: 'info@logist.uz', href: 'mailto:info@logist.uz' },
  { icon: MapPin, text: 'Toshkent sh., Yunusobod tumani, Logistika markazi', href: '#' }
];

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="text-3xl font-bold text-primary-light font-manrope mb-4">
                  LOGIST.UZ
                </div>
                <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
                  Professional logistika yechimlari va transport xizmatlari. 
                  Ishonchli hamkorlik va sifatli xizmat ko'rsatish bizning ustuvor vazifamiz.
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary-foreground">Aloqa ma'lumotlari</h4>
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors group"
                  >
                    <contact.icon className="h-4 w-4 group-hover:text-primary-light transition-colors" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary-foreground">Ijtimoiy tarmoqlar</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary-light hover:bg-primary-light transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {footerNavigation.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-secondary-foreground">
                  {section.title}
                </h4>
                <nav className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => scrollToSection(link.href)}
                      className="block text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground/70">
              © {currentYear} LOGIST.UZ. Barcha huquqlar himoyalangan.
            </div>
            
            <div className="flex gap-6">
              <button className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Maxfiylik siyosati
              </button>
              <button className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Foydalanish shartlari
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};