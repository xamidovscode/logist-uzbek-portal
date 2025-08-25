-- SUPABASE TABLE SCHEMAS FOR LOGISTICS PLATFORM
-- These replace Django models for the Lovable project

-- 1. MEMBERS TABLE (Uyushma a'zolari)
CREATE TABLE members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    inn VARCHAR(9) NOT NULL UNIQUE,
    region VARCHAR(100) NOT NULL,
    vehicles INTEGER DEFAULT 0,
    rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5),
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
    certificate_number VARCHAR(100),
    certificate_valid_until DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. SERVICES TABLE (Xizmatlar)
CREATE TABLE services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon_name VARCHAR(100), -- lucide icon name
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. DOCUMENTS TABLE (Normativ hujjatlar)
CREATE TABLE documents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_size VARCHAR(20), -- e.g., "2.4 MB"
    file_type VARCHAR(10) DEFAULT 'PDF',
    download_url TEXT NOT NULL,
    category VARCHAR(100),
    is_active BOOLEAN DEFAULT true,
    download_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. NEWS TABLE (Yangiliklar)
CREATE TABLE news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    snippet TEXT,
    content TEXT,
    image_url TEXT,
    author VARCHAR(255),
    published_date DATE NOT NULL,
    is_published BOOLEAN DEFAULT false,
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. CONTACT_SUBMISSIONS TABLE (Murojaatlar)
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    company_name VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    assigned_to UUID, -- references auth.users if needed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. REGISTRATIONS TABLE (Ro'yxatdan o'tish)
CREATE TABLE registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone VARCHAR(20) NOT NULL,
    company_name VARCHAR(255),
    contact_person VARCHAR(255),
    email VARCHAR(255),
    region VARCHAR(100),
    business_type VARCHAR(100),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 7. REGIONS TABLE (Reference data)
CREATE TABLE regions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(10),
    is_active BOOLEAN DEFAULT true
);

-- INDEXES for better performance
CREATE INDEX idx_members_region ON members(region);
CREATE INDEX idx_members_status ON members(status);
CREATE INDEX idx_members_rating ON members(rating);
CREATE INDEX idx_news_published ON news(is_published, published_date);
CREATE INDEX idx_news_slug ON news(slug);
CREATE INDEX idx_documents_category ON documents(category);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_registrations_status ON registrations(status);

-- RLS (Row Level Security) policies
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE regions ENABLE ROW LEVEL SECURITY;

-- Public read access for most tables
CREATE POLICY "Public can view active members" ON members FOR SELECT USING (status = 'active');
CREATE POLICY "Public can view active services" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view active documents" ON documents FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view published news" ON news FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view regions" ON regions FOR SELECT USING (is_active = true);

-- Allow public inserts for contact forms and registrations
CREATE POLICY "Anyone can submit contact forms" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit registrations" ON registrations FOR INSERT WITH CHECK (true);

-- Seed data for regions
INSERT INTO regions (name, code) VALUES 
('Toshkent', 'TSH'),
('Samarqand', 'SAM'),
('Farg''ona', 'FAR'),
('Andijon', 'AND'),
('Buxoro', 'BUX'),
('Namangan', 'NAM'),
('Qashqadaryo', 'QAS'),
('Xorazm', 'XOR'),
('Navoiy', 'NAV'),
('Jizzax', 'JIZ'),
('Sirdaryo', 'SIR'),
('Surxondaryo', 'SUR'),
('Qoraqalpog''iston', 'QOR');