
// @ts-ignore
import script from "./scripts/comments.inline"
import { QuartzComponentProps, QuartzComponentConstructor } from "./types"
import 'giscus';




interface Options {
    //empty interface to satisfy quartz
  }
   
//giscus-widget throws error because it's not proper JSX
//Global namespace for giscus-widget in quartz/index.d.ts
export default ((userOpts?: Options) => {
    
    function Comments(props: QuartzComponentProps) { 
    return (
        <>
        {/* esm.sh */}
        <script type="module" src="https://esm.sh/giscus"></script>
        <giscus-widget
            id="comments"
            repo="carson-bentley/quartz"
            repoid="R_kgDOMHlTIg"
            category="Announcements"
            categoryid="DIC_kwDOMHlTIs4Cf_pM"
            mapping="pathname"
            term="Welcome to giscus!"
            reactionsenabled="1"
            emitmetadata="1"
            inputposition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
            crossorigin="anonymous">
        </giscus-widget> 
    </>
      )
    }
    Comments.afterDOMLoaded=script;
    return Comments
  }) satisfies QuartzComponentConstructor