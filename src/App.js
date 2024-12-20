import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/loginpage';
import List from './pages/list/list';
import New from './pages/new/new';
import Single from './pages/single/single';
import Edit from './pages/edit/edit';
import Connect from './pages/connect/connect';

// FOR INPUTS IN NEW.JS & EDIT.JS
import { userInputs, classInputs } from './formSource';
// FOR LIST.JS
import { classColumns, userColumns, userClassColumns, classConnectColumns, userConnectColumns, userSingleColumns, classSingleColumns } from './datatablesource';
// FOR SINGLE.JS DETAILS
import { classSingle, userSingle } from './singleSource';

//RELATIOJNALS
import SelectListUserClasses from './pages/selectList_UserClasses/selectList_UserClasses';

//OTHER TABS
import Schedule from './pages/schedule/schedule';
import AdminProfile from './pages/admin_profile/admin_profile';
import AttendRecord from './pages/attendRecord/attendRecord';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import FacultyAttendance from './pages/facultyAttendance/facultyAttendance';

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Login Route - accessible without auth */}
          <Route path="/login" element={<Login />} />

          {/* All other routes are wrapped inside RequireAuth */}
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect from root */}

          <Route path="dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />

            {/* route for "users" entity*/}
            <Route path="users">
              {/* route for list of "users"*/}
              <Route index element={
                <RequireAuth>
                  <List entity="users" tableTitle="List of Users" entityColumns={userColumns}/>
                </RequireAuth>
                }
              />

              {/* route for reading single user page*/}
              <Route path=":id" element={
                  <RequireAuth>
                    <Single entitySingle={userSingle} entity="users"
                      // INSIDE USERS, THEIR DATA TABLE SHOWS THEIR CLASSES INVOLVED
                      entityAssign="users" entityTable="classes" entityConnect="userClasses" tableTitle="Assign to a Class" entityColumns={classSingleColumns}/>
                  </RequireAuth>
                }
              />

              {/* route for editing user info */}
              <Route path=":id/edit" element={
                  <RequireAuth>
                    <Edit inputs={userInputs} title="Edit User" entityType="user"/>
                  </RequireAuth>
                }
              />

              {/* INSIDE SELECTING, USERS ARE ADDED INTO A CLASS */}
              <Route path=":id/select" element={
                  <RequireAuth>
                    <SelectListUserClasses entity="classes" tableTitle="Assign User to a Class" entityColumns={classConnectColumns} entitySingle={userSingle}/>
                  </RequireAuth>
                }
              />

              {/* Adding a new user */}
              <Route path="new" element={
                <RequireAuth>
                  <New inputs={userInputs} title="Add New User" entityType="user" />
                </RequireAuth>
                }
              />
            </Route>

            {/* route for "classes" entity*/}
            <Route path="classes">
              
              {/* route for list of "classes"*/}
              <Route index element={
                  <RequireAuth>
                    <List entity="classes" tableTitle="List of Classs" entityColumns={classColumns}/>
                  </RequireAuth>
                }
              />

              {/* route for viewing a single class*/}
              <Route path=":id" element={
                <RequireAuth>
                  <Single entitySingle={classSingle} entity="classes"
                    // INSIDE CLASSES, THEIR DATA TABLE SHOWS THEIR LIST OF USERS INVOLVED
                    entityTable="users" entityAssign="classes" tableTitle="List of Users Enrolled" entityColumns={userSingleColumns} 
                  />
                </RequireAuth>
                }
              />

              {/* route for editing class entity*/}
              <Route path=":id/edit" element={
                  <RequireAuth>
                    <Edit inputs={classInputs} title="Edit Class" entityType="class"/>
                  </RequireAuth>
                }
              />

              {/* INSIDE SELECTING, USERS ARE ADDED INTO A CLASS */}
              <Route path=":id/select" element={
                  <RequireAuth>
                    <SelectListUserClasses entity="users" tableTitle="Add User to a Class" entityColumns={userConnectColumns} entitySingle={classSingle}/>
                  </RequireAuth>
                }
              />

              <Route path="new" element={
                <RequireAuth>
                  <New inputs={classInputs} title="Add New Class" entityType="class" />
                </RequireAuth>
                } />
            </Route>

            {/* route for "userClasses" entity*/}
            <Route path="userClasses">
              
              {/* route for viewing a single class*/}
              <Route path=":id" element={
                <RequireAuth>
                  <Connect userColumns={userSingle} classColumns={classSingle} entityColumns={userClassColumns} entityTable="attendRecord" tableTitle="Attendance"/>
                </RequireAuth>
                }
              />

            </Route>

          {/* Route for attendance records */}
          <Route path="schedule">
            <Route index element={<RequireAuth> <Schedule/> </RequireAuth>}/>
            <Route path=":id" element={<RequireAuth><AttendRecord /></RequireAuth>} />
          </Route>  
          <Route path="profile" element={<RequireAuth><AdminProfile /></RequireAuth>}/>
          <Route path="facultyAttendance" element={<RequireAuth><FacultyAttendance /></RequireAuth>}/>

          {/* Redirect to login for any unknown paths */}
          <Route path="*" element={<RequireAuth><PageNotFound/></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;