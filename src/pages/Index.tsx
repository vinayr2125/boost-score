import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Rocket, ShieldCheck, Timer, PlayCircle, TrendingUp, Users, Briefcase, Sparkles, DollarSign, BarChart, Brain, Layers, Zap, Calendar, ArrowRight, FileText, Target, Quote } from "lucide-react";
import heroImage from "@/assets/hero-linkedin-transformation.jpg";

const formatCurrency = (n: number) => n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Index = () => {
  const [followers, setFollowers] = useState<number>(800);
  const [dealSize, setDealSize] = useState<number>(20000);
  const [engRate, setEngRate] = useState<number>(2.5);
  const [funding, setFunding] = useState<number>(1000000);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const roi = useMemo(() => {
    const projectedFollowers = Math.round(followers * 2.5 + 1200);
    const monthlyEngaged = projectedFollowers * (engRate / 100);
    const estLeads = Math.max(5, Math.round(monthlyEngaged * 0.05));
    const estRevenue = Math.round(estLeads * dealSize * 0.2);
    const timeToROI = Math.max(1, Math.ceil(697 / Math.max(1, estRevenue / 12)));
    return { projectedFollowers, estLeads, estRevenue, timeToROI };
  }, [followers, dealSize, engRate]);

  return (
    <main>
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2" aria-label="Boost Score home">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Boost Score™</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#solution" className="hover:text-primary transition-colors">How it works</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <a href="#assessment">See your score</a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="#assessment" aria-label="Take your free Authority Assessment">Take Your Free Authority Assessment</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative" itemScope itemType="https://schema.org/WebPage">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
          <article>
            <Badge className="mb-4" variant="secondary">Built for AI Startup Founders</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight" itemProp="headline">
              LinkedIn Authority Builder: Transform Your Profile Into a Lead Generation Machine for AI Founders
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl" itemProp="description">
              The premier LinkedIn authority building platform engineered specifically for AI startup founders. Attract investors, close enterprise deals, and build thought leadership with our proven system trusted by 500+ technical founders.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#assessment">Take Your Free Authority Assessment</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#video"><PlayCircle className="mr-2" /> See How It Works (2 min)</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary" /><span>500+ AI Founders</span></div>
              <div className="flex items-center gap-2"><Timer className="text-primary" /><span>5‑Min Assessment</span></div>
              <div className="flex items-center gap-2"><Rocket className="text-primary" /><span>90‑Day Guarantee</span></div>
            </div>
          </article>
          <aside>
            <img src={heroImage} alt="LinkedIn Authority Building for AI Startup Founders - Professional Dashboard" className="w-full rounded-xl shadow-lg" loading="lazy" />
          </aside>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="border-t" id="problem">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Why AI Founders Struggle with LinkedIn Authority Building (And How to Fix It)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Missed Funding", text: "Investors don't know who you are — your competitors get the meetings" },
              { icon: Briefcase, title: "Lost Enterprise Deals", text: "Buyers trust established voices — not unknown vendors" },
              { icon: Users, title: "Talent Challenges", text: "Top engineers join leaders they recognize and respect" },
              { icon: Sparkles, title: "Wasted Innovation", text: "Breakthrough tech gets ignored without authority" },
            ].map((p, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md flex items-center justify-center bg-secondary"><p.icon className="text-primary" /></div>
                    <CardTitle>{p.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">{p.text}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> 73% of investors check LinkedIn before taking meetings</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Enterprise buyers are 5x more likely to engage with recognized thought leaders</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Technical founders with strong LinkedIn presence raise 2.3x faster</div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="border-t" id="solution">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Your Proven LinkedIn Authority Building System for Startup Success</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              icon: BarChart, title: "Assess & Benchmark", bullets: [
                "Discover your current authority score",
                "Get personalized improvement roadmap",
                "Compare with successful founders",
              ]
            },{
              icon: Brain, title: "Create & Amplify", bullets: [
                "50+ proven templates that drive engagement",
                "AI-powered content suggestions",
                "Weekly posting calendar system",
              ]
            },{
              icon: Layers, title: "Track & Optimize", bullets: [
                "Monitor real business metrics",
                "A/B test your messaging",
                "Measure investor and customer engagement",
              ]
            }].map((col, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md flex items-center justify-center bg-secondary"><col.icon className="text-primary" /></div>
                    <CardTitle>{col.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    {col.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-primary" /> <span>{b}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Preview */}
      <section className="border-t" id="assessment">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Free LinkedIn Authority Assessment for AI Founders - Get Your Score in 5 Minutes</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Assessment Preview</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4 flex-1">
                {[
                  { label: "LinkedIn Profile Completeness" },
                  { label: "Content Posting Frequency" },
                  { label: "Engagement Metrics" },
                  { label: "Network Quality" },
                  { label: "Authority Positioning" },
                ].map((q, i) => (
                  <div key={i} className="p-4 rounded-md border bg-card">
                    <div className="font-medium">{q.label}</div>
                    <p className="text-sm text-muted-foreground mt-1">We analyze signals that correlate with investor and buyer trust.</p>
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="#pricing">Start Your Free Assessment</a>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">No credit card required • Instant results</p>
                </div>
              </CardContent>
            </Card>

            {/* ROI Calculator */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Calculate Your Authority ROI</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Your Current Stats</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="followers">Current followers</Label>
                      <Input id="followers" type="number" min={0} value={followers} onChange={(e) => setFollowers(Number(e.target.value || 0))} />
                    </div>
                    <div>
                      <Label htmlFor="deal">Average deal size (USD)</Label>
                      <Input id="deal" type="number" min={0} value={dealSize} onChange={(e) => setDealSize(Number(e.target.value || 0))} />
                    </div>
                    <div>
                      <Label htmlFor="eng">Current engagement rate (%)</Label>
                      <Input id="eng" type="number" step={0.1} min={0} max={100} value={engRate} onChange={(e) => setEngRate(Number(e.target.value || 0))} />
                    </div>
                    <div>
                      <Label htmlFor="fund">Target funding round (USD)</Label>
                      <Input id="fund" type="number" min={0} value={funding} onChange={(e) => setFunding(Number(e.target.value || 0))} />
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Projected Results</h4>
                  <div className="grid sm:grid-cols-2 gap-4 flex-1">
                    <div className="p-4 rounded-md border bg-secondary">
                      <div className="text-sm text-muted-foreground">Projected follower growth</div>
                      <div className="text-xl font-semibold">{roi.projectedFollowers.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground mt-1">90 days</div>
                    </div>
                    <div className="p-4 rounded-md border bg-secondary">
                      <div className="text-sm text-muted-foreground">Estimated qualified leads</div>
                      <div className="text-xl font-semibold">{roi.estLeads.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground mt-1">per month</div>
                    </div>
                    <div className="p-4 rounded-md border bg-secondary">
                      <div className="text-sm text-muted-foreground">Potential revenue impact</div>
                      <div className="text-xl font-semibold">{formatCurrency(roi.estRevenue)}</div>
                      <div className="text-xs text-muted-foreground mt-1">per year</div>
                    </div>
                    <div className="p-4 rounded-md border bg-secondary">
                      <div className="text-sm text-muted-foreground">Time to ROI</div>
                      <div className="text-xl font-semibold">{roi.timeToROI}</div>
                      <div className="text-xs text-muted-foreground mt-1">months</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="#pricing"><ArrowRight className="mr-2" /> See Your Personalized Growth Plan</a>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">Results calculated based on industry averages and our user data</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t" id="features">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Complete LinkedIn Authority Building Toolkit for Technical Founders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Template Library", benefit: "50+ proven templates that generated 10M+ impressions", detail: "Hook formulas, story structures, insight frameworks", icon: FileText },
              { title: "AI Content Assistant", benefit: "Never run out of relevant content ideas", detail: "Industry-specific suggestions based on trending topics", icon: Brain },
              { title: "Authority Dashboard", benefit: "Track metrics that matter to your business", detail: "Investor views, customer engagement, talent reach", icon: BarChart },
              { title: "90-Day Program", benefit: "Structured path with weekly milestones", detail: "Video lessons, worksheets, implementation guides", icon: Target },
              { title: "Community Access", benefit: "Connect with 500+ AI founders", detail: "Peer feedback, collaboration, best practices", icon: Users },
              { title: "LinkedIn Optimizer", benefit: "AI-powered profile and content optimization", detail: "Keyword suggestions, headline testing, bio enhancement", icon: Zap },
            ].map((f, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md flex items-center justify-center bg-secondary"><f.icon className="h-5 w-5 text-primary" /></div>
                    <CardTitle>{f.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="font-medium">{f.benefit}</div>
                  <p className="text-sm text-muted-foreground mt-2">{f.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">500+ AI Startup Founders Trust Boost Score for LinkedIn Growth</h2>
          <div className="text-center mb-10">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While we're building our community of successful AI founders, our methodology is based on proven LinkedIn authority-building strategies that have generated real results for technical founders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { 
                title: "Proven Framework", 
                description: "Based on analysis of 500+ successful AI founder profiles and their growth patterns",
                icon: BarChart 
              },
              { 
                title: "Industry-Specific", 
                description: "Templates and strategies designed specifically for technical founders in AI/ML space",
                icon: Brain 
              },
              { 
                title: "Early Access", 
                description: "Join the founding cohort and help shape the future of LinkedIn authority building",
                icon: Rocket 
              },
            ].map((item, i) => (
              <Card key={i} className="h-full text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Be Among the First</h3>
            <p className="text-muted-foreground mb-6">
              As a founding member, you'll get direct access to our team, influence product development, and receive exclusive bonuses worth $2,000+
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Research-Backed Methods" },
                { label: "Founding Member Pricing" },
                { label: "Direct Founder Access" },
              ].map((m, i) => (
                <div key={i} className="p-4 rounded-md border bg-background font-medium">{m.label}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t" id="pricing">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">LinkedIn Authority Building Plans for Every AI Founder's Journey</h2>
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 rounded-xl p-1.5 flex shadow-inner border">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  billingCycle === 'monthly' 
                    ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                  billingCycle === 'yearly' 
                    ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-1 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { 
                name: "Foundation Pack", 
                monthlyPrice: 29, 
                yearlyPrice: 279, 
                totalValue: 1497, 
                highlight: false, 
                features: ["50+ Proven Templates", "90-Day Implementation Program", "Community Access", "Profile Optimizer", "Content Calendar"], 
                cta: "Start 14-Day Free Trial" 
              },
              { 
                name: "Authority Accelerator", 
                monthlyPrice: 997, 
                yearlyPrice: 9576, 
                totalValue: 4997, 
                highlight: true, 
                features: ["Everything in Foundation", "Weekly Group Coaching", "Template Customization Help", "Priority Support", "Accountability Check-ins", "1:1 Strategy Session", "Custom Content Plan", "Direct Slack Access", "Profile Makeover", "Advanced Analytics Dashboard"], 
                cta: "Start Accelerator" 
              },
            ].map((plan, i) => {
              const currentPrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
              const monthlyEquivalent = billingCycle === 'yearly' ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;
              return (
              <Card key={i} className={`h-full flex flex-col ${plan.highlight ? "ring-2 ring-primary" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.highlight && <Badge className="ml-2">Most Popular</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="text-sm text-muted-foreground line-through">{formatCurrency(plan.totalValue)} Total Value</div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <div className="text-4xl font-extrabold">{formatCurrency(currentPrice)}</div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-muted-foreground">
                        /{formatCurrency(monthlyEquivalent)}/mo
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    {billingCycle === 'yearly' && (
                      <span className="ml-2 text-primary font-medium">
                        Save {formatCurrency(plan.monthlyPrice * 12 - plan.yearlyPrice)}
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2 flex-1">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-primary" /> <span>{f}</span></li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant={plan.highlight ? "hero" : "hero"} size="lg" className="w-full">
                      {plan.cta}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">90-Day Money-Back Guarantee — follow the program and don't see results, get a full refund.</p>
                  </div>
                </CardContent>
              </Card>
            );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t" id="faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">LinkedIn Authority Building FAQs for AI Founders</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How is this different from LinkedIn coaching?</AccordionTrigger>
              <AccordionContent>We're a technology platform, not consultants. Get systematic frameworks, AI-powered tools, and proven templates — not just advice.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>I'm technical, not a content creator. Will this work?</AccordionTrigger>
              <AccordionContent>Designed specifically for technical founders. Our templates and AI assistant help you share expertise without feeling salesy.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How much time does this require?</AccordionTrigger>
              <AccordionContent>30 minutes per week minimum. Our system and templates make it efficient. Most users spend 1–2 hours weekly for optimal results.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>What if I don't see results?</AccordionTrigger>
              <AccordionContent>90‑day guarantee. Follow the program, use the templates, and if you don't see measurable improvement, get a full refund.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Can I use this with my team?</AccordionTrigger>
              <AccordionContent>Yes! Team plans available for startups wanting to build multiple thought leaders.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t">
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-3xl font-bold">Start Building Your LinkedIn Authority Today - Join 500+ Successful AI Founders</h2>
          <p className="mt-3 text-muted-foreground">Limited Founding Member Spots: Transform your LinkedIn presence into a business growth engine • Save $2,000 with early access pricing • Get personalized onboarding and direct founder support</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="lg">Start Your Free Assessment</Button>
            <Button variant="outline" size="lg">Book a Demo Call</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto py-12">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">Boost Score™</span>
              </div>
              <p className="text-sm text-muted-foreground">The LinkedIn authority platform for AI startup founders.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#assessment" className="hover:text-primary transition-colors">Free Assessment</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Boost Score™. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
