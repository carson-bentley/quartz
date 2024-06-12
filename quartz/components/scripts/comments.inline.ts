



//Function to refresh the Giscus comments.
//Without this, comments will not load through navigations
function reloadIframeScript() {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://esm.sh/giscus"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.innerHTML = `<!-- esm.sh -->`
    script.type = 'module';
    script.src = 'https://esm.sh/giscus';
    script.setAttribute('id', 'comments');
    script.setAttribute('repo', 'carson-bentley/quartz');
    script.setAttribute('repoid', 'R_kgDOMHlTIg');
    script.setAttribute('category', 'Announcements');
    script.setAttribute('categoryid', 'DIC_kwDOMHlTIs4Cf_pM');
    script.setAttribute('mapping', 'pathname');
    script.setAttribute('term', 'Welcome to giscus!');
    script.setAttribute('reactionsenabled', '1');
    script.setAttribute('emitmetadata', '1');
    script.setAttribute('inputposition', 'top');
    script.setAttribute('theme', 'preferred_color_scheme');
    script.setAttribute('lang', 'en');
    script.setAttribute('loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous')
   
    
    document.head.appendChild(script);
  }

//call function everytime user navigates
document.addEventListener("nav", () => {
      reloadIframeScript();
      
  })
