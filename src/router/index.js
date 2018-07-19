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
        }
      ],
      'Disclaimer': [
        {
          heading: 'Disclaimer',
          content: 'The  content  of  this  website  is  the  absolute  property  of  Augmentium.  Copying  any  information  or  using  the  information  for  any  other  purpose  would  entail  viewer’s  violation  of  copyright  law.  The  purpose  of  this  website  is  to  extend  maximum  possible  information  to  the  viewers.  However,  if  any  information  is  found  to  be  inadequate  and  /  or  incorrect,  please  bring  that  to  the  knowledge  of  us  and  we  shall  correct  that  without  delay.  Error,  if  any,  is  unintentional  and  should  not  be  challenged,  rather  assist  us  to  rectify  the  same.  The  disclaimer  of  this  website  is  liable  to  be  changed  from  time  to  time.'
        }
      ]
    },
    menuItems: ['Contact Us', 'Disclaimer']
  },
  team: {
    imagePath: "Team.png",    
    heading: 'Team',
    content: {
      'Kannan  Dasaratharaman (Partner)': [
        {
          heading: 'Kannan  Dasaratharaman (Partner)',
          content: 'Dasaratharaman  has  over  28  years  of  contribution  in  Sales,  Marketing  and  Business  Leadership  in  the  FMCG,  Food  and  Retail  sectors  including  many  startups. In  the  FMCG  sector,  he  has  worked  with  ITC  for  16  years  and  5  years  at  Heinz  spanning  various  roles  in  sales,  logistics  and  marketing.  He  rose  to  become  the  Head  of  Marketing  for  the  ITC  tobacco  business  and  was  the  Sales  Director  at  Heinz  in  charge  of  Domestic  sales,  CSD,  Bulk  Ghee,  Food  service,  Exports,  Supply  chain  and  the  Heinz  businesses  in  Sri  Lanka,  Bangladesh  and  Nepal.  While  at  ITC,  he  optimised  the  Supply  chain  using  linear  programming  models,  created  the  first  structured  sales  training  workshops,  launched  many  successful  brands  and  developed  a  Portfolio  model  based  on  consumer  insights.  He  was  also  responsible  for  the  sponsorship  of  the  Wills  Indian  (cricket)  Team  and  developed  a  Brand  spend  optimisation  model.  While  at  Heinz  he  crafted  the  turnaround  in  the  Sales  &  Distribution  function  and  set  global  benchmarks,  which  won  him  the  coveted  Chairman’s  Award  in  2006.   While  at  Sify,  he  headed  the  start-up  of  the  Digital  encryption  business  partnering  VeriSign  and  commenced  the  Carlsberg  business  in  India  as  MD  by  acquiring  a  brewery,  setting  up  another  and  launching  the  main  brands  besides  putting  together  the  management  team.  At  Spencer  Retail,  as  President  for  the  last  5  years,  he  has  headed  the  specialty  retail  businesses  of  Music  World,  Au  Bon  Pain  chain  of  cafes  and  BHPC  casual  apparel.  His  contributions  have  included  creating  the  business  models,  strategic  resourcing,  team  building  and  partner  management.  He  has  developed  both  strategic  and  operational  insights  into  several  businesses  and  honed  his  leadership  skills  through  these  experiences.  He  has  currently  set  out  to  be  a  Management  consultant,  educator  and  coach  and  is  a  visiting  faculty  at  leading  management  institutes.  He  has  served  on  several  industry  bodies  such  as  the  CII  and  ASCI.  He  is  on  the  boards  of  Praxis  business  school  and  peopleassess.com.  Dasaratharaman  is  a  Mechanical  engineer  from  IIT  Madras  and  a  PGDM  from  IIM  Ahmedabad  and  an  alumnus  of  the  Kellogg  School  Executive  programs. '
        },
        {
          subHeading: 'E-mail: dasaratharaman@augmentium.net',
          content: ''
        }
      ],
      'Sameer  Nandwani (Partner)': [
        {
          heading: 'Sameer  Nandwani (Partner)',
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
      ],
      'Robinder  Sodhi \n (Principal Consultant)': [
        {
          heading: 'Robinder  Sodhi (Principal  Consultant)',
          content: 'Robinder is a seasoned banking professional with over 25 years’ experience spanning Wholesale/Corporate Banking, Banking Operations and Consumer Banking with HSBC and ABN/RBS. The experience of working in each of the 5 major banking markets in India viz Kolkata, Mumbai, Chennai, Delhi and Bengaluru, has given him unique exposure to dynamics of different markets and industry segments. As part of RBS India Bank Management Team and ALCO he was also actively involved in the Bank’s strategic planning and decision making. Given his length of experience, he has seen several economic cycles and the impact of these on client needs and resultant opportunities. Some key transactions he worked on include Aircraft financing for the national carrier, Global umbrella financing structure for a domestic pharma client, Structured Vendor Financing for a large domestic auto client, Offshore Bid Advisory and Financing for a leading Infra group and multiple other engagements with inbound and outbound clients on M&A, Equity and Lending. \n\n As Principal Consultant with Augmentium Advisors he works with start-ups and young companies across a spectrum of sectors mentoring them and helping them access equity and/or debt capital drawing from his relationships with multiple Seed and Venture funds, Family Offices and Banks. \n\n Robinder completed his BA (Economics Honours) in 1990 from Shri Ram College of Commerce, Delhi University and his MBA in 1992 from XLRI Jamshedpur.'
        },
        {
          subHeading: 'E-mail: robinder@augmentium.net',
          content: ''
        }
      ]
    },
    menuItems: ['Kannan  Dasaratharaman (Partner)', 'Sameer  Nandwani (Partner)', 'Robinder  Sodhi \n (Principal Consultant)']
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
      ]
    },
    menuItems: [
      'India  Entry  Strategy',
      'International  Expansion',
      'Feasibility  Reports',
      'Corporate  and  Financial  Management',
      'Corporate  Finance',
      'Management  Information  Systems',
      'M&A  Advisory  Services'
    ]
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
    }
  ]
})
