const mongoose = require('mongoose');

const password = 'naAqmmEn2MT7zjna';

const db = `mongodb+srv://saurabhghiya:${password}@cluster-sg-app.qmvohsh.mongodb.net/?retryWrites=true&w=majority`

/* 
incase of errors while connecting replace the connect method with following
mongoose.connect(db,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
*/

mongoose.connect(db).then(()=>{
    console.log('Connection Established');
}).catch((error)=>{
    console.log(error);
})


//Schema
const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    rating:Number,
    isPublished:Boolean,
    publishedDate:{type:Date, default:Date.now}
})

//Model
const Course = mongoose.model('Course',courseSchema);

async function createCourse() {
    const course = new Course({
        name: "Scala",
        creator: "Alex",
        rating: 3.5,
        isPublished: true
    });
    const courseCreated = await course.save();
    console.log(course);
}

// createCourse();

async function getCourse(){
/*     const allCourses = await Course.find({});
    console.log(allCourses); */
    //find using creator name
    // const course1 = await Course.find({creator:'Alex'});
    //find rating > 4
    const course1 = await Course.find({rating:{$lt:4}});
    console.log(course1);
}

// getCourse();

async function updateCourse(id){
    if(!id) return;
    const courseToUpdate = await Course.findById(id);
    console.log(courseToUpdate);
    courseToUpdate.name = 'Python';
    courseToUpdate.creator = 'Carey';

    const updatedCourse = await courseToUpdate.save();
}

// updateCourse('64ee23863bcd2f474ed6a136');

async function deleteCourse(id) {
    const deletedCourse = await Course.findByIdAndDelete(id); 
    console.log(deletedCourse);
}

deleteCourse("64ee23863bcd2f474ed6a136");