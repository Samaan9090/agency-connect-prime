import { useState } from "react";
import { Star, MapPin, Users, DollarSign, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Agency {
  id: number;
  name: string;
  logo: string;
  rating: number;
  totalReviews: number;
  description: string;
  fullDescription: string;
  totalServices: number;
  totalIndustries: number;
  locations: string[];
  employeeSize: string;
  budgetPerHour: string;
  portfolioCount: number;
  specialties: string[];
  established: string;
  verified: boolean;
}

const mockAgencies: Agency[] = [
  {
    id: 1,
    name: "DigitalCraft Studios",
    logo: "🚀",
    rating: 4.9,
    totalReviews: 127,
    description: "Leading mobile app development company specializing in cross-platform solutions and cutting-edge UI/UX design.",
    fullDescription: "DigitalCraft Studios is a premier mobile app development company with over 8 years of experience in creating innovative digital solutions. We specialize in cross-platform mobile applications, custom web development, and enterprise software solutions. Our team of 50+ skilled developers, designers, and project managers work collaboratively to deliver exceptional results that drive business growth and user engagement.",
    totalServices: 85,
    totalIndustries: 75,
    locations: ["New York, USA", "London, UK", "Toronto, Canada"],
    employeeSize: "51–100",
    budgetPerHour: "$75-125/hr",
    portfolioCount: 250,
    specialties: ["Mobile App Development", "React Native", "Flutter", "iOS/Android"],
    established: "2016",
    verified: true
  },
  {
    id: 2,
    name: "InnovateTech Solutions",
    logo: "💡",
    rating: 4.8,
    totalReviews: 89,
    description: "Full-stack development agency focused on scalable web applications and modern tech stacks.",
    fullDescription: "InnovateTech Solutions is a dynamic full-stack development agency that has been at the forefront of digital innovation since 2018. We excel in creating scalable web applications using modern frameworks like React, Vue.js, and Node.js. Our expertise extends to cloud architecture, DevOps, and AI integration, helping businesses transform their digital presence and operational efficiency.",
    totalServices: 92,
    totalIndustries: 68,
    locations: ["San Francisco, USA", "Austin, USA"],
    employeeSize: "25–50",
    budgetPerHour: "$85-150/hr",
    portfolioCount: 180,
    specialties: ["Web Development", "React", "Node.js", "Cloud Solutions"],
    established: "2018",
    verified: true
  },
  {
    id: 3,
    name: "Creative Nexus Agency",
    logo: "🎨",
    rating: 4.7,
    totalReviews: 156,
    description: "Award-winning design agency specializing in brand identity, UI/UX design, and digital marketing campaigns.",
    fullDescription: "Creative Nexus Agency combines artistic vision with strategic thinking to create compelling brand experiences. Since 2015, we've helped over 200 companies establish their digital presence through innovative design solutions, comprehensive branding strategies, and data-driven marketing campaigns. Our multidisciplinary team brings together creative professionals and digital strategists to deliver measurable results.",
    totalServices: 78,
    totalIndustries: 82,
    locations: ["Los Angeles, USA", "Miami, USA", "Barcelona, Spain"],
    employeeSize: "31–50",
    budgetPerHour: "$60-100/hr",
    portfolioCount: 320,
    specialties: ["Brand Design", "UI/UX", "Digital Marketing", "Graphic Design"],
    established: "2015",
    verified: true
  },
  {
    id: 4,
    name: "DataDriven Analytics",
    logo: "📊",
    rating: 4.6,
    totalReviews: 74,
    description: "Specialized analytics and business intelligence firm helping companies make data-driven decisions.",
    fullDescription: "DataDriven Analytics is a specialized consulting firm focused on transforming raw data into actionable business insights. Our team of data scientists, analysts, and visualization experts work with enterprise clients to implement comprehensive analytics solutions, business intelligence dashboards, and predictive modeling systems that drive strategic decision-making and operational optimization.",
    totalServices: 65,
    totalIndustries: 55,
    locations: ["Chicago, USA", "Boston, USA"],
    employeeSize: "11–25",
    budgetPerHour: "$95-180/hr",
    portfolioCount: 95,
    specialties: ["Data Analytics", "Business Intelligence", "Machine Learning", "Consulting"],
    established: "2019",
    verified: false
  },
  {
    id: 5,
    name: "Global Commerce Solutions",
    logo: "🛒",
    rating: 4.8,
    totalReviews: 203,
    description: "E-commerce specialists creating high-converting online stores and marketplace integrations.",
    fullDescription: "Global Commerce Solutions is a leading e-commerce development agency with expertise in creating high-performing online stores and complex marketplace platforms. We've successfully launched over 400 e-commerce projects using platforms like Shopify, WooCommerce, Magento, and custom solutions. Our comprehensive approach includes payment integration, inventory management, and conversion optimization strategies.",
    totalServices: 88,
    totalIndustries: 70,
    locations: ["Seattle, USA", "Vancouver, Canada", "Melbourne, Australia"],
    employeeSize: "76–100",
    budgetPerHour: "$70-120/hr",
    portfolioCount: 410,
    specialties: ["E-commerce", "Shopify", "WooCommerce", "Payment Integration"],
    established: "2014",
    verified: true
  },
  {
    id: 6,
    name: "CloudFirst Technologies",
    logo: "☁️",
    rating: 4.9,
    totalReviews: 112,
    description: "Cloud infrastructure and DevOps specialists helping businesses scale with modern cloud solutions.",
    fullDescription: "CloudFirst Technologies is a premier cloud consulting and DevOps agency specializing in AWS, Azure, and Google Cloud Platform implementations. We help businesses migrate to the cloud, optimize their infrastructure, and implement robust CI/CD pipelines. Our certified cloud architects and DevOps engineers have successfully completed over 150 cloud transformation projects across various industries.",
    totalServices: 72,
    totalIndustries: 45,
    locations: ["Denver, USA", "Phoenix, USA"],
    employeeSize: "26–50",
    budgetPerHour: "$110-200/hr",
    portfolioCount: 160,
    specialties: ["Cloud Computing", "DevOps", "AWS", "Azure"],
    established: "2017",
    verified: true
  }
];

export default function AgencyListing() {
  const [expandedAgencies, setExpandedAgencies] = useState<Set<number>>(new Set());

  const toggleExpanded = (agencyId: number) => {
    const newExpanded = new Set(expandedAgencies);
    if (newExpanded.has(agencyId)) {
      newExpanded.delete(agencyId);
    } else {
      newExpanded.add(agencyId);
    }
    setExpandedAgencies(newExpanded);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : index < rating 
              ? "fill-yellow-200 text-yellow-400" 
              : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            List of Top Mobile App Development Companies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover verified agencies with proven track records in mobile app development and digital solutions
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Verified Agencies
            </span>
            <span>{mockAgencies.length} Companies Found</span>
          </div>
        </div>

        {/* Agency Cards */}
        <div className="space-y-8">
          {mockAgencies.map((agency) => {
            const isExpanded = expandedAgencies.has(agency.id);
            const serviceProgress = (agency.totalServices / 100) * 100;
            const industryProgress = (agency.totalIndustries / 100) * 100;
            
            return (
              <Card key={agency.id} className="card-hover overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Logo and Basic Info */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl bg-gray-50 p-3 rounded-xl flex-shrink-0">
                        {agency.logo}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl font-bold text-primary">
                            {agency.name}
                          </CardTitle>
                          {agency.verified && (
                            <Badge className="bg-green-100 text-green-700 border-green-200">
                              Verified
                            </Badge>
                          )}
                        </div>
                        
                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {renderStars(agency.rating)}
                            </div>
                            <span className="font-semibold">{agency.rating}</span>
                            <span className="text-gray-500">({agency.totalReviews} reviews)</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {isExpanded ? agency.fullDescription : agency.description}
                          <button
                            onClick={() => toggleExpanded(agency.id)}
                            className="ml-2 text-primary hover:text-primary-light font-medium inline-flex items-center gap-1"
                          >
                            {isExpanded ? (
                              <>Read Less <ChevronUp className="w-4 h-4" /></>
                            ) : (
                              <>Read More <ChevronDown className="w-4 h-4" /></>
                            )}
                          </button>
                        </p>

                        {/* Specialties */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {agency.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                        {/* Services Progress */}
                        <div className="col-span-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Total Services</span>
                            <span className="text-sm font-semibold">{agency.totalServices}%</span>
                          </div>
                          <Progress value={serviceProgress} className="h-2" />
                        </div>

                        {/* Industries Progress */}
                        <div className="col-span-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Industries Served</span>
                            <span className="text-sm font-semibold">{agency.totalIndustries}%</span>
                          </div>
                          <Progress value={industryProgress} className="h-2" />
                        </div>

                        {/* Employee Size */}
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <div>
                            <div className="text-xs text-gray-500">Team Size</div>
                            <div className="text-sm font-semibold">{agency.employeeSize}</div>
                          </div>
                        </div>

                        {/* Budget */}
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <div>
                            <div className="text-xs text-gray-500">Hourly Rate</div>
                            <div className="text-sm font-semibold">{agency.budgetPerHour}</div>
                          </div>
                        </div>

                        {/* Portfolio Count */}
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-gray-500" />
                          <div>
                            <div className="text-xs text-gray-500">Portfolio</div>
                            <div className="text-sm font-semibold">{agency.portfolioCount} projects</div>
                          </div>
                        </div>

                        {/* Established */}
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 text-gray-500 flex items-center justify-center">
                            📅
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Est.</div>
                            <div className="text-sm font-semibold">{agency.established}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Locations */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-gray-700">Locations:</span>
                    {agency.locations.map((location, index) => (
                      <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        {location}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button className="btn-primary">
                      View Profile
                    </Button>
                    <Button variant="outline">
                      Contact Agency
                    </Button>
                    <Button variant="outline">
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Load More Agencies
          </Button>
        </div>
      </div>
    </div>
  );
}