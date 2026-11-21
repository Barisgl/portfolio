import { Profile, Experience, Education, SkillCategory, Project } from '@/types/portfolio';

export const profileData: Profile = {
  name: 'Barış Gül',
  title: {
    en: 'Supply Chain Analyst & Data Analytics Professional',
    de: 'Supply Chain Analyst & Data Analytics Spezialist',
  },
  location: {
    en: 'Ingolstadt, Germany',
    de: 'Ingolstadt, Deutschland',
  },
  tagline: {
    en: 'Transforming complex supply chain & business data into actionable automated intelligence with Power BI, SQL, and Python.',
    de: 'Transformation komplexer Supply-Chain- und Geschäftsdaten in automatisierte Erkenntnisse mit Power BI, SQL und Python.',
  },
  bio: {
    en: 'Industrial Engineer and Master\'s candidate in Digital Procurement & Sustainable Supply Chain Management at TH Ingolstadt. Experienced across multinational manufacturing, technology, and sports brands (Rohde & Schwarz, Siemens, adidas). Passionate about replacing tedious manual reporting with scalable analytical workflows, dynamic KPI dashboards, and data-driven supply chain optimization.',
    de: 'Wirtschaftsingenieur und Master-Student im Bereich Digitaler Einkauf & Nachhaltiges Supply Chain Management an der TH Ingolstadt. Erfahrung bei internationalen Konzernen wie Rohde & Schwarz, Siemens und adidas. Begeistert davon, zeitaufwändiges manuelles Reporting durch skalierbare Daten-Pipelines, interaktive KPI-Dashboards und datengestützte Prozessoptimierung zu ersetzen.',
  },
  email: 'glbaris19@gmail.com',
  linkedin: 'https://linkedin.com/in/baris-gul',
  github: 'https://github.com/barisgul',
  cvUrl: '/Baris-Gul-CV.pdf',
  languages: [
    {
      name: { en: 'German', de: 'Deutsch' },
      level: { en: 'C1 (Fluent / Professional)', de: 'C1 (Verhandlungssicher)' },
    },
    {
      name: { en: 'English', de: 'Englisch' },
      level: { en: 'B2 (Professional Working)', de: 'B2 (Fließend im Beruf)' },
    },
    {
      name: { en: 'Turkish', de: 'Türkisch' },
      level: { en: 'Native', de: 'Muttersprache' },
    },
  ],
};

