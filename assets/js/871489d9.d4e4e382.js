"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1480],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){return function(t){var a=m(t.components);return n.createElement(e,r({},t,{components:a}))}},m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=i,h=d["".concat(o,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13919:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>i})},44996:(e,t,a)=>{a.r(t),a.d(t,{useBaseUrlUtils:()=>r,default:()=>o});var n=a(52263),i=a(13919);function r(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,p=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,i.b)(a))return a;if(l)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+d:d}(r,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},92177:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>c});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=a(44996),l=["components"],s={id:"public-releases",title:"Public Flipper Releases"},p=void 0,d={unversionedId:"extending/public-releases",id:"extending/public-releases",isDocsHomePage:!1,title:"Public Flipper Releases",description:"This document outlines how Flipper releases work on GitHub.",source:"@site/../docs/extending/public-releases.mdx",sourceDirName:"extending",slug:"/extending/public-releases",permalink:"/docs/extending/public-releases",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/public-releases.mdx",version:"current",frontMatter:{id:"public-releases",title:"Public Flipper Releases"},sidebar:"internals",previous:{title:"Internals",permalink:"/docs/internals/index"},next:{title:"Testing RN Changes",permalink:"/docs/extending/testing-rn"}},m=[{value:"Kick-Off",id:"kick-off",children:[]},{value:"Desktop Release",id:"desktop-release",children:[]},{value:"iOS Release",id:"ios-release",children:[]},{value:"npm releases",id:"npm-releases",children:[]},{value:"Android Release",id:"android-release",children:[{value:"CircleCI Configuration",id:"circleci-configuration",children:[]},{value:"GitHub Action Workflow",id:"github-action-workflow",children:[]}]}],u={toc:m};function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This document outlines how Flipper releases work on GitHub."),(0,r.mdx)("h2",{id:"kick-off"},"Kick-Off"),(0,r.mdx)("p",null,"A release is kicked off by a special commit that has a subject with the format\n",(0,r.mdx)("inlineCode",{parentName:"p"},"Flipper Release vX.Y.Z"),", e.g. ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/commit/4fa2c9761a8359c65ccc62fee76490572616f0c1"},"4fa2c9761"),"."),(0,r.mdx)("p",null,"This is triggered from a bot within Facebook that runs ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/scripts/prepare-release.sh"},"prepare-release.sh"),"\nbut the only thing special about the commit is its subject line. Anyone could run the\nscript and would kick off the remaining jobs once the commit lands in main."),(0,r.mdx)("p",null,"The commit bumps the version of Flipper Desktop as well as various SDK components\nand libraries that are to be published to npm and other package repositories."),(0,r.mdx)("p",null,'Importantly, it is immediately followed by a "SNAPSHOT" commit (e.g. ',(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/commit/02a56da3f5440b35616604f73167307319cca48f"},"02a56da3f"),") which sets\nthe version of our Java dependencies to ",(0,r.mdx)("inlineCode",{parentName:"p"},"X.Y.(Z+1)-SNAPSHOT")," (that's the\npatch version incremented by one and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"-SNAPSHOT")," suffix appended).\nThat's a weird Maven-ism which allows us to continuously publish snapshot\nreleases from the main branch."),(0,r.mdx)("h2",{id:"desktop-release"},"Desktop Release"),(0,r.mdx)("p",null,"The release process for the desktop app is entirely driven by ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),".\nThe entry point is the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/.github/workflows/release.yml"},"release.yml")," workflow\nwhich is triggered by changes to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"desktop/package.json")," file on the main branch."),(0,r.mdx)("p",null,"GitHub Actions has a limitation we need to work around here: It allows push events to as triggers for\na workflow, but not individual commits. This requires us to first scan through all potential commits\nof a push to identify commits that match the aforementioned versioning schema.\nThis is done through a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/1cad57d75077bdb3594e33e845ab6d226c5d2c86/.github/workflows/release.yml#L15-L18"},"custom action"),"."),(0,r.mdx)("p",null,"Only if this action is successful, the remaining steps are taken which"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Check out the versioning commit."),(0,r.mdx)("li",{parentName:"ul"},"Create a git tag for it."),(0,r.mdx)("li",{parentName:"ul"},"Create a GitHub release for the tag."),(0,r.mdx)("li",{parentName:"ul"},"Build releases for Linux, Mac and Windows."),(0,r.mdx)("li",{parentName:"ul"},"Upload all these releases to temporary storage."),(0,r.mdx)("li",{parentName:"ul"},"Download the release artifacts and attach them to the GitHub release."),(0,r.mdx)("li",{parentName:"ul"},"Dispatch to separate workflows for publishing Cocoapods and npm packages (see below).")),(0,r.mdx)("h2",{id:"ios-release"},"iOS Release"),(0,r.mdx)("p",null,"iOS releases are run in GitHub Actions but exist as a separate workflow. They can be triggered in three ways:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"When a tag is pushed."),(0,r.mdx)("li",{parentName:"ol"},"By manually triggering the workflow (see below)."),(0,r.mdx)("li",{parentName:"ol"},"Through a ",(0,r.mdx)("inlineCode",{parentName:"li"},"dispatch_workflow")," event which is issued as a last step of the desktop release process.")),(0,r.mdx)("img",{alt:"Manually triggering a workflow",src:(0,o.default)("img/trigger-publish-pod-workflow.png")}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/.github/workflows/publish-pods.yml"},"The workflow")," follows the default Cocoapods update procedure, bumps and published both the Flipper and FlipperKit pod\nand finally creates a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/pull/1754"},"pull request")," containing the updated references. This PR must be manually merged."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Authentication")," is managed through the secret environment variable ",(0,r.mdx)("inlineCode",{parentName:"p"},"COCOAPODS_TRUNK_TOKEN"),"."),(0,r.mdx)("h2",{id:"npm-releases"},"npm releases"),(0,r.mdx)("p",null,"The JavaScript libraries published as part of a Flipper release closely follow the iOS release procedure.\nSame as before, it is a workflow that is triggered by one of the three events, which should in all but\nexceptional circumstances be a dispatch event. The workflow is defined in ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/.github/workflows/publish-npm.yml"},"publish-npm.yml"),"."),(0,r.mdx)("p",null,"From there, we use a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/desktop/scripts/bump-versions.ts"},"script")," to\nbump the versions of our Yarn workspaces, and publish all public packages (",(0,r.mdx)("inlineCode",{parentName:"p"},"flipper"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"flipper-babel-transformer"),", ...)\nand our React Native bindings."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("strong",{parentName:"p"},"authentication")," to npm is managed by a secret environment variable called ",(0,r.mdx)("inlineCode",{parentName:"p"},"FLIPPER_NPM_TOKEN"),"."),(0,r.mdx)("h2",{id:"android-release"},"Android Release"),(0,r.mdx)("p",null,"Android has three types of jobs currently running. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"snapshot")," job is an\noutlier in that it still runs on CircleCI. This gives us some additional\ncapacity as these jobs can take quite a while and the occasional failure\ndue to timeouts or network errors isn't a dealbreaker."),(0,r.mdx)("p",null,"The three jobs are:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/blob/main/.github/workflows/android-sample.yml"},(0,r.mdx)("inlineCode",{parentName:"a"},"snapshot")),' job runs on every commit on the main branch and publishes "SNAPSHOT" releases to Maven Central. It runs on CircleCI.'),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/blob/main/.github/workflows/publish-android.yml"},(0,r.mdx)("inlineCode",{parentName:"a"},"publish-android"))," job is usually triggered by a ",(0,r.mdx)("inlineCode",{parentName:"li"},"dispatch_workflow")," event. It uploads our Java artifacts to Maven Central and attaches the Android sample app to the release page on GitHub. It runs on GitHub Actions."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/blob/main/.github/workflows/android-sample.yml"},(0,r.mdx)("inlineCode",{parentName:"a"},"android-sample"))," job runs on every push and open pull request. It builds the sample and tutorial apps and uploads the sample APK as artifact for easy debugging and testing.")),(0,r.mdx)("h3",{id:"circleci-configuration"},"CircleCI Configuration"),(0,r.mdx)("p",null,"The Android snapshot build is run on\n",(0,r.mdx)("a",{parentName:"p",href:"https://app.circleci.com/pipelines/github/facebook/flipper?branch=main"},"CircleCI"),"\nand configured in\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/.circleci/config.yml"},(0,r.mdx)("inlineCode",{parentName:"a"},".circleci/config.yml"))),(0,r.mdx)("p",null,"There are two potential points for breakage:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/blob/1cad57d75077bdb3594e33e845ab6d226c5d2c86/.circleci/config.yml#L5"},"base image")," used in the build instructions refers to a specific SDK version and requires occasional updating."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/blob/b5e613141e98528f45d3d2864e08278b1c7d4973/.circleci/config.yml#L23"},"platform installation")," through the ",(0,r.mdx)("inlineCode",{parentName:"li"},"sdkmanager")," tool of the Android SDK may require additional SDKs or NDKs to be installed if they're not part of the base image.")),(0,r.mdx)("p",null,"One non-obvious aspect is that of ",(0,r.mdx)("strong",{parentName:"p"},"authentication")," for uploads. The repository contains a symmetrically encrypted\ncopy of our credentials to Sonatype (for Maven Central). The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/1cad57d75077bdb3594e33e845ab6d226c5d2c86/scripts/publish-android-snapshot.sh"},"snapshot release script"),"\ndecodes the file on the fly by using a secret Circle CI exposes through an environment variable."),(0,r.mdx)("h3",{id:"github-action-workflow"},"GitHub Action Workflow"),(0,r.mdx)("p",null,"As with the iOS release before, the workflow for Android releases is triggered by three types of events:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"When a tag is pushed."),(0,r.mdx)("li",{parentName:"ol"},"By manually triggering the workflow."),(0,r.mdx)("li",{parentName:"ol"},"Through a ",(0,r.mdx)("inlineCode",{parentName:"li"},"dispatch_workflow")," event which is issued as a last step of the desktop release process.")),(0,r.mdx)("p",null,"In normal circumstances, the third event will kick off an Android release build.\nThe workflow is defined in ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/8d5f136a349e77ec9ccebd303054e0e142cbab30/.github/workflows/publish-android.yml"},(0,r.mdx)("inlineCode",{parentName:"a"},"publish-android.yml")),"."),(0,r.mdx)("p",null,"We first install two NDK versions that are required by our dependencies. To publish release artifacts\n(i.e. non-",(0,r.mdx)("inlineCode",{parentName:"p"},"SNAPSHOT")," artifacts), Maven Central requires them to be signed with a GnuPG key. The\nonly requirement about the key itself is, that it needs to be exported to a Keyserver. Ours\nis published ",(0,r.mdx)("a",{parentName:"p",href:"https://keyserver.ubuntu.com/pks/lookup?search=Flipper+Bot+%28I+sign+Flipper+releases%29+%3Crealpassy%40fb.com%3E&fingerprint=on&op=index"},"to the Ubuntu Keyserver"),"."),(0,r.mdx)("p",null,"To publish your own key, run"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"gpg --send-keys --keyserver keyserver.ubuntu.com <KEY_ID>\n")),(0,r.mdx)("p",null,"For the initial setup, the secret keyring was exported as ",(0,r.mdx)("inlineCode",{parentName:"p"},"gpg2 --export-secret-keys <secret_key_id> | base64")," and stored\nas secret on GitHub with the name ",(0,r.mdx)("inlineCode",{parentName:"p"},"GPG_KEY_CONTENTS"),". As part of the workflow, it is written to disk after reversing the base64 encoding.\nThe key id and key password are subsequently stored in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"gradle.properties")," along with the path to the key. Paths here need to be\nabsolute, otherwise Gradle will look them up relative to the sub-projects (",(0,r.mdx)("inlineCode",{parentName:"p"},"android/"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"android/sample"),", ...)."),(0,r.mdx)("p",null,"Maven Central is managed by Sonatype. To sign up follow ",(0,r.mdx)("a",{parentName:"p",href:"https://central.sonatype.org/pages/ossrh-guide.html"},"their guide")," which\ninvolves creating a JIRA account and opening an issue to apply for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"com.facebook")," namespace. You will need\nto find an existing member of this namespace to vouch for you. While this is a lot, it ensures that nobody\nfrom outside the organisation can publish under our name."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"publish")," (previously ",(0,r.mdx)("inlineCode",{parentName:"p"},"uploadArchives"),") gradle task uses the OSSRH Sonatype Nexus credentials to upload all Flipper Java artifacts. That\nincludes the core SDK as well as our plugins. The credentials are ",(0,r.mdx)("em",{parentName:"p"},"not")," your login to Nexus, but the user tokens\nyou can get from ",(0,r.mdx)("a",{parentName:"p",href:"https://oss.sonatype.org/#profile;User%20Token"},"your profile"),"."),(0,r.mdx)("p",null,"This is followed by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"closeAndReleaseRepository")," gradle task, which is part of the\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/vanniktech/gradle-maven-publish-plugin"},(0,r.mdx)("inlineCode",{parentName:"a"},"gradle-maven-publish-plugin")),'. It uses the credentials\nto identify a "staging repository" and automatically close it. This staging repository is identified by the\n',(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/8d5f136a349e77ec9ccebd303054e0e142cbab30/gradle.properties#L9"},(0,r.mdx)("inlineCode",{parentName:"a"},"SONATYPE_STAGING_PROFILE")),"\nproperty. Sonatype usually requires people to manually go to a web UI, verify that a given release is\ncomplete and click some buttons. The plugin aims to do this for you."),(0,r.mdx)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,r.mdx)("p",null,"There are a few parts which can go wrong here."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Upload fails:")," Maven Central is (at the time of writing) overloaded with projects migrating from\nJCenter. The upload task attempts to retry but it can still time out. Manually re-running the job\nthrough the GitHub UI should do the trick."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Closing fails:")," Same as before, this can happen because of timeouts."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Retrying to close fails because of duplicate staging repositories:")," This is particularly annoying\nbecause you cannot fix this through automation. It happens when artifacts are uploaded multiple times\nand now more than one staging repository exists. You must first ",(0,r.mdx)("em",{parentName:"li"},"drop")," (not close or release) the existing ones before\nrestarting the job. To do this, go to ",(0,r.mdx)("a",{parentName:"li",href:"https://oss.sonatype.org/#stagingRepositories"},"Staging Repositories"),',\nselect the open repositories and click "Drop".'),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"NDK mismatch:")," If Gradle complains about a missing NDK, this usually indicates that a dependency\nhas a hard requirement on a particular NDK. You can add it to the list in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"sdkmanager")," command."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Artifacts not available:")," Maven Central syncs with a delay of sometimes a few hours. You can\ncheck directly on the ",(0,r.mdx)("a",{parentName:"li",href:"https://repo.maven.apache.org/maven2/com/facebook/flipper/"},"Maven2 main server"),"\nif the artifacts with the new version number are uploaded.")))}c.isMDXComponent=!0}}]);