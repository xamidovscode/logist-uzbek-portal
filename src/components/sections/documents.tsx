import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download } from 'lucide-react';

interface Document {
  id: number;
  title: string;
  size: string;
  downloadUrl: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: 'Yo\'l-transport qoidalari (2025)',
    size: '2.4 MB',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Xalqaro tashish reglamenti (CMR)',
    size: '3.1 MB', 
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'Sertifikatlash talablari',
    size: '1.2 MB',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Bojxona rasmiylashtiruvi bo\'yicha qo\'llanma',
    size: '4.7 MB',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'Transport vositalarini ro\'yxatga olish tartibi',
    size: '1.8 MB',
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'Yuk tashish shartnoma namunasi',
    size: '0.9 MB',
    downloadUrl: '#'
  }
];

export const DocumentsSection: React.FC = () => {
  const handleDownload = (doc: Document) => {
    // In a real application, this would handle the actual download
    console.log(`Downloading: ${doc.title}`);
  };

  return (
    <section id="documents" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-manrope">
            Normativ huquqiy hujjatlar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Logistika va transport faoliyati bilan bog'liq barcha zarur normativ hujjatlar. 
            Qonunchilik va reglamentlar bo'yicha to'liq ma'lumot.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">
                        Hujjat nomi
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">
                        Hajmi
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">
                        Yuklab olish
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc, index) => (
                      <tr 
                        key={doc.id}
                        className={`border-b hover:bg-muted/30 transition-colors ${
                          index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                        }`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10">
                              <FileText className="h-5 w-5 text-destructive" />
                            </div>
                            <div>
                              <button 
                                onClick={() => handleDownload(doc)}
                                className="text-foreground hover:text-primary transition-colors font-medium text-left hover:underline"
                              >
                                {doc.title}
                              </button>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  PDF
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">
                          {doc.size}
                        </td>
                        <td className="py-4 px-6">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload(doc)}
                            className="flex items-center gap-2"
                          >
                            <Download className="h-4 w-4" />
                            Yuklab olish
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Qo'shimcha hujjatlar va so'nggi yangilanishlar uchun bizga murojaat qiling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};