/* export default function thisSeason({ seasonalNow, data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.mal_id}>{item.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
export async function getThisSeason() {
  const res = await fetch("https://api.jikan.moe/v4/seasons/now");
  const data = await res.json();
  const seasonalNow = data.data;

  // By returning { props: { posts } }, the thisSeason component will receive `posts` as a prop at build time
  return {
    props: {
      seasonalNow,
      data,
    },
  };
} */

// posts will be populated at build time by getStaticProps()
export default function Blog({ posts }) {
  const data = posts.data;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.mal_id}>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.jikan.moe/v4/seasons/now");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
