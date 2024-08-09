import user from "./entity/user/user.resolver";
import { mergeResolvers } from "@graphql-tools/merge";

const resolvers = mergeResolvers([
    user,
    // hazard
]);

export default resolvers;