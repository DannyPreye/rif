/**
 * @typedef {import("@prismicio/client").Content.BlogQuoteSlice} BlogQuoteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogQuoteSlice>} BlogQuoteProps
 * @param {BlogQuoteProps}
 */
const BlogQuote = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_quote (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogQuote;
