import User from "../../../models/User";
const user = {
    Query: {
        getUsers: async () => { (await User.find()); },
        getUser: async (parent, args) => {
            return await User.findById(args.id);
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = new User({ name: args.name, email: args.email, age: args.age });
            return await user.save();
        },
        updateUser: async (parent, args) => {
            return await User.findByIdAndUpdate(args.id, { name: args.name, email: args.email, age: args.age }, { new: true });
        },
        deleteUser: async (parent, args) => {
            return await User.findByIdAndDelete(args.id);
        },
    },
};
export default user;
