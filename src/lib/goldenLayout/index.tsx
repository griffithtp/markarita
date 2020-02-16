import dynamic from 'next/dynamic'

import "./goldenLayout-dependencies";

const DynamicComponentWithNoSSR = dynamic(() => import('./goldenLayoutComponent').then(gl => gl.GoldenLayoutComponent), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />