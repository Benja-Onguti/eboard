import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Download,
  Clock,
  Users,
  Shield,
  Brain,
  FileText,
  ArrowRight,
  Search,
  CheckCircle,
  Star,
  Target,
  Share2,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/config/routes';

// Guide categories
const categories = [
  { id: 'all', label: 'All Guides', icon: BookOpen },
  { id: 'governance', label: 'Governance', icon: Shield },
  { id: 'compliance', label: 'Compliance', icon: FileText },
  { id: 'technology', label: 'Technology', icon: Brain },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'strategy', label: 'Strategy', icon: Target },
];

// Guide data
const guides = [
  {
    id: 'modern-board-governance',
    title: 'The Complete Guide to Modern Board Governance',
    description:
      'Learn the principles and best practices for effective board governance in the digital age.',
    longDescription:
      'This comprehensive guide covers everything from board roles and responsibilities to meeting management, decision-making frameworks, and governance technology. Perfect for new and experienced board members alike.',
    category: 'governance',
    image: `${import.meta.env.BASE_URL}images/guides/governance-guide.jpg`,
    author: 'Dr. Sarah Johnson',
    authorRole: 'Governance Expert',
    readTime: '25 min',
    level: 'Beginner',
    downloads: '2.5K+',
    rating: 4.9,
    pages: 48,
    publishedDate: 'March 2025',
    tags: ['Governance', 'Board Leadership', 'Best Practices'],
    featured: true,
    downloadable: true,
    tableOfContents: [
      'Introduction to Board Governance',
      'Board Roles & Responsibilities',
      'Meeting Management Best Practices',
      'Decision-Making Frameworks',
      'Technology in Governance',
      'Measuring Board Effectiveness',
      'Future of Board Governance',
    ],
  },
  {
    id: 'board-meeting-effectiveness',
    title: 'Mastering Board Meeting Effectiveness',
    description: 'Strategies to run more productive, engaging, and impactful board meetings.',
    longDescription:
      'Discover proven techniques to reduce meeting time, increase engagement, and drive better outcomes from your board meetings. Includes templates and checklists.',
    category: 'governance',
    image: `${import.meta.env.BASE_URL}images/guides/meeting-effectiveness.jpg`,
    author: 'Michael Chen',
    authorRole: 'Board Advisor',
    readTime: '20 min',
    level: 'Intermediate',
    downloads: '1.8K+',
    rating: 4.8,
    pages: 36,
    publishedDate: 'February 2025',
    tags: ['Meetings', 'Productivity', 'Engagement'],
    featured: true,
    downloadable: true,
    tableOfContents: [
      'The Cost of Ineffective Meetings',
      'Pre-Meeting Preparation',
      'Running Efficient Meetings',
      'Post-Meeting Follow-up',
      'Measuring Meeting ROI',
      'Virtual Meeting Best Practices',
    ],
  },
  {
    id: 'foi-compliance-guide',
    title: 'FOI & Open Meeting Compliance Guide',
    description:
      'Navigate freedom of information laws and open meeting requirements with confidence.',
    longDescription:
      'Essential guide for government agencies and public sector boards. Learn how to maintain compliance while leveraging digital tools for transparency.',
    category: 'compliance',
    image: `${import.meta.env.BASE_URL}images/guides/foi-compliance.jpg`,
    author: 'James Rodriguez',
    authorRole: 'Compliance Specialist',
    readTime: '30 min',
    level: 'Advanced',
    downloads: '3.2K+',
    rating: 4.9,
    pages: 52,
    publishedDate: 'January 2025',
    tags: ['FOI', 'Compliance', 'Government', 'Transparency'],
    featured: true,
    downloadable: true,
    tableOfContents: [
      'Understanding FOI Laws',
      'Record Keeping Requirements',
      'Public Meeting Access',
      'Exemptions & Redactions',
      'Digital Compliance Tools',
      'Handling FOI Requests',
      'Audit Preparation',
    ],
  },
  {
    id: 'ai-in-board-governance',
    title: 'AI in Board Governance: A Practical Guide',
    description:
      'Leverage artificial intelligence to enhance board efficiency and decision-making.',
    longDescription:
      'Explore how AI can transform board operations, from automated minutes to predictive analytics. Includes implementation strategies and ethical considerations.',
    category: 'technology',
    image: `${import.meta.env.BASE_URL}images/guides/ai-governance.jpg`,
    author: 'Dr. Elena Rodriguez',
    authorRole: 'AI Researcher',
    readTime: '22 min',
    level: 'Intermediate',
    downloads: '1.5K+',
    rating: 4.8,
    pages: 40,
    publishedDate: 'December 2024',
    tags: ['AI', 'Technology', 'Innovation'],
    featured: false,
    downloadable: true,
    tableOfContents: [
      'AI Fundamentals for Boards',
      'Use Cases in Board Governance',
      'AI-Powered Meeting Tools',
      'Data Privacy & Security',
      'Ethical AI Considerations',
      'Implementation Roadmap',
    ],
  },
  {
    id: 'nonprofit-board-governance',
    title: 'Nonprofit Board Governance Excellence',
    description: 'Best practices for mission-driven organizations and volunteer boards.',
    longDescription:
      'Tailored guidance for nonprofit boards, covering volunteer engagement, donor relations, strategic planning, and regulatory compliance.',
    category: 'leadership',
    image: `${import.meta.env.BASE_URL}images/guides/nonprofit-governance.jpg`,
    author: 'Margaret Okonkwo',
    authorRole: 'Nonprofit Executive',
    readTime: '28 min',
    level: 'Beginner',
    downloads: '2.1K+',
    rating: 4.9,
    pages: 44,
    publishedDate: 'November 2024',
    tags: ['Nonprofit', 'Volunteer', 'Mission'],
    featured: false,
    downloadable: true,
    tableOfContents: [
      'The Nonprofit Board Landscape',
      'Recruiting & Retaining Volunteers',
      'Strategic Planning for Impact',
      'Donor Relations & Transparency',
      'Financial Oversight',
      'Board Evaluation & Growth',
    ],
  },
  {
    id: 'board-document-security',
    title: 'Board Document Security Best Practices',
    description: 'Protect sensitive board materials with enterprise-grade security practices.',
    longDescription:
      'Comprehensive guide to securing board documents, including encryption, access controls, audit trails, and compliance with ISO 27001 and SOC 2.',
    category: 'technology',
    image: `${import.meta.env.BASE_URL}images/guides/document-security.jpg`,
    author: 'David Okafor',
    authorRole: 'Security Expert',
    readTime: '18 min',
    level: 'Intermediate',
    downloads: '1.2K+',
    rating: 4.7,
    pages: 32,
    publishedDate: 'October 2024',
    tags: ['Security', 'Encryption', 'Compliance'],
    featured: false,
    downloadable: true,
    tableOfContents: [
      'Understanding Board Security Risks',
      'Encryption Standards',
      'Access Control Strategies',
      'Audit Trail Management',
      'Incident Response Planning',
      'Compliance Frameworks',
    ],
  },
  {
    id: 'strategic-board-planning',
    title: 'Strategic Board Planning for Long-Term Success',
    description: 'Develop and execute strategic plans that drive organizational growth.',
    longDescription:
      'A practical framework for boards to create, monitor, and adjust strategic plans. Includes templates for strategic sessions and progress tracking.',
    category: 'strategy',
    image: `${import.meta.env.BASE_URL}images/guides/strategic-planning.jpg`,
    author: 'Lisa Thompson',
    authorRole: 'Strategy Consultant',
    readTime: '26 min',
    level: 'Advanced',
    downloads: '1.9K+',
    rating: 4.8,
    pages: 46,
    publishedDate: 'September 2024',
    tags: ['Strategy', 'Planning', 'Growth'],
    featured: false,
    downloadable: true,
    tableOfContents: [
      'The Strategic Planning Process',
      'Setting Vision & Mission',
      'Goal Setting & KPIs',
      'Monitoring Progress',
      'Adapting to Change',
      'Board & Management Alignment',
    ],
  },
  {
    id: 'board-evaluation-metrics',
    title: 'Measuring Board Effectiveness: Key Metrics',
    description: 'Track and improve board performance with data-driven metrics.',
    longDescription:
      'Learn which metrics matter most for board effectiveness, how to collect them, and how to use insights for continuous improvement.',
    category: 'governance',
    image: `${import.meta.env.BASE_URL}images/guides/board-metrics.jpg`,
    author: 'Dr. Sarah Johnson',
    authorRole: 'Governance Expert',
    readTime: '15 min',
    level: 'Beginner',
    downloads: '1.4K+',
    rating: 4.6,
    pages: 28,
    publishedDate: 'August 2024',
    tags: ['Metrics', 'Evaluation', 'Performance'],
    featured: false,
    downloadable: true,
    tableOfContents: [
      'Why Measure Board Effectiveness',
      'Key Performance Indicators',
      'Board Evaluation Surveys',
      'Analyzing Meeting Data',
      'Continuous Improvement Plans',
      'Benchmarking Best Practices',
    ],
  },
];

