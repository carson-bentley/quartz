import { QuartzComponentProps, QuartzComponentConstructor } from "./types"



  export default (() => {
   
    function ApprovalBox(props: QuartzComponentProps) {
        var likedBy: string[] = []
        var clicked = false
        function handleClick(e: MouseEvent){
            e.preventDefault();
            console.log("hello")
            if(localStorage.getItem("user") !== null){
                if (!clicked){
                    likedBy.push(localStorage.getItem("user")!);
                }
                else {
                    const index = likedBy.indexOf(localStorage.getItem("user")!)
                    likedBy.splice(index, 1);
                }
                clicked = !clicked;
            }
      }
   
      return (
        <>
            <button onClick={e => handleClick(e)}>{clicked ? "not approved" : "approved"}</button>
        
        
        </>
      )
    }
   
    return ApprovalBox
  }) satisfies QuartzComponentConstructor