export const Practices = () =>{
    const students = [];
    return (<>
        <p>{students.length===0 && "No students found"}</p>
        <p>Number of students: {students.length}</p>
        </>
    )
}