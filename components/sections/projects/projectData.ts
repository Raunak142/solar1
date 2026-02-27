export type ProjectCategory = "residential" | "commercial" | "industrial" | "offgrid";

export interface Project {
  id: number;
  slug: string; // Added slug
  title: string;
  category: ProjectCategory;
  location: string;
  systemSize: string;
  type: string;
  image: string;
  monthlySavings?: string;
  yearlySavings?: string;
  installationTime: string;
  panelType: string;
  inverter?: string;
  battery: string;
  content: string;
  shortDescription?: string;
  impactBefore?: string;
  impactAfter?: string;
  tagline?: string;
  ctaText?: string;
}

export const projects: Project[] = [
  // --- RESIDENTIAL ---
  {
    id: 1,
    slug: "sharma-residence",
    title: "Sharma Residence",
    category: "residential",
    location: "Dehradun",
    systemSize: "3 kW",
    type: "Residential",
    image: "/images/House.png",
    monthlySavings: "₹2,500+/month",
    installationTime: "2 days",
    panelType: "Monocrystalline High-Efficiency Panels",
    inverter: "Premium 3 kW String Inverter",
    battery: "No",
    shortDescription: "A customized rooftop solar system designed to reduce electricity expenses and provide reliable, clean energy for everyday household needs.",
    impactBefore: "High electricity bills and dependency on grid power.",
    impactAfter: "Lower monthly expenses, reliable energy generation, and long-term savings.",
    tagline: "Smart Solar Solution for a Modern Indian Home",
    content: `
      <h2>Smart Solar Solutions for Urban Homes</h2>
      <p>The Sharmas needed a solution for their growing electricity bills that were averaging ₹3,000/month. Kartik Solar Enterprises analyzed the energy usage and the rooftop conditions for their home and designed the optimal system for savings and performance in the climactic conditions of Dehradun.</p>
      <p>Due to exceptional sunlight exposure combined with the smart sizing of the system, the installation has reduced their dependency on the grid and provide reliable consistent power generation.</p>

      <h3>System Configuration</h3>
      <ul>
        <li><strong>System Capacity:</strong> 3 kW On-Grid Solar System</li>
        <li><strong>Solar Panels:</strong> High-efficiency Monocrystalline panels</li>
        <li><strong>Inverter:</strong> Premium 3 kW String Inverter</li>
        <li><strong>Mounting Structure:</strong> Elevated galvanized iron structure designed for durability and airflow</li>
      </ul>

      <h3>Impact of Installation</h3>
      <p>The household's grid-based electricity consumption has decreased significantly. The system generates around 12-14 units on a daily basis, fulfilling almost 90% of the household's energy demand.</p>
      <p>The anticipated payback period is less than 4 years, after which savings will be realized for decades.</p>
    `,
  },
  {
    id: 2,
    slug: "verma-villa",
    title: "Verma Villa",
    category: "residential",
    location: "Rishikesh",
    systemSize: "5 kW",
    type: "Residential",
    image: "/images/RoofPanel.png",
    monthlySavings: "₹4,200+/month",
    installationTime: "3 Days",
    panelType: "Monocrystalline Solar Panels",
    inverter: "Hybrid String Inverter",
    battery: "Integrated Lithium Battery",
    shortDescription: "A customized hybrid solar system designed to reduce electricity bills while ensuring uninterrupted power for daily household needs, even during frequent outages.",
    impactBefore: "High electricity bills and frequent dependency on grid power during outages.",
    impactAfter: "Reliable backup power, reduced monthly expenses, and energy independence with long-term savings.",
    tagline: "Reliable Hybrid Solar Living",
    ctaText: "Get Your Free Solar Consultation",
    content: `
      <h2>Hybrid Solar Solution for Reliable Power</h2>
      <p>Verma Villa, located in Rishikesh, has frequent power interruptions, especially in the monsoon season. The owners needed an energy solution that would keep them from incurring high electricity costs and would allow them to use backup power for essential appliances.</p>
      <p>Kartik Solar Enterprises prepared and installed a 5 kW hybrid solar system that incorporates high-efficiency solar modules and advanced battery storage. Because of this, the home is able to function normally during outages and savings during solar outages are maximized.</p>

      <h3>System Highlights</h3>
      <ul>
        <li><strong>System Capacity:</strong> 5 kW Hybrid Solar System</li>
        <li><strong>Solar Panels:</strong> High-efficiency Monocrystalline modules</li>
        <li><strong>Inverter:</strong> Advanced Hybrid String Inverter</li>
        <li><strong>Battery Backup:</strong> Integrated lithium battery system</li>
        <li><strong>Structure:</strong> Weather-resistant elevated mounting for improved airflow and durability</li>
      </ul>

      <h3>Customer Experience</h3>
      <blockquote>"Power cuts are no longer a concern for our family. The system automatically switches during outages, and our electricity bills have reduced significantly. It’s been one of the best investments for our home."</blockquote>
    `,
  },

  // --- COMMERCIAL ---
  {
    id: 5,
    slug: "agarwal-sweets",
    title: "Agarwal Sweets",
    tagline: "Smart Commercial Solar Solution",
    category: "commercial",
    location: "Haridwar, Uttarakhand",
    systemSize: "10 kW",
    type: "Retail Shop",
    image: "/images/Cost.png",
    monthlySavings: "₹12,000+/month",
    installationTime: "5 days",
    panelType: "Monocrystalline",
    battery: "No",
    content: `
      <h2>Efficient Solar Power for Commercial Operations</h2>
      <p>Agarwal Sweets in Haridwar faced high electricity expenses due to continuous operation of refrigeration units, lighting systems, and display counters. To reduce operational costs and improve energy efficiency, Kartik Solar Enterprises designed a customized 10 kW on-grid solar system tailored for commercial energy consumption.</p>
      
      <p>The system now powers major daytime loads including freezers, preparation equipment, and showroom lighting, significantly lowering dependency on grid electricity while maintaining uninterrupted business operations.</p>
      
      <h3>System Highlights</h3>
      <ul>
        <li><strong>System Capacity:</strong> 10 kW On-Grid Commercial Solar System</li>
        <li><strong>Panels:</strong> High-efficiency Monocrystalline modules</li>
        <li><strong>Inverter:</strong> Commercial-grade String Inverter</li>
        <li><strong>Structure:</strong> Heavy-duty galvanized mounting designed for long-term durability</li>
      </ul>

      <h3>Business Impact</h3>
      <p>Commercial electricity tariffs in Uttarakhand are significantly higher than residential rates, making solar a highly profitable investment. After installation, Agarwal Sweets is saving over ₹1.4 lakhs annually, with an expected return on investment within approximately 3 years.</p>

      <p>The solar system not only reduces operational costs but also supports sustainable business practices by lowering carbon emissions and improving long-term energy stability.</p>
    `,
  },
  {
    id: 6,
    slug: "techpark-office",
    title: "TechPark Office",
    tagline: "Smart Solar for Sustainable Workspaces",
    category: "commercial",
    location: "Dehradun, Uttarakhand",
    systemSize: "15 kW",
    type: "Office Building",
    image: "/images/Field Panel.png",
    monthlySavings: "₹18,000+/month",
    installationTime: "6 days",
    panelType: "Monocrystalline",
    inverter: "Advanced Hybrid String Inverter",
    battery: "Yes",
    content: `
      <h2>Reliable Solar Power for Modern Office Operations</h2>
      <p>TechPark Office in Dehradun aimed to reduce rising electricity expenses while aligning its workspace with sustainable energy practices. Kartik Solar Enterprises designed a customized 15 kW hybrid rooftop solar system to support daily office operations efficiently.</p>
      
      <p>The system now powers common areas, lighting systems, elevators, and essential server infrastructure while ensuring uninterrupted operations through integrated battery backup during power outages.</p>
      
      <h3>System Highlights</h3>
      <ul>
        <li><strong>System Capacity:</strong> 15 kW Hybrid Solar System</li>
        <li><strong>Panels:</strong> High-efficiency Monocrystalline solar modules</li>
        <li><strong>Inverter:</strong> Advanced Hybrid String Inverter</li>
        <li><strong>Battery Backup:</strong> Integrated energy storage for critical loads</li>
        <li><strong>Structure:</strong> Durable elevated mounting designed for long-term performance</li>
      </ul>

      <h3>Business & Environmental Impact</h3>
      <p>The solar installation significantly reduced operational electricity costs while improving energy reliability for office operations. The building now saves approximately ₹18,000 per month and benefits from enhanced sustainability credentials, helping attract environmentally conscious tenants and businesses.</p>

      <p>By switching to solar energy, TechPark Office has taken a strong step toward reducing carbon emissions while creating a future-ready and energy-efficient workplace.</p>
    `,
  },

  // --- INDUSTRIAL ---
{
  id: 9,
  slug: "doon-packaging-unit",
  title: "Doon Packaging Unit — Industrial Solar Efficiency Upgrade",
  category: "industrial",
  location: "Selaqui, Uttarakhand",
  systemSize: "25 kW",
  type: "Manufacturing Unit",
  image: "/images/Field Panel.png",
  yearlySavings: "₹2,00,000+/year",
  installationTime: "10 days",
  panelType: "Monocrystalline",
  battery: "Yes",
  content: `
    <h2>Reducing Energy Costs for Industrial Operations</h2>
    <p>Doon Packaging Unit in Selaqui operates high-load manufacturing machinery during daytime hours, resulting in significant electricity expenses and peak demand charges. Kartik Solar Enterprises designed a customized 25 kW hybrid solar system to directly offset daytime industrial consumption and improve operational efficiency.</p>

    <p>The solar plant now powers key production equipment, packaging machinery, and facility operations, reducing dependency on grid electricity while ensuring stable performance through integrated battery backup.</p>

    <h3>System Highlights</h3>
    <ul>
      <li><strong>System Capacity:</strong> 25 kW Industrial Hybrid Solar System</li>
      <li><strong>Panels:</strong> High-efficiency Monocrystalline modules</li>
      <li><strong>Inverter:</strong> Industrial-grade Hybrid Inverter</li>
      <li><strong>Battery Backup:</strong> Integrated storage for critical operations</li>
      <li><strong>Structure:</strong> Heavy-duty galvanized mounting designed for industrial durability</li>
    </ul>

    <h3>Operational Impact</h3>
    <p>By generating clean energy during peak production hours, the system significantly reduces electricity bills and demand charges. The facility now saves over ₹2 lakhs annually while improving energy reliability and lowering carbon emissions.</p>

    <p>This installation demonstrates how industrial businesses can achieve long-term cost control and sustainable operations through smart solar adoption.</p>
  `,
}
,
  {
  id: 10,
  slug: "logistics-warehouse",
  title: "Logistics Warehouse — Large-Scale Solar for Operational Efficiency",
  category: "industrial",
  location: "Haridwar, Uttarakhand",
  systemSize: "30 kW",
  type: "Warehouse",
  image: "/images/RoofPanel.png",
  yearlySavings: "₹2,40,000+/year",
  installationTime: "12 days",
  panelType: "Monocrystalline",
  battery: "No",
  content: `
    <h2>Transforming Rooftop Space into Energy Savings</h2>
    <p>This logistics warehouse in Haridwar had a large unused rooftop area and high electricity consumption due to continuous lighting, ventilation systems, and operational equipment. Kartik Solar Enterprises designed a 30 kW on-grid solar system to efficiently utilize the available space and reduce long-term operating expenses.</p>

    <p>The solar installation now powers the warehouse’s daytime energy requirements, significantly lowering grid dependency while converting an idle rooftop into a productive energy-generating asset.</p>

    <h3>System Highlights</h3>
    <ul>
      <li><strong>System Capacity:</strong> 30 kW On-Grid Industrial Solar System</li>
      <li><strong>Panels:</strong> High-efficiency Monocrystalline solar modules</li>
      <li><strong>Inverter:</strong> Industrial-grade String Inverter</li>
      <li><strong>Structure:</strong> Heavy-duty elevated mounting optimized for large rooftops</li>
    </ul>

    <h3>Operational Impact</h3>
    <p>The system now covers major electricity loads including lighting and ventilation, helping the facility save over ₹2.4 lakhs annually. With minimal maintenance and long system life, the warehouse benefits from predictable energy costs and improved operational efficiency.</p>

    <p>By adopting solar energy, the logistics hub has reduced carbon emissions while strengthening its commitment to sustainable and cost-effective operations.</p>
  `,
}
,

  // --- OFF-GRID ---
 {
  id: 12,
  slug: "mountain-retreat",
  title: "Mountain Retreat — Complete Off-Grid Solar Living",
  category: "offgrid",
  location: "Mussoorie, Uttarakhand",
  systemSize: "5 kW",
  type: "Remote Home",
  image: "/images/Forest Panel.png",
  monthlySavings: "₹4,500+/month",
  installationTime: "4 days",
  panelType: "Polycrystalline",
  battery: "Yes (Full Off-Grid)",
  content: `
    <h2>Energy Independence in Remote Hill Locations</h2>
    <p>Situated in the hills of Mussoorie, this mountain retreat faced limited access to reliable grid electricity due to its remote location. Kartik Solar Enterprises designed a fully off-grid 5 kW solar system to provide complete energy independence and uninterrupted power throughout the year.</p>

    <p>The system combines high-efficiency solar panels with a large-capacity battery bank, ensuring round-the-clock electricity for lighting, heating, kitchen appliances, and essential household needs — even during cloudy weather or grid unavailability.</p>

    <h3>System Highlights</h3>
    <ul>
      <li><strong>System Capacity:</strong> 5 kW Full Off-Grid Solar System</li>
      <li><strong>Panels:</strong> Durable Polycrystalline modules suitable for hill climates</li>
      <li><strong>Inverter:</strong> Off-Grid Hybrid Inverter</li>
      <li><strong>Battery Backup:</strong> High-capacity storage for 24/7 power supply</li>
      <li><strong>Structure:</strong> Weather-resistant mounting designed for mountain conditions</li>
    </ul>

    <h3>Living Impact</h3>
    <p>The retreat now operates completely independent of the electricity grid, eliminating power interruptions and reducing dependency on diesel generators. The homeowners enjoy reliable, clean energy while saving approximately ₹4,500 per month in fuel and electricity expenses.</p>

    <p>This project demonstrates how solar energy can enable comfortable and sustainable living even in remote Himalayan regions.</p>
  `,
},
  {
  id: 13,
  slug: "hillside-school",
  title: "Hillside School — Solar Power for Reliable Education",
  category: "offgrid",
  location: "Tehri, Uttarakhand",
  systemSize: "10 kW",
  type: "School",
  image: "/images/Forest Panel.png",
  monthlySavings: "₹8,000+/month",
  installationTime: "6 days",
  panelType: "Monocrystalline",
  battery: "Yes (Off-Grid)",
  content: `
    <h2>Empowering Education with Reliable Solar Energy</h2>
    <p>Located in a remote area of Tehri, Hillside School faced frequent power interruptions that affected classrooms, lighting, and computer-based learning. Kartik Solar Enterprises designed a 10 kW off-grid solar system to provide uninterrupted electricity and create a dependable learning environment for students and teachers.</p>

    <p>The system combines high-efficiency solar panels with battery storage, ensuring consistent power for digital classrooms, computer labs, lighting, and essential school operations throughout the day.</p>

    <h3>System Highlights</h3>
    <ul>
      <li><strong>System Capacity:</strong> 10 kW Off-Grid Solar System</li>
      <li><strong>Panels:</strong> High-efficiency Monocrystalline solar modules</li>
      <li><strong>Inverter:</strong> Off-Grid Hybrid Inverter</li>
      <li><strong>Battery Backup:</strong> Integrated storage for continuous power supply</li>
      <li><strong>Structure:</strong> Weather-resistant mounting designed for hill terrain</li>
    </ul>

    <h3>Community Impact</h3>
    <p>The installation now ensures uninterrupted classes, improved digital education access, and reduced dependency on unreliable grid supply. The school saves approximately ₹8,000 per month while setting a strong example of sustainability and environmental responsibility for students.</p>

    <p>This project highlights how solar energy can transform education infrastructure in remote Himalayan regions by providing clean, dependable power.</p>
  `,
},
{
  id: 14,
  slug: "orchard-farmhouse",
  title: "Orchard Farmhouse — Sustainable Solar Living in the Hills",
  category: "offgrid",
  location: "Mukteshwar, Uttarakhand",
  systemSize: "3 kW",
  type: "Farmhouse",
  image: "/images/GroundPanel.png",
  monthlySavings: "₹2,800+/month",
  installationTime: "3 days",
  panelType: "Monocrystalline",
  battery: "Yes",
  content: `
    <h2>Solar Power Supporting Sustainable Farming</h2>
    <p>Located in the scenic hills of Mukteshwar, this orchard farmhouse required a reliable energy solution for both residential use and agricultural activities. Kartik Solar Enterprises designed a 3 kW off-grid solar system to provide dependable electricity in an area with limited grid reliability.</p>

    <p>The system now powers household appliances along with water pumping for irrigation, helping maintain farm operations while reducing dependence on diesel generators and fluctuating electricity supply.</p>

    <h3>System Highlights</h3>
    <ul>
      <li><strong>System Capacity:</strong> 3 kW Off-Grid Solar System</li>
      <li><strong>Panels:</strong> High-efficiency Monocrystalline modules</li>
      <li><strong>Inverter:</strong> Off-Grid Solar Inverter</li>
      <li><strong>Battery Backup:</strong> Integrated storage for continuous operation</li>
      <li><strong>Structure:</strong> Ground-mounted system optimized for open farmland</li>
    </ul>

    <h3>Living & Farming Impact</h3>
    <p>The farmhouse now operates as a self-sustaining energy ecosystem, ensuring reliable power for daily living and irrigation needs. The owners save approximately ₹2,800 per month while benefiting from clean, renewable energy suited for rural hill environments.</p>

    <p>This installation demonstrates how solar energy can support modern agriculture while promoting sustainable and independent living in remote regions.</p>
  `,
},
];
