import Header from "./Header";
import Paragraph from "./Paragraph";
import Image from "./Image";
import List from "./List";
import Table from "./Table";
import Delimiter from "./Delimiter";

const Renderer = data => {
  if (!data || typeof data !== "object") return "";
  const content = JSON.parse(data.body);

  return content.map(block => {
    switch (block.type) {
      case "header":
        return Header(block.data);
      case "list":
        return List(block.data);
      case "paragraph":
        return Paragraph(block.data);
      case "image":
        return Image(block.data);
      case "table":
        return Table(block.data);
      case "delimiter":
        return Delimiter;

      default:
        return "";
    }
  });
};

export default Renderer;