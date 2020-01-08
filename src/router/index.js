import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
// import AboutPage from '@/components/About'
import Template from '@/components/Template'

Vue.use(Router)
const data = {
  contact: {
    imagePath: "Contact_Us.png",
    heading: 'Contact',
    content: {
      'Contact Us': [
        {
          heading: 'Contact  Us',
          content: '11,  Short  Street,  1st  Floor, \nFlat  No.3 \nKolkata  -  700  016. \nIndia.  \nTel:  +91  33  40041691 '
        },
        {
          heading: 'Email',
          content: 'contactus@augmentium.net'
        },
        {
          subSubHeading: 'Artistic Design',
          subSubContent: 'thatlazydog.art@gmail.com'
        },
        {
          subSubHeading: 'Website Design',
          subContent: 'Vivek Jha - jhavive@gmail.com'
        },
      ],
      'Disclaimer': [
        {
          heading: 'Disclaimer',
          content: 'The  content  of  this  website  is  the  absolute  property  of  Augmentium.  Copying  any  information  or  using  the  information  for  any  other  purpose  would  entail  viewer’s  violation  of  copyright  law.  The  purpose  of  this  website  is  to  extend  maximum  possible  information  to  the  viewers.  However,  if  any  information  is  found  to  be  inadequate  and  /  or  incorrect,  please  bring  that  to  the  knowledge  of  us  and  we  shall  correct  that  without  delay.  Error,  if  any,  is  unintentional  and  should  not  be  challenged,  rather  assist  us  to  rectify  the  same.  The  disclaimer  of  this  website  is  liable  to  be  changed  from  time  to  time.'
        }
      ],
    },
    menuItems: ['Contact Us', 'Disclaimer']
  },
  team: {
    imagePath: "Team.png",    
    heading: 'Team',
    content: {
      'Partners': {
        accordians: [
          {
            accordian_header: 'Kannan  Dasaratharaman',
            accordian_body: [
              {
                // heading: 'Kannan  Dasaratharaman',
                content: 'Dasaratharaman  has  over  28  years  of  contribution  in  Sales,  Marketing  and  Business  Leadership  in  the  FMCG,  Food  and  Retail  sectors  including  many  startups. In  the  FMCG  sector,  he  has  worked  with  ITC  for  16  years  and  5  years  at  Heinz  spanning  various  roles  in  sales,  logistics  and  marketing.  He  rose  to  become  the  Head  of  Marketing  for  the  ITC  tobacco  business  and  was  the  Sales  Director  at  Heinz  in  charge  of  Domestic  sales,  CSD,  Bulk  Ghee,  Food  service,  Exports,  Supply  chain  and  the  Heinz  businesses  in  Sri  Lanka,  Bangladesh  and  Nepal.  While  at  ITC,  he  optimised  the  Supply  chain  using  linear  programming  models,  created  the  first  structured  sales  training  workshops,  launched  many  successful  brands  and  developed  a  Portfolio  model  based  on  consumer  insights.  He  was  also  responsible  for  the  sponsorship  of  the  Wills  Indian  (cricket)  Team  and  developed  a  Brand  spend  optimisation  model.  While  at  Heinz  he  crafted  the  turnaround  in  the  Sales  &  Distribution  function  and  set  global  benchmarks,  which  won  him  the  coveted  Chairman’s  Award  in  2006.   While  at  Sify,  he  headed  the  start-up  of  the  Digital  encryption  business  partnering  VeriSign  and  commenced  the  Carlsberg  business  in  India  as  MD  by  acquiring  a  brewery,  setting  up  another  and  launching  the  main  brands  besides  putting  together  the  management  team.  At  Spencer  Retail,  as  President  for  the  last  5  years,  he  has  headed  the  specialty  retail  businesses  of  Music  World,  Au  Bon  Pain  chain  of  cafes  and  BHPC  casual  apparel.  His  contributions  have  included  creating  the  business  models,  strategic  resourcing,  team  building  and  partner  management.  He  has  developed  both  strategic  and  operational  insights  into  several  businesses  and  honed  his  leadership  skills  through  these  experiences.  He  has  currently  set  out  to  be  a  Management  consultant,  educator  and  coach  and  is  a  visiting  faculty  at  leading  management  institutes.  He  has  served  on  several  industry  bodies  such  as  the  CII  and  ASCI.  He  is  on  the  boards  of  Praxis  business  school  and  peopleassess.com.  Dasaratharaman  is  a  Mechanical  engineer  from  IIT  Madras  and  a  PGDM  from  IIM  Ahmedabad  and  an  alumnus  of  the  Kellogg  School  Executive  programs. '
              },
              {
                subHeading: 'E-mail: dasaratharaman@augmentium.net',
                content: ''
              },
            ],
          },{
            accordian_header: 'Sameer  Nandwani',
            accordian_body: [
              {
                // heading: 'Sameer  Nandwani',
                content: 'Sameer  brings  over  25  years  of  experience  in  the  consulting  and  corporate  sector.  Sameer  grew  up  in  the  UK  and  went  onto  to  work  for  Deloittes  before  relocating  to  India  in  the  mid  1990s,  at  the  time  of  India  opening  up  its  economy.  Sameer  has  spent  time  in  industry,  investment  banking  and  consulting  thereafter  during  which  time  he  has  focussed  on  the  following  areas:'
              },
              {
                heading: '',
                list: [
                  'Acting  as  the  key  person  in  transactions  overseeing  all    legal,  commercial,  structuring  and  financial  issues. ',
                  'Advising  international  clients  on  entry  strategies  and  procedures  into  India ',
                  'Providing  his  significant  negotiation  skills  in  M&A  transactions ',
                  'Reviewing  operations  of  companies  covering  all  legal,  commercial  and  financial  with  a  view  to  preparing  detailed  reports  for  management  and  all  relevant  stakeholders  be  it  for  restructuring,  expansion  or  identifying  investors.',
                  'Advising  clients  on  their  internal  systems  and  corporate  structure '
                ]
              },
              {
                heading: '',
                content: 'Sameer’s  experience  covers  a  wide  ranging  number  of  industries  from  cement,  plantations,  manufacturing,  engineering,  sports,  gaming  and  entertainment.  Sameer  is  also  a  key  member  of  the  gaming  industry  promoting  “Legalization  of  Sports  Betting” within  India  and  has  advised  a  number  of  companies  both  domestic  and  international  in  this  sector '
              },
              {
                subHeading: 'E-mail: sameer@augmentium.net',
                content: ''
              }
            ]
          }
        ]
      }
      
      ,
      'Consultants': {
        accordians: [
          {
            accordian_header: 'Robinder  Sodhi (Principal  Consultant)',
            accordian_body: [
              {
                // heading: 'Robinder  Sodhi (Principal  Consultant)',
                content: 'Robinder is a seasoned banking professional with over 25 years’ experience spanning Wholesale/Corporate Banking, Banking Operations and Consumer Banking with HSBC and ABN/RBS. The experience of working in each of the 5 major banking markets in India viz Kolkata, Mumbai, Chennai, Delhi and Bengaluru, has given him unique exposure to dynamics of different markets and industry segments. As part of RBS India Bank Management Team and ALCO he was also actively involved in the Bank’s strategic planning and decision making. Given his length of experience, he has seen several economic cycles and the impact of these on client needs and resultant opportunities. Some key transactions he worked on include Aircraft financing for the national carrier, Global umbrella financing structure for a domestic pharma client, Structured Vendor Financing for a large domestic auto client, Offshore Bid Advisory and Financing for a leading Infra group and multiple other engagements with inbound and outbound clients on M&A, Equity and Lending. \n\n As Principal Consultant with Augmentium Advisors he works with start-ups and young companies across a spectrum of sectors mentoring them and helping them access equity and/or debt capital drawing from his relationships with multiple Seed and Venture funds, Family Offices and Banks. \n\n Robinder completed his BA (Economics Honours) in 1990 from Shri Ram College of Commerce, Delhi University and his MBA in 1992 from XLRI Jamshedpur.'
              },
              {
                subHeading: 'E-mail: robinder@augmentium.net',
                content: ''
              },
            ]
          },
          {
            accordian_header: 'Ravi Subramanian (Infrastructural Finance Consultant)',
            accordian_body: [
              {
                // heading: 'Ravi Subramanian (Principal  Consultant)',
                content: 'Ravi Subramanian has about 30 years experience in the corporate finance advisory market in India. Prior to setting up his own infrastructure advisory practice in 2003, he had worked with Rothschild India and Peregrine India, as head of their India transport  advisory business. Earlier, he worked across treasury, leasing and capital markets with SBI Capital Markets Limited in the early 1990s. Over the past two decades, he is focused on the financial and commercial advisory work pertaining to large infrastructure projects, especially those under a Public Private Partnership (PPP) Model.  He was involved with early road PPPs in the mid 1990s and went on to work in more than 50 projects, having seen full cycle of concessions and evolution of various bidding models. He has worked on three airports across India doing fund raising, privatisation advisory and tariff/regulatory assessments/business plan preparation, once again witnessing regulatory evolution and greenfield/brownfield models. Several thermal plants, power transmission concessions and fund raising for renewable energy also form part of the experience. In ports, his experience spans across solid, container and liquid terminals, including assisting clients right from pre-bid stage to financial closure achievement. While the bulk of the advisory work has been to Indian and multinational companies, Government entities have also been amongst his clients, thus lending a perspective of both sides of the table. Sectors currently covered include Airports, Railways, Ports, Highways, Metro rail, water, waste water treatment, desalination, renewable and thermal power, transmission etc. Specific assistance can be provided, inter alia, to international firms in the following aspects'
              },
              {
                subHeading: '',
                list: [
                  'India Sector entry strategies',
                  'Identification of Indian companies to engage with in the above sectors – varying from outright acquisition to different levels of collaboration, including those limited to specific opportunities ',
                  'Evaluating bid opportunities in privatisation/PPPs, analyse the underlying concessions and recommend projects to focus on',
                  'Financial models development covering concession/lender and indian taxation/accounting norms ',
                  'Bid advisory support including right up to quantification of the bidding variable',
                  'Decoding financial/economic regulation of sectors ',
                  'Local fund raising for debt and equity from infra financiers',
                  ]
              },
              {
                subHeading: '',
                content: 'Ravi completed his PGDM from IIM Calcutta in 1988. He is well connected to several corporates as well as an extensive eco-system of dependable specialists and consultants in various domains and sectors.'
              },
              {
                subHeading: 'E-mail: ravi@augmentium.net',
                content: ''
              },
            ]
          },
          {
            accordian_header: 'Sanjay Prasad (Principal  Consultant)',
            accordian_body: [
              {
                // heading: 'Sanjay Prasad (Principal  Consultant)',
                content: 'Sanjay is a Mechanical Engineer from IIT, Kanpur and an MBA from IIM, Ahmedabad. He has also attended Strategy Programs at ISB, Hyderabad. He has almost 35 years of experience in business strategy, acquisitions, deal structuring, corporate development, sales, marketing and supply chain in healthcare, media, telecom and consumer durable sectors with leading Companies including IQ City Foundation (4 years), Medica Synergie (7 years), Times of India (6 years), Hindustan Times (2 years), Ananda Bazar Patrika (4 years), South Korea Telekom (3 years) and Godrej (5 years).  Was CEO of  IQ City Foundation in the last assignment. The Foundation has promoted a Medical College (intake of 150 MBBS students per year), a 800 bed Teaching Hospital and a Nursing College at a 100 acre campus at Durgapur.  As CEO, responsible for ensuring delivery of the agreed business plans for the Education and Healthcare businesses. Successfully turned around the performance to an EBIDTA positive venture. Prior to this, functioned as the CEO of Medica Superspecialty Hospital; a 350 bed superspecialty hospital at Kolkata, promoted by Medica Synergie, a healthcare startup venture in Eastern India, focused on providing quality and affordable health services. Was also responsible for the Strategy and   Business expansion function for the Group and meeting the expectations of the Private Equity Investors. Also have over 12 years of rich experience, at a senior level, in the Media Industry and as CEO, ABP TV Pvt. Ltd., led the Strategy function of ABP Group in the last assignment. Initiated the Groups diversifications into Television, Radio and Internet space. Specialties: Business Strategy, Deal Structuring, Profit Centre Management, Sales, Marketing, Brand Management, Supply Chain '
              },
              {
                subHeading: 'E-mail: sanjay@augmentium.net',
                content: ''
              },
            ]
          },
          {
            accordian_header: 'Anjali Prasad (Corporate Law Consultant)',
            accordian_body: [
              {
                // heading: 'Anjali Prasad (Corporate Law Consultant)',
                content: 'Anjali Prasad brings 30 years of experience in the area of Indian corporate laws where she worked with the ITC Group (a leading corporate house in India) in various roles in the corporate secretarial function, including as Company Secretary of some of ITC’s financial subsidiary companies. While in ITC, she was responsible for compliance with statutory requirements pertaining to the Secretarial Department, including those under the Companies Act, the Listing Agreement, SEBI Takeover Regulations, and the SEBI (Listing Obligations and Disclosure) Requirements) Regulations. Anjali was also instrumental in the drafting and implementation of the Employee Stock Option Schemes of ITC, as well as administration of exercise of Options under the Schemes in accordance with the SEBI (Share Based Employee Benefits) Regulations, and related compliances. She was also involved in drafting the ITC Code of Conduct for Prevention of Insider Trading, and related compliances under the SEBI (Prohibition of Insider Trading) Regulations. Being part of one India’s foremost multi-business enterprise having diverse businesses, Anjali has also experience in the area of corporate governance, including governance structure and processes thereunder.'
              },
              {
                subHeading: 'E-mail: anjali@augmentium.net',
                content: ''
              },
            ]
          },
        ]
      },
      'Strategic Alliance': {
        accordians: [
          {
            accordian_header: 'Inroads',
            accordian_body: [
              {
                // heading: 'Inroads',
                imagePath: "inroads.png",
                content: 'We equip organizations to achieve great performance and meaningful growth on critical leadership skills, supported by high-energy workshops, coaching and consulting'
              },
              {
                subHeading: ' ',
              }
            ]
          },
          {
            accordian_header: 'Chunder Khator & Associates',
            accordian_body: [
              {
                // heading: 'Chunder Khator & Associates',
                content: 'Chunder Khator & Associates is a 24 years old firm of Chartered Accountants having 10 partners and over 40 qualified, semi-qualified staff, articles and paid assistants. The Firm has a multi-disciplinary team of professionals comprising of Chartered Accountant, Company Secretary, Cost & Management Accountant, empanelled Engineer and Legal professionals. The Firm has headquarters in Kolkata and branches in Mumbai and Singapore. The Firm’s mission is to deliver top-notch quality services while adding value and providing actionable solutions. The Firm provides wide range of professional services including'
              },
              {
                list: [
                  'Assurance (Audit, Internal Audit, Statutory Compliance, Due Diligence) ',
                  'Advisory (Business Valuation) ',
                  'Tax Consulting & Compliance Services',
                  'Knowledge Process Outsourcing (Payroll. Book Keeping, Tax Returns preparation)',
                  'Corporate Training &Workshop',
                  'Human Resources (recruitment, policy setting)'
      
                ]
              },
              {
                subHeading: 'For more details visit: https://chunderkhator.com/',
              }
            ]
          }
        ]
      }
    },
    // menuItems: ['Kannan  Dasaratharaman (Partner)', 'Sameer  Nandwani (Partner)', 'Robinder  Sodhi \n (Principal Consultant)', 'Ravi Subramanian \n (Infrastructural Finance Consultant)']
    menuItems: ['Partners', 'Consultants', 'Strategic Alliance']
  },
  about: {
    imagePath: "About.png",
    heading: 'About',
    content: {
      'Company Profile': [
        {
          heading: 'Company  Profile ',
          content: 'Augmentium  is  a  specialized  consultancy  firm  that  manoeuvres  companies  to  develop,  implement  and  monitor  India  and  International  based  Business  strategies.  We  work  to  design  strategies  that  are  needed  to  effectively  conceptualize  and  implement  plans  for  companies  to  have  a  fresh  start  either  in  India  or  Indian  Companies  to  set  up  effectively  in  foreign  countries.  The  partners  and  the  team  enrich  the  Augmentium  platform  by  offering  a  balanced  richness  of  corporate  pragmatism,  financial  discipline,  legal  perspective  and  an  International  overview.'
        }
      ],
      'Vision Mission': [
        {
          heading: 'Vision',
          content: 'Augmentium  envisions  being  a  reliable  consultancy  operation  firm  that  believes  in  building  partnerships  by  making  effective  contribution  for  client  set  ups.  We  aim  at  management  services  of  paramount  standards.  We  intend  doing  this  by  providing  services  that  are  highly  customized,  professional  and  exclusively  meant  for  giving  high  standards  of  operations  for  the  customers.  '
        },
        {
          heading: 'Mission',
          content: 'Augmentium  is  guided  by  its  relentless  focus  on  key  imperative  services.  At  Augmentium  we  are  constantly  implementing  our  ideas,  efforts  to  achieve  our  vision.  In  doing  this,  we  are  confident  to  deliver  operational  excellence  in  every  part  of  our  service.  Further,  all  our  long-term  strategies  and  short  term  actions  are  part  of  our  core  values  that  is  shared  by  each  and  every  associate  of  our  organization.  '
        }
      ]
    },
    menuItems: ['Company Profile', 'Vision Mission']
  },
  approach: {
    imagePath: "Approach.png",
    heading: 'Approach ',
    content: {
      'India  Entry  Strategy': [
        {
          heading: 'India  Entry  Strategy',
          content: 'For  Companies  entering  into  India,  the  workings  of  the  Country  can  be  a  maze  for  the  incumbent  Company.  Our  Corporate  Advisory  Services  unit  provides  specific  services  from  a  diverse  spectrum  of  skill  sets.  At  Augmentium  we  analyse  the  requirements  of  the  clients  having  intentions  of  setting  up  a  new  company  in  India.  Augmentium  conjures,  evaluates,  implements  and  manages  strategies  to  have  a  smooth  set  up  plan  in  India.  We,  at  Augmentium,  take  care  of  all  your  requirements  and  coordinate  with  all  relevant  Organisations  /  Authorities  to  facilitate  a  successful  implementation  of  the  Venture.  The  aspects,  which  we  consider,  and  advise  upon,  are:  '
        },
        {
          subHeading: 'Legal  Consideration ',
          list: [
            'Any  Governmental  restrictions  on  entering  into  India',
            'Legal  considerations  for  a  particular  Sector ',
            'Joint  venture  Agreements  (Equity,  strategic  or  Technical)',
            'Corporate  structuring ',
            'International  Tax  planning',
            'Regulatory  management  (such  as  Tax  Treaties,  Foreign  investment  policy,  Company  law  matters.'
          ]
        },
        {
          subHeading: 'Market  Research ',
          list: [
            'Advising  on  the  sectoral  data  and  market  feedback  required  for  the  Venture. ',
            'Framing  an  optimum  market  research  programme ',
            'Advising  on  mapping  and  brand  building  avenues'
          ]
        },
        {
          subHeading: 'Identification  of  Partners',
          list: [
            'Relevance  and  necessity  of  Equity  partners ',
            'Consideration  of  appropriate  strategic  partners',
            'Identification  of  premium  technical  partners ',
            'Negotiating  and  framing  the  most  appropriate  Corporate  structure  with chosen  partners '
          ]
        },
        {
          subHeading: 'Preparation  of  Financial  and  Business  Plans ',
          list: [
            'Detailed  analysis  of  sector  performance ',
            'Thorough  study  of  competitors ',
            'Perspective  on  future  outlook ',
            'Comprehensive  financial  plan  highlighting  investment  requirements,  profit  levels,  break-even  analysis  ',
            'Assisting  in  fund  raising  requirements '
          ]
        },
        {
          subHeading: 'Monitoring  and Implementation ',
          list: [
            'Overseeing  actual  setup  of  the  venture',
            'Identifying  appropriate  key  Staff ',
            'Preparation  of  Budgets ',
            'Reporting  &  overseeing  ofactual  performance '
          ]
        }
      ],
      'International  Expansion': [
        {
          heading: 'International  Expansion',
          content: 'In  this  global  economy  Indian  Organisations  are  seeking  opportunities  outside  their  own  shores.  Augmentium,  with  its  International  affiliations  can  facilitate  a  successful  conclusion  of  such  ventures. '
        },
        {
          subHeading: '',
          list: [
            'Identification  of  Countries  where  foreign  investment  is  seeked',
            'Sector  analysis  where  opportunities  exist',
            'Focus  on  ventures  which  may  be  approached  at  a  discount',
            'Identification  of  appropriate  International  partners',
            'Consideration  of  Regulatory  and  Tax  implications',
            'Financial  planning  and  structuring',
            'Assisting  in  Fund  raising  Requirements'
          ]
        }
      ],
      'Feasibility  Reports': [
        {
          heading: 'Feasibility  Reports ',
          content: 'For  any  venture,  an  Organisation  needs  to  fully  understand  the  sector  in  terms  of  commercial,  financial,  legal  and  international  considerations.  Augmentium  would  always  advise  that,  as  a  prelude  to  deciding  upon  setting  up  of  a  venture,  a  comprehensive  feasibility  report  is  prepared  and  analysed.  Augmentium,  through  its  strong  comprehensive  infrastructure  prepares  the  document  which  can  be  relied  upon  as  a  stepping  stone  to  setup.  The  Report  considers  the  following  aspects: '
        },
        {
          subHeading: '',
          list: [
            'Complete  commercial  review  of  the  Industry',
            'Consideration  of  the  economic  parameters  prevailing',
            'Detailed  analysis  of  the  National  and  International  scenario',
            'Thorough  overview  of  the  legal  policies',
            'Succinct  analysis  of  the  financial  scenario  of  the  industry'
          ]
        }
      ],
      'Corporate  and  Financial  Management': [
        {
          heading: 'Corporate  and  Financial  Management',
          content: 'Companies  at  times  require  independent  analysis  of  their  Organisation  and  advise  on  optimization  of  their  performance.  Augmentium  guides  Companies  with  specialist  strategies  for  optimization  comprising  of. '
        },
        {
          subHeading: '',
          list: [
            'Turnaround  strategy  for  under  performing  Companies  and  preparing  a  strategic  plan  which  addresses  the  challenges  being  faced.',
            'Restructuring  advice  –  consideration  of  the  financial  structure  of  the  Organisation  to  ensure  optimum  utilization  of  Equity  and  Debt  funds.',
            'Management  strategy  –  liaison  with  the  Management  team  to  identify  new  opportunities  and  recommending  appropriate  strategy  to  maximize  shareholding  value.'
          ]
        }
      ],
      'Corporate  Finance': [
        {
          heading: 'Corporate  Finance',
          content: 'The  key  and  ongoing  aspect  for  any  Organisation  is  fund  optimization,  be  it  equity  or  debt.  Augmentium,  through  its  resources  can  quickly  and  efficiently  identify  the  right  structure  for  the  Organisation  by  evaluating  the  following:  '
        },
        {
          subHeading: '',
          list: [
            'Analysing  and  re-evaluating  the  prevailing  equity  /  debt  structure',
            'Identifying  and  assisting  in  raising  new  capital',
            'Structuring  of  debt  instruments',
            'Advising  on  key  issues  of  proposed  finance  and  structuring  of  the  same',
            'Coordinating  with  Authorities  for  documentation  compliance'
          ]
        }
      ],
      'Management  Information  Systems': [
        {
          heading: 'Management  Information  Systems',
          content: 'Integral  to  any  Organisation’s  performance  is  an  efficient  and  online  Management  Information  System.  Augmentium  critically  analyses  the  systems  operating  and  advises  Companies  on  action  necessary  for  effective  business  decision  making  through  a  very  practical  approach  by  way  of  undertaking, '
        },
        {
          subHeading: '',
          list: [
            'Comprehensive  System  study',
            'Full  understanding  of  Company  requirements',
            'Streamlining  of  operations  and  Management  information  flow',
            'Development  of  Software,  as  deemed  appropriate',
            'Advice  on  Hardware  requirements.'
          ]
        }
      ],
      'M&amp;A  Advisory  Services': [
        {
          heading: 'M&A  Advisory  Services',
          content: 'The  M&A  Advisory  service  of  Augmentium  is  dedicated  and  focused  on  facilitating  and  expediting  the  merger  and  acquisition  process.  Our  experience  of  the  local  and  international  market  enables  us  to  have  a  successful  closure  of  all  the  tractions.  We  have  the  capacity  to  target  alliances  globally.  We  also  try  to  channelize  the  company’s  capital  and  time  in  an  efficient  and  disciplined  manner,  centrally  focusing  on  keeping  your  company’s  benefit  primordial.  We  provide  end  to  end  solutions.  Our  M&A  Services  can  therefore  be  categorized  into  the  following  sections '
        },
        {
          subHeading: '',
          list: [
            'Buy/Sell  Advisory  services',
            'Business  Modelling  after  evaluating  the  risks  and  insurances  for  mergers',
            'Valuations',
            'Tax  Due  Diligence:  We  offer  services  pertaining  to  tax  guidance',
            'Legal  Due  Diligence',
            'Post  merger  integration  services'
          ]
        }
      ],
      'Marketing and Sales Advisory':[
        {
          heading: 'M&A  Advisory  Services',
          content: 'Augmentium provides in depth Marketing & Sales consultancy services in the following aspects, areas and sectors:'
        },
        {
          subHeading: '1. FMCG / Food / Allied sectors:',
          list: [
            'Designing the Business model for Indian markets',
            'Key strategies, structures and resourcing in Marketing and Sales &amp; Distribution',
            'Go to Market strategies',
            'Marketing strategies and processes including Brand Audits / strategies',
            'Product, Packaging and Pricing strategies and processes',
            'Selling and Distribution strategies and processes',
            'Sales force management',
            'Promotion management',
            'Modern trade management',
            'Implementation and review mechanisms',
          ]
        },
        {
          subHeading: '2. Retail',
          list: [
            'India Entry strategies',
            'Designing the business model',
            'Format strategies',
            'Location and sizing strategies',
            'Store EBITDA modeling',
            'Operations review protocols',
            'Merchandising strategies',
            'Marketing, Promotion and CRM strategies',
            'HR strategies',
          ]
        }
      ]
    },
    menuItems: [
      'India  Entry  Strategy',
      'International  Expansion',
      'Feasibility  Reports',
      'Corporate  and  Financial  Management',
      'Corporate  Finance',
      'Management  Information  Systems',
      'M&A  Advisory  Services',
      'Marketing and Sales Advisory'
    ]
  },
  client: {
    imagePath: "Investments.png",
    heading: 'Clients',
    content: {
      'CORPORATE ADVISORY': [ 
        {
          subHeading: 'Sportech Plc',
          content: 'A global based sports betting and gaming company . The company entered into India as the first major international company of its kind in gaming sector to enter India and formed a JV with a leading Indian conglomerate . Advice was provided on the India entry strategy, selection of the JV partner, overseeing of the Indian operations on behalf of the company.'
        },
        {
          subHeading: 'Ambootia Group',
          content: 'A leading organic tea group within India who have been guided on multiple aspects such as international JV’s, restructuring , MIS and corporate strategy'
        },
        {
          subHeading: 'Nicco Park',
          content: 'The leading theme park within India were aided on international and domestic collaborations and advisory services on their internal operations'
        },
      ],
      'M&amp;A AND RESTRUCTURING': [
        {
          subHeading: 'International Combustion Ltd',
          content: 'A leading engineering company within India who were advised on valuation and strategy with respect to a vertical within the company'
        },
        {
          subHeading: 'Nicco Corporation',
          content: 'Well established Engineering Company- Formulated the restructuring plan for the company for approval by the Company’s Bank Lending Consortium '
        }
      ],
      'MARKETING AND SALES ADVISORY': [
        {
          subHeading: 'Tata Motors',
          content: 'One of Tata’s Group flagship companies- Provided retail, selling and distribution strategy at the company’s Marketing Conclaves as well being Key Note Speakers at the Dealers Conferences'
        },
        {
          subHeading: 'Tanishq',
          content: 'The leading Retail Jewellery Venture from the House of Tata’s- Provided detailed guidance and methodology  on the staff incentive schemes at the retail level'
        },
        {
          subHeadings: 'Tata Steel',
          content: 'One of  Tata’s Group foremost companies- extensive marketing advisory sessions combined with coaching interventions for the Finance team of the company'
        },
        {
          subHeading: 'Toyata and Hyundai',
          content: 'Held guidance sessions for the company’s dealers on Customer Centricity and Satisfaction'
        },
        {
          subHeading: 'Spencers',
          content: 'The retails venture of the Sanjiv Goenka Group- Holding series programmes of retailing workshops for the store level teams'
        },
        
      ],
      'LEADERSHIP AND CORPORATE MENTORING': [
        {
          subHeading: 'Aditya Birla Group',
          content: 'Leading Corporate House-Executive coaching across the group’s companies, Hindalco, Idea and others'
        },
        {
          subHeading: 'RS Software',
          content: 'Respected IT Company- Ran Leadership Development Programmes for the Senior Management of the Company'
        }
      ]
    },
    menuItems: ['CORPORATE ADVISORY', 'M&A AND RESTRUCTURING', 'MARKETING AND SALES ADVISORY', 'LEADERSHIP AND CORPORATE MENTORING']
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: Template,
      props: data.about
    },
    {
      path: '/approach',
      name: 'Approach',
      component: Template,
      props: data.approach
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Template,
      props: data.contact
    },
    {
      path: '/team',
      name: 'Team',
      component: Template,
      props: data.team
    },
    {
      path: '/invetment',
      name: 'Client',
      component: Template,
      props: data.client
    }
  ]
})
