import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Menu, X, Search, Star, Award, Users, TrendingUp } from 'lucide-react';

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Web Development",
      icon: "💻",
      technologies: ["React", "Next.js", "Django", "Node.js", "TypeScript", "WordPress"]
    },
    {
      title: "Digital Marketing",
      icon: "📈", 
      technologies: ["SEO", "PPC", "Social Media", "Analytics", "Email Marketing", "Content Strategy"]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"]
    },
    {
      title: "Branding & Design",
      icon: "🎨",
      technologies: ["UI/UX", "Logo Design", "Figma", "Adobe Creative", "Prototyping", "Brand Strategy"]
    },
    {
      title: "SEO Optimization",
      icon: "🔍",
      technologies: ["Technical SEO", "Content SEO", "Link Building", "Analytics", "Local SEO", "E-commerce SEO"]
    },
    {
      title: "Content Marketing",
      icon: "✍️",
      technologies: ["Copywriting", "Video Production", "Social Content", "Blogging", "Podcasting", "Influencer Marketing"]
    }
  ];

  const marketplaceItems = [
    { title: "Find Agencies", icon: Search, description: "Browse top-rated agencies" },
    { title: "Agency Reviews", icon: Star, description: "Read verified client reviews" },
    { title: "Awards Program", icon: Award, description: "Recognize excellence" },
    { title: "Industry Reports", icon: TrendingUp, description: "Latest market insights" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AgencyHub
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Agency Directory Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  Agency Directory
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 animate-fade-in"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {/* Services Categories */}
                      <div className="col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                            >
                              <div className="flex items-center mb-2">
                                <span className="text-xl mr-2">{service.icon}</span>
                                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                  {service.title}
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {service.technologies.slice(0, 3).map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="outline" className="text-xs text-gray-600">
                                    {tech}
                                  </Badge>
                                ))}
                                {service.technologies.length > 3 && (
                                  <Badge variant="outline" className="text-xs text-gray-500">
                                    +{service.technologies.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Marketplace Section */}
                      <div className="border-l border-gray-200 pl-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketplace</h3>
                        <div className="space-y-3">
                          {marketplaceItems.map((item, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                            >
                              <div className="flex items-center mb-1">
                                <item.icon className="h-4 w-4 mr-2 text-primary group-hover:text-accent transition-colors" />
                                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                  {item.title}
                                </h4>
                              </div>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Button variant="outline" size="sm" className="w-full">
                            View All Categories
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other nav items */}
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">
              Login
            </Button>
            <Button className="font-medium bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <div className="space-y-2">
                <div className="px-3 py-2">
                  <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <div key={index} className="p-2 rounded hover:bg-gray-50">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{service.icon}</span>
                          <span className="font-medium text-gray-700">{service.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-3 py-2 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Marketplace</h3>
                  <div className="space-y-2">
                    {marketplaceItems.map((item, index) => (
                      <div key={index} className="flex items-center p-2 rounded hover:bg-gray-50">
                        <item.icon className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium text-gray-700">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-3 py-2 border-t border-gray-100">
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">About</a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Contact</a>
                </div>

                <div className="px-3 py-4 space-y-2 border-t border-gray-100">
                  <Button variant="ghost" className="w-full justify-start font-medium">
                    Login
                  </Button>
                  <Button className="w-full justify-start font-medium bg-primary hover:bg-primary/90">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
