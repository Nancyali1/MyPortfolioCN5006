//arrow function with no name, this function does not take any argument vrbname = () => {}
//code for Exercise 3 (part 1) starts here:
const dateofBirth= "12/12/1980"

const getStudentName = () =>
{
return "write your name here"
}
const getCampusName = () =>
{return ("UEL Campus ")

}

//exporting functions & variables outside the module
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth

//How to export function with parameters
exports.Studentgrade=(marks)=>
    {
    if (marks>50 && marks <70) return ("B grade")
    else
    return ("A grade")
    }
