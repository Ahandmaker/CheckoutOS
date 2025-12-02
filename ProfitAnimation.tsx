import { ShoppingBag, Brain, TrendingUp, Zap, DollarSign, ArrowRight, Coins } from 'lucide-react';

export default function ProfitAnimation() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-8">
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-12">
        <div className="flex flex-col items-center text-center bg-white rounded-xl p-8 w-full md:w-80 shadow-sm" style={{ border: '1px solid #EAEAEA' }}>
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#00C27A' }}>
            <ShoppingBag className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div className="font-semibold text-gray-900 text-lg mb-3">Cart Value Detected</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">
            $100 Order
          </div>
          <div className="text-sm mb-2" style={{ color: '#4A5568' }}>
            System instantly detects total.
          </div>
          <div className="text-xs" style={{ color: '#6B7280' }}>
            Used to calculate your dynamic profit tier.
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <ArrowRight className="w-7 h-7" style={{ color: '#00C27A' }} />
        </div>
        <div className="flex md:hidden justify-center">
          <ArrowRight className="w-7 h-7 rotate-90" style={{ color: '#00C27A' }} />
        </div>

        <div className="flex flex-col items-center text-center bg-white rounded-xl p-8 w-full md:w-80 shadow-sm" style={{ border: '1px solid #EAEAEA' }}>
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#00C27A' }}>
            <Brain className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div className="font-semibold text-gray-900 text-lg mb-3">Dynamic Upsell Appears</div>
          <div className="text-3xl font-bold mb-2 text-gray-900">
            Optional $6 Add-On
          </div>
          <div className="text-sm mb-3" style={{ color: '#4A5568' }}>
            (100% Margin)
          </div>
          <div className="text-xs" style={{ color: '#6B7280' }}>
            Upsell adapts to order total.
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <ArrowRight className="w-7 h-7" style={{ color: '#00C27A' }} />
        </div>
        <div className="flex md:hidden justify-center">
          <ArrowRight className="w-7 h-7 rotate-90" style={{ color: '#00C27A' }} />
        </div>

        <div className="flex flex-col items-center text-center bg-white rounded-xl p-8 w-full md:w-80 shadow-sm" style={{ border: '1px solid #EAEAEA' }}>
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#00C27A' }}>
            <Coins className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div className="font-semibold text-gray-900 text-lg mb-3">Profit Captured</div>
          <div className="text-4xl font-bold mb-2" style={{ color: '#00C27A' }}>
            +$6
          </div>
          <div className="text-lg mb-3" style={{ color: '#4A5568' }}>
            Added Profit
          </div>
          <div className="text-xs" style={{ color: '#6B7280' }}>
            Only applied when claimed.
          </div>
        </div>
      </div>

      <div className="rounded-xl p-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 flex items-start gap-4" style={{ border: '1px solid #E5E7EB' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
              <TrendingUp className="w-5 h-5" style={{ color: '#2563EB' }} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold text-base mb-1">Smart Dynamic Pricing</div>
              <div className="text-sm" style={{ color: '#6B7280' }}>Upsells scale with cart value</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 flex items-start gap-4" style={{ border: '1px solid #E5E7EB' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
              <Zap className="w-5 h-5" style={{ color: '#F59E0B' }} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold text-base mb-1">Fully Automated System</div>
              <div className="text-sm" style={{ color: '#6B7280' }}>Runs 24/7 in the background</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 flex items-start gap-4" style={{ border: '1px solid #E5E7EB' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
              <DollarSign className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold text-base mb-1">Zero Fulfillment</div>
              <div className="text-sm" style={{ color: '#6B7280' }}>100% profit digital add-ons</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm" style={{ color: '#9CA3AF' }}>
          Upsells are optional and fully branded to your store.
        </p>
      </div>
    </div>
  );
}
