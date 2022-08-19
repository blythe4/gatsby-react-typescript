import React from 'react'
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const HtmlAttributes = {
    lang: `ko`,
}
const HeadComponents = [
    <link
        key="lobster"
        rel="preload"
        href="/fonts/NotoSansKR-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
    />,
    <link
        key="inter-regular"
        rel="preload"
        href="/fonts/NotoSansKR-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
    />,
    <link
        key="inter-bold"
        rel="preload"
        href="/fonts/NotoSansKR-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
    />,
]

export const onRenderBody = (
    { setHtmlAttributes, setHeadComponents },
    pluginOptions,
) => {
    setHtmlAttributes(HtmlAttributes)
    setHeadComponents(HeadComponents)
}
