<template>
  <div v-bind:id="($route.path==='/')?'app':'app-inside'">
    <!-- <img src="./assets/logo.png"> -->
    <div v-if="$route.path!=='/'" id="navigation">
      <ul class="navlist">
        <li v-bind:class="[$route.path==='/' ? 'actives' : '', 'nav-items']">
          <router-link to="/" exact><div><img class="nav-image" src="./assets/images/Home.png"/><br/>Home</div></router-link>
        </li>
        <li v-bind:class="[$route.path==='/about' ? 'actives' : '', 'nav-items']">
          <router-link to='about'><div><img class="nav-image" src="./assets/images/About.png"/><br/>About</div></router-link>
        </li>
        <li v-bind:class="[$route.path==='/approach' ? 'actives' : '', 'nav-items']">
          <router-link to='approach'><div><img class="nav-image" src="./assets/images/Approach.png"/><br/>Approach</div></router-link>
        </li>
        <li v-bind:class="[$route.path==='/team' ? 'actives' : '', 'nav-items']">
          <router-link to='team'><div><img class="nav-image" src="./assets/images/Team.png"/><br/>Team</div></router-link>
          <!-- <router-link :to="'team'" replace><img class="nav-image" src="./assets/images/Team.png"/></router-link> -->
        </li>
        <li v-bind:class="[$route.path==='/' ? 'actives' : '', 'nav-items']">
          <router-link to='invetment'><div><img class="nav-image" src="./assets/images/Investments.png"/><br/>Investments</div></router-link>
        </li>
        <li v-bind:class="[$route.path==='/news' ? 'actives' : '', 'nav-items']">
          <router-link to='news'><div><img class="nav-image" src="./assets/images/News.png"/><br/>News</div></router-link>
        </li>
        <li v-bind:class="[$route.path==='/contact' ? 'actives' : '', 'nav-items']">
          <router-link to='contact'><div><img class="nav-image" src="./assets/images/Contact_Us.png"/><br/>Contact Us</div></router-link>
        </li>
      </ul>
      <div class="rightMenuItem"><img src="./assets/images/logo.png" id="logoimgMenu"/></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      contact: {
        content: [
          {
            heading: 'Contact  Us',
            content: '11,  Short  Street  1st  Floor,  Flat  No.3  Kolkata  -  700  016.  India.  Tel:  +91  33  40041691 '
          },
          {
            heading: 'Website',
            content: 'https://www.augmentium.in'
          }
        ],
        menuItems: []
      },
      team: {
        content: {
          'Kannan  Dasaratharaman': [
            {
              heading: 'Kannan  Dasaratharaman',
              content: 'Dasaratharaman  has  over  28  years  of  contribution  in  Sales,  Marketing  and  Business  Leadership  in  the  FMCG,  Food  and  Retail  sectors  including  many  startups.In  the  FMCG  sector,  he  has  worked  with  ITC  for  16  years  and  5  years  at  Heinz  spanning  various  roles  in  sales,  logistics  and  marketing.  He  rose  to  become  the  Head  of  Marketing  for  the  ITC  tobacco  business  and  was  the  Sales  Director  at  Heinz  in  charge  of  Domestic  sales,  CSD,  Bulk  Ghee,  Food  service,  Exports,  Supply  chain  and  the  Heinz  businesses  in  Sri  Lanka,  Bangladesh  and  Nepal.  While  at  ITC,  he  optimised  the  Supply  chain  using  linear  programming  models,  created  the  first  structured  sales  training  workshops,  launched  many  successful  brands  and  developed  a  Portfolio  model  based  on  consumer  insights.  He  was  also  responsible  for  the  sponsorship  of  the  Wills  Indian  (cricket)  Team  and  developed  a  Brand  spend  optimisation  model.  While  at  Heinz  he  crafted  the  turnaround  in  the  Sales  &  Distribution  function  and  set  global  benchmarks,  which  won  him  the  coveted  Chairman’s  Award  in  2006.While  at  Sify,  he  headed  the  start-up  of  the  Digital  encryption  business  partnering  VeriSign  and  commenced  the  Carlsberg  business  in  India  as  MD  by  acquiring  a  brewery,  setting  up  another  and  launching  the  main  brands  besides  putting  together  the  management  team.  At  Spencer  Retail,  as  President  for  the  last  5  years,  he  has  headed  the  specialty  retail  businesses  of  Music  World,  Au  Bon  Pain  chain  of  cafes  and  BHPC  casual  apparel.  His  contributions  have  included  creating  the  business  models,  strategic  resourcing,  team  building  and  partner  management.    He  has  developed  both  strategic  and  operational  insights  into  several  businesses  and  honed  his  leadership  skills  through  these  experiences.  He  has  currently  set  out  to  be  a  Management  consultant,  educator  and  coach  and  is  a  visiting  faculty  at  leading  management  institutes.  He  has  served  on  several  industry  bodies  such  as  the  CII  and  ASCI.    He  is  on  the  boards  of  Praxis  business  school  and  peopleassess.com.  Dasaratharaman  is  a  Mechanical  engineer  from  IIT  Madras  and  a  PGDM  from  IIM  Ahmedabad  and  an  alumnus  of  the  Kellogg  School  Executive  programs. '
            }
          ],
          'Sameer  Nandwani': [
            {
              heading: 'Sameer  Nandwani',
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
              content: 'Sameer’s  experience  covers  a  wide  ranging  number  of  industries  from  cement,  plantations,  manufacturing,  engineering,  sports,  gaming  and  entertainment.  Sameer  is  also  a  key  member  of  the  gaming  industry  promoting  “Legalization  of  Sports  Betting”within  India  and  has  advised  a  number  of  companies  both  domestic  and  international  in  this  sector '
            }
          ],
          'Robinder  Sodhi': [
            {
              heading: 'PRINCIPAL  CONSULTANT',
              content: ''
            },
            {
              heading: 'Robinder  Sodhi',
              content: 'Robinder  is  a  well  qualified  and  seasoned  banking  professional  with  appx  25  years’experience  spanning  Wholesale/Corporate  Banking,  Banking  Operations  and  Consumer  Bank  with  HSBC  and  ABN/RBS  in  5  different  cities  in  India  ie  Calcutta,  Mumbai,  Chennai,  Delhi  and  Bangalore.  He  has  been  a  strong  performer  in  his  various  roles  and  has  built  a  credible  reputation  among  colleagues,  peers  and  clients.  Along  with  a  good  understanding  of  financial  markets  he  has  developed  some  trusted  client  relationships.  As  part  of  RBS  India  Bank  Management  Team  and  ALCO  he  has  also  been  actively  involved  in  the  Bank’s  strategic  planning  and  decision  making.  He  has  been  a  top  performer  with  track  record  of  exceeding  set  goals  and  expectations  and  has  successfully  managed  various  geographies  and  client  segments  within  the  Wholesale/Corporate  Bank.    The  experience  of  working  in  each  of  the  5  major  banking  markets  in  India  has  given  him  unique  exposure  to  dynamics  of  different  markets  and  industry  segments.  He  has  initiated/developed  banking  relationships  with  some  key  counterparties  which  have  over  time  yielded  repeat  mandates  for  the  Bank.  Given  his  length  of  experience,  he  has  seen  several  economic  cycles  and  the  impact  of  these  on  client  needs  and  resultant  opportunities,  while  keeping  the  Bank  protected  from  heightened  risk.  He  was  nominated  in  2007  to  ABN  AMRO’s  Global  High  Potentials  Programme  as  part  of  which  attended  a  series  of  workshops  and  Masterclasses  in  Hong  Kong  and  London.  Leadership,  People  Management  and  high  quality  Client  Engagement  have  regularly  been  cited  as  strengths  in  feedback  from  line  management  and  clients.  Robinder  led  his  team  to  ‘Team  of  the  Year’  recognition  in  successive  years  in  the  Bank.  In  his  previous  roles,  with  HSBC  and  ABN  AMRO/RBS,  he  was  responsible  for  Coverage  of  large  domestic  and  MNC  clients.  Some  key  transactions  he  worked  on  included  Aircraft  financing  for  the  national  carrier  and  ECA  financing  for  a  large  manufacturing  company.  He  was  also  responsible  for  a  breakthrough  transaction  with  one  of  India’s  largest  corporate  houses.  Robinder’s  earliest  years  were  in  Operations/branch  management  where  he  led  a  team  of  25,  managing  one  of  HSBC’s  most  high  profile  branches  in  Calcutta.  A  notable  achievement  at  the  time  was  the  successful  transition  to  an  entirely  new  operating  system  with  minimal  customer  disruption.    In  other  experience,  Robinder  ran  a  sole  road-show  in  Geneva  and  Zurich  to  ABN  AMRO  Switzerland’s  corporate  clients  showcasing  India  as  an  investment  destination  and  the  Bank  as  a  trusted  partner.  Over  the  years  he  has  called  on  Regional/Global  treasuries  of  MNC  clients  in  Germany,  Singapore,  and  Hong  Kong  to  market  for  business  in  India.  He  has  participated  in  and  benefitted  from  numerous  training  programmes  including  on  Leadership  conducted  by  London  Business  School  Training,  Hong  Kong.'
            }
          ]
        },
        menuItems: ['Kannan  Dasaratharaman', 'Sameer  Nandwani', 'Robinder  Sodhi']
      },
      about: {
        content: {
          'Company Profile': [
            {
              heading: 'Company  Profile ',
              content: 'Augmentium  is  a  specialized  consultancy  firm  that  manoeuvres  companies  to  develop,  implement  and  monitor  India  and  International  based  Business  strategies.  We  work  to  design  strategies  that  are  needed  to  effectively  conceptualize  and  implement  plans  for  companies  to  have  a  fresh  start  either  in  India  or  Indian  Companies  to  set  up  effectively  in  foreign  countries.  The  partners  and  the  teamenrich  theAugmentium  platform  by  offering  a  balanced  richness  of  corporate  pragmatism,  financial  discipline,  legal  perspective  and  an  International  overview.'
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
      }
    }
  }
}
</script>

