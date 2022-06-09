export const nameFilter = (users, query) => {
  if (query.length > 0) {
    return users.filter(
      ({ gender, name: { first, last }, email, location: { country } }) =>
        gender.toLowerCase().includes(query.toLowerCase()) ||
        email.toLowerCase().includes(query.toLowerCase()) ||
        country.toLowerCase().includes(query.toLowerCase()) ||
        first.toLowerCase().includes(query.toLowerCase()) ||
        last.toLowerCase().includes(query.toLowerCase()),
    );
  }
  return users;
};
