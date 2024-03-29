import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

// Default Image
const DefaultImage = ({ slice }) => (
  <div className="post-image">
    <figcaption className="block-img">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption.raw
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="image-label">
          <small>{slice.primary.image.alt}</small>
          <br/>
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
    </figcaption>
  </div>
)

// Emphasized Image
const EmphasizedImage = ({ slice }) => (
  <div className="post-image">
    <figcaption className="block-img emphasized">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      <small>{RichText.asText(slice.primary.image.alt)}</small>
      {slice.primary.caption.raw
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="image-label">
          <small>{slice.primary.image.alt}</small>
          <br/>
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
    </figcaption>
  </div>
)

// Full Width Image
const FullWidthImage = ({ slice }) => (
  <div
    className="post-image full-width-image"
    style={{ backgroundImage: `url(${slice.primary.image.url})` }}
  >
    <small>{RichText.asText(slice.primary.image.alt)}</small>
    <div className="wrapper">
      {slice.primary.caption.raw
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <span className="image-label">
          <small>{slice.primary.image.alt}</small>
          <br/>
          {RichText.asText(slice.primary.caption.raw)}
        </span>
        ) : null}
    </div>
  </div>
)

// Function to determine the image type
const renderSwitch = (slice) => {
  switch (slice.slice_label) {
    case 'image-full-width':
      return <FullWidthImage slice={slice} />
    case 'emphasized':
      return <EmphasizedImage slice={slice} />
    default:
      return <DefaultImage slice={slice} />
  }
}

export default ({ slice }) => <>{renderSwitch(slice)}</>
