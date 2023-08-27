export async function getStaticProps() {
  const res = await fetch("https://api.jikan.moe/v4/seasons/now");
  const res2 = await fetch("https://api.jikan.moe/v4/seasons/now?page=2");
  const posts = await res.json();
  const posts2 = await res2.json();
  const data = posts.data.concat(posts2.data);

  return {
    props: {
      data,
    },
  };
}

export default function CardDisplay({ data }) {
  return (
    <ul>
      {data.map((post) => (
        <li key={post.mal_id}>{post.title}</li>
      ))}
    </ul>
  );
}
