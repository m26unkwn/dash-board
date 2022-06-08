export const Table = ({ data }) => {
  const {
    gender,
    name: { first, last },
    email,
    location: { country },
    picture: { thumbnail },
  } = data;
  return (
    <tr>
      <td>
        <img src={thumbnail} />
      </td>
      <td>
        {first} {last}
      </td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{country}</td>
    </tr>
  );
};
