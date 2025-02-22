import React from "react";

const Seo = () => {
  return (
    <div>
      <p>
        <strong>Overview:</strong> SEO (Search Engine Optimization) is the
        practice of enhancing a website's visibility on search engines like
        Google. In HTML, SEO involves structuring your content and code in a way
        that makes it easier for search engines to understand and rank your web
        pages.
      </p>
      <p>
        <strong>Why is SEO Important in HTML:</strong> Search engines use bots
        (called crawlers) to scan and index web pages. Properly structured HTML
        helps these bots understand the content and context of your website,
        which can improve your site's ranking on search engine results pages
        (SERPs).
      </p>
      <p>
        <strong>Key HTML Elements for SEO:</strong>
        <ol>
          <li>Title Tag({"<title>"}):</li>
          <ul>
            <li>Appears as the clickable headline in search results.</li>
            <li>
              Should be unique, descriptive, and contain primary keywords.
            </li>
            <li>Length: 50-60 characters.</li>
          </ul>
          <p>
            <strong>Ex:</strong>
            {"<title>Learn SEO in HTML: Best Practices and Tips</title>"}
          </p>
          <li>Meta Description ({"<meta name='description'>"})</li>
          <ul>
            <li>Summarizes the content of the page.</li>
            <li>Appears under the title in search results.</li>
            <li>Length: 150-160 characters.</li>
          </ul>
          <p>
            <strong>Ex:</strong>
            {
              "<meta name='description' content='Discover the best SEO practices in HTML to enhance your website's visibility on search engines.'>"
            }
          </p>
          <li>Heading Tags ({"<h1> to <h6>"})</li>
          <ul>
            <li>Organize content into sections, indicating importance.</li>
            <li>
              {"<h1>"} is the main heading (only one per page, containing
              primary keyword).
            </li>
            <li>
              {"<h2>"} to {"<h6>"} are subheadings for structure and
              readability.
            </li>
          </ul>
          <li>Image Alt Text (alt Attribute)</li>
          <ul>
            <li>Describes images for screen readers and search engines.</li>
            <li>Improves accessibility and image search ranking.</li>
          </ul>
          <p>
            <strong>Ex:</strong>{" "}
            {"<img src='seo-guide.jpg' alt='Comprehensive SEO Guide for HTML'>"}
          </p>
          <li>Anchor Tags ({'<a href="">'})</li>
          <ul>
            <li>
              Used for internal linking (linking to other pages on the same
              site) and external linking (linking to other websites).
            </li>
            <li>Use descriptive anchor text containing keywords.</li>
          </ul>
          <p>
            <strong>Ex:</strong>{" "}
            {'<a href="seo-best-practices.html">Learn SEO Best Practices</a>'}
          </p>
        </ol>
      </p>
      <li>
        <strong>semantic html tag: </strong>
        {""}
        <p>
          Use meaningful tags like {"<article>, <section>, <nav>, <header>,"}{" "}
          and {"<footer>"} to help search engines understand the content
          structure.
        </p>
      </li>
    </div>
  );
};

export default Seo;
