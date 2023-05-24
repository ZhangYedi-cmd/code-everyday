const html = `<folder:name1><folder:name2>12312312</folder></folder>`;
const regex = /<folder:.*?>(.*?)[^</folder>]<\/folder>/;
const match = html.match(regex);

console.log(match)