export const experiencesData: Experience[] = [
  {
    id: 'rohde-schwarz',
    company: 'Rohde & Schwarz',
    role: {
      en: 'Working Student — Supply Chain Management',
      de: 'Werkstudent — Supply Chain Management',
    },
    period: {
      en: '03/2026 – Present',
      de: '03/2026 – Heute',
    },
    location: {
      en: 'Munich / Ingolstadt, Germany',
      de: 'München / Ingolstadt, Deutschland',
    },
    type: {
      en: 'Working Student',
      de: 'Werkstudententätigkeit',
    },
    highlight: {
      en: 'Automated operational reporting and supply risk tracking using SAP and Power BI.',
      de: 'Automatisierung des operativen Reportings und Lieferrisiko-Trackings mit SAP und Power BI.',
    },
    responsibilities: {
      en: [
        'Developed interactive Power BI KPI dashboards for supply chain performance, tracking delivery reliability and supplier lead times.',
        'Extracted and cleansed large-scale operational procurement and material availability data from SAP.',
        'Collaborated with cross-functional supply chain teams to identify bottlenecks and optimize inventory replenishment cycles.',
        'Automated recurring reporting workflows, reducing weekly manual report preparation time by 40%.',
      ],
      de: [
        'Entwicklung interaktiver Power BI KPI-Dashboards zur Messung der Supply-Chain-Performance (Liefertreue, Wiederbeschaffungszeiten).',
        'Extraktion und Bereinigung umfangreicher Beschaffungs- und Bestandsdaten direkt aus SAP.',
        'Zusammenarbeit mit Supply-Chain-Teams zur Identifikation von Engpässen und Optimierung von Nachbestellzyklen.',
        'Automatisierung wöchentlicher Reporting-Abläufe und Reduzierung des manuellen Aufwands um 40%.',
      ],
    },
    technologies: ['Power BI', 'SAP', 'DAX', 'SQL', 'Excel / Power Query', 'Supply Chain Analytics'],
  },
  {
    id: 'siemens-talent',
    company: 'Siemens',
    role: {
      en: 'Data Analyst — Talent Programme',
      de: 'Data Analyst — Talent Programme',
    },
    period: {
      en: '09/2023 – 09/2025',
      de: '09/2023 – 09/2025',
    },
    location: {
      en: 'Germany',
      de: 'Deutschland',
    },
    highlight: {
      en: 'Customer segmentation, revenue analytics, and predictive data modeling.',
      de: 'Kundensegmentierung, Umsatzanalysen und prädiktive Datenmodellierung.',
    },
    responsibilities: {
      en: [
        'Engineered complex SQL queries (CTEs, Window Functions) on Snowflake to analyze large customer transaction datasets.',
        'Designed high-impact Power BI executive dashboards providing leadership with real-time revenue and margin insights.',
        'Implemented RFM (Recency, Frequency, Monetary) segmentation models in Python to identify high-value customer tiers.',
        'Created standardized data validation pipelines ensuring high accuracy across corporate analytics databases.',
      ],
      de: [
        'Erstellung komplexer SQL-Abfragen (CTEs, Window Functions) in Snowflake zur Analyse großer Transaktionsdatenmengen.',
        'Entwicklung aussagekräftiger Power BI Executive Dashboards mit Echtzeit-Einblicken in Umsatz- und Margenentwicklung.',
        'Implementierung von RFM-Kundensegmentierungsmodellen in Python zur Identifikation werthaltiger Kundengruppen.',
        'Aufbau automatisierter Datenvalidierungsprüfungen zur Gewährleistung konsistenter Datenqualität.',
      ],
    },
    technologies: ['Power BI', 'Snowflake', 'SQL', 'Python', 'Data Modeling', 'Business Intelligence'],
  },
  {
    id: 'adidas-talent',
    company: 'adidas',
    role: {
      en: 'Data Analyst (Talent Programme Rotation)',
      de: 'Data Analyst (Talent Programme Rotation)',
    },
    period: {
      en: '09/2023 – 09/2025',
      de: '09/2023 – 09/2025',
    },
    location: {
      en: 'Herzogenaurach, Germany',
      de: 'Herzogenaurach, Deutschland',
    },
    highlight: {
      en: 'Omnichannel marketing campaign performance and attribution modeling.',
      de: 'Omnichannel Kampagnen-Performance und Attributions-Modellierung.',
    },
    responsibilities: {
      en: [
        'Analyzed digital campaign performance metrics (ROAS, CTR, Conversion Rate) across global retail and e-commerce channels.',
        'Built automated Power BI and Tableau dashboards tracking multi-touch attribution and marketing expenditure.',
        'Worked with stakeholders to translate commercial business questions into analytical KPIs and data requirements.',
      ],
      de: [
        'Analyse digitaler Kampagnenkennzahlen (ROAS, CTR, Conversion Rate) über globale Retail- und E-Commerce-Kanäle.',
        'Aufbau automatisierter Power BI & Tableau Dashboards zur Überwachung von Marketinginvestitionen und Touchpoints.',
        'Enge Abstimmung mit Fachbereichen zur Übersetzung geschäftlicher Fragestellungen in analytische KPIs.',
      ],
    },
    technologies: ['Power BI', 'Tableau', 'SQL', 'Python', 'Marketing Analytics', 'Excel'],
  },
  {
    id: 'schaefer-talent',
    company: 'Schäfer',
    role: {
      en: 'Generative AI Engineer (Talent Programme Rotation)',
      de: 'Generative AI Engineer (Talent Programme Rotation)',
    },
    period: {
      en: '09/2023 – 09/2025',
      de: '09/2023 – 09/2025',
    },
    location: {
      en: 'Germany',
      de: 'Deutschland',
    },
    highlight: {
      en: 'Building LLM-powered internal document retrieval and process automation solutions.',
      de: 'Entwicklung LLM-gestützter Dokumentenanalysen und Prozessautomatisierungen.',
    },
    responsibilities: {
      en: [
        'Explored and implemented Retrieval-Augmented Generation (RAG) pipelines for internal technical documentation search.',
        'Integrated Python scripting with enterprise APIs to automate unstructured text processing and summary extraction.',
      ],
      de: [
        'Konzeption und Implementierung von RAG-Pipelines (Retrieval-Augmented Generation) zur Durchsuchung technischer Dokumente.',
        'Automatisierung unstrukturierter Textverarbeitung mittels Python und modernen KI-Schnittstellen.',
      ],
    },
    technologies: ['Python', 'Generative AI', 'NLP', 'API Integration', 'Data Engineering'],
  },
  {
    id: 'icterra',
    company: 'Icterra Information Technologies',
    role: {
      en: 'Data Analyst',
      de: 'Data Analyst',
    },
    period: {
      en: '10/2022 – 05/2023',
      de: '10/2022 – 05/2023',
    },
    location: {
      en: 'Ankara / Remote',
      de: 'Ankara / Remote',
    },
    highlight: {
      en: 'Database query design, ETL processing, and client reporting.',
      de: 'Datenbankabfragen, ETL-Verarbeitung und Kunden-Reporting.',
    },
    responsibilities: {
      en: [
        'Constructed relational data pipelines and SQL queries for client analytics projects.',
        'Performed exploratory data analysis and built visual summaries in Tableau and Power BI.',
      ],
      de: [
        'Aufbau relationaler Daten-Pipelines und SQL-Abfragen für Kundenprojekte.',
        'Durchführung explorativer Datenanalysen und Erstellung visueller Berichte in Tableau und Power BI.',
      ],
    },
    technologies: ['SQL', 'PostgreSQL', 'Tableau', 'Power BI', 'ETL'],
  },
  {
    id: 'data-scientist-usa',
    company: 'Data Science Intensive Programme',
    role: {
      en: 'Data Science & Analytics Fellow',
      de: 'Data Science & Analytics Fellow',
    },
    period: {
      en: '09/2021 – 08/2022',
      de: '09/2021 – 08/2022',
    },
    location: {
      en: 'USA',
      de: 'USA',
    },
    highlight: {
      en: 'Full-time immersive training in Python data science, SQL, Machine Learning, and statistics.',
      de: 'Intensive Vollzeitausbildung in Python Data Science, SQL, Machine Learning und Statistik.',
    },
    responsibilities: {
      en: [
        'Completed over 800 hours of hands-on project work in statistical modeling, feature engineering, and predictive algorithms.',
        'Mastered Python data ecosystem (Pandas, NumPy, Scikit-learn, Seaborn) through end-to-end portfolio projects.',
      ],
      de: [
        'Abschluss von über 800 Projektstunden in statistischer Modellierung, Feature Engineering und Machine Learning.',
        'Beherrschung des Python-Data-Stacks (Pandas, NumPy, Scikit-learn, Seaborn) anhand praxisnaher Portfolioprojekte.',
      ],
    },
    technologies: ['Python', 'SQL', 'Scikit-learn', 'Pandas', 'Statistics', 'Git'],
  },
  {
    id: 'production-engineer',
    company: 'Industrial Manufacturing',
    role: {
      en: 'Industrial Engineer / Production Planning',
      de: 'Wirtschaftsingenieur / Produktionsplanung',
    },
    period: {
      en: '06/2017 – 02/2019',
      de: '06/2017 – 02/2019',
    },
    location: {
      en: 'Bursa, Turkey',
      de: 'Bursa, Türkei',
    },
    highlight: {
      en: 'Line balancing, inventory optimization, and lean manufacturing.',
      de: 'Linienausbalancierung, Bestandsoptimierung und Lean Production.',
    },
    responsibilities: {
      en: [
        'Analyzed assembly line cycle times, eliminating bottlenecks and increasing overall throughput by 12%.',
        'Managed bill of materials (BOM), production scheduling, and inventory buffer levels.',
      ],
      de: [
        'Taktzeitanalysen an Montagelinien, Beseitigung von Engpässen und Steigerung des Durchsatzes um 12%.',
        'Verwaltung von Stücklisten (BOM), Produktionsfeinplanung und Pufferbeständen.',
      ],
    },
    technologies: ['Production Planning', 'Lean Manufacturing', 'Process Optimization', 'Excel Advanced', 'BOM'],
  },
];

