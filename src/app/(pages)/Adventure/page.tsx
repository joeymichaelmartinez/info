import underConstruction from "../../../../public/images/underConstruction.png";

export default function Adventure() {
  return ( 
  <div style={{textAlign: "center", marginTop:"10%", fontSize:"50px"}}>
    <div>Work in progress...</div>
    <div >Please check back later!</div>
    <img style={{margin:"auto", width: "20%"}} src={underConstruction.src} alt="Under Construction"/>
  </div>
  ) 
}