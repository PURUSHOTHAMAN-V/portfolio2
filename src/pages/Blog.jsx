import { Calendar, Clock, Tag, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPosts = [
    {
      title: "Building a Modern Portfolio with React and Tailwind CSS",
      excerpt: "Learn how to create a professional portfolio website using React and Tailwind CSS. This comprehensive guide covers everything from setup to deployment.",
      content: `
# Building a Modern Portfolio with React and Tailwind CSS

Creating a professional portfolio website is essential for showcasing your skills and projects. In this article, I'll walk you through building a modern portfolio using React and Tailwind CSS.

## Getting Started

First, let's set up our development environment:

\`\`\`bash
npx create-react-app my-portfolio
cd my-portfolio
npm install tailwindcss
\`\`\`

## Key Features

- Responsive design
- Dark/Light mode toggle
- Smooth animations
- SEO optimization
- Contact form integration

## Conclusion

Building a portfolio with React and Tailwind CSS provides a modern, maintainable solution for showcasing your work.
      `,
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Tailwind CSS", "Web Development"],
      category: "Web Development"
    },
    {
      title: "Cybersecurity Best Practices for Web Developers",
      excerpt: "Essential security practices that every web developer should implement to protect their applications from common vulnerabilities.",
      content: `
# Cybersecurity Best Practices for Web Developers

Security should be a top priority for every web developer. Here are some essential practices to keep your applications secure.

## Input Validation

Always validate and sanitize user inputs:

\`\`\`javascript
// Good practice
const sanitizeInput = (input) => {
  return input.replace(/[<>]/g, '');
};
\`\`\`

## Authentication & Authorization

Implement proper authentication and authorization mechanisms.

## Conclusion

Security is not an afterthought - it should be built into your development process from the start.
      `,
      date: "December 10, 2024",
      readTime: "12 min read",
      tags: ["Cybersecurity", "Web Security", "Best Practices"],
      category: "Cybersecurity"
    },
    {
      title: "Introduction to Machine Learning with Python",
      excerpt: "A beginner-friendly introduction to machine learning concepts and implementation using Python libraries.",
      content: `
# Introduction to Machine Learning with Python

Machine learning is transforming the way we approach problem-solving. Let's explore the basics.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions without explicit programming.

## Getting Started with Python

\`\`\`python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

# Load your data
data = pd.read_csv('your_data.csv')
\`\`\`

## Conclusion

Machine learning opens up endless possibilities for solving complex problems.
      `,
      date: "December 5, 2024",
      readTime: "15 min read",
      tags: ["Machine Learning", "Python", "AI"],
      category: "Artificial Intelligence"
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Learn advanced techniques to optimize your React applications for better performance and user experience.",
      content: `
# Optimizing React Performance

Performance optimization is crucial for providing a smooth user experience. Here are some techniques to optimize your React applications.

## Code Splitting

Use React.lazy() for code splitting:

\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));
\`\`\`

## Memoization

Use React.memo() and useMemo() to prevent unnecessary re-renders.

## Conclusion

Performance optimization is an ongoing process that requires continuous monitoring and improvement.
      `,
      date: "November 30, 2024",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
      category: "Web Development"
    }
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const BlogCard = ({ post }) => (
    <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="space-y-4">
        <div>
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full mb-3">
            {post.category}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {post.title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <button 
          onClick={() => openModal(post)}
          className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const BlogModal = ({ post, isOpen, onClose }) => {
    if (!isOpen || !post) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-sans">
                {post.content}
              </pre>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on web development, cybersecurity, 
              and emerging technologies.
            </p>
          </div>
        </div>
      </section> 

      {/* Blog Posts
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Blog Statistics
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Blog Statistics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <p className="text-gray-600 dark:text-gray-400">Articles</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <p className="text-gray-600 dark:text-gray-400">Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <p className="text-gray-600 dark:text-gray-400">Words Written</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Original Content</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog Modal */}
      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Blog; 