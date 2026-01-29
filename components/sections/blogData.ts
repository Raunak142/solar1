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
    title: "Solar Energy 101: A Beginner's Guide",
    category: "Education",
    description:
      "Everything you need to know about how solar panels work and why they are the future of energy in India.",
    image: "/images/feature-wind.png",
    date: "Jan 15, 2026",
    author: "SolarX Team",
    color: "bg-blue-500",
    content: `
      <h2>How Do Solar Panels Work?</h2>
      <p>Solar panels convert sunlight into electricity using photovoltaic (PV) cells. These cells are made of materials like silicon that generate an electric current when exposed to light. This clean energy can then be used to power your home or business, reducing your reliance on the traditional power grid.</p>
      
      <h2>Why Go Solar in India?</h2>
      <p>India is blessed with abundant sunshine throughout the year, making it one of the best places in the world for solar energy generation. By switching to solar, you not only save significantly on your electricity bills but also contribute to a greener, more sustainable future.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li><strong>Cost Savings:</strong> Reduce your electricity bills by up to 90%.</li>
        <li><strong>Energy Independence:</strong> Generate your own power and avoid frequent outages.</li>
        <li><strong>Environmentally Friendly:</strong> Reduce carbon emissions and your ecological footprint.</li>
        <li><strong>Government Incentives:</strong> Take advantage of subsidies and tax benefits.</li>
      </ul>
      
      <h2>Is Solar Right for You?</h2>
      <p>If you have a rooftop with good sunlight exposure, solar is a great investment. Our team at SolarX can conduct a free site assessment to help you understand the potential savings and system size suitable for your needs.</p>
    `,
  },
  {
    id: "cost-savings",
    slug: "cost-savings",
    title: "Understanding ROI & Solar Savings",
    category: "Finance",
    description:
      "Detailed breakdown of solar costs, monthly savings, and how to calculate your Return on Investment.",
    image: "/images/project-commercial.png",
    date: "Jan 12, 2026",
    author: "Finance Expert",
    color: "bg-green-500",
    content: `
      <h2>The Economics of Going Solar</h2>
      <p>Investing in a solar power system is one of the smartest financial decisions a homeowner in India can make today. While the upfront cost might seem significant, the long-term savings and return on investment (ROI) are substantial.</p>

      <h2>Calculating Your ROI</h2>
      <p>The ROI of a solar system is calculated by comparing the cost of the system to the money saved on electricity bills over its lifetime. Most residential solar systems in India pay for themselves within 3 to 5 years. After that, the electricity you generate is essentially free for the remaining 20+ years of the system's life.</p>

      <h3>Factors Influencing Savings:</h3>
      <ul>
        <li><strong>System Size:</strong> Larger systems generate more power but cost more upfront.</li>
        <li><strong>Electricity Rates:</strong> The higher your current grid tariff, the more you save.</li>
        <li><strong>Sunlight Availability:</strong> More sun means more power generation.</li>
        <li><strong>Government Subsidies:</strong> Subsidies directly reduce the initial investment cost.</li>
      </ul>

      <h2>Monthly Savings Example</h2>
      <p>For an average household with a monthly bill of ₹3,000, a 3kW solar system can eliminate almost the entire bill. That means you save ₹36,000 annually. Over 25 years, that's a saving of ₹9 Lakhs, adjusting for inflation!</p>
    `,
  },
  {
    id: "subsidy",
    slug: "subsidy",
    title: "Government Subsidies & Policies",
    category: "Government",
    description:
      "Navigate the latest MNRE guidelines and learn how to claim government subsidies for your rooftop plant.",
    image: "/images/hero-farm.png",
    date: "Jan 10, 2026",
    author: "Policy Desk",
    color: "bg-amber-500",
    content: `
      <h2>PM Surya Ghar: Muft Bijli Yojana</h2>
      <p>The Government of India has launched the 'PM Surya Ghar: Muft Bijli Yojana' to boost solar adoption. Under this scheme, households can receive substantial subsidies for installing rooftop solar systems.</p>

      <h2>Subsidy Slabs (Indicative)</h2>
      <ul>
        <li><strong>Up to 2 kW:</strong> ₹30,000 per kW (Total ₹60,000)</li>
        <li><strong>Additional 1 kW (Total 3 kW):</strong> ₹18,000 additional (Total subsidy up to ₹78,000)</li>
        <li><strong>Above 3 kW:</strong> The subsidy amount is capped at the 3 kW level structure.</li>
      </ul>
      <p><em>Note: These figures are subject to government updates. Always check the official MNRE portal for the latest rates.</em></p>

      <h2>How to Apply?</h2>
      <ol>
        <li>Register on the National Portal for Rooftop Solar.</li>
        <li>Choose a registered vendor (like SolarX) for installation.</li>
        <li>Submit necessary documents and get approval.</li>
        <li>Once the system is commissioned and net-metering is done, the subsidy is released directly to your bank account.</li>
      </ol>
      <p>SolarX handles all the paperwork and liaisoning for our customers to ensure a hassle-free subsidy process.</p>
    `,
  },
  {
    id: "lifestyle",
    slug: "lifestyle",
    title: "Living the Solar Lifestyle",
    category: "Lifestyle",
    description:
      "How switching to solar improves your quality of life, increases property value, and reduces carbon footprint.",
    image: "/images/hero-house.png",
    date: "Jan 08, 2026",
    author: "Green Living",
    color: "bg-purple-500",
    content: `
      <h2>More Than Just Savings</h2>
      <p>Adopting solar energy isn't just about saving money; it's a lifestyle choice. It signifies a commitment to sustainability and a forward-thinking mindset. Living in a solar-powered home brings a sense of pride and independence.</p>

      <h2>Increase Your Property Value</h2>
      <p>Homes equipped with solar power systems sell faster and at a premium compared to non-solar homes. Buyers are increasingly looking for energy-efficient properties with lower operating costs. Your solar installation is an asset that appreciates the value of your real estate.</p>

      <h2>Reliable Power Backup</h2>
      <p>In areas with frequent power cuts, a hybrid solar system with battery backup ensures your lights, fans, and internet stay on. Work from home without interruptions and ensure your children's studies aren't affected by grid failures.</p>

      <h2>Reducing Your Carbon Footprint</h2>
      <p>A typical residential solar system offsets tons of Carbon Dioxide over its lifetime. It's equivalent to planting hundreds of trees. By going solar, you are actively combating climate change and leaving a healthier planet for future generations.</p>
    `,
  },
  {
    id: "maintenance",
    slug: "maintenance",
    title: "Maintenance Tips for Peak Performance",
    category: "Technical",
    description:
      "Simple maintenance routines to ensure your solar panels generate maximum power for 25+ years.",
    image: "/images/about-team.png",
    date: "Jan 05, 2026",
    author: "Tech Support",
    color: "bg-orange-500",
    content: `
      <h2>Low Maintenance, High Output</h2>
      <p>Solar panels are remarkably durable and require very little maintenance. With no moving parts, there's very little that can break. However, keeping them clean ensures they operate at maximum efficiency.</p>

      <h2>Cleaning Your Panels</h2>
      <p>Dust, dirt, pollen, and bird droppings can reduce the efficiency of your panels by blocking sunlight. Here are some cleaning tips:</p>
      <ul>
        <li><strong>Regular Washing:</strong> Rinse your panels with water every few months, especially during dry seasons.</li>
        <li><strong>Soft Brush:</strong> Use a soft sponge or brush to remove stubborn dirt. Avoid abrasive materials that could scratch the glass.</li>
        <li><strong>Safety First:</strong> If your roof is hard to reach, hire a professional cleaning service rather than risking injury.</li>
      </ul>

      <h2>Monitoring System Performance</h2>
      <p>Modern inverters come with monitoring apps that let you track generation on your phone. Keep an eye on the daily output. A sudden drop in production could indicate a shading issue, a dirty panel, or a technical fault that needs attention.</p>

      <h2>SolarX AMC Services</h2>
      <p>For complete peace of mind, opt for our Annual Maintenance Contract (AMC). We conduct regular checkups, professional cleaning, and system health verification to ensure your investment keeps performing its best.</p>
    `,
  },
  {
    id: "case-studies",
    slug: "case-studies",
    title: "Real Stories from Happy Customers",
    category: "Case Studies",
    description:
      "Explore real-world installations across Uttarakhand and hear directly from homes powered by SolarX.",
    image: "/images/project-residential.png",
    date: "Jan 01, 2026",
    author: "Community Team",
    color: "bg-teal-500",
    content: `
      <h2>Transforming Lives in Dehradun</h2>
      <p>Mr. Sharma, a resident of Rajpur Road, was tired of monthly bills exceeding ₹8,000. He contacted SolarX for a solution.</p>
      <blockquote>
        "The team at SolarX was incredibly professional. They installed a 5kW system on my roof in just 2 days. My last electricity bill was just ₹200! I couldn't be happier." - <strong>Mr. Sharma</strong>
      </blockquote>

      <h2>Powering Businesses in Haridwar</h2>
      <p>A local manufacturing unit in Haridwar faced heavy losses due to power fluctuations. We installed a 50kW On-Grid system.</p>
      <blockquote>
        "Not only have our operational costs gone down by 60%, but the stable power supply has also improved the life of our machinery. SolarX provided excellent engineering support." - <strong>Factory Owner</strong>
      </blockquote>

      <h2>Join the Solar Revolution</h2>
      <p>These are just a few of the hundreds of families and businesses we've helped switch to clean energy. Your story could be next. Join the growing community of satisfied SolarX customers today.</p>
    `,
  },
  {
    id: "case-studies-2",
    slug: "case-studies-2",
    title: "Commercial Solar: A Game Changer",
    category: "Business",
    description:
      "See how local factories in Uttarakhand are saving lakhs each month by switching to commercial solar plants.",
    image: "/images/project-commercial.png",
    date: "Dec 28, 2025",
    author: "Business Team",
    color: "bg-blue-600",
    content: "...",
  },
  {
    id: "tips-tricks",
    slug: "tips-tricks",
    title: "10 Tips to Maximize Solar Efficiency",
    category: "Tips",
    description:
      "Simple hacks to get the most out of your solar panels, from cleaning schedules to energy consumption habits.",
    image: "/images/hero-farm.png",
    date: "Dec 25, 2025",
    author: "Solar Expert",
    color: "bg-amber-600",
    content: "...",
  },
  {
    id: "future-tech",
    slug: "future-tech",
    title: "The Future of Solar Storage",
    category: "Technology",
    description:
      "Exploring the latest advancements in battery technology and how they will revolutionize home energy storage.",
    image: "/images/feature-wind.png",
    date: "Dec 20, 2025",
    author: "Tech Team",
    color: "bg-purple-600",
    content: "...",
  },
];
