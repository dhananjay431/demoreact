import { useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { Subject, debounceTime } from 'rxjs'
declare var ace:any,document:any
function T1() {
  //const { contactId } = useParams();
  //const [editor, seteditor] = useState();

  let sb = new Subject();

  console.log = function(data:any){
    document.getElementById("demo").innerHTML =data;
  }
  useEffect(() => {
    sb.pipe(debounceTime(5000)).subscribe((resp:any) =>{
       if(resp != ""){
        let xx = new Function(resp);
        let d = xx();
        console.log("resp=>",d);
       }
       
    })

  
    let ed = ace.edit('javascript-editor');
    ed.getSession().setMode('ace/mode/javascript');
    ed.setTheme('ace/theme/monokai');
    ed.session.on('change', function(delta:any) {

      sb.next(ed.getValue());
  });
  }, []);
  return (
    <>
      <div className="row">
  
      <div className="col-6">
         <div id="javascript-editor" style={{"height":"100vh"}}>

         </div>
    
      </div>
      <div className="col-6">
      <div className='w-100' id="demo">

      </div>

      </div>
    </div>
    </>
  );
}
export default T1;
