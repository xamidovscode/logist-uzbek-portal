import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { RatingStars } from '@/components/ui/rating-stars';
import { Search, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  inn: string;
  region: string;
  vehicles: number;
  rating: number;
}

const mockMembers: Member[] = [
  { id: 1, name: 'Trans Uz Logistic', inn: '301234567', region: 'Toshkent', vehicles: 42, rating: 4.2 },
  { id: 2, name: 'Orient Cargo', inn: '307654321', region: 'Samarqand', vehicles: 18, rating: 4.8 },
  { id: 3, name: 'Steppe Transport', inn: '302468013', region: 'Farg\'ona', vehicles: 27, rating: 4.1 },
  { id: 4, name: 'Silk Road Logistics', inn: '304567890', region: 'Andijon', vehicles: 35, rating: 4.5 },
  { id: 5, name: 'Express Cargo UZ', inn: '305678901', region: 'Toshkent', vehicles: 62, rating: 4.7 },
  { id: 6, name: 'Central Asia Trans', inn: '306789012', region: 'Buxoro', vehicles: 23, rating: 3.9 },
  { id: 7, name: 'Uzbek Logistics Pro', inn: '307890123', region: 'Namangan', vehicles: 41, rating: 4.3 },
  { id: 8, name: 'Fast Delivery UZ', inn: '308901234', region: 'Qashqadaryo', vehicles: 29, rating: 4.6 },
];

const regions = ['Barcha mintaqalar', 'Toshkent', 'Samarqand', 'Farg\'ona', 'Andijon', 'Buxoro', 'Namangan', 'Qashqadaryo'];

type SortField = 'name' | 'vehicles' | 'rating';
type SortOrder = 'asc' | 'desc';

export const MembersSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Barcha mintaqalar');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter and sort members
  const filteredMembers = mockMembers
    .filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.inn.includes(searchTerm);
      const matchesRegion = selectedRegion === 'Barcha mintaqalar' || member.region === selectedRegion;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const multiplier = sortOrder === 'asc' ? 1 : -1;
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue) * multiplier;
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * multiplier;
      }
      
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };

  return (
    <section id="members" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-manrope">
            Uyushma a'zolari
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bizning ishonchli hamkor tashuvchilar tarmog'i. Sertifikatlangan va tajribali 
            logistika kompaniyalari bilan ishlang.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tashuvchi yoki INN bo'yicha qidiring"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Mintaqani tanlang" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">
                    <button 
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Tashuvchi nomi
                      <SortIcon field="name" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">
                    INN raqami
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">
                    Mintaqasi
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">
                    <button 
                      onClick={() => handleSort('vehicles')}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Transportlar soni
                      <SortIcon field="vehicles" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">
                    <button 
                      onClick={() => handleSort('rating')}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Tashuvchi reytingi
                      <SortIcon field="rating" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedMembers.map((member, index) => (
                  <tr 
                    key={member.id}
                    className={`border-b hover:bg-muted/30 transition-colors ${
                      index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-foreground">
                      {member.name}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground font-mono">
                      {member.inn}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {member.region}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {member.vehicles}
                    </td>
                    <td className="py-4 px-6">
                      <RatingStars rating={member.rating} showValue />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t bg-muted/10">
            <div className="text-sm text-muted-foreground">
              Ko'rsatilmoqda: {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredMembers.length)} / {filteredMembers.length}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground px-3">
                {currentPage} / {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};