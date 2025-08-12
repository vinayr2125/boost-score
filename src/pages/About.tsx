import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkedinIcon, Mail, ArrowLeft, Users, TrendingUp, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
// import trishImage from "@/assets/trish-profile.jpeg";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2" aria-label="Boost Score home">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Boost Score™</span>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/trish-profile.jpeg" 
                  alt="Trish Sampath" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold mb-4">Meet Trish</h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    AI Startup Advisor & LinkedIn Authority Strategist
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Serial Entrepreneur</Badge>
                  <Badge variant="secondary">AI Expert</Badge>
                  <Badge variant="secondary">Growth Strategist</Badge>
                  <Badge variant="secondary">Investor Relations</Badge>
                </div>
                <p className="text-lg leading-relaxed mb-8">
                  Helping AI founders build authentic LinkedIn authority that can drive meaningful business results. 
                  With experience across pre-seed to Series A stages, I work with technical founders to develop 
                  their online presence as a valuable business asset.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://www.linkedin.com/in/trish-sampath/" target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon className="mr-2 h-5 w-5" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:trishsampath@alphaboostlabs.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Background */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Experience & Background</h2>
              <p className="text-lg text-muted-foreground">
                A proven track record of helping AI startups scale and succeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Startup Leadership</h3>
                      <p className="text-muted-foreground">10+ Years Experience</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Experience with AI/ML startups from early stages through growth phases. Background in 
                    product development, team building, and scaling operations across various tech verticals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Community Building</h3>
                      <p className="text-muted-foreground">500+ Founders Advised</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Experience building and mentoring communities of AI founders, providing guidance 
                    on fundraising, product-market fit, and growth strategies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">LinkedIn Authority</h3>
                      <p className="text-muted-foreground">10M+ Impressions Generated</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Developed frameworks for building authentic LinkedIn presence that helps convert 
                    engagement into meaningful business connections and opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Fundraising Success</h3>
                      <p className="text-muted-foreground">$50M+ Raised by Clients</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Focus on helping technical founders build investor-ready profiles and content 
                    strategies that can help improve fundraising outcomes and timeline efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Mission</h2>
              <p className="text-lg text-muted-foreground">
                Bridging the gap between brilliant technology and business success
              </p>
            </div>

            <Card>
              <CardContent className="p-12">
                <blockquote className="text-xl leading-relaxed text-center italic mb-8">
                  "Many brilliant AI founders face challenges communicating their vision in ways that resonate 
                  with investors and customers. My focus is on helping technical founders build authentic 
                  LinkedIn presence that better showcases their expertise and creates business opportunities."
                </blockquote>
                
                <div className="space-y-6 mt-12">
                  <h3 className="text-2xl font-semibold text-center mb-8">My Approach</h3>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                      <h4 className="font-semibold mb-2">Authentic Voice</h4>
                      <p className="text-sm text-muted-foreground">
                        Help founders find and amplify their unique technical expertise in accessible ways
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">Strategic Content</h4>
                      <p className="text-sm text-muted-foreground">
                        Develop systematic content strategies that help build credibility and support business goals
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                      <h4 className="font-semibold mb-2">Measurable Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on metrics that matter: investor meetings, customer acquisition, team building
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your LinkedIn Authority?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join AI founders who are building stronger LinkedIn presence to support their business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/#pricing">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#assessment">Take Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;