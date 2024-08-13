/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graphql/entity/user/user.types.graphql":
/*!****************************************************!*\
  !*** ./src/graphql/entity/user/user.types.graphql ***!
  \****************************************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"age"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"users"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}}}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"age"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"age"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}}},"directives":[]}]}],"loc":{"start":0,"end":377}};
    doc.loc.source = {"body":"type User {\n  id: ID!\n  name: String!\n  email: String!\n  age: Int\n}\n\ntype Query {\n  users: [User!]! #returns an array of all users\n  user(id: ID!): User #returns a single user based on their ID\n}\n\ntype Mutation {\n  createUser(name: String!, email: String!, age: Int): User!\n\n  updateUser(id: ID!, name: String!, email: String!, age: Int): User!\n\n  deleteUser(id: ID!): User!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/functions/core/connectToDatabase.ts":
/*!*************************************************!*\
  !*** ./src/functions/core/connectToDatabase.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = connectToDatabase;
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
__webpack_require__(/*! dotenv/config */ "dotenv/config");
async function connectToDatabase() {
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/azman";
    if (mongoUri === "error") {
        throw new Error("MONGODB_URI environment variable is not defined");
    }
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log(`${new Date().toDateString()}
        connected to database`);
    }
    catch (error) {
        throw new Error(`Error connecting to mongodb ${error}`);
    }
}


/***/ }),

/***/ "./src/graphql/entity/user/user.resolver.ts":
/*!**************************************************!*\
  !*** ./src/graphql/entity/user/user.resolver.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const User_1 = __importDefault(__webpack_require__(/*! ../../../models/User */ "./src/models/User.ts"));
const user = {
    Query: {
        users: async () => {
            await User_1.default.find();
        },
        user: async (parent, args) => {
            return await User_1.default.findById(args.id);
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = new User_1.default({
                name: args.name,
                email: args.email,
                age: args.age,
            });
            return await user.save();
        },
        updateUser: async (parent, args) => {
            return await User_1.default.findByIdAndUpdate(args.id, { name: args.name, email: args.email, age: args.age }, { new: true });
        },
        deleteUser: async (parent, args) => {
            return await User_1.default.findByIdAndDelete(args.id);
        },
    },
};
exports["default"] = user;


/***/ }),

/***/ "./src/graphql/resolvers.ts":
/*!**********************************!*\
  !*** ./src/graphql/resolvers.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const user_resolver_1 = __importDefault(__webpack_require__(/*! ./entity/user/user.resolver */ "./src/graphql/entity/user/user.resolver.ts"));
const merge_1 = __webpack_require__(/*! @graphql-tools/merge */ "@graphql-tools/merge");
const resolvers = (0, merge_1.mergeResolvers)([
    user_resolver_1.default,
    // hazard
]);
exports["default"] = resolvers;


/***/ }),

/***/ "./src/graphql/schema.ts":
/*!*******************************!*\
  !*** ./src/graphql/schema.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const schema_1 = __webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
const resolvers_1 = __importDefault(__webpack_require__(/*! ./resolvers */ "./src/graphql/resolvers.ts"));
const typeDefs_1 = __importDefault(__webpack_require__(/*! ./typeDefs */ "./src/graphql/typeDefs.ts"));
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
});
exports["default"] = schema;


/***/ }),

/***/ "./src/graphql/typeDefs.ts":
/*!*********************************!*\
  !*** ./src/graphql/typeDefs.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const merge_1 = __webpack_require__(/*! @graphql-tools/merge */ "@graphql-tools/merge");
const user_types_graphql_1 = __importDefault(__webpack_require__(/*! ./entity/user/user.types.graphql */ "./src/graphql/entity/user/user.types.graphql"));
const typeDefs = (0, merge_1.mergeTypeDefs)([
    user_types_graphql_1.default,
    // hazard
]);
exports["default"] = typeDefs;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const server_1 = __webpack_require__(/*! @apollo/server */ "@apollo/server");
const express4_1 = __webpack_require__(/*! @apollo/server/express4 */ "@apollo/server/express4");
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
__webpack_require__(/*! dotenv/config */ "dotenv/config");
const connectToDatabase_1 = __importDefault(__webpack_require__(/*! ./functions/core/connectToDatabase */ "./src/functions/core/connectToDatabase.ts"));
const schema_1 = __importDefault(__webpack_require__(/*! ./graphql/schema */ "./src/graphql/schema.ts"));
const body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
async function startServer() {
    try {
        const app = (0, express_1.default)();
        const PORT = "3001" || 0;
        await (0, connectToDatabase_1.default)();
        const server = new server_1.ApolloServer({ schema: schema_1.default });
        await server.start();
        // server.start();
        app.use("/graphql", body_parser_1.default.json(), (0, express4_1.expressMiddleware)(server));
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.get("/", (req, res) => {
            res.send("Express + TypeScript Server");
        });
        app.listen(PORT, () => {
            console.log(`[server]: Server is running at http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(`Error starting the server ${error}`);
        process.exit(1);
    }
}
startServer();


/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
}, {
    timestamps: true
});
const User = (0, mongoose_1.model)('User', userSchema);
exports["default"] = User;


/***/ }),

/***/ "@apollo/server":
/*!*********************************!*\
  !*** external "@apollo/server" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/server");

/***/ }),

/***/ "@apollo/server/express4":
/*!******************************************!*\
  !*** external "@apollo/server/express4" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/server/express4");

/***/ }),

/***/ "@graphql-tools/merge":
/*!***************************************!*\
  !*** external "@graphql-tools/merge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-tools/merge");

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-tools/schema");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map