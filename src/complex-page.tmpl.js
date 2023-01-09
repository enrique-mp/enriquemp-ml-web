export const title = "Welcome to my page";
export const layout = "layouts/main.njk";
export const links = [
    {
        text: "My Twitter",
        url: "https://twitter.com/misteroom"
    }, {
        text: "My Github profile",
        url: "https://github.com/oscarotero"
    }
];

export default function ({ title, links }) {
    return `
    <article>
      <header>
        <h1>${ title }</h1>
      <header>

      <ul>
        ${ links.map((link) =>
          `<li><a href="${ link.url }">${ link.text }</a></li>`
        ).join("") }
      </ul>
    </article>`;
}