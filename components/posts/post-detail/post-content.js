import ReactMarkdown from "react-markdown";
import Image from "next/image";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        const { src, alt } = node.properties;
        const imageSize = getImageSize(src);

        const imageStyle = {
          objectFit:
            getImageOrientation(src) === "square" ? "cover" : "contain",
        };

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={alt}
              width={imageSize.width}
              height={imageSize.height}
              style={imageStyle}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    a: ({ children, href }) => {
      if (isExternalLink(href) || isFileDownloadLink(href)) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      } else {
        return <a href={href}>{children}</a>;
      }
    },
  };

  const getImageSize = (src) => {
    // Custom logic to determine the image size based on the image source (src)
    // You can implement your own logic here based on the image's aspect ratio or any other criteria.

    // Example logic:
    const imageOrientation = getImageOrientation(src);
    const width = imageOrientation === "square" ? 300 : 400;
    const height = imageOrientation === "square" ? 300 : 300;

    return { width, height };
  };

  const getImageOrientation = (src) => {
    // Custom logic to determine the image orientation based on the image source (src)
    // You can implement your own logic here based on the image's aspect ratio or any other criteria.

    // Example logic:
    if (/\bsquare\b/.test(src)) {
      return "square";
    } else if (/\bportrait\b/.test(src)) {
      return "portrait";
    } else {
      return "landscape";
    }
  };

  const isExternalLink = (href) => {
    return (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:")
    );
  };

  const isFileDownloadLink = (href) => {
    return href.startsWith("/downloads");
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
