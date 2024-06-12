
  export interface T {
    THUMBS_UP?: {
      count: number;
      viewerHasReacted: boolean;
    };
    THUMBS_DOWN?: {
      count: number;
      viewerHasReacted: boolean;
    };
    LAUGH?: {
      count: number;
      viewerHasReacted: boolean;
    };
    HOORAY?: {
      count: number;
      viewerHasReacted: boolean;
    };
    CONFUSED?: {
      count: number;
      viewerHasReacted: boolean;
    };
    HEART?: {
      count: number;
      viewerHasReacted: boolean;
    };
    ROCKET?: {
      count: number;
      viewerHasReacted: boolean;
    };
    EYES?: {
      count: number;
      viewerHasReacted: boolean;
    };
  }
 
  


 const reactions: T = {
    THUMBS_UP: {count: 2, viewerHasReacted: true},
    THUMBS_DOWN: { count: 2, viewerHasReacted: true },
    LAUGH: { count: 10, viewerHasReacted: false },
    HOORAY: { count: 3, viewerHasReacted: true },
    CONFUSED: { count: 1, viewerHasReacted: false },
    HEART: { count: 7, viewerHasReacted: false },
    ROCKET: { count: 4, viewerHasReacted: false },
    EYES: { count: 6, viewerHasReacted: true }
}

window.addEventListener('message', handleMessage);


function handleMessage(event: MessageEvent) {
    if (event.origin !== 'https://giscus.app') return;
    if (!(typeof event.data === 'object' && event.data.giscus)) return;
  
    const giscusData = event.data.giscus;
    if (giscusData.viewer == undefined) return;
    localStorage.setItem("user", giscusData.viewer.login)
    localStorage.setItem("userAvatar", giscusData.viewer.avatarUrl)
    console.log(localStorage.getItem("user"))
    window.removeEventListener('message', handleMessage)
  }



