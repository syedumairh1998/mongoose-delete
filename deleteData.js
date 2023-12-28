import Student from '../models/Student.js';

const deleteById = async() =>{
    const result = await Student.findByIdAndDelete('658ae8468b8454f46edd90cb');
    console.log(result)
}


const deleteOneDocument = async() =>{
    // const result = await Student.deleteOne();  // delete the first document in a list
    // const result = await Student.deleteOne({age:30});

    console.log(result)
}


export {deleteById,deleteOneDocument}