<style>
#app-inside{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  margin:0px;
  background:none;
  background: url('assets/images/bg1.jpg');
  background-repeat: no-repeat;
    background-attachment: fixed;
  width:100%;
  height:100%;
  overflow: scroll;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  margin:0px;
  background:none;
  background: url('assets/images/bg1.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  width:100%;
  height:100%;
  overflow: scroll;
}
#app:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  /* background: rgba(0,0,0,.4); */
  background-color: black;
  background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0, 0, 0, 0.6)),url(assets/images/topography.png);
  /* background-color: black; */
opacity: .6;
background-blend-mode:difference
}
#navigation{
  position: fixed;
  top:0px;
  height:100px;
  width: 100%;
  background: white;
  box-shadow: 2px 10px 50px 5px grey;
  z-index: 1000;
  overflow: scroll;
  display: flex;
  flex-direction: row;
}
.navlist{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height:100%;
  overflow-x: scroll;
  width:90%;
}
.nav-items {
    float: left;
    /* height:100%; */
    /* height: 80px; */
    padding:15px 20px;
    margin:0px 10px;
    font-size: .8em;
}
.nav-image {
  /* width:100%; */
  height: 60px;
}
.nav-items a {
    display: block;
    color: black;
    text-align: center;
    /* padding: 16px; */
    text-decoration: none;
}
.actives{
    background: #d8d8d8;
    border-bottom: 4px solid #4FACFF;
}
.nav-items:hover {
    background-color: #d8d8d8;
    border-bottom: 4px solid #d8d8d8;
}
.rightMenuItem {
  width: 80px;
  padding: 20px;
  text-align: right;
}
#logoimgMenu {
  width: 100%;
  height: 100%;
}
</style>
