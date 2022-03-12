import client from "../client";

export default {
  Query: {
    movie: (_, { id }) => client.movie.findUnique({ where: { id } }),
  },
};
