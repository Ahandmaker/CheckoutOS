import { ArrowRight, Check, TrendingUp, ShoppingCart, Zap, DollarSign, Star, Handshake, BadgeDollarSign, Settings, TrendingUpIcon, RotateCw } from 'lucide-react';
import FAQItem from './components/FAQItem';
import ProfitCalculator from './components/ProfitCalculator';
import ProfitAnimation from './components/ProfitAnimation';

export default function AppMobile() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/image.png" alt="ProfitStack" className="h-14" />
            </div>
            <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
              Book a Call
            </a>
          </div>
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <span className="text-gray-700 font-semibold text-xs">Trusted by 100+ Shopify Brands</span>
          </div>

          <h1 className="text-3xl text-gray-900 mb-4">
            <span className="block font-medium" style={{ fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.04em', lineHeight: '1.1em' }}>
              Boost AOV & Profit Across
            </span>
            <span className="block text-gray-900" style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 300, fontStyle: 'oblique 8deg', letterSpacing: '-0.02em' }}>
              Every Checkout.
            </span>
          </h1>

          <p className="text-base text-gray-600 mb-6 leading-relaxed px-2">
            We install a white-labeled profit system that creates a new margin stream - built directly into your cart and fully customized to your brand.
          </p>

          <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-emerald-500" />
              <span>$0 Upfront</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-emerald-500" />
              <span>100% Risk-Free Model</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-emerald-500" />
              <span>Performance-Based Partnership</span>
            </div>
          </div>

          <div className="flex justify-center items-center mb-4">
            <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="w-full px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold text-base hover:bg-emerald-600 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/30">
              <span>See Your Profit Potential</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Trusted by brands doing $50K–$1M/month
          </p>
        </div>
      </section>

      <ProfitCalculator />

      <section className="bg-gray-50 py-12">
        <div className="px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              How Our System Works
            </h2>
            <p className="text-base text-gray-600 leading-relaxed px-2">
              Dynamic pricing presents an optional digital upsell based on cart value - 100% profit, zero fulfillment.
            </p>
          </div>

          <ProfitAnimation />
        </div>
      </section>

      <section className="py-12">
        <div className="px-4">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              More Profit. Same Traffic. Zero Risk.
            </h2>
            <p className="text-base text-emerald-50 mb-8">
              We install a done-for-you system that adds new, high-margin profit to your existing orders - without increasing ad spend.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="text-5xl font-bold mb-2">10–25%</div>
                <div className="text-base font-semibold text-white mb-2">Average AOV Increase</div>
                <div className="text-xs text-emerald-100">
                  From smart, branded add-ons built directly into your checkout.
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="text-5xl font-bold mb-2">7–30%+</div>
                <div className="text-base font-semibold text-white mb-2">Net Profit Growth</div>
                <div className="text-xs text-emerald-100">
                  Pure incremental profit, without touching your ad spend.
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="w-full px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-base hover:bg-emerald-50 transition-all hover:shadow-2xl inline-flex items-center justify-center space-x-2 shadow-xl">
                <span>Start Increasing My Profit</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-emerald-100 mt-3">
                Trusted by 100+ Shopify brands adding new profit streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              What Our Clients Say
            </h2>
            <p className="text-base text-gray-600">
              Real results from real brands who've unlocked hidden profit.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Austin and his team increased our AOV by 32% in the first 60 days. All DTC brands should be implementing this."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Sam Maxwell</div>
                  <div className="text-xs text-gray-500">Co-Founder, Rapid Growth</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "We went from $85 to $127 AOV in 6 weeks. Zero risk model made it a no-brainer to try."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  DM
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Daniel Midas</div>
                  <div className="text-xs text-gray-500">Co-Founder, Thread & Co</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Our conversion rate jumped 12% and profit margins are up 22%. Best decision we made this year."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  RN
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Robert Newton</div>
                  <div className="text-xs text-gray-500">Owner, Forever Hungry</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Finally, a solution that actually delivers. Added $11k in pure profit last month alone."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Jeremiah Cheng</div>
                  <div className="text-xs text-gray-500">Founder, Maison Élan</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Skeptical at first, but the results speak for themselves. 31% increase in AOV within 3 weeks."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  JW
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Johnpaul Wegener</div>
                  <div className="text-xs text-gray-500">Owner, No Creations</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "The post-purchase upsells are genius. We're making an extra $4-6 per order now."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  RT
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Ryan Thompson</div>
                  <div className="text-xs text-gray-500">Director, PeakFit Co.</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "It's literally free to move forward. Our profit margins increased 18% without raising meta spend."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  AW
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Amanda Wilson</div>
                  <div className="text-xs text-gray-500">Founder, GlowKit</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Simple setup, massive results. We're now scaling ads more aggressively thanks to higher margins."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  KP
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Kevin Patel</div>
                  <div className="text-xs text-gray-500">Co-Founder, TechNest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              Why This System Works
            </h2>
            <p className="text-base text-gray-600">
              Most brands pour money into ads, but overlook the profit hiding inside their checkout. Our system captures that untapped margin - adding new profit with zero extra ad spend.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <DollarSign className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                No Extra Ad Spend Needed.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                You're already paying to drive traffic - we help you earn more from every visitor. No new campaigns, no extra spend - just pure profit from your existing orders.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Pure Profit, Zero Overhead.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every sale from your profit product goes straight to your bottom line. No fulfillment, no support, no ad costs - just incremental profit built into your checkout.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Scale Smarter, Not Harder.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Higher profit per order means you can scale ad spend faster while keeping healthy margins. More margin = more room to grow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Settings className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Fully Automated Once Live.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Once installed, your profit layer runs automatically in the background. No ongoing management - just a new stream of pure profit added to every checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="px-4 text-center">
          <h2 className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
            Capture the Profit Hiding in Your Store.
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Find out exactly how much new profit your checkout could generate. 100% free analysis, zero risk.
          </p>

          <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="w-full px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold text-base hover:bg-emerald-600 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/30">
            <span>See My Profit Potential</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-xs text-gray-500 mt-4">
            Join 100+ eCommerce brands already maximizing their profit.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600">
              Everything you need to know about CheckoutPro
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
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
        <div className="px-4 py-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center">
              <img src="/image.png" alt="ProfitStack" className="h-14" />
            </div>
            <div className="flex flex-col items-center gap-2 text-xs text-center">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Cookie Policy
              </a>
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
