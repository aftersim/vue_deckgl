__NUXT_JSONP__("/instant", (function(a,b,c){return {data:[{document:{slug:"instant",title:b,description:"Vue_DeckGL Example",position:3,category:"Getting started",version:1.4,fullscreen:false,menuTitle:b,toc:[],body:{type:"root",children:[{type:a,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:a,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:a,tag:"code",props:{},children:[{type:"text",value:"\u003Ctemplate\u003E\n  \u003Cdiv id=\"app\"\u003E\n      \u003CDeckGL ref=\"deck\"\n            :class=\"['fill-wrapper']\"\n            :controlMap=\"true\"\n            :layers=\"layers\"\n            :width=\"'100%'\"\n            :height=\"'100%'\"\n            :controller=\"true\"\n            :useDevicePixels=\"false\"\n            :viewState=\"{latitude: 49.254, longitude: -123.13, zoom: 11, maxZoom: 16, pitch: 45, bearing: 0}\"\n            \u003E\n        \u003CMapbox class=\"fill-wrapper\" \n                :accessToken=\"'YOUR MAPBOX TOKEN'\"                 \n                :center=\"[-123.13, 49.254]\"\n                :zoom=\"11\"\n                :bearing=\"0\"\n                :pitch=\"45\"\n                \u002F\u003E\n    \u003C\u002FDeckGL\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nimport {DeckGL, Mapbox} from '@hirelofty\u002Fvue_deckgl'\nimport {GeoJsonLayer} from '@deck.gl\u002Flayers';\n\nexport default {\n  name: 'App',\n  components: {\n    DeckGL,\n    Mapbox\n  }, \n  data(){\n      return{\n          layers:[]\n      }\n  },\n  mounted(){\n        this.layers.push(new GeoJsonLayer({\n            id: 'mylayer',\n            data: 'https:\u002F\u002Fraw.githubusercontent.com\u002Fuber-common\u002Fdeck.gl-data\u002Fmaster\u002Fexamples\u002Fgeojson\u002Fvancouver-blocks.json',\n            opacity: 0.8,\n            stroked: false,\n            filled: true,\n            extruded: true,\n            wireframe: true,\n            fp64: true,\n            getElevation: f =\u003E Math.sqrt(f.properties.valuePerSqm) * 10,\n            getLineColor: [255, 255, 255],\n            pickable: true,\n        }))\n  }\n}\n\u003C\u002Fscript\u003E\n\n\u003Cstyle\u003E\n.fill-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\u003C\u002Fstyle\u003E\n"}]}]}]}]},dir:"\u002Fen",path:"\u002Fen\u002Finstant",extension:".md",createdAt:c,updatedAt:c,to:"\u002Finstant"},prev:{slug:"installation",title:"Installation",to:"\u002Finstallation"},next:{slug:"accessing",title:"Accessing Vue DeckGL",to:"\u002Ftutorial\u002Faccessing"}}],fetch:[],mutations:[]}}("element","Instant Example","2020-10-29T21:31:09.629Z")));