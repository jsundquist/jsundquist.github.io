export function remarkMermaid() {
  return (tree: any) => {
    const walk = (node: any) => {
      if (!node || typeof node !== "object") {
        return;
      }

      if (node.type === "code" && node.lang === "mermaid") {
        node.data ||= {};
        node.data.hName = "div";
        node.data.hProperties = { className: ["mermaid"] };
        node.data.hChildren = [{ type: "text", value: node.value }];
      }

      if (Array.isArray(node.children)) {
        for (const child of node.children) {
          walk(child);
        }
      }
    };

    walk(tree);
  };
}
