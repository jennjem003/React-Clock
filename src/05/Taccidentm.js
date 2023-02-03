
import Taccidentheader from "./Taccidentheader";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tcontent from "./Tcontent";

const Taccidentm = ({c1,c2,data}) =>{
    //console.log("c1",c1)
    //console.log("c2",c2)
    //console.log("data",data)
    return(
        <>
        <div className="tcontent">
            <div className="theader">
                <Taccidentheader/>
            </div>
            <div className="tmain">
                <Tc1/>
                <Tc2/>
                <Tcontent/>
            </div>
        </div>
        </>
    )
}
export default Taccidentm;