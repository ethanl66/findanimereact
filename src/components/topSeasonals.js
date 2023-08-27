/* // Using getThisSeason TO FETCH DATA FROM A CMS
// posts will be populated at build time by getStaticProps()
export function thisSeason({ seasonalNow }) {
  return (
    <ul>
      {seasonalNow((title) => (
        <li>{title.title}</li>
      ))}
    </ul>
  );
}
 */
