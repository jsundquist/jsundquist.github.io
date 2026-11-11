const nodes = Array.from(document.querySelectorAll<HTMLElement>("div.mermaid"));

if (nodes.length > 0) {
  const sources = nodes.map((node) => node.textContent ?? "");
  const { default: mermaid } = await import("mermaid");

  const render = async () => {
    const dark = document.documentElement.classList.contains("dark");
    mermaid.initialize({
      startOnLoad: false,
      theme: dark ? "dark" : "default",
      securityLevel: "strict",
      fontFamily: "inherit",
    });
    for (const [i, node] of nodes.entries()) {
      const { svg } = await mermaid.render(`mermaid-${i}-${Date.now()}`, sources[i]);
      node.innerHTML = svg;
      node.dataset.processed = "true";
    }
  };

  await render();

  new MutationObserver(render).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
}