export const GuidesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<(typeof guides)[0] | null>(null);

  const filteredGuides = guides.filter((guide) => {
    const matchesCategory = activeCategory === 'all' || guide.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

   const featuredGuides = guides.filter((g) => g.featured);
   const recentGuides = [...guides]
     .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
     .slice(0, 3);

   const seo = getSeoConfig('guides');
   const structuredData = defaultStructuredData;

   return (
     <>
       <SEOHead seo={seo} structuredData={structuredData} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Knowledge Center
              </Badge> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                In-depth <span className="text-primary-300">governance guides</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Expert-crafted resources to help you master board governance, compliance, and
                strategic leadership.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {/* <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600">{guides.length}+</div>
              <div className="text-xs text-gray-500">Expert Guides</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-primary-600">15K+</div>
              <div className="text-xs text-gray-500">Downloads</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-primary-600">4.8</div>
              <div className="text-xs text-gray-500">Average Rating</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-primary-600">50+</div>
              <div className="text-xs text-gray-500">Topics Covered</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Category Navigation */}
      <section className="sticky top-20 bg-white border-b border-gray-200 z-30 py-6 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      {activeCategory === 'all' && searchQuery === '' && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge variant="primary" className="mb-2">
                  Featured
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Most Popular Guides
                </h2>
              </div>
              <Link
                to="#"
                className="text-primary-600 text-sm font-medium hover:underline flex items-center"
              >
                View all <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    variant="elevated"
                    className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/600x400/1e293b/3b82f6?text=${guide.title.replace(/ /g, '+')}`;
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="primary" size="sm">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {guide.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {guide.downloads}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {guide.rating}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{guide.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs font-bold">
                            {guide.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-900">{guide.author}</p>
                            <p className="text-xs text-gray-500">{guide.authorRole}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedGuide(guide)}
                          className="text-primary-600 text-sm font-medium hover:underline flex items-center"
                        >
                          Read <ChevronRight className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Guides Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {activeCategory === 'all'
                  ? 'All Guides'
                  : `${categories.find((c) => c.id === activeCategory)?.label} Guides`}
              </h2>
              <p className="text-gray-500 mt-1">Showing {filteredGuides.length} guides</p>
            </div>
          </div>

          {filteredGuides.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No guides found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card
                    variant="elevated"
                    className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/600x400/1e293b/3b82f6?text=${guide.title.replace(/ /g, '+')}`;
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {guide.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {guide.downloads}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {guide.rating}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{guide.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedGuide(guide)}
                        className="text-primary-600 text-sm font-medium hover:underline flex items-center"
                      >
                        Read Guide <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent Guides Section */}
      {activeCategory === 'all' && searchQuery === '' && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge variant="primary" className="mb-2">
                  Latest
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Recently Added</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" size="sm">
                          {guide.publishedDate}
                        </Badge>
                        <span className="text-xs text-gray-400">{guide.level}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{guide.description}</p>
                      <button
                        onClick={() => setSelectedGuide(guide)}
                        className="text-primary-600 text-sm font-medium hover:underline flex items-center"
                      >
                        Read Guide <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need personalized guidance?</h2>
            <p className="text-primary-100 mb-6">
              Our governance experts can help you implement best practices tailored to your
              organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={ROUTES.COMPANY.CONTACT}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  Contact Our Experts
                </Button>
              </Link>
              <Link to={ROUTES.DEMO.INDEX}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Detail Modal */}
      {selectedGuide && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedGuide(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedGuide.image}
                alt={selectedGuide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/1200x400/1e293b/3b82f6?text=${selectedGuide.title.replace(/ /g, '+')}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedGuide(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge variant="primary" className="mb-2">
                  {selectedGuide.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedGuide.title}</h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedGuide.readTime} read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedGuide.downloads} downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{selectedGuide.rating} rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedGuide.pages} pages</span>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedGuide.longDescription}
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-3">What you'll learn</h3>
                <ul className="space-y-2 mb-6">
                  {selectedGuide.tableOfContents.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-lg font-bold">
                      {selectedGuide.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedGuide.author}</p>
                      <p className="text-sm text-gray-500">{selectedGuide.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Expert-written guide based on years of experience in board governance and
                    organizational leadership.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Guide
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Guide
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default GuidesPage;
