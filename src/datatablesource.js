export const userColumns = [
  { field: 'idNum', headerName: 'ID Number', width: 150, },
    {
      field: 'img', headerName: '', width: 50, renderCell:(params)=>{
        return(
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" style={{marginTop:10}}/>
            {/* {params.row.lastName}, {params.row.firstName} */}
             
          </div>
        );
    },
  },
  { field: 'lastName', headerName: 'Last Name', width: 150, },
  { field: 'firstName', headerName: 'First Name', width: 150, },
  { field: 'email', headerName: 'School Email', width: 250, },
  { field: 'department', headerName: 'Department', width: 150, },
  { field: 'role', headerName: 'Role', width: 150, },
];

export const classColumns = [
  { field: 'classCode', headerName: 'ClassCode', width: 130, },
  {
    field: 'img', headerName: '', width: 50, renderCell:(params)=>{
      return(
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" style={{marginTop:10}}/>
          {/* {params.row.classDesc} */}
        </div>
      );
    },
  },
  { field: 'classDesc', headerName: 'Class Description', width: 330, },
  { field: 'classType', headerName: 'Type', width: 100, },
  { field: 'classSec', headerName: 'Section', width: 130, },
  { field: 'classRoom', headerName: 'Classroom', width: 100, },
  { field: 'semester', headerName: 'Semester', width: 100, },
  { field: 'schoolYear', headerName: 'School Year', width: 100, },
];

export const userClassColumns = [
  { field: 'status', headerName: 'Status', width: 150, },
  { field: 'timeIn', headerName: 'Time In', width: 300, },
  { field: 'timeOut', headerName: 'Time Out', width: 300, },
];

export const roomColumns = [
  { field: 'building', headerName: 'Building', width: 120, },
  { field: 'roomNum', headerName: 'Room No.', width: 120, },
  { field: 'location', headerName: 'Location', width: 220, },
  { field: 'capacity', headerName: 'Capacity', width: 120, },
  { field: 'occupancyStatus', headerName: 'Status', width: 120, },
  { field: 'timeStamp', headerName: 'Document Timestamp', width: 220, },
];

export const accessPointColumns = [
  { field: 'macAddress', headerName: 'MAC Address', width: 300, },
  { field: 'location', headerName: 'Location', width: 300, },
  { field: 'signalStr', headerName: 'Signal Strength', width: 120, },
  { field: 'status', headerName: 'Status', width: 120, },
  { field: 'timeStamp', headerName: 'Document Timestamp', width: 220, },
];

export const classConnectColumns = [
  { field: 'classCode', headerName: 'ClassCode', width: 100, },
  {
    field: 'img', headerName: '', width: 50, renderCell:(params)=>{
      return(
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" style={{marginTop:10}}/>
          {/* {params.row.classDesc} */}
        </div>
      );
    },
  },
  { field: 'classDesc', headerName: 'Class Description', width: 250, },
  { field: 'classType', headerName: 'Type', width: 100, },
  { field: 'classSec', headerName: 'Section', width: 100, },
  { field: 'semester', headerName: 'Semester', width: 100, },
  { field: 'schoolYear', headerName: 'School Year', width: 100, },
];

export const userConnectColumns = [
  { field: 'idNum', headerName: 'ID Number', width: 120, },
    {
      field: 'img', headerName: '', width: 50, renderCell:(params)=>{
        return(
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" style={{marginTop:10}}/>
            {/* {params.row.lastName}, {params.row.firstName} */}
             
          </div>
        );
    },
  },
  { field: 'lastName', headerName: 'Last Name', width: 150, },
  { field: 'firstName', headerName: 'First Name', width: 150, },
  { field: 'department', headerName: 'Department', width: 150, },
  { field: 'role', headerName: 'Role', width: 150, },
];

export const userSingleColumns = [
  { field: 'idNum', headerName: 'ID Number', width: 150, },
    {
      field: 'img', headerName: '', width: 50, renderCell:(params)=>{
        return(
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" style={{marginTop:10}}/>
            {/* {params.row.lastName}, {params.row.firstName} */}
          </div>
        );
    },
  },
  { field: 'lastName', headerName: 'Last Name', width: 150, },
  { field: 'firstName', headerName: 'First Name', width: 150, },
  { field: 'email', headerName: 'School Email', width: 250, },
  { field: 'department', headerName: 'Department', width: 150, },
  { field: 'role', headerName: 'Role', width: 150, },
];

export const classSingleColumns = [
  { field: 'classCode', headerName: 'ClassCode', width: 130, },
  {
    field: 'img', headerName: '', width: 50, renderCell:(params)=>{
      return(
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" style={{marginTop:10}}/>
          {/* {params.row.classDesc} */}
        </div>
      );
    },
  },
  { field: 'classDesc', headerName: 'Class Description', width: 380, },
  { field: 'classType', headerName: 'Type', width: 100, },
  { field: 'classSec', headerName: 'Section', width: 130, },
  { field: 'classRoom', headerName: 'Classroom', width: 100, },
  { field: 'semester', headerName: 'Semester', width: 100, },
  { field: 'schoolYear', headerName: 'School Year', width: 100, },
];
