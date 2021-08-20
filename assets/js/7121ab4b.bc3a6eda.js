"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1841],{3905:(e,n,i)=>{i.r(n),i.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>s});var t=i(67294);function p(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){p(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,p=function(e,n){if(null==e)return{};var i,t,p={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(p[i]=e[i]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(p[i]=e[i])}return p}var d=t.createContext({}),s=function(e){return function(n){var i=u(n.components);return t.createElement(e,a({},n,{components:i}))}},u=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},m=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(i),m=p,g=s["".concat(l,".").concat(m)]||s[m]||c[m]||a;return i?t.createElement(g,r(r({ref:n},d),{},{components:i})):t.createElement(g,r({ref:n},d))}));function h(e,n){var i=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=i.length,l=new Array(a);l[0]=g;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:p,l[1]=r;for(var d=2;d<a;d++)l[d]=i[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},11582:(e,n,i)=>{i.r(n),i.d(n,{frontMatter:()=>r,contentTitle:()=>o,metadata:()=>d,toc:()=>s,default:()=>x});var t=i(87462),p=i(63366),a=(i(67294),i(3905)),l=["components"],r={id:"desktop-plugin-structure",title:"Plugin structure"},o=void 0,d={unversionedId:"extending/desktop-plugin-structure",id:"extending/desktop-plugin-structure",isDocsHomePage:!1,title:"Plugin structure",description:"Flipper Desktop plugins have a rigid structure. We recommend to scaffold any new plugin using our scaffolding tooling.",source:"@site/../docs/extending/desktop-plugin-structure.mdx",sourceDirName:"extending",slug:"/extending/desktop-plugin-structure",permalink:"/docs/extending/desktop-plugin-structure",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/desktop-plugin-structure.mdx",version:"current",frontMatter:{id:"desktop-plugin-structure",title:"Plugin structure"},sidebar:"extending",previous:{title:"Dynamically Loading Plugins",permalink:"/docs/extending/loading-custom-plugins"},next:{title:"Testing",permalink:"/docs/extending/testing"}},s=[{value:"Scaffolding a new plugin",id:"scaffolding-a-new-plugin",children:[{value:"flipper-pkg",id:"flipper-pkg",children:[]},{value:"scarf flipper-plugin",id:"scarf-flipper-plugin",children:[]}]},{value:"Desktop Plugin structure",id:"desktop-plugin-structure",children:[]},{value:"Anatomy of a Desktop plugin",id:"anatomy-of-a-desktop-plugin",children:[{value:"Creating a Client Plugin",id:"creating-a-client-plugin",children:[]},{value:"Creating a Device Plugin",id:"creating-a-device-plugin",children:[]},{value:"Creating a simple table plugin",id:"creating-a-simple-table-plugin",children:[]}]},{value:"Validation",id:"validation",children:[]},{value:"Transpilation and bundling",id:"transpilation-and-bundling",children:[]},{value:"npm dependencies",id:"npm-dependencies",children:[]},{value:"Migration to new Plugin Specification",id:"migration-to-new-plugin-specification",children:[]},{value:"Adding fb-only code to open-sourced plugins",id:"adding-fb-only-code-to-open-sourced-plugins",children:[]}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},m=u("OssOnly"),c=u("FbInternalOnly"),g=u("FbNpmDeps"),h=u("FbOnlyParts"),f={toc:s};function x(e){var n=e.components,i=(0,p.Z)(e,l);return(0,a.mdx)("wrapper",(0,t.Z)({},f,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Flipper Desktop plugins have a rigid structure. We recommend to scaffold any new plugin using our scaffolding tooling."),(0,a.mdx)("h2",{id:"scaffolding-a-new-plugin"},"Scaffolding a new plugin"),(0,a.mdx)(m,{mdxType:"OssOnly"},(0,a.mdx)("h3",{id:"flipper-pkg"},"flipper-pkg"),(0,a.mdx)("p",null,"The CLI tool ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg")," helps to initialize, validate, and package Flipper desktop plugins."),(0,a.mdx)("p",null,"To scaffold a new plugin run ",(0,a.mdx)("inlineCode",{parentName:"p"},"npx flipper-pkg init")," in the directory where you want to store the plugin sources.\nNote that this should typically ",(0,a.mdx)("em",{parentName:"p"},"not")," be inside a Flipper checkout, but rather a fresh directory which you can put under your own source control.")),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("h3",{id:"scarf-flipper-plugin"},"scarf flipper-plugin"),(0,a.mdx)("p",null,"On a FB machine, new plugins can be scaffolded by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"scarf flipper-plugin"),".\nThis takes care of both the Desktop and Client side setup of plugins.\nFollow the instructions offered by scarf.")),(0,a.mdx)("h2",{id:"desktop-plugin-structure"},"Desktop Plugin structure"),(0,a.mdx)("p",null,"All Flipper Desktop plugins must be self-contained in a directory. This directory must contain at a minimum package.json and entry source file, e.g.:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"package.json"),(0,a.mdx)("li",{parentName:"ul"},"src/index.tsx")),(0,a.mdx)("p",null,"After scaffolding a new plugin has finished, you should have files ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/index.tsx")," files in the directory. The first file is the plugin package manifest and the second is the entry point to your plugin. An example ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," file could look like this:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-myplugin",\n  "id": "myplugin",\n  "pluginType": "client",\n  "version": "1.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "title": "My Plugin",\n  "icon": "apps",\n  "bugs": {\n    "email": "you@example.com"\n  },\n  "scripts": {\n    "lint": "flipper-pkg lint",\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  },\n  "peerDependencies": {\n    "flipper": "latest",\n    "flipper-plugin": "latest"\n  },\n  "devDependencies": {\n    "flipper": "latest",\n    "flipper-plugin": "latest",\n    "flipper-pkg": "latest",\n    "react": "latest",\n    "antd": "latest"\n  }\n}\n')),(0,a.mdx)("p",null,"Important attributes of ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"$schema")," must contain URI identifying scheme according to which the plugin is defined. Currently, Flipper supports plugins defined by the specification version 2 (",(0,a.mdx)("a",{parentName:"p",href:"https://fbflipper.com/schemas/plugin-package/v2.json"},"https://fbflipper.com/schemas/plugin-package/v2.json"),"), while version 1 is being deprecated.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"name")," Npm package name. Should start with ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-plugin-")," by convention, so Flipper plugins can be easily found on npm.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"id")," Used as the plugin native identifier and ",(0,a.mdx)("strong",{parentName:"p"},"must match the mobile plugin identifier"),", e.g. returned by ",(0,a.mdx)("inlineCode",{parentName:"p"},"getId")," method of your Java plugin.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"pluginType")," Specifies type of the plugin - client or device. See section ",(0,a.mdx)("a",{parentName:"p",href:"#anatomy-of-a-desktop-plugin"},"Anatomy of a Desktop plugin")," for details.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"main"),' Points to the plugin bundle which will be loaded by Flipper. The "flipper-pkg" utility uses this field to determine output location during plugin bundling.')),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"flipperBundlerEntry"),' Points to the source entry point which will be used for plugin code bundling. "flipper-pkg" takes the path specified in ',(0,a.mdx)("inlineCode",{parentName:"p"},"flipperBundlerEntry")," as source, transpiles and bundles it, and saves the output to the path specified in ",(0,a.mdx)("inlineCode",{parentName:"p"},"main"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"keywords")," The field must contain the ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-plugin")," keyword, otherwise Flipper won't discover the plugin. Additionally, the field can also contain any other keywords for better plugin discoverability.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"title")," Shown in the main sidebar as the human-readable name of the plugin.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"icon")," Determines the plugin icon which is displayed in the main sidebar. The list of available icons is static for now: ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/desktop/static/icons.json"},"https://github.com/facebook/flipper/blob/main/desktop/static/icons.json"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"bugs")," Specify an email and/or url, where plugin bugs should be reported."))),(0,a.mdx)("p",null,"In ",(0,a.mdx)("inlineCode",{parentName:"p"},"index.tsx")," you will define the plugin in JavaScript."),(0,a.mdx)("p",null,"Example ",(0,a.mdx)("inlineCode",{parentName:"p"},"index.tsx"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"export function plugin(client) {\n  return {};\n}\n\nexport function Component() {\n  return 'hello world';\n}\n")),(0,a.mdx)("p",null,"Some public plugins will use a ",(0,a.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," base class. This format is deprecated but the documentation can still be found ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/js-plugin-api"},"here"),"."),(0,a.mdx)("h2",{id:"anatomy-of-a-desktop-plugin"},"Anatomy of a Desktop plugin"),(0,a.mdx)("p",null,"Flipper Desktop plugins come in three possible flavors:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Client plugins: A plugin that connects to a specific client plugin running in an app (recommended)"),(0,a.mdx)("li",{parentName:"ol"},"Device plugins: A plugin that doesn't connect to a specific client and doesn't have a native counter part, but rather shows data about the device obtained through some other means, like device logs, device temperatures, etc."),(0,a.mdx)("li",{parentName:"ol"},"Table plugin: A simplified version of a client plugin, that merely displays incoming data from a client plugin in a table.")),(0,a.mdx)("h3",{id:"creating-a-client-plugin"},"Creating a Client Plugin"),(0,a.mdx)("p",null,"A plugin always exposes two elements from its entry module (typically ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/index.tsx"),"): ",(0,a.mdx)("inlineCode",{parentName:"p"},"plugin")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {PluginClient} from 'flipper-plugin';\n\nexport function plugin(client: PluginClient) {\n  return {}; // API exposed from this plugin\n}\n\nexport function Component() {\n  // Plugin UI\n  return <h1>Welcome to my first plugin</h1>;\n}\n")),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Client plugins must have the property ",(0,a.mdx)("inlineCode",{parentName:"p"},"pluginType")," set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"client")," in their package.json. They should also specify supported apps using property ",(0,a.mdx)("inlineCode",{parentName:"p"},"supportedApps"),"\nin package.json. The property should contain an array of supported apps each defined as conjunction of app properties in the following format:\n",(0,a.mdx)("inlineCode",{parentName:"p"},'{"appID": <"Facebook" | "Instagram" | "Messenger">,  "os": <"Android" | "iOS" | "Metro">, "type": <"physical" | "emulator"> }'),". For example: ",(0,a.mdx)("inlineCode",{parentName:"p"},'{ "appID": "Facebook", "os": "Android", "type": "emulator" }')," means\nthat app facebook must work on Android AND must be an emulator in order to debug it using the plugin."),(0,a.mdx)("p",null,"Note that if the os field is missing that means both Android and iOS are supported by the app and similarly we assume that a specific plugin working for a physical device will also work for the emulator. Hence the type field is assumed to be true for both physical and emulator devices unless specifically only one of them is written in the .json file."),(0,a.mdx)("p",null,"To specify that a plugin supports Facebook on Android/iOS physical/emulator devices, Messenger on only Android physical/emulator and does not support Instagram, the plugin package.json should look like that:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-myclientplugin",\n  "id": "myclientplugin",\n  "pluginType": "client",\n  "supportedApps": [\n    {"AppID": "Facebook"},\n    {"AppID": "Messenger", "os": "Android"}\n  ]\n...\n}\n'))),(0,a.mdx)("p",null,"A further guide on how to write custom Flipper plugins can be found here: ",(0,a.mdx)("a",{parentName:"p",href:"/docs/tutorial/js-custom"},"tutorial"),"."),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Note after adding new plugins the metadata of the supportedApps field needs to be updated. This has to be done in the package.json file in the directory by the name of the plugin under plugins/fb/","{","directory name","}"," or plugins/public/","{","directory name","}","/fb.\nIf an App is not listed in the supportedApps definition, it does not always mean flipper doesn't support it. It could just be because the plugin was recently added and the .json files were not updated.\nPlugins will work for apps that register them, even when they are not registered here in the metadata. The most important reason to add supported apps to the suppertedApps is to allow Flipper to signal to the user which plugins are supposed to work on which apps during troubleshooting.")),(0,a.mdx)("h3",{id:"creating-a-device-plugin"},"Creating a Device Plugin"),(0,a.mdx)("p",null,"Flipper also supports so-called device plugins - plugins that are available for an entire device - but don't receive a connection to a running app,\nso are a bit more limited in general.\nTheir entry module anatomy is:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {DevicePluginClient} from 'flipper-plugin';\n\nexport function devicePlugin(client: DevicePluginClient) {\n  return {}; // API exposed from this plugin\n}\n\nexport function Component() {\n  // Plugin UI\n  return <h1>Welcome to my first plugin</h1>;\n}\n")),(0,a.mdx)("p",null,"Desktop plugins must have the property ",(0,a.mdx)("inlineCode",{parentName:"p"},"pluginType")," set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"device")," in their package.json. They should also specify supported devices using property ",(0,a.mdx)("inlineCode",{parentName:"p"},"supportedDevices"),"\nin package.json. The property should contain an array of supported devices each defined as conjunction of device properties in the following format:\n",(0,a.mdx)("inlineCode",{parentName:"p"},'{ "os": <"Android" | "iOS" | "Metro">, "type": <"physical" | "emulator">, "archived": <true | false> }'),". For example: ",(0,a.mdx)("inlineCode",{parentName:"p"},'{ "os": "Android", "type": "emulator" }')," means\nthat device must work on Android AND must be an emulator in order to debug it using the plugin.\nTo specify that plugin supports all types of Android devices, and physical iOS devices, and does not support imported (archived) data, the plugin package.json should look like that:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-mydeviceplugin",\n  "id": "mydeviceplugin",\n  "pluginType": "device",\n  "supportedDevices": [\n    {"os": "Android", "archived": false},\n    {"os": "iOS", "type": "physical", "archived": false}\n  ]\n...\n}\n')),(0,a.mdx)("p",null,"Device plugins work in general similar to normal client plugins, so aren't worked out in detail in this document.\nThe available APIs for device plugins are listed ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#devicepluginclient"},"here"),"."),(0,a.mdx)("h3",{id:"creating-a-simple-table-plugin"},"Creating a simple table plugin"),(0,a.mdx)("p",null,"Flipper provides a standard abstraction to render data received from a Client plugin in a table, see ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/create-table-plugin"},"creating a table plugin"),"."),(0,a.mdx)("h2",{id:"validation"},"Validation"),(0,a.mdx)(m,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"Plugin definition can be validated using command ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg lint"),". The command shows all the mismatches which should be fixed to make plugin definition valid.")),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Make sure to address any lint errors shown in the IDE or surfaced on phabricator.\nTo manually run the linter run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn lint")," in ",(0,a.mdx)("inlineCode",{parentName:"p"},"~/fbsource/xplat/sonar/desktop"),".")),(0,a.mdx)(m,{mdxType:"OssOnly"},(0,a.mdx)("h2",{id:"transpilation-and-bundling"},"Transpilation and bundling"),(0,a.mdx)("p",null,"Flipper has ",(0,a.mdx)("a",{parentName:"p",href:"#transpiling-and-bundling"},"tooling for transpiling and bundling")," which allows writing plugins in plain ES6 JavaScript or ",(0,a.mdx)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),".\nWe recommend you use ",(0,a.mdx)("strong",{parentName:"p"},"TypeScript")," for the best development experience. We also recommend you use the file extension ",(0,a.mdx)("inlineCode",{parentName:"p"},".tsx")," when using TypeScript which adds support for inline React expressions."),(0,a.mdx)("p",null,"As we already mentioned, the ",(0,a.mdx)("a",{parentName:"p",href:"#development-build"},"Flipper development build")," automatically transpiles and bundles plugins on loading. It is capable of all the ES6 goodness, Flow annotations, TypeScript, as well as JSX and applies the required babel-transforms."),(0,a.mdx)("p",null,"The Flipper release build, in contrast, does not transpile or bundle plugins on loading. For production usage, plugins should be ",(0,a.mdx)("a",{parentName:"p",href:"#packaging-and-publishing"},"bundled before publishing")," using ",(0,a.mdx)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/package/flipper-pkg"},"flipper-pkg"),". This utility applies the same modifications as the plugin loader of the development build."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg")," tool is published to npm and should be installed as a ",(0,a.mdx)("inlineCode",{parentName:"p"},"devDependency")," for the plugin package."),(0,a.mdx)("p",null,"Then, to bundle the plugin, execute the following command in its folder:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"yarn flipper-pkg bundle\n")),(0,a.mdx)("p",null,"This command reads the ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json"),", takes the path specified in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipperBundleEntry")," field as entry point, transpiles and bundles all the required code, and outputs the produced bundle to the path specified in field ",(0,a.mdx)("inlineCode",{parentName:"p"},"main"),"."),(0,a.mdx)("p",null,"You can get the list of other available commands by invoking ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg help"),", and get detailed description for any command by invoking ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg help [COMMAND]"),". You can also check README on npmjs.com for usage details: ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/flipper-pkg"},"https://www.npmjs.com/package/flipper-pkg"),".")),(0,a.mdx)("h2",{id:"npm-dependencies"},"npm dependencies"),(0,a.mdx)(m,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"If you need any dependencies in your plugin, you can install them using ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn add"),".")),(0,a.mdx)(g,{mdxType:"FbNpmDeps"}),(0,a.mdx)(m,{mdxType:"OssOnly"},(0,a.mdx)("h2",{id:"migration-to-new-plugin-specification"},"Migration to new Plugin Specification"),(0,a.mdx)("p",null,"Flipper plugins are defined according to the specification. As with any specification, it is evolving, so new versions of it can be released. Currently Flipper supports plugins defined using version 2 of specification which is described in this page. Previous version of specification is being deprecated, and we encourage all the plugins still using it to migrate."),(0,a.mdx)("p",null,"The main difference of version 2 is that plugins are transpiled and bundled before packaging, while in version 1 this was done in run-time on plugin installation. There are no plugin API changes, so only the ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," changes are required to migrate."),(0,a.mdx)("p",null,"The easiest way for migration is using of command ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg migrate"),". It will automatically migrate your plugin definition to the latest version.")),(0,a.mdx)(c,{mdxType:"FbInternalOnly"},(0,a.mdx)("h2",{id:"adding-fb-only-code-to-open-sourced-plugins"},"Adding fb-only code to open-sourced plugins"),(0,a.mdx)(h,{mdxType:"FbOnlyParts"})))}x.isMDXComponent=!0}}]);