import client from "../client";
export default {
  Mutation: {
    createMovie: (_, { title }) => {
      return client.movie.create({
        data: {
          title,
        },
      });
    },
  },
};
