export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  author: string;
  color: string;
  content: string; // HTML string or markdown for the full article
}


export const blogPosts: BlogPost[] = [
  {
    id: "education",
    slug: "education",
    title: "Solar Energy 101: A Beginner’s Guide",
    category: "Education",
    description:
      "Understand how solar works, installation basics, and why thousands of Indian homes are switching to clean energy.",
    image: "/images/Panel.png",
    date: "Jan 15, 2026",
    author: "Kartik Solar Team",
    color: "bg-blue-500",
    content: `
      <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
        Solar energy is quickly becoming one of the smartest investments for Indian homeowners and businesses. With rising electricity costs, frequent power cuts, and growing environmental concerns, more families across Uttarakhand are switching to solar power for reliable and affordable energy.
      </p>
      
      <p class="mb-10 text-slate-600">
        This beginner-friendly guide explains how solar works, what you need to install a system, and why solar is perfectly suited for Indian homes and climate conditions.
      </p>

      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="bg-yellow-100 text-yellow-700 p-2 rounded-lg">☀️</span> What is Solar Energy?
      </h2>
      <p>Solar energy is electricity generated using sunlight. Solar panels capture sunlight and convert it into usable electricity for your home or business.</p>
      <p>A rooftop solar system allows you to generate your own power during the day, reducing dependency on the electricity grid and lowering monthly bills.</p>

      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
        <span class="bg-blue-100 text-blue-700 p-2 rounded-lg">⚙️</span> How Does a Solar System Work?
      </h2>
      
      <div class="grid md:grid-cols-3 gap-6 my-8 not-prose">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🔆</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">1. Solar Panels</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Absorb sunlight and generate DC electricity.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">2. Solar Inverter</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Converts DC electricity into AC power used by home appliances.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🔋</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">3. Net Meter</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Exports extra electricity to the grid or stores it in batteries.</p>
        </div>
      </div>

      <p class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl text-blue-800 italic my-8">
        <strong>Note:</strong> During the daytime, your home runs on solar power first, and only uses grid electricity when required.
      </p>

      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
        <span class="bg-green-100 text-green-700 p-2 rounded-lg">🏡</span> Why Solar is Ideal for Indian Homes
      </h2>
      <p>India receives abundant sunlight throughout the year, making solar highly efficient. For cities like Dehradun, Haridwar, and Rishikesh, rooftop solar delivers excellent long-term savings.</p>
      
      <ul class="grid md:grid-cols-2 gap-4 my-8 list-none pl-0">
        <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span class="text-green-500 mt-1">✓</span>
          <span class="text-slate-700 font-medium">High sunlight availability = better generation</span>
        </li>
        <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span class="text-green-500 mt-1">✓</span>
          <span class="text-slate-700 font-medium">Works well in heat and dusty environments</span>
        </li>
        <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span class="text-green-500 mt-1">✓</span>
          <span class="text-slate-700 font-medium">Government subsidies reduce installation cost</span>
        </li>
        <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span class="text-green-500 mt-1">✓</span>
          <span class="text-slate-700 font-medium">Perfect hedge against rising electricity tariffs</span>
        </li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
        <span class="bg-purple-100 text-purple-700 p-2 rounded-lg">💰</span> How Much Can You Save?
      </h2>
      <p>Most households can reduce electricity bills by <strong>70–90%</strong> depending on system size and usage.</p>
      
      <div class="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 my-10 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <h3 class="text-xl font-bold text-green-400 mb-6 uppercase tracking-wider">Monthly Savings Example</h3>
        <div class="space-y-4 relative z-10">
          <div class="flex justify-between items-center border-b border-white/10 pb-3">
            <span class="text-slate-300">Average Home Bill</span>
            <span class="font-bold text-xl">₹3,000–₹6,000</span>
          </div>
          <div class="flex justify-between items-center border-b border-white/10 pb-3">
            <span class="text-green-400 font-bold">Solar Savings</span>
            <span class="font-bold text-xl text-green-400">₹2,000–₹5,000</span>
          </div>
          <div class="flex justify-between items-center pt-2">
            <span class="text-slate-300">System Life</span>
            <span class="font-bold text-xl">25+ Years</span>
          </div>
        </div>
        <div class="mt-8 pt-6 border-t border-white/10 text-center">
            <p class="text-sm text-slate-400">Solar pays for itself in just 3-4 years!</p>
        </div>
      </div>

      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">🌧️ Common Questions</h2>
      
      <div class="space-y-6 my-8">
        <div class="bg-white border-l-4 border-amber-400 p-6 shadow-sm rounded-r-xl">
             <h3 class="font-bold text-lg text-slate-900 mb-2">Does Solar Work in Cloudy Weather?</h3>
             <p class="text-slate-600">Yes. Solar panels still generate electricity during cloudy conditions, though output may reduce slightly. Modern systems are designed to handle Indian monsoons.</p>
        </div>
        <div class="bg-white border-l-4 border-indigo-400 p-6 shadow-sm rounded-r-xl">
             <h3 class="font-bold text-lg text-slate-900 mb-2">What Happens at Night?</h3>
             <p class="text-slate-600">Grid-connected homes automatically switch to grid power. Homes with battery backup use stored solar energy.</p>
        </div>
      </div>

      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
        <span class="bg-teal-100 text-teal-700 p-2 rounded-lg">🛠️</span> Installation Process (Simple & Fast)
      </h2>
      <div class="grid md:grid-cols-4 gap-4 my-8 text-center not-prose">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
           <div class="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
           <p class="text-sm font-bold text-slate-800">Site Survey</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
           <div class="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
           <p class="text-sm font-bold text-slate-800">Design</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
           <div class="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
           <p class="text-sm font-bold text-slate-800">Installation</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
           <div class="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">4</div>
           <p class="text-sm font-bold text-slate-800">Activation</p>
        </div>
      </div>
      <p class="text-center text-slate-500 text-sm mb-12">Our local Dehradun team handles everything end-to-end in 2–5 days.</p>

      <div class="bg-green-50 rounded-2xl p-8 border border-green-100 my-12 text-center">
         <h2 class="text-2xl font-bold text-green-800 mb-4">Ready to Go Solar?</h2>
         <p class="text-green-700 mb-8 max-w-2xl mx-auto">Kartik Solar Enterprises helps homeowners choose the right system based on roof size, budget, and electricity usage.</p>
         <a href="/contact" class="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 no-underline">
            Book Free Consultation →
         </a>
      </div>
    `,
  },
 {
  id: "cost-savings",
  slug: "cost-savings",
  title: "Understanding Solar Savings & ROI",
  category: "Finance",
  description:
    "Learn how solar reduces monthly bills, system payback time, and how to calculate long-term savings for your home.",
  image: "/images/Cost.png",
  date: "Jan 12, 2026",
  author: "Finance Expert",
  color: "bg-green-500",
  content: `
    <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
      Switching to solar energy is not just an environmental decision — it is one of the smartest financial investments for Indian homeowners today. With rising electricity tariffs and long-term energy uncertainty, solar helps you control energy costs while generating savings for decades.
    </p>

    <p class="mb-10 text-slate-600">
      This guide explains how solar savings work, how return on investment (ROI) is calculated, and why rooftop solar systems provide strong financial benefits for homes across Uttarakhand.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
      <span class="bg-green-100 text-green-700 p-2 rounded-lg">💰</span>
      The Economics of Going Solar
    </h2>

    <p>Installing solar converts your monthly electricity expense into a long-term asset. Instead of paying increasing power bills every year, your rooftop generates electricity for 25+ years with minimal maintenance.</p>

    <p class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl text-green-900 my-8">
      <strong>Key Insight:</strong> Solar systems typically recover their cost within a few years and then continue producing almost free electricity.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
      <span class="bg-blue-100 text-blue-700 p-2 rounded-lg">📊</span>
      How ROI is Calculated
    </h2>

    <div class="grid md:grid-cols-3 gap-6 my-8 not-prose">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">System Cost</h3>
        <p class="text-slate-600 text-sm leading-relaxed">Initial investment after subsidy benefits.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">📉</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Bill Reduction</h3>
        <p class="text-slate-600 text-sm leading-relaxed">Monthly savings generated from solar power.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">📈</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Lifetime Savings</h3>
        <p class="text-slate-600 text-sm leading-relaxed">Total savings across 25+ years of system life.</p>
      </div>
    </div>

    <p class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl text-blue-800 italic my-8">
      Most residential solar systems in India achieve payback within <strong>3–5 years</strong>, after which electricity generation becomes nearly free.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-purple-100 text-purple-700 p-2 rounded-lg">📌</span>
      Factors That Influence Savings
    </h2>

    <ul class="grid md:grid-cols-2 gap-4 my-8 list-none pl-0">
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">System size and electricity consumption</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Current electricity tariff rates</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Sunlight availability and roof orientation</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Government subsidies & net metering benefits</span>
      </li>
    </ul>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-yellow-100 text-yellow-700 p-2 rounded-lg">📊</span>
      Monthly Savings Example
    </h2>

    <div class="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 my-10 text-white shadow-xl">
      <h3 class="text-xl font-bold text-green-400 mb-6 uppercase tracking-wider">
        Typical Household Scenario
      </h3>

      <div class="space-y-4">
        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-slate-300">Average Monthly Bill</span>
          <span class="font-bold text-xl">₹3,000</span>
        </div>

        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-green-400 font-bold">Annual Savings</span>
          <span class="font-bold text-xl text-green-400">₹36,000</span>
        </div>

        <div class="flex justify-between pt-2">
          <span class="text-slate-300">25-Year Savings</span>
          <span class="font-bold text-xl">₹9 Lakhs+</span>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-white/10 text-center">
        <p class="text-sm text-slate-400">
          Solar turns electricity expenses into long-term financial returns.
        </p>
      </div>
    </div>

    <div class="bg-green-50 rounded-2xl p-8 border border-green-100 my-12 text-center">
      <h2 class="text-2xl font-bold text-green-800 mb-4">Want to Calculate Your Savings?</h2>
      <p class="text-green-700 mb-8 max-w-2xl mx-auto">
        Kartik Solar Enterprises provides a personalized savings analysis based on your electricity usage and rooftop size.
      </p>
      <a href="/contact"
        class="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 no-underline">
        Check My Solar Savings →
      </a>
    </div>
  `
},
  {
  id: "subsidy",
  slug: "subsidy",
  title: "Government Subsidies & Solar Policies",
  category: "Government",
  description:
    "A simple guide to MNRE schemes, PM Surya Ghar Yojana, and how to claim solar subsidies in Uttarakhand.",
  image: "/images/RoofPanel.png",
  date: "Jan 10, 2026",
  author: "Policy Desk",
  color: "bg-amber-500",
  content: `
    <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
     Homeowners' shift from conventional sources can be supported by the Indian government simplifies policy framework concerning reliance on innovative subsidy models for increasing the adoption of the roof-top-solars. Solar energy reliance can become more economical through the extensive policy framework.
    </p>

    <p class="mb-10 text-slate-600">
      This guide explains the PM Surya Ghar Yojana, available subsidy benefits, eligibility criteria, and how residents of Uttarakhand can easily apply with complete support from Kartik Solar Enterprises.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
      <span class="bg-yellow-100 text-yellow-700 p-2 rounded-lg">☀️</span>
      PM Surya Ghar: Muft Bijli Yojana
    </h2>

    <p>
      The Government of India launched the <strong>PM Surya Ghar: Muft Bijli Yojana</strong> to help households generate their own electricity through rooftop solar systems. The scheme aims to reduce electricity bills while encouraging clean energy adoption across the country.
    </p>

    <p class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl text-amber-900 my-8">
      <strong>Benefit:</strong> Eligible households can receive direct financial subsidies credited to their bank accounts after successful installation and inspection.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
      <span class="bg-green-100 text-green-700 p-2 rounded-lg">💰</span>
      Subsidy Structure (Indicative)
    </h2>

    <div class="grid md:grid-cols-3 gap-6 my-8 not-prose">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">🏠</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Up to 2 kW</h3>
        <p class="text-slate-600 text-sm">₹30,000 per kW subsidy (up to ₹60,000).</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Up to 3 kW</h3>
        <p class="text-slate-600 text-sm">Additional ₹18,000 subsidy (Total up to ₹78,000).</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">📊</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Above 3 kW</h3>
        <p class="text-slate-600 text-sm">Subsidy capped at 3 kW residential structure.</p>
      </div>
    </div>

    <p class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl text-blue-800 italic my-8">
      <strong>Note:</strong> Subsidy values may change based on government policy updates. Always verify through the official MNRE portal.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-indigo-100 text-indigo-700 p-2 rounded-lg">📝</span>
      How to Apply for Solar Subsidy
    </h2>

    <div class="grid md:grid-cols-4 gap-4 my-8 text-center not-prose">
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
        <p class="text-sm font-bold text-slate-800">Register Online</p>
      </div>

      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
        <p class="text-sm font-bold text-slate-800">Choose Vendor</p>
      </div>

      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
        <p class="text-sm font-bold text-slate-800">Installation</p>
      </div>

      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold mx-auto mb-3">4</div>
        <p class="text-sm font-bold text-slate-800">Subsidy Credit</p>
      </div>
    </div>

    <p class="text-slate-600">
      After installation and net-meter approval, the subsidy amount is directly transferred to your registered bank account.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-teal-100 text-teal-700 p-2 rounded-lg">🤝</span>
      How Kartik Solar Helps You
    </h2>

    <ul class="grid md:grid-cols-2 gap-4 my-8 list-none pl-0">
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Complete documentation & portal registration</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">DISCOM approvals & net-meter coordination</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Fast installation & inspection support</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Hassle-free subsidy claim process</span>
      </li>
    </ul>

    <div class="bg-amber-50 rounded-2xl p-8 border border-amber-100 my-12 text-center">
      <h2 class="text-2xl font-bold text-amber-800 mb-4">Want to Check Your Subsidy Eligibility?</h2>
      <p class="text-amber-700 mb-8 max-w-2xl mx-auto">
        Our Dehradun-based team will calculate your subsidy benefits and guide you through the complete approval process.
      </p>
      <a href="/contact"
        class="inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 no-underline">
        Check My Subsidy →
      </a>
    </div>
  `
},
 {
  id: "lifestyle",
  slug: "lifestyle",
  title: "Living the Solar Lifestyle",
  category: "Lifestyle",
  description:
    "How switching to solar improves your quality of life, increases property value, and reduces carbon footprint.",
  image: "/images/House.png",
  date: "Jan 08, 2026",
  author: "Green Living",
  color: "bg-purple-500",
  content: `
    <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
      Switching to solar energy is more than a financial decision — it’s a lifestyle upgrade. Across Uttarakhand, homeowners are choosing solar not only to reduce electricity bills but to enjoy energy independence, comfort, and a greener way of living.
    </p>

    <p class="mb-10 text-slate-600">
      A solar-powered home represents modern living: lower expenses, reliable power, and a conscious step toward protecting the environment for future generations.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
      <span class="bg-yellow-100 text-yellow-700 p-2 rounded-lg">☀️</span>
      More Than Just Electricity Savings
    </h2>

    <p>
      Solar energy gives homeowners freedom from rising electricity tariffs and frequent power cuts. Instead of worrying about monthly bills, families enjoy predictable energy costs and long-term peace of mind.
    </p>

    <p class="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl text-purple-900 my-8">
      <strong>Solar Lifestyle Advantage:</strong> Your home produces clean energy every day — turning sunlight into savings while supporting a sustainable future.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
      <span class="bg-green-100 text-green-700 p-2 rounded-lg">🏡</span>
      Increase Property Value
    </h2>

    <div class="grid md:grid-cols-3 gap-6 my-8 not-prose">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">📈</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Higher Resale Value</h3>
        <p class="text-slate-600 text-sm">Solar homes attract buyers willing to pay premium prices.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Lower Running Costs</h3>
        <p class="text-slate-600 text-sm">Reduced electricity expenses make properties more desirable.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">🌱</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Future-Ready Home</h3>
        <p class="text-slate-600 text-sm">Energy-efficient homes are the new real estate standard.</p>
      </div>
    </div>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-blue-100 text-blue-700 p-2 rounded-lg">🔋</span>
      Reliable Power & Comfort
    </h2>

    <p>
      In areas experiencing frequent outages, hybrid solar systems with battery backup ensure uninterrupted electricity for lights, fans, Wi-Fi, and essential appliances.
    </p>

    <ul class="grid md:grid-cols-2 gap-4 my-8 list-none pl-0">
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Work-from-home without interruptions</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Children can study without power cuts</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Comfortable living even during grid failures</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Peace of mind during summers & monsoons</span>
      </li>
    </ul>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-emerald-100 text-emerald-700 p-2 rounded-lg">🌍</span>
      Reduce Your Carbon Footprint
    </h2>

    <p>
      A typical residential solar system offsets several tons of carbon emissions during its lifetime — equivalent to planting hundreds of trees. By choosing solar, you actively contribute to cleaner air and a healthier environment.
    </p>

    <div class="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 my-10 text-white shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <h3 class="text-xl font-bold text-purple-400 mb-6 uppercase tracking-wider">
        Environmental Impact
      </h3>

      <div class="space-y-4 relative z-10">
        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-slate-300">CO₂ Reduction</span>
          <span class="font-bold text-lg">Tons Saved Over Lifetime</span>
        </div>
        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-purple-400 font-bold">Equivalent Trees Planted</span>
          <span class="font-bold text-lg text-purple-400">300+ Trees</span>
        </div>
        <div class="flex justify-between pt-2">
          <span class="text-slate-300">System Life</span>
          <span class="font-bold text-lg">25+ Years</span>
        </div>
      </div>
    </div>

    <div class="bg-purple-50 rounded-2xl p-8 border border-purple-100 my-12 text-center">
      <h2 class="text-2xl font-bold text-purple-800 mb-4">Start Your Solar Lifestyle Today</h2>
      <p class="text-purple-700 mb-8 max-w-2xl mx-auto">
        Kartik Solar Enterprises helps homeowners across Dehradun, Haridwar, and hill regions transition to smarter, cleaner living with customized solar solutions.
      </p>
      <a href="/contact"
        class="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 no-underline">
        Begin My Solar Journey →
      </a>
    </div>
  `
},
{
  id: "maintenance",
  slug: "maintenance",
  title: "Maintenance Tips for Peak Performance",
  category: "Technical",
  description:
    "Simple maintenance routines to ensure your solar panels generate maximum power for 25+ years.",
  image: "/images/Field Panel.png",
  date: "Jan 05, 2026",
  author: "Tech Support",
  color: "bg-orange-500",
  content: `
    <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
      Solar panels are designed for durability and long-term performance. With minimal maintenance, a well-installed system can deliver reliable electricity for more than 25 years. A few simple care practices ensure your solar investment continues generating maximum savings.
    </p>

    <p class="mb-10 text-slate-600">
      In regions like Uttarakhand, where dust, seasonal rainfall, and bird activity are common, periodic maintenance helps maintain peak efficiency and uninterrupted energy production.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
      <span class="bg-yellow-100 text-yellow-700 p-2 rounded-lg">☀️</span>
      Low Maintenance, High Output
    </h2>

    <p>
      Solar panels have no moving parts, making them extremely reliable. Most performance losses occur due to dirt accumulation or minor electrical issues — both easily preventable with routine checks.
    </p>

    <p class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl text-orange-900 my-8">
      <strong>Pro Tip:</strong> Even a thin layer of dust can reduce generation by 5–15%. Regular cleaning ensures optimal sunlight absorption.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
      <span class="bg-blue-100 text-blue-700 p-2 rounded-lg">🧼</span>
      Cleaning Your Solar Panels
    </h2>

    <div class="grid md:grid-cols-3 gap-6 my-8 not-prose">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">💧</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Regular Washing</h3>
        <p class="text-slate-600 text-sm">Rinse panels with clean water every few months, especially during dry seasons.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">🧽</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Soft Cleaning</h3>
        <p class="text-slate-600 text-sm">Use a soft sponge or cloth. Avoid harsh chemicals or abrasive tools.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="text-4xl mb-4">⚠️</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Safety First</h3>
        <p class="text-slate-600 text-sm">For steep roofs, always hire professionals instead of cleaning yourself.</p>
      </div>
    </div>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-green-100 text-green-700 p-2 rounded-lg">📊</span>
      Monitor System Performance
    </h2>

    <p>
      Modern solar inverters include smart monitoring apps that allow you to track energy production in real time. Monitoring helps detect problems early and maintain optimal performance.
    </p>

    <ul class="grid md:grid-cols-2 gap-4 my-8 list-none pl-0">
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Track daily electricity generation</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Identify shading or dirt issues early</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Detect inverter or wiring faults quickly</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Ensure maximum long-term savings</span>
      </li>
    </ul>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-purple-100 text-purple-700 p-2 rounded-lg">🛠️</span>
      Kartik Solar AMC Support
    </h2>

    <p>
      For complete peace of mind, Kartik Solar offers Annual Maintenance Contracts (AMC). Our local experts perform routine inspections, professional cleaning, electrical safety checks, and performance optimization.
    </p>

    <div class="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 my-10 text-white shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <h3 class="text-xl font-bold text-orange-400 mb-6 uppercase tracking-wider">
        AMC Benefits
      </h3>

      <div class="space-y-4 relative z-10">
        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-slate-300">Regular System Inspection</span>
          <span class="font-bold">✔ Included</span>
        </div>
        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-orange-400 font-bold">Professional Cleaning</span>
          <span class="font-bold text-orange-400">✔ Included</span>
        </div>
        <div class="flex justify-between pt-2">
          <span class="text-slate-300">Performance Optimization</span>
          <span class="font-bold">✔ Included</span>
        </div>
      </div>
    </div>

    <div class="bg-orange-50 rounded-2xl p-8 border border-orange-100 my-12 text-center">
      <h2 class="text-2xl font-bold text-orange-800 mb-4">Keep Your Solar Performing Like New</h2>
      <p class="text-orange-700 mb-8 max-w-2xl mx-auto">
        With Kartik Solar’s expert maintenance support, your system stays efficient, safe, and reliable for decades.
      </p>
      <a href="/contact"
        class="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 no-underline">
        Schedule Maintenance Check →
      </a>
    </div>
  `
}
,
{
  id: "case-studies",
  slug: "case-studies",
  title: "Real Stories from Happy Customers",
  category: "Case Studies",
  description:
    "Explore real-world installations across Uttarakhand and hear directly from homes powered by Kartik Solar.",
  image: "/images/House.png",
  date: "Jan 01, 2026",
  author: "Community Team",
  color: "bg-teal-500",
  content: `
    <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
      Behind every solar installation is a real family or business choosing smarter energy. Across Uttarakhand, Kartik Solar Enterprises has helped homeowners and commercial clients reduce electricity bills, gain energy independence, and move toward a cleaner future.
    </p>

    <p class="mb-10 text-slate-600">
      Here are some real stories from customers who transformed their daily lives and operations by switching to solar energy.
    </p>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-8 flex items-center gap-3">
      <span class="bg-teal-100 text-teal-700 p-2 rounded-lg">🏠</span>
      Transforming Homes in Dehradun
    </h2>

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm my-8">
      <p class="text-slate-600 mb-6">
       Mr. Sharma from Rajpur Road, Dehradun, faced exorbitant electricity bills above ₹8,000. Following an in-depth energy analysis, Kartik Solar put in place a bespoke 5 kW rooftop solar array system aimed at optimising savings.
      </p>

      <blockquote class="border-l-4 border-teal-500 pl-6 italic text-slate-700">
        "The professionalism at Kartik Solar is outstanding. The installation in my house took only two days, and my most recent electricity bill is almost nonexistent. It is a great feeling to consume my own energy."
        <br/><strong class="not-italic text-slate-900">— Mr. Sharma</strong>
      </blockquote>
    </div>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
      <span class="bg-blue-100 text-blue-700 p-2 rounded-lg">🏭</span>
      Powering Businesses in Haridwar
    </h2>

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm my-8">
      <p class="text-slate-600 mb-6">
        A manufacturing unit in Haridwar had issues with steady power supply and high operational costs. To improve energy reliability and reduce costs, Kartik Solar implemented a 50 kW on-grid solar system.
      </p>

      <blockquote class="border-l-4 border-blue-500 pl-6 italic text-slate-700">
        "Our factory had a high power bill due to the operational instability of our machines. After we installed the solar system with the help of Kartik Solar, our power expenses dropped, and the performance of our machines was greatly improved."
        <br/><strong class="not-italic text-slate-900">— Factory Owner</strong>
      </blockquote>
    </div>

    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-3">
      <span class="bg-green-100 text-green-700 p-2 rounded-lg">⭐</span>
      Why Customers Choose Kartik Solar
    </h2>

    <ul class="grid md:grid-cols-2 gap-4 my-8 list-none pl-0">
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Customized system design for every rooftop</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Fast installation by local experts</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Government subsidy assistance</span>
      </li>
      <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <span class="text-green-500 mt-1">✓</span>
        <span class="text-slate-700 font-medium">Long-term service & maintenance support</span>
      </li>
    </ul>

    <div class="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 my-10 text-white shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <h3 class="text-xl font-bold text-teal-400 mb-6 uppercase tracking-wider">
        Community Impact
      </h3>

      <div class="space-y-4 relative z-10">
        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-slate-300">Homes & Businesses Powered</span>
          <span class="font-bold">500+</span>
        </div>
        <div class="flex justify-between border-b border-white/10 pb-3">
          <span class="text-teal-400 font-bold">Electricity Savings Generated</span>
          <span class="font-bold text-teal-400">Lakhs Saved Annually</span>
        </div>
        <div class="flex justify-between pt-2">
          <span class="text-slate-300">System Lifetime</span>
          <span class="font-bold">25+ Years</span>
        </div>
      </div>
    </div>

    <div class="bg-teal-50 rounded-2xl p-8 border border-teal-100 my-12 text-center">
      <h2 class="text-2xl font-bold text-teal-800 mb-4">Your Solar Story Starts Here</h2>
      <p class="text-teal-700 mb-8 max-w-2xl mx-auto">
        Join hundreds of families and businesses across Uttarakhand who trust Kartik Solar Enterprises for reliable and affordable clean energy solutions.
      </p>
      <a href="/contact"
        class="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 no-underline">
        Start My Solar Journey →
      </a>
    </div>
  `
},

];
