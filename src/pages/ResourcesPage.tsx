import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { getSeoConfig, defaultStructuredData } from '@/config/seoConfig';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Video, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Resource {
  id: string;
  type: 'blog' | 'whitepaper' | 'case-study' | 'video' | 'guide';
  title: string;
  description: string;
  image?: string;
  date?: string;
  readTime?: string;
  downloadUrl?: string;
  link: string;
}

const resources: Resource[] = [
  {
    id: '1',
    type: 'whitepaper',
    title: 'The Future of Board Governance: AI and Digital Transformation',
    description: 'Discover how AI is reshaping board meetings and governance practices.',
    date: '2024-03-15',
    readTime: '15 min',
    downloadUrl: '/downloads/future-of-governance.pdf',
    link: '/resources/future-of-governance',
  },
  {
    id: '2',
    type: 'case-study',
    title: 'How Lincoln School District Reduced Meeting Prep Time by 70%',
    description: 'Learn how a large school district transformed their board meetings with EBoard.',
    date: '2024-02-28',
    readTime: '8 min',
    link: '/resources/case-study-lincoln',
  },
  {
    id: '3',
    type: 'guide',
    title: 'Complete Guide to FOI Compliance for Public Boards',
    description: 'Everything you need to know about meeting FOI requirements.',
    date: '2024-02-10',
    readTime: '12 min',
    downloadUrl: '/downloads/foi-compliance-guide.pdf',
    link: '/resources/foi-compliance-guide',
  },
  {
    id: '4',
    type: 'video',
    title: 'EBoard Platform Overview: 5-Minute Demo',
    description: 'Watch how EBoard streamlines board meetings from start to finish.',
    date: '2024-01-25',
    readTime: '5 min',
    link: '/resources/platform-overview',
  },
  {
    id: '5',
    type: 'blog',
    title: '5 Best Practices for Virtual Board Meetings',
    description: 'Tips and strategies for engaging remote board members effectively.',
    date: '2024-01-12',
    readTime: '6 min',
    link: '/resources/virtual-meeting-best-practices',
  },
  {
    id: '6',
    type: 'whitepaper',
    title: 'Board Portal Security: ISO 27001 and Beyond',
    description: 'Understanding the security certifications that matter for board portals.',
    date: '2023-12-05',
    readTime: '20 min',
    downloadUrl: '/downloads/security-whitepaper.pdf',
    link: '/resources/security-whitepaper',
  },
];

const typeIcons = {
  blog: BookOpen,
  whitepaper: FileText,
  'case-study': FileText,
  video: Video,
  guide: BookOpen,
};

const typeLabels = {
  blog: 'Blog Post',
  whitepaper: 'Whitepaper',
  'case-study': 'Case Study',
  video: 'Video',
  guide: 'Guide',
};

export const ResourcesPage: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<string | null>(null);

  const filteredResources = selectedType
    ? resources.filter((r) => r.type === selectedType)
    : resources;

  const seo = getSeoConfig('resources');
  const structuredData = defaultStructuredData;

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-6 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Insights for better <span className="text-primary-600">governance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Blog posts, case studies, whitepapers, and guides to help you stay ahead.
            </p>

            <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4 text-primary-600" />
                Guides
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="w-4 h-4 text-green-600" />
                Case Studies
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Video className="w-4 h-4 text-purple-600" />
                Videos
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedType === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {Object.entries(typeLabels).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setSelectedType(value)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedType === value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredResources.map((resource) => {
              const Icon = typeIcons[resource.type];

              return (
                <Link key={resource.id} to={resource.link}>
                  <Card variant="elevated" className="h-full hover:border-primary-200 group">
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="ml-2 text-sm text-primary-600 font-medium">
                          {typeLabels[resource.type]}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                        {resource.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3">{resource.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {resource.date &&
                            new Date(resource.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          {resource.readTime && ` • ${resource.readTime}`}
                        </span>

                        <span className="inline-flex items-center text-primary-600 font-medium">
                          {resource.downloadUrl ? 'Download' : 'Read More'}
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom max-w-xl text-center">
          <h2 className="text-xl font-bold mb-2">Stay updated</h2>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button type="submit" size="sm">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};
