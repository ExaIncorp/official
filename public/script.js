var Vue = Vue;
var VueRouter = VueRouter;
var Vuetify = Vuetify;

Vue.component("Navigation", {
  template: `
<div id="app">
      
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense nav>
<v-list-item 
v-for="it in menus" :key="it.title" :to="it.to" @click="">
<v-list-item-action>
            <v-icon>{{it.title}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{it.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</vlist>


    </v-navigation-drawer>

    <v-app-bar
      
      color="white"
      flat
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
     <v-divider
      class="mx-2"
      inset
      vertical
    ></v-divider>
      <v-toolbar-title class="text-center font-weight-medium grey--text text--darken-2" to="/">Exa</v-toolbar-title>
       <v-spacer></v-spacer>

      <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
       
      <v-btn icon v-on="on">
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      </template>
      <v-card>

        <v-tabs>
        <v-tab>Use Anywhere</v-tab>
        <v-tab>Search and Explore</v-tab>
        <v-tab>Work Smarter</v-tab>
        <v-tab>Watch and Play</v-tab>
       </v-tabs>

        <v-spacer></v-spacer><v-card-actions>
    
          <v-card-text class="text-center">
      <v-btn text>Learn More</v-btn>
    </v-card-text>
      </v-card>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-btn icon>
     <v-icon>mdi-account-circle</v-icon>
     </v-btn>
      <v-btn icon to="/exa-search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
     

    
</div>

  `,

  data() {
    return {
      menus: [
        {
          title: "dashboard",
          to: "/",
          name: "Overview"
        },
        {
          title: "settings",
          to: "/01",
          name: "Developer & IT"
        },
        {
          title: "mdi-tennis",
          to: "/02",
          name: "Business"
        }
      ],
      drawer: null
    };
  },

  methods: {}
});

const CHome = {
  template: ` <v-container fluid>
          <v-layout wrap text-xs-center>
            <v-flex xs12>
              <h1 mb-5 class="display-3 mb-5">
                Vuetify demo
              </h1>
            </v-flex>
          </v-layout>

          <v-layout row wrap mb-4>
            <v-flex xs12 sm6 md3 lg3 xl3 pa-4 deep-purple lighten-4>
              <h6 class="title  mb-4">Breakpoints</h6>
              <div class="body-1">
                <p>xl = @media (min-width: 1904px) 4k and ultra-wides</p>
                <p>lg = @media (min-width: 1264px) desktop</p>
                <p>md = @media (min-width: 960px) large tablet to laptop</p>
                <p>sm = @media (min-width: 600px) small to medium tablet</p>
                <p>xs = @media (min-width: 0) small to large handset</p>
              </div>
            </v-flex>

            <v-flex xs12 sm6 md3 pa-4 light-blue lighten-4>
              <h6 class="title  mb-4">Widths</h6>
              <div class="body-1">
                <p>flex-basis and max-width</p>
                <p>xs12 = 100%</p>
                <p>xs6 = 50%</p>
                <p>xs5 = 41.6%</p>
                <p>xs4 = 33.3%</p>
                <p>xs3 = 25%</p>
                <p>xs2 = 16.6%</p>
                <p>xs1 = 8.3%</p>
              </div>
            </v-flex>

            <v-flex xs12 sm6 md3 pa-4 orange lighten-4>
              <h6 class="title  mb-4">Spacing</h6>
              <div class="body-1">
                <p>p/m 1-5</p>
                <p>pa</p>
                <p>py</p>
                <p>ph</p>
                <p>pt</p>
                <p>pr</p>
                <p>pb</p>
                <p>pl</p>
              </div>
            </v-flex>

            <v-flex xs12 sm6 md3 pa-4 blue-grey lighten-4>
              <div class="body-1">
                <h6 class="title  mb-4">Helpers</h6>
                <p>d-flex</p>
                <p>d-inline-flex</p>
                <p>d-block</p>
                <p>d-inline-block</p>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <v-btn color="secondary" href="https://vuetifyjs.com/vuetify/quick-start" target="_blank" rel="noopener">
                Vuetify documentation
              </v-btn>
            </v-flex>

            <v-flex xs12>
              <v-btn flat href="https://glitch.com/edit/#!/vuetify" target="_blank" rel="noopener">
                View the code for this page
              </v-btn>
            </v-flex>
          </v-layout>

        </v-container>

  `
};

