import { useState, useEffect } from "react";
import { Search, ChevronDown, Star, Award, Users, Briefcase, TrendingUp, Quote, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";
import handshakeBg from "@/assets/handshake-bg.jpg";
import bannerBg from "@/assets/banner-bg.jpg";

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startCount = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - startCount) + startCount);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const count = useCounter(end);
  return <span className="counter">{count.toLocaleString()}{suffix}</span>;
};

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("All Services");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  const services = [
    "All Services", "Web Development", "Digital Marketing", "Mobile App Development", 
    "Branding & Design", "SEO Optimization", "Content Marketing", "E-commerce"
  ];

  const countries = [
    "All Countries", "United States", "United Kingdom", "Canada", "Australia", 
    "Germany", "France", "Netherlands", "India", "Singapore"
  ];

  const statistics = [
    { label: "Agencies Listed", value: 15000, suffix: "+" },
    { label: "Clients Connected", value: 50000, suffix: "+" },
    { label: "Projects Completed", value: 125000, suffix: "+" },
    { label: "Countries Served", value: 95, suffix: "" }
  ];

  const serviceCategories = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technology",
      technologies: ["React", "Next.js", "Django", "Node.js", "TypeScript"],
      icon: "💻",
      projects: "2,500+ projects"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence",
      technologies: ["SEO", "PPC", "Social Media", "Analytics", "Email Marketing"],
      icon: "📈",
      projects: "3,200+ projects"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
      icon: "📱",
      projects: "1,800+ projects"
    },
    {
      title: "Branding & Design",
      description: "Complete brand identity and visual design solutions",
      technologies: ["UI/UX", "Logo Design", "Figma", "Adobe Creative", "Prototyping"],
      icon: "🎨",
      projects: "4,100+ projects"
    },
    {
      title: "SEO Optimization",
      description: "Search engine optimization to improve your visibility",
      technologies: ["Technical SEO", "Content SEO", "Link Building", "Analytics", "Local SEO"],
      icon: "🔍",
      projects: "2,900+ projects"
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation and marketing campaigns",
      technologies: ["Copywriting", "Video Production", "Social Content", "Blogging", "Podcasting"],
      icon: "✍️",
      projects: "2,200+ projects"
    }
  ];

  const coreValues = [
    {
      title: "Trust",
      description: "Verified agencies with proven track records and client testimonials",
      icon: "🤝"
    },
    {
      title: "Quality",
      description: "Rigorous vetting process ensures only top-tier agencies join our platform",
      icon: "⭐"
    },
    {
      title: "Transparency",
      description: "Clear pricing, honest reviews, and detailed agency profiles",
      icon: "🔍"
    },
    {
      title: "Growth",
      description: "Continuous platform improvements to serve agencies and clients better",
      icon: "📈"
    }
  ];

  const primeWinners = [
    {
      name: "Digital Pinnacle",
      specialty: "Full-Stack Development",
      rating: 4.9,
      projects: 250,
      location: "New York, USA",
      badge: "Top Performer"
    },
    {
      name: "Creative Nexus",
      specialty: "Brand Strategy",
      rating: 4.8,
      projects: 180,
      location: "London, UK",
      badge: "Rising Star"
    },
    {
      name: "Tech Innovators",
      specialty: "Mobile Development",
      rating: 4.9,
      projects: 320,
      location: "San Francisco, USA",
      badge: "Innovation Leader"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      feedback: "Found the perfect agency for our mobile app project. The platform made the selection process incredibly smooth.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      feedback: "Excellent platform with vetted agencies. Our website redesign exceeded all expectations.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      company: "Global Brands",
      feedback: "The transparency and quality of agencies here is unmatched. Highly recommend for any business needs.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const blogPosts = [
    {
      title: "10 Trends Shaping Digital Marketing in 2024",
      excerpt: "Discover the latest trends that are revolutionizing digital marketing strategies worldwide.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Marketing"
    },
    {
      title: "How to Choose the Right Development Agency",
      excerpt: "A comprehensive guide to selecting the perfect development partner for your project.",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Development"
    },
    {
      title: "The Future of Brand Identity Design",
      excerpt: "Exploring how modern brands are evolving their visual identity in the digital age.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Design"
    }
  ];

  const trustedCompanies = [
    "Microsoft", "Google", "Amazon", "Apple", "Tesla", "Meta", "Netflix", "Spotify"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Connect with
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Top Agencies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 animate-slide-up">
            Discover and partner with the world's best agencies for your next project. 
            Vetted professionals ready to bring your vision to life.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-large animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <div className="relative">
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground appearance-none cursor-pointer"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Country</label>
                <div className="relative">
                  <select 
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground appearance-none cursor-pointer"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <Button className="btn-hero w-full h-12">
                <Search className="w-5 h-5 mr-2" />
                Find Agencies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${handshakeBg})` }}
      >
        <div className="absolute inset-0 bg-primary/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Connect with top-rated agencies that understand your vision and deliver exceptional results.
          </p>
          <Button className="btn-hero text-lg px-12 py-6">
            Contact Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover agencies specializing in various services to meet all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card key={index} className="card-hover group cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-sm">{service.projects}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission to connect businesses with exceptional agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prime Winners Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Prime Winners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our top-rated agencies that consistently deliver outstanding results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primeWinners.map((agency, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-accent text-accent-foreground">{agency.badge}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{agency.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{agency.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-2">{agency.specialty}</CardDescription>
                  <p className="text-sm text-gray-500">{agency.location}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{agency.projects} projects</span>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the agency world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover cursor-pointer">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">{post.category}</Badge>
                  <CardTitle className="text-xl mb-3 leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that found their perfect agency partners through our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="w-8 h-8 text-gray-300 mb-3" />
                  <p className="text-gray-600 italic">{testimonial.feedback}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-accent/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of successful businesses that have found their perfect agency match
          </p>
          <Button className="bg-white text-accent hover:bg-gray-100 text-lg px-12 py-6 font-semibold">
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Connect Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Are You an Agency?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join our platform and connect with high-quality clients looking for your expertise
          </p>
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-12 py-6 font-semibold">
            Join as an Agency
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Trusted Companies Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Trusted by Leading Companies</h3>
            <p className="text-gray-600">Join the ranks of successful businesses that rely on our platform</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-800">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}