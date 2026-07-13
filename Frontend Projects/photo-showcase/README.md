# Photo Showcase

## Goal

The goal of this project is to teach you how to handle images, captions, and embedded media in HTML. You will build a page that displays a small collection of images with proper alt text, captions, and one embedded video. Do not style the page; styling will be addressed in a later project. Focus here on the markup that decides how the media is loaded, described, and announced.

In this project, you are required to build a single HTML page that showcases a small collection of photos or images.

You can use your own images, public images, or placeholder URLs - the focus is on the markup, not the photos.

## Requirements

- [x] A semantic page: Use <header>, <main>, and <footer> to structure the page itself.

- [x] At least six images inside the main content. Each <img> must include:

    A src that points to a real image (a local file or a public URL).

    A useful alt attribute that describes the image, not the filename.

    width and height attributes to reserve layout space and prevent the page from jumping as images load.

- [x] Captions on at least three images using <figure> and <figcaption>. Remember: the alt text stands in for the image when it cannot be seen; the caption gives extra context to everyone.

- [x] One decorative image (put any image) with alt="" so screen readers skip it. Leaving the attribute off entirely is different - always include it.

- [x] One embedded <video> with controls, a poster image, and fallback text between the opening and closing tags. If you do not have a video file, use any small .mp4 you have on your computer; the player UI will still appear from the markup alone.

- [x] Head metadata: Set <title>, <meta charset>, and <meta viewport>.
