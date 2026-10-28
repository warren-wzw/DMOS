const copyButton = document.getElementById("copyBib");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const citation = document.getElementById("bibtex");
    const status = document.getElementById("copy-status");
    try {
      await navigator.clipboard.writeText(citation.innerText);
      status.textContent = "Citation copied.";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(citation);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Citation selected. Press Ctrl+C or Command+C to copy.";
    }
  });
}
