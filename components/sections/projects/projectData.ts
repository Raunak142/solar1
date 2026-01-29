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
  content: string; // Added rich content
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
    image: "/images/hero-house.png",
    monthlySavings: "₹2,500/month",
    installationTime: "2 days",
    panelType: "Monocrystalline",
    battery: "No",
    content: `
      <h2>Efficient Rooftop Solar for Urban Home</h2>
      <p>The Sharma family in Dehradun wanted to reduce their monthly electricity bills, which were averaging around ₹3,000. They have a flat roof with excellent sunlight exposure, making it an ideal candidate for a rooftop solar system.</p>
      
      <h3>System Configuration</h3>
      <ul>
        <li><strong>Capacity:</strong> 3 kW On-Grid System</li>
        <li><strong>Panels:</strong> High-efficiency Monocrystalline modules</li>
        <li><strong>Inverter:</strong> Growatt 3kW String Inverter</li>
        <li><strong>Structure:</strong> Elevated galvanized iron structure</li>
      </ul>

      <h3>Impact</h3>
      <p>Since installation, the Sharma family has seen a dramatic drop in their grid consumption. They are now generating approximately 12-14 units per day, which covers almost 90% of their energy needs. The return on investment is expected to be achieved in under 4 years.</p>
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
    image: "/images/hero-farm.png",
    monthlySavings: "₹4,200/month",
    installationTime: "3 days",
    panelType: "Monocrystalline",
    battery: "Yes",
    content: `
      <h2>Hybrid Solar Solution for Reliable Power</h2>
      <p>Located in Rishikesh, Verma Villa experiences occasional power cuts during the monsoon season. The owners needed a solution that would not only save money but also provide backup power for critical appliances.</p>

      <h3>System Highlights</h3>
      <p>We designed a 5kW Hybrid System integrated with a lithium-ion battery bank. This allows the home to run autonomously during outages while still exporting excess power to the grid during normal operation.</p>

      <h3>Customer Feedback</h3>
      <blockquote>"The transition seamlessly handles power cuts. We don't even notice when the grid goes down anymore. Plus, the savings are a huge bonus!"</blockquote>
    `,
  },
  {
    id: 3,
    slug: "gupta-home",
    title: "Gupta Home",
    category: "residential",
    location: "Haridwar",
    systemSize: "2 kW",
    type: "Residential",
    image: "/images/hero-house.png",
    monthlySavings: "₹1,800/month",
    installationTime: "2 days",
    panelType: "Monocrystalline",
    battery: "No",
    content: `
      <h2>Compact System for Small Families</h2>
      <p>Proving that you don't need a massive roof to go solar, the Gupta residence in Haridwar installed a compact 2kW system. It perfectly offsets their modest energy consumption.</p>
      
      <h3>Project Details</h3>
      <p>The installation was completed in just 2 days with minimal disruption. The system utilizes space-saving high-efficiency panels to maximize generation in a limited area.</p>
    `,
  },
  {
    id: 4,
    slug: "singh-residence",
    title: "Singh Residence",
    category: "residential",
    location: "Dehradun",
    systemSize: "4 kW",
    type: "Residential",
    image: "/images/hero-house.png",
    monthlySavings: "₹3,500/month",
    installationTime: "3 days",
    panelType: "Half-cut Bifacial",
    battery: "Yes",
    content: `
      <h2>Advanced Bifacial Technology</h2>
      <p>Mr. Singh opted for the latest Bifacial panels for his home. These panels generate power from both the front and back sides, utilizing reflected light from the white-painted roof surface to boost generation by up to 15%.</p>
      
      <h3>Why Bifacial?</h3>
      <p>Although slightly more expensive upfront, the increased efficiency results in better generation during early mornings and late afternoons, maximizing the total daily yield.</p>
    `,
  },

  // --- COMMERCIAL ---
  {
    id: 5,
    slug: "agarwal-sweets",
    title: "Agarwal Sweets",
    category: "commercial",
    location: "Haridwar",
    systemSize: "10 kW",
    type: "Retail Shop",
    image: "/images/project-commercial.png",
    monthlySavings: "₹12,000/month",
    installationTime: "5 days",
    panelType: "Monocrystalline",
    battery: "No",
    content: `
      <h2>Powering Large Commercial Operations</h2>
      <p>Refrigeration and lighting constitute a major part of the electricity load for Agarwal Sweets. A 10kW solar plant now powers their heavy-duty freezers and display counters during the day.</p>
      
      <h3>Commercial Benefits</h3>
      <p>Commercial tariffs in Uttarakhand are significantly higher than residential ones. This makes the ROI for commercial solar projects extremely attractive, often paying back in just 3 years. Agarwal Sweets is saving over ₹1.4 Lakhs annually.</p>
    `,
  },
  {
    id: 6,
    slug: "techpark-office",
    title: "TechPark Office",
    category: "commercial",
    location: "Dehradun",
    systemSize: "15 kW",
    type: "Office Building",
    image: "/images/project-commercial.png",
    monthlySavings: "₹18,000/month",
    installationTime: "6 days",
    panelType: "Monocrystalline",
    battery: "Yes",
    content: `
      <h2>Sustainable Workspace</h2>
      <p>TechPark Dehradun is committed to sustainability. Their new 15kW rooftop plant powers the common areas, elevators, and server rooms.</p>
      
      <h3>Green Branding</h3>
      <p>Beyond the financial savings, the solar installation has improved the building's LEED rating and attracts eco-conscious tenants who value sustainability.</p>
    `,
  },
  {
    id: 7,
    slug: "city-care-clinic",
    title: "City Care Clinic",
    category: "commercial",
    location: "Rishikesh",
    systemSize: "8 kW",
    type: "Clinic",
    image: "/images/project-commercial.png",
    monthlySavings: "₹9,500/month",
    installationTime: "4 days",
    panelType: "Half-cut Mono",
    battery: "Yes",
    content: `
      <h2>Critical Power for Healthcare</h2>
      <p>For a medical clinic, power reliability is non-negotiable. This 8kW system with battery backup ensures that critical storage for medicines and basic diagnostic equipment remains operational even during grid failures.</p>
    `,
  },
  {
    id: 8,
    slug: "modern-honda-showroom",
    title: "Modern Honda Showroom",
    category: "commercial",
    location: "Dehradun",
    systemSize: "12 kW",
    type: "Showroom",
    image: "/images/project-commercial.png",
    monthlySavings: "₹14,000/month",
    installationTime: "5 days",
    panelType: "Monocrystalline",
    battery: "No",
    content: `
      <h2>Solar-Powered Showroom</h2>
      <p>The vast roof space of the Honda showroom was perfect for a 12kW solar plant. The system powers the extensive lighting and air conditioning required to keep the showroom comfortable for customers.</p>
    `,
  },

  // --- INDUSTRIAL ---
  {
    id: 9,
    slug: "doon-packaging-unit",
    title: "Doon Packaging Unit",
    category: "industrial",
    location: "Selaqui",
    systemSize: "25 kW",
    type: "Manufacturing Unit",
    image: "/images/feature-wind.png",
    yearlySavings: "₹2,00,000/year",
    installationTime: "10 days",
    panelType: "Monocrystalline",
    battery: "Yes",
    content: `
      <h2>Industrial Cost Reduction</h2>
      <p>Manufacturing units in Selaqui have high daytime loads. This 25kW system directly offsets the peak daytime consumption of the packaging machinery, drastically reducing the demand charges on their bill.</p>
    `,
  },
  {
    id: 10,
    slug: "logistics-warehouse",
    title: "Logistics Warehouse",
    category: "industrial",
    location: "Haridwar",
    systemSize: "30 kW",
    type: "Warehouse",
    image: "/images/feature-wind.png",
    yearlySavings: "₹2,40,000/year",
    installationTime: "12 days",
    panelType: "Monocrystalline",
    battery: "No",
    content: `
      <h2>Turning Roofs into Assets</h2>
      <p>Warehouses have massive unused roof areas. By installing a 30kW solar plant, this logistics hub has turned a dead asset into a revenue-generating power plant, covering their entire lighting and ventilation costs.</p>
    `,
  },
  {
    id: 11,
    slug: "auto-parts-factory",
    title: "Auto Parts Factory",
    category: "industrial",
    location: "Selaqui",
    systemSize: "20 kW",
    type: "Small Factory",
    image: "/images/feature-wind.png",
    yearlySavings: "₹1,60,000/year",
    installationTime: "9 days",
    panelType: "Half-cut Bifacial",
    battery: "Yes",
    content: `
      <h2>Precision Power</h2>
      <p>Reliable power is key for precision manufacturing. This factory uses a hybrid solar solution to prevent voltage fluctuations from affecting their sensitive CNC machines.</p>
    `,
  },

  // --- OFF-GRID ---
  {
    id: 12,
    slug: "mountain-retreat",
    title: "Mountain Retreat",
    category: "offgrid",
    location: "Mussoorie",
    systemSize: "5 kW",
    type: "Remote Home",
    image: "/images/hero-farm.png",
    monthlySavings: "₹4,500/month",
    installationTime: "4 days",
    panelType: "Polycrystalline",
    battery: "Yes (Full Off-Grid)",
    content: `
      <h2>Energy Independence in the Hills</h2>
      <p>Located far from the nearest transformer, this retreat in Mussoorie relies entirely on solar power. A 5kW Off-Grid system with a large battery bank provides 24/7 power for heating, lighting, and kitchen appliances.</p>
    `,
  },
  {
    id: 13,
    slug: "hillside-school",
    title: "Hillside School",
    category: "offgrid",
    location: "Tehri",
    systemSize: "10 kW",
    type: "School",
    image: "/images/hero-farm.png",
    monthlySavings: "₹8,000/month",
    installationTime: "6 days",
    panelType: "Monocrystalline",
    battery: "Yes (Off-Grid)",
    content: `
      <h2>Empowering Education</h2>
      <p>Consistent power means digital classrooms and computer labs are now a reality for this remote school in Tehri. The 10kW system sets an example of sustainability for the students.</p>
    `,
  },
  {
    id: 14,
    slug: "orchard-farmhouse",
    title: "Orchard Farmhouse",
    category: "offgrid",
    location: "Mukteshwar",
    systemSize: "3 kW",
    type: "Farmhouse",
    image: "/images/hero-farm.png",
    monthlySavings: "₹2,800/month",
    installationTime: "3 days",
    panelType: "Monocrystalline",
    battery: "Yes",
    content: `
      <h2>Sustainable Agriculture</h2>
      <p>This farmhouse uses solar power not just for the home but also for water pumping for irrigation. It's a self-sustaining ecosystem powered by the sun.</p>
    `,
  },
  {
    id: 15,
    slug: "village-clinic",
    title: "Village Clinic",
    category: "offgrid",
    location: "Chamoli",
    systemSize: "8 kW",
    type: "Rural Clinic",
    image: "/images/hero-farm.png",
    monthlySavings: "₹6,000/month",
    installationTime: "5 days",
    panelType: "Monocrystalline",
    battery: "Yes",
    content: `
      <h2>Healthcare for All</h2>
      <p>Bringing modern healthcare to remote villages, this solar-powered clinic runs vaccine refrigerators an diagnostic tools reliably, saving lives in the process.</p>
    `,
  },
];
