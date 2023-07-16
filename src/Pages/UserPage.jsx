import React, { useEffect, useState } from "react";
import { auth, db } from "../FirebaseConfiguration";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TableUserData from "../Components/TableUserData";
import { Grade } from "@mui/icons-material";
import Graph from "../Components/Graph";
import UserInfo from "../Components/UserInfo";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [graphData, setGraphData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const fetchUserData = () => {
    const resultsRef = db.collection("Results");
    const { uid } = auth.currentUser;
    let tempData = [];
    let tempGraphData = [];
    resultsRef
      .where("userId", "==", uid)
      .orderBy('timeStamp', 'desc')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          tempData.push({ ...doc.data() });
          tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0], doc.data().wpm]);
        });
        setData(tempData);
        setGraphData(tempGraphData.reverse());
        setDataLoading(false);
      });
  };

  useEffect(() => {
    if (!loading) {
      fetchUserData();
    }
    if (!loading && !user) {
      navigate("/");
    }
  }, [loading]);

  if (loading || dataLoading) {
    return <div className="center-of-screen">
               <CircularProgress size={150} />
           </div>;
  }

  return (
    <div>
      <div className="canvas" style={{overflowX: "hidden"}}>
        <UserInfo totalTestsTaken={data.length}/>
        <div className="graph-user-page">
            <Graph graphData={graphData} type='date' />
        </div>
        <TableUserData data= {data}/>
      </div>
    </div>
  );
};

export default UserPage;