const Overview = {
  template: `<v-container absolute ma-0 pa-0 max-width="544">
      <v-card flat tile class="mx-auto">
    <v-carousel
      :show-arrows="false"
      hide-delimiter-background delimiter-icon="mdi-minus" height="300">
      <v-carousel-item>
        <v-sheet color="blue" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
    <v-parallax
    dark
    src="https://www.dropbox.com/s/mdomjrn844i58g5/MainBanner.jpg?raw=1"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">ORGANISE</h1>
        <h6 class="display-1 font-weight-thin">Make Information Accessible</h6><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>
           
           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="yellow" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
           <v-parallax
    dark
    src="https://www.dropbox.com/s/mdomjrn844i58g5/MainBanner.jpg?raw=1"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">BUILD</h1>
        <h6 class="display-1 font-weight-thin">Build a Safer Information Network</h6><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>
          
          </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="green" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
         <v-parallax
    dark
    src="https://www.dropbox.com/s/mdomjrn844i58g5/MainBanner.jpg?raw=1"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">SUPPORT</h1>
        <h6 class="display-1 font-weight-thin">Best Part is What World does with it</h6><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>
     
           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
  <v-container fluid pa-0>
    <v-layout row>
      <v-flex xs6 order-lg2>
        <v-card dark tile flat color="error">
          
      <v-carousel
      :show-arrows="false"
      hide-delimiter-background delimiter-icon="mdi-minus" height="180">
      <v-carousel-item>
        <v-sheet color="purple lighten-2" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
        <v-parallax
    dark
    src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0 ma-2">Grow</h1>
        <h6 class="caption font-weight-thin mx-2">Develop World with Data & Information.</h6><br/><br/><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>
           
           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="yellow" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
       <v-parallax
    dark
    src="https://images.pexels.com/photos/1823734/pexels-photo-1823734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">Smarter</h1>
        <h6 class="caption font-weight-thin mx-3">Use Data Smarter to Implement New ideas.</h6><br/><br/><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>

           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="green" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
          <v-parallax
    dark
    src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">Stay Organised</h1>
        <h6 class="caption font-weight-thin mx-3">Data is Organised and easy to use.</h6><br/><br/><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>

           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark tile flat color="red darken-4">
          
       <v-carousel
      :show-arrows="false"
      hide-delimiter-background delimiter-icon="mdi-minus" height="180">
      <v-carousel-item>
        <v-sheet color="pink lighten-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
            <v-parallax
    dark
    src="https://cdn.pixabay.com/photo/2013/10/16/22/54/autumn-196566__480.jpg"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">Ease of Access</h1>
        <h6 class="caption font-weight-thin mx-2">All Resources are Universally Accessible.</h6><br/><br/><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>

            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="yellow" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
      <v-parallax
    dark
    src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">Vision</h1>
        <h6 class="caption font-weight-thin mx-2">Our Vision is to Empower every person.</h6><br/><br/><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>

           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="green" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
         <v-parallax
    dark
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy_8fyPgXi_5O4gYLWKL-KPUtz-mwDJCuQ6Q71jZXzSP_d8sgj&usqp=CAU"
  >
    <v-row height="300" width="100%"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-col class="text-center ma-0 pa-0" cols="12" >
        <h1 class="display-1 font-weight-thin mb-4 pa-0">One Step Ahead</h1>
        <h6 class="caption font-weight-thin mx-2">To Take the Best Method to Achieve.</h6><br/><br/><br/><br/><br/>
      </v-col>
    </v-row>
  </v-parallax>


         </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4 order-md2 order-xs1>
        <v-card dark tile flat color="grey lighten-3" height="230">
          
  <v-parallax
    dark
    height="230"
    width="100%"
    src="https://images.unsplash.com/photo-1503942142281-94af0aded523?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4"><p>Exa</p><p>Does</p><p>it</p></h1>
        
      </v-col>
    </v-row>
  </v-parallax>
       
        </v-card>
      </v-flex>
      <v-flex xs8 order-md3 order-xs2>
        <v-card dark tile flat color="red lighten-2">
          
       <v-carousel
      :show-arrows="false"
      hide-delimiters delimiter-icon="mdi-minus" height="230">
      <v-carousel-item>
        <v-sheet color="red lighten-2" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
  <v-card
     color="red lighten-2"
     flat
     tile
    class="mx-5"
    height="230"
    width="230"
  >
            
       <v-carousel
      :show-arrows="false"
      hide-delimiter-background delimiter-icon="mdi-minus" height="130">
      <v-carousel-item>
        <v-sheet color="red lighten-2" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
   <v-card
    color="red lighten-2"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Helier</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>


            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="red lighten-2" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
       <v-card
    color="red lighten-2"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Cloud</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>

          </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="red lighten-2" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
       <v-card
    color="red lighten-2"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Pix</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>

         </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>


    <v-card-subtitle class="pb-0">Grow & Organise your Business</v-card-subtitle>
    <v-card-actions>
      <v-btn
        tile
        outlined
        color="white"
        text
      >
        Get Started
      </v-btn>
    </v-card-actions>
  </v-card>


         </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="cyan darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
        <v-card
     color="cyan darken-3"
     flat
     tile
    class="mx-5"
    height="230"
    width="230"
  >
            
       <v-carousel
      :show-arrows="false"
      hide-delimiter-background delimiter-icon="mdi-minus" height="130">
      <v-carousel-item>
        <v-sheet color="cyan darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
         <v-card
    color="cyan darken-3"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Helier</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>

           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="cyan darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
         <v-card
    color="cyan darken-3"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Helier</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>

         </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="cyan darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
         <v-card
    color="cyan darken-3"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Helier</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>

           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>


    <v-card-subtitle class="pb-0">Work Smarter, All in one Place</v-card-subtitle>
    <v-card-actions>
      <v-btn
        outlined
        tile
        color="white"
        text
      >
        Get Started
      </v-btn>
    </v-card-actions>
  </v-card>

           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="teal darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
         <v-card
     color="teal darken-3"
     flat
     tile
    class="mx-5"
    height="230"
    width="230"
  >
            
       <v-carousel
      :show-arrows="false"
      hide-delimiter-background delimiter-icon="mdi-minus" height="130">
      <v-carousel-item>
        <v-sheet color="teal darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
         <v-card
    color="teal darken-3"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Helier</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>

          </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="teal darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
           <v-card
    color="teal darken-3"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Helier</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>


           </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="teal darken-3" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
     <v-card
    color="teal darken-3"
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-2">Exa Helier</div>
        <v-list-item-title class="subtitle mb-1">AI does the thing.</v-list-item-title>
        <v-list-item-subtitle class="subtitle" >Platform that gets Better.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="70"
        color="grey"
      >
     <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nLfx_G1haAefHnafknYdjxas2_NIoGC9R9tBJqYtYarTw9kA4yqb6_BRgQ&s=10"></v-img>
     </v-list-item-avatar>
    </v-list-item>
  </v-card>

         </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>


    <v-card-subtitle class="pb-0">Use Anywhere, Get more done</v-card-subtitle>
    <v-card-actions>
      <v-btn
        outlined
        color="white"
        text
        tile
      >
        Get Started
      </v-btn>
    </v-card-actions>
  </v-card>

          </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs8 sm6 md3 order-md4 order-sm2>
        <v-card dark tile flat color="red darken-2">
          
       <v-carousel
      :show-arrows="false"
      hide-delimiter-background delimiter-icon="mdi-minus" height="230">
      <v-carousel-item>
        <v-sheet color="blue" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
          <v-card
    tile
    class="mx-auto"
    max-width="300"
    height="230"
    outlined
  >
    <v-img height="230" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYGXuwW6mMbBVVfeH63F0CduCNxPI2GfJhLBbgvwEWLl9ZU7yd&usqp=CAU">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="display-1 font-weight-thin text-center">Explore Innovations</div>
            <div class="body-1 text-center mx-4">We Believe in what people makes possible</div>
          </v-col>
        </v-row>
      </v-img>
  </v-card>

            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="yellow" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
        <v-card
    tile
    class="mx-auto"
    max-width="300"
    height="230"
    outlined
  >
    <v-img height="230" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStKUflaQk6FLbzpvU10y9dH8DHH618c-BsCw&usqp=CAU">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="display-1 font-weight-thin text-center">Inspiration</div>
            <div class="body-1 text-center mx-4">Inspires everyone, Eliminating barriers</div>
          </v-col>
        </v-row>
      </v-img>
  </v-card>

            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
	  <v-carousel-item>
        <v-sheet color="green" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
       <v-card
    tile
    class="mx-auto"
    max-width="300"
    height="230"
    outlined
  >
    <v-img height="230" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtARfglnHDrCvf4Tag3jjUJhh5oMnebee8eQ&usqp=CAU">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="display-1 font-weight-thin text-center">Diversity & Inclusion</div>
            <div class="body-1 text-center mx-4">Success is corollary of unique backgrounds</div>
          </v-col>
        </v-row>
      </v-img>
  </v-card>


        </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

        </v-card>
      </v-flex>
      <v-flex xs4 sm6 md3 order-md3 order-sm1>
        <v-card dark tile flat color="deep-orange lighten-1" height="230">
          <v-parallax
    dark
    height="230"
    width="100%"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG7esJxVMo375TfQfe0qV9CNGomkFIgHhDyA&usqp=CAU"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4"><p>Make</p><p>Story</p><p>better</p></h1>
        
      </v-col>
    </v-row>
  </v-parallax>


 
        </v-card>
      </v-flex>
      <v-flex xs6 order-lg2>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Exa Incorporation ©</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card tile flat color="red lighten-5" height="50">
          <v-select
          height="50"
          :items="['Overview','Story','Vision']"
          :to="['/aboutstory','/aboutstory','/aboutstory']"
          filled
          @click=""
          dense
          value="Overview"
          label="About"
        ></v-select>
        </v-card>
      </v-flex>

    </v-layout>
   <v-layout row>
      <v-flex xs4 order-md2 order-xs1>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Terms</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs2>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Privacy</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md1 order-xs3>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Support</v-card-text>
         </v-card>
      </v-flex>
    </v-layout>
  </v-container>

   </v-container>
     `
};
const docs = {
  template: "<p> docs</p>"
};
const Two = {
  template: "<p>This is the second page.</p>"
};
const AboutStory = {
  template: "<p>tested</p>"
};
const ExaSearch = {
  template: `
         <v-container class="ma-0 pa-0" fluid>
   <v-layout row class="ma-0 pa-0">
      <v-flex xs12 order-lg2>
        <v-card tile flat class="mt-4 ml-4 mr-4">
          <v-text-field
            fixed
            dense
            label="Search"
            placeholder="Search Exa"
            outlined
            tile
            append-icon="mdi-magnify"
          ></v-text-field>
 </v-card></v-flex>
</v-layout>

      <v-parallax
        class="ma-0 pa-0"
        dark
        height="788"
        width="100%"
        src="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=1280&w=940"
        >

         
  <v-container class="mt-0">
    <v-layout row class="">
      <v-flex xs6 order-lg2>
        <v-card dark tile flat color="teal darken-3" height="160">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark tile flat color="red darken-4" height="160">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4 order-md2 order-xs1>
        <v-card dark tile flat color="red lighten-1" height="110">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs2>
        <v-card dark tile flat color="cyan darken-3" height="110">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md1 order-xs3>
        <v-card dark tile flat color="red darken-1" height="110" align="center" justify="center">
       <v-btn dark icon class="pt-8 pb-3">
        <v-icon x-large>mdi-magnify</v-icon>
       </v-btn>
       <v-card-text class="overline">Explore </v-card-text>


        </v-card>
      </v-flex>
    </v-layout> <br/>
   
      <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
        <v-card dark tile flat color="red darken-2">
          
         
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">SUPPORT</div>
        <v-list-item-title class="headline mb-1">Need Help</v-list-item-title>
        <v-list-item-subtitle>Visit Exa Support to Get Help related to our Products</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text tile> Support</v-btn>
      <v-btn text tile>FAQS</v-btn>
    </v-card-actions>
  


        </v-card>
      </v-flex> </v-layout> <br/>
      <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md3 order-sm1>
        <v-card dark tile flat color="deep-orange lighten-1">
          
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Setup</div>
        <v-list-item-title class="headline mb-1">Documentations</v-list-item-title>
        <v-list-item-subtitle>See Our Docs about Usage of our Products effectively</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text tile>Explore</v-btn>
      <v-btn text tile>Choose</v-btn>
    </v-card-actions>
  


     
        </v-card>
      </v-flex>
     </v-layout>
    
    
  </v-container>
  </v-parallax>

<v-layout row>
<v-flex xs6 order-lg2>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Exa Incorporation ©</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card tile flat color="red lighten-5" height="50">
          <v-select
          height="50"
          :items="['Search','Support','FAQS']"
          :to="['/aboutstory','/aboutstory','/aboutstory']"
          filled
          @click=""
          dense
          value="Search"
          label="Go to"
        ></v-select>
        </v-card>
      </v-flex>

    </v-layout>
   <v-layout row>
      <v-flex xs4 order-md2 order-xs1>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Terms</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs2>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Privacy</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md1 order-xs3>
        <v-card tile flat color="red lighten-5" class="text-center">
          <v-card-text>Support</v-card-text>
         </v-card>
      </v-flex>
    </v-layout>
  </v-container>
           `
};

const routes = [
  {
    path: "/",
    component: Overview
  },
  {
    path: "/01",
    component: Two
  },
  {
    path: "/02",
    component: CHome
  },
  {
    path: "/about-story",
    component: AboutStory
  },
  {
    path: "/exa-search",
    component: ExaSearch
  },
  {
    path: "/docs",
    component: docs
  }
];

const router = new VueRouter({
  routes
});

var app = new Vue({
  router,
  el: "#app",
  vuetify: new Vuetify({
    theme: {
      light: true
    }
  }),
  data: {
    //
  }
});
