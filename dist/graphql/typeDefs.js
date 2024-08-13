import { mergeTypeDefs } from "@graphql-tools/merge";
import user from "./entity/user/user.types.graphql";
const typeDefs = mergeTypeDefs([
    user,
    // hazard
]);
export default typeDefs;
