import React from 'react';
import {getDatabase,ref,onValue} from 'firebase/database';
import {Table} from 'react-bootstrap'
const db=getDatabase();
export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state={
            tableData:[]
        }
    }
    componentDidMount(){
        const dbRef=ref(db,'Mark1/');
        onValue(dbRef,(snapshot)=>{
            let records=[];
            snapshot.forEach(childSnapshot=>{
                let keyName=childSnapshot.key;
                let data=childSnapshot.val();
                records.push({"key":keyName,"data":data});
            });
            this.setState({tableData:records});
        });
    }
    render(){
        return(
            <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Attendance</th>
                    <th>Mark</th>
                </tr>
            </thead>
            <tbody>
                {this.state.tableData.map((row,index)=>{
                    return(
                        <tr>
                            <td>{index}</td>
                            <td>{row.key}</td>
                           {/* <td>{row.data.Name}</td> */}
                            <td>{row.data.Attendance}</td>
                            <td>{row.data.Mark}</td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
        )
    }
}