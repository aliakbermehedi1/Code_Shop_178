// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";


// // import { DataTable } from 'primereact/datatable';
// // import { Column } from 'primereact/column';
// // import { Button } from 'primereact/button';
// // import { Ripple } from 'primereact/ripple';
// // import { Dropdown } from 'primereact/dropdown';
// // import { InputText } from 'primereact/inputtext';
// // import { classNames } from 'primereact/utils';

// const BasicTable = () => {
//   const [table, setTable] = useState([]);
  


//   // useEffect(() => {
//   //   axios
//   //     .get(
//   //       "https://light-of-islam-server-production-0204.up.railway.app/schedule"
//   //     )
//   //     .then((res) => setTable(res.data));
//   // }, []);


//   //////////////////////////////


// //   const deleteMethod = async () => {
// //     try {
// //         const { data } = axios.get(
// //             "https://light-of-islam-server-production-0204.up.railway.app/schedule"
// //         );
// //         setTable(data);
// //     } catch (error) {
// //         console.log(error);
// //   }


//    /////////////////////////////

//     // const fetchData = async () => {
//     //   try {
//     //     const { data } = axios.get(
//     //       "https://light-of-islam-server-production-0204.up.railway.app/schedule"
//     //     );
//     //     setTable(data);
//     //   } catch (error) {
//     //     console.log(error);
//     //   }

// ////////////////////////////


// //   const fetchData = async () => {
// //     try {
// //       const response = await api.post("/my-endpoint/", data);
// //       console.log(response.data);
// //     } catch (ex) {
// //       console.log(ex);
// //     }
// //   };
    

//   return (
//     <div>
//       <div>
//         <div className="card">
//           <DataTable
//             value={table}
//             header="Person Data"
//             showGridlines
//             stripedRows
//             size= "small"
//             responsiveLayout="scroll"
//             breakpoint="960px"
//           >
//             {/* <Button label="Proceed" className="p-button-raised p-button-rounded" /> */}
//             <Column field="_id" header="ID"></Column>
//             <Column field="phone" header="Phone"></Column>
//             <Column field="nid" header="NID"></Column>
//             <Column field="area" header="Area"></Column>
//             <Column field="city" header="City"></Column>
//             <Column field="upazila" header="Upazila"></Column>
//             <Column field="postCode" header="Post Code"></Column>
//             <Column field="status" header="Status"></Column>
//             <Column field="scholarName" header="Sholar Name"></Column>
//             <Column field="scholarId" header="Sholar ID"></Column>
//             <Column field="scholarEmail" header="Sholar Email"></Column>
//             <Column field="userName" header="User Name"></Column>
//             <Column field="userEmail" header="User Email"></Column>
//             <Column field="bookingDate" header="Booking Date"></Column>
//           </DataTable>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicTable
