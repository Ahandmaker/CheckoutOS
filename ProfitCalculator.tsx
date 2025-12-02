import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function ProfitCalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState(5000);
  const [productPrice, setProductPrice] = useState(5);
  const [displayedProfit, setDisplayedProfit] = useState(0);

  const ATTACH_RATE = 0.75;
  const PROFIT_PERCENTAGE = 0.04;

  const calculatedProfit = Math.round(monthlyOrders * productPrice * ATTACH_RATE * PROFIT_PERCENTAGE);

  useEffect(() => {
    const duration = 1000;
    const steps = 50;
    const stepTime = duration / steps;
    const increment = (calculatedProfit - displayedProfit) / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayedProfit(calculatedProfit);
        clearInterval(timer);
      } else {
        setDisplayedProfit(prev => Math.round(prev + increment));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [calculatedProfit]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const progressPercentage = Math.min((calculatedProfit / 50000) * 100, 100);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Interactive Calculator
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500, letterSpacing: '-0.04em' }}>
            See How Much New Profit You're<br />Leaving on the Table.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our calculator to estimate how much extra monthly profit your store could generate from your existing traffic.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-900 font-semibold text-lg">
                  Monthly Order Volume
                </label>
                <span className="text-2xl font-bold text-emerald-600">
                  {monthlyOrders.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30000"
                step="10"
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${(monthlyOrders / 30000) * 100}%, #e5e7eb ${(monthlyOrders / 30000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>0</span>
                <span>30,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-900 font-semibold text-lg">
                  Average Order Value
                </label>
                <span className="text-2xl font-bold text-emerald-600">
                  {formatCurrency(productPrice)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="10"
                value={productPrice}
                onChange={(e) => setProductPrice(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${(productPrice / 10000) * 100}%, #e5e7eb ${(productPrice / 10000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$0</span>
                <span>$10,000</span>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 text-center">
                <p className="text-gray-600 text-sm font-medium mb-2 tracking-wider uppercase">
                  Your estimated new monthly profit integrating CheckoutOS.
                </p>
                <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.02em' }}>
                  {formatCurrency(displayedProfit)}
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  Calculation based on industry standard take rates & average CheckoutOS upsell price.
                </p>

                <a href="https://calendly.com/usecheckoutos/30min" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-10 py-4 bg-emerald-500 text-white rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/30">
                  <span>See My Profit Potential</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="mt-4 inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  Zero upfront cost. Pure performance.
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Results are estimates based on industry averages. Actual results may vary, CheckoutOS fees are excluded.
        </p>
      </div>
    </section>
  );
}
