const breadcrumbsContainer = document.getElementById("breadcrumbs");

const breadcrumbItems = [
  { text: "Home", link: "#" },
  { text: "Category", link: "#" },
  { text: "Product", link: "#" }
];

breadcrumbsContainer.innerHTML = "";

breadcrumbItems.forEach((item, index) => {
  const breadcrumbLink = document.createElement("a");
  breadcrumbLink.textContent = item.text;
  breadcrumbLink.href = item.link;
  
  breadcrumbsContainer.appendChild(breadcrumbLink);
  
  if (index < breadcrumbItems.length - 1) {
    const dividerSpan = document.createElement("span");
    dividerSpan.textContent = " > ";
    dividerSpan.className = "breadcrumb-divider";
    breadcrumbsContainer.appendChild(dividerSpan);
  }
});
