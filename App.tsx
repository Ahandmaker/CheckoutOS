import { ArrowRight, Check, TrendingUp, ShoppingCart, Zap, DollarSign, Star, Handshake, BadgeDollarSign, Settings, TrendingUpIcon, RotateCw, Plus } from 'lucide-react';
import FAQItem from './components/FAQItem';
import ProfitCalculator from './components/ProfitCalculator';
import ProfitAnimation from './components/ProfitAnimation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center h-8">
            <img src="/CheckoutOS Logo (1).svg" alt="CheckoutOS" className="h-40" />
            <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors">
              Book a Call
            </a>
          </div>
        </div>
      </header>

      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <span className="text-gray-700 font-semibold text-sm">Trusted by 100+ Shopify Brands</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
            <span className="block font-medium" style={{ fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.04em', lineHeight: '1.1em' }}>
              Boost AOV & Profit Across
            </span>
            <span className="block text-gray-900" style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 300, fontStyle: 'oblique 8deg', letterSpacing: '-0.02em' }}>
              Every Checkout.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            We install a white-labeled profit system that creates a new margin stream - built directly into your cart and fully customized to your brand.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-base text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="w-6 h-6 text-emerald-500" />
              <span>$0 Upfront</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-6 h-6 text-emerald-500" />
              <span>100% Risk-Free Model</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-6 h-6 text-emerald-500" />
              <span>Performance-Based Partnership</span>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10">
            <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-emerald-500 text-white rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-colors inline-flex items-center space-x-3 shadow-lg shadow-emerald-500/30">
              <span>See Your Profit Potential</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Trusted by brands doing $50K–$1M/month
          </p>
        </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              How Our System Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dynamic pricing presents an optional digital upsell based on cart value - 100% profit, zero fulfillment.
            </p>
          </div>

          <ProfitAnimation />
        </div>
      </section>

      <ProfitCalculator />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              More Profit. Same Traffic. Zero Risk.
            </h2>
            <p className="text-xl text-emerald-50 mb-12 max-w-3xl mx-auto">
              We install a done-for-you system that adds new, high-margin profit to your existing orders - without increasing ad spend.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 mb-12">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-white/20">
                <div className="text-7xl font-bold mb-3">10–25%</div>
                <div className="text-xl font-semibold text-white mb-3">Average AOV Increase</div>
                <div className="text-sm text-emerald-100">
                  From smart, branded add-ons built directly into your checkout.
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-white/20">
                <div className="text-7xl font-bold mb-3">7–30%+</div>
                <div className="text-xl font-semibold text-white mb-3">Net Profit Growth</div>
                <div className="text-sm text-emerald-100">
                  Pure incremental profit, without touching your ad spend.
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-emerald-600 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all hover:shadow-2xl inline-flex items-center space-x-2 shadow-xl">
                <span>Start Increasing My Profit</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-emerald-100 mt-4">
                Trusted by 100+ Shopify brands adding new profit streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real brands who've unlocked hidden profit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Austin and his team increased our AOV by 14% after the 48 hours of install. All DTC brands should be implementing this."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sam Maxwell</div>
                  <div className="text-sm text-gray-500">Co-Founder, Rapid Growth</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "We went from $85 to $92 AOV overnight. Zero risk model made it a no-brainer to try."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  DM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Daniel Midas</div>
                  <div className="text-sm text-gray-500">Co-Founder, Thread & Co</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Added $3 of pure profit to 70% of every order. Best decision we made this year."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold">
                  RN
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Robert Newton</div>
                  <div className="text-sm text-gray-500">Owner, Forever Hungry</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Finally, a solution that actually delivers. Added $11k in pure profit last month alone."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Jeremiah Cheng</div>
                  <div className="text-sm text-gray-500">Founder, Maison Élan</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Skeptical at first, but the results speak for themselves. 31% increase in AOV within a week."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JW
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Johnpaul Wegener</div>
                  <div className="text-sm text-gray-500">Owner, No Creations</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Their system is genius. We're making an extra $4-6 per order now."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center text-white font-semibold">
                  RT
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ryan Thompson</div>
                  <div className="text-sm text-gray-500">Director, PeakFit Co.</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Our profit margins increased 7% without raising meta spend. I also like how its a no risk, fully performance model."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AW
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amanda Wilson</div>
                  <div className="text-sm text-gray-500">Founder, GlowKit</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Simple setup, massive results. We're now scaling ads more aggressively thanks to higher margins."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                  KP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Kevin Patel</div>
                  <div className="text-sm text-gray-500">Co-Founder, TechNest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              Why This System Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most brands pour money into ads, but overlook the profit hiding inside their cart. Our system captures that untapped margin - adding new profit with zero extra ad spend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <DollarSign className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                No Extra Ad Spend Needed.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You're already paying to drive traffic - we help you earn more from every visitor. No new campaigns, no extra spend - just pure profit from your existing orders.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pure Profit, Zero Overhead.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every sale from your profit product goes straight to your bottom line. No fulfillment, no support, no ad costs - just incremental profit built into your cart.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Zap className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Scale Smarter, Not Harder.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Higher profit per order means you can scale ad spend faster while keeping healthy margins. More margin = more room to grow.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Settings className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fully Automated Once Live.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Once installed, your profit layer runs automatically in the background. No ongoing management - just a new stream of pure profit added to every cart.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
            Capture the Profit Hiding in Your Store.
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Find out exactly how much new profit your checkout could generate.<br />
            100% free analysis, zero risk.
          </p>

          <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-emerald-500 text-white rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-colors inline-flex items-center space-x-2 shadow-lg shadow-emerald-500/30">
            <span>See My Profit Potential</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm text-gray-500 mt-6">
            Join 100+ eCommerce brands already maximizing their profit.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about CheckoutPro
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <FAQItem
              question="How quickly can I see profit?"
              answer="You'll see profit generated the same day our system is installed and deployed. Once it's live, it automatically begins capturing new profit from your existing traffic - no waiting period or warm-up time required."
            />
            <FAQItem
              question="Do I need any technical setup or development?"
              answer="Not at all. Our team handles everything - from design and integration to deployment and optimization. You don't have to touch code or manage any of the setup yourself."
            />
            <FAQItem
              question="What if it doesn't generate extra profit?"
              answer="Then you don't pay a cent. Our model is completely performance-based - if profit isn't generated, there's no fee. That said, based on hundreds of installs, we've seen consistent, measurable profit lift across every store we've partnered with."
            />
            <FAQItem
              question="Will this affect my ad campaigns, tracking, or conversion rate (CVR)?"
              answer="No - it won't interfere with your ad campaigns, tracking, or pixel data. In fact, many brands see a slight lift in CVR after install because our checkout integration makes the buying process smoother and more trustworthy. It's designed to enhance performance, not disrupt it."
            />
            <FAQItem
              question="How does the pricing work?"
              answer="We take a small percentage of the new profit generated by our system we install. There's no upfront cost, no retainer, and no risk - you only share a portion of the new profit your store earns through our integration. Percentages vary based on monthly revenue."
            />
            <FAQItem
              question="What platforms do you support?"
              answer="We currently support Shopify and Shopify Plus, with WooCommerce and BigCommerce support coming soon."
            />
            <FAQItem
              question="How long does setup take?"
              answer="Setup typically takes 24-72 hours, but most stores go live within 24 hours of installation. Once installed, the system runs automatically - no ongoing maintenance required."
            />
            <FAQItem
              question="Can it be customized for my brand?"
              answer="Absolutely. Every profit product is fully white-labeled and brand-tailored, including your logo, tone, and design style. It fits naturally within your checkout experience - customers will never see our name or know it's third-party."
            />
            <FAQItem
              question="Is there any risk?"
              answer="Zero. There's no setup fee, no retainer, and no minimum. If it doesn't generate profit, you don't pay - simple as that. You only share a small portion of the new profit we help create."
            />
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.02em' }}>Checkout</span>
              <Plus className="w-4 h-4 text-gray-900" strokeWidth={6} strokeLinecap="square" />
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Cookie Policy
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
