// description property taken from MDN docs at corresponding MDNLink
// Creative Commons Attribution-ShareAlike license (CC-BY-SA) http://creativecommons.org/licenses/by-sa/2.5/

const FeaturesData = [
  {
    name: "destructuring",
    description: "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
    MDNLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring",
    isImplemented: false,
    implementations: "FeaturesList.js (props)"
  },
  {
    name: "class and extends",
    description: "JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.",
    MDNLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",    
    isImplemented: true,
    implementations: "App.js"
  },
  {
    name: "import",
    description: "The static import statement is used to import bindings which are exported by another module",
    MDNLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
    isImplemented: false,
    implementations: "App.js, FeaturesList.js"
  },
  {
    name: "export",
    description: "The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.",
    MDNLink: "https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export",
    isImplemented: false,
    implementations: "FeaturesList.js, FeatureData.js, App.js"
  }

]

module.exports = FeaturesData