export const educationData: Education[] = [
  {
    id: 'thi-master',
    institution: 'Technische Hochschule Ingolstadt (THI)',
    degree: {
      en: 'M.Sc. Digital Procurement & Sustainable Supply Chain Management',
      de: 'M.Sc. Digitaler Einkauf und Nachhaltiges Supply Chain Management',
    },
    period: '10/2025 – Present',
    location: 'Ingolstadt, Germany',
    details: {
      en: 'Focus on digital supply network architecture, predictive procurement, ESG compliance, and data-driven logistics optimization.',
      de: 'Schwerpunkte: Digitale Lieferkettennetzwerke, Predictive Procurement, ESG-Compliance und datenbasierte Logistikoptimierung.',
    },
    topics: {
      en: [
        'Digital Supply Chain Networks & Architecture',
        'Advanced Supply Chain Analytics & Forecasting',
        'Sustainable Procurement & Carbon Footprint Tracking',
        'Strategic Supplier Relationship Management',
      ],
      de: [
        'Digitale Supply Chain Netzwerke & Architekturen',
        'Advanced Supply Chain Analytics & Prognosemodelle',
        'Nachhaltige Beschaffung & CO2-Footprint-Tracking',
        'Strategisches Lieferantenmanagement',
      ],
    },
  },
  {
    id: 'uludag-bachelor',
    institution: 'Bursa Uludağ Üniversitesi',
    degree: {
      en: 'B.Sc. Industrial Engineering (Wirtschaftsingenieurwesen)',
      de: 'B.Sc. Wirtschaftsingenieurwesen (Industrial Engineering)',
    },
    period: '09/2013 – 07/2018',
    location: 'Bursa, Turkey',
    details: {
      en: 'Comprehensive engineering degree combining quantitative operations research, statistics, database systems, and production management.',
      de: 'Fundiertes Studium der quantitativen Methoden, Operations Research, Statistik, Datenbanksysteme und Produktionsmanagement.',
    },
    topics: {
      en: [
        'Operations Research & Mathematical Modeling',
        'Statistical Quality Control & Design of Experiments',
        'Database Management & Information Systems',
        'Supply Chain & Production Planning',
      ],
      de: [
        'Operations Research & Mathematische Modellierung',
        'Statistische Qualitätskontrolle',
        'Datenbankmanagement & Informationssysteme',
        'Supply Chain & Produktionsplanung',
      ],
    },
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: 'supply-chain',
    title: {
      en: 'Supply Chain & Business Analytics',
      de: 'Supply Chain & Business Analytics',
    },
    skills: [
      { name: 'Supply Chain Analytics', level: 'Advanced' },
      { name: 'KPI Reporting & Dashboards', level: 'Expert' },
      { name: 'Reporting Automation', level: 'Expert' },
      { name: 'Inventory & Safety Stock Optimization', level: 'Advanced' },
      { name: 'Supplier Performance Management', level: 'Advanced' },
      { name: 'Process Bottleneck Analysis', level: 'Advanced' },
      { name: 'Procurement Controlling', level: 'Intermediate' },
    ],
  },
  {
    id: 'bi-visualization',
    title: {
      en: 'Business Intelligence & Visualization',
      de: 'Business Intelligence & Visualisierung',
    },
    skills: [
      { name: 'Power BI (DAX, Modeling)', level: 'Expert' },
      { name: 'Power Query / M', level: 'Expert' },
      { name: 'Tableau (Tableau Public, Prep)', level: 'Advanced' },
      { name: 'Microsoft Excel (VBA, Power Pivot)', level: 'Expert' },
      { name: 'Interactive Executive Reporting', level: 'Expert' },
    ],
  },
  {
    id: 'databases-sql',
    title: {
      en: 'Databases & Querying (SQL)',
      de: 'Datenbanken & SQL-Abfragen',
    },
    skills: [
      { name: 'SQL (Advanced / Window Functions / CTEs)', level: 'Expert' },
      { name: 'Snowflake', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MS SQL Server', level: 'Advanced' },
      { name: 'Databricks', level: 'Intermediate' },
      { name: 'Data Normalization & Star Schema', level: 'Expert' },
    ],
  },
  {
    id: 'programming-tools',
    title: {
      en: 'Programming, Data Science & Platforms',
      de: 'Programmierung, Data Science & Plattformen',
    },
    skills: [
      { name: 'Python (Pandas, NumPy)', level: 'Advanced' },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 'Advanced' },
      { name: 'Scikit-learn (Machine Learning)', level: 'Intermediate' },
      { name: 'SAP ERP (Material & Procurement)', level: 'Advanced' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'VS Code & Jupyter Notebooks', level: 'Advanced' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'supply-chain-reporting-transformation',
    title: {
      en: 'Supply Chain Lead-Time & Supplier Performance Transformation',
      de: 'Supply Chain Lieferzeiten- & Lieferanten-Performance-Transformation',
    },
    summary: {
      en: 'End-to-end automated Power BI analytical solution replacing 15+ disconnected spreadsheets with real-time KPI tracking for OTIF, supplier delays, and inventory buffer risk.',
      de: 'Automatisierte Power BI-Analyselösung, die über 15 getrennte Excel-Tabellen durch einheitliches Echtzeit-Tracking für OTIF, Lieferverzögerungen und Pufferbestände ersetzt.',
    },
    category: 'powerbi',
    featured: true,
    technologies: ['Power BI', 'DAX', 'SAP', 'SQL', 'Power Query', 'Data Modeling'],
    businessProblem: {
      en: 'Procurement and logistics teams spent 12+ hours every Monday manually extracting SAP transactional data, combining Excel sheets, and recalculating On-Time In-Full (OTIF) rates. Lack of early warning indicators caused frequent line stoppages due to undetected supplier delays.',
      de: 'Einkaufs- und Logistikteams wandten montags über 12 Stunden auf, um SAP-Daten manuell zu extrahieren, Tabellen zusammenzuführen und OTIF-Raten zu berechnen. Fehlende Frühwarnindikatoren führten zu unerwarteten Lieferengpässen.',
    },
    methodology: {
      en: 'Engineered an automated star-schema data model connecting SAP purchase order line items, goods receipts, and vendor master data. Implemented advanced DAX measures calculating dynamic supplier reliability indices and lead-time variability scores.',
      de: 'Entwicklung eines Sternschemas (Star Schema) zur Verknüpfung von SAP-Bestellpositionen, Wareneingängen und Lieferantenstammdaten. Implementierung fortgeschrittener DAX-Measures für Lieferzuverlässigkeitsindizes und Vorlaufzeit-Variabilitäten.',
    },
    insights: {
      en: [
        'Reduced report preparation time by 85% through scheduled automated data refresh.',
        'Identified top 3 critical supplier clusters accounting for 72% of total delay penalties.',
        'Allowed proactive replenishment scheduling, avoiding potential stockouts during peak production periods.',
      ],
      de: [
        'Reduzierung des wöchentlichen Reporting-Aufwands um 85% durch automatische Aktualisierung.',
        'Identifikation von 3 kritischen Lieferantenclustern, die für 72% aller Verzögerungen verantwortlich waren.',
        'Ermöglichung proaktiver Nachbestellungen zur Vermeidung von Produktionsstillständen.',
      ],
    },
    metrics: [
      { label: { en: 'Weekly Time Saved', de: 'Wöchentliche Zeitersparnis' }, value: '85%' },
      { label: { en: 'Supplier Tracked', de: 'Lieferanten im Tracking' }, value: '180+' },
      { label: { en: 'OTIF Improvement', de: 'OTIF-Verbesserung' }, value: '+6.4%' },
    ],
    githubUrl: 'https://github.com/barisgul/supply-chain-powerbi-analytics',
    embedType: 'powerbi',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZGVtby1zYW1wbGUiLCJ0IjoiZGVtbyJ9',
  },
  {
    id: 'customer-segmentation-rfm-sql-python',
    title: {
      en: 'Customer RFM Segmentation & Revenue Attribution Analytics',
      de: 'Kunden-RFM-Segmentierung & Umsatz-Attributionsanalyse',
    },
    summary: {
      en: 'Scalable multi-million transaction analytical pipeline built with Snowflake SQL and Python K-Means clustering, grouping customer profiles by loyalty, churn risk, and monetary value.',
      de: 'Skalierbare Analyse-Pipeline mit Snowflake SQL und Python K-Means Clustering zur Segmentierung von Kundenprofilen nach Loyalität, Abwanderungsrisiko und Geldwert.',
    },
    category: 'sql',
    featured: true,
    technologies: ['Snowflake SQL', 'Python (Pandas, Scikit-learn)', 'Window Functions', 'Power BI'],
    businessProblem: {
      en: 'The commercial team needed to identify which customer accounts were quietly churning versus expanding their spend, but raw transactional ERP tables were too massive for regular Excel analysis.',
      de: 'Das Vertriebsteam musste erkennen, welche Kundenkonten abzuwandern drohten und welche expandierten. Die Rohdaten waren jedoch zu umfangreich für Tabellenkalkulationen.',
    },
    methodology: {
      en: 'Wrote robust Snowflake SQL queries utilizing Common Table Expressions (CTEs) and NTILE / DENSE_RANK window functions to score Recency, Frequency, and Monetary tiers. Exported normalized scores to Python for K-Means cluster validation and visualized customer cohorts in Power BI.',
      de: 'Erstellung robuster Snowflake SQL-Abfragen mit CTEs und Fensterfunktionen (NTILE, DENSE_RANK) zur Berechnung von Recency-, Frequency- und Monetary-Werten. Validierung der Cluster in Python und Visualisierung der Kohorten.',
    },
    insights: {
      en: [
        'Discovered that 8% of VIP accounts generated 54% of cumulative recurring margin.',
        'Flagged an at-risk cluster of 42 high-volume accounts that had not reordered in >90 days, enabling targeted sales outreach.',
      ],
      de: [
        'Erkenntnis: 8% der VIP-Kundenkonten erwirtschafteten 54% der kumulierten wiederkehrenden Marge.',
        'Identifikation von 42 abwanderungsgefährdeten Großkunden ohne Bestellung in den letzten 90 Tagen für gezielte Vertriebsaktivitäten.',
      ],
    },
    metrics: [
      { label: { en: 'Transactions Analyzed', de: 'Analysierte Transaktionen' }, value: '2.4M+' },
      { label: { en: 'Customer Cohorts', de: 'Identifizierte Segmente' }, value: '5 Clust.' },
      { label: { en: 'Reactivated Revenue', de: 'Reaktivierter Umsatz' }, value: '+14%' },
    ],
    githubUrl: 'https://github.com/barisgul/customer-rfm-sql-analytics',
    sqlSnippets: [
      {
        title: {
          en: 'RFM Metric Calculation with SQL Window Functions',
          de: 'RFM-Berechnung mit SQL-Fensterfunktionen',
        },
        explanation: {
          en: 'Calculates the days since last order (Recency), total order frequency, and cumulative spend per customer account, partitioning cohorts into 5 quintiles.',
          de: 'Berechnet die Tage seit der letzten Bestellung (Recency), Bestellhäufigkeit und Gesamtausgaben je Kunde mit Unterteilung in 5 Quintile.',
        },
        query: `-- Step 1: Aggregate Transactional Metrics per Customer
WITH Customer_Aggregates AS (
    SELECT 
        customer_id,
        MAX(order_date) AS last_order_date,
        COUNT(DISTINCT order_id) AS total_orders,
        SUM(net_amount_eur) AS total_monetary_value
    FROM sales_orders
    WHERE order_status = 'COMPLETED'
    GROUP BY customer_id
),

-- Step 2: Calculate Recency Days from Reference Date
RFM_Calculations AS (
    SELECT
        customer_id,
        DATEDIFF('day', last_order_date, '2026-01-01'::DATE) AS recency_days,
        total_orders AS frequency,
        total_monetary_value AS monetary
    FROM Customer_Aggregates
),

-- Step 3: Segment into Quintile Ranks (1 to 5)
RFM_Scores AS (
    SELECT
        customer_id,
        recency_days,
        frequency,
        monetary,
        NTILE(5) OVER (ORDER BY recency_days ASC) AS r_score,     -- Lower days = higher score
        NTILE(5) OVER (ORDER BY frequency ASC) AS f_score,        -- Higher orders = higher score
        NTILE(5) OVER (ORDER BY monetary ASC) AS m_score          -- Higher spend = higher score
    FROM RFM_Calculations
)
SELECT 
    customer_id,
    recency_days,
    frequency,
    ROUND(monetary, 2) AS monetary_eur,
    r_score,
    f_score,
    m_score,
    CASE 
        WHEN r_score >= 4 AND f_score >= 4 AND m_score >= 4 THEN 'Champions / VIP'
        WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal Customers'
        WHEN r_score <= 2 AND f_score >= 4 THEN 'At Risk — High Value'
        WHEN r_score <= 2 AND f_score <= 2 THEN 'Lost / Inactive'
        ELSE 'Promising Potential'
    END AS customer_segment
FROM RFM_Scores
ORDER BY monetary_eur DESC
LIMIT 10;`,
        sampleResults: {
          columns: ['customer_id', 'recency_days', 'frequency', 'monetary_eur', 'r_score', 'f_score', 'm_score', 'customer_segment'],
          rows: [
            ['CUST-10492', 4, 38, '€142,850.00', 5, 5, 5, 'Champions / VIP'],
            ['CUST-20831', 9, 29, '€98,420.50', 5, 5, 5, 'Champions / VIP'],
            ['CUST-15904', 104, 31, '€86,100.00', 1, 5, 5, 'At Risk — High Value'],
            ['CUST-33120', 18, 14, '€43,900.00', 4, 4, 4, 'Loyal Customers'],
            ['CUST-40291', 145, 2, '€2,400.00', 1, 1, 1, 'Lost / Inactive'],
          ],
        },
      },
    ],
  },
  {
    id: 'inventory-safety-stock-python-simulation',
    title: {
      en: 'Safety Stock & Reorder Point Optimization Simulator',
      de: 'Sicherheitsbestand- & Meldebestand-Optimierungssimulator',
    },
    summary: {
      en: 'Statistical Python simulation calculating optimal safety stock levels, Economic Order Quantity (EOQ), and service level trade-offs across 1,200+ SKU distribution lines.',
      de: 'Statistische Python-Simulation zur Berechnung optimaler Sicherheitsbestände, optimaler Bestellmengen (EOQ) und Service-Level-Trade-offs für über 1.200 SKUs.',
    },
    category: 'python',
    featured: true,
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SciPy', 'Supply Chain Analytics'],
    businessProblem: {
      en: 'Warehouses suffered from simultaneous inventory excesses for low-turnover items and painful stockouts for volatile high-margin components due to static rule-of-thumb buffer policies.',
      de: 'Lager litten unter gleichzeitigen Überbeständen bei Langsamdrehern und Engpässen bei margenstarken Komponenten infolge statischer Faustregeln.',
    },
    methodology: {
      en: 'Modeled lead-time variability and daily demand variance using normal and Poisson distributions in Python. Simulated service levels (95% to 99%) against inventory holding capital costs to find the cost-optimal Reorder Point (ROP).',
      de: 'Modellierung von Lieferzeit- und Nachfragevariabilitäten mit Normal- und Poisson-Verteilungen in Python. Simulation von Servicegraden (95% bis 99%) im Vergleich zu Lagerhaltungskosten zur Ermittlung des kostenoptimalen Meldebestands.',
    },
    insights: {
      en: [
        'Freed €320K in trapped working capital by reducing unnecessary safety buffers on predictable suppliers.',
        'Raised customer order fill rate from 93.8% to 98.2% across key A-tier items.',
      ],
      de: [
        'Freisetzung von 320.000 € gebundenem Betriebskapital durch Reduzierung überflüssiger Pufferbestände.',
        'Steigerung des Lieferbereitschaftsgrads von 93,8% auf 98,2% für wichtige A-Artikel.',
      ],
    },
    metrics: [
      { label: { en: 'Working Capital Released', de: 'Freigesetztes Kapital' }, value: '€320K' },
      { label: { en: 'SKUs Analyzed', de: 'Analysierte SKUs' }, value: '1,200+' },
      { label: { en: 'Target Service Level', de: 'Ziel-Servicegrad' }, value: '98.2%' },
    ],
    githubUrl: 'https://github.com/barisgul/supply-chain-inventory-simulation',
    pythonCode: `import numpy as np
import pandas as pd
from scipy.stats import norm

def calculate_inventory_policy(
    daily_demand_mean: float,
    daily_demand_std: float,
    lead_time_days_mean: float,
    lead_time_days_std: float,
    target_service_level: float = 0.98,
    holding_cost_annual_pct: float = 0.20,
    unit_cost_eur: float = 45.00
) -> dict:
    """
    Computes Safety Stock and Reorder Point (ROP) accounting for both
    demand uncertainty AND supplier lead time variability.
    """
    # Z-score corresponding to target cycle service level
    z_score = norm.ppf(target_service_level)
    
    # Combined standard deviation of demand during lead time (Silver-Pyke formula)
    # sigma_DL = sqrt( L * sigma_D^2 + D^2 * sigma_L^2 )
    combined_variance = (
        lead_time_days_mean * (daily_demand_std ** 2) + 
        (daily_demand_mean ** 2) * (lead_time_days_std ** 2)
    )
    combined_std = np.sqrt(combined_variance)
    
    # Safety Stock & Reorder Point
    safety_stock = int(np.ceil(z_score * combined_std))
    expected_demand_during_lt = daily_demand_mean * lead_time_days_mean
    reorder_point = int(np.ceil(expected_demand_during_lt + safety_stock))
    
    # Financial metrics
    annual_holding_cost = safety_stock * unit_cost_eur * holding_cost_annual_pct
    
    return {
        "service_level": f"{target_service_level:.1%}",
        "safety_stock_units": safety_stock,
        "reorder_point_units": reorder_point,
        "lead_time_demand": round(expected_demand_during_lt, 1),
        "annual_holding_cost_eur": round(annual_holding_cost, 2)
    }

# Example: Fast-moving electronic assembly component
result = calculate_inventory_policy(
    daily_demand_mean=42.5,
    daily_demand_std=9.8,
    lead_time_days_mean=14.0,
    lead_time_days_std=2.5,
    target_service_level=0.98
)
print(result)`,
  },
  {
    id: 'marketing-attribution-tableau',
    title: {
      en: 'Omnichannel Marketing Campaign & Conversion Analytics',
      de: 'Omnichannel Marketing-Kampagnen & Conversion-Analytik',
    },
    summary: {
      en: 'Interactive Tableau Public dashboard breaking down multi-channel ad spend, cost per acquisition (CPA), and conversion funnels across regional retail and digital touchpoints.',
      de: 'Interaktives Tableau Public Dashboard zur Aufschlüsselung von Werbeausgaben, Akquisitionskosten (CPA) und Konversionstrichtern über Retail- und Digitalkanäle.',
    },
    category: 'tableau',
    featured: false,
    technologies: ['Tableau Public', 'SQL', 'Excel', 'Marketing Analytics'],
    businessProblem: {
      en: 'Marketing teams lacked unified visibility into channel efficiency, making it difficult to allocate seasonal ad budgets effectively across social, search, and influencer campaigns.',
      de: 'Dem Marketingteam fehlte eine einheitliche Übersicht über die Kanaleffizienz, was die saisonale Budgetallokation erschwerte.',
    },
    methodology: {
      en: 'Constructed an integrated Tableau dashboard with calculated fields for Customer Acquisition Cost (CAC) and Return on Ad Spend (ROAS). Implemented interactive parameter controls for hypothetical budget shifting.',
      de: 'Aufbau eines integrierten Tableau Dashboards mit berechneten Feldern für CAC und ROAS sowie interaktiven Parametern für Budgetszenarien.',
    },
    insights: {
      en: [
        'Reallocated 22% of underperforming paid search budget into high-intent retargeting, improving overall ROAS by 1.8x.',
        'Created a standard automated reporting cadence presented directly to marketing directors.',
      ],
      de: [
        'Umschichtung von 22% des Budgets in Retargeting-Kanäle führte zu einer 1,8-fachen Steigerung des ROAS.',
        'Etablierung eines standardisierten monatlichen Reportings für die Bereichsleitung.',
      ],
    },
    metrics: [
      { label: { en: 'ROAS Uplift', de: 'ROAS-Steigerung' }, value: '1.8x' },
      { label: { en: 'Budget Reallocated', de: 'Umgelenktes Budget' }, value: '22%' },
    ],
    githubUrl: 'https://github.com/barisgul/marketing-tableau-analytics',
    embedType: 'tableau',
    embedUrl: 'https://public.tableau.com/views/Superstore_24/Overview',
  },
];
