import { notFound } from "next/navigation";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "1",
    title: "Starting Your First Indoor Garden: A Complete Beginner's Guide",
    excerpt: "Learn the essential steps to create a thriving indoor garden, from choosing the right plants to setting up proper lighting and watering systems.",
    content: `
      <p>Starting an indoor garden can seem daunting, but with the right guidance, anyone can create a thriving green space inside their home. Whether you're living in an apartment, want to garden year-round, or simply love having plants nearby, indoor gardening offers countless benefits for both your physical and mental well-being.</p>
      <h2>Why Choose Indoor Gardening?</h2>
      <p>Indoor gardening provides fresh air purification, stress relief, and the satisfaction of growing your own food or beautiful plants. It's also a great way to connect with nature when outdoor space is limited.</p>
      <h2>Essential Equipment for Beginners</h2>
      <ul>
        <li><strong>Containers:</strong> Choose pots with drainage holes appropriate for your plant size</li>
        <li><strong>Potting Mix:</strong> Use high-quality, well-draining soil designed for indoor plants</li>
        <li><strong>Lighting:</strong> Most indoor plants need bright, indirect light or grow lights</li>
        <li><strong>Watering Tools:</strong> A watering can with a narrow spout for precise watering</li>
        <li><strong>Fertilizer:</strong> Balanced liquid fertilizer for healthy plant growth</li>
      </ul>
      <h2>Best Plants for Beginners</h2>
      <p>Start with these forgiving plants that thrive in indoor conditions:</p>
      <h3>1. Pothos (Epipremnum aureum)</h3>
      <p>Known as "devil's ivy," this trailing vine is virtually indestructible. It tolerates low light and irregular watering, making it perfect for beginners.</p>
      <h3>2. Snake Plant (Sansevieria trifasciata)</h3>
      <p>This architectural plant can survive weeks without water and thrives in low light conditions. It's also excellent for air purification.</p>
      <h3>3. Spider Plant (Chlorophytum comosum)</h3>
      <p>Fast-growing and easy to propagate, spider plants produce small plantlets that you can share with friends or expand your collection.</p>
      <h2>Setting Up Your Indoor Garden</h2>
      <p>Choose a location with appropriate light for your plants. Most houseplants prefer bright, indirect light near a window. Avoid placing plants in direct sunlight, which can scorch their leaves.</p>
      <p>Consider the humidity levels in your home. Most tropical houseplants prefer 40-60% humidity, which you can increase with a humidifier or by grouping plants together.</p>
      <h2>Watering Best Practices</h2>
      <p>The most common mistake beginners make is overwatering. Check the soil moisture by inserting your finger about an inch deep into the soil. If it feels dry, it's time to water.</p>
      <p>Water thoroughly until you see drainage from the bottom holes, then empty the saucer after 30 minutes to prevent root rot.</p>
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Overwatering (the #1 plant killer)</li>
        <li>Using pots without drainage</li>
        <li>Placing plants in inappropriate light conditions</li>
        <li>Fertilizing too frequently</li>
        <li>Ignoring pest problems</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Starting your indoor garden journey is an exciting adventure that will bring years of joy and satisfaction. Remember to start small, choose appropriate plants for your environment, and don't be afraid to learn from mistakes. Every experienced gardener started as a beginner!</p>
      <p>With patience and consistent care, you'll soon have a thriving indoor garden that transforms your living space into a green oasis.</p>
    `,
    author: "Sarah Green",
    date: "2025-01-10",
    category: "Beginner",
    tags: ["indoor gardening", "houseplants", "beginner"],
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  // ...add other posts here
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-b border-gray-200 pb-8 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="h-4 w-4" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700 leading-relaxed space-y-6"
          />
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 bg-gray-50 rounded-lg"
        >
          <div className="flex items-start space-x-4">
            <img
              src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About {post.author}</h3>
              <p className="text-gray-600">
                Sarah is a master gardener with over 20 years of experience in sustainable gardening practices. 
                She specializes in indoor gardening and helping beginners develop their green thumbs. 
                When she's not tending to her plants, Sarah enjoys writing about the therapeutic benefits of gardening.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'The Science Behind Plant Growth',
                excerpt: 'Understanding photosynthesis and what it means for your garden.',
                image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=400',
                slug: '2'
              },
              {
                title: 'DIY Composting Guide',
                excerpt: 'Turn kitchen scraps into nutrient-rich compost for your plants.',
                image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
                slug: '4'
              }
            ].map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}