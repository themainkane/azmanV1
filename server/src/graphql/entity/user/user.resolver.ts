import User from "../../../models/User";
const user = {
  Query: {
    users: async () => {
      await User.find();
    },

    user: async (parent: any, args: { id: string }) => {
      return await User.findById(args.id);
    },
  },

  Mutation: {
    createUser: async (
      parent: any,
      args: { name: string; email: string; age?: number }
    ) => {
      const user = new User({
        name: args.name,
        email: args.email,
        age: args.age,
      });
      return await user.save();
    },
    updateUser: async (
      parent: any,
      args: { id: string; name?: string; email?: string; age?: number }
    ) => {
      return await User.findByIdAndUpdate(
        args.id,
        { name: args.name, email: args.email, age: args.age },
        { new: true }
      );
    },
    deleteUser: async (parent: any, args: { id: string }) => {
      return await User.findByIdAndDelete(args.id);
    },
  },
};

export default user;
