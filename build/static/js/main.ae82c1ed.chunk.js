(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(3),i=t(6),o=t(4),s=t(5),c=t(1),l=t(0),m=t.n(l),u=t(8),h=t.n(u);t(15),t(16);function d(e){return m.a.createElement("div",{className:"name-wrapper"},m.a.createElement("h1",null,"Xiaoxi YU ",m.a.createElement("span",{className:"name-alias"},"Jake")))}t(17);var p={contact:{0:{name:"contact",text:"xiaoxihome.com",link:"https://www.xiaoxihome.com/"},1:{name:"github",text:"github.com/CptDoraemon",link:"https://github.com/CptDoraemon"},2:{name:"email",text:"yxx0827@gmail.com",link:"mailto:yxx0827@gmail.com"},3:{name:"phone",text:"647-285-0696",link:"tel:+16472850696"}},projects:{0:{description:"Following are my personal projects."},1:{name:"Reddit-like Website",link:"https://riddet.xiaoxihome.com/",linkText:"riddet.xiaoxihome.com",features:["A discussion website, built with MongoDB, Express, React, and Node.js","Users are able to create and manage account","Users are able to create and interact with posts such as voting and commenting","Several feeds layouts and sorting algorithms"]},2:{name:"RaycasterJS",link:"https://raycaster.xiaoxihome.com/",linkText:"raycaster.xiaoxihome.com",features:["A first person shooter multi-player game in browser","Powered by a raycaster algorithm for pseudo 3D rendering","Built in modules, bundled with Webpack","WebSocket used for server communications","Performance optimized, targeting stable 60 fps"]},4:{name:"Weather App",link:"https://cptdoraemon.github.io/weather",linkText:"cptdoraemon.github.io/weather",features:["A weather app, web version built with React, mobile version built with Flutter","Third party API used for weather and location data","Data visualized to interactive charts"]},5:{name:"Xiaoxihome",link:"https://www.xiaoxihome.com/",linkText:"xiaoxihome.com",features:["My portfolios website, built with MERN stack","Rich in animations, included a one-page-scroll introduction page and a gallery","Data are striped away from the view, and stored in JSON format for easy updating"]}},education:{0:{name:"CFA, Chartered Financial Analyst Level I Exam passed",year:"2018",isFinTech:!0},1:{name:"FRM, Financial Risk Manager Level I Exam passed",year:"2018",isFinTech:!0},2:{name:"M.A. Economics",name1:"York University",year:"2016-2017",features:["York University Graduate Scholarship","York University Graduate Fellowship"]},3:{name:"B.A. Financial & Business Economics",name1:"York University",year:"2013-2015",features:["Member of Dean's Honour Roll","GPA: 3.5/4.0"]}},workExperience:{0:{name:"Teaching Assistant",name1:"York University",year:"2016-2017",features:["Held office hours to provide academic support to students","Assisted course instructor to prepare exam papers, corrected errors in previous years' templates","Invigilated examinations and graded exams"]}},toolbox:[["JavaScript","React","Node.js","Webpack"],["Dart","Flutter"],["SQL","MongoDB"],["Python","Stata","LaTeX","Photoshop"]]};function f(e){var a=[];for(var t in p.contact)p.contact.hasOwnProperty(t)&&a.push(p.contact[t]);return m.a.createElement("div",{className:"contact-wrapper"},a.map(function(e){return m.a.createElement("div",{key:e.name},m.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.text))}))}t(18);function E(e){var a=e.data,t=a.name?m.a.createElement("h3",null,a.name):null,n=a.description?m.a.createElement("div",{className:"item-link"}," ",a.description," "):null,r=a.link?m.a.createElement("div",{className:"item-link"},m.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},a.linkText)):null,i=a.year?m.a.createElement("div",{className:"item-year"},a.year):null,o=a.name1?m.a.createElement("h4",null,a.name1):null,s=a.features?m.a.createElement("ul",null," ",a.features.map(function(e){return m.a.createElement("li",{key:e},e)})," "):null;return m.a.createElement("div",{className:"item-wrapper"},t,n,o,r,i,s)}function b(e){var a=[],t=p[e.sectionDataKey];for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];e.isFinTech?a.push(r):r.isFinTech||a.push(r)}return m.a.createElement("div",{className:"section-wrapper"},m.a.createElement("h2",null,e.sectionTitle),m.a.createElement("div",{className:"items-wrapper"},a.map(function(e){return m.a.createElement(E,{key:e.name,data:e})})))}t(19);function v(e){return m.a.createElement("div",null,m.a.createElement("h2",null,"Toolbox"),m.a.createElement("div",{className:"toolbox-wrapper"},p.toolbox.map(function(e,a){var t=e.map(function(e,a){return"LaTeX"===e?m.a.createElement("div",{key:e,className:"toolbox-item"},m.a.createElement("span",{className:"latex"},"L",m.a.createElement("sup",null,"a"),"T",m.a.createElement("sub",null,"e"),"X,")):a===p.toolbox.length-1?m.a.createElement("div",{key:e,className:"toolbox-item"},e):m.a.createElement("div",{key:e,className:"toolbox-item"},e+",")});return m.a.createElement("div",{key:a,className:"toolbox-row"},t)})))}function x(e){var a=new Date,t=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,n=a.getDate()<10?"0"+a.getDate():a.getDate(),r=""+a.getFullYear()+t+n;return m.a.createElement("div",{className:"info",onClick:e.changeVersionHandler},"buildDate: ",r,", isFinTech: ",e.isFinTech?"true":"false")}var y=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"letter-size"},m.a.createElement("div",{className:"resume-header"},m.a.createElement(d,null),m.a.createElement(f,null)),m.a.createElement("div",{className:"resume-body-wrapper"},m.a.createElement("div",{className:"resume-body-left"},m.a.createElement(b,{sectionDataKey:"projects",sectionTitle:"Project Experiences"})),m.a.createElement("div",{className:"resume-body-right"},m.a.createElement(b,{sectionDataKey:"education",sectionTitle:"Educations",isFinTech:this.props.isFinTech}),m.a.createElement(b,{sectionDataKey:"workExperience",sectionTitle:"Work Experience"}),m.a.createElement(v,null))),m.a.createElement(x,{isFinTech:this.props.isFinTech,changeVersionHandler:this.props.changeVersionHandler}))}}]),a}(m.a.Component),g=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={isFinTech:!1},t.changeVersionHandler=t.changeVersionHandler.bind(Object(c.a)(Object(c.a)(t))),t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"changeVersionHandler",value:function(){this.setState({isFinTech:!this.state.isFinTech})}},{key:"render",value:function(){return m.a.createElement(y,{changeVersionHandler:this.changeVersionHandler,isFinTech:this.state.isFinTech})}}]),a}(l.Component);h.a.render(m.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.ae82c1ed.chunk.js.map