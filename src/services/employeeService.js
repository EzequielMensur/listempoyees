const KEYS ={
    employees:'employees',
    employeesId:'employeesId'
}

export const getDepartmentCollection = ()=>([
    {id:'1',title:'Development'},
    {id:'2',title:'Marketing'},
    {id:'3',title:'Accounting'},
    {id:'4',title:'HR'},
])

export function generateEmployeeId() {
    if(localStorage.getItem(KEYS.employeesId)==null)
    localStorage.setItem(KEYS.employeesId, '0')
    var id=parseInt(localStorage.getItem(KEYS.employeesId))
   localStorage.setItem(KEYS.employeesId,(++id).toString())
   return id;
}
export function insertEmployee(data){
    let employees =getAllEmployees();
    data['id']=generateEmployeeId()
    employees.push(data)
    localStorage.setItem('employees', JSON.stringify(employees))
}

export function getAllEmployees(){
    if(localStorage.getItem(KEYS.employees)==null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees= JSON.parse(localStorage.getItem(KEYS.employees));
    let departments =getDepartmentCollection();
     return (employees.map(x=>({
        ...x,
        department : departments[x.departmentId -1].title
    })))
}

export function updateEmployee(data){
    let employees =getAllEmployees();
    let recordIndex = employees.findIndex(x=> x.id ==data.id)
    employees[recordIndex] ={...data}
    employees.push(data) 
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